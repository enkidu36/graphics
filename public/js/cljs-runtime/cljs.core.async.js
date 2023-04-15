goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13818 = (function (f,blockable,meta13819){
this.f = f;
this.blockable = blockable;
this.meta13819 = meta13819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13820,meta13819__$1){
var self__ = this;
var _13820__$1 = this;
return (new cljs.core.async.t_cljs$core$async13818(self__.f,self__.blockable,meta13819__$1));
}));

(cljs.core.async.t_cljs$core$async13818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13820){
var self__ = this;
var _13820__$1 = this;
return self__.meta13819;
}));

(cljs.core.async.t_cljs$core$async13818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13819","meta13819",-1257272767,null)], null);
}));

(cljs.core.async.t_cljs$core$async13818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13818");

(cljs.core.async.t_cljs$core$async13818.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13818.
 */
cljs.core.async.__GT_t_cljs$core$async13818 = (function cljs$core$async$__GT_t_cljs$core$async13818(f,blockable,meta13819){
return (new cljs.core.async.t_cljs$core$async13818(f,blockable,meta13819));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13817 = arguments.length;
switch (G__13817) {
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
return (new cljs.core.async.t_cljs$core$async13818(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__13850 = arguments.length;
switch (G__13850) {
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
var G__13854 = arguments.length;
switch (G__13854) {
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
var G__13856 = arguments.length;
switch (G__13856) {
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
var val_15920 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15920) : fn1.call(null,val_15920));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15920) : fn1.call(null,val_15920));
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
var G__13861 = arguments.length;
switch (G__13861) {
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
var n__5636__auto___15922 = n;
var x_15923 = (0);
while(true){
if((x_15923 < n__5636__auto___15922)){
(a[x_15923] = x_15923);

var G__15924 = (x_15923 + (1));
x_15923 = G__15924;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13870 = (function (flag,meta13871){
this.flag = flag;
this.meta13871 = meta13871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13872,meta13871__$1){
var self__ = this;
var _13872__$1 = this;
return (new cljs.core.async.t_cljs$core$async13870(self__.flag,meta13871__$1));
}));

(cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13872){
var self__ = this;
var _13872__$1 = this;
return self__.meta13871;
}));

(cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13871","meta13871",737408890,null)], null);
}));

(cljs.core.async.t_cljs$core$async13870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13870");

(cljs.core.async.t_cljs$core$async13870.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13870.
 */
cljs.core.async.__GT_t_cljs$core$async13870 = (function cljs$core$async$__GT_t_cljs$core$async13870(flag,meta13871){
return (new cljs.core.async.t_cljs$core$async13870(flag,meta13871));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13870(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13875 = (function (flag,cb,meta13876){
this.flag = flag;
this.cb = cb;
this.meta13876 = meta13876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13877,meta13876__$1){
var self__ = this;
var _13877__$1 = this;
return (new cljs.core.async.t_cljs$core$async13875(self__.flag,self__.cb,meta13876__$1));
}));

(cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13877){
var self__ = this;
var _13877__$1 = this;
return self__.meta13876;
}));

(cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13876","meta13876",-92472061,null)], null);
}));

(cljs.core.async.t_cljs$core$async13875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13875");

(cljs.core.async.t_cljs$core$async13875.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13875.
 */
cljs.core.async.__GT_t_cljs$core$async13875 = (function cljs$core$async$__GT_t_cljs$core$async13875(flag,cb,meta13876){
return (new cljs.core.async.t_cljs$core$async13875(flag,cb,meta13876));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13875(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13879_SHARP_){
var G__13897 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13879_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13897) : fret.call(null,G__13897));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13893_SHARP_){
var G__13898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13893_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13898) : fret.call(null,G__13898));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15925 = (i + (1));
i = G__15925;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___15937 = arguments.length;
var i__5770__auto___15938 = (0);
while(true){
if((i__5770__auto___15938 < len__5769__auto___15937)){
args__5775__auto__.push((arguments[i__5770__auto___15938]));

var G__15939 = (i__5770__auto___15938 + (1));
i__5770__auto___15938 = G__15939;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13902){
var map__13903 = p__13902;
var map__13903__$1 = cljs.core.__destructure_map(map__13903);
var opts = map__13903__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13899){
var G__13900 = cljs.core.first(seq13899);
var seq13899__$1 = cljs.core.next(seq13899);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13900,seq13899__$1);
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
var G__13911 = arguments.length;
switch (G__13911) {
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
var c__13733__auto___15941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_13950){
var state_val_13951 = (state_13950[(1)]);
if((state_val_13951 === (7))){
var inst_13946 = (state_13950[(2)]);
var state_13950__$1 = state_13950;
var statearr_13952_15942 = state_13950__$1;
(statearr_13952_15942[(2)] = inst_13946);

(statearr_13952_15942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (1))){
var state_13950__$1 = state_13950;
var statearr_13953_15943 = state_13950__$1;
(statearr_13953_15943[(2)] = null);

(statearr_13953_15943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (4))){
var inst_13929 = (state_13950[(7)]);
var inst_13929__$1 = (state_13950[(2)]);
var inst_13930 = (inst_13929__$1 == null);
var state_13950__$1 = (function (){var statearr_13954 = state_13950;
(statearr_13954[(7)] = inst_13929__$1);

return statearr_13954;
})();
if(cljs.core.truth_(inst_13930)){
var statearr_13955_15944 = state_13950__$1;
(statearr_13955_15944[(1)] = (5));

} else {
var statearr_13956_15945 = state_13950__$1;
(statearr_13956_15945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (13))){
var state_13950__$1 = state_13950;
var statearr_13957_15946 = state_13950__$1;
(statearr_13957_15946[(2)] = null);

(statearr_13957_15946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (6))){
var inst_13929 = (state_13950[(7)]);
var state_13950__$1 = state_13950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13950__$1,(11),to,inst_13929);
} else {
if((state_val_13951 === (3))){
var inst_13948 = (state_13950[(2)]);
var state_13950__$1 = state_13950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13950__$1,inst_13948);
} else {
if((state_val_13951 === (12))){
var state_13950__$1 = state_13950;
var statearr_13958_15947 = state_13950__$1;
(statearr_13958_15947[(2)] = null);

(statearr_13958_15947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (2))){
var state_13950__$1 = state_13950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13950__$1,(4),from);
} else {
if((state_val_13951 === (11))){
var inst_13939 = (state_13950[(2)]);
var state_13950__$1 = state_13950;
if(cljs.core.truth_(inst_13939)){
var statearr_13959_15948 = state_13950__$1;
(statearr_13959_15948[(1)] = (12));

} else {
var statearr_13960_15949 = state_13950__$1;
(statearr_13960_15949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (9))){
var state_13950__$1 = state_13950;
var statearr_13961_15950 = state_13950__$1;
(statearr_13961_15950[(2)] = null);

(statearr_13961_15950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (5))){
var state_13950__$1 = state_13950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13964_15951 = state_13950__$1;
(statearr_13964_15951[(1)] = (8));

} else {
var statearr_13965_15952 = state_13950__$1;
(statearr_13965_15952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (14))){
var inst_13944 = (state_13950[(2)]);
var state_13950__$1 = state_13950;
var statearr_13967_15953 = state_13950__$1;
(statearr_13967_15953[(2)] = inst_13944);

(statearr_13967_15953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (10))){
var inst_13936 = (state_13950[(2)]);
var state_13950__$1 = state_13950;
var statearr_13968_15954 = state_13950__$1;
(statearr_13968_15954[(2)] = inst_13936);

(statearr_13968_15954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13951 === (8))){
var inst_13933 = cljs.core.async.close_BANG_(to);
var state_13950__$1 = state_13950;
var statearr_13969_15955 = state_13950__$1;
(statearr_13969_15955[(2)] = inst_13933);

(statearr_13969_15955[(1)] = (10));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_13972 = [null,null,null,null,null,null,null,null];
(statearr_13972[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_13972[(1)] = (1));

return statearr_13972;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_13950){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_13950);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e13978){var ex__13619__auto__ = e13978;
var statearr_13979_15956 = state_13950;
(statearr_13979_15956[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_13950[(4)]))){
var statearr_13981_15958 = state_13950;
(statearr_13981_15958[(1)] = cljs.core.first((state_13950[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15960 = state_13950;
state_13950 = G__15960;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_13950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_13950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_13985 = f__13734__auto__();
(statearr_13985[(6)] = c__13733__auto___15941);

return statearr_13985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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
var process__$1 = (function (p__14002){
var vec__14004 = p__14002;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14004,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14004,(1),null);
var job = vec__14004;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13733__auto___15961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14016){
var state_val_14017 = (state_14016[(1)]);
if((state_val_14017 === (1))){
var state_14016__$1 = state_14016;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14016__$1,(2),res,v);
} else {
if((state_val_14017 === (2))){
var inst_14013 = (state_14016[(2)]);
var inst_14014 = cljs.core.async.close_BANG_(res);
var state_14016__$1 = (function (){var statearr_14029 = state_14016;
(statearr_14029[(7)] = inst_14013);

return statearr_14029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14016__$1,inst_14014);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0 = (function (){
var statearr_14034 = [null,null,null,null,null,null,null,null];
(statearr_14034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__);

(statearr_14034[(1)] = (1));

return statearr_14034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1 = (function (state_14016){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14016);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14040){var ex__13619__auto__ = e14040;
var statearr_14041_15962 = state_14016;
(statearr_14041_15962[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14016[(4)]))){
var statearr_14043_15963 = state_14016;
(statearr_14043_15963[(1)] = cljs.core.first((state_14016[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15964 = state_14016;
state_14016 = G__15964;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = function(state_14016){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1.call(this,state_14016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14045 = f__13734__auto__();
(statearr_14045[(6)] = c__13733__auto___15961);

return statearr_14045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14050){
var vec__14051 = p__14050;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14051,(1),null);
var job = vec__14051;
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
var n__5636__auto___15965 = n;
var __15966 = (0);
while(true){
if((__15966 < n__5636__auto___15965)){
var G__14056_15967 = type;
var G__14056_15968__$1 = (((G__14056_15967 instanceof cljs.core.Keyword))?G__14056_15967.fqn:null);
switch (G__14056_15968__$1) {
case "compute":
var c__13733__auto___15970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15966,c__13733__auto___15970,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async){
return (function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = ((function (__15966,c__13733__auto___15970,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async){
return (function (state_14079){
var state_val_14080 = (state_14079[(1)]);
if((state_val_14080 === (1))){
var state_14079__$1 = state_14079;
var statearr_14083_15972 = state_14079__$1;
(statearr_14083_15972[(2)] = null);

(statearr_14083_15972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (2))){
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14079__$1,(4),jobs);
} else {
if((state_val_14080 === (3))){
var inst_14073 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14079__$1,inst_14073);
} else {
if((state_val_14080 === (4))){
var inst_14064 = (state_14079[(2)]);
var inst_14065 = process__$1(inst_14064);
var state_14079__$1 = state_14079;
if(cljs.core.truth_(inst_14065)){
var statearr_14084_15974 = state_14079__$1;
(statearr_14084_15974[(1)] = (5));

} else {
var statearr_14085_15975 = state_14079__$1;
(statearr_14085_15975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (5))){
var state_14079__$1 = state_14079;
var statearr_14087_15976 = state_14079__$1;
(statearr_14087_15976[(2)] = null);

(statearr_14087_15976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (6))){
var state_14079__$1 = state_14079;
var statearr_14089_15977 = state_14079__$1;
(statearr_14089_15977[(2)] = null);

(statearr_14089_15977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (7))){
var inst_14071 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
var statearr_14090_15978 = state_14079__$1;
(statearr_14090_15978[(2)] = inst_14071);

(statearr_14090_15978[(1)] = (3));


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
});})(__15966,c__13733__auto___15970,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async))
;
return ((function (__15966,switch__13615__auto__,c__13733__auto___15970,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0 = (function (){
var statearr_14091 = [null,null,null,null,null,null,null];
(statearr_14091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__);

(statearr_14091[(1)] = (1));

return statearr_14091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1 = (function (state_14079){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14079);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14092){var ex__13619__auto__ = e14092;
var statearr_14093_15979 = state_14079;
(statearr_14093_15979[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14079[(4)]))){
var statearr_14096_15980 = state_14079;
(statearr_14096_15980[(1)] = cljs.core.first((state_14079[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15981 = state_14079;
state_14079 = G__15981;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = function(state_14079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1.call(this,state_14079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__;
})()
;})(__15966,switch__13615__auto__,c__13733__auto___15970,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async))
})();
var state__13735__auto__ = (function (){var statearr_14097 = f__13734__auto__();
(statearr_14097[(6)] = c__13733__auto___15970);

return statearr_14097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
});})(__15966,c__13733__auto___15970,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async))
);


break;
case "async":
var c__13733__auto___15982 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15966,c__13733__auto___15982,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async){
return (function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = ((function (__15966,c__13733__auto___15982,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async){
return (function (state_14111){
var state_val_14112 = (state_14111[(1)]);
if((state_val_14112 === (1))){
var state_14111__$1 = state_14111;
var statearr_14114_15983 = state_14111__$1;
(statearr_14114_15983[(2)] = null);

(statearr_14114_15983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (2))){
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14111__$1,(4),jobs);
} else {
if((state_val_14112 === (3))){
var inst_14109 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14111__$1,inst_14109);
} else {
if((state_val_14112 === (4))){
var inst_14101 = (state_14111[(2)]);
var inst_14102 = async(inst_14101);
var state_14111__$1 = state_14111;
if(cljs.core.truth_(inst_14102)){
var statearr_14123_15985 = state_14111__$1;
(statearr_14123_15985[(1)] = (5));

} else {
var statearr_14126_15986 = state_14111__$1;
(statearr_14126_15986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (5))){
var state_14111__$1 = state_14111;
var statearr_14127_15987 = state_14111__$1;
(statearr_14127_15987[(2)] = null);

(statearr_14127_15987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (6))){
var state_14111__$1 = state_14111;
var statearr_14128_15988 = state_14111__$1;
(statearr_14128_15988[(2)] = null);

(statearr_14128_15988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14112 === (7))){
var inst_14107 = (state_14111[(2)]);
var state_14111__$1 = state_14111;
var statearr_14129_15989 = state_14111__$1;
(statearr_14129_15989[(2)] = inst_14107);

(statearr_14129_15989[(1)] = (3));


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
});})(__15966,c__13733__auto___15982,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async))
;
return ((function (__15966,switch__13615__auto__,c__13733__auto___15982,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0 = (function (){
var statearr_14131 = [null,null,null,null,null,null,null];
(statearr_14131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__);

(statearr_14131[(1)] = (1));

return statearr_14131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1 = (function (state_14111){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14111);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14132){var ex__13619__auto__ = e14132;
var statearr_14133_15990 = state_14111;
(statearr_14133_15990[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14111[(4)]))){
var statearr_14134_15991 = state_14111;
(statearr_14134_15991[(1)] = cljs.core.first((state_14111[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15992 = state_14111;
state_14111 = G__15992;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = function(state_14111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1.call(this,state_14111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__;
})()
;})(__15966,switch__13615__auto__,c__13733__auto___15982,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async))
})();
var state__13735__auto__ = (function (){var statearr_14135 = f__13734__auto__();
(statearr_14135[(6)] = c__13733__auto___15982);

return statearr_14135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
});})(__15966,c__13733__auto___15982,G__14056_15967,G__14056_15968__$1,n__5636__auto___15965,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14056_15968__$1)].join('')));

}

var G__15993 = (__15966 + (1));
__15966 = G__15993;
continue;
} else {
}
break;
}

var c__13733__auto___15994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14166){
var state_val_14167 = (state_14166[(1)]);
if((state_val_14167 === (7))){
var inst_14162 = (state_14166[(2)]);
var state_14166__$1 = state_14166;
var statearr_14168_15999 = state_14166__$1;
(statearr_14168_15999[(2)] = inst_14162);

(statearr_14168_15999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14167 === (1))){
var state_14166__$1 = state_14166;
var statearr_14169_16000 = state_14166__$1;
(statearr_14169_16000[(2)] = null);

(statearr_14169_16000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14167 === (4))){
var inst_14138 = (state_14166[(7)]);
var inst_14138__$1 = (state_14166[(2)]);
var inst_14139 = (inst_14138__$1 == null);
var state_14166__$1 = (function (){var statearr_14170 = state_14166;
(statearr_14170[(7)] = inst_14138__$1);

return statearr_14170;
})();
if(cljs.core.truth_(inst_14139)){
var statearr_14171_16001 = state_14166__$1;
(statearr_14171_16001[(1)] = (5));

} else {
var statearr_14172_16002 = state_14166__$1;
(statearr_14172_16002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14167 === (6))){
var inst_14138 = (state_14166[(7)]);
var inst_14145 = (state_14166[(8)]);
var inst_14145__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14153 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14154 = [inst_14138,inst_14145__$1];
var inst_14155 = (new cljs.core.PersistentVector(null,2,(5),inst_14153,inst_14154,null));
var state_14166__$1 = (function (){var statearr_14173 = state_14166;
(statearr_14173[(8)] = inst_14145__$1);

return statearr_14173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14166__$1,(8),jobs,inst_14155);
} else {
if((state_val_14167 === (3))){
var inst_14164 = (state_14166[(2)]);
var state_14166__$1 = state_14166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14166__$1,inst_14164);
} else {
if((state_val_14167 === (2))){
var state_14166__$1 = state_14166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14166__$1,(4),from);
} else {
if((state_val_14167 === (9))){
var inst_14159 = (state_14166[(2)]);
var state_14166__$1 = (function (){var statearr_14174 = state_14166;
(statearr_14174[(9)] = inst_14159);

return statearr_14174;
})();
var statearr_14175_16003 = state_14166__$1;
(statearr_14175_16003[(2)] = null);

(statearr_14175_16003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14167 === (5))){
var inst_14141 = cljs.core.async.close_BANG_(jobs);
var state_14166__$1 = state_14166;
var statearr_14176_16004 = state_14166__$1;
(statearr_14176_16004[(2)] = inst_14141);

(statearr_14176_16004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14167 === (8))){
var inst_14145 = (state_14166[(8)]);
var inst_14157 = (state_14166[(2)]);
var state_14166__$1 = (function (){var statearr_14177 = state_14166;
(statearr_14177[(10)] = inst_14157);

return statearr_14177;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14166__$1,(9),results,inst_14145);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0 = (function (){
var statearr_14178 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__);

(statearr_14178[(1)] = (1));

return statearr_14178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1 = (function (state_14166){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14166);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14179){var ex__13619__auto__ = e14179;
var statearr_14180_16005 = state_14166;
(statearr_14180_16005[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14166[(4)]))){
var statearr_14181_16006 = state_14166;
(statearr_14181_16006[(1)] = cljs.core.first((state_14166[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16007 = state_14166;
state_14166 = G__16007;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = function(state_14166){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1.call(this,state_14166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14182 = f__13734__auto__();
(statearr_14182[(6)] = c__13733__auto___15994);

return statearr_14182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


var c__13733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14220){
var state_val_14221 = (state_14220[(1)]);
if((state_val_14221 === (7))){
var inst_14216 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14226_16008 = state_14220__$1;
(statearr_14226_16008[(2)] = inst_14216);

(statearr_14226_16008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (20))){
var state_14220__$1 = state_14220;
var statearr_14227_16009 = state_14220__$1;
(statearr_14227_16009[(2)] = null);

(statearr_14227_16009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (1))){
var state_14220__$1 = state_14220;
var statearr_14228_16010 = state_14220__$1;
(statearr_14228_16010[(2)] = null);

(statearr_14228_16010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (4))){
var inst_14185 = (state_14220[(7)]);
var inst_14185__$1 = (state_14220[(2)]);
var inst_14186 = (inst_14185__$1 == null);
var state_14220__$1 = (function (){var statearr_14230 = state_14220;
(statearr_14230[(7)] = inst_14185__$1);

return statearr_14230;
})();
if(cljs.core.truth_(inst_14186)){
var statearr_14231_16011 = state_14220__$1;
(statearr_14231_16011[(1)] = (5));

} else {
var statearr_14232_16012 = state_14220__$1;
(statearr_14232_16012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (15))){
var inst_14198 = (state_14220[(8)]);
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14220__$1,(18),to,inst_14198);
} else {
if((state_val_14221 === (21))){
var inst_14211 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14234_16014 = state_14220__$1;
(statearr_14234_16014[(2)] = inst_14211);

(statearr_14234_16014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (13))){
var inst_14213 = (state_14220[(2)]);
var state_14220__$1 = (function (){var statearr_14236 = state_14220;
(statearr_14236[(9)] = inst_14213);

return statearr_14236;
})();
var statearr_14237_16016 = state_14220__$1;
(statearr_14237_16016[(2)] = null);

(statearr_14237_16016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (6))){
var inst_14185 = (state_14220[(7)]);
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14220__$1,(11),inst_14185);
} else {
if((state_val_14221 === (17))){
var inst_14206 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
if(cljs.core.truth_(inst_14206)){
var statearr_14238_16017 = state_14220__$1;
(statearr_14238_16017[(1)] = (19));

} else {
var statearr_14239_16018 = state_14220__$1;
(statearr_14239_16018[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (3))){
var inst_14218 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14220__$1,inst_14218);
} else {
if((state_val_14221 === (12))){
var inst_14195 = (state_14220[(10)]);
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14220__$1,(14),inst_14195);
} else {
if((state_val_14221 === (2))){
var state_14220__$1 = state_14220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14220__$1,(4),results);
} else {
if((state_val_14221 === (19))){
var state_14220__$1 = state_14220;
var statearr_14241_16019 = state_14220__$1;
(statearr_14241_16019[(2)] = null);

(statearr_14241_16019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (11))){
var inst_14195 = (state_14220[(2)]);
var state_14220__$1 = (function (){var statearr_14242 = state_14220;
(statearr_14242[(10)] = inst_14195);

return statearr_14242;
})();
var statearr_14243_16020 = state_14220__$1;
(statearr_14243_16020[(2)] = null);

(statearr_14243_16020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (9))){
var state_14220__$1 = state_14220;
var statearr_14244_16028 = state_14220__$1;
(statearr_14244_16028[(2)] = null);

(statearr_14244_16028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (5))){
var state_14220__$1 = state_14220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14245_16029 = state_14220__$1;
(statearr_14245_16029[(1)] = (8));

} else {
var statearr_14246_16030 = state_14220__$1;
(statearr_14246_16030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (14))){
var inst_14198 = (state_14220[(8)]);
var inst_14200 = (state_14220[(11)]);
var inst_14198__$1 = (state_14220[(2)]);
var inst_14199 = (inst_14198__$1 == null);
var inst_14200__$1 = cljs.core.not(inst_14199);
var state_14220__$1 = (function (){var statearr_14247 = state_14220;
(statearr_14247[(8)] = inst_14198__$1);

(statearr_14247[(11)] = inst_14200__$1);

return statearr_14247;
})();
if(inst_14200__$1){
var statearr_14248_16031 = state_14220__$1;
(statearr_14248_16031[(1)] = (15));

} else {
var statearr_14249_16032 = state_14220__$1;
(statearr_14249_16032[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (16))){
var inst_14200 = (state_14220[(11)]);
var state_14220__$1 = state_14220;
var statearr_14250_16033 = state_14220__$1;
(statearr_14250_16033[(2)] = inst_14200);

(statearr_14250_16033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (10))){
var inst_14192 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14251_16034 = state_14220__$1;
(statearr_14251_16034[(2)] = inst_14192);

(statearr_14251_16034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (18))){
var inst_14203 = (state_14220[(2)]);
var state_14220__$1 = state_14220;
var statearr_14252_16035 = state_14220__$1;
(statearr_14252_16035[(2)] = inst_14203);

(statearr_14252_16035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14221 === (8))){
var inst_14189 = cljs.core.async.close_BANG_(to);
var state_14220__$1 = state_14220;
var statearr_14255_16036 = state_14220__$1;
(statearr_14255_16036[(2)] = inst_14189);

(statearr_14255_16036[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0 = (function (){
var statearr_14260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__);

(statearr_14260[(1)] = (1));

return statearr_14260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1 = (function (state_14220){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14220);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14261){var ex__13619__auto__ = e14261;
var statearr_14262_16037 = state_14220;
(statearr_14262_16037[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14220[(4)]))){
var statearr_14263_16038 = state_14220;
(statearr_14263_16038[(1)] = cljs.core.first((state_14220[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16039 = state_14220;
state_14220 = G__16039;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__ = function(state_14220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1.call(this,state_14220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14264 = f__13734__auto__();
(statearr_14264[(6)] = c__13733__auto__);

return statearr_14264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));

return c__13733__auto__;
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
var G__14272 = arguments.length;
switch (G__14272) {
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
var G__14274 = arguments.length;
switch (G__14274) {
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
var G__14282 = arguments.length;
switch (G__14282) {
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
var c__13733__auto___16043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14308){
var state_val_14309 = (state_14308[(1)]);
if((state_val_14309 === (7))){
var inst_14304 = (state_14308[(2)]);
var state_14308__$1 = state_14308;
var statearr_14314_16044 = state_14308__$1;
(statearr_14314_16044[(2)] = inst_14304);

(statearr_14314_16044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (1))){
var state_14308__$1 = state_14308;
var statearr_14315_16045 = state_14308__$1;
(statearr_14315_16045[(2)] = null);

(statearr_14315_16045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (4))){
var inst_14285 = (state_14308[(7)]);
var inst_14285__$1 = (state_14308[(2)]);
var inst_14286 = (inst_14285__$1 == null);
var state_14308__$1 = (function (){var statearr_14319 = state_14308;
(statearr_14319[(7)] = inst_14285__$1);

return statearr_14319;
})();
if(cljs.core.truth_(inst_14286)){
var statearr_14320_16046 = state_14308__$1;
(statearr_14320_16046[(1)] = (5));

} else {
var statearr_14321_16047 = state_14308__$1;
(statearr_14321_16047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (13))){
var state_14308__$1 = state_14308;
var statearr_14322_16048 = state_14308__$1;
(statearr_14322_16048[(2)] = null);

(statearr_14322_16048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (6))){
var inst_14285 = (state_14308[(7)]);
var inst_14291 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14285) : p.call(null,inst_14285));
var state_14308__$1 = state_14308;
if(cljs.core.truth_(inst_14291)){
var statearr_14323_16049 = state_14308__$1;
(statearr_14323_16049[(1)] = (9));

} else {
var statearr_14324_16050 = state_14308__$1;
(statearr_14324_16050[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (3))){
var inst_14306 = (state_14308[(2)]);
var state_14308__$1 = state_14308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14308__$1,inst_14306);
} else {
if((state_val_14309 === (12))){
var state_14308__$1 = state_14308;
var statearr_14325_16051 = state_14308__$1;
(statearr_14325_16051[(2)] = null);

(statearr_14325_16051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (2))){
var state_14308__$1 = state_14308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14308__$1,(4),ch);
} else {
if((state_val_14309 === (11))){
var inst_14285 = (state_14308[(7)]);
var inst_14295 = (state_14308[(2)]);
var state_14308__$1 = state_14308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14308__$1,(8),inst_14295,inst_14285);
} else {
if((state_val_14309 === (9))){
var state_14308__$1 = state_14308;
var statearr_14326_16052 = state_14308__$1;
(statearr_14326_16052[(2)] = tc);

(statearr_14326_16052[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (5))){
var inst_14288 = cljs.core.async.close_BANG_(tc);
var inst_14289 = cljs.core.async.close_BANG_(fc);
var state_14308__$1 = (function (){var statearr_14327 = state_14308;
(statearr_14327[(8)] = inst_14288);

return statearr_14327;
})();
var statearr_14328_16053 = state_14308__$1;
(statearr_14328_16053[(2)] = inst_14289);

(statearr_14328_16053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (14))){
var inst_14302 = (state_14308[(2)]);
var state_14308__$1 = state_14308;
var statearr_14329_16054 = state_14308__$1;
(statearr_14329_16054[(2)] = inst_14302);

(statearr_14329_16054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (10))){
var state_14308__$1 = state_14308;
var statearr_14330_16055 = state_14308__$1;
(statearr_14330_16055[(2)] = fc);

(statearr_14330_16055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14309 === (8))){
var inst_14297 = (state_14308[(2)]);
var state_14308__$1 = state_14308;
if(cljs.core.truth_(inst_14297)){
var statearr_14331_16056 = state_14308__$1;
(statearr_14331_16056[(1)] = (12));

} else {
var statearr_14332_16057 = state_14308__$1;
(statearr_14332_16057[(1)] = (13));

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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_14333 = [null,null,null,null,null,null,null,null,null];
(statearr_14333[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_14333[(1)] = (1));

return statearr_14333;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_14308){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14308);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14334){var ex__13619__auto__ = e14334;
var statearr_14335_16058 = state_14308;
(statearr_14335_16058[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14308[(4)]))){
var statearr_14336_16059 = state_14308;
(statearr_14336_16059[(1)] = cljs.core.first((state_14308[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16060 = state_14308;
state_14308 = G__16060;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_14308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_14308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14337 = f__13734__auto__();
(statearr_14337[(6)] = c__13733__auto___16043);

return statearr_14337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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
var c__13733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14359){
var state_val_14360 = (state_14359[(1)]);
if((state_val_14360 === (7))){
var inst_14355 = (state_14359[(2)]);
var state_14359__$1 = state_14359;
var statearr_14361_16061 = state_14359__$1;
(statearr_14361_16061[(2)] = inst_14355);

(statearr_14361_16061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (1))){
var inst_14338 = init;
var inst_14339 = inst_14338;
var state_14359__$1 = (function (){var statearr_14362 = state_14359;
(statearr_14362[(7)] = inst_14339);

return statearr_14362;
})();
var statearr_14363_16062 = state_14359__$1;
(statearr_14363_16062[(2)] = null);

(statearr_14363_16062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (4))){
var inst_14342 = (state_14359[(8)]);
var inst_14342__$1 = (state_14359[(2)]);
var inst_14343 = (inst_14342__$1 == null);
var state_14359__$1 = (function (){var statearr_14364 = state_14359;
(statearr_14364[(8)] = inst_14342__$1);

return statearr_14364;
})();
if(cljs.core.truth_(inst_14343)){
var statearr_14365_16063 = state_14359__$1;
(statearr_14365_16063[(1)] = (5));

} else {
var statearr_14366_16064 = state_14359__$1;
(statearr_14366_16064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (6))){
var inst_14342 = (state_14359[(8)]);
var inst_14346 = (state_14359[(9)]);
var inst_14339 = (state_14359[(7)]);
var inst_14346__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14339,inst_14342) : f.call(null,inst_14339,inst_14342));
var inst_14347 = cljs.core.reduced_QMARK_(inst_14346__$1);
var state_14359__$1 = (function (){var statearr_14367 = state_14359;
(statearr_14367[(9)] = inst_14346__$1);

return statearr_14367;
})();
if(inst_14347){
var statearr_14369_16065 = state_14359__$1;
(statearr_14369_16065[(1)] = (8));

} else {
var statearr_14370_16066 = state_14359__$1;
(statearr_14370_16066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (3))){
var inst_14357 = (state_14359[(2)]);
var state_14359__$1 = state_14359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14359__$1,inst_14357);
} else {
if((state_val_14360 === (2))){
var state_14359__$1 = state_14359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14359__$1,(4),ch);
} else {
if((state_val_14360 === (9))){
var inst_14346 = (state_14359[(9)]);
var inst_14339 = inst_14346;
var state_14359__$1 = (function (){var statearr_14371 = state_14359;
(statearr_14371[(7)] = inst_14339);

return statearr_14371;
})();
var statearr_14372_16067 = state_14359__$1;
(statearr_14372_16067[(2)] = null);

(statearr_14372_16067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (5))){
var inst_14339 = (state_14359[(7)]);
var state_14359__$1 = state_14359;
var statearr_14373_16068 = state_14359__$1;
(statearr_14373_16068[(2)] = inst_14339);

(statearr_14373_16068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (10))){
var inst_14353 = (state_14359[(2)]);
var state_14359__$1 = state_14359;
var statearr_14374_16069 = state_14359__$1;
(statearr_14374_16069[(2)] = inst_14353);

(statearr_14374_16069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14360 === (8))){
var inst_14346 = (state_14359[(9)]);
var inst_14349 = cljs.core.deref(inst_14346);
var state_14359__$1 = state_14359;
var statearr_14375_16070 = state_14359__$1;
(statearr_14375_16070[(2)] = inst_14349);

(statearr_14375_16070[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13616__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13616__auto____0 = (function (){
var statearr_14376 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14376[(0)] = cljs$core$async$reduce_$_state_machine__13616__auto__);

(statearr_14376[(1)] = (1));

return statearr_14376;
});
var cljs$core$async$reduce_$_state_machine__13616__auto____1 = (function (state_14359){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14359);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14377){var ex__13619__auto__ = e14377;
var statearr_14378_16074 = state_14359;
(statearr_14378_16074[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14359[(4)]))){
var statearr_14379_16075 = state_14359;
(statearr_14379_16075[(1)] = cljs.core.first((state_14359[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16076 = state_14359;
state_14359 = G__16076;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13616__auto__ = function(state_14359){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13616__auto____1.call(this,state_14359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13616__auto____0;
cljs$core$async$reduce_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13616__auto____1;
return cljs$core$async$reduce_$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14380 = f__13734__auto__();
(statearr_14380[(6)] = c__13733__auto__);

return statearr_14380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));

return c__13733__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14386){
var state_val_14387 = (state_14386[(1)]);
if((state_val_14387 === (1))){
var inst_14381 = cljs.core.async.reduce(f__$1,init,ch);
var state_14386__$1 = state_14386;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14386__$1,(2),inst_14381);
} else {
if((state_val_14387 === (2))){
var inst_14383 = (state_14386[(2)]);
var inst_14384 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14383) : f__$1.call(null,inst_14383));
var state_14386__$1 = state_14386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14386__$1,inst_14384);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13616__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13616__auto____0 = (function (){
var statearr_14389 = [null,null,null,null,null,null,null];
(statearr_14389[(0)] = cljs$core$async$transduce_$_state_machine__13616__auto__);

(statearr_14389[(1)] = (1));

return statearr_14389;
});
var cljs$core$async$transduce_$_state_machine__13616__auto____1 = (function (state_14386){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14386);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14390){var ex__13619__auto__ = e14390;
var statearr_14391_16080 = state_14386;
(statearr_14391_16080[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14386[(4)]))){
var statearr_14392_16081 = state_14386;
(statearr_14392_16081[(1)] = cljs.core.first((state_14386[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16082 = state_14386;
state_14386 = G__16082;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13616__auto__ = function(state_14386){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13616__auto____1.call(this,state_14386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13616__auto____0;
cljs$core$async$transduce_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13616__auto____1;
return cljs$core$async$transduce_$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14395 = f__13734__auto__();
(statearr_14395[(6)] = c__13733__auto__);

return statearr_14395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));

return c__13733__auto__;
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
var G__14397 = arguments.length;
switch (G__14397) {
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
var c__13733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14425){
var state_val_14426 = (state_14425[(1)]);
if((state_val_14426 === (7))){
var inst_14405 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
var statearr_14429_16087 = state_14425__$1;
(statearr_14429_16087[(2)] = inst_14405);

(statearr_14429_16087[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (1))){
var inst_14398 = cljs.core.seq(coll);
var inst_14399 = inst_14398;
var state_14425__$1 = (function (){var statearr_14430 = state_14425;
(statearr_14430[(7)] = inst_14399);

return statearr_14430;
})();
var statearr_14431_16092 = state_14425__$1;
(statearr_14431_16092[(2)] = null);

(statearr_14431_16092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (4))){
var inst_14399 = (state_14425[(7)]);
var inst_14403 = cljs.core.first(inst_14399);
var state_14425__$1 = state_14425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14425__$1,(7),ch,inst_14403);
} else {
if((state_val_14426 === (13))){
var inst_14417 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
var statearr_14432_16096 = state_14425__$1;
(statearr_14432_16096[(2)] = inst_14417);

(statearr_14432_16096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (6))){
var inst_14408 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
if(cljs.core.truth_(inst_14408)){
var statearr_14433_16097 = state_14425__$1;
(statearr_14433_16097[(1)] = (8));

} else {
var statearr_14434_16098 = state_14425__$1;
(statearr_14434_16098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (3))){
var inst_14421 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14425__$1,inst_14421);
} else {
if((state_val_14426 === (12))){
var state_14425__$1 = state_14425;
var statearr_14435_16099 = state_14425__$1;
(statearr_14435_16099[(2)] = null);

(statearr_14435_16099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (2))){
var inst_14399 = (state_14425[(7)]);
var state_14425__$1 = state_14425;
if(cljs.core.truth_(inst_14399)){
var statearr_14436_16100 = state_14425__$1;
(statearr_14436_16100[(1)] = (4));

} else {
var statearr_14437_16101 = state_14425__$1;
(statearr_14437_16101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (11))){
var inst_14414 = cljs.core.async.close_BANG_(ch);
var state_14425__$1 = state_14425;
var statearr_14438_16102 = state_14425__$1;
(statearr_14438_16102[(2)] = inst_14414);

(statearr_14438_16102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (9))){
var state_14425__$1 = state_14425;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14439_16103 = state_14425__$1;
(statearr_14439_16103[(1)] = (11));

} else {
var statearr_14440_16107 = state_14425__$1;
(statearr_14440_16107[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (5))){
var inst_14399 = (state_14425[(7)]);
var state_14425__$1 = state_14425;
var statearr_14441_16108 = state_14425__$1;
(statearr_14441_16108[(2)] = inst_14399);

(statearr_14441_16108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (10))){
var inst_14419 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
var statearr_14442_16109 = state_14425__$1;
(statearr_14442_16109[(2)] = inst_14419);

(statearr_14442_16109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (8))){
var inst_14399 = (state_14425[(7)]);
var inst_14410 = cljs.core.next(inst_14399);
var inst_14399__$1 = inst_14410;
var state_14425__$1 = (function (){var statearr_14443 = state_14425;
(statearr_14443[(7)] = inst_14399__$1);

return statearr_14443;
})();
var statearr_14444_16110 = state_14425__$1;
(statearr_14444_16110[(2)] = null);

(statearr_14444_16110[(1)] = (2));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_14460 = [null,null,null,null,null,null,null,null];
(statearr_14460[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_14460[(1)] = (1));

return statearr_14460;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_14425){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14425);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14461){var ex__13619__auto__ = e14461;
var statearr_14462_16114 = state_14425;
(statearr_14462_16114[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14425[(4)]))){
var statearr_14463_16115 = state_14425;
(statearr_14463_16115[(1)] = cljs.core.first((state_14425[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16116 = state_14425;
state_14425 = G__16116;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_14425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_14425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14467 = f__13734__auto__();
(statearr_14467[(6)] = c__13733__auto__);

return statearr_14467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));

return c__13733__auto__;
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
var G__14471 = arguments.length;
switch (G__14471) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_16121 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_16121(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16123 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_16123(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16124 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_16124(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16125 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_16125(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14483 = (function (ch,cs,meta14484){
this.ch = ch;
this.cs = cs;
this.meta14484 = meta14484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14485,meta14484__$1){
var self__ = this;
var _14485__$1 = this;
return (new cljs.core.async.t_cljs$core$async14483(self__.ch,self__.cs,meta14484__$1));
}));

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14485){
var self__ = this;
var _14485__$1 = this;
return self__.meta14484;
}));

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14484","meta14484",-458446631,null)], null);
}));

(cljs.core.async.t_cljs$core$async14483.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14483");

(cljs.core.async.t_cljs$core$async14483.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14483");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14483.
 */
cljs.core.async.__GT_t_cljs$core$async14483 = (function cljs$core$async$__GT_t_cljs$core$async14483(ch,cs,meta14484){
return (new cljs.core.async.t_cljs$core$async14483(ch,cs,meta14484));
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
var m = (new cljs.core.async.t_cljs$core$async14483(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13733__auto___16126 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14625){
var state_val_14626 = (state_14625[(1)]);
if((state_val_14626 === (7))){
var inst_14621 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14627_16127 = state_14625__$1;
(statearr_14627_16127[(2)] = inst_14621);

(statearr_14627_16127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (20))){
var inst_14522 = (state_14625[(7)]);
var inst_14535 = cljs.core.first(inst_14522);
var inst_14536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14535,(0),null);
var inst_14537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14535,(1),null);
var state_14625__$1 = (function (){var statearr_14628 = state_14625;
(statearr_14628[(8)] = inst_14536);

return statearr_14628;
})();
if(cljs.core.truth_(inst_14537)){
var statearr_14629_16128 = state_14625__$1;
(statearr_14629_16128[(1)] = (22));

} else {
var statearr_14630_16129 = state_14625__$1;
(statearr_14630_16129[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (27))){
var inst_14491 = (state_14625[(9)]);
var inst_14568 = (state_14625[(10)]);
var inst_14575 = (state_14625[(11)]);
var inst_14570 = (state_14625[(12)]);
var inst_14575__$1 = cljs.core._nth(inst_14568,inst_14570);
var inst_14576 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14575__$1,inst_14491,done);
var state_14625__$1 = (function (){var statearr_14632 = state_14625;
(statearr_14632[(11)] = inst_14575__$1);

return statearr_14632;
})();
if(cljs.core.truth_(inst_14576)){
var statearr_14633_16135 = state_14625__$1;
(statearr_14633_16135[(1)] = (30));

} else {
var statearr_14634_16136 = state_14625__$1;
(statearr_14634_16136[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (1))){
var state_14625__$1 = state_14625;
var statearr_14635_16137 = state_14625__$1;
(statearr_14635_16137[(2)] = null);

(statearr_14635_16137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (24))){
var inst_14522 = (state_14625[(7)]);
var inst_14542 = (state_14625[(2)]);
var inst_14544 = cljs.core.next(inst_14522);
var inst_14500 = inst_14544;
var inst_14501 = null;
var inst_14502 = (0);
var inst_14503 = (0);
var state_14625__$1 = (function (){var statearr_14636 = state_14625;
(statearr_14636[(13)] = inst_14503);

(statearr_14636[(14)] = inst_14502);

(statearr_14636[(15)] = inst_14542);

(statearr_14636[(16)] = inst_14500);

(statearr_14636[(17)] = inst_14501);

return statearr_14636;
})();
var statearr_14637_16138 = state_14625__$1;
(statearr_14637_16138[(2)] = null);

(statearr_14637_16138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (39))){
var state_14625__$1 = state_14625;
var statearr_14641_16139 = state_14625__$1;
(statearr_14641_16139[(2)] = null);

(statearr_14641_16139[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (4))){
var inst_14491 = (state_14625[(9)]);
var inst_14491__$1 = (state_14625[(2)]);
var inst_14492 = (inst_14491__$1 == null);
var state_14625__$1 = (function (){var statearr_14642 = state_14625;
(statearr_14642[(9)] = inst_14491__$1);

return statearr_14642;
})();
if(cljs.core.truth_(inst_14492)){
var statearr_14643_16140 = state_14625__$1;
(statearr_14643_16140[(1)] = (5));

} else {
var statearr_14644_16141 = state_14625__$1;
(statearr_14644_16141[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (15))){
var inst_14503 = (state_14625[(13)]);
var inst_14502 = (state_14625[(14)]);
var inst_14500 = (state_14625[(16)]);
var inst_14501 = (state_14625[(17)]);
var inst_14518 = (state_14625[(2)]);
var inst_14519 = (inst_14503 + (1));
var tmp14638 = inst_14502;
var tmp14639 = inst_14500;
var tmp14640 = inst_14501;
var inst_14500__$1 = tmp14639;
var inst_14501__$1 = tmp14640;
var inst_14502__$1 = tmp14638;
var inst_14503__$1 = inst_14519;
var state_14625__$1 = (function (){var statearr_14645 = state_14625;
(statearr_14645[(13)] = inst_14503__$1);

(statearr_14645[(18)] = inst_14518);

(statearr_14645[(14)] = inst_14502__$1);

(statearr_14645[(16)] = inst_14500__$1);

(statearr_14645[(17)] = inst_14501__$1);

return statearr_14645;
})();
var statearr_14646_16142 = state_14625__$1;
(statearr_14646_16142[(2)] = null);

(statearr_14646_16142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (21))){
var inst_14547 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14650_16143 = state_14625__$1;
(statearr_14650_16143[(2)] = inst_14547);

(statearr_14650_16143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (31))){
var inst_14575 = (state_14625[(11)]);
var inst_14579 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14575);
var state_14625__$1 = state_14625;
var statearr_14651_16144 = state_14625__$1;
(statearr_14651_16144[(2)] = inst_14579);

(statearr_14651_16144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (32))){
var inst_14568 = (state_14625[(10)]);
var inst_14567 = (state_14625[(19)]);
var inst_14569 = (state_14625[(20)]);
var inst_14570 = (state_14625[(12)]);
var inst_14581 = (state_14625[(2)]);
var inst_14582 = (inst_14570 + (1));
var tmp14647 = inst_14568;
var tmp14648 = inst_14567;
var tmp14649 = inst_14569;
var inst_14567__$1 = tmp14648;
var inst_14568__$1 = tmp14647;
var inst_14569__$1 = tmp14649;
var inst_14570__$1 = inst_14582;
var state_14625__$1 = (function (){var statearr_14652 = state_14625;
(statearr_14652[(10)] = inst_14568__$1);

(statearr_14652[(21)] = inst_14581);

(statearr_14652[(19)] = inst_14567__$1);

(statearr_14652[(20)] = inst_14569__$1);

(statearr_14652[(12)] = inst_14570__$1);

return statearr_14652;
})();
var statearr_14661_16145 = state_14625__$1;
(statearr_14661_16145[(2)] = null);

(statearr_14661_16145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (40))){
var inst_14594 = (state_14625[(22)]);
var inst_14598 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14594);
var state_14625__$1 = state_14625;
var statearr_14666_16146 = state_14625__$1;
(statearr_14666_16146[(2)] = inst_14598);

(statearr_14666_16146[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (33))){
var inst_14585 = (state_14625[(23)]);
var inst_14587 = cljs.core.chunked_seq_QMARK_(inst_14585);
var state_14625__$1 = state_14625;
if(inst_14587){
var statearr_14667_16147 = state_14625__$1;
(statearr_14667_16147[(1)] = (36));

} else {
var statearr_14668_16148 = state_14625__$1;
(statearr_14668_16148[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (13))){
var inst_14512 = (state_14625[(24)]);
var inst_14515 = cljs.core.async.close_BANG_(inst_14512);
var state_14625__$1 = state_14625;
var statearr_14671_16149 = state_14625__$1;
(statearr_14671_16149[(2)] = inst_14515);

(statearr_14671_16149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (22))){
var inst_14536 = (state_14625[(8)]);
var inst_14539 = cljs.core.async.close_BANG_(inst_14536);
var state_14625__$1 = state_14625;
var statearr_14672_16150 = state_14625__$1;
(statearr_14672_16150[(2)] = inst_14539);

(statearr_14672_16150[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (36))){
var inst_14585 = (state_14625[(23)]);
var inst_14589 = cljs.core.chunk_first(inst_14585);
var inst_14590 = cljs.core.chunk_rest(inst_14585);
var inst_14591 = cljs.core.count(inst_14589);
var inst_14567 = inst_14590;
var inst_14568 = inst_14589;
var inst_14569 = inst_14591;
var inst_14570 = (0);
var state_14625__$1 = (function (){var statearr_14673 = state_14625;
(statearr_14673[(10)] = inst_14568);

(statearr_14673[(19)] = inst_14567);

(statearr_14673[(20)] = inst_14569);

(statearr_14673[(12)] = inst_14570);

return statearr_14673;
})();
var statearr_14674_16151 = state_14625__$1;
(statearr_14674_16151[(2)] = null);

(statearr_14674_16151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (41))){
var inst_14585 = (state_14625[(23)]);
var inst_14600 = (state_14625[(2)]);
var inst_14601 = cljs.core.next(inst_14585);
var inst_14567 = inst_14601;
var inst_14568 = null;
var inst_14569 = (0);
var inst_14570 = (0);
var state_14625__$1 = (function (){var statearr_14675 = state_14625;
(statearr_14675[(10)] = inst_14568);

(statearr_14675[(19)] = inst_14567);

(statearr_14675[(25)] = inst_14600);

(statearr_14675[(20)] = inst_14569);

(statearr_14675[(12)] = inst_14570);

return statearr_14675;
})();
var statearr_14676_16152 = state_14625__$1;
(statearr_14676_16152[(2)] = null);

(statearr_14676_16152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (43))){
var state_14625__$1 = state_14625;
var statearr_14677_16153 = state_14625__$1;
(statearr_14677_16153[(2)] = null);

(statearr_14677_16153[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (29))){
var inst_14609 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14678_16154 = state_14625__$1;
(statearr_14678_16154[(2)] = inst_14609);

(statearr_14678_16154[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (44))){
var inst_14618 = (state_14625[(2)]);
var state_14625__$1 = (function (){var statearr_14682 = state_14625;
(statearr_14682[(26)] = inst_14618);

return statearr_14682;
})();
var statearr_14683_16155 = state_14625__$1;
(statearr_14683_16155[(2)] = null);

(statearr_14683_16155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (6))){
var inst_14558 = (state_14625[(27)]);
var inst_14557 = cljs.core.deref(cs);
var inst_14558__$1 = cljs.core.keys(inst_14557);
var inst_14559 = cljs.core.count(inst_14558__$1);
var inst_14560 = cljs.core.reset_BANG_(dctr,inst_14559);
var inst_14566 = cljs.core.seq(inst_14558__$1);
var inst_14567 = inst_14566;
var inst_14568 = null;
var inst_14569 = (0);
var inst_14570 = (0);
var state_14625__$1 = (function (){var statearr_14684 = state_14625;
(statearr_14684[(10)] = inst_14568);

(statearr_14684[(28)] = inst_14560);

(statearr_14684[(27)] = inst_14558__$1);

(statearr_14684[(19)] = inst_14567);

(statearr_14684[(20)] = inst_14569);

(statearr_14684[(12)] = inst_14570);

return statearr_14684;
})();
var statearr_14685_16156 = state_14625__$1;
(statearr_14685_16156[(2)] = null);

(statearr_14685_16156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (28))){
var inst_14567 = (state_14625[(19)]);
var inst_14585 = (state_14625[(23)]);
var inst_14585__$1 = cljs.core.seq(inst_14567);
var state_14625__$1 = (function (){var statearr_14694 = state_14625;
(statearr_14694[(23)] = inst_14585__$1);

return statearr_14694;
})();
if(inst_14585__$1){
var statearr_14695_16157 = state_14625__$1;
(statearr_14695_16157[(1)] = (33));

} else {
var statearr_14696_16158 = state_14625__$1;
(statearr_14696_16158[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (25))){
var inst_14569 = (state_14625[(20)]);
var inst_14570 = (state_14625[(12)]);
var inst_14572 = (inst_14570 < inst_14569);
var inst_14573 = inst_14572;
var state_14625__$1 = state_14625;
if(cljs.core.truth_(inst_14573)){
var statearr_14700_16159 = state_14625__$1;
(statearr_14700_16159[(1)] = (27));

} else {
var statearr_14701_16160 = state_14625__$1;
(statearr_14701_16160[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (34))){
var state_14625__$1 = state_14625;
var statearr_14704_16161 = state_14625__$1;
(statearr_14704_16161[(2)] = null);

(statearr_14704_16161[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (17))){
var state_14625__$1 = state_14625;
var statearr_14705_16162 = state_14625__$1;
(statearr_14705_16162[(2)] = null);

(statearr_14705_16162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (3))){
var inst_14623 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14625__$1,inst_14623);
} else {
if((state_val_14626 === (12))){
var inst_14552 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14709_16163 = state_14625__$1;
(statearr_14709_16163[(2)] = inst_14552);

(statearr_14709_16163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (2))){
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14625__$1,(4),ch);
} else {
if((state_val_14626 === (23))){
var state_14625__$1 = state_14625;
var statearr_14710_16164 = state_14625__$1;
(statearr_14710_16164[(2)] = null);

(statearr_14710_16164[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (35))){
var inst_14607 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14714_16165 = state_14625__$1;
(statearr_14714_16165[(2)] = inst_14607);

(statearr_14714_16165[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (19))){
var inst_14522 = (state_14625[(7)]);
var inst_14527 = cljs.core.chunk_first(inst_14522);
var inst_14528 = cljs.core.chunk_rest(inst_14522);
var inst_14529 = cljs.core.count(inst_14527);
var inst_14500 = inst_14528;
var inst_14501 = inst_14527;
var inst_14502 = inst_14529;
var inst_14503 = (0);
var state_14625__$1 = (function (){var statearr_14716 = state_14625;
(statearr_14716[(13)] = inst_14503);

(statearr_14716[(14)] = inst_14502);

(statearr_14716[(16)] = inst_14500);

(statearr_14716[(17)] = inst_14501);

return statearr_14716;
})();
var statearr_14719_16166 = state_14625__$1;
(statearr_14719_16166[(2)] = null);

(statearr_14719_16166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (11))){
var inst_14522 = (state_14625[(7)]);
var inst_14500 = (state_14625[(16)]);
var inst_14522__$1 = cljs.core.seq(inst_14500);
var state_14625__$1 = (function (){var statearr_14721 = state_14625;
(statearr_14721[(7)] = inst_14522__$1);

return statearr_14721;
})();
if(inst_14522__$1){
var statearr_14722_16167 = state_14625__$1;
(statearr_14722_16167[(1)] = (16));

} else {
var statearr_14725_16168 = state_14625__$1;
(statearr_14725_16168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (9))){
var inst_14554 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14726_16169 = state_14625__$1;
(statearr_14726_16169[(2)] = inst_14554);

(statearr_14726_16169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (5))){
var inst_14498 = cljs.core.deref(cs);
var inst_14499 = cljs.core.seq(inst_14498);
var inst_14500 = inst_14499;
var inst_14501 = null;
var inst_14502 = (0);
var inst_14503 = (0);
var state_14625__$1 = (function (){var statearr_14730 = state_14625;
(statearr_14730[(13)] = inst_14503);

(statearr_14730[(14)] = inst_14502);

(statearr_14730[(16)] = inst_14500);

(statearr_14730[(17)] = inst_14501);

return statearr_14730;
})();
var statearr_14733_16170 = state_14625__$1;
(statearr_14733_16170[(2)] = null);

(statearr_14733_16170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (14))){
var state_14625__$1 = state_14625;
var statearr_14734_16171 = state_14625__$1;
(statearr_14734_16171[(2)] = null);

(statearr_14734_16171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (45))){
var inst_14615 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14736_16172 = state_14625__$1;
(statearr_14736_16172[(2)] = inst_14615);

(statearr_14736_16172[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (26))){
var inst_14558 = (state_14625[(27)]);
var inst_14611 = (state_14625[(2)]);
var inst_14612 = cljs.core.seq(inst_14558);
var state_14625__$1 = (function (){var statearr_14738 = state_14625;
(statearr_14738[(29)] = inst_14611);

return statearr_14738;
})();
if(inst_14612){
var statearr_14739_16173 = state_14625__$1;
(statearr_14739_16173[(1)] = (42));

} else {
var statearr_14740_16174 = state_14625__$1;
(statearr_14740_16174[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (16))){
var inst_14522 = (state_14625[(7)]);
var inst_14525 = cljs.core.chunked_seq_QMARK_(inst_14522);
var state_14625__$1 = state_14625;
if(inst_14525){
var statearr_14741_16175 = state_14625__$1;
(statearr_14741_16175[(1)] = (19));

} else {
var statearr_14742_16176 = state_14625__$1;
(statearr_14742_16176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (38))){
var inst_14604 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14743_16177 = state_14625__$1;
(statearr_14743_16177[(2)] = inst_14604);

(statearr_14743_16177[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (30))){
var state_14625__$1 = state_14625;
var statearr_14744_16178 = state_14625__$1;
(statearr_14744_16178[(2)] = null);

(statearr_14744_16178[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (10))){
var inst_14503 = (state_14625[(13)]);
var inst_14501 = (state_14625[(17)]);
var inst_14511 = cljs.core._nth(inst_14501,inst_14503);
var inst_14512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14511,(0),null);
var inst_14513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14511,(1),null);
var state_14625__$1 = (function (){var statearr_14745 = state_14625;
(statearr_14745[(24)] = inst_14512);

return statearr_14745;
})();
if(cljs.core.truth_(inst_14513)){
var statearr_14746_16179 = state_14625__$1;
(statearr_14746_16179[(1)] = (13));

} else {
var statearr_14747_16180 = state_14625__$1;
(statearr_14747_16180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (18))){
var inst_14550 = (state_14625[(2)]);
var state_14625__$1 = state_14625;
var statearr_14748_16181 = state_14625__$1;
(statearr_14748_16181[(2)] = inst_14550);

(statearr_14748_16181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (42))){
var state_14625__$1 = state_14625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14625__$1,(45),dchan);
} else {
if((state_val_14626 === (37))){
var inst_14491 = (state_14625[(9)]);
var inst_14594 = (state_14625[(22)]);
var inst_14585 = (state_14625[(23)]);
var inst_14594__$1 = cljs.core.first(inst_14585);
var inst_14595 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14594__$1,inst_14491,done);
var state_14625__$1 = (function (){var statearr_14749 = state_14625;
(statearr_14749[(22)] = inst_14594__$1);

return statearr_14749;
})();
if(cljs.core.truth_(inst_14595)){
var statearr_14750_16182 = state_14625__$1;
(statearr_14750_16182[(1)] = (39));

} else {
var statearr_14752_16183 = state_14625__$1;
(statearr_14752_16183[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14626 === (8))){
var inst_14503 = (state_14625[(13)]);
var inst_14502 = (state_14625[(14)]);
var inst_14505 = (inst_14503 < inst_14502);
var inst_14506 = inst_14505;
var state_14625__$1 = state_14625;
if(cljs.core.truth_(inst_14506)){
var statearr_14754_16184 = state_14625__$1;
(statearr_14754_16184[(1)] = (10));

} else {
var statearr_14755_16185 = state_14625__$1;
(statearr_14755_16185[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13616__auto__ = null;
var cljs$core$async$mult_$_state_machine__13616__auto____0 = (function (){
var statearr_14756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14756[(0)] = cljs$core$async$mult_$_state_machine__13616__auto__);

(statearr_14756[(1)] = (1));

return statearr_14756;
});
var cljs$core$async$mult_$_state_machine__13616__auto____1 = (function (state_14625){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14625);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14757){var ex__13619__auto__ = e14757;
var statearr_14758_16186 = state_14625;
(statearr_14758_16186[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14625[(4)]))){
var statearr_14762_16187 = state_14625;
(statearr_14762_16187[(1)] = cljs.core.first((state_14625[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16188 = state_14625;
state_14625 = G__16188;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13616__auto__ = function(state_14625){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13616__auto____1.call(this,state_14625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13616__auto____0;
cljs$core$async$mult_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13616__auto____1;
return cljs$core$async$mult_$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14766 = f__13734__auto__();
(statearr_14766[(6)] = c__13733__auto___16126);

return statearr_14766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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
var G__14768 = arguments.length;
switch (G__14768) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_16190 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16190(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16191 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16191(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16192 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16192(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16193 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16193(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16194 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16194(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16195 = arguments.length;
var i__5770__auto___16196 = (0);
while(true){
if((i__5770__auto___16196 < len__5769__auto___16195)){
args__5775__auto__.push((arguments[i__5770__auto___16196]));

var G__16197 = (i__5770__auto___16196 + (1));
i__5770__auto___16196 = G__16197;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14812){
var map__14813 = p__14812;
var map__14813__$1 = cljs.core.__destructure_map(map__14813);
var opts = map__14813__$1;
var statearr_14814_16198 = state;
(statearr_14814_16198[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14815_16199 = state;
(statearr_14815_16199[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14818_16201 = state;
(statearr_14818_16201[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14807){
var G__14808 = cljs.core.first(seq14807);
var seq14807__$1 = cljs.core.next(seq14807);
var G__14809 = cljs.core.first(seq14807__$1);
var seq14807__$2 = cljs.core.next(seq14807__$1);
var G__14810 = cljs.core.first(seq14807__$2);
var seq14807__$3 = cljs.core.next(seq14807__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14808,G__14809,G__14810,seq14807__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14832 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14833){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14833 = meta14833;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14834,meta14833__$1){
var self__ = this;
var _14834__$1 = this;
return (new cljs.core.async.t_cljs$core$async14832(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14833__$1));
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14834){
var self__ = this;
var _14834__$1 = this;
return self__.meta14833;
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14832.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14832.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14833","meta14833",-873740119,null)], null);
}));

(cljs.core.async.t_cljs$core$async14832.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14832.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14832");

(cljs.core.async.t_cljs$core$async14832.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14832");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14832.
 */
cljs.core.async.__GT_t_cljs$core$async14832 = (function cljs$core$async$__GT_t_cljs$core$async14832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14833){
return (new cljs.core.async.t_cljs$core$async14832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14833));
});


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
var m = (new cljs.core.async.t_cljs$core$async14832(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13733__auto___16243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_14921){
var state_val_14922 = (state_14921[(1)]);
if((state_val_14922 === (7))){
var inst_14879 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
if(cljs.core.truth_(inst_14879)){
var statearr_14925_16244 = state_14921__$1;
(statearr_14925_16244[(1)] = (8));

} else {
var statearr_14926_16245 = state_14921__$1;
(statearr_14926_16245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (20))){
var inst_14872 = (state_14921[(7)]);
var state_14921__$1 = state_14921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14921__$1,(23),out,inst_14872);
} else {
if((state_val_14922 === (1))){
var inst_14855 = calc_state();
var inst_14856 = cljs.core.__destructure_map(inst_14855);
var inst_14857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14856,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14856,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14856,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14860 = inst_14855;
var state_14921__$1 = (function (){var statearr_14928 = state_14921;
(statearr_14928[(8)] = inst_14858);

(statearr_14928[(9)] = inst_14857);

(statearr_14928[(10)] = inst_14860);

(statearr_14928[(11)] = inst_14859);

return statearr_14928;
})();
var statearr_14929_16246 = state_14921__$1;
(statearr_14929_16246[(2)] = null);

(statearr_14929_16246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (24))){
var inst_14863 = (state_14921[(12)]);
var inst_14860 = inst_14863;
var state_14921__$1 = (function (){var statearr_14931 = state_14921;
(statearr_14931[(10)] = inst_14860);

return statearr_14931;
})();
var statearr_14932_16247 = state_14921__$1;
(statearr_14932_16247[(2)] = null);

(statearr_14932_16247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (4))){
var inst_14872 = (state_14921[(7)]);
var inst_14874 = (state_14921[(13)]);
var inst_14871 = (state_14921[(2)]);
var inst_14872__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14871,(0),null);
var inst_14873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14871,(1),null);
var inst_14874__$1 = (inst_14872__$1 == null);
var state_14921__$1 = (function (){var statearr_14933 = state_14921;
(statearr_14933[(7)] = inst_14872__$1);

(statearr_14933[(14)] = inst_14873);

(statearr_14933[(13)] = inst_14874__$1);

return statearr_14933;
})();
if(cljs.core.truth_(inst_14874__$1)){
var statearr_14934_16248 = state_14921__$1;
(statearr_14934_16248[(1)] = (5));

} else {
var statearr_14935_16249 = state_14921__$1;
(statearr_14935_16249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (15))){
var inst_14864 = (state_14921[(15)]);
var inst_14894 = (state_14921[(16)]);
var inst_14894__$1 = cljs.core.empty_QMARK_(inst_14864);
var state_14921__$1 = (function (){var statearr_14936 = state_14921;
(statearr_14936[(16)] = inst_14894__$1);

return statearr_14936;
})();
if(inst_14894__$1){
var statearr_14937_16250 = state_14921__$1;
(statearr_14937_16250[(1)] = (17));

} else {
var statearr_14938_16251 = state_14921__$1;
(statearr_14938_16251[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (21))){
var inst_14863 = (state_14921[(12)]);
var inst_14860 = inst_14863;
var state_14921__$1 = (function (){var statearr_14939 = state_14921;
(statearr_14939[(10)] = inst_14860);

return statearr_14939;
})();
var statearr_14940_16252 = state_14921__$1;
(statearr_14940_16252[(2)] = null);

(statearr_14940_16252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (13))){
var inst_14886 = (state_14921[(2)]);
var inst_14887 = calc_state();
var inst_14860 = inst_14887;
var state_14921__$1 = (function (){var statearr_14941 = state_14921;
(statearr_14941[(17)] = inst_14886);

(statearr_14941[(10)] = inst_14860);

return statearr_14941;
})();
var statearr_14942_16253 = state_14921__$1;
(statearr_14942_16253[(2)] = null);

(statearr_14942_16253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (22))){
var inst_14915 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
var statearr_14943_16254 = state_14921__$1;
(statearr_14943_16254[(2)] = inst_14915);

(statearr_14943_16254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (6))){
var inst_14873 = (state_14921[(14)]);
var inst_14877 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14873,change);
var state_14921__$1 = state_14921;
var statearr_14944_16255 = state_14921__$1;
(statearr_14944_16255[(2)] = inst_14877);

(statearr_14944_16255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (25))){
var state_14921__$1 = state_14921;
var statearr_14946_16256 = state_14921__$1;
(statearr_14946_16256[(2)] = null);

(statearr_14946_16256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (17))){
var inst_14865 = (state_14921[(18)]);
var inst_14873 = (state_14921[(14)]);
var inst_14896 = (inst_14865.cljs$core$IFn$_invoke$arity$1 ? inst_14865.cljs$core$IFn$_invoke$arity$1(inst_14873) : inst_14865.call(null,inst_14873));
var inst_14897 = cljs.core.not(inst_14896);
var state_14921__$1 = state_14921;
var statearr_14948_16257 = state_14921__$1;
(statearr_14948_16257[(2)] = inst_14897);

(statearr_14948_16257[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (3))){
var inst_14919 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14921__$1,inst_14919);
} else {
if((state_val_14922 === (12))){
var state_14921__$1 = state_14921;
var statearr_14949_16258 = state_14921__$1;
(statearr_14949_16258[(2)] = null);

(statearr_14949_16258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (2))){
var inst_14860 = (state_14921[(10)]);
var inst_14863 = (state_14921[(12)]);
var inst_14863__$1 = cljs.core.__destructure_map(inst_14860);
var inst_14864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14863__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14863__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14863__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14921__$1 = (function (){var statearr_14950 = state_14921;
(statearr_14950[(15)] = inst_14864);

(statearr_14950[(18)] = inst_14865);

(statearr_14950[(12)] = inst_14863__$1);

return statearr_14950;
})();
return cljs.core.async.ioc_alts_BANG_(state_14921__$1,(4),inst_14866);
} else {
if((state_val_14922 === (23))){
var inst_14905 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
if(cljs.core.truth_(inst_14905)){
var statearr_14951_16259 = state_14921__$1;
(statearr_14951_16259[(1)] = (24));

} else {
var statearr_14952_16260 = state_14921__$1;
(statearr_14952_16260[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (19))){
var inst_14900 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
var statearr_14955_16261 = state_14921__$1;
(statearr_14955_16261[(2)] = inst_14900);

(statearr_14955_16261[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (11))){
var inst_14873 = (state_14921[(14)]);
var inst_14883 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14873);
var state_14921__$1 = state_14921;
var statearr_14956_16262 = state_14921__$1;
(statearr_14956_16262[(2)] = inst_14883);

(statearr_14956_16262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (9))){
var inst_14864 = (state_14921[(15)]);
var inst_14873 = (state_14921[(14)]);
var inst_14890 = (state_14921[(19)]);
var inst_14890__$1 = (inst_14864.cljs$core$IFn$_invoke$arity$1 ? inst_14864.cljs$core$IFn$_invoke$arity$1(inst_14873) : inst_14864.call(null,inst_14873));
var state_14921__$1 = (function (){var statearr_14957 = state_14921;
(statearr_14957[(19)] = inst_14890__$1);

return statearr_14957;
})();
if(cljs.core.truth_(inst_14890__$1)){
var statearr_14958_16263 = state_14921__$1;
(statearr_14958_16263[(1)] = (14));

} else {
var statearr_14959_16264 = state_14921__$1;
(statearr_14959_16264[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (5))){
var inst_14874 = (state_14921[(13)]);
var state_14921__$1 = state_14921;
var statearr_14960_16265 = state_14921__$1;
(statearr_14960_16265[(2)] = inst_14874);

(statearr_14960_16265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (14))){
var inst_14890 = (state_14921[(19)]);
var state_14921__$1 = state_14921;
var statearr_14961_16266 = state_14921__$1;
(statearr_14961_16266[(2)] = inst_14890);

(statearr_14961_16266[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (26))){
var inst_14911 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
var statearr_14962_16267 = state_14921__$1;
(statearr_14962_16267[(2)] = inst_14911);

(statearr_14962_16267[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (16))){
var inst_14902 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
if(cljs.core.truth_(inst_14902)){
var statearr_14963_16268 = state_14921__$1;
(statearr_14963_16268[(1)] = (20));

} else {
var statearr_14964_16269 = state_14921__$1;
(statearr_14964_16269[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (10))){
var inst_14917 = (state_14921[(2)]);
var state_14921__$1 = state_14921;
var statearr_14965_16270 = state_14921__$1;
(statearr_14965_16270[(2)] = inst_14917);

(statearr_14965_16270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (18))){
var inst_14894 = (state_14921[(16)]);
var state_14921__$1 = state_14921;
var statearr_14967_16271 = state_14921__$1;
(statearr_14967_16271[(2)] = inst_14894);

(statearr_14967_16271[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14922 === (8))){
var inst_14872 = (state_14921[(7)]);
var inst_14881 = (inst_14872 == null);
var state_14921__$1 = state_14921;
if(cljs.core.truth_(inst_14881)){
var statearr_14969_16272 = state_14921__$1;
(statearr_14969_16272[(1)] = (11));

} else {
var statearr_14970_16273 = state_14921__$1;
(statearr_14970_16273[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13616__auto__ = null;
var cljs$core$async$mix_$_state_machine__13616__auto____0 = (function (){
var statearr_14971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14971[(0)] = cljs$core$async$mix_$_state_machine__13616__auto__);

(statearr_14971[(1)] = (1));

return statearr_14971;
});
var cljs$core$async$mix_$_state_machine__13616__auto____1 = (function (state_14921){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_14921);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e14974){var ex__13619__auto__ = e14974;
var statearr_14975_16275 = state_14921;
(statearr_14975_16275[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_14921[(4)]))){
var statearr_14976_16276 = state_14921;
(statearr_14976_16276[(1)] = cljs.core.first((state_14921[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16277 = state_14921;
state_14921 = G__16277;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13616__auto__ = function(state_14921){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13616__auto____1.call(this,state_14921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13616__auto____0;
cljs$core$async$mix_$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13616__auto____1;
return cljs$core$async$mix_$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_14977 = f__13734__auto__();
(statearr_14977[(6)] = c__13733__auto___16243);

return statearr_14977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_16282 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16282(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16283 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16283(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16284 = (function() {
var G__16285 = null;
var G__16285__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16285__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16285 = function(p,v){
switch(arguments.length){
case 1:
return G__16285__1.call(this,p);
case 2:
return G__16285__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16285.cljs$core$IFn$_invoke$arity$1 = G__16285__1;
G__16285.cljs$core$IFn$_invoke$arity$2 = G__16285__2;
return G__16285;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14986 = arguments.length;
switch (G__14986) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16284(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16284(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15002 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15003){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15003 = meta15003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15004,meta15003__$1){
var self__ = this;
var _15004__$1 = this;
return (new cljs.core.async.t_cljs$core$async15002(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15003__$1));
}));

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15004){
var self__ = this;
var _15004__$1 = this;
return self__.meta15003;
}));

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15002.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15003","meta15003",102252254,null)], null);
}));

(cljs.core.async.t_cljs$core$async15002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15002");

(cljs.core.async.t_cljs$core$async15002.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15002.
 */
cljs.core.async.__GT_t_cljs$core$async15002 = (function cljs$core$async$__GT_t_cljs$core$async15002(ch,topic_fn,buf_fn,mults,ensure_mult,meta15003){
return (new cljs.core.async.t_cljs$core$async15002(ch,topic_fn,buf_fn,mults,ensure_mult,meta15003));
});


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
var G__14994 = arguments.length;
switch (G__14994) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14988_SHARP_){
if(cljs.core.truth_((p1__14988_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14988_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14988_SHARP_.call(null,topic)))){
return p1__14988_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14988_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15002(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13733__auto___16292 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15108){
var state_val_15109 = (state_15108[(1)]);
if((state_val_15109 === (7))){
var inst_15104 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15110_16293 = state_15108__$1;
(statearr_15110_16293[(2)] = inst_15104);

(statearr_15110_16293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (20))){
var state_15108__$1 = state_15108;
var statearr_15111_16294 = state_15108__$1;
(statearr_15111_16294[(2)] = null);

(statearr_15111_16294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (1))){
var state_15108__$1 = state_15108;
var statearr_15113_16295 = state_15108__$1;
(statearr_15113_16295[(2)] = null);

(statearr_15113_16295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (24))){
var inst_15087 = (state_15108[(7)]);
var inst_15096 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15087);
var state_15108__$1 = state_15108;
var statearr_15116_16296 = state_15108__$1;
(statearr_15116_16296[(2)] = inst_15096);

(statearr_15116_16296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (4))){
var inst_15029 = (state_15108[(8)]);
var inst_15029__$1 = (state_15108[(2)]);
var inst_15030 = (inst_15029__$1 == null);
var state_15108__$1 = (function (){var statearr_15121 = state_15108;
(statearr_15121[(8)] = inst_15029__$1);

return statearr_15121;
})();
if(cljs.core.truth_(inst_15030)){
var statearr_15126_16297 = state_15108__$1;
(statearr_15126_16297[(1)] = (5));

} else {
var statearr_15127_16298 = state_15108__$1;
(statearr_15127_16298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (15))){
var inst_15081 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15132_16299 = state_15108__$1;
(statearr_15132_16299[(2)] = inst_15081);

(statearr_15132_16299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (21))){
var inst_15101 = (state_15108[(2)]);
var state_15108__$1 = (function (){var statearr_15133 = state_15108;
(statearr_15133[(9)] = inst_15101);

return statearr_15133;
})();
var statearr_15134_16300 = state_15108__$1;
(statearr_15134_16300[(2)] = null);

(statearr_15134_16300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (13))){
var inst_15058 = (state_15108[(10)]);
var inst_15063 = cljs.core.chunked_seq_QMARK_(inst_15058);
var state_15108__$1 = state_15108;
if(inst_15063){
var statearr_15135_16301 = state_15108__$1;
(statearr_15135_16301[(1)] = (16));

} else {
var statearr_15136_16302 = state_15108__$1;
(statearr_15136_16302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (22))){
var inst_15093 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15093)){
var statearr_15137_16303 = state_15108__$1;
(statearr_15137_16303[(1)] = (23));

} else {
var statearr_15138_16304 = state_15108__$1;
(statearr_15138_16304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (6))){
var inst_15087 = (state_15108[(7)]);
var inst_15029 = (state_15108[(8)]);
var inst_15089 = (state_15108[(11)]);
var inst_15087__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15029) : topic_fn.call(null,inst_15029));
var inst_15088 = cljs.core.deref(mults);
var inst_15089__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15088,inst_15087__$1);
var state_15108__$1 = (function (){var statearr_15142 = state_15108;
(statearr_15142[(7)] = inst_15087__$1);

(statearr_15142[(11)] = inst_15089__$1);

return statearr_15142;
})();
if(cljs.core.truth_(inst_15089__$1)){
var statearr_15143_16305 = state_15108__$1;
(statearr_15143_16305[(1)] = (19));

} else {
var statearr_15144_16306 = state_15108__$1;
(statearr_15144_16306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (25))){
var inst_15098 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15145_16307 = state_15108__$1;
(statearr_15145_16307[(2)] = inst_15098);

(statearr_15145_16307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (17))){
var inst_15058 = (state_15108[(10)]);
var inst_15072 = cljs.core.first(inst_15058);
var inst_15073 = cljs.core.async.muxch_STAR_(inst_15072);
var inst_15074 = cljs.core.async.close_BANG_(inst_15073);
var inst_15075 = cljs.core.next(inst_15058);
var inst_15039 = inst_15075;
var inst_15040 = null;
var inst_15041 = (0);
var inst_15042 = (0);
var state_15108__$1 = (function (){var statearr_15146 = state_15108;
(statearr_15146[(12)] = inst_15039);

(statearr_15146[(13)] = inst_15040);

(statearr_15146[(14)] = inst_15042);

(statearr_15146[(15)] = inst_15074);

(statearr_15146[(16)] = inst_15041);

return statearr_15146;
})();
var statearr_15147_16308 = state_15108__$1;
(statearr_15147_16308[(2)] = null);

(statearr_15147_16308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (3))){
var inst_15106 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15108__$1,inst_15106);
} else {
if((state_val_15109 === (12))){
var inst_15083 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15148_16309 = state_15108__$1;
(statearr_15148_16309[(2)] = inst_15083);

(statearr_15148_16309[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (2))){
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15108__$1,(4),ch);
} else {
if((state_val_15109 === (23))){
var state_15108__$1 = state_15108;
var statearr_15150_16310 = state_15108__$1;
(statearr_15150_16310[(2)] = null);

(statearr_15150_16310[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (19))){
var inst_15029 = (state_15108[(8)]);
var inst_15089 = (state_15108[(11)]);
var inst_15091 = cljs.core.async.muxch_STAR_(inst_15089);
var state_15108__$1 = state_15108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15108__$1,(22),inst_15091,inst_15029);
} else {
if((state_val_15109 === (11))){
var inst_15039 = (state_15108[(12)]);
var inst_15058 = (state_15108[(10)]);
var inst_15058__$1 = cljs.core.seq(inst_15039);
var state_15108__$1 = (function (){var statearr_15151 = state_15108;
(statearr_15151[(10)] = inst_15058__$1);

return statearr_15151;
})();
if(inst_15058__$1){
var statearr_15152_16311 = state_15108__$1;
(statearr_15152_16311[(1)] = (13));

} else {
var statearr_15153_16312 = state_15108__$1;
(statearr_15153_16312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (9))){
var inst_15085 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15154_16313 = state_15108__$1;
(statearr_15154_16313[(2)] = inst_15085);

(statearr_15154_16313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (5))){
var inst_15036 = cljs.core.deref(mults);
var inst_15037 = cljs.core.vals(inst_15036);
var inst_15038 = cljs.core.seq(inst_15037);
var inst_15039 = inst_15038;
var inst_15040 = null;
var inst_15041 = (0);
var inst_15042 = (0);
var state_15108__$1 = (function (){var statearr_15163 = state_15108;
(statearr_15163[(12)] = inst_15039);

(statearr_15163[(13)] = inst_15040);

(statearr_15163[(14)] = inst_15042);

(statearr_15163[(16)] = inst_15041);

return statearr_15163;
})();
var statearr_15168_16314 = state_15108__$1;
(statearr_15168_16314[(2)] = null);

(statearr_15168_16314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (14))){
var state_15108__$1 = state_15108;
var statearr_15172_16315 = state_15108__$1;
(statearr_15172_16315[(2)] = null);

(statearr_15172_16315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (16))){
var inst_15058 = (state_15108[(10)]);
var inst_15065 = cljs.core.chunk_first(inst_15058);
var inst_15068 = cljs.core.chunk_rest(inst_15058);
var inst_15069 = cljs.core.count(inst_15065);
var inst_15039 = inst_15068;
var inst_15040 = inst_15065;
var inst_15041 = inst_15069;
var inst_15042 = (0);
var state_15108__$1 = (function (){var statearr_15174 = state_15108;
(statearr_15174[(12)] = inst_15039);

(statearr_15174[(13)] = inst_15040);

(statearr_15174[(14)] = inst_15042);

(statearr_15174[(16)] = inst_15041);

return statearr_15174;
})();
var statearr_15178_16316 = state_15108__$1;
(statearr_15178_16316[(2)] = null);

(statearr_15178_16316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (10))){
var inst_15039 = (state_15108[(12)]);
var inst_15040 = (state_15108[(13)]);
var inst_15042 = (state_15108[(14)]);
var inst_15041 = (state_15108[(16)]);
var inst_15047 = cljs.core._nth(inst_15040,inst_15042);
var inst_15051 = cljs.core.async.muxch_STAR_(inst_15047);
var inst_15052 = cljs.core.async.close_BANG_(inst_15051);
var inst_15053 = (inst_15042 + (1));
var tmp15169 = inst_15039;
var tmp15170 = inst_15040;
var tmp15171 = inst_15041;
var inst_15039__$1 = tmp15169;
var inst_15040__$1 = tmp15170;
var inst_15041__$1 = tmp15171;
var inst_15042__$1 = inst_15053;
var state_15108__$1 = (function (){var statearr_15182 = state_15108;
(statearr_15182[(12)] = inst_15039__$1);

(statearr_15182[(13)] = inst_15040__$1);

(statearr_15182[(14)] = inst_15042__$1);

(statearr_15182[(17)] = inst_15052);

(statearr_15182[(16)] = inst_15041__$1);

return statearr_15182;
})();
var statearr_15186_16317 = state_15108__$1;
(statearr_15186_16317[(2)] = null);

(statearr_15186_16317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (18))){
var inst_15078 = (state_15108[(2)]);
var state_15108__$1 = state_15108;
var statearr_15187_16318 = state_15108__$1;
(statearr_15187_16318[(2)] = inst_15078);

(statearr_15187_16318[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15109 === (8))){
var inst_15042 = (state_15108[(14)]);
var inst_15041 = (state_15108[(16)]);
var inst_15044 = (inst_15042 < inst_15041);
var inst_15045 = inst_15044;
var state_15108__$1 = state_15108;
if(cljs.core.truth_(inst_15045)){
var statearr_15190_16319 = state_15108__$1;
(statearr_15190_16319[(1)] = (10));

} else {
var statearr_15193_16320 = state_15108__$1;
(statearr_15193_16320[(1)] = (11));

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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15196[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15196[(1)] = (1));

return statearr_15196;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15108){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15108);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15199){var ex__13619__auto__ = e15199;
var statearr_15200_16321 = state_15108;
(statearr_15200_16321[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15108[(4)]))){
var statearr_15201_16322 = state_15108;
(statearr_15201_16322[(1)] = cljs.core.first((state_15108[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16323 = state_15108;
state_15108 = G__16323;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15205 = f__13734__auto__();
(statearr_15205[(6)] = c__13733__auto___16292);

return statearr_15205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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
var G__15210 = arguments.length;
switch (G__15210) {
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
var G__15221 = arguments.length;
switch (G__15221) {
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
var G__15223 = arguments.length;
switch (G__15223) {
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
var c__13733__auto___16327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15266){
var state_val_15267 = (state_15266[(1)]);
if((state_val_15267 === (7))){
var state_15266__$1 = state_15266;
var statearr_15268_16328 = state_15266__$1;
(statearr_15268_16328[(2)] = null);

(statearr_15268_16328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (1))){
var state_15266__$1 = state_15266;
var statearr_15269_16329 = state_15266__$1;
(statearr_15269_16329[(2)] = null);

(statearr_15269_16329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (4))){
var inst_15227 = (state_15266[(7)]);
var inst_15226 = (state_15266[(8)]);
var inst_15229 = (inst_15227 < inst_15226);
var state_15266__$1 = state_15266;
if(cljs.core.truth_(inst_15229)){
var statearr_15270_16330 = state_15266__$1;
(statearr_15270_16330[(1)] = (6));

} else {
var statearr_15271_16331 = state_15266__$1;
(statearr_15271_16331[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (15))){
var inst_15252 = (state_15266[(9)]);
var inst_15257 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15252);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15266__$1,(17),out,inst_15257);
} else {
if((state_val_15267 === (13))){
var inst_15252 = (state_15266[(9)]);
var inst_15252__$1 = (state_15266[(2)]);
var inst_15253 = cljs.core.some(cljs.core.nil_QMARK_,inst_15252__$1);
var state_15266__$1 = (function (){var statearr_15272 = state_15266;
(statearr_15272[(9)] = inst_15252__$1);

return statearr_15272;
})();
if(cljs.core.truth_(inst_15253)){
var statearr_15273_16332 = state_15266__$1;
(statearr_15273_16332[(1)] = (14));

} else {
var statearr_15274_16333 = state_15266__$1;
(statearr_15274_16333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (6))){
var state_15266__$1 = state_15266;
var statearr_15275_16334 = state_15266__$1;
(statearr_15275_16334[(2)] = null);

(statearr_15275_16334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (17))){
var inst_15259 = (state_15266[(2)]);
var state_15266__$1 = (function (){var statearr_15277 = state_15266;
(statearr_15277[(10)] = inst_15259);

return statearr_15277;
})();
var statearr_15278_16335 = state_15266__$1;
(statearr_15278_16335[(2)] = null);

(statearr_15278_16335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (3))){
var inst_15264 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15266__$1,inst_15264);
} else {
if((state_val_15267 === (12))){
var _ = (function (){var statearr_15280 = state_15266;
(statearr_15280[(4)] = cljs.core.rest((state_15266[(4)])));

return statearr_15280;
})();
var state_15266__$1 = state_15266;
var ex15276 = (state_15266__$1[(2)]);
var statearr_15283_16336 = state_15266__$1;
(statearr_15283_16336[(5)] = ex15276);


if((ex15276 instanceof Object)){
var statearr_15284_16337 = state_15266__$1;
(statearr_15284_16337[(1)] = (11));

(statearr_15284_16337[(5)] = null);

} else {
throw ex15276;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (2))){
var inst_15225 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15226 = cnt;
var inst_15227 = (0);
var state_15266__$1 = (function (){var statearr_15286 = state_15266;
(statearr_15286[(11)] = inst_15225);

(statearr_15286[(7)] = inst_15227);

(statearr_15286[(8)] = inst_15226);

return statearr_15286;
})();
var statearr_15287_16338 = state_15266__$1;
(statearr_15287_16338[(2)] = null);

(statearr_15287_16338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (11))){
var inst_15231 = (state_15266[(2)]);
var inst_15232 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15266__$1 = (function (){var statearr_15288 = state_15266;
(statearr_15288[(12)] = inst_15231);

return statearr_15288;
})();
var statearr_15289_16339 = state_15266__$1;
(statearr_15289_16339[(2)] = inst_15232);

(statearr_15289_16339[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (9))){
var inst_15227 = (state_15266[(7)]);
var _ = (function (){var statearr_15290 = state_15266;
(statearr_15290[(4)] = cljs.core.cons((12),(state_15266[(4)])));

return statearr_15290;
})();
var inst_15238 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15227) : chs__$1.call(null,inst_15227));
var inst_15239 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15227) : done.call(null,inst_15227));
var inst_15240 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15238,inst_15239);
var ___$1 = (function (){var statearr_15291 = state_15266;
(statearr_15291[(4)] = cljs.core.rest((state_15266[(4)])));

return statearr_15291;
})();
var state_15266__$1 = state_15266;
var statearr_15292_16340 = state_15266__$1;
(statearr_15292_16340[(2)] = inst_15240);

(statearr_15292_16340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (5))){
var inst_15250 = (state_15266[(2)]);
var state_15266__$1 = (function (){var statearr_15294 = state_15266;
(statearr_15294[(13)] = inst_15250);

return statearr_15294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15266__$1,(13),dchan);
} else {
if((state_val_15267 === (14))){
var inst_15255 = cljs.core.async.close_BANG_(out);
var state_15266__$1 = state_15266;
var statearr_15297_16341 = state_15266__$1;
(statearr_15297_16341[(2)] = inst_15255);

(statearr_15297_16341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (16))){
var inst_15262 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15298_16342 = state_15266__$1;
(statearr_15298_16342[(2)] = inst_15262);

(statearr_15298_16342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (10))){
var inst_15227 = (state_15266[(7)]);
var inst_15243 = (state_15266[(2)]);
var inst_15244 = (inst_15227 + (1));
var inst_15227__$1 = inst_15244;
var state_15266__$1 = (function (){var statearr_15299 = state_15266;
(statearr_15299[(7)] = inst_15227__$1);

(statearr_15299[(14)] = inst_15243);

return statearr_15299;
})();
var statearr_15300_16343 = state_15266__$1;
(statearr_15300_16343[(2)] = null);

(statearr_15300_16343[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (8))){
var inst_15248 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15301_16344 = state_15266__$1;
(statearr_15301_16344[(2)] = inst_15248);

(statearr_15301_16344[(1)] = (5));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15302[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15302[(1)] = (1));

return statearr_15302;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15266){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15266);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15304){var ex__13619__auto__ = e15304;
var statearr_15305_16345 = state_15266;
(statearr_15305_16345[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15266[(4)]))){
var statearr_15307_16346 = state_15266;
(statearr_15307_16346[(1)] = cljs.core.first((state_15266[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16347 = state_15266;
state_15266 = G__16347;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15309 = f__13734__auto__();
(statearr_15309[(6)] = c__13733__auto___16327);

return statearr_15309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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
var G__15314 = arguments.length;
switch (G__15314) {
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
var c__13733__auto___16349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15349){
var state_val_15350 = (state_15349[(1)]);
if((state_val_15350 === (7))){
var inst_15328 = (state_15349[(7)]);
var inst_15329 = (state_15349[(8)]);
var inst_15328__$1 = (state_15349[(2)]);
var inst_15329__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15328__$1,(0),null);
var inst_15330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15328__$1,(1),null);
var inst_15331 = (inst_15329__$1 == null);
var state_15349__$1 = (function (){var statearr_15351 = state_15349;
(statearr_15351[(9)] = inst_15330);

(statearr_15351[(7)] = inst_15328__$1);

(statearr_15351[(8)] = inst_15329__$1);

return statearr_15351;
})();
if(cljs.core.truth_(inst_15331)){
var statearr_15352_16350 = state_15349__$1;
(statearr_15352_16350[(1)] = (8));

} else {
var statearr_15353_16351 = state_15349__$1;
(statearr_15353_16351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (1))){
var inst_15318 = cljs.core.vec(chs);
var inst_15319 = inst_15318;
var state_15349__$1 = (function (){var statearr_15354 = state_15349;
(statearr_15354[(10)] = inst_15319);

return statearr_15354;
})();
var statearr_15357_16352 = state_15349__$1;
(statearr_15357_16352[(2)] = null);

(statearr_15357_16352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (4))){
var inst_15319 = (state_15349[(10)]);
var state_15349__$1 = state_15349;
return cljs.core.async.ioc_alts_BANG_(state_15349__$1,(7),inst_15319);
} else {
if((state_val_15350 === (6))){
var inst_15345 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15360_16353 = state_15349__$1;
(statearr_15360_16353[(2)] = inst_15345);

(statearr_15360_16353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (3))){
var inst_15347 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15349__$1,inst_15347);
} else {
if((state_val_15350 === (2))){
var inst_15319 = (state_15349[(10)]);
var inst_15321 = cljs.core.count(inst_15319);
var inst_15322 = (inst_15321 > (0));
var state_15349__$1 = state_15349;
if(cljs.core.truth_(inst_15322)){
var statearr_15363_16354 = state_15349__$1;
(statearr_15363_16354[(1)] = (4));

} else {
var statearr_15364_16355 = state_15349__$1;
(statearr_15364_16355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (11))){
var inst_15319 = (state_15349[(10)]);
var inst_15338 = (state_15349[(2)]);
var tmp15362 = inst_15319;
var inst_15319__$1 = tmp15362;
var state_15349__$1 = (function (){var statearr_15366 = state_15349;
(statearr_15366[(10)] = inst_15319__$1);

(statearr_15366[(11)] = inst_15338);

return statearr_15366;
})();
var statearr_15367_16356 = state_15349__$1;
(statearr_15367_16356[(2)] = null);

(statearr_15367_16356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (9))){
var inst_15329 = (state_15349[(8)]);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15349__$1,(11),out,inst_15329);
} else {
if((state_val_15350 === (5))){
var inst_15343 = cljs.core.async.close_BANG_(out);
var state_15349__$1 = state_15349;
var statearr_15372_16358 = state_15349__$1;
(statearr_15372_16358[(2)] = inst_15343);

(statearr_15372_16358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (10))){
var inst_15341 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15374_16359 = state_15349__$1;
(statearr_15374_16359[(2)] = inst_15341);

(statearr_15374_16359[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (8))){
var inst_15330 = (state_15349[(9)]);
var inst_15319 = (state_15349[(10)]);
var inst_15328 = (state_15349[(7)]);
var inst_15329 = (state_15349[(8)]);
var inst_15333 = (function (){var cs = inst_15319;
var vec__15324 = inst_15328;
var v = inst_15329;
var c = inst_15330;
return (function (p1__15312_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15312_SHARP_);
});
})();
var inst_15334 = cljs.core.filterv(inst_15333,inst_15319);
var inst_15319__$1 = inst_15334;
var state_15349__$1 = (function (){var statearr_15382 = state_15349;
(statearr_15382[(10)] = inst_15319__$1);

return statearr_15382;
})();
var statearr_15387_16361 = state_15349__$1;
(statearr_15387_16361[(2)] = null);

(statearr_15387_16361[(1)] = (2));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15406 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15406[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15406[(1)] = (1));

return statearr_15406;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15349){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15349);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15414){var ex__13619__auto__ = e15414;
var statearr_15420_16389 = state_15349;
(statearr_15420_16389[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15349[(4)]))){
var statearr_15422_16390 = state_15349;
(statearr_15422_16390[(1)] = cljs.core.first((state_15349[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16391 = state_15349;
state_15349 = G__16391;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15428 = f__13734__auto__();
(statearr_15428[(6)] = c__13733__auto___16349);

return statearr_15428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
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
var G__15434 = arguments.length;
switch (G__15434) {
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
var c__13733__auto___16393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15465){
var state_val_15466 = (state_15465[(1)]);
if((state_val_15466 === (7))){
var inst_15443 = (state_15465[(7)]);
var inst_15443__$1 = (state_15465[(2)]);
var inst_15445 = (inst_15443__$1 == null);
var inst_15446 = cljs.core.not(inst_15445);
var state_15465__$1 = (function (){var statearr_15469 = state_15465;
(statearr_15469[(7)] = inst_15443__$1);

return statearr_15469;
})();
if(inst_15446){
var statearr_15470_16394 = state_15465__$1;
(statearr_15470_16394[(1)] = (8));

} else {
var statearr_15471_16395 = state_15465__$1;
(statearr_15471_16395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (1))){
var inst_15436 = (0);
var state_15465__$1 = (function (){var statearr_15472 = state_15465;
(statearr_15472[(8)] = inst_15436);

return statearr_15472;
})();
var statearr_15473_16396 = state_15465__$1;
(statearr_15473_16396[(2)] = null);

(statearr_15473_16396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (4))){
var state_15465__$1 = state_15465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15465__$1,(7),ch);
} else {
if((state_val_15466 === (6))){
var inst_15460 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
var statearr_15474_16397 = state_15465__$1;
(statearr_15474_16397[(2)] = inst_15460);

(statearr_15474_16397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (3))){
var inst_15462 = (state_15465[(2)]);
var inst_15463 = cljs.core.async.close_BANG_(out);
var state_15465__$1 = (function (){var statearr_15475 = state_15465;
(statearr_15475[(9)] = inst_15462);

return statearr_15475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15465__$1,inst_15463);
} else {
if((state_val_15466 === (2))){
var inst_15436 = (state_15465[(8)]);
var inst_15439 = (inst_15436 < n);
var state_15465__$1 = state_15465;
if(cljs.core.truth_(inst_15439)){
var statearr_15479_16398 = state_15465__$1;
(statearr_15479_16398[(1)] = (4));

} else {
var statearr_15480_16399 = state_15465__$1;
(statearr_15480_16399[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (11))){
var inst_15436 = (state_15465[(8)]);
var inst_15451 = (state_15465[(2)]);
var inst_15452 = (inst_15436 + (1));
var inst_15436__$1 = inst_15452;
var state_15465__$1 = (function (){var statearr_15482 = state_15465;
(statearr_15482[(10)] = inst_15451);

(statearr_15482[(8)] = inst_15436__$1);

return statearr_15482;
})();
var statearr_15483_16400 = state_15465__$1;
(statearr_15483_16400[(2)] = null);

(statearr_15483_16400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (9))){
var state_15465__$1 = state_15465;
var statearr_15484_16401 = state_15465__$1;
(statearr_15484_16401[(2)] = null);

(statearr_15484_16401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (5))){
var state_15465__$1 = state_15465;
var statearr_15485_16402 = state_15465__$1;
(statearr_15485_16402[(2)] = null);

(statearr_15485_16402[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (10))){
var inst_15456 = (state_15465[(2)]);
var state_15465__$1 = state_15465;
var statearr_15488_16403 = state_15465__$1;
(statearr_15488_16403[(2)] = inst_15456);

(statearr_15488_16403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15466 === (8))){
var inst_15443 = (state_15465[(7)]);
var state_15465__$1 = state_15465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15465__$1,(11),out,inst_15443);
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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15490[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15490[(1)] = (1));

return statearr_15490;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15465){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15465);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15492){var ex__13619__auto__ = e15492;
var statearr_15493_16404 = state_15465;
(statearr_15493_16404[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15465[(4)]))){
var statearr_15494_16405 = state_15465;
(statearr_15494_16405[(1)] = cljs.core.first((state_15465[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16406 = state_15465;
state_15465 = G__16406;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15497 = f__13734__auto__();
(statearr_15497[(6)] = c__13733__auto___16393);

return statearr_15497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15503 = (function (f,ch,meta15500,_,fn1,meta15504){
this.f = f;
this.ch = ch;
this.meta15500 = meta15500;
this._ = _;
this.fn1 = fn1;
this.meta15504 = meta15504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15505,meta15504__$1){
var self__ = this;
var _15505__$1 = this;
return (new cljs.core.async.t_cljs$core$async15503(self__.f,self__.ch,self__.meta15500,self__._,self__.fn1,meta15504__$1));
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15505){
var self__ = this;
var _15505__$1 = this;
return self__.meta15504;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15498_SHARP_){
var G__15508 = (((p1__15498_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15498_SHARP_) : self__.f.call(null,p1__15498_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15508) : f1.call(null,G__15508));
});
}));

(cljs.core.async.t_cljs$core$async15503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15500","meta15500",-20889557,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15499","cljs.core.async/t_cljs$core$async15499",2070490130,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15504","meta15504",-1029264029,null)], null);
}));

(cljs.core.async.t_cljs$core$async15503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15503");

(cljs.core.async.t_cljs$core$async15503.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15503.
 */
cljs.core.async.__GT_t_cljs$core$async15503 = (function cljs$core$async$__GT_t_cljs$core$async15503(f,ch,meta15500,_,fn1,meta15504){
return (new cljs.core.async.t_cljs$core$async15503(f,ch,meta15500,_,fn1,meta15504));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15499 = (function (f,ch,meta15500){
this.f = f;
this.ch = ch;
this.meta15500 = meta15500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15501,meta15500__$1){
var self__ = this;
var _15501__$1 = this;
return (new cljs.core.async.t_cljs$core$async15499(self__.f,self__.ch,meta15500__$1));
}));

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15501){
var self__ = this;
var _15501__$1 = this;
return self__.meta15500;
}));

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15503(self__.f,self__.ch,self__.meta15500,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15511 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15511) : self__.f.call(null,G__15511));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15500","meta15500",-20889557,null)], null);
}));

(cljs.core.async.t_cljs$core$async15499.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15499");

(cljs.core.async.t_cljs$core$async15499.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15499");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15499.
 */
cljs.core.async.__GT_t_cljs$core$async15499 = (function cljs$core$async$__GT_t_cljs$core$async15499(f,ch,meta15500){
return (new cljs.core.async.t_cljs$core$async15499(f,ch,meta15500));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15499(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15516 = (function (f,ch,meta15517){
this.f = f;
this.ch = ch;
this.meta15517 = meta15517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15518,meta15517__$1){
var self__ = this;
var _15518__$1 = this;
return (new cljs.core.async.t_cljs$core$async15516(self__.f,self__.ch,meta15517__$1));
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15518){
var self__ = this;
var _15518__$1 = this;
return self__.meta15517;
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15516.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15517","meta15517",1399869240,null)], null);
}));

(cljs.core.async.t_cljs$core$async15516.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15516");

(cljs.core.async.t_cljs$core$async15516.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15516");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15516.
 */
cljs.core.async.__GT_t_cljs$core$async15516 = (function cljs$core$async$__GT_t_cljs$core$async15516(f,ch,meta15517){
return (new cljs.core.async.t_cljs$core$async15516(f,ch,meta15517));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15516(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15523 = (function (p,ch,meta15524){
this.p = p;
this.ch = ch;
this.meta15524 = meta15524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15525,meta15524__$1){
var self__ = this;
var _15525__$1 = this;
return (new cljs.core.async.t_cljs$core$async15523(self__.p,self__.ch,meta15524__$1));
}));

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15525){
var self__ = this;
var _15525__$1 = this;
return self__.meta15524;
}));

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15524","meta15524",-673007126,null)], null);
}));

(cljs.core.async.t_cljs$core$async15523.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15523");

(cljs.core.async.t_cljs$core$async15523.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15523");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15523.
 */
cljs.core.async.__GT_t_cljs$core$async15523 = (function cljs$core$async$__GT_t_cljs$core$async15523(p,ch,meta15524){
return (new cljs.core.async.t_cljs$core$async15523(p,ch,meta15524));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15523(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15527 = arguments.length;
switch (G__15527) {
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
var c__13733__auto___16412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15548){
var state_val_15549 = (state_15548[(1)]);
if((state_val_15549 === (7))){
var inst_15544 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15550_16413 = state_15548__$1;
(statearr_15550_16413[(2)] = inst_15544);

(statearr_15550_16413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (1))){
var state_15548__$1 = state_15548;
var statearr_15551_16414 = state_15548__$1;
(statearr_15551_16414[(2)] = null);

(statearr_15551_16414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (4))){
var inst_15530 = (state_15548[(7)]);
var inst_15530__$1 = (state_15548[(2)]);
var inst_15531 = (inst_15530__$1 == null);
var state_15548__$1 = (function (){var statearr_15552 = state_15548;
(statearr_15552[(7)] = inst_15530__$1);

return statearr_15552;
})();
if(cljs.core.truth_(inst_15531)){
var statearr_15553_16419 = state_15548__$1;
(statearr_15553_16419[(1)] = (5));

} else {
var statearr_15554_16420 = state_15548__$1;
(statearr_15554_16420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (6))){
var inst_15530 = (state_15548[(7)]);
var inst_15535 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15530) : p.call(null,inst_15530));
var state_15548__$1 = state_15548;
if(cljs.core.truth_(inst_15535)){
var statearr_15555_16421 = state_15548__$1;
(statearr_15555_16421[(1)] = (8));

} else {
var statearr_15556_16422 = state_15548__$1;
(statearr_15556_16422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (3))){
var inst_15546 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15548__$1,inst_15546);
} else {
if((state_val_15549 === (2))){
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15548__$1,(4),ch);
} else {
if((state_val_15549 === (11))){
var inst_15538 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15557_16423 = state_15548__$1;
(statearr_15557_16423[(2)] = inst_15538);

(statearr_15557_16423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (9))){
var state_15548__$1 = state_15548;
var statearr_15558_16424 = state_15548__$1;
(statearr_15558_16424[(2)] = null);

(statearr_15558_16424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (5))){
var inst_15533 = cljs.core.async.close_BANG_(out);
var state_15548__$1 = state_15548;
var statearr_15559_16425 = state_15548__$1;
(statearr_15559_16425[(2)] = inst_15533);

(statearr_15559_16425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (10))){
var inst_15541 = (state_15548[(2)]);
var state_15548__$1 = (function (){var statearr_15560 = state_15548;
(statearr_15560[(8)] = inst_15541);

return statearr_15560;
})();
var statearr_15561_16426 = state_15548__$1;
(statearr_15561_16426[(2)] = null);

(statearr_15561_16426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15549 === (8))){
var inst_15530 = (state_15548[(7)]);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15548__$1,(11),out,inst_15530);
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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15562 = [null,null,null,null,null,null,null,null,null];
(statearr_15562[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15562[(1)] = (1));

return statearr_15562;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15548){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15548);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15563){var ex__13619__auto__ = e15563;
var statearr_15564_16427 = state_15548;
(statearr_15564_16427[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15548[(4)]))){
var statearr_15565_16429 = state_15548;
(statearr_15565_16429[(1)] = cljs.core.first((state_15548[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16430 = state_15548;
state_15548 = G__16430;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15566 = f__13734__auto__();
(statearr_15566[(6)] = c__13733__auto___16412);

return statearr_15566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15568 = arguments.length;
switch (G__15568) {
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
var c__13733__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15630){
var state_val_15631 = (state_15630[(1)]);
if((state_val_15631 === (7))){
var inst_15626 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15632_16432 = state_15630__$1;
(statearr_15632_16432[(2)] = inst_15626);

(statearr_15632_16432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (20))){
var inst_15596 = (state_15630[(7)]);
var inst_15607 = (state_15630[(2)]);
var inst_15608 = cljs.core.next(inst_15596);
var inst_15582 = inst_15608;
var inst_15583 = null;
var inst_15584 = (0);
var inst_15585 = (0);
var state_15630__$1 = (function (){var statearr_15633 = state_15630;
(statearr_15633[(8)] = inst_15585);

(statearr_15633[(9)] = inst_15584);

(statearr_15633[(10)] = inst_15607);

(statearr_15633[(11)] = inst_15583);

(statearr_15633[(12)] = inst_15582);

return statearr_15633;
})();
var statearr_15634_16433 = state_15630__$1;
(statearr_15634_16433[(2)] = null);

(statearr_15634_16433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (1))){
var state_15630__$1 = state_15630;
var statearr_15635_16435 = state_15630__$1;
(statearr_15635_16435[(2)] = null);

(statearr_15635_16435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (4))){
var inst_15571 = (state_15630[(13)]);
var inst_15571__$1 = (state_15630[(2)]);
var inst_15572 = (inst_15571__$1 == null);
var state_15630__$1 = (function (){var statearr_15636 = state_15630;
(statearr_15636[(13)] = inst_15571__$1);

return statearr_15636;
})();
if(cljs.core.truth_(inst_15572)){
var statearr_15637_16436 = state_15630__$1;
(statearr_15637_16436[(1)] = (5));

} else {
var statearr_15638_16437 = state_15630__$1;
(statearr_15638_16437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (15))){
var state_15630__$1 = state_15630;
var statearr_15642_16438 = state_15630__$1;
(statearr_15642_16438[(2)] = null);

(statearr_15642_16438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (21))){
var state_15630__$1 = state_15630;
var statearr_15643_16439 = state_15630__$1;
(statearr_15643_16439[(2)] = null);

(statearr_15643_16439[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (13))){
var inst_15585 = (state_15630[(8)]);
var inst_15584 = (state_15630[(9)]);
var inst_15583 = (state_15630[(11)]);
var inst_15582 = (state_15630[(12)]);
var inst_15592 = (state_15630[(2)]);
var inst_15593 = (inst_15585 + (1));
var tmp15639 = inst_15584;
var tmp15640 = inst_15583;
var tmp15641 = inst_15582;
var inst_15582__$1 = tmp15641;
var inst_15583__$1 = tmp15640;
var inst_15584__$1 = tmp15639;
var inst_15585__$1 = inst_15593;
var state_15630__$1 = (function (){var statearr_15644 = state_15630;
(statearr_15644[(8)] = inst_15585__$1);

(statearr_15644[(9)] = inst_15584__$1);

(statearr_15644[(11)] = inst_15583__$1);

(statearr_15644[(14)] = inst_15592);

(statearr_15644[(12)] = inst_15582__$1);

return statearr_15644;
})();
var statearr_15645_16444 = state_15630__$1;
(statearr_15645_16444[(2)] = null);

(statearr_15645_16444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (22))){
var state_15630__$1 = state_15630;
var statearr_15646_16445 = state_15630__$1;
(statearr_15646_16445[(2)] = null);

(statearr_15646_16445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (6))){
var inst_15571 = (state_15630[(13)]);
var inst_15580 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15571) : f.call(null,inst_15571));
var inst_15581 = cljs.core.seq(inst_15580);
var inst_15582 = inst_15581;
var inst_15583 = null;
var inst_15584 = (0);
var inst_15585 = (0);
var state_15630__$1 = (function (){var statearr_15647 = state_15630;
(statearr_15647[(8)] = inst_15585);

(statearr_15647[(9)] = inst_15584);

(statearr_15647[(11)] = inst_15583);

(statearr_15647[(12)] = inst_15582);

return statearr_15647;
})();
var statearr_15648_16446 = state_15630__$1;
(statearr_15648_16446[(2)] = null);

(statearr_15648_16446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (17))){
var inst_15596 = (state_15630[(7)]);
var inst_15600 = cljs.core.chunk_first(inst_15596);
var inst_15601 = cljs.core.chunk_rest(inst_15596);
var inst_15602 = cljs.core.count(inst_15600);
var inst_15582 = inst_15601;
var inst_15583 = inst_15600;
var inst_15584 = inst_15602;
var inst_15585 = (0);
var state_15630__$1 = (function (){var statearr_15649 = state_15630;
(statearr_15649[(8)] = inst_15585);

(statearr_15649[(9)] = inst_15584);

(statearr_15649[(11)] = inst_15583);

(statearr_15649[(12)] = inst_15582);

return statearr_15649;
})();
var statearr_15650_16447 = state_15630__$1;
(statearr_15650_16447[(2)] = null);

(statearr_15650_16447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (3))){
var inst_15628 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15630__$1,inst_15628);
} else {
if((state_val_15631 === (12))){
var inst_15616 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15652_16448 = state_15630__$1;
(statearr_15652_16448[(2)] = inst_15616);

(statearr_15652_16448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (2))){
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15630__$1,(4),in$);
} else {
if((state_val_15631 === (23))){
var inst_15624 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15653_16449 = state_15630__$1;
(statearr_15653_16449[(2)] = inst_15624);

(statearr_15653_16449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (19))){
var inst_15611 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15654_16450 = state_15630__$1;
(statearr_15654_16450[(2)] = inst_15611);

(statearr_15654_16450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (11))){
var inst_15596 = (state_15630[(7)]);
var inst_15582 = (state_15630[(12)]);
var inst_15596__$1 = cljs.core.seq(inst_15582);
var state_15630__$1 = (function (){var statearr_15655 = state_15630;
(statearr_15655[(7)] = inst_15596__$1);

return statearr_15655;
})();
if(inst_15596__$1){
var statearr_15656_16451 = state_15630__$1;
(statearr_15656_16451[(1)] = (14));

} else {
var statearr_15657_16452 = state_15630__$1;
(statearr_15657_16452[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (9))){
var inst_15618 = (state_15630[(2)]);
var inst_15619 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15630__$1 = (function (){var statearr_15658 = state_15630;
(statearr_15658[(15)] = inst_15618);

return statearr_15658;
})();
if(cljs.core.truth_(inst_15619)){
var statearr_15659_16453 = state_15630__$1;
(statearr_15659_16453[(1)] = (21));

} else {
var statearr_15660_16454 = state_15630__$1;
(statearr_15660_16454[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (5))){
var inst_15574 = cljs.core.async.close_BANG_(out);
var state_15630__$1 = state_15630;
var statearr_15661_16455 = state_15630__$1;
(statearr_15661_16455[(2)] = inst_15574);

(statearr_15661_16455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (14))){
var inst_15596 = (state_15630[(7)]);
var inst_15598 = cljs.core.chunked_seq_QMARK_(inst_15596);
var state_15630__$1 = state_15630;
if(inst_15598){
var statearr_15663_16456 = state_15630__$1;
(statearr_15663_16456[(1)] = (17));

} else {
var statearr_15664_16457 = state_15630__$1;
(statearr_15664_16457[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (16))){
var inst_15614 = (state_15630[(2)]);
var state_15630__$1 = state_15630;
var statearr_15665_16458 = state_15630__$1;
(statearr_15665_16458[(2)] = inst_15614);

(statearr_15665_16458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15631 === (10))){
var inst_15585 = (state_15630[(8)]);
var inst_15583 = (state_15630[(11)]);
var inst_15590 = cljs.core._nth(inst_15583,inst_15585);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15630__$1,(13),out,inst_15590);
} else {
if((state_val_15631 === (18))){
var inst_15596 = (state_15630[(7)]);
var inst_15605 = cljs.core.first(inst_15596);
var state_15630__$1 = state_15630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15630__$1,(20),out,inst_15605);
} else {
if((state_val_15631 === (8))){
var inst_15585 = (state_15630[(8)]);
var inst_15584 = (state_15630[(9)]);
var inst_15587 = (inst_15585 < inst_15584);
var inst_15588 = inst_15587;
var state_15630__$1 = state_15630;
if(cljs.core.truth_(inst_15588)){
var statearr_15666_16459 = state_15630__$1;
(statearr_15666_16459[(1)] = (10));

} else {
var statearr_15667_16460 = state_15630__$1;
(statearr_15667_16460[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13616__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13616__auto____0 = (function (){
var statearr_15673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15673[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13616__auto__);

(statearr_15673[(1)] = (1));

return statearr_15673;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13616__auto____1 = (function (state_15630){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15630);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15675){var ex__13619__auto__ = e15675;
var statearr_15676_16461 = state_15630;
(statearr_15676_16461[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15630[(4)]))){
var statearr_15677_16462 = state_15630;
(statearr_15677_16462[(1)] = cljs.core.first((state_15630[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16463 = state_15630;
state_15630 = G__16463;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13616__auto__ = function(state_15630){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13616__auto____1.call(this,state_15630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13616__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13616__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15680 = f__13734__auto__();
(statearr_15680[(6)] = c__13733__auto__);

return statearr_15680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));

return c__13733__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15682 = arguments.length;
switch (G__15682) {
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
var G__15698 = arguments.length;
switch (G__15698) {
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
var G__15700 = arguments.length;
switch (G__15700) {
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
var c__13733__auto___16467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15727){
var state_val_15728 = (state_15727[(1)]);
if((state_val_15728 === (7))){
var inst_15722 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15729_16468 = state_15727__$1;
(statearr_15729_16468[(2)] = inst_15722);

(statearr_15729_16468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (1))){
var inst_15701 = null;
var state_15727__$1 = (function (){var statearr_15730 = state_15727;
(statearr_15730[(7)] = inst_15701);

return statearr_15730;
})();
var statearr_15731_16469 = state_15727__$1;
(statearr_15731_16469[(2)] = null);

(statearr_15731_16469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (4))){
var inst_15706 = (state_15727[(8)]);
var inst_15706__$1 = (state_15727[(2)]);
var inst_15707 = (inst_15706__$1 == null);
var inst_15708 = cljs.core.not(inst_15707);
var state_15727__$1 = (function (){var statearr_15733 = state_15727;
(statearr_15733[(8)] = inst_15706__$1);

return statearr_15733;
})();
if(inst_15708){
var statearr_15734_16470 = state_15727__$1;
(statearr_15734_16470[(1)] = (5));

} else {
var statearr_15735_16471 = state_15727__$1;
(statearr_15735_16471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (6))){
var state_15727__$1 = state_15727;
var statearr_15736_16472 = state_15727__$1;
(statearr_15736_16472[(2)] = null);

(statearr_15736_16472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (3))){
var inst_15724 = (state_15727[(2)]);
var inst_15725 = cljs.core.async.close_BANG_(out);
var state_15727__$1 = (function (){var statearr_15737 = state_15727;
(statearr_15737[(9)] = inst_15724);

return statearr_15737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15727__$1,inst_15725);
} else {
if((state_val_15728 === (2))){
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15727__$1,(4),ch);
} else {
if((state_val_15728 === (11))){
var inst_15706 = (state_15727[(8)]);
var inst_15716 = (state_15727[(2)]);
var inst_15701 = inst_15706;
var state_15727__$1 = (function (){var statearr_15738 = state_15727;
(statearr_15738[(7)] = inst_15701);

(statearr_15738[(10)] = inst_15716);

return statearr_15738;
})();
var statearr_15739_16473 = state_15727__$1;
(statearr_15739_16473[(2)] = null);

(statearr_15739_16473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (9))){
var inst_15706 = (state_15727[(8)]);
var state_15727__$1 = state_15727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15727__$1,(11),out,inst_15706);
} else {
if((state_val_15728 === (5))){
var inst_15701 = (state_15727[(7)]);
var inst_15706 = (state_15727[(8)]);
var inst_15711 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15706,inst_15701);
var state_15727__$1 = state_15727;
if(inst_15711){
var statearr_15742_16474 = state_15727__$1;
(statearr_15742_16474[(1)] = (8));

} else {
var statearr_15743_16475 = state_15727__$1;
(statearr_15743_16475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (10))){
var inst_15719 = (state_15727[(2)]);
var state_15727__$1 = state_15727;
var statearr_15744_16476 = state_15727__$1;
(statearr_15744_16476[(2)] = inst_15719);

(statearr_15744_16476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15728 === (8))){
var inst_15701 = (state_15727[(7)]);
var tmp15740 = inst_15701;
var inst_15701__$1 = tmp15740;
var state_15727__$1 = (function (){var statearr_15745 = state_15727;
(statearr_15745[(7)] = inst_15701__$1);

return statearr_15745;
})();
var statearr_15746_16477 = state_15727__$1;
(statearr_15746_16477[(2)] = null);

(statearr_15746_16477[(1)] = (2));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15747 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15747[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15747[(1)] = (1));

return statearr_15747;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15727){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15727);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15748){var ex__13619__auto__ = e15748;
var statearr_15749_16478 = state_15727;
(statearr_15749_16478[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15727[(4)]))){
var statearr_15750_16479 = state_15727;
(statearr_15750_16479[(1)] = cljs.core.first((state_15727[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16480 = state_15727;
state_15727 = G__16480;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15751 = f__13734__auto__();
(statearr_15751[(6)] = c__13733__auto___16467);

return statearr_15751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15753 = arguments.length;
switch (G__15753) {
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
var c__13733__auto___16482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15791){
var state_val_15792 = (state_15791[(1)]);
if((state_val_15792 === (7))){
var inst_15787 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15793_16483 = state_15791__$1;
(statearr_15793_16483[(2)] = inst_15787);

(statearr_15793_16483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (1))){
var inst_15754 = (new Array(n));
var inst_15755 = inst_15754;
var inst_15756 = (0);
var state_15791__$1 = (function (){var statearr_15794 = state_15791;
(statearr_15794[(7)] = inst_15756);

(statearr_15794[(8)] = inst_15755);

return statearr_15794;
})();
var statearr_15795_16484 = state_15791__$1;
(statearr_15795_16484[(2)] = null);

(statearr_15795_16484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (4))){
var inst_15759 = (state_15791[(9)]);
var inst_15759__$1 = (state_15791[(2)]);
var inst_15760 = (inst_15759__$1 == null);
var inst_15761 = cljs.core.not(inst_15760);
var state_15791__$1 = (function (){var statearr_15796 = state_15791;
(statearr_15796[(9)] = inst_15759__$1);

return statearr_15796;
})();
if(inst_15761){
var statearr_15797_16485 = state_15791__$1;
(statearr_15797_16485[(1)] = (5));

} else {
var statearr_15798_16486 = state_15791__$1;
(statearr_15798_16486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (15))){
var inst_15781 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15799_16487 = state_15791__$1;
(statearr_15799_16487[(2)] = inst_15781);

(statearr_15799_16487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (13))){
var state_15791__$1 = state_15791;
var statearr_15800_16488 = state_15791__$1;
(statearr_15800_16488[(2)] = null);

(statearr_15800_16488[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (6))){
var inst_15756 = (state_15791[(7)]);
var inst_15777 = (inst_15756 > (0));
var state_15791__$1 = state_15791;
if(cljs.core.truth_(inst_15777)){
var statearr_15801_16489 = state_15791__$1;
(statearr_15801_16489[(1)] = (12));

} else {
var statearr_15802_16490 = state_15791__$1;
(statearr_15802_16490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (3))){
var inst_15789 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15791__$1,inst_15789);
} else {
if((state_val_15792 === (12))){
var inst_15755 = (state_15791[(8)]);
var inst_15779 = cljs.core.vec(inst_15755);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15791__$1,(15),out,inst_15779);
} else {
if((state_val_15792 === (2))){
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15791__$1,(4),ch);
} else {
if((state_val_15792 === (11))){
var inst_15771 = (state_15791[(2)]);
var inst_15772 = (new Array(n));
var inst_15755 = inst_15772;
var inst_15756 = (0);
var state_15791__$1 = (function (){var statearr_15803 = state_15791;
(statearr_15803[(10)] = inst_15771);

(statearr_15803[(7)] = inst_15756);

(statearr_15803[(8)] = inst_15755);

return statearr_15803;
})();
var statearr_15804_16491 = state_15791__$1;
(statearr_15804_16491[(2)] = null);

(statearr_15804_16491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (9))){
var inst_15755 = (state_15791[(8)]);
var inst_15769 = cljs.core.vec(inst_15755);
var state_15791__$1 = state_15791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15791__$1,(11),out,inst_15769);
} else {
if((state_val_15792 === (5))){
var inst_15759 = (state_15791[(9)]);
var inst_15756 = (state_15791[(7)]);
var inst_15755 = (state_15791[(8)]);
var inst_15764 = (state_15791[(11)]);
var inst_15763 = (inst_15755[inst_15756] = inst_15759);
var inst_15764__$1 = (inst_15756 + (1));
var inst_15765 = (inst_15764__$1 < n);
var state_15791__$1 = (function (){var statearr_15805 = state_15791;
(statearr_15805[(12)] = inst_15763);

(statearr_15805[(11)] = inst_15764__$1);

return statearr_15805;
})();
if(cljs.core.truth_(inst_15765)){
var statearr_15806_16492 = state_15791__$1;
(statearr_15806_16492[(1)] = (8));

} else {
var statearr_15807_16493 = state_15791__$1;
(statearr_15807_16493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (14))){
var inst_15784 = (state_15791[(2)]);
var inst_15785 = cljs.core.async.close_BANG_(out);
var state_15791__$1 = (function (){var statearr_15809 = state_15791;
(statearr_15809[(13)] = inst_15784);

return statearr_15809;
})();
var statearr_15810_16494 = state_15791__$1;
(statearr_15810_16494[(2)] = inst_15785);

(statearr_15810_16494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (10))){
var inst_15775 = (state_15791[(2)]);
var state_15791__$1 = state_15791;
var statearr_15811_16495 = state_15791__$1;
(statearr_15811_16495[(2)] = inst_15775);

(statearr_15811_16495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15792 === (8))){
var inst_15755 = (state_15791[(8)]);
var inst_15764 = (state_15791[(11)]);
var tmp15808 = inst_15755;
var inst_15755__$1 = tmp15808;
var inst_15756 = inst_15764;
var state_15791__$1 = (function (){var statearr_15812 = state_15791;
(statearr_15812[(7)] = inst_15756);

(statearr_15812[(8)] = inst_15755__$1);

return statearr_15812;
})();
var statearr_15813_16496 = state_15791__$1;
(statearr_15813_16496[(2)] = null);

(statearr_15813_16496[(1)] = (2));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15814[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15814[(1)] = (1));

return statearr_15814;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15791){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15791);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15815){var ex__13619__auto__ = e15815;
var statearr_15816_16497 = state_15791;
(statearr_15816_16497[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15791[(4)]))){
var statearr_15817_16498 = state_15791;
(statearr_15817_16498[(1)] = cljs.core.first((state_15791[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16499 = state_15791;
state_15791 = G__16499;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15818 = f__13734__auto__();
(statearr_15818[(6)] = c__13733__auto___16482);

return statearr_15818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15820 = arguments.length;
switch (G__15820) {
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
var c__13733__auto___16501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_15865){
var state_val_15866 = (state_15865[(1)]);
if((state_val_15866 === (7))){
var inst_15861 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15867_16502 = state_15865__$1;
(statearr_15867_16502[(2)] = inst_15861);

(statearr_15867_16502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (1))){
var inst_15821 = [];
var inst_15822 = inst_15821;
var inst_15823 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15865__$1 = (function (){var statearr_15868 = state_15865;
(statearr_15868[(7)] = inst_15823);

(statearr_15868[(8)] = inst_15822);

return statearr_15868;
})();
var statearr_15869_16503 = state_15865__$1;
(statearr_15869_16503[(2)] = null);

(statearr_15869_16503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (4))){
var inst_15826 = (state_15865[(9)]);
var inst_15826__$1 = (state_15865[(2)]);
var inst_15827 = (inst_15826__$1 == null);
var inst_15828 = cljs.core.not(inst_15827);
var state_15865__$1 = (function (){var statearr_15870 = state_15865;
(statearr_15870[(9)] = inst_15826__$1);

return statearr_15870;
})();
if(inst_15828){
var statearr_15871_16504 = state_15865__$1;
(statearr_15871_16504[(1)] = (5));

} else {
var statearr_15872_16505 = state_15865__$1;
(statearr_15872_16505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (15))){
var inst_15822 = (state_15865[(8)]);
var inst_15853 = cljs.core.vec(inst_15822);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15865__$1,(18),out,inst_15853);
} else {
if((state_val_15866 === (13))){
var inst_15848 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15873_16506 = state_15865__$1;
(statearr_15873_16506[(2)] = inst_15848);

(statearr_15873_16506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (6))){
var inst_15822 = (state_15865[(8)]);
var inst_15850 = inst_15822.length;
var inst_15851 = (inst_15850 > (0));
var state_15865__$1 = state_15865;
if(cljs.core.truth_(inst_15851)){
var statearr_15874_16507 = state_15865__$1;
(statearr_15874_16507[(1)] = (15));

} else {
var statearr_15875_16508 = state_15865__$1;
(statearr_15875_16508[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (17))){
var inst_15858 = (state_15865[(2)]);
var inst_15859 = cljs.core.async.close_BANG_(out);
var state_15865__$1 = (function (){var statearr_15876 = state_15865;
(statearr_15876[(10)] = inst_15858);

return statearr_15876;
})();
var statearr_15877_16509 = state_15865__$1;
(statearr_15877_16509[(2)] = inst_15859);

(statearr_15877_16509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (3))){
var inst_15863 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15865__$1,inst_15863);
} else {
if((state_val_15866 === (12))){
var inst_15822 = (state_15865[(8)]);
var inst_15841 = cljs.core.vec(inst_15822);
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15865__$1,(14),out,inst_15841);
} else {
if((state_val_15866 === (2))){
var state_15865__$1 = state_15865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15865__$1,(4),ch);
} else {
if((state_val_15866 === (11))){
var inst_15830 = (state_15865[(11)]);
var inst_15826 = (state_15865[(9)]);
var inst_15822 = (state_15865[(8)]);
var inst_15838 = inst_15822.push(inst_15826);
var tmp15878 = inst_15822;
var inst_15822__$1 = tmp15878;
var inst_15823 = inst_15830;
var state_15865__$1 = (function (){var statearr_15879 = state_15865;
(statearr_15879[(12)] = inst_15838);

(statearr_15879[(7)] = inst_15823);

(statearr_15879[(8)] = inst_15822__$1);

return statearr_15879;
})();
var statearr_15880_16510 = state_15865__$1;
(statearr_15880_16510[(2)] = null);

(statearr_15880_16510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (9))){
var inst_15823 = (state_15865[(7)]);
var inst_15834 = cljs.core.keyword_identical_QMARK_(inst_15823,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15865__$1 = state_15865;
var statearr_15881_16511 = state_15865__$1;
(statearr_15881_16511[(2)] = inst_15834);

(statearr_15881_16511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (5))){
var inst_15831 = (state_15865[(13)]);
var inst_15830 = (state_15865[(11)]);
var inst_15826 = (state_15865[(9)]);
var inst_15823 = (state_15865[(7)]);
var inst_15830__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15826) : f.call(null,inst_15826));
var inst_15831__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15830__$1,inst_15823);
var state_15865__$1 = (function (){var statearr_15882 = state_15865;
(statearr_15882[(13)] = inst_15831__$1);

(statearr_15882[(11)] = inst_15830__$1);

return statearr_15882;
})();
if(inst_15831__$1){
var statearr_15883_16512 = state_15865__$1;
(statearr_15883_16512[(1)] = (8));

} else {
var statearr_15884_16513 = state_15865__$1;
(statearr_15884_16513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (14))){
var inst_15830 = (state_15865[(11)]);
var inst_15826 = (state_15865[(9)]);
var inst_15843 = (state_15865[(2)]);
var inst_15844 = [];
var inst_15845 = inst_15844.push(inst_15826);
var inst_15822 = inst_15844;
var inst_15823 = inst_15830;
var state_15865__$1 = (function (){var statearr_15885 = state_15865;
(statearr_15885[(14)] = inst_15845);

(statearr_15885[(7)] = inst_15823);

(statearr_15885[(15)] = inst_15843);

(statearr_15885[(8)] = inst_15822);

return statearr_15885;
})();
var statearr_15886_16514 = state_15865__$1;
(statearr_15886_16514[(2)] = null);

(statearr_15886_16514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (16))){
var state_15865__$1 = state_15865;
var statearr_15887_16515 = state_15865__$1;
(statearr_15887_16515[(2)] = null);

(statearr_15887_16515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (10))){
var inst_15836 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
if(cljs.core.truth_(inst_15836)){
var statearr_15888_16516 = state_15865__$1;
(statearr_15888_16516[(1)] = (11));

} else {
var statearr_15889_16517 = state_15865__$1;
(statearr_15889_16517[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (18))){
var inst_15855 = (state_15865[(2)]);
var state_15865__$1 = state_15865;
var statearr_15890_16518 = state_15865__$1;
(statearr_15890_16518[(2)] = inst_15855);

(statearr_15890_16518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15866 === (8))){
var inst_15831 = (state_15865[(13)]);
var state_15865__$1 = state_15865;
var statearr_15891_16519 = state_15865__$1;
(statearr_15891_16519[(2)] = inst_15831);

(statearr_15891_16519[(1)] = (10));


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
var cljs$core$async$state_machine__13616__auto__ = null;
var cljs$core$async$state_machine__13616__auto____0 = (function (){
var statearr_15892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15892[(0)] = cljs$core$async$state_machine__13616__auto__);

(statearr_15892[(1)] = (1));

return statearr_15892;
});
var cljs$core$async$state_machine__13616__auto____1 = (function (state_15865){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_15865);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e15893){var ex__13619__auto__ = e15893;
var statearr_15894_16520 = state_15865;
(statearr_15894_16520[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_15865[(4)]))){
var statearr_15895_16521 = state_15865;
(statearr_15895_16521[(1)] = cljs.core.first((state_15865[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16522 = state_15865;
state_15865 = G__16522;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
cljs$core$async$state_machine__13616__auto__ = function(state_15865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13616__auto____1.call(this,state_15865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13616__auto____0;
cljs$core$async$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13616__auto____1;
return cljs$core$async$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_15896 = f__13734__auto__();
(statearr_15896[(6)] = c__13733__auto___16501);

return statearr_15896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
