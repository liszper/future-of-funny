goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42599 = arguments.length;
switch (G__42599) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42604 = (function (f,blockable,meta42605){
this.f = f;
this.blockable = blockable;
this.meta42605 = meta42605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42606,meta42605__$1){
var self__ = this;
var _42606__$1 = this;
return (new cljs.core.async.t_cljs$core$async42604(self__.f,self__.blockable,meta42605__$1));
}));

(cljs.core.async.t_cljs$core$async42604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42606){
var self__ = this;
var _42606__$1 = this;
return self__.meta42605;
}));

(cljs.core.async.t_cljs$core$async42604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42605","meta42605",1312045797,null)], null);
}));

(cljs.core.async.t_cljs$core$async42604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42604");

(cljs.core.async.t_cljs$core$async42604.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42604.
 */
cljs.core.async.__GT_t_cljs$core$async42604 = (function cljs$core$async$__GT_t_cljs$core$async42604(f__$1,blockable__$1,meta42605){
return (new cljs.core.async.t_cljs$core$async42604(f__$1,blockable__$1,meta42605));
});

}

return (new cljs.core.async.t_cljs$core$async42604(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42615 = arguments.length;
switch (G__42615) {
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
var G__42629 = arguments.length;
switch (G__42629) {
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
var G__42639 = arguments.length;
switch (G__42639) {
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
var val_44758 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44758) : fn1.call(null,val_44758));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44758) : fn1.call(null,val_44758));
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
var G__42650 = arguments.length;
switch (G__42650) {
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
var n__4741__auto___44761 = n;
var x_44762 = (0);
while(true){
if((x_44762 < n__4741__auto___44761)){
(a[x_44762] = x_44762);

var G__44763 = (x_44762 + (1));
x_44762 = G__44763;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42656 = (function (flag,meta42657){
this.flag = flag;
this.meta42657 = meta42657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42658,meta42657__$1){
var self__ = this;
var _42658__$1 = this;
return (new cljs.core.async.t_cljs$core$async42656(self__.flag,meta42657__$1));
}));

(cljs.core.async.t_cljs$core$async42656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42658){
var self__ = this;
var _42658__$1 = this;
return self__.meta42657;
}));

(cljs.core.async.t_cljs$core$async42656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42657","meta42657",1309389296,null)], null);
}));

(cljs.core.async.t_cljs$core$async42656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42656");

(cljs.core.async.t_cljs$core$async42656.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42656.
 */
cljs.core.async.__GT_t_cljs$core$async42656 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42656(flag__$1,meta42657){
return (new cljs.core.async.t_cljs$core$async42656(flag__$1,meta42657));
});

}

return (new cljs.core.async.t_cljs$core$async42656(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42659 = (function (flag,cb,meta42660){
this.flag = flag;
this.cb = cb;
this.meta42660 = meta42660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42661,meta42660__$1){
var self__ = this;
var _42661__$1 = this;
return (new cljs.core.async.t_cljs$core$async42659(self__.flag,self__.cb,meta42660__$1));
}));

(cljs.core.async.t_cljs$core$async42659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42661){
var self__ = this;
var _42661__$1 = this;
return self__.meta42660;
}));

(cljs.core.async.t_cljs$core$async42659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42660","meta42660",1827501664,null)], null);
}));

(cljs.core.async.t_cljs$core$async42659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42659");

(cljs.core.async.t_cljs$core$async42659.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42659.
 */
cljs.core.async.__GT_t_cljs$core$async42659 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42659(flag__$1,cb__$1,meta42660){
return (new cljs.core.async.t_cljs$core$async42659(flag__$1,cb__$1,meta42660));
});

}

