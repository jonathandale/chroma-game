(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [chroma-game.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/chroma-game.core.mount-root (apply js/chroma-game.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'chroma-game.core/mount-root' is missing"))), :build-id "dev"})

