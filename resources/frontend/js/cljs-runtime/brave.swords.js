goog.provide('brave.swords');
goog.scope(function(){
  brave.swords.goog$module$goog$async$Throttle = goog.module.get('goog.async.Throttle');
});
brave.swords.timestamp = (function brave$swords$timestamp(){
return (new Date()).getTime();
});
brave.swords.nil__GT_str = (function brave$swords$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});
brave.swords.format_STAR_ = (function brave$swords$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__4253__auto__ = fmt;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(brave.swords.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});
brave.swords.formato = (function brave$swords$formato(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48752 = arguments.length;
var i__4865__auto___48753 = (0);
while(true){
if((i__4865__auto___48753 < len__4864__auto___48752)){
args__4870__auto__.push((arguments[i__4865__auto___48753]));

var G__48754 = (i__4865__auto___48753 + (1));
i__4865__auto___48753 = G__48754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return brave.swords.formato.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(brave.swords.formato.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return brave.swords.format_STAR_(fmt,args);
}));

(brave.swords.formato.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(brave.swords.formato.cljs$lang$applyTo = (function (seq48503){
var G__48505 = cljs.core.first(seq48503);
var seq48503__$1 = cljs.core.next(seq48503);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48505,seq48503__$1);
}));

brave.swords.drop_nth = (function brave$swords$drop_nth(n,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__48512_SHARP_,p2__48513_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__48512_SHARP_,n)){
return p2__48513_SHARP_;
} else {
return null;
}
}),coll);
});
brave.swords.deaccent = (function brave$swords$deaccent(input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__48517){
var vec__48518 = p__48517;
var pat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48518,(0),null);
var repl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48518,(1),null);
return clojure.string.replace(s,pat,repl);
}),input,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[éèêë]/,"e"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[á]/,"a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[űúü]/,"u"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[őöó]/,"o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[í]/,"i"], null)], null));
});
brave.swords.disposable__GT_function = (function brave$swords$disposable__GT_function(disposable,listener,interval){
var disposable_instance = (new disposable(listener,interval));
return (function() { 
var G__48755__delegate = function (args){
return disposable_instance.fire.apply(disposable_instance,cljs.core.to_array(args));
};
var G__48755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48756__i = 0, G__48756__a = new Array(arguments.length -  0);
while (G__48756__i < G__48756__a.length) {G__48756__a[G__48756__i] = arguments[G__48756__i + 0]; ++G__48756__i;}
  args = new cljs.core.IndexedSeq(G__48756__a,0,null);
} 
return G__48755__delegate.call(this,args);};
G__48755.cljs$lang$maxFixedArity = 0;
G__48755.cljs$lang$applyTo = (function (arglist__48757){
var args = cljs.core.seq(arglist__48757);
return G__48755__delegate(args);
});
G__48755.cljs$core$IFn$_invoke$arity$variadic = G__48755__delegate;
return G__48755;
})()
;
});
brave.swords.throttle = (function brave$swords$throttle(listener,interval){
return brave.swords.disposable__GT_function(brave.swords.goog$module$goog$async$Throttle,listener,interval);
});
brave.swords.debounce = (function brave$swords$debounce(listener,interval){
return brave.swords.disposable__GT_function(goog.async.Debouncer,listener,interval);
});
brave.swords.safe_read = (function brave$swords$safe_read(value){
try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(value);
}catch (e48525){if((e48525 instanceof Error)){
var e = e48525;
return e;
} else {
throw e48525;

}
}});
brave.swords.extension = (function brave$swords$extension(s){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\./));
});
brave.swords.event__GT_value = (function brave$swords$event__GT_value(event){
var value = event.target.value;
var readed_value = (function (){try{return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$1(value);
}catch (e48531){if((e48531 instanceof Error)){
var e = e48531;
return value;
} else {
throw e48531;

}
}})();
var value__$1 = (((readed_value instanceof cljs.core.Keyword))?readed_value:((cljs.core.boolean_QMARK_(readed_value))?readed_value:((cljs.core.integer_QMARK_(readed_value))?readed_value:((cljs.core.double_QMARK_(readed_value))?readed_value:((cljs.core.map_QMARK_(readed_value))?readed_value:((cljs.core.vector_QMARK_(readed_value))?readed_value:readed_value
))))));
return value__$1;
});
brave.swords.search = (function brave$swords$search(in$,filter_string){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_string,"")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_string,null)))){
return true;
} else {
return clojure.string.includes_QMARK_(brave.swords.deaccent(clojure.string.lower_case(in$)),filter_string);
}
});
brave.swords.fancy = (function brave$swords$fancy(sample){
var x = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.PersistentVector.EMPTY,(0),false,(4)], null);
while(true){
var vec__48534 = x;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(0),null);
var coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(1),null);
var lvl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(2),null);
var in_a_str_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(3),null);
var line_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48534,(4),null);
var exist = (index < cljs.core.count(sample));
var c = ((exist)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sample,index):null);
var last_c = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))?null:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sample,(index - (1))));
var next_c = (((index > (cljs.core.count(sample) - (2))))?null:cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sample,(index + (1))));
var prev_QMARK_ = ((function (x,vec__48534,index,coll,lvl,in_a_str_QMARK_,line_type,exist,c,last_c,next_c){
return (function (lc,nc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_c,lc)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,nc)));
});})(x,vec__48534,index,coll,lvl,in_a_str_QMARK_,line_type,exist,c,last_c,next_c))
;
var line_type__$1 = ((prev_QMARK_("[","{"))?(1):((prev_QMARK_("}","]"))?(2):line_type
));
var this_is_a_set = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_c,"#")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"{")));
var lvl__$1 = ((cljs.core.not(last_c))?(0):((this_is_a_set)?lvl:(function (){var fexpr__48540 = (function (){var G__48541 = c;
switch (G__48541) {
case "{":
return cljs.core._PLUS_;

break;
case "}":
return cljs.core._;

break;
case "[":
return cljs.core._PLUS_;

break;
case "]":
return cljs.core._;

break;
case "(":
return cljs.core._PLUS_;

break;
case ")":
return cljs.core._;

break;
default:
return ((function (x,G__48541,vec__48534,index,coll,lvl,in_a_str_QMARK_,line_type,exist,c,last_c,next_c,prev_QMARK_,line_type__$1,this_is_a_set){
return (function (x__$1,y){
return x__$1;
});
;})(x,G__48541,vec__48534,index,coll,lvl,in_a_str_QMARK_,line_type,exist,c,last_c,next_c,prev_QMARK_,line_type__$1,this_is_a_set))

}
})();
return (fexpr__48540.cljs$core$IFn$_invoke$arity$2 ? fexpr__48540.cljs$core$IFn$_invoke$arity$2(lvl,line_type__$1) : fexpr__48540.call(null,lvl,line_type__$1));
})()
));
var c__$1 = (function (){var new_line = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n"], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(lvl__$1," "));
if(cljs.core.not((function (){var or__4253__auto__ = in_a_str_QMARK_;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((this_is_a_set) || (cljs.core.not(last_c)));
}
})())){
var G__48542 = c;
switch (G__48542) {
case "\n":
return "";

break;
case ",":
return new_line;

break;
case "{":
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_c,"[")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_c,"}")))){
return c;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_line,c);
}

