goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__31201){
var map__31205 = p__31201;
var map__31205__$1 = cljs.core.__destructure_map(map__31205);
var msg = map__31205__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31205__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31205__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__31206){
var map__31208 = p__31206;
var map__31208__$1 = cljs.core.__destructure_map(map__31208);
var msg = map__31208__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31208__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31208__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__31209 = info;
var map__31209__$1 = cljs.core.__destructure_map(map__31209);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31209__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31209__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31209__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31210){
var map__31211 = p__31210;
var map__31211__$1 = cljs.core.__destructure_map(map__31211);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31211__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31211__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__31212){
var map__31213 = p__31212;
var map__31213__$1 = cljs.core.__destructure_map(map__31213);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31213__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__31214 = cljs.core.seq(files_to_require);
var chunk__31215 = null;
var count__31216 = (0);
var i__31217 = (0);
while(true){
if((i__31217 < count__31216)){
var src = chunk__31215.cljs$core$IIndexed$_nth$arity$2(null,i__31217);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__31273 = seq__31214;
var G__31274 = chunk__31215;
var G__31275 = count__31216;
var G__31276 = (i__31217 + (1));
seq__31214 = G__31273;
chunk__31215 = G__31274;
count__31216 = G__31275;
i__31217 = G__31276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31214);
if(temp__5804__auto__){
var seq__31214__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31214__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__31214__$1);
var G__31277 = cljs.core.chunk_rest(seq__31214__$1);
var G__31278 = c__4679__auto__;
var G__31279 = cljs.core.count(c__4679__auto__);
var G__31280 = (0);
seq__31214 = G__31277;
chunk__31215 = G__31278;
count__31216 = G__31279;
i__31217 = G__31280;
continue;
} else {
var src = cljs.core.first(seq__31214__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__31281 = cljs.core.next(seq__31214__$1);
var G__31282 = null;
var G__31283 = (0);
var G__31284 = (0);
seq__31214 = G__31281;
chunk__31215 = G__31282;
count__31216 = G__31283;
i__31217 = G__31284;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__31230,msg){
var map__31231 = p__31230;
var map__31231__$1 = cljs.core.__destructure_map(map__31231);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31231__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__31233){
var map__31234 = p__31233;
var map__31234__$1 = cljs.core.__destructure_map(map__31234);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31234__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__31241,done,error){
var map__31242 = p__31241;
var map__31242__$1 = cljs.core.__destructure_map(map__31242);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31242__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__31244_31285 = cljs.core.seq(repl_sources);
var chunk__31246_31286 = null;
var count__31247_31287 = (0);
var i__31248_31288 = (0);
while(true){
if((i__31248_31288 < count__31247_31287)){
var map__31253_31289 = chunk__31246_31286.cljs$core$IIndexed$_nth$arity$2(null,i__31248_31288);
var map__31253_31290__$1 = cljs.core.__destructure_map(map__31253_31289);
var src_31291 = map__31253_31290__$1;
var output_name_31292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31253_31290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_31292)))){
shadow.cljs.devtools.client.node.closure_import(output_name_31292);


var G__31293 = seq__31244_31285;
var G__31294 = chunk__31246_31286;
var G__31295 = count__31247_31287;
var G__31296 = (i__31248_31288 + (1));
seq__31244_31285 = G__31293;
chunk__31246_31286 = G__31294;
count__31247_31287 = G__31295;
i__31248_31288 = G__31296;
continue;
} else {
var G__31297 = seq__31244_31285;
var G__31298 = chunk__31246_31286;
var G__31299 = count__31247_31287;
var G__31300 = (i__31248_31288 + (1));
seq__31244_31285 = G__31297;
chunk__31246_31286 = G__31298;
count__31247_31287 = G__31299;
i__31248_31288 = G__31300;
continue;
}
} else {
var temp__5804__auto___31301 = cljs.core.seq(seq__31244_31285);
if(temp__5804__auto___31301){
var seq__31244_31302__$1 = temp__5804__auto___31301;
if(cljs.core.chunked_seq_QMARK_(seq__31244_31302__$1)){
var c__4679__auto___31303 = cljs.core.chunk_first(seq__31244_31302__$1);
var G__31304 = cljs.core.chunk_rest(seq__31244_31302__$1);
var G__31305 = c__4679__auto___31303;
var G__31306 = cljs.core.count(c__4679__auto___31303);
var G__31307 = (0);
seq__31244_31285 = G__31304;
chunk__31246_31286 = G__31305;
count__31247_31287 = G__31306;
i__31248_31288 = G__31307;
continue;
} else {
var map__31254_31308 = cljs.core.first(seq__31244_31302__$1);
var map__31254_31309__$1 = cljs.core.__destructure_map(map__31254_31308);
var src_31310 = map__31254_31309__$1;
var output_name_31311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31254_31309__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_31311)))){
shadow.cljs.devtools.client.node.closure_import(output_name_31311);


var G__31312 = cljs.core.next(seq__31244_31302__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31244_31285 = G__31312;
chunk__31246_31286 = G__31313;
count__31247_31287 = G__31314;
i__31248_31288 = G__31315;
continue;
} else {
var G__31316 = cljs.core.next(seq__31244_31302__$1);
var G__31317 = null;
var G__31318 = (0);
var G__31319 = (0);
seq__31244_31285 = G__31316;
chunk__31246_31286 = G__31317;
count__31247_31287 = G__31318;
i__31248_31288 = G__31319;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e31243){var e = e31243;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__31255,done,error){
var map__31256 = p__31255;
var map__31256__$1 = cljs.core.__destructure_map(map__31256);
var msg = map__31256__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31256__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31256__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__31258_31320 = cljs.core.seq(sources);
var chunk__31259_31321 = null;
var count__31260_31322 = (0);
var i__31261_31323 = (0);
while(true){
if((i__31261_31323 < count__31260_31322)){
var map__31264_31324 = chunk__31259_31321.cljs$core$IIndexed$_nth$arity$2(null,i__31261_31323);
var map__31264_31325__$1 = cljs.core.__destructure_map(map__31264_31324);
var src_31326 = map__31264_31325__$1;
var provides_31327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31264_31325__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_31328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31264_31325__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4253__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_31328)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_31327);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_31328);
} else {
}


