(ns pbranes.page.book.ch01
  (:require [helix.core :refer [defnc <> $] ]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]))

(defn main [gl]
  
  )

(defnc page []
  (let [glcanvas (hooks/use-ref nil)
        paragraph (hooks/use-ref nil)]

    (hooks/use-effect [] :once
                      (let [ctx (u/get-webgl-context (.-current glcanvas))
                                ]
                        (set! (.. paragraph -current -textContent) (u/webgl-support-msg ctx))))
    (<>
     (d/div {:class "webgl-support-msg"}
            (d/p {:ref paragraph} "[ Here would go the results of WebGL feature detection ]"))
     (d/canvas {:ref glcanvas :class "glcanvas"} "Your browser does not support canvas"))))
