// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29351_29363 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29352_29364 = null;
var count__29353_29365 = (0);
var i__29354_29366 = (0);
while(true){
if((i__29354_29366 < count__29353_29365)){
var f_29367 = cljs.core._nth.call(null,chunk__29352_29364,i__29354_29366);
cljs.core.println.call(null,"  ",f_29367);

var G__29368 = seq__29351_29363;
var G__29369 = chunk__29352_29364;
var G__29370 = count__29353_29365;
var G__29371 = (i__29354_29366 + (1));
seq__29351_29363 = G__29368;
chunk__29352_29364 = G__29369;
count__29353_29365 = G__29370;
i__29354_29366 = G__29371;
continue;
} else {
var temp__4126__auto___29372 = cljs.core.seq.call(null,seq__29351_29363);
if(temp__4126__auto___29372){
var seq__29351_29373__$1 = temp__4126__auto___29372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29351_29373__$1)){
var c__18906__auto___29374 = cljs.core.chunk_first.call(null,seq__29351_29373__$1);
var G__29375 = cljs.core.chunk_rest.call(null,seq__29351_29373__$1);
var G__29376 = c__18906__auto___29374;
var G__29377 = cljs.core.count.call(null,c__18906__auto___29374);
var G__29378 = (0);
seq__29351_29363 = G__29375;
chunk__29352_29364 = G__29376;
count__29353_29365 = G__29377;
i__29354_29366 = G__29378;
continue;
} else {
var f_29379 = cljs.core.first.call(null,seq__29351_29373__$1);
cljs.core.println.call(null,"  ",f_29379);

var G__29380 = cljs.core.next.call(null,seq__29351_29373__$1);
var G__29381 = null;
var G__29382 = (0);
var G__29383 = (0);
seq__29351_29363 = G__29380;
chunk__29352_29364 = G__29381;
count__29353_29365 = G__29382;
i__29354_29366 = G__29383;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18121__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29355 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29356 = null;
var count__29357 = (0);
var i__29358 = (0);
while(true){
if((i__29358 < count__29357)){
var vec__29359 = cljs.core._nth.call(null,chunk__29356,i__29358);
var name = cljs.core.nth.call(null,vec__29359,(0),null);
var map__29360 = cljs.core.nth.call(null,vec__29359,(1),null);
var map__29360__$1 = ((cljs.core.seq_QMARK_.call(null,map__29360))?cljs.core.apply.call(null,cljs.core.hash_map,map__29360):map__29360);
var arglists = cljs.core.get.call(null,map__29360__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29384 = seq__29355;
var G__29385 = chunk__29356;
var G__29386 = count__29357;
var G__29387 = (i__29358 + (1));
seq__29355 = G__29384;
chunk__29356 = G__29385;
count__29357 = G__29386;
i__29358 = G__29387;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29355);
if(temp__4126__auto__){
var seq__29355__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29355__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__29355__$1);
var G__29388 = cljs.core.chunk_rest.call(null,seq__29355__$1);
var G__29389 = c__18906__auto__;
var G__29390 = cljs.core.count.call(null,c__18906__auto__);
var G__29391 = (0);
seq__29355 = G__29388;
chunk__29356 = G__29389;
count__29357 = G__29390;
i__29358 = G__29391;
continue;
} else {
var vec__29361 = cljs.core.first.call(null,seq__29355__$1);
var name = cljs.core.nth.call(null,vec__29361,(0),null);
var map__29362 = cljs.core.nth.call(null,vec__29361,(1),null);
var map__29362__$1 = ((cljs.core.seq_QMARK_.call(null,map__29362))?cljs.core.apply.call(null,cljs.core.hash_map,map__29362):map__29362);
var arglists = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29392 = cljs.core.next.call(null,seq__29355__$1);
var G__29393 = null;
var G__29394 = (0);
var G__29395 = (0);
seq__29355 = G__29392;
chunk__29356 = G__29393;
count__29357 = G__29394;
i__29358 = G__29395;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1439894838372