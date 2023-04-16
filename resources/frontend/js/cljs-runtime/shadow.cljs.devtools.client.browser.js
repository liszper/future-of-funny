goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47985 = arguments.length;
var i__4865__auto___47986 = (0);
while(true){
if((i__4865__auto___47986 < len__4864__auto___47985)){
args__4870__auto__.push((arguments[i__4865__auto___47986]));

var G__47987 = (i__4865__auto___47986 + (1));
i__4865__auto___47986 = G__47987;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47388){
var G__47389 = cljs.core.first(seq47388);
var seq47388__$1 = cljs.core.next(seq47388);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47389,seq47388__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47392 = cljs.core.seq(sources);
var chunk__47393 = null;
var count__47394 = (0);
var i__47395 = (0);
while(true){
if((i__47395 < count__47394)){
var map__47407 = chunk__47393.cljs$core$IIndexed$_nth$arity$2(null,i__47395);
var map__47407__$1 = cljs.core.__destructure_map(map__47407);
var src = map__47407__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47407__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47407__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47407__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47407__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47408){var e_47992 = e47408;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47992);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47992.message)].join('')));
}

var G__47993 = seq__47392;
var G__47994 = chunk__47393;
var G__47995 = count__47394;
var G__47996 = (i__47395 + (1));
seq__47392 = G__47993;
chunk__47393 = G__47994;
count__47394 = G__47995;
i__47395 = G__47996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47392);
if(temp__5804__auto__){
var seq__47392__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47392__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47392__$1);
var G__48000 = cljs.core.chunk_rest(seq__47392__$1);
var G__48001 = c__4679__auto__;
var G__48002 = cljs.core.count(c__4679__auto__);
var G__48003 = (0);
seq__47392 = G__48000;
chunk__47393 = G__48001;
count__47394 = G__48002;
i__47395 = G__48003;
continue;
} else {
var map__47409 = cljs.core.first(seq__47392__$1);
var map__47409__$1 = cljs.core.__destructure_map(map__47409);
var src = map__47409__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47409__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47410){var e_48005 = e47410;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48005);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48005.message)].join('')));
}

var G__48006 = cljs.core.next(seq__47392__$1);
var G__48007 = null;
var G__48008 = (0);
var G__48009 = (0);
seq__47392 = G__48006;
chunk__47393 = G__48007;
count__47394 = G__48008;
i__47395 = G__48009;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47413 = cljs.core.seq(js_requires);
var chunk__47414 = null;
var count__47415 = (0);
var i__47416 = (0);
while(true){
if((i__47416 < count__47415)){
var js_ns = chunk__47414.cljs$core$IIndexed$_nth$arity$2(null,i__47416);
var require_str_48011 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48011);


var G__48012 = seq__47413;
var G__48013 = chunk__47414;
var G__48014 = count__47415;
var G__48015 = (i__47416 + (1));
seq__47413 = G__48012;
chunk__47414 = G__48013;
count__47415 = G__48014;
i__47416 = G__48015;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47413);
if(temp__5804__auto__){
var seq__47413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47413__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47413__$1);
var G__48022 = cljs.core.chunk_rest(seq__47413__$1);
var G__48023 = c__4679__auto__;
var G__48024 = cljs.core.count(c__4679__auto__);
var G__48025 = (0);
seq__47413 = G__48022;
chunk__47414 = G__48023;
count__47415 = G__48024;
i__47416 = G__48025;
continue;
} else {
var js_ns = cljs.core.first(seq__47413__$1);
var require_str_48026 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48026);


