goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__48606 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__48607 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__48607);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__48609 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__48610 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__48610);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__48609);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__48606);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__48620 = arguments.length;
switch (G__48620) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__48629 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48629,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48629,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__48636_48669 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__48637_48670 = null;
var count__48638_48671 = (0);
var i__48639_48672 = (0);
while(true){
if((i__48639_48672 < count__48638_48671)){
var vec__48650_48673 = chunk__48637_48670.cljs$core$IIndexed$_nth$arity$2(null,i__48639_48672);
var container_48674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48650_48673,(0),null);
var comp_48675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48650_48673,(1),null);
reagent.dom.re_render_component(comp_48675,container_48674);


var G__48676 = seq__48636_48669;
var G__48677 = chunk__48637_48670;
var G__48678 = count__48638_48671;
var G__48679 = (i__48639_48672 + (1));
seq__48636_48669 = G__48676;
chunk__48637_48670 = G__48677;
count__48638_48671 = G__48678;
i__48639_48672 = G__48679;
continue;
} else {
var temp__5804__auto___48684 = cljs.core.seq(seq__48636_48669);
if(temp__5804__auto___48684){
var seq__48636_48686__$1 = temp__5804__auto___48684;
if(cljs.core.chunked_seq_QMARK_(seq__48636_48686__$1)){
var c__4679__auto___48687 = cljs.core.chunk_first(seq__48636_48686__$1);
var G__48688 = cljs.core.chunk_rest(seq__48636_48686__$1);
var G__48689 = c__4679__auto___48687;
var G__48690 = cljs.core.count(c__4679__auto___48687);
var G__48691 = (0);
seq__48636_48669 = G__48688;
chunk__48637_48670 = G__48689;
count__48638_48671 = G__48690;
i__48639_48672 = G__48691;
continue;
} else {
var vec__48655_48692 = cljs.core.first(seq__48636_48686__$1);
var container_48693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48655_48692,(0),null);
var comp_48694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48655_48692,(1),null);
reagent.dom.re_render_component(comp_48694,container_48693);


var G__48695 = cljs.core.next(seq__48636_48686__$1);
var G__48696 = null;
var G__48697 = (0);
var G__48698 = (0);
seq__48636_48669 = G__48695;
chunk__48637_48670 = G__48696;
count__48638_48671 = G__48697;
i__48639_48672 = G__48698;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
