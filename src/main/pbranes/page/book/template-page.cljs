(ns pbranes.page.book.ch02-modes
 (:require [helix.core :refer [defnc <> $]]
  [helix.dom :as d]
  [helix.hooks :as hooks]
  [pbranes.webgl.utils :as u])J)

(set! *warn-on-infer* false)

(defn main [canvas]
;;  (set! (.-width canvas) (- (.. -parentNode -clientWidth canvas) 60))
;;  (set! (.-height canvas) (.. -parentNode -clientHeight))
  ;; (let [gl (u/get-webgl-context canvas)])
  ;;
  )

(defnc page []
  (let [canvas (hooks/use-ref nil)]

    (hooks/use-effect []
      :once
      ;; (set! (.-width canvas) (.-innerWidth js/window))
      ;; (main (.-current canvas)))
      )
(d/div "hello template page")))
