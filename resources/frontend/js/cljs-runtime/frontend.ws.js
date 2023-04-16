goog.provide('frontend.ws');
var module$node_modules$$chakra_ui$react$dist$index=shadow.js.require("module$node_modules$$chakra_ui$react$dist$index", {});
var module$node_modules$socket_DOT_io_client$build$cjs$index=shadow.js.require("module$node_modules$socket_DOT_io_client$build$cjs$index", {});
frontend.ws.manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.ws.socket = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.ws.send_BANG_ = (function frontend$ws$send_BANG_(k,v){
return cljs.core.deref(frontend.ws.socket).emit(k,cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),v));
});
frontend.ws.connect = (function frontend$ws$connect(handler){
cljs.core.reset_BANG_(frontend.ws.manager,(new module$node_modules$socket_DOT_io_client$build$cjs$index.Manager("ws://localhost:8080")));

cljs.core.reset_BANG_(frontend.ws.socket,cljs.core.deref(frontend.ws.manager).socket("/"));

cljs.core.deref(frontend.ws.manager).open((function (err){
if(cljs.core.truth_(err)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",err], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Successful websocket connection."], 0));
}
}));

return cljs.core.deref(frontend.ws.socket).on("connect",(function (){
return cljs.core.deref(frontend.ws.socket).io.engine.on("packet",(function (message){
var vec__48865 = (function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(message.data)));
}catch (e48869){if((e48869 instanceof Error)){
var e__29854__auto__ = e48869;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",e__29854__auto__], 0));
} else {
throw e48869;

}
}})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48865,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48865,(1),null);
var data = (function (){try{return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),v);
}catch (e48870){if((e48870 instanceof Error)){
var e__29854__auto__ = e48870;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",e__29854__auto__], 0));
} else {
throw e48870;

}
}})();
var G__48871 = message.type;
switch (G__48871) {
case "message":
var G__48875 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),data,new cljs.core.Keyword(null,"message-type","message-type",1983867728),k], null);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__48875) : handler.call(null,G__48875));

break;
default:
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["packet: ",cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(message)], 0));

}
}));
}));
});

//# sourceMappingURL=frontend.ws.js.map
