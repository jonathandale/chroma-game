(ns chroma-game.handlers
    (:require [re-frame.core :refer [register-handler dispatch]]
              [chroma-game.db :as db]
              [chromajs :as chroma]
              [clojure.string :refer [join]])
    (:import [goog.net Jsonp]
             [goog Uri]))


(def colorApiUrl
  (str "http://www.colourlovers.com/api/colors/top?"
       "format=json&"
       "numResults=100&"
       "orderCol=score&"
       "sortBy=DESC&"
       "briRange=4,80"))

(def keycode->direction {37 "from"
                         39 "to"})

; Helpers
(defn jsonp
  [uri success error]
  (let [req (Jsonp. (Uri. uri) "jsonCallback")]
    (.send req nil success error)))


(defn print-colors [colors]
  (map (fn [color]
       (.log js/console (join ", " color))
       (.log js/console "%c           " (str "background: rgb(" (join ", " color) "); font-size: 30px;"))
       color) colors))


; Color helpers
(defn midpoint [basicColors from to]
  (let [weighting (/ (rand-nth (concat (range 70 90) (range 10 30))) 100)]
    {:rgb (mapv (fn [from to]
          (int (+ from (* (- to from) weighting))))
        (nth basicColors from) (nth basicColors to))
     :weighting (if (< weighting 0.5) "from" "to")}))

(defn pick-colors [db]
  (let [basicColors (:colors db)
        from (rand-int (count basicColors))
        to (rand-int (count basicColors))
        midpoint (midpoint basicColors from to)]

    ; (.log js/console
    ;   (Math/abs (-
    ;               (.luminance (.rgb js/chroma (clj->js (nth basicColors from))))
    ;               (.luminance (.rgb js/chroma (clj->js (nth basicColors to)))))))

    {:from (nth basicColors from)
     :to (nth basicColors to)
     :midpoint (:rgb midpoint)
     :weighting (:weighting midpoint)}))

(defn populate-swatches [db]
  (assoc db :swatches (pick-colors db)))

(defn handle-swatch-click [db resp]
  (let [pointType (if (= resp (get-in db [:swatches :weighting])) :pass :fail)]
    (-> (if (:intro? db) (assoc db :intro? false) (update-in db [:points pointType] inc))
        (assoc :swatches (pick-colors db)))))

;; Handlers
(register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(register-handler
  :request-colors
  (fn [db [_ resp]]
    (jsonp colorApiUrl #(dispatch [:handle-color-response %]) #(dispatch [:handle-color-error %]))
   db))

(register-handler
  :handle-color-response
  (fn [db [_ resp]]
    (let [palettes (js->clj resp)
          fullSet (map (fn [palette]
                        (into [] (clj->js (vals (js->clj (.-rgb (clj->js palette))))))
                       ) palettes)]

      (assoc db :colors (into [] fullSet)))))

      ; (->
      ;   (print-colors fullSet)
      ;   (assoc db :colors (into [] fullSet))
      ;   (populate-swatches)))))

(register-handler
  :handle-color-error
  (fn [db [_ resp]]
    ; Do something more useful
    (pr "There was an error retrieving colors!")
    db))

;; View handlers
(register-handler
 :swatch-click
 (fn [db [_ resp]]
    (handle-swatch-click db resp)))


(register-handler
  :key-down
  (fn [db [_ event]]
    (if-let [key (keycode->direction (.-keyCode event))]
      (handle-swatch-click db key) db)))
