(ns macros)

(defmacro safe
  [& body]
  `(try ~@body
        (catch js/Error e# (println "Error: " e#;(ex-cause e#)
                                    ))))

(defmacro safe-await
  [& body]
  `(cljs.core.async.macros/go
     (try (cljs.core.async.interop/<p! ~@body)
          (catch js/Error e# (println "Async Error: " e#;(ex-cause e#)
                                      )))))


