goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__49394){
var map__49396 = p__49394;
var map__49396__$1 = cljs.core.__destructure_map(map__49396);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49396__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49396__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49396__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49396__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__49397_49425 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__49398_49426 = null;
var count__49399_49427 = (0);
var i__49400_49428 = (0);
while(true){
if((i__49400_49428 < count__49399_49427)){
var vec__49412_49429 = chunk__49398_49426.cljs$core$IIndexed$_nth$arity$2(null,i__49400_49428);
var k_49430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49412_49429,(0),null);
var cb_49431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49412_49429,(1),null);
try{var G__49416_49432 = cljs.core.deref(re_frame.trace.traces);
(cb_49431.cljs$core$IFn$_invoke$arity$1 ? cb_49431.cljs$core$IFn$_invoke$arity$1(G__49416_49432) : cb_49431.call(null,G__49416_49432));
}catch (e49415){var e_49433 = e49415;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_49430,"while storing",cljs.core.deref(re_frame.trace.traces),e_49433], 0));
}

var G__49434 = seq__49397_49425;
var G__49435 = chunk__49398_49426;
var G__49436 = count__49399_49427;
var G__49437 = (i__49400_49428 + (1));
seq__49397_49425 = G__49434;
chunk__49398_49426 = G__49435;
count__49399_49427 = G__49436;
i__49400_49428 = G__49437;
continue;
} else {
var temp__5804__auto___49438 = cljs.core.seq(seq__49397_49425);
if(temp__5804__auto___49438){
var seq__49397_49439__$1 = temp__5804__auto___49438;
if(cljs.core.chunked_seq_QMARK_(seq__49397_49439__$1)){
var c__4679__auto___49440 = cljs.core.chunk_first(seq__49397_49439__$1);
var G__49441 = cljs.core.chunk_rest(seq__49397_49439__$1);
var G__49442 = c__4679__auto___49440;
var G__49443 = cljs.core.count(c__4679__auto___49440);
var G__49444 = (0);
seq__49397_49425 = G__49441;
chunk__49398_49426 = G__49442;
count__49399_49427 = G__49443;
i__49400_49428 = G__49444;
continue;
} else {
var vec__49417_49445 = cljs.core.first(seq__49397_49439__$1);
var k_49446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49417_49445,(0),null);
var cb_49447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49417_49445,(1),null);
try{var G__49421_49448 = cljs.core.deref(re_frame.trace.traces);
(cb_49447.cljs$core$IFn$_invoke$arity$1 ? cb_49447.cljs$core$IFn$_invoke$arity$1(G__49421_49448) : cb_49447.call(null,G__49421_49448));
}catch (e49420){var e_49449 = e49420;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_49446,"while storing",cljs.core.deref(re_frame.trace.traces),e_49449], 0));
}

var G__49450 = cljs.core.next(seq__49397_49439__$1);
var G__49451 = null;
var G__49452 = (0);
var G__49453 = (0);
seq__49397_49425 = G__49450;
chunk__49398_49426 = G__49451;
count__49399_49427 = G__49452;
i__49400_49428 = G__49453;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
