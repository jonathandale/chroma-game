// Compiled by ClojureScript 0.0-3211 {}
goog.provide('chroma_game.core');
goog.require('cljs.core');
goog.require('chroma_game.views');
goog.require('chroma_game.subs');
goog.require('chroma_game.handlers');
goog.require('re_frame.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
chroma_game.core.mount_root = (function chroma_game$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chroma_game.views.main_panel], null),document.getElementById("app"));
});
chroma_game.core.init = (function chroma_game$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-colors","request-colors",413570571)], null));

chroma_game.core.mount_root.call(null);

return window.addEventListener("keydown",(function (p1__21217_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-down","key-down",998681515),p1__21217_SHARP_], null));
}));
});
goog.exportSymbol('chroma_game.core.init', chroma_game.core.init);

//# sourceMappingURL=core.js.map?rel=1439895463694