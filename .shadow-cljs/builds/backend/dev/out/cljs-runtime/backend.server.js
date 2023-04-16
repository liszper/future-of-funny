goog.provide('backend.server');
if((typeof backend !== 'undefined') && (typeof backend.server !== 'undefined') && (typeof backend.server.server !== 'undefined')){
} else {
backend.server.server = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof backend !== 'undefined') && (typeof backend.server !== 'undefined') && (typeof backend.server.bot !== 'undefined')){
} else {
backend.server.bot = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
backend.server.router = new cljs.core.PersistentArrayMap(null, 1, ["/",backend.handlers.index], null);
backend.server.generate_get_route = (function backend$server$generate_get_route(app,route,handler){
return app.get(route,handler);
});
backend.server.start_server = (function backend$server$start_server(){
var app = shadow.js.shim.module$express();
var seq__35220_35819 = cljs.core.seq(backend.server.router);
var chunk__35222_35820 = null;
var count__35223_35821 = (0);
var i__35224_35822 = (0);
while(true){
if((i__35224_35822 < count__35223_35821)){
var vec__35247_35824 = chunk__35222_35820.cljs$core$IIndexed$_nth$arity$2(null,i__35224_35822);
var route_35825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_35824,(0),null);
var handler_35826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35247_35824,(1),null);
backend.server.generate_get_route(app,route_35825,handler_35826);


var G__35828 = seq__35220_35819;
var G__35829 = chunk__35222_35820;
var G__35830 = count__35223_35821;
var G__35831 = (i__35224_35822 + (1));
seq__35220_35819 = G__35828;
chunk__35222_35820 = G__35829;
count__35223_35821 = G__35830;
i__35224_35822 = G__35831;
continue;
} else {
var temp__5804__auto___35832 = cljs.core.seq(seq__35220_35819);
if(temp__5804__auto___35832){
var seq__35220_35833__$1 = temp__5804__auto___35832;
if(cljs.core.chunked_seq_QMARK_(seq__35220_35833__$1)){
var c__4679__auto___35835 = cljs.core.chunk_first(seq__35220_35833__$1);
var G__35836 = cljs.core.chunk_rest(seq__35220_35833__$1);
var G__35837 = c__4679__auto___35835;
var G__35838 = cljs.core.count(c__4679__auto___35835);
var G__35839 = (0);
seq__35220_35819 = G__35836;
chunk__35222_35820 = G__35837;
count__35223_35821 = G__35838;
i__35224_35822 = G__35839;
continue;
} else {
var vec__35252_35841 = cljs.core.first(seq__35220_35833__$1);
var route_35842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35252_35841,(0),null);
var handler_35843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35252_35841,(1),null);
backend.server.generate_get_route(app,route_35842,handler_35843);


var G__35845 = cljs.core.next(seq__35220_35833__$1);
var G__35846 = null;
var G__35847 = (0);
var G__35848 = (0);
seq__35220_35819 = G__35845;
chunk__35222_35820 = G__35846;
count__35223_35821 = G__35847;
i__35224_35822 = G__35848;
continue;
}
} else {
}
}
break;
}

app.use(shadow.js.shim.module$express["static"]("resources/frontend"));

return app.listen(config.port,(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Port: ",config.port], 0));
}));
});
backend.server.stop_BANG_ = (function backend$server$stop_BANG_(){
if(cljs.core.truth_(cljs.core.deref(backend.server.server))){
return cljs.core.deref(backend.server.server).close();
} else {
return null;
}
});
if((typeof backend !== 'undefined') && (typeof backend.server !== 'undefined') && (typeof backend.server.players !== 'undefined')){
} else {
backend.server.players = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
backend.server.start_BANG_ = (function backend$server$start_BANG_(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Code updating.."], 0));

var bot_35853 = (function (){try{return (new shadow.js.shim.module$node_telegram_bot_api("6081018411:AAG-awVqAMyRI24dOiCpveDcgNvmCOPUVtg",({"polling": true})));
}catch (e35272){if((e35272 instanceof Error)){
var e__29854__auto__ = e35272;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",e__29854__auto__], 0));
} else {
throw e35272;

}
}})();
var send_BANG__35854 = (function (to,what){
bot_35853.sendMessage(to,what);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["message to: ",to], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["message what: ",what], 0));
});
bot_35853.on("message",(function (msg){
var message = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(brave.swords.obj__GT_clj(msg),"from",brave.swords.obj__GT_clj),"chat",brave.swords.obj__GT_clj);
var message__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message"], null)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(message,"reply_to_message",brave.swords.obj__GT_clj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from"], null),brave.swords.obj__GT_clj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","chat"], null),brave.swords.obj__GT_clj):message);
var player_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from","id"], null));
var reply_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from","id"], null));
var reply_username = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from","username"], null));
var player = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from","username"], null));
var is_bot_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from","is_bot"], null));
var chat_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chat","id"], null));
var chat_title = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chat","type"], null)),"private"))?"Private":cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chat","title"], null)));
var message__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$6(cljs.core.update.cljs$core$IFn$_invoke$arity$5(message__$1,"from",cljs.core.dissoc,"is_bot","is_premium"),"chat",cljs.core.dissoc,"all_members_are_administrators","type","title");
var _ = (cljs.core.truth_(is_bot_QMARK_)?null:(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,"name"], null)))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,"messages",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chat_id,player_id))?"private":chat_id),"content"], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(message__$2,"chat",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["from"], 0))], 0)):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(backend.server.players,brave.swords.deep_merge,cljs.core.PersistentArrayMap.createAsIfByAssoc([player,new cljs.core.PersistentArrayMap(null, 6, ["id",player_id,"name",player,"registered",cljs.core.get.cljs$core$IFn$_invoke$arity$2(message__$2,"date"),"nickname",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from","first_name"], null)),"lang",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["from","language_code"], null)),"messages",cljs.core.PersistentArrayMap.createAsIfByAssoc([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chat_id,player_id))?"private":chat_id),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(chat_id,player_id))?new cljs.core.PersistentArrayMap(null, 2, ["started",cljs.core.get.cljs$core$IFn$_invoke$arity$2(message__$2,"date"),"content",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(message__$2,"chat",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["from"], 0))], null)], null):new cljs.core.PersistentArrayMap(null, 3, ["title",chat_title,"started",cljs.core.get.cljs$core$IFn$_invoke$arity$2(message__$2,"date"),"content",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(message__$2,"chat",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["from"], 0))], null)], null))])], null)]))));
var raw_prompt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null));
var prompt = clojure.string.lower_case(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text"], null)));
if(clojure.string.includes_QMARK_(prompt,"joke")){
bot_35853.sendMessage(chat_id,"Haha. that was funny!");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,"points","funny"], null),cljs.core.inc);

bot_35853.sendMessage(chat_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player),"'s current funny points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,"points","funny"], null)))].join(''));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(message__$2,"reply_to_message");
if(cljs.core.truth_(and__4251__auto__)){
return ((clojure.string.includes_QMARK_(prompt,"haha")) || (((clojure.string.includes_QMARK_(prompt,"hihi")) || (((clojure.string.includes_QMARK_(prompt,"lol")) || (clojure.string.includes_QMARK_(prompt,"lmao")))))));
} else {
return and__4251__auto__;
}
})())){
bot_35853.sendMessage(reply_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," liked your joke, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from","username"], null))),"!"].join(''));

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","funny"], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","funny"], null),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","funny"], null),(1));
}

