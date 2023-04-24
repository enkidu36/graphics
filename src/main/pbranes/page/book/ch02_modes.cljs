(ns pbranes.page.book.ch02-modes
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            ["dat.gui" :as gui]
            [pbranes.webgl.utils :as u]))

(set! *warn-on-infer* false)


(def rendering-mode (atom  "TRIANGES"))
(def rendering-mode-opts  [
                          "TRIANGLES"
                          "LINES"
                          "POINTS"
                          "LINE_LOOP"
                          "LINE_STRIP"
                          "TRIANGLE_STRIP"
                          "TRIANGLE_FAN"])
(def settings    {
                :name "Rendering Mode"
                :value @rendering-mode
                :options rendering-mode-opts
                :on-change (fn [v] (reset! rendering-mode v))  } )

(defn init-controls []
  ;; A wrapper around dat.GUI interface for a simpler API
  ;; for the purpose of this book
  ;;  (js/utils.renderingModeControls @rendering-mode)
  (let [ controls (u/configure-controls settings)]
    controls)
  ;;
  )

(defn render [gl]
  (js/requestAnimationFrame (render gl) ))

(defn init [canvas]
  (set! (.-width canvas) (- (.-clientWidth (.-parentNode canvas)) 60))
  (set! (.-height canvas) (.-clientHeight (.-parentNode canvas)))
  (let [gl (u/get-webgl-context canvas)]

    ;; Call the functions in an appropriate order
    ;; (init-program gl)
    ;; (init-buffers gl)
    ;; (render)
    (init-controls)))

(defnc page []
  (let [canvas (hooks/use-ref nil)]

    (hooks/use-effect [rendering-mode]
      :always
      (init (.-current canvas)))

    (d/canvas {:id "mode-cvs" :ref canvas :class "canvas"} )))
