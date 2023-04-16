
(ns backend.server
  (:require ["express" :as express]
            ["node-telegram-bot-api" :as TG]
            ["stability-client" :as SD]
            [macros :refer [safe safe-await]]
            [backend.handlers :as handlers]
            [backend.ws :as ws]
            [brave.swords :as x]
            [config   :refer [port]]))

(set! *warn-on-infer* false)

(defonce server (atom nil))
(defonce bot (atom nil))

(def router
  {"/"      handlers/index})

(defn generate-get-route [app route handler]
  ;; Like (app.get("/" function(req, res))
  (.get app route handler))


(defn start-server []
  (let [app (express)]
    (doseq [[route handler] router]
      (generate-get-route app route handler))
    (.use app (express/static "resources/frontend"))
    (.listen app port (fn [] (println "Port: " port)))))

(defn ^:dev/before-load stop! []
  (when @server (.close @server)))


(defonce players (atom {}))

(defn ^:dev/after-load start! []
  (println "Code updating..")

  (let [bot (safe (new TG "6081018411:AAG-awVqAMyRI24dOiCpveDcgNvmCOPUVtg" #js {:polling true}))
        send! (fn [to what]
                (do
                  (.sendMessage bot to what)
                  (println "message to: " to)
                  (println "message what: " what)))]
    (.on
     bot
     "message"
     (fn [msg]
       (let [message (update (update (x/obj->clj msg) "from" x/obj->clj) "chat" x/obj->clj)
             message (if (get-in message ["reply_to_message"])
                       (update-in
                        (update-in
                         (update message "reply_to_message" x/obj->clj)
                         ["reply_to_message" "from"] x/obj->clj)
                        ["reply_to_message" "chat"] x/obj->clj) message)
             player-id (get-in message ["from" "id"])
             reply-id (get-in message ["reply_to_message" "from" "id"])
             reply-username (get-in message ["reply_to_message" "from" "username"])

             player (get-in message ["from" "username"])
             is-bot? (get-in message ["from" "is_bot"])
             chat-id (get-in message ["chat" "id"])
             chat-title (if (= (get-in message ["chat" "type"]) "private") "Private" (get-in message ["chat" "title"]))
             message (update (update message "from" dissoc "is_bot" "is_premium") "chat" dissoc "all_members_are_administrators" "type" "title")
             _ (when-not is-bot?
                 (if (get-in @players [player "name"])
                   (swap! players update-in [player "messages" (if (= chat-id player-id) "private" chat-id) "content"] conj (dissoc message "chat" "from"))
                   (swap! players x/deep-merge {player {"id" player-id
                                                        "name" player
                                                        "registered" (get message "date")
                                                        "nickname" (get-in message ["from" "first_name"])
                                                        "lang" (get-in message ["from" "language_code"])
                                                        "messages" {(if (= chat-id player-id) "private" chat-id)
                                                                    (if (= chat-id player-id)
                                                                      {"started" (get message "date")
                                                                       "content" [(dissoc message "chat" "from")]}
                                                                      {"title" chat-title
                                                                       "started" (get message "date")
                                                                       "content" [(dissoc message "chat" "from")]})}}})))
             raw-prompt (get-in message ["text"])

             prompt (clojure.string/lower-case (get-in message ["text"]))]

         ;(println "chat: " (.then (.getChat bot chat-id)
         ;                         #(js/console.log %)))

         (cond
           (clojure.string/includes? prompt "joke")
           (do
             (.sendMessage bot chat-id (str "Haha. that was funny!"))
             (swap! players update-in [player "points" "funny"] inc)
             (.sendMessage bot chat-id (str player "'s current funny points: " (get-in @players [player "points" "funny"]))))

           (and (get message "reply_to_message")
                (or
                 (clojure.string/includes? prompt "haha")
                 (clojure.string/includes? prompt "hihi")
                 (clojure.string/includes? prompt "lol")
                 (clojure.string/includes? prompt "lmao")))
           (do
             (.sendMessage bot reply-id (str player " liked your joke, " (get-in message ["reply_to_message" "from" "username"]) "!"))
             (if (get-in @players [reply-username "points" "funny"])
               (swap! players update-in [reply-username "points" "funny"] inc)
               (swap! players assoc-in [reply-username "points" "funny"] 1))
             (send! reply-id (str "Your current funny points: " (apply str (repeat (get-in @players [reply-username "points" "funny"]) "😆")))))

           (and (get message "reply_to_message")
                (clojure.string/includes? prompt "kudos"))
           (do
             (.sendMessage bot reply-id (str player " appreciates you, " (get-in message ["reply_to_message" "from" "username"]) "!"))
             (if (get-in @players [reply-username "points" "kudos"])
               (swap! players update-in [reply-username "points" "kudos"] inc)
               (swap! players assoc-in [reply-username "points" "kudos"] 1))
             (send! reply-id (str "Your current kudos points: " (apply str (repeat (get-in @players [reply-username "points" "kudos"]) "🚀")))))

           (and
            (or
             (clojure.string/includes? prompt "haha")
             (clojure.string/includes? prompt "hihi")
             (clojure.string/includes? prompt "lol")
             (clojure.string/includes? prompt "lmao"))
            (clojure.string/includes? prompt "@"))
           (doseq [person (mapv #(apply str %) (mapv rest (vec (re-seq #"\B\@\w+" raw-prompt))))]
             (let [person-id (get-in @players [person "id"])]
               (.sendMessage bot person-id (str player " liked your joke, " (get-in message ["reply_to_message" "from" "username"]) "!"))
               (if (get-in @players [person "points" "funny"])
                 (swap! players update-in [person "points" "funny"] inc)
                 (swap! players assoc-in [person "points" "funny"] 1))
               (send! person-id (str "Your current funny points: " (apply str (repeat (get-in @players [person "points" "funny"]) "😆"))))))

           (and
            (clojure.string/includes? prompt "kudos")
            (clojure.string/includes? prompt "@"))
           (let [image-generation   (.then
                                     (safe (SD/generateAsync
                                            #js {:prompt raw-prompt
                                                 ;:engine "stable-diffusion-512-v2-1"
                                                 :apiKey "sk-8EDz4BSQ54XE5aHlVaYIWTLslgjzT5wBNtUpkfSiBYuwrP7r"}))
                                     (fn [res] (let []
                                                 (println (safe-await
                                                           (.sendPhoto bot chat-id
                                                                       (get (x/obj->clj (get-in (x/obj->clj res) ["images" 0])) "filePath")
                                                                       #js {:caption (str "From " player ", with love!")}))))))]

             (doseq [person (mapv #(apply str %) (mapv rest (vec (re-seq #"\B\@\w+" raw-prompt))))]
               (let [person-id (get-in @players [person "id"])]
                 (println "kudos to" person)
                 (.sendMessage bot person-id (str player " appreciates you, " person "!"))
                 (if (get-in @players [person "points" "kudos"])
                   (swap! players update-in [person "points" "kudos"] inc)
                   (swap! players assoc-in [person "points" "kudos"] 1))
                 (send! person-id (str "Your current kudos points: " (apply str (repeat (get-in @players [person "points" "kudos"]) "🚀")))))))


           :else nil)


         (js/console.log (clj->js @players))


         (when (= prompt "/test234") (println (safe-await (.sendMessage bot chat-id
                                                                        (str "test")
                                                                        #js {:reply_markup
                                                                             (.stringify
                                                                              js/JSON
                                                                              #js {:keyboard
                                                                                   #js [#js [#js {:text "Level 1"}]
                                                                                        #js [#js {:text "Level 2"}]
                                                                                        #js [#js {:text "Level 3"}]
                                                                                        #js [#js {:text "Level 4"}]
                                                                                        #js [#js {:text "Level 5"}]
                                                                                        #js [#js {:text "Level 6"}]
                                                                                        #js [#js {:text "Level 7"}]]})}))))


         (when (= prompt "/inline234")
           (println
            (safe-await
             (.sendMessage
              bot chat-id
              (str "test")
              #js {:reply_markup
                   (.stringify
                    js/JSON
                    #js {:one_time_keyboard true
                         :inline_keyboard
                         #js [#js [#js {:text "Brainstorm with peers" :callback_data "brainstorm"}]
                              #js [#js {:text "Grow your team" :callback_data "growyouteam"}]
                              #js [#js {:text "Start a company" :callback_data "startup"}]
                              #js [#js {:text "Business development" :callback_data "bizdev"}]
                              #js [#js {:text "Invest" :callback_data "invest"}]
                              #js [#js {:text "Explore new projects" :callback_data "explore"}]
                              #js [#js {:text "Mentor others" :callback_data "mentor"}]
                              #js [#js {:text "Organize events" :callback_data "organizeevents"}]
                              #js [#js {:text "Raise funding" :callback_data "raise"}]
                              #js [#js {:text "Find a cofounder" :callback_data "cofounder"}]
                              #js [#js {:text "Meet interesting people" :callback_data "meet"}]
                              #js [#js {:text "Find a job" :callback_data "findajob"}]]})}))))

         ;(.sendMessage bot chat-id (str message))
         ;(.sendMessage bot chat-id (str @players))
         )))
    (.on
     bot
     "inline_query"
     (fn [data]
       (let []
         (println "INLINE QUERY ARRIVED"))))
    (.on
     bot
     "callback_query"
     (fn [data]
       (let []
         (println (safe-await (.answerCallbackQuery bot #js {:callback_query_id (get (x/obj->clj data) "id") :text "oki level 1"})))))))





  (if @server
    (.listen @server port (fn [] (println "Port: " port)))
    (reset! server (start-server)))
  (println "Code updated."))



