(ns frontend.core
  (:require [reagent.dom :as rdom]
            [secretary.core :as secretary]
            [pushy.core :as pushy]
            [frontend.app :as app]
            [frontend.ws :as ws]
            [reagent.core :as reagent :refer [atom]]
            [re-frame.core :refer [dispatch-sync reg-event-db reg-event-fx reg-sub subscribe]]
            [cognitect.transit :as t])
  (:import goog.History))

(enable-console-print!)

(reg-event-db
 :initialize
 (fn [_ _]
   {:time (str (js/Date.))}))

(reg-event-db
 :db/set
 (fn [db [_ path value]]
   (assoc-in db path value)))

(reg-sub
 :db/get
 (fn [db [_ path]]
   (get-in db path)))

(reg-event-db
 :db/merge
 (fn [db [_ path value-to-merge]]
   (let [value (get-in db path)
         new-value (merge value value-to-merge)]
     (assoc-in db path new-value))))

(defn start! []
  (dispatch-sync [:initialize])
  (rdom/render [app/view] (.getElementById js/document "app"))
  (ws/connect app/ws-handler))

(pushy/push-state!
 secretary/dispatch!
 (fn [x] (when (secretary/locate-route x) x)))