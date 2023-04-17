(ns pbranes.page.book.ch02
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]))

(defn main [canvas]
  (set! (.-width canvas) (- (.-clientWidth (.-parentNode canvas) ) 60))
  (set! (.-height canvas) (.-clientHeight (.-parentNode canvas))))

(defnc page []
  (let [canvas (hooks/use-ref nil)]

    (hooks/use-effect []
                      :once
                      (set! (.-width canvas) (.-innerWidth js/window))
                      (js/console.log "width" (.-width canvas))
                      (main (.-current canvas) ) )
    (d/canvas {:id "ch02-canvas" :ref canvas :class "canvas" }))  )
