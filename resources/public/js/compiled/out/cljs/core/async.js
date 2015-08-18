// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25697 = (function (f,fn_handler,meta25698){
this.f = f;
this.fn_handler = fn_handler;
this.meta25698 = meta25698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25699){
var self__ = this;
var _25699__$1 = this;
return self__.meta25698;
});

cljs.core.async.t25697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25699,meta25698__$1){
var self__ = this;
var _25699__$1 = this;
return (new cljs.core.async.t25697(self__.f,self__.fn_handler,meta25698__$1));
});

cljs.core.async.t25697.cljs$lang$type = true;

cljs.core.async.t25697.cljs$lang$ctorStr = "cljs.core.async/t25697";

cljs.core.async.t25697.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t25697");
});

cljs.core.async.__GT_t25697 = (function cljs$core$async$fn_handler_$___GT_t25697(f__$1,fn_handler__$1,meta25698){
return (new cljs.core.async.t25697(f__$1,fn_handler__$1,meta25698));
});

}

return (new cljs.core.async.t25697(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__25701 = buff;
if(G__25701){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__25701.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25701.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25701);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25701);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__25703 = arguments.length;
switch (G__25703) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__25706 = arguments.length;
switch (G__25706) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25708 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25708);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25708,ret){
return (function (){
return fn1.call(null,val_25708);
});})(val_25708,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__25710 = arguments.length;
switch (G__25710) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19006__auto___25712 = n;
var x_25713 = (0);
while(true){
if((x_25713 < n__19006__auto___25712)){
(a[x_25713] = (0));

var G__25714 = (x_25713 + (1));
x_25713 = G__25714;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25715 = (i + (1));
i = G__25715;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25719 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25719 = (function (flag,alt_flag,meta25720){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25720 = meta25720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25721){
var self__ = this;
var _25721__$1 = this;
return self__.meta25720;
});})(flag))
;

cljs.core.async.t25719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25721,meta25720__$1){
var self__ = this;
var _25721__$1 = this;
return (new cljs.core.async.t25719(self__.flag,self__.alt_flag,meta25720__$1));
});})(flag))
;

cljs.core.async.t25719.cljs$lang$type = true;

cljs.core.async.t25719.cljs$lang$ctorStr = "cljs.core.async/t25719";

cljs.core.async.t25719.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t25719");
});})(flag))
;

cljs.core.async.__GT_t25719 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25719(flag__$1,alt_flag__$1,meta25720){
return (new cljs.core.async.t25719(flag__$1,alt_flag__$1,meta25720));
});})(flag))
;

}

return (new cljs.core.async.t25719(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25725 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25725 = (function (cb,flag,alt_handler,meta25726){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25726 = meta25726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25727){
var self__ = this;
var _25727__$1 = this;
return self__.meta25726;
});

cljs.core.async.t25725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25727,meta25726__$1){
var self__ = this;
var _25727__$1 = this;
return (new cljs.core.async.t25725(self__.cb,self__.flag,self__.alt_handler,meta25726__$1));
});

cljs.core.async.t25725.cljs$lang$type = true;

cljs.core.async.t25725.cljs$lang$ctorStr = "cljs.core.async/t25725";

cljs.core.async.t25725.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t25725");
});

cljs.core.async.__GT_t25725 = (function cljs$core$async$alt_handler_$___GT_t25725(cb__$1,flag__$1,alt_handler__$1,meta25726){
return (new cljs.core.async.t25725(cb__$1,flag__$1,alt_handler__$1,meta25726));
});

}