var G__31329 = seq__31258_31320;
var G__31330 = chunk__31259_31321;
var G__31331 = count__31260_31322;
var G__31332 = (i__31261_31323 + (1));
seq__31258_31320 = G__31329;
chunk__31259_31321 = G__31330;
count__31260_31322 = G__31331;
i__31261_31323 = G__31332;
continue;
} else {
var temp__5804__auto___31333 = cljs.core.seq(seq__31258_31320);
if(temp__5804__auto___31333){
var seq__31258_31334__$1 = temp__5804__auto___31333;
if(cljs.core.chunked_seq_QMARK_(seq__31258_31334__$1)){
var c__4679__auto___31335 = cljs.core.chunk_first(seq__31258_31334__$1);
var G__31336 = cljs.core.chunk_rest(seq__31258_31334__$1);
var G__31337 = c__4679__auto___31335;
var G__31338 = cljs.core.count(c__4679__auto___31335);
var G__31339 = (0);
seq__31258_31320 = G__31336;
chunk__31259_31321 = G__31337;
count__31260_31322 = G__31338;
i__31261_31323 = G__31339;
continue;
} else {
var map__31265_31340 = cljs.core.first(seq__31258_31334__$1);
var map__31265_31341__$1 = cljs.core.__destructure_map(map__31265_31340);
var src_31342 = map__31265_31341__$1;
var provides_31343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31265_31341__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_31344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31265_31341__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4253__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_31344)));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_31343);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_31344);
} else {
}


var G__31345 = cljs.core.next(seq__31258_31334__$1);
var G__31346 = null;
var G__31347 = (0);
var G__31348 = (0);
seq__31258_31320 = G__31345;
chunk__31259_31321 = G__31346;
count__31260_31322 = G__31347;
i__31261_31323 = G__31348;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e31257){var e = e31257;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__31266){
var map__31267 = p__31266;
var map__31267__$1 = cljs.core.__destructure_map(map__31267);
var env = map__31267__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31267__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__31268){
var map__31269 = p__31268;
var map__31269__$1 = cljs.core.__destructure_map(map__31269);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31269__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31269__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__31270){
var map__31271 = p__31270;
var map__31271__$1 = cljs.core.__destructure_map(map__31271);
var svc = map__31271__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31271__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
