
(ns pbranes.page.book.ch01
  (:require [helix.core :refer [defnc <> $] ]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [pbranes.webgl.utils :as u]))

(defn main [gl]
   (u/update-clear-color gl [1.0 1.0 1.0 1.0]))

(defnc page []
  (let [glcanvas (hooks/use-ref nil)
        paragraph (hooks/use-ref nil)]

    (hooks/use-effect [] :once
                      (let [ctx (u/get-webgl-context (.-current glcanvas))]
                        (set! (.. paragraph -current -textContent) (u/webgl-support-msg ctx))
                        (main ctx)
                        (js/window.addEventListener "keydown" (u/check-key ctx))
                        (fn unmount []
                          (js/window.removeEventListener "keydown" (fn [e] (js/console.log "remove keydown listen"))))))
       
    (<>
     (d/div "hi hello")
     (d/div {:class "webgl-support-msg"}
            (d/p {:ref paragraph} "[ Here would go the results of WebGL feature detection ]"))
     (d/canvas {:id "ch01-canvas" :ref glcanvas :class "glcanvas"} "Sorry! No HTML5 Canvas was found on this page"))))