break;
case "[":
if(cljs.core.truth_((function (){var or__4253__auto__ = (function (){var fexpr__48544 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["[",null,"{",null], null), null);
return (fexpr__48544.cljs$core$IFn$_invoke$arity$1 ? fexpr__48544.cljs$core$IFn$_invoke$arity$1(last_c) : fexpr__48544.call(null,last_c));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_c,"]");
}
})())){
return c;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_line,c);
}

break;
case "(":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_c,"[")){
return c;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_line,c);
}

break;
default:
return c;

}
} else {
return c;
}
})();
var coll__$1 = ((cljs.core.vector_QMARK_(c__$1))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,coll,c__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,c__$1));
var in_a_str_QMARK___$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c__$1,"\"")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_c,"\\"))))?(cljs.core.truth_(in_a_str_QMARK_)?false:true):in_a_str_QMARK_);
var return$ = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),coll__$1,lvl__$1,in_a_str_QMARK___$1,line_type__$1], null);
if(cljs.core.truth_(c__$1)){
var G__48762 = return$;
x = G__48762;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,coll__$1);
}
break;
}
});
brave.swords.deep_merge = (function brave$swords$deep_merge(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48763 = arguments.length;
var i__4865__auto___48764 = (0);
while(true){
if((i__4865__auto___48764 < len__4864__auto___48763)){
args__4870__auto__.push((arguments[i__4865__auto___48764]));

var G__48765 = (i__4865__auto___48764 + (1));
i__4865__auto___48764 = G__48765;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return brave.swords.deep_merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(brave.swords.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (v,vs){
var rec_merge = (function brave$swords$rec_merge(v1,v2){
if(((cljs.core.map_QMARK_(v1)) && (cljs.core.map_QMARK_(v2)))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(brave.swords.deep_merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v1,v2], 0));
} else {
return v2;
}
});
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,vs))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48548_SHARP_,p2__48549_SHARP_){
return rec_merge(p1__48548_SHARP_,p2__48549_SHARP_);
}),v,vs);
} else {
return null;
}
}));

