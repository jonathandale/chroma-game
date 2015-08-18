// Compiled by ClojureScript 0.0-3211 {}
goog.provide('chroma_game.views');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('re_frame.core');
chroma_game.views.printRgb = (function chroma_game$views$printRgb(rgb){
return [cljs.core.str("rgb("),cljs.core.str(clojure.string.join.call(null,", ",rgb)),cljs.core.str(")")].join('');
});
chroma_game.views.color_swatches = (function chroma_game$views$color_swatches(){
var swatches = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swatches","swatches",2033601707)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swatch-background","div.swatch-background",-1957184467),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chroma_game.views.printRgb.call(null,cljs.core.deref.call(null,swatches).call(null,new cljs.core.Keyword(null,"midpoint","midpoint",-36269525)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.colorFrom","div.colorFrom",-919433238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (swatches){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swatch-click","swatch-click",1950044873),"from"], null));
});})(swatches))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chroma_game.views.printRgb.call(null,cljs.core.deref.call(null,swatches).call(null,new cljs.core.Keyword(null,"from","from",1815293044)))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.colorTo","div.colorTo",312866667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (swatches){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swatch-click","swatch-click",1950044873),"to"], null));
});})(swatches))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chroma_game.views.printRgb.call(null,cljs.core.deref.call(null,swatches).call(null,new cljs.core.Keyword(null,"to","to",192099007)))], null)], null)], null)], null);
});
chroma_game.views.intro_panel = (function chroma_game$views$intro_panel(){
var intro_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro?","intro?",40624851)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.intro","div.intro",1937098677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,intro_QMARK_))?null:"hidden")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Chroma"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"A color game"], null)], null);
});
chroma_game.views.score_panel = (function chroma_game$views$score_panel(){
var points = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883)], null));
var intro_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"intro?","intro?",40624851)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-display","div.game-display",838584412),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref.call(null,intro_QMARK_))?"hidden":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#right","p#right",151134997),"Right: ",cljs.core.deref.call(null,points).call(null,new cljs.core.Keyword(null,"pass","pass",1574159993))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p#wrong","p#wrong",627376082),"Wrong: ",cljs.core.deref.call(null,points).call(null,new cljs.core.Keyword(null,"fail","fail",1706214930))], null)], null);
});
chroma_game.views.main_panel = (function chroma_game$views$main_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),chroma_game.views.intro_panel.call(null),chroma_game.views.score_panel.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.swatches","div.swatches",572539470),chroma_game.views.color_swatches.call(null)], null)], null);
});
});
chroma_game.views.footer_panel = (function chroma_game$views$footer_panel(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.about","p.about",-1440933577),"Made by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://j-d.co"], null),"Jon Dale"], null)," with ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/clojure/clojurescript"], null),"Clojurescript"], null)," and hosted by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/"], null),"Github"], null),"."], null);
});

//# sourceMappingURL=views.js.map?rel=1439903696261