return (new cljs.core.async.t25725(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25728_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25728_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25729_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25729_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18121__auto__ = wport;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25730 = (i + (1));
i = G__25730;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18121__auto__ = ret;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18109__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25733){
var map__25734 = p__25733;
var map__25734__$1 = ((cljs.core.seq_QMARK_.call(null,map__25734))?cljs.core.apply.call(null,cljs.core.hash_map,map__25734):map__25734);
var opts = map__25734__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25731){
var G__25732 = cljs.core.first.call(null,seq25731);
var seq25731__$1 = cljs.core.next.call(null,seq25731);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25732,seq25731__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__25736 = arguments.length;
switch (G__25736) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21345__auto___25785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___25785){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___25785){
return (function (state_25760){
var state_val_25761 = (state_25760[(1)]);
if((state_val_25761 === (7))){
var inst_25756 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
var statearr_25762_25786 = state_25760__$1;
(statearr_25762_25786[(2)] = inst_25756);

(statearr_25762_25786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (1))){
var state_25760__$1 = state_25760;
var statearr_25763_25787 = state_25760__$1;
(statearr_25763_25787[(2)] = null);

(statearr_25763_25787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (4))){
var inst_25739 = (state_25760[(7)]);
var inst_25739__$1 = (state_25760[(2)]);
var inst_25740 = (inst_25739__$1 == null);
var state_25760__$1 = (function (){var statearr_25764 = state_25760;
(statearr_25764[(7)] = inst_25739__$1);

return statearr_25764;
})();
if(cljs.core.truth_(inst_25740)){
var statearr_25765_25788 = state_25760__$1;
(statearr_25765_25788[(1)] = (5));

} else {
var statearr_25766_25789 = state_25760__$1;
(statearr_25766_25789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (13))){
var state_25760__$1 = state_25760;
var statearr_25767_25790 = state_25760__$1;
(statearr_25767_25790[(2)] = null);

(statearr_25767_25790[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (6))){
var inst_25739 = (state_25760[(7)]);
var state_25760__$1 = state_25760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25760__$1,(11),to,inst_25739);
} else {
if((state_val_25761 === (3))){
var inst_25758 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25760__$1,inst_25758);
} else {
if((state_val_25761 === (12))){
var state_25760__$1 = state_25760;
var statearr_25768_25791 = state_25760__$1;
(statearr_25768_25791[(2)] = null);

(statearr_25768_25791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (2))){
var state_25760__$1 = state_25760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25760__$1,(4),from);
} else {
if((state_val_25761 === (11))){
var inst_25749 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
if(cljs.core.truth_(inst_25749)){
var statearr_25769_25792 = state_25760__$1;
(statearr_25769_25792[(1)] = (12));

} else {
var statearr_25770_25793 = state_25760__$1;
(statearr_25770_25793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (9))){
var state_25760__$1 = state_25760;
var statearr_25771_25794 = state_25760__$1;
(statearr_25771_25794[(2)] = null);

(statearr_25771_25794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (5))){
var state_25760__$1 = state_25760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25772_25795 = state_25760__$1;
(statearr_25772_25795[(1)] = (8));

} else {
var statearr_25773_25796 = state_25760__$1;
(statearr_25773_25796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (14))){
var inst_25754 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
var statearr_25774_25797 = state_25760__$1;
(statearr_25774_25797[(2)] = inst_25754);

(statearr_25774_25797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (10))){
var inst_25746 = (state_25760[(2)]);
var state_25760__$1 = state_25760;
var statearr_25775_25798 = state_25760__$1;
(statearr_25775_25798[(2)] = inst_25746);

(statearr_25775_25798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25761 === (8))){
var inst_25743 = cljs.core.async.close_BANG_.call(null,to);
var state_25760__$1 = state_25760;
var statearr_25776_25799 = state_25760__$1;
(statearr_25776_25799[(2)] = inst_25743);

(statearr_25776_25799[(1)] = (10));


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
});})(c__21345__auto___25785))
;
return ((function (switch__21283__auto__,c__21345__auto___25785){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_25780 = [null,null,null,null,null,null,null,null];
(statearr_25780[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_25780[(1)] = (1));

return statearr_25780;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_25760){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_25760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e25781){if((e25781 instanceof Object)){
var ex__21287__auto__ = e25781;
var statearr_25782_25800 = state_25760;
(statearr_25782_25800[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25801 = state_25760;
state_25760 = G__25801;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_25760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_25760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___25785))
})();
var state__21347__auto__ = (function (){var statearr_25783 = f__21346__auto__.call(null);
(statearr_25783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___25785);

return statearr_25783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___25785))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25985){
var vec__25986 = p__25985;
var v = cljs.core.nth.call(null,vec__25986,(0),null);
var p = cljs.core.nth.call(null,vec__25986,(1),null);
var job = vec__25986;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21345__auto___26168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26168,res,vec__25986,v,p,job,jobs,results){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26168,res,vec__25986,v,p,job,jobs,results){
return (function (state_25991){
var state_val_25992 = (state_25991[(1)]);
if((state_val_25992 === (2))){
var inst_25988 = (state_25991[(2)]);
var inst_25989 = cljs.core.async.close_BANG_.call(null,res);
var state_25991__$1 = (function (){var statearr_25993 = state_25991;
(statearr_25993[(7)] = inst_25988);

return statearr_25993;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25991__$1,inst_25989);
} else {
if((state_val_25992 === (1))){
var state_25991__$1 = state_25991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25991__$1,(2),res,v);
} else {
return null;
}
}
});})(c__21345__auto___26168,res,vec__25986,v,p,job,jobs,results))
;
return ((function (switch__21283__auto__,c__21345__auto___26168,res,vec__25986,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_25997 = [null,null,null,null,null,null,null,null];
(statearr_25997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_25997[(1)] = (1));

return statearr_25997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_25991){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_25991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e25998){if((e25998 instanceof Object)){
var ex__21287__auto__ = e25998;
var statearr_25999_26169 = state_25991;
(statearr_25999_26169[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26170 = state_25991;
state_25991 = G__26170;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_25991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_25991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26168,res,vec__25986,v,p,job,jobs,results))
})();
var state__21347__auto__ = (function (){var statearr_26000 = f__21346__auto__.call(null);
(statearr_26000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26168);

return statearr_26000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26168,res,vec__25986,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26001){
var vec__26002 = p__26001;
var v = cljs.core.nth.call(null,vec__26002,(0),null);
var p = cljs.core.nth.call(null,vec__26002,(1),null);
var job = vec__26002;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19006__auto___26171 = n;
var __26172 = (0);
while(true){
if((__26172 < n__19006__auto___26171)){
var G__26003_26173 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26003_26173) {
case "async":
var c__21345__auto___26175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26172,c__21345__auto___26175,G__26003_26173,n__19006__auto___26171,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (__26172,c__21345__auto___26175,G__26003_26173,n__19006__auto___26171,jobs,results,process,async){
return (function (state_26016){
var state_val_26017 = (state_26016[(1)]);
if((state_val_26017 === (7))){
var inst_26012 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
var statearr_26018_26176 = state_26016__$1;
(statearr_26018_26176[(2)] = inst_26012);

(statearr_26018_26176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (6))){
var state_26016__$1 = state_26016;
var statearr_26019_26177 = state_26016__$1;
(statearr_26019_26177[(2)] = null);

(statearr_26019_26177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (5))){
var state_26016__$1 = state_26016;
var statearr_26020_26178 = state_26016__$1;
(statearr_26020_26178[(2)] = null);

(statearr_26020_26178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (4))){
var inst_26006 = (state_26016[(2)]);
var inst_26007 = async.call(null,inst_26006);
var state_26016__$1 = state_26016;
if(cljs.core.truth_(inst_26007)){
var statearr_26021_26179 = state_26016__$1;
(statearr_26021_26179[(1)] = (5));

} else {
var statearr_26022_26180 = state_26016__$1;
(statearr_26022_26180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26017 === (3))){
var inst_26014 = (state_26016[(2)]);
var state_26016__$1 = state_26016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26016__$1,inst_26014);
} else {
if((state_val_26017 === (2))){
var state_26016__$1 = state_26016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26016__$1,(4),jobs);
} else {
if((state_val_26017 === (1))){
var state_26016__$1 = state_26016;
var statearr_26023_26181 = state_26016__$1;
(statearr_26023_26181[(2)] = null);

(statearr_26023_26181[(1)] = (2));


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
});})(__26172,c__21345__auto___26175,G__26003_26173,n__19006__auto___26171,jobs,results,process,async))
;
return ((function (__26172,switch__21283__auto__,c__21345__auto___26175,G__26003_26173,n__19006__auto___26171,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26027 = [null,null,null,null,null,null,null];
(statearr_26027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26027[(1)] = (1));

return statearr_26027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26016){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26028){if((e26028 instanceof Object)){
var ex__21287__auto__ = e26028;
var statearr_26029_26182 = state_26016;
(statearr_26029_26182[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26183 = state_26016;
state_26016 = G__26183;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__26172,switch__21283__auto__,c__21345__auto___26175,G__26003_26173,n__19006__auto___26171,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26030 = f__21346__auto__.call(null);
(statearr_26030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26175);

return statearr_26030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(__26172,c__21345__auto___26175,G__26003_26173,n__19006__auto___26171,jobs,results,process,async))
);


break;
case "compute":
var c__21345__auto___26184 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26172,c__21345__auto___26184,G__26003_26173,n__19006__auto___26171,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (__26172,c__21345__auto___26184,G__26003_26173,n__19006__auto___26171,jobs,results,process,async){
return (function (state_26043){
var state_val_26044 = (state_26043[(1)]);
if((state_val_26044 === (7))){
var inst_26039 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
var statearr_26045_26185 = state_26043__$1;
(statearr_26045_26185[(2)] = inst_26039);

(statearr_26045_26185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (6))){
var state_26043__$1 = state_26043;
var statearr_26046_26186 = state_26043__$1;
(statearr_26046_26186[(2)] = null);

(statearr_26046_26186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (5))){
var state_26043__$1 = state_26043;
var statearr_26047_26187 = state_26043__$1;
(statearr_26047_26187[(2)] = null);

(statearr_26047_26187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (4))){
var inst_26033 = (state_26043[(2)]);
var inst_26034 = process.call(null,inst_26033);
var state_26043__$1 = state_26043;
if(cljs.core.truth_(inst_26034)){
var statearr_26048_26188 = state_26043__$1;
(statearr_26048_26188[(1)] = (5));

} else {
var statearr_26049_26189 = state_26043__$1;
(statearr_26049_26189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26044 === (3))){
var inst_26041 = (state_26043[(2)]);
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26043__$1,inst_26041);
} else {
if((state_val_26044 === (2))){
var state_26043__$1 = state_26043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26043__$1,(4),jobs);
} else {
if((state_val_26044 === (1))){
var state_26043__$1 = state_26043;
var statearr_26050_26190 = state_26043__$1;
(statearr_26050_26190[(2)] = null);

(statearr_26050_26190[(1)] = (2));


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
});})(__26172,c__21345__auto___26184,G__26003_26173,n__19006__auto___26171,jobs,results,process,async))
;
return ((function (__26172,switch__21283__auto__,c__21345__auto___26184,G__26003_26173,n__19006__auto___26171,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26054 = [null,null,null,null,null,null,null];
(statearr_26054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26054[(1)] = (1));

return statearr_26054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26043){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26055){if((e26055 instanceof Object)){
var ex__21287__auto__ = e26055;
var statearr_26056_26191 = state_26043;
(statearr_26056_26191[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26192 = state_26043;
state_26043 = G__26192;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26043){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(__26172,switch__21283__auto__,c__21345__auto___26184,G__26003_26173,n__19006__auto___26171,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26057 = f__21346__auto__.call(null);
(statearr_26057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26184);

return statearr_26057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(__26172,c__21345__auto___26184,G__26003_26173,n__19006__auto___26171,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26193 = (__26172 + (1));
__26172 = G__26193;
continue;
} else {
}
break;
}

var c__21345__auto___26194 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26194,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26194,jobs,results,process,async){
return (function (state_26079){
var state_val_26080 = (state_26079[(1)]);
if((state_val_26080 === (9))){
var inst_26072 = (state_26079[(2)]);
var state_26079__$1 = (function (){var statearr_26081 = state_26079;
(statearr_26081[(7)] = inst_26072);

return statearr_26081;
})();
var statearr_26082_26195 = state_26079__$1;
(statearr_26082_26195[(2)] = null);

(statearr_26082_26195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (8))){
var inst_26065 = (state_26079[(8)]);
var inst_26070 = (state_26079[(2)]);
var state_26079__$1 = (function (){var statearr_26083 = state_26079;
(statearr_26083[(9)] = inst_26070);

return statearr_26083;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26079__$1,(9),results,inst_26065);
} else {
if((state_val_26080 === (7))){
var inst_26075 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
var statearr_26084_26196 = state_26079__$1;
(statearr_26084_26196[(2)] = inst_26075);

(statearr_26084_26196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (6))){
var inst_26060 = (state_26079[(10)]);
var inst_26065 = (state_26079[(8)]);
var inst_26065__$1 = cljs.core.async.chan.call(null,(1));
var inst_26066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26067 = [inst_26060,inst_26065__$1];
var inst_26068 = (new cljs.core.PersistentVector(null,2,(5),inst_26066,inst_26067,null));
var state_26079__$1 = (function (){var statearr_26085 = state_26079;
(statearr_26085[(8)] = inst_26065__$1);

return statearr_26085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26079__$1,(8),jobs,inst_26068);
} else {
if((state_val_26080 === (5))){
var inst_26063 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26079__$1 = state_26079;
var statearr_26086_26197 = state_26079__$1;
(statearr_26086_26197[(2)] = inst_26063);

(statearr_26086_26197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (4))){
var inst_26060 = (state_26079[(10)]);
var inst_26060__$1 = (state_26079[(2)]);
var inst_26061 = (inst_26060__$1 == null);
var state_26079__$1 = (function (){var statearr_26087 = state_26079;
(statearr_26087[(10)] = inst_26060__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_26061)){
var statearr_26088_26198 = state_26079__$1;
(statearr_26088_26198[(1)] = (5));

} else {
var statearr_26089_26199 = state_26079__$1;
(statearr_26089_26199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26080 === (3))){
var inst_26077 = (state_26079[(2)]);
var state_26079__$1 = state_26079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26079__$1,inst_26077);
} else {
if((state_val_26080 === (2))){
var state_26079__$1 = state_26079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26079__$1,(4),from);
} else {
if((state_val_26080 === (1))){
var state_26079__$1 = state_26079;
var statearr_26090_26200 = state_26079__$1;
(statearr_26090_26200[(2)] = null);

(statearr_26090_26200[(1)] = (2));


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
});})(c__21345__auto___26194,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21345__auto___26194,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26094 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26094[(1)] = (1));

return statearr_26094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26079){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26095){if((e26095 instanceof Object)){
var ex__21287__auto__ = e26095;
var statearr_26096_26201 = state_26079;
(statearr_26096_26201[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26202 = state_26079;
state_26079 = G__26202;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26194,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26097 = f__21346__auto__.call(null);
(statearr_26097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26194);

return statearr_26097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26194,jobs,results,process,async))
);


var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__,jobs,results,process,async){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__,jobs,results,process,async){
return (function (state_26135){
var state_val_26136 = (state_26135[(1)]);
if((state_val_26136 === (7))){
var inst_26131 = (state_26135[(2)]);
var state_26135__$1 = state_26135;
var statearr_26137_26203 = state_26135__$1;
(statearr_26137_26203[(2)] = inst_26131);

(statearr_26137_26203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (20))){
var state_26135__$1 = state_26135;
var statearr_26138_26204 = state_26135__$1;
(statearr_26138_26204[(2)] = null);

(statearr_26138_26204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (1))){
var state_26135__$1 = state_26135;
var statearr_26139_26205 = state_26135__$1;
(statearr_26139_26205[(2)] = null);

(statearr_26139_26205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (4))){
var inst_26100 = (state_26135[(7)]);
var inst_26100__$1 = (state_26135[(2)]);
var inst_26101 = (inst_26100__$1 == null);
var state_26135__$1 = (function (){var statearr_26140 = state_26135;
(statearr_26140[(7)] = inst_26100__$1);

return statearr_26140;
})();
if(cljs.core.truth_(inst_26101)){
var statearr_26141_26206 = state_26135__$1;
(statearr_26141_26206[(1)] = (5));

} else {
var statearr_26142_26207 = state_26135__$1;
(statearr_26142_26207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (15))){
var inst_26113 = (state_26135[(8)]);
var state_26135__$1 = state_26135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26135__$1,(18),to,inst_26113);
} else {
if((state_val_26136 === (21))){
var inst_26126 = (state_26135[(2)]);
var state_26135__$1 = state_26135;
var statearr_26143_26208 = state_26135__$1;
(statearr_26143_26208[(2)] = inst_26126);

(statearr_26143_26208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (13))){
var inst_26128 = (state_26135[(2)]);
var state_26135__$1 = (function (){var statearr_26144 = state_26135;
(statearr_26144[(9)] = inst_26128);

return statearr_26144;
})();
var statearr_26145_26209 = state_26135__$1;
(statearr_26145_26209[(2)] = null);

(statearr_26145_26209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (6))){
var inst_26100 = (state_26135[(7)]);
var state_26135__$1 = state_26135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26135__$1,(11),inst_26100);
} else {
if((state_val_26136 === (17))){
var inst_26121 = (state_26135[(2)]);
var state_26135__$1 = state_26135;
if(cljs.core.truth_(inst_26121)){
var statearr_26146_26210 = state_26135__$1;
(statearr_26146_26210[(1)] = (19));

} else {
var statearr_26147_26211 = state_26135__$1;
(statearr_26147_26211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (3))){
var inst_26133 = (state_26135[(2)]);
var state_26135__$1 = state_26135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26135__$1,inst_26133);
} else {
if((state_val_26136 === (12))){
var inst_26110 = (state_26135[(10)]);
var state_26135__$1 = state_26135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26135__$1,(14),inst_26110);
} else {
if((state_val_26136 === (2))){
var state_26135__$1 = state_26135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26135__$1,(4),results);
} else {
if((state_val_26136 === (19))){
var state_26135__$1 = state_26135;
var statearr_26148_26212 = state_26135__$1;
(statearr_26148_26212[(2)] = null);

(statearr_26148_26212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (11))){
var inst_26110 = (state_26135[(2)]);
var state_26135__$1 = (function (){var statearr_26149 = state_26135;
(statearr_26149[(10)] = inst_26110);

return statearr_26149;
})();
var statearr_26150_26213 = state_26135__$1;
(statearr_26150_26213[(2)] = null);

(statearr_26150_26213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (9))){
var state_26135__$1 = state_26135;
var statearr_26151_26214 = state_26135__$1;
(statearr_26151_26214[(2)] = null);

(statearr_26151_26214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (5))){
var state_26135__$1 = state_26135;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26152_26215 = state_26135__$1;
(statearr_26152_26215[(1)] = (8));

} else {
var statearr_26153_26216 = state_26135__$1;
(statearr_26153_26216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (14))){
var inst_26115 = (state_26135[(11)]);
var inst_26113 = (state_26135[(8)]);
var inst_26113__$1 = (state_26135[(2)]);
var inst_26114 = (inst_26113__$1 == null);
var inst_26115__$1 = cljs.core.not.call(null,inst_26114);
var state_26135__$1 = (function (){var statearr_26154 = state_26135;
(statearr_26154[(11)] = inst_26115__$1);

(statearr_26154[(8)] = inst_26113__$1);

return statearr_26154;
})();
if(inst_26115__$1){
var statearr_26155_26217 = state_26135__$1;
(statearr_26155_26217[(1)] = (15));

} else {
var statearr_26156_26218 = state_26135__$1;
(statearr_26156_26218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (16))){
var inst_26115 = (state_26135[(11)]);
var state_26135__$1 = state_26135;
var statearr_26157_26219 = state_26135__$1;
(statearr_26157_26219[(2)] = inst_26115);

(statearr_26157_26219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (10))){
var inst_26107 = (state_26135[(2)]);
var state_26135__$1 = state_26135;
var statearr_26158_26220 = state_26135__$1;
(statearr_26158_26220[(2)] = inst_26107);

(statearr_26158_26220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (18))){
var inst_26118 = (state_26135[(2)]);
var state_26135__$1 = state_26135;
var statearr_26159_26221 = state_26135__$1;
(statearr_26159_26221[(2)] = inst_26118);

(statearr_26159_26221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26136 === (8))){
var inst_26104 = cljs.core.async.close_BANG_.call(null,to);
var state_26135__$1 = state_26135;
var statearr_26160_26222 = state_26135__$1;
(statearr_26160_26222[(2)] = inst_26104);

(statearr_26160_26222[(1)] = (10));


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
});})(c__21345__auto__,jobs,results,process,async))
;
return ((function (switch__21283__auto__,c__21345__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_26164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26164[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__);

(statearr_26164[(1)] = (1));

return statearr_26164;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1 = (function (state_26135){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26165){if((e26165 instanceof Object)){
var ex__21287__auto__ = e26165;
var statearr_26166_26223 = state_26135;
(statearr_26166_26223[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26224 = state_26135;
state_26135 = G__26224;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__ = function(state_26135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1.call(this,state_26135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__,jobs,results,process,async))
})();
var state__21347__auto__ = (function (){var statearr_26167 = f__21346__auto__.call(null);
(statearr_26167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__,jobs,results,process,async))
);

return c__21345__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__26226 = arguments.length;
switch (G__26226) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__26229 = arguments.length;
switch (G__26229) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__26232 = arguments.length;
switch (G__26232) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21345__auto___26284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26284,tc,fc){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26284,tc,fc){
return (function (state_26258){
var state_val_26259 = (state_26258[(1)]);
if((state_val_26259 === (7))){
var inst_26254 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
var statearr_26260_26285 = state_26258__$1;
(statearr_26260_26285[(2)] = inst_26254);

(statearr_26260_26285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (1))){
var state_26258__$1 = state_26258;
var statearr_26261_26286 = state_26258__$1;
(statearr_26261_26286[(2)] = null);

(statearr_26261_26286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (4))){
var inst_26235 = (state_26258[(7)]);
var inst_26235__$1 = (state_26258[(2)]);
var inst_26236 = (inst_26235__$1 == null);
var state_26258__$1 = (function (){var statearr_26262 = state_26258;
(statearr_26262[(7)] = inst_26235__$1);

return statearr_26262;
})();
if(cljs.core.truth_(inst_26236)){
var statearr_26263_26287 = state_26258__$1;
(statearr_26263_26287[(1)] = (5));

} else {
var statearr_26264_26288 = state_26258__$1;
(statearr_26264_26288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (13))){
var state_26258__$1 = state_26258;
var statearr_26265_26289 = state_26258__$1;
(statearr_26265_26289[(2)] = null);

(statearr_26265_26289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (6))){
var inst_26235 = (state_26258[(7)]);
var inst_26241 = p.call(null,inst_26235);
var state_26258__$1 = state_26258;
if(cljs.core.truth_(inst_26241)){
var statearr_26266_26290 = state_26258__$1;
(statearr_26266_26290[(1)] = (9));

} else {
var statearr_26267_26291 = state_26258__$1;
(statearr_26267_26291[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (3))){
var inst_26256 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26258__$1,inst_26256);
} else {
if((state_val_26259 === (12))){
var state_26258__$1 = state_26258;
var statearr_26268_26292 = state_26258__$1;
(statearr_26268_26292[(2)] = null);

(statearr_26268_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (2))){
var state_26258__$1 = state_26258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26258__$1,(4),ch);
} else {
if((state_val_26259 === (11))){
var inst_26235 = (state_26258[(7)]);
var inst_26245 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26258__$1,(8),inst_26245,inst_26235);
} else {
if((state_val_26259 === (9))){
var state_26258__$1 = state_26258;
var statearr_26269_26293 = state_26258__$1;
(statearr_26269_26293[(2)] = tc);

(statearr_26269_26293[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (5))){
var inst_26238 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26239 = cljs.core.async.close_BANG_.call(null,fc);
var state_26258__$1 = (function (){var statearr_26270 = state_26258;
(statearr_26270[(8)] = inst_26238);

return statearr_26270;
})();
var statearr_26271_26294 = state_26258__$1;
(statearr_26271_26294[(2)] = inst_26239);

(statearr_26271_26294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (14))){
var inst_26252 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
var statearr_26272_26295 = state_26258__$1;
(statearr_26272_26295[(2)] = inst_26252);

(statearr_26272_26295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (10))){
var state_26258__$1 = state_26258;
var statearr_26273_26296 = state_26258__$1;
(statearr_26273_26296[(2)] = fc);

(statearr_26273_26296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26259 === (8))){
var inst_26247 = (state_26258[(2)]);
var state_26258__$1 = state_26258;
if(cljs.core.truth_(inst_26247)){
var statearr_26274_26297 = state_26258__$1;
(statearr_26274_26297[(1)] = (12));

} else {
var statearr_26275_26298 = state_26258__$1;
(statearr_26275_26298[(1)] = (13));

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
});})(c__21345__auto___26284,tc,fc))
;
return ((function (switch__21283__auto__,c__21345__auto___26284,tc,fc){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26279 = [null,null,null,null,null,null,null,null,null];
(statearr_26279[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26279[(1)] = (1));

return statearr_26279;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26258){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26280){if((e26280 instanceof Object)){
var ex__21287__auto__ = e26280;
var statearr_26281_26299 = state_26258;
(statearr_26281_26299[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26300 = state_26258;
state_26258 = G__26300;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26284,tc,fc))
})();
var state__21347__auto__ = (function (){var statearr_26282 = f__21346__auto__.call(null);
(statearr_26282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26284);

return statearr_26282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26284,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_26347){
var state_val_26348 = (state_26347[(1)]);
if((state_val_26348 === (7))){
var inst_26343 = (state_26347[(2)]);
var state_26347__$1 = state_26347;
var statearr_26349_26365 = state_26347__$1;
(statearr_26349_26365[(2)] = inst_26343);

(statearr_26349_26365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (6))){
var inst_26333 = (state_26347[(7)]);
var inst_26336 = (state_26347[(8)]);
var inst_26340 = f.call(null,inst_26333,inst_26336);
var inst_26333__$1 = inst_26340;
var state_26347__$1 = (function (){var statearr_26350 = state_26347;
(statearr_26350[(7)] = inst_26333__$1);

return statearr_26350;
})();
var statearr_26351_26366 = state_26347__$1;
(statearr_26351_26366[(2)] = null);

(statearr_26351_26366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (5))){
var inst_26333 = (state_26347[(7)]);
var state_26347__$1 = state_26347;
var statearr_26352_26367 = state_26347__$1;
(statearr_26352_26367[(2)] = inst_26333);

(statearr_26352_26367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (4))){
var inst_26336 = (state_26347[(8)]);
var inst_26336__$1 = (state_26347[(2)]);
var inst_26337 = (inst_26336__$1 == null);
var state_26347__$1 = (function (){var statearr_26353 = state_26347;
(statearr_26353[(8)] = inst_26336__$1);

return statearr_26353;
})();
if(cljs.core.truth_(inst_26337)){
var statearr_26354_26368 = state_26347__$1;
(statearr_26354_26368[(1)] = (5));

} else {
var statearr_26355_26369 = state_26347__$1;
(statearr_26355_26369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26348 === (3))){
var inst_26345 = (state_26347[(2)]);
var state_26347__$1 = state_26347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26347__$1,inst_26345);
} else {
if((state_val_26348 === (2))){
var state_26347__$1 = state_26347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26347__$1,(4),ch);
} else {
if((state_val_26348 === (1))){
var inst_26333 = init;
var state_26347__$1 = (function (){var statearr_26356 = state_26347;
(statearr_26356[(7)] = inst_26333);

return statearr_26356;
})();
var statearr_26357_26370 = state_26347__$1;
(statearr_26357_26370[(2)] = null);

(statearr_26357_26370[(1)] = (2));


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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21284__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21284__auto____0 = (function (){
var statearr_26361 = [null,null,null,null,null,null,null,null,null];
(statearr_26361[(0)] = cljs$core$async$reduce_$_state_machine__21284__auto__);

(statearr_26361[(1)] = (1));

return statearr_26361;
});
var cljs$core$async$reduce_$_state_machine__21284__auto____1 = (function (state_26347){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26362){if((e26362 instanceof Object)){
var ex__21287__auto__ = e26362;
var statearr_26363_26371 = state_26347;
(statearr_26363_26371[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26372 = state_26347;
state_26347 = G__26372;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21284__auto__ = function(state_26347){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21284__auto____1.call(this,state_26347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21284__auto____0;
cljs$core$async$reduce_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21284__auto____1;
return cljs$core$async$reduce_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26364 = f__21346__auto__.call(null);
(statearr_26364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__26374 = arguments.length;
switch (G__26374) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_26399){
var state_val_26400 = (state_26399[(1)]);
if((state_val_26400 === (7))){
var inst_26381 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
var statearr_26401_26425 = state_26399__$1;
(statearr_26401_26425[(2)] = inst_26381);

(statearr_26401_26425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (1))){
var inst_26375 = cljs.core.seq.call(null,coll);
var inst_26376 = inst_26375;
var state_26399__$1 = (function (){var statearr_26402 = state_26399;
(statearr_26402[(7)] = inst_26376);

return statearr_26402;
})();
var statearr_26403_26426 = state_26399__$1;
(statearr_26403_26426[(2)] = null);

(statearr_26403_26426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (4))){
var inst_26376 = (state_26399[(7)]);
var inst_26379 = cljs.core.first.call(null,inst_26376);
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26399__$1,(7),ch,inst_26379);
} else {
if((state_val_26400 === (13))){
var inst_26393 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
var statearr_26404_26427 = state_26399__$1;
(statearr_26404_26427[(2)] = inst_26393);

(statearr_26404_26427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (6))){
var inst_26384 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
if(cljs.core.truth_(inst_26384)){
var statearr_26405_26428 = state_26399__$1;
(statearr_26405_26428[(1)] = (8));

} else {
var statearr_26406_26429 = state_26399__$1;
(statearr_26406_26429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (3))){
var inst_26397 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26399__$1,inst_26397);
} else {
if((state_val_26400 === (12))){
var state_26399__$1 = state_26399;
var statearr_26407_26430 = state_26399__$1;
(statearr_26407_26430[(2)] = null);

(statearr_26407_26430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (2))){
var inst_26376 = (state_26399[(7)]);
var state_26399__$1 = state_26399;
if(cljs.core.truth_(inst_26376)){
var statearr_26408_26431 = state_26399__$1;
(statearr_26408_26431[(1)] = (4));

} else {
var statearr_26409_26432 = state_26399__$1;
(statearr_26409_26432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (11))){
var inst_26390 = cljs.core.async.close_BANG_.call(null,ch);
var state_26399__$1 = state_26399;
var statearr_26410_26433 = state_26399__$1;
(statearr_26410_26433[(2)] = inst_26390);

(statearr_26410_26433[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (9))){
var state_26399__$1 = state_26399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26411_26434 = state_26399__$1;
(statearr_26411_26434[(1)] = (11));

} else {
var statearr_26412_26435 = state_26399__$1;
(statearr_26412_26435[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (5))){
var inst_26376 = (state_26399[(7)]);
var state_26399__$1 = state_26399;
var statearr_26413_26436 = state_26399__$1;
(statearr_26413_26436[(2)] = inst_26376);

(statearr_26413_26436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (10))){
var inst_26395 = (state_26399[(2)]);
var state_26399__$1 = state_26399;
var statearr_26414_26437 = state_26399__$1;
(statearr_26414_26437[(2)] = inst_26395);

(statearr_26414_26437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26400 === (8))){
var inst_26376 = (state_26399[(7)]);
var inst_26386 = cljs.core.next.call(null,inst_26376);
var inst_26376__$1 = inst_26386;
var state_26399__$1 = (function (){var statearr_26415 = state_26399;
(statearr_26415[(7)] = inst_26376__$1);

return statearr_26415;
})();
var statearr_26416_26438 = state_26399__$1;
(statearr_26416_26438[(2)] = null);

(statearr_26416_26438[(1)] = (2));


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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_26420 = [null,null,null,null,null,null,null,null];
(statearr_26420[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_26420[(1)] = (1));

return statearr_26420;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_26399){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26421){if((e26421 instanceof Object)){
var ex__21287__auto__ = e26421;
var statearr_26422_26439 = state_26399;
(statearr_26422_26439[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26440 = state_26399;
state_26399 = G__26440;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_26399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_26399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_26423 = f__21346__auto__.call(null);
(statearr_26423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_26423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj26442 = {};
return obj26442;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18109__auto__ = _;
if(and__18109__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18757__auto__ = (((_ == null))?null:_);
return (function (){var or__18121__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26444 = {};
return obj26444;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26666 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26666 = (function (cs,ch,mult,meta26667){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26667 = meta26667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26666.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26666.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26666.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26666.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26666.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26668){
var self__ = this;
var _26668__$1 = this;
return self__.meta26667;
});})(cs))
;

cljs.core.async.t26666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26668,meta26667__$1){
var self__ = this;
var _26668__$1 = this;
return (new cljs.core.async.t26666(self__.cs,self__.ch,self__.mult,meta26667__$1));
});})(cs))
;

cljs.core.async.t26666.cljs$lang$type = true;

cljs.core.async.t26666.cljs$lang$ctorStr = "cljs.core.async/t26666";

cljs.core.async.t26666.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26666");
});})(cs))
;

cljs.core.async.__GT_t26666 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26666(cs__$1,ch__$1,mult__$1,meta26667){
return (new cljs.core.async.t26666(cs__$1,ch__$1,mult__$1,meta26667));
});})(cs))
;

}

return (new cljs.core.async.t26666(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21345__auto___26887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___26887,cs,m,dchan,dctr,done){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___26887,cs,m,dchan,dctr,done){
return (function (state_26799){
var state_val_26800 = (state_26799[(1)]);
if((state_val_26800 === (7))){
var inst_26795 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26801_26888 = state_26799__$1;
(statearr_26801_26888[(2)] = inst_26795);

(statearr_26801_26888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (20))){
var inst_26700 = (state_26799[(7)]);
var inst_26710 = cljs.core.first.call(null,inst_26700);
var inst_26711 = cljs.core.nth.call(null,inst_26710,(0),null);
var inst_26712 = cljs.core.nth.call(null,inst_26710,(1),null);
var state_26799__$1 = (function (){var statearr_26802 = state_26799;
(statearr_26802[(8)] = inst_26711);

return statearr_26802;
})();
if(cljs.core.truth_(inst_26712)){
var statearr_26803_26889 = state_26799__$1;
(statearr_26803_26889[(1)] = (22));

} else {
var statearr_26804_26890 = state_26799__$1;
(statearr_26804_26890[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (27))){
var inst_26671 = (state_26799[(9)]);
var inst_26740 = (state_26799[(10)]);
var inst_26742 = (state_26799[(11)]);
var inst_26747 = (state_26799[(12)]);
var inst_26747__$1 = cljs.core._nth.call(null,inst_26740,inst_26742);
var inst_26748 = cljs.core.async.put_BANG_.call(null,inst_26747__$1,inst_26671,done);
var state_26799__$1 = (function (){var statearr_26805 = state_26799;
(statearr_26805[(12)] = inst_26747__$1);

return statearr_26805;
})();
if(cljs.core.truth_(inst_26748)){
var statearr_26806_26891 = state_26799__$1;
(statearr_26806_26891[(1)] = (30));

} else {
var statearr_26807_26892 = state_26799__$1;
(statearr_26807_26892[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (1))){
var state_26799__$1 = state_26799;
var statearr_26808_26893 = state_26799__$1;
(statearr_26808_26893[(2)] = null);

(statearr_26808_26893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (24))){
var inst_26700 = (state_26799[(7)]);
var inst_26717 = (state_26799[(2)]);
var inst_26718 = cljs.core.next.call(null,inst_26700);
var inst_26680 = inst_26718;
var inst_26681 = null;
var inst_26682 = (0);
var inst_26683 = (0);
var state_26799__$1 = (function (){var statearr_26809 = state_26799;
(statearr_26809[(13)] = inst_26717);

(statearr_26809[(14)] = inst_26682);

(statearr_26809[(15)] = inst_26681);

(statearr_26809[(16)] = inst_26683);

(statearr_26809[(17)] = inst_26680);

return statearr_26809;
})();
var statearr_26810_26894 = state_26799__$1;
(statearr_26810_26894[(2)] = null);

(statearr_26810_26894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (39))){
var state_26799__$1 = state_26799;
var statearr_26814_26895 = state_26799__$1;
(statearr_26814_26895[(2)] = null);

(statearr_26814_26895[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (4))){
var inst_26671 = (state_26799[(9)]);
var inst_26671__$1 = (state_26799[(2)]);
var inst_26672 = (inst_26671__$1 == null);
var state_26799__$1 = (function (){var statearr_26815 = state_26799;
(statearr_26815[(9)] = inst_26671__$1);

return statearr_26815;
})();
if(cljs.core.truth_(inst_26672)){
var statearr_26816_26896 = state_26799__$1;
(statearr_26816_26896[(1)] = (5));

} else {
var statearr_26817_26897 = state_26799__$1;
(statearr_26817_26897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (15))){
var inst_26682 = (state_26799[(14)]);
var inst_26681 = (state_26799[(15)]);
var inst_26683 = (state_26799[(16)]);
var inst_26680 = (state_26799[(17)]);
var inst_26696 = (state_26799[(2)]);
var inst_26697 = (inst_26683 + (1));
var tmp26811 = inst_26682;
var tmp26812 = inst_26681;
var tmp26813 = inst_26680;
var inst_26680__$1 = tmp26813;
var inst_26681__$1 = tmp26812;
var inst_26682__$1 = tmp26811;
var inst_26683__$1 = inst_26697;
var state_26799__$1 = (function (){var statearr_26818 = state_26799;
(statearr_26818[(14)] = inst_26682__$1);

(statearr_26818[(15)] = inst_26681__$1);

(statearr_26818[(16)] = inst_26683__$1);

(statearr_26818[(18)] = inst_26696);

(statearr_26818[(17)] = inst_26680__$1);

return statearr_26818;
})();
var statearr_26819_26898 = state_26799__$1;
(statearr_26819_26898[(2)] = null);

(statearr_26819_26898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (21))){
var inst_26721 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26823_26899 = state_26799__$1;
(statearr_26823_26899[(2)] = inst_26721);

(statearr_26823_26899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (31))){
var inst_26747 = (state_26799[(12)]);
var inst_26751 = done.call(null,null);
var inst_26752 = cljs.core.async.untap_STAR_.call(null,m,inst_26747);
var state_26799__$1 = (function (){var statearr_26824 = state_26799;
(statearr_26824[(19)] = inst_26751);

return statearr_26824;
})();
var statearr_26825_26900 = state_26799__$1;
(statearr_26825_26900[(2)] = inst_26752);

(statearr_26825_26900[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (32))){
var inst_26741 = (state_26799[(20)]);
var inst_26740 = (state_26799[(10)]);
var inst_26742 = (state_26799[(11)]);
var inst_26739 = (state_26799[(21)]);
var inst_26754 = (state_26799[(2)]);
var inst_26755 = (inst_26742 + (1));
var tmp26820 = inst_26741;
var tmp26821 = inst_26740;
var tmp26822 = inst_26739;
var inst_26739__$1 = tmp26822;
var inst_26740__$1 = tmp26821;
var inst_26741__$1 = tmp26820;
var inst_26742__$1 = inst_26755;
var state_26799__$1 = (function (){var statearr_26826 = state_26799;
(statearr_26826[(22)] = inst_26754);

(statearr_26826[(20)] = inst_26741__$1);

(statearr_26826[(10)] = inst_26740__$1);

(statearr_26826[(11)] = inst_26742__$1);

(statearr_26826[(21)] = inst_26739__$1);

return statearr_26826;
})();
var statearr_26827_26901 = state_26799__$1;
(statearr_26827_26901[(2)] = null);

(statearr_26827_26901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (40))){
var inst_26767 = (state_26799[(23)]);
var inst_26771 = done.call(null,null);
var inst_26772 = cljs.core.async.untap_STAR_.call(null,m,inst_26767);
var state_26799__$1 = (function (){var statearr_26828 = state_26799;
(statearr_26828[(24)] = inst_26771);

return statearr_26828;
})();
var statearr_26829_26902 = state_26799__$1;
(statearr_26829_26902[(2)] = inst_26772);

(statearr_26829_26902[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (33))){
var inst_26758 = (state_26799[(25)]);
var inst_26760 = cljs.core.chunked_seq_QMARK_.call(null,inst_26758);
var state_26799__$1 = state_26799;
if(inst_26760){
var statearr_26830_26903 = state_26799__$1;
(statearr_26830_26903[(1)] = (36));

} else {
var statearr_26831_26904 = state_26799__$1;
(statearr_26831_26904[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (13))){
var inst_26690 = (state_26799[(26)]);
var inst_26693 = cljs.core.async.close_BANG_.call(null,inst_26690);
var state_26799__$1 = state_26799;
var statearr_26832_26905 = state_26799__$1;
(statearr_26832_26905[(2)] = inst_26693);

(statearr_26832_26905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (22))){
var inst_26711 = (state_26799[(8)]);
var inst_26714 = cljs.core.async.close_BANG_.call(null,inst_26711);
var state_26799__$1 = state_26799;
var statearr_26833_26906 = state_26799__$1;
(statearr_26833_26906[(2)] = inst_26714);

(statearr_26833_26906[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (36))){
var inst_26758 = (state_26799[(25)]);
var inst_26762 = cljs.core.chunk_first.call(null,inst_26758);
var inst_26763 = cljs.core.chunk_rest.call(null,inst_26758);
var inst_26764 = cljs.core.count.call(null,inst_26762);
var inst_26739 = inst_26763;
var inst_26740 = inst_26762;
var inst_26741 = inst_26764;
var inst_26742 = (0);
var state_26799__$1 = (function (){var statearr_26834 = state_26799;
(statearr_26834[(20)] = inst_26741);

(statearr_26834[(10)] = inst_26740);

(statearr_26834[(11)] = inst_26742);

(statearr_26834[(21)] = inst_26739);

return statearr_26834;
})();
var statearr_26835_26907 = state_26799__$1;
(statearr_26835_26907[(2)] = null);

(statearr_26835_26907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (41))){
var inst_26758 = (state_26799[(25)]);
var inst_26774 = (state_26799[(2)]);
var inst_26775 = cljs.core.next.call(null,inst_26758);
var inst_26739 = inst_26775;
var inst_26740 = null;
var inst_26741 = (0);
var inst_26742 = (0);
var state_26799__$1 = (function (){var statearr_26836 = state_26799;
(statearr_26836[(20)] = inst_26741);

(statearr_26836[(10)] = inst_26740);

(statearr_26836[(11)] = inst_26742);

(statearr_26836[(21)] = inst_26739);

(statearr_26836[(27)] = inst_26774);

return statearr_26836;
})();
var statearr_26837_26908 = state_26799__$1;
(statearr_26837_26908[(2)] = null);

(statearr_26837_26908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (43))){
var state_26799__$1 = state_26799;
var statearr_26838_26909 = state_26799__$1;
(statearr_26838_26909[(2)] = null);

(statearr_26838_26909[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (29))){
var inst_26783 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26839_26910 = state_26799__$1;
(statearr_26839_26910[(2)] = inst_26783);

(statearr_26839_26910[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (44))){
var inst_26792 = (state_26799[(2)]);
var state_26799__$1 = (function (){var statearr_26840 = state_26799;
(statearr_26840[(28)] = inst_26792);

return statearr_26840;
})();
var statearr_26841_26911 = state_26799__$1;
(statearr_26841_26911[(2)] = null);

(statearr_26841_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (6))){
var inst_26731 = (state_26799[(29)]);
var inst_26730 = cljs.core.deref.call(null,cs);
var inst_26731__$1 = cljs.core.keys.call(null,inst_26730);
var inst_26732 = cljs.core.count.call(null,inst_26731__$1);
var inst_26733 = cljs.core.reset_BANG_.call(null,dctr,inst_26732);
var inst_26738 = cljs.core.seq.call(null,inst_26731__$1);
var inst_26739 = inst_26738;
var inst_26740 = null;
var inst_26741 = (0);
var inst_26742 = (0);
var state_26799__$1 = (function (){var statearr_26842 = state_26799;
(statearr_26842[(29)] = inst_26731__$1);

(statearr_26842[(20)] = inst_26741);

(statearr_26842[(10)] = inst_26740);

(statearr_26842[(30)] = inst_26733);

(statearr_26842[(11)] = inst_26742);

(statearr_26842[(21)] = inst_26739);

return statearr_26842;
})();
var statearr_26843_26912 = state_26799__$1;
(statearr_26843_26912[(2)] = null);

(statearr_26843_26912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (28))){
var inst_26739 = (state_26799[(21)]);
var inst_26758 = (state_26799[(25)]);
var inst_26758__$1 = cljs.core.seq.call(null,inst_26739);
var state_26799__$1 = (function (){var statearr_26844 = state_26799;
(statearr_26844[(25)] = inst_26758__$1);

return statearr_26844;
})();
if(inst_26758__$1){
var statearr_26845_26913 = state_26799__$1;
(statearr_26845_26913[(1)] = (33));

} else {
var statearr_26846_26914 = state_26799__$1;
(statearr_26846_26914[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (25))){
var inst_26741 = (state_26799[(20)]);
var inst_26742 = (state_26799[(11)]);
var inst_26744 = (inst_26742 < inst_26741);
var inst_26745 = inst_26744;
var state_26799__$1 = state_26799;
if(cljs.core.truth_(inst_26745)){
var statearr_26847_26915 = state_26799__$1;
(statearr_26847_26915[(1)] = (27));

} else {
var statearr_26848_26916 = state_26799__$1;
(statearr_26848_26916[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (34))){
var state_26799__$1 = state_26799;
var statearr_26849_26917 = state_26799__$1;
(statearr_26849_26917[(2)] = null);

(statearr_26849_26917[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (17))){
var state_26799__$1 = state_26799;
var statearr_26850_26918 = state_26799__$1;
(statearr_26850_26918[(2)] = null);

(statearr_26850_26918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (3))){
var inst_26797 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26799__$1,inst_26797);
} else {
if((state_val_26800 === (12))){
var inst_26726 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26851_26919 = state_26799__$1;
(statearr_26851_26919[(2)] = inst_26726);

(statearr_26851_26919[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (2))){
var state_26799__$1 = state_26799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26799__$1,(4),ch);
} else {
if((state_val_26800 === (23))){
var state_26799__$1 = state_26799;
var statearr_26852_26920 = state_26799__$1;
(statearr_26852_26920[(2)] = null);

(statearr_26852_26920[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (35))){
var inst_26781 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26853_26921 = state_26799__$1;
(statearr_26853_26921[(2)] = inst_26781);

(statearr_26853_26921[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (19))){
var inst_26700 = (state_26799[(7)]);
var inst_26704 = cljs.core.chunk_first.call(null,inst_26700);
var inst_26705 = cljs.core.chunk_rest.call(null,inst_26700);
var inst_26706 = cljs.core.count.call(null,inst_26704);
var inst_26680 = inst_26705;
var inst_26681 = inst_26704;
var inst_26682 = inst_26706;
var inst_26683 = (0);
var state_26799__$1 = (function (){var statearr_26854 = state_26799;
(statearr_26854[(14)] = inst_26682);

(statearr_26854[(15)] = inst_26681);

(statearr_26854[(16)] = inst_26683);

(statearr_26854[(17)] = inst_26680);

return statearr_26854;
})();
var statearr_26855_26922 = state_26799__$1;
(statearr_26855_26922[(2)] = null);

(statearr_26855_26922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (11))){
var inst_26700 = (state_26799[(7)]);
var inst_26680 = (state_26799[(17)]);
var inst_26700__$1 = cljs.core.seq.call(null,inst_26680);
var state_26799__$1 = (function (){var statearr_26856 = state_26799;
(statearr_26856[(7)] = inst_26700__$1);

return statearr_26856;
})();
if(inst_26700__$1){
var statearr_26857_26923 = state_26799__$1;
(statearr_26857_26923[(1)] = (16));

} else {
var statearr_26858_26924 = state_26799__$1;
(statearr_26858_26924[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (9))){
var inst_26728 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26859_26925 = state_26799__$1;
(statearr_26859_26925[(2)] = inst_26728);

(statearr_26859_26925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (5))){
var inst_26678 = cljs.core.deref.call(null,cs);
var inst_26679 = cljs.core.seq.call(null,inst_26678);
var inst_26680 = inst_26679;
var inst_26681 = null;
var inst_26682 = (0);
var inst_26683 = (0);
var state_26799__$1 = (function (){var statearr_26860 = state_26799;
(statearr_26860[(14)] = inst_26682);

(statearr_26860[(15)] = inst_26681);

(statearr_26860[(16)] = inst_26683);

(statearr_26860[(17)] = inst_26680);

return statearr_26860;
})();
var statearr_26861_26926 = state_26799__$1;
(statearr_26861_26926[(2)] = null);

(statearr_26861_26926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (14))){
var state_26799__$1 = state_26799;
var statearr_26862_26927 = state_26799__$1;
(statearr_26862_26927[(2)] = null);

(statearr_26862_26927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (45))){
var inst_26789 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26863_26928 = state_26799__$1;
(statearr_26863_26928[(2)] = inst_26789);

(statearr_26863_26928[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (26))){
var inst_26731 = (state_26799[(29)]);
var inst_26785 = (state_26799[(2)]);
var inst_26786 = cljs.core.seq.call(null,inst_26731);
var state_26799__$1 = (function (){var statearr_26864 = state_26799;
(statearr_26864[(31)] = inst_26785);

return statearr_26864;
})();
if(inst_26786){
var statearr_26865_26929 = state_26799__$1;
(statearr_26865_26929[(1)] = (42));

} else {
var statearr_26866_26930 = state_26799__$1;
(statearr_26866_26930[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (16))){
var inst_26700 = (state_26799[(7)]);
var inst_26702 = cljs.core.chunked_seq_QMARK_.call(null,inst_26700);
var state_26799__$1 = state_26799;
if(inst_26702){
var statearr_26867_26931 = state_26799__$1;
(statearr_26867_26931[(1)] = (19));

} else {
var statearr_26868_26932 = state_26799__$1;
(statearr_26868_26932[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (38))){
var inst_26778 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26869_26933 = state_26799__$1;
(statearr_26869_26933[(2)] = inst_26778);

(statearr_26869_26933[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (30))){
var state_26799__$1 = state_26799;
var statearr_26870_26934 = state_26799__$1;
(statearr_26870_26934[(2)] = null);

(statearr_26870_26934[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (10))){
var inst_26681 = (state_26799[(15)]);
var inst_26683 = (state_26799[(16)]);
var inst_26689 = cljs.core._nth.call(null,inst_26681,inst_26683);
var inst_26690 = cljs.core.nth.call(null,inst_26689,(0),null);
var inst_26691 = cljs.core.nth.call(null,inst_26689,(1),null);
var state_26799__$1 = (function (){var statearr_26871 = state_26799;
(statearr_26871[(26)] = inst_26690);

return statearr_26871;
})();
if(cljs.core.truth_(inst_26691)){
var statearr_26872_26935 = state_26799__$1;
(statearr_26872_26935[(1)] = (13));

} else {
var statearr_26873_26936 = state_26799__$1;
(statearr_26873_26936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (18))){
var inst_26724 = (state_26799[(2)]);
var state_26799__$1 = state_26799;
var statearr_26874_26937 = state_26799__$1;
(statearr_26874_26937[(2)] = inst_26724);

(statearr_26874_26937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (42))){
var state_26799__$1 = state_26799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26799__$1,(45),dchan);
} else {
if((state_val_26800 === (37))){
var inst_26767 = (state_26799[(23)]);
var inst_26671 = (state_26799[(9)]);
var inst_26758 = (state_26799[(25)]);
var inst_26767__$1 = cljs.core.first.call(null,inst_26758);
var inst_26768 = cljs.core.async.put_BANG_.call(null,inst_26767__$1,inst_26671,done);
var state_26799__$1 = (function (){var statearr_26875 = state_26799;
(statearr_26875[(23)] = inst_26767__$1);

return statearr_26875;
})();
if(cljs.core.truth_(inst_26768)){
var statearr_26876_26938 = state_26799__$1;
(statearr_26876_26938[(1)] = (39));

} else {
var statearr_26877_26939 = state_26799__$1;
(statearr_26877_26939[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26800 === (8))){
var inst_26682 = (state_26799[(14)]);
var inst_26683 = (state_26799[(16)]);
var inst_26685 = (inst_26683 < inst_26682);
var inst_26686 = inst_26685;
var state_26799__$1 = state_26799;
if(cljs.core.truth_(inst_26686)){
var statearr_26878_26940 = state_26799__$1;
(statearr_26878_26940[(1)] = (10));

} else {
var statearr_26879_26941 = state_26799__$1;
(statearr_26879_26941[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__21345__auto___26887,cs,m,dchan,dctr,done))
;
return ((function (switch__21283__auto__,c__21345__auto___26887,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21284__auto__ = null;
var cljs$core$async$mult_$_state_machine__21284__auto____0 = (function (){
var statearr_26883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26883[(0)] = cljs$core$async$mult_$_state_machine__21284__auto__);

(statearr_26883[(1)] = (1));

return statearr_26883;
});
var cljs$core$async$mult_$_state_machine__21284__auto____1 = (function (state_26799){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_26799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e26884){if((e26884 instanceof Object)){
var ex__21287__auto__ = e26884;
var statearr_26885_26942 = state_26799;
(statearr_26885_26942[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26943 = state_26799;
state_26799 = G__26943;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21284__auto__ = function(state_26799){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21284__auto____1.call(this,state_26799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21284__auto____0;
cljs$core$async$mult_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21284__auto____1;
return cljs$core$async$mult_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___26887,cs,m,dchan,dctr,done))
})();
var state__21347__auto__ = (function (){var statearr_26886 = f__21346__auto__.call(null);
(statearr_26886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___26887);

return statearr_26886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___26887,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__26945 = arguments.length;
switch (G__26945) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26948 = {};
return obj26948;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26953){
var map__26954 = p__26953;
var map__26954__$1 = ((cljs.core.seq_QMARK_.call(null,map__26954))?cljs.core.apply.call(null,cljs.core.hash_map,map__26954):map__26954);
var opts = map__26954__$1;
var statearr_26955_26958 = state;
(statearr_26955_26958[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26954,map__26954__$1,opts){
return (function (val){
var statearr_26956_26959 = state;
(statearr_26956_26959[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26954,map__26954__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26957_26960 = state;
(statearr_26957_26960[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26949){
var G__26950 = cljs.core.first.call(null,seq26949);
var seq26949__$1 = cljs.core.next.call(null,seq26949);
var G__26951 = cljs.core.first.call(null,seq26949__$1);
var seq26949__$2 = cljs.core.next.call(null,seq26949__$1);
var G__26952 = cljs.core.first.call(null,seq26949__$2);
var seq26949__$3 = cljs.core.next.call(null,seq26949__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26950,G__26951,G__26952,seq26949__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27080 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27080 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27081){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27081 = meta27081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27080.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27080.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27082){
var self__ = this;
var _27082__$1 = this;
return self__.meta27081;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27082,meta27081__$1){
var self__ = this;
var _27082__$1 = this;
return (new cljs.core.async.t27080(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27081__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27080.cljs$lang$type = true;

cljs.core.async.t27080.cljs$lang$ctorStr = "cljs.core.async/t27080";

cljs.core.async.t27080.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27080");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27080 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27080(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27081){
return (new cljs.core.async.t27080(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27081));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27080(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21345__auto___27199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27152){
var state_val_27153 = (state_27152[(1)]);
if((state_val_27153 === (7))){
var inst_27096 = (state_27152[(7)]);
var inst_27101 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27096);
var state_27152__$1 = state_27152;
var statearr_27154_27200 = state_27152__$1;
(statearr_27154_27200[(2)] = inst_27101);

(statearr_27154_27200[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (20))){
var inst_27111 = (state_27152[(8)]);
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27152__$1,(23),out,inst_27111);
} else {
if((state_val_27153 === (1))){
var inst_27086 = (state_27152[(9)]);
var inst_27086__$1 = calc_state.call(null);
var inst_27087 = cljs.core.seq_QMARK_.call(null,inst_27086__$1);
var state_27152__$1 = (function (){var statearr_27155 = state_27152;
(statearr_27155[(9)] = inst_27086__$1);

return statearr_27155;
})();
if(inst_27087){
var statearr_27156_27201 = state_27152__$1;
(statearr_27156_27201[(1)] = (2));

} else {
var statearr_27157_27202 = state_27152__$1;
(statearr_27157_27202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (24))){
var inst_27104 = (state_27152[(10)]);
var inst_27096 = inst_27104;
var state_27152__$1 = (function (){var statearr_27158 = state_27152;
(statearr_27158[(7)] = inst_27096);

return statearr_27158;
})();
var statearr_27159_27203 = state_27152__$1;
(statearr_27159_27203[(2)] = null);

(statearr_27159_27203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (4))){
var inst_27086 = (state_27152[(9)]);
var inst_27092 = (state_27152[(2)]);
var inst_27093 = cljs.core.get.call(null,inst_27092,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27094 = cljs.core.get.call(null,inst_27092,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27095 = cljs.core.get.call(null,inst_27092,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27096 = inst_27086;
var state_27152__$1 = (function (){var statearr_27160 = state_27152;
(statearr_27160[(11)] = inst_27095);

(statearr_27160[(12)] = inst_27094);

(statearr_27160[(7)] = inst_27096);

(statearr_27160[(13)] = inst_27093);

return statearr_27160;
})();
var statearr_27161_27204 = state_27152__$1;
(statearr_27161_27204[(2)] = null);

(statearr_27161_27204[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (15))){
var state_27152__$1 = state_27152;
var statearr_27162_27205 = state_27152__$1;
(statearr_27162_27205[(2)] = null);

(statearr_27162_27205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (21))){
var inst_27104 = (state_27152[(10)]);
var inst_27096 = inst_27104;
var state_27152__$1 = (function (){var statearr_27163 = state_27152;
(statearr_27163[(7)] = inst_27096);

return statearr_27163;
})();
var statearr_27164_27206 = state_27152__$1;
(statearr_27164_27206[(2)] = null);

(statearr_27164_27206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (13))){
var inst_27148 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27165_27207 = state_27152__$1;
(statearr_27165_27207[(2)] = inst_27148);

(statearr_27165_27207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (22))){
var inst_27146 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27166_27208 = state_27152__$1;
(statearr_27166_27208[(2)] = inst_27146);

(statearr_27166_27208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (6))){
var inst_27150 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27152__$1,inst_27150);
} else {
if((state_val_27153 === (25))){
var state_27152__$1 = state_27152;
var statearr_27167_27209 = state_27152__$1;
(statearr_27167_27209[(2)] = null);

(statearr_27167_27209[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (17))){
var inst_27126 = (state_27152[(14)]);
var state_27152__$1 = state_27152;
var statearr_27168_27210 = state_27152__$1;
(statearr_27168_27210[(2)] = inst_27126);

(statearr_27168_27210[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (3))){
var inst_27086 = (state_27152[(9)]);
var state_27152__$1 = state_27152;
var statearr_27169_27211 = state_27152__$1;
(statearr_27169_27211[(2)] = inst_27086);

(statearr_27169_27211[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (12))){
var inst_27112 = (state_27152[(15)]);
var inst_27126 = (state_27152[(14)]);
var inst_27107 = (state_27152[(16)]);
var inst_27126__$1 = inst_27107.call(null,inst_27112);
var state_27152__$1 = (function (){var statearr_27170 = state_27152;
(statearr_27170[(14)] = inst_27126__$1);

return statearr_27170;
})();
if(cljs.core.truth_(inst_27126__$1)){
var statearr_27171_27212 = state_27152__$1;
(statearr_27171_27212[(1)] = (17));

} else {
var statearr_27172_27213 = state_27152__$1;
(statearr_27172_27213[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (2))){
var inst_27086 = (state_27152[(9)]);
var inst_27089 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27086);
var state_27152__$1 = state_27152;
var statearr_27173_27214 = state_27152__$1;
(statearr_27173_27214[(2)] = inst_27089);

(statearr_27173_27214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (23))){
var inst_27137 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
if(cljs.core.truth_(inst_27137)){
var statearr_27174_27215 = state_27152__$1;
(statearr_27174_27215[(1)] = (24));

} else {
var statearr_27175_27216 = state_27152__$1;
(statearr_27175_27216[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (19))){
var inst_27134 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
if(cljs.core.truth_(inst_27134)){
var statearr_27176_27217 = state_27152__$1;
(statearr_27176_27217[(1)] = (20));

} else {
var statearr_27177_27218 = state_27152__$1;
(statearr_27177_27218[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (11))){
var inst_27111 = (state_27152[(8)]);
var inst_27117 = (inst_27111 == null);
var state_27152__$1 = state_27152;
if(cljs.core.truth_(inst_27117)){
var statearr_27178_27219 = state_27152__$1;
(statearr_27178_27219[(1)] = (14));

} else {
var statearr_27179_27220 = state_27152__$1;
(statearr_27179_27220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (9))){
var inst_27104 = (state_27152[(10)]);
var inst_27104__$1 = (state_27152[(2)]);
var inst_27105 = cljs.core.get.call(null,inst_27104__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27106 = cljs.core.get.call(null,inst_27104__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27107 = cljs.core.get.call(null,inst_27104__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_27152__$1 = (function (){var statearr_27180 = state_27152;
(statearr_27180[(10)] = inst_27104__$1);

(statearr_27180[(16)] = inst_27107);

(statearr_27180[(17)] = inst_27106);

return statearr_27180;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27152__$1,(10),inst_27105);
} else {
if((state_val_27153 === (5))){
var inst_27096 = (state_27152[(7)]);
var inst_27099 = cljs.core.seq_QMARK_.call(null,inst_27096);
var state_27152__$1 = state_27152;
if(inst_27099){
var statearr_27181_27221 = state_27152__$1;
(statearr_27181_27221[(1)] = (7));

} else {
var statearr_27182_27222 = state_27152__$1;
(statearr_27182_27222[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (14))){
var inst_27112 = (state_27152[(15)]);
var inst_27119 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27112);
var state_27152__$1 = state_27152;
var statearr_27183_27223 = state_27152__$1;
(statearr_27183_27223[(2)] = inst_27119);

(statearr_27183_27223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (26))){
var inst_27142 = (state_27152[(2)]);
var state_27152__$1 = state_27152;
var statearr_27184_27224 = state_27152__$1;
(statearr_27184_27224[(2)] = inst_27142);

(statearr_27184_27224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (16))){
var inst_27122 = (state_27152[(2)]);
var inst_27123 = calc_state.call(null);
var inst_27096 = inst_27123;
var state_27152__$1 = (function (){var statearr_27185 = state_27152;
(statearr_27185[(7)] = inst_27096);

(statearr_27185[(18)] = inst_27122);

return statearr_27185;
})();
var statearr_27186_27225 = state_27152__$1;
(statearr_27186_27225[(2)] = null);

(statearr_27186_27225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (10))){
var inst_27112 = (state_27152[(15)]);
var inst_27111 = (state_27152[(8)]);
var inst_27110 = (state_27152[(2)]);
var inst_27111__$1 = cljs.core.nth.call(null,inst_27110,(0),null);
var inst_27112__$1 = cljs.core.nth.call(null,inst_27110,(1),null);
var inst_27113 = (inst_27111__$1 == null);
var inst_27114 = cljs.core._EQ_.call(null,inst_27112__$1,change);
var inst_27115 = (inst_27113) || (inst_27114);
var state_27152__$1 = (function (){var statearr_27187 = state_27152;
(statearr_27187[(15)] = inst_27112__$1);

(statearr_27187[(8)] = inst_27111__$1);

return statearr_27187;
})();
if(cljs.core.truth_(inst_27115)){
var statearr_27188_27226 = state_27152__$1;
(statearr_27188_27226[(1)] = (11));

} else {
var statearr_27189_27227 = state_27152__$1;
(statearr_27189_27227[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (18))){
var inst_27112 = (state_27152[(15)]);
var inst_27107 = (state_27152[(16)]);
var inst_27106 = (state_27152[(17)]);
var inst_27129 = cljs.core.empty_QMARK_.call(null,inst_27107);
var inst_27130 = inst_27106.call(null,inst_27112);
var inst_27131 = cljs.core.not.call(null,inst_27130);
var inst_27132 = (inst_27129) && (inst_27131);
var state_27152__$1 = state_27152;
var statearr_27190_27228 = state_27152__$1;
(statearr_27190_27228[(2)] = inst_27132);

(statearr_27190_27228[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27153 === (8))){
var inst_27096 = (state_27152[(7)]);
var state_27152__$1 = state_27152;
var statearr_27191_27229 = state_27152__$1;
(statearr_27191_27229[(2)] = inst_27096);

(statearr_27191_27229[(1)] = (9));


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
});})(c__21345__auto___27199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21283__auto__,c__21345__auto___27199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21284__auto__ = null;
var cljs$core$async$mix_$_state_machine__21284__auto____0 = (function (){
var statearr_27195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27195[(0)] = cljs$core$async$mix_$_state_machine__21284__auto__);

(statearr_27195[(1)] = (1));

return statearr_27195;
});
var cljs$core$async$mix_$_state_machine__21284__auto____1 = (function (state_27152){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27196){if((e27196 instanceof Object)){
var ex__21287__auto__ = e27196;
var statearr_27197_27230 = state_27152;
(statearr_27197_27230[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27231 = state_27152;
state_27152 = G__27231;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21284__auto__ = function(state_27152){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21284__auto____1.call(this,state_27152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21284__auto____0;
cljs$core$async$mix_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21284__auto____1;
return cljs$core$async$mix_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21347__auto__ = (function (){var statearr_27198 = f__21346__auto__.call(null);
(statearr_27198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27199);

return statearr_27198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27199,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj27233 = {};
return obj27233;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27235 = arguments.length;
switch (G__27235) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__27239 = arguments.length;
switch (G__27239) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18121__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18121__auto__,mults){
return (function (p1__27237_SHARP_){
if(cljs.core.truth_(p1__27237_SHARP_.call(null,topic))){
return p1__27237_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27237_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27240 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27240 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta27241){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta27241 = meta27241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27240.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27240.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27240.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27240.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27240.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27240.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27242){
var self__ = this;
var _27242__$1 = this;
return self__.meta27241;
});})(mults,ensure_mult))
;

cljs.core.async.t27240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27242,meta27241__$1){
var self__ = this;
var _27242__$1 = this;
return (new cljs.core.async.t27240(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta27241__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27240.cljs$lang$type = true;

cljs.core.async.t27240.cljs$lang$ctorStr = "cljs.core.async/t27240";

cljs.core.async.t27240.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27240");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27240 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27240(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27241){
return (new cljs.core.async.t27240(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta27241));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27240(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21345__auto___27363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27363,mults,ensure_mult,p){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27363,mults,ensure_mult,p){
return (function (state_27314){
var state_val_27315 = (state_27314[(1)]);
if((state_val_27315 === (7))){
var inst_27310 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27316_27364 = state_27314__$1;
(statearr_27316_27364[(2)] = inst_27310);

(statearr_27316_27364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (20))){
var state_27314__$1 = state_27314;
var statearr_27317_27365 = state_27314__$1;
(statearr_27317_27365[(2)] = null);

(statearr_27317_27365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (1))){
var state_27314__$1 = state_27314;
var statearr_27318_27366 = state_27314__$1;
(statearr_27318_27366[(2)] = null);

(statearr_27318_27366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (24))){
var inst_27293 = (state_27314[(7)]);
var inst_27302 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27293);
var state_27314__$1 = state_27314;
var statearr_27319_27367 = state_27314__$1;
(statearr_27319_27367[(2)] = inst_27302);

(statearr_27319_27367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (4))){
var inst_27245 = (state_27314[(8)]);
var inst_27245__$1 = (state_27314[(2)]);
var inst_27246 = (inst_27245__$1 == null);
var state_27314__$1 = (function (){var statearr_27320 = state_27314;
(statearr_27320[(8)] = inst_27245__$1);

return statearr_27320;
})();
if(cljs.core.truth_(inst_27246)){
var statearr_27321_27368 = state_27314__$1;
(statearr_27321_27368[(1)] = (5));

} else {
var statearr_27322_27369 = state_27314__$1;
(statearr_27322_27369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (15))){
var inst_27287 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27323_27370 = state_27314__$1;
(statearr_27323_27370[(2)] = inst_27287);

(statearr_27323_27370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (21))){
var inst_27307 = (state_27314[(2)]);
var state_27314__$1 = (function (){var statearr_27324 = state_27314;
(statearr_27324[(9)] = inst_27307);

return statearr_27324;
})();
var statearr_27325_27371 = state_27314__$1;
(statearr_27325_27371[(2)] = null);

(statearr_27325_27371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (13))){
var inst_27269 = (state_27314[(10)]);
var inst_27271 = cljs.core.chunked_seq_QMARK_.call(null,inst_27269);
var state_27314__$1 = state_27314;
if(inst_27271){
var statearr_27326_27372 = state_27314__$1;
(statearr_27326_27372[(1)] = (16));

} else {
var statearr_27327_27373 = state_27314__$1;
(statearr_27327_27373[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (22))){
var inst_27299 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
if(cljs.core.truth_(inst_27299)){
var statearr_27328_27374 = state_27314__$1;
(statearr_27328_27374[(1)] = (23));

} else {
var statearr_27329_27375 = state_27314__$1;
(statearr_27329_27375[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (6))){
var inst_27295 = (state_27314[(11)]);
var inst_27293 = (state_27314[(7)]);
var inst_27245 = (state_27314[(8)]);
var inst_27293__$1 = topic_fn.call(null,inst_27245);
var inst_27294 = cljs.core.deref.call(null,mults);
var inst_27295__$1 = cljs.core.get.call(null,inst_27294,inst_27293__$1);
var state_27314__$1 = (function (){var statearr_27330 = state_27314;
(statearr_27330[(11)] = inst_27295__$1);

(statearr_27330[(7)] = inst_27293__$1);

return statearr_27330;
})();
if(cljs.core.truth_(inst_27295__$1)){
var statearr_27331_27376 = state_27314__$1;
(statearr_27331_27376[(1)] = (19));

} else {
var statearr_27332_27377 = state_27314__$1;
(statearr_27332_27377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (25))){
var inst_27304 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27333_27378 = state_27314__$1;
(statearr_27333_27378[(2)] = inst_27304);

(statearr_27333_27378[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (17))){
var inst_27269 = (state_27314[(10)]);
var inst_27278 = cljs.core.first.call(null,inst_27269);
var inst_27279 = cljs.core.async.muxch_STAR_.call(null,inst_27278);
var inst_27280 = cljs.core.async.close_BANG_.call(null,inst_27279);
var inst_27281 = cljs.core.next.call(null,inst_27269);
var inst_27255 = inst_27281;
var inst_27256 = null;
var inst_27257 = (0);
var inst_27258 = (0);
var state_27314__$1 = (function (){var statearr_27334 = state_27314;
(statearr_27334[(12)] = inst_27255);

(statearr_27334[(13)] = inst_27257);

(statearr_27334[(14)] = inst_27258);

(statearr_27334[(15)] = inst_27256);

(statearr_27334[(16)] = inst_27280);

return statearr_27334;
})();
var statearr_27335_27379 = state_27314__$1;
(statearr_27335_27379[(2)] = null);

(statearr_27335_27379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (3))){
var inst_27312 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27314__$1,inst_27312);
} else {
if((state_val_27315 === (12))){
var inst_27289 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27336_27380 = state_27314__$1;
(statearr_27336_27380[(2)] = inst_27289);

(statearr_27336_27380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (2))){
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27314__$1,(4),ch);
} else {
if((state_val_27315 === (23))){
var state_27314__$1 = state_27314;
var statearr_27337_27381 = state_27314__$1;
(statearr_27337_27381[(2)] = null);

(statearr_27337_27381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (19))){
var inst_27295 = (state_27314[(11)]);
var inst_27245 = (state_27314[(8)]);
var inst_27297 = cljs.core.async.muxch_STAR_.call(null,inst_27295);
var state_27314__$1 = state_27314;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27314__$1,(22),inst_27297,inst_27245);
} else {
if((state_val_27315 === (11))){
var inst_27255 = (state_27314[(12)]);
var inst_27269 = (state_27314[(10)]);
var inst_27269__$1 = cljs.core.seq.call(null,inst_27255);
var state_27314__$1 = (function (){var statearr_27338 = state_27314;
(statearr_27338[(10)] = inst_27269__$1);

return statearr_27338;
})();
if(inst_27269__$1){
var statearr_27339_27382 = state_27314__$1;
(statearr_27339_27382[(1)] = (13));

} else {
var statearr_27340_27383 = state_27314__$1;
(statearr_27340_27383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (9))){
var inst_27291 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27341_27384 = state_27314__$1;
(statearr_27341_27384[(2)] = inst_27291);

(statearr_27341_27384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (5))){
var inst_27252 = cljs.core.deref.call(null,mults);
var inst_27253 = cljs.core.vals.call(null,inst_27252);
var inst_27254 = cljs.core.seq.call(null,inst_27253);
var inst_27255 = inst_27254;
var inst_27256 = null;
var inst_27257 = (0);
var inst_27258 = (0);
var state_27314__$1 = (function (){var statearr_27342 = state_27314;
(statearr_27342[(12)] = inst_27255);

(statearr_27342[(13)] = inst_27257);

(statearr_27342[(14)] = inst_27258);

(statearr_27342[(15)] = inst_27256);

return statearr_27342;
})();
var statearr_27343_27385 = state_27314__$1;
(statearr_27343_27385[(2)] = null);

(statearr_27343_27385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (14))){
var state_27314__$1 = state_27314;
var statearr_27347_27386 = state_27314__$1;
(statearr_27347_27386[(2)] = null);

(statearr_27347_27386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (16))){
var inst_27269 = (state_27314[(10)]);
var inst_27273 = cljs.core.chunk_first.call(null,inst_27269);
var inst_27274 = cljs.core.chunk_rest.call(null,inst_27269);
var inst_27275 = cljs.core.count.call(null,inst_27273);
var inst_27255 = inst_27274;
var inst_27256 = inst_27273;
var inst_27257 = inst_27275;
var inst_27258 = (0);
var state_27314__$1 = (function (){var statearr_27348 = state_27314;
(statearr_27348[(12)] = inst_27255);

(statearr_27348[(13)] = inst_27257);

(statearr_27348[(14)] = inst_27258);

(statearr_27348[(15)] = inst_27256);

return statearr_27348;
})();
var statearr_27349_27387 = state_27314__$1;
(statearr_27349_27387[(2)] = null);

(statearr_27349_27387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (10))){
var inst_27255 = (state_27314[(12)]);
var inst_27257 = (state_27314[(13)]);
var inst_27258 = (state_27314[(14)]);
var inst_27256 = (state_27314[(15)]);
var inst_27263 = cljs.core._nth.call(null,inst_27256,inst_27258);
var inst_27264 = cljs.core.async.muxch_STAR_.call(null,inst_27263);
var inst_27265 = cljs.core.async.close_BANG_.call(null,inst_27264);
var inst_27266 = (inst_27258 + (1));
var tmp27344 = inst_27255;
var tmp27345 = inst_27257;
var tmp27346 = inst_27256;
var inst_27255__$1 = tmp27344;
var inst_27256__$1 = tmp27346;
var inst_27257__$1 = tmp27345;
var inst_27258__$1 = inst_27266;
var state_27314__$1 = (function (){var statearr_27350 = state_27314;
(statearr_27350[(17)] = inst_27265);

(statearr_27350[(12)] = inst_27255__$1);

(statearr_27350[(13)] = inst_27257__$1);

(statearr_27350[(14)] = inst_27258__$1);

(statearr_27350[(15)] = inst_27256__$1);

return statearr_27350;
})();
var statearr_27351_27388 = state_27314__$1;
(statearr_27351_27388[(2)] = null);

(statearr_27351_27388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (18))){
var inst_27284 = (state_27314[(2)]);
var state_27314__$1 = state_27314;
var statearr_27352_27389 = state_27314__$1;
(statearr_27352_27389[(2)] = inst_27284);

(statearr_27352_27389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27315 === (8))){
var inst_27257 = (state_27314[(13)]);
var inst_27258 = (state_27314[(14)]);
var inst_27260 = (inst_27258 < inst_27257);
var inst_27261 = inst_27260;
var state_27314__$1 = state_27314;
if(cljs.core.truth_(inst_27261)){
var statearr_27353_27390 = state_27314__$1;
(statearr_27353_27390[(1)] = (10));

} else {
var statearr_27354_27391 = state_27314__$1;
(statearr_27354_27391[(1)] = (11));

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
});})(c__21345__auto___27363,mults,ensure_mult,p))
;
return ((function (switch__21283__auto__,c__21345__auto___27363,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27358[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27358[(1)] = (1));

return statearr_27358;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27314){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27359){if((e27359 instanceof Object)){
var ex__21287__auto__ = e27359;
var statearr_27360_27392 = state_27314;
(statearr_27360_27392[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27393 = state_27314;
state_27314 = G__27393;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27363,mults,ensure_mult,p))
})();
var state__21347__auto__ = (function (){var statearr_27361 = f__21346__auto__.call(null);
(statearr_27361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27363);

return statearr_27361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27363,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__27395 = arguments.length;
switch (G__27395) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__27398 = arguments.length;
switch (G__27398) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__27401 = arguments.length;
switch (G__27401) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21345__auto___27471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27440){
var state_val_27441 = (state_27440[(1)]);
if((state_val_27441 === (7))){
var state_27440__$1 = state_27440;
var statearr_27442_27472 = state_27440__$1;
(statearr_27442_27472[(2)] = null);

(statearr_27442_27472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (1))){
var state_27440__$1 = state_27440;
var statearr_27443_27473 = state_27440__$1;
(statearr_27443_27473[(2)] = null);

(statearr_27443_27473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (4))){
var inst_27404 = (state_27440[(7)]);
var inst_27406 = (inst_27404 < cnt);
var state_27440__$1 = state_27440;
if(cljs.core.truth_(inst_27406)){
var statearr_27444_27474 = state_27440__$1;
(statearr_27444_27474[(1)] = (6));

} else {
var statearr_27445_27475 = state_27440__$1;
(statearr_27445_27475[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (15))){
var inst_27436 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27446_27476 = state_27440__$1;
(statearr_27446_27476[(2)] = inst_27436);

(statearr_27446_27476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (13))){
var inst_27429 = cljs.core.async.close_BANG_.call(null,out);
var state_27440__$1 = state_27440;
var statearr_27447_27477 = state_27440__$1;
(statearr_27447_27477[(2)] = inst_27429);

(statearr_27447_27477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (6))){
var state_27440__$1 = state_27440;
var statearr_27448_27478 = state_27440__$1;
(statearr_27448_27478[(2)] = null);

(statearr_27448_27478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (3))){
var inst_27438 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27440__$1,inst_27438);
} else {
if((state_val_27441 === (12))){
var inst_27426 = (state_27440[(8)]);
var inst_27426__$1 = (state_27440[(2)]);
var inst_27427 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27426__$1);
var state_27440__$1 = (function (){var statearr_27449 = state_27440;
(statearr_27449[(8)] = inst_27426__$1);

return statearr_27449;
})();
if(cljs.core.truth_(inst_27427)){
var statearr_27450_27479 = state_27440__$1;
(statearr_27450_27479[(1)] = (13));

} else {
var statearr_27451_27480 = state_27440__$1;
(statearr_27451_27480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (2))){
var inst_27403 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27404 = (0);
var state_27440__$1 = (function (){var statearr_27452 = state_27440;
(statearr_27452[(9)] = inst_27403);

(statearr_27452[(7)] = inst_27404);

return statearr_27452;
})();
var statearr_27453_27481 = state_27440__$1;
(statearr_27453_27481[(2)] = null);

(statearr_27453_27481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (11))){
var inst_27404 = (state_27440[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27440,(10),Object,null,(9));
var inst_27413 = chs__$1.call(null,inst_27404);
var inst_27414 = done.call(null,inst_27404);
var inst_27415 = cljs.core.async.take_BANG_.call(null,inst_27413,inst_27414);
var state_27440__$1 = state_27440;
var statearr_27454_27482 = state_27440__$1;
(statearr_27454_27482[(2)] = inst_27415);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (9))){
var inst_27404 = (state_27440[(7)]);
var inst_27417 = (state_27440[(2)]);
var inst_27418 = (inst_27404 + (1));
var inst_27404__$1 = inst_27418;
var state_27440__$1 = (function (){var statearr_27455 = state_27440;
(statearr_27455[(7)] = inst_27404__$1);

(statearr_27455[(10)] = inst_27417);

return statearr_27455;
})();
var statearr_27456_27483 = state_27440__$1;
(statearr_27456_27483[(2)] = null);

(statearr_27456_27483[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (5))){
var inst_27424 = (state_27440[(2)]);
var state_27440__$1 = (function (){var statearr_27457 = state_27440;
(statearr_27457[(11)] = inst_27424);

return statearr_27457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27440__$1,(12),dchan);
} else {
if((state_val_27441 === (14))){
var inst_27426 = (state_27440[(8)]);
var inst_27431 = cljs.core.apply.call(null,f,inst_27426);
var state_27440__$1 = state_27440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27440__$1,(16),out,inst_27431);
} else {
if((state_val_27441 === (16))){
var inst_27433 = (state_27440[(2)]);
var state_27440__$1 = (function (){var statearr_27458 = state_27440;
(statearr_27458[(12)] = inst_27433);

return statearr_27458;
})();
var statearr_27459_27484 = state_27440__$1;
(statearr_27459_27484[(2)] = null);

(statearr_27459_27484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (10))){
var inst_27408 = (state_27440[(2)]);
var inst_27409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27440__$1 = (function (){var statearr_27460 = state_27440;
(statearr_27460[(13)] = inst_27408);

return statearr_27460;
})();
var statearr_27461_27485 = state_27440__$1;
(statearr_27461_27485[(2)] = inst_27409);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27440__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27441 === (8))){
var inst_27422 = (state_27440[(2)]);
var state_27440__$1 = state_27440;
var statearr_27462_27486 = state_27440__$1;
(statearr_27462_27486[(2)] = inst_27422);

(statearr_27462_27486[(1)] = (5));


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
});})(c__21345__auto___27471,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21283__auto__,c__21345__auto___27471,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27466[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27466[(1)] = (1));

return statearr_27466;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27440){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27467){if((e27467 instanceof Object)){
var ex__21287__auto__ = e27467;
var statearr_27468_27487 = state_27440;
(statearr_27468_27487[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27488 = state_27440;
state_27440 = G__27488;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27471,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21347__auto__ = (function (){var statearr_27469 = f__21346__auto__.call(null);
(statearr_27469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27471);

return statearr_27469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27471,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__27491 = arguments.length;
switch (G__27491) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___27546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27546,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27546,out){
return (function (state_27521){
var state_val_27522 = (state_27521[(1)]);
if((state_val_27522 === (7))){
var inst_27501 = (state_27521[(7)]);
var inst_27500 = (state_27521[(8)]);
var inst_27500__$1 = (state_27521[(2)]);
var inst_27501__$1 = cljs.core.nth.call(null,inst_27500__$1,(0),null);
var inst_27502 = cljs.core.nth.call(null,inst_27500__$1,(1),null);
var inst_27503 = (inst_27501__$1 == null);
var state_27521__$1 = (function (){var statearr_27523 = state_27521;
(statearr_27523[(7)] = inst_27501__$1);

(statearr_27523[(8)] = inst_27500__$1);

(statearr_27523[(9)] = inst_27502);

return statearr_27523;
})();
if(cljs.core.truth_(inst_27503)){
var statearr_27524_27547 = state_27521__$1;
(statearr_27524_27547[(1)] = (8));

} else {
var statearr_27525_27548 = state_27521__$1;
(statearr_27525_27548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (1))){
var inst_27492 = cljs.core.vec.call(null,chs);
var inst_27493 = inst_27492;
var state_27521__$1 = (function (){var statearr_27526 = state_27521;
(statearr_27526[(10)] = inst_27493);

return statearr_27526;
})();
var statearr_27527_27549 = state_27521__$1;
(statearr_27527_27549[(2)] = null);

(statearr_27527_27549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (4))){
var inst_27493 = (state_27521[(10)]);
var state_27521__$1 = state_27521;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27521__$1,(7),inst_27493);
} else {
if((state_val_27522 === (6))){
var inst_27517 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27528_27550 = state_27521__$1;
(statearr_27528_27550[(2)] = inst_27517);

(statearr_27528_27550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (3))){
var inst_27519 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27521__$1,inst_27519);
} else {
if((state_val_27522 === (2))){
var inst_27493 = (state_27521[(10)]);
var inst_27495 = cljs.core.count.call(null,inst_27493);
var inst_27496 = (inst_27495 > (0));
var state_27521__$1 = state_27521;
if(cljs.core.truth_(inst_27496)){
var statearr_27530_27551 = state_27521__$1;
(statearr_27530_27551[(1)] = (4));

} else {
var statearr_27531_27552 = state_27521__$1;
(statearr_27531_27552[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (11))){
var inst_27493 = (state_27521[(10)]);
var inst_27510 = (state_27521[(2)]);
var tmp27529 = inst_27493;
var inst_27493__$1 = tmp27529;
var state_27521__$1 = (function (){var statearr_27532 = state_27521;
(statearr_27532[(10)] = inst_27493__$1);

(statearr_27532[(11)] = inst_27510);

return statearr_27532;
})();
var statearr_27533_27553 = state_27521__$1;
(statearr_27533_27553[(2)] = null);

(statearr_27533_27553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (9))){
var inst_27501 = (state_27521[(7)]);
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27521__$1,(11),out,inst_27501);
} else {
if((state_val_27522 === (5))){
var inst_27515 = cljs.core.async.close_BANG_.call(null,out);
var state_27521__$1 = state_27521;
var statearr_27534_27554 = state_27521__$1;
(statearr_27534_27554[(2)] = inst_27515);

(statearr_27534_27554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (10))){
var inst_27513 = (state_27521[(2)]);
var state_27521__$1 = state_27521;
var statearr_27535_27555 = state_27521__$1;
(statearr_27535_27555[(2)] = inst_27513);

(statearr_27535_27555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27522 === (8))){
var inst_27501 = (state_27521[(7)]);
var inst_27493 = (state_27521[(10)]);
var inst_27500 = (state_27521[(8)]);
var inst_27502 = (state_27521[(9)]);
var inst_27505 = (function (){var c = inst_27502;
var v = inst_27501;
var vec__27498 = inst_27500;
var cs = inst_27493;
return ((function (c,v,vec__27498,cs,inst_27501,inst_27493,inst_27500,inst_27502,state_val_27522,c__21345__auto___27546,out){
return (function (p1__27489_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27489_SHARP_);
});
;})(c,v,vec__27498,cs,inst_27501,inst_27493,inst_27500,inst_27502,state_val_27522,c__21345__auto___27546,out))
})();
var inst_27506 = cljs.core.filterv.call(null,inst_27505,inst_27493);
var inst_27493__$1 = inst_27506;
var state_27521__$1 = (function (){var statearr_27536 = state_27521;
(statearr_27536[(10)] = inst_27493__$1);

return statearr_27536;
})();
var statearr_27537_27556 = state_27521__$1;
(statearr_27537_27556[(2)] = null);

(statearr_27537_27556[(1)] = (2));


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
});})(c__21345__auto___27546,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27546,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27541 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27541[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27541[(1)] = (1));

return statearr_27541;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27521){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27542){if((e27542 instanceof Object)){
var ex__21287__auto__ = e27542;
var statearr_27543_27557 = state_27521;
(statearr_27543_27557[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27558 = state_27521;
state_27521 = G__27558;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27546,out))
})();
var state__21347__auto__ = (function (){var statearr_27544 = f__21346__auto__.call(null);
(statearr_27544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27546);

return statearr_27544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27546,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__27560 = arguments.length;
switch (G__27560) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___27608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27608,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27608,out){
return (function (state_27584){
var state_val_27585 = (state_27584[(1)]);
if((state_val_27585 === (7))){
var inst_27566 = (state_27584[(7)]);
var inst_27566__$1 = (state_27584[(2)]);
var inst_27567 = (inst_27566__$1 == null);
var inst_27568 = cljs.core.not.call(null,inst_27567);
var state_27584__$1 = (function (){var statearr_27586 = state_27584;
(statearr_27586[(7)] = inst_27566__$1);

return statearr_27586;
})();
if(inst_27568){
var statearr_27587_27609 = state_27584__$1;
(statearr_27587_27609[(1)] = (8));

} else {
var statearr_27588_27610 = state_27584__$1;
(statearr_27588_27610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (1))){
var inst_27561 = (0);
var state_27584__$1 = (function (){var statearr_27589 = state_27584;
(statearr_27589[(8)] = inst_27561);

return statearr_27589;
})();
var statearr_27590_27611 = state_27584__$1;
(statearr_27590_27611[(2)] = null);

(statearr_27590_27611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (4))){
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27584__$1,(7),ch);
} else {
if((state_val_27585 === (6))){
var inst_27579 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27591_27612 = state_27584__$1;
(statearr_27591_27612[(2)] = inst_27579);

(statearr_27591_27612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (3))){
var inst_27581 = (state_27584[(2)]);
var inst_27582 = cljs.core.async.close_BANG_.call(null,out);
var state_27584__$1 = (function (){var statearr_27592 = state_27584;
(statearr_27592[(9)] = inst_27581);

return statearr_27592;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27584__$1,inst_27582);
} else {
if((state_val_27585 === (2))){
var inst_27561 = (state_27584[(8)]);
var inst_27563 = (inst_27561 < n);
var state_27584__$1 = state_27584;
if(cljs.core.truth_(inst_27563)){
var statearr_27593_27613 = state_27584__$1;
(statearr_27593_27613[(1)] = (4));

} else {
var statearr_27594_27614 = state_27584__$1;
(statearr_27594_27614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (11))){
var inst_27561 = (state_27584[(8)]);
var inst_27571 = (state_27584[(2)]);
var inst_27572 = (inst_27561 + (1));
var inst_27561__$1 = inst_27572;
var state_27584__$1 = (function (){var statearr_27595 = state_27584;
(statearr_27595[(8)] = inst_27561__$1);

(statearr_27595[(10)] = inst_27571);

return statearr_27595;
})();
var statearr_27596_27615 = state_27584__$1;
(statearr_27596_27615[(2)] = null);

(statearr_27596_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (9))){
var state_27584__$1 = state_27584;
var statearr_27597_27616 = state_27584__$1;
(statearr_27597_27616[(2)] = null);

(statearr_27597_27616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (5))){
var state_27584__$1 = state_27584;
var statearr_27598_27617 = state_27584__$1;
(statearr_27598_27617[(2)] = null);

(statearr_27598_27617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (10))){
var inst_27576 = (state_27584[(2)]);
var state_27584__$1 = state_27584;
var statearr_27599_27618 = state_27584__$1;
(statearr_27599_27618[(2)] = inst_27576);

(statearr_27599_27618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27585 === (8))){
var inst_27566 = (state_27584[(7)]);
var state_27584__$1 = state_27584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27584__$1,(11),out,inst_27566);
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
});})(c__21345__auto___27608,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27608,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27603[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27603[(1)] = (1));

return statearr_27603;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27584){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27604){if((e27604 instanceof Object)){
var ex__21287__auto__ = e27604;
var statearr_27605_27619 = state_27584;
(statearr_27605_27619[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27620 = state_27584;
state_27584 = G__27620;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27608,out))
})();
var state__21347__auto__ = (function (){var statearr_27606 = f__21346__auto__.call(null);
(statearr_27606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27608);

return statearr_27606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27608,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27628 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27628 = (function (ch,f,map_LT_,meta27629){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27629 = meta27629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27631 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27631 = (function (fn1,_,meta27629,map_LT_,f,ch,meta27632){
this.fn1 = fn1;
this._ = _;
this.meta27629 = meta27629;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27632 = meta27632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27621_SHARP_){
return f1.call(null,(((p1__27621_SHARP_ == null))?null:self__.f.call(null,p1__27621_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27633){
var self__ = this;
var _27633__$1 = this;
return self__.meta27632;
});})(___$1))
;

cljs.core.async.t27631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27633,meta27632__$1){
var self__ = this;
var _27633__$1 = this;
return (new cljs.core.async.t27631(self__.fn1,self__._,self__.meta27629,self__.map_LT_,self__.f,self__.ch,meta27632__$1));
});})(___$1))
;

cljs.core.async.t27631.cljs$lang$type = true;

cljs.core.async.t27631.cljs$lang$ctorStr = "cljs.core.async/t27631";

cljs.core.async.t27631.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27631");
});})(___$1))
;

cljs.core.async.__GT_t27631 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27631(fn1__$1,___$2,meta27629__$1,map_LT___$1,f__$1,ch__$1,meta27632){
return (new cljs.core.async.t27631(fn1__$1,___$2,meta27629__$1,map_LT___$1,f__$1,ch__$1,meta27632));
});})(___$1))
;

}

return (new cljs.core.async.t27631(fn1,___$1,self__.meta27629,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18109__auto__ = ret;
if(cljs.core.truth_(and__18109__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27628.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27630){
var self__ = this;
var _27630__$1 = this;
return self__.meta27629;
});

cljs.core.async.t27628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27630,meta27629__$1){
var self__ = this;
var _27630__$1 = this;
return (new cljs.core.async.t27628(self__.ch,self__.f,self__.map_LT_,meta27629__$1));
});

cljs.core.async.t27628.cljs$lang$type = true;

cljs.core.async.t27628.cljs$lang$ctorStr = "cljs.core.async/t27628";

cljs.core.async.t27628.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27628");
});

cljs.core.async.__GT_t27628 = (function cljs$core$async$map_LT__$___GT_t27628(ch__$1,f__$1,map_LT___$1,meta27629){
return (new cljs.core.async.t27628(ch__$1,f__$1,map_LT___$1,meta27629));
});

}

return (new cljs.core.async.t27628(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27637 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27637 = (function (ch,f,map_GT_,meta27638){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27638 = meta27638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27639){
var self__ = this;
var _27639__$1 = this;
return self__.meta27638;
});

cljs.core.async.t27637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27639,meta27638__$1){
var self__ = this;
var _27639__$1 = this;
return (new cljs.core.async.t27637(self__.ch,self__.f,self__.map_GT_,meta27638__$1));
});

cljs.core.async.t27637.cljs$lang$type = true;

cljs.core.async.t27637.cljs$lang$ctorStr = "cljs.core.async/t27637";

cljs.core.async.t27637.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27637");
});

cljs.core.async.__GT_t27637 = (function cljs$core$async$map_GT__$___GT_t27637(ch__$1,f__$1,map_GT___$1,meta27638){
return (new cljs.core.async.t27637(ch__$1,f__$1,map_GT___$1,meta27638));
});

}

return (new cljs.core.async.t27637(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27643 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27643 = (function (ch,p,filter_GT_,meta27644){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27644 = meta27644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27643.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27645){
var self__ = this;
var _27645__$1 = this;
return self__.meta27644;
});

cljs.core.async.t27643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27645,meta27644__$1){
var self__ = this;
var _27645__$1 = this;
return (new cljs.core.async.t27643(self__.ch,self__.p,self__.filter_GT_,meta27644__$1));
});

cljs.core.async.t27643.cljs$lang$type = true;

cljs.core.async.t27643.cljs$lang$ctorStr = "cljs.core.async/t27643";

cljs.core.async.t27643.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27643");
});

cljs.core.async.__GT_t27643 = (function cljs$core$async$filter_GT__$___GT_t27643(ch__$1,p__$1,filter_GT___$1,meta27644){
return (new cljs.core.async.t27643(ch__$1,p__$1,filter_GT___$1,meta27644));
});

}

return (new cljs.core.async.t27643(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__27647 = arguments.length;
switch (G__27647) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___27690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27690,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27690,out){
return (function (state_27668){
var state_val_27669 = (state_27668[(1)]);
if((state_val_27669 === (7))){
var inst_27664 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27670_27691 = state_27668__$1;
(statearr_27670_27691[(2)] = inst_27664);

(statearr_27670_27691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (1))){
var state_27668__$1 = state_27668;
var statearr_27671_27692 = state_27668__$1;
(statearr_27671_27692[(2)] = null);

(statearr_27671_27692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (4))){
var inst_27650 = (state_27668[(7)]);
var inst_27650__$1 = (state_27668[(2)]);
var inst_27651 = (inst_27650__$1 == null);
var state_27668__$1 = (function (){var statearr_27672 = state_27668;
(statearr_27672[(7)] = inst_27650__$1);

return statearr_27672;
})();
if(cljs.core.truth_(inst_27651)){
var statearr_27673_27693 = state_27668__$1;
(statearr_27673_27693[(1)] = (5));

} else {
var statearr_27674_27694 = state_27668__$1;
(statearr_27674_27694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (6))){
var inst_27650 = (state_27668[(7)]);
var inst_27655 = p.call(null,inst_27650);
var state_27668__$1 = state_27668;
if(cljs.core.truth_(inst_27655)){
var statearr_27675_27695 = state_27668__$1;
(statearr_27675_27695[(1)] = (8));

} else {
var statearr_27676_27696 = state_27668__$1;
(statearr_27676_27696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (3))){
var inst_27666 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27668__$1,inst_27666);
} else {
if((state_val_27669 === (2))){
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27668__$1,(4),ch);
} else {
if((state_val_27669 === (11))){
var inst_27658 = (state_27668[(2)]);
var state_27668__$1 = state_27668;
var statearr_27677_27697 = state_27668__$1;
(statearr_27677_27697[(2)] = inst_27658);

(statearr_27677_27697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (9))){
var state_27668__$1 = state_27668;
var statearr_27678_27698 = state_27668__$1;
(statearr_27678_27698[(2)] = null);

(statearr_27678_27698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (5))){
var inst_27653 = cljs.core.async.close_BANG_.call(null,out);
var state_27668__$1 = state_27668;
var statearr_27679_27699 = state_27668__$1;
(statearr_27679_27699[(2)] = inst_27653);

(statearr_27679_27699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (10))){
var inst_27661 = (state_27668[(2)]);
var state_27668__$1 = (function (){var statearr_27680 = state_27668;
(statearr_27680[(8)] = inst_27661);

return statearr_27680;
})();
var statearr_27681_27700 = state_27668__$1;
(statearr_27681_27700[(2)] = null);

(statearr_27681_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27669 === (8))){
var inst_27650 = (state_27668[(7)]);
var state_27668__$1 = state_27668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27668__$1,(11),out,inst_27650);
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
});})(c__21345__auto___27690,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27690,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27685 = [null,null,null,null,null,null,null,null,null];
(statearr_27685[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27685[(1)] = (1));

return statearr_27685;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27668){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27686){if((e27686 instanceof Object)){
var ex__21287__auto__ = e27686;
var statearr_27687_27701 = state_27668;
(statearr_27687_27701[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27702 = state_27668;
state_27668 = G__27702;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27690,out))
})();
var state__21347__auto__ = (function (){var statearr_27688 = f__21346__auto__.call(null);
(statearr_27688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27690);

return statearr_27688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27690,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__27704 = arguments.length;
switch (G__27704) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_27871){
var state_val_27872 = (state_27871[(1)]);
if((state_val_27872 === (7))){
var inst_27867 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27873_27914 = state_27871__$1;
(statearr_27873_27914[(2)] = inst_27867);

(statearr_27873_27914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (20))){
var inst_27837 = (state_27871[(7)]);
var inst_27848 = (state_27871[(2)]);
var inst_27849 = cljs.core.next.call(null,inst_27837);
var inst_27823 = inst_27849;
var inst_27824 = null;
var inst_27825 = (0);
var inst_27826 = (0);
var state_27871__$1 = (function (){var statearr_27874 = state_27871;
(statearr_27874[(8)] = inst_27826);

(statearr_27874[(9)] = inst_27825);

(statearr_27874[(10)] = inst_27823);

(statearr_27874[(11)] = inst_27824);

(statearr_27874[(12)] = inst_27848);

return statearr_27874;
})();
var statearr_27875_27915 = state_27871__$1;
(statearr_27875_27915[(2)] = null);

(statearr_27875_27915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (1))){
var state_27871__$1 = state_27871;
var statearr_27876_27916 = state_27871__$1;
(statearr_27876_27916[(2)] = null);

(statearr_27876_27916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (4))){
var inst_27812 = (state_27871[(13)]);
var inst_27812__$1 = (state_27871[(2)]);
var inst_27813 = (inst_27812__$1 == null);
var state_27871__$1 = (function (){var statearr_27877 = state_27871;
(statearr_27877[(13)] = inst_27812__$1);

return statearr_27877;
})();
if(cljs.core.truth_(inst_27813)){
var statearr_27878_27917 = state_27871__$1;
(statearr_27878_27917[(1)] = (5));

} else {
var statearr_27879_27918 = state_27871__$1;
(statearr_27879_27918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (15))){
var state_27871__$1 = state_27871;
var statearr_27883_27919 = state_27871__$1;
(statearr_27883_27919[(2)] = null);

(statearr_27883_27919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (21))){
var state_27871__$1 = state_27871;
var statearr_27884_27920 = state_27871__$1;
(statearr_27884_27920[(2)] = null);

(statearr_27884_27920[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (13))){
var inst_27826 = (state_27871[(8)]);
var inst_27825 = (state_27871[(9)]);
var inst_27823 = (state_27871[(10)]);
var inst_27824 = (state_27871[(11)]);
var inst_27833 = (state_27871[(2)]);
var inst_27834 = (inst_27826 + (1));
var tmp27880 = inst_27825;
var tmp27881 = inst_27823;
var tmp27882 = inst_27824;
var inst_27823__$1 = tmp27881;
var inst_27824__$1 = tmp27882;
var inst_27825__$1 = tmp27880;
var inst_27826__$1 = inst_27834;
var state_27871__$1 = (function (){var statearr_27885 = state_27871;
(statearr_27885[(8)] = inst_27826__$1);

(statearr_27885[(9)] = inst_27825__$1);

(statearr_27885[(10)] = inst_27823__$1);

(statearr_27885[(11)] = inst_27824__$1);

(statearr_27885[(14)] = inst_27833);

return statearr_27885;
})();
var statearr_27886_27921 = state_27871__$1;
(statearr_27886_27921[(2)] = null);

(statearr_27886_27921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (22))){
var state_27871__$1 = state_27871;
var statearr_27887_27922 = state_27871__$1;
(statearr_27887_27922[(2)] = null);

(statearr_27887_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (6))){
var inst_27812 = (state_27871[(13)]);
var inst_27821 = f.call(null,inst_27812);
var inst_27822 = cljs.core.seq.call(null,inst_27821);
var inst_27823 = inst_27822;
var inst_27824 = null;
var inst_27825 = (0);
var inst_27826 = (0);
var state_27871__$1 = (function (){var statearr_27888 = state_27871;
(statearr_27888[(8)] = inst_27826);

(statearr_27888[(9)] = inst_27825);

(statearr_27888[(10)] = inst_27823);

(statearr_27888[(11)] = inst_27824);

return statearr_27888;
})();
var statearr_27889_27923 = state_27871__$1;
(statearr_27889_27923[(2)] = null);

(statearr_27889_27923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (17))){
var inst_27837 = (state_27871[(7)]);
var inst_27841 = cljs.core.chunk_first.call(null,inst_27837);
var inst_27842 = cljs.core.chunk_rest.call(null,inst_27837);
var inst_27843 = cljs.core.count.call(null,inst_27841);
var inst_27823 = inst_27842;
var inst_27824 = inst_27841;
var inst_27825 = inst_27843;
var inst_27826 = (0);
var state_27871__$1 = (function (){var statearr_27890 = state_27871;
(statearr_27890[(8)] = inst_27826);

(statearr_27890[(9)] = inst_27825);

(statearr_27890[(10)] = inst_27823);

(statearr_27890[(11)] = inst_27824);

return statearr_27890;
})();
var statearr_27891_27924 = state_27871__$1;
(statearr_27891_27924[(2)] = null);

(statearr_27891_27924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (3))){
var inst_27869 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27871__$1,inst_27869);
} else {
if((state_val_27872 === (12))){
var inst_27857 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27892_27925 = state_27871__$1;
(statearr_27892_27925[(2)] = inst_27857);

(statearr_27892_27925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (2))){
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27871__$1,(4),in$);
} else {
if((state_val_27872 === (23))){
var inst_27865 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27893_27926 = state_27871__$1;
(statearr_27893_27926[(2)] = inst_27865);

(statearr_27893_27926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (19))){
var inst_27852 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27894_27927 = state_27871__$1;
(statearr_27894_27927[(2)] = inst_27852);

(statearr_27894_27927[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (11))){
var inst_27837 = (state_27871[(7)]);
var inst_27823 = (state_27871[(10)]);
var inst_27837__$1 = cljs.core.seq.call(null,inst_27823);
var state_27871__$1 = (function (){var statearr_27895 = state_27871;
(statearr_27895[(7)] = inst_27837__$1);

return statearr_27895;
})();
if(inst_27837__$1){
var statearr_27896_27928 = state_27871__$1;
(statearr_27896_27928[(1)] = (14));

} else {
var statearr_27897_27929 = state_27871__$1;
(statearr_27897_27929[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (9))){
var inst_27859 = (state_27871[(2)]);
var inst_27860 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27871__$1 = (function (){var statearr_27898 = state_27871;
(statearr_27898[(15)] = inst_27859);

return statearr_27898;
})();
if(cljs.core.truth_(inst_27860)){
var statearr_27899_27930 = state_27871__$1;
(statearr_27899_27930[(1)] = (21));

} else {
var statearr_27900_27931 = state_27871__$1;
(statearr_27900_27931[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (5))){
var inst_27815 = cljs.core.async.close_BANG_.call(null,out);
var state_27871__$1 = state_27871;
var statearr_27901_27932 = state_27871__$1;
(statearr_27901_27932[(2)] = inst_27815);

(statearr_27901_27932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (14))){
var inst_27837 = (state_27871[(7)]);
var inst_27839 = cljs.core.chunked_seq_QMARK_.call(null,inst_27837);
var state_27871__$1 = state_27871;
if(inst_27839){
var statearr_27902_27933 = state_27871__$1;
(statearr_27902_27933[(1)] = (17));

} else {
var statearr_27903_27934 = state_27871__$1;
(statearr_27903_27934[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (16))){
var inst_27855 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27904_27935 = state_27871__$1;
(statearr_27904_27935[(2)] = inst_27855);

(statearr_27904_27935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (10))){
var inst_27826 = (state_27871[(8)]);
var inst_27824 = (state_27871[(11)]);
var inst_27831 = cljs.core._nth.call(null,inst_27824,inst_27826);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27871__$1,(13),out,inst_27831);
} else {
if((state_val_27872 === (18))){
var inst_27837 = (state_27871[(7)]);
var inst_27846 = cljs.core.first.call(null,inst_27837);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27871__$1,(20),out,inst_27846);
} else {
if((state_val_27872 === (8))){
var inst_27826 = (state_27871[(8)]);
var inst_27825 = (state_27871[(9)]);
var inst_27828 = (inst_27826 < inst_27825);
var inst_27829 = inst_27828;
var state_27871__$1 = state_27871;
if(cljs.core.truth_(inst_27829)){
var statearr_27905_27936 = state_27871__$1;
(statearr_27905_27936[(1)] = (10));

} else {
var statearr_27906_27937 = state_27871__$1;
(statearr_27906_27937[(1)] = (11));

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
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0 = (function (){
var statearr_27910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27910[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__);

(statearr_27910[(1)] = (1));

return statearr_27910;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1 = (function (state_27871){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27911){if((e27911 instanceof Object)){
var ex__21287__auto__ = e27911;
var statearr_27912_27938 = state_27871;
(statearr_27912_27938[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27939 = state_27871;
state_27871 = G__27939;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__ = function(state_27871){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1.call(this,state_27871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21284__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_27913 = f__21346__auto__.call(null);
(statearr_27913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_27913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__27941 = arguments.length;
switch (G__27941) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__27944 = arguments.length;
switch (G__27944) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__27947 = arguments.length;
switch (G__27947) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___27997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___27997,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___27997,out){
return (function (state_27971){
var state_val_27972 = (state_27971[(1)]);
if((state_val_27972 === (7))){
var inst_27966 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
var statearr_27973_27998 = state_27971__$1;
(statearr_27973_27998[(2)] = inst_27966);

(statearr_27973_27998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (1))){
var inst_27948 = null;
var state_27971__$1 = (function (){var statearr_27974 = state_27971;
(statearr_27974[(7)] = inst_27948);

return statearr_27974;
})();
var statearr_27975_27999 = state_27971__$1;
(statearr_27975_27999[(2)] = null);

(statearr_27975_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (4))){
var inst_27951 = (state_27971[(8)]);
var inst_27951__$1 = (state_27971[(2)]);
var inst_27952 = (inst_27951__$1 == null);
var inst_27953 = cljs.core.not.call(null,inst_27952);
var state_27971__$1 = (function (){var statearr_27976 = state_27971;
(statearr_27976[(8)] = inst_27951__$1);

return statearr_27976;
})();
if(inst_27953){
var statearr_27977_28000 = state_27971__$1;
(statearr_27977_28000[(1)] = (5));

} else {
var statearr_27978_28001 = state_27971__$1;
(statearr_27978_28001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (6))){
var state_27971__$1 = state_27971;
var statearr_27979_28002 = state_27971__$1;
(statearr_27979_28002[(2)] = null);

(statearr_27979_28002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (3))){
var inst_27968 = (state_27971[(2)]);
var inst_27969 = cljs.core.async.close_BANG_.call(null,out);
var state_27971__$1 = (function (){var statearr_27980 = state_27971;
(statearr_27980[(9)] = inst_27968);

return statearr_27980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27971__$1,inst_27969);
} else {
if((state_val_27972 === (2))){
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27971__$1,(4),ch);
} else {
if((state_val_27972 === (11))){
var inst_27951 = (state_27971[(8)]);
var inst_27960 = (state_27971[(2)]);
var inst_27948 = inst_27951;
var state_27971__$1 = (function (){var statearr_27981 = state_27971;
(statearr_27981[(7)] = inst_27948);

(statearr_27981[(10)] = inst_27960);

return statearr_27981;
})();
var statearr_27982_28003 = state_27971__$1;
(statearr_27982_28003[(2)] = null);

(statearr_27982_28003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (9))){
var inst_27951 = (state_27971[(8)]);
var state_27971__$1 = state_27971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27971__$1,(11),out,inst_27951);
} else {
if((state_val_27972 === (5))){
var inst_27951 = (state_27971[(8)]);
var inst_27948 = (state_27971[(7)]);
var inst_27955 = cljs.core._EQ_.call(null,inst_27951,inst_27948);
var state_27971__$1 = state_27971;
if(inst_27955){
var statearr_27984_28004 = state_27971__$1;
(statearr_27984_28004[(1)] = (8));

} else {
var statearr_27985_28005 = state_27971__$1;
(statearr_27985_28005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (10))){
var inst_27963 = (state_27971[(2)]);
var state_27971__$1 = state_27971;
var statearr_27986_28006 = state_27971__$1;
(statearr_27986_28006[(2)] = inst_27963);

(statearr_27986_28006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27972 === (8))){
var inst_27948 = (state_27971[(7)]);
var tmp27983 = inst_27948;
var inst_27948__$1 = tmp27983;
var state_27971__$1 = (function (){var statearr_27987 = state_27971;
(statearr_27987[(7)] = inst_27948__$1);

return statearr_27987;
})();
var statearr_27988_28007 = state_27971__$1;
(statearr_27988_28007[(2)] = null);

(statearr_27988_28007[(1)] = (2));


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
});})(c__21345__auto___27997,out))
;
return ((function (switch__21283__auto__,c__21345__auto___27997,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_27992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27992[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_27992[(1)] = (1));

return statearr_27992;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_27971){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_27971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e27993){if((e27993 instanceof Object)){
var ex__21287__auto__ = e27993;
var statearr_27994_28008 = state_27971;
(statearr_27994_28008[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28009 = state_27971;
state_27971 = G__28009;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_27971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_27971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___27997,out))
})();
var state__21347__auto__ = (function (){var statearr_27995 = f__21346__auto__.call(null);
(statearr_27995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___27997);

return statearr_27995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___27997,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28011 = arguments.length;
switch (G__28011) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___28080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28080,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28080,out){
return (function (state_28049){
var state_val_28050 = (state_28049[(1)]);
if((state_val_28050 === (7))){
var inst_28045 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28051_28081 = state_28049__$1;
(statearr_28051_28081[(2)] = inst_28045);

(statearr_28051_28081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (1))){
var inst_28012 = (new Array(n));
var inst_28013 = inst_28012;
var inst_28014 = (0);
var state_28049__$1 = (function (){var statearr_28052 = state_28049;
(statearr_28052[(7)] = inst_28014);

(statearr_28052[(8)] = inst_28013);

return statearr_28052;
})();
var statearr_28053_28082 = state_28049__$1;
(statearr_28053_28082[(2)] = null);

(statearr_28053_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (4))){
var inst_28017 = (state_28049[(9)]);
var inst_28017__$1 = (state_28049[(2)]);
var inst_28018 = (inst_28017__$1 == null);
var inst_28019 = cljs.core.not.call(null,inst_28018);
var state_28049__$1 = (function (){var statearr_28054 = state_28049;
(statearr_28054[(9)] = inst_28017__$1);

return statearr_28054;
})();
if(inst_28019){
var statearr_28055_28083 = state_28049__$1;
(statearr_28055_28083[(1)] = (5));

} else {
var statearr_28056_28084 = state_28049__$1;
(statearr_28056_28084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (15))){
var inst_28039 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28057_28085 = state_28049__$1;
(statearr_28057_28085[(2)] = inst_28039);

(statearr_28057_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (13))){
var state_28049__$1 = state_28049;
var statearr_28058_28086 = state_28049__$1;
(statearr_28058_28086[(2)] = null);

(statearr_28058_28086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (6))){
var inst_28014 = (state_28049[(7)]);
var inst_28035 = (inst_28014 > (0));
var state_28049__$1 = state_28049;
if(cljs.core.truth_(inst_28035)){
var statearr_28059_28087 = state_28049__$1;
(statearr_28059_28087[(1)] = (12));

} else {
var statearr_28060_28088 = state_28049__$1;
(statearr_28060_28088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (3))){
var inst_28047 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28049__$1,inst_28047);
} else {
if((state_val_28050 === (12))){
var inst_28013 = (state_28049[(8)]);
var inst_28037 = cljs.core.vec.call(null,inst_28013);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28049__$1,(15),out,inst_28037);
} else {
if((state_val_28050 === (2))){
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28049__$1,(4),ch);
} else {
if((state_val_28050 === (11))){
var inst_28029 = (state_28049[(2)]);
var inst_28030 = (new Array(n));
var inst_28013 = inst_28030;
var inst_28014 = (0);
var state_28049__$1 = (function (){var statearr_28061 = state_28049;
(statearr_28061[(7)] = inst_28014);

(statearr_28061[(10)] = inst_28029);

(statearr_28061[(8)] = inst_28013);

return statearr_28061;
})();
var statearr_28062_28089 = state_28049__$1;
(statearr_28062_28089[(2)] = null);

(statearr_28062_28089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (9))){
var inst_28013 = (state_28049[(8)]);
var inst_28027 = cljs.core.vec.call(null,inst_28013);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28049__$1,(11),out,inst_28027);
} else {
if((state_val_28050 === (5))){
var inst_28022 = (state_28049[(11)]);
var inst_28017 = (state_28049[(9)]);
var inst_28014 = (state_28049[(7)]);
var inst_28013 = (state_28049[(8)]);
var inst_28021 = (inst_28013[inst_28014] = inst_28017);
var inst_28022__$1 = (inst_28014 + (1));
var inst_28023 = (inst_28022__$1 < n);
var state_28049__$1 = (function (){var statearr_28063 = state_28049;
(statearr_28063[(11)] = inst_28022__$1);

(statearr_28063[(12)] = inst_28021);

return statearr_28063;
})();
if(cljs.core.truth_(inst_28023)){
var statearr_28064_28090 = state_28049__$1;
(statearr_28064_28090[(1)] = (8));

} else {
var statearr_28065_28091 = state_28049__$1;
(statearr_28065_28091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (14))){
var inst_28042 = (state_28049[(2)]);
var inst_28043 = cljs.core.async.close_BANG_.call(null,out);
var state_28049__$1 = (function (){var statearr_28067 = state_28049;
(statearr_28067[(13)] = inst_28042);

return statearr_28067;
})();
var statearr_28068_28092 = state_28049__$1;
(statearr_28068_28092[(2)] = inst_28043);

(statearr_28068_28092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (10))){
var inst_28033 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28069_28093 = state_28049__$1;
(statearr_28069_28093[(2)] = inst_28033);

(statearr_28069_28093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (8))){
var inst_28022 = (state_28049[(11)]);
var inst_28013 = (state_28049[(8)]);
var tmp28066 = inst_28013;
var inst_28013__$1 = tmp28066;
var inst_28014 = inst_28022;
var state_28049__$1 = (function (){var statearr_28070 = state_28049;
(statearr_28070[(7)] = inst_28014);

(statearr_28070[(8)] = inst_28013__$1);

return statearr_28070;
})();
var statearr_28071_28094 = state_28049__$1;
(statearr_28071_28094[(2)] = null);

(statearr_28071_28094[(1)] = (2));


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
});})(c__21345__auto___28080,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28080,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28049){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__21287__auto__ = e28076;
var statearr_28077_28095 = state_28049;
(statearr_28077_28095[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28096 = state_28049;
state_28049 = G__28096;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28080,out))
})();
var state__21347__auto__ = (function (){var statearr_28078 = f__21346__auto__.call(null);
(statearr_28078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28080);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28080,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28098 = arguments.length;
switch (G__28098) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21345__auto___28171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto___28171,out){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto___28171,out){
return (function (state_28140){
var state_val_28141 = (state_28140[(1)]);
if((state_val_28141 === (7))){
var inst_28136 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28142_28172 = state_28140__$1;
(statearr_28142_28172[(2)] = inst_28136);

(statearr_28142_28172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (1))){
var inst_28099 = [];
var inst_28100 = inst_28099;
var inst_28101 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28140__$1 = (function (){var statearr_28143 = state_28140;
(statearr_28143[(7)] = inst_28101);

(statearr_28143[(8)] = inst_28100);

return statearr_28143;
})();
var statearr_28144_28173 = state_28140__$1;
(statearr_28144_28173[(2)] = null);

(statearr_28144_28173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (4))){
var inst_28104 = (state_28140[(9)]);
var inst_28104__$1 = (state_28140[(2)]);
var inst_28105 = (inst_28104__$1 == null);
var inst_28106 = cljs.core.not.call(null,inst_28105);
var state_28140__$1 = (function (){var statearr_28145 = state_28140;
(statearr_28145[(9)] = inst_28104__$1);

return statearr_28145;
})();
if(inst_28106){
var statearr_28146_28174 = state_28140__$1;
(statearr_28146_28174[(1)] = (5));

} else {
var statearr_28147_28175 = state_28140__$1;
(statearr_28147_28175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (15))){
var inst_28130 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28148_28176 = state_28140__$1;
(statearr_28148_28176[(2)] = inst_28130);

(statearr_28148_28176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (13))){
var state_28140__$1 = state_28140;
var statearr_28149_28177 = state_28140__$1;
(statearr_28149_28177[(2)] = null);

(statearr_28149_28177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (6))){
var inst_28100 = (state_28140[(8)]);
var inst_28125 = inst_28100.length;
var inst_28126 = (inst_28125 > (0));
var state_28140__$1 = state_28140;
if(cljs.core.truth_(inst_28126)){
var statearr_28150_28178 = state_28140__$1;
(statearr_28150_28178[(1)] = (12));

} else {
var statearr_28151_28179 = state_28140__$1;
(statearr_28151_28179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (3))){
var inst_28138 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28140__$1,inst_28138);
} else {
if((state_val_28141 === (12))){
var inst_28100 = (state_28140[(8)]);
var inst_28128 = cljs.core.vec.call(null,inst_28100);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28140__$1,(15),out,inst_28128);
} else {
if((state_val_28141 === (2))){
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28140__$1,(4),ch);
} else {
if((state_val_28141 === (11))){
var inst_28104 = (state_28140[(9)]);
var inst_28108 = (state_28140[(10)]);
var inst_28118 = (state_28140[(2)]);
var inst_28119 = [];
var inst_28120 = inst_28119.push(inst_28104);
var inst_28100 = inst_28119;
var inst_28101 = inst_28108;
var state_28140__$1 = (function (){var statearr_28152 = state_28140;
(statearr_28152[(11)] = inst_28120);

(statearr_28152[(7)] = inst_28101);

(statearr_28152[(12)] = inst_28118);

(statearr_28152[(8)] = inst_28100);

return statearr_28152;
})();
var statearr_28153_28180 = state_28140__$1;
(statearr_28153_28180[(2)] = null);

(statearr_28153_28180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (9))){
var inst_28100 = (state_28140[(8)]);
var inst_28116 = cljs.core.vec.call(null,inst_28100);
var state_28140__$1 = state_28140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28140__$1,(11),out,inst_28116);
} else {
if((state_val_28141 === (5))){
var inst_28104 = (state_28140[(9)]);
var inst_28101 = (state_28140[(7)]);
var inst_28108 = (state_28140[(10)]);
var inst_28108__$1 = f.call(null,inst_28104);
var inst_28109 = cljs.core._EQ_.call(null,inst_28108__$1,inst_28101);
var inst_28110 = cljs.core.keyword_identical_QMARK_.call(null,inst_28101,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28111 = (inst_28109) || (inst_28110);
var state_28140__$1 = (function (){var statearr_28154 = state_28140;
(statearr_28154[(10)] = inst_28108__$1);

return statearr_28154;
})();
if(cljs.core.truth_(inst_28111)){
var statearr_28155_28181 = state_28140__$1;
(statearr_28155_28181[(1)] = (8));

} else {
var statearr_28156_28182 = state_28140__$1;
(statearr_28156_28182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (14))){
var inst_28133 = (state_28140[(2)]);
var inst_28134 = cljs.core.async.close_BANG_.call(null,out);
var state_28140__$1 = (function (){var statearr_28158 = state_28140;
(statearr_28158[(13)] = inst_28133);

return statearr_28158;
})();
var statearr_28159_28183 = state_28140__$1;
(statearr_28159_28183[(2)] = inst_28134);

(statearr_28159_28183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (10))){
var inst_28123 = (state_28140[(2)]);
var state_28140__$1 = state_28140;
var statearr_28160_28184 = state_28140__$1;
(statearr_28160_28184[(2)] = inst_28123);

(statearr_28160_28184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28141 === (8))){
var inst_28104 = (state_28140[(9)]);
var inst_28108 = (state_28140[(10)]);
var inst_28100 = (state_28140[(8)]);
var inst_28113 = inst_28100.push(inst_28104);
var tmp28157 = inst_28100;
var inst_28100__$1 = tmp28157;
var inst_28101 = inst_28108;
var state_28140__$1 = (function (){var statearr_28161 = state_28140;
(statearr_28161[(7)] = inst_28101);

(statearr_28161[(14)] = inst_28113);

(statearr_28161[(8)] = inst_28100__$1);

return statearr_28161;
})();
var statearr_28162_28185 = state_28140__$1;
(statearr_28162_28185[(2)] = null);

(statearr_28162_28185[(1)] = (2));


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
});})(c__21345__auto___28171,out))
;
return ((function (switch__21283__auto__,c__21345__auto___28171,out){
return (function() {
var cljs$core$async$state_machine__21284__auto__ = null;
var cljs$core$async$state_machine__21284__auto____0 = (function (){
var statearr_28166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28166[(0)] = cljs$core$async$state_machine__21284__auto__);

(statearr_28166[(1)] = (1));

return statearr_28166;
});
var cljs$core$async$state_machine__21284__auto____1 = (function (state_28140){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_28140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e28167){if((e28167 instanceof Object)){
var ex__21287__auto__ = e28167;
var statearr_28168_28186 = state_28140;
(statearr_28168_28186[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28187 = state_28140;
state_28140 = G__28187;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
cljs$core$async$state_machine__21284__auto__ = function(state_28140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21284__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21284__auto____1.call(this,state_28140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21284__auto____0;
cljs$core$async$state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21284__auto____1;
return cljs$core$async$state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto___28171,out))
})();
var state__21347__auto__ = (function (){var statearr_28169 = f__21346__auto__.call(null);
(statearr_28169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto___28171);

return statearr_28169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto___28171,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1439894836544