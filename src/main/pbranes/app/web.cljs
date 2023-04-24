(ns pbranes.app.web
  (:require [goog.dom :as gdom]
            [helix.core :refer [defnc $]]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as rr]
            [pbranes.page.book.ch01 :as ch01]
            [pbranes.page.book.ch02 :as ch02]
            [pbranes.page.book.ch02-modes :as ch02-modes]))

(defnc layout []
  (d/div {:class "wrapper"}
         (d/header {:class "header"}
                   (d/nav {:class "nav"}
                          ($ rr/Link {:to "/"} "Chapter 01")
                          (d/div
                           ($ rr/Link {:to "/ch02"} "Chapter 02")
                           (d/br)
                           ($ rr/Link {:to "/ch02-modes"} "Modes"))))
         (d/div {:class "main"} ($ rr/Outlet))
         (d/footer {:class "footer"} "footer")))

(defnc router []
  ($ rr/Routes
     ($ rr/Route {:path "/" :element ($ layout)}
        ($ rr/Route {:path "/" :element ($ ch01/page)})
        ($ rr/Route {:path "/ch02" :element ($ ch02/page)})
        ($ rr/Route {:path "/ch02-modes" :element ($ ch02-modes/page)}))))

(defnc app []
  ($ rr/BrowserRouter
     ($ router)))

(defonce root  (rdom/createRoot (gdom/getElement "root")))

(defn ^:dev/after-load init! []
  (.render root ($ app)))
