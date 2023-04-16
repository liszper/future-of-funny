goog.provide('app.core');
app.core.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.core.navigation = (function app$core$navigation(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Home Page"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/page-one"], null),"Page One"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"5px"], null)], null)], null)], null);
});
app.core.home_page = (function app$core$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.navigation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Home Page"], null)], null);
});
app.core.page_one = (function app$core$page_one(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.navigation], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Page One"], null)], null);
});
app.core.view = (function app$core$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(app.core.current_page)], null)], null);
});
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"/");
var action__24824__auto___27335 = (function (params__24825__auto__){
if(cljs.core.map_QMARK_(params__24825__auto__)){
var map__27319 = params__24825__auto__;
var map__27319__$1 = cljs.core.__destructure_map(map__27319);
console.log("home page");

return cljs.core.reset_BANG_(app.core.current_page,app.core.home_page);
} else {
if(cljs.core.vector_QMARK_(params__24825__auto__)){
var vec__27320 = params__24825__auto__;
console.log("home page");

return cljs.core.reset_BANG_(app.core.current_page,app.core.home_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__24824__auto___27335);

var action__24824__auto___27339 = (function (params__24825__auto__){
if(cljs.core.map_QMARK_(params__24825__auto__)){
var map__27327 = params__24825__auto__;
var map__27327__$1 = cljs.core.__destructure_map(map__27327);
console.log("page-one");

return cljs.core.reset_BANG_(app.core.current_page,app.core.page_one);
} else {
if(cljs.core.vector_QMARK_(params__24825__auto__)){
var vec__27331 = params__24825__auto__;
console.log("page-one");

return cljs.core.reset_BANG_(app.core.current_page,app.core.page_one);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/page-one",action__24824__auto___27339);

cljs.core.reset_BANG_(app.core.current_page,app.core.home_page);

//# sourceMappingURL=app.core.js.map
