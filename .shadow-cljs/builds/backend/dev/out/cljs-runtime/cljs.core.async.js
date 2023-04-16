goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33454 = arguments.length;
switch (G__33454) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33455 = (function (f,blockable,meta33456){
this.f = f;
this.blockable = blockable;
this.meta33456 = meta33456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33457,meta33456__$1){
var self__ = this;
var _33457__$1 = this;
return (new cljs.core.async.t_cljs$core$async33455(self__.f,self__.blockable,meta33456__$1));
}));

(cljs.core.async.t_cljs$core$async33455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33457){
var self__ = this;
var _33457__$1 = this;
return self__.meta33456;
}));

(cljs.core.async.t_cljs$core$async33455.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33455.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33456","meta33456",-1566553600,null)], null);
}));

(cljs.core.async.t_cljs$core$async33455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33455");

(cljs.core.async.t_cljs$core$async33455.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33455.
 */
cljs.core.async.__GT_t_cljs$core$async33455 = (function cljs$core$async$__GT_t_cljs$core$async33455(f__$1,blockable__$1,meta33456){
return (new cljs.core.async.t_cljs$core$async33455(f__$1,blockable__$1,meta33456));
});

}

return (new cljs.core.async.t_cljs$core$async33455(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33460 = arguments.length;
switch (G__33460) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33462 = arguments.length;
switch (G__33462) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33464 = arguments.length;
switch (G__33464) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34891 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34891) : fn1.call(null,val_34891));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34891) : fn1.call(null,val_34891));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33466 = arguments.length;
switch (G__33466) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___34897 = n;
var x_34898 = (0);
while(true){
if((x_34898 < n__4741__auto___34897)){
(a[x_34898] = x_34898);

var G__34899 = (x_34898 + (1));
x_34898 = G__34899;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33467 = (function (flag,meta33468){
this.flag = flag;
this.meta33468 = meta33468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33469,meta33468__$1){
var self__ = this;
var _33469__$1 = this;
return (new cljs.core.async.t_cljs$core$async33467(self__.flag,meta33468__$1));
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33469){
var self__ = this;
var _33469__$1 = this;
return self__.meta33468;
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33468","meta33468",-54574121,null)], null);
}));

(cljs.core.async.t_cljs$core$async33467.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33467");

(cljs.core.async.t_cljs$core$async33467.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33467");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33467.
 */
cljs.core.async.__GT_t_cljs$core$async33467 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33467(flag__$1,meta33468){
return (new cljs.core.async.t_cljs$core$async33467(flag__$1,meta33468));
});

}

return (new cljs.core.async.t_cljs$core$async33467(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33470 = (function (flag,cb,meta33471){
this.flag = flag;
this.cb = cb;
this.meta33471 = meta33471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33472,meta33471__$1){
var self__ = this;
var _33472__$1 = this;
return (new cljs.core.async.t_cljs$core$async33470(self__.flag,self__.cb,meta33471__$1));
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33472){
var self__ = this;
var _33472__$1 = this;
return self__.meta33471;
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33470.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33471","meta33471",1741452903,null)], null);
}));

(cljs.core.async.t_cljs$core$async33470.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33470.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33470");

(cljs.core.async.t_cljs$core$async33470.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33470");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33470.
 */
cljs.core.async.__GT_t_cljs$core$async33470 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33470(flag__$1,cb__$1,meta33471){
return (new cljs.core.async.t_cljs$core$async33470(flag__$1,cb__$1,meta33471));
});

}

return (new cljs.core.async.t_cljs$core$async33470(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33473_SHARP_){
var G__33475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33473_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33475) : fret.call(null,G__33475));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33474_SHARP_){
var G__33476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33474_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33476) : fret.call(null,G__33476));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34900 = (i + (1));
i = G__34900;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34901 = arguments.length;
var i__4865__auto___34902 = (0);
while(true){
if((i__4865__auto___34902 < len__4864__auto___34901)){
args__4870__auto__.push((arguments[i__4865__auto___34902]));

var G__34903 = (i__4865__auto___34902 + (1));
i__4865__auto___34902 = G__34903;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33479){
var map__33480 = p__33479;
var map__33480__$1 = cljs.core.__destructure_map(map__33480);
var opts = map__33480__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33477){
var G__33478 = cljs.core.first(seq33477);
var seq33477__$1 = cljs.core.next(seq33477);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33478,seq33477__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33482 = arguments.length;
switch (G__33482) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33396__auto___34905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33506){
var state_val_33507 = (state_33506[(1)]);
if((state_val_33507 === (7))){
var inst_33502 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33508_34906 = state_33506__$1;
(statearr_33508_34906[(2)] = inst_33502);

(statearr_33508_34906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (1))){
var state_33506__$1 = state_33506;
var statearr_33509_34907 = state_33506__$1;
(statearr_33509_34907[(2)] = null);

(statearr_33509_34907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (4))){
var inst_33485 = (state_33506[(7)]);
var inst_33485__$1 = (state_33506[(2)]);
var inst_33486 = (inst_33485__$1 == null);
var state_33506__$1 = (function (){var statearr_33510 = state_33506;
(statearr_33510[(7)] = inst_33485__$1);

return statearr_33510;
})();
if(cljs.core.truth_(inst_33486)){
var statearr_33511_34908 = state_33506__$1;
(statearr_33511_34908[(1)] = (5));

} else {
var statearr_33512_34909 = state_33506__$1;
(statearr_33512_34909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (13))){
var state_33506__$1 = state_33506;
var statearr_33513_34910 = state_33506__$1;
(statearr_33513_34910[(2)] = null);

(statearr_33513_34910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (6))){
var inst_33485 = (state_33506[(7)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33506__$1,(11),to,inst_33485);
} else {
if((state_val_33507 === (3))){
var inst_33504 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33506__$1,inst_33504);
} else {
if((state_val_33507 === (12))){
var state_33506__$1 = state_33506;
var statearr_33514_34911 = state_33506__$1;
(statearr_33514_34911[(2)] = null);

(statearr_33514_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (2))){
var state_33506__$1 = state_33506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33506__$1,(4),from);
} else {
if((state_val_33507 === (11))){
var inst_33495 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
if(cljs.core.truth_(inst_33495)){
var statearr_33515_34912 = state_33506__$1;
(statearr_33515_34912[(1)] = (12));

} else {
var statearr_33516_34913 = state_33506__$1;
(statearr_33516_34913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (9))){
var state_33506__$1 = state_33506;
var statearr_33517_34914 = state_33506__$1;
(statearr_33517_34914[(2)] = null);

(statearr_33517_34914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (5))){
var state_33506__$1 = state_33506;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33518_34915 = state_33506__$1;
(statearr_33518_34915[(1)] = (8));

} else {
var statearr_33519_34916 = state_33506__$1;
(statearr_33519_34916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (14))){
var inst_33500 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33520_34917 = state_33506__$1;
(statearr_33520_34917[(2)] = inst_33500);

(statearr_33520_34917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (10))){
var inst_33492 = (state_33506[(2)]);
var state_33506__$1 = state_33506;
var statearr_33521_34918 = state_33506__$1;
(statearr_33521_34918[(2)] = inst_33492);

(statearr_33521_34918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33507 === (8))){
var inst_33489 = cljs.core.async.close_BANG_(to);
var state_33506__$1 = state_33506;
var statearr_33522_34919 = state_33506__$1;
(statearr_33522_34919[(2)] = inst_33489);

(statearr_33522_34919[(1)] = (10));


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
}
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_33523 = [null,null,null,null,null,null,null,null];
(statearr_33523[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_33523[(1)] = (1));

return statearr_33523;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_33506){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33506);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33524){var ex__33329__auto__ = e33524;
var statearr_33525_34922 = state_33506;
(statearr_33525_34922[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33506[(4)]))){
var statearr_33526_34923 = state_33506;
(statearr_33526_34923[(1)] = cljs.core.first((state_33506[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34924 = state_33506;
state_33506 = G__34924;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_33506){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_33506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33527 = f__33397__auto__();
(statearr_33527[(6)] = c__33396__auto___34905);

return statearr_33527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33528){
var vec__33529 = p__33528;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(1),null);
var job = vec__33529;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33396__auto___34928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33536){
var state_val_33537 = (state_33536[(1)]);
if((state_val_33537 === (1))){
var state_33536__$1 = state_33536;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33536__$1,(2),res,v);
} else {
if((state_val_33537 === (2))){
var inst_33533 = (state_33536[(2)]);
var inst_33534 = cljs.core.async.close_BANG_(res);
var state_33536__$1 = (function (){var statearr_33538 = state_33536;
(statearr_33538[(7)] = inst_33533);

return statearr_33538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33536__$1,inst_33534);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_33539 = [null,null,null,null,null,null,null,null];
(statearr_33539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_33539[(1)] = (1));

return statearr_33539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_33536){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33536);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33540){var ex__33329__auto__ = e33540;
var statearr_33541_34929 = state_33536;
(statearr_33541_34929[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33536[(4)]))){
var statearr_33542_34930 = state_33536;
(statearr_33542_34930[(1)] = cljs.core.first((state_33536[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34931 = state_33536;
state_33536 = G__34931;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_33536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_33536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33543 = f__33397__auto__();
(statearr_33543[(6)] = c__33396__auto___34928);

return statearr_33543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33544){
var vec__33545 = p__33544;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33545,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33545,(1),null);
var job = vec__33545;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___34933 = n;
var __34934 = (0);
while(true){
if((__34934 < n__4741__auto___34933)){
var G__33548_34935 = type;
var G__33548_34936__$1 = (((G__33548_34935 instanceof cljs.core.Keyword))?G__33548_34935.fqn:null);
switch (G__33548_34936__$1) {
case "compute":
var c__33396__auto___34938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34934,c__33396__auto___34938,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async){
return (function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = ((function (__34934,c__33396__auto___34938,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async){
return (function (state_33561){
var state_val_33562 = (state_33561[(1)]);
if((state_val_33562 === (1))){
var state_33561__$1 = state_33561;
var statearr_33563_34939 = state_33561__$1;
(statearr_33563_34939[(2)] = null);

(statearr_33563_34939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (2))){
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33561__$1,(4),jobs);
} else {
if((state_val_33562 === (3))){
var inst_33559 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33561__$1,inst_33559);
} else {
if((state_val_33562 === (4))){
var inst_33551 = (state_33561[(2)]);
var inst_33552 = process(inst_33551);
var state_33561__$1 = state_33561;
if(cljs.core.truth_(inst_33552)){
var statearr_33564_34940 = state_33561__$1;
(statearr_33564_34940[(1)] = (5));

} else {
var statearr_33565_34941 = state_33561__$1;
(statearr_33565_34941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (5))){
var state_33561__$1 = state_33561;
var statearr_33566_34942 = state_33561__$1;
(statearr_33566_34942[(2)] = null);

(statearr_33566_34942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (6))){
var state_33561__$1 = state_33561;
var statearr_33567_34943 = state_33561__$1;
(statearr_33567_34943[(2)] = null);

(statearr_33567_34943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (7))){
var inst_33557 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33568_34944 = state_33561__$1;
(statearr_33568_34944[(2)] = inst_33557);

(statearr_33568_34944[(1)] = (3));


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
});})(__34934,c__33396__auto___34938,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async))
;
return ((function (__34934,switch__33325__auto__,c__33396__auto___34938,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_33569 = [null,null,null,null,null,null,null];
(statearr_33569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_33569[(1)] = (1));

return statearr_33569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_33561){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33561);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33570){var ex__33329__auto__ = e33570;
var statearr_33571_34945 = state_33561;
(statearr_33571_34945[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33561[(4)]))){
var statearr_33572_34947 = state_33561;
(statearr_33572_34947[(1)] = cljs.core.first((state_33561[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_33561;
state_33561 = G__34948;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_33561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_33561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
;})(__34934,switch__33325__auto__,c__33396__auto___34938,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async))
})();
var state__33398__auto__ = (function (){var statearr_33573 = f__33397__auto__();
(statearr_33573[(6)] = c__33396__auto___34938);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
});})(__34934,c__33396__auto___34938,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async))
);


break;
case "async":
var c__33396__auto___34951 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34934,c__33396__auto___34951,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async){
return (function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = ((function (__34934,c__33396__auto___34951,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async){
return (function (state_33586){
var state_val_33587 = (state_33586[(1)]);
if((state_val_33587 === (1))){
var state_33586__$1 = state_33586;
var statearr_33588_34953 = state_33586__$1;
(statearr_33588_34953[(2)] = null);

(statearr_33588_34953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (2))){
var state_33586__$1 = state_33586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33586__$1,(4),jobs);
} else {
if((state_val_33587 === (3))){
var inst_33584 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33586__$1,inst_33584);
} else {
if((state_val_33587 === (4))){
var inst_33576 = (state_33586[(2)]);
var inst_33577 = async(inst_33576);
var state_33586__$1 = state_33586;
if(cljs.core.truth_(inst_33577)){
var statearr_33589_34954 = state_33586__$1;
(statearr_33589_34954[(1)] = (5));

} else {
var statearr_33590_34955 = state_33586__$1;
(statearr_33590_34955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (5))){
var state_33586__$1 = state_33586;
var statearr_33591_34956 = state_33586__$1;
(statearr_33591_34956[(2)] = null);

(statearr_33591_34956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (6))){
var state_33586__$1 = state_33586;
var statearr_33592_34957 = state_33586__$1;
(statearr_33592_34957[(2)] = null);

(statearr_33592_34957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33587 === (7))){
var inst_33582 = (state_33586[(2)]);
var state_33586__$1 = state_33586;
var statearr_33593_34958 = state_33586__$1;
(statearr_33593_34958[(2)] = inst_33582);

(statearr_33593_34958[(1)] = (3));


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
});})(__34934,c__33396__auto___34951,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async))
;
return ((function (__34934,switch__33325__auto__,c__33396__auto___34951,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_33594 = [null,null,null,null,null,null,null];
(statearr_33594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_33594[(1)] = (1));

return statearr_33594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_33586){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33586);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33595){var ex__33329__auto__ = e33595;
var statearr_33596_34959 = state_33586;
(statearr_33596_34959[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33586[(4)]))){
var statearr_33597_34960 = state_33586;
(statearr_33597_34960[(1)] = cljs.core.first((state_33586[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34961 = state_33586;
state_33586 = G__34961;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_33586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_33586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
;})(__34934,switch__33325__auto__,c__33396__auto___34951,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async))
})();
var state__33398__auto__ = (function (){var statearr_33598 = f__33397__auto__();
(statearr_33598[(6)] = c__33396__auto___34951);

return statearr_33598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
});})(__34934,c__33396__auto___34951,G__33548_34935,G__33548_34936__$1,n__4741__auto___34933,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33548_34936__$1)].join('')));

}

var G__34964 = (__34934 + (1));
__34934 = G__34964;
continue;
} else {
}
break;
}

var c__33396__auto___34965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33620){
var state_val_33621 = (state_33620[(1)]);
if((state_val_33621 === (7))){
var inst_33616 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
var statearr_33622_34967 = state_33620__$1;
(statearr_33622_34967[(2)] = inst_33616);

(statearr_33622_34967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (1))){
var state_33620__$1 = state_33620;
var statearr_33623_34968 = state_33620__$1;
(statearr_33623_34968[(2)] = null);

(statearr_33623_34968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (4))){
var inst_33601 = (state_33620[(7)]);
var inst_33601__$1 = (state_33620[(2)]);
var inst_33602 = (inst_33601__$1 == null);
var state_33620__$1 = (function (){var statearr_33624 = state_33620;
(statearr_33624[(7)] = inst_33601__$1);

return statearr_33624;
})();
if(cljs.core.truth_(inst_33602)){
var statearr_33625_34971 = state_33620__$1;
(statearr_33625_34971[(1)] = (5));

} else {
var statearr_33626_34972 = state_33620__$1;
(statearr_33626_34972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (6))){
var inst_33601 = (state_33620[(7)]);
var inst_33606 = (state_33620[(8)]);
var inst_33606__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33608 = [inst_33601,inst_33606__$1];
var inst_33609 = (new cljs.core.PersistentVector(null,2,(5),inst_33607,inst_33608,null));
var state_33620__$1 = (function (){var statearr_33627 = state_33620;
(statearr_33627[(8)] = inst_33606__$1);

return statearr_33627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33620__$1,(8),jobs,inst_33609);
} else {
if((state_val_33621 === (3))){
var inst_33618 = (state_33620[(2)]);
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33620__$1,inst_33618);
} else {
if((state_val_33621 === (2))){
var state_33620__$1 = state_33620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33620__$1,(4),from);
} else {
if((state_val_33621 === (9))){
var inst_33613 = (state_33620[(2)]);
var state_33620__$1 = (function (){var statearr_33628 = state_33620;
(statearr_33628[(9)] = inst_33613);

return statearr_33628;
})();
var statearr_33629_34973 = state_33620__$1;
(statearr_33629_34973[(2)] = null);

(statearr_33629_34973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (5))){
var inst_33604 = cljs.core.async.close_BANG_(jobs);
var state_33620__$1 = state_33620;
var statearr_33630_34974 = state_33620__$1;
(statearr_33630_34974[(2)] = inst_33604);

(statearr_33630_34974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33621 === (8))){
var inst_33606 = (state_33620[(8)]);
var inst_33611 = (state_33620[(2)]);
var state_33620__$1 = (function (){var statearr_33631 = state_33620;
(statearr_33631[(10)] = inst_33611);

return statearr_33631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33620__$1,(9),results,inst_33606);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_33632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33632[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_33632[(1)] = (1));

return statearr_33632;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_33620){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33620);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33633){var ex__33329__auto__ = e33633;
var statearr_33634_34975 = state_33620;
(statearr_33634_34975[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33620[(4)]))){
var statearr_33635_34976 = state_33620;
(statearr_33635_34976[(1)] = cljs.core.first((state_33620[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34979 = state_33620;
state_33620 = G__34979;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_33620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_33620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33636 = f__33397__auto__();
(statearr_33636[(6)] = c__33396__auto___34965);

return statearr_33636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33674){
var state_val_33675 = (state_33674[(1)]);
if((state_val_33675 === (7))){
var inst_33670 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33676_34980 = state_33674__$1;
(statearr_33676_34980[(2)] = inst_33670);

(statearr_33676_34980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (20))){
var state_33674__$1 = state_33674;
var statearr_33677_34981 = state_33674__$1;
(statearr_33677_34981[(2)] = null);

(statearr_33677_34981[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (1))){
var state_33674__$1 = state_33674;
var statearr_33678_34984 = state_33674__$1;
(statearr_33678_34984[(2)] = null);

(statearr_33678_34984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (4))){
var inst_33639 = (state_33674[(7)]);
var inst_33639__$1 = (state_33674[(2)]);
var inst_33640 = (inst_33639__$1 == null);
var state_33674__$1 = (function (){var statearr_33679 = state_33674;
(statearr_33679[(7)] = inst_33639__$1);

return statearr_33679;
})();
if(cljs.core.truth_(inst_33640)){
var statearr_33680_34985 = state_33674__$1;
(statearr_33680_34985[(1)] = (5));

} else {
var statearr_33681_34986 = state_33674__$1;
(statearr_33681_34986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (15))){
var inst_33652 = (state_33674[(8)]);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33674__$1,(18),to,inst_33652);
} else {
if((state_val_33675 === (21))){
var inst_33665 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33682_34987 = state_33674__$1;
(statearr_33682_34987[(2)] = inst_33665);

(statearr_33682_34987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (13))){
var inst_33667 = (state_33674[(2)]);
var state_33674__$1 = (function (){var statearr_33683 = state_33674;
(statearr_33683[(9)] = inst_33667);

return statearr_33683;
})();
var statearr_33684_34988 = state_33674__$1;
(statearr_33684_34988[(2)] = null);

(statearr_33684_34988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (6))){
var inst_33639 = (state_33674[(7)]);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33674__$1,(11),inst_33639);
} else {
if((state_val_33675 === (17))){
var inst_33660 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
if(cljs.core.truth_(inst_33660)){
var statearr_33685_34989 = state_33674__$1;
(statearr_33685_34989[(1)] = (19));

} else {
var statearr_33686_34990 = state_33674__$1;
(statearr_33686_34990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (3))){
var inst_33672 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33674__$1,inst_33672);
} else {
if((state_val_33675 === (12))){
var inst_33649 = (state_33674[(10)]);
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33674__$1,(14),inst_33649);
} else {
if((state_val_33675 === (2))){
var state_33674__$1 = state_33674;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33674__$1,(4),results);
} else {
if((state_val_33675 === (19))){
var state_33674__$1 = state_33674;
var statearr_33687_34991 = state_33674__$1;
(statearr_33687_34991[(2)] = null);

(statearr_33687_34991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (11))){
var inst_33649 = (state_33674[(2)]);
var state_33674__$1 = (function (){var statearr_33688 = state_33674;
(statearr_33688[(10)] = inst_33649);

return statearr_33688;
})();
var statearr_33689_34992 = state_33674__$1;
(statearr_33689_34992[(2)] = null);

(statearr_33689_34992[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (9))){
var state_33674__$1 = state_33674;
var statearr_33690_34993 = state_33674__$1;
(statearr_33690_34993[(2)] = null);

(statearr_33690_34993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (5))){
var state_33674__$1 = state_33674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33691_34994 = state_33674__$1;
(statearr_33691_34994[(1)] = (8));

} else {
var statearr_33692_34995 = state_33674__$1;
(statearr_33692_34995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (14))){
var inst_33652 = (state_33674[(8)]);
var inst_33654 = (state_33674[(11)]);
var inst_33652__$1 = (state_33674[(2)]);
var inst_33653 = (inst_33652__$1 == null);
var inst_33654__$1 = cljs.core.not(inst_33653);
var state_33674__$1 = (function (){var statearr_33693 = state_33674;
(statearr_33693[(8)] = inst_33652__$1);

(statearr_33693[(11)] = inst_33654__$1);

return statearr_33693;
})();
if(inst_33654__$1){
var statearr_33694_34996 = state_33674__$1;
(statearr_33694_34996[(1)] = (15));

} else {
var statearr_33695_34997 = state_33674__$1;
(statearr_33695_34997[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (16))){
var inst_33654 = (state_33674[(11)]);
var state_33674__$1 = state_33674;
var statearr_33696_34998 = state_33674__$1;
(statearr_33696_34998[(2)] = inst_33654);

(statearr_33696_34998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (10))){
var inst_33646 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33697_34999 = state_33674__$1;
(statearr_33697_34999[(2)] = inst_33646);

(statearr_33697_34999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (18))){
var inst_33657 = (state_33674[(2)]);
var state_33674__$1 = state_33674;
var statearr_33698_35000 = state_33674__$1;
(statearr_33698_35000[(2)] = inst_33657);

(statearr_33698_35000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33675 === (8))){
var inst_33643 = cljs.core.async.close_BANG_(to);
var state_33674__$1 = state_33674;
var statearr_33699_35001 = state_33674__$1;
(statearr_33699_35001[(2)] = inst_33643);

(statearr_33699_35001[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_33700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_33700[(1)] = (1));

return statearr_33700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_33674){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33674);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33701){var ex__33329__auto__ = e33701;
var statearr_33702_35002 = state_33674;
(statearr_33702_35002[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33674[(4)]))){
var statearr_33703_35003 = state_33674;
(statearr_33703_35003[(1)] = cljs.core.first((state_33674[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35004 = state_33674;
state_33674 = G__35004;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_33674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_33674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33704 = f__33397__auto__();
(statearr_33704[(6)] = c__33396__auto__);

return statearr_33704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33706 = arguments.length;
switch (G__33706) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33708 = arguments.length;
switch (G__33708) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33710 = arguments.length;
switch (G__33710) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33396__auto___35057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (7))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33738_35058 = state_33736__$1;
(statearr_33738_35058[(2)] = inst_33732);

(statearr_33738_35058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (1))){
var state_33736__$1 = state_33736;
var statearr_33739_35059 = state_33736__$1;
(statearr_33739_35059[(2)] = null);

(statearr_33739_35059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (4))){
var inst_33713 = (state_33736[(7)]);
var inst_33713__$1 = (state_33736[(2)]);
var inst_33714 = (inst_33713__$1 == null);
var state_33736__$1 = (function (){var statearr_33740 = state_33736;
(statearr_33740[(7)] = inst_33713__$1);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33714)){
var statearr_33741_35060 = state_33736__$1;
(statearr_33741_35060[(1)] = (5));

} else {
var statearr_33742_35061 = state_33736__$1;
(statearr_33742_35061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (13))){
var state_33736__$1 = state_33736;
var statearr_33743_35062 = state_33736__$1;
(statearr_33743_35062[(2)] = null);

(statearr_33743_35062[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (6))){
var inst_33713 = (state_33736[(7)]);
var inst_33719 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33713) : p.call(null,inst_33713));
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33719)){
var statearr_33744_35064 = state_33736__$1;
(statearr_33744_35064[(1)] = (9));

} else {
var statearr_33745_35065 = state_33736__$1;
(statearr_33745_35065[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (3))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (12))){
var state_33736__$1 = state_33736;
var statearr_33746_35067 = state_33736__$1;
(statearr_33746_35067[(2)] = null);

(statearr_33746_35067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (2))){
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33736__$1,(4),ch);
} else {
if((state_val_33737 === (11))){
var inst_33713 = (state_33736[(7)]);
var inst_33723 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33736__$1,(8),inst_33723,inst_33713);
} else {
if((state_val_33737 === (9))){
var state_33736__$1 = state_33736;
var statearr_33747_35070 = state_33736__$1;
(statearr_33747_35070[(2)] = tc);

(statearr_33747_35070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (5))){
var inst_33716 = cljs.core.async.close_BANG_(tc);
var inst_33717 = cljs.core.async.close_BANG_(fc);
var state_33736__$1 = (function (){var statearr_33748 = state_33736;
(statearr_33748[(8)] = inst_33716);

return statearr_33748;
})();
var statearr_33749_35071 = state_33736__$1;
(statearr_33749_35071[(2)] = inst_33717);

(statearr_33749_35071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (14))){
var inst_33730 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33750_35073 = state_33736__$1;
(statearr_33750_35073[(2)] = inst_33730);

(statearr_33750_35073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (10))){
var state_33736__$1 = state_33736;
var statearr_33751_35074 = state_33736__$1;
(statearr_33751_35074[(2)] = fc);

(statearr_33751_35074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (8))){
var inst_33725 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33725)){
var statearr_33752_35076 = state_33736__$1;
(statearr_33752_35076[(1)] = (12));

} else {
var statearr_33753_35077 = state_33736__$1;
(statearr_33753_35077[(1)] = (13));

}

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
}
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_33754 = [null,null,null,null,null,null,null,null,null];
(statearr_33754[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_33754[(1)] = (1));

return statearr_33754;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_33736){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33736);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33755){var ex__33329__auto__ = e33755;
var statearr_33756_35080 = state_33736;
(statearr_33756_35080[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33736[(4)]))){
var statearr_33757_35081 = state_33736;
(statearr_33757_35081[(1)] = cljs.core.first((state_33736[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35082 = state_33736;
state_33736 = G__35082;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33758 = f__33397__auto__();
(statearr_33758[(6)] = c__33396__auto___35057);

return statearr_33758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33780){
var state_val_33781 = (state_33780[(1)]);
if((state_val_33781 === (7))){
var inst_33776 = (state_33780[(2)]);
var state_33780__$1 = state_33780;
var statearr_33782_35086 = state_33780__$1;
(statearr_33782_35086[(2)] = inst_33776);

(statearr_33782_35086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (1))){
var inst_33759 = init;
var inst_33760 = inst_33759;
var state_33780__$1 = (function (){var statearr_33783 = state_33780;
(statearr_33783[(7)] = inst_33760);

return statearr_33783;
})();
var statearr_33784_35088 = state_33780__$1;
(statearr_33784_35088[(2)] = null);

(statearr_33784_35088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (4))){
var inst_33763 = (state_33780[(8)]);
var inst_33763__$1 = (state_33780[(2)]);
var inst_33764 = (inst_33763__$1 == null);
var state_33780__$1 = (function (){var statearr_33785 = state_33780;
(statearr_33785[(8)] = inst_33763__$1);

return statearr_33785;
})();
if(cljs.core.truth_(inst_33764)){
var statearr_33786_35089 = state_33780__$1;
(statearr_33786_35089[(1)] = (5));

} else {
var statearr_33787_35090 = state_33780__$1;
(statearr_33787_35090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (6))){
var inst_33763 = (state_33780[(8)]);
var inst_33767 = (state_33780[(9)]);
var inst_33760 = (state_33780[(7)]);
var inst_33767__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33760,inst_33763) : f.call(null,inst_33760,inst_33763));
var inst_33768 = cljs.core.reduced_QMARK_(inst_33767__$1);
var state_33780__$1 = (function (){var statearr_33788 = state_33780;
(statearr_33788[(9)] = inst_33767__$1);

return statearr_33788;
})();
if(inst_33768){
var statearr_33789_35092 = state_33780__$1;
(statearr_33789_35092[(1)] = (8));

} else {
var statearr_33790_35093 = state_33780__$1;
(statearr_33790_35093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (3))){
var inst_33778 = (state_33780[(2)]);
var state_33780__$1 = state_33780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33780__$1,inst_33778);
} else {
if((state_val_33781 === (2))){
var state_33780__$1 = state_33780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33780__$1,(4),ch);
} else {
if((state_val_33781 === (9))){
var inst_33767 = (state_33780[(9)]);
var inst_33760 = inst_33767;
var state_33780__$1 = (function (){var statearr_33791 = state_33780;
(statearr_33791[(7)] = inst_33760);

return statearr_33791;
})();
var statearr_33792_35096 = state_33780__$1;
(statearr_33792_35096[(2)] = null);

(statearr_33792_35096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (5))){
var inst_33760 = (state_33780[(7)]);
var state_33780__$1 = state_33780;
var statearr_33793_35099 = state_33780__$1;
(statearr_33793_35099[(2)] = inst_33760);

(statearr_33793_35099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (10))){
var inst_33774 = (state_33780[(2)]);
var state_33780__$1 = state_33780;
var statearr_33794_35100 = state_33780__$1;
(statearr_33794_35100[(2)] = inst_33774);

(statearr_33794_35100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33781 === (8))){
var inst_33767 = (state_33780[(9)]);
var inst_33770 = cljs.core.deref(inst_33767);
var state_33780__$1 = state_33780;
var statearr_33795_35102 = state_33780__$1;
(statearr_33795_35102[(2)] = inst_33770);

(statearr_33795_35102[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33326__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33326__auto____0 = (function (){
var statearr_33796 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33796[(0)] = cljs$core$async$reduce_$_state_machine__33326__auto__);

(statearr_33796[(1)] = (1));

return statearr_33796;
});
var cljs$core$async$reduce_$_state_machine__33326__auto____1 = (function (state_33780){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33780);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33797){var ex__33329__auto__ = e33797;
var statearr_33798_35106 = state_33780;
(statearr_33798_35106[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33780[(4)]))){
var statearr_33799_35107 = state_33780;
(statearr_33799_35107[(1)] = cljs.core.first((state_33780[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35108 = state_33780;
state_33780 = G__35108;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33326__auto__ = function(state_33780){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33326__auto____1.call(this,state_33780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33326__auto____0;
cljs$core$async$reduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33326__auto____1;
return cljs$core$async$reduce_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33800 = f__33397__auto__();
(statearr_33800[(6)] = c__33396__auto__);

return statearr_33800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33806){
var state_val_33807 = (state_33806[(1)]);
if((state_val_33807 === (1))){
var inst_33801 = cljs.core.async.reduce(f__$1,init,ch);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33806__$1,(2),inst_33801);
} else {
if((state_val_33807 === (2))){
var inst_33803 = (state_33806[(2)]);
var inst_33804 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33803) : f__$1.call(null,inst_33803));
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33806__$1,inst_33804);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33326__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33326__auto____0 = (function (){
var statearr_33808 = [null,null,null,null,null,null,null];
(statearr_33808[(0)] = cljs$core$async$transduce_$_state_machine__33326__auto__);

(statearr_33808[(1)] = (1));

return statearr_33808;
});
var cljs$core$async$transduce_$_state_machine__33326__auto____1 = (function (state_33806){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33806);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33809){var ex__33329__auto__ = e33809;
var statearr_33810_35112 = state_33806;
(statearr_33810_35112[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33806[(4)]))){
var statearr_33811_35114 = state_33806;
(statearr_33811_35114[(1)] = cljs.core.first((state_33806[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35115 = state_33806;
state_33806 = G__35115;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33326__auto__ = function(state_33806){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33326__auto____1.call(this,state_33806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33326__auto____0;
cljs$core$async$transduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33326__auto____1;
return cljs$core$async$transduce_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33812 = f__33397__auto__();
(statearr_33812[(6)] = c__33396__auto__);

return statearr_33812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33814 = arguments.length;
switch (G__33814) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33839){
var state_val_33840 = (state_33839[(1)]);
if((state_val_33840 === (7))){
var inst_33821 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33841_35122 = state_33839__$1;
(statearr_33841_35122[(2)] = inst_33821);

(statearr_33841_35122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (1))){
var inst_33815 = cljs.core.seq(coll);
var inst_33816 = inst_33815;
var state_33839__$1 = (function (){var statearr_33842 = state_33839;
(statearr_33842[(7)] = inst_33816);

return statearr_33842;
})();
var statearr_33843_35125 = state_33839__$1;
(statearr_33843_35125[(2)] = null);

(statearr_33843_35125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (4))){
var inst_33816 = (state_33839[(7)]);
var inst_33819 = cljs.core.first(inst_33816);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33839__$1,(7),ch,inst_33819);
} else {
if((state_val_33840 === (13))){
var inst_33833 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33844_35126 = state_33839__$1;
(statearr_33844_35126[(2)] = inst_33833);

(statearr_33844_35126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (6))){
var inst_33824 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33824)){
var statearr_33845_35128 = state_33839__$1;
(statearr_33845_35128[(1)] = (8));

} else {
var statearr_33846_35129 = state_33839__$1;
(statearr_33846_35129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (3))){
var inst_33837 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33839__$1,inst_33837);
} else {
if((state_val_33840 === (12))){
var state_33839__$1 = state_33839;
var statearr_33847_35131 = state_33839__$1;
(statearr_33847_35131[(2)] = null);

(statearr_33847_35131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (2))){
var inst_33816 = (state_33839[(7)]);
var state_33839__$1 = state_33839;
if(cljs.core.truth_(inst_33816)){
var statearr_33848_35134 = state_33839__$1;
(statearr_33848_35134[(1)] = (4));

} else {
var statearr_33849_35135 = state_33839__$1;
(statearr_33849_35135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (11))){
var inst_33830 = cljs.core.async.close_BANG_(ch);
var state_33839__$1 = state_33839;
var statearr_33850_35136 = state_33839__$1;
(statearr_33850_35136[(2)] = inst_33830);

(statearr_33850_35136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (9))){
var state_33839__$1 = state_33839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33851_35137 = state_33839__$1;
(statearr_33851_35137[(1)] = (11));

} else {
var statearr_33852_35138 = state_33839__$1;
(statearr_33852_35138[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (5))){
var inst_33816 = (state_33839[(7)]);
var state_33839__$1 = state_33839;
var statearr_33853_35140 = state_33839__$1;
(statearr_33853_35140[(2)] = inst_33816);

(statearr_33853_35140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (10))){
var inst_33835 = (state_33839[(2)]);
var state_33839__$1 = state_33839;
var statearr_33854_35141 = state_33839__$1;
(statearr_33854_35141[(2)] = inst_33835);

(statearr_33854_35141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33840 === (8))){
var inst_33816 = (state_33839[(7)]);
var inst_33826 = cljs.core.next(inst_33816);
var inst_33816__$1 = inst_33826;
var state_33839__$1 = (function (){var statearr_33855 = state_33839;
(statearr_33855[(7)] = inst_33816__$1);

return statearr_33855;
})();
var statearr_33856_35142 = state_33839__$1;
(statearr_33856_35142[(2)] = null);

(statearr_33856_35142[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_33857 = [null,null,null,null,null,null,null,null];
(statearr_33857[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_33857[(1)] = (1));

return statearr_33857;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_33839){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33839);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e33858){var ex__33329__auto__ = e33858;
var statearr_33859_35143 = state_33839;
(statearr_33859_35143[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33839[(4)]))){
var statearr_33860_35144 = state_33839;
(statearr_33860_35144[(1)] = cljs.core.first((state_33839[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35145 = state_33839;
state_33839 = G__35145;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_33839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_33839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_33861 = f__33397__auto__();
(statearr_33861[(6)] = c__33396__auto__);

return statearr_33861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33863 = arguments.length;
switch (G__33863) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35147 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35147(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35152 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35152(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35154 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35154(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35157 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35157(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33864 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33864 = (function (ch,cs,meta33865){
this.ch = ch;
this.cs = cs;
this.meta33865 = meta33865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33866,meta33865__$1){
var self__ = this;
var _33866__$1 = this;
return (new cljs.core.async.t_cljs$core$async33864(self__.ch,self__.cs,meta33865__$1));
}));

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33866){
var self__ = this;
var _33866__$1 = this;
return self__.meta33865;
}));

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33864.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33864.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33865","meta33865",-850917541,null)], null);
}));

(cljs.core.async.t_cljs$core$async33864.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33864");

(cljs.core.async.t_cljs$core$async33864.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33864");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33864.
 */
cljs.core.async.__GT_t_cljs$core$async33864 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33864(ch__$1,cs__$1,meta33865){
return (new cljs.core.async.t_cljs$core$async33864(ch__$1,cs__$1,meta33865));
});

}

return (new cljs.core.async.t_cljs$core$async33864(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33396__auto___35159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_33999){
var state_val_34000 = (state_33999[(1)]);
if((state_val_34000 === (7))){
var inst_33995 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34001_35161 = state_33999__$1;
(statearr_34001_35161[(2)] = inst_33995);

(statearr_34001_35161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (20))){
var inst_33900 = (state_33999[(7)]);
var inst_33912 = cljs.core.first(inst_33900);
var inst_33913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33912,(0),null);
var inst_33914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33912,(1),null);
var state_33999__$1 = (function (){var statearr_34002 = state_33999;
(statearr_34002[(8)] = inst_33913);

return statearr_34002;
})();
if(cljs.core.truth_(inst_33914)){
var statearr_34003_35164 = state_33999__$1;
(statearr_34003_35164[(1)] = (22));

} else {
var statearr_34004_35165 = state_33999__$1;
(statearr_34004_35165[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (27))){
var inst_33869 = (state_33999[(9)]);
var inst_33942 = (state_33999[(10)]);
var inst_33944 = (state_33999[(11)]);
var inst_33949 = (state_33999[(12)]);
var inst_33949__$1 = cljs.core._nth(inst_33942,inst_33944);
var inst_33950 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33949__$1,inst_33869,done);
var state_33999__$1 = (function (){var statearr_34005 = state_33999;
(statearr_34005[(12)] = inst_33949__$1);

return statearr_34005;
})();
if(cljs.core.truth_(inst_33950)){
var statearr_34006_35168 = state_33999__$1;
(statearr_34006_35168[(1)] = (30));

} else {
var statearr_34007_35169 = state_33999__$1;
(statearr_34007_35169[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (1))){
var state_33999__$1 = state_33999;
var statearr_34008_35172 = state_33999__$1;
(statearr_34008_35172[(2)] = null);

(statearr_34008_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (24))){
var inst_33900 = (state_33999[(7)]);
var inst_33919 = (state_33999[(2)]);
var inst_33920 = cljs.core.next(inst_33900);
var inst_33878 = inst_33920;
var inst_33879 = null;
var inst_33880 = (0);
var inst_33881 = (0);
var state_33999__$1 = (function (){var statearr_34009 = state_33999;
(statearr_34009[(13)] = inst_33881);

(statearr_34009[(14)] = inst_33878);

(statearr_34009[(15)] = inst_33880);

(statearr_34009[(16)] = inst_33919);

(statearr_34009[(17)] = inst_33879);

return statearr_34009;
})();
var statearr_34010_35175 = state_33999__$1;
(statearr_34010_35175[(2)] = null);

(statearr_34010_35175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (39))){
var state_33999__$1 = state_33999;
var statearr_34014_35176 = state_33999__$1;
(statearr_34014_35176[(2)] = null);

(statearr_34014_35176[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (4))){
var inst_33869 = (state_33999[(9)]);
var inst_33869__$1 = (state_33999[(2)]);
var inst_33870 = (inst_33869__$1 == null);
var state_33999__$1 = (function (){var statearr_34015 = state_33999;
(statearr_34015[(9)] = inst_33869__$1);

return statearr_34015;
})();
if(cljs.core.truth_(inst_33870)){
var statearr_34016_35179 = state_33999__$1;
(statearr_34016_35179[(1)] = (5));

} else {
var statearr_34017_35180 = state_33999__$1;
(statearr_34017_35180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (15))){
var inst_33881 = (state_33999[(13)]);
var inst_33878 = (state_33999[(14)]);
var inst_33880 = (state_33999[(15)]);
var inst_33879 = (state_33999[(17)]);
var inst_33896 = (state_33999[(2)]);
var inst_33897 = (inst_33881 + (1));
var tmp34011 = inst_33878;
var tmp34012 = inst_33880;
var tmp34013 = inst_33879;
var inst_33878__$1 = tmp34011;
var inst_33879__$1 = tmp34013;
var inst_33880__$1 = tmp34012;
var inst_33881__$1 = inst_33897;
var state_33999__$1 = (function (){var statearr_34018 = state_33999;
(statearr_34018[(13)] = inst_33881__$1);

(statearr_34018[(14)] = inst_33878__$1);

(statearr_34018[(15)] = inst_33880__$1);

(statearr_34018[(18)] = inst_33896);

(statearr_34018[(17)] = inst_33879__$1);

return statearr_34018;
})();
var statearr_34019_35183 = state_33999__$1;
(statearr_34019_35183[(2)] = null);

(statearr_34019_35183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (21))){
var inst_33923 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34023_35185 = state_33999__$1;
(statearr_34023_35185[(2)] = inst_33923);

(statearr_34023_35185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (31))){
var inst_33949 = (state_33999[(12)]);
var inst_33953 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33949);
var state_33999__$1 = state_33999;
var statearr_34024_35187 = state_33999__$1;
(statearr_34024_35187[(2)] = inst_33953);

(statearr_34024_35187[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (32))){
var inst_33941 = (state_33999[(19)]);
var inst_33942 = (state_33999[(10)]);
var inst_33944 = (state_33999[(11)]);
var inst_33943 = (state_33999[(20)]);
var inst_33955 = (state_33999[(2)]);
var inst_33956 = (inst_33944 + (1));
var tmp34020 = inst_33941;
var tmp34021 = inst_33942;
var tmp34022 = inst_33943;
var inst_33941__$1 = tmp34020;
var inst_33942__$1 = tmp34021;
var inst_33943__$1 = tmp34022;
var inst_33944__$1 = inst_33956;
var state_33999__$1 = (function (){var statearr_34025 = state_33999;
(statearr_34025[(21)] = inst_33955);

(statearr_34025[(19)] = inst_33941__$1);

(statearr_34025[(10)] = inst_33942__$1);

(statearr_34025[(11)] = inst_33944__$1);

(statearr_34025[(20)] = inst_33943__$1);

return statearr_34025;
})();
var statearr_34026_35191 = state_33999__$1;
(statearr_34026_35191[(2)] = null);

(statearr_34026_35191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (40))){
var inst_33968 = (state_33999[(22)]);
var inst_33972 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33968);
var state_33999__$1 = state_33999;
var statearr_34027_35193 = state_33999__$1;
(statearr_34027_35193[(2)] = inst_33972);

(statearr_34027_35193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (33))){
var inst_33959 = (state_33999[(23)]);
var inst_33961 = cljs.core.chunked_seq_QMARK_(inst_33959);
var state_33999__$1 = state_33999;
if(inst_33961){
var statearr_34028_35195 = state_33999__$1;
(statearr_34028_35195[(1)] = (36));

} else {
var statearr_34029_35197 = state_33999__$1;
(statearr_34029_35197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (13))){
var inst_33890 = (state_33999[(24)]);
var inst_33893 = cljs.core.async.close_BANG_(inst_33890);
var state_33999__$1 = state_33999;
var statearr_34030_35198 = state_33999__$1;
(statearr_34030_35198[(2)] = inst_33893);

(statearr_34030_35198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (22))){
var inst_33913 = (state_33999[(8)]);
var inst_33916 = cljs.core.async.close_BANG_(inst_33913);
var state_33999__$1 = state_33999;
var statearr_34031_35199 = state_33999__$1;
(statearr_34031_35199[(2)] = inst_33916);

(statearr_34031_35199[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (36))){
var inst_33959 = (state_33999[(23)]);
var inst_33963 = cljs.core.chunk_first(inst_33959);
var inst_33964 = cljs.core.chunk_rest(inst_33959);
var inst_33965 = cljs.core.count(inst_33963);
var inst_33941 = inst_33964;
var inst_33942 = inst_33963;
var inst_33943 = inst_33965;
var inst_33944 = (0);
var state_33999__$1 = (function (){var statearr_34032 = state_33999;
(statearr_34032[(19)] = inst_33941);

(statearr_34032[(10)] = inst_33942);

(statearr_34032[(11)] = inst_33944);

(statearr_34032[(20)] = inst_33943);

return statearr_34032;
})();
var statearr_34033_35203 = state_33999__$1;
(statearr_34033_35203[(2)] = null);

(statearr_34033_35203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (41))){
var inst_33959 = (state_33999[(23)]);
var inst_33974 = (state_33999[(2)]);
var inst_33975 = cljs.core.next(inst_33959);
var inst_33941 = inst_33975;
var inst_33942 = null;
var inst_33943 = (0);
var inst_33944 = (0);
var state_33999__$1 = (function (){var statearr_34034 = state_33999;
(statearr_34034[(25)] = inst_33974);

(statearr_34034[(19)] = inst_33941);

(statearr_34034[(10)] = inst_33942);

(statearr_34034[(11)] = inst_33944);

(statearr_34034[(20)] = inst_33943);

return statearr_34034;
})();
var statearr_34035_35204 = state_33999__$1;
(statearr_34035_35204[(2)] = null);

(statearr_34035_35204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (43))){
var state_33999__$1 = state_33999;
var statearr_34036_35205 = state_33999__$1;
(statearr_34036_35205[(2)] = null);

(statearr_34036_35205[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (29))){
var inst_33983 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34037_35206 = state_33999__$1;
(statearr_34037_35206[(2)] = inst_33983);

(statearr_34037_35206[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (44))){
var inst_33992 = (state_33999[(2)]);
var state_33999__$1 = (function (){var statearr_34038 = state_33999;
(statearr_34038[(26)] = inst_33992);

return statearr_34038;
})();
var statearr_34039_35207 = state_33999__$1;
(statearr_34039_35207[(2)] = null);

(statearr_34039_35207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (6))){
var inst_33933 = (state_33999[(27)]);
var inst_33932 = cljs.core.deref(cs);
var inst_33933__$1 = cljs.core.keys(inst_33932);
var inst_33934 = cljs.core.count(inst_33933__$1);
var inst_33935 = cljs.core.reset_BANG_(dctr,inst_33934);
var inst_33940 = cljs.core.seq(inst_33933__$1);
var inst_33941 = inst_33940;
var inst_33942 = null;
var inst_33943 = (0);
var inst_33944 = (0);
var state_33999__$1 = (function (){var statearr_34040 = state_33999;
(statearr_34040[(19)] = inst_33941);

(statearr_34040[(10)] = inst_33942);

(statearr_34040[(11)] = inst_33944);

(statearr_34040[(20)] = inst_33943);

(statearr_34040[(28)] = inst_33935);

(statearr_34040[(27)] = inst_33933__$1);

return statearr_34040;
})();
var statearr_34041_35209 = state_33999__$1;
(statearr_34041_35209[(2)] = null);

(statearr_34041_35209[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (28))){
var inst_33941 = (state_33999[(19)]);
var inst_33959 = (state_33999[(23)]);
var inst_33959__$1 = cljs.core.seq(inst_33941);
var state_33999__$1 = (function (){var statearr_34042 = state_33999;
(statearr_34042[(23)] = inst_33959__$1);

return statearr_34042;
})();
if(inst_33959__$1){
var statearr_34043_35210 = state_33999__$1;
(statearr_34043_35210[(1)] = (33));

} else {
var statearr_34044_35211 = state_33999__$1;
(statearr_34044_35211[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (25))){
var inst_33944 = (state_33999[(11)]);
var inst_33943 = (state_33999[(20)]);
var inst_33946 = (inst_33944 < inst_33943);
var inst_33947 = inst_33946;
var state_33999__$1 = state_33999;
if(cljs.core.truth_(inst_33947)){
var statearr_34045_35212 = state_33999__$1;
(statearr_34045_35212[(1)] = (27));

} else {
var statearr_34046_35213 = state_33999__$1;
(statearr_34046_35213[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (34))){
var state_33999__$1 = state_33999;
var statearr_34047_35214 = state_33999__$1;
(statearr_34047_35214[(2)] = null);

(statearr_34047_35214[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (17))){
var state_33999__$1 = state_33999;
var statearr_34048_35215 = state_33999__$1;
(statearr_34048_35215[(2)] = null);

(statearr_34048_35215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (3))){
var inst_33997 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33999__$1,inst_33997);
} else {
if((state_val_34000 === (12))){
var inst_33928 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34049_35216 = state_33999__$1;
(statearr_34049_35216[(2)] = inst_33928);

(statearr_34049_35216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (2))){
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33999__$1,(4),ch);
} else {
if((state_val_34000 === (23))){
var state_33999__$1 = state_33999;
var statearr_34050_35217 = state_33999__$1;
(statearr_34050_35217[(2)] = null);

(statearr_34050_35217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (35))){
var inst_33981 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34051_35218 = state_33999__$1;
(statearr_34051_35218[(2)] = inst_33981);

(statearr_34051_35218[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (19))){
var inst_33900 = (state_33999[(7)]);
var inst_33904 = cljs.core.chunk_first(inst_33900);
var inst_33905 = cljs.core.chunk_rest(inst_33900);
var inst_33906 = cljs.core.count(inst_33904);
var inst_33878 = inst_33905;
var inst_33879 = inst_33904;
var inst_33880 = inst_33906;
var inst_33881 = (0);
var state_33999__$1 = (function (){var statearr_34052 = state_33999;
(statearr_34052[(13)] = inst_33881);

(statearr_34052[(14)] = inst_33878);

(statearr_34052[(15)] = inst_33880);

(statearr_34052[(17)] = inst_33879);

return statearr_34052;
})();
var statearr_34053_35219 = state_33999__$1;
(statearr_34053_35219[(2)] = null);

(statearr_34053_35219[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (11))){
var inst_33878 = (state_33999[(14)]);
var inst_33900 = (state_33999[(7)]);
var inst_33900__$1 = cljs.core.seq(inst_33878);
var state_33999__$1 = (function (){var statearr_34054 = state_33999;
(statearr_34054[(7)] = inst_33900__$1);

return statearr_34054;
})();
if(inst_33900__$1){
var statearr_34055_35221 = state_33999__$1;
(statearr_34055_35221[(1)] = (16));

} else {
var statearr_34056_35225 = state_33999__$1;
(statearr_34056_35225[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (9))){
var inst_33930 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34057_35226 = state_33999__$1;
(statearr_34057_35226[(2)] = inst_33930);

(statearr_34057_35226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (5))){
var inst_33876 = cljs.core.deref(cs);
var inst_33877 = cljs.core.seq(inst_33876);
var inst_33878 = inst_33877;
var inst_33879 = null;
var inst_33880 = (0);
var inst_33881 = (0);
var state_33999__$1 = (function (){var statearr_34058 = state_33999;
(statearr_34058[(13)] = inst_33881);

(statearr_34058[(14)] = inst_33878);

(statearr_34058[(15)] = inst_33880);

(statearr_34058[(17)] = inst_33879);

return statearr_34058;
})();
var statearr_34059_35227 = state_33999__$1;
(statearr_34059_35227[(2)] = null);

(statearr_34059_35227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (14))){
var state_33999__$1 = state_33999;
var statearr_34060_35228 = state_33999__$1;
(statearr_34060_35228[(2)] = null);

(statearr_34060_35228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (45))){
var inst_33989 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34061_35232 = state_33999__$1;
(statearr_34061_35232[(2)] = inst_33989);

(statearr_34061_35232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (26))){
var inst_33933 = (state_33999[(27)]);
var inst_33985 = (state_33999[(2)]);
var inst_33986 = cljs.core.seq(inst_33933);
var state_33999__$1 = (function (){var statearr_34062 = state_33999;
(statearr_34062[(29)] = inst_33985);

return statearr_34062;
})();
if(inst_33986){
var statearr_34063_35233 = state_33999__$1;
(statearr_34063_35233[(1)] = (42));

} else {
var statearr_34064_35234 = state_33999__$1;
(statearr_34064_35234[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (16))){
var inst_33900 = (state_33999[(7)]);
var inst_33902 = cljs.core.chunked_seq_QMARK_(inst_33900);
var state_33999__$1 = state_33999;
if(inst_33902){
var statearr_34065_35235 = state_33999__$1;
(statearr_34065_35235[(1)] = (19));

} else {
var statearr_34066_35236 = state_33999__$1;
(statearr_34066_35236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (38))){
var inst_33978 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34067_35237 = state_33999__$1;
(statearr_34067_35237[(2)] = inst_33978);

(statearr_34067_35237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (30))){
var state_33999__$1 = state_33999;
var statearr_34068_35241 = state_33999__$1;
(statearr_34068_35241[(2)] = null);

(statearr_34068_35241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (10))){
var inst_33881 = (state_33999[(13)]);
var inst_33879 = (state_33999[(17)]);
var inst_33889 = cljs.core._nth(inst_33879,inst_33881);
var inst_33890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33889,(0),null);
var inst_33891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33889,(1),null);
var state_33999__$1 = (function (){var statearr_34069 = state_33999;
(statearr_34069[(24)] = inst_33890);

return statearr_34069;
})();
if(cljs.core.truth_(inst_33891)){
var statearr_34070_35242 = state_33999__$1;
(statearr_34070_35242[(1)] = (13));

} else {
var statearr_34071_35243 = state_33999__$1;
(statearr_34071_35243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (18))){
var inst_33926 = (state_33999[(2)]);
var state_33999__$1 = state_33999;
var statearr_34072_35244 = state_33999__$1;
(statearr_34072_35244[(2)] = inst_33926);

(statearr_34072_35244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (42))){
var state_33999__$1 = state_33999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33999__$1,(45),dchan);
} else {
if((state_val_34000 === (37))){
var inst_33869 = (state_33999[(9)]);
var inst_33959 = (state_33999[(23)]);
var inst_33968 = (state_33999[(22)]);
var inst_33968__$1 = cljs.core.first(inst_33959);
var inst_33969 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33968__$1,inst_33869,done);
var state_33999__$1 = (function (){var statearr_34073 = state_33999;
(statearr_34073[(22)] = inst_33968__$1);

return statearr_34073;
})();
if(cljs.core.truth_(inst_33969)){
var statearr_34074_35245 = state_33999__$1;
(statearr_34074_35245[(1)] = (39));

} else {
var statearr_34075_35246 = state_33999__$1;
(statearr_34075_35246[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34000 === (8))){
var inst_33881 = (state_33999[(13)]);
var inst_33880 = (state_33999[(15)]);
var inst_33883 = (inst_33881 < inst_33880);
var inst_33884 = inst_33883;
var state_33999__$1 = state_33999;
if(cljs.core.truth_(inst_33884)){
var statearr_34076_35250 = state_33999__$1;
(statearr_34076_35250[(1)] = (10));

} else {
var statearr_34077_35251 = state_33999__$1;
(statearr_34077_35251[(1)] = (11));

}

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
var cljs$core$async$mult_$_state_machine__33326__auto__ = null;
var cljs$core$async$mult_$_state_machine__33326__auto____0 = (function (){
var statearr_34078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34078[(0)] = cljs$core$async$mult_$_state_machine__33326__auto__);

(statearr_34078[(1)] = (1));

return statearr_34078;
});
var cljs$core$async$mult_$_state_machine__33326__auto____1 = (function (state_33999){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_33999);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34079){var ex__33329__auto__ = e34079;
var statearr_34080_35255 = state_33999;
(statearr_34080_35255[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_33999[(4)]))){
var statearr_34081_35256 = state_33999;
(statearr_34081_35256[(1)] = cljs.core.first((state_33999[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35257 = state_33999;
state_33999 = G__35257;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33326__auto__ = function(state_33999){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33326__auto____1.call(this,state_33999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33326__auto____0;
cljs$core$async$mult_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33326__auto____1;
return cljs$core$async$mult_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34082 = f__33397__auto__();
(statearr_34082[(6)] = c__33396__auto___35159);

return statearr_34082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34084 = arguments.length;
switch (G__34084) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35259 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35259(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35260 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35260(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35261 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35261(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35262 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35262(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35263 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35263(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35264 = arguments.length;
var i__4865__auto___35265 = (0);
while(true){
if((i__4865__auto___35265 < len__4864__auto___35264)){
args__4870__auto__.push((arguments[i__4865__auto___35265]));

var G__35266 = (i__4865__auto___35265 + (1));
i__4865__auto___35265 = G__35266;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34089){
var map__34090 = p__34089;
var map__34090__$1 = cljs.core.__destructure_map(map__34090);
var opts = map__34090__$1;
var statearr_34091_35267 = state;
(statearr_34091_35267[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34092_35268 = state;
(statearr_34092_35268[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34093_35269 = state;
(statearr_34093_35269[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34085){
var G__34086 = cljs.core.first(seq34085);
var seq34085__$1 = cljs.core.next(seq34085);
var G__34087 = cljs.core.first(seq34085__$1);
var seq34085__$2 = cljs.core.next(seq34085__$1);
var G__34088 = cljs.core.first(seq34085__$2);
var seq34085__$3 = cljs.core.next(seq34085__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34086,G__34087,G__34088,seq34085__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34094 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34095){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34095 = meta34095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34096,meta34095__$1){
var self__ = this;
var _34096__$1 = this;
return (new cljs.core.async.t_cljs$core$async34094(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34095__$1));
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34096){
var self__ = this;
var _34096__$1 = this;
return self__.meta34095;
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34094.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34095","meta34095",1539183972,null)], null);
}));

(cljs.core.async.t_cljs$core$async34094.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34094.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34094");

(cljs.core.async.t_cljs$core$async34094.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34094");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34094.
 */
cljs.core.async.__GT_t_cljs$core$async34094 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34094(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34095){
return (new cljs.core.async.t_cljs$core$async34094(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34095));
});

}

return (new cljs.core.async.t_cljs$core$async34094(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33396__auto___35273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34164){
var state_val_34165 = (state_34164[(1)]);
if((state_val_34165 === (7))){
var inst_34124 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34124)){
var statearr_34166_35274 = state_34164__$1;
(statearr_34166_35274[(1)] = (8));

} else {
var statearr_34167_35275 = state_34164__$1;
(statearr_34167_35275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (20))){
var inst_34117 = (state_34164[(7)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34164__$1,(23),out,inst_34117);
} else {
if((state_val_34165 === (1))){
var inst_34100 = calc_state();
var inst_34101 = cljs.core.__destructure_map(inst_34100);
var inst_34102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34101,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34101,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34101,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34105 = inst_34100;
var state_34164__$1 = (function (){var statearr_34168 = state_34164;
(statearr_34168[(8)] = inst_34104);

(statearr_34168[(9)] = inst_34103);

(statearr_34168[(10)] = inst_34102);

(statearr_34168[(11)] = inst_34105);

return statearr_34168;
})();
var statearr_34169_35276 = state_34164__$1;
(statearr_34169_35276[(2)] = null);

(statearr_34169_35276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (24))){
var inst_34108 = (state_34164[(12)]);
var inst_34105 = inst_34108;
var state_34164__$1 = (function (){var statearr_34170 = state_34164;
(statearr_34170[(11)] = inst_34105);

return statearr_34170;
})();
var statearr_34171_35277 = state_34164__$1;
(statearr_34171_35277[(2)] = null);

(statearr_34171_35277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (4))){
var inst_34117 = (state_34164[(7)]);
var inst_34119 = (state_34164[(13)]);
var inst_34116 = (state_34164[(2)]);
var inst_34117__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34116,(0),null);
var inst_34118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34116,(1),null);
var inst_34119__$1 = (inst_34117__$1 == null);
var state_34164__$1 = (function (){var statearr_34172 = state_34164;
(statearr_34172[(14)] = inst_34118);

(statearr_34172[(7)] = inst_34117__$1);

(statearr_34172[(13)] = inst_34119__$1);

return statearr_34172;
})();
if(cljs.core.truth_(inst_34119__$1)){
var statearr_34173_35278 = state_34164__$1;
(statearr_34173_35278[(1)] = (5));

} else {
var statearr_34174_35279 = state_34164__$1;
(statearr_34174_35279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (15))){
var inst_34109 = (state_34164[(15)]);
var inst_34138 = (state_34164[(16)]);
var inst_34138__$1 = cljs.core.empty_QMARK_(inst_34109);
var state_34164__$1 = (function (){var statearr_34175 = state_34164;
(statearr_34175[(16)] = inst_34138__$1);

return statearr_34175;
})();
if(inst_34138__$1){
var statearr_34176_35280 = state_34164__$1;
(statearr_34176_35280[(1)] = (17));

} else {
var statearr_34177_35281 = state_34164__$1;
(statearr_34177_35281[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (21))){
var inst_34108 = (state_34164[(12)]);
var inst_34105 = inst_34108;
var state_34164__$1 = (function (){var statearr_34178 = state_34164;
(statearr_34178[(11)] = inst_34105);

return statearr_34178;
})();
var statearr_34179_35282 = state_34164__$1;
(statearr_34179_35282[(2)] = null);

(statearr_34179_35282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (13))){
var inst_34131 = (state_34164[(2)]);
var inst_34132 = calc_state();
var inst_34105 = inst_34132;
var state_34164__$1 = (function (){var statearr_34180 = state_34164;
(statearr_34180[(17)] = inst_34131);

(statearr_34180[(11)] = inst_34105);

return statearr_34180;
})();
var statearr_34181_35283 = state_34164__$1;
(statearr_34181_35283[(2)] = null);

(statearr_34181_35283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (22))){
var inst_34158 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34182_35284 = state_34164__$1;
(statearr_34182_35284[(2)] = inst_34158);

(statearr_34182_35284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (6))){
var inst_34118 = (state_34164[(14)]);
var inst_34122 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34118,change);
var state_34164__$1 = state_34164;
var statearr_34183_35285 = state_34164__$1;
(statearr_34183_35285[(2)] = inst_34122);

(statearr_34183_35285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (25))){
var state_34164__$1 = state_34164;
var statearr_34184_35286 = state_34164__$1;
(statearr_34184_35286[(2)] = null);

(statearr_34184_35286[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (17))){
var inst_34110 = (state_34164[(18)]);
var inst_34118 = (state_34164[(14)]);
var inst_34140 = (inst_34110.cljs$core$IFn$_invoke$arity$1 ? inst_34110.cljs$core$IFn$_invoke$arity$1(inst_34118) : inst_34110.call(null,inst_34118));
var inst_34141 = cljs.core.not(inst_34140);
var state_34164__$1 = state_34164;
var statearr_34185_35287 = state_34164__$1;
(statearr_34185_35287[(2)] = inst_34141);

(statearr_34185_35287[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (3))){
var inst_34162 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34164__$1,inst_34162);
} else {
if((state_val_34165 === (12))){
var state_34164__$1 = state_34164;
var statearr_34186_35288 = state_34164__$1;
(statearr_34186_35288[(2)] = null);

(statearr_34186_35288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (2))){
var inst_34108 = (state_34164[(12)]);
var inst_34105 = (state_34164[(11)]);
var inst_34108__$1 = cljs.core.__destructure_map(inst_34105);
var inst_34109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34108__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34108__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34108__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34164__$1 = (function (){var statearr_34187 = state_34164;
(statearr_34187[(18)] = inst_34110);

(statearr_34187[(15)] = inst_34109);

(statearr_34187[(12)] = inst_34108__$1);

return statearr_34187;
})();
return cljs.core.async.ioc_alts_BANG_(state_34164__$1,(4),inst_34111);
} else {
if((state_val_34165 === (23))){
var inst_34149 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34149)){
var statearr_34188_35289 = state_34164__$1;
(statearr_34188_35289[(1)] = (24));

} else {
var statearr_34189_35290 = state_34164__$1;
(statearr_34189_35290[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (19))){
var inst_34144 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34190_35291 = state_34164__$1;
(statearr_34190_35291[(2)] = inst_34144);

(statearr_34190_35291[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (11))){
var inst_34118 = (state_34164[(14)]);
var inst_34128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34118);
var state_34164__$1 = state_34164;
var statearr_34191_35292 = state_34164__$1;
(statearr_34191_35292[(2)] = inst_34128);

(statearr_34191_35292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (9))){
var inst_34109 = (state_34164[(15)]);
var inst_34135 = (state_34164[(19)]);
var inst_34118 = (state_34164[(14)]);
var inst_34135__$1 = (inst_34109.cljs$core$IFn$_invoke$arity$1 ? inst_34109.cljs$core$IFn$_invoke$arity$1(inst_34118) : inst_34109.call(null,inst_34118));
var state_34164__$1 = (function (){var statearr_34192 = state_34164;
(statearr_34192[(19)] = inst_34135__$1);

return statearr_34192;
})();
if(cljs.core.truth_(inst_34135__$1)){
var statearr_34193_35293 = state_34164__$1;
(statearr_34193_35293[(1)] = (14));

} else {
var statearr_34194_35294 = state_34164__$1;
(statearr_34194_35294[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (5))){
var inst_34119 = (state_34164[(13)]);
var state_34164__$1 = state_34164;
var statearr_34195_35295 = state_34164__$1;
(statearr_34195_35295[(2)] = inst_34119);

(statearr_34195_35295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (14))){
var inst_34135 = (state_34164[(19)]);
var state_34164__$1 = state_34164;
var statearr_34196_35296 = state_34164__$1;
(statearr_34196_35296[(2)] = inst_34135);

(statearr_34196_35296[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (26))){
var inst_34154 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34197_35297 = state_34164__$1;
(statearr_34197_35297[(2)] = inst_34154);

(statearr_34197_35297[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (16))){
var inst_34146 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34146)){
var statearr_34198_35298 = state_34164__$1;
(statearr_34198_35298[(1)] = (20));

} else {
var statearr_34199_35299 = state_34164__$1;
(statearr_34199_35299[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (10))){
var inst_34160 = (state_34164[(2)]);
var state_34164__$1 = state_34164;
var statearr_34200_35300 = state_34164__$1;
(statearr_34200_35300[(2)] = inst_34160);

(statearr_34200_35300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (18))){
var inst_34138 = (state_34164[(16)]);
var state_34164__$1 = state_34164;
var statearr_34201_35301 = state_34164__$1;
(statearr_34201_35301[(2)] = inst_34138);

(statearr_34201_35301[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34165 === (8))){
var inst_34117 = (state_34164[(7)]);
var inst_34126 = (inst_34117 == null);
var state_34164__$1 = state_34164;
if(cljs.core.truth_(inst_34126)){
var statearr_34202_35302 = state_34164__$1;
(statearr_34202_35302[(1)] = (11));

} else {
var statearr_34203_35303 = state_34164__$1;
(statearr_34203_35303[(1)] = (12));

}

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
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33326__auto__ = null;
var cljs$core$async$mix_$_state_machine__33326__auto____0 = (function (){
var statearr_34204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34204[(0)] = cljs$core$async$mix_$_state_machine__33326__auto__);

(statearr_34204[(1)] = (1));

return statearr_34204;
});
var cljs$core$async$mix_$_state_machine__33326__auto____1 = (function (state_34164){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34164);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34205){var ex__33329__auto__ = e34205;
var statearr_34206_35304 = state_34164;
(statearr_34206_35304[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34164[(4)]))){
var statearr_34207_35309 = state_34164;
(statearr_34207_35309[(1)] = cljs.core.first((state_34164[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35310 = state_34164;
state_34164 = G__35310;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33326__auto__ = function(state_34164){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33326__auto____1.call(this,state_34164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33326__auto____0;
cljs$core$async$mix_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33326__auto____1;
return cljs$core$async$mix_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34208 = f__33397__auto__();
(statearr_34208[(6)] = c__33396__auto___35273);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35311 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35311(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35312 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35312(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35313 = (function() {
var G__35314 = null;
var G__35314__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35314__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35314 = function(p,v){
switch(arguments.length){
case 1:
return G__35314__1.call(this,p);
case 2:
return G__35314__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35314.cljs$core$IFn$_invoke$arity$1 = G__35314__1;
G__35314.cljs$core$IFn$_invoke$arity$2 = G__35314__2;
return G__35314;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34210 = arguments.length;
switch (G__34210) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35313(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35313(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34213 = arguments.length;
switch (G__34213) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34211_SHARP_){
if(cljs.core.truth_((p1__34211_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34211_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34211_SHARP_.call(null,topic)))){
return p1__34211_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34211_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34214 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34215){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34215 = meta34215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34216,meta34215__$1){
var self__ = this;
var _34216__$1 = this;
return (new cljs.core.async.t_cljs$core$async34214(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34215__$1));
}));

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34216){
var self__ = this;
var _34216__$1 = this;
return self__.meta34215;
}));

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34214.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34215","meta34215",434328583,null)], null);
}));

(cljs.core.async.t_cljs$core$async34214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34214");

(cljs.core.async.t_cljs$core$async34214.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34214.
 */
cljs.core.async.__GT_t_cljs$core$async34214 = (function cljs$core$async$__GT_t_cljs$core$async34214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34215){
return (new cljs.core.async.t_cljs$core$async34214(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34215));
});

}

return (new cljs.core.async.t_cljs$core$async34214(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33396__auto___35327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34288){
var state_val_34289 = (state_34288[(1)]);
if((state_val_34289 === (7))){
var inst_34284 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34290_35333 = state_34288__$1;
(statearr_34290_35333[(2)] = inst_34284);

(statearr_34290_35333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (20))){
var state_34288__$1 = state_34288;
var statearr_34291_35334 = state_34288__$1;
(statearr_34291_35334[(2)] = null);

(statearr_34291_35334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (1))){
var state_34288__$1 = state_34288;
var statearr_34292_35335 = state_34288__$1;
(statearr_34292_35335[(2)] = null);

(statearr_34292_35335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (24))){
var inst_34267 = (state_34288[(7)]);
var inst_34276 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34267);
var state_34288__$1 = state_34288;
var statearr_34293_35336 = state_34288__$1;
(statearr_34293_35336[(2)] = inst_34276);

(statearr_34293_35336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (4))){
var inst_34219 = (state_34288[(8)]);
var inst_34219__$1 = (state_34288[(2)]);
var inst_34220 = (inst_34219__$1 == null);
var state_34288__$1 = (function (){var statearr_34294 = state_34288;
(statearr_34294[(8)] = inst_34219__$1);

return statearr_34294;
})();
if(cljs.core.truth_(inst_34220)){
var statearr_34295_35337 = state_34288__$1;
(statearr_34295_35337[(1)] = (5));

} else {
var statearr_34296_35338 = state_34288__$1;
(statearr_34296_35338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (15))){
var inst_34261 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34297_35339 = state_34288__$1;
(statearr_34297_35339[(2)] = inst_34261);

(statearr_34297_35339[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (21))){
var inst_34281 = (state_34288[(2)]);
var state_34288__$1 = (function (){var statearr_34298 = state_34288;
(statearr_34298[(9)] = inst_34281);

return statearr_34298;
})();
var statearr_34299_35340 = state_34288__$1;
(statearr_34299_35340[(2)] = null);

(statearr_34299_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (13))){
var inst_34243 = (state_34288[(10)]);
var inst_34245 = cljs.core.chunked_seq_QMARK_(inst_34243);
var state_34288__$1 = state_34288;
if(inst_34245){
var statearr_34300_35341 = state_34288__$1;
(statearr_34300_35341[(1)] = (16));

} else {
var statearr_34301_35342 = state_34288__$1;
(statearr_34301_35342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (22))){
var inst_34273 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
if(cljs.core.truth_(inst_34273)){
var statearr_34302_35343 = state_34288__$1;
(statearr_34302_35343[(1)] = (23));

} else {
var statearr_34303_35344 = state_34288__$1;
(statearr_34303_35344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (6))){
var inst_34269 = (state_34288[(11)]);
var inst_34267 = (state_34288[(7)]);
var inst_34219 = (state_34288[(8)]);
var inst_34267__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34219) : topic_fn.call(null,inst_34219));
var inst_34268 = cljs.core.deref(mults);
var inst_34269__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34268,inst_34267__$1);
var state_34288__$1 = (function (){var statearr_34304 = state_34288;
(statearr_34304[(11)] = inst_34269__$1);

(statearr_34304[(7)] = inst_34267__$1);

return statearr_34304;
})();
if(cljs.core.truth_(inst_34269__$1)){
var statearr_34305_35345 = state_34288__$1;
(statearr_34305_35345[(1)] = (19));

} else {
var statearr_34306_35346 = state_34288__$1;
(statearr_34306_35346[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (25))){
var inst_34278 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34307_35347 = state_34288__$1;
(statearr_34307_35347[(2)] = inst_34278);

(statearr_34307_35347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (17))){
var inst_34243 = (state_34288[(10)]);
var inst_34252 = cljs.core.first(inst_34243);
var inst_34253 = cljs.core.async.muxch_STAR_(inst_34252);
var inst_34254 = cljs.core.async.close_BANG_(inst_34253);
var inst_34255 = cljs.core.next(inst_34243);
var inst_34229 = inst_34255;
var inst_34230 = null;
var inst_34231 = (0);
var inst_34232 = (0);
var state_34288__$1 = (function (){var statearr_34308 = state_34288;
(statearr_34308[(12)] = inst_34254);

(statearr_34308[(13)] = inst_34229);

(statearr_34308[(14)] = inst_34232);

(statearr_34308[(15)] = inst_34230);

(statearr_34308[(16)] = inst_34231);

return statearr_34308;
})();
var statearr_34309_35348 = state_34288__$1;
(statearr_34309_35348[(2)] = null);

(statearr_34309_35348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (3))){
var inst_34286 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34288__$1,inst_34286);
} else {
if((state_val_34289 === (12))){
var inst_34263 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34310_35349 = state_34288__$1;
(statearr_34310_35349[(2)] = inst_34263);

(statearr_34310_35349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (2))){
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34288__$1,(4),ch);
} else {
if((state_val_34289 === (23))){
var state_34288__$1 = state_34288;
var statearr_34311_35350 = state_34288__$1;
(statearr_34311_35350[(2)] = null);

(statearr_34311_35350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (19))){
var inst_34269 = (state_34288[(11)]);
var inst_34219 = (state_34288[(8)]);
var inst_34271 = cljs.core.async.muxch_STAR_(inst_34269);
var state_34288__$1 = state_34288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34288__$1,(22),inst_34271,inst_34219);
} else {
if((state_val_34289 === (11))){
var inst_34229 = (state_34288[(13)]);
var inst_34243 = (state_34288[(10)]);
var inst_34243__$1 = cljs.core.seq(inst_34229);
var state_34288__$1 = (function (){var statearr_34312 = state_34288;
(statearr_34312[(10)] = inst_34243__$1);

return statearr_34312;
})();
if(inst_34243__$1){
var statearr_34313_35351 = state_34288__$1;
(statearr_34313_35351[(1)] = (13));

} else {
var statearr_34314_35352 = state_34288__$1;
(statearr_34314_35352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (9))){
var inst_34265 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34315_35353 = state_34288__$1;
(statearr_34315_35353[(2)] = inst_34265);

(statearr_34315_35353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (5))){
var inst_34226 = cljs.core.deref(mults);
var inst_34227 = cljs.core.vals(inst_34226);
var inst_34228 = cljs.core.seq(inst_34227);
var inst_34229 = inst_34228;
var inst_34230 = null;
var inst_34231 = (0);
var inst_34232 = (0);
var state_34288__$1 = (function (){var statearr_34316 = state_34288;
(statearr_34316[(13)] = inst_34229);

(statearr_34316[(14)] = inst_34232);

(statearr_34316[(15)] = inst_34230);

(statearr_34316[(16)] = inst_34231);

return statearr_34316;
})();
var statearr_34317_35354 = state_34288__$1;
(statearr_34317_35354[(2)] = null);

(statearr_34317_35354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (14))){
var state_34288__$1 = state_34288;
var statearr_34321_35355 = state_34288__$1;
(statearr_34321_35355[(2)] = null);

(statearr_34321_35355[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (16))){
var inst_34243 = (state_34288[(10)]);
var inst_34247 = cljs.core.chunk_first(inst_34243);
var inst_34248 = cljs.core.chunk_rest(inst_34243);
var inst_34249 = cljs.core.count(inst_34247);
var inst_34229 = inst_34248;
var inst_34230 = inst_34247;
var inst_34231 = inst_34249;
var inst_34232 = (0);
var state_34288__$1 = (function (){var statearr_34322 = state_34288;
(statearr_34322[(13)] = inst_34229);

(statearr_34322[(14)] = inst_34232);

(statearr_34322[(15)] = inst_34230);

(statearr_34322[(16)] = inst_34231);

return statearr_34322;
})();
var statearr_34323_35356 = state_34288__$1;
(statearr_34323_35356[(2)] = null);

(statearr_34323_35356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (10))){
var inst_34229 = (state_34288[(13)]);
var inst_34232 = (state_34288[(14)]);
var inst_34230 = (state_34288[(15)]);
var inst_34231 = (state_34288[(16)]);
var inst_34237 = cljs.core._nth(inst_34230,inst_34232);
var inst_34238 = cljs.core.async.muxch_STAR_(inst_34237);
var inst_34239 = cljs.core.async.close_BANG_(inst_34238);
var inst_34240 = (inst_34232 + (1));
var tmp34318 = inst_34229;
var tmp34319 = inst_34230;
var tmp34320 = inst_34231;
var inst_34229__$1 = tmp34318;
var inst_34230__$1 = tmp34319;
var inst_34231__$1 = tmp34320;
var inst_34232__$1 = inst_34240;
var state_34288__$1 = (function (){var statearr_34324 = state_34288;
(statearr_34324[(13)] = inst_34229__$1);

(statearr_34324[(14)] = inst_34232__$1);

(statearr_34324[(15)] = inst_34230__$1);

(statearr_34324[(17)] = inst_34239);

(statearr_34324[(16)] = inst_34231__$1);

return statearr_34324;
})();
var statearr_34325_35357 = state_34288__$1;
(statearr_34325_35357[(2)] = null);

(statearr_34325_35357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (18))){
var inst_34258 = (state_34288[(2)]);
var state_34288__$1 = state_34288;
var statearr_34326_35358 = state_34288__$1;
(statearr_34326_35358[(2)] = inst_34258);

(statearr_34326_35358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34289 === (8))){
var inst_34232 = (state_34288[(14)]);
var inst_34231 = (state_34288[(16)]);
var inst_34234 = (inst_34232 < inst_34231);
var inst_34235 = inst_34234;
var state_34288__$1 = state_34288;
if(cljs.core.truth_(inst_34235)){
var statearr_34327_35359 = state_34288__$1;
(statearr_34327_35359[(1)] = (10));

} else {
var statearr_34328_35360 = state_34288__$1;
(statearr_34328_35360[(1)] = (11));

}

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
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34329[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34329[(1)] = (1));

return statearr_34329;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34288){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34288);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34330){var ex__33329__auto__ = e34330;
var statearr_34331_35361 = state_34288;
(statearr_34331_35361[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34288[(4)]))){
var statearr_34332_35362 = state_34288;
(statearr_34332_35362[(1)] = cljs.core.first((state_34288[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35363 = state_34288;
state_34288 = G__35363;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34333 = f__33397__auto__();
(statearr_34333[(6)] = c__33396__auto___35327);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34335 = arguments.length;
switch (G__34335) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34337 = arguments.length;
switch (G__34337) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34339 = arguments.length;
switch (G__34339) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33396__auto___35376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34382){
var state_val_34383 = (state_34382[(1)]);
if((state_val_34383 === (7))){
var state_34382__$1 = state_34382;
var statearr_34384_35385 = state_34382__$1;
(statearr_34384_35385[(2)] = null);

(statearr_34384_35385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (1))){
var state_34382__$1 = state_34382;
var statearr_34385_35394 = state_34382__$1;
(statearr_34385_35394[(2)] = null);

(statearr_34385_35394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (4))){
var inst_34342 = (state_34382[(7)]);
var inst_34343 = (state_34382[(8)]);
var inst_34345 = (inst_34343 < inst_34342);
var state_34382__$1 = state_34382;
if(cljs.core.truth_(inst_34345)){
var statearr_34386_35395 = state_34382__$1;
(statearr_34386_35395[(1)] = (6));

} else {
var statearr_34387_35396 = state_34382__$1;
(statearr_34387_35396[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (15))){
var inst_34368 = (state_34382[(9)]);
var inst_34373 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34368);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34382__$1,(17),out,inst_34373);
} else {
if((state_val_34383 === (13))){
var inst_34368 = (state_34382[(9)]);
var inst_34368__$1 = (state_34382[(2)]);
var inst_34369 = cljs.core.some(cljs.core.nil_QMARK_,inst_34368__$1);
var state_34382__$1 = (function (){var statearr_34388 = state_34382;
(statearr_34388[(9)] = inst_34368__$1);

return statearr_34388;
})();
if(cljs.core.truth_(inst_34369)){
var statearr_34389_35399 = state_34382__$1;
(statearr_34389_35399[(1)] = (14));

} else {
var statearr_34390_35400 = state_34382__$1;
(statearr_34390_35400[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (6))){
var state_34382__$1 = state_34382;
var statearr_34391_35401 = state_34382__$1;
(statearr_34391_35401[(2)] = null);

(statearr_34391_35401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (17))){
var inst_34375 = (state_34382[(2)]);
var state_34382__$1 = (function (){var statearr_34393 = state_34382;
(statearr_34393[(10)] = inst_34375);

return statearr_34393;
})();
var statearr_34394_35402 = state_34382__$1;
(statearr_34394_35402[(2)] = null);

(statearr_34394_35402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (3))){
var inst_34380 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34382__$1,inst_34380);
} else {
if((state_val_34383 === (12))){
var _ = (function (){var statearr_34395 = state_34382;
(statearr_34395[(4)] = cljs.core.rest((state_34382[(4)])));

return statearr_34395;
})();
var state_34382__$1 = state_34382;
var ex34392 = (state_34382__$1[(2)]);
var statearr_34396_35403 = state_34382__$1;
(statearr_34396_35403[(5)] = ex34392);


if((ex34392 instanceof Object)){
var statearr_34397_35404 = state_34382__$1;
(statearr_34397_35404[(1)] = (11));

(statearr_34397_35404[(5)] = null);

} else {
throw ex34392;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (2))){
var inst_34341 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34342 = cnt;
var inst_34343 = (0);
var state_34382__$1 = (function (){var statearr_34398 = state_34382;
(statearr_34398[(11)] = inst_34341);

(statearr_34398[(7)] = inst_34342);

(statearr_34398[(8)] = inst_34343);

return statearr_34398;
})();
var statearr_34399_35405 = state_34382__$1;
(statearr_34399_35405[(2)] = null);

(statearr_34399_35405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (11))){
var inst_34347 = (state_34382[(2)]);
var inst_34348 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34382__$1 = (function (){var statearr_34400 = state_34382;
(statearr_34400[(12)] = inst_34347);

return statearr_34400;
})();
var statearr_34401_35406 = state_34382__$1;
(statearr_34401_35406[(2)] = inst_34348);

(statearr_34401_35406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (9))){
var inst_34343 = (state_34382[(8)]);
var _ = (function (){var statearr_34402 = state_34382;
(statearr_34402[(4)] = cljs.core.cons((12),(state_34382[(4)])));

return statearr_34402;
})();
var inst_34354 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34343) : chs__$1.call(null,inst_34343));
var inst_34355 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34343) : done.call(null,inst_34343));
var inst_34356 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34354,inst_34355);
var ___$1 = (function (){var statearr_34403 = state_34382;
(statearr_34403[(4)] = cljs.core.rest((state_34382[(4)])));

return statearr_34403;
})();
var state_34382__$1 = state_34382;
var statearr_34404_35408 = state_34382__$1;
(statearr_34404_35408[(2)] = inst_34356);

(statearr_34404_35408[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (5))){
var inst_34366 = (state_34382[(2)]);
var state_34382__$1 = (function (){var statearr_34405 = state_34382;
(statearr_34405[(13)] = inst_34366);

return statearr_34405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34382__$1,(13),dchan);
} else {
if((state_val_34383 === (14))){
var inst_34371 = cljs.core.async.close_BANG_(out);
var state_34382__$1 = state_34382;
var statearr_34406_35410 = state_34382__$1;
(statearr_34406_35410[(2)] = inst_34371);

(statearr_34406_35410[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (16))){
var inst_34378 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34407_35411 = state_34382__$1;
(statearr_34407_35411[(2)] = inst_34378);

(statearr_34407_35411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (10))){
var inst_34343 = (state_34382[(8)]);
var inst_34359 = (state_34382[(2)]);
var inst_34360 = (inst_34343 + (1));
var inst_34343__$1 = inst_34360;
var state_34382__$1 = (function (){var statearr_34408 = state_34382;
(statearr_34408[(14)] = inst_34359);

(statearr_34408[(8)] = inst_34343__$1);

return statearr_34408;
})();
var statearr_34409_35413 = state_34382__$1;
(statearr_34409_35413[(2)] = null);

(statearr_34409_35413[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34383 === (8))){
var inst_34364 = (state_34382[(2)]);
var state_34382__$1 = state_34382;
var statearr_34410_35415 = state_34382__$1;
(statearr_34410_35415[(2)] = inst_34364);

(statearr_34410_35415[(1)] = (5));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34411[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34411[(1)] = (1));

return statearr_34411;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34382){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34382);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34412){var ex__33329__auto__ = e34412;
var statearr_34413_35418 = state_34382;
(statearr_34413_35418[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34382[(4)]))){
var statearr_34414_35419 = state_34382;
(statearr_34414_35419[(1)] = cljs.core.first((state_34382[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35422 = state_34382;
state_34382 = G__35422;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34415 = f__33397__auto__();
(statearr_34415[(6)] = c__33396__auto___35376);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34418 = arguments.length;
switch (G__34418) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33396__auto___35425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34450){
var state_val_34451 = (state_34450[(1)]);
if((state_val_34451 === (7))){
var inst_34430 = (state_34450[(7)]);
var inst_34429 = (state_34450[(8)]);
var inst_34429__$1 = (state_34450[(2)]);
var inst_34430__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34429__$1,(0),null);
var inst_34431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34429__$1,(1),null);
var inst_34432 = (inst_34430__$1 == null);
var state_34450__$1 = (function (){var statearr_34452 = state_34450;
(statearr_34452[(7)] = inst_34430__$1);

(statearr_34452[(9)] = inst_34431);

(statearr_34452[(8)] = inst_34429__$1);

return statearr_34452;
})();
if(cljs.core.truth_(inst_34432)){
var statearr_34453_35426 = state_34450__$1;
(statearr_34453_35426[(1)] = (8));

} else {
var statearr_34454_35427 = state_34450__$1;
(statearr_34454_35427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (1))){
var inst_34419 = cljs.core.vec(chs);
var inst_34420 = inst_34419;
var state_34450__$1 = (function (){var statearr_34455 = state_34450;
(statearr_34455[(10)] = inst_34420);

return statearr_34455;
})();
var statearr_34456_35428 = state_34450__$1;
(statearr_34456_35428[(2)] = null);

(statearr_34456_35428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (4))){
var inst_34420 = (state_34450[(10)]);
var state_34450__$1 = state_34450;
return cljs.core.async.ioc_alts_BANG_(state_34450__$1,(7),inst_34420);
} else {
if((state_val_34451 === (6))){
var inst_34446 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34457_35429 = state_34450__$1;
(statearr_34457_35429[(2)] = inst_34446);

(statearr_34457_35429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (3))){
var inst_34448 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34450__$1,inst_34448);
} else {
if((state_val_34451 === (2))){
var inst_34420 = (state_34450[(10)]);
var inst_34422 = cljs.core.count(inst_34420);
var inst_34423 = (inst_34422 > (0));
var state_34450__$1 = state_34450;
if(cljs.core.truth_(inst_34423)){
var statearr_34459_35432 = state_34450__$1;
(statearr_34459_35432[(1)] = (4));

} else {
var statearr_34460_35433 = state_34450__$1;
(statearr_34460_35433[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (11))){
var inst_34420 = (state_34450[(10)]);
var inst_34439 = (state_34450[(2)]);
var tmp34458 = inst_34420;
var inst_34420__$1 = tmp34458;
var state_34450__$1 = (function (){var statearr_34461 = state_34450;
(statearr_34461[(10)] = inst_34420__$1);

(statearr_34461[(11)] = inst_34439);

return statearr_34461;
})();
var statearr_34462_35436 = state_34450__$1;
(statearr_34462_35436[(2)] = null);

(statearr_34462_35436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (9))){
var inst_34430 = (state_34450[(7)]);
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34450__$1,(11),out,inst_34430);
} else {
if((state_val_34451 === (5))){
var inst_34444 = cljs.core.async.close_BANG_(out);
var state_34450__$1 = state_34450;
var statearr_34463_35438 = state_34450__$1;
(statearr_34463_35438[(2)] = inst_34444);

(statearr_34463_35438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (10))){
var inst_34442 = (state_34450[(2)]);
var state_34450__$1 = state_34450;
var statearr_34464_35440 = state_34450__$1;
(statearr_34464_35440[(2)] = inst_34442);

(statearr_34464_35440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34451 === (8))){
var inst_34430 = (state_34450[(7)]);
var inst_34431 = (state_34450[(9)]);
var inst_34420 = (state_34450[(10)]);
var inst_34429 = (state_34450[(8)]);
var inst_34434 = (function (){var cs = inst_34420;
var vec__34425 = inst_34429;
var v = inst_34430;
var c = inst_34431;
return (function (p1__34416_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34416_SHARP_);
});
})();
var inst_34435 = cljs.core.filterv(inst_34434,inst_34420);
var inst_34420__$1 = inst_34435;
var state_34450__$1 = (function (){var statearr_34465 = state_34450;
(statearr_34465[(10)] = inst_34420__$1);

return statearr_34465;
})();
var statearr_34466_35441 = state_34450__$1;
(statearr_34466_35441[(2)] = null);

(statearr_34466_35441[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34467[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34467[(1)] = (1));

return statearr_34467;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34450){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34450);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34468){var ex__33329__auto__ = e34468;
var statearr_34469_35442 = state_34450;
(statearr_34469_35442[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34450[(4)]))){
var statearr_34470_35443 = state_34450;
(statearr_34470_35443[(1)] = cljs.core.first((state_34450[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35444 = state_34450;
state_34450 = G__35444;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34450){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34450);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34471 = f__33397__auto__();
(statearr_34471[(6)] = c__33396__auto___35425);

return statearr_34471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34473 = arguments.length;
switch (G__34473) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33396__auto___35446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34497){
var state_val_34498 = (state_34497[(1)]);
if((state_val_34498 === (7))){
var inst_34479 = (state_34497[(7)]);
var inst_34479__$1 = (state_34497[(2)]);
var inst_34480 = (inst_34479__$1 == null);
var inst_34481 = cljs.core.not(inst_34480);
var state_34497__$1 = (function (){var statearr_34499 = state_34497;
(statearr_34499[(7)] = inst_34479__$1);

return statearr_34499;
})();
if(inst_34481){
var statearr_34500_35447 = state_34497__$1;
(statearr_34500_35447[(1)] = (8));

} else {
var statearr_34501_35448 = state_34497__$1;
(statearr_34501_35448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (1))){
var inst_34474 = (0);
var state_34497__$1 = (function (){var statearr_34502 = state_34497;
(statearr_34502[(8)] = inst_34474);

return statearr_34502;
})();
var statearr_34503_35449 = state_34497__$1;
(statearr_34503_35449[(2)] = null);

(statearr_34503_35449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (4))){
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34497__$1,(7),ch);
} else {
if((state_val_34498 === (6))){
var inst_34492 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34504_35450 = state_34497__$1;
(statearr_34504_35450[(2)] = inst_34492);

(statearr_34504_35450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (3))){
var inst_34494 = (state_34497[(2)]);
var inst_34495 = cljs.core.async.close_BANG_(out);
var state_34497__$1 = (function (){var statearr_34505 = state_34497;
(statearr_34505[(9)] = inst_34494);

return statearr_34505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34497__$1,inst_34495);
} else {
if((state_val_34498 === (2))){
var inst_34474 = (state_34497[(8)]);
var inst_34476 = (inst_34474 < n);
var state_34497__$1 = state_34497;
if(cljs.core.truth_(inst_34476)){
var statearr_34506_35463 = state_34497__$1;
(statearr_34506_35463[(1)] = (4));

} else {
var statearr_34507_35464 = state_34497__$1;
(statearr_34507_35464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (11))){
var inst_34474 = (state_34497[(8)]);
var inst_34484 = (state_34497[(2)]);
var inst_34485 = (inst_34474 + (1));
var inst_34474__$1 = inst_34485;
var state_34497__$1 = (function (){var statearr_34508 = state_34497;
(statearr_34508[(10)] = inst_34484);

(statearr_34508[(8)] = inst_34474__$1);

return statearr_34508;
})();
var statearr_34509_35465 = state_34497__$1;
(statearr_34509_35465[(2)] = null);

(statearr_34509_35465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (9))){
var state_34497__$1 = state_34497;
var statearr_34510_35466 = state_34497__$1;
(statearr_34510_35466[(2)] = null);

(statearr_34510_35466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (5))){
var state_34497__$1 = state_34497;
var statearr_34511_35467 = state_34497__$1;
(statearr_34511_35467[(2)] = null);

(statearr_34511_35467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (10))){
var inst_34489 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34512_35468 = state_34497__$1;
(statearr_34512_35468[(2)] = inst_34489);

(statearr_34512_35468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (8))){
var inst_34479 = (state_34497[(7)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34497__$1,(11),out,inst_34479);
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
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34513[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34513[(1)] = (1));

return statearr_34513;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34497){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34497);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34514){var ex__33329__auto__ = e34514;
var statearr_34515_35537 = state_34497;
(statearr_34515_35537[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34497[(4)]))){
var statearr_34516_35539 = state_34497;
(statearr_34516_35539[(1)] = cljs.core.first((state_34497[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35540 = state_34497;
state_34497 = G__35540;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34517 = f__33397__auto__();
(statearr_34517[(6)] = c__33396__auto___35446);

return statearr_34517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34519 = (function (f,ch,meta34520){
this.f = f;
this.ch = ch;
this.meta34520 = meta34520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34521,meta34520__$1){
var self__ = this;
var _34521__$1 = this;
return (new cljs.core.async.t_cljs$core$async34519(self__.f,self__.ch,meta34520__$1));
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34521){
var self__ = this;
var _34521__$1 = this;
return self__.meta34520;
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34522 = (function (f,ch,meta34520,_,fn1,meta34523){
this.f = f;
this.ch = ch;
this.meta34520 = meta34520;
this._ = _;
this.fn1 = fn1;
this.meta34523 = meta34523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34524,meta34523__$1){
var self__ = this;
var _34524__$1 = this;
return (new cljs.core.async.t_cljs$core$async34522(self__.f,self__.ch,self__.meta34520,self__._,self__.fn1,meta34523__$1));
}));

(cljs.core.async.t_cljs$core$async34522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34524){
var self__ = this;
var _34524__$1 = this;
return self__.meta34523;
}));

(cljs.core.async.t_cljs$core$async34522.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34522.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34518_SHARP_){
var G__34525 = (((p1__34518_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34518_SHARP_) : self__.f.call(null,p1__34518_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34525) : f1.call(null,G__34525));
});
}));

(cljs.core.async.t_cljs$core$async34522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34520","meta34520",-24261430,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34519","cljs.core.async/t_cljs$core$async34519",-1574069270,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34523","meta34523",-1516978372,null)], null);
}));

(cljs.core.async.t_cljs$core$async34522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34522");

(cljs.core.async.t_cljs$core$async34522.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34522.
 */
cljs.core.async.__GT_t_cljs$core$async34522 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34522(f__$1,ch__$1,meta34520__$1,___$2,fn1__$1,meta34523){
return (new cljs.core.async.t_cljs$core$async34522(f__$1,ch__$1,meta34520__$1,___$2,fn1__$1,meta34523));
});

}

return (new cljs.core.async.t_cljs$core$async34522(self__.f,self__.ch,self__.meta34520,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34526 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34526) : self__.f.call(null,G__34526));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34520","meta34520",-24261430,null)], null);
}));

(cljs.core.async.t_cljs$core$async34519.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34519");

(cljs.core.async.t_cljs$core$async34519.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34519");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34519.
 */
cljs.core.async.__GT_t_cljs$core$async34519 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34519(f__$1,ch__$1,meta34520){
return (new cljs.core.async.t_cljs$core$async34519(f__$1,ch__$1,meta34520));
});

}

return (new cljs.core.async.t_cljs$core$async34519(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34527 = (function (f,ch,meta34528){
this.f = f;
this.ch = ch;
this.meta34528 = meta34528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34529,meta34528__$1){
var self__ = this;
var _34529__$1 = this;
return (new cljs.core.async.t_cljs$core$async34527(self__.f,self__.ch,meta34528__$1));
}));

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34529){
var self__ = this;
var _34529__$1 = this;
return self__.meta34528;
}));

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34528","meta34528",411177129,null)], null);
}));

(cljs.core.async.t_cljs$core$async34527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34527");

(cljs.core.async.t_cljs$core$async34527.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34527.
 */
cljs.core.async.__GT_t_cljs$core$async34527 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34527(f__$1,ch__$1,meta34528){
return (new cljs.core.async.t_cljs$core$async34527(f__$1,ch__$1,meta34528));
});

}

return (new cljs.core.async.t_cljs$core$async34527(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34530 = (function (p,ch,meta34531){
this.p = p;
this.ch = ch;
this.meta34531 = meta34531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34532,meta34531__$1){
var self__ = this;
var _34532__$1 = this;
return (new cljs.core.async.t_cljs$core$async34530(self__.p,self__.ch,meta34531__$1));
}));

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34532){
var self__ = this;
var _34532__$1 = this;
return self__.meta34531;
}));

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34531","meta34531",1160273478,null)], null);
}));

(cljs.core.async.t_cljs$core$async34530.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34530");

(cljs.core.async.t_cljs$core$async34530.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34530");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34530.
 */
cljs.core.async.__GT_t_cljs$core$async34530 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34530(p__$1,ch__$1,meta34531){
return (new cljs.core.async.t_cljs$core$async34530(p__$1,ch__$1,meta34531));
});

}

return (new cljs.core.async.t_cljs$core$async34530(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34534 = arguments.length;
switch (G__34534) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33396__auto___35583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34555){
var state_val_34556 = (state_34555[(1)]);
if((state_val_34556 === (7))){
var inst_34551 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34557_35592 = state_34555__$1;
(statearr_34557_35592[(2)] = inst_34551);

(statearr_34557_35592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (1))){
var state_34555__$1 = state_34555;
var statearr_34558_35597 = state_34555__$1;
(statearr_34558_35597[(2)] = null);

(statearr_34558_35597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (4))){
var inst_34537 = (state_34555[(7)]);
var inst_34537__$1 = (state_34555[(2)]);
var inst_34538 = (inst_34537__$1 == null);
var state_34555__$1 = (function (){var statearr_34559 = state_34555;
(statearr_34559[(7)] = inst_34537__$1);

return statearr_34559;
})();
if(cljs.core.truth_(inst_34538)){
var statearr_34560_35606 = state_34555__$1;
(statearr_34560_35606[(1)] = (5));

} else {
var statearr_34561_35609 = state_34555__$1;
(statearr_34561_35609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (6))){
var inst_34537 = (state_34555[(7)]);
var inst_34542 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34537) : p.call(null,inst_34537));
var state_34555__$1 = state_34555;
if(cljs.core.truth_(inst_34542)){
var statearr_34562_35616 = state_34555__$1;
(statearr_34562_35616[(1)] = (8));

} else {
var statearr_34563_35619 = state_34555__$1;
(statearr_34563_35619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (3))){
var inst_34553 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34555__$1,inst_34553);
} else {
if((state_val_34556 === (2))){
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34555__$1,(4),ch);
} else {
if((state_val_34556 === (11))){
var inst_34545 = (state_34555[(2)]);
var state_34555__$1 = state_34555;
var statearr_34564_35630 = state_34555__$1;
(statearr_34564_35630[(2)] = inst_34545);

(statearr_34564_35630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (9))){
var state_34555__$1 = state_34555;
var statearr_34565_35637 = state_34555__$1;
(statearr_34565_35637[(2)] = null);

(statearr_34565_35637[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (5))){
var inst_34540 = cljs.core.async.close_BANG_(out);
var state_34555__$1 = state_34555;
var statearr_34566_35640 = state_34555__$1;
(statearr_34566_35640[(2)] = inst_34540);

(statearr_34566_35640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (10))){
var inst_34548 = (state_34555[(2)]);
var state_34555__$1 = (function (){var statearr_34567 = state_34555;
(statearr_34567[(8)] = inst_34548);

return statearr_34567;
})();
var statearr_34568_35656 = state_34555__$1;
(statearr_34568_35656[(2)] = null);

(statearr_34568_35656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34556 === (8))){
var inst_34537 = (state_34555[(7)]);
var state_34555__$1 = state_34555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34555__$1,(11),out,inst_34537);
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
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34569 = [null,null,null,null,null,null,null,null,null];
(statearr_34569[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34569[(1)] = (1));

return statearr_34569;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34555){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34555);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34570){var ex__33329__auto__ = e34570;
var statearr_34571_35659 = state_34555;
(statearr_34571_35659[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34555[(4)]))){
var statearr_34572_35660 = state_34555;
(statearr_34572_35660[(1)] = cljs.core.first((state_34555[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35661 = state_34555;
state_34555 = G__35661;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34573 = f__33397__auto__();
(statearr_34573[(6)] = c__33396__auto___35583);

return statearr_34573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34575 = arguments.length;
switch (G__34575) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34637){
var state_val_34638 = (state_34637[(1)]);
if((state_val_34638 === (7))){
var inst_34633 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34639_35665 = state_34637__$1;
(statearr_34639_35665[(2)] = inst_34633);

(statearr_34639_35665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (20))){
var inst_34603 = (state_34637[(7)]);
var inst_34614 = (state_34637[(2)]);
var inst_34615 = cljs.core.next(inst_34603);
var inst_34589 = inst_34615;
var inst_34590 = null;
var inst_34591 = (0);
var inst_34592 = (0);
var state_34637__$1 = (function (){var statearr_34640 = state_34637;
(statearr_34640[(8)] = inst_34591);

(statearr_34640[(9)] = inst_34590);

(statearr_34640[(10)] = inst_34589);

(statearr_34640[(11)] = inst_34614);

(statearr_34640[(12)] = inst_34592);

return statearr_34640;
})();
var statearr_34641_35667 = state_34637__$1;
(statearr_34641_35667[(2)] = null);

(statearr_34641_35667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (1))){
var state_34637__$1 = state_34637;
var statearr_34642_35669 = state_34637__$1;
(statearr_34642_35669[(2)] = null);

(statearr_34642_35669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (4))){
var inst_34578 = (state_34637[(13)]);
var inst_34578__$1 = (state_34637[(2)]);
var inst_34579 = (inst_34578__$1 == null);
var state_34637__$1 = (function (){var statearr_34643 = state_34637;
(statearr_34643[(13)] = inst_34578__$1);

return statearr_34643;
})();
if(cljs.core.truth_(inst_34579)){
var statearr_34644_35672 = state_34637__$1;
(statearr_34644_35672[(1)] = (5));

} else {
var statearr_34645_35673 = state_34637__$1;
(statearr_34645_35673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (15))){
var state_34637__$1 = state_34637;
var statearr_34649_35674 = state_34637__$1;
(statearr_34649_35674[(2)] = null);

(statearr_34649_35674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (21))){
var state_34637__$1 = state_34637;
var statearr_34650_35675 = state_34637__$1;
(statearr_34650_35675[(2)] = null);

(statearr_34650_35675[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (13))){
var inst_34591 = (state_34637[(8)]);
var inst_34590 = (state_34637[(9)]);
var inst_34589 = (state_34637[(10)]);
var inst_34592 = (state_34637[(12)]);
var inst_34599 = (state_34637[(2)]);
var inst_34600 = (inst_34592 + (1));
var tmp34646 = inst_34591;
var tmp34647 = inst_34590;
var tmp34648 = inst_34589;
var inst_34589__$1 = tmp34648;
var inst_34590__$1 = tmp34647;
var inst_34591__$1 = tmp34646;
var inst_34592__$1 = inst_34600;
var state_34637__$1 = (function (){var statearr_34651 = state_34637;
(statearr_34651[(8)] = inst_34591__$1);

(statearr_34651[(14)] = inst_34599);

(statearr_34651[(9)] = inst_34590__$1);

(statearr_34651[(10)] = inst_34589__$1);

(statearr_34651[(12)] = inst_34592__$1);

return statearr_34651;
})();
var statearr_34652_35678 = state_34637__$1;
(statearr_34652_35678[(2)] = null);

(statearr_34652_35678[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (22))){
var state_34637__$1 = state_34637;
var statearr_34653_35679 = state_34637__$1;
(statearr_34653_35679[(2)] = null);

(statearr_34653_35679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (6))){
var inst_34578 = (state_34637[(13)]);
var inst_34587 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34578) : f.call(null,inst_34578));
var inst_34588 = cljs.core.seq(inst_34587);
var inst_34589 = inst_34588;
var inst_34590 = null;
var inst_34591 = (0);
var inst_34592 = (0);
var state_34637__$1 = (function (){var statearr_34654 = state_34637;
(statearr_34654[(8)] = inst_34591);

(statearr_34654[(9)] = inst_34590);

(statearr_34654[(10)] = inst_34589);

(statearr_34654[(12)] = inst_34592);

return statearr_34654;
})();
var statearr_34655_35681 = state_34637__$1;
(statearr_34655_35681[(2)] = null);

(statearr_34655_35681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (17))){
var inst_34603 = (state_34637[(7)]);
var inst_34607 = cljs.core.chunk_first(inst_34603);
var inst_34608 = cljs.core.chunk_rest(inst_34603);
var inst_34609 = cljs.core.count(inst_34607);
var inst_34589 = inst_34608;
var inst_34590 = inst_34607;
var inst_34591 = inst_34609;
var inst_34592 = (0);
var state_34637__$1 = (function (){var statearr_34656 = state_34637;
(statearr_34656[(8)] = inst_34591);

(statearr_34656[(9)] = inst_34590);

(statearr_34656[(10)] = inst_34589);

(statearr_34656[(12)] = inst_34592);

return statearr_34656;
})();
var statearr_34657_35682 = state_34637__$1;
(statearr_34657_35682[(2)] = null);

(statearr_34657_35682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (3))){
var inst_34635 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34637__$1,inst_34635);
} else {
if((state_val_34638 === (12))){
var inst_34623 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34658_35684 = state_34637__$1;
(statearr_34658_35684[(2)] = inst_34623);

(statearr_34658_35684[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (2))){
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34637__$1,(4),in$);
} else {
if((state_val_34638 === (23))){
var inst_34631 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34659_35686 = state_34637__$1;
(statearr_34659_35686[(2)] = inst_34631);

(statearr_34659_35686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (19))){
var inst_34618 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34660_35687 = state_34637__$1;
(statearr_34660_35687[(2)] = inst_34618);

(statearr_34660_35687[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (11))){
var inst_34603 = (state_34637[(7)]);
var inst_34589 = (state_34637[(10)]);
var inst_34603__$1 = cljs.core.seq(inst_34589);
var state_34637__$1 = (function (){var statearr_34661 = state_34637;
(statearr_34661[(7)] = inst_34603__$1);

return statearr_34661;
})();
if(inst_34603__$1){
var statearr_34662_35690 = state_34637__$1;
(statearr_34662_35690[(1)] = (14));

} else {
var statearr_34663_35692 = state_34637__$1;
(statearr_34663_35692[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (9))){
var inst_34625 = (state_34637[(2)]);
var inst_34626 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34637__$1 = (function (){var statearr_34664 = state_34637;
(statearr_34664[(15)] = inst_34625);

return statearr_34664;
})();
if(cljs.core.truth_(inst_34626)){
var statearr_34665_35694 = state_34637__$1;
(statearr_34665_35694[(1)] = (21));

} else {
var statearr_34666_35695 = state_34637__$1;
(statearr_34666_35695[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (5))){
var inst_34581 = cljs.core.async.close_BANG_(out);
var state_34637__$1 = state_34637;
var statearr_34667_35697 = state_34637__$1;
(statearr_34667_35697[(2)] = inst_34581);

(statearr_34667_35697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (14))){
var inst_34603 = (state_34637[(7)]);
var inst_34605 = cljs.core.chunked_seq_QMARK_(inst_34603);
var state_34637__$1 = state_34637;
if(inst_34605){
var statearr_34668_35699 = state_34637__$1;
(statearr_34668_35699[(1)] = (17));

} else {
var statearr_34669_35700 = state_34637__$1;
(statearr_34669_35700[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (16))){
var inst_34621 = (state_34637[(2)]);
var state_34637__$1 = state_34637;
var statearr_34670_35701 = state_34637__$1;
(statearr_34670_35701[(2)] = inst_34621);

(statearr_34670_35701[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34638 === (10))){
var inst_34590 = (state_34637[(9)]);
var inst_34592 = (state_34637[(12)]);
var inst_34597 = cljs.core._nth(inst_34590,inst_34592);
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34637__$1,(13),out,inst_34597);
} else {
if((state_val_34638 === (18))){
var inst_34603 = (state_34637[(7)]);
var inst_34612 = cljs.core.first(inst_34603);
var state_34637__$1 = state_34637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34637__$1,(20),out,inst_34612);
} else {
if((state_val_34638 === (8))){
var inst_34591 = (state_34637[(8)]);
var inst_34592 = (state_34637[(12)]);
var inst_34594 = (inst_34592 < inst_34591);
var inst_34595 = inst_34594;
var state_34637__$1 = state_34637;
if(cljs.core.truth_(inst_34595)){
var statearr_34671_35703 = state_34637__$1;
(statearr_34671_35703[(1)] = (10));

} else {
var statearr_34672_35705 = state_34637__$1;
(statearr_34672_35705[(1)] = (11));

}

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
var cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_34673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34673[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__);

(statearr_34673[(1)] = (1));

return statearr_34673;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____1 = (function (state_34637){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34637);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34674){var ex__33329__auto__ = e34674;
var statearr_34675_35709 = state_34637;
(statearr_34675_35709[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34637[(4)]))){
var statearr_34676_35710 = state_34637;
(statearr_34676_35710[(1)] = cljs.core.first((state_34637[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35711 = state_34637;
state_34637 = G__35711;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__ = function(state_34637){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____1.call(this,state_34637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34677 = f__33397__auto__();
(statearr_34677[(6)] = c__33396__auto__);

return statearr_34677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34679 = arguments.length;
switch (G__34679) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34681 = arguments.length;
switch (G__34681) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34683 = arguments.length;
switch (G__34683) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33396__auto___35725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34707){
var state_val_34708 = (state_34707[(1)]);
if((state_val_34708 === (7))){
var inst_34702 = (state_34707[(2)]);
var state_34707__$1 = state_34707;
var statearr_34709_35734 = state_34707__$1;
(statearr_34709_35734[(2)] = inst_34702);

(statearr_34709_35734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (1))){
var inst_34684 = null;
var state_34707__$1 = (function (){var statearr_34710 = state_34707;
(statearr_34710[(7)] = inst_34684);

return statearr_34710;
})();
var statearr_34711_35751 = state_34707__$1;
(statearr_34711_35751[(2)] = null);

(statearr_34711_35751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (4))){
var inst_34687 = (state_34707[(8)]);
var inst_34687__$1 = (state_34707[(2)]);
var inst_34688 = (inst_34687__$1 == null);
var inst_34689 = cljs.core.not(inst_34688);
var state_34707__$1 = (function (){var statearr_34712 = state_34707;
(statearr_34712[(8)] = inst_34687__$1);

return statearr_34712;
})();
if(inst_34689){
var statearr_34713_35754 = state_34707__$1;
(statearr_34713_35754[(1)] = (5));

} else {
var statearr_34714_35755 = state_34707__$1;
(statearr_34714_35755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (6))){
var state_34707__$1 = state_34707;
var statearr_34715_35756 = state_34707__$1;
(statearr_34715_35756[(2)] = null);

(statearr_34715_35756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (3))){
var inst_34704 = (state_34707[(2)]);
var inst_34705 = cljs.core.async.close_BANG_(out);
var state_34707__$1 = (function (){var statearr_34716 = state_34707;
(statearr_34716[(9)] = inst_34704);

return statearr_34716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34707__$1,inst_34705);
} else {
if((state_val_34708 === (2))){
var state_34707__$1 = state_34707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34707__$1,(4),ch);
} else {
if((state_val_34708 === (11))){
var inst_34687 = (state_34707[(8)]);
var inst_34696 = (state_34707[(2)]);
var inst_34684 = inst_34687;
var state_34707__$1 = (function (){var statearr_34717 = state_34707;
(statearr_34717[(7)] = inst_34684);

(statearr_34717[(10)] = inst_34696);

return statearr_34717;
})();
var statearr_34718_35757 = state_34707__$1;
(statearr_34718_35757[(2)] = null);

(statearr_34718_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (9))){
var inst_34687 = (state_34707[(8)]);
var state_34707__$1 = state_34707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34707__$1,(11),out,inst_34687);
} else {
if((state_val_34708 === (5))){
var inst_34684 = (state_34707[(7)]);
var inst_34687 = (state_34707[(8)]);
var inst_34691 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34687,inst_34684);
var state_34707__$1 = state_34707;
if(inst_34691){
var statearr_34720_35759 = state_34707__$1;
(statearr_34720_35759[(1)] = (8));

} else {
var statearr_34721_35760 = state_34707__$1;
(statearr_34721_35760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (10))){
var inst_34699 = (state_34707[(2)]);
var state_34707__$1 = state_34707;
var statearr_34722_35762 = state_34707__$1;
(statearr_34722_35762[(2)] = inst_34699);

(statearr_34722_35762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34708 === (8))){
var inst_34684 = (state_34707[(7)]);
var tmp34719 = inst_34684;
var inst_34684__$1 = tmp34719;
var state_34707__$1 = (function (){var statearr_34723 = state_34707;
(statearr_34723[(7)] = inst_34684__$1);

return statearr_34723;
})();
var statearr_34724_35764 = state_34707__$1;
(statearr_34724_35764[(2)] = null);

(statearr_34724_35764[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34725 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34725[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34725[(1)] = (1));

return statearr_34725;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34707){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34707);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34726){var ex__33329__auto__ = e34726;
var statearr_34727_35768 = state_34707;
(statearr_34727_35768[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34707[(4)]))){
var statearr_34728_35769 = state_34707;
(statearr_34728_35769[(1)] = cljs.core.first((state_34707[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35771 = state_34707;
state_34707 = G__35771;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34729 = f__33397__auto__();
(statearr_34729[(6)] = c__33396__auto___35725);

return statearr_34729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34731 = arguments.length;
switch (G__34731) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33396__auto___35776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34769){
var state_val_34770 = (state_34769[(1)]);
if((state_val_34770 === (7))){
var inst_34765 = (state_34769[(2)]);
var state_34769__$1 = state_34769;
var statearr_34771_35778 = state_34769__$1;
(statearr_34771_35778[(2)] = inst_34765);

(statearr_34771_35778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (1))){
var inst_34732 = (new Array(n));
var inst_34733 = inst_34732;
var inst_34734 = (0);
var state_34769__$1 = (function (){var statearr_34772 = state_34769;
(statearr_34772[(7)] = inst_34734);

(statearr_34772[(8)] = inst_34733);

return statearr_34772;
})();
var statearr_34773_35781 = state_34769__$1;
(statearr_34773_35781[(2)] = null);

(statearr_34773_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (4))){
var inst_34737 = (state_34769[(9)]);
var inst_34737__$1 = (state_34769[(2)]);
var inst_34738 = (inst_34737__$1 == null);
var inst_34739 = cljs.core.not(inst_34738);
var state_34769__$1 = (function (){var statearr_34774 = state_34769;
(statearr_34774[(9)] = inst_34737__$1);

return statearr_34774;
})();
if(inst_34739){
var statearr_34775_35784 = state_34769__$1;
(statearr_34775_35784[(1)] = (5));

} else {
var statearr_34776_35785 = state_34769__$1;
(statearr_34776_35785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (15))){
var inst_34759 = (state_34769[(2)]);
var state_34769__$1 = state_34769;
var statearr_34777_35786 = state_34769__$1;
(statearr_34777_35786[(2)] = inst_34759);

(statearr_34777_35786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (13))){
var state_34769__$1 = state_34769;
var statearr_34778_35788 = state_34769__$1;
(statearr_34778_35788[(2)] = null);

(statearr_34778_35788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (6))){
var inst_34734 = (state_34769[(7)]);
var inst_34755 = (inst_34734 > (0));
var state_34769__$1 = state_34769;
if(cljs.core.truth_(inst_34755)){
var statearr_34779_35789 = state_34769__$1;
(statearr_34779_35789[(1)] = (12));

} else {
var statearr_34780_35791 = state_34769__$1;
(statearr_34780_35791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (3))){
var inst_34767 = (state_34769[(2)]);
var state_34769__$1 = state_34769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34769__$1,inst_34767);
} else {
if((state_val_34770 === (12))){
var inst_34733 = (state_34769[(8)]);
var inst_34757 = cljs.core.vec(inst_34733);
var state_34769__$1 = state_34769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34769__$1,(15),out,inst_34757);
} else {
if((state_val_34770 === (2))){
var state_34769__$1 = state_34769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34769__$1,(4),ch);
} else {
if((state_val_34770 === (11))){
var inst_34749 = (state_34769[(2)]);
var inst_34750 = (new Array(n));
var inst_34733 = inst_34750;
var inst_34734 = (0);
var state_34769__$1 = (function (){var statearr_34781 = state_34769;
(statearr_34781[(7)] = inst_34734);

(statearr_34781[(8)] = inst_34733);

(statearr_34781[(10)] = inst_34749);

return statearr_34781;
})();
var statearr_34782_35793 = state_34769__$1;
(statearr_34782_35793[(2)] = null);

(statearr_34782_35793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (9))){
var inst_34733 = (state_34769[(8)]);
var inst_34747 = cljs.core.vec(inst_34733);
var state_34769__$1 = state_34769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34769__$1,(11),out,inst_34747);
} else {
if((state_val_34770 === (5))){
var inst_34737 = (state_34769[(9)]);
var inst_34734 = (state_34769[(7)]);
var inst_34742 = (state_34769[(11)]);
var inst_34733 = (state_34769[(8)]);
var inst_34741 = (inst_34733[inst_34734] = inst_34737);
var inst_34742__$1 = (inst_34734 + (1));
var inst_34743 = (inst_34742__$1 < n);
var state_34769__$1 = (function (){var statearr_34783 = state_34769;
(statearr_34783[(12)] = inst_34741);

(statearr_34783[(11)] = inst_34742__$1);

return statearr_34783;
})();
if(cljs.core.truth_(inst_34743)){
var statearr_34784_35797 = state_34769__$1;
(statearr_34784_35797[(1)] = (8));

} else {
var statearr_34785_35799 = state_34769__$1;
(statearr_34785_35799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (14))){
var inst_34762 = (state_34769[(2)]);
var inst_34763 = cljs.core.async.close_BANG_(out);
var state_34769__$1 = (function (){var statearr_34787 = state_34769;
(statearr_34787[(13)] = inst_34762);

return statearr_34787;
})();
var statearr_34788_35800 = state_34769__$1;
(statearr_34788_35800[(2)] = inst_34763);

(statearr_34788_35800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (10))){
var inst_34753 = (state_34769[(2)]);
var state_34769__$1 = state_34769;
var statearr_34789_35801 = state_34769__$1;
(statearr_34789_35801[(2)] = inst_34753);

(statearr_34789_35801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34770 === (8))){
var inst_34742 = (state_34769[(11)]);
var inst_34733 = (state_34769[(8)]);
var tmp34786 = inst_34733;
var inst_34733__$1 = tmp34786;
var inst_34734 = inst_34742;
var state_34769__$1 = (function (){var statearr_34790 = state_34769;
(statearr_34790[(7)] = inst_34734);

(statearr_34790[(8)] = inst_34733__$1);

return statearr_34790;
})();
var statearr_34791_35803 = state_34769__$1;
(statearr_34791_35803[(2)] = null);

(statearr_34791_35803[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34792[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34792[(1)] = (1));

return statearr_34792;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34769){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34769);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34793){var ex__33329__auto__ = e34793;
var statearr_34794_35804 = state_34769;
(statearr_34794_35804[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34769[(4)]))){
var statearr_34795_35805 = state_34769;
(statearr_34795_35805[(1)] = cljs.core.first((state_34769[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35806 = state_34769;
state_34769 = G__35806;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34796 = f__33397__auto__();
(statearr_34796[(6)] = c__33396__auto___35776);

return statearr_34796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34798 = arguments.length;
switch (G__34798) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33396__auto___35808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_34843){
var state_val_34844 = (state_34843[(1)]);
if((state_val_34844 === (7))){
var inst_34839 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
var statearr_34845_35809 = state_34843__$1;
(statearr_34845_35809[(2)] = inst_34839);

(statearr_34845_35809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (1))){
var inst_34799 = [];
var inst_34800 = inst_34799;
var inst_34801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34843__$1 = (function (){var statearr_34846 = state_34843;
(statearr_34846[(7)] = inst_34801);

(statearr_34846[(8)] = inst_34800);

return statearr_34846;
})();
var statearr_34847_35810 = state_34843__$1;
(statearr_34847_35810[(2)] = null);

(statearr_34847_35810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (4))){
var inst_34804 = (state_34843[(9)]);
var inst_34804__$1 = (state_34843[(2)]);
var inst_34805 = (inst_34804__$1 == null);
var inst_34806 = cljs.core.not(inst_34805);
var state_34843__$1 = (function (){var statearr_34848 = state_34843;
(statearr_34848[(9)] = inst_34804__$1);

return statearr_34848;
})();
if(inst_34806){
var statearr_34849_35811 = state_34843__$1;
(statearr_34849_35811[(1)] = (5));

} else {
var statearr_34850_35812 = state_34843__$1;
(statearr_34850_35812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (15))){
var inst_34800 = (state_34843[(8)]);
var inst_34831 = cljs.core.vec(inst_34800);
var state_34843__$1 = state_34843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34843__$1,(18),out,inst_34831);
} else {
if((state_val_34844 === (13))){
var inst_34826 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
var statearr_34851_35813 = state_34843__$1;
(statearr_34851_35813[(2)] = inst_34826);

(statearr_34851_35813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (6))){
var inst_34800 = (state_34843[(8)]);
var inst_34828 = inst_34800.length;
var inst_34829 = (inst_34828 > (0));
var state_34843__$1 = state_34843;
if(cljs.core.truth_(inst_34829)){
var statearr_34852_35814 = state_34843__$1;
(statearr_34852_35814[(1)] = (15));

} else {
var statearr_34853_35815 = state_34843__$1;
(statearr_34853_35815[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (17))){
var inst_34836 = (state_34843[(2)]);
var inst_34837 = cljs.core.async.close_BANG_(out);
var state_34843__$1 = (function (){var statearr_34854 = state_34843;
(statearr_34854[(10)] = inst_34836);

return statearr_34854;
})();
var statearr_34855_35816 = state_34843__$1;
(statearr_34855_35816[(2)] = inst_34837);

(statearr_34855_35816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (3))){
var inst_34841 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34843__$1,inst_34841);
} else {
if((state_val_34844 === (12))){
var inst_34800 = (state_34843[(8)]);
var inst_34819 = cljs.core.vec(inst_34800);
var state_34843__$1 = state_34843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34843__$1,(14),out,inst_34819);
} else {
if((state_val_34844 === (2))){
var state_34843__$1 = state_34843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34843__$1,(4),ch);
} else {
if((state_val_34844 === (11))){
var inst_34808 = (state_34843[(11)]);
var inst_34800 = (state_34843[(8)]);
var inst_34804 = (state_34843[(9)]);
var inst_34816 = inst_34800.push(inst_34804);
var tmp34856 = inst_34800;
var inst_34800__$1 = tmp34856;
var inst_34801 = inst_34808;
var state_34843__$1 = (function (){var statearr_34857 = state_34843;
(statearr_34857[(7)] = inst_34801);

(statearr_34857[(8)] = inst_34800__$1);

(statearr_34857[(12)] = inst_34816);

return statearr_34857;
})();
var statearr_34858_35817 = state_34843__$1;
(statearr_34858_35817[(2)] = null);

(statearr_34858_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (9))){
var inst_34801 = (state_34843[(7)]);
var inst_34812 = cljs.core.keyword_identical_QMARK_(inst_34801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34843__$1 = state_34843;
var statearr_34859_35818 = state_34843__$1;
(statearr_34859_35818[(2)] = inst_34812);

(statearr_34859_35818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (5))){
var inst_34801 = (state_34843[(7)]);
var inst_34808 = (state_34843[(11)]);
var inst_34804 = (state_34843[(9)]);
var inst_34809 = (state_34843[(13)]);
var inst_34808__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34804) : f.call(null,inst_34804));
var inst_34809__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34808__$1,inst_34801);
var state_34843__$1 = (function (){var statearr_34860 = state_34843;
(statearr_34860[(11)] = inst_34808__$1);

(statearr_34860[(13)] = inst_34809__$1);

return statearr_34860;
})();
if(inst_34809__$1){
var statearr_34861_35823 = state_34843__$1;
(statearr_34861_35823[(1)] = (8));

} else {
var statearr_34862_35827 = state_34843__$1;
(statearr_34862_35827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (14))){
var inst_34808 = (state_34843[(11)]);
var inst_34804 = (state_34843[(9)]);
var inst_34821 = (state_34843[(2)]);
var inst_34822 = [];
var inst_34823 = inst_34822.push(inst_34804);
var inst_34800 = inst_34822;
var inst_34801 = inst_34808;
var state_34843__$1 = (function (){var statearr_34863 = state_34843;
(statearr_34863[(7)] = inst_34801);

(statearr_34863[(8)] = inst_34800);

(statearr_34863[(14)] = inst_34823);

(statearr_34863[(15)] = inst_34821);

return statearr_34863;
})();
var statearr_34864_35834 = state_34843__$1;
(statearr_34864_35834[(2)] = null);

(statearr_34864_35834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (16))){
var state_34843__$1 = state_34843;
var statearr_34865_35840 = state_34843__$1;
(statearr_34865_35840[(2)] = null);

(statearr_34865_35840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (10))){
var inst_34814 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
if(cljs.core.truth_(inst_34814)){
var statearr_34866_35844 = state_34843__$1;
(statearr_34866_35844[(1)] = (11));

} else {
var statearr_34867_35849 = state_34843__$1;
(statearr_34867_35849[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (18))){
var inst_34833 = (state_34843[(2)]);
var state_34843__$1 = state_34843;
var statearr_34868_35850 = state_34843__$1;
(statearr_34868_35850[(2)] = inst_34833);

(statearr_34868_35850[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34844 === (8))){
var inst_34809 = (state_34843[(13)]);
var state_34843__$1 = state_34843;
var statearr_34869_35851 = state_34843__$1;
(statearr_34869_35851[(2)] = inst_34809);

(statearr_34869_35851[(1)] = (10));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33326__auto__ = null;
var cljs$core$async$state_machine__33326__auto____0 = (function (){
var statearr_34870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34870[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_34870[(1)] = (1));

return statearr_34870;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_34843){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_34843);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e34871){var ex__33329__auto__ = e34871;
var statearr_34872_35852 = state_34843;
(statearr_34872_35852[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_34843[(4)]))){
var statearr_34873_35855 = state_34843;
(statearr_34873_35855[(1)] = cljs.core.first((state_34843[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35856 = state_34843;
state_34843 = G__35856;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_34843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_34843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_34874 = f__33397__auto__();
(statearr_34874[(6)] = c__33396__auto___35808);

return statearr_34874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
