(ns backend.telegram
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [cljs.core.async.interop :refer [<p!]])
  (:require ["telegram" :as tg]
            ["telegram/sessions" :as session]
            ["input" :as input]
            [backend.ws :as ws]
            ["pikola" :as pikola]
            [macros :refer [safe safe-await]]
            [brave.swords :as x]
            [cljs.core.async.interop :refer-macros [<p!]]
            [cljs.core.async :as async :refer [>! <! put! chan alts! timeout close!]]
            [cognitect.transit :as t]))
