// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__29108_29116 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29109_29117 = null;
var count__29110_29118 = (0);
var i__29111_29119 = (0);
while(true){
if((i__29111_29119 < count__29110_29118)){
var k_29120 = cljs.core._nth.call(null,chunk__29109_29117,i__29111_29119);
e.setAttribute(cljs.core.name.call(null,k_29120),cljs.core.get.call(null,attrs,k_29120));

var G__29121 = seq__29108_29116;
var G__29122 = chunk__29109_29117;
var G__29123 = count__29110_29118;
var G__29124 = (i__29111_29119 + (1));
seq__29108_29116 = G__29121;
chunk__29109_29117 = G__29122;
count__29110_29118 = G__29123;
i__29111_29119 = G__29124;
continue;
} else {
var temp__4126__auto___29125 = cljs.core.seq.call(null,seq__29108_29116);
if(temp__4126__auto___29125){
var seq__29108_29126__$1 = temp__4126__auto___29125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29108_29126__$1)){
var c__18906__auto___29127 = cljs.core.chunk_first.call(null,seq__29108_29126__$1);
var G__29128 = cljs.core.chunk_rest.call(null,seq__29108_29126__$1);
var G__29129 = c__18906__auto___29127;
var G__29130 = cljs.core.count.call(null,c__18906__auto___29127);
var G__29131 = (0);
seq__29108_29116 = G__29128;
chunk__29109_29117 = G__29129;
count__29110_29118 = G__29130;
i__29111_29119 = G__29131;
continue;
} else {
var k_29132 = cljs.core.first.call(null,seq__29108_29126__$1);
e.setAttribute(cljs.core.name.call(null,k_29132),cljs.core.get.call(null,attrs,k_29132));

var G__29133 = cljs.core.next.call(null,seq__29108_29126__$1);
var G__29134 = null;
var G__29135 = (0);
var G__29136 = (0);
seq__29108_29116 = G__29133;
chunk__29109_29117 = G__29134;
count__29110_29118 = G__29135;
i__29111_29119 = G__29136;
continue;
}
} else {
}
}
break;
}

