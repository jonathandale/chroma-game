// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28344__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28344 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28345__i = 0, G__28345__a = new Array(arguments.length -  0);
while (G__28345__i < G__28345__a.length) {G__28345__a[G__28345__i] = arguments[G__28345__i + 0]; ++G__28345__i;}
  args = new cljs.core.IndexedSeq(G__28345__a,0);
} 
return G__28344__delegate.call(this,args);};
G__28344.cljs$lang$maxFixedArity = 0;
G__28344.cljs$lang$applyTo = (function (arglist__28346){
var args = cljs.core.seq(arglist__28346);
return G__28344__delegate(args);
});
G__28344.cljs$core$IFn$_invoke$arity$variadic = G__28344__delegate;
return G__28344;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28347){
var map__28349 = p__28347;
var map__28349__$1 = ((cljs.core.seq_QMARK_.call(null,map__28349))?cljs.core.apply.call(null,cljs.core.hash_map,map__28349):map__28349);
var class$ = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28349__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18109__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21345__auto___28478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28478,ch){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28478,ch){
return (function (state_28452){
var state_val_28453 = (state_28452[(1)]);
if((state_val_28453 === (7))){
var inst_28448 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28454_28479 = state_28452__$1;
(statearr_28454_28479[(2)] = inst_28448);

(statearr_28454_28479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (1))){
var state_28452__$1 = state_28452;
var statearr_28455_28480 = state_28452__$1;
(statearr_28455_28480[(2)] = null);

(statearr_28455_28480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (4))){
var inst_28416 = (state_28452[(7)]);
var inst_28416__$1 = (state_28452[(2)]);
var state_28452__$1 = (function (){var statearr_28456 = state_28452;
(statearr_28456[(7)] = inst_28416__$1);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28416__$1)){
var statearr_28457_28481 = state_28452__$1;
(statearr_28457_28481[(1)] = (5));

} else {
var statearr_28458_28482 = state_28452__$1;
(statearr_28458_28482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (13))){
var state_28452__$1 = state_28452;
var statearr_28459_28483 = state_28452__$1;
(statearr_28459_28483[(2)] = null);

(statearr_28459_28483[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (6))){
var state_28452__$1 = state_28452;
var statearr_28460_28484 = state_28452__$1;
(statearr_28460_28484[(2)] = null);

(statearr_28460_28484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (3))){
var inst_28450 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28452__$1,inst_28450);
} else {
if((state_val_28453 === (12))){
var inst_28423 = (state_28452[(8)]);
var inst_28436 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28423);
var inst_28437 = cljs.core.first.call(null,inst_28436);
var inst_28438 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28437);
var inst_28439 = console.warn("Figwheel: Not loading code with warnings - ",inst_28438);
var state_28452__$1 = state_28452;
var statearr_28461_28485 = state_28452__$1;
(statearr_28461_28485[(2)] = inst_28439);

(statearr_28461_28485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (2))){
var state_28452__$1 = state_28452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28452__$1,(4),ch);
} else {
if((state_val_28453 === (11))){
var inst_28432 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28462_28486 = state_28452__$1;
(statearr_28462_28486[(2)] = inst_28432);

(statearr_28462_28486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (9))){
var inst_28422 = (state_28452[(9)]);
var inst_28434 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28422,opts);
var state_28452__$1 = state_28452;
if(cljs.core.truth_(inst_28434)){
var statearr_28463_28487 = state_28452__$1;
(statearr_28463_28487[(1)] = (12));

} else {
var statearr_28464_28488 = state_28452__$1;
(statearr_28464_28488[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (5))){
var inst_28422 = (state_28452[(9)]);
var inst_28416 = (state_28452[(7)]);
var inst_28418 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28419 = (new cljs.core.PersistentArrayMap(null,2,inst_28418,null));
var inst_28420 = (new cljs.core.PersistentHashSet(null,inst_28419,null));
var inst_28421 = figwheel.client.focus_msgs.call(null,inst_28420,inst_28416);
var inst_28422__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28421);
var inst_28423 = cljs.core.first.call(null,inst_28421);
var inst_28424 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28422__$1,opts);
var state_28452__$1 = (function (){var statearr_28465 = state_28452;
(statearr_28465[(9)] = inst_28422__$1);

(statearr_28465[(8)] = inst_28423);

return statearr_28465;
})();
if(cljs.core.truth_(inst_28424)){
var statearr_28466_28489 = state_28452__$1;
(statearr_28466_28489[(1)] = (8));

} else {
var statearr_28467_28490 = state_28452__$1;
(statearr_28467_28490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (14))){
var inst_28442 = (state_28452[(2)]);
var state_28452__$1 = state_28452;
var statearr_28468_28491 = state_28452__$1;
(statearr_28468_28491[(2)] = inst_28442);

(statearr_28468_28491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (10))){
var inst_28444 = (state_28452[(2)]);
var state_28452__$1 = (function (){var statearr_28469 = state_28452;
(statearr_28469[(10)] = inst_28444);

return statearr_28469;
})();
var statearr_28470_28492 = state_28452__$1;
(statearr_28470_28492[(2)] = null);

(statearr_28470_28492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28453 === (8))){
var inst_28423 = (state_28452[(8)]);
var inst_28426 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28427 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28423);
var inst_28428 = cljs.core.async.timeout.call(null,(1000));
var inst_28429 = [inst_28427,inst_28428];
var inst_28430 = (new cljs.core.PersistentVector(null,2,(5),inst_28426,inst_28429,null));
var state_28452__$1 = state_28452;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28452__$1,(11),inst_28430);
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
});})(c__21345__auto___28478,ch))
;
return ((function (switch__21283__auto__,c__21345__auto___28478,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_28474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28474[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__);

(statearr_28474[(1)] = (1));

return statearr_28474;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1 = (function (state_28452){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28475){if((e28475 instanceof Object)){
var ex__21287__auto__ = e28475;
var statearr_28476_28493 = state_28452;
(statearr_28476_28493[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28494 = state_28452;
state_28452 = G__28494;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__ = function(state_28452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1.call(this,state_28452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21284__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28478,ch))
})();
var state__21347__auto__ = (function (){var statearr_28477 = f__21346__auto__.call(null);
(statearr_28477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28478);

return statearr_28477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28478,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28495_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28495_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28502 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28502){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28500 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28501 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28500,_STAR_print_newline_STAR_28501,base_path_28502){
return (function() { 
var G__28503__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28503 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28504__i = 0, G__28504__a = new Array(arguments.length -  0);
while (G__28504__i < G__28504__a.length) {G__28504__a[G__28504__i] = arguments[G__28504__i + 0]; ++G__28504__i;}
  args = new cljs.core.IndexedSeq(G__28504__a,0);
} 
return G__28503__delegate.call(this,args);};
G__28503.cljs$lang$maxFixedArity = 0;
G__28503.cljs$lang$applyTo = (function (arglist__28505){
var args = cljs.core.seq(arglist__28505);
return G__28503__delegate(args);
});
G__28503.cljs$core$IFn$_invoke$arity$variadic = G__28503__delegate;
return G__28503;
})()
;})(_STAR_print_fn_STAR_28500,_STAR_print_newline_STAR_28501,base_path_28502))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28501;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28500;
}}catch (e28499){if((e28499 instanceof Error)){
var e = e28499;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28502], null));
} else {
var e = e28499;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28502))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28506){
var map__28511 = p__28506;
var map__28511__$1 = ((cljs.core.seq_QMARK_.call(null,map__28511))?cljs.core.apply.call(null,cljs.core.hash_map,map__28511):map__28511);
var opts = map__28511__$1;
var build_id = cljs.core.get.call(null,map__28511__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28511,map__28511__$1,opts,build_id){
return (function (p__28512){
var vec__28513 = p__28512;
var map__28514 = cljs.core.nth.call(null,vec__28513,(0),null);
var map__28514__$1 = ((cljs.core.seq_QMARK_.call(null,map__28514))?cljs.core.apply.call(null,cljs.core.hash_map,map__28514):map__28514);
var msg = map__28514__$1;
var msg_name = cljs.core.get.call(null,map__28514__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28513,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28513,map__28514,map__28514__$1,msg,msg_name,_,map__28511,map__28511__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28513,map__28514,map__28514__$1,msg,msg_name,_,map__28511,map__28511__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28511,map__28511__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28518){
var vec__28519 = p__28518;
var map__28520 = cljs.core.nth.call(null,vec__28519,(0),null);
var map__28520__$1 = ((cljs.core.seq_QMARK_.call(null,map__28520))?cljs.core.apply.call(null,cljs.core.hash_map,map__28520):map__28520);
var msg = map__28520__$1;
var msg_name = cljs.core.get.call(null,map__28520__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28519,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28521){
var map__28529 = p__28521;
var map__28529__$1 = ((cljs.core.seq_QMARK_.call(null,map__28529))?cljs.core.apply.call(null,cljs.core.hash_map,map__28529):map__28529);
var on_compile_fail = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28529,map__28529__$1,on_compile_fail,on_compile_warning){
return (function (p__28530){
var vec__28531 = p__28530;
var map__28532 = cljs.core.nth.call(null,vec__28531,(0),null);
var map__28532__$1 = ((cljs.core.seq_QMARK_.call(null,map__28532))?cljs.core.apply.call(null,cljs.core.hash_map,map__28532):map__28532);
var msg = map__28532__$1;
var msg_name = cljs.core.get.call(null,map__28532__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28531,(1));
var pred__28533 = cljs.core._EQ_;
var expr__28534 = msg_name;
if(cljs.core.truth_(pred__28533.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28534))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28533.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28534))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28529,map__28529__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,msg_hist,msg_names,msg){
return (function (state_28735){
var state_val_28736 = (state_28735[(1)]);
if((state_val_28736 === (7))){
var inst_28669 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28737_28778 = state_28735__$1;
(statearr_28737_28778[(2)] = inst_28669);

(statearr_28737_28778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (20))){
var inst_28697 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28697)){
var statearr_28738_28779 = state_28735__$1;
(statearr_28738_28779[(1)] = (22));

} else {
var statearr_28739_28780 = state_28735__$1;
(statearr_28739_28780[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (27))){
var inst_28709 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28710 = figwheel.client.heads_up.display_warning.call(null,inst_28709);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(30),inst_28710);
} else {
if((state_val_28736 === (1))){
var inst_28657 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28657)){
var statearr_28740_28781 = state_28735__$1;
(statearr_28740_28781[(1)] = (2));

} else {
var statearr_28741_28782 = state_28735__$1;
(statearr_28741_28782[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (24))){
var inst_28725 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28742_28783 = state_28735__$1;
(statearr_28742_28783[(2)] = inst_28725);

(statearr_28742_28783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (4))){
var inst_28733 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28735__$1,inst_28733);
} else {
if((state_val_28736 === (15))){
var inst_28685 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28686 = figwheel.client.format_messages.call(null,inst_28685);
var inst_28687 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28688 = figwheel.client.heads_up.display_error.call(null,inst_28686,inst_28687);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(18),inst_28688);
} else {
if((state_val_28736 === (21))){
var inst_28727 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28743_28784 = state_28735__$1;
(statearr_28743_28784[(2)] = inst_28727);

(statearr_28743_28784[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (31))){
var inst_28716 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(34),inst_28716);
} else {
if((state_val_28736 === (32))){
var state_28735__$1 = state_28735;
var statearr_28744_28785 = state_28735__$1;
(statearr_28744_28785[(2)] = null);

(statearr_28744_28785[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (33))){
var inst_28721 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28745_28786 = state_28735__$1;
(statearr_28745_28786[(2)] = inst_28721);

(statearr_28745_28786[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (13))){
var inst_28675 = (state_28735[(2)]);
var inst_28676 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28677 = figwheel.client.format_messages.call(null,inst_28676);
var inst_28678 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28679 = figwheel.client.heads_up.display_error.call(null,inst_28677,inst_28678);
var state_28735__$1 = (function (){var statearr_28746 = state_28735;
(statearr_28746[(7)] = inst_28675);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(14),inst_28679);
} else {
if((state_val_28736 === (22))){
var inst_28699 = figwheel.client.heads_up.clear.call(null);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(25),inst_28699);
} else {
if((state_val_28736 === (29))){
var inst_28723 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28747_28787 = state_28735__$1;
(statearr_28747_28787[(2)] = inst_28723);

(statearr_28747_28787[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (6))){
var inst_28665 = figwheel.client.heads_up.clear.call(null);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(9),inst_28665);
} else {
if((state_val_28736 === (28))){
var inst_28714 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28714)){
var statearr_28748_28788 = state_28735__$1;
(statearr_28748_28788[(1)] = (31));

} else {
var statearr_28749_28789 = state_28735__$1;
(statearr_28749_28789[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (25))){
var inst_28701 = (state_28735[(2)]);
var inst_28702 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28703 = figwheel.client.heads_up.display_warning.call(null,inst_28702);
var state_28735__$1 = (function (){var statearr_28750 = state_28735;
(statearr_28750[(8)] = inst_28701);

return statearr_28750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(26),inst_28703);
} else {
if((state_val_28736 === (34))){
var inst_28718 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28751_28790 = state_28735__$1;
(statearr_28751_28790[(2)] = inst_28718);

(statearr_28751_28790[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (17))){
var inst_28729 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28752_28791 = state_28735__$1;
(statearr_28752_28791[(2)] = inst_28729);

(statearr_28752_28791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (3))){
var inst_28671 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28671)){
var statearr_28753_28792 = state_28735__$1;
(statearr_28753_28792[(1)] = (10));

} else {
var statearr_28754_28793 = state_28735__$1;
(statearr_28754_28793[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (12))){
var inst_28731 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28755_28794 = state_28735__$1;
(statearr_28755_28794[(2)] = inst_28731);

(statearr_28755_28794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (2))){
var inst_28659 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28659)){
var statearr_28756_28795 = state_28735__$1;
(statearr_28756_28795[(1)] = (5));

} else {
var statearr_28757_28796 = state_28735__$1;
(statearr_28757_28796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (23))){
var inst_28707 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28707)){
var statearr_28758_28797 = state_28735__$1;
(statearr_28758_28797[(1)] = (27));

} else {
var statearr_28759_28798 = state_28735__$1;
(statearr_28759_28798[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (19))){
var inst_28694 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28695 = figwheel.client.heads_up.append_message.call(null,inst_28694);
var state_28735__$1 = state_28735;
var statearr_28760_28799 = state_28735__$1;
(statearr_28760_28799[(2)] = inst_28695);

(statearr_28760_28799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (11))){
var inst_28683 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28683)){
var statearr_28761_28800 = state_28735__$1;
(statearr_28761_28800[(1)] = (15));

} else {
var statearr_28762_28801 = state_28735__$1;
(statearr_28762_28801[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (9))){
var inst_28667 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28763_28802 = state_28735__$1;
(statearr_28763_28802[(2)] = inst_28667);

(statearr_28763_28802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (5))){
var inst_28661 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(8),inst_28661);
} else {
if((state_val_28736 === (14))){
var inst_28681 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28764_28803 = state_28735__$1;
(statearr_28764_28803[(2)] = inst_28681);

(statearr_28764_28803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (26))){
var inst_28705 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28765_28804 = state_28735__$1;
(statearr_28765_28804[(2)] = inst_28705);

(statearr_28765_28804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (16))){
var inst_28692 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28735__$1 = state_28735;
if(cljs.core.truth_(inst_28692)){
var statearr_28766_28805 = state_28735__$1;
(statearr_28766_28805[(1)] = (19));

} else {
var statearr_28767_28806 = state_28735__$1;
(statearr_28767_28806[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (30))){
var inst_28712 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28768_28807 = state_28735__$1;
(statearr_28768_28807[(2)] = inst_28712);

(statearr_28768_28807[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (10))){
var inst_28673 = figwheel.client.heads_up.clear.call(null);
var state_28735__$1 = state_28735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28735__$1,(13),inst_28673);
} else {
if((state_val_28736 === (18))){
var inst_28690 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28769_28808 = state_28735__$1;
(statearr_28769_28808[(2)] = inst_28690);

(statearr_28769_28808[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28736 === (8))){
var inst_28663 = (state_28735[(2)]);
var state_28735__$1 = state_28735;
var statearr_28770_28809 = state_28735__$1;
(statearr_28770_28809[(2)] = inst_28663);

(statearr_28770_28809[(1)] = (7));


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
});})(c__21345__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21283__auto__,c__21345__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0 = (function (){
var statearr_28774 = [null,null,null,null,null,null,null,null,null];
(statearr_28774[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__);

(statearr_28774[(1)] = (1));

return statearr_28774;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1 = (function (state_28735){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28775){if((e28775 instanceof Object)){
var ex__21287__auto__ = e28775;
var statearr_28776_28810 = state_28735;
(statearr_28776_28810[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28735;
state_28735 = G__28811;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__ = function(state_28735){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1.call(this,state_28735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,msg_hist,msg_names,msg))
})();
var state__21347__auto__ = (function (){var statearr_28777 = f__21346__auto__.call(null);
(statearr_28777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_28777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,msg_hist,msg_names,msg))
);

return c__21345__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21345__auto___28874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28874,ch){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28874,ch){
return (function (state_28857){
var state_val_28858 = (state_28857[(1)]);
if((state_val_28858 === (8))){
var inst_28849 = (state_28857[(2)]);
var state_28857__$1 = (function (){var statearr_28859 = state_28857;
(statearr_28859[(7)] = inst_28849);

return statearr_28859;
})();
var statearr_28860_28875 = state_28857__$1;
(statearr_28860_28875[(2)] = null);

(statearr_28860_28875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (7))){
var inst_28853 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
var statearr_28861_28876 = state_28857__$1;
(statearr_28861_28876[(2)] = inst_28853);

(statearr_28861_28876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (6))){
var state_28857__$1 = state_28857;
var statearr_28862_28877 = state_28857__$1;
(statearr_28862_28877[(2)] = null);

(statearr_28862_28877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (5))){
var inst_28845 = (state_28857[(8)]);
var inst_28847 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28845);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28857__$1,(8),inst_28847);
} else {
if((state_val_28858 === (4))){
var inst_28845 = (state_28857[(8)]);
var inst_28845__$1 = (state_28857[(2)]);
var state_28857__$1 = (function (){var statearr_28863 = state_28857;
(statearr_28863[(8)] = inst_28845__$1);

return statearr_28863;
})();
if(cljs.core.truth_(inst_28845__$1)){
var statearr_28864_28878 = state_28857__$1;
(statearr_28864_28878[(1)] = (5));

} else {
var statearr_28865_28879 = state_28857__$1;
(statearr_28865_28879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28858 === (3))){
var inst_28855 = (state_28857[(2)]);
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28857__$1,inst_28855);
} else {
if((state_val_28858 === (2))){
var state_28857__$1 = state_28857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28857__$1,(4),ch);
} else {
if((state_val_28858 === (1))){
var state_28857__$1 = state_28857;
var statearr_28866_28880 = state_28857__$1;
(statearr_28866_28880[(2)] = null);

(statearr_28866_28880[(1)] = (2));


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
});})(c__21345__auto___28874,ch))
;
return ((function (switch__21283__auto__,c__21345__auto___28874,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_28870 = [null,null,null,null,null,null,null,null,null];
(statearr_28870[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21284__auto__);

(statearr_28870[(1)] = (1));

return statearr_28870;
});
var figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1 = (function (state_28857){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28871){if((e28871 instanceof Object)){
var ex__21287__auto__ = e28871;
var statearr_28872_28881 = state_28857;
(statearr_28872_28881[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28882 = state_28857;
state_28857 = G__28882;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__ = function(state_28857){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1.call(this,state_28857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21284__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28874,ch))
})();
var state__21347__auto__ = (function (){var statearr_28873 = f__21346__auto__.call(null);
(statearr_28873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28874);

return statearr_28873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28874,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_28903){
var state_val_28904 = (state_28903[(1)]);
if((state_val_28904 === (2))){
var inst_28900 = (state_28903[(2)]);
var inst_28901 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28903__$1 = (function (){var statearr_28905 = state_28903;
(statearr_28905[(7)] = inst_28900);

return statearr_28905;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28903__$1,inst_28901);
} else {
if((state_val_28904 === (1))){
var inst_28898 = cljs.core.async.timeout.call(null,(3000));
var state_28903__$1 = state_28903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28903__$1,(2),inst_28898);
} else {
return null;
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0 = (function (){
var statearr_28909 = [null,null,null,null,null,null,null,null];
(statearr_28909[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__);

(statearr_28909[(1)] = (1));

return statearr_28909;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1 = (function (state_28903){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28910){if((e28910 instanceof Object)){
var ex__21287__auto__ = e28910;
var statearr_28911_28913 = state_28903;
(statearr_28911_28913[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28903;
state_28903 = G__28914;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__ = function(state_28903){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1.call(this,state_28903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21284__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_28912 = f__21346__auto__.call(null);
(statearr_28912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_28912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28915){
var map__28921 = p__28915;
var map__28921__$1 = ((cljs.core.seq_QMARK_.call(null,map__28921))?cljs.core.apply.call(null,cljs.core.hash_map,map__28921):map__28921);
var ed = map__28921__$1;
var cause = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28921__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28922_28926 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28923_28927 = null;
var count__28924_28928 = (0);
var i__28925_28929 = (0);
while(true){
if((i__28925_28929 < count__28924_28928)){
var msg_28930 = cljs.core._nth.call(null,chunk__28923_28927,i__28925_28929);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28930);

var G__28931 = seq__28922_28926;
var G__28932 = chunk__28923_28927;
var G__28933 = count__28924_28928;
var G__28934 = (i__28925_28929 + (1));
seq__28922_28926 = G__28931;
chunk__28923_28927 = G__28932;
count__28924_28928 = G__28933;
i__28925_28929 = G__28934;
continue;
} else {
var temp__4126__auto___28935 = cljs.core.seq.call(null,seq__28922_28926);
if(temp__4126__auto___28935){
var seq__28922_28936__$1 = temp__4126__auto___28935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28922_28936__$1)){
var c__18906__auto___28937 = cljs.core.chunk_first.call(null,seq__28922_28936__$1);
var G__28938 = cljs.core.chunk_rest.call(null,seq__28922_28936__$1);
var G__28939 = c__18906__auto___28937;
var G__28940 = cljs.core.count.call(null,c__18906__auto___28937);
var G__28941 = (0);
seq__28922_28926 = G__28938;
chunk__28923_28927 = G__28939;
count__28924_28928 = G__28940;
i__28925_28929 = G__28941;
continue;
} else {
var msg_28942 = cljs.core.first.call(null,seq__28922_28936__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28942);

var G__28943 = cljs.core.next.call(null,seq__28922_28936__$1);
var G__28944 = null;
var G__28945 = (0);
var G__28946 = (0);
seq__28922_28926 = G__28943;
chunk__28923_28927 = G__28944;
count__28924_28928 = G__28945;
i__28925_28929 = G__28946;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28947){
var map__28949 = p__28947;
var map__28949__$1 = ((cljs.core.seq_QMARK_.call(null,map__28949))?cljs.core.apply.call(null,cljs.core.hash_map,map__28949):map__28949);
var w = map__28949__$1;
var message = cljs.core.get.call(null,map__28949__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28956 = cljs.core.seq.call(null,plugins);
var chunk__28957 = null;
var count__28958 = (0);
var i__28959 = (0);
while(true){
if((i__28959 < count__28958)){
var vec__28960 = cljs.core._nth.call(null,chunk__28957,i__28959);
var k = cljs.core.nth.call(null,vec__28960,(0),null);
var plugin = cljs.core.nth.call(null,vec__28960,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28962 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28956,chunk__28957,count__28958,i__28959,pl_28962,vec__28960,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28962.call(null,msg_hist);
});})(seq__28956,chunk__28957,count__28958,i__28959,pl_28962,vec__28960,k,plugin))
);
} else {
}

var G__28963 = seq__28956;
var G__28964 = chunk__28957;
var G__28965 = count__28958;
var G__28966 = (i__28959 + (1));
seq__28956 = G__28963;
chunk__28957 = G__28964;
count__28958 = G__28965;
i__28959 = G__28966;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28956);
if(temp__4126__auto__){
var seq__28956__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28956__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__28956__$1);
var G__28967 = cljs.core.chunk_rest.call(null,seq__28956__$1);
var G__28968 = c__18906__auto__;
var G__28969 = cljs.core.count.call(null,c__18906__auto__);
var G__28970 = (0);
seq__28956 = G__28967;
chunk__28957 = G__28968;
count__28958 = G__28969;
i__28959 = G__28970;
continue;
} else {
var vec__28961 = cljs.core.first.call(null,seq__28956__$1);
var k = cljs.core.nth.call(null,vec__28961,(0),null);
var plugin = cljs.core.nth.call(null,vec__28961,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28971 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28956,chunk__28957,count__28958,i__28959,pl_28971,vec__28961,k,plugin,seq__28956__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28971.call(null,msg_hist);
});})(seq__28956,chunk__28957,count__28958,i__28959,pl_28971,vec__28961,k,plugin,seq__28956__$1,temp__4126__auto__))
);
} else {
}

var G__28972 = cljs.core.next.call(null,seq__28956__$1);
var G__28973 = null;
var G__28974 = (0);
var G__28975 = (0);
seq__28956 = G__28972;
chunk__28957 = G__28973;
count__28958 = G__28974;
i__28959 = G__28975;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__28977 = arguments.length;
switch (G__28977) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28980){
var map__28981 = p__28980;
var map__28981__$1 = ((cljs.core.seq_QMARK_.call(null,map__28981))?cljs.core.apply.call(null,cljs.core.hash_map,map__28981):map__28981);
var opts = map__28981__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28979){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28979));
});

//# sourceMappingURL=client.js.map?rel=1439894837706