send_BANG__35854(reply_id,["Your current funny points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","funny"], null)),"\uD83D\uDE06")))].join(''));
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(message__$2,"reply_to_message");
if(cljs.core.truth_(and__4251__auto__)){
return clojure.string.includes_QMARK_(prompt,"kudos");
} else {
return and__4251__auto__;
}
})())){
bot_35853.sendMessage(reply_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," appreciates you, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from","username"], null))),"!"].join(''));

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","kudos"], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","kudos"], null),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","kudos"], null),(1));
}

send_BANG__35854(reply_id,["Your current kudos points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reply_username,"points","kudos"], null)),"\uD83D\uDE80")))].join(''));
} else {
if(((((clojure.string.includes_QMARK_(prompt,"haha")) || (((clojure.string.includes_QMARK_(prompt,"hihi")) || (((clojure.string.includes_QMARK_(prompt,"lol")) || (clojure.string.includes_QMARK_(prompt,"lmao")))))))) && (clojure.string.includes_QMARK_(prompt,"@")))){
var seq__35305_35857 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (message,message__$1,player_id,reply_id,reply_username,player,is_bot_QMARK_,chat_id,chat_title,message__$2,_,raw_prompt,prompt,bot_35853,send_BANG__35854){
return (function (p1__35270_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__35270_SHARP_);
});})(message,message__$1,player_id,reply_id,reply_username,player,is_bot_QMARK_,chat_id,chat_title,message__$2,_,raw_prompt,prompt,bot_35853,send_BANG__35854))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.vec(cljs.core.re_seq(/\B\@\w+/,raw_prompt)))));
var chunk__35306_35858 = null;
var count__35307_35859 = (0);
var i__35308_35860 = (0);
while(true){
if((i__35308_35860 < count__35307_35859)){
var person_35861 = chunk__35306_35858.cljs$core$IIndexed$_nth$arity$2(null,i__35308_35860);
var person_id_35862 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35861,"id"], null));
bot_35853.sendMessage(person_id_35862,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," liked your joke, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from","username"], null))),"!"].join(''));

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35861,"points","funny"], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35861,"points","funny"], null),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35861,"points","funny"], null),(1));
}

send_BANG__35854(person_id_35862,["Your current funny points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35861,"points","funny"], null)),"\uD83D\uDE06")))].join(''));


var G__35863 = seq__35305_35857;
var G__35864 = chunk__35306_35858;
var G__35865 = count__35307_35859;
var G__35866 = (i__35308_35860 + (1));
seq__35305_35857 = G__35863;
chunk__35306_35858 = G__35864;
count__35307_35859 = G__35865;
i__35308_35860 = G__35866;
continue;
} else {
var temp__5804__auto___35867 = cljs.core.seq(seq__35305_35857);
if(temp__5804__auto___35867){
var seq__35305_35868__$1 = temp__5804__auto___35867;
if(cljs.core.chunked_seq_QMARK_(seq__35305_35868__$1)){
var c__4679__auto___35869 = cljs.core.chunk_first(seq__35305_35868__$1);
var G__35870 = cljs.core.chunk_rest(seq__35305_35868__$1);
var G__35871 = c__4679__auto___35869;
var G__35872 = cljs.core.count(c__4679__auto___35869);
var G__35873 = (0);
seq__35305_35857 = G__35870;
chunk__35306_35858 = G__35871;
count__35307_35859 = G__35872;
i__35308_35860 = G__35873;
continue;
} else {
var person_35874 = cljs.core.first(seq__35305_35868__$1);
var person_id_35875 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35874,"id"], null));
bot_35853.sendMessage(person_id_35875,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," liked your joke, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(message__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reply_to_message","from","username"], null))),"!"].join(''));

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35874,"points","funny"], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35874,"points","funny"], null),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35874,"points","funny"], null),(1));
}