(brave.swords.deep_merge.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(brave.swords.deep_merge.cljs$lang$applyTo = (function (seq48551){
var G__48552 = cljs.core.first(seq48551);
var seq48551__$1 = cljs.core.next(seq48551);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48552,seq48551__$1);
}));

brave.swords.dissoc_in = (function brave$swords$dissoc_in(m,p__48560){
var vec__48561 = p__48560;
var seq__48562 = cljs.core.seq(vec__48561);
var first__48563 = cljs.core.first(seq__48562);
var seq__48562__$1 = cljs.core.next(seq__48562);
var k = first__48563;
var ks = seq__48562__$1;
var keys = vec__48561;
if(ks){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5802__auto__)){
var nextmap = temp__5802__auto__;
var newmap = (brave.swords.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? brave.swords.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : brave.swords.dissoc_in.call(null,nextmap,ks));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
brave.swords.assoc_key = (function brave$swords$assoc_key(state,ks,new_key){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,cljs.core.vec(cljs.core.butlast(ks)),cljs.core.dissoc,cljs.core.last(ks)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(ks)),new_key),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,ks));
});
brave.swords.round = (function brave$swords$round(var_args){
var args__4870__auto__ = [];
var len__4864__auto___48766 = arguments.length;
var i__4865__auto___48767 = (0);
while(true){
if((i__4865__auto___48767 < len__4864__auto___48766)){
args__4870__auto__.push((arguments[i__4865__auto___48767]));

var G__48768 = (i__4865__auto___48767 + (1));
i__4865__auto___48767 = G__48768;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return brave.swords.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(brave.swords.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__48572){
var map__48573 = p__48572;
var map__48573__$1 = cljs.core.__destructure_map(map__48573);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48573__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478));
if(cljs.core.truth_(p)){
var scale = Math.pow((10),p);
return (Math.round((x * scale)) / scale);
} else {
return Math.round(x);
}
}));

(brave.swords.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(brave.swords.round.cljs$lang$applyTo = (function (seq48567){
var G__48568 = cljs.core.first(seq48567);
var seq48567__$1 = cljs.core.next(seq48567);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48568,seq48567__$1);
}));

/**
 * map a function on values
 */