return (new cljs.core.async.t_cljs$core$async42659(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42666_SHARP_){
var G__42668 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42666_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42668) : fret.call(null,G__42668));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42667_SHARP_){
var G__42669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42667_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42669) : fret.call(null,G__42669));
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
var G__44770 = (i + (1));
i = G__44770;
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
var len__4864__auto___44775 = arguments.length;
var i__4865__auto___44776 = (0);
while(true){
if((i__4865__auto___44776 < len__4864__auto___44775)){
args__4870__auto__.push((arguments[i__4865__auto___44776]));

var G__44777 = (i__4865__auto___44776 + (1));
i__4865__auto___44776 = G__44777;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42672){
var map__42673 = p__42672;
var map__42673__$1 = cljs.core.__destructure_map(map__42673);
var opts = map__42673__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42670){
var G__42671 = cljs.core.first(seq42670);
var seq42670__$1 = cljs.core.next(seq42670);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42671,seq42670__$1);
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
var G__42675 = arguments.length;
switch (G__42675) {
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
var c__33396__auto___44783 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_42699){
var state_val_42700 = (state_42699[(1)]);
if((state_val_42700 === (7))){
var inst_42695 = (state_42699[(2)]);
var state_42699__$1 = state_42699;
var statearr_42703_44784 = state_42699__$1;
(statearr_42703_44784[(2)] = inst_42695);

(statearr_42703_44784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (1))){
var state_42699__$1 = state_42699;
var statearr_42704_44785 = state_42699__$1;
(statearr_42704_44785[(2)] = null);

(statearr_42704_44785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (4))){
var inst_42678 = (state_42699[(7)]);
var inst_42678__$1 = (state_42699[(2)]);
var inst_42679 = (inst_42678__$1 == null);
var state_42699__$1 = (function (){var statearr_42705 = state_42699;
(statearr_42705[(7)] = inst_42678__$1);

return statearr_42705;
})();
if(cljs.core.truth_(inst_42679)){
var statearr_42706_44786 = state_42699__$1;
(statearr_42706_44786[(1)] = (5));

} else {
var statearr_42707_44787 = state_42699__$1;
(statearr_42707_44787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (13))){
var state_42699__$1 = state_42699;
var statearr_42708_44788 = state_42699__$1;
(statearr_42708_44788[(2)] = null);

(statearr_42708_44788[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (6))){
var inst_42678 = (state_42699[(7)]);
var state_42699__$1 = state_42699;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42699__$1,(11),to,inst_42678);
} else {
if((state_val_42700 === (3))){
var inst_42697 = (state_42699[(2)]);
var state_42699__$1 = state_42699;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42699__$1,inst_42697);
} else {
if((state_val_42700 === (12))){
var state_42699__$1 = state_42699;
var statearr_42709_44789 = state_42699__$1;
(statearr_42709_44789[(2)] = null);

(statearr_42709_44789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (2))){
var state_42699__$1 = state_42699;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42699__$1,(4),from);
} else {
if((state_val_42700 === (11))){
var inst_42688 = (state_42699[(2)]);
var state_42699__$1 = state_42699;
if(cljs.core.truth_(inst_42688)){
var statearr_42710_44790 = state_42699__$1;
(statearr_42710_44790[(1)] = (12));

} else {
var statearr_42711_44791 = state_42699__$1;
(statearr_42711_44791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (9))){
var state_42699__$1 = state_42699;
var statearr_42713_44792 = state_42699__$1;
(statearr_42713_44792[(2)] = null);

(statearr_42713_44792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (5))){
var state_42699__$1 = state_42699;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42715_44793 = state_42699__$1;
(statearr_42715_44793[(1)] = (8));

} else {
var statearr_42716_44794 = state_42699__$1;
(statearr_42716_44794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (14))){
var inst_42693 = (state_42699[(2)]);
var state_42699__$1 = state_42699;
var statearr_42721_44795 = state_42699__$1;
(statearr_42721_44795[(2)] = inst_42693);

(statearr_42721_44795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (10))){
var inst_42685 = (state_42699[(2)]);
var state_42699__$1 = state_42699;
var statearr_42725_44796 = state_42699__$1;
(statearr_42725_44796[(2)] = inst_42685);

(statearr_42725_44796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42700 === (8))){
var inst_42682 = cljs.core.async.close_BANG_(to);
var state_42699__$1 = state_42699;
var statearr_42726_44797 = state_42699__$1;
(statearr_42726_44797[(2)] = inst_42682);

(statearr_42726_44797[(1)] = (10));


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
var statearr_42727 = [null,null,null,null,null,null,null,null];
(statearr_42727[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_42727[(1)] = (1));

return statearr_42727;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_42699){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_42699);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e42731){var ex__33329__auto__ = e42731;
var statearr_42732_44798 = state_42699;
(statearr_42732_44798[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_42699[(4)]))){
var statearr_42733_44799 = state_42699;
(statearr_42733_44799[(1)] = cljs.core.first((state_42699[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44800 = state_42699;
state_42699 = G__44800;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_42699){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_42699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_42737 = f__33397__auto__();
(statearr_42737[(6)] = c__33396__auto___44783);

return statearr_42737;
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
var process = (function (p__42741){
var vec__42742 = p__42741;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42742,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42742,(1),null);
var job = vec__42742;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33396__auto___44811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_42749){
var state_val_42750 = (state_42749[(1)]);
if((state_val_42750 === (1))){
var state_42749__$1 = state_42749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42749__$1,(2),res,v);
} else {
if((state_val_42750 === (2))){
var inst_42746 = (state_42749[(2)]);
var inst_42747 = cljs.core.async.close_BANG_(res);
var state_42749__$1 = (function (){var statearr_42751 = state_42749;
(statearr_42751[(7)] = inst_42746);

return statearr_42751;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42749__$1,inst_42747);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_42752 = [null,null,null,null,null,null,null,null];
(statearr_42752[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_42752[(1)] = (1));

return statearr_42752;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_42749){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_42749);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e42754){var ex__33329__auto__ = e42754;
var statearr_42755_44824 = state_42749;
(statearr_42755_44824[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_42749[(4)]))){
var statearr_42756_44825 = state_42749;
(statearr_42756_44825[(1)] = cljs.core.first((state_42749[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44826 = state_42749;
state_42749 = G__44826;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_42749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_42749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_42759 = f__33397__auto__();
(statearr_42759[(6)] = c__33396__auto___44811);

return statearr_42759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42761){
var vec__42762 = p__42761;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42762,(1),null);
var job = vec__42762;
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
var n__4741__auto___44831 = n;
var __44832 = (0);
while(true){
if((__44832 < n__4741__auto___44831)){
var G__42768_44841 = type;
var G__42768_44842__$1 = (((G__42768_44841 instanceof cljs.core.Keyword))?G__42768_44841.fqn:null);
switch (G__42768_44842__$1) {
case "compute":
var c__33396__auto___44847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44832,c__33396__auto___44847,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async){
return (function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = ((function (__44832,c__33396__auto___44847,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async){
return (function (state_42781){
var state_val_42782 = (state_42781[(1)]);
if((state_val_42782 === (1))){
var state_42781__$1 = state_42781;
var statearr_42783_44854 = state_42781__$1;
(statearr_42783_44854[(2)] = null);

(statearr_42783_44854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (2))){
var state_42781__$1 = state_42781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42781__$1,(4),jobs);
} else {
if((state_val_42782 === (3))){
var inst_42779 = (state_42781[(2)]);
var state_42781__$1 = state_42781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42781__$1,inst_42779);
} else {
if((state_val_42782 === (4))){
var inst_42771 = (state_42781[(2)]);
var inst_42772 = process(inst_42771);
var state_42781__$1 = state_42781;
if(cljs.core.truth_(inst_42772)){
var statearr_42784_44864 = state_42781__$1;
(statearr_42784_44864[(1)] = (5));

} else {
var statearr_42785_44865 = state_42781__$1;
(statearr_42785_44865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (5))){
var state_42781__$1 = state_42781;
var statearr_42786_44866 = state_42781__$1;
(statearr_42786_44866[(2)] = null);

(statearr_42786_44866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (6))){
var state_42781__$1 = state_42781;
var statearr_42787_44870 = state_42781__$1;
(statearr_42787_44870[(2)] = null);

(statearr_42787_44870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42782 === (7))){
var inst_42777 = (state_42781[(2)]);
var state_42781__$1 = state_42781;
var statearr_42788_44871 = state_42781__$1;
(statearr_42788_44871[(2)] = inst_42777);

(statearr_42788_44871[(1)] = (3));


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
});})(__44832,c__33396__auto___44847,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async))
;
return ((function (__44832,switch__33325__auto__,c__33396__auto___44847,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_42789 = [null,null,null,null,null,null,null];
(statearr_42789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_42789[(1)] = (1));

return statearr_42789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_42781){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_42781);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e42790){var ex__33329__auto__ = e42790;
var statearr_42791_44877 = state_42781;
(statearr_42791_44877[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_42781[(4)]))){
var statearr_42792_44878 = state_42781;
(statearr_42792_44878[(1)] = cljs.core.first((state_42781[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44879 = state_42781;
state_42781 = G__44879;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_42781){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_42781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
;})(__44832,switch__33325__auto__,c__33396__auto___44847,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async))
})();
var state__33398__auto__ = (function (){var statearr_42793 = f__33397__auto__();
(statearr_42793[(6)] = c__33396__auto___44847);

return statearr_42793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
});})(__44832,c__33396__auto___44847,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async))
);


break;
case "async":
var c__33396__auto___44881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44832,c__33396__auto___44881,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async){
return (function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = ((function (__44832,c__33396__auto___44881,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async){
return (function (state_42806){
var state_val_42807 = (state_42806[(1)]);
if((state_val_42807 === (1))){
var state_42806__$1 = state_42806;
var statearr_42808_44889 = state_42806__$1;
(statearr_42808_44889[(2)] = null);

(statearr_42808_44889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42807 === (2))){
var state_42806__$1 = state_42806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42806__$1,(4),jobs);
} else {
if((state_val_42807 === (3))){
var inst_42804 = (state_42806[(2)]);
var state_42806__$1 = state_42806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42806__$1,inst_42804);
} else {
if((state_val_42807 === (4))){
var inst_42796 = (state_42806[(2)]);
var inst_42797 = async(inst_42796);
var state_42806__$1 = state_42806;
if(cljs.core.truth_(inst_42797)){
var statearr_42809_44890 = state_42806__$1;
(statearr_42809_44890[(1)] = (5));

} else {
var statearr_42810_44891 = state_42806__$1;
(statearr_42810_44891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42807 === (5))){
var state_42806__$1 = state_42806;
var statearr_42811_44892 = state_42806__$1;
(statearr_42811_44892[(2)] = null);

(statearr_42811_44892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42807 === (6))){
var state_42806__$1 = state_42806;
var statearr_42812_44896 = state_42806__$1;
(statearr_42812_44896[(2)] = null);

(statearr_42812_44896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42807 === (7))){
var inst_42802 = (state_42806[(2)]);
var state_42806__$1 = state_42806;
var statearr_42813_44897 = state_42806__$1;
(statearr_42813_44897[(2)] = inst_42802);

(statearr_42813_44897[(1)] = (3));


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
});})(__44832,c__33396__auto___44881,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async))
;
return ((function (__44832,switch__33325__auto__,c__33396__auto___44881,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0 = (function (){
var statearr_42814 = [null,null,null,null,null,null,null];
(statearr_42814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_42814[(1)] = (1));

return statearr_42814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_42806){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_42806);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e42816){var ex__33329__auto__ = e42816;
var statearr_42817_44904 = state_42806;
(statearr_42817_44904[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_42806[(4)]))){
var statearr_42818_44905 = state_42806;
(statearr_42818_44905[(1)] = cljs.core.first((state_42806[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44906 = state_42806;
state_42806 = G__44906;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_42806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_42806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
;})(__44832,switch__33325__auto__,c__33396__auto___44881,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async))
})();
var state__33398__auto__ = (function (){var statearr_42819 = f__33397__auto__();
(statearr_42819[(6)] = c__33396__auto___44881);

return statearr_42819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
});})(__44832,c__33396__auto___44881,G__42768_44841,G__42768_44842__$1,n__4741__auto___44831,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42768_44842__$1)].join('')));

}

var G__44907 = (__44832 + (1));
__44832 = G__44907;
continue;
} else {
}
break;
}

var c__33396__auto___44908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_42841){
var state_val_42842 = (state_42841[(1)]);
if((state_val_42842 === (7))){
var inst_42837 = (state_42841[(2)]);
var state_42841__$1 = state_42841;
var statearr_42843_44912 = state_42841__$1;
(statearr_42843_44912[(2)] = inst_42837);

(statearr_42843_44912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (1))){
var state_42841__$1 = state_42841;
var statearr_42844_44913 = state_42841__$1;
(statearr_42844_44913[(2)] = null);

(statearr_42844_44913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (4))){
var inst_42822 = (state_42841[(7)]);
var inst_42822__$1 = (state_42841[(2)]);
var inst_42823 = (inst_42822__$1 == null);
var state_42841__$1 = (function (){var statearr_42845 = state_42841;
(statearr_42845[(7)] = inst_42822__$1);

return statearr_42845;
})();
if(cljs.core.truth_(inst_42823)){
var statearr_42846_44914 = state_42841__$1;
(statearr_42846_44914[(1)] = (5));

} else {
var statearr_42847_44915 = state_42841__$1;
(statearr_42847_44915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (6))){
var inst_42827 = (state_42841[(8)]);
var inst_42822 = (state_42841[(7)]);
var inst_42827__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42829 = [inst_42822,inst_42827__$1];
var inst_42830 = (new cljs.core.PersistentVector(null,2,(5),inst_42828,inst_42829,null));
var state_42841__$1 = (function (){var statearr_42848 = state_42841;
(statearr_42848[(8)] = inst_42827__$1);

return statearr_42848;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42841__$1,(8),jobs,inst_42830);
} else {
if((state_val_42842 === (3))){
var inst_42839 = (state_42841[(2)]);
var state_42841__$1 = state_42841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42841__$1,inst_42839);
} else {
if((state_val_42842 === (2))){
var state_42841__$1 = state_42841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42841__$1,(4),from);
} else {
if((state_val_42842 === (9))){
var inst_42834 = (state_42841[(2)]);
var state_42841__$1 = (function (){var statearr_42849 = state_42841;
(statearr_42849[(9)] = inst_42834);

return statearr_42849;
})();
var statearr_42850_44917 = state_42841__$1;
(statearr_42850_44917[(2)] = null);

(statearr_42850_44917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (5))){
var inst_42825 = cljs.core.async.close_BANG_(jobs);
var state_42841__$1 = state_42841;
var statearr_42851_44918 = state_42841__$1;
(statearr_42851_44918[(2)] = inst_42825);

(statearr_42851_44918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42842 === (8))){
var inst_42827 = (state_42841[(8)]);
var inst_42832 = (state_42841[(2)]);
var state_42841__$1 = (function (){var statearr_42852 = state_42841;
(statearr_42852[(10)] = inst_42832);

return statearr_42852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42841__$1,(9),results,inst_42827);
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
var statearr_42857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_42857[(1)] = (1));

return statearr_42857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_42841){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_42841);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e42860){var ex__33329__auto__ = e42860;
var statearr_42865_44919 = state_42841;
(statearr_42865_44919[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_42841[(4)]))){
var statearr_42869_44920 = state_42841;
(statearr_42869_44920[(1)] = cljs.core.first((state_42841[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44921 = state_42841;
state_42841 = G__44921;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_42841){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_42841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_42880 = f__33397__auto__();
(statearr_42880[(6)] = c__33396__auto___44908);

return statearr_42880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


var c__33396__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_42918){
var state_val_42919 = (state_42918[(1)]);
if((state_val_42919 === (7))){
var inst_42914 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42921_44922 = state_42918__$1;
(statearr_42921_44922[(2)] = inst_42914);

(statearr_42921_44922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (20))){
var state_42918__$1 = state_42918;
var statearr_42922_44923 = state_42918__$1;
(statearr_42922_44923[(2)] = null);

(statearr_42922_44923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (1))){
var state_42918__$1 = state_42918;
var statearr_42925_44924 = state_42918__$1;
(statearr_42925_44924[(2)] = null);

(statearr_42925_44924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (4))){
var inst_42883 = (state_42918[(7)]);
var inst_42883__$1 = (state_42918[(2)]);
var inst_42884 = (inst_42883__$1 == null);
var state_42918__$1 = (function (){var statearr_42926 = state_42918;
(statearr_42926[(7)] = inst_42883__$1);

return statearr_42926;
})();
if(cljs.core.truth_(inst_42884)){
var statearr_42927_44925 = state_42918__$1;
(statearr_42927_44925[(1)] = (5));

} else {
var statearr_42928_44926 = state_42918__$1;
(statearr_42928_44926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (15))){
var inst_42896 = (state_42918[(8)]);
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42918__$1,(18),to,inst_42896);
} else {
if((state_val_42919 === (21))){
var inst_42909 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_42929_44927 = state_42918__$1;
(statearr_42929_44927[(2)] = inst_42909);

(statearr_42929_44927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (13))){
var inst_42911 = (state_42918[(2)]);
var state_42918__$1 = (function (){var statearr_42930 = state_42918;
(statearr_42930[(9)] = inst_42911);

return statearr_42930;
})();
var statearr_42931_44928 = state_42918__$1;
(statearr_42931_44928[(2)] = null);

(statearr_42931_44928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (6))){
var inst_42883 = (state_42918[(7)]);
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42918__$1,(11),inst_42883);
} else {
if((state_val_42919 === (17))){
var inst_42904 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
if(cljs.core.truth_(inst_42904)){
var statearr_42942_44929 = state_42918__$1;
(statearr_42942_44929[(1)] = (19));

} else {
var statearr_42945_44930 = state_42918__$1;
(statearr_42945_44930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (3))){
var inst_42916 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42918__$1,inst_42916);
} else {
if((state_val_42919 === (12))){
var inst_42893 = (state_42918[(10)]);
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42918__$1,(14),inst_42893);
} else {
if((state_val_42919 === (2))){
var state_42918__$1 = state_42918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42918__$1,(4),results);
} else {
if((state_val_42919 === (19))){
var state_42918__$1 = state_42918;
var statearr_42955_44931 = state_42918__$1;
(statearr_42955_44931[(2)] = null);

(statearr_42955_44931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (11))){
var inst_42893 = (state_42918[(2)]);
var state_42918__$1 = (function (){var statearr_42956 = state_42918;
(statearr_42956[(10)] = inst_42893);

return statearr_42956;
})();
var statearr_42957_44932 = state_42918__$1;
(statearr_42957_44932[(2)] = null);

(statearr_42957_44932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (9))){
var state_42918__$1 = state_42918;
var statearr_42963_44933 = state_42918__$1;
(statearr_42963_44933[(2)] = null);

(statearr_42963_44933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (5))){
var state_42918__$1 = state_42918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42971_44934 = state_42918__$1;
(statearr_42971_44934[(1)] = (8));

} else {
var statearr_42976_44935 = state_42918__$1;
(statearr_42976_44935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (14))){
var inst_42896 = (state_42918[(8)]);
var inst_42898 = (state_42918[(11)]);
var inst_42896__$1 = (state_42918[(2)]);
var inst_42897 = (inst_42896__$1 == null);
var inst_42898__$1 = cljs.core.not(inst_42897);
var state_42918__$1 = (function (){var statearr_42982 = state_42918;
(statearr_42982[(8)] = inst_42896__$1);

(statearr_42982[(11)] = inst_42898__$1);

return statearr_42982;
})();
if(inst_42898__$1){
var statearr_42983_44936 = state_42918__$1;
(statearr_42983_44936[(1)] = (15));

} else {
var statearr_42985_44937 = state_42918__$1;
(statearr_42985_44937[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (16))){
var inst_42898 = (state_42918[(11)]);
var state_42918__$1 = state_42918;
var statearr_42996_44938 = state_42918__$1;
(statearr_42996_44938[(2)] = inst_42898);

(statearr_42996_44938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (10))){
var inst_42890 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_43004_44939 = state_42918__$1;
(statearr_43004_44939[(2)] = inst_42890);

(statearr_43004_44939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (18))){
var inst_42901 = (state_42918[(2)]);
var state_42918__$1 = state_42918;
var statearr_43009_44940 = state_42918__$1;
(statearr_43009_44940[(2)] = inst_42901);

(statearr_43009_44940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42919 === (8))){
var inst_42887 = cljs.core.async.close_BANG_(to);
var state_42918__$1 = state_42918;
var statearr_43010_44941 = state_42918__$1;
(statearr_43010_44941[(2)] = inst_42887);

(statearr_43010_44941[(1)] = (10));


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
var statearr_43012 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__);

(statearr_43012[(1)] = (1));

return statearr_43012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1 = (function (state_42918){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_42918);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43013){var ex__33329__auto__ = e43013;
var statearr_43014_44942 = state_42918;
(statearr_43014_44942[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_42918[(4)]))){
var statearr_43015_44943 = state_42918;
(statearr_43015_44943[(1)] = cljs.core.first((state_42918[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44944 = state_42918;
state_42918 = G__44944;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__ = function(state_42918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1.call(this,state_42918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43016 = f__33397__auto__();
(statearr_43016[(6)] = c__33396__auto__);

return statearr_43016;
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
var G__43030 = arguments.length;
switch (G__43030) {
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
var G__43033 = arguments.length;
switch (G__43033) {
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
var G__43035 = arguments.length;
switch (G__43035) {
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
var c__33396__auto___44956 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43061){
var state_val_43062 = (state_43061[(1)]);
if((state_val_43062 === (7))){
var inst_43057 = (state_43061[(2)]);
var state_43061__$1 = state_43061;
var statearr_43063_44957 = state_43061__$1;
(statearr_43063_44957[(2)] = inst_43057);

(statearr_43063_44957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (1))){
var state_43061__$1 = state_43061;
var statearr_43064_44958 = state_43061__$1;
(statearr_43064_44958[(2)] = null);

(statearr_43064_44958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (4))){
var inst_43038 = (state_43061[(7)]);
var inst_43038__$1 = (state_43061[(2)]);
var inst_43039 = (inst_43038__$1 == null);
var state_43061__$1 = (function (){var statearr_43065 = state_43061;
(statearr_43065[(7)] = inst_43038__$1);

return statearr_43065;
})();
if(cljs.core.truth_(inst_43039)){
var statearr_43066_44959 = state_43061__$1;
(statearr_43066_44959[(1)] = (5));

} else {
var statearr_43067_44960 = state_43061__$1;
(statearr_43067_44960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (13))){
var state_43061__$1 = state_43061;
var statearr_43068_44961 = state_43061__$1;
(statearr_43068_44961[(2)] = null);

(statearr_43068_44961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (6))){
var inst_43038 = (state_43061[(7)]);
var inst_43044 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43038) : p.call(null,inst_43038));
var state_43061__$1 = state_43061;
if(cljs.core.truth_(inst_43044)){
var statearr_43069_44964 = state_43061__$1;
(statearr_43069_44964[(1)] = (9));

} else {
var statearr_43070_44965 = state_43061__$1;
(statearr_43070_44965[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (3))){
var inst_43059 = (state_43061[(2)]);
var state_43061__$1 = state_43061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43061__$1,inst_43059);
} else {
if((state_val_43062 === (12))){
var state_43061__$1 = state_43061;
var statearr_43071_44972 = state_43061__$1;
(statearr_43071_44972[(2)] = null);

(statearr_43071_44972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (2))){
var state_43061__$1 = state_43061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43061__$1,(4),ch);
} else {
if((state_val_43062 === (11))){
var inst_43038 = (state_43061[(7)]);
var inst_43048 = (state_43061[(2)]);
var state_43061__$1 = state_43061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43061__$1,(8),inst_43048,inst_43038);
} else {
if((state_val_43062 === (9))){
var state_43061__$1 = state_43061;
var statearr_43072_44973 = state_43061__$1;
(statearr_43072_44973[(2)] = tc);

(statearr_43072_44973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (5))){
var inst_43041 = cljs.core.async.close_BANG_(tc);
var inst_43042 = cljs.core.async.close_BANG_(fc);
var state_43061__$1 = (function (){var statearr_43073 = state_43061;
(statearr_43073[(8)] = inst_43041);

return statearr_43073;
})();
var statearr_43074_44981 = state_43061__$1;
(statearr_43074_44981[(2)] = inst_43042);

(statearr_43074_44981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (14))){
var inst_43055 = (state_43061[(2)]);
var state_43061__$1 = state_43061;
var statearr_43075_44982 = state_43061__$1;
(statearr_43075_44982[(2)] = inst_43055);

(statearr_43075_44982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (10))){
var state_43061__$1 = state_43061;
var statearr_43076_44983 = state_43061__$1;
(statearr_43076_44983[(2)] = fc);

(statearr_43076_44983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43062 === (8))){
var inst_43050 = (state_43061[(2)]);
var state_43061__$1 = state_43061;
if(cljs.core.truth_(inst_43050)){
var statearr_43077_44986 = state_43061__$1;
(statearr_43077_44986[(1)] = (12));

} else {
var statearr_43078_44987 = state_43061__$1;
(statearr_43078_44987[(1)] = (13));

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
var statearr_43079 = [null,null,null,null,null,null,null,null,null];
(statearr_43079[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_43079[(1)] = (1));

return statearr_43079;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_43061){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43061);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43080){var ex__33329__auto__ = e43080;
var statearr_43081_44990 = state_43061;
(statearr_43081_44990[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43061[(4)]))){
var statearr_43082_44991 = state_43061;
(statearr_43082_44991[(1)] = cljs.core.first((state_43061[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44995 = state_43061;
state_43061 = G__44995;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_43061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_43061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43083 = f__33397__auto__();
(statearr_43083[(6)] = c__33396__auto___44956);

return statearr_43083;
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
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43105){
var state_val_43106 = (state_43105[(1)]);
if((state_val_43106 === (7))){
var inst_43101 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
var statearr_43107_45006 = state_43105__$1;
(statearr_43107_45006[(2)] = inst_43101);

(statearr_43107_45006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (1))){
var inst_43084 = init;
var inst_43085 = inst_43084;
var state_43105__$1 = (function (){var statearr_43108 = state_43105;
(statearr_43108[(7)] = inst_43085);

return statearr_43108;
})();
var statearr_43109_45007 = state_43105__$1;
(statearr_43109_45007[(2)] = null);

(statearr_43109_45007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (4))){
var inst_43088 = (state_43105[(8)]);
var inst_43088__$1 = (state_43105[(2)]);
var inst_43089 = (inst_43088__$1 == null);
var state_43105__$1 = (function (){var statearr_43110 = state_43105;
(statearr_43110[(8)] = inst_43088__$1);

return statearr_43110;
})();
if(cljs.core.truth_(inst_43089)){
var statearr_43111_45008 = state_43105__$1;
(statearr_43111_45008[(1)] = (5));

} else {
var statearr_43112_45009 = state_43105__$1;
(statearr_43112_45009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (6))){
var inst_43088 = (state_43105[(8)]);
var inst_43085 = (state_43105[(7)]);
var inst_43092 = (state_43105[(9)]);
var inst_43092__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43085,inst_43088) : f.call(null,inst_43085,inst_43088));
var inst_43093 = cljs.core.reduced_QMARK_(inst_43092__$1);
var state_43105__$1 = (function (){var statearr_43113 = state_43105;
(statearr_43113[(9)] = inst_43092__$1);

return statearr_43113;
})();
if(inst_43093){
var statearr_43114_45010 = state_43105__$1;
(statearr_43114_45010[(1)] = (8));

} else {
var statearr_43115_45011 = state_43105__$1;
(statearr_43115_45011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (3))){
var inst_43103 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43105__$1,inst_43103);
} else {
if((state_val_43106 === (2))){
var state_43105__$1 = state_43105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43105__$1,(4),ch);
} else {
if((state_val_43106 === (9))){
var inst_43092 = (state_43105[(9)]);
var inst_43085 = inst_43092;
var state_43105__$1 = (function (){var statearr_43116 = state_43105;
(statearr_43116[(7)] = inst_43085);

return statearr_43116;
})();
var statearr_43117_45012 = state_43105__$1;
(statearr_43117_45012[(2)] = null);

(statearr_43117_45012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (5))){
var inst_43085 = (state_43105[(7)]);
var state_43105__$1 = state_43105;
var statearr_43118_45013 = state_43105__$1;
(statearr_43118_45013[(2)] = inst_43085);

(statearr_43118_45013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (10))){
var inst_43099 = (state_43105[(2)]);
var state_43105__$1 = state_43105;
var statearr_43119_45014 = state_43105__$1;
(statearr_43119_45014[(2)] = inst_43099);

(statearr_43119_45014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43106 === (8))){
var inst_43092 = (state_43105[(9)]);
var inst_43095 = cljs.core.deref(inst_43092);
var state_43105__$1 = state_43105;
var statearr_43120_45015 = state_43105__$1;
(statearr_43120_45015[(2)] = inst_43095);

(statearr_43120_45015[(1)] = (10));


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
var statearr_43121 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43121[(0)] = cljs$core$async$reduce_$_state_machine__33326__auto__);

(statearr_43121[(1)] = (1));

return statearr_43121;
});
var cljs$core$async$reduce_$_state_machine__33326__auto____1 = (function (state_43105){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43105);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43122){var ex__33329__auto__ = e43122;
var statearr_43123_45016 = state_43105;
(statearr_43123_45016[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43105[(4)]))){
var statearr_43124_45017 = state_43105;
(statearr_43124_45017[(1)] = cljs.core.first((state_43105[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45018 = state_43105;
state_43105 = G__45018;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33326__auto__ = function(state_43105){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33326__auto____1.call(this,state_43105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33326__auto____0;
cljs$core$async$reduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33326__auto____1;
return cljs$core$async$reduce_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43125 = f__33397__auto__();
(statearr_43125[(6)] = c__33396__auto__);

return statearr_43125;
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
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43131){
var state_val_43132 = (state_43131[(1)]);
if((state_val_43132 === (1))){
var inst_43126 = cljs.core.async.reduce(f__$1,init,ch);
var state_43131__$1 = state_43131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43131__$1,(2),inst_43126);
} else {
if((state_val_43132 === (2))){
var inst_43128 = (state_43131[(2)]);
var inst_43129 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43128) : f__$1.call(null,inst_43128));
var state_43131__$1 = state_43131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43131__$1,inst_43129);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33326__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33326__auto____0 = (function (){
var statearr_43133 = [null,null,null,null,null,null,null];
(statearr_43133[(0)] = cljs$core$async$transduce_$_state_machine__33326__auto__);

(statearr_43133[(1)] = (1));

return statearr_43133;
});
var cljs$core$async$transduce_$_state_machine__33326__auto____1 = (function (state_43131){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43131);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43134){var ex__33329__auto__ = e43134;
var statearr_43135_45025 = state_43131;
(statearr_43135_45025[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43131[(4)]))){
var statearr_43136_45026 = state_43131;
(statearr_43136_45026[(1)] = cljs.core.first((state_43131[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45027 = state_43131;
state_43131 = G__45027;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33326__auto__ = function(state_43131){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33326__auto____1.call(this,state_43131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33326__auto____0;
cljs$core$async$transduce_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33326__auto____1;
return cljs$core$async$transduce_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43137 = f__33397__auto__();
(statearr_43137[(6)] = c__33396__auto__);

return statearr_43137;
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
var G__43139 = arguments.length;
switch (G__43139) {
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
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43164){
var state_val_43165 = (state_43164[(1)]);
if((state_val_43165 === (7))){
var inst_43146 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
var statearr_43167_45031 = state_43164__$1;
(statearr_43167_45031[(2)] = inst_43146);

(statearr_43167_45031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (1))){
var inst_43140 = cljs.core.seq(coll);
var inst_43141 = inst_43140;
var state_43164__$1 = (function (){var statearr_43168 = state_43164;
(statearr_43168[(7)] = inst_43141);

return statearr_43168;
})();
var statearr_43169_45032 = state_43164__$1;
(statearr_43169_45032[(2)] = null);

(statearr_43169_45032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (4))){
var inst_43141 = (state_43164[(7)]);
var inst_43144 = cljs.core.first(inst_43141);
var state_43164__$1 = state_43164;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43164__$1,(7),ch,inst_43144);
} else {
if((state_val_43165 === (13))){
var inst_43158 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
var statearr_43170_45041 = state_43164__$1;
(statearr_43170_45041[(2)] = inst_43158);

(statearr_43170_45041[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (6))){
var inst_43149 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
if(cljs.core.truth_(inst_43149)){
var statearr_43171_45042 = state_43164__$1;
(statearr_43171_45042[(1)] = (8));

} else {
var statearr_43172_45043 = state_43164__$1;
(statearr_43172_45043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (3))){
var inst_43162 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43164__$1,inst_43162);
} else {
if((state_val_43165 === (12))){
var state_43164__$1 = state_43164;
var statearr_43174_45044 = state_43164__$1;
(statearr_43174_45044[(2)] = null);

(statearr_43174_45044[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (2))){
var inst_43141 = (state_43164[(7)]);
var state_43164__$1 = state_43164;
if(cljs.core.truth_(inst_43141)){
var statearr_43175_45045 = state_43164__$1;
(statearr_43175_45045[(1)] = (4));

} else {
var statearr_43176_45046 = state_43164__$1;
(statearr_43176_45046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (11))){
var inst_43155 = cljs.core.async.close_BANG_(ch);
var state_43164__$1 = state_43164;
var statearr_43177_45048 = state_43164__$1;
(statearr_43177_45048[(2)] = inst_43155);

(statearr_43177_45048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (9))){
var state_43164__$1 = state_43164;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43178_45050 = state_43164__$1;
(statearr_43178_45050[(1)] = (11));

} else {
var statearr_43179_45051 = state_43164__$1;
(statearr_43179_45051[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (5))){
var inst_43141 = (state_43164[(7)]);
var state_43164__$1 = state_43164;
var statearr_43180_45052 = state_43164__$1;
(statearr_43180_45052[(2)] = inst_43141);

(statearr_43180_45052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (10))){
var inst_43160 = (state_43164[(2)]);
var state_43164__$1 = state_43164;
var statearr_43181_45053 = state_43164__$1;
(statearr_43181_45053[(2)] = inst_43160);

(statearr_43181_45053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43165 === (8))){
var inst_43141 = (state_43164[(7)]);
var inst_43151 = cljs.core.next(inst_43141);
var inst_43141__$1 = inst_43151;
var state_43164__$1 = (function (){var statearr_43182 = state_43164;
(statearr_43182[(7)] = inst_43141__$1);

return statearr_43182;
})();
var statearr_43183_45054 = state_43164__$1;
(statearr_43183_45054[(2)] = null);

(statearr_43183_45054[(1)] = (2));


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
var statearr_43184 = [null,null,null,null,null,null,null,null];
(statearr_43184[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_43184[(1)] = (1));

return statearr_43184;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_43164){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43164);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43185){var ex__33329__auto__ = e43185;
var statearr_43186_45055 = state_43164;
(statearr_43186_45055[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43164[(4)]))){
var statearr_43187_45057 = state_43164;
(statearr_43187_45057[(1)] = cljs.core.first((state_43164[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45059 = state_43164;
state_43164 = G__45059;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_43164){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_43164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43188 = f__33397__auto__();
(statearr_43188[(6)] = c__33396__auto__);

return statearr_43188;
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
var G__43194 = arguments.length;
switch (G__43194) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_45067 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_45067(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45068 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_45068(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45069 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_45069(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45070 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_45070(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43211 = (function (ch,cs,meta43212){
this.ch = ch;
this.cs = cs;
this.meta43212 = meta43212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43213,meta43212__$1){
var self__ = this;
var _43213__$1 = this;
return (new cljs.core.async.t_cljs$core$async43211(self__.ch,self__.cs,meta43212__$1));
}));

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43213){
var self__ = this;
var _43213__$1 = this;
return self__.meta43212;
}));

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43211.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43212","meta43212",175642631,null)], null);
}));

(cljs.core.async.t_cljs$core$async43211.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43211");

(cljs.core.async.t_cljs$core$async43211.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43211");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43211.
 */
cljs.core.async.__GT_t_cljs$core$async43211 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43211(ch__$1,cs__$1,meta43212){
return (new cljs.core.async.t_cljs$core$async43211(ch__$1,cs__$1,meta43212));
});

}

return (new cljs.core.async.t_cljs$core$async43211(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33396__auto___45074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43386){
var state_val_43387 = (state_43386[(1)]);
if((state_val_43387 === (7))){
var inst_43380 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43391_45076 = state_43386__$1;
(statearr_43391_45076[(2)] = inst_43380);

(statearr_43391_45076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (20))){
var inst_43273 = (state_43386[(7)]);
var inst_43289 = cljs.core.first(inst_43273);
var inst_43290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43289,(0),null);
var inst_43291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43289,(1),null);
var state_43386__$1 = (function (){var statearr_43392 = state_43386;
(statearr_43392[(8)] = inst_43290);

return statearr_43392;
})();
if(cljs.core.truth_(inst_43291)){
var statearr_43393_45081 = state_43386__$1;
(statearr_43393_45081[(1)] = (22));

} else {
var statearr_43394_45082 = state_43386__$1;
(statearr_43394_45082[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (27))){
var inst_43216 = (state_43386[(9)]);
var inst_43326 = (state_43386[(10)]);
var inst_43321 = (state_43386[(11)]);
var inst_43319 = (state_43386[(12)]);
var inst_43326__$1 = cljs.core._nth(inst_43319,inst_43321);
var inst_43327 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43326__$1,inst_43216,done);
var state_43386__$1 = (function (){var statearr_43396 = state_43386;
(statearr_43396[(10)] = inst_43326__$1);

return statearr_43396;
})();
if(cljs.core.truth_(inst_43327)){
var statearr_43397_45086 = state_43386__$1;
(statearr_43397_45086[(1)] = (30));

} else {
var statearr_43398_45087 = state_43386__$1;
(statearr_43398_45087[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (1))){
var state_43386__$1 = state_43386;
var statearr_43399_45092 = state_43386__$1;
(statearr_43399_45092[(2)] = null);

(statearr_43399_45092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (24))){
var inst_43273 = (state_43386[(7)]);
var inst_43296 = (state_43386[(2)]);
var inst_43297 = cljs.core.next(inst_43273);
var inst_43229 = inst_43297;
var inst_43230 = null;
var inst_43231 = (0);
var inst_43232 = (0);
var state_43386__$1 = (function (){var statearr_43402 = state_43386;
(statearr_43402[(13)] = inst_43296);

(statearr_43402[(14)] = inst_43232);

(statearr_43402[(15)] = inst_43230);

(statearr_43402[(16)] = inst_43231);

(statearr_43402[(17)] = inst_43229);

return statearr_43402;
})();
var statearr_43403_45099 = state_43386__$1;
(statearr_43403_45099[(2)] = null);

(statearr_43403_45099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (39))){
var state_43386__$1 = state_43386;
var statearr_43407_45100 = state_43386__$1;
(statearr_43407_45100[(2)] = null);

(statearr_43407_45100[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (4))){
var inst_43216 = (state_43386[(9)]);
var inst_43216__$1 = (state_43386[(2)]);
var inst_43217 = (inst_43216__$1 == null);
var state_43386__$1 = (function (){var statearr_43408 = state_43386;
(statearr_43408[(9)] = inst_43216__$1);

return statearr_43408;
})();
if(cljs.core.truth_(inst_43217)){
var statearr_43410_45101 = state_43386__$1;
(statearr_43410_45101[(1)] = (5));

} else {
var statearr_43412_45102 = state_43386__$1;
(statearr_43412_45102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (15))){
var inst_43232 = (state_43386[(14)]);
var inst_43230 = (state_43386[(15)]);
var inst_43231 = (state_43386[(16)]);
var inst_43229 = (state_43386[(17)]);
var inst_43269 = (state_43386[(2)]);
var inst_43270 = (inst_43232 + (1));
var tmp43404 = inst_43230;
var tmp43405 = inst_43231;
var tmp43406 = inst_43229;
var inst_43229__$1 = tmp43406;
var inst_43230__$1 = tmp43404;
var inst_43231__$1 = tmp43405;
var inst_43232__$1 = inst_43270;
var state_43386__$1 = (function (){var statearr_43414 = state_43386;
(statearr_43414[(18)] = inst_43269);

(statearr_43414[(14)] = inst_43232__$1);

(statearr_43414[(15)] = inst_43230__$1);

(statearr_43414[(16)] = inst_43231__$1);

(statearr_43414[(17)] = inst_43229__$1);

return statearr_43414;
})();
var statearr_43423_45107 = state_43386__$1;
(statearr_43423_45107[(2)] = null);

(statearr_43423_45107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (21))){
var inst_43300 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43432_45111 = state_43386__$1;
(statearr_43432_45111[(2)] = inst_43300);

(statearr_43432_45111[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (31))){
var inst_43326 = (state_43386[(10)]);
var inst_43330 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43326);
var state_43386__$1 = state_43386;
var statearr_43441_45116 = state_43386__$1;
(statearr_43441_45116[(2)] = inst_43330);

(statearr_43441_45116[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (32))){
var inst_43318 = (state_43386[(19)]);
var inst_43320 = (state_43386[(20)]);
var inst_43321 = (state_43386[(11)]);
var inst_43319 = (state_43386[(12)]);
var inst_43332 = (state_43386[(2)]);
var inst_43333 = (inst_43321 + (1));
var tmp43424 = inst_43318;
var tmp43425 = inst_43320;
var tmp43426 = inst_43319;
var inst_43318__$1 = tmp43424;
var inst_43319__$1 = tmp43426;
var inst_43320__$1 = tmp43425;
var inst_43321__$1 = inst_43333;
var state_43386__$1 = (function (){var statearr_43442 = state_43386;
(statearr_43442[(19)] = inst_43318__$1);

(statearr_43442[(20)] = inst_43320__$1);

(statearr_43442[(11)] = inst_43321__$1);

(statearr_43442[(12)] = inst_43319__$1);

(statearr_43442[(21)] = inst_43332);

return statearr_43442;
})();
var statearr_43443_45118 = state_43386__$1;
(statearr_43443_45118[(2)] = null);

(statearr_43443_45118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (40))){
var inst_43352 = (state_43386[(22)]);
var inst_43356 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43352);
var state_43386__$1 = state_43386;
var statearr_43444_45119 = state_43386__$1;
(statearr_43444_45119[(2)] = inst_43356);

(statearr_43444_45119[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (33))){
var inst_43336 = (state_43386[(23)]);
var inst_43344 = cljs.core.chunked_seq_QMARK_(inst_43336);
var state_43386__$1 = state_43386;
if(inst_43344){
var statearr_43445_45127 = state_43386__$1;
(statearr_43445_45127[(1)] = (36));

} else {
var statearr_43446_45128 = state_43386__$1;
(statearr_43446_45128[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (13))){
var inst_43242 = (state_43386[(24)]);
var inst_43266 = cljs.core.async.close_BANG_(inst_43242);
var state_43386__$1 = state_43386;
var statearr_43448_45133 = state_43386__$1;
(statearr_43448_45133[(2)] = inst_43266);

(statearr_43448_45133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (22))){
var inst_43290 = (state_43386[(8)]);
var inst_43293 = cljs.core.async.close_BANG_(inst_43290);
var state_43386__$1 = state_43386;
var statearr_43449_45138 = state_43386__$1;
(statearr_43449_45138[(2)] = inst_43293);

(statearr_43449_45138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (36))){
var inst_43336 = (state_43386[(23)]);
var inst_43346 = cljs.core.chunk_first(inst_43336);
var inst_43347 = cljs.core.chunk_rest(inst_43336);
var inst_43348 = cljs.core.count(inst_43346);
var inst_43318 = inst_43347;
var inst_43319 = inst_43346;
var inst_43320 = inst_43348;
var inst_43321 = (0);
var state_43386__$1 = (function (){var statearr_43450 = state_43386;
(statearr_43450[(19)] = inst_43318);

(statearr_43450[(20)] = inst_43320);

(statearr_43450[(11)] = inst_43321);

(statearr_43450[(12)] = inst_43319);

return statearr_43450;
})();
var statearr_43451_45143 = state_43386__$1;
(statearr_43451_45143[(2)] = null);

(statearr_43451_45143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (41))){
var inst_43336 = (state_43386[(23)]);
var inst_43358 = (state_43386[(2)]);
var inst_43359 = cljs.core.next(inst_43336);
var inst_43318 = inst_43359;
var inst_43319 = null;
var inst_43320 = (0);
var inst_43321 = (0);
var state_43386__$1 = (function (){var statearr_43452 = state_43386;
(statearr_43452[(19)] = inst_43318);

(statearr_43452[(25)] = inst_43358);

(statearr_43452[(20)] = inst_43320);

(statearr_43452[(11)] = inst_43321);

(statearr_43452[(12)] = inst_43319);

return statearr_43452;
})();
var statearr_43454_45144 = state_43386__$1;
(statearr_43454_45144[(2)] = null);

(statearr_43454_45144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (43))){
var state_43386__$1 = state_43386;
var statearr_43455_45147 = state_43386__$1;
(statearr_43455_45147[(2)] = null);

(statearr_43455_45147[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (29))){
var inst_43367 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43456_45148 = state_43386__$1;
(statearr_43456_45148[(2)] = inst_43367);

(statearr_43456_45148[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (44))){
var inst_43377 = (state_43386[(2)]);
var state_43386__$1 = (function (){var statearr_43457 = state_43386;
(statearr_43457[(26)] = inst_43377);

return statearr_43457;
})();
var statearr_43458_45149 = state_43386__$1;
(statearr_43458_45149[(2)] = null);

(statearr_43458_45149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (6))){
var inst_43310 = (state_43386[(27)]);
var inst_43309 = cljs.core.deref(cs);
var inst_43310__$1 = cljs.core.keys(inst_43309);
var inst_43311 = cljs.core.count(inst_43310__$1);
var inst_43312 = cljs.core.reset_BANG_(dctr,inst_43311);
var inst_43317 = cljs.core.seq(inst_43310__$1);
var inst_43318 = inst_43317;
var inst_43319 = null;
var inst_43320 = (0);
var inst_43321 = (0);
var state_43386__$1 = (function (){var statearr_43459 = state_43386;
(statearr_43459[(19)] = inst_43318);

(statearr_43459[(27)] = inst_43310__$1);

(statearr_43459[(28)] = inst_43312);

(statearr_43459[(20)] = inst_43320);

(statearr_43459[(11)] = inst_43321);

(statearr_43459[(12)] = inst_43319);

return statearr_43459;
})();
var statearr_43461_45150 = state_43386__$1;
(statearr_43461_45150[(2)] = null);

(statearr_43461_45150[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (28))){
var inst_43318 = (state_43386[(19)]);
var inst_43336 = (state_43386[(23)]);
var inst_43336__$1 = cljs.core.seq(inst_43318);
var state_43386__$1 = (function (){var statearr_43462 = state_43386;
(statearr_43462[(23)] = inst_43336__$1);

return statearr_43462;
})();
if(inst_43336__$1){
var statearr_43463_45152 = state_43386__$1;
(statearr_43463_45152[(1)] = (33));

} else {
var statearr_43464_45153 = state_43386__$1;
(statearr_43464_45153[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (25))){
var inst_43320 = (state_43386[(20)]);
var inst_43321 = (state_43386[(11)]);
var inst_43323 = (inst_43321 < inst_43320);
var inst_43324 = inst_43323;
var state_43386__$1 = state_43386;
if(cljs.core.truth_(inst_43324)){
var statearr_43477_45155 = state_43386__$1;
(statearr_43477_45155[(1)] = (27));

} else {
var statearr_43482_45156 = state_43386__$1;
(statearr_43482_45156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (34))){
var state_43386__$1 = state_43386;
var statearr_43487_45157 = state_43386__$1;
(statearr_43487_45157[(2)] = null);

(statearr_43487_45157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (17))){
var state_43386__$1 = state_43386;
var statearr_43488_45158 = state_43386__$1;
(statearr_43488_45158[(2)] = null);

(statearr_43488_45158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (3))){
var inst_43382 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43386__$1,inst_43382);
} else {
if((state_val_43387 === (12))){
var inst_43305 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43490_45159 = state_43386__$1;
(statearr_43490_45159[(2)] = inst_43305);

(statearr_43490_45159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (2))){
var state_43386__$1 = state_43386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43386__$1,(4),ch);
} else {
if((state_val_43387 === (23))){
var state_43386__$1 = state_43386;
var statearr_43491_45160 = state_43386__$1;
(statearr_43491_45160[(2)] = null);

(statearr_43491_45160[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (35))){
var inst_43365 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43492_45161 = state_43386__$1;
(statearr_43492_45161[(2)] = inst_43365);

(statearr_43492_45161[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (19))){
var inst_43273 = (state_43386[(7)]);
var inst_43279 = cljs.core.chunk_first(inst_43273);
var inst_43280 = cljs.core.chunk_rest(inst_43273);
var inst_43282 = cljs.core.count(inst_43279);
var inst_43229 = inst_43280;
var inst_43230 = inst_43279;
var inst_43231 = inst_43282;
var inst_43232 = (0);
var state_43386__$1 = (function (){var statearr_43494 = state_43386;
(statearr_43494[(14)] = inst_43232);

(statearr_43494[(15)] = inst_43230);

(statearr_43494[(16)] = inst_43231);

(statearr_43494[(17)] = inst_43229);

return statearr_43494;
})();
var statearr_43495_45162 = state_43386__$1;
(statearr_43495_45162[(2)] = null);

(statearr_43495_45162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (11))){
var inst_43273 = (state_43386[(7)]);
var inst_43229 = (state_43386[(17)]);
var inst_43273__$1 = cljs.core.seq(inst_43229);
var state_43386__$1 = (function (){var statearr_43496 = state_43386;
(statearr_43496[(7)] = inst_43273__$1);

return statearr_43496;
})();
if(inst_43273__$1){
var statearr_43497_45163 = state_43386__$1;
(statearr_43497_45163[(1)] = (16));

} else {
var statearr_43498_45164 = state_43386__$1;
(statearr_43498_45164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (9))){
var inst_43307 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43499_45165 = state_43386__$1;
(statearr_43499_45165[(2)] = inst_43307);

(statearr_43499_45165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (5))){
var inst_43227 = cljs.core.deref(cs);
var inst_43228 = cljs.core.seq(inst_43227);
var inst_43229 = inst_43228;
var inst_43230 = null;
var inst_43231 = (0);
var inst_43232 = (0);
var state_43386__$1 = (function (){var statearr_43501 = state_43386;
(statearr_43501[(14)] = inst_43232);

(statearr_43501[(15)] = inst_43230);

(statearr_43501[(16)] = inst_43231);

(statearr_43501[(17)] = inst_43229);

return statearr_43501;
})();
var statearr_43502_45166 = state_43386__$1;
(statearr_43502_45166[(2)] = null);

(statearr_43502_45166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (14))){
var state_43386__$1 = state_43386;
var statearr_43503_45167 = state_43386__$1;
(statearr_43503_45167[(2)] = null);

(statearr_43503_45167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (45))){
var inst_43374 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43505_45168 = state_43386__$1;
(statearr_43505_45168[(2)] = inst_43374);

(statearr_43505_45168[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (26))){
var inst_43310 = (state_43386[(27)]);
var inst_43369 = (state_43386[(2)]);
var inst_43370 = cljs.core.seq(inst_43310);
var state_43386__$1 = (function (){var statearr_43506 = state_43386;
(statearr_43506[(29)] = inst_43369);

return statearr_43506;
})();
if(inst_43370){
var statearr_43507_45169 = state_43386__$1;
(statearr_43507_45169[(1)] = (42));

} else {
var statearr_43508_45170 = state_43386__$1;
(statearr_43508_45170[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (16))){
var inst_43273 = (state_43386[(7)]);
var inst_43275 = cljs.core.chunked_seq_QMARK_(inst_43273);
var state_43386__$1 = state_43386;
if(inst_43275){
var statearr_43509_45172 = state_43386__$1;
(statearr_43509_45172[(1)] = (19));

} else {
var statearr_43510_45173 = state_43386__$1;
(statearr_43510_45173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (38))){
var inst_43362 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43511_45174 = state_43386__$1;
(statearr_43511_45174[(2)] = inst_43362);

(statearr_43511_45174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (30))){
var state_43386__$1 = state_43386;
var statearr_43513_45175 = state_43386__$1;
(statearr_43513_45175[(2)] = null);

(statearr_43513_45175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (10))){
var inst_43232 = (state_43386[(14)]);
var inst_43230 = (state_43386[(15)]);
var inst_43241 = cljs.core._nth(inst_43230,inst_43232);
var inst_43242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43241,(0),null);
var inst_43264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43241,(1),null);
var state_43386__$1 = (function (){var statearr_43514 = state_43386;
(statearr_43514[(24)] = inst_43242);

return statearr_43514;
})();
if(cljs.core.truth_(inst_43264)){
var statearr_43515_45176 = state_43386__$1;
(statearr_43515_45176[(1)] = (13));

} else {
var statearr_43516_45177 = state_43386__$1;
(statearr_43516_45177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (18))){
var inst_43303 = (state_43386[(2)]);
var state_43386__$1 = state_43386;
var statearr_43517_45178 = state_43386__$1;
(statearr_43517_45178[(2)] = inst_43303);

(statearr_43517_45178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (42))){
var state_43386__$1 = state_43386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43386__$1,(45),dchan);
} else {
if((state_val_43387 === (37))){
var inst_43216 = (state_43386[(9)]);
var inst_43352 = (state_43386[(22)]);
var inst_43336 = (state_43386[(23)]);
var inst_43352__$1 = cljs.core.first(inst_43336);
var inst_43353 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43352__$1,inst_43216,done);
var state_43386__$1 = (function (){var statearr_43518 = state_43386;
(statearr_43518[(22)] = inst_43352__$1);

return statearr_43518;
})();
if(cljs.core.truth_(inst_43353)){
var statearr_43519_45183 = state_43386__$1;
(statearr_43519_45183[(1)] = (39));

} else {
var statearr_43520_45184 = state_43386__$1;
(statearr_43520_45184[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43387 === (8))){
var inst_43232 = (state_43386[(14)]);
var inst_43231 = (state_43386[(16)]);
var inst_43234 = (inst_43232 < inst_43231);
var inst_43235 = inst_43234;
var state_43386__$1 = state_43386;
if(cljs.core.truth_(inst_43235)){
var statearr_43522_45185 = state_43386__$1;
(statearr_43522_45185[(1)] = (10));

} else {
var statearr_43523_45186 = state_43386__$1;
(statearr_43523_45186[(1)] = (11));

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
var statearr_43524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43524[(0)] = cljs$core$async$mult_$_state_machine__33326__auto__);

(statearr_43524[(1)] = (1));

return statearr_43524;
});
var cljs$core$async$mult_$_state_machine__33326__auto____1 = (function (state_43386){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43386);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43525){var ex__33329__auto__ = e43525;
var statearr_43526_45189 = state_43386;
(statearr_43526_45189[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43386[(4)]))){
var statearr_43527_45190 = state_43386;
(statearr_43527_45190[(1)] = cljs.core.first((state_43386[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45191 = state_43386;
state_43386 = G__45191;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33326__auto__ = function(state_43386){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33326__auto____1.call(this,state_43386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33326__auto____0;
cljs$core$async$mult_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33326__auto____1;
return cljs$core$async$mult_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43529 = f__33397__auto__();
(statearr_43529[(6)] = c__33396__auto___45074);

return statearr_43529;
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
var G__43531 = arguments.length;
switch (G__43531) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_45204 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_45204(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45212 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_45212(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45217 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45217(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45222 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_45222(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45226 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45226(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___45231 = arguments.length;
var i__4865__auto___45232 = (0);
while(true){
if((i__4865__auto___45232 < len__4864__auto___45231)){
args__4870__auto__.push((arguments[i__4865__auto___45232]));

var G__45233 = (i__4865__auto___45232 + (1));
i__4865__auto___45232 = G__45233;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43542){
var map__43543 = p__43542;
var map__43543__$1 = cljs.core.__destructure_map(map__43543);
var opts = map__43543__$1;
var statearr_43544_45234 = state;
(statearr_43544_45234[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43545_45235 = state;
(statearr_43545_45235[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_43546_45236 = state;
(statearr_43546_45236[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43537){
var G__43538 = cljs.core.first(seq43537);
var seq43537__$1 = cljs.core.next(seq43537);
var G__43539 = cljs.core.first(seq43537__$1);
var seq43537__$2 = cljs.core.next(seq43537__$1);
var G__43540 = cljs.core.first(seq43537__$2);
var seq43537__$3 = cljs.core.next(seq43537__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43538,G__43539,G__43540,seq43537__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43549 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43550){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43550 = meta43550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43551,meta43550__$1){
var self__ = this;
var _43551__$1 = this;
return (new cljs.core.async.t_cljs$core$async43549(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43550__$1));
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43551){
var self__ = this;
var _43551__$1 = this;
return self__.meta43550;
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43549.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43550","meta43550",1982148208,null)], null);
}));

(cljs.core.async.t_cljs$core$async43549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43549");

(cljs.core.async.t_cljs$core$async43549.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43549.
 */
cljs.core.async.__GT_t_cljs$core$async43549 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43549(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43550){
return (new cljs.core.async.t_cljs$core$async43549(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43550));
});

}

return (new cljs.core.async.t_cljs$core$async43549(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33396__auto___45242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43624){
var state_val_43625 = (state_43624[(1)]);
if((state_val_43625 === (7))){
var inst_43583 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
if(cljs.core.truth_(inst_43583)){
var statearr_43626_45243 = state_43624__$1;
(statearr_43626_45243[(1)] = (8));

} else {
var statearr_43627_45244 = state_43624__$1;
(statearr_43627_45244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (20))){
var inst_43576 = (state_43624[(7)]);
var state_43624__$1 = state_43624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43624__$1,(23),out,inst_43576);
} else {
if((state_val_43625 === (1))){
var inst_43558 = calc_state();
var inst_43559 = cljs.core.__destructure_map(inst_43558);
var inst_43560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43559,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43559,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43559,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43564 = inst_43558;
var state_43624__$1 = (function (){var statearr_43629 = state_43624;
(statearr_43629[(8)] = inst_43562);

(statearr_43629[(9)] = inst_43561);

(statearr_43629[(10)] = inst_43560);

(statearr_43629[(11)] = inst_43564);

return statearr_43629;
})();
var statearr_43630_45245 = state_43624__$1;
(statearr_43630_45245[(2)] = null);

(statearr_43630_45245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (24))){
var inst_43567 = (state_43624[(12)]);
var inst_43564 = inst_43567;
var state_43624__$1 = (function (){var statearr_43631 = state_43624;
(statearr_43631[(11)] = inst_43564);

return statearr_43631;
})();
var statearr_43632_45246 = state_43624__$1;
(statearr_43632_45246[(2)] = null);

(statearr_43632_45246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (4))){
var inst_43576 = (state_43624[(7)]);
var inst_43578 = (state_43624[(13)]);
var inst_43575 = (state_43624[(2)]);
var inst_43576__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43575,(0),null);
var inst_43577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43575,(1),null);
var inst_43578__$1 = (inst_43576__$1 == null);
var state_43624__$1 = (function (){var statearr_43633 = state_43624;
(statearr_43633[(14)] = inst_43577);

(statearr_43633[(7)] = inst_43576__$1);

(statearr_43633[(13)] = inst_43578__$1);

return statearr_43633;
})();
if(cljs.core.truth_(inst_43578__$1)){
var statearr_43634_45260 = state_43624__$1;
(statearr_43634_45260[(1)] = (5));

} else {
var statearr_43635_45261 = state_43624__$1;
(statearr_43635_45261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (15))){
var inst_43568 = (state_43624[(15)]);
var inst_43597 = (state_43624[(16)]);
var inst_43597__$1 = cljs.core.empty_QMARK_(inst_43568);
var state_43624__$1 = (function (){var statearr_43637 = state_43624;
(statearr_43637[(16)] = inst_43597__$1);

return statearr_43637;
})();
if(inst_43597__$1){
var statearr_43638_45262 = state_43624__$1;
(statearr_43638_45262[(1)] = (17));

} else {
var statearr_43639_45263 = state_43624__$1;
(statearr_43639_45263[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (21))){
var inst_43567 = (state_43624[(12)]);
var inst_43564 = inst_43567;
var state_43624__$1 = (function (){var statearr_43640 = state_43624;
(statearr_43640[(11)] = inst_43564);

return statearr_43640;
})();
var statearr_43641_45264 = state_43624__$1;
(statearr_43641_45264[(2)] = null);

(statearr_43641_45264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (13))){
var inst_43590 = (state_43624[(2)]);
var inst_43591 = calc_state();
var inst_43564 = inst_43591;
var state_43624__$1 = (function (){var statearr_43642 = state_43624;
(statearr_43642[(11)] = inst_43564);

(statearr_43642[(17)] = inst_43590);

return statearr_43642;
})();
var statearr_43643_45265 = state_43624__$1;
(statearr_43643_45265[(2)] = null);

(statearr_43643_45265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (22))){
var inst_43618 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
var statearr_43644_45266 = state_43624__$1;
(statearr_43644_45266[(2)] = inst_43618);

(statearr_43644_45266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (6))){
var inst_43577 = (state_43624[(14)]);
var inst_43581 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43577,change);
var state_43624__$1 = state_43624;
var statearr_43646_45267 = state_43624__$1;
(statearr_43646_45267[(2)] = inst_43581);

(statearr_43646_45267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (25))){
var state_43624__$1 = state_43624;
var statearr_43647_45269 = state_43624__$1;
(statearr_43647_45269[(2)] = null);

(statearr_43647_45269[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (17))){
var inst_43577 = (state_43624[(14)]);
var inst_43569 = (state_43624[(18)]);
var inst_43599 = (inst_43569.cljs$core$IFn$_invoke$arity$1 ? inst_43569.cljs$core$IFn$_invoke$arity$1(inst_43577) : inst_43569.call(null,inst_43577));
var inst_43600 = cljs.core.not(inst_43599);
var state_43624__$1 = state_43624;
var statearr_43648_45270 = state_43624__$1;
(statearr_43648_45270[(2)] = inst_43600);

(statearr_43648_45270[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (3))){
var inst_43622 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43624__$1,inst_43622);
} else {
if((state_val_43625 === (12))){
var state_43624__$1 = state_43624;
var statearr_43649_45275 = state_43624__$1;
(statearr_43649_45275[(2)] = null);

(statearr_43649_45275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (2))){
var inst_43567 = (state_43624[(12)]);
var inst_43564 = (state_43624[(11)]);
var inst_43567__$1 = cljs.core.__destructure_map(inst_43564);
var inst_43568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43567__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43567__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43567__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43624__$1 = (function (){var statearr_43650 = state_43624;
(statearr_43650[(12)] = inst_43567__$1);

(statearr_43650[(15)] = inst_43568);

(statearr_43650[(18)] = inst_43569);

return statearr_43650;
})();
return cljs.core.async.ioc_alts_BANG_(state_43624__$1,(4),inst_43570);
} else {
if((state_val_43625 === (23))){
var inst_43608 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
if(cljs.core.truth_(inst_43608)){
var statearr_43652_45277 = state_43624__$1;
(statearr_43652_45277[(1)] = (24));

} else {
var statearr_43653_45278 = state_43624__$1;
(statearr_43653_45278[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (19))){
var inst_43603 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
var statearr_43654_45279 = state_43624__$1;
(statearr_43654_45279[(2)] = inst_43603);

(statearr_43654_45279[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (11))){
var inst_43577 = (state_43624[(14)]);
var inst_43587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43577);
var state_43624__$1 = state_43624;
var statearr_43655_45280 = state_43624__$1;
(statearr_43655_45280[(2)] = inst_43587);

(statearr_43655_45280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (9))){
var inst_43577 = (state_43624[(14)]);
var inst_43594 = (state_43624[(19)]);
var inst_43568 = (state_43624[(15)]);
var inst_43594__$1 = (inst_43568.cljs$core$IFn$_invoke$arity$1 ? inst_43568.cljs$core$IFn$_invoke$arity$1(inst_43577) : inst_43568.call(null,inst_43577));
var state_43624__$1 = (function (){var statearr_43656 = state_43624;
(statearr_43656[(19)] = inst_43594__$1);

return statearr_43656;
})();
if(cljs.core.truth_(inst_43594__$1)){
var statearr_43657_45281 = state_43624__$1;
(statearr_43657_45281[(1)] = (14));

} else {
var statearr_43659_45282 = state_43624__$1;
(statearr_43659_45282[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (5))){
var inst_43578 = (state_43624[(13)]);
var state_43624__$1 = state_43624;
var statearr_43660_45283 = state_43624__$1;
(statearr_43660_45283[(2)] = inst_43578);

(statearr_43660_45283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (14))){
var inst_43594 = (state_43624[(19)]);
var state_43624__$1 = state_43624;
var statearr_43661_45284 = state_43624__$1;
(statearr_43661_45284[(2)] = inst_43594);

(statearr_43661_45284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (26))){
var inst_43614 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
var statearr_43662_45286 = state_43624__$1;
(statearr_43662_45286[(2)] = inst_43614);

(statearr_43662_45286[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (16))){
var inst_43605 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
if(cljs.core.truth_(inst_43605)){
var statearr_43663_45287 = state_43624__$1;
(statearr_43663_45287[(1)] = (20));

} else {
var statearr_43664_45288 = state_43624__$1;
(statearr_43664_45288[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (10))){
var inst_43620 = (state_43624[(2)]);
var state_43624__$1 = state_43624;
var statearr_43665_45289 = state_43624__$1;
(statearr_43665_45289[(2)] = inst_43620);

(statearr_43665_45289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (18))){
var inst_43597 = (state_43624[(16)]);
var state_43624__$1 = state_43624;
var statearr_43666_45290 = state_43624__$1;
(statearr_43666_45290[(2)] = inst_43597);

(statearr_43666_45290[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43625 === (8))){
var inst_43576 = (state_43624[(7)]);
var inst_43585 = (inst_43576 == null);
var state_43624__$1 = state_43624;
if(cljs.core.truth_(inst_43585)){
var statearr_43668_45292 = state_43624__$1;
(statearr_43668_45292[(1)] = (11));

} else {
var statearr_43669_45293 = state_43624__$1;
(statearr_43669_45293[(1)] = (12));

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
var statearr_43670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43670[(0)] = cljs$core$async$mix_$_state_machine__33326__auto__);

(statearr_43670[(1)] = (1));

return statearr_43670;
});
var cljs$core$async$mix_$_state_machine__33326__auto____1 = (function (state_43624){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43624);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43671){var ex__33329__auto__ = e43671;
var statearr_43672_45297 = state_43624;
(statearr_43672_45297[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43624[(4)]))){
var statearr_43673_45298 = state_43624;
(statearr_43673_45298[(1)] = cljs.core.first((state_43624[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45299 = state_43624;
state_43624 = G__45299;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33326__auto__ = function(state_43624){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33326__auto____1.call(this,state_43624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33326__auto____0;
cljs$core$async$mix_$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33326__auto____1;
return cljs$core$async$mix_$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43675 = f__33397__auto__();
(statearr_43675[(6)] = c__33396__auto___45242);

return statearr_43675;
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

var cljs$core$async$Pub$sub_STAR_$dyn_45302 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_45302(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45303 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45303(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45305 = (function() {
var G__45306 = null;
var G__45306__1 = (function (p){
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
var G__45306__2 = (function (p,v){
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
G__45306 = function(p,v){
switch(arguments.length){
case 1:
return G__45306__1.call(this,p);
case 2:
return G__45306__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45306.cljs$core$IFn$_invoke$arity$1 = G__45306__1;
G__45306.cljs$core$IFn$_invoke$arity$2 = G__45306__2;
return G__45306;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43681 = arguments.length;
switch (G__43681) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45305(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45305(p,v);
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
var G__43685 = arguments.length;
switch (G__43685) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43683_SHARP_){
if(cljs.core.truth_((p1__43683_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43683_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43683_SHARP_.call(null,topic)))){
return p1__43683_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43683_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43687 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43687 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43688){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43688 = meta43688;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43689,meta43688__$1){
var self__ = this;
var _43689__$1 = this;
return (new cljs.core.async.t_cljs$core$async43687(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43688__$1));
}));

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43689){
var self__ = this;
var _43689__$1 = this;
return self__.meta43688;
}));

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43687.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43687.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43688","meta43688",-446171624,null)], null);
}));

(cljs.core.async.t_cljs$core$async43687.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43687.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43687");

(cljs.core.async.t_cljs$core$async43687.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43687");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43687.
 */
cljs.core.async.__GT_t_cljs$core$async43687 = (function cljs$core$async$__GT_t_cljs$core$async43687(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43688){
return (new cljs.core.async.t_cljs$core$async43687(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43688));
});

}

return (new cljs.core.async.t_cljs$core$async43687(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33396__auto___45331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43766){
var state_val_43767 = (state_43766[(1)]);
if((state_val_43767 === (7))){
var inst_43762 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43770_45332 = state_43766__$1;
(statearr_43770_45332[(2)] = inst_43762);

(statearr_43770_45332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (20))){
var state_43766__$1 = state_43766;
var statearr_43771_45333 = state_43766__$1;
(statearr_43771_45333[(2)] = null);

(statearr_43771_45333[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (1))){
var state_43766__$1 = state_43766;
var statearr_43772_45337 = state_43766__$1;
(statearr_43772_45337[(2)] = null);

(statearr_43772_45337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (24))){
var inst_43745 = (state_43766[(7)]);
var inst_43754 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43745);
var state_43766__$1 = state_43766;
var statearr_43773_45339 = state_43766__$1;
(statearr_43773_45339[(2)] = inst_43754);

(statearr_43773_45339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (4))){
var inst_43695 = (state_43766[(8)]);
var inst_43695__$1 = (state_43766[(2)]);
var inst_43696 = (inst_43695__$1 == null);
var state_43766__$1 = (function (){var statearr_43774 = state_43766;
(statearr_43774[(8)] = inst_43695__$1);

return statearr_43774;
})();
if(cljs.core.truth_(inst_43696)){
var statearr_43775_45340 = state_43766__$1;
(statearr_43775_45340[(1)] = (5));

} else {
var statearr_43776_45341 = state_43766__$1;
(statearr_43776_45341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (15))){
var inst_43739 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43777_45342 = state_43766__$1;
(statearr_43777_45342[(2)] = inst_43739);

(statearr_43777_45342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (21))){
var inst_43759 = (state_43766[(2)]);
var state_43766__$1 = (function (){var statearr_43778 = state_43766;
(statearr_43778[(9)] = inst_43759);

return statearr_43778;
})();
var statearr_43779_45351 = state_43766__$1;
(statearr_43779_45351[(2)] = null);

(statearr_43779_45351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (13))){
var inst_43721 = (state_43766[(10)]);
var inst_43723 = cljs.core.chunked_seq_QMARK_(inst_43721);
var state_43766__$1 = state_43766;
if(inst_43723){
var statearr_43780_45352 = state_43766__$1;
(statearr_43780_45352[(1)] = (16));

} else {
var statearr_43781_45353 = state_43766__$1;
(statearr_43781_45353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (22))){
var inst_43751 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
if(cljs.core.truth_(inst_43751)){
var statearr_43782_45354 = state_43766__$1;
(statearr_43782_45354[(1)] = (23));

} else {
var statearr_43783_45355 = state_43766__$1;
(statearr_43783_45355[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (6))){
var inst_43695 = (state_43766[(8)]);
var inst_43747 = (state_43766[(11)]);
var inst_43745 = (state_43766[(7)]);
var inst_43745__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43695) : topic_fn.call(null,inst_43695));
var inst_43746 = cljs.core.deref(mults);
var inst_43747__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43746,inst_43745__$1);
var state_43766__$1 = (function (){var statearr_43784 = state_43766;
(statearr_43784[(11)] = inst_43747__$1);

(statearr_43784[(7)] = inst_43745__$1);

return statearr_43784;
})();
if(cljs.core.truth_(inst_43747__$1)){
var statearr_43785_45357 = state_43766__$1;
(statearr_43785_45357[(1)] = (19));

} else {
var statearr_43786_45358 = state_43766__$1;
(statearr_43786_45358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (25))){
var inst_43756 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43788_45359 = state_43766__$1;
(statearr_43788_45359[(2)] = inst_43756);

(statearr_43788_45359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (17))){
var inst_43721 = (state_43766[(10)]);
var inst_43730 = cljs.core.first(inst_43721);
var inst_43731 = cljs.core.async.muxch_STAR_(inst_43730);
var inst_43732 = cljs.core.async.close_BANG_(inst_43731);
var inst_43733 = cljs.core.next(inst_43721);
var inst_43707 = inst_43733;
var inst_43708 = null;
var inst_43709 = (0);
var inst_43710 = (0);
var state_43766__$1 = (function (){var statearr_43790 = state_43766;
(statearr_43790[(12)] = inst_43710);

(statearr_43790[(13)] = inst_43709);

(statearr_43790[(14)] = inst_43707);

(statearr_43790[(15)] = inst_43732);

(statearr_43790[(16)] = inst_43708);

return statearr_43790;
})();
var statearr_43791_45360 = state_43766__$1;
(statearr_43791_45360[(2)] = null);

(statearr_43791_45360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (3))){
var inst_43764 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43766__$1,inst_43764);
} else {
if((state_val_43767 === (12))){
var inst_43741 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43792_45363 = state_43766__$1;
(statearr_43792_45363[(2)] = inst_43741);

(statearr_43792_45363[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (2))){
var state_43766__$1 = state_43766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43766__$1,(4),ch);
} else {
if((state_val_43767 === (23))){
var state_43766__$1 = state_43766;
var statearr_43793_45364 = state_43766__$1;
(statearr_43793_45364[(2)] = null);

(statearr_43793_45364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (19))){
var inst_43695 = (state_43766[(8)]);
var inst_43747 = (state_43766[(11)]);
var inst_43749 = cljs.core.async.muxch_STAR_(inst_43747);
var state_43766__$1 = state_43766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43766__$1,(22),inst_43749,inst_43695);
} else {
if((state_val_43767 === (11))){
var inst_43707 = (state_43766[(14)]);
var inst_43721 = (state_43766[(10)]);
var inst_43721__$1 = cljs.core.seq(inst_43707);
var state_43766__$1 = (function (){var statearr_43794 = state_43766;
(statearr_43794[(10)] = inst_43721__$1);

return statearr_43794;
})();
if(inst_43721__$1){
var statearr_43795_45374 = state_43766__$1;
(statearr_43795_45374[(1)] = (13));

} else {
var statearr_43796_45375 = state_43766__$1;
(statearr_43796_45375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (9))){
var inst_43743 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43797_45376 = state_43766__$1;
(statearr_43797_45376[(2)] = inst_43743);

(statearr_43797_45376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (5))){
var inst_43703 = cljs.core.deref(mults);
var inst_43704 = cljs.core.vals(inst_43703);
var inst_43705 = cljs.core.seq(inst_43704);
var inst_43707 = inst_43705;
var inst_43708 = null;
var inst_43709 = (0);
var inst_43710 = (0);
var state_43766__$1 = (function (){var statearr_43798 = state_43766;
(statearr_43798[(12)] = inst_43710);

(statearr_43798[(13)] = inst_43709);

(statearr_43798[(14)] = inst_43707);

(statearr_43798[(16)] = inst_43708);

return statearr_43798;
})();
var statearr_43799_45378 = state_43766__$1;
(statearr_43799_45378[(2)] = null);

(statearr_43799_45378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (14))){
var state_43766__$1 = state_43766;
var statearr_43803_45379 = state_43766__$1;
(statearr_43803_45379[(2)] = null);

(statearr_43803_45379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (16))){
var inst_43721 = (state_43766[(10)]);
var inst_43725 = cljs.core.chunk_first(inst_43721);
var inst_43726 = cljs.core.chunk_rest(inst_43721);
var inst_43727 = cljs.core.count(inst_43725);
var inst_43707 = inst_43726;
var inst_43708 = inst_43725;
var inst_43709 = inst_43727;
var inst_43710 = (0);
var state_43766__$1 = (function (){var statearr_43804 = state_43766;
(statearr_43804[(12)] = inst_43710);

(statearr_43804[(13)] = inst_43709);

(statearr_43804[(14)] = inst_43707);

(statearr_43804[(16)] = inst_43708);

return statearr_43804;
})();
var statearr_43805_45381 = state_43766__$1;
(statearr_43805_45381[(2)] = null);

(statearr_43805_45381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (10))){
var inst_43710 = (state_43766[(12)]);
var inst_43709 = (state_43766[(13)]);
var inst_43707 = (state_43766[(14)]);
var inst_43708 = (state_43766[(16)]);
var inst_43715 = cljs.core._nth(inst_43708,inst_43710);
var inst_43716 = cljs.core.async.muxch_STAR_(inst_43715);
var inst_43717 = cljs.core.async.close_BANG_(inst_43716);
var inst_43718 = (inst_43710 + (1));
var tmp43800 = inst_43709;
var tmp43801 = inst_43707;
var tmp43802 = inst_43708;
var inst_43707__$1 = tmp43801;
var inst_43708__$1 = tmp43802;
var inst_43709__$1 = tmp43800;
var inst_43710__$1 = inst_43718;
var state_43766__$1 = (function (){var statearr_43806 = state_43766;
(statearr_43806[(12)] = inst_43710__$1);

(statearr_43806[(13)] = inst_43709__$1);

(statearr_43806[(14)] = inst_43707__$1);

(statearr_43806[(17)] = inst_43717);

(statearr_43806[(16)] = inst_43708__$1);

return statearr_43806;
})();
var statearr_43807_45386 = state_43766__$1;
(statearr_43807_45386[(2)] = null);

(statearr_43807_45386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (18))){
var inst_43736 = (state_43766[(2)]);
var state_43766__$1 = state_43766;
var statearr_43808_45388 = state_43766__$1;
(statearr_43808_45388[(2)] = inst_43736);

(statearr_43808_45388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43767 === (8))){
var inst_43710 = (state_43766[(12)]);
var inst_43709 = (state_43766[(13)]);
var inst_43712 = (inst_43710 < inst_43709);
var inst_43713 = inst_43712;
var state_43766__$1 = state_43766;
if(cljs.core.truth_(inst_43713)){
var statearr_43809_45389 = state_43766__$1;
(statearr_43809_45389[(1)] = (10));

} else {
var statearr_43810_45390 = state_43766__$1;
(statearr_43810_45390[(1)] = (11));

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
var statearr_43814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43814[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_43814[(1)] = (1));

return statearr_43814;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_43766){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43766);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43815){var ex__33329__auto__ = e43815;
var statearr_43816_45392 = state_43766;
(statearr_43816_45392[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43766[(4)]))){
var statearr_43818_45396 = state_43766;
(statearr_43818_45396[(1)] = cljs.core.first((state_43766[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45397 = state_43766;
state_43766 = G__45397;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_43766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_43766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43824 = f__33397__auto__();
(statearr_43824[(6)] = c__33396__auto___45331);

return statearr_43824;
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
var G__43826 = arguments.length;
switch (G__43826) {
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
var G__43839 = arguments.length;
switch (G__43839) {
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
var G__43847 = arguments.length;
switch (G__43847) {
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
var c__33396__auto___45410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_43909){
var state_val_43911 = (state_43909[(1)]);
if((state_val_43911 === (7))){
var state_43909__$1 = state_43909;
var statearr_43915_45411 = state_43909__$1;
(statearr_43915_45411[(2)] = null);

(statearr_43915_45411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (1))){
var state_43909__$1 = state_43909;
var statearr_43917_45412 = state_43909__$1;
(statearr_43917_45412[(2)] = null);

(statearr_43917_45412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (4))){
var inst_43866 = (state_43909[(7)]);
var inst_43865 = (state_43909[(8)]);
var inst_43868 = (inst_43866 < inst_43865);
var state_43909__$1 = state_43909;
if(cljs.core.truth_(inst_43868)){
var statearr_43921_45413 = state_43909__$1;
(statearr_43921_45413[(1)] = (6));

} else {
var statearr_43922_45414 = state_43909__$1;
(statearr_43922_45414[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (15))){
var inst_43894 = (state_43909[(9)]);
var inst_43900 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43894);
var state_43909__$1 = state_43909;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43909__$1,(17),out,inst_43900);
} else {
if((state_val_43911 === (13))){
var inst_43894 = (state_43909[(9)]);
var inst_43894__$1 = (state_43909[(2)]);
var inst_43896 = cljs.core.some(cljs.core.nil_QMARK_,inst_43894__$1);
var state_43909__$1 = (function (){var statearr_43927 = state_43909;
(statearr_43927[(9)] = inst_43894__$1);

return statearr_43927;
})();
if(cljs.core.truth_(inst_43896)){
var statearr_43928_45417 = state_43909__$1;
(statearr_43928_45417[(1)] = (14));

} else {
var statearr_43930_45418 = state_43909__$1;
(statearr_43930_45418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (6))){
var state_43909__$1 = state_43909;
var statearr_43931_45419 = state_43909__$1;
(statearr_43931_45419[(2)] = null);

(statearr_43931_45419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (17))){
var inst_43902 = (state_43909[(2)]);
var state_43909__$1 = (function (){var statearr_43936 = state_43909;
(statearr_43936[(10)] = inst_43902);

return statearr_43936;
})();
var statearr_43937_45420 = state_43909__$1;
(statearr_43937_45420[(2)] = null);

(statearr_43937_45420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (3))){
var inst_43907 = (state_43909[(2)]);
var state_43909__$1 = state_43909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43909__$1,inst_43907);
} else {
if((state_val_43911 === (12))){
var _ = (function (){var statearr_43939 = state_43909;
(statearr_43939[(4)] = cljs.core.rest((state_43909[(4)])));

return statearr_43939;
})();
var state_43909__$1 = state_43909;
var ex43934 = (state_43909__$1[(2)]);
var statearr_43943_45423 = state_43909__$1;
(statearr_43943_45423[(5)] = ex43934);


if((ex43934 instanceof Object)){
var statearr_43944_45424 = state_43909__$1;
(statearr_43944_45424[(1)] = (11));

(statearr_43944_45424[(5)] = null);

} else {
throw ex43934;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (2))){
var inst_43863 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43865 = cnt;
var inst_43866 = (0);
var state_43909__$1 = (function (){var statearr_43946 = state_43909;
(statearr_43946[(7)] = inst_43866);

(statearr_43946[(8)] = inst_43865);

(statearr_43946[(11)] = inst_43863);

return statearr_43946;
})();
var statearr_43950_45425 = state_43909__$1;
(statearr_43950_45425[(2)] = null);

(statearr_43950_45425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (11))){
var inst_43871 = (state_43909[(2)]);
var inst_43872 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43909__$1 = (function (){var statearr_43952 = state_43909;
(statearr_43952[(12)] = inst_43871);

return statearr_43952;
})();
var statearr_43953_45427 = state_43909__$1;
(statearr_43953_45427[(2)] = inst_43872);

(statearr_43953_45427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (9))){
var inst_43866 = (state_43909[(7)]);
var _ = (function (){var statearr_43955 = state_43909;
(statearr_43955[(4)] = cljs.core.cons((12),(state_43909[(4)])));

return statearr_43955;
})();
var inst_43878 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43866) : chs__$1.call(null,inst_43866));
var inst_43879 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43866) : done.call(null,inst_43866));
var inst_43880 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43878,inst_43879);
var ___$1 = (function (){var statearr_43958 = state_43909;
(statearr_43958[(4)] = cljs.core.rest((state_43909[(4)])));

return statearr_43958;
})();
var state_43909__$1 = state_43909;
var statearr_43960_45429 = state_43909__$1;
(statearr_43960_45429[(2)] = inst_43880);

(statearr_43960_45429[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (5))){
var inst_43891 = (state_43909[(2)]);
var state_43909__$1 = (function (){var statearr_43961 = state_43909;
(statearr_43961[(13)] = inst_43891);

return statearr_43961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43909__$1,(13),dchan);
} else {
if((state_val_43911 === (14))){
var inst_43898 = cljs.core.async.close_BANG_(out);
var state_43909__$1 = state_43909;
var statearr_43966_45433 = state_43909__$1;
(statearr_43966_45433[(2)] = inst_43898);

(statearr_43966_45433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (16))){
var inst_43905 = (state_43909[(2)]);
var state_43909__$1 = state_43909;
var statearr_43968_45435 = state_43909__$1;
(statearr_43968_45435[(2)] = inst_43905);

(statearr_43968_45435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (10))){
var inst_43866 = (state_43909[(7)]);
var inst_43883 = (state_43909[(2)]);
var inst_43884 = (inst_43866 + (1));
var inst_43866__$1 = inst_43884;
var state_43909__$1 = (function (){var statearr_43970 = state_43909;
(statearr_43970[(14)] = inst_43883);

(statearr_43970[(7)] = inst_43866__$1);

return statearr_43970;
})();
var statearr_43971_45436 = state_43909__$1;
(statearr_43971_45436[(2)] = null);

(statearr_43971_45436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43911 === (8))){
var inst_43888 = (state_43909[(2)]);
var state_43909__$1 = state_43909;
var statearr_43975_45437 = state_43909__$1;
(statearr_43975_45437[(2)] = inst_43888);

(statearr_43975_45437[(1)] = (5));


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
var statearr_43978 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43978[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_43978[(1)] = (1));

return statearr_43978;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_43909){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_43909);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e43979){var ex__33329__auto__ = e43979;
var statearr_43982_45438 = state_43909;
(statearr_43982_45438[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_43909[(4)]))){
var statearr_43984_45439 = state_43909;
(statearr_43984_45439[(1)] = cljs.core.first((state_43909[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45440 = state_43909;
state_43909 = G__45440;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_43909){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_43909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_43986 = f__33397__auto__();
(statearr_43986[(6)] = c__33396__auto___45410);

return statearr_43986;
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
var G__43993 = arguments.length;
switch (G__43993) {
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
var c__33396__auto___45442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44037){
var state_val_44038 = (state_44037[(1)]);
if((state_val_44038 === (7))){
var inst_44013 = (state_44037[(7)]);
var inst_44012 = (state_44037[(8)]);
var inst_44012__$1 = (state_44037[(2)]);
var inst_44013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44012__$1,(0),null);
var inst_44014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44012__$1,(1),null);
var inst_44015 = (inst_44013__$1 == null);
var state_44037__$1 = (function (){var statearr_44045 = state_44037;
(statearr_44045[(7)] = inst_44013__$1);

(statearr_44045[(8)] = inst_44012__$1);

(statearr_44045[(9)] = inst_44014);

return statearr_44045;
})();
if(cljs.core.truth_(inst_44015)){
var statearr_44047_45443 = state_44037__$1;
(statearr_44047_45443[(1)] = (8));

} else {
var statearr_44048_45444 = state_44037__$1;
(statearr_44048_45444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (1))){
var inst_44001 = cljs.core.vec(chs);
var inst_44002 = inst_44001;
var state_44037__$1 = (function (){var statearr_44050 = state_44037;
(statearr_44050[(10)] = inst_44002);

return statearr_44050;
})();
var statearr_44051_45445 = state_44037__$1;
(statearr_44051_45445[(2)] = null);

(statearr_44051_45445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (4))){
var inst_44002 = (state_44037[(10)]);
var state_44037__$1 = state_44037;
return cljs.core.async.ioc_alts_BANG_(state_44037__$1,(7),inst_44002);
} else {
if((state_val_44038 === (6))){
var inst_44033 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44057_45447 = state_44037__$1;
(statearr_44057_45447[(2)] = inst_44033);

(statearr_44057_45447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (3))){
var inst_44035 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44037__$1,inst_44035);
} else {
if((state_val_44038 === (2))){
var inst_44002 = (state_44037[(10)]);
var inst_44005 = cljs.core.count(inst_44002);
var inst_44006 = (inst_44005 > (0));
var state_44037__$1 = state_44037;
if(cljs.core.truth_(inst_44006)){
var statearr_44061_45452 = state_44037__$1;
(statearr_44061_45452[(1)] = (4));

} else {
var statearr_44063_45453 = state_44037__$1;
(statearr_44063_45453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (11))){
var inst_44002 = (state_44037[(10)]);
var inst_44026 = (state_44037[(2)]);
var tmp44058 = inst_44002;
var inst_44002__$1 = tmp44058;
var state_44037__$1 = (function (){var statearr_44065 = state_44037;
(statearr_44065[(10)] = inst_44002__$1);

(statearr_44065[(11)] = inst_44026);

return statearr_44065;
})();
var statearr_44067_45454 = state_44037__$1;
(statearr_44067_45454[(2)] = null);

(statearr_44067_45454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (9))){
var inst_44013 = (state_44037[(7)]);
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44037__$1,(11),out,inst_44013);
} else {
if((state_val_44038 === (5))){
var inst_44031 = cljs.core.async.close_BANG_(out);
var state_44037__$1 = state_44037;
var statearr_44071_45455 = state_44037__$1;
(statearr_44071_45455[(2)] = inst_44031);

(statearr_44071_45455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (10))){
var inst_44029 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44072_45457 = state_44037__$1;
(statearr_44072_45457[(2)] = inst_44029);

(statearr_44072_45457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (8))){
var inst_44002 = (state_44037[(10)]);
var inst_44013 = (state_44037[(7)]);
var inst_44012 = (state_44037[(8)]);
var inst_44014 = (state_44037[(9)]);
var inst_44018 = (function (){var cs = inst_44002;
var vec__44008 = inst_44012;
var v = inst_44013;
var c = inst_44014;
return (function (p1__43990_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43990_SHARP_);
});
})();
var inst_44019 = cljs.core.filterv(inst_44018,inst_44002);
var inst_44002__$1 = inst_44019;
var state_44037__$1 = (function (){var statearr_44077 = state_44037;
(statearr_44077[(10)] = inst_44002__$1);

return statearr_44077;
})();
var statearr_44078_45458 = state_44037__$1;
(statearr_44078_45458[(2)] = null);

(statearr_44078_45458[(1)] = (2));


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
var statearr_44080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44080[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_44080[(1)] = (1));

return statearr_44080;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_44037){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44037);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44083){var ex__33329__auto__ = e44083;
var statearr_44085_45465 = state_44037;
(statearr_44085_45465[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44037[(4)]))){
var statearr_44086_45466 = state_44037;
(statearr_44086_45466[(1)] = cljs.core.first((state_44037[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45467 = state_44037;
state_44037 = G__45467;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_44037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_44037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44088 = f__33397__auto__();
(statearr_44088[(6)] = c__33396__auto___45442);

return statearr_44088;
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
var G__44099 = arguments.length;
switch (G__44099) {
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
var c__33396__auto___45476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44132){
var state_val_44133 = (state_44132[(1)]);
if((state_val_44133 === (7))){
var inst_44112 = (state_44132[(7)]);
var inst_44112__$1 = (state_44132[(2)]);
var inst_44113 = (inst_44112__$1 == null);
var inst_44114 = cljs.core.not(inst_44113);
var state_44132__$1 = (function (){var statearr_44138 = state_44132;
(statearr_44138[(7)] = inst_44112__$1);

return statearr_44138;
})();
if(inst_44114){
var statearr_44139_45477 = state_44132__$1;
(statearr_44139_45477[(1)] = (8));

} else {
var statearr_44142_45478 = state_44132__$1;
(statearr_44142_45478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (1))){
var inst_44105 = (0);
var state_44132__$1 = (function (){var statearr_44144 = state_44132;
(statearr_44144[(8)] = inst_44105);

return statearr_44144;
})();
var statearr_44145_45479 = state_44132__$1;
(statearr_44145_45479[(2)] = null);

(statearr_44145_45479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (4))){
var state_44132__$1 = state_44132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44132__$1,(7),ch);
} else {
if((state_val_44133 === (6))){
var inst_44126 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44148_45486 = state_44132__$1;
(statearr_44148_45486[(2)] = inst_44126);

(statearr_44148_45486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (3))){
var inst_44128 = (state_44132[(2)]);
var inst_44129 = cljs.core.async.close_BANG_(out);
var state_44132__$1 = (function (){var statearr_44151 = state_44132;
(statearr_44151[(9)] = inst_44128);

return statearr_44151;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44132__$1,inst_44129);
} else {
if((state_val_44133 === (2))){
var inst_44105 = (state_44132[(8)]);
var inst_44107 = (inst_44105 < n);
var state_44132__$1 = state_44132;
if(cljs.core.truth_(inst_44107)){
var statearr_44153_45487 = state_44132__$1;
(statearr_44153_45487[(1)] = (4));

} else {
var statearr_44154_45488 = state_44132__$1;
(statearr_44154_45488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (11))){
var inst_44105 = (state_44132[(8)]);
var inst_44118 = (state_44132[(2)]);
var inst_44119 = (inst_44105 + (1));
var inst_44105__$1 = inst_44119;
var state_44132__$1 = (function (){var statearr_44158 = state_44132;
(statearr_44158[(10)] = inst_44118);

(statearr_44158[(8)] = inst_44105__$1);

return statearr_44158;
})();
var statearr_44159_45499 = state_44132__$1;
(statearr_44159_45499[(2)] = null);

(statearr_44159_45499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (9))){
var state_44132__$1 = state_44132;
var statearr_44161_45500 = state_44132__$1;
(statearr_44161_45500[(2)] = null);

(statearr_44161_45500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (5))){
var state_44132__$1 = state_44132;
var statearr_44164_45501 = state_44132__$1;
(statearr_44164_45501[(2)] = null);

(statearr_44164_45501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (10))){
var inst_44123 = (state_44132[(2)]);
var state_44132__$1 = state_44132;
var statearr_44166_45502 = state_44132__$1;
(statearr_44166_45502[(2)] = inst_44123);

(statearr_44166_45502[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44133 === (8))){
var inst_44112 = (state_44132[(7)]);
var state_44132__$1 = state_44132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44132__$1,(11),out,inst_44112);
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
var statearr_44171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44171[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_44171[(1)] = (1));

return statearr_44171;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_44132){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44132);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44172){var ex__33329__auto__ = e44172;
var statearr_44173_45507 = state_44132;
(statearr_44173_45507[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44132[(4)]))){
var statearr_44175_45509 = state_44132;
(statearr_44175_45509[(1)] = cljs.core.first((state_44132[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45510 = state_44132;
state_44132 = G__45510;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_44132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_44132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44179 = f__33397__auto__();
(statearr_44179[(6)] = c__33396__auto___45476);

return statearr_44179;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44187 = (function (f,ch,meta44188){
this.f = f;
this.ch = ch;
this.meta44188 = meta44188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44189,meta44188__$1){
var self__ = this;
var _44189__$1 = this;
return (new cljs.core.async.t_cljs$core$async44187(self__.f,self__.ch,meta44188__$1));
}));

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44189){
var self__ = this;
var _44189__$1 = this;
return self__.meta44188;
}));

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44201 = (function (f,ch,meta44188,_,fn1,meta44202){
this.f = f;
this.ch = ch;
this.meta44188 = meta44188;
this._ = _;
this.fn1 = fn1;
this.meta44202 = meta44202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44203,meta44202__$1){
var self__ = this;
var _44203__$1 = this;
return (new cljs.core.async.t_cljs$core$async44201(self__.f,self__.ch,self__.meta44188,self__._,self__.fn1,meta44202__$1));
}));

(cljs.core.async.t_cljs$core$async44201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44203){
var self__ = this;
var _44203__$1 = this;
return self__.meta44202;
}));

(cljs.core.async.t_cljs$core$async44201.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44183_SHARP_){
var G__44213 = (((p1__44183_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44183_SHARP_) : self__.f.call(null,p1__44183_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44213) : f1.call(null,G__44213));
});
}));

(cljs.core.async.t_cljs$core$async44201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44188","meta44188",653220897,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44187","cljs.core.async/t_cljs$core$async44187",-610409427,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44202","meta44202",-415873625,null)], null);
}));

(cljs.core.async.t_cljs$core$async44201.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44201");

(cljs.core.async.t_cljs$core$async44201.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44201");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44201.
 */
cljs.core.async.__GT_t_cljs$core$async44201 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44201(f__$1,ch__$1,meta44188__$1,___$2,fn1__$1,meta44202){
return (new cljs.core.async.t_cljs$core$async44201(f__$1,ch__$1,meta44188__$1,___$2,fn1__$1,meta44202));
});

}

return (new cljs.core.async.t_cljs$core$async44201(self__.f,self__.ch,self__.meta44188,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44226 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44226) : self__.f.call(null,G__44226));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44187.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44188","meta44188",653220897,null)], null);
}));

(cljs.core.async.t_cljs$core$async44187.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44187");

(cljs.core.async.t_cljs$core$async44187.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44187");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44187.
 */
cljs.core.async.__GT_t_cljs$core$async44187 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44187(f__$1,ch__$1,meta44188){
return (new cljs.core.async.t_cljs$core$async44187(f__$1,ch__$1,meta44188));
});

}

return (new cljs.core.async.t_cljs$core$async44187(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44236 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44236 = (function (f,ch,meta44237){
this.f = f;
this.ch = ch;
this.meta44237 = meta44237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44238,meta44237__$1){
var self__ = this;
var _44238__$1 = this;
return (new cljs.core.async.t_cljs$core$async44236(self__.f,self__.ch,meta44237__$1));
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44238){
var self__ = this;
var _44238__$1 = this;
return self__.meta44237;
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44236.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44236.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44237","meta44237",-1153094070,null)], null);
}));

(cljs.core.async.t_cljs$core$async44236.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44236");

(cljs.core.async.t_cljs$core$async44236.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44236");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44236.
 */
cljs.core.async.__GT_t_cljs$core$async44236 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44236(f__$1,ch__$1,meta44237){
return (new cljs.core.async.t_cljs$core$async44236(f__$1,ch__$1,meta44237));
});

}

return (new cljs.core.async.t_cljs$core$async44236(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44259 = (function (p,ch,meta44260){
this.p = p;
this.ch = ch;
this.meta44260 = meta44260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44261,meta44260__$1){
var self__ = this;
var _44261__$1 = this;
return (new cljs.core.async.t_cljs$core$async44259(self__.p,self__.ch,meta44260__$1));
}));

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44261){
var self__ = this;
var _44261__$1 = this;
return self__.meta44260;
}));

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44260","meta44260",78715620,null)], null);
}));

(cljs.core.async.t_cljs$core$async44259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44259");

(cljs.core.async.t_cljs$core$async44259.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async44259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44259.
 */
cljs.core.async.__GT_t_cljs$core$async44259 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44259(p__$1,ch__$1,meta44260){
return (new cljs.core.async.t_cljs$core$async44259(p__$1,ch__$1,meta44260));
});

}

return (new cljs.core.async.t_cljs$core$async44259(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44281 = arguments.length;
switch (G__44281) {
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
var c__33396__auto___45532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44314){
var state_val_44315 = (state_44314[(1)]);
if((state_val_44315 === (7))){
var inst_44310 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44320_45534 = state_44314__$1;
(statearr_44320_45534[(2)] = inst_44310);

(statearr_44320_45534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (1))){
var state_44314__$1 = state_44314;
var statearr_44321_45538 = state_44314__$1;
(statearr_44321_45538[(2)] = null);

(statearr_44321_45538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (4))){
var inst_44292 = (state_44314[(7)]);
var inst_44292__$1 = (state_44314[(2)]);
var inst_44296 = (inst_44292__$1 == null);
var state_44314__$1 = (function (){var statearr_44322 = state_44314;
(statearr_44322[(7)] = inst_44292__$1);

return statearr_44322;
})();
if(cljs.core.truth_(inst_44296)){
var statearr_44323_45539 = state_44314__$1;
(statearr_44323_45539[(1)] = (5));

} else {
var statearr_44324_45540 = state_44314__$1;
(statearr_44324_45540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (6))){
var inst_44292 = (state_44314[(7)]);
var inst_44300 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44292) : p.call(null,inst_44292));
var state_44314__$1 = state_44314;
if(cljs.core.truth_(inst_44300)){
var statearr_44325_45541 = state_44314__$1;
(statearr_44325_45541[(1)] = (8));

} else {
var statearr_44326_45542 = state_44314__$1;
(statearr_44326_45542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (3))){
var inst_44312 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44314__$1,inst_44312);
} else {
if((state_val_44315 === (2))){
var state_44314__$1 = state_44314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44314__$1,(4),ch);
} else {
if((state_val_44315 === (11))){
var inst_44304 = (state_44314[(2)]);
var state_44314__$1 = state_44314;
var statearr_44327_45546 = state_44314__$1;
(statearr_44327_45546[(2)] = inst_44304);

(statearr_44327_45546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (9))){
var state_44314__$1 = state_44314;
var statearr_44332_45551 = state_44314__$1;
(statearr_44332_45551[(2)] = null);

(statearr_44332_45551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (5))){
var inst_44298 = cljs.core.async.close_BANG_(out);
var state_44314__$1 = state_44314;
var statearr_44333_45552 = state_44314__$1;
(statearr_44333_45552[(2)] = inst_44298);

(statearr_44333_45552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (10))){
var inst_44307 = (state_44314[(2)]);
var state_44314__$1 = (function (){var statearr_44334 = state_44314;
(statearr_44334[(8)] = inst_44307);

return statearr_44334;
})();
var statearr_44335_45560 = state_44314__$1;
(statearr_44335_45560[(2)] = null);

(statearr_44335_45560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44315 === (8))){
var inst_44292 = (state_44314[(7)]);
var state_44314__$1 = state_44314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44314__$1,(11),out,inst_44292);
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
var statearr_44337 = [null,null,null,null,null,null,null,null,null];
(statearr_44337[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_44337[(1)] = (1));

return statearr_44337;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_44314){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44314);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44338){var ex__33329__auto__ = e44338;
var statearr_44339_45567 = state_44314;
(statearr_44339_45567[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44314[(4)]))){
var statearr_44340_45568 = state_44314;
(statearr_44340_45568[(1)] = cljs.core.first((state_44314[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45572 = state_44314;
state_44314 = G__45572;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_44314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_44314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44341 = f__33397__auto__();
(statearr_44341[(6)] = c__33396__auto___45532);

return statearr_44341;
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
var G__44343 = arguments.length;
switch (G__44343) {
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
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44407){
var state_val_44408 = (state_44407[(1)]);
if((state_val_44408 === (7))){
var inst_44403 = (state_44407[(2)]);
var state_44407__$1 = state_44407;
var statearr_44409_45577 = state_44407__$1;
(statearr_44409_45577[(2)] = inst_44403);

(statearr_44409_45577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (20))){
var inst_44373 = (state_44407[(7)]);
var inst_44384 = (state_44407[(2)]);
var inst_44385 = cljs.core.next(inst_44373);
var inst_44359 = inst_44385;
var inst_44360 = null;
var inst_44361 = (0);
var inst_44362 = (0);
var state_44407__$1 = (function (){var statearr_44410 = state_44407;
(statearr_44410[(8)] = inst_44362);

(statearr_44410[(9)] = inst_44359);

(statearr_44410[(10)] = inst_44384);

(statearr_44410[(11)] = inst_44361);

(statearr_44410[(12)] = inst_44360);

return statearr_44410;
})();
var statearr_44411_45584 = state_44407__$1;
(statearr_44411_45584[(2)] = null);

(statearr_44411_45584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (1))){
var state_44407__$1 = state_44407;
var statearr_44412_45585 = state_44407__$1;
(statearr_44412_45585[(2)] = null);

(statearr_44412_45585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (4))){
var inst_44348 = (state_44407[(13)]);
var inst_44348__$1 = (state_44407[(2)]);
var inst_44349 = (inst_44348__$1 == null);
var state_44407__$1 = (function (){var statearr_44413 = state_44407;
(statearr_44413[(13)] = inst_44348__$1);

return statearr_44413;
})();
if(cljs.core.truth_(inst_44349)){
var statearr_44414_45586 = state_44407__$1;
(statearr_44414_45586[(1)] = (5));

} else {
var statearr_44415_45587 = state_44407__$1;
(statearr_44415_45587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (15))){
var state_44407__$1 = state_44407;
var statearr_44419_45588 = state_44407__$1;
(statearr_44419_45588[(2)] = null);

(statearr_44419_45588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (21))){
var state_44407__$1 = state_44407;
var statearr_44420_45589 = state_44407__$1;
(statearr_44420_45589[(2)] = null);

(statearr_44420_45589[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (13))){
var inst_44362 = (state_44407[(8)]);
var inst_44359 = (state_44407[(9)]);
var inst_44361 = (state_44407[(11)]);
var inst_44360 = (state_44407[(12)]);
var inst_44369 = (state_44407[(2)]);
var inst_44370 = (inst_44362 + (1));
var tmp44416 = inst_44359;
var tmp44417 = inst_44361;
var tmp44418 = inst_44360;
var inst_44359__$1 = tmp44416;
var inst_44360__$1 = tmp44418;
var inst_44361__$1 = tmp44417;
var inst_44362__$1 = inst_44370;
var state_44407__$1 = (function (){var statearr_44421 = state_44407;
(statearr_44421[(8)] = inst_44362__$1);

(statearr_44421[(9)] = inst_44359__$1);

(statearr_44421[(11)] = inst_44361__$1);

(statearr_44421[(12)] = inst_44360__$1);

(statearr_44421[(14)] = inst_44369);

return statearr_44421;
})();
var statearr_44422_45591 = state_44407__$1;
(statearr_44422_45591[(2)] = null);

(statearr_44422_45591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (22))){
var state_44407__$1 = state_44407;
var statearr_44423_45592 = state_44407__$1;
(statearr_44423_45592[(2)] = null);

(statearr_44423_45592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (6))){
var inst_44348 = (state_44407[(13)]);
var inst_44357 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44348) : f.call(null,inst_44348));
var inst_44358 = cljs.core.seq(inst_44357);
var inst_44359 = inst_44358;
var inst_44360 = null;
var inst_44361 = (0);
var inst_44362 = (0);
var state_44407__$1 = (function (){var statearr_44424 = state_44407;
(statearr_44424[(8)] = inst_44362);

(statearr_44424[(9)] = inst_44359);

(statearr_44424[(11)] = inst_44361);

(statearr_44424[(12)] = inst_44360);

return statearr_44424;
})();
var statearr_44425_45596 = state_44407__$1;
(statearr_44425_45596[(2)] = null);

(statearr_44425_45596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (17))){
var inst_44373 = (state_44407[(7)]);
var inst_44377 = cljs.core.chunk_first(inst_44373);
var inst_44378 = cljs.core.chunk_rest(inst_44373);
var inst_44379 = cljs.core.count(inst_44377);
var inst_44359 = inst_44378;
var inst_44360 = inst_44377;
var inst_44361 = inst_44379;
var inst_44362 = (0);
var state_44407__$1 = (function (){var statearr_44426 = state_44407;
(statearr_44426[(8)] = inst_44362);

(statearr_44426[(9)] = inst_44359);

(statearr_44426[(11)] = inst_44361);

(statearr_44426[(12)] = inst_44360);

return statearr_44426;
})();
var statearr_44428_45603 = state_44407__$1;
(statearr_44428_45603[(2)] = null);

(statearr_44428_45603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (3))){
var inst_44405 = (state_44407[(2)]);
var state_44407__$1 = state_44407;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44407__$1,inst_44405);
} else {
if((state_val_44408 === (12))){
var inst_44393 = (state_44407[(2)]);
var state_44407__$1 = state_44407;
var statearr_44430_45604 = state_44407__$1;
(statearr_44430_45604[(2)] = inst_44393);

(statearr_44430_45604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (2))){
var state_44407__$1 = state_44407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44407__$1,(4),in$);
} else {
if((state_val_44408 === (23))){
var inst_44401 = (state_44407[(2)]);
var state_44407__$1 = state_44407;
var statearr_44431_45611 = state_44407__$1;
(statearr_44431_45611[(2)] = inst_44401);

(statearr_44431_45611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (19))){
var inst_44388 = (state_44407[(2)]);
var state_44407__$1 = state_44407;
var statearr_44432_45612 = state_44407__$1;
(statearr_44432_45612[(2)] = inst_44388);

(statearr_44432_45612[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (11))){
var inst_44359 = (state_44407[(9)]);
var inst_44373 = (state_44407[(7)]);
var inst_44373__$1 = cljs.core.seq(inst_44359);
var state_44407__$1 = (function (){var statearr_44433 = state_44407;
(statearr_44433[(7)] = inst_44373__$1);

return statearr_44433;
})();
if(inst_44373__$1){
var statearr_44434_45613 = state_44407__$1;
(statearr_44434_45613[(1)] = (14));

} else {
var statearr_44435_45614 = state_44407__$1;
(statearr_44435_45614[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (9))){
var inst_44395 = (state_44407[(2)]);
var inst_44396 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44407__$1 = (function (){var statearr_44436 = state_44407;
(statearr_44436[(15)] = inst_44395);

return statearr_44436;
})();
if(cljs.core.truth_(inst_44396)){
var statearr_44438_45615 = state_44407__$1;
(statearr_44438_45615[(1)] = (21));

} else {
var statearr_44439_45616 = state_44407__$1;
(statearr_44439_45616[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (5))){
var inst_44351 = cljs.core.async.close_BANG_(out);
var state_44407__$1 = state_44407;
var statearr_44441_45617 = state_44407__$1;
(statearr_44441_45617[(2)] = inst_44351);

(statearr_44441_45617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (14))){
var inst_44373 = (state_44407[(7)]);
var inst_44375 = cljs.core.chunked_seq_QMARK_(inst_44373);
var state_44407__$1 = state_44407;
if(inst_44375){
var statearr_44442_45618 = state_44407__$1;
(statearr_44442_45618[(1)] = (17));

} else {
var statearr_44443_45619 = state_44407__$1;
(statearr_44443_45619[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (16))){
var inst_44391 = (state_44407[(2)]);
var state_44407__$1 = state_44407;
var statearr_44444_45620 = state_44407__$1;
(statearr_44444_45620[(2)] = inst_44391);

(statearr_44444_45620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44408 === (10))){
var inst_44362 = (state_44407[(8)]);
var inst_44360 = (state_44407[(12)]);
var inst_44367 = cljs.core._nth(inst_44360,inst_44362);
var state_44407__$1 = state_44407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44407__$1,(13),out,inst_44367);
} else {
if((state_val_44408 === (18))){
var inst_44373 = (state_44407[(7)]);
var inst_44382 = cljs.core.first(inst_44373);
var state_44407__$1 = state_44407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44407__$1,(20),out,inst_44382);
} else {
if((state_val_44408 === (8))){
var inst_44362 = (state_44407[(8)]);
var inst_44361 = (state_44407[(11)]);
var inst_44364 = (inst_44362 < inst_44361);
var inst_44365 = inst_44364;
var state_44407__$1 = state_44407;
if(cljs.core.truth_(inst_44365)){
var statearr_44445_45621 = state_44407__$1;
(statearr_44445_45621[(1)] = (10));

} else {
var statearr_44447_45622 = state_44407__$1;
(statearr_44447_45622[(1)] = (11));

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
var statearr_44449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44449[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__);

(statearr_44449[(1)] = (1));

return statearr_44449;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____1 = (function (state_44407){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44407);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44450){var ex__33329__auto__ = e44450;
var statearr_44451_45623 = state_44407;
(statearr_44451_45623[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44407[(4)]))){
var statearr_44452_45624 = state_44407;
(statearr_44452_45624[(1)] = cljs.core.first((state_44407[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45625 = state_44407;
state_44407 = G__45625;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__ = function(state_44407){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____1.call(this,state_44407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33326__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44453 = f__33397__auto__();
(statearr_44453[(6)] = c__33396__auto__);

return statearr_44453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));

return c__33396__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44455 = arguments.length;
switch (G__44455) {
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
var G__44457 = arguments.length;
switch (G__44457) {
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
var G__44461 = arguments.length;
switch (G__44461) {
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
var c__33396__auto___45635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44490){
var state_val_44491 = (state_44490[(1)]);
if((state_val_44491 === (7))){
var inst_44484 = (state_44490[(2)]);
var state_44490__$1 = state_44490;
var statearr_44493_45636 = state_44490__$1;
(statearr_44493_45636[(2)] = inst_44484);

(statearr_44493_45636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (1))){
var inst_44466 = null;
var state_44490__$1 = (function (){var statearr_44494 = state_44490;
(statearr_44494[(7)] = inst_44466);

return statearr_44494;
})();
var statearr_44495_45637 = state_44490__$1;
(statearr_44495_45637[(2)] = null);

(statearr_44495_45637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (4))){
var inst_44469 = (state_44490[(8)]);
var inst_44469__$1 = (state_44490[(2)]);
var inst_44470 = (inst_44469__$1 == null);
var inst_44471 = cljs.core.not(inst_44470);
var state_44490__$1 = (function (){var statearr_44497 = state_44490;
(statearr_44497[(8)] = inst_44469__$1);

return statearr_44497;
})();
if(inst_44471){
var statearr_44498_45638 = state_44490__$1;
(statearr_44498_45638[(1)] = (5));

} else {
var statearr_44501_45639 = state_44490__$1;
(statearr_44501_45639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (6))){
var state_44490__$1 = state_44490;
var statearr_44502_45640 = state_44490__$1;
(statearr_44502_45640[(2)] = null);

(statearr_44502_45640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (3))){
var inst_44486 = (state_44490[(2)]);
var inst_44487 = cljs.core.async.close_BANG_(out);
var state_44490__$1 = (function (){var statearr_44503 = state_44490;
(statearr_44503[(9)] = inst_44486);

return statearr_44503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44490__$1,inst_44487);
} else {
if((state_val_44491 === (2))){
var state_44490__$1 = state_44490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44490__$1,(4),ch);
} else {
if((state_val_44491 === (11))){
var inst_44469 = (state_44490[(8)]);
var inst_44478 = (state_44490[(2)]);
var inst_44466 = inst_44469;
var state_44490__$1 = (function (){var statearr_44507 = state_44490;
(statearr_44507[(7)] = inst_44466);

(statearr_44507[(10)] = inst_44478);

return statearr_44507;
})();
var statearr_44508_45642 = state_44490__$1;
(statearr_44508_45642[(2)] = null);

(statearr_44508_45642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (9))){
var inst_44469 = (state_44490[(8)]);
var state_44490__$1 = state_44490;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44490__$1,(11),out,inst_44469);
} else {
if((state_val_44491 === (5))){
var inst_44466 = (state_44490[(7)]);
var inst_44469 = (state_44490[(8)]);
var inst_44473 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44469,inst_44466);
var state_44490__$1 = state_44490;
if(inst_44473){
var statearr_44510_45643 = state_44490__$1;
(statearr_44510_45643[(1)] = (8));

} else {
var statearr_44511_45644 = state_44490__$1;
(statearr_44511_45644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (10))){
var inst_44481 = (state_44490[(2)]);
var state_44490__$1 = state_44490;
var statearr_44512_45651 = state_44490__$1;
(statearr_44512_45651[(2)] = inst_44481);

(statearr_44512_45651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44491 === (8))){
var inst_44466 = (state_44490[(7)]);
var tmp44509 = inst_44466;
var inst_44466__$1 = tmp44509;
var state_44490__$1 = (function (){var statearr_44513 = state_44490;
(statearr_44513[(7)] = inst_44466__$1);

return statearr_44513;
})();
var statearr_44514_45652 = state_44490__$1;
(statearr_44514_45652[(2)] = null);

(statearr_44514_45652[(1)] = (2));


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
var statearr_44528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44528[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_44528[(1)] = (1));

return statearr_44528;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_44490){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44490);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44529){var ex__33329__auto__ = e44529;
var statearr_44536_45656 = state_44490;
(statearr_44536_45656[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44490[(4)]))){
var statearr_44537_45657 = state_44490;
(statearr_44537_45657[(1)] = cljs.core.first((state_44490[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45658 = state_44490;
state_44490 = G__45658;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_44490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_44490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44538 = f__33397__auto__();
(statearr_44538[(6)] = c__33396__auto___45635);

return statearr_44538;
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
var G__44550 = arguments.length;
switch (G__44550) {
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
var c__33396__auto___45663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44592){
var state_val_44593 = (state_44592[(1)]);
if((state_val_44593 === (7))){
var inst_44587 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
var statearr_44597_45664 = state_44592__$1;
(statearr_44597_45664[(2)] = inst_44587);

(statearr_44597_45664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (1))){
var inst_44554 = (new Array(n));
var inst_44555 = inst_44554;
var inst_44556 = (0);
var state_44592__$1 = (function (){var statearr_44598 = state_44592;
(statearr_44598[(7)] = inst_44555);

(statearr_44598[(8)] = inst_44556);

return statearr_44598;
})();
var statearr_44599_45671 = state_44592__$1;
(statearr_44599_45671[(2)] = null);

(statearr_44599_45671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (4))){
var inst_44559 = (state_44592[(9)]);
var inst_44559__$1 = (state_44592[(2)]);
var inst_44560 = (inst_44559__$1 == null);
var inst_44561 = cljs.core.not(inst_44560);
var state_44592__$1 = (function (){var statearr_44600 = state_44592;
(statearr_44600[(9)] = inst_44559__$1);

return statearr_44600;
})();
if(inst_44561){
var statearr_44601_45672 = state_44592__$1;
(statearr_44601_45672[(1)] = (5));

} else {
var statearr_44602_45673 = state_44592__$1;
(statearr_44602_45673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (15))){
var inst_44581 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
var statearr_44603_45674 = state_44592__$1;
(statearr_44603_45674[(2)] = inst_44581);

(statearr_44603_45674[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (13))){
var state_44592__$1 = state_44592;
var statearr_44604_45675 = state_44592__$1;
(statearr_44604_45675[(2)] = null);

(statearr_44604_45675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (6))){
var inst_44556 = (state_44592[(8)]);
var inst_44577 = (inst_44556 > (0));
var state_44592__$1 = state_44592;
if(cljs.core.truth_(inst_44577)){
var statearr_44605_45676 = state_44592__$1;
(statearr_44605_45676[(1)] = (12));

} else {
var statearr_44606_45677 = state_44592__$1;
(statearr_44606_45677[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (3))){
var inst_44589 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44592__$1,inst_44589);
} else {
if((state_val_44593 === (12))){
var inst_44555 = (state_44592[(7)]);
var inst_44579 = cljs.core.vec(inst_44555);
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44592__$1,(15),out,inst_44579);
} else {
if((state_val_44593 === (2))){
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44592__$1,(4),ch);
} else {
if((state_val_44593 === (11))){
var inst_44571 = (state_44592[(2)]);
var inst_44572 = (new Array(n));
var inst_44555 = inst_44572;
var inst_44556 = (0);
var state_44592__$1 = (function (){var statearr_44611 = state_44592;
(statearr_44611[(7)] = inst_44555);

(statearr_44611[(10)] = inst_44571);

(statearr_44611[(8)] = inst_44556);

return statearr_44611;
})();
var statearr_44614_45678 = state_44592__$1;
(statearr_44614_45678[(2)] = null);

(statearr_44614_45678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (9))){
var inst_44555 = (state_44592[(7)]);
var inst_44569 = cljs.core.vec(inst_44555);
var state_44592__$1 = state_44592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44592__$1,(11),out,inst_44569);
} else {
if((state_val_44593 === (5))){
var inst_44555 = (state_44592[(7)]);
var inst_44559 = (state_44592[(9)]);
var inst_44564 = (state_44592[(11)]);
var inst_44556 = (state_44592[(8)]);
var inst_44563 = (inst_44555[inst_44556] = inst_44559);
var inst_44564__$1 = (inst_44556 + (1));
var inst_44565 = (inst_44564__$1 < n);
var state_44592__$1 = (function (){var statearr_44616 = state_44592;
(statearr_44616[(12)] = inst_44563);

(statearr_44616[(11)] = inst_44564__$1);

return statearr_44616;
})();
if(cljs.core.truth_(inst_44565)){
var statearr_44617_45679 = state_44592__$1;
(statearr_44617_45679[(1)] = (8));

} else {
var statearr_44618_45680 = state_44592__$1;
(statearr_44618_45680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (14))){
var inst_44584 = (state_44592[(2)]);
var inst_44585 = cljs.core.async.close_BANG_(out);
var state_44592__$1 = (function (){var statearr_44621 = state_44592;
(statearr_44621[(13)] = inst_44584);

return statearr_44621;
})();
var statearr_44622_45682 = state_44592__$1;
(statearr_44622_45682[(2)] = inst_44585);

(statearr_44622_45682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (10))){
var inst_44575 = (state_44592[(2)]);
var state_44592__$1 = state_44592;
var statearr_44623_45683 = state_44592__$1;
(statearr_44623_45683[(2)] = inst_44575);

(statearr_44623_45683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44593 === (8))){
var inst_44555 = (state_44592[(7)]);
var inst_44564 = (state_44592[(11)]);
var tmp44620 = inst_44555;
var inst_44555__$1 = tmp44620;
var inst_44556 = inst_44564;
var state_44592__$1 = (function (){var statearr_44624 = state_44592;
(statearr_44624[(7)] = inst_44555__$1);

(statearr_44624[(8)] = inst_44556);

return statearr_44624;
})();
var statearr_44625_45684 = state_44592__$1;
(statearr_44625_45684[(2)] = null);

(statearr_44625_45684[(1)] = (2));


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
var statearr_44626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44626[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_44626[(1)] = (1));

return statearr_44626;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_44592){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44592);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44627){var ex__33329__auto__ = e44627;
var statearr_44628_45685 = state_44592;
(statearr_44628_45685[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44592[(4)]))){
var statearr_44629_45686 = state_44592;
(statearr_44629_45686[(1)] = cljs.core.first((state_44592[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45687 = state_44592;
state_44592 = G__45687;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_44592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_44592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44630 = f__33397__auto__();
(statearr_44630[(6)] = c__33396__auto___45663);

return statearr_44630;
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
var G__44634 = arguments.length;
switch (G__44634) {
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
var c__33396__auto___45695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33397__auto__ = (function (){var switch__33325__auto__ = (function (state_44684){
var state_val_44685 = (state_44684[(1)]);
if((state_val_44685 === (7))){
var inst_44680 = (state_44684[(2)]);
var state_44684__$1 = state_44684;
var statearr_44686_45696 = state_44684__$1;
(statearr_44686_45696[(2)] = inst_44680);

(statearr_44686_45696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (1))){
var inst_44636 = [];
var inst_44637 = inst_44636;
var inst_44638 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44684__$1 = (function (){var statearr_44687 = state_44684;
(statearr_44687[(7)] = inst_44637);

(statearr_44687[(8)] = inst_44638);

return statearr_44687;
})();
var statearr_44688_45701 = state_44684__$1;
(statearr_44688_45701[(2)] = null);

(statearr_44688_45701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (4))){
var inst_44642 = (state_44684[(9)]);
var inst_44642__$1 = (state_44684[(2)]);
var inst_44643 = (inst_44642__$1 == null);
var inst_44646 = cljs.core.not(inst_44643);
var state_44684__$1 = (function (){var statearr_44689 = state_44684;
(statearr_44689[(9)] = inst_44642__$1);

return statearr_44689;
})();
if(inst_44646){
var statearr_44690_45702 = state_44684__$1;
(statearr_44690_45702[(1)] = (5));

} else {
var statearr_44691_45703 = state_44684__$1;
(statearr_44691_45703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (15))){
var inst_44637 = (state_44684[(7)]);
var inst_44672 = cljs.core.vec(inst_44637);
var state_44684__$1 = state_44684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44684__$1,(18),out,inst_44672);
} else {
if((state_val_44685 === (13))){
var inst_44667 = (state_44684[(2)]);
var state_44684__$1 = state_44684;
var statearr_44692_45704 = state_44684__$1;
(statearr_44692_45704[(2)] = inst_44667);

(statearr_44692_45704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (6))){
var inst_44637 = (state_44684[(7)]);
var inst_44669 = inst_44637.length;
var inst_44670 = (inst_44669 > (0));
var state_44684__$1 = state_44684;
if(cljs.core.truth_(inst_44670)){
var statearr_44693_45705 = state_44684__$1;
(statearr_44693_45705[(1)] = (15));

} else {
var statearr_44694_45707 = state_44684__$1;
(statearr_44694_45707[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (17))){
var inst_44677 = (state_44684[(2)]);
var inst_44678 = cljs.core.async.close_BANG_(out);
var state_44684__$1 = (function (){var statearr_44695 = state_44684;
(statearr_44695[(10)] = inst_44677);

return statearr_44695;
})();
var statearr_44696_45709 = state_44684__$1;
(statearr_44696_45709[(2)] = inst_44678);

(statearr_44696_45709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (3))){
var inst_44682 = (state_44684[(2)]);
var state_44684__$1 = state_44684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44684__$1,inst_44682);
} else {
if((state_val_44685 === (12))){
var inst_44637 = (state_44684[(7)]);
var inst_44660 = cljs.core.vec(inst_44637);
var state_44684__$1 = state_44684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44684__$1,(14),out,inst_44660);
} else {
if((state_val_44685 === (2))){
var state_44684__$1 = state_44684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44684__$1,(4),ch);
} else {
if((state_val_44685 === (11))){
var inst_44642 = (state_44684[(9)]);
var inst_44649 = (state_44684[(11)]);
var inst_44637 = (state_44684[(7)]);
var inst_44657 = inst_44637.push(inst_44642);
var tmp44697 = inst_44637;
var inst_44637__$1 = tmp44697;
var inst_44638 = inst_44649;
var state_44684__$1 = (function (){var statearr_44698 = state_44684;
(statearr_44698[(12)] = inst_44657);

(statearr_44698[(7)] = inst_44637__$1);

(statearr_44698[(8)] = inst_44638);

return statearr_44698;
})();
var statearr_44701_45710 = state_44684__$1;
(statearr_44701_45710[(2)] = null);

(statearr_44701_45710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (9))){
var inst_44638 = (state_44684[(8)]);
var inst_44653 = cljs.core.keyword_identical_QMARK_(inst_44638,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_44684__$1 = state_44684;
var statearr_44704_45711 = state_44684__$1;
(statearr_44704_45711[(2)] = inst_44653);

(statearr_44704_45711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (5))){
var inst_44642 = (state_44684[(9)]);
var inst_44649 = (state_44684[(11)]);
var inst_44650 = (state_44684[(13)]);
var inst_44638 = (state_44684[(8)]);
var inst_44649__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44642) : f.call(null,inst_44642));
var inst_44650__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44649__$1,inst_44638);
var state_44684__$1 = (function (){var statearr_44706 = state_44684;
(statearr_44706[(11)] = inst_44649__$1);

(statearr_44706[(13)] = inst_44650__$1);

return statearr_44706;
})();
if(inst_44650__$1){
var statearr_44707_45714 = state_44684__$1;
(statearr_44707_45714[(1)] = (8));

} else {
var statearr_44709_45715 = state_44684__$1;
(statearr_44709_45715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (14))){
var inst_44642 = (state_44684[(9)]);
var inst_44649 = (state_44684[(11)]);
var inst_44662 = (state_44684[(2)]);
var inst_44663 = [];
var inst_44664 = inst_44663.push(inst_44642);
var inst_44637 = inst_44663;
var inst_44638 = inst_44649;
var state_44684__$1 = (function (){var statearr_44711 = state_44684;
(statearr_44711[(14)] = inst_44662);

(statearr_44711[(15)] = inst_44664);

(statearr_44711[(7)] = inst_44637);

(statearr_44711[(8)] = inst_44638);

return statearr_44711;
})();
var statearr_44712_45716 = state_44684__$1;
(statearr_44712_45716[(2)] = null);

(statearr_44712_45716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (16))){
var state_44684__$1 = state_44684;
var statearr_44713_45717 = state_44684__$1;
(statearr_44713_45717[(2)] = null);

(statearr_44713_45717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (10))){
var inst_44655 = (state_44684[(2)]);
var state_44684__$1 = state_44684;
if(cljs.core.truth_(inst_44655)){
var statearr_44714_45718 = state_44684__$1;
(statearr_44714_45718[(1)] = (11));

} else {
var statearr_44715_45719 = state_44684__$1;
(statearr_44715_45719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (18))){
var inst_44674 = (state_44684[(2)]);
var state_44684__$1 = state_44684;
var statearr_44716_45724 = state_44684__$1;
(statearr_44716_45724[(2)] = inst_44674);

(statearr_44716_45724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44685 === (8))){
var inst_44650 = (state_44684[(13)]);
var state_44684__$1 = state_44684;
var statearr_44718_45727 = state_44684__$1;
(statearr_44718_45727[(2)] = inst_44650);

(statearr_44718_45727[(1)] = (10));


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
var statearr_44723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44723[(0)] = cljs$core$async$state_machine__33326__auto__);

(statearr_44723[(1)] = (1));

return statearr_44723;
});
var cljs$core$async$state_machine__33326__auto____1 = (function (state_44684){
while(true){
var ret_value__33327__auto__ = (function (){try{while(true){
var result__33328__auto__ = switch__33325__auto__(state_44684);
if(cljs.core.keyword_identical_QMARK_(result__33328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33328__auto__;
}
break;
}
}catch (e44724){var ex__33329__auto__ = e44724;
var statearr_44725_45728 = state_44684;
(statearr_44725_45728[(2)] = ex__33329__auto__);


if(cljs.core.seq((state_44684[(4)]))){
var statearr_44726_45729 = state_44684;
(statearr_44726_45729[(1)] = cljs.core.first((state_44684[(4)])));

} else {
throw ex__33329__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33327__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45730 = state_44684;
state_44684 = G__45730;
continue;
} else {
return ret_value__33327__auto__;
}
break;
}
});
cljs$core$async$state_machine__33326__auto__ = function(state_44684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33326__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33326__auto____1.call(this,state_44684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33326__auto____0;
cljs$core$async$state_machine__33326__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33326__auto____1;
return cljs$core$async$state_machine__33326__auto__;
})()
})();
var state__33398__auto__ = (function (){var statearr_44727 = f__33397__auto__();
(statearr_44727[(6)] = c__33396__auto___45695);

return statearr_44727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33398__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