send_BANG__35854(person_id_35875,["Your current funny points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35874,"points","funny"], null)),"\uD83D\uDE06")))].join(''));


var G__35876 = cljs.core.next(seq__35305_35868__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35305_35857 = G__35876;
chunk__35306_35858 = G__35877;
count__35307_35859 = G__35878;
i__35308_35860 = G__35879;
continue;
}
} else {
}
}
break;
}
} else {
if(((clojure.string.includes_QMARK_(prompt,"kudos")) && (clojure.string.includes_QMARK_(prompt,"@")))){
var image_generation_35880 = (function (){try{return shadow.js.shim.module$stability_client.generateAsync(({"prompt": raw_prompt, "apiKey": "sk-8EDz4BSQ54XE5aHlVaYIWTLslgjzT5wBNtUpkfSiBYuwrP7r"}));
}catch (e35317){if((e35317 instanceof Error)){
var e__29854__auto__ = e35317;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error: ",e__29854__auto__], 0));
} else {
throw e35317;

}
}})().then((function (res){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_35397){
var state_val_35398 = (state_35397[(1)]);
if((state_val_35398 === (7))){
var inst_35374 = (state_35397[(7)]);
var inst_35378 = cljs.core.ex_data(inst_35374);
var inst_35379 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35378);
var inst_35380 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35379,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_35397__$1 = state_35397;
var statearr_35407_35881 = state_35397__$1;
(statearr_35407_35881[(2)] = inst_35380);

(statearr_35407_35881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (1))){
var state_35397__$1 = state_35397;
var statearr_35409_35882 = state_35397__$1;
(statearr_35409_35882[(2)] = null);

(statearr_35409_35882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (4))){
var inst_35318 = (state_35397[(2)]);
var inst_35319 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Async Error: ",inst_35318], 0));
var state_35397__$1 = state_35397;
var statearr_35412_35883 = state_35397__$1;
(statearr_35412_35883[(2)] = inst_35319);

(statearr_35412_35883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (6))){
var inst_35375 = (state_35397[(8)]);
var inst_35374 = (state_35397[(7)]);
var inst_35374__$1 = (state_35397[(2)]);
var inst_35375__$1 = (inst_35374__$1 instanceof cljs.core.ExceptionInfo);
var state_35397__$1 = (function (){var statearr_35414 = state_35397;
(statearr_35414[(8)] = inst_35375__$1);

(statearr_35414[(7)] = inst_35374__$1);

return statearr_35414;
})();
if(cljs.core.truth_(inst_35375__$1)){
var statearr_35416_35884 = state_35397__$1;
(statearr_35416_35884[(1)] = (7));

} else {
var statearr_35417_35885 = state_35397__$1;
(statearr_35417_35885[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (3))){
var inst_35392 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35397__$1,inst_35392);
} else {
if((state_val_35398 === (12))){
var inst_35389 = (state_35397[(2)]);
var ___$1 = (function (){var statearr_35420 = state_35397;
(statearr_35420[(4)] = cljs.core.rest((state_35397[(4)])));

return statearr_35420;
})();
var state_35397__$1 = state_35397;
var statearr_35421_35886 = state_35397__$1;
(statearr_35421_35886[(2)] = inst_35389);

(statearr_35421_35886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (2))){
var ___$1 = (function (){var statearr_35423 = state_35397;
(statearr_35423[(4)] = cljs.core.cons((5),(state_35397[(4)])));

return statearr_35423;
})();
var inst_35325 = brave.swords.obj__GT_clj(res);
var inst_35326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35328 = ["images",(0)];
var inst_35329 = (new cljs.core.PersistentVector(null,2,(5),inst_35326,inst_35328,null));
var inst_35330 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_35325,inst_35329);
var inst_35331 = brave.swords.obj__GT_clj(inst_35330);
var inst_35332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35331,"filePath");
var inst_35369 = ["From ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(player),", with love!"].join('');
var inst_35370 = ({"caption":inst_35369});
var inst_35371 = bot_35853.sendPhoto(chat_id,inst_35332,inst_35370);
var inst_35372 = cljs.core.async.interop.p__GT_c(inst_35371);
var state_35397__$1 = state_35397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35397__$1,(6),inst_35372);
} else {
if((state_val_35398 === (11))){
var inst_35374 = (state_35397[(7)]);
var state_35397__$1 = state_35397;
var statearr_35431_35887 = state_35397__$1;
(statearr_35431_35887[(2)] = inst_35374);

(statearr_35431_35887[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (9))){
var inst_35383 = (state_35397[(2)]);
var state_35397__$1 = state_35397;
if(cljs.core.truth_(inst_35383)){
var statearr_35434_35888 = state_35397__$1;
(statearr_35434_35888[(1)] = (10));

} else {
var statearr_35435_35889 = state_35397__$1;
(statearr_35435_35889[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (5))){
var ___$1 = (function (){var statearr_35437 = state_35397;
(statearr_35437[(4)] = cljs.core.rest((state_35397[(4)])));

return statearr_35437;
})();
var state_35397__$1 = state_35397;
var ex35430 = (state_35397__$1[(2)]);
var statearr_35439_35890 = state_35397__$1;
(statearr_35439_35890[(5)] = ex35430);


if((ex35430 instanceof Error)){
var statearr_35451_35891 = state_35397__$1;
(statearr_35451_35891[(1)] = (4));

(statearr_35451_35891[(5)] = null);

} else {
throw ex35430;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (10))){
var inst_35374 = (state_35397[(7)]);
var inst_35386 = (function(){throw inst_35374})();
var state_35397__$1 = state_35397;
var statearr_35452_35892 = state_35397__$1;
(statearr_35452_35892[(2)] = inst_35386);

(statearr_35452_35892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35398 === (8))){
var inst_35375 = (state_35397[(8)]);
var state_35397__$1 = state_35397;
var statearr_35453_35893 = state_35397__$1;
(statearr_35453_35893[(2)] = inst_35375);

(statearr_35453_35893[(1)] = (9));


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
});
return (function() {
var backend$server$start_BANG__$_state_machine__33326__auto__ = null;
var backend$server$start_BANG__$_state_machine__33326__auto____0 = (function (){
var statearr_35454 = [null,null,null,null,null,null,null,null,null];
(statearr_35454[(0)] = backend$server$start_BANG__$_state_machine__33326__auto__);

(statearr_35454[(1)] = (1));

return statearr_35454;
});
var backend$server$start_BANG__$_state_machine__33326__auto____1 = (function (state_35397){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_35397);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e35455){var ex__33329__auto__ = e35455;
var statearr_35456_35894 = state_35397;
(statearr_35456_35894[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_35397[(4)]))){
var statearr_35457_35895 = state_35397;
(statearr_35457_35895[(1)] = cljs.core.first((state_35397[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35896 = state_35397;
state_35397 = G__35896;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
backend$server$start_BANG__$_state_machine__33326__auto__ = function(state_35397){
switch(arguments.length){
case 0:
return backend$server$start_BANG__$_state_machine__33326__auto____0.call(this);
case 1:
return backend$server$start_BANG__$_state_machine__33326__auto____1.call(this,state_35397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = backend$server$start_BANG__$_state_machine__33326__auto____0;
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = backend$server$start_BANG__$_state_machine__33326__auto____1;
return backend$server$start_BANG__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_35458 = f__33397__auto__();
(statearr_35458[(6)] = c__33396__auto__);

return statearr_35458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
})()], 0));
}));
var seq__35459_35897 = cljs.core.seq(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (image_generation_35880,message,message__$1,player_id,reply_id,reply_username,player,is_bot_QMARK_,chat_id,chat_title,message__$2,_,raw_prompt,prompt,bot_35853,send_BANG__35854){
return (function (p1__35271_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__35271_SHARP_);
});})(image_generation_35880,message,message__$1,player_id,reply_id,reply_username,player,is_bot_QMARK_,chat_id,chat_title,message__$2,_,raw_prompt,prompt,bot_35853,send_BANG__35854))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,cljs.core.vec(cljs.core.re_seq(/\B\@\w+/,raw_prompt)))));
var chunk__35460_35898 = null;
var count__35461_35899 = (0);
var i__35462_35900 = (0);
while(true){
if((i__35462_35900 < count__35461_35899)){
var person_35901 = chunk__35460_35898.cljs$core$IIndexed$_nth$arity$2(null,i__35462_35900);
var person_id_35902 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35901,"id"], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["kudos to",person_35901], 0));

bot_35853.sendMessage(person_id_35902,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," appreciates you, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(person_35901),"!"].join(''));

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35901,"points","kudos"], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35901,"points","kudos"], null),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35901,"points","kudos"], null),(1));
}

