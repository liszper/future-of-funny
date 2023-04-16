goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45999){
var map__46000 = p__45999;
var map__46000__$1 = cljs.core.__destructure_map(map__46000);
var m = map__46000__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46000__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46000__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46004_46378 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46005_46379 = null;
var count__46006_46380 = (0);
var i__46007_46381 = (0);
while(true){
if((i__46007_46381 < count__46006_46380)){
var f_46382 = chunk__46005_46379.cljs$core$IIndexed$_nth$arity$2(null,i__46007_46381);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46382], 0));


var G__46383 = seq__46004_46378;
var G__46384 = chunk__46005_46379;
var G__46385 = count__46006_46380;
var G__46386 = (i__46007_46381 + (1));
seq__46004_46378 = G__46383;
chunk__46005_46379 = G__46384;
count__46006_46380 = G__46385;
i__46007_46381 = G__46386;
continue;
} else {
var temp__5804__auto___46388 = cljs.core.seq(seq__46004_46378);
if(temp__5804__auto___46388){
var seq__46004_46389__$1 = temp__5804__auto___46388;
if(cljs.core.chunked_seq_QMARK_(seq__46004_46389__$1)){
var c__4679__auto___46390 = cljs.core.chunk_first(seq__46004_46389__$1);
var G__46391 = cljs.core.chunk_rest(seq__46004_46389__$1);
var G__46392 = c__4679__auto___46390;
var G__46393 = cljs.core.count(c__4679__auto___46390);
var G__46394 = (0);
seq__46004_46378 = G__46391;
chunk__46005_46379 = G__46392;
count__46006_46380 = G__46393;
i__46007_46381 = G__46394;
continue;
} else {
var f_46395 = cljs.core.first(seq__46004_46389__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46395], 0));


var G__46396 = cljs.core.next(seq__46004_46389__$1);
var G__46397 = null;
var G__46398 = (0);
var G__46399 = (0);
seq__46004_46378 = G__46396;
chunk__46005_46379 = G__46397;
count__46006_46380 = G__46398;
i__46007_46381 = G__46399;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46400 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46400], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46400)))?cljs.core.second(arglists_46400):arglists_46400)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46020_46406 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46021_46407 = null;
var count__46022_46408 = (0);
var i__46023_46409 = (0);
while(true){
if((i__46023_46409 < count__46022_46408)){
var vec__46039_46410 = chunk__46021_46407.cljs$core$IIndexed$_nth$arity$2(null,i__46023_46409);
var name_46411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46039_46410,(0),null);
var map__46042_46412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46039_46410,(1),null);
var map__46042_46413__$1 = cljs.core.__destructure_map(map__46042_46412);
var doc_46414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042_46413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46042_46413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46411], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46415], 0));

if(cljs.core.truth_(doc_46414)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46414], 0));
} else {
}


var G__46417 = seq__46020_46406;
var G__46418 = chunk__46021_46407;
var G__46419 = count__46022_46408;
var G__46420 = (i__46023_46409 + (1));
seq__46020_46406 = G__46417;
chunk__46021_46407 = G__46418;
count__46022_46408 = G__46419;
i__46023_46409 = G__46420;
continue;
} else {
var temp__5804__auto___46421 = cljs.core.seq(seq__46020_46406);
if(temp__5804__auto___46421){
var seq__46020_46422__$1 = temp__5804__auto___46421;
if(cljs.core.chunked_seq_QMARK_(seq__46020_46422__$1)){
var c__4679__auto___46423 = cljs.core.chunk_first(seq__46020_46422__$1);
var G__46424 = cljs.core.chunk_rest(seq__46020_46422__$1);
var G__46425 = c__4679__auto___46423;
var G__46426 = cljs.core.count(c__4679__auto___46423);
var G__46427 = (0);
seq__46020_46406 = G__46424;
chunk__46021_46407 = G__46425;
count__46022_46408 = G__46426;
i__46023_46409 = G__46427;
continue;
} else {
var vec__46044_46428 = cljs.core.first(seq__46020_46422__$1);
var name_46429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46044_46428,(0),null);
var map__46047_46430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46044_46428,(1),null);
var map__46047_46431__$1 = cljs.core.__destructure_map(map__46047_46430);
var doc_46432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047_46431__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46047_46431__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46429], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46433], 0));

if(cljs.core.truth_(doc_46432)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46432], 0));
} else {
}


var G__46435 = cljs.core.next(seq__46020_46422__$1);
var G__46436 = null;
var G__46437 = (0);
var G__46438 = (0);
seq__46020_46406 = G__46435;
chunk__46021_46407 = G__46436;
count__46022_46408 = G__46437;
i__46023_46409 = G__46438;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46055 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46056 = null;
var count__46057 = (0);
var i__46058 = (0);
while(true){
if((i__46058 < count__46057)){
var role = chunk__46056.cljs$core$IIndexed$_nth$arity$2(null,i__46058);
var temp__5804__auto___46439__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___46439__$1)){
var spec_46440 = temp__5804__auto___46439__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46440)], 0));
} else {
}


