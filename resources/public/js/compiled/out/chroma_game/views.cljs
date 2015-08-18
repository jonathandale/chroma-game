(ns chroma-game.views
    (:require [re-frame.core :refer [dispatch subscribe]]
              [clojure.string :refer [join]]))

;;Helpers
(defn printRgb [rgb]
  (str "rgb(" (join ", " rgb) ")"))

;; Color swatches
(defn color-swatches []
  (let [swatches (subscribe [:swatches])]
      [:div.swatch-background {:style {:background-color (printRgb (@swatches :midpoint))}}
        [:div.colorFrom {:on-click #(dispatch [:swatch-click "from"])
                         :style {:background-color (printRgb (@swatches :from))}}]
        [:div.colorTo {:on-click #(dispatch [:swatch-click "to"])
                       :style {:background-color (printRgb (@swatches :to))}}]]))


;; Intro screen
(defn intro-panel []
  (let [intro? (subscribe [:intro?])]
      [:div.intro {:class (when-not @intro? "hidden")}
        [:h1 "Chroma"]
        [:p "A color game"]]))

;; Scores
(defn score-panel []
  (let [points (subscribe [:points])
        intro? (subscribe [:intro?])]
    [:div.game-display {:class (when @intro? "hidden")}
      [:p#right "Right: " (@points :pass)]
      [:p#wrong "Wrong: " (@points :fail)]]))

; (when-not @intro?

;; Main layout
(defn main-panel []
  (fn []
    [:div
      [:header
        (intro-panel)
        (score-panel)]
      [:div.swatches (color-swatches)]]))

(defn footer-panel []
    [:p.about "Made by "
      [:a {:href "http://j-d.co"} "Jon Dale"]
      " with "
      [:a {:href "https://github.com/clojure/clojurescript"} "Clojurescript"]
      " and hosted by "
      [:a {:href "https://github.com/"} "Github"]
      "."])