send_BANG__35854(person_id_35902,["Your current kudos points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35901,"points","kudos"], null)),"\uD83D\uDE80")))].join(''));


var G__35903 = seq__35459_35897;
var G__35904 = chunk__35460_35898;
var G__35905 = count__35461_35899;
var G__35906 = (i__35462_35900 + (1));
seq__35459_35897 = G__35903;
chunk__35460_35898 = G__35904;
count__35461_35899 = G__35905;
i__35462_35900 = G__35906;
continue;
} else {
var temp__5804__auto___35907 = cljs.core.seq(seq__35459_35897);
if(temp__5804__auto___35907){
var seq__35459_35908__$1 = temp__5804__auto___35907;
if(cljs.core.chunked_seq_QMARK_(seq__35459_35908__$1)){
var c__4679__auto___35909 = cljs.core.chunk_first(seq__35459_35908__$1);
var G__35910 = cljs.core.chunk_rest(seq__35459_35908__$1);
var G__35911 = c__4679__auto___35909;
var G__35912 = cljs.core.count(c__4679__auto___35909);
var G__35913 = (0);
seq__35459_35897 = G__35910;
chunk__35460_35898 = G__35911;
count__35461_35899 = G__35912;
i__35462_35900 = G__35913;
continue;
} else {
var person_35914 = cljs.core.first(seq__35459_35908__$1);
var person_id_35915 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35914,"id"], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["kudos to",person_35914], 0));

bot_35853.sendMessage(person_id_35915,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(player)," appreciates you, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(person_35914),"!"].join(''));

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35914,"points","kudos"], null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35914,"points","kudos"], null),cljs.core.inc);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(backend.server.players,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35914,"points","kudos"], null),(1));
}

