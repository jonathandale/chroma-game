// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('chroma_game.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21257__delegate = function (x){
if(cljs.core.truth_(chroma_game.core.mount_root)){
return cljs.core.apply.call(null,chroma_game.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'chroma-game.core/mount-root' is missing");
}
};
var G__21257 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21258__i = 0, G__21258__a = new Array(arguments.length -  0);
while (G__21258__i < G__21258__a.length) {G__21258__a[G__21258__i] = arguments[G__21258__i + 0]; ++G__21258__i;}
  x = new cljs.core.IndexedSeq(G__21258__a,0);
} 
return G__21257__delegate.call(this,x);};
G__21257.cljs$lang$maxFixedArity = 0;
G__21257.cljs$lang$applyTo = (function (arglist__21259){
var x = cljs.core.seq(arglist__21259);
return G__21257__delegate(x);
});
G__21257.cljs$core$IFn$_invoke$arity$variadic = G__21257__delegate;
return G__21257;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1439895464395