var G__46442 = seq__46055;
var G__46443 = chunk__46056;
var G__46444 = count__46057;
var G__46445 = (i__46058 + (1));
seq__46055 = G__46442;
chunk__46056 = G__46443;
count__46057 = G__46444;
i__46058 = G__46445;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__46055);
if(temp__5804__auto____$1){
var seq__46055__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46055__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46055__$1);
var G__46449 = cljs.core.chunk_rest(seq__46055__$1);
var G__46450 = c__4679__auto__;
var G__46451 = cljs.core.count(c__4679__auto__);
var G__46452 = (0);
seq__46055 = G__46449;
chunk__46056 = G__46450;
count__46057 = G__46451;
i__46058 = G__46452;
continue;
} else {
var role = cljs.core.first(seq__46055__$1);
var temp__5804__auto___46453__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___46453__$2)){
var spec_46454 = temp__5804__auto___46453__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46454)], 0));
} else {
}


var G__46455 = cljs.core.next(seq__46055__$1);
var G__46456 = null;
var G__46457 = (0);
var G__46458 = (0);
seq__46055 = G__46455;
chunk__46056 = G__46456;
count__46057 = G__46457;
i__46058 = G__46458;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46459 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46460 = cljs.core.ex_cause(t);
via = G__46459;
t = G__46460;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46252 = datafied_throwable;
var map__46252__$1 = cljs.core.__destructure_map(map__46252);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46252__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46252__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46252__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46253 = cljs.core.last(via);
var map__46253__$1 = cljs.core.__destructure_map(map__46253);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46253__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46253__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46253__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46254 = data;
var map__46254__$1 = cljs.core.__destructure_map(map__46254);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46254__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46255 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46255__$1 = cljs.core.__destructure_map(map__46255);
var top_data = map__46255__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46255__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46273 = phase;
var G__46273__$1 = (((G__46273 instanceof cljs.core.Keyword))?G__46273.fqn:null);
switch (G__46273__$1) {
case "read-source":
var map__46282 = data;
var map__46282__$1 = cljs.core.__destructure_map(map__46282);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46282__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46282__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46287 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46287__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46287,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46287);
var G__46287__$2 = (cljs.core.truth_((function (){var fexpr__46295 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46295.cljs$core$IFn$_invoke$arity$1 ? fexpr__46295.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46295.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46287__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46287__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46287__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46300 = top_data;
var G__46300__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46300,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46300);
var G__46300__$2 = (cljs.core.truth_((function (){var fexpr__46301 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46301.cljs$core$IFn$_invoke$arity$1 ? fexpr__46301.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46301.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46300__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46300__$1);
var G__46300__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46300__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46300__$2);
var G__46300__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46300__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46300__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46300__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46300__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46302 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46302,(3),null);
var G__46309 = top_data;
var G__46309__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46309,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46309);
var G__46309__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46309__$1);
var G__46309__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46309__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46309__$2);
var G__46309__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46309__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46309__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46309__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46309__$4;
}

break;
case "execution":
var vec__46311 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46311,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46233_SHARP_){
var or__4253__auto__ = (p1__46233_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__46314 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46314.cljs$core$IFn$_invoke$arity$1 ? fexpr__46314.cljs$core$IFn$_invoke$arity$1(p1__46233_SHARP_) : fexpr__46314.call(null,p1__46233_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__46315 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46315__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46315,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46315);
var G__46315__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46315__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46315__$1);
var G__46315__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46315__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46315__$2);
var G__46315__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46315__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46315__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46315__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46315__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46273__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46325){
var map__46326 = p__46325;
var map__46326__$1 = cljs.core.__destructure_map(map__46326);
var triage_data = map__46326__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46326__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46328 = phase;
var G__46328__$1 = (((G__46328 instanceof cljs.core.Keyword))?G__46328.fqn:null);
switch (G__46328__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46329 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46330 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46331 = loc;
var G__46332 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46333_46481 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46334_46482 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46335_46483 = true;
var _STAR_print_fn_STAR__temp_val__46336_46484 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46335_46483);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46336_46484);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46322_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46322_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46334_46482);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46333_46481);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46329,G__46330,G__46331,G__46332) : format.call(null,G__46329,G__46330,G__46331,G__46332));

break;
case "macroexpansion":
var G__46339 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46340 = cause_type;
var G__46341 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46342 = loc;
var G__46343 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46339,G__46340,G__46341,G__46342,G__46343) : format.call(null,G__46339,G__46340,G__46341,G__46342,G__46343));

break;
case "compile-syntax-check":
var G__46344 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46345 = cause_type;
var G__46346 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46347 = loc;
var G__46348 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46344,G__46345,G__46346,G__46347,G__46348) : format.call(null,G__46344,G__46345,G__46346,G__46347,G__46348));

break;
case "compilation":
var G__46349 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46350 = cause_type;
var G__46351 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46352 = loc;
var G__46353 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46349,G__46350,G__46351,G__46352,G__46353) : format.call(null,G__46349,G__46350,G__46351,G__46352,G__46353));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46354 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46355 = symbol;
var G__46356 = loc;
var G__46357 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46358_46489 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46359_46490 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46360_46491 = true;
var _STAR_print_fn_STAR__temp_val__46361_46492 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46360_46491);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46361_46492);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46324_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46324_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46359_46490);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46358_46489);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46354,G__46355,G__46356,G__46357) : format.call(null,G__46354,G__46355,G__46356,G__46357));
} else {
var G__46367 = "Execution error%s at %s(%s).\n%s\n";
var G__46368 = cause_type;
var G__46369 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46370 = loc;
var G__46371 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46367,G__46368,G__46369,G__46370,G__46371) : format.call(null,G__46367,G__46368,G__46369,G__46370,G__46371));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46328__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
