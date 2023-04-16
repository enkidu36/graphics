(ns pbranes.page.book.ch01
  (:require [helix.core :refer [defnc <> $] ]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]
            [pbranes.component.webgl-canvas :as canvas]))

(defn main [gl]
   (u/update-clear-color gl [1.0 1.0 1.0 1.0]))

(defn page []
  ($ canvas/ webgl-canvas-component main))
