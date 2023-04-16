(ns pbranes.page.book.ch01
  (:require [helix.core :refer [defnc <> $] ]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc page []
  (let [glcanvas (hooks/use-ref nil)
        paragraph (hooks/use-ref nil)]

    (hooks/use-effect [] :once
                      (let [canvas (.-current glcanvas)
                                 ctx (.getContext canvas "webgl")
                                 check-text (if (instance? js/WebGLRenderingContext ctx)
                                              "Congrats! Your browser suports WebGL"
                                              "Failed. Your browser does not support WebGL")]
                        (set! (.. paragraph -current -textContent) check-text)))
    (<>
     (d/div {:class "webgl-support-msg"}
            (d/p {:ref paragraph} "[ Here would go the results of WebGL feature detection ]"))
     (d/canvas {:ref glcanvas :class "glcanvas"} "Your browser does not support canvas"))))
