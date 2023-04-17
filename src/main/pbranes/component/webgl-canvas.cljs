(ns pbranes.component.webgl-canvas
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]))


(defnc test []
  (d/div "hello test"))

(defnc webgl-canvas-component [main-fn]
  (let [glcanvas (hooks/use-ref nil)]

    (hooks/use-effect [] :once
                      (let [ctx (u/get-webgl-context (.-current glcanvas))]
                        (main-fn ctx)))
       
    (d/canvas {:ref glcanvas :class "glcanvas"} "Sorry! No HTML5 Canvas was found on this page")))
