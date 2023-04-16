goog.provide('frontend.core');
cljs.core.enable_console_print_BANG_();
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","set","db/set",304605756),(function (db,p__50004){
var vec__50005 = p__50004;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50005,(2),null);
return cljs.core.assoc_in(db,path,value);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("db","get","db/get",1683179813),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__50008){
var vec__50009 = p__50008;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50009,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50009,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","merge","db/merge",-1804320559),(function (db,p__50012){
var vec__50013 = p__50012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50013,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50013,(1),null);
var value_to_merge = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50013,(2),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,path);
var new_value = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value,value_to_merge], 0));
return cljs.core.assoc_in(db,path,new_value);
}));
frontend.core.start_BANG_ = (function frontend$core$start_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.app.view], null),document.getElementById("app"));

return frontend.ws.connect(frontend.app.ws_handler);
});
pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core.dispatch_BANG_,(function (x){
if(cljs.core.truth_(secretary.core.locate_route(x))){
return x;
} else {
return null;
}
}));

//# sourceMappingURL=frontend.core.js.map
