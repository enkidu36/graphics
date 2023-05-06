(ns pbranes.webgl.utils
  (:require ["dat.gui" :as dg]))

(defn folder? [v]
  (and
   (not (fn? v))
   (or (nil? v) (undefined? v))))

(defn color? [v]
  (or
   (and (string? v) (.includes v "#"))
   (or (list? v) (>= (count v) 3))))

;; A simpler API on top of the dat.GUI API, specifically
;; designed for this book for a simpler codebase
(defn configure-controls [{:keys [name value options on-change] :as settings}]
  (let [gui (.addFolder (dg/GUI.) name)]
    (.onChange (.add gui (clj->js  settings) "options" (clj->js options)) (fn [v] (on-change v)))
    (.open gui)
    gui
    ;;
    )

;;
  )

(defn get-webgl-context [canvas]
  (.getContext canvas "webgl2"))

(defn webgl-support-msg [webgl]
  (if webgl
    "Hooray! You got a webgl context"
    "Sorry! WebGL2 is not available"))

(defn update-clear-color [gl [r g b a]]
  (.clearColor gl r g b a)
  (.clear gl (.-COLOR_BUFFER_BIT gl))
  (.viewport gl 0 0 0 0))

(defn check-key [gl]
  (fn [event]
    (case (.-keyCode event)
      49 (update-clear-color gl [0.2 0.8 0.2 1.0])
      50 (update-clear-color gl [0.2 0.2 0.8 1.0])
      51 (update-clear-color gl [(Math/random) (Math/random) (Math/random) 1.0])
      52 (let [color (vec (.getParameter gl (.-COLOR_CLEAR_VALUE gl)))]
           (js/alert (str "`clearColor = (" (.toFixed (nth color 0) 1) ",  " (.toFixed (get color 1)) ",  " (.toFixed (get color 2) 1) ")`"))
           (js/window.focus))
      :default)))

(defn get-shader [gl source type]
  (let [shader (.createShader gl type)]

    ;; Compile the shader using the supplied shader code
    (.shaderSource gl shader source)
    (.compileShader gl shader)

    ;; Ensure the shader is valid
    (if  (not (.getShaderParameter gl shader (.-COMPILE_STATUS gl)))
      (js/console.log  (.getShaderInfoLog gl shader))
      shader)))