var G__48028 = cljs.core.next(seq__47413__$1);
var G__48029 = null;
var G__48030 = (0);
var G__48031 = (0);
seq__47413 = G__48028;
chunk__47414 = G__48029;
count__47415 = G__48030;
i__47416 = G__48031;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47419){
var map__47420 = p__47419;
var map__47420__$1 = cljs.core.__destructure_map(map__47420);
var msg = map__47420__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47420__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47421(s__47422){
return (new cljs.core.LazySeq(null,(function (){
var s__47422__$1 = s__47422;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47422__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__47427 = cljs.core.first(xs__6360__auto__);
var map__47427__$1 = cljs.core.__destructure_map(map__47427);
var src = map__47427__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47427__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47427__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__47422__$1,map__47427,map__47427__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47420,map__47420__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47421_$_iter__47423(s__47424){
return (new cljs.core.LazySeq(null,((function (s__47422__$1,map__47427,map__47427__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47420,map__47420__$1,msg,info,reload_info){
return (function (){
var s__47424__$1 = s__47424;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47424__$1);
if(temp__5804__auto____$1){
var s__47424__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47424__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__47424__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__47426 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__47425 = (0);
while(true){
if((i__47425 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__47425);
cljs.core.chunk_append(b__47426,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48034 = (i__47425 + (1));
i__47425 = G__48034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47426),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47421_$_iter__47423(cljs.core.chunk_rest(s__47424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47426),null);
}
} else {
var warning = cljs.core.first(s__47424__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47421_$_iter__47423(cljs.core.rest(s__47424__$2)));
}
} else {
return null;
}
break;
}
});})(s__47422__$1,map__47427,map__47427__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47420,map__47420__$1,msg,info,reload_info))
,null,null));
});})(s__47422__$1,map__47427,map__47427__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47420,map__47420__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47421(cljs.core.rest(s__47422__$1)));
} else {
var G__48035 = cljs.core.rest(s__47422__$1);
s__47422__$1 = G__48035;
continue;
}
} else {
var G__48036 = cljs.core.rest(s__47422__$1);
s__47422__$1 = G__48036;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47428_48037 = cljs.core.seq(warnings);
var chunk__47429_48038 = null;
var count__47430_48039 = (0);
var i__47431_48040 = (0);
while(true){
if((i__47431_48040 < count__47430_48039)){
var map__47440_48041 = chunk__47429_48038.cljs$core$IIndexed$_nth$arity$2(null,i__47431_48040);
var map__47440_48042__$1 = cljs.core.__destructure_map(map__47440_48041);
var w_48043 = map__47440_48042__$1;
var msg_48044__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440_48042__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440_48042__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440_48042__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47440_48042__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48047)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48045),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48046),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48044__$1)].join(''));


var G__48051 = seq__47428_48037;
var G__48052 = chunk__47429_48038;
var G__48053 = count__47430_48039;
var G__48054 = (i__47431_48040 + (1));
seq__47428_48037 = G__48051;
chunk__47429_48038 = G__48052;
count__47430_48039 = G__48053;
i__47431_48040 = G__48054;
continue;
} else {
var temp__5804__auto___48055 = cljs.core.seq(seq__47428_48037);
if(temp__5804__auto___48055){
var seq__47428_48056__$1 = temp__5804__auto___48055;
if(cljs.core.chunked_seq_QMARK_(seq__47428_48056__$1)){
var c__4679__auto___48061 = cljs.core.chunk_first(seq__47428_48056__$1);
var G__48062 = cljs.core.chunk_rest(seq__47428_48056__$1);
var G__48063 = c__4679__auto___48061;
var G__48064 = cljs.core.count(c__4679__auto___48061);
var G__48065 = (0);
seq__47428_48037 = G__48062;
chunk__47429_48038 = G__48063;
count__47430_48039 = G__48064;
i__47431_48040 = G__48065;
continue;
} else {
var map__47443_48066 = cljs.core.first(seq__47428_48056__$1);
var map__47443_48067__$1 = cljs.core.__destructure_map(map__47443_48066);
var w_48068 = map__47443_48067__$1;
var msg_48069__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47443_48067__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47443_48067__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47443_48067__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47443_48067__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48072)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48070),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48071),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48069__$1)].join(''));


