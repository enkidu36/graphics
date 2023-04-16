(ns pbranes.app.web
  (:require [goog.dom :as gdom]
            [helix.core :refer [defnc $]]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as rr]
            [pbranes.page.book.ch01 :as ch1]))

(defnc layout []
  (d/div {:class "wrapper"}
         (d/header {:class "header"}
                   (d/nav {:class "nav"}
                          ($ rr/Link {:to "/"} "Chapter 01") ))
        (d/div {:class "main"} ($ rr/Outlet))
         (d/footer {:class "footer"} "footer")))

(defnc router []
  ($ rr/Routes
     ($ rr/Route {:path "/" :element ($ layout)}
        ($ rr/Route {:path "/" :element ($ ch1/page)}))))

(defnc app []
  ($ rr/BrowserRouter
     ($ router)))

(defonce root  (rdom/createRoot (gdom/getElement "root")))

(defn ^:dev/after-load init! []
  (.render root ($ app)))
