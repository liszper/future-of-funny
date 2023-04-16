goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__30534__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30535__i = 0, G__30535__a = new Array(arguments.length -  0);
while (G__30535__i < G__30535__a.length) {G__30535__a[G__30535__i] = arguments[G__30535__i + 0]; ++G__30535__i;}
  args = new cljs.core.IndexedSeq(G__30535__a,0,null);
} 
return G__30534__delegate.call(this,args);};
G__30534.cljs$lang$maxFixedArity = 0;
G__30534.cljs$lang$applyTo = (function (arglist__30536){
var args = cljs.core.seq(arglist__30536);
return G__30534__delegate(args);
});
G__30534.cljs$core$IFn$_invoke$arity$variadic = G__30534__delegate;
return G__30534;
})()
);

(o.error = (function() { 
var G__30538__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__30538 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30539__i = 0, G__30539__a = new Array(arguments.length -  0);
while (G__30539__i < G__30539__a.length) {G__30539__a[G__30539__i] = arguments[G__30539__i + 0]; ++G__30539__i;}
  args = new cljs.core.IndexedSeq(G__30539__a,0,null);
} 
return G__30538__delegate.call(this,args);};
G__30538.cljs$lang$maxFixedArity = 0;
G__30538.cljs$lang$applyTo = (function (arglist__30544){
var args = cljs.core.seq(arglist__30544);
return G__30538__delegate(args);
});
G__30538.cljs$core$IFn$_invoke$arity$variadic = G__30538__delegate;
return G__30538;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map