var seq__29112_29137 = cljs.core.seq.call(null,children);
var chunk__29113_29138 = null;
var count__29114_29139 = (0);
var i__29115_29140 = (0);
while(true){
if((i__29115_29140 < count__29114_29139)){
var ch_29141 = cljs.core._nth.call(null,chunk__29113_29138,i__29115_29140);
e.appendChild(ch_29141);

var G__29142 = seq__29112_29137;
var G__29143 = chunk__29113_29138;
var G__29144 = count__29114_29139;
var G__29145 = (i__29115_29140 + (1));
seq__29112_29137 = G__29142;
chunk__29113_29138 = G__29143;
count__29114_29139 = G__29144;
i__29115_29140 = G__29145;
continue;
} else {
var temp__4126__auto___29146 = cljs.core.seq.call(null,seq__29112_29137);
if(temp__4126__auto___29146){
var seq__29112_29147__$1 = temp__4126__auto___29146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29112_29147__$1)){
var c__18906__auto___29148 = cljs.core.chunk_first.call(null,seq__29112_29147__$1);
var G__29149 = cljs.core.chunk_rest.call(null,seq__29112_29147__$1);
var G__29150 = c__18906__auto___29148;
var G__29151 = cljs.core.count.call(null,c__18906__auto___29148);
var G__29152 = (0);
seq__29112_29137 = G__29149;
chunk__29113_29138 = G__29150;
count__29114_29139 = G__29151;
i__29115_29140 = G__29152;
continue;
} else {
var ch_29153 = cljs.core.first.call(null,seq__29112_29147__$1);
e.appendChild(ch_29153);

var G__29154 = cljs.core.next.call(null,seq__29112_29147__$1);
var G__29155 = null;
var G__29156 = (0);
var G__29157 = (0);
seq__29112_29137 = G__29154;
chunk__29113_29138 = G__29155;
count__29114_29139 = G__29156;
i__29115_29140 = G__29157;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq29105){
var G__29106 = cljs.core.first.call(null,seq29105);
var seq29105__$1 = cljs.core.next.call(null,seq29105);
var G__29107 = cljs.core.first.call(null,seq29105__$1);
var seq29105__$2 = cljs.core.next.call(null,seq29105__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__29106,G__29107,seq29105__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29158 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29158.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29158.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29158.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29158);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29159,st_map){
var map__29163 = p__29159;
var map__29163__$1 = ((cljs.core.seq_QMARK_.call(null,map__29163))?cljs.core.apply.call(null,cljs.core.hash_map,map__29163):map__29163);
var container_el = cljs.core.get.call(null,map__29163__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29163,map__29163__$1,container_el){
return (function (p__29164){
var vec__29165 = p__29164;
var k = cljs.core.nth.call(null,vec__29165,(0),null);
var v = cljs.core.nth.call(null,vec__29165,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29163,map__29163__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29166,dom_str){
var map__29168 = p__29166;
var map__29168__$1 = ((cljs.core.seq_QMARK_.call(null,map__29168))?cljs.core.apply.call(null,cljs.core.hash_map,map__29168):map__29168);
var c = map__29168__$1;
var content_area_el = cljs.core.get.call(null,map__29168__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29169){
var map__29171 = p__29169;
var map__29171__$1 = ((cljs.core.seq_QMARK_.call(null,map__29171))?cljs.core.apply.call(null,cljs.core.hash_map,map__29171):map__29171);
var content_area_el = cljs.core.get.call(null,map__29171__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29213){
var state_val_29214 = (state_29213[(1)]);
if((state_val_29214 === (2))){
var inst_29198 = (state_29213[(7)]);
var inst_29207 = (state_29213[(2)]);
var inst_29208 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29209 = ["auto"];
var inst_29210 = cljs.core.PersistentHashMap.fromArrays(inst_29208,inst_29209);
var inst_29211 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29198,inst_29210);
var state_29213__$1 = (function (){var statearr_29215 = state_29213;
(statearr_29215[(8)] = inst_29207);

return statearr_29215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29213__$1,inst_29211);
} else {
if((state_val_29214 === (1))){
var inst_29198 = (state_29213[(7)]);
var inst_29198__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29199 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29200 = ["10px","10px","100%","68px","1.0"];
var inst_29201 = cljs.core.PersistentHashMap.fromArrays(inst_29199,inst_29200);
var inst_29202 = cljs.core.merge.call(null,inst_29201,style);
var inst_29203 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29198__$1,inst_29202);
var inst_29204 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29198__$1,msg);
var inst_29205 = cljs.core.async.timeout.call(null,(300));
var state_29213__$1 = (function (){var statearr_29216 = state_29213;
(statearr_29216[(9)] = inst_29203);

(statearr_29216[(10)] = inst_29204);

(statearr_29216[(7)] = inst_29198__$1);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29213__$1,(2),inst_29205);
} else {
return null;
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0 = (function (){
var statearr_29220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29220[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__);

(statearr_29220[(1)] = (1));

return statearr_29220;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1 = (function (state_29213){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29221){if((e29221 instanceof Object)){
var ex__21287__auto__ = e29221;
var statearr_29222_29224 = state_29213;
(statearr_29222_29224[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29225 = state_29213;
state_29213 = G__29225;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__ = function(state_29213){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1.call(this,state_29213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29223 = f__21346__auto__.call(null);
(statearr_29223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__29227 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29227,(0),null);
var ln = cljs.core.nth.call(null,vec__29227,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29230 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29230,(0),null);
var file_line = cljs.core.nth.call(null,vec__29230,(1),null);
var file_column = cljs.core.nth.call(null,vec__29230,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29230,file_name,file_line,file_column){
return (function (p1__29228_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29228_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29230,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18121__auto__ = file_line;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var and__18109__auto__ = cause;
if(cljs.core.truth_(and__18109__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18109__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29232 = figwheel.client.heads_up.ensure_container.call(null);
var map__29232__$1 = ((cljs.core.seq_QMARK_.call(null,map__29232))?cljs.core.apply.call(null,cljs.core.hash_map,map__29232):map__29232);
var content_area_el = cljs.core.get.call(null,map__29232__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29279){
var state_val_29280 = (state_29279[(1)]);
if((state_val_29280 === (3))){
var inst_29262 = (state_29279[(7)]);
var inst_29276 = (state_29279[(2)]);
var inst_29277 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29262,"");
var state_29279__$1 = (function (){var statearr_29281 = state_29279;
(statearr_29281[(8)] = inst_29276);

return statearr_29281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29279__$1,inst_29277);
} else {
if((state_val_29280 === (2))){
var inst_29262 = (state_29279[(7)]);
var inst_29269 = (state_29279[(2)]);
var inst_29270 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29271 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29272 = cljs.core.PersistentHashMap.fromArrays(inst_29270,inst_29271);
var inst_29273 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29262,inst_29272);
var inst_29274 = cljs.core.async.timeout.call(null,(200));
var state_29279__$1 = (function (){var statearr_29282 = state_29279;
(statearr_29282[(9)] = inst_29269);

(statearr_29282[(10)] = inst_29273);

return statearr_29282;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(3),inst_29274);
} else {
if((state_val_29280 === (1))){
var inst_29262 = (state_29279[(7)]);
var inst_29262__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29263 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29264 = ["0.0"];
var inst_29265 = cljs.core.PersistentHashMap.fromArrays(inst_29263,inst_29264);
var inst_29266 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29262__$1,inst_29265);
var inst_29267 = cljs.core.async.timeout.call(null,(300));
var state_29279__$1 = (function (){var statearr_29283 = state_29279;
(statearr_29283[(7)] = inst_29262__$1);

(statearr_29283[(11)] = inst_29266);

return statearr_29283;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(2),inst_29267);
} else {
return null;
}
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____0 = (function (){
var statearr_29287 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29287[(0)] = figwheel$client$heads_up$clear_$_state_machine__21284__auto__);

(statearr_29287[(1)] = (1));

return statearr_29287;
});
var figwheel$client$heads_up$clear_$_state_machine__21284__auto____1 = (function (state_29279){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29288){if((e29288 instanceof Object)){
var ex__21287__auto__ = e29288;
var statearr_29289_29291 = state_29279;
(statearr_29289_29291[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29292 = state_29279;
state_29279 = G__29292;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21284__auto__ = function(state_29279){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21284__auto____1.call(this,state_29279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29290 = f__21346__auto__.call(null);
(statearr_29290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21345__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21345__auto__){
return (function (){
var f__21346__auto__ = (function (){var switch__21283__auto__ = ((function (c__21345__auto__){
return (function (state_29324){
var state_val_29325 = (state_29324[(1)]);
if((state_val_29325 === (4))){
var inst_29322 = (state_29324[(2)]);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29324__$1,inst_29322);
} else {
if((state_val_29325 === (3))){
var inst_29319 = (state_29324[(2)]);
var inst_29320 = figwheel.client.heads_up.clear.call(null);
var state_29324__$1 = (function (){var statearr_29326 = state_29324;
(statearr_29326[(7)] = inst_29319);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29324__$1,(4),inst_29320);
} else {
if((state_val_29325 === (2))){
var inst_29316 = (state_29324[(2)]);
var inst_29317 = cljs.core.async.timeout.call(null,(400));
var state_29324__$1 = (function (){var statearr_29327 = state_29324;
(statearr_29327[(8)] = inst_29316);

return statearr_29327;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29324__$1,(3),inst_29317);
} else {
if((state_val_29325 === (1))){
var inst_29314 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29324__$1 = state_29324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29324__$1,(2),inst_29314);
} else {
return null;
}
}
}
}
});})(c__21345__auto__))
;
return ((function (switch__21283__auto__,c__21345__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0 = (function (){
var statearr_29331 = [null,null,null,null,null,null,null,null,null];
(statearr_29331[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__);

(statearr_29331[(1)] = (1));

return statearr_29331;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1 = (function (state_29324){
while(true){
var ret_value__21285__auto__ = (function (){try{while(true){
var result__21286__auto__ = switch__21283__auto__.call(null,state_29324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21286__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21286__auto__;
}
break;
}
}catch (e29332){if((e29332 instanceof Object)){
var ex__21287__auto__ = e29332;
var statearr_29333_29335 = state_29324;
(statearr_29333_29335[(5)] = ex__21287__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29336 = state_29324;
state_29324 = G__29336;
continue;
} else {
return ret_value__21285__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__ = function(state_29324){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1.call(this,state_29324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21284__auto__;
})()
;})(switch__21283__auto__,c__21345__auto__))
})();
var state__21347__auto__ = (function (){var statearr_29334 = f__21346__auto__.call(null);
(statearr_29334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21345__auto__);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21347__auto__);
});})(c__21345__auto__))
);

return c__21345__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1439894838310