brave.swords.map_vals = (function brave$swords$map_vals(m,f){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function brave$swords$map_vals_$_iter__48574(s__48575){
return (new cljs.core.LazySeq(null,(function (){
var s__48575__$1 = s__48575;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48575__$1);
if(temp__5804__auto__){
var s__48575__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48575__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48575__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48577 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48576 = (0);
while(true){
if((i__48576 < size__4651__auto__)){
var vec__48578 = cljs.core._nth(c__4650__auto__,i__48576);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48578,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48578,(1),null);
cljs.core.chunk_append(b__48577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__48769 = (i__48576 + (1));
i__48576 = G__48769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48577),brave$swords$map_vals_$_iter__48574(cljs.core.chunk_rest(s__48575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48577),null);
}
} else {
var vec__48581 = cljs.core.first(s__48575__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48581,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48581,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),brave$swords$map_vals_$_iter__48574(cljs.core.rest(s__48575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(m);
})());
});
/**
 * map a function on keys
 */
brave.swords.map_keys = (function brave$swords$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
brave.swords.redirect_BANG_ = (function brave$swords$redirect_BANG_(loc){
return (window.location = loc);
});
brave.swords.title_BANG_ = (function brave$swords$title_BANG_(t){
return (document.title = t);
});
/**
 * Short-hand for document.getElementById(id)
 */
brave.swords.by_id = (function brave$swords$by_id(id){
return document.getElementById(id);
});
brave.swords.val_by_id = (function brave$swords$val_by_id(id){
if(cljs.core.truth_(id)){
return brave.swords.by_id(id).value;
} else {
return console.log(["No id:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}
});
brave.swords.set_val_BANG_ = (function brave$swords$set_val_BANG_(id,update){
if(cljs.core.truth_(id)){
return (brave.swords.by_id(id).value = update);
} else {
return console.log(["Can't set: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}
});
brave.swords.set_display_BANG_ = (function brave$swords$set_display_BANG_(id,update){
return (brave.swords.by_id(id).style.display = update);
});
brave.swords.set_html_BANG_ = (function brave$swords$set_html_BANG_(id,s){
return (brave.swords.by_id(id).innerHTML = s);
});
brave.swords.jsx__GT_clj = (function brave$swords$jsx__GT_clj(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function brave$swords$jsx__GT_clj_$_iter__48584(s__48585){
return (new cljs.core.LazySeq(null,(function (){
var s__48585__$1 = s__48585;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__48585__$1);
if(temp__5804__auto__){
var s__48585__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48585__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__48585__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__48587 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__48586 = (0);
while(true){
if((i__48586 < size__4651__auto__)){
var k = cljs.core._nth(c__4650__auto__,i__48586);
cljs.core.chunk_append(b__48587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(x[k])], null));

var G__48775 = (i__48586 + (1));
i__48586 = G__48775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48587),brave$swords$jsx__GT_clj_$_iter__48584(cljs.core.chunk_rest(s__48585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48587),null);
}
} else {
var k = cljs.core.first(s__48585__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(x[k])], null),brave$swords$jsx__GT_clj_$_iter__48584(cljs.core.rest(s__48585__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(Object.keys(x));
})());
});
brave.swords.obj__GT_clj = (function brave$swords$obj__GT_clj(obj){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var v = (obj[key]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("function",goog.typeOf(v))){
return result;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,goog.object.getKeys(obj));
});
brave.swords.user_agent = (function brave$swords$user_agent(){
return navigator.userAgent;
});
brave.swords.domain = (function brave$swords$domain(){
return document.domain;
});
brave.swords.title = (function brave$swords$title(){
return document.title;
});
brave.swords.referrer = (function brave$swords$referrer(){
return document.referrer;
});
brave.swords.prev_sites = (function brave$swords$prev_sites(){
return history.length;
});
brave.swords.client_time = (function brave$swords$client_time(){
return window.Date();
});
brave.swords.timezone = (function brave$swords$timezone(){
return (brave.swords.client_time().getTimezoneOffset() / (60));
});
brave.swords.protocol = (function brave$swords$protocol(){
return window.location.protocol;
});
brave.swords.host = (function brave$swords$host(){
return window.location.host;
});
brave.swords.host_name = (function brave$swords$host_name(){
return window.location.hostname;
});
brave.swords.url_hash = (function brave$swords$url_hash(){
return window.location.hash;
});
brave.swords.url_path = (function brave$swords$url_path(){
return window.location.pathname;
});
brave.swords.browser = (function brave$swords$browser(){
return navigator.appCodeName;
});
brave.swords.browser_name = (function brave$swords$browser_name(){
return navigator.appName;
});
brave.swords.browser_engine = (function brave$swords$browser_engine(){
return navigator.product;
});
brave.swords.browser_version = (function brave$swords$browser_version(){
return navigator.appVersion;
});
brave.swords.browser_plugins = (function brave$swords$browser_plugins(){
return brave.swords.obj__GT_clj(navigator.plugins);
});
brave.swords.browser_mimes = (function brave$swords$browser_mimes(){
return brave.swords.obj__GT_clj(navigator.mimeTypes);
});
brave.swords.browser_lang = (function brave$swords$browser_lang(){
return navigator.language;
});
brave.swords.browser_languages = (function brave$swords$browser_languages(){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(navigator.languages);
});
brave.swords.charset = (function brave$swords$charset(){
return document.charset;
});
brave.swords.online_QMARK_ = (function brave$swords$online_QMARK_(){
return navigator.onLine;
});
brave.swords.connection = (function brave$swords$connection(){
return brave.swords.obj__GT_clj(navigator.connection);
});
brave.swords.os = (function brave$swords$os(){
return navigator.platform;
});
brave.swords.cpu_cores = (function brave$swords$cpu_cores(){
return navigator.hardwareConcurrency;
});
brave.swords.performance_timing = (function brave$swords$performance_timing(){
return brave.swords.obj__GT_clj(window.performance.timing);
});
brave.swords.performance_memory = (function brave$swords$performance_memory(){
return brave.swords.obj__GT_clj(window.performance.memory);
});
brave.swords.media_devices = (function brave$swords$media_devices(){
return brave.swords.obj__GT_clj(navigator.mediaDevices);
});
brave.swords.cookies_QMARK_ = (function brave$swords$cookies_QMARK_(){
return navigator.cookieEnabled;
});
brave.swords.cookies = (function brave$swords$cookies(){
return document.cookie;
});
brave.swords.local_storage = (function brave$swords$local_storage(){
return localStorage();
});
brave.swords.viewport = (function brave$swords$viewport(){
return brave.swords.obj__GT_clj(document.visualViewport);
});
brave.swords.screen_width = (function brave$swords$screen_width(){
return screen.width;
});
brave.swords.screen_height = (function brave$swords$screen_height(){
return screen.height;
});
brave.swords.available_width = (function brave$swords$available_width(){
return screen.availWidth;
});
brave.swords.mobile_QMARK_ = (function brave$swords$mobile_QMARK_(){
return (brave.swords.available_width() < (768));
});
brave.swords.tablet_QMARK_ = (function brave$swords$tablet_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(brave.swords.available_width(),(768));
});
brave.swords.pc_QMARK_ = (function brave$swords$pc_QMARK_(){
return (brave.swords.available_width() > (768));
});
brave.swords.available_height = (function brave$swords$available_height(){
return screen.availHeight;
});
brave.swords.color_depth = (function brave$swords$color_depth(){
return screen.colorDepth;
});
brave.swords.pixel_depth = (function brave$swords$pixel_depth(){
return screen.pixelDepth;
});
/**
 * Returns `js/window`'s current location as a map.
 */
brave.swords.window_location = (function brave$swords$window_location(){
var temp__5804__auto__ = (((typeof window !== 'undefined'))?window:null);
if(cljs.core.truth_(temp__5804__auto__)){
var js_win = temp__5804__auto__;
var temp__5804__auto____$1 = js_win.location;
if(cljs.core.truth_(temp__5804__auto____$1)){
var loc = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
brave.swords.on_click = (function brave$swords$on_click(id,event){
var temp__5804__auto__ = brave.swords.by_id(id);
if(cljs.core.truth_(temp__5804__auto__)){
var target_el = temp__5804__auto__;
return target_el.addEventListener("click",event);
} else {
return null;
}
});
brave.swords.on_key_press = (function brave$swords$on_key_press(id,event){
var temp__5804__auto__ = brave.swords.by_id(id);
if(cljs.core.truth_(temp__5804__auto__)){
var target_el = temp__5804__auto__;
return target_el.addEventListener("keydown",event);
} else {
return null;
}
});
brave.swords.dom_ready = (function brave$swords$dom_ready(event){
return document.addEventListener("DOMContentLoaded",event);
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
brave.swords.reduce_kvs = (function brave$swords$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__48611){
var vec__48612 = p__48611;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48612,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
/**
 * Assocs each kv iff its value is not nil.
 */
brave.swords.assoc_some = (function brave$swords$assoc_some(var_args){
var G__48626 = arguments.length;
switch (G__48626) {
case 3:
return brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___48786 = arguments.length;
var i__4865__auto___48787 = (0);
while(true){
if((i__4865__auto___48787 < len__4864__auto___48786)){
args_arr__4885__auto__.push((arguments[i__4865__auto___48787]));

var G__48788 = (i__4865__auto___48787 + (1));
i__4865__auto___48787 = G__48788;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((3)),(0),null));
return brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4886__auto__);

}
});

(brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return brave.swords.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
}));

/** @this {Function} */
(brave.swords.assoc_some.cljs$lang$applyTo = (function (seq48622){
var G__48623 = cljs.core.first(seq48622);
var seq48622__$1 = cljs.core.next(seq48622);
var G__48624 = cljs.core.first(seq48622__$1);
var seq48622__$2 = cljs.core.next(seq48622__$1);
var G__48625 = cljs.core.first(seq48622__$2);
var seq48622__$3 = cljs.core.next(seq48622__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48623,G__48624,G__48625,seq48622__$3);
}));

(brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
}));

(brave.swords.assoc_some.cljs$lang$maxFixedArity = (3));

brave.swords.rsome = (function brave$swords$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__5804__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
brave.swords.str_starts_with_QMARK_ = (function brave$swords$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
brave.swords.str_contains_QMARK_ = (function brave$swords$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
brave.swords.read_edn = (function brave$swords$read_edn(var_args){
var G__48661 = arguments.length;
switch (G__48661) {
case 1:
return brave.swords.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return brave.swords.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(brave.swords.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return brave.swords.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
}));

(brave.swords.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if((!(typeof s === 'string'))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null));
} else {
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts,s);
}
}
}));

(brave.swords.read_edn.cljs$lang$maxFixedArity = 2);

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
brave.swords.pr_edn = (function brave$swords$pr_edn(var_args){
var G__48668 = arguments.length;
switch (G__48668) {
case 1:
return brave.swords.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return brave.swords.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(brave.swords.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return brave.swords.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(brave.swords.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__48680 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__48681 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__48682 = null;
var _STAR_print_length_STAR__temp_val__48683 = null;
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__48682);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__48683);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__48681);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__48680);
}}));

(brave.swords.pr_edn.cljs$lang$maxFixedArity = 2);

brave.swords.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
brave.swords.get_pooled_xhr_BANG_ = (function brave$swords$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(brave.swords.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
brave.swords.ajax_lite = (function brave$swords$ajax_lite(uri,p__48709,callback_fn){
var map__48710 = p__48709;
var map__48710__$1 = cljs.core.__destructure_map(map__48710);
var opts = map__48710__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48710__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48710__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48710__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var temp__5802__auto__ = brave.swords.get_pooled_xhr_BANG_();
if(cljs.core.truth_(temp__5802__auto__)){
var xhr = temp__5802__auto__;
var xhr_method = (function (){var G__48716 = method;
var G__48716__$1 = (((G__48716 instanceof cljs.core.Keyword))?G__48716.fqn:null);
switch (G__48716__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48716__$1)].join('')));

}
})();
var vec__48713 = (function (){var url_encode = (function() {
var brave$swords$ajax_lite_$_url_encode = null;
var brave$swords$ajax_lite_$_url_encode__1 = (function (params__$1){
if(cljs.core.seq(params__$1)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js(params__$1)))).toString();
} else {
return null;
}
});
var brave$swords$ajax_lite_$_url_encode__2 = (function (uri__$1,params__$1){
var qstr = brave$swords$ajax_lite_$_url_encode.cljs$core$IFn$_invoke$arity$1(params__$1);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri__$1:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri__$1),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
brave$swords$ajax_lite_$_url_encode = function(uri__$1,params__$1){
switch(arguments.length){
case 1:
return brave$swords$ajax_lite_$_url_encode__1.call(this,uri__$1);
case 2:
return brave$swords$ajax_lite_$_url_encode__2.call(this,uri__$1,params__$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
brave$swords$ajax_lite_$_url_encode.cljs$core$IFn$_invoke$arity$1 = brave$swords$ajax_lite_$_url_encode__1;
brave$swords$ajax_lite_$_url_encode.cljs$core$IFn$_invoke$arity$2 = brave$swords$ajax_lite_$_url_encode__2;
return brave$swords$ajax_lite_$_url_encode;
})()
;
var adaptive_encode = (function (uri__$1,params__$1){
if((((typeof FormData !== 'undefined')) && ((params__$1 instanceof FormData)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri__$1,params__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4251__auto__ = (typeof FormData !== 'undefined');
if(and__4251__auto__){
var and__4251__auto____$1 = (typeof File !== 'undefined');
if(and__4251__auto____$1){
return brave.swords.rsome((function (x){
return (x instanceof File);
}),cljs.core.vals(params__$1));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var form_data = (new FormData());
var seq__48720_48796 = cljs.core.seq(params__$1);
var chunk__48721_48797 = null;
var count__48722_48798 = (0);
var i__48723_48799 = (0);
while(true){
if((i__48723_48799 < count__48722_48798)){
var vec__48731_48800 = chunk__48721_48797.cljs$core$IIndexed$_nth$arity$2(null,i__48723_48799);
var k_48801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731_48800,(0),null);
var v_48802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48731_48800,(1),null);
form_data.append(cljs.core.name(k_48801),v_48802);


var G__48806 = seq__48720_48796;
var G__48807 = chunk__48721_48797;
var G__48808 = count__48722_48798;
var G__48809 = (i__48723_48799 + (1));
seq__48720_48796 = G__48806;
chunk__48721_48797 = G__48807;
count__48722_48798 = G__48808;
i__48723_48799 = G__48809;
continue;
} else {
var temp__5804__auto___48810 = cljs.core.seq(seq__48720_48796);
if(temp__5804__auto___48810){
var seq__48720_48811__$1 = temp__5804__auto___48810;
if(cljs.core.chunked_seq_QMARK_(seq__48720_48811__$1)){
var c__4679__auto___48812 = cljs.core.chunk_first(seq__48720_48811__$1);
var G__48813 = cljs.core.chunk_rest(seq__48720_48811__$1);
var G__48814 = c__4679__auto___48812;
var G__48815 = cljs.core.count(c__4679__auto___48812);
var G__48816 = (0);
seq__48720_48796 = G__48813;
chunk__48721_48797 = G__48814;
count__48722_48798 = G__48815;
i__48723_48799 = G__48816;
continue;
} else {
var vec__48734_48817 = cljs.core.first(seq__48720_48811__$1);
var k_48818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48734_48817,(0),null);
var v_48819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48734_48817,(1),null);
form_data.append(cljs.core.name(k_48818),v_48819);


var G__48820 = cljs.core.next(seq__48720_48811__$1);
var G__48821 = null;
var G__48822 = (0);
var G__48823 = (0);
seq__48720_48796 = G__48820;
chunk__48721_48797 = G__48821;
count__48722_48798 = G__48822;
i__48723_48799 = G__48823;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri__$1,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri__$1,url_encode(params__$1)], null);

}
}
});
var G__48737 = method;
var G__48737__$1 = (((G__48737 instanceof cljs.core.Keyword))?G__48737.fqn:null);
switch (G__48737__$1) {
case "get":
return url_encode(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48737__$1)].join('')));

}
})();
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48713,(1),null);
var xhr_headers = (function (){var headers__$1 = brave.swords.map_keys((function (p1__48704_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__48704_SHARP_));
}),headers);
var headers__$2 = brave.swords.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var pf = temp__5804__auto__;
xhr.setProgressEventsEnabled(true);

return goog.events.listen(xhr,goog.net.EventType.PROGRESS,(function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__4251__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__4251__auto__;
}
})())?(loaded / total):null);
var G__48738 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__48738) : pf.call(null,G__48738));
}));
} else {
return null;
}
})();
var G__48739_48829 = xhr;
goog.events.listenOnce(G__48739_48829,goog.net.EventType.READY,(function (_){
return cljs.core.deref(brave.swords.xhr_pool_).releaseObject(xhr);
}));

goog.events.listenOnce(G__48739_48829,goog.net.EventType.COMPLETE,(function brave$swords$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__48742 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = (function (s){
return brave.swords.str_contains_QMARK_(cts,s);
});
if(match_QMARK_("/edn")){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(match_QMARK_("/json")){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(match_QMARK_("/xml")){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);

}
}
}
})()
));
var G__48745 = resp_type__$1;
var G__48745__$1 = (((G__48745 instanceof cljs.core.Keyword))?G__48745.fqn:null);
switch (G__48745__$1) {
case "edn":
return brave.swords.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48742,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48742,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48742,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__48746 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))
))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__48746) : callback_fn.call(null,G__48746));
}));


xhr.setTimeoutInterval((function (){var or__4253__auto__ = timeout_ms;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
} else {
var G__48749_48832 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__48749_48832) : callback_fn.call(null,G__48749_48832));

return null;
}
});

//# sourceMappingURL=brave.swords.js.map