send_BANG__35854(person_id_35915,["Your current kudos points: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(backend.server.players),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [person_35914,"points","kudos"], null)),"\uD83D\uDE80")))].join(''));


var G__35916 = cljs.core.next(seq__35459_35908__$1);
var G__35917 = null;
var G__35918 = (0);
var G__35919 = (0);
seq__35459_35897 = G__35916;
chunk__35460_35898 = G__35917;
count__35461_35899 = G__35918;
i__35462_35900 = G__35919;
continue;
}
} else {
}
}
break;
}
} else {

}
}
}
}
}

console.log(cljs.core.clj__GT_js(cljs.core.deref(backend.server.players)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prompt,"/test234")){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_35533){
var state_val_35534 = (state_35533[(1)]);
if((state_val_35534 === (7))){
var inst_35515 = (state_35533[(7)]);
var inst_35518 = cljs.core.ex_data(inst_35515);
var inst_35519 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35518);
var inst_35520 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35519,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_35533__$1 = state_35533;
var statearr_35535_35920 = state_35533__$1;
(statearr_35535_35920[(2)] = inst_35520);

(statearr_35535_35920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (1))){
var state_35533__$1 = state_35533;
var statearr_35536_35921 = state_35533__$1;
(statearr_35536_35921[(2)] = null);

(statearr_35536_35921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (4))){
var inst_35469 = (state_35533[(2)]);
var inst_35470 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Async Error: ",inst_35469], 0));
var state_35533__$1 = state_35533;
var statearr_35538_35922 = state_35533__$1;
(statearr_35538_35922[(2)] = inst_35470);

(statearr_35538_35922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (6))){
var inst_35515 = (state_35533[(7)]);
var inst_35516 = (state_35533[(8)]);
var inst_35515__$1 = (state_35533[(2)]);
var inst_35516__$1 = (inst_35515__$1 instanceof cljs.core.ExceptionInfo);
var state_35533__$1 = (function (){var statearr_35541 = state_35533;
(statearr_35541[(7)] = inst_35515__$1);

(statearr_35541[(8)] = inst_35516__$1);

return statearr_35541;
})();
if(cljs.core.truth_(inst_35516__$1)){
var statearr_35542_35923 = state_35533__$1;
(statearr_35542_35923[(1)] = (7));

} else {
var statearr_35543_35924 = state_35533__$1;
(statearr_35543_35924[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (3))){
var inst_35531 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35533__$1,inst_35531);
} else {
if((state_val_35534 === (12))){
var inst_35528 = (state_35533[(2)]);
var ___$1 = (function (){var statearr_35544 = state_35533;
(statearr_35544[(4)] = cljs.core.rest((state_35533[(4)])));

return statearr_35544;
})();
var state_35533__$1 = state_35533;
var statearr_35545_35925 = state_35533__$1;
(statearr_35545_35925[(2)] = inst_35528);

(statearr_35545_35925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (2))){
var ___$1 = (function (){var statearr_35546 = state_35533;
(statearr_35546[(4)] = cljs.core.cons((5),(state_35533[(4)])));

return statearr_35546;
})();
var inst_35482 = ({"text":"Level 1"});
var inst_35483 = [inst_35482];
var inst_35486 = ({"text":"Level 2"});
var inst_35487 = [inst_35486];
var inst_35490 = ({"text":"Level 3"});
var inst_35491 = [inst_35490];
var inst_35494 = ({"text":"Level 4"});
var inst_35495 = [inst_35494];
var inst_35498 = ({"text":"Level 5"});
var inst_35499 = [inst_35498];
var inst_35502 = ({"text":"Level 6"});
var inst_35503 = [inst_35502];
var inst_35506 = ({"text":"Level 7"});
var inst_35507 = [inst_35506];
var inst_35508 = [inst_35483,inst_35487,inst_35491,inst_35495,inst_35499,inst_35503,inst_35507];
var inst_35509 = ({"keyboard":inst_35508});
var inst_35510 = JSON.stringify(inst_35509);
var inst_35511 = ({"reply_markup":inst_35510});
var inst_35512 = bot_35853.sendMessage(chat_id,"test",inst_35511);
var inst_35513 = cljs.core.async.interop.p__GT_c(inst_35512);
var state_35533__$1 = state_35533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35533__$1,(6),inst_35513);
} else {
if((state_val_35534 === (11))){
var inst_35515 = (state_35533[(7)]);
var state_35533__$1 = state_35533;
var statearr_35548_35926 = state_35533__$1;
(statearr_35548_35926[(2)] = inst_35515);

(statearr_35548_35926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (9))){
var inst_35523 = (state_35533[(2)]);
var state_35533__$1 = state_35533;
if(cljs.core.truth_(inst_35523)){
var statearr_35549_35927 = state_35533__$1;
(statearr_35549_35927[(1)] = (10));

} else {
var statearr_35550_35928 = state_35533__$1;
(statearr_35550_35928[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (5))){
var ___$1 = (function (){var statearr_35551 = state_35533;
(statearr_35551[(4)] = cljs.core.rest((state_35533[(4)])));

return statearr_35551;
})();
var state_35533__$1 = state_35533;
var ex35547 = (state_35533__$1[(2)]);
var statearr_35552_35929 = state_35533__$1;
(statearr_35552_35929[(5)] = ex35547);


if((ex35547 instanceof Error)){
var statearr_35553_35930 = state_35533__$1;
(statearr_35553_35930[(1)] = (4));

(statearr_35553_35930[(5)] = null);

} else {
throw ex35547;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (10))){
var inst_35515 = (state_35533[(7)]);
var inst_35525 = (function(){throw inst_35515})();
var state_35533__$1 = state_35533;
var statearr_35554_35931 = state_35533__$1;
(statearr_35554_35931[(2)] = inst_35525);

(statearr_35554_35931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35534 === (8))){
var inst_35516 = (state_35533[(8)]);
var state_35533__$1 = state_35533;
var statearr_35555_35932 = state_35533__$1;
(statearr_35555_35932[(2)] = inst_35516);

(statearr_35555_35932[(1)] = (9));


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
});
return (function() {
var backend$server$start_BANG__$_state_machine__33326__auto__ = null;
var backend$server$start_BANG__$_state_machine__33326__auto____0 = (function (){
var statearr_35556 = [null,null,null,null,null,null,null,null,null];
(statearr_35556[(0)] = backend$server$start_BANG__$_state_machine__33326__auto__);

(statearr_35556[(1)] = (1));

return statearr_35556;
});
var backend$server$start_BANG__$_state_machine__33326__auto____1 = (function (state_35533){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_35533);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e35557){var ex__33329__auto__ = e35557;
var statearr_35558_35933 = state_35533;
(statearr_35558_35933[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_35533[(4)]))){
var statearr_35559_35934 = state_35533;
(statearr_35559_35934[(1)] = cljs.core.first((state_35533[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35935 = state_35533;
state_35533 = G__35935;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
backend$server$start_BANG__$_state_machine__33326__auto__ = function(state_35533){
switch(arguments.length){
case 0:
return backend$server$start_BANG__$_state_machine__33326__auto____0.call(this);
case 1:
return backend$server$start_BANG__$_state_machine__33326__auto____1.call(this,state_35533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = backend$server$start_BANG__$_state_machine__33326__auto____0;
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = backend$server$start_BANG__$_state_machine__33326__auto____1;
return backend$server$start_BANG__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_35560 = f__33397__auto__();
(statearr_35560[(6)] = c__33396__auto__);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
})()], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prompt,"/inline234")){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_35657){
var state_val_35658 = (state_35657[(1)]);
if((state_val_35658 === (7))){
var inst_35636 = (state_35657[(7)]);
var inst_35641 = cljs.core.ex_data(inst_35636);
var inst_35642 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35641);
var inst_35643 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35642,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_35657__$1 = state_35657;
var statearr_35663_35936 = state_35657__$1;
(statearr_35663_35936[(2)] = inst_35643);

(statearr_35663_35936[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (1))){
var state_35657__$1 = state_35657;
var statearr_35664_35937 = state_35657__$1;
(statearr_35664_35937[(2)] = null);

(statearr_35664_35937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (4))){
var inst_35561 = (state_35657[(2)]);
var inst_35562 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Async Error: ",inst_35561], 0));
var state_35657__$1 = state_35657;
var statearr_35666_35938 = state_35657__$1;
(statearr_35666_35938[(2)] = inst_35562);

(statearr_35666_35938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (6))){
var inst_35636 = (state_35657[(7)]);
var inst_35638 = (state_35657[(8)]);
var inst_35636__$1 = (state_35657[(2)]);
var inst_35638__$1 = (inst_35636__$1 instanceof cljs.core.ExceptionInfo);
var state_35657__$1 = (function (){var statearr_35668 = state_35657;
(statearr_35668[(7)] = inst_35636__$1);

(statearr_35668[(8)] = inst_35638__$1);

return statearr_35668;
})();
if(cljs.core.truth_(inst_35638__$1)){
var statearr_35670_35939 = state_35657__$1;
(statearr_35670_35939[(1)] = (7));

} else {
var statearr_35671_35940 = state_35657__$1;
(statearr_35671_35940[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (3))){
var inst_35654 = (state_35657[(2)]);
var state_35657__$1 = state_35657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35657__$1,inst_35654);
} else {
if((state_val_35658 === (12))){
var inst_35651 = (state_35657[(2)]);
var ___$1 = (function (){var statearr_35676 = state_35657;
(statearr_35676[(4)] = cljs.core.rest((state_35657[(4)])));

return statearr_35676;
})();
var state_35657__$1 = state_35657;
var statearr_35677_35941 = state_35657__$1;
(statearr_35677_35941[(2)] = inst_35651);

(statearr_35677_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (2))){
var ___$1 = (function (){var statearr_35680 = state_35657;
(statearr_35680[(4)] = cljs.core.cons((5),(state_35657[(4)])));

return statearr_35680;
})();
var inst_35575 = ({"text":"Brainstorm with peers","callback_data":"brainstorm"});
var inst_35576 = [inst_35575];
var inst_35579 = ({"text":"Grow your team","callback_data":"growyouteam"});
var inst_35580 = [inst_35579];
var inst_35584 = ({"text":"Start a company","callback_data":"startup"});
var inst_35585 = [inst_35584];
var inst_35588 = ({"text":"Business development","callback_data":"bizdev"});
var inst_35589 = [inst_35588];
var inst_35593 = ({"text":"Invest","callback_data":"invest"});
var inst_35594 = [inst_35593];
var inst_35598 = ({"text":"Explore new projects","callback_data":"explore"});
var inst_35599 = [inst_35598];
var inst_35602 = ({"text":"Mentor others","callback_data":"mentor"});
var inst_35603 = [inst_35602];
var inst_35607 = ({"text":"Organize events","callback_data":"organizeevents"});
var inst_35608 = [inst_35607];
var inst_35612 = ({"text":"Raise funding","callback_data":"raise"});
var inst_35613 = [inst_35612];
var inst_35617 = ({"text":"Find a cofounder","callback_data":"cofounder"});
var inst_35618 = [inst_35617];
var inst_35622 = ({"text":"Meet interesting people","callback_data":"meet"});
var inst_35623 = [inst_35622];
var inst_35626 = ({"text":"Find a job","callback_data":"findajob"});
var inst_35627 = [inst_35626];
var inst_35628 = [inst_35576,inst_35580,inst_35585,inst_35589,inst_35594,inst_35599,inst_35603,inst_35608,inst_35613,inst_35618,inst_35623,inst_35627];
var inst_35629 = ({"one_time_keyboard":true,"inline_keyboard":inst_35628});
var inst_35631 = JSON.stringify(inst_35629);
var inst_35632 = ({"reply_markup":inst_35631});
var inst_35633 = bot_35853.sendMessage(chat_id,"test",inst_35632);
var inst_35634 = cljs.core.async.interop.p__GT_c(inst_35633);
var state_35657__$1 = state_35657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35657__$1,(6),inst_35634);
} else {
if((state_val_35658 === (11))){
var inst_35636 = (state_35657[(7)]);
var state_35657__$1 = state_35657;
var statearr_35685_35942 = state_35657__$1;
(statearr_35685_35942[(2)] = inst_35636);

(statearr_35685_35942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (9))){
var inst_35646 = (state_35657[(2)]);
var state_35657__$1 = state_35657;
if(cljs.core.truth_(inst_35646)){
var statearr_35688_35943 = state_35657__$1;
(statearr_35688_35943[(1)] = (10));

} else {
var statearr_35689_35944 = state_35657__$1;
(statearr_35689_35944[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (5))){
var ___$1 = (function (){var statearr_35691 = state_35657;
(statearr_35691[(4)] = cljs.core.rest((state_35657[(4)])));

return statearr_35691;
})();
var state_35657__$1 = state_35657;
var ex35683 = (state_35657__$1[(2)]);
var statearr_35693_35945 = state_35657__$1;
(statearr_35693_35945[(5)] = ex35683);


if((ex35683 instanceof Error)){
var statearr_35696_35946 = state_35657__$1;
(statearr_35696_35946[(1)] = (4));

(statearr_35696_35946[(5)] = null);

} else {
throw ex35683;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (10))){
var inst_35636 = (state_35657[(7)]);
var inst_35648 = (function(){throw inst_35636})();
var state_35657__$1 = state_35657;
var statearr_35698_35947 = state_35657__$1;
(statearr_35698_35947[(2)] = inst_35648);

(statearr_35698_35947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35658 === (8))){
var inst_35638 = (state_35657[(8)]);
var state_35657__$1 = state_35657;
var statearr_35702_35948 = state_35657__$1;
(statearr_35702_35948[(2)] = inst_35638);

(statearr_35702_35948[(1)] = (9));


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
});
return (function() {
var backend$server$start_BANG__$_state_machine__33326__auto__ = null;
var backend$server$start_BANG__$_state_machine__33326__auto____0 = (function (){
var statearr_35704 = [null,null,null,null,null,null,null,null,null];
(statearr_35704[(0)] = backend$server$start_BANG__$_state_machine__33326__auto__);

(statearr_35704[(1)] = (1));

return statearr_35704;
});
var backend$server$start_BANG__$_state_machine__33326__auto____1 = (function (state_35657){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_35657);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e35706){var ex__33329__auto__ = e35706;
var statearr_35707_35949 = state_35657;
(statearr_35707_35949[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_35657[(4)]))){
var statearr_35708_35950 = state_35657;
(statearr_35708_35950[(1)] = cljs.core.first((state_35657[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35951 = state_35657;
state_35657 = G__35951;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
backend$server$start_BANG__$_state_machine__33326__auto__ = function(state_35657){
switch(arguments.length){
case 0:
return backend$server$start_BANG__$_state_machine__33326__auto____0.call(this);
case 1:
return backend$server$start_BANG__$_state_machine__33326__auto____1.call(this,state_35657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = backend$server$start_BANG__$_state_machine__33326__auto____0;
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = backend$server$start_BANG__$_state_machine__33326__auto____1;
return backend$server$start_BANG__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_35712 = f__33397__auto__();
(statearr_35712[(6)] = c__33396__auto__);

return statearr_35712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
})()], 0));
} else {
return null;
}
}));

bot_35853.on("inline_query",(function (data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INLINE QUERY ARRIVED"], 0));
}));

bot_35853.on("callback_query",(function (data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_35752){
var state_val_35753 = (state_35752[(1)]);
if((state_val_35753 === (7))){
var inst_35732 = (state_35752[(7)]);
var inst_35736 = cljs.core.ex_data(inst_35732);
var inst_35737 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_35736);
var inst_35738 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35737,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var state_35752__$1 = state_35752;
var statearr_35758_35952 = state_35752__$1;
(statearr_35758_35952[(2)] = inst_35738);

(statearr_35758_35952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (1))){
var state_35752__$1 = state_35752;
var statearr_35761_35953 = state_35752__$1;
(statearr_35761_35953[(2)] = null);

(statearr_35761_35953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (4))){
var inst_35715 = (state_35752[(2)]);
var inst_35716 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Async Error: ",inst_35715], 0));
var state_35752__$1 = state_35752;
var statearr_35763_35954 = state_35752__$1;
(statearr_35763_35954[(2)] = inst_35716);

(statearr_35763_35954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (6))){
var inst_35732 = (state_35752[(7)]);
var inst_35733 = (state_35752[(8)]);
var inst_35732__$1 = (state_35752[(2)]);
var inst_35733__$1 = (inst_35732__$1 instanceof cljs.core.ExceptionInfo);
var state_35752__$1 = (function (){var statearr_35765 = state_35752;
(statearr_35765[(7)] = inst_35732__$1);

(statearr_35765[(8)] = inst_35733__$1);

return statearr_35765;
})();
if(cljs.core.truth_(inst_35733__$1)){
var statearr_35766_35955 = state_35752__$1;
(statearr_35766_35955[(1)] = (7));

} else {
var statearr_35767_35956 = state_35752__$1;
(statearr_35767_35956[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (3))){
var inst_35749 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35752__$1,inst_35749);
} else {
if((state_val_35753 === (12))){
var inst_35746 = (state_35752[(2)]);
var _ = (function (){var statearr_35770 = state_35752;
(statearr_35770[(4)] = cljs.core.rest((state_35752[(4)])));

return statearr_35770;
})();
var state_35752__$1 = state_35752;
var statearr_35772_35957 = state_35752__$1;
(statearr_35772_35957[(2)] = inst_35746);

(statearr_35772_35957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (2))){
var _ = (function (){var statearr_35773 = state_35752;
(statearr_35773[(4)] = cljs.core.cons((5),(state_35752[(4)])));

return statearr_35773;
})();
var inst_35726 = brave.swords.obj__GT_clj(data);
var inst_35727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35726,"id");
var inst_35728 = ({"callback_query_id":inst_35727,"text":"oki level 1"});
var inst_35729 = bot_35853.answerCallbackQuery(inst_35728);
var inst_35730 = cljs.core.async.interop.p__GT_c(inst_35729);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35752__$1,(6),inst_35730);
} else {
if((state_val_35753 === (11))){
var inst_35732 = (state_35752[(7)]);
var state_35752__$1 = state_35752;
var statearr_35777_35958 = state_35752__$1;
(statearr_35777_35958[(2)] = inst_35732);

(statearr_35777_35958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (9))){
var inst_35741 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35741)){
var statearr_35779_35959 = state_35752__$1;
(statearr_35779_35959[(1)] = (10));

} else {
var statearr_35780_35960 = state_35752__$1;
(statearr_35780_35960[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (5))){
var _ = (function (){var statearr_35782 = state_35752;
(statearr_35782[(4)] = cljs.core.rest((state_35752[(4)])));

return statearr_35782;
})();
var state_35752__$1 = state_35752;
var ex35775 = (state_35752__$1[(2)]);
var statearr_35783_35961 = state_35752__$1;
(statearr_35783_35961[(5)] = ex35775);


if((ex35775 instanceof Error)){
var statearr_35787_35962 = state_35752__$1;
(statearr_35787_35962[(1)] = (4));

(statearr_35787_35962[(5)] = null);

} else {
throw ex35775;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (10))){
var inst_35732 = (state_35752[(7)]);
var inst_35743 = (function(){throw inst_35732})();
var state_35752__$1 = state_35752;
var statearr_35790_35963 = state_35752__$1;
(statearr_35790_35963[(2)] = inst_35743);

(statearr_35790_35963[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (8))){
var inst_35733 = (state_35752[(8)]);
var state_35752__$1 = state_35752;
var statearr_35792_35964 = state_35752__$1;
(statearr_35792_35964[(2)] = inst_35733);

(statearr_35792_35964[(1)] = (9));


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
});
return (function() {
var backend$server$start_BANG__$_state_machine__33326__auto__ = null;
var backend$server$start_BANG__$_state_machine__33326__auto____0 = (function (){
var statearr_35794 = [null,null,null,null,null,null,null,null,null];
(statearr_35794[(0)] = backend$server$start_BANG__$_state_machine__33326__auto__);

(statearr_35794[(1)] = (1));

return statearr_35794;
});
var backend$server$start_BANG__$_state_machine__33326__auto____1 = (function (state_35752){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_35752);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e35795){var ex__33329__auto__ = e35795;
var statearr_35796_35965 = state_35752;
(statearr_35796_35965[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_35752[(4)]))){
var statearr_35798_35966 = state_35752;
(statearr_35798_35966[(1)] = cljs.core.first((state_35752[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35967 = state_35752;
state_35752 = G__35967;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
backend$server$start_BANG__$_state_machine__33326__auto__ = function(state_35752){
switch(arguments.length){
case 0:
return backend$server$start_BANG__$_state_machine__33326__auto____0.call(this);
case 1:
return backend$server$start_BANG__$_state_machine__33326__auto____1.call(this,state_35752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = backend$server$start_BANG__$_state_machine__33326__auto____0;
backend$server$start_BANG__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = backend$server$start_BANG__$_state_machine__33326__auto____1;
return backend$server$start_BANG__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_35802 = f__33397__auto__();
(statearr_35802[(6)] = c__33396__auto__);

return statearr_35802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
})()], 0));
}));

if(cljs.core.truth_(cljs.core.deref(backend.server.server))){
cljs.core.deref(backend.server.server).listen(config.port,(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Port: ",config.port], 0));
}));
} else {
cljs.core.reset_BANG_(backend.server.server,backend.server.start_server());
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Code updated."], 0));
});

//# sourceMappingURL=backend.server.js.map
