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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__29260,res){
var map__29261 = p__29260;
var map__29261__$1 = cljs.core.__destructure_map(map__29261);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29261__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29261__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__29262 = res;
var G__29262__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29262,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__29262);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29262__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__29262__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__29269 = arguments.length;
switch (G__29269) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__29272,msg,handlers,timeout_after_ms){
var map__29273 = p__29272;
var map__29273__$1 = cljs.core.__destructure_map(map__29273);
var runtime = map__29273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29541 = arguments.length;
var i__4865__auto___29542 = (0);
while(true){
if((i__4865__auto___29542 < len__4864__auto___29541)){
args__4870__auto__.push((arguments[i__4865__auto___29542]));

var G__29543 = (i__4865__auto___29542 + (1));
i__4865__auto___29542 = G__29543;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__29286,ev,args){
var map__29287 = p__29286;
var map__29287__$1 = cljs.core.__destructure_map(map__29287);
var runtime = map__29287__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29287__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__29290 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29293 = null;
var count__29294 = (0);
var i__29295 = (0);
while(true){
if((i__29295 < count__29294)){
var ext = chunk__29293.cljs$core$IIndexed$_nth$arity$2(null,i__29295);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29544 = seq__29290;
var G__29545 = chunk__29293;
var G__29546 = count__29294;
var G__29547 = (i__29295 + (1));
seq__29290 = G__29544;
chunk__29293 = G__29545;
count__29294 = G__29546;
i__29295 = G__29547;
continue;
} else {
var G__29548 = seq__29290;
var G__29549 = chunk__29293;
var G__29550 = count__29294;
var G__29551 = (i__29295 + (1));
seq__29290 = G__29548;
chunk__29293 = G__29549;
count__29294 = G__29550;
i__29295 = G__29551;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29290);
if(temp__5804__auto__){
var seq__29290__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29290__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29290__$1);
var G__29552 = cljs.core.chunk_rest(seq__29290__$1);
var G__29553 = c__4679__auto__;
var G__29554 = cljs.core.count(c__4679__auto__);
var G__29555 = (0);
seq__29290 = G__29552;
chunk__29293 = G__29553;
count__29294 = G__29554;
i__29295 = G__29555;
continue;
} else {
var ext = cljs.core.first(seq__29290__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29556 = cljs.core.next(seq__29290__$1);
var G__29557 = null;
var G__29558 = (0);
var G__29559 = (0);
seq__29290 = G__29556;
chunk__29293 = G__29557;
count__29294 = G__29558;
i__29295 = G__29559;
continue;
} else {
var G__29560 = cljs.core.next(seq__29290__$1);
var G__29561 = null;
var G__29562 = (0);
var G__29563 = (0);
seq__29290 = G__29560;
chunk__29293 = G__29561;
count__29294 = G__29562;
i__29295 = G__29563;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq29277){
var G__29278 = cljs.core.first(seq29277);
var seq29277__$1 = cljs.core.next(seq29277);
var G__29279 = cljs.core.first(seq29277__$1);
var seq29277__$2 = cljs.core.next(seq29277__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29278,G__29279,seq29277__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__29310,p__29311){
var map__29312 = p__29310;
var map__29312__$1 = cljs.core.__destructure_map(map__29312);
var runtime = map__29312__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29312__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29313 = p__29311;
var map__29313__$1 = cljs.core.__destructure_map(map__29313);
var msg = map__29313__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29313__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__29314 = cljs.core.deref(state_ref);
var map__29314__$1 = cljs.core.__destructure_map(map__29314);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29314__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29314__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__29325){
var map__29326 = p__29325;
var map__29326__$1 = cljs.core.__destructure_map(map__29326);
var runtime = map__29326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__29331,msg){
var map__29332 = p__29331;
var map__29332__$1 = cljs.core.__destructure_map(map__29332);
var runtime = map__29332__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__29334,key,p__29335){
var map__29336 = p__29334;
var map__29336__$1 = cljs.core.__destructure_map(map__29336);
var state = map__29336__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29336__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__29337 = p__29335;
var map__29337__$1 = cljs.core.__destructure_map(map__29337);
var spec = map__29337__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29337__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__29342,key,spec){
var map__29345 = p__29342;
var map__29345__$1 = cljs.core.__destructure_map(map__29345);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29345__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__29348_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__29348_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__29349_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__29349_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__29479_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__29479_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__29480_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__29480_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__29481_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__29481_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__29491,key){
var map__29493 = p__29491;
var map__29493__$1 = cljs.core.__destructure_map(map__29493);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29493__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__29500,msg){
var map__29502 = p__29500;
var map__29502__$1 = cljs.core.__destructure_map(map__29502);
var runtime = map__29502__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29502__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__29520,p__29521){
var map__29522 = p__29520;
var map__29522__$1 = cljs.core.__destructure_map(map__29522);
var runtime = map__29522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29523 = p__29521;
var map__29523__$1 = cljs.core.__destructure_map(map__29523);
var msg = map__29523__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29523__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29523__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__29527 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29529 = null;
var count__29530 = (0);
var i__29531 = (0);
while(true){
if((i__29531 < count__29530)){
var map__29535 = chunk__29529.cljs$core$IIndexed$_nth$arity$2(null,i__29531);
var map__29535__$1 = cljs.core.__destructure_map(map__29535);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29535__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29598 = seq__29527;
var G__29599 = chunk__29529;
var G__29600 = count__29530;
var G__29601 = (i__29531 + (1));
seq__29527 = G__29598;
chunk__29529 = G__29599;
count__29530 = G__29600;
i__29531 = G__29601;
continue;
} else {
var G__29602 = seq__29527;
var G__29603 = chunk__29529;
var G__29604 = count__29530;
var G__29605 = (i__29531 + (1));
seq__29527 = G__29602;
chunk__29529 = G__29603;
count__29530 = G__29604;
i__29531 = G__29605;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29527);
if(temp__5804__auto__){
var seq__29527__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29527__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__29527__$1);
var G__29606 = cljs.core.chunk_rest(seq__29527__$1);
var G__29607 = c__4679__auto__;
var G__29608 = cljs.core.count(c__4679__auto__);
var G__29609 = (0);
seq__29527 = G__29606;
chunk__29529 = G__29607;
count__29530 = G__29608;
i__29531 = G__29609;
continue;
} else {
var map__29537 = cljs.core.first(seq__29527__$1);
var map__29537__$1 = cljs.core.__destructure_map(map__29537);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29537__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29610 = cljs.core.next(seq__29527__$1);
var G__29611 = null;
var G__29612 = (0);
var G__29613 = (0);
seq__29527 = G__29610;
chunk__29529 = G__29611;
count__29530 = G__29612;
i__29531 = G__29613;
continue;
} else {
var G__29614 = cljs.core.next(seq__29527__$1);
var G__29615 = null;
var G__29616 = (0);
var G__29617 = (0);
seq__29527 = G__29614;
chunk__29529 = G__29615;
count__29530 = G__29616;
i__29531 = G__29617;
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
