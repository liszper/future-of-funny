(ns backend.ws
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.async.interop :refer [<p!]])
  (:require ["input" :as input]
            ["ws" :as ws]
            ["socket.io" :as sio]
            ["pikola" :as pikola]
            [brave.swords :as x]
            [cljs.reader :refer [read-string]]
            [macros :refer [safe safe-await]]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async :refer [>! <! put! chan alts! timeout close!]]
            [cognitect.transit :as t]))

(set! *warn-on-infer* false)

(defonce server (atom nil))

(defn make-server []
  (new sio/Server
       #js {:cors
            {:origin "http://localhost:3000"
             :methods ["GET" "POST"]
             :allowedHeaders ["my-custom-header"]
             :credentials true}}))

(defn emit [room k v]
  (safe-await
   (.emit (.to @server room)
          k
          (if (string? v)
            v
            (safe (t/write (t/writer :json) v))))))

(defn init [handler]
  (let [io (make-server)]
    (reset! server io)
    (.listen @server 8080)
    (.on @server "connection"
         (fn [^js/Foo.Bar socket]
           (let [id (aget socket "id")
                 handshake (js->clj (aget socket "handshake"))
                 rooms (x/obj->clj (aget socket "rooms"))
                 data (js->clj (aget socket "data"))
                 param {:handshake handshake :rooms rooms :data data :id id}]
             (println "New client: " id)

             ;(println "Handshake: " handshake)

             (.join socket #js ["general"])

             ;(println "Rooms: " rooms)

             ;(println "Data: " data)

             (.on (.-conn socket)
                  "packet" (fn [message]
                             (let [[k v] (safe (read-string (apply str (rest (.-data message)))))
                                   data (safe (t/read (t/reader :json) v))]
                               (case (.-type message)
                                 "message" (handler (assoc param :message data :message-type k))
                                 nil;(println "packet: " (js->clj message))
                                 ))))

             ;(.on socket
             ;     "test" (fn [message] (println (t/read (t/reader :json) message))))

             (.on (.-conn socket)
                  "close" (fn [reason] (println "Close connection: " id)))

             ;(.on (.-conn socket)
             ;     "disconnecting" (fn [reason] (println "disconnecting: " reason)))

             ;(.on (.-conn socket)
             ;     "disconnect" (fn [reason] (println "disconnect: " reason)))
             )))))