goog.provide('reagent.dom.server');
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(var_args){
var G__31810 = arguments.length;
switch (G__31810) {
case 1:
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1 = (function (component){
return reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2(component,reagent.impl.template.default_compiler);
}));

(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$2 = (function (component,compiler){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__31814 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__31815 = true;
(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__31815);

try{return shadow.js.shim.module$react_dom$server.renderToString(reagent.impl.protocols.as_element(compiler,component));
}finally {(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__31814);
}}));

(reagent.dom.server.render_to_string.cljs$lang$maxFixedArity = 2);

/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(var_args){
var G__31820 = arguments.length;
switch (G__31820) {
case 1:
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$1 = (function (component){
return reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2(component,reagent.impl.template.default_compiler);
}));

(reagent.dom.server.render_to_static_markup.cljs$core$IFn$_invoke$arity$2 = (function (component,compiler){
reagent.ratom.flush_BANG_();

var _STAR_non_reactive_STAR__orig_val__31822 = reagent.impl.util._STAR_non_reactive_STAR_;
var _STAR_non_reactive_STAR__temp_val__31823 = true;
(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__temp_val__31823);

try{return shadow.js.shim.module$react_dom$server.renderToStaticMarkup(reagent.impl.protocols.as_element(compiler,component));
}finally {(reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR__orig_val__31822);
}}));

(reagent.dom.server.render_to_static_markup.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reagent.dom.server.js.map
