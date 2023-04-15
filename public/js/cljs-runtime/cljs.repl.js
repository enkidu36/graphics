goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19194){
var map__19195 = p__19194;
var map__19195__$1 = cljs.core.__destructure_map(map__19195);
var m = map__19195__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var seq__19199_19528 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19200_19529 = null;
var count__19201_19530 = (0);
var i__19202_19531 = (0);
while(true){
if((i__19202_19531 < count__19201_19530)){
var f_19532 = chunk__19200_19529.cljs$core$IIndexed$_nth$arity$2(null,i__19202_19531);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19532], 0));


var G__19533 = seq__19199_19528;
var G__19534 = chunk__19200_19529;
var G__19535 = count__19201_19530;
var G__19536 = (i__19202_19531 + (1));
seq__19199_19528 = G__19533;
chunk__19200_19529 = G__19534;
count__19201_19530 = G__19535;
i__19202_19531 = G__19536;
continue;
} else {
var temp__5804__auto___19537 = cljs.core.seq(seq__19199_19528);
if(temp__5804__auto___19537){
var seq__19199_19538__$1 = temp__5804__auto___19537;
if(cljs.core.chunked_seq_QMARK_(seq__19199_19538__$1)){
var c__5568__auto___19539 = cljs.core.chunk_first(seq__19199_19538__$1);
var G__19540 = cljs.core.chunk_rest(seq__19199_19538__$1);
var G__19541 = c__5568__auto___19539;
var G__19542 = cljs.core.count(c__5568__auto___19539);
var G__19543 = (0);
seq__19199_19528 = G__19540;
chunk__19200_19529 = G__19541;
count__19201_19530 = G__19542;
i__19202_19531 = G__19543;
continue;
} else {
var f_19544 = cljs.core.first(seq__19199_19538__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19544], 0));


var G__19545 = cljs.core.next(seq__19199_19538__$1);
var G__19546 = null;
var G__19547 = (0);
var G__19548 = (0);
seq__19199_19528 = G__19545;
chunk__19200_19529 = G__19546;
count__19201_19530 = G__19547;
i__19202_19531 = G__19548;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19549 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19549], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19549)))?cljs.core.second(arglists_19549):arglists_19549)], 0));
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
var seq__19209_19550 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19210_19551 = null;
var count__19211_19552 = (0);
var i__19212_19553 = (0);
while(true){
if((i__19212_19553 < count__19211_19552)){
var vec__19250_19554 = chunk__19210_19551.cljs$core$IIndexed$_nth$arity$2(null,i__19212_19553);
var name_19555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19250_19554,(0),null);
var map__19253_19556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19250_19554,(1),null);
var map__19253_19557__$1 = cljs.core.__destructure_map(map__19253_19556);
var doc_19558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253_19557__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19253_19557__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19555], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19559], 0));

if(cljs.core.truth_(doc_19558)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19558], 0));
} else {
}


var G__19560 = seq__19209_19550;
var G__19561 = chunk__19210_19551;
var G__19562 = count__19211_19552;
var G__19563 = (i__19212_19553 + (1));
seq__19209_19550 = G__19560;
chunk__19210_19551 = G__19561;
count__19211_19552 = G__19562;
i__19212_19553 = G__19563;
continue;
} else {
var temp__5804__auto___19564 = cljs.core.seq(seq__19209_19550);
if(temp__5804__auto___19564){
var seq__19209_19565__$1 = temp__5804__auto___19564;
if(cljs.core.chunked_seq_QMARK_(seq__19209_19565__$1)){
var c__5568__auto___19566 = cljs.core.chunk_first(seq__19209_19565__$1);
var G__19567 = cljs.core.chunk_rest(seq__19209_19565__$1);
var G__19568 = c__5568__auto___19566;
var G__19569 = cljs.core.count(c__5568__auto___19566);
var G__19570 = (0);
seq__19209_19550 = G__19567;
chunk__19210_19551 = G__19568;
count__19211_19552 = G__19569;
i__19212_19553 = G__19570;
continue;
} else {
var vec__19255_19571 = cljs.core.first(seq__19209_19565__$1);
var name_19572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19255_19571,(0),null);
var map__19258_19573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19255_19571,(1),null);
var map__19258_19574__$1 = cljs.core.__destructure_map(map__19258_19573);
var doc_19575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19258_19574__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19258_19574__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19572], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19576], 0));

if(cljs.core.truth_(doc_19575)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19575], 0));
} else {
}


var G__19577 = cljs.core.next(seq__19209_19565__$1);
var G__19578 = null;
var G__19579 = (0);
var G__19580 = (0);
seq__19209_19550 = G__19577;
chunk__19210_19551 = G__19578;
count__19211_19552 = G__19579;
i__19212_19553 = G__19580;
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

var seq__19259 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19260 = null;
var count__19261 = (0);
var i__19262 = (0);
while(true){
if((i__19262 < count__19261)){
var role = chunk__19260.cljs$core$IIndexed$_nth$arity$2(null,i__19262);
var temp__5804__auto___19581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19581__$1)){
var spec_19582 = temp__5804__auto___19581__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19582)], 0));
} else {
}


