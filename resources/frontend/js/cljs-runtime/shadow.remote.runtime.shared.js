goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__43189,res){
var map__43190 = p__43189;
var map__43190__$1 = cljs.core.__destructure_map(map__43190);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43190__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43190__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__43191 = res;
var G__43191__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__43191);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43191__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__43191__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__43195 = arguments.length;
switch (G__43195) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__43196,msg,handlers,timeout_after_ms){
var map__43197 = p__43196;
var map__43197__$1 = cljs.core.__destructure_map(map__43197);
var runtime = map__43197__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___43409 = arguments.length;
var i__4865__auto___43411 = (0);
while(true){
if((i__4865__auto___43411 < len__4864__auto___43409)){
args__4870__auto__.push((arguments[i__4865__auto___43411]));

var G__43413 = (i__4865__auto___43411 + (1));
i__4865__auto___43411 = G__43413;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__43201,ev,args){
var map__43202 = p__43201;
var map__43202__$1 = cljs.core.__destructure_map(map__43202);
var runtime = map__43202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__43203 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43206 = null;
var count__43207 = (0);
var i__43208 = (0);
while(true){
if((i__43208 < count__43207)){
var ext = chunk__43206.cljs$core$IIndexed$_nth$arity$2(null,i__43208);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43415 = seq__43203;
var G__43416 = chunk__43206;
var G__43417 = count__43207;
var G__43418 = (i__43208 + (1));
seq__43203 = G__43415;
chunk__43206 = G__43416;
count__43207 = G__43417;
i__43208 = G__43418;
continue;
} else {
var G__43419 = seq__43203;
var G__43420 = chunk__43206;
var G__43421 = count__43207;
var G__43422 = (i__43208 + (1));
seq__43203 = G__43419;
chunk__43206 = G__43420;
count__43207 = G__43421;
i__43208 = G__43422;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43203);
if(temp__5804__auto__){
var seq__43203__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43203__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43203__$1);
var G__43427 = cljs.core.chunk_rest(seq__43203__$1);
var G__43428 = c__4679__auto__;
var G__43429 = cljs.core.count(c__4679__auto__);
var G__43430 = (0);
seq__43203 = G__43427;
chunk__43206 = G__43428;
count__43207 = G__43429;
i__43208 = G__43430;
continue;
} else {
var ext = cljs.core.first(seq__43203__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__43433 = cljs.core.next(seq__43203__$1);
var G__43434 = null;
var G__43435 = (0);
var G__43436 = (0);
seq__43203 = G__43433;
chunk__43206 = G__43434;
count__43207 = G__43435;
i__43208 = G__43436;
continue;
} else {
var G__43437 = cljs.core.next(seq__43203__$1);
var G__43438 = null;
var G__43439 = (0);
var G__43440 = (0);
seq__43203 = G__43437;
chunk__43206 = G__43438;
count__43207 = G__43439;
i__43208 = G__43440;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq43198){
var G__43199 = cljs.core.first(seq43198);
var seq43198__$1 = cljs.core.next(seq43198);
var G__43200 = cljs.core.first(seq43198__$1);
var seq43198__$2 = cljs.core.next(seq43198__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43199,G__43200,seq43198__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__43223,p__43224){
var map__43225 = p__43223;
var map__43225__$1 = cljs.core.__destructure_map(map__43225);
var runtime = map__43225__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43225__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43226 = p__43224;
var map__43226__$1 = cljs.core.__destructure_map(map__43226);
var msg = map__43226__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43226__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__43237 = cljs.core.deref(state_ref);
var map__43237__$1 = cljs.core.__destructure_map(map__43237);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__43243){
var map__43244 = p__43243;
var map__43244__$1 = cljs.core.__destructure_map(map__43244);
var runtime = map__43244__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43244__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__43245,msg){
var map__43246 = p__43245;
var map__43246__$1 = cljs.core.__destructure_map(map__43246);
var runtime = map__43246__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43246__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__43247,key,p__43248){
var map__43249 = p__43247;
var map__43249__$1 = cljs.core.__destructure_map(map__43249);
var state = map__43249__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43249__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__43250 = p__43248;
var map__43250__$1 = cljs.core.__destructure_map(map__43250);
var spec = map__43250__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43250__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__43251,key,spec){
var map__43252 = p__43251;
var map__43252__$1 = cljs.core.__destructure_map(map__43252);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__43253_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__43253_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__43254_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__43254_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__43255_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__43255_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__43256_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__43256_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__43257_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__43257_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__43259,key){
var map__43260 = p__43259;
var map__43260__$1 = cljs.core.__destructure_map(map__43260);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43260__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__43261,msg){
var map__43262 = p__43261;
var map__43262__$1 = cljs.core.__destructure_map(map__43262);
var runtime = map__43262__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43262__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__43277,p__43278){
var map__43281 = p__43277;
var map__43281__$1 = cljs.core.__destructure_map(map__43281);
var runtime = map__43281__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43281__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__43284 = p__43278;
var map__43284__$1 = cljs.core.__destructure_map(map__43284);
var msg = map__43284__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43284__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__43338 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__43340 = null;
var count__43341 = (0);
var i__43342 = (0);
while(true){
if((i__43342 < count__43341)){
var map__43385 = chunk__43340.cljs$core$IIndexed$_nth$arity$2(null,i__43342);
var map__43385__$1 = cljs.core.__destructure_map(map__43385);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43385__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43465 = seq__43338;
var G__43466 = chunk__43340;
var G__43467 = count__43341;
var G__43468 = (i__43342 + (1));
seq__43338 = G__43465;
chunk__43340 = G__43466;
count__43341 = G__43467;
i__43342 = G__43468;
continue;
} else {
var G__43469 = seq__43338;
var G__43470 = chunk__43340;
var G__43471 = count__43341;
var G__43472 = (i__43342 + (1));
seq__43338 = G__43469;
chunk__43340 = G__43470;
count__43341 = G__43471;
i__43342 = G__43472;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43338);
if(temp__5804__auto__){
var seq__43338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43338__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__43338__$1);
var G__43473 = cljs.core.chunk_rest(seq__43338__$1);
var G__43474 = c__4679__auto__;
var G__43475 = cljs.core.count(c__4679__auto__);
var G__43476 = (0);
seq__43338 = G__43473;
chunk__43340 = G__43474;
count__43341 = G__43475;
i__43342 = G__43476;
continue;
} else {
var map__43389 = cljs.core.first(seq__43338__$1);
var map__43389__$1 = cljs.core.__destructure_map(map__43389);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43389__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__43478 = cljs.core.next(seq__43338__$1);
var G__43479 = null;
var G__43480 = (0);
var G__43481 = (0);
seq__43338 = G__43478;
chunk__43340 = G__43479;
count__43341 = G__43480;
i__43342 = G__43481;
continue;
} else {
var G__43483 = cljs.core.next(seq__43338__$1);
var G__43484 = null;
var G__43485 = (0);
var G__43486 = (0);
seq__43338 = G__43483;
chunk__43340 = G__43484;
count__43341 = G__43485;
i__43342 = G__43486;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
