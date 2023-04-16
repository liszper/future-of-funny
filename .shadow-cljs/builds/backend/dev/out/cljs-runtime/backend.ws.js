goog.provide('backend.ws');
if((typeof backend !== 'undefined') && (typeof backend.ws !== 'undefined') && (typeof backend.ws.server !== 'undefined')){
} else {
backend.ws.server = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
backend.ws.make_server = (function backend$ws$make_server(){
return (new shadow.js.shim.module$socket_io.Server(({"cors": new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"origin","origin",1037372088),"http://localhost:3000",new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["GET","POST"], null),new cljs.core.Keyword(null,"allowedHeaders","allowedHeaders",2138019178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["my-custom-header"], null),new cljs.core.Keyword(null,"credentials","credentials",1373178854),true], null)})));
});
backend.ws.emit = (function backend$ws$emit(room,k,v){
var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_35055){
var state_val_35056 = (state_35055[(1)]);
if((state_val_35056 === (7))){
var state_35055__$1 = state_35055;
var statearr_35063_35158 = state_35055__$1;
(statearr_35063_35158[(2)] = v);

(statearr_35063_35158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (1))){
var state_35055__$1 = state_35055;
var statearr_35066_35160 = state_35055__$1;
(statearr_35066_35160[(2)] = null);

(statearr_35066_35160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (4))){
var inst_35005 = (state_35055[(2)]);
var inst_35007 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Async Error: ",inst_35005], 0));
var state_35055__$1 = state_35055;
var statearr_35069_35162 = state_35055__$1;
(statearr_35069_35162[(2)] = inst_35007);

(statearr_35069_35162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (15))){
var inst_35037 = (state_35055[(7)]);
var state_35055__$1 = state_35055;
var statearr_35072_35163 = state_35055__$1;
(statearr_35072_35163[(2)] = inst_35037);

(statearr_35072_35163[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (13))){
var _ = (function (){var statearr_35075 = state_35055;
(statearr_35075[(4)] = cljs.core.rest((state_35055[(4)])));

return statearr_35075;
})();
var state_35055__$1 = state_35055;
var ex35068 = (state_35055__$1[(2)]);
var statearr_35078_35166 = state_35055__$1;
(statearr_35078_35166[(5)] = ex35068);


if((ex35068 instanceof Error)){
var statearr_35079_35167 = state_35055__$1;
(statearr_35079_35167[(1)] = (12));

(statearr_35079_35167[(5)] = null);

} else {
throw ex35068;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (6))){
var inst_35037 = (state_35055[(7)]);
var inst_35036 = (state_35055[(8)]);
var inst_35036__$1 = (state_35055[(2)]);
var inst_35037__$1 = (inst_35036__$1 instanceof cljs.core.ExceptionInfo);
var state_35055__$1 = (function (){var statearr_35083 = state_35055;
(statearr_35083[(7)] = inst_35037__$1);

(statearr_35083[(8)] = inst_35036__$1);

return statearr_35083;
})();
if(cljs.core.truth_(inst_35037__$1)){
var statearr_35084_35170 = state_35055__$1;
(statearr_35084_35170[(1)] = (14));

} else {
var statearr_35085_35171 = state_35055__$1;
(statearr_35085_35171[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (17))){
var inst_35036 = (state_35055[(8)]);
var inst_35047 = (function(){throw inst_35036})();
var state_35055__$1 = state_35055;
var statearr_35087_35173 = state_35055__$1;
(statearr_35087_35173[(2)] = inst_35047);

(statearr_35087_35173[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (3))){
var inst_35053 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35055__$1,inst_35053);
} else {
if((state_val_35056 === (12))){
var inst_35019 = (state_35055[(2)]);
var inst_35020 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",inst_35019], 0));
var state_35055__$1 = state_35055;
var statearr_35091_35174 = state_35055__$1;
(statearr_35091_35174[(2)] = inst_35020);

(statearr_35091_35174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (2))){
var _ = (function (){var statearr_35094 = state_35055;
(statearr_35094[(4)] = cljs.core.cons((5),(state_35055[(4)])));

return statearr_35094;
})();
var inst_35013 = cljs.core.deref(backend.ws.server);
var inst_35014 = inst_35013.to(room);
var inst_35015 = typeof v === 'string';
var state_35055__$1 = (function (){var statearr_35095 = state_35055;
(statearr_35095[(9)] = inst_35014);

return statearr_35095;
})();
if(cljs.core.truth_(inst_35015)){
var statearr_35097_35177 = state_35055__$1;
(statearr_35097_35177[(1)] = (7));

} else {
var statearr_35098_35178 = state_35055__$1;
(statearr_35098_35178[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (19))){
var inst_35050 = (state_35055[(2)]);
var _ = (function (){var statearr_35101 = state_35055;
(statearr_35101[(4)] = cljs.core.rest((state_35055[(4)])));

return statearr_35101;
})();
var state_35055__$1 = state_35055;
var statearr_35103_35181 = state_35055__$1;
(statearr_35103_35181[(2)] = inst_35050);

(statearr_35103_35181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (11))){
var inst_35030 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
var statearr_35105_35182 = state_35055__$1;
(statearr_35105_35182[(2)] = inst_35030);

(statearr_35105_35182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (9))){
var inst_35014 = (state_35055[(9)]);
var inst_35032 = (state_35055[(2)]);
var inst_35033 = inst_35014.emit(k,inst_35032);
var inst_35034 = cljs.core.async.interop.p__GT_c(inst_35033);
var state_35055__$1 = state_35055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35055__$1,(6),inst_35034);
} else {
if((state_val_35056 === (5))){
var _ = (function (){var statearr_35109 = state_35055;
(statearr_35109[(4)] = cljs.core.rest((state_35055[(4)])));

return statearr_35109;
})();
var state_35055__$1 = state_35055;
var ex35104 = (state_35055__$1[(2)]);
var statearr_35110_35184 = state_35055__$1;
(statearr_35110_35184[(5)] = ex35104);


if((ex35104 instanceof Error)){
var statearr_35111_35186 = state_35055__$1;
(statearr_35111_35186[(1)] = (4));

(statearr_35111_35186[(5)] = null);

} else {
throw ex35104;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (14))){
var inst_35036 = (state_35055[(8)]);
var inst_35039 = cljs.core.ex_data(inst_35036);
var inst_35040 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35039);
var inst_35041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35040,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_35055__$1 = state_35055;
var statearr_35113_35188 = state_35055__$1;
(statearr_35113_35188[(2)] = inst_35041);

(statearr_35113_35188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (16))){
var inst_35044 = (state_35055[(2)]);
var state_35055__$1 = state_35055;
if(cljs.core.truth_(inst_35044)){
var statearr_35116_35189 = state_35055__$1;
(statearr_35116_35189[(1)] = (17));

} else {
var statearr_35117_35190 = state_35055__$1;
(statearr_35117_35190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (10))){
var _ = (function (){var statearr_35119 = state_35055;
(statearr_35119[(4)] = cljs.core.cons((13),(state_35055[(4)])));

return statearr_35119;
})();
var inst_35026 = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
var inst_35027 = cognitect.transit.write(inst_35026,v);
var ___$1 = (function (){var statearr_35120 = state_35055;
(statearr_35120[(4)] = cljs.core.rest((state_35055[(4)])));

return statearr_35120;
})();
var state_35055__$1 = state_35055;
var statearr_35121_35192 = state_35055__$1;
(statearr_35121_35192[(2)] = inst_35027);

(statearr_35121_35192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (18))){
var inst_35036 = (state_35055[(8)]);
var state_35055__$1 = state_35055;
var statearr_35123_35194 = state_35055__$1;
(statearr_35123_35194[(2)] = inst_35036);

(statearr_35123_35194[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35056 === (8))){
var state_35055__$1 = state_35055;
var statearr_35124_35196 = state_35055__$1;
(statearr_35124_35196[(2)] = null);

(statearr_35124_35196[(1)] = (10));


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
});
return (function() {
var backend$ws$emit_$_state_machine__33326__auto__ = null;
var backend$ws$emit_$_state_machine__33326__auto____0 = (function (){
var statearr_35127 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35127[(0)] = backend$ws$emit_$_state_machine__33326__auto__);

(statearr_35127[(1)] = (1));

return statearr_35127;
});
var backend$ws$emit_$_state_machine__33326__auto____1 = (function (state_35055){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_35055);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e35130){var ex__33329__auto__ = e35130;
var statearr_35132_35200 = state_35055;
(statearr_35132_35200[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_35055[(4)]))){
var statearr_35133_35201 = state_35055;
(statearr_35133_35201[(1)] = cljs.core.first((state_35055[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35202 = state_35055;
state_35055 = G__35202;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
backend$ws$emit_$_state_machine__33326__auto__ = function(state_35055){
switch(arguments.length){
case 0:
return backend$ws$emit_$_state_machine__33326__auto____0.call(this);
case 1:
return backend$ws$emit_$_state_machine__33326__auto____1.call(this,state_35055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
backend$ws$emit_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = backend$ws$emit_$_state_machine__33326__auto____0;
backend$ws$emit_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = backend$ws$emit_$_state_machine__33326__auto____1;
return backend$ws$emit_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_35139 = f__33397__auto__();
(statearr_35139[(6)] = c__33396__auto__);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
});
backend.ws.init = (function backend$ws$init(handler){
var io = backend.ws.make_server();
cljs.core.reset_BANG_(backend.ws.server,io);

cljs.core.deref(backend.ws.server).listen((8080));

return cljs.core.deref(backend.ws.server).on("connection",(function (socket){
var id = (socket["id"]);
var handshake = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((socket["handshake"]));
var rooms = brave.swords.obj__GT_clj((socket["rooms"]));
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((socket["data"]));
var param = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handshake","handshake",68079331),handshake,new cljs.core.Keyword(null,"rooms","rooms",1196158176),rooms,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New client: ",id], 0));

socket.join(["general"]);

socket.conn.on("packet",(function (message){
var vec__35148 = (function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(message.data)));
}catch (e35151){if((e35151 instanceof Error)){
var e__29854__auto__ = e35151;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",e__29854__auto__], 0));
} else {
throw e35151;

}
}})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35148,(1),null);
var data__$1 = (function (){try{return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),v);
}catch (e35153){if((e35153 instanceof Error)){
var e__29854__auto__ = e35153;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",e__29854__auto__], 0));
} else {
throw e35153;

}
}})();
var G__35155 = message.type;
switch (G__35155) {
case "message":
var G__35156 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(param,new cljs.core.Keyword(null,"message","message",-406056002),data__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"message-type","message-type",1983867728),k], 0));
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__35156) : handler.call(null,G__35156));

break;
default:
return null;

}
}));

return socket.conn.on("close",(function (reason){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Close connection: ",id], 0));
}));
}));
});

//# sourceMappingURL=backend.ws.js.map
