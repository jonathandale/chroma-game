(defproject chroma-game "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [reagent "0.5.0"]
                 [re-frame "0.4.1"]]

  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3" :exclusions [cider/cider-nrepl]]
            [lein-less "1.7.5"]]

  :less {:source-paths ["src/less"]
         :target-path "resources/public/css"}

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target" "test/js"]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]

                        :figwheel {:on-jsload "chroma-game.core/mount-root"}

                        :compiler {:main chroma-game.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :foreign-libs [{:file "resources/public/js/chroma.min.js"
                                                   :provides ["chromajs"]}]
                                   :source-map-timestamp true}}

                       {:id "min"
                        :source-paths ["src/cljs"]
                        :compiler {:main chroma-game.core
                                   :output-to "resources/public/js/compiled/app.js"
                                   :foreign-libs [{:file "resources/public/js/chroma.min.js"
                                                   :provides ["chromajs"]}]
                                   :optimizations :advanced
                                   :pretty-print false}}]})