var G__48074 = cljs.core.next(seq__47428_48056__$1);
var G__48075 = null;
var G__48076 = (0);
var G__48077 = (0);
seq__47428_48037 = G__48074;
chunk__47429_48038 = G__48075;
count__47430_48039 = G__48076;
i__47431_48040 = G__48077;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47418_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47418_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47451){
var map__47452 = p__47451;
var map__47452__$1 = cljs.core.__destructure_map(map__47452);
var msg = map__47452__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47452__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47452__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47453 = cljs.core.seq(updates);
var chunk__47455 = null;
var count__47456 = (0);
var i__47457 = (0);
while(true){
if((i__47457 < count__47456)){
var path = chunk__47455.cljs$core$IIndexed$_nth$arity$2(null,i__47457);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47587_48086 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47591_48087 = null;
var count__47592_48088 = (0);
var i__47593_48089 = (0);
while(true){
if((i__47593_48089 < count__47592_48088)){
var node_48091 = chunk__47591_48087.cljs$core$IIndexed$_nth$arity$2(null,i__47593_48089);
if(cljs.core.not(node_48091.shadow$old)){
var path_match_48092 = shadow.cljs.devtools.client.browser.match_paths(node_48091.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48092)){
var new_link_48093 = (function (){var G__47639 = node_48091.cloneNode(true);
G__47639.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48092),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47639;
})();
(node_48091.shadow$old = true);

(new_link_48093.onload = ((function (seq__47587_48086,chunk__47591_48087,count__47592_48088,i__47593_48089,seq__47453,chunk__47455,count__47456,i__47457,new_link_48093,path_match_48092,node_48091,path,map__47452,map__47452__$1,msg,updates,reload_info){
return (function (e){
var seq__47644_48094 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47646_48095 = null;
var count__47647_48096 = (0);
var i__47648_48097 = (0);
while(true){
if((i__47648_48097 < count__47647_48096)){
var map__47656_48098 = chunk__47646_48095.cljs$core$IIndexed$_nth$arity$2(null,i__47648_48097);
var map__47656_48099__$1 = cljs.core.__destructure_map(map__47656_48098);
var task_48100 = map__47656_48099__$1;
var fn_str_48101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47656_48099__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47656_48099__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48108 = goog.getObjectByName(fn_str_48101,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48102)].join(''));

(fn_obj_48108.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48108.cljs$core$IFn$_invoke$arity$2(path,new_link_48093) : fn_obj_48108.call(null,path,new_link_48093));


var G__48112 = seq__47644_48094;
var G__48113 = chunk__47646_48095;
var G__48114 = count__47647_48096;
var G__48115 = (i__47648_48097 + (1));
seq__47644_48094 = G__48112;
chunk__47646_48095 = G__48113;
count__47647_48096 = G__48114;
i__47648_48097 = G__48115;
continue;
} else {
var temp__5804__auto___48116 = cljs.core.seq(seq__47644_48094);
if(temp__5804__auto___48116){
var seq__47644_48117__$1 = temp__5804__auto___48116;
if(cljs.core.chunked_seq_QMARK_(seq__47644_48117__$1)){
var c__4679__auto___48118 = cljs.core.chunk_first(seq__47644_48117__$1);
var G__48120 = cljs.core.chunk_rest(seq__47644_48117__$1);
var G__48121 = c__4679__auto___48118;
var G__48122 = cljs.core.count(c__4679__auto___48118);
var G__48123 = (0);
seq__47644_48094 = G__48120;
chunk__47646_48095 = G__48121;
count__47647_48096 = G__48122;
i__47648_48097 = G__48123;
continue;
} else {
var map__47657_48124 = cljs.core.first(seq__47644_48117__$1);
var map__47657_48125__$1 = cljs.core.__destructure_map(map__47657_48124);
var task_48126 = map__47657_48125__$1;
var fn_str_48127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47657_48125__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47657_48125__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48130 = goog.getObjectByName(fn_str_48127,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48128)].join(''));

(fn_obj_48130.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48130.cljs$core$IFn$_invoke$arity$2(path,new_link_48093) : fn_obj_48130.call(null,path,new_link_48093));


var G__48132 = cljs.core.next(seq__47644_48117__$1);
var G__48133 = null;
var G__48134 = (0);
var G__48135 = (0);
seq__47644_48094 = G__48132;
chunk__47646_48095 = G__48133;
count__47647_48096 = G__48134;
i__47648_48097 = G__48135;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48091);
});})(seq__47587_48086,chunk__47591_48087,count__47592_48088,i__47593_48089,seq__47453,chunk__47455,count__47456,i__47457,new_link_48093,path_match_48092,node_48091,path,map__47452,map__47452__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48092], 0));

goog.dom.insertSiblingAfter(new_link_48093,node_48091);


var G__48136 = seq__47587_48086;
var G__48137 = chunk__47591_48087;
var G__48138 = count__47592_48088;
var G__48139 = (i__47593_48089 + (1));
seq__47587_48086 = G__48136;
chunk__47591_48087 = G__48137;
count__47592_48088 = G__48138;
i__47593_48089 = G__48139;
continue;
} else {
var G__48140 = seq__47587_48086;
var G__48141 = chunk__47591_48087;
var G__48142 = count__47592_48088;
var G__48143 = (i__47593_48089 + (1));
seq__47587_48086 = G__48140;
chunk__47591_48087 = G__48141;
count__47592_48088 = G__48142;
i__47593_48089 = G__48143;
continue;
}
} else {
var G__48144 = seq__47587_48086;
var G__48145 = chunk__47591_48087;
var G__48146 = count__47592_48088;
var G__48147 = (i__47593_48089 + (1));
seq__47587_48086 = G__48144;
chunk__47591_48087 = G__48145;
count__47592_48088 = G__48146;
i__47593_48089 = G__48147;
continue;
}
} else {
var temp__5804__auto___48149 = cljs.core.seq(seq__47587_48086);
if(temp__5804__auto___48149){
var seq__47587_48150__$1 = temp__5804__auto___48149;
if(cljs.core.chunked_seq_QMARK_(seq__47587_48150__$1)){
var c__4679__auto___48151 = cljs.core.chunk_first(seq__47587_48150__$1);
var G__48153 = cljs.core.chunk_rest(seq__47587_48150__$1);
var G__48154 = c__4679__auto___48151;
var G__48155 = cljs.core.count(c__4679__auto___48151);
var G__48156 = (0);
seq__47587_48086 = G__48153;
chunk__47591_48087 = G__48154;
count__47592_48088 = G__48155;
i__47593_48089 = G__48156;
continue;
} else {
var node_48157 = cljs.core.first(seq__47587_48150__$1);
if(cljs.core.not(node_48157.shadow$old)){
var path_match_48158 = shadow.cljs.devtools.client.browser.match_paths(node_48157.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48158)){
var new_link_48159 = (function (){var G__47659 = node_48157.cloneNode(true);
G__47659.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48158),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47659;
})();
(node_48157.shadow$old = true);

(new_link_48159.onload = ((function (seq__47587_48086,chunk__47591_48087,count__47592_48088,i__47593_48089,seq__47453,chunk__47455,count__47456,i__47457,new_link_48159,path_match_48158,node_48157,seq__47587_48150__$1,temp__5804__auto___48149,path,map__47452,map__47452__$1,msg,updates,reload_info){
return (function (e){
var seq__47660_48161 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47662_48162 = null;
var count__47663_48163 = (0);
var i__47664_48164 = (0);
while(true){
if((i__47664_48164 < count__47663_48163)){
var map__47670_48165 = chunk__47662_48162.cljs$core$IIndexed$_nth$arity$2(null,i__47664_48164);
var map__47670_48166__$1 = cljs.core.__destructure_map(map__47670_48165);
var task_48167 = map__47670_48166__$1;
var fn_str_48168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47670_48166__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47670_48166__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48170 = goog.getObjectByName(fn_str_48168,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48169)].join(''));

(fn_obj_48170.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48170.cljs$core$IFn$_invoke$arity$2(path,new_link_48159) : fn_obj_48170.call(null,path,new_link_48159));


var G__48172 = seq__47660_48161;
var G__48173 = chunk__47662_48162;
var G__48174 = count__47663_48163;
var G__48175 = (i__47664_48164 + (1));
seq__47660_48161 = G__48172;
chunk__47662_48162 = G__48173;
count__47663_48163 = G__48174;
i__47664_48164 = G__48175;
continue;
} else {
var temp__5804__auto___48176__$1 = cljs.core.seq(seq__47660_48161);
if(temp__5804__auto___48176__$1){
var seq__47660_48177__$1 = temp__5804__auto___48176__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47660_48177__$1)){
var c__4679__auto___48178 = cljs.core.chunk_first(seq__47660_48177__$1);
var G__48179 = cljs.core.chunk_rest(seq__47660_48177__$1);
var G__48180 = c__4679__auto___48178;
var G__48181 = cljs.core.count(c__4679__auto___48178);
var G__48182 = (0);
seq__47660_48161 = G__48179;
chunk__47662_48162 = G__48180;
count__47663_48163 = G__48181;
i__47664_48164 = G__48182;
continue;
} else {
var map__47671_48183 = cljs.core.first(seq__47660_48177__$1);
var map__47671_48184__$1 = cljs.core.__destructure_map(map__47671_48183);
var task_48185 = map__47671_48184__$1;
var fn_str_48186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47671_48184__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47671_48184__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48188 = goog.getObjectByName(fn_str_48186,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48187)].join(''));

(fn_obj_48188.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48188.cljs$core$IFn$_invoke$arity$2(path,new_link_48159) : fn_obj_48188.call(null,path,new_link_48159));


var G__48189 = cljs.core.next(seq__47660_48177__$1);
var G__48190 = null;
var G__48191 = (0);
var G__48192 = (0);
seq__47660_48161 = G__48189;
chunk__47662_48162 = G__48190;
count__47663_48163 = G__48191;
i__47664_48164 = G__48192;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48157);
});})(seq__47587_48086,chunk__47591_48087,count__47592_48088,i__47593_48089,seq__47453,chunk__47455,count__47456,i__47457,new_link_48159,path_match_48158,node_48157,seq__47587_48150__$1,temp__5804__auto___48149,path,map__47452,map__47452__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48158], 0));

goog.dom.insertSiblingAfter(new_link_48159,node_48157);


var G__48198 = cljs.core.next(seq__47587_48150__$1);
var G__48199 = null;
var G__48200 = (0);
var G__48201 = (0);
seq__47587_48086 = G__48198;
chunk__47591_48087 = G__48199;
count__47592_48088 = G__48200;
i__47593_48089 = G__48201;
continue;
} else {
var G__48203 = cljs.core.next(seq__47587_48150__$1);
var G__48204 = null;
var G__48205 = (0);
var G__48206 = (0);
seq__47587_48086 = G__48203;
chunk__47591_48087 = G__48204;
count__47592_48088 = G__48205;
i__47593_48089 = G__48206;
continue;
}
} else {
var G__48207 = cljs.core.next(seq__47587_48150__$1);
var G__48208 = null;
var G__48209 = (0);
var G__48210 = (0);
seq__47587_48086 = G__48207;
chunk__47591_48087 = G__48208;
count__47592_48088 = G__48209;
i__47593_48089 = G__48210;
continue;
}
}
} else {
}
}
break;
}


