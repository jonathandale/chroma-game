// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29398_SHARP_,p2__29399_SHARP_){
var and__18109__auto__ = p1__29398_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__29399_SHARP_;
} else {
return and__18109__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18121__auto__){
return or__18121__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18121__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18121__auto__){
return or__18121__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18121__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29400){
var map__29401 = p__29400;
var map__29401__$1 = ((cljs.core.seq_QMARK_.call(null,map__29401))?cljs.core.apply.call(null,cljs.core.hash_map,map__29401):map__29401);
var file = cljs.core.get.call(null,map__29401__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29402){
var map__29403 = p__29402;
var map__29403__$1 = ((cljs.core.seq_QMARK_.call(null,map__29403))?cljs.core.apply.call(null,cljs.core.hash_map,map__29403):map__29403);
var namespace = cljs.core.get.call(null,map__29403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29404){if((e29404 instanceof Error)){
var e = e29404;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29404;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__29406 = arguments.length;
switch (G__29406) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29408,callback){
var map__29410 = p__29408;
var map__29410__$1 = ((cljs.core.seq_QMARK_.call(null,map__29410))?cljs.core.apply.call(null,cljs.core.hash_map,map__29410):map__29410);
var file_msg = map__29410__$1;
var request_url = cljs.core.get.call(null,map__29410__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29410,map__29410__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29410,map__29410__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29411){
var map__29413 = p__29411;
var map__29413__$1 = ((cljs.core.seq_QMARK_.call(null,map__29413))?cljs.core.apply.call(null,cljs.core.hash_map,map__29413):map__29413);
var file_msg = map__29413__$1;
var meta_data = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18121__auto__ = meta_data;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18109__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18109__auto__){
var or__18121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto____$1)){
return or__18121__auto____$1;
} else {
var and__18109__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18109__auto____$1){
var or__18121__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18121__auto____$2){
return or__18121__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18109__auto____$1;
}
}
}
} else {
return and__18109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29414,callback){
var map__29416 = p__29414;
var map__29416__$1 = ((cljs.core.seq_QMARK_.call(null,map__29416))?cljs.core.apply.call(null,cljs.core.hash_map,map__29416):map__29416);
var file_msg = map__29416__$1;
var namespace = cljs.core.get.call(null,map__29416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29416__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21345__auto___29503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___29503,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___29503,out){
return (function (state_29485){
var state_val_29486 = (state_29485[(1)]);
if((state_val_29486 === (7))){
var inst_29469 = (state_29485[(7)]);
var inst_29475 = (state_29485[(2)]);
var inst_29476 = cljs.core.async.put_BANG_.call(null,out,inst_29475);
var inst_29465 = inst_29469;
var state_29485__$1 = (function (){var statearr_29487 = state_29485;
(statearr_29487[(8)] = inst_29465);

(statearr_29487[(9)] = inst_29476);

return statearr_29487;
})();
var statearr_29488_29504 = state_29485__$1;
(statearr_29488_29504[(2)] = null);

(statearr_29488_29504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29486 === (6))){
var inst_29481 = (state_29485[(2)]);
var state_29485__$1 = state_29485;
var statearr_29489_29505 = state_29485__$1;
(statearr_29489_29505[(2)] = inst_29481);

(statearr_29489_29505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29486 === (5))){
var inst_29479 = cljs.core.async.close_BANG_.call(null,out);
var state_29485__$1 = state_29485;
var statearr_29490_29506 = state_29485__$1;
(statearr_29490_29506[(2)] = inst_29479);

(statearr_29490_29506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29486 === (4))){
var inst_29468 = (state_29485[(10)]);
var inst_29473 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29468);
var state_29485__$1 = state_29485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29485__$1,(7),inst_29473);
} else {
if((state_val_29486 === (3))){
var inst_29483 = (state_29485[(2)]);
var state_29485__$1 = state_29485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29485__$1,inst_29483);
} else {
if((state_val_29486 === (2))){
var inst_29468 = (state_29485[(10)]);
var inst_29465 = (state_29485[(8)]);
var inst_29468__$1 = cljs.core.nth.call(null,inst_29465,(0),null);
var inst_29469 = cljs.core.nthnext.call(null,inst_29465,(1));
var inst_29470 = (inst_29468__$1 == null);
var inst_29471 = cljs.core.not.call(null,inst_29470);
var state_29485__$1 = (function (){var statearr_29491 = state_29485;
(statearr_29491[(10)] = inst_29468__$1);

(statearr_29491[(7)] = inst_29469);

return statearr_29491;
})();
if(inst_29471){
var statearr_29492_29507 = state_29485__$1;
(statearr_29492_29507[(1)] = (4));

} else {
var statearr_29493_29508 = state_29485__$1;
(statearr_29493_29508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29486 === (1))){
var inst_29463 = cljs.core.nth.call(null,files,(0),null);
var inst_29464 = cljs.core.nthnext.call(null,files,(1));
var inst_29465 = files;
var state_29485__$1 = (function (){var statearr_29494 = state_29485;
(statearr_29494[(8)] = inst_29465);

(statearr_29494[(11)] = inst_29463);

(statearr_29494[(12)] = inst_29464);

return statearr_29494;
})();
var statearr_29495_29509 = state_29485__$1;
(statearr_29495_29509[(2)] = null);

(statearr_29495_29509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__21345__auto___29503,out))
;
return ((function (switch__21283__auto__,c__21345__auto___29503,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_29499 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29499[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__);

(statearr_29499[(1)] = (1));

return statearr_29499;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1 = (function (state_29485){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29500){if((e29500 instanceof Object)){
var ex__21287__auto__ = e29500;
var statearr_29501_29510 = state_29485;
(statearr_29501_29510[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29511 = state_29485;
state_29485 = G__29511;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__ = function(state_29485){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1.call(this,state_29485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___29503,out))
})();
var state__21347__auto__ = (function (){var statearr_29502 = f__21346__auto__.call(null);
(statearr_29502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___29503);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___29503,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29512,p__29513){
var map__29516 = p__29512;
var map__29516__$1 = ((cljs.core.seq_QMARK_.call(null,map__29516))?cljs.core.apply.call(null,cljs.core.hash_map,map__29516):map__29516);
var opts = map__29516__$1;
var url_rewriter = cljs.core.get.call(null,map__29516__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29517 = p__29513;
var map__29517__$1 = ((cljs.core.seq_QMARK_.call(null,map__29517))?cljs.core.apply.call(null,cljs.core.hash_map,map__29517):map__29517);
var file_msg = map__29517__$1;
var file = cljs.core.get.call(null,map__29517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29518){
var map__29521 = p__29518;
var map__29521__$1 = ((cljs.core.seq_QMARK_.call(null,map__29521))?cljs.core.apply.call(null,cljs.core.hash_map,map__29521):map__29521);
var file = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29521__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18109__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18109__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18109__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29522){var e = e29522;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29527,p__29528){
var map__29730 = p__29527;
var map__29730__$1 = ((cljs.core.seq_QMARK_.call(null,map__29730))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);
var opts = map__29730__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29731 = p__29528;
var map__29731__$1 = ((cljs.core.seq_QMARK_.call(null,map__29731))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731):map__29731);
var msg = map__29731__$1;
var files = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (state_29856){
var state_val_29857 = (state_29856[(1)]);
if((state_val_29857 === (7))){
var inst_29746 = (state_29856[(7)]);
var inst_29744 = (state_29856[(8)]);
var inst_29743 = (state_29856[(9)]);
var inst_29745 = (state_29856[(10)]);
var inst_29751 = cljs.core._nth.call(null,inst_29744,inst_29746);
var inst_29752 = figwheel.client.file_reloading.eval_body.call(null,inst_29751);
var inst_29753 = (inst_29746 + (1));
var tmp29858 = inst_29744;
var tmp29859 = inst_29743;
var tmp29860 = inst_29745;
var inst_29743__$1 = tmp29859;
var inst_29744__$1 = tmp29858;
var inst_29745__$1 = tmp29860;
var inst_29746__$1 = inst_29753;
var state_29856__$1 = (function (){var statearr_29861 = state_29856;
(statearr_29861[(7)] = inst_29746__$1);

(statearr_29861[(11)] = inst_29752);

(statearr_29861[(8)] = inst_29744__$1);

(statearr_29861[(9)] = inst_29743__$1);

(statearr_29861[(10)] = inst_29745__$1);

return statearr_29861;
})();
var statearr_29862_29931 = state_29856__$1;
(statearr_29862_29931[(2)] = null);

(statearr_29862_29931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (20))){
var inst_29788 = (state_29856[(12)]);
var inst_29789 = (state_29856[(13)]);
var inst_29795 = (state_29856[(14)]);
var inst_29792 = (state_29856[(15)]);
var inst_29793 = (state_29856[(16)]);
var inst_29798 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29800 = (function (){var files_not_loaded = inst_29795;
var res = inst_29793;
var res_SINGLEQUOTE_ = inst_29792;
var files_SINGLEQUOTE_ = inst_29789;
var all_files = inst_29788;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29795,inst_29792,inst_29793,inst_29798,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (p__29799){
var map__29863 = p__29799;
var map__29863__$1 = ((cljs.core.seq_QMARK_.call(null,map__29863))?cljs.core.apply.call(null,cljs.core.hash_map,map__29863):map__29863);
var file = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29795,inst_29792,inst_29793,inst_29798,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29801 = cljs.core.map.call(null,inst_29800,inst_29793);
var inst_29802 = cljs.core.pr_str.call(null,inst_29801);
var inst_29803 = figwheel.client.utils.log.call(null,inst_29802);
var inst_29804 = (function (){var files_not_loaded = inst_29795;
var res = inst_29793;
var res_SINGLEQUOTE_ = inst_29792;
var files_SINGLEQUOTE_ = inst_29789;
var all_files = inst_29788;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29795,inst_29792,inst_29793,inst_29798,inst_29800,inst_29801,inst_29802,inst_29803,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29795,inst_29792,inst_29793,inst_29798,inst_29800,inst_29801,inst_29802,inst_29803,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29805 = setTimeout(inst_29804,(10));
var state_29856__$1 = (function (){var statearr_29864 = state_29856;
(statearr_29864[(17)] = inst_29803);

(statearr_29864[(18)] = inst_29798);

return statearr_29864;
})();
var statearr_29865_29932 = state_29856__$1;
(statearr_29865_29932[(2)] = inst_29805);

(statearr_29865_29932[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (27))){
var inst_29815 = (state_29856[(19)]);
var state_29856__$1 = state_29856;
var statearr_29866_29933 = state_29856__$1;
(statearr_29866_29933[(2)] = inst_29815);

(statearr_29866_29933[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (1))){
var inst_29735 = (state_29856[(20)]);
var inst_29732 = before_jsload.call(null,files);
var inst_29733 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29734 = (function (){return ((function (inst_29735,inst_29732,inst_29733,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (p1__29523_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29523_SHARP_);
});
;})(inst_29735,inst_29732,inst_29733,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29735__$1 = cljs.core.filter.call(null,inst_29734,files);
var inst_29736 = cljs.core.not_empty.call(null,inst_29735__$1);
var state_29856__$1 = (function (){var statearr_29867 = state_29856;
(statearr_29867[(21)] = inst_29732);

(statearr_29867[(22)] = inst_29733);

(statearr_29867[(20)] = inst_29735__$1);

return statearr_29867;
})();
if(cljs.core.truth_(inst_29736)){
var statearr_29868_29934 = state_29856__$1;
(statearr_29868_29934[(1)] = (2));

} else {
var statearr_29869_29935 = state_29856__$1;
(statearr_29869_29935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (24))){
var state_29856__$1 = state_29856;
var statearr_29870_29936 = state_29856__$1;
(statearr_29870_29936[(2)] = null);

(statearr_29870_29936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (4))){
var inst_29780 = (state_29856[(2)]);
var inst_29781 = (function (){return ((function (inst_29780,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (p1__29524_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29524_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29524_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_29780,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29782 = cljs.core.filter.call(null,inst_29781,files);
var state_29856__$1 = (function (){var statearr_29871 = state_29856;
(statearr_29871[(23)] = inst_29782);

(statearr_29871[(24)] = inst_29780);

return statearr_29871;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29872_29937 = state_29856__$1;
(statearr_29872_29937[(1)] = (16));

} else {
var statearr_29873_29938 = state_29856__$1;
(statearr_29873_29938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (15))){
var inst_29770 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29874_29939 = state_29856__$1;
(statearr_29874_29939[(2)] = inst_29770);

(statearr_29874_29939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (21))){
var state_29856__$1 = state_29856;
var statearr_29875_29940 = state_29856__$1;
(statearr_29875_29940[(2)] = null);

(statearr_29875_29940[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (31))){
var inst_29823 = (state_29856[(25)]);
var inst_29833 = (state_29856[(2)]);
var inst_29834 = cljs.core.not_empty.call(null,inst_29823);
var state_29856__$1 = (function (){var statearr_29876 = state_29856;
(statearr_29876[(26)] = inst_29833);

return statearr_29876;
})();
if(cljs.core.truth_(inst_29834)){
var statearr_29877_29941 = state_29856__$1;
(statearr_29877_29941[(1)] = (32));

} else {
var statearr_29878_29942 = state_29856__$1;
(statearr_29878_29942[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (32))){
var inst_29823 = (state_29856[(25)]);
var inst_29836 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29823);
var inst_29837 = cljs.core.pr_str.call(null,inst_29836);
var inst_29838 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29837)].join('');
var inst_29839 = figwheel.client.utils.log.call(null,inst_29838);
var state_29856__$1 = state_29856;
var statearr_29879_29943 = state_29856__$1;
(statearr_29879_29943[(2)] = inst_29839);

(statearr_29879_29943[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (33))){
var state_29856__$1 = state_29856;
var statearr_29880_29944 = state_29856__$1;
(statearr_29880_29944[(2)] = null);

(statearr_29880_29944[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (13))){
var inst_29756 = (state_29856[(27)]);
var inst_29760 = cljs.core.chunk_first.call(null,inst_29756);
var inst_29761 = cljs.core.chunk_rest.call(null,inst_29756);
var inst_29762 = cljs.core.count.call(null,inst_29760);
var inst_29743 = inst_29761;
var inst_29744 = inst_29760;
var inst_29745 = inst_29762;
var inst_29746 = (0);
var state_29856__$1 = (function (){var statearr_29881 = state_29856;
(statearr_29881[(7)] = inst_29746);

(statearr_29881[(8)] = inst_29744);

(statearr_29881[(9)] = inst_29743);

(statearr_29881[(10)] = inst_29745);

return statearr_29881;
})();
var statearr_29882_29945 = state_29856__$1;
(statearr_29882_29945[(2)] = null);

(statearr_29882_29945[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (22))){
var inst_29795 = (state_29856[(14)]);
var inst_29808 = (state_29856[(2)]);
var inst_29809 = cljs.core.not_empty.call(null,inst_29795);
var state_29856__$1 = (function (){var statearr_29883 = state_29856;
(statearr_29883[(28)] = inst_29808);

return statearr_29883;
})();
if(cljs.core.truth_(inst_29809)){
var statearr_29884_29946 = state_29856__$1;
(statearr_29884_29946[(1)] = (23));

} else {
var statearr_29885_29947 = state_29856__$1;
(statearr_29885_29947[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (36))){
var state_29856__$1 = state_29856;
var statearr_29886_29948 = state_29856__$1;
(statearr_29886_29948[(2)] = null);

(statearr_29886_29948[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (29))){
var inst_29824 = (state_29856[(29)]);
var inst_29827 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29824);
var inst_29828 = cljs.core.pr_str.call(null,inst_29827);
var inst_29829 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29828)].join('');
var inst_29830 = figwheel.client.utils.log.call(null,inst_29829);
var state_29856__$1 = state_29856;
var statearr_29887_29949 = state_29856__$1;
(statearr_29887_29949[(2)] = inst_29830);

(statearr_29887_29949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (6))){
var inst_29777 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29888_29950 = state_29856__$1;
(statearr_29888_29950[(2)] = inst_29777);

(statearr_29888_29950[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (28))){
var inst_29824 = (state_29856[(29)]);
var inst_29821 = (state_29856[(2)]);
var inst_29822 = cljs.core.get.call(null,inst_29821,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29823 = cljs.core.get.call(null,inst_29821,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29824__$1 = cljs.core.get.call(null,inst_29821,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29825 = cljs.core.not_empty.call(null,inst_29824__$1);
var state_29856__$1 = (function (){var statearr_29889 = state_29856;
(statearr_29889[(30)] = inst_29822);

(statearr_29889[(25)] = inst_29823);

(statearr_29889[(29)] = inst_29824__$1);

return statearr_29889;
})();
if(cljs.core.truth_(inst_29825)){
var statearr_29890_29951 = state_29856__$1;
(statearr_29890_29951[(1)] = (29));

} else {
var statearr_29891_29952 = state_29856__$1;
(statearr_29891_29952[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (25))){
var inst_29854 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29856__$1,inst_29854);
} else {
if((state_val_29857 === (34))){
var inst_29822 = (state_29856[(30)]);
var inst_29842 = (state_29856[(2)]);
var inst_29843 = cljs.core.not_empty.call(null,inst_29822);
var state_29856__$1 = (function (){var statearr_29892 = state_29856;
(statearr_29892[(31)] = inst_29842);

return statearr_29892;
})();
if(cljs.core.truth_(inst_29843)){
var statearr_29893_29953 = state_29856__$1;
(statearr_29893_29953[(1)] = (35));

} else {
var statearr_29894_29954 = state_29856__$1;
(statearr_29894_29954[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (17))){
var inst_29782 = (state_29856[(23)]);
var state_29856__$1 = state_29856;
var statearr_29895_29955 = state_29856__$1;
(statearr_29895_29955[(2)] = inst_29782);

(statearr_29895_29955[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (3))){
var state_29856__$1 = state_29856;
var statearr_29896_29956 = state_29856__$1;
(statearr_29896_29956[(2)] = null);

(statearr_29896_29956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (12))){
var inst_29773 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29897_29957 = state_29856__$1;
(statearr_29897_29957[(2)] = inst_29773);

(statearr_29897_29957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (2))){
var inst_29735 = (state_29856[(20)]);
var inst_29742 = cljs.core.seq.call(null,inst_29735);
var inst_29743 = inst_29742;
var inst_29744 = null;
var inst_29745 = (0);
var inst_29746 = (0);
var state_29856__$1 = (function (){var statearr_29898 = state_29856;
(statearr_29898[(7)] = inst_29746);

(statearr_29898[(8)] = inst_29744);

(statearr_29898[(9)] = inst_29743);

(statearr_29898[(10)] = inst_29745);

return statearr_29898;
})();
var statearr_29899_29958 = state_29856__$1;
(statearr_29899_29958[(2)] = null);

(statearr_29899_29958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (23))){
var inst_29788 = (state_29856[(12)]);
var inst_29789 = (state_29856[(13)]);
var inst_29795 = (state_29856[(14)]);
var inst_29815 = (state_29856[(19)]);
var inst_29792 = (state_29856[(15)]);
var inst_29793 = (state_29856[(16)]);
var inst_29811 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29814 = (function (){var files_not_loaded = inst_29795;
var res = inst_29793;
var res_SINGLEQUOTE_ = inst_29792;
var files_SINGLEQUOTE_ = inst_29789;
var all_files = inst_29788;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29795,inst_29815,inst_29792,inst_29793,inst_29811,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (p__29813){
var map__29900 = p__29813;
var map__29900__$1 = ((cljs.core.seq_QMARK_.call(null,map__29900))?cljs.core.apply.call(null,cljs.core.hash_map,map__29900):map__29900);
var meta_data = cljs.core.get.call(null,map__29900__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29795,inst_29815,inst_29792,inst_29793,inst_29811,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29815__$1 = cljs.core.group_by.call(null,inst_29814,inst_29795);
var inst_29816 = cljs.core.seq_QMARK_.call(null,inst_29815__$1);
var state_29856__$1 = (function (){var statearr_29901 = state_29856;
(statearr_29901[(19)] = inst_29815__$1);

(statearr_29901[(32)] = inst_29811);

return statearr_29901;
})();
if(inst_29816){
var statearr_29902_29959 = state_29856__$1;
(statearr_29902_29959[(1)] = (26));

} else {
var statearr_29903_29960 = state_29856__$1;
(statearr_29903_29960[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (35))){
var inst_29822 = (state_29856[(30)]);
var inst_29845 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29822);
var inst_29846 = cljs.core.pr_str.call(null,inst_29845);
var inst_29847 = [cljs.core.str("not required: "),cljs.core.str(inst_29846)].join('');
var inst_29848 = figwheel.client.utils.log.call(null,inst_29847);
var state_29856__$1 = state_29856;
var statearr_29904_29961 = state_29856__$1;
(statearr_29904_29961[(2)] = inst_29848);

(statearr_29904_29961[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (19))){
var inst_29788 = (state_29856[(12)]);
var inst_29789 = (state_29856[(13)]);
var inst_29792 = (state_29856[(15)]);
var inst_29793 = (state_29856[(16)]);
var inst_29792__$1 = (state_29856[(2)]);
var inst_29793__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29792__$1);
var inst_29794 = (function (){var res = inst_29793__$1;
var res_SINGLEQUOTE_ = inst_29792__$1;
var files_SINGLEQUOTE_ = inst_29789;
var all_files = inst_29788;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29792,inst_29793,inst_29792__$1,inst_29793__$1,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (p1__29526_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29526_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29788,inst_29789,inst_29792,inst_29793,inst_29792__$1,inst_29793__$1,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29795 = cljs.core.filter.call(null,inst_29794,inst_29792__$1);
var inst_29796 = cljs.core.not_empty.call(null,inst_29793__$1);
var state_29856__$1 = (function (){var statearr_29905 = state_29856;
(statearr_29905[(14)] = inst_29795);

(statearr_29905[(15)] = inst_29792__$1);

(statearr_29905[(16)] = inst_29793__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29796)){
var statearr_29906_29962 = state_29856__$1;
(statearr_29906_29962[(1)] = (20));

} else {
var statearr_29907_29963 = state_29856__$1;
(statearr_29907_29963[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (11))){
var state_29856__$1 = state_29856;
var statearr_29908_29964 = state_29856__$1;
(statearr_29908_29964[(2)] = null);

(statearr_29908_29964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (9))){
var inst_29775 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29909_29965 = state_29856__$1;
(statearr_29909_29965[(2)] = inst_29775);

(statearr_29909_29965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (5))){
var inst_29746 = (state_29856[(7)]);
var inst_29745 = (state_29856[(10)]);
var inst_29748 = (inst_29746 < inst_29745);
var inst_29749 = inst_29748;
var state_29856__$1 = state_29856;
if(cljs.core.truth_(inst_29749)){
var statearr_29910_29966 = state_29856__$1;
(statearr_29910_29966[(1)] = (7));

} else {
var statearr_29911_29967 = state_29856__$1;
(statearr_29911_29967[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (14))){
var inst_29756 = (state_29856[(27)]);
var inst_29765 = cljs.core.first.call(null,inst_29756);
var inst_29766 = figwheel.client.file_reloading.eval_body.call(null,inst_29765);
var inst_29767 = cljs.core.next.call(null,inst_29756);
var inst_29743 = inst_29767;
var inst_29744 = null;
var inst_29745 = (0);
var inst_29746 = (0);
var state_29856__$1 = (function (){var statearr_29912 = state_29856;
(statearr_29912[(7)] = inst_29746);

(statearr_29912[(8)] = inst_29744);

(statearr_29912[(9)] = inst_29743);

(statearr_29912[(10)] = inst_29745);

(statearr_29912[(33)] = inst_29766);

return statearr_29912;
})();
var statearr_29913_29968 = state_29856__$1;
(statearr_29913_29968[(2)] = null);

(statearr_29913_29968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (26))){
var inst_29815 = (state_29856[(19)]);
var inst_29818 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29815);
var state_29856__$1 = state_29856;
var statearr_29914_29969 = state_29856__$1;
(statearr_29914_29969[(2)] = inst_29818);

(statearr_29914_29969[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (16))){
var inst_29782 = (state_29856[(23)]);
var inst_29784 = (function (){var all_files = inst_29782;
return ((function (all_files,inst_29782,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function (p1__29525_SHARP_){
return cljs.core.update_in.call(null,p1__29525_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29782,state_val_29857,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var inst_29785 = cljs.core.map.call(null,inst_29784,inst_29782);
var state_29856__$1 = state_29856;
var statearr_29915_29970 = state_29856__$1;
(statearr_29915_29970[(2)] = inst_29785);

(statearr_29915_29970[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (30))){
var state_29856__$1 = state_29856;
var statearr_29916_29971 = state_29856__$1;
(statearr_29916_29971[(2)] = null);

(statearr_29916_29971[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (10))){
var inst_29756 = (state_29856[(27)]);
var inst_29758 = cljs.core.chunked_seq_QMARK_.call(null,inst_29756);
var state_29856__$1 = state_29856;
if(inst_29758){
var statearr_29917_29972 = state_29856__$1;
(statearr_29917_29972[(1)] = (13));

} else {
var statearr_29918_29973 = state_29856__$1;
(statearr_29918_29973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (18))){
var inst_29788 = (state_29856[(12)]);
var inst_29789 = (state_29856[(13)]);
var inst_29788__$1 = (state_29856[(2)]);
var inst_29789__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29788__$1);
var inst_29790 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29789__$1);
var state_29856__$1 = (function (){var statearr_29919 = state_29856;
(statearr_29919[(12)] = inst_29788__$1);

(statearr_29919[(13)] = inst_29789__$1);

return statearr_29919;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29856__$1,(19),inst_29790);
} else {
if((state_val_29857 === (37))){
var inst_29851 = (state_29856[(2)]);
var state_29856__$1 = state_29856;
var statearr_29920_29974 = state_29856__$1;
(statearr_29920_29974[(2)] = inst_29851);

(statearr_29920_29974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29857 === (8))){
var inst_29743 = (state_29856[(9)]);
var inst_29756 = (state_29856[(27)]);
var inst_29756__$1 = cljs.core.seq.call(null,inst_29743);
var state_29856__$1 = (function (){var statearr_29921 = state_29856;
(statearr_29921[(27)] = inst_29756__$1);

return statearr_29921;
})();
if(inst_29756__$1){
var statearr_29922_29975 = state_29856__$1;
(statearr_29922_29975[(1)] = (10));

} else {
var statearr_29923_29976 = state_29856__$1;
(statearr_29923_29976[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
;
return ((function (switch__21283__auto__,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0 = (function (){
var statearr_29927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29927[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__);

(statearr_29927[(1)] = (1));

return statearr_29927;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1 = (function (state_29856){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__21287__auto__ = e29928;
var statearr_29929_29977 = state_29856;
(statearr_29929_29977[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29978 = state_29856;
state_29856 = G__29978;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__ = function(state_29856){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1.call(this,state_29856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
})();
var state__21347__auto__ = (function (){var statearr_29930 = f__21346__auto__.call(null);
(statearr_29930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,map__29730,map__29730__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29731,map__29731__$1,msg,files))
);

return c__21345__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29981,link){
var map__29983 = p__29981;
var map__29983__$1 = ((cljs.core.seq_QMARK_.call(null,map__29983))?cljs.core.apply.call(null,cljs.core.hash_map,map__29983):map__29983);
var file = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29983,map__29983__$1,file){
return (function (p1__29979_SHARP_,p2__29980_SHARP_){
if(cljs.core._EQ_.call(null,p1__29979_SHARP_,p2__29980_SHARP_)){
return p1__29979_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29983,map__29983__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29987){
var map__29988 = p__29987;
var map__29988__$1 = ((cljs.core.seq_QMARK_.call(null,map__29988))?cljs.core.apply.call(null,cljs.core.hash_map,map__29988):map__29988);
var current_url_length = cljs.core.get.call(null,map__29988__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__29988__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29984_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29984_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__29990 = arguments.length;
switch (G__29990) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29992){
var map__29994 = p__29992;
var map__29994__$1 = ((cljs.core.seq_QMARK_.call(null,map__29994))?cljs.core.apply.call(null,cljs.core.hash_map,map__29994):map__29994);
var f_data = map__29994__$1;
var request_url = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__29994__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18121__auto__ = request_url;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29995,files_msg){
var map__30017 = p__29995;
var map__30017__$1 = ((cljs.core.seq_QMARK_.call(null,map__30017))?cljs.core.apply.call(null,cljs.core.hash_map,map__30017):map__30017);
var opts = map__30017__$1;
var on_cssload = cljs.core.get.call(null,map__30017__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30018_30038 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30019_30039 = null;
var count__30020_30040 = (0);
var i__30021_30041 = (0);
while(true){
if((i__30021_30041 < count__30020_30040)){
var f_30042 = cljs.core._nth.call(null,chunk__30019_30039,i__30021_30041);
figwheel.client.file_reloading.reload_css_file.call(null,f_30042);

var G__30043 = seq__30018_30038;
var G__30044 = chunk__30019_30039;
var G__30045 = count__30020_30040;
var G__30046 = (i__30021_30041 + (1));
seq__30018_30038 = G__30043;
chunk__30019_30039 = G__30044;
count__30020_30040 = G__30045;
i__30021_30041 = G__30046;
continue;
} else {
var temp__4126__auto___30047 = cljs.core.seq.call(null,seq__30018_30038);
if(temp__4126__auto___30047){
var seq__30018_30048__$1 = temp__4126__auto___30047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30018_30048__$1)){
var c__18906__auto___30049 = cljs.core.chunk_first.call(null,seq__30018_30048__$1);
var G__30050 = cljs.core.chunk_rest.call(null,seq__30018_30048__$1);
var G__30051 = c__18906__auto___30049;
var G__30052 = cljs.core.count.call(null,c__18906__auto___30049);
var G__30053 = (0);
seq__30018_30038 = G__30050;
chunk__30019_30039 = G__30051;
count__30020_30040 = G__30052;
i__30021_30041 = G__30053;
continue;
} else {
var f_30054 = cljs.core.first.call(null,seq__30018_30048__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30054);

var G__30055 = cljs.core.next.call(null,seq__30018_30048__$1);
var G__30056 = null;
var G__30057 = (0);
var G__30058 = (0);
seq__30018_30038 = G__30055;
chunk__30019_30039 = G__30056;
count__30020_30040 = G__30057;
i__30021_30041 = G__30058;
continue;
}
} else {
}
}
break;
}

var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,map__30017,map__30017__$1,opts,on_cssload){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,map__30017,map__30017__$1,opts,on_cssload){
return (function (state_30028){
var state_val_30029 = (state_30028[(1)]);
if((state_val_30029 === (2))){
var inst_30024 = (state_30028[(2)]);
var inst_30025 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30026 = on_cssload.call(null,inst_30025);
var state_30028__$1 = (function (){var statearr_30030 = state_30028;
(statearr_30030[(7)] = inst_30024);

return statearr_30030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30028__$1,inst_30026);
} else {
if((state_val_30029 === (1))){
var inst_30022 = cljs.core.async.timeout.call(null,(100));
var state_30028__$1 = state_30028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30028__$1,(2),inst_30022);
} else {
return null;
}
}
});})(c__21345__auto__,map__30017,map__30017__$1,opts,on_cssload))
;
return ((function (switch__21283__auto__,c__21345__auto__,map__30017,map__30017__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0 = (function (){
var statearr_30034 = [null,null,null,null,null,null,null,null];
(statearr_30034[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__);

(statearr_30034[(1)] = (1));

return statearr_30034;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1 = (function (state_30028){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_30028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e30035){if((e30035 instanceof Object)){
var ex__21287__auto__ = e30035;
var statearr_30036_30059 = state_30028;
(statearr_30036_30059[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30060 = state_30028;
state_30028 = G__30060;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__ = function(state_30028){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1.call(this,state_30028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,map__30017,map__30017__$1,opts,on_cssload))
})();
var state__21347__auto__ = (function (){var statearr_30037 = f__21346__auto__.call(null);
(statearr_30037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,map__30017,map__30017__$1,opts,on_cssload))
);

return c__21345__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1439894838742