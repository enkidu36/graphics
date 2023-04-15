goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19972,p__19973){
var map__19974 = p__19972;
var map__19974__$1 = cljs.core.__destructure_map(map__19974);
var svc = map__19974__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19975 = p__19973;
var map__19975__$1 = cljs.core.__destructure_map(map__19975);
var msg = map__19975__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19975__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19975__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19975__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19975__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19977,p__19978){
var map__19979 = p__19977;
var map__19979__$1 = cljs.core.__destructure_map(map__19979);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19979__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19980 = p__19978;
var map__19980__$1 = cljs.core.__destructure_map(map__19980);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19980__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19981,p__19982){
var map__19983 = p__19981;
var map__19983__$1 = cljs.core.__destructure_map(map__19983);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19983__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19983__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19984 = p__19982;
var map__19984__$1 = cljs.core.__destructure_map(map__19984);
var msg = map__19984__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19984__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19985,tid){
var map__19986 = p__19985;
var map__19986__$1 = cljs.core.__destructure_map(map__19986);
var svc = map__19986__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19986__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19991 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19992 = null;
var count__19993 = (0);
var i__19994 = (0);
while(true){
if((i__19994 < count__19993)){
var vec__20001 = chunk__19992.cljs$core$IIndexed$_nth$arity$2(null,i__19994);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20001,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20001,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20009 = seq__19991;
var G__20010 = chunk__19992;
var G__20011 = count__19993;
var G__20012 = (i__19994 + (1));
seq__19991 = G__20009;
chunk__19992 = G__20010;
count__19993 = G__20011;
i__19994 = G__20012;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19991);
if(temp__5804__auto__){
var seq__19991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19991__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19991__$1);
var G__20013 = cljs.core.chunk_rest(seq__19991__$1);
var G__20014 = c__5568__auto__;
var G__20015 = cljs.core.count(c__5568__auto__);
var G__20016 = (0);
seq__19991 = G__20013;
chunk__19992 = G__20014;
count__19993 = G__20015;
i__19994 = G__20016;
continue;
} else {
var vec__20004 = cljs.core.first(seq__19991__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20004,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20004,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20017 = cljs.core.next(seq__19991__$1);
var G__20018 = null;
var G__20019 = (0);
var G__20020 = (0);
seq__19991 = G__20017;
chunk__19992 = G__20018;
count__19993 = G__20019;
i__19994 = G__20020;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19987_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19987_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19988_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19988_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19989_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19989_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19990_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19990_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20007){
var map__20008 = p__20007;
var map__20008__$1 = cljs.core.__destructure_map(map__20008);
var svc = map__20008__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20008__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20008__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
