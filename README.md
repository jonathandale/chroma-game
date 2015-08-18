# chroma-game

A Colour game written in [clojurescript](https://github.com/clojure/clojurescript), using [re-frame](https://github.com/Day8/re-frame).

## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build

```
lein clean
lein cljsbuild once min
```
