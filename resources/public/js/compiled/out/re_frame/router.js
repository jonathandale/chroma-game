// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_25658){
var state_val_25659 = (state_25658[(1)]);
if((state_val_25659 === (7))){
var inst_25643 = (state_25658[(2)]);
var state_25658__$1 = (function (){var statearr_25660 = state_25658;
(statearr_25660[(7)] = inst_25643);

return statearr_25660;
})();
var statearr_25661_25681 = state_25658__$1;
(statearr_25661_25681[(2)] = null);

(statearr_25661_25681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (1))){
var state_25658__$1 = state_25658;
var statearr_25662_25682 = state_25658__$1;
(statearr_25662_25682[(2)] = null);

(statearr_25662_25682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (4))){
var inst_25630 = (state_25658[(8)]);
var inst_25630__$1 = (state_25658[(2)]);
var inst_25631 = cljs.core.meta.call(null,inst_25630__$1);
var inst_25632 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25631);
var state_25658__$1 = (function (){var statearr_25663 = state_25658;
(statearr_25663[(8)] = inst_25630__$1);

return statearr_25663;
})();
if(cljs.core.truth_(inst_25632)){
var statearr_25664_25683 = state_25658__$1;
(statearr_25664_25683[(1)] = (5));

} else {
var statearr_25665_25684 = state_25658__$1;
(statearr_25665_25684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (6))){
var inst_25639 = cljs.core.async.timeout.call(null,(0));
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(9),inst_25639);
} else {
if((state_val_25659 === (3))){
var inst_25656 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25658__$1,inst_25656);
} else {
if((state_val_25659 === (12))){
var inst_25630 = (state_25658[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25658,(11),Object,null,(10));
var inst_25651 = re_frame.handlers.handle.call(null,inst_25630);
var state_25658__$1 = state_25658;
var statearr_25666_25685 = state_25658__$1;
(statearr_25666_25685[(2)] = inst_25651);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25658__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (2))){
var state_25658__$1 = state_25658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_25659 === (11))){
var inst_25644 = (state_25658[(2)]);
var inst_25645 = re_frame.router.purge_chan.call(null);
var inst_25646 = re_frame$router$router_loop.call(null);
var inst_25647 = (function(){throw inst_25644})();
var state_25658__$1 = (function (){var statearr_25667 = state_25658;
(statearr_25667[(9)] = inst_25646);

(statearr_25667[(10)] = inst_25645);

return statearr_25667;
})();
var statearr_25668_25686 = state_25658__$1;
(statearr_25668_25686[(2)] = inst_25647);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25658__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (9))){
var inst_25641 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25669_25687 = state_25658__$1;
(statearr_25669_25687[(2)] = inst_25641);

(statearr_25669_25687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (5))){
var inst_25634 = reagent.core.flush.call(null);
var inst_25635 = cljs.core.async.timeout.call(null,(20));
var state_25658__$1 = (function (){var statearr_25670 = state_25658;
(statearr_25670[(11)] = inst_25634);

return statearr_25670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25658__$1,(8),inst_25635);
} else {
if((state_val_25659 === (10))){
var inst_25653 = (state_25658[(2)]);
var state_25658__$1 = (function (){var statearr_25671 = state_25658;
(statearr_25671[(12)] = inst_25653);

return statearr_25671;
})();
var statearr_25672_25688 = state_25658__$1;
(statearr_25672_25688[(2)] = null);

(statearr_25672_25688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25659 === (8))){
var inst_25637 = (state_25658[(2)]);
var state_25658__$1 = state_25658;
var statearr_25673_25689 = state_25658__$1;
(statearr_25673_25689[(2)] = inst_25637);

(statearr_25673_25689[(1)] = (7));


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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21284__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21284__auto____0 = (function (){
var statearr_25677 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25677[(0)] = re_frame$router$router_loop_$_state_machine__21284__auto__);

(statearr_25677[(1)] = (1));

return statearr_25677;
});
var re_frame$router$router_loop_$_state_machine__21284__auto____1 = (function (state_25658){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_25658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e25678){if((e25678 instanceof Object)){
var ex__21287__auto__ = e25678;
var statearr_25679_25690 = state_25658;
(statearr_25679_25690[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25691 = state_25658;
state_25658 = G__25691;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21284__auto__ = function(state_25658){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21284__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21284__auto____1.call(this,state_25658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21284__auto____0;
re_frame$router$router_loop_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21284__auto____1;
return re_frame$router$router_loop_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_25680 = f__21346__auto__.call(null);
(statearr_25680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_25680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1439894835163