var G__48216 = seq__47453;
var G__48217 = chunk__47455;
var G__48218 = count__47456;
var G__48219 = (i__47457 + (1));
seq__47453 = G__48216;
chunk__47455 = G__48217;
count__47456 = G__48218;
i__47457 = G__48219;
continue;
} else {
var G__48223 = seq__47453;
var G__48224 = chunk__47455;
var G__48225 = count__47456;
var G__48226 = (i__47457 + (1));
seq__47453 = G__48223;
chunk__47455 = G__48224;
count__47456 = G__48225;
i__47457 = G__48226;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47453);
if(temp__5804__auto__){
var seq__47453__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47453__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47453__$1);
var G__48229 = cljs.core.chunk_rest(seq__47453__$1);
var G__48230 = c__4679__auto__;
var G__48231 = cljs.core.count(c__4679__auto__);
var G__48232 = (0);
seq__47453 = G__48229;
chunk__47455 = G__48230;
count__47456 = G__48231;
i__47457 = G__48232;
continue;
} else {
var path = cljs.core.first(seq__47453__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47676_48234 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47680_48235 = null;
var count__47681_48236 = (0);
var i__47682_48237 = (0);
while(true){
if((i__47682_48237 < count__47681_48236)){
var node_48238 = chunk__47680_48235.cljs$core$IIndexed$_nth$arity$2(null,i__47682_48237);
if(cljs.core.not(node_48238.shadow$old)){
var path_match_48239 = shadow.cljs.devtools.client.browser.match_paths(node_48238.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48239)){
var new_link_48240 = (function (){var G__47840 = node_48238.cloneNode(true);
G__47840.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48239),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47840;
})();
(node_48238.shadow$old = true);

(new_link_48240.onload = ((function (seq__47676_48234,chunk__47680_48235,count__47681_48236,i__47682_48237,seq__47453,chunk__47455,count__47456,i__47457,new_link_48240,path_match_48239,node_48238,path,seq__47453__$1,temp__5804__auto__,map__47452,map__47452__$1,msg,updates,reload_info){
return (function (e){
var seq__47841_48241 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47843_48242 = null;
var count__47844_48243 = (0);
var i__47845_48244 = (0);
while(true){
if((i__47845_48244 < count__47844_48243)){
var map__47857_48245 = chunk__47843_48242.cljs$core$IIndexed$_nth$arity$2(null,i__47845_48244);
var map__47857_48246__$1 = cljs.core.__destructure_map(map__47857_48245);
var task_48247 = map__47857_48246__$1;
var fn_str_48248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857_48246__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47857_48246__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48250 = goog.getObjectByName(fn_str_48248,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48249)].join(''));

(fn_obj_48250.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48250.cljs$core$IFn$_invoke$arity$2(path,new_link_48240) : fn_obj_48250.call(null,path,new_link_48240));


var G__48251 = seq__47841_48241;
var G__48252 = chunk__47843_48242;
var G__48253 = count__47844_48243;
var G__48254 = (i__47845_48244 + (1));
seq__47841_48241 = G__48251;
chunk__47843_48242 = G__48252;
count__47844_48243 = G__48253;
i__47845_48244 = G__48254;
continue;
} else {
var temp__5804__auto___48255__$1 = cljs.core.seq(seq__47841_48241);
if(temp__5804__auto___48255__$1){
var seq__47841_48256__$1 = temp__5804__auto___48255__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47841_48256__$1)){
var c__4679__auto___48257 = cljs.core.chunk_first(seq__47841_48256__$1);
var G__48258 = cljs.core.chunk_rest(seq__47841_48256__$1);
var G__48259 = c__4679__auto___48257;
var G__48260 = cljs.core.count(c__4679__auto___48257);
var G__48261 = (0);
seq__47841_48241 = G__48258;
chunk__47843_48242 = G__48259;
count__47844_48243 = G__48260;
i__47845_48244 = G__48261;
continue;
} else {
var map__47858_48262 = cljs.core.first(seq__47841_48256__$1);
var map__47858_48263__$1 = cljs.core.__destructure_map(map__47858_48262);
var task_48264 = map__47858_48263__$1;
var fn_str_48265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47858_48263__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47858_48263__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48267 = goog.getObjectByName(fn_str_48265,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48266)].join(''));

(fn_obj_48267.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48267.cljs$core$IFn$_invoke$arity$2(path,new_link_48240) : fn_obj_48267.call(null,path,new_link_48240));


var G__48273 = cljs.core.next(seq__47841_48256__$1);
var G__48274 = null;
var G__48275 = (0);
var G__48276 = (0);
seq__47841_48241 = G__48273;
chunk__47843_48242 = G__48274;
count__47844_48243 = G__48275;
i__47845_48244 = G__48276;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48238);
});})(seq__47676_48234,chunk__47680_48235,count__47681_48236,i__47682_48237,seq__47453,chunk__47455,count__47456,i__47457,new_link_48240,path_match_48239,node_48238,path,seq__47453__$1,temp__5804__auto__,map__47452,map__47452__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48239], 0));

goog.dom.insertSiblingAfter(new_link_48240,node_48238);


var G__48278 = seq__47676_48234;
var G__48279 = chunk__47680_48235;
var G__48280 = count__47681_48236;
var G__48281 = (i__47682_48237 + (1));
seq__47676_48234 = G__48278;
chunk__47680_48235 = G__48279;
count__47681_48236 = G__48280;
i__47682_48237 = G__48281;
continue;
} else {
var G__48282 = seq__47676_48234;
var G__48283 = chunk__47680_48235;
var G__48284 = count__47681_48236;
var G__48285 = (i__47682_48237 + (1));
seq__47676_48234 = G__48282;
chunk__47680_48235 = G__48283;
count__47681_48236 = G__48284;
i__47682_48237 = G__48285;
continue;
}
} else {
var G__48286 = seq__47676_48234;
var G__48287 = chunk__47680_48235;
var G__48288 = count__47681_48236;
var G__48289 = (i__47682_48237 + (1));
seq__47676_48234 = G__48286;
chunk__47680_48235 = G__48287;
count__47681_48236 = G__48288;
i__47682_48237 = G__48289;
continue;
}
} else {
var temp__5804__auto___48290__$1 = cljs.core.seq(seq__47676_48234);
if(temp__5804__auto___48290__$1){
var seq__47676_48291__$1 = temp__5804__auto___48290__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47676_48291__$1)){
var c__4679__auto___48292 = cljs.core.chunk_first(seq__47676_48291__$1);
var G__48293 = cljs.core.chunk_rest(seq__47676_48291__$1);
var G__48294 = c__4679__auto___48292;
var G__48295 = cljs.core.count(c__4679__auto___48292);
var G__48296 = (0);
seq__47676_48234 = G__48293;
chunk__47680_48235 = G__48294;
count__47681_48236 = G__48295;
i__47682_48237 = G__48296;
continue;
} else {
var node_48297 = cljs.core.first(seq__47676_48291__$1);
if(cljs.core.not(node_48297.shadow$old)){
var path_match_48298 = shadow.cljs.devtools.client.browser.match_paths(node_48297.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48298)){
var new_link_48299 = (function (){var G__47862 = node_48297.cloneNode(true);
G__47862.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48298),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47862;
})();
(node_48297.shadow$old = true);

(new_link_48299.onload = ((function (seq__47676_48234,chunk__47680_48235,count__47681_48236,i__47682_48237,seq__47453,chunk__47455,count__47456,i__47457,new_link_48299,path_match_48298,node_48297,seq__47676_48291__$1,temp__5804__auto___48290__$1,path,seq__47453__$1,temp__5804__auto__,map__47452,map__47452__$1,msg,updates,reload_info){
return (function (e){
var seq__47864_48300 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47866_48301 = null;
var count__47867_48302 = (0);
var i__47868_48303 = (0);
while(true){
if((i__47868_48303 < count__47867_48302)){
var map__47879_48304 = chunk__47866_48301.cljs$core$IIndexed$_nth$arity$2(null,i__47868_48303);
var map__47879_48305__$1 = cljs.core.__destructure_map(map__47879_48304);
var task_48306 = map__47879_48305__$1;
var fn_str_48307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47879_48305__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47879_48305__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48309 = goog.getObjectByName(fn_str_48307,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48308)].join(''));

(fn_obj_48309.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48309.cljs$core$IFn$_invoke$arity$2(path,new_link_48299) : fn_obj_48309.call(null,path,new_link_48299));


var G__48317 = seq__47864_48300;
var G__48318 = chunk__47866_48301;
var G__48319 = count__47867_48302;
var G__48320 = (i__47868_48303 + (1));
seq__47864_48300 = G__48317;
chunk__47866_48301 = G__48318;
count__47867_48302 = G__48319;
i__47868_48303 = G__48320;
continue;
} else {
var temp__5804__auto___48323__$2 = cljs.core.seq(seq__47864_48300);
if(temp__5804__auto___48323__$2){
var seq__47864_48324__$1 = temp__5804__auto___48323__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47864_48324__$1)){
var c__4679__auto___48325 = cljs.core.chunk_first(seq__47864_48324__$1);
var G__48326 = cljs.core.chunk_rest(seq__47864_48324__$1);
var G__48327 = c__4679__auto___48325;
var G__48328 = cljs.core.count(c__4679__auto___48325);
var G__48329 = (0);
seq__47864_48300 = G__48326;
chunk__47866_48301 = G__48327;
count__47867_48302 = G__48328;
i__47868_48303 = G__48329;
continue;
} else {
var map__47881_48330 = cljs.core.first(seq__47864_48324__$1);
var map__47881_48331__$1 = cljs.core.__destructure_map(map__47881_48330);
var task_48332 = map__47881_48331__$1;
var fn_str_48333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47881_48331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_48334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47881_48331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_48339 = goog.getObjectByName(fn_str_48333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_48334)].join(''));

(fn_obj_48339.cljs$core$IFn$_invoke$arity$2 ? fn_obj_48339.cljs$core$IFn$_invoke$arity$2(path,new_link_48299) : fn_obj_48339.call(null,path,new_link_48299));


var G__48341 = cljs.core.next(seq__47864_48324__$1);
var G__48342 = null;
var G__48343 = (0);
var G__48344 = (0);
seq__47864_48300 = G__48341;
chunk__47866_48301 = G__48342;
count__47867_48302 = G__48343;
i__47868_48303 = G__48344;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_48297);
});})(seq__47676_48234,chunk__47680_48235,count__47681_48236,i__47682_48237,seq__47453,chunk__47455,count__47456,i__47457,new_link_48299,path_match_48298,node_48297,seq__47676_48291__$1,temp__5804__auto___48290__$1,path,seq__47453__$1,temp__5804__auto__,map__47452,map__47452__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48298], 0));