var G__19583 = seq__19259;
var G__19584 = chunk__19260;
var G__19585 = count__19261;
var G__19586 = (i__19262 + (1));
seq__19259 = G__19583;
chunk__19260 = G__19584;
count__19261 = G__19585;
i__19262 = G__19586;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19259);
if(temp__5804__auto____$1){
var seq__19259__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19259__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19259__$1);
var G__19587 = cljs.core.chunk_rest(seq__19259__$1);
var G__19588 = c__5568__auto__;
var G__19589 = cljs.core.count(c__5568__auto__);
var G__19590 = (0);
seq__19259 = G__19587;
chunk__19260 = G__19588;
count__19261 = G__19589;
i__19262 = G__19590;
continue;
} else {
var role = cljs.core.first(seq__19259__$1);
var temp__5804__auto___19591__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19591__$2)){
var spec_19592 = temp__5804__auto___19591__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19592)], 0));
} else {
}


var G__19593 = cljs.core.next(seq__19259__$1);
var G__19594 = null;
var G__19595 = (0);
var G__19596 = (0);
seq__19259 = G__19593;
chunk__19260 = G__19594;
count__19261 = G__19595;
i__19262 = G__19596;
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
var G__19601 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19602 = cljs.core.ex_cause(t);
via = G__19601;
t = G__19602;
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
var map__19402 = datafied_throwable;
var map__19402__$1 = cljs.core.__destructure_map(map__19402);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19402__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19402__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19402__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19403 = cljs.core.last(via);
var map__19403__$1 = cljs.core.__destructure_map(map__19403);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19403__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19404 = data;
var map__19404__$1 = cljs.core.__destructure_map(map__19404);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19405 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19405__$1 = cljs.core.__destructure_map(map__19405);
var top_data = map__19405__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19405__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19407 = phase;
var G__19407__$1 = (((G__19407 instanceof cljs.core.Keyword))?G__19407.fqn:null);
switch (G__19407__$1) {
case "read-source":
var map__19408 = data;
var map__19408__$1 = cljs.core.__destructure_map(map__19408);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19408__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19408__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19409 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19409__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19409,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19409);
var G__19409__$2 = (cljs.core.truth_((function (){var fexpr__19410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19410.cljs$core$IFn$_invoke$arity$1 ? fexpr__19410.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19410.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19409__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19409__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19409__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19409__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19411 = top_data;
var G__19411__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19411,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19411);
var G__19411__$2 = (cljs.core.truth_((function (){var fexpr__19412 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19412.cljs$core$IFn$_invoke$arity$1 ? fexpr__19412.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19412.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19411__$1);
var G__19411__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19411__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19411__$2);
var G__19411__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19411__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19411__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19411__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19411__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19417 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19417,(3),null);
var G__19420 = top_data;
var G__19420__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19420,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19420);
var G__19420__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19420__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19420__$1);
var G__19420__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19420__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19420__$2);
var G__19420__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19420__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19420__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19420__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19420__$4;
}

break;
case "execution":
var vec__19425 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19425,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19401_SHARP_){
var or__5045__auto__ = (p1__19401_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19428 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19428.cljs$core$IFn$_invoke$arity$1 ? fexpr__19428.cljs$core$IFn$_invoke$arity$1(p1__19401_SHARP_) : fexpr__19428.call(null,p1__19401_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19429 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19429__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19429,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19429);
var G__19429__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19429__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19429__$1);
var G__19429__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19429__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19429__$2);
var G__19429__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19429__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19429__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19429__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19429__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19407__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19471){
var map__19472 = p__19471;
var map__19472__$1 = cljs.core.__destructure_map(map__19472);
var triage_data = map__19472__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19472__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19478 = phase;
var G__19478__$1 = (((G__19478 instanceof cljs.core.Keyword))?G__19478.fqn:null);
switch (G__19478__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19479 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19480 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19481 = loc;
var G__19482 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19483_19616 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19484_19617 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19485_19618 = true;
var _STAR_print_fn_STAR__temp_val__19486_19619 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19485_19618);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19486_19619);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19469_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19469_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19484_19617);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19483_19616);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19479,G__19480,G__19481,G__19482) : format.call(null,G__19479,G__19480,G__19481,G__19482));

break;
case "macroexpansion":
var G__19487 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19488 = cause_type;
var G__19489 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19490 = loc;
var G__19491 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19487,G__19488,G__19489,G__19490,G__19491) : format.call(null,G__19487,G__19488,G__19489,G__19490,G__19491));

break;
case "compile-syntax-check":
var G__19492 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19493 = cause_type;
var G__19494 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19495 = loc;
var G__19496 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19492,G__19493,G__19494,G__19495,G__19496) : format.call(null,G__19492,G__19493,G__19494,G__19495,G__19496));

break;
case "compilation":
var G__19497 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19498 = cause_type;
var G__19499 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19500 = loc;
var G__19501 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19497,G__19498,G__19499,G__19500,G__19501) : format.call(null,G__19497,G__19498,G__19499,G__19500,G__19501));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19505 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19506 = symbol;
var G__19507 = loc;
var G__19508 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19509_19621 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19510_19622 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19511_19623 = true;
var _STAR_print_fn_STAR__temp_val__19512_19624 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19511_19623);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19512_19624);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19470_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19470_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19510_19622);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19509_19621);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19505,G__19506,G__19507,G__19508) : format.call(null,G__19505,G__19506,G__19507,G__19508));
} else {
var G__19514 = "Execution error%s at %s(%s).\n%s\n";
var G__19515 = cause_type;
var G__19516 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19517 = loc;
var G__19518 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19514,G__19515,G__19516,G__19517,G__19518) : format.call(null,G__19514,G__19515,G__19516,G__19517,G__19518));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19478__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
