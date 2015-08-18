// Compiled by ClojureScript 0.0-3211 {}
goog.provide('chroma_game.handlers');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('chromajs');
goog.require('chroma_game.db');
goog.require('re_frame.core');
chroma_game.handlers.colorApiUrl = [cljs.core.str("http://www.colourlovers.com/api/colors/top?"),cljs.core.str("format=json&"),cljs.core.str("numResults=100&"),cljs.core.str("orderCol=score&"),cljs.core.str("sortBy=DESC&"),cljs.core.str("briRange=4,80")].join('');
chroma_game.handlers.keycode__GT_direction = new cljs.core.PersistentArrayMap(null, 2, [(37),"from",(39),"to"], null);
chroma_game.handlers.jsonp = (function chroma_game$handlers$jsonp(uri,success,error){
var req = (new goog.net.Jsonp((new goog.Uri(uri)),"jsonCallback"));
return req.send(null,success,error);
});
chroma_game.handlers.print_colors = (function chroma_game$handlers$print_colors(colors){
return cljs.core.map.call(null,(function (color){
console.log(clojure.string.join.call(null,", ",color));

console.log("%c           ",[cljs.core.str("background: rgb("),cljs.core.str(clojure.string.join.call(null,", ",color)),cljs.core.str("); font-size: 30px;")].join(''));

return color;
}),colors);
});
chroma_game.handlers.midpoint = (function chroma_game$handlers$midpoint(basicColors,from,to){
var weighting = (cljs.core.rand_nth.call(null,cljs.core.concat.call(null,cljs.core.range.call(null,(70),(90)),cljs.core.range.call(null,(10),(30)))) / (100));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rgb","rgb",1432123467),cljs.core.mapv.call(null,((function (weighting){
return (function (from__$1,to__$1){
return ((from__$1 + ((to__$1 - from__$1) * weighting)) | (0));
});})(weighting))
,cljs.core.nth.call(null,basicColors,from),cljs.core.nth.call(null,basicColors,to)),new cljs.core.Keyword(null,"weighting","weighting",-1298935697),(((weighting < 0.5))?"from":"to")], null);
});
chroma_game.handlers.pick_colors = (function chroma_game$handlers$pick_colors(db){
var basicColors = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(db);
var from = cljs.core.rand_int.call(null,cljs.core.count.call(null,basicColors));
var to = cljs.core.rand_int.call(null,cljs.core.count.call(null,basicColors));
var midpoint = chroma_game.handlers.midpoint.call(null,basicColors,from,to);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),cljs.core.nth.call(null,basicColors,from),new cljs.core.Keyword(null,"to","to",192099007),cljs.core.nth.call(null,basicColors,to),new cljs.core.Keyword(null,"midpoint","midpoint",-36269525),new cljs.core.Keyword(null,"rgb","rgb",1432123467).cljs$core$IFn$_invoke$arity$1(midpoint),new cljs.core.Keyword(null,"weighting","weighting",-1298935697),new cljs.core.Keyword(null,"weighting","weighting",-1298935697).cljs$core$IFn$_invoke$arity$1(midpoint)], null);
});
chroma_game.handlers.populate_swatches = (function chroma_game$handlers$populate_swatches(db){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"swatches","swatches",2033601707),chroma_game.handlers.pick_colors.call(null,db));
});
chroma_game.handlers.handle_swatch_click = (function chroma_game$handlers$handle_swatch_click(db,resp){
var pointType = ((cljs.core._EQ_.call(null,resp,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"swatches","swatches",2033601707),new cljs.core.Keyword(null,"weighting","weighting",-1298935697)], null))))?new cljs.core.Keyword(null,"pass","pass",1574159993):new cljs.core.Keyword(null,"fail","fail",1706214930));
return cljs.core.assoc.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"intro?","intro?",40624851).cljs$core$IFn$_invoke$arity$1(db))?cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"intro?","intro?",40624851),false):cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),pointType], null),cljs.core.inc)),new cljs.core.Keyword(null,"swatches","swatches",2033601707),chroma_game.handlers.pick_colors.call(null,db));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return chroma_game.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"request-colors","request-colors",413570571),(function (db,p__21284){
var vec__21285 = p__21284;
var _ = cljs.core.nth.call(null,vec__21285,(0),null);
var resp = cljs.core.nth.call(null,vec__21285,(1),null);
chroma_game.handlers.jsonp.call(null,chroma_game.handlers.colorApiUrl,((function (vec__21285,_,resp){
return (function (p1__21282_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-color-response","handle-color-response",1510983306),p1__21282_SHARP_], null));
});})(vec__21285,_,resp))
,((function (vec__21285,_,resp){
return (function (p1__21283_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handle-color-error","handle-color-error",-1470443983),p1__21283_SHARP_], null));
});})(vec__21285,_,resp))
);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-color-response","handle-color-response",1510983306),(function (db,p__21286){
var vec__21287 = p__21286;
var _ = cljs.core.nth.call(null,vec__21287,(0),null);
var resp = cljs.core.nth.call(null,vec__21287,(1),null);
var palettes = cljs.core.js__GT_clj.call(null,resp);
var fullSet = cljs.core.map.call(null,((function (palettes,vec__21287,_,resp){
return (function (palette){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,palette).rgb))));
});})(palettes,vec__21287,_,resp))
,palettes);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"colors","colors",1157174732),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,fullSet));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"handle-color-error","handle-color-error",-1470443983),(function (db,p__21288){
var vec__21289 = p__21288;
var _ = cljs.core.nth.call(null,vec__21289,(0),null);
var resp = cljs.core.nth.call(null,vec__21289,(1),null);
cljs.core.pr.call(null,"There was an error retrieving colors!");

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"swatch-click","swatch-click",1950044873),(function (db,p__21290){
var vec__21291 = p__21290;
var _ = cljs.core.nth.call(null,vec__21291,(0),null);
var resp = cljs.core.nth.call(null,vec__21291,(1),null);
return chroma_game.handlers.handle_swatch_click.call(null,db,resp);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"key-down","key-down",998681515),(function (db,p__21292){
var vec__21293 = p__21292;
var _ = cljs.core.nth.call(null,vec__21293,(0),null);
var event = cljs.core.nth.call(null,vec__21293,(1),null);
var temp__4124__auto__ = chroma_game.handlers.keycode__GT_direction.call(null,event.keyCode);
if(cljs.core.truth_(temp__4124__auto__)){
var key = temp__4124__auto__;
return chroma_game.handlers.handle_swatch_click.call(null,db,key);
} else {
return db;
}
}));

//# sourceMappingURL=handlers.js.map?rel=1439903675085