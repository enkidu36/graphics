(ns pbranes.webgl.utils)

(defn get-webgl-context [canvas]
  (.getContext canvas "webgl2"))

(defn webgl-support-msg[webgl]
  (if webgl
    "Hooray! You got a webgl context"
    "Sorry! WebGL2 is not available"))
