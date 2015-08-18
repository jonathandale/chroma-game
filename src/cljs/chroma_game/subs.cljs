(ns chroma-game.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :refer [register-sub]]))

(register-sub
 :intro?
 (fn [db]
   (reaction (:intro? @db))))

(register-sub
 :points
 (fn [db]
   (reaction (:points @db))))

(register-sub
 :colors
 (fn [db]
   (reaction (:colors @db))))

(register-sub
 :swatches
 (fn [db]
   (reaction (:swatches @db))))
