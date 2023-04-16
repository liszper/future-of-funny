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
var G__47158__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__47158 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47159__i = 0, G__47159__a = new Array(arguments.length -  0);
while (G__47159__i < G__47159__a.length) {G__47159__a[G__47159__i] = arguments[G__47159__i + 0]; ++G__47159__i;}
  args = new cljs.core.IndexedSeq(G__47159__a,0,null);
} 
return G__47158__delegate.call(this,args);};
G__47158.cljs$lang$maxFixedArity = 0;
G__47158.cljs$lang$applyTo = (function (arglist__47160){
var args = cljs.core.seq(arglist__47160);
return G__47158__delegate(args);
});
G__47158.cljs$core$IFn$_invoke$arity$variadic = G__47158__delegate;
return G__47158;
})()
);

(o.error = (function() { 
var G__47161__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__47161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47162__i = 0, G__47162__a = new Array(arguments.length -  0);
while (G__47162__i < G__47162__a.length) {G__47162__a[G__47162__i] = arguments[G__47162__i + 0]; ++G__47162__i;}
  args = new cljs.core.IndexedSeq(G__47162__a,0,null);
} 
return G__47161__delegate.call(this,args);};
G__47161.cljs$lang$maxFixedArity = 0;
G__47161.cljs$lang$applyTo = (function (arglist__47164){
var args = cljs.core.seq(arglist__47164);
return G__47161__delegate(args);
});
G__47161.cljs$core$IFn$_invoke$arity$variadic = G__47161__delegate;
return G__47161;
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