goog.dom.insertSiblingAfter(new_link_48299,node_48297);


var G__48350 = cljs.core.next(seq__47676_48291__$1);
var G__48351 = null;
var G__48352 = (0);
var G__48353 = (0);
seq__47676_48234 = G__48350;
chunk__47680_48235 = G__48351;
count__47681_48236 = G__48352;
i__47682_48237 = G__48353;
continue;
} else {
var G__48355 = cljs.core.next(seq__47676_48291__$1);
var G__48356 = null;
var G__48357 = (0);
var G__48358 = (0);
seq__47676_48234 = G__48355;
chunk__47680_48235 = G__48356;
count__47681_48236 = G__48357;
i__47682_48237 = G__48358;
continue;
}
} else {
var G__48364 = cljs.core.next(seq__47676_48291__$1);
var G__48365 = null;
var G__48366 = (0);
var G__48367 = (0);
seq__47676_48234 = G__48364;
chunk__47680_48235 = G__48365;
count__47681_48236 = G__48366;
i__47682_48237 = G__48367;
continue;
}
}
} else {
}
}
break;
}


var G__48368 = cljs.core.next(seq__47453__$1);
var G__48369 = null;
var G__48370 = (0);
var G__48371 = (0);
seq__47453 = G__48368;
chunk__47455 = G__48369;
count__47456 = G__48370;
i__47457 = G__48371;
continue;
} else {
var G__48373 = cljs.core.next(seq__47453__$1);
var G__48374 = null;
var G__48375 = (0);
var G__48376 = (0);
seq__47453 = G__48373;
chunk__47455 = G__48374;
count__47456 = G__48375;
i__47457 = G__48376;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47893){
var map__47897 = p__47893;
var map__47897__$1 = cljs.core.__destructure_map(map__47897);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47897__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47919){
var map__47921 = p__47919;
var map__47921__$1 = cljs.core.__destructure_map(map__47921);
var _ = map__47921__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47921__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47926,done,error){
var map__47927 = p__47926;
var map__47927__$1 = cljs.core.__destructure_map(map__47927);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47927__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47928,done,error){
var map__47929 = p__47928;
var map__47929__$1 = cljs.core.__destructure_map(map__47929);
var msg = map__47929__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47929__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47929__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47929__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47930){
var map__47931 = p__47930;
var map__47931__$1 = cljs.core.__destructure_map(map__47931);
var src = map__47931__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47931__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47932 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47932) : done.call(null,G__47932));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47935){
var map__47936 = p__47935;
var map__47936__$1 = cljs.core.__destructure_map(map__47936);
var msg__$1 = map__47936__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47936__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47941){var ex = e47941;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47944){
var map__47945 = p__47944;
var map__47945__$1 = cljs.core.__destructure_map(map__47945);
var env = map__47945__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47945__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47960){
var map__47961 = p__47960;
var map__47961__$1 = cljs.core.__destructure_map(map__47961);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47961__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47961__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__47967){
var map__47968 = p__47967;
var map__47968__$1 = cljs.core.__destructure_map(map__47968);
var svc = map__47968__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47968__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
