goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45744 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45744(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45745 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45745(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44736 = coll;
var G__44737 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44736,G__44737) : shadow.dom.lazy_native_coll_seq.call(null,G__44736,G__44737));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44745 = arguments.length;
switch (G__44745) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44747 = arguments.length;
switch (G__44747) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44749 = arguments.length;
switch (G__44749) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44752 = arguments.length;
switch (G__44752) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44757 = arguments.length;
switch (G__44757) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44765 = arguments.length;
switch (G__44765) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44769){if((e44769 instanceof Object)){
var e = e44769;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44769;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44778 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44779 = null;
var count__44780 = (0);
var i__44781 = (0);
while(true){
if((i__44781 < count__44780)){
var el = chunk__44779.cljs$core$IIndexed$_nth$arity$2(null,i__44781);
var handler_45756__$1 = ((function (seq__44778,chunk__44779,count__44780,i__44781,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44778,chunk__44779,count__44780,i__44781,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45756__$1);


var G__45757 = seq__44778;
var G__45758 = chunk__44779;
var G__45759 = count__44780;
var G__45760 = (i__44781 + (1));
seq__44778 = G__45757;
chunk__44779 = G__45758;
count__44780 = G__45759;
i__44781 = G__45760;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44778);
if(temp__5804__auto__){
var seq__44778__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44778__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44778__$1);
var G__45761 = cljs.core.chunk_rest(seq__44778__$1);
var G__45762 = c__4679__auto__;
var G__45763 = cljs.core.count(c__4679__auto__);
var G__45764 = (0);
seq__44778 = G__45761;
chunk__44779 = G__45762;
count__44780 = G__45763;
i__44781 = G__45764;
continue;
} else {
var el = cljs.core.first(seq__44778__$1);
var handler_45765__$1 = ((function (seq__44778,chunk__44779,count__44780,i__44781,el,seq__44778__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44778,chunk__44779,count__44780,i__44781,el,seq__44778__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45765__$1);


var G__45766 = cljs.core.next(seq__44778__$1);
var G__45767 = null;
var G__45768 = (0);
var G__45769 = (0);
seq__44778 = G__45766;
chunk__44779 = G__45767;
count__44780 = G__45768;
i__44781 = G__45769;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44802 = arguments.length;
switch (G__44802) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44827 = cljs.core.seq(events);
var chunk__44828 = null;
var count__44829 = (0);
var i__44830 = (0);
while(true){
if((i__44830 < count__44829)){
var vec__44867 = chunk__44828.cljs$core$IIndexed$_nth$arity$2(null,i__44830);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44867,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44867,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45771 = seq__44827;
var G__45772 = chunk__44828;
var G__45773 = count__44829;
var G__45774 = (i__44830 + (1));
seq__44827 = G__45771;
chunk__44828 = G__45772;
count__44829 = G__45773;
i__44830 = G__45774;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44827);
if(temp__5804__auto__){
var seq__44827__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44827__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44827__$1);
var G__45775 = cljs.core.chunk_rest(seq__44827__$1);
var G__45776 = c__4679__auto__;
var G__45777 = cljs.core.count(c__4679__auto__);
var G__45778 = (0);
seq__44827 = G__45775;
chunk__44828 = G__45776;
count__44829 = G__45777;
i__44830 = G__45778;
continue;
} else {
var vec__44874 = cljs.core.first(seq__44827__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44874,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44874,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45779 = cljs.core.next(seq__44827__$1);
var G__45780 = null;
var G__45781 = (0);
var G__45782 = (0);
seq__44827 = G__45779;
chunk__44828 = G__45780;
count__44829 = G__45781;
i__44830 = G__45782;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44882 = cljs.core.seq(styles);
var chunk__44883 = null;
var count__44884 = (0);
var i__44885 = (0);
while(true){
if((i__44885 < count__44884)){
var vec__44898 = chunk__44883.cljs$core$IIndexed$_nth$arity$2(null,i__44885);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44898,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45784 = seq__44882;
var G__45785 = chunk__44883;
var G__45786 = count__44884;
var G__45787 = (i__44885 + (1));
seq__44882 = G__45784;
chunk__44883 = G__45785;
count__44884 = G__45786;
i__44885 = G__45787;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44882);
if(temp__5804__auto__){
var seq__44882__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44882__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__44882__$1);
var G__45788 = cljs.core.chunk_rest(seq__44882__$1);
var G__45789 = c__4679__auto__;
var G__45790 = cljs.core.count(c__4679__auto__);
var G__45791 = (0);
seq__44882 = G__45788;
chunk__44883 = G__45789;
count__44884 = G__45790;
i__44885 = G__45791;
continue;
} else {
var vec__44909 = cljs.core.first(seq__44882__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44909,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44909,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45793 = cljs.core.next(seq__44882__$1);
var G__45794 = null;
var G__45795 = (0);
var G__45796 = (0);
seq__44882 = G__45793;
chunk__44883 = G__45794;
count__44884 = G__45795;
i__44885 = G__45796;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44916_45797 = key;
var G__44916_45798__$1 = (((G__44916_45797 instanceof cljs.core.Keyword))?G__44916_45797.fqn:null);
switch (G__44916_45798__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45801 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_45801,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_45801,"aria-");
}
})())){
el.setAttribute(ks_45801,value);
} else {
(el[ks_45801] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44946){
var map__44947 = p__44946;
var map__44947__$1 = cljs.core.__destructure_map(map__44947);
var props = map__44947__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44947__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44948 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44948,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44952 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44952,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44952;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44955 = arguments.length;
switch (G__44955) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44977){
var vec__44978 = p__44977;
var seq__44979 = cljs.core.seq(vec__44978);
var first__44980 = cljs.core.first(seq__44979);
var seq__44979__$1 = cljs.core.next(seq__44979);
var nn = first__44980;
var first__44980__$1 = cljs.core.first(seq__44979__$1);
var seq__44979__$2 = cljs.core.next(seq__44979__$1);
var np = first__44980__$1;
var nc = seq__44979__$2;
var node = vec__44978;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44984 = nn;
var G__44985 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44984,G__44985) : create_fn.call(null,G__44984,G__44985));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44988 = nn;
var G__44989 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44988,G__44989) : create_fn.call(null,G__44988,G__44989));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44992 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44992,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44992,(1),null);
var seq__44996_45805 = cljs.core.seq(node_children);
var chunk__44997_45806 = null;
var count__44998_45807 = (0);
var i__44999_45808 = (0);
while(true){
if((i__44999_45808 < count__44998_45807)){
var child_struct_45809 = chunk__44997_45806.cljs$core$IIndexed$_nth$arity$2(null,i__44999_45808);
var children_45810 = shadow.dom.dom_node(child_struct_45809);
if(cljs.core.seq_QMARK_(children_45810)){
var seq__45033_45811 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45810));
var chunk__45035_45812 = null;
var count__45036_45813 = (0);
var i__45037_45814 = (0);
while(true){
if((i__45037_45814 < count__45036_45813)){
var child_45815 = chunk__45035_45812.cljs$core$IIndexed$_nth$arity$2(null,i__45037_45814);
if(cljs.core.truth_(child_45815)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45815);


var G__45816 = seq__45033_45811;
var G__45817 = chunk__45035_45812;
var G__45818 = count__45036_45813;
var G__45819 = (i__45037_45814 + (1));
seq__45033_45811 = G__45816;
chunk__45035_45812 = G__45817;
count__45036_45813 = G__45818;
i__45037_45814 = G__45819;
continue;
} else {
var G__45820 = seq__45033_45811;
var G__45821 = chunk__45035_45812;
var G__45822 = count__45036_45813;
var G__45823 = (i__45037_45814 + (1));
seq__45033_45811 = G__45820;
chunk__45035_45812 = G__45821;
count__45036_45813 = G__45822;
i__45037_45814 = G__45823;
continue;
}
} else {
var temp__5804__auto___45824 = cljs.core.seq(seq__45033_45811);
if(temp__5804__auto___45824){
var seq__45033_45825__$1 = temp__5804__auto___45824;
if(cljs.core.chunked_seq_QMARK_(seq__45033_45825__$1)){
var c__4679__auto___45826 = cljs.core.chunk_first(seq__45033_45825__$1);
var G__45827 = cljs.core.chunk_rest(seq__45033_45825__$1);
var G__45828 = c__4679__auto___45826;
var G__45829 = cljs.core.count(c__4679__auto___45826);
var G__45830 = (0);
seq__45033_45811 = G__45827;
chunk__45035_45812 = G__45828;
count__45036_45813 = G__45829;
i__45037_45814 = G__45830;
continue;
} else {
var child_45831 = cljs.core.first(seq__45033_45825__$1);
if(cljs.core.truth_(child_45831)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45831);


var G__45832 = cljs.core.next(seq__45033_45825__$1);
var G__45833 = null;
var G__45834 = (0);
var G__45835 = (0);
seq__45033_45811 = G__45832;
chunk__45035_45812 = G__45833;
count__45036_45813 = G__45834;
i__45037_45814 = G__45835;
continue;
} else {
var G__45836 = cljs.core.next(seq__45033_45825__$1);
var G__45837 = null;
var G__45838 = (0);
var G__45839 = (0);
seq__45033_45811 = G__45836;
chunk__45035_45812 = G__45837;
count__45036_45813 = G__45838;
i__45037_45814 = G__45839;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45810);
}


var G__45840 = seq__44996_45805;
var G__45841 = chunk__44997_45806;
var G__45842 = count__44998_45807;
var G__45843 = (i__44999_45808 + (1));
seq__44996_45805 = G__45840;
chunk__44997_45806 = G__45841;
count__44998_45807 = G__45842;
i__44999_45808 = G__45843;
continue;
} else {
var temp__5804__auto___45844 = cljs.core.seq(seq__44996_45805);
if(temp__5804__auto___45844){
var seq__44996_45845__$1 = temp__5804__auto___45844;
if(cljs.core.chunked_seq_QMARK_(seq__44996_45845__$1)){
var c__4679__auto___45846 = cljs.core.chunk_first(seq__44996_45845__$1);
var G__45847 = cljs.core.chunk_rest(seq__44996_45845__$1);
var G__45848 = c__4679__auto___45846;
var G__45849 = cljs.core.count(c__4679__auto___45846);
var G__45850 = (0);
seq__44996_45805 = G__45847;
chunk__44997_45806 = G__45848;
count__44998_45807 = G__45849;
i__44999_45808 = G__45850;
continue;
} else {
var child_struct_45851 = cljs.core.first(seq__44996_45845__$1);
var children_45852 = shadow.dom.dom_node(child_struct_45851);
if(cljs.core.seq_QMARK_(children_45852)){
var seq__45060_45853 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45852));
var chunk__45062_45854 = null;
var count__45063_45855 = (0);
var i__45064_45856 = (0);
while(true){
if((i__45064_45856 < count__45063_45855)){
var child_45857 = chunk__45062_45854.cljs$core$IIndexed$_nth$arity$2(null,i__45064_45856);
if(cljs.core.truth_(child_45857)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45857);


var G__45858 = seq__45060_45853;
var G__45859 = chunk__45062_45854;
var G__45860 = count__45063_45855;
var G__45861 = (i__45064_45856 + (1));
seq__45060_45853 = G__45858;
chunk__45062_45854 = G__45859;
count__45063_45855 = G__45860;
i__45064_45856 = G__45861;
continue;
} else {
var G__45862 = seq__45060_45853;
var G__45863 = chunk__45062_45854;
var G__45864 = count__45063_45855;
var G__45865 = (i__45064_45856 + (1));
seq__45060_45853 = G__45862;
chunk__45062_45854 = G__45863;
count__45063_45855 = G__45864;
i__45064_45856 = G__45865;
continue;
}
} else {
var temp__5804__auto___45866__$1 = cljs.core.seq(seq__45060_45853);
if(temp__5804__auto___45866__$1){
var seq__45060_45868__$1 = temp__5804__auto___45866__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45060_45868__$1)){
var c__4679__auto___45869 = cljs.core.chunk_first(seq__45060_45868__$1);
var G__45870 = cljs.core.chunk_rest(seq__45060_45868__$1);
var G__45871 = c__4679__auto___45869;
var G__45872 = cljs.core.count(c__4679__auto___45869);
var G__45873 = (0);
seq__45060_45853 = G__45870;
chunk__45062_45854 = G__45871;
count__45063_45855 = G__45872;
i__45064_45856 = G__45873;
continue;
} else {
var child_45874 = cljs.core.first(seq__45060_45868__$1);
if(cljs.core.truth_(child_45874)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45874);


var G__45875 = cljs.core.next(seq__45060_45868__$1);
var G__45876 = null;
var G__45877 = (0);
var G__45878 = (0);
seq__45060_45853 = G__45875;
chunk__45062_45854 = G__45876;
count__45063_45855 = G__45877;
i__45064_45856 = G__45878;
continue;
} else {
var G__45879 = cljs.core.next(seq__45060_45868__$1);
var G__45880 = null;
var G__45881 = (0);
var G__45882 = (0);
seq__45060_45853 = G__45879;
chunk__45062_45854 = G__45880;
count__45063_45855 = G__45881;
i__45064_45856 = G__45882;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45852);
}


var G__45883 = cljs.core.next(seq__44996_45845__$1);
var G__45884 = null;
var G__45885 = (0);
var G__45886 = (0);
seq__44996_45805 = G__45883;
chunk__44997_45806 = G__45884;
count__44998_45807 = G__45885;
i__44999_45808 = G__45886;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__45077 = cljs.core.seq(node);
var chunk__45078 = null;
var count__45079 = (0);
var i__45080 = (0);
while(true){
if((i__45080 < count__45079)){
var n = chunk__45078.cljs$core$IIndexed$_nth$arity$2(null,i__45080);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45893 = seq__45077;
var G__45894 = chunk__45078;
var G__45895 = count__45079;
var G__45896 = (i__45080 + (1));
seq__45077 = G__45893;
chunk__45078 = G__45894;
count__45079 = G__45895;
i__45080 = G__45896;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45077);
if(temp__5804__auto__){
var seq__45077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45077__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45077__$1);
var G__45897 = cljs.core.chunk_rest(seq__45077__$1);
var G__45898 = c__4679__auto__;
var G__45899 = cljs.core.count(c__4679__auto__);
var G__45900 = (0);
seq__45077 = G__45897;
chunk__45078 = G__45898;
count__45079 = G__45899;
i__45080 = G__45900;
continue;
} else {
var n = cljs.core.first(seq__45077__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45905 = cljs.core.next(seq__45077__$1);
var G__45906 = null;
var G__45907 = (0);
var G__45908 = (0);
seq__45077 = G__45905;
chunk__45078 = G__45906;
count__45079 = G__45907;
i__45080 = G__45908;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__45117 = arguments.length;
switch (G__45117) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__45134 = arguments.length;
switch (G__45134) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__45154 = arguments.length;
switch (G__45154) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45913 = arguments.length;
var i__4865__auto___45914 = (0);
while(true){
if((i__4865__auto___45914 < len__4864__auto___45913)){
args__4870__auto__.push((arguments[i__4865__auto___45914]));

var G__45915 = (i__4865__auto___45914 + (1));
i__4865__auto___45914 = G__45915;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45179_45918 = cljs.core.seq(nodes);
var chunk__45180_45919 = null;
var count__45181_45920 = (0);
var i__45182_45921 = (0);
while(true){
if((i__45182_45921 < count__45181_45920)){
var node_45922 = chunk__45180_45919.cljs$core$IIndexed$_nth$arity$2(null,i__45182_45921);
fragment.appendChild(shadow.dom._to_dom(node_45922));


var G__45923 = seq__45179_45918;
var G__45924 = chunk__45180_45919;
var G__45925 = count__45181_45920;
var G__45926 = (i__45182_45921 + (1));
seq__45179_45918 = G__45923;
chunk__45180_45919 = G__45924;
count__45181_45920 = G__45925;
i__45182_45921 = G__45926;
continue;
} else {
var temp__5804__auto___45927 = cljs.core.seq(seq__45179_45918);
if(temp__5804__auto___45927){
var seq__45179_45928__$1 = temp__5804__auto___45927;
if(cljs.core.chunked_seq_QMARK_(seq__45179_45928__$1)){
var c__4679__auto___45929 = cljs.core.chunk_first(seq__45179_45928__$1);
var G__45930 = cljs.core.chunk_rest(seq__45179_45928__$1);
var G__45931 = c__4679__auto___45929;
var G__45932 = cljs.core.count(c__4679__auto___45929);
var G__45933 = (0);
seq__45179_45918 = G__45930;
chunk__45180_45919 = G__45931;
count__45181_45920 = G__45932;
i__45182_45921 = G__45933;
continue;
} else {
var node_45934 = cljs.core.first(seq__45179_45928__$1);
fragment.appendChild(shadow.dom._to_dom(node_45934));


var G__45935 = cljs.core.next(seq__45179_45928__$1);
var G__45936 = null;
var G__45937 = (0);
var G__45938 = (0);
seq__45179_45918 = G__45935;
chunk__45180_45919 = G__45936;
count__45181_45920 = G__45937;
i__45182_45921 = G__45938;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45171){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45171));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45205_45940 = cljs.core.seq(scripts);
var chunk__45206_45941 = null;
var count__45207_45942 = (0);
var i__45208_45943 = (0);
while(true){
if((i__45208_45943 < count__45207_45942)){
var vec__45218_45944 = chunk__45206_45941.cljs$core$IIndexed$_nth$arity$2(null,i__45208_45943);
var script_tag_45945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45218_45944,(0),null);
var script_body_45946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45218_45944,(1),null);
eval(script_body_45946);


var G__45947 = seq__45205_45940;
var G__45948 = chunk__45206_45941;
var G__45949 = count__45207_45942;
var G__45950 = (i__45208_45943 + (1));
seq__45205_45940 = G__45947;
chunk__45206_45941 = G__45948;
count__45207_45942 = G__45949;
i__45208_45943 = G__45950;
continue;
} else {
var temp__5804__auto___45951 = cljs.core.seq(seq__45205_45940);
if(temp__5804__auto___45951){
var seq__45205_45952__$1 = temp__5804__auto___45951;
if(cljs.core.chunked_seq_QMARK_(seq__45205_45952__$1)){
var c__4679__auto___45953 = cljs.core.chunk_first(seq__45205_45952__$1);
var G__45954 = cljs.core.chunk_rest(seq__45205_45952__$1);
var G__45955 = c__4679__auto___45953;
var G__45956 = cljs.core.count(c__4679__auto___45953);
var G__45957 = (0);
seq__45205_45940 = G__45954;
chunk__45206_45941 = G__45955;
count__45207_45942 = G__45956;
i__45208_45943 = G__45957;
continue;
} else {
var vec__45223_45958 = cljs.core.first(seq__45205_45952__$1);
var script_tag_45959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45223_45958,(0),null);
var script_body_45960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45223_45958,(1),null);
eval(script_body_45960);


var G__45963 = cljs.core.next(seq__45205_45952__$1);
var G__45964 = null;
var G__45965 = (0);
var G__45966 = (0);
seq__45205_45940 = G__45963;
chunk__45206_45941 = G__45964;
count__45207_45942 = G__45965;
i__45208_45943 = G__45966;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45227){
var vec__45228 = p__45227;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45238 = arguments.length;
switch (G__45238) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45247 = cljs.core.seq(style_keys);
var chunk__45248 = null;
var count__45249 = (0);
var i__45250 = (0);
while(true){
if((i__45250 < count__45249)){
var it = chunk__45248.cljs$core$IIndexed$_nth$arity$2(null,i__45250);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45971 = seq__45247;
var G__45972 = chunk__45248;
var G__45973 = count__45249;
var G__45974 = (i__45250 + (1));
seq__45247 = G__45971;
chunk__45248 = G__45972;
count__45249 = G__45973;
i__45250 = G__45974;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__45247);
if(temp__5804__auto__){
var seq__45247__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45247__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45247__$1);
var G__45975 = cljs.core.chunk_rest(seq__45247__$1);
var G__45976 = c__4679__auto__;
var G__45977 = cljs.core.count(c__4679__auto__);
var G__45978 = (0);
seq__45247 = G__45975;
chunk__45248 = G__45976;
count__45249 = G__45977;
i__45250 = G__45978;
continue;
} else {
var it = cljs.core.first(seq__45247__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45979 = cljs.core.next(seq__45247__$1);
var G__45980 = null;
var G__45981 = (0);
var G__45982 = (0);
seq__45247 = G__45979;
chunk__45248 = G__45980;
count__45249 = G__45981;
i__45250 = G__45982;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45272,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45285 = k45272;
var G__45285__$1 = (((G__45285 instanceof cljs.core.Keyword))?G__45285.fqn:null);
switch (G__45285__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45272,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45291){
var vec__45294 = p__45291;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45294,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45271){
var self__ = this;
var G__45271__$1 = this;
return (new cljs.core.RecordIter((0),G__45271__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45273,other45274){
var self__ = this;
var this45273__$1 = this;
return (((!((other45274 == null)))) && ((((this45273__$1.constructor === other45274.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45273__$1.x,other45274.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45273__$1.y,other45274.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45273__$1.__extmap,other45274.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45272){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45309 = k45272;
var G__45309__$1 = (((G__45309 instanceof cljs.core.Keyword))?G__45309.fqn:null);
switch (G__45309__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45272);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45271){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45312 = cljs.core.keyword_identical_QMARK_;
var expr__45313 = k__4511__auto__;
if(cljs.core.truth_((pred__45312.cljs$core$IFn$_invoke$arity$2 ? pred__45312.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45313) : pred__45312.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45313)))){
return (new shadow.dom.Coordinate(G__45271,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45312.cljs$core$IFn$_invoke$arity$2 ? pred__45312.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45313) : pred__45312.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45313)))){
return (new shadow.dom.Coordinate(self__.x,G__45271,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45271),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45271){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45271,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45276){
var extmap__4542__auto__ = (function (){var G__45350 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45276,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45276)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45350);
} else {
return G__45350;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45276),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45276),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k45371,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__45387 = k45371;
var G__45387__$1 = (((G__45387 instanceof cljs.core.Keyword))?G__45387.fqn:null);
switch (G__45387__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45371,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__45391){
var vec__45393 = p__45391;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45393,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45393,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45370){
var self__ = this;
var G__45370__$1 = this;
return (new cljs.core.RecordIter((0),G__45370__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45372,other45373){
var self__ = this;
var this45372__$1 = this;
return (((!((other45373 == null)))) && ((((this45372__$1.constructor === other45373.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45372__$1.w,other45373.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45372__$1.h,other45373.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45372__$1.__extmap,other45373.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k45371){
var self__ = this;
var this__4509__auto____$1 = this;
var G__45426 = k45371;
var G__45426__$1 = (((G__45426 instanceof cljs.core.Keyword))?G__45426.fqn:null);
switch (G__45426__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45371);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__45370){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__45430 = cljs.core.keyword_identical_QMARK_;
var expr__45431 = k__4511__auto__;
if(cljs.core.truth_((pred__45430.cljs$core$IFn$_invoke$arity$2 ? pred__45430.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45431) : pred__45430.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45431)))){
return (new shadow.dom.Size(G__45370,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45430.cljs$core$IFn$_invoke$arity$2 ? pred__45430.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45431) : pred__45430.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45431)))){
return (new shadow.dom.Size(self__.w,G__45370,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__45370),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__45370){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45370,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45377){
var extmap__4542__auto__ = (function (){var G__45446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45377,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45377)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45446);
} else {
return G__45446;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45377),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45377),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__46017 = (i + (1));
var G__46018 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46017;
ret = G__46018;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45503){
var vec__45504 = p__45503;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45504,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45512 = arguments.length;
switch (G__45512) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__46029 = ps;
var G__46030 = (i + (1));
el__$1 = G__46029;
i = G__46030;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45543 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45543,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45547_46048 = cljs.core.seq(props);
var chunk__45548_46049 = null;
var count__45549_46050 = (0);
var i__45550_46051 = (0);
while(true){
if((i__45550_46051 < count__45549_46050)){
var vec__45574_46052 = chunk__45548_46049.cljs$core$IIndexed$_nth$arity$2(null,i__45550_46051);
var k_46053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574_46052,(0),null);
var v_46054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45574_46052,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_46053);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46053),v_46054);


var G__46060 = seq__45547_46048;
var G__46061 = chunk__45548_46049;
var G__46062 = count__45549_46050;
var G__46063 = (i__45550_46051 + (1));
seq__45547_46048 = G__46060;
chunk__45548_46049 = G__46061;
count__45549_46050 = G__46062;
i__45550_46051 = G__46063;
continue;
} else {
var temp__5804__auto___46064 = cljs.core.seq(seq__45547_46048);
if(temp__5804__auto___46064){
var seq__45547_46065__$1 = temp__5804__auto___46064;
if(cljs.core.chunked_seq_QMARK_(seq__45547_46065__$1)){
var c__4679__auto___46066 = cljs.core.chunk_first(seq__45547_46065__$1);
var G__46067 = cljs.core.chunk_rest(seq__45547_46065__$1);
var G__46068 = c__4679__auto___46066;
var G__46069 = cljs.core.count(c__4679__auto___46066);
var G__46070 = (0);
seq__45547_46048 = G__46067;
chunk__45548_46049 = G__46068;
count__45549_46050 = G__46069;
i__45550_46051 = G__46070;
continue;
} else {
var vec__45578_46071 = cljs.core.first(seq__45547_46065__$1);
var k_46072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45578_46071,(0),null);
var v_46073 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45578_46071,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_46072);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46072),v_46073);


var G__46075 = cljs.core.next(seq__45547_46065__$1);
var G__46076 = null;
var G__46077 = (0);
var G__46078 = (0);
seq__45547_46048 = G__46075;
chunk__45548_46049 = G__46076;
count__45549_46050 = G__46077;
i__45550_46051 = G__46078;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45593 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45593,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45593,(1),null);
var seq__45597_46079 = cljs.core.seq(node_children);
var chunk__45599_46080 = null;
var count__45600_46081 = (0);
var i__45601_46082 = (0);
while(true){
if((i__45601_46082 < count__45600_46081)){
var child_struct_46083 = chunk__45599_46080.cljs$core$IIndexed$_nth$arity$2(null,i__45601_46082);
if((!((child_struct_46083 == null)))){
if(typeof child_struct_46083 === 'string'){
var text_46084 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46084),child_struct_46083].join(''));
} else {
var children_46085 = shadow.dom.svg_node(child_struct_46083);
if(cljs.core.seq_QMARK_(children_46085)){
var seq__45645_46086 = cljs.core.seq(children_46085);
var chunk__45647_46087 = null;
var count__45648_46088 = (0);
var i__45649_46089 = (0);
while(true){
if((i__45649_46089 < count__45648_46088)){
var child_46090 = chunk__45647_46087.cljs$core$IIndexed$_nth$arity$2(null,i__45649_46089);
if(cljs.core.truth_(child_46090)){
node.appendChild(child_46090);


var G__46091 = seq__45645_46086;
var G__46092 = chunk__45647_46087;
var G__46093 = count__45648_46088;
var G__46094 = (i__45649_46089 + (1));
seq__45645_46086 = G__46091;
chunk__45647_46087 = G__46092;
count__45648_46088 = G__46093;
i__45649_46089 = G__46094;
continue;
} else {
var G__46095 = seq__45645_46086;
var G__46096 = chunk__45647_46087;
var G__46097 = count__45648_46088;
var G__46098 = (i__45649_46089 + (1));
seq__45645_46086 = G__46095;
chunk__45647_46087 = G__46096;
count__45648_46088 = G__46097;
i__45649_46089 = G__46098;
continue;
}
} else {
var temp__5804__auto___46099 = cljs.core.seq(seq__45645_46086);
if(temp__5804__auto___46099){
var seq__45645_46100__$1 = temp__5804__auto___46099;
if(cljs.core.chunked_seq_QMARK_(seq__45645_46100__$1)){
var c__4679__auto___46101 = cljs.core.chunk_first(seq__45645_46100__$1);
var G__46102 = cljs.core.chunk_rest(seq__45645_46100__$1);
var G__46103 = c__4679__auto___46101;
var G__46104 = cljs.core.count(c__4679__auto___46101);
var G__46105 = (0);
seq__45645_46086 = G__46102;
chunk__45647_46087 = G__46103;
count__45648_46088 = G__46104;
i__45649_46089 = G__46105;
continue;
} else {
var child_46106 = cljs.core.first(seq__45645_46100__$1);
if(cljs.core.truth_(child_46106)){
node.appendChild(child_46106);


var G__46107 = cljs.core.next(seq__45645_46100__$1);
var G__46108 = null;
var G__46109 = (0);
var G__46110 = (0);
seq__45645_46086 = G__46107;
chunk__45647_46087 = G__46108;
count__45648_46088 = G__46109;
i__45649_46089 = G__46110;
continue;
} else {
var G__46111 = cljs.core.next(seq__45645_46100__$1);
var G__46112 = null;
var G__46113 = (0);
var G__46114 = (0);
seq__45645_46086 = G__46111;
chunk__45647_46087 = G__46112;
count__45648_46088 = G__46113;
i__45649_46089 = G__46114;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46085);
}
}


var G__46115 = seq__45597_46079;
var G__46116 = chunk__45599_46080;
var G__46117 = count__45600_46081;
var G__46118 = (i__45601_46082 + (1));
seq__45597_46079 = G__46115;
chunk__45599_46080 = G__46116;
count__45600_46081 = G__46117;
i__45601_46082 = G__46118;
continue;
} else {
var G__46119 = seq__45597_46079;
var G__46120 = chunk__45599_46080;
var G__46121 = count__45600_46081;
var G__46122 = (i__45601_46082 + (1));
seq__45597_46079 = G__46119;
chunk__45599_46080 = G__46120;
count__45600_46081 = G__46121;
i__45601_46082 = G__46122;
continue;
}
} else {
var temp__5804__auto___46125 = cljs.core.seq(seq__45597_46079);
if(temp__5804__auto___46125){
var seq__45597_46126__$1 = temp__5804__auto___46125;
if(cljs.core.chunked_seq_QMARK_(seq__45597_46126__$1)){
var c__4679__auto___46127 = cljs.core.chunk_first(seq__45597_46126__$1);
var G__46128 = cljs.core.chunk_rest(seq__45597_46126__$1);
var G__46129 = c__4679__auto___46127;
var G__46130 = cljs.core.count(c__4679__auto___46127);
var G__46131 = (0);
seq__45597_46079 = G__46128;
chunk__45599_46080 = G__46129;
count__45600_46081 = G__46130;
i__45601_46082 = G__46131;
continue;
} else {
var child_struct_46132 = cljs.core.first(seq__45597_46126__$1);
if((!((child_struct_46132 == null)))){
if(typeof child_struct_46132 === 'string'){
var text_46133 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46133),child_struct_46132].join(''));
} else {
var children_46134 = shadow.dom.svg_node(child_struct_46132);
if(cljs.core.seq_QMARK_(children_46134)){
var seq__45665_46136 = cljs.core.seq(children_46134);
var chunk__45667_46137 = null;
var count__45668_46138 = (0);
var i__45669_46139 = (0);
while(true){
if((i__45669_46139 < count__45668_46138)){
var child_46140 = chunk__45667_46137.cljs$core$IIndexed$_nth$arity$2(null,i__45669_46139);
if(cljs.core.truth_(child_46140)){
node.appendChild(child_46140);


var G__46142 = seq__45665_46136;
var G__46143 = chunk__45667_46137;
var G__46144 = count__45668_46138;
var G__46145 = (i__45669_46139 + (1));
seq__45665_46136 = G__46142;
chunk__45667_46137 = G__46143;
count__45668_46138 = G__46144;
i__45669_46139 = G__46145;
continue;
} else {
var G__46146 = seq__45665_46136;
var G__46147 = chunk__45667_46137;
var G__46148 = count__45668_46138;
var G__46149 = (i__45669_46139 + (1));
seq__45665_46136 = G__46146;
chunk__45667_46137 = G__46147;
count__45668_46138 = G__46148;
i__45669_46139 = G__46149;
continue;
}
} else {
var temp__5804__auto___46150__$1 = cljs.core.seq(seq__45665_46136);
if(temp__5804__auto___46150__$1){
var seq__45665_46151__$1 = temp__5804__auto___46150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45665_46151__$1)){
var c__4679__auto___46152 = cljs.core.chunk_first(seq__45665_46151__$1);
var G__46153 = cljs.core.chunk_rest(seq__45665_46151__$1);
var G__46154 = c__4679__auto___46152;
var G__46155 = cljs.core.count(c__4679__auto___46152);
var G__46156 = (0);
seq__45665_46136 = G__46153;
chunk__45667_46137 = G__46154;
count__45668_46138 = G__46155;
i__45669_46139 = G__46156;
continue;
} else {
var child_46157 = cljs.core.first(seq__45665_46151__$1);
if(cljs.core.truth_(child_46157)){
node.appendChild(child_46157);


var G__46158 = cljs.core.next(seq__45665_46151__$1);
var G__46159 = null;
var G__46160 = (0);
var G__46161 = (0);
seq__45665_46136 = G__46158;
chunk__45667_46137 = G__46159;
count__45668_46138 = G__46160;
i__45669_46139 = G__46161;
continue;
} else {
var G__46166 = cljs.core.next(seq__45665_46151__$1);
var G__46167 = null;
var G__46168 = (0);
var G__46169 = (0);
seq__45665_46136 = G__46166;
chunk__45667_46137 = G__46167;
count__45668_46138 = G__46168;
i__45669_46139 = G__46169;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46134);
}
}


var G__46170 = cljs.core.next(seq__45597_46126__$1);
var G__46171 = null;
var G__46172 = (0);
var G__46173 = (0);
seq__45597_46079 = G__46170;
chunk__45599_46080 = G__46171;
count__45600_46081 = G__46172;
i__45601_46082 = G__46173;
continue;
} else {
var G__46174 = cljs.core.next(seq__45597_46126__$1);
var G__46175 = null;
var G__46176 = (0);
var G__46177 = (0);
seq__45597_46079 = G__46174;
chunk__45599_46080 = G__46175;
count__45600_46081 = G__46176;
i__45601_46082 = G__46177;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46191 = arguments.length;
var i__4865__auto___46192 = (0);
while(true){
if((i__4865__auto___46192 < len__4864__auto___46191)){
args__4870__auto__.push((arguments[i__4865__auto___46192]));

var G__46197 = (i__4865__auto___46192 + (1));
i__4865__auto___46192 = G__46197;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45688){
var G__45689 = cljs.core.first(seq45688);
var seq45688__$1 = cljs.core.next(seq45688);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45689,seq45688__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45708 = arguments.length;
switch (G__45708) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__33396__auto___46223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_45725){
var state_val_45726 = (state_45725[(1)]);
if((state_val_45726 === (1))){
var state_45725__$1 = state_45725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45725__$1,(2),once_or_cleanup);
} else {
if((state_val_45726 === (2))){
var inst_45721 = (state_45725[(2)]);
var inst_45722 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45725__$1 = (function (){var statearr_45731 = state_45725;
(statearr_45731[(7)] = inst_45721);

return statearr_45731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45725__$1,inst_45722);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33326__auto__ = null;
var shadow$dom$state_machine__33326__auto____0 = (function (){
var statearr_45732 = [null,null,null,null,null,null,null,null];
(statearr_45732[(0)] = shadow$dom$state_machine__33326__auto__);

(statearr_45732[(1)] = (1));

return statearr_45732;
});
var shadow$dom$state_machine__33326__auto____1 = (function (state_45725){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_45725);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e45733){var ex__33329__auto__ = e45733;
var statearr_45734_46250 = state_45725;
(statearr_45734_46250[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_45725[(4)]))){
var statearr_45735_46251 = state_45725;
(statearr_45735_46251[(1)] = cljs.core.first((state_45725[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46256 = state_45725;
state_45725 = G__46256;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
shadow$dom$state_machine__33326__auto__ = function(state_45725){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33326__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33326__auto____1.call(this,state_45725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33326__auto____0;
shadow$dom$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33326__auto____1;
return shadow$dom$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_45736 = f__33397__auto__();
(statearr_45736[(6)] = c__33396__auto___46223);

return statearr_45736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
