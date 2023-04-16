(ns frontend.ws
  (:require [reagent.core :as reagent :refer [atom]]
            [cognitect.transit :as t]
            ["@chakra-ui/react" :as ui]
            [cljs.reader :refer [read-string]]
            [macros :refer [safe safe-await]]
            ["socket.io-client" :as io]))

(set! *warn-on-infer* false)

(def manager (atom nil))

(def socket (atom nil))

(defn send! [k v]
  (.emit @socket k (t/write (t/writer :json) v)))

(defn connect [handler]
  (reset! manager (new io/Manager "ws://localhost:8080"))
  (reset! socket (.socket @manager "/"))
  (.open @manager (fn [err] (if err (println "Error: " err) (println "Successful websocket connection."))))
  (.on @socket "connect"
       (fn []
         (let []
           (.on (.. @socket -io -engine)
                "packet"
                (fn [message]
                  (let [[k v] (safe (read-string (apply str (rest (.-data message)))))
                        data (safe (t/read (t/reader :json) v))]
                    (case (.-type message)
                      "message" (handler {:message data :message-type k})
                      (println "packet: " (js->clj message))))))))))