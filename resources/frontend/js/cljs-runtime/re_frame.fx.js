goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49703 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49704 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49704);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___49781 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___49781)){
var new_db_49782 = temp__5804__auto___49781;
var fexpr__49705_49783 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49705_49783.cljs$core$IFn$_invoke$arity$1 ? fexpr__49705_49783.cljs$core$IFn$_invoke$arity$1(new_db_49782) : fexpr__49705_49783.call(null,new_db_49782));
} else {
}

var seq__49706 = cljs.core.seq(effects_without_db);
var chunk__49707 = null;
var count__49708 = (0);
var i__49709 = (0);
while(true){
if((i__49709 < count__49708)){
var vec__49716 = chunk__49707.cljs$core$IIndexed$_nth$arity$2(null,i__49709);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49716,(1),null);
var temp__5802__auto___49785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___49785)){
var effect_fn_49786 = temp__5802__auto___49785;
(effect_fn_49786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49787 = seq__49706;
var G__49788 = chunk__49707;
var G__49789 = count__49708;
var G__49790 = (i__49709 + (1));
seq__49706 = G__49787;
chunk__49707 = G__49788;
count__49708 = G__49789;
i__49709 = G__49790;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49706);
if(temp__5804__auto__){
var seq__49706__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49706__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49706__$1);
var G__49793 = cljs.core.chunk_rest(seq__49706__$1);
var G__49794 = c__4679__auto__;
var G__49795 = cljs.core.count(c__4679__auto__);
var G__49796 = (0);
seq__49706 = G__49793;
chunk__49707 = G__49794;
count__49708 = G__49795;
i__49709 = G__49796;
continue;
} else {
var vec__49719 = cljs.core.first(seq__49706__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49719,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49719,(1),null);
var temp__5802__auto___49797 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___49797)){
var effect_fn_49798 = temp__5802__auto___49797;
(effect_fn_49798.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49798.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49798.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49799 = cljs.core.next(seq__49706__$1);
var G__49800 = null;
var G__49801 = (0);
var G__49802 = (0);
seq__49706 = G__49799;
chunk__49707 = G__49800;
count__49708 = G__49801;
i__49709 = G__49802;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__49370__auto___49803 = re_frame.interop.now();
var duration__49371__auto___49804 = (end__49370__auto___49803 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__49371__auto___49804,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__49370__auto___49803);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49703);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___49805 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___49805)){
var new_db_49806 = temp__5804__auto___49805;
var fexpr__49722_49807 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49722_49807.cljs$core$IFn$_invoke$arity$1 ? fexpr__49722_49807.cljs$core$IFn$_invoke$arity$1(new_db_49806) : fexpr__49722_49807.call(null,new_db_49806));
} else {
}

var seq__49723 = cljs.core.seq(effects_without_db);
var chunk__49724 = null;
var count__49725 = (0);
var i__49726 = (0);
while(true){
if((i__49726 < count__49725)){
var vec__49733 = chunk__49724.cljs$core$IIndexed$_nth$arity$2(null,i__49726);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49733,(1),null);
var temp__5802__auto___49810 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___49810)){
var effect_fn_49811 = temp__5802__auto___49810;
(effect_fn_49811.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49811.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49811.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49812 = seq__49723;
var G__49813 = chunk__49724;
var G__49814 = count__49725;
var G__49815 = (i__49726 + (1));
seq__49723 = G__49812;
chunk__49724 = G__49813;
count__49725 = G__49814;
i__49726 = G__49815;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49723);
if(temp__5804__auto__){
var seq__49723__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49723__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49723__$1);
var G__49816 = cljs.core.chunk_rest(seq__49723__$1);
var G__49817 = c__4679__auto__;
var G__49818 = cljs.core.count(c__4679__auto__);
var G__49819 = (0);
seq__49723 = G__49816;
chunk__49724 = G__49817;
count__49725 = G__49818;
i__49726 = G__49819;
continue;
} else {
var vec__49736 = cljs.core.first(seq__49723__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49736,(1),null);
var temp__5802__auto___49820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___49820)){
var effect_fn_49821 = temp__5802__auto___49820;
(effect_fn_49821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49822 = cljs.core.next(seq__49723__$1);
var G__49823 = null;
var G__49824 = (0);
var G__49825 = (0);
seq__49723 = G__49822;
chunk__49724 = G__49823;
count__49725 = G__49824;
i__49726 = G__49825;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__49739){
var map__49740 = p__49739;
var map__49740__$1 = cljs.core.__destructure_map(map__49740);
var effect = map__49740__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__49741 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49742 = null;
var count__49743 = (0);
var i__49744 = (0);
while(true){
if((i__49744 < count__49743)){
var effect = chunk__49742.cljs$core$IIndexed$_nth$arity$2(null,i__49744);
re_frame.fx.dispatch_later(effect);


var G__49826 = seq__49741;
var G__49827 = chunk__49742;
var G__49828 = count__49743;
var G__49829 = (i__49744 + (1));
seq__49741 = G__49826;
chunk__49742 = G__49827;
count__49743 = G__49828;
i__49744 = G__49829;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49741);
if(temp__5804__auto__){
var seq__49741__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49741__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49741__$1);
var G__49830 = cljs.core.chunk_rest(seq__49741__$1);
var G__49831 = c__4679__auto__;
var G__49832 = cljs.core.count(c__4679__auto__);
var G__49833 = (0);
seq__49741 = G__49830;
chunk__49742 = G__49831;
count__49743 = G__49832;
i__49744 = G__49833;
continue;
} else {
var effect = cljs.core.first(seq__49741__$1);
re_frame.fx.dispatch_later(effect);


var G__49834 = cljs.core.next(seq__49741__$1);
var G__49835 = null;
var G__49836 = (0);
var G__49837 = (0);
seq__49741 = G__49834;
chunk__49742 = G__49835;
count__49743 = G__49836;
i__49744 = G__49837;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__49745 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__49746 = null;
var count__49747 = (0);
var i__49748 = (0);
while(true){
if((i__49748 < count__49747)){
var vec__49755 = chunk__49746.cljs$core$IIndexed$_nth$arity$2(null,i__49748);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49755,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___49838 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___49838)){
var effect_fn_49839 = temp__5802__auto___49838;
(effect_fn_49839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49839.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49840 = seq__49745;
var G__49841 = chunk__49746;
var G__49842 = count__49747;
var G__49843 = (i__49748 + (1));
seq__49745 = G__49840;
chunk__49746 = G__49841;
count__49747 = G__49842;
i__49748 = G__49843;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49745);
if(temp__5804__auto__){
var seq__49745__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49745__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49745__$1);
var G__49844 = cljs.core.chunk_rest(seq__49745__$1);
var G__49845 = c__4679__auto__;
var G__49846 = cljs.core.count(c__4679__auto__);
var G__49847 = (0);
seq__49745 = G__49844;
chunk__49746 = G__49845;
count__49747 = G__49846;
i__49748 = G__49847;
continue;
} else {
var vec__49758 = cljs.core.first(seq__49745__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49758,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49758,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___49848 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___49848)){
var effect_fn_49849 = temp__5802__auto___49848;
(effect_fn_49849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49849.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49850 = cljs.core.next(seq__49745__$1);
var G__49851 = null;
var G__49852 = (0);
var G__49853 = (0);
seq__49745 = G__49850;
chunk__49746 = G__49851;
count__49747 = G__49852;
i__49748 = G__49853;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49761 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49762 = null;
var count__49763 = (0);
var i__49764 = (0);
while(true){
if((i__49764 < count__49763)){
var event = chunk__49762.cljs$core$IIndexed$_nth$arity$2(null,i__49764);
re_frame.router.dispatch(event);


var G__49854 = seq__49761;
var G__49855 = chunk__49762;
var G__49856 = count__49763;
var G__49857 = (i__49764 + (1));
seq__49761 = G__49854;
chunk__49762 = G__49855;
count__49763 = G__49856;
i__49764 = G__49857;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49761);
if(temp__5804__auto__){
var seq__49761__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49761__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49761__$1);
var G__49858 = cljs.core.chunk_rest(seq__49761__$1);
var G__49859 = c__4679__auto__;
var G__49860 = cljs.core.count(c__4679__auto__);
var G__49861 = (0);
seq__49761 = G__49858;
chunk__49762 = G__49859;
count__49763 = G__49860;
i__49764 = G__49861;
continue;
} else {
var event = cljs.core.first(seq__49761__$1);
re_frame.router.dispatch(event);


var G__49862 = cljs.core.next(seq__49761__$1);
var G__49863 = null;
var G__49864 = (0);
var G__49865 = (0);
seq__49761 = G__49862;
chunk__49762 = G__49863;
count__49763 = G__49864;
i__49764 = G__49865;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49765 = cljs.core.seq(value);
var chunk__49766 = null;
var count__49767 = (0);
var i__49768 = (0);
while(true){
if((i__49768 < count__49767)){
var event = chunk__49766.cljs$core$IIndexed$_nth$arity$2(null,i__49768);
clear_event(event);


var G__49866 = seq__49765;
var G__49867 = chunk__49766;
var G__49868 = count__49767;
var G__49869 = (i__49768 + (1));
seq__49765 = G__49866;
chunk__49766 = G__49867;
count__49767 = G__49868;
i__49768 = G__49869;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__49765);
if(temp__5804__auto__){
var seq__49765__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49765__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49765__$1);
var G__49870 = cljs.core.chunk_rest(seq__49765__$1);
var G__49871 = c__4679__auto__;
var G__49872 = cljs.core.count(c__4679__auto__);
var G__49873 = (0);
seq__49765 = G__49870;
chunk__49766 = G__49871;
count__49767 = G__49872;
i__49768 = G__49873;
continue;
} else {
var event = cljs.core.first(seq__49765__$1);
clear_event(event);


var G__49874 = cljs.core.next(seq__49765__$1);
var G__49875 = null;
var G__49876 = (0);
var G__49877 = (0);
seq__49765 = G__49874;
chunk__49766 = G__49875;
count__49767 = G__49876;
i__49768 = G__49877;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
