(ns pbranes.webgl.utils)

(defn get-webgl-context [canvas]
  (.getContext canvas "webgl2"))

(defn webgl-support-msg[webgl]
  (if webgl
    "Hooray! You got a webgl context"
    "Sorry! WebGL2 is not available"))

(defn update-clear-color [gl [r g b a]]
   (.clearColor gl r g b a)
  (.clear gl (.-COLOR_BUFFER_BIT gl))
 (.viewport gl 0 0 0 0) )

(defn check-key [gl]
  (js/console.log (Math/random))
  (fn [event]
    (case (.-keyCode event)
      49 (update-clear-color gl [0.2 0.8 0.2 1.0])
      50 (update-clear-color gl [0.2 0.2 0.8 1.0])
      51 (update-clear-color gl [(Math/random) (Math/random) (Math/random) 1.0])
      52 (let [color (vec (.getParameter gl (.-COLOR_CLEAR_VALUE gl)))]
           (js/alert (str "`clearColor = ("(.toFixed (nth color 0) 1) ",  " (.toFixed (get color 1)) ",  " (.toFixed (get color 2) 1) ")`"))
           (js/window.focus))
      :default
      )))

