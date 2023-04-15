goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16622 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16622(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16623 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16623(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15926 = coll;
var G__15927 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15926,G__15927) : shadow.dom.lazy_native_coll_seq.call(null,G__15926,G__15927));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__15930 = arguments.length;
switch (G__15930) {
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
var G__15932 = arguments.length;
switch (G__15932) {
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
var G__15934 = arguments.length;
switch (G__15934) {
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
var G__15936 = arguments.length;
switch (G__15936) {
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
var G__15959 = arguments.length;
switch (G__15959) {
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
var G__15973 = arguments.length;
switch (G__15973) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15984){if((e15984 instanceof Object)){
var e = e15984;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15984;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15995 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15996 = null;
var count__15997 = (0);
var i__15998 = (0);
while(true){
if((i__15998 < count__15997)){
var el = chunk__15996.cljs$core$IIndexed$_nth$arity$2(null,i__15998);
var handler_16638__$1 = ((function (seq__15995,chunk__15996,count__15997,i__15998,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15995,chunk__15996,count__15997,i__15998,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16638__$1);


var G__16639 = seq__15995;
var G__16640 = chunk__15996;
var G__16641 = count__15997;
var G__16642 = (i__15998 + (1));
seq__15995 = G__16639;
chunk__15996 = G__16640;
count__15997 = G__16641;
i__15998 = G__16642;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15995);
if(temp__5804__auto__){
var seq__15995__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15995__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15995__$1);
var G__16643 = cljs.core.chunk_rest(seq__15995__$1);
var G__16644 = c__5568__auto__;
var G__16645 = cljs.core.count(c__5568__auto__);
var G__16646 = (0);
seq__15995 = G__16643;
chunk__15996 = G__16644;
count__15997 = G__16645;
i__15998 = G__16646;
continue;
} else {
var el = cljs.core.first(seq__15995__$1);
var handler_16647__$1 = ((function (seq__15995,chunk__15996,count__15997,i__15998,el,seq__15995__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15995,chunk__15996,count__15997,i__15998,el,seq__15995__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16647__$1);


var G__16648 = cljs.core.next(seq__15995__$1);
var G__16649 = null;
var G__16650 = (0);
var G__16651 = (0);
seq__15995 = G__16648;
chunk__15996 = G__16649;
count__15997 = G__16650;
i__15998 = G__16651;
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
var G__16015 = arguments.length;
switch (G__16015) {
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
var seq__16021 = cljs.core.seq(events);
var chunk__16022 = null;
var count__16023 = (0);
var i__16024 = (0);
while(true){
if((i__16024 < count__16023)){
var vec__16077 = chunk__16022.cljs$core$IIndexed$_nth$arity$2(null,i__16024);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16077,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16077,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16654 = seq__16021;
var G__16655 = chunk__16022;
var G__16656 = count__16023;
var G__16657 = (i__16024 + (1));
seq__16021 = G__16654;
chunk__16022 = G__16655;
count__16023 = G__16656;
i__16024 = G__16657;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16021);
if(temp__5804__auto__){
var seq__16021__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16021__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16021__$1);
var G__16658 = cljs.core.chunk_rest(seq__16021__$1);
var G__16659 = c__5568__auto__;
var G__16660 = cljs.core.count(c__5568__auto__);
var G__16661 = (0);
seq__16021 = G__16658;
chunk__16022 = G__16659;
count__16023 = G__16660;
i__16024 = G__16661;
continue;
} else {
var vec__16083 = cljs.core.first(seq__16021__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16083,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16663 = cljs.core.next(seq__16021__$1);
var G__16664 = null;
var G__16665 = (0);
var G__16666 = (0);
seq__16021 = G__16663;
chunk__16022 = G__16664;
count__16023 = G__16665;
i__16024 = G__16666;
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
var seq__16088 = cljs.core.seq(styles);
var chunk__16089 = null;
var count__16090 = (0);
var i__16091 = (0);
while(true){
if((i__16091 < count__16090)){
var vec__16111 = chunk__16089.cljs$core$IIndexed$_nth$arity$2(null,i__16091);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16668 = seq__16088;
var G__16669 = chunk__16089;
var G__16670 = count__16090;
var G__16671 = (i__16091 + (1));
seq__16088 = G__16668;
chunk__16089 = G__16669;
count__16090 = G__16670;
i__16091 = G__16671;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16088);
if(temp__5804__auto__){
var seq__16088__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16088__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16088__$1);
var G__16673 = cljs.core.chunk_rest(seq__16088__$1);
var G__16674 = c__5568__auto__;
var G__16675 = cljs.core.count(c__5568__auto__);
var G__16676 = (0);
seq__16088 = G__16673;
chunk__16089 = G__16674;
count__16090 = G__16675;
i__16091 = G__16676;
continue;
} else {
var vec__16118 = cljs.core.first(seq__16088__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16118,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16118,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16678 = cljs.core.next(seq__16088__$1);
var G__16679 = null;
var G__16680 = (0);
var G__16681 = (0);
seq__16088 = G__16678;
chunk__16089 = G__16679;
count__16090 = G__16680;
i__16091 = G__16681;
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
var G__16122_16683 = key;
var G__16122_16684__$1 = (((G__16122_16683 instanceof cljs.core.Keyword))?G__16122_16683.fqn:null);
switch (G__16122_16684__$1) {
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
var ks_16686 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_16686,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_16686,"aria-");
}
})())){
el.setAttribute(ks_16686,value);
} else {
(el[ks_16686] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__16130){
var map__16131 = p__16130;
var map__16131__$1 = cljs.core.__destructure_map(map__16131);
var props = map__16131__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16131__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__16132 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16132,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__16200 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__16200,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__16200;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__16203 = arguments.length;
switch (G__16203) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__16204){
var vec__16205 = p__16204;
var seq__16206 = cljs.core.seq(vec__16205);
var first__16207 = cljs.core.first(seq__16206);
var seq__16206__$1 = cljs.core.next(seq__16206);
var nn = first__16207;
var first__16207__$1 = cljs.core.first(seq__16206__$1);
var seq__16206__$2 = cljs.core.next(seq__16206__$1);
var np = first__16207__$1;
var nc = seq__16206__$2;
var node = vec__16205;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16208 = nn;
var G__16209 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16208,G__16209) : create_fn.call(null,G__16208,G__16209));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__16210 = nn;
var G__16211 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__16210,G__16211) : create_fn.call(null,G__16210,G__16211));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__16212 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16212,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16212,(1),null);
var seq__16215_16695 = cljs.core.seq(node_children);
var chunk__16216_16696 = null;
var count__16217_16697 = (0);
var i__16218_16698 = (0);
while(true){
if((i__16218_16698 < count__16217_16697)){
var child_struct_16699 = chunk__16216_16696.cljs$core$IIndexed$_nth$arity$2(null,i__16218_16698);
var children_16700 = shadow.dom.dom_node(child_struct_16699);
if(cljs.core.seq_QMARK_(children_16700)){
var seq__16231_16701 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16700));
var chunk__16233_16702 = null;
var count__16234_16703 = (0);
var i__16235_16704 = (0);
while(true){
if((i__16235_16704 < count__16234_16703)){
var child_16705 = chunk__16233_16702.cljs$core$IIndexed$_nth$arity$2(null,i__16235_16704);
if(cljs.core.truth_(child_16705)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16705);


var G__16706 = seq__16231_16701;
var G__16707 = chunk__16233_16702;
var G__16708 = count__16234_16703;
var G__16709 = (i__16235_16704 + (1));
seq__16231_16701 = G__16706;
chunk__16233_16702 = G__16707;
count__16234_16703 = G__16708;
i__16235_16704 = G__16709;
continue;
} else {
var G__16710 = seq__16231_16701;
var G__16711 = chunk__16233_16702;
var G__16712 = count__16234_16703;
var G__16713 = (i__16235_16704 + (1));
seq__16231_16701 = G__16710;
chunk__16233_16702 = G__16711;
count__16234_16703 = G__16712;
i__16235_16704 = G__16713;
continue;
}
} else {
var temp__5804__auto___16714 = cljs.core.seq(seq__16231_16701);
if(temp__5804__auto___16714){
var seq__16231_16715__$1 = temp__5804__auto___16714;
if(cljs.core.chunked_seq_QMARK_(seq__16231_16715__$1)){
var c__5568__auto___16716 = cljs.core.chunk_first(seq__16231_16715__$1);
var G__16717 = cljs.core.chunk_rest(seq__16231_16715__$1);
var G__16718 = c__5568__auto___16716;
var G__16719 = cljs.core.count(c__5568__auto___16716);
var G__16720 = (0);
seq__16231_16701 = G__16717;
chunk__16233_16702 = G__16718;
count__16234_16703 = G__16719;
i__16235_16704 = G__16720;
continue;
} else {
var child_16721 = cljs.core.first(seq__16231_16715__$1);
if(cljs.core.truth_(child_16721)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16721);


var G__16722 = cljs.core.next(seq__16231_16715__$1);
var G__16723 = null;
var G__16724 = (0);
var G__16725 = (0);
seq__16231_16701 = G__16722;
chunk__16233_16702 = G__16723;
count__16234_16703 = G__16724;
i__16235_16704 = G__16725;
continue;
} else {
var G__16726 = cljs.core.next(seq__16231_16715__$1);
var G__16727 = null;
var G__16728 = (0);
var G__16729 = (0);
seq__16231_16701 = G__16726;
chunk__16233_16702 = G__16727;
count__16234_16703 = G__16728;
i__16235_16704 = G__16729;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16700);
}


var G__16730 = seq__16215_16695;
var G__16731 = chunk__16216_16696;
var G__16732 = count__16217_16697;
var G__16733 = (i__16218_16698 + (1));
seq__16215_16695 = G__16730;
chunk__16216_16696 = G__16731;
count__16217_16697 = G__16732;
i__16218_16698 = G__16733;
continue;
} else {
var temp__5804__auto___16734 = cljs.core.seq(seq__16215_16695);
if(temp__5804__auto___16734){
var seq__16215_16735__$1 = temp__5804__auto___16734;
if(cljs.core.chunked_seq_QMARK_(seq__16215_16735__$1)){
var c__5568__auto___16736 = cljs.core.chunk_first(seq__16215_16735__$1);
var G__16737 = cljs.core.chunk_rest(seq__16215_16735__$1);
var G__16738 = c__5568__auto___16736;
var G__16739 = cljs.core.count(c__5568__auto___16736);
var G__16740 = (0);
seq__16215_16695 = G__16737;
chunk__16216_16696 = G__16738;
count__16217_16697 = G__16739;
i__16218_16698 = G__16740;
continue;
} else {
var child_struct_16741 = cljs.core.first(seq__16215_16735__$1);
var children_16742 = shadow.dom.dom_node(child_struct_16741);
if(cljs.core.seq_QMARK_(children_16742)){
var seq__16237_16743 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16742));
var chunk__16239_16744 = null;
var count__16240_16745 = (0);
var i__16241_16746 = (0);
while(true){
if((i__16241_16746 < count__16240_16745)){
var child_16747 = chunk__16239_16744.cljs$core$IIndexed$_nth$arity$2(null,i__16241_16746);
if(cljs.core.truth_(child_16747)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16747);


var G__16748 = seq__16237_16743;
var G__16749 = chunk__16239_16744;
var G__16750 = count__16240_16745;
var G__16751 = (i__16241_16746 + (1));
seq__16237_16743 = G__16748;
chunk__16239_16744 = G__16749;
count__16240_16745 = G__16750;
i__16241_16746 = G__16751;
continue;
} else {
var G__16752 = seq__16237_16743;
var G__16753 = chunk__16239_16744;
var G__16754 = count__16240_16745;
var G__16755 = (i__16241_16746 + (1));
seq__16237_16743 = G__16752;
chunk__16239_16744 = G__16753;
count__16240_16745 = G__16754;
i__16241_16746 = G__16755;
continue;
}
} else {
var temp__5804__auto___16756__$1 = cljs.core.seq(seq__16237_16743);
if(temp__5804__auto___16756__$1){
var seq__16237_16757__$1 = temp__5804__auto___16756__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16237_16757__$1)){
var c__5568__auto___16758 = cljs.core.chunk_first(seq__16237_16757__$1);
var G__16759 = cljs.core.chunk_rest(seq__16237_16757__$1);
var G__16760 = c__5568__auto___16758;
var G__16761 = cljs.core.count(c__5568__auto___16758);
var G__16762 = (0);
seq__16237_16743 = G__16759;
chunk__16239_16744 = G__16760;
count__16240_16745 = G__16761;
i__16241_16746 = G__16762;
continue;
} else {
var child_16763 = cljs.core.first(seq__16237_16757__$1);
if(cljs.core.truth_(child_16763)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16763);


var G__16764 = cljs.core.next(seq__16237_16757__$1);
var G__16765 = null;
var G__16766 = (0);
var G__16767 = (0);
seq__16237_16743 = G__16764;
chunk__16239_16744 = G__16765;
count__16240_16745 = G__16766;
i__16241_16746 = G__16767;
continue;
} else {
var G__16768 = cljs.core.next(seq__16237_16757__$1);
var G__16769 = null;
var G__16770 = (0);
var G__16771 = (0);
seq__16237_16743 = G__16768;
chunk__16239_16744 = G__16769;
count__16240_16745 = G__16770;
i__16241_16746 = G__16771;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16742);
}


var G__16772 = cljs.core.next(seq__16215_16735__$1);
var G__16773 = null;
var G__16774 = (0);
var G__16775 = (0);
seq__16215_16695 = G__16772;
chunk__16216_16696 = G__16773;
count__16217_16697 = G__16774;
i__16218_16698 = G__16775;
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
var seq__16278 = cljs.core.seq(node);
var chunk__16279 = null;
var count__16280 = (0);
var i__16281 = (0);
while(true){
if((i__16281 < count__16280)){
var n = chunk__16279.cljs$core$IIndexed$_nth$arity$2(null,i__16281);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16776 = seq__16278;
var G__16777 = chunk__16279;
var G__16778 = count__16280;
var G__16779 = (i__16281 + (1));
seq__16278 = G__16776;
chunk__16279 = G__16777;
count__16280 = G__16778;
i__16281 = G__16779;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16278);
if(temp__5804__auto__){
var seq__16278__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16278__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16278__$1);
var G__16780 = cljs.core.chunk_rest(seq__16278__$1);
var G__16781 = c__5568__auto__;
var G__16782 = cljs.core.count(c__5568__auto__);
var G__16783 = (0);
seq__16278 = G__16780;
chunk__16279 = G__16781;
count__16280 = G__16782;
i__16281 = G__16783;
continue;
} else {
var n = cljs.core.first(seq__16278__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16784 = cljs.core.next(seq__16278__$1);
var G__16785 = null;
var G__16786 = (0);
var G__16787 = (0);
seq__16278 = G__16784;
chunk__16279 = G__16785;
count__16280 = G__16786;
i__16281 = G__16787;
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
var G__16288 = arguments.length;
switch (G__16288) {
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
var G__16291 = arguments.length;
switch (G__16291) {
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
var G__16360 = arguments.length;
switch (G__16360) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___16791 = arguments.length;
var i__5770__auto___16792 = (0);
while(true){
if((i__5770__auto___16792 < len__5769__auto___16791)){
args__5775__auto__.push((arguments[i__5770__auto___16792]));

var G__16793 = (i__5770__auto___16792 + (1));
i__5770__auto___16792 = G__16793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__16363_16794 = cljs.core.seq(nodes);
var chunk__16364_16795 = null;
var count__16365_16796 = (0);
var i__16366_16797 = (0);
while(true){
if((i__16366_16797 < count__16365_16796)){
var node_16798 = chunk__16364_16795.cljs$core$IIndexed$_nth$arity$2(null,i__16366_16797);
fragment.appendChild(shadow.dom._to_dom(node_16798));


var G__16799 = seq__16363_16794;
var G__16800 = chunk__16364_16795;
var G__16801 = count__16365_16796;
var G__16802 = (i__16366_16797 + (1));
seq__16363_16794 = G__16799;
chunk__16364_16795 = G__16800;
count__16365_16796 = G__16801;
i__16366_16797 = G__16802;
continue;
} else {
var temp__5804__auto___16803 = cljs.core.seq(seq__16363_16794);
if(temp__5804__auto___16803){
var seq__16363_16804__$1 = temp__5804__auto___16803;
if(cljs.core.chunked_seq_QMARK_(seq__16363_16804__$1)){
var c__5568__auto___16805 = cljs.core.chunk_first(seq__16363_16804__$1);
var G__16806 = cljs.core.chunk_rest(seq__16363_16804__$1);
var G__16807 = c__5568__auto___16805;
var G__16808 = cljs.core.count(c__5568__auto___16805);
var G__16809 = (0);
seq__16363_16794 = G__16806;
chunk__16364_16795 = G__16807;
count__16365_16796 = G__16808;
i__16366_16797 = G__16809;
continue;
} else {
var node_16810 = cljs.core.first(seq__16363_16804__$1);
fragment.appendChild(shadow.dom._to_dom(node_16810));


var G__16811 = cljs.core.next(seq__16363_16804__$1);
var G__16812 = null;
var G__16813 = (0);
var G__16814 = (0);
seq__16363_16794 = G__16811;
chunk__16364_16795 = G__16812;
count__16365_16796 = G__16813;
i__16366_16797 = G__16814;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq16362){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16362));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__16367_16815 = cljs.core.seq(scripts);
var chunk__16368_16816 = null;
var count__16369_16817 = (0);
var i__16370_16818 = (0);
while(true){
if((i__16370_16818 < count__16369_16817)){
var vec__16377_16819 = chunk__16368_16816.cljs$core$IIndexed$_nth$arity$2(null,i__16370_16818);
var script_tag_16820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377_16819,(0),null);
var script_body_16821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16377_16819,(1),null);
eval(script_body_16821);


var G__16822 = seq__16367_16815;
var G__16823 = chunk__16368_16816;
var G__16824 = count__16369_16817;
var G__16825 = (i__16370_16818 + (1));
seq__16367_16815 = G__16822;
chunk__16368_16816 = G__16823;
count__16369_16817 = G__16824;
i__16370_16818 = G__16825;
continue;
} else {
var temp__5804__auto___16826 = cljs.core.seq(seq__16367_16815);
if(temp__5804__auto___16826){
var seq__16367_16827__$1 = temp__5804__auto___16826;
if(cljs.core.chunked_seq_QMARK_(seq__16367_16827__$1)){
var c__5568__auto___16828 = cljs.core.chunk_first(seq__16367_16827__$1);
var G__16829 = cljs.core.chunk_rest(seq__16367_16827__$1);
var G__16830 = c__5568__auto___16828;
var G__16831 = cljs.core.count(c__5568__auto___16828);
var G__16832 = (0);
seq__16367_16815 = G__16829;
chunk__16368_16816 = G__16830;
count__16369_16817 = G__16831;
i__16370_16818 = G__16832;
continue;
} else {
var vec__16380_16833 = cljs.core.first(seq__16367_16827__$1);
var script_tag_16834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380_16833,(0),null);
var script_body_16835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16380_16833,(1),null);
eval(script_body_16835);


var G__16836 = cljs.core.next(seq__16367_16827__$1);
var G__16837 = null;
var G__16838 = (0);
var G__16839 = (0);
seq__16367_16815 = G__16836;
chunk__16368_16816 = G__16837;
count__16369_16817 = G__16838;
i__16370_16818 = G__16839;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__16383){
var vec__16384 = p__16383;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16384,(1),null);
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
var G__16388 = arguments.length;
switch (G__16388) {
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
var seq__16407 = cljs.core.seq(style_keys);
var chunk__16408 = null;
var count__16409 = (0);
var i__16410 = (0);
while(true){
if((i__16410 < count__16409)){
var it = chunk__16408.cljs$core$IIndexed$_nth$arity$2(null,i__16410);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16854 = seq__16407;
var G__16855 = chunk__16408;
var G__16856 = count__16409;
var G__16857 = (i__16410 + (1));
seq__16407 = G__16854;
chunk__16408 = G__16855;
count__16409 = G__16856;
i__16410 = G__16857;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16407);
if(temp__5804__auto__){
var seq__16407__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16407__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16407__$1);
var G__16858 = cljs.core.chunk_rest(seq__16407__$1);
var G__16859 = c__5568__auto__;
var G__16860 = cljs.core.count(c__5568__auto__);
var G__16861 = (0);
seq__16407 = G__16858;
chunk__16408 = G__16859;
count__16409 = G__16860;
i__16410 = G__16861;
continue;
} else {
var it = cljs.core.first(seq__16407__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16862 = cljs.core.next(seq__16407__$1);
var G__16863 = null;
var G__16864 = (0);
var G__16865 = (0);
seq__16407 = G__16862;
chunk__16408 = G__16863;
count__16409 = G__16864;
i__16410 = G__16865;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16416,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16434 = k16416;
var G__16434__$1 = (((G__16434 instanceof cljs.core.Keyword))?G__16434.fqn:null);
switch (G__16434__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16416,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16440){
var vec__16441 = p__16440;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16441,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16441,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16415){
var self__ = this;
var G__16415__$1 = this;
return (new cljs.core.RecordIter((0),G__16415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16417,other16418){
var self__ = this;
var this16417__$1 = this;
return (((!((other16418 == null)))) && ((((this16417__$1.constructor === other16418.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16417__$1.x,other16418.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16417__$1.y,other16418.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16417__$1.__extmap,other16418.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16416){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16523 = k16416;
var G__16523__$1 = (((G__16523 instanceof cljs.core.Keyword))?G__16523.fqn:null);
switch (G__16523__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16416);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16415){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16524 = cljs.core.keyword_identical_QMARK_;
var expr__16525 = k__5352__auto__;
if(cljs.core.truth_((pred__16524.cljs$core$IFn$_invoke$arity$2 ? pred__16524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16525) : pred__16524.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__16525)))){
return (new shadow.dom.Coordinate(G__16415,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16524.cljs$core$IFn$_invoke$arity$2 ? pred__16524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16525) : pred__16524.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__16525)))){
return (new shadow.dom.Coordinate(self__.x,G__16415,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16415),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16415){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16415,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16428){
var extmap__5385__auto__ = (function (){var G__16527 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16428,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16428)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16527);
} else {
return G__16527;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16428),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16428),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k16529,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__16533 = k16529;
var G__16533__$1 = (((G__16533 instanceof cljs.core.Keyword))?G__16533.fqn:null);
switch (G__16533__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16529,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__16534){
var vec__16535 = p__16534;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16528){
var self__ = this;
var G__16528__$1 = this;
return (new cljs.core.RecordIter((0),G__16528__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16530,other16531){
var self__ = this;
var this16530__$1 = this;
return (((!((other16531 == null)))) && ((((this16530__$1.constructor === other16531.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.w,other16531.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.h,other16531.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16530__$1.__extmap,other16531.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k16529){
var self__ = this;
var this__5350__auto____$1 = this;
var G__16538 = k16529;
var G__16538__$1 = (((G__16538 instanceof cljs.core.Keyword))?G__16538.fqn:null);
switch (G__16538__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16529);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__16528){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__16539 = cljs.core.keyword_identical_QMARK_;
var expr__16540 = k__5352__auto__;
if(cljs.core.truth_((pred__16539.cljs$core$IFn$_invoke$arity$2 ? pred__16539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16540) : pred__16539.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__16540)))){
return (new shadow.dom.Size(G__16528,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16539.cljs$core$IFn$_invoke$arity$2 ? pred__16539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16540) : pred__16539.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__16540)))){
return (new shadow.dom.Size(self__.w,G__16528,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__16528),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__16528){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16528,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16532){
var extmap__5385__auto__ = (function (){var G__16542 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16532,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16532)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16542);
} else {
return G__16542;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16532),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16532),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__16874 = (i + (1));
var G__16875 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16874;
ret = G__16875;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16547){
var vec__16548 = p__16547;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16548,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16552 = arguments.length;
switch (G__16552) {
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
var G__16877 = ps;
var G__16878 = (i + (1));
el__$1 = G__16877;
i = G__16878;
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
var vec__16553 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16553,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16556_16879 = cljs.core.seq(props);
var chunk__16557_16880 = null;
var count__16558_16881 = (0);
var i__16559_16882 = (0);
while(true){
if((i__16559_16882 < count__16558_16881)){
var vec__16566_16883 = chunk__16557_16880.cljs$core$IIndexed$_nth$arity$2(null,i__16559_16882);
var k_16884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_16883,(0),null);
var v_16885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_16883,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16884);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16884),v_16885);


var G__16886 = seq__16556_16879;
var G__16887 = chunk__16557_16880;
var G__16888 = count__16558_16881;
var G__16889 = (i__16559_16882 + (1));
seq__16556_16879 = G__16886;
chunk__16557_16880 = G__16887;
count__16558_16881 = G__16888;
i__16559_16882 = G__16889;
continue;
} else {
var temp__5804__auto___16890 = cljs.core.seq(seq__16556_16879);
if(temp__5804__auto___16890){
var seq__16556_16891__$1 = temp__5804__auto___16890;
if(cljs.core.chunked_seq_QMARK_(seq__16556_16891__$1)){
var c__5568__auto___16892 = cljs.core.chunk_first(seq__16556_16891__$1);
var G__16893 = cljs.core.chunk_rest(seq__16556_16891__$1);
var G__16894 = c__5568__auto___16892;
var G__16895 = cljs.core.count(c__5568__auto___16892);
var G__16896 = (0);
seq__16556_16879 = G__16893;
chunk__16557_16880 = G__16894;
count__16558_16881 = G__16895;
i__16559_16882 = G__16896;
continue;
} else {
var vec__16569_16897 = cljs.core.first(seq__16556_16891__$1);
var k_16898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16569_16897,(0),null);
var v_16899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16569_16897,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16898);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16898),v_16899);


var G__16900 = cljs.core.next(seq__16556_16891__$1);
var G__16901 = null;
var G__16902 = (0);
var G__16903 = (0);
seq__16556_16879 = G__16900;
chunk__16557_16880 = G__16901;
count__16558_16881 = G__16902;
i__16559_16882 = G__16903;
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
var vec__16573 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16573,(1),null);
var seq__16576_16904 = cljs.core.seq(node_children);
var chunk__16578_16905 = null;
var count__16579_16906 = (0);
var i__16580_16907 = (0);
while(true){
if((i__16580_16907 < count__16579_16906)){
var child_struct_16908 = chunk__16578_16905.cljs$core$IIndexed$_nth$arity$2(null,i__16580_16907);
if((!((child_struct_16908 == null)))){
if(typeof child_struct_16908 === 'string'){
var text_16909 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16909),child_struct_16908].join(''));
} else {
var children_16910 = shadow.dom.svg_node(child_struct_16908);
if(cljs.core.seq_QMARK_(children_16910)){
var seq__16594_16911 = cljs.core.seq(children_16910);
var chunk__16596_16912 = null;
var count__16597_16913 = (0);
var i__16598_16914 = (0);
while(true){
if((i__16598_16914 < count__16597_16913)){
var child_16915 = chunk__16596_16912.cljs$core$IIndexed$_nth$arity$2(null,i__16598_16914);
if(cljs.core.truth_(child_16915)){
node.appendChild(child_16915);


var G__16916 = seq__16594_16911;
var G__16917 = chunk__16596_16912;
var G__16918 = count__16597_16913;
var G__16919 = (i__16598_16914 + (1));
seq__16594_16911 = G__16916;
chunk__16596_16912 = G__16917;
count__16597_16913 = G__16918;
i__16598_16914 = G__16919;
continue;
} else {
var G__16920 = seq__16594_16911;
var G__16921 = chunk__16596_16912;
var G__16922 = count__16597_16913;
var G__16923 = (i__16598_16914 + (1));
seq__16594_16911 = G__16920;
chunk__16596_16912 = G__16921;
count__16597_16913 = G__16922;
i__16598_16914 = G__16923;
continue;
}
} else {
var temp__5804__auto___16924 = cljs.core.seq(seq__16594_16911);
if(temp__5804__auto___16924){
var seq__16594_16925__$1 = temp__5804__auto___16924;
if(cljs.core.chunked_seq_QMARK_(seq__16594_16925__$1)){
var c__5568__auto___16926 = cljs.core.chunk_first(seq__16594_16925__$1);
var G__16927 = cljs.core.chunk_rest(seq__16594_16925__$1);
var G__16928 = c__5568__auto___16926;
var G__16929 = cljs.core.count(c__5568__auto___16926);
var G__16930 = (0);
seq__16594_16911 = G__16927;
chunk__16596_16912 = G__16928;
count__16597_16913 = G__16929;
i__16598_16914 = G__16930;
continue;
} else {
var child_16931 = cljs.core.first(seq__16594_16925__$1);
if(cljs.core.truth_(child_16931)){
node.appendChild(child_16931);


var G__16932 = cljs.core.next(seq__16594_16925__$1);
var G__16933 = null;
var G__16934 = (0);
var G__16935 = (0);
seq__16594_16911 = G__16932;
chunk__16596_16912 = G__16933;
count__16597_16913 = G__16934;
i__16598_16914 = G__16935;
continue;
} else {
var G__16936 = cljs.core.next(seq__16594_16925__$1);
var G__16937 = null;
var G__16938 = (0);
var G__16939 = (0);
seq__16594_16911 = G__16936;
chunk__16596_16912 = G__16937;
count__16597_16913 = G__16938;
i__16598_16914 = G__16939;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16910);
}
}


var G__16940 = seq__16576_16904;
var G__16941 = chunk__16578_16905;
var G__16942 = count__16579_16906;
var G__16943 = (i__16580_16907 + (1));
seq__16576_16904 = G__16940;
chunk__16578_16905 = G__16941;
count__16579_16906 = G__16942;
i__16580_16907 = G__16943;
continue;
} else {
var G__16944 = seq__16576_16904;
var G__16945 = chunk__16578_16905;
var G__16946 = count__16579_16906;
var G__16947 = (i__16580_16907 + (1));
seq__16576_16904 = G__16944;
chunk__16578_16905 = G__16945;
count__16579_16906 = G__16946;
i__16580_16907 = G__16947;
continue;
}
} else {
var temp__5804__auto___16948 = cljs.core.seq(seq__16576_16904);
if(temp__5804__auto___16948){
var seq__16576_16949__$1 = temp__5804__auto___16948;
if(cljs.core.chunked_seq_QMARK_(seq__16576_16949__$1)){
var c__5568__auto___16950 = cljs.core.chunk_first(seq__16576_16949__$1);
var G__16951 = cljs.core.chunk_rest(seq__16576_16949__$1);
var G__16952 = c__5568__auto___16950;
var G__16953 = cljs.core.count(c__5568__auto___16950);
var G__16954 = (0);
seq__16576_16904 = G__16951;
chunk__16578_16905 = G__16952;
count__16579_16906 = G__16953;
i__16580_16907 = G__16954;
continue;
} else {
var child_struct_16955 = cljs.core.first(seq__16576_16949__$1);
if((!((child_struct_16955 == null)))){
if(typeof child_struct_16955 === 'string'){
var text_16956 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16956),child_struct_16955].join(''));
} else {
var children_16957 = shadow.dom.svg_node(child_struct_16955);
if(cljs.core.seq_QMARK_(children_16957)){
var seq__16600_16958 = cljs.core.seq(children_16957);
var chunk__16602_16959 = null;
var count__16603_16960 = (0);
var i__16604_16961 = (0);
while(true){
if((i__16604_16961 < count__16603_16960)){
var child_16962 = chunk__16602_16959.cljs$core$IIndexed$_nth$arity$2(null,i__16604_16961);
if(cljs.core.truth_(child_16962)){
node.appendChild(child_16962);


var G__16963 = seq__16600_16958;
var G__16964 = chunk__16602_16959;
var G__16965 = count__16603_16960;
var G__16966 = (i__16604_16961 + (1));
seq__16600_16958 = G__16963;
chunk__16602_16959 = G__16964;
count__16603_16960 = G__16965;
i__16604_16961 = G__16966;
continue;
} else {
var G__16967 = seq__16600_16958;
var G__16968 = chunk__16602_16959;
var G__16969 = count__16603_16960;
var G__16970 = (i__16604_16961 + (1));
seq__16600_16958 = G__16967;
chunk__16602_16959 = G__16968;
count__16603_16960 = G__16969;
i__16604_16961 = G__16970;
continue;
}
} else {
var temp__5804__auto___16971__$1 = cljs.core.seq(seq__16600_16958);
if(temp__5804__auto___16971__$1){
var seq__16600_16972__$1 = temp__5804__auto___16971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16600_16972__$1)){
var c__5568__auto___16973 = cljs.core.chunk_first(seq__16600_16972__$1);
var G__16974 = cljs.core.chunk_rest(seq__16600_16972__$1);
var G__16975 = c__5568__auto___16973;
var G__16976 = cljs.core.count(c__5568__auto___16973);
var G__16977 = (0);
seq__16600_16958 = G__16974;
chunk__16602_16959 = G__16975;
count__16603_16960 = G__16976;
i__16604_16961 = G__16977;
continue;
} else {
var child_16978 = cljs.core.first(seq__16600_16972__$1);
if(cljs.core.truth_(child_16978)){
node.appendChild(child_16978);


var G__16979 = cljs.core.next(seq__16600_16972__$1);
var G__16980 = null;
var G__16981 = (0);
var G__16982 = (0);
seq__16600_16958 = G__16979;
chunk__16602_16959 = G__16980;
count__16603_16960 = G__16981;
i__16604_16961 = G__16982;
continue;
} else {
var G__16983 = cljs.core.next(seq__16600_16972__$1);
var G__16984 = null;
var G__16985 = (0);
var G__16986 = (0);
seq__16600_16958 = G__16983;
chunk__16602_16959 = G__16984;
count__16603_16960 = G__16985;
i__16604_16961 = G__16986;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16957);
}
}


var G__16987 = cljs.core.next(seq__16576_16949__$1);
var G__16988 = null;
var G__16989 = (0);
var G__16990 = (0);
seq__16576_16904 = G__16987;
chunk__16578_16905 = G__16988;
count__16579_16906 = G__16989;
i__16580_16907 = G__16990;
continue;
} else {
var G__16991 = cljs.core.next(seq__16576_16949__$1);
var G__16992 = null;
var G__16993 = (0);
var G__16994 = (0);
seq__16576_16904 = G__16991;
chunk__16578_16905 = G__16992;
count__16579_16906 = G__16993;
i__16580_16907 = G__16994;
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
var args__5775__auto__ = [];
var len__5769__auto___16995 = arguments.length;
var i__5770__auto___16996 = (0);
while(true){
if((i__5770__auto___16996 < len__5769__auto___16995)){
args__5775__auto__.push((arguments[i__5770__auto___16996]));

var G__16997 = (i__5770__auto___16996 + (1));
i__5770__auto___16996 = G__16997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16606){
var G__16607 = cljs.core.first(seq16606);
var seq16606__$1 = cljs.core.next(seq16606);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16607,seq16606__$1);
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
var G__16609 = arguments.length;
switch (G__16609) {
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

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13733__auto___16999 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13734__auto__ = (function (){var switch__13615__auto__ = (function (state_16614){
var state_val_16615 = (state_16614[(1)]);
if((state_val_16615 === (1))){
var state_16614__$1 = state_16614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16614__$1,(2),once_or_cleanup);
} else {
if((state_val_16615 === (2))){
var inst_16611 = (state_16614[(2)]);
var inst_16612 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_16614__$1 = (function (){var statearr_16616 = state_16614;
(statearr_16616[(7)] = inst_16611);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16614__$1,inst_16612);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13616__auto__ = null;
var shadow$dom$state_machine__13616__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = shadow$dom$state_machine__13616__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var shadow$dom$state_machine__13616__auto____1 = (function (state_16614){
while(true){
var ret_value__13617__auto__ = (function (){try{while(true){
var result__13618__auto__ = switch__13615__auto__(state_16614);
if(cljs.core.keyword_identical_QMARK_(result__13618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13618__auto__;
}
break;
}
}catch (e16618){var ex__13619__auto__ = e16618;
var statearr_16619_17000 = state_16614;
(statearr_16619_17000[(2)] = ex__13619__auto__);


if(cljs.core.seq((state_16614[(4)]))){
var statearr_16620_17001 = state_16614;
(statearr_16620_17001[(1)] = cljs.core.first((state_16614[(4)])));

} else {
throw ex__13619__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17002 = state_16614;
state_16614 = G__17002;
continue;
} else {
return ret_value__13617__auto__;
}
break;
}
});
shadow$dom$state_machine__13616__auto__ = function(state_16614){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13616__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13616__auto____1.call(this,state_16614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13616__auto____0;
shadow$dom$state_machine__13616__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13616__auto____1;
return shadow$dom$state_machine__13616__auto__;
})()
})();
var state__13735__auto__ = (function (){var statearr_16621 = f__13734__auto__();
(statearr_16621[(6)] = c__13733__auto___16999);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13735__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
