(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 33114, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(71645)
      , i = t.i(61745)
      , n = t.i(48148)
      , s = t.i(11241)
      , a = t.i(68877)
      , o = t.i(14381)
      , l = t.i(89664)
      , c = t.i(56420);
    let u = (0,
    c.default)("circle-alert", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }], ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]])
      , h = (0,
    c.default)("clock", [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["path", {
        d: "M12 6v6l4 2",
        key: "mmk7yg"
    }]]);
    var d = t.i(6560);
    let f = (0,
    c.default)("layers", [["path", {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo"
    }], ["path", {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc"
    }], ["path", {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6"
    }]])
      , p = (0,
    c.default)("pencil", [["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }], ["path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    }]]);
    var m = t.i(3293);
    let g = (0,
    c.default)("play", [["path", {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
    }]])
      , v = (0,
    c.default)("shield-x", [["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }], ["path", {
        d: "m14.5 9.5-5 5",
        key: "17q4r4"
    }], ["path", {
        d: "m9.5 9.5 5 5",
        key: "18nt4w"
    }]])
      , _ = (0,
    c.default)("wallet", [["path", {
        d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
        key: "18etb6"
    }], ["path", {
        d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
        key: "xoc0q4"
    }]]);
    var x = t.i(47925);
    t.i(249);
    var y = t.i(95889)
      , b = t.i(95218)
      , w = t.i(47438);
    t.i(99500);
    var T = t.i(43494)
      , k = t.i(4363)
      , S = t.i(72414)
      , j = t.i(89170)
      , M = t.i(90955)
      , O = t.i(98714);
    function E(t) {
        if (void 0 === t)
            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function C(t, e) {
        t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t.__proto__ = e
    }
    var N, A, P, R, z, F, D, L, I, B, Y, H, X, W, U, q, V, G, $, Q, Z, K, J, tt, te, tr, ti = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, tn = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, ts = 2 * Math.PI, ta = ts / 4, to = 0, tl = Math.sqrt, tc = Math.cos, tu = Math.sin, th = function(t) {
        return "string" == typeof t
    }, td = function(t) {
        return "function" == typeof t
    }, tf = function(t) {
        return "number" == typeof t
    }, tp = function(t) {
        return void 0 === t
    }, tm = function(t) {
        return "object" == typeof t
    }, tg = function(t) {
        return !1 !== t
    }, tv = function() {
        return "u" > typeof window
    }, t_ = function(t) {
        return td(t) || th(t)
    }, tx = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , ty = Array.isArray, tb = /random\([^)]+\)/g, tw = /,\s*/g, tT = /(?:-?\.?\d|\.)+/gi, tk = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, tS = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, tj = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, tM = /[+-]=-?[.\d]+/, tO = /[^,'"\[\]\s]+/gi, tE = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, tC = {}, tN = {}, tA = function(t) {
        return (tN = t9(t, tC)) && rJ
    }, tP = function(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }, tR = function(t, e) {
        return !e && console.warn(t)
    }, tz = function(t, e) {
        return t && (tC[t] = e) && tN && (tN[t] = e) || tC
    }, tF = function() {
        return 0
    }, tD = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, tL = {
        suppressEvents: !0,
        kill: !1
    }, tI = {
        suppressEvents: !0
    }, tB = {}, tY = [], tH = {}, tX = {}, tW = {}, tU = 30, tq = [], tV = "", tG = function(t) {
        var e, r, i = t[0];
        if (tm(i) || td(i) || (t = [t]),
        !(e = (i._gsap || {}).harness)) {
            for (r = tq.length; r-- && !tq[r].targetTest(i); )
                ;
            e = tq[r]
        }
        for (r = t.length; r--; )
            t[r] && (t[r]._gsap || (t[r]._gsap = new rs(t[r],e))) || t.splice(r, 1);
        return t
    }, t$ = function(t) {
        return t._gsap || tG(eA(t))[0]._gsap
    }, tQ = function(t, e, r) {
        return (r = t[e]) && td(r) ? t[e]() : tp(r) && t.getAttribute && t.getAttribute(e) || r
    }, tZ = function(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }, tK = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, tJ = function(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }, t0 = function(t, e) {
        var r = e.charAt(0)
          , i = parseFloat(e.substr(2));
        return t = parseFloat(t),
        "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }, t1 = function(t, e) {
        for (var r = e.length, i = 0; 0 > t.indexOf(e[i]) && ++i < r; )
            ;
        return i < r
    }, t2 = function() {
        var t, e, r = tY.length, i = tY.slice(0);
        for (t = 0,
        tH = {},
        tY.length = 0; t < r; t++)
            (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }, t5 = function(t) {
        return !!(t._initted || t._startAt || t.add)
    }, t3 = function(t, e, r, i) {
        tY.length && !V && t2(),
        t.render(e, r, i || !!(V && e < 0 && t5(t))),
        tY.length && !V && t2()
    }, t4 = function(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(tO).length < 2 ? e : th(t) ? t.trim() : t
    }, t8 = function(t) {
        return t
    }, t6 = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, t9 = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, t7 = function t(e, r) {
        for (var i in r)
            "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = tm(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
        return e
    }, et = function(t, e) {
        var r, i = {};
        for (r in t)
            r in e || (i[r] = t[r]);
        return i
    }, ee = function(t) {
        var e, r = t.parent || $, i = t.keyframes ? (e = ty(t.keyframes),
        function(t, r) {
            for (var i in r)
                i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
        }
        ) : t6;
        if (tg(t.inherit))
            for (; r; )
                i(t, r.vars.defaults),
                r = r.parent || r._dp;
        return t
    }, er = function(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
            ;
        return r < 0
    }, ei = function(t, e, r, i, n) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var s, a = t[i];
        if (n)
            for (s = e[n]; a && a[n] > s; )
                a = a._prev;
        return a ? (e._next = a._next,
        a._next = e) : (e._next = t[r],
        t[r] = e),
        e._next ? e._next._prev = e : t[i] = e,
        e._prev = a,
        e.parent = e._dp = t,
        e
    }, en = function(t, e, r, i) {
        void 0 === r && (r = "_first"),
        void 0 === i && (i = "_last");
        var n = e._prev
          , s = e._next;
        n ? n._next = s : t[r] === e && (t[r] = s),
        s ? s._prev = n : t[i] === e && (t[i] = n),
        e._next = e._prev = e.parent = null
    }, es = function(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
        t._act = 0
    }, ea = function(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; )
                r._dirty = 1,
                r = r.parent;
        return t
    }, eo = function(t) {
        for (var e = t.parent; e && e.parent; )
            e._dirty = 1,
            e.totalDuration(),
            e = e.parent;
        return t
    }, el = function(t, e, r, i) {
        return t._startAt && (V ? t._startAt.revert(tL) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }, ec = function(t) {
        return t._repeat ? eu(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, eu = function(t, e) {
        var r = Math.floor(t = tJ(t / e));
        return t && r === t ? r - 1 : r
    }, eh = function(t, e) {
        return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }, ed = function(t) {
        return t._end = tJ(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
    }, ef = function(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = tJ(r._time - (t._ts > 0 ? e / t._ts : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts))),
        ed(t),
        r._dirty || ea(r, t)),
        t
    }, ep = function(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = eh(t.rawTime(), e),
        (!e._dur || eO(0, e.totalDuration(), r) - e._tTime > 1e-8) && e.render(r, !0)),
        ea(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp; )
                    r.rawTime() >= 0 && r.totalTime(r._tTime),
                    r = r._dp;
            t._zTime = -1e-8
        }
    }, em = function(t, e, r, i) {
        return e.parent && es(e),
        e._start = tJ((tf(r) ? r : r || t !== $ ? eS(t, r, e) : t._time) + e._delay),
        e._end = tJ(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        ei(t, e, "_first", "_last", t._sort ? "_start" : 0),
        ex(e) || (t._recent = e),
        i || ep(t, e),
        t._ts < 0 && ef(t, t._tTime),
        t
    }, eg = function(t, e) {
        return (tC.ScrollTrigger || tP("scrollTrigger", e)) && tC.ScrollTrigger.create(e, t)
    }, ev = function(t, e, r, i, n) {
        return (r_(t, e, n),
        t._initted) ? !r && t._pt && !V && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && tt !== e1.frame ? (tY.push(t),
        t._lazy = [n, i],
        1) : void 0 : 1
    }, e_ = function t(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
    }, ex = function(t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e
    }, ey = function(t, e, r, i) {
        var n, s, a, o = t.ratio, l = e < 0 || !e && (!t._start && e_(t) && !(!t._initted && ex(t)) || (t._ts < 0 || t._dp._ts < 0) && !ex(t)) ? 0 : 1, c = t._rDelay, u = 0;
        if (c && t._repeat && (s = eu(u = eO(0, t._tDur, e), c),
        t._yoyo && 1 & s && (l = 1 - l),
        s !== eu(t._tTime, c) && (o = 1 - l,
        t.vars.repeatRefresh && t._initted && t.invalidate())),
        l !== o || V || i || 1e-8 === t._zTime || !e && t._zTime) {
            if (!t._initted && ev(t, e, i, r, u))
                return;
            for (a = t._zTime,
            t._zTime = e || 1e-8 * !!r,
            r || (r = e && !a),
            t.ratio = l,
            t._from && (l = 1 - l),
            t._time = 0,
            t._tTime = u,
            n = t._pt; n; )
                n.r(l, n.d),
                n = n._next;
            e < 0 && el(t, e, r, !0),
            t._onUpdate && !r && eX(t, "onUpdate"),
            u && t._repeat && !r && t.parent && eX(t, "onRepeat"),
            (e >= t._tDur || e < 0) && t.ratio === l && (l && es(t, 1),
            r || V || (eX(t, l ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()))
        } else
            t._zTime || (t._zTime = e)
    }, eb = function(t, e, r) {
        var i;
        if (r > e)
            for (i = t._first; i && i._start <= r; ) {
                if ("isPause" === i.data && i._start > e)
                    return i;
                i = i._next
            }
        else
            for (i = t._last; i && i._start >= r; ) {
                if ("isPause" === i.data && i._start < e)
                    return i;
                i = i._prev
            }
    }, ew = function(t, e, r, i) {
        var n = t._repeat
          , s = tJ(e) || 0
          , a = t._tTime / t._tDur;
        return a && !i && (t._time *= s / t._dur),
        t._dur = s,
        t._tDur = n ? n < 0 ? 1e10 : tJ(s * (n + 1) + t._rDelay * n) : s,
        a > 0 && !i && ef(t, t._tTime = t._tDur * a),
        t.parent && ed(t),
        r || ea(t.parent, t),
        t
    }, eT = function(t) {
        return t instanceof ro ? ea(t) : ew(t, t._dur)
    }, ek = {
        _start: 0,
        endTime: tF,
        totalDuration: tF
    }, eS = function t(e, r, i) {
        var n, s, a, o = e.labels, l = e._recent || ek, c = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
        return th(r) && (isNaN(r) || r in o) ? (s = r.charAt(0),
        a = "%" === r.substr(-1),
        n = r.indexOf("="),
        "<" === s || ">" === s) ? (n >= 0 && (r = r.replace(/=/, "")),
        ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? l : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = c),
        o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)),
        a && i && (s = s / 100 * (ty(i) ? i[0] : i).totalDuration()),
        n > 1 ? t(e, r.substr(0, n - 1), i) + s : c + s) : null == r ? c : +r
    }, ej = function(t, e, r) {
        var i, n, s = tf(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
        if (s && (o.duration = e[1]),
        o.parent = r,
        t) {
            for (i = o,
            n = r; n && !("immediateRender"in i); )
                i = n.vars.defaults || {},
                n = tg(n.vars.inherit) && n.parent;
            o.immediateRender = tg(i.immediateRender),
            t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
        }
        return new rS(e[0],o,e[a + 1])
    }, eM = function(t, e) {
        return t || 0 === t ? e(t) : e
    }, eO = function(t, e, r) {
        return r < t ? t : r > e ? e : r
    }, eE = function(t, e) {
        return th(t) && (e = tE.exec(t)) ? e[1] : ""
    }, eC = [].slice, eN = function(t, e) {
        return t && tm(t) && "length"in t && (!e && !t.length || t.length - 1 in t && tm(t[0])) && !t.nodeType && t !== Q
    }, eA = function(t, e, r) {
        var i;
        return G && !e && G.selector ? G.selector(t) : th(t) && !r && (Z || !e2()) ? eC.call((e || K).querySelectorAll(t), 0) : ty(t) ? (void 0 === i && (i = []),
        t.forEach(function(t) {
            var e;
            return th(t) && !r || eN(t, 1) ? (e = i).push.apply(e, eA(t)) : i.push(t)
        }) || i) : eN(t) ? eC.call(t, 0) : t ? [t] : []
    }, eP = function(t) {
        return t = eA(t)[0] || tR("Invalid scope") || {},
        function(e) {
            var r = t.current || t.nativeElement || t;
            return eA(e, r.querySelectorAll ? r : r === t ? tR("Invalid scope") || K.createElement("div") : t)
        }
    }, eR = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }, ez = function(t) {
        if (td(t))
            return t;
        var e = tm(t) ? t : {
            each: t
        }
          , r = rt(e.ease)
          , i = e.from || 0
          , n = parseFloat(e.base) || 0
          , s = {}
          , a = i > 0 && i < 1
          , o = isNaN(i) || a
          , l = e.axis
          , c = i
          , u = i;
        return th(i) ? c = u = ({
            center: .5,
            edges: .5,
            end: 1
        })[i] || 0 : !a && o && (c = i[0],
        u = i[1]),
        function(t, a, h) {
            var d, f, p, m, g, v, _, x, y, b = (h || e).length, w = s[b];
            if (!w) {
                if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                    for (_ = -1e8; _ < (_ = h[y++].getBoundingClientRect().left) && y < b; )
                        ;
                    y < b && y--
                }
                for (v = 0,
                w = s[b] = [],
                d = o ? Math.min(y, b) * c - .5 : i % y,
                f = 1e8 === y ? 0 : o ? b * u / y - .5 : i / y | 0,
                _ = 0,
                x = 1e8; v < b; v++)
                    p = v % y - d,
                    m = f - (v / y | 0),
                    w[v] = g = l ? Math.abs("y" === l ? m : p) : tl(p * p + m * m),
                    g > _ && (_ = g),
                    g < x && (x = g);
                "random" === i && eR(w),
                w.max = _ - x,
                w.min = x,
                w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (y > b ? b - 1 : l ? "y" === l ? b / y : y : Math.max(y, b / y)) || 0) * ("edges" === i ? -1 : 1),
                w.b = b < 0 ? n - b : n,
                w.u = eE(e.amount || e.each) || 0,
                r = r && b < 0 ? e7(r) : r
            }
            return b = (w[t] - w.min) / w.max || 0,
            tJ(w.b + (r ? r(b) : b) * w.v) + w.u
        }
    }, eF = function(t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function(r) {
            var i = tJ(Math.round(parseFloat(r) / t) * t * e);
            return (i - i % 1) / e + (tf(r) ? 0 : eE(r))
        }
    }, eD = function(t, e) {
        var r, i, n = ty(t);
        return !n && tm(t) && (r = n = t.radius || 1e8,
        t.values ? (i = !tf((t = eA(t.values))[0])) && (r *= r) : t = eF(t.increment)),
        eM(e, n ? td(t) ? function(e) {
            return Math.abs((i = t(e)) - e) <= r ? i : e
        }
        : function(e) {
            for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), l = 1e8, c = 0, u = t.length; u--; )
                (n = i ? (n = t[u].x - a) * n + (s = t[u].y - o) * s : Math.abs(t[u] - a)) < l && (l = n,
                c = u);
            return c = !r || l <= r ? t[c] : e,
            i || c === e || tf(e) ? c : c + eE(e)
        }
        : eF(t))
    }, eL = function(t, e, r, i) {
        return eM(ty(t) ? !e : !0 === r ? (r = 0,
        !1) : !i, function() {
            return ty(t) ? t[~~(Math.random() * t.length)] : (i = (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }, eI = function(t, e, r) {
        return eM(r, function(r) {
            return t[~~e(r)]
        })
    }, eB = function(t) {
        return t.replace(tb, function(t) {
            var e = t.indexOf("[") + 1
              , r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split(tw);
            return eL(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5)
        })
    }, eY = function(t, e, r, i, n) {
        var s = e - t
          , a = i - r;
        return eM(n, function(e) {
            return r + ((e - t) / s * a || 0)
        })
    }, eH = function(t, e, r) {
        var i, n, s, a = t.labels, o = 1e8;
        for (i in a)
            (n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (s = i,
            o = n);
        return s
    }, eX = function(t, e, r) {
        var i, n, s, a = t.vars, o = a[e], l = G, c = t._ctx;
        if (o)
            return i = a[e + "Params"],
            n = a.callbackScope || t,
            r && tY.length && t2(),
            c && (G = c),
            s = i ? o.apply(n, i) : o.call(n),
            G = l,
            s
    }, eW = function(t) {
        return es(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!V),
        1 > t.progress() && eX(t, "onInterrupt"),
        t
    }, eU = [], eq = function(t) {
        if (t)
            if (t = !t.name && t.default || t,
            tv() || t.headless) {
                var e = t.name
                  , r = td(t)
                  , i = e && !r && t.init ? function() {
                    this._props = []
                }
                : t
                  , n = {
                    init: tF,
                    render: rR,
                    add: rm,
                    kill: rF,
                    modifier: rz,
                    rawVars: 0
                }
                  , s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: rC,
                    aliases: {},
                    register: 0
                };
                if (e2(),
                t !== i) {
                    if (tX[e])
                        return;
                    t6(i, t6(et(t, n), s)),
                    t9(i.prototype, t9(n, et(t, s))),
                    tX[i.prop = e] = i,
                    t.targetTest && (tq.push(i),
                    tB[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                tz(e, i),
                t.register && t.register(rJ, i, rI)
            } else
                eU.push(t)
    }, eV = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0]
    }, eG = function(t, e, r) {
        return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * 255 + .5 | 0
    }, e$ = function(t, e, r) {
        var i, n, s, a, o, l, c, u, h, d, f = t ? tf(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : eV.black;
        if (!f) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            eV[t])
                f = eV[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && (i = t.charAt(1),
                t = "#" + i + i + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(f = parseInt(t.substr(1, 6), 16)) >> 16, f >> 8 & 255, 255 & f, parseInt(t.substr(7), 16) / 255];
                f = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
            } else if ("hsl" === t.substr(0, 3))
                if (f = d = t.match(tT),
                e) {
                    if (~t.indexOf("="))
                        return f = t.match(tk),
                        r && f.length < 4 && (f[3] = 1),
                        f
                } else
                    a = f[0] % 360 / 360,
                    o = f[1] / 100,
                    n = (l = f[2] / 100) <= .5 ? l * (o + 1) : l + o - l * o,
                    i = 2 * l - n,
                    f.length > 3 && (f[3] *= 1),
                    f[0] = eG(a + 1 / 3, i, n),
                    f[1] = eG(a, i, n),
                    f[2] = eG(a - 1 / 3, i, n);
            else
                f = t.match(tT) || eV.transparent;
            f = f.map(Number)
        }
        return e && !d && (i = f[0] / 255,
        l = ((c = Math.max(i, n = f[1] / 255, s = f[2] / 255)) + (u = Math.min(i, n, s))) / 2,
        c === u ? a = o = 0 : (h = c - u,
        o = l > .5 ? h / (2 - c - u) : h / (c + u),
        a = (c === i ? (n - s) / h + 6 * (n < s) : c === n ? (s - i) / h + 2 : (i - n) / h + 4) * 60),
        f[0] = ~~(a + .5),
        f[1] = ~~(100 * o + .5),
        f[2] = ~~(100 * l + .5)),
        r && f.length < 4 && (f[3] = 1),
        f
    }, eQ = function(t) {
        var e = []
          , r = []
          , i = -1;
        return t.split(eK).forEach(function(t) {
            var n = t.match(tS) || [];
            e.push.apply(e, n),
            r.push(i += n.length + 1)
        }),
        e.c = r,
        e
    }, eZ = function(t, e, r) {
        var i, n, s, a, o = "", l = (t + o).match(eK), c = e ? "hsla(" : "rgba(", u = 0;
        if (!l)
            return t;
        if (l = l.map(function(t) {
            return (t = e$(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        r && (s = eQ(t),
        (i = r.c).join(o) !== s.c.join(o)))
            for (a = (n = t.replace(eK, "1").split(tS)).length - 1; u < a; u++)
                o += n[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (s.length ? s : l.length ? l : r).shift());
        if (!n)
            for (a = (n = t.split(eK)).length - 1; u < a; u++)
                o += n[u] + l[u];
        return o + n[a]
    }, eK = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in eV)
            e += "|" + t + "\\b";
        return RegExp(e + ")", "gi")
    }(), eJ = /hsl[a]?\(/, e0 = function(t) {
        var e, r = t.join(" ");
        if (eK.lastIndex = 0,
        eK.test(r))
            return e = eJ.test(r),
            t[1] = eZ(t[1], e),
            t[0] = eZ(t[0], e, eQ(t[1])),
            !0
    }, e1 = (D = Date.now,
    L = 500,
    I = 33,
    Y = B = D(),
    H = 1e3 / 240,
    X = 1e3 / 240,
    W = [],
    U = function t(e) {
        var r, i, n, s, a = D() - Y, o = !0 === e;
        if ((a > L || a < 0) && (B += a - I),
        Y += a,
        ((r = (n = Y - B) - X) > 0 || o) && (s = ++R.frame,
        z = n - 1e3 * R.time,
        R.time = n /= 1e3,
        X += r + (r >= H ? 4 : H - r),
        i = 1),
        o || (N = A(t)),
        i)
            for (F = 0; F < W.length; F++)
                W[F](n, z, s, e)
    }
    ,
    R = {
        time: 0,
        frame: 0,
        tick: function() {
            U(!0)
        },
        deltaRatio: function(t) {
            return z / (1e3 / (t || 60))
        },
        wake: function() {
            J && (!Z && tv() && (K = (Q = Z = window).document || {},
            tC.gsap = rJ,
            (Q.gsapVersions || (Q.gsapVersions = [])).push(rJ.version),
            tA(tN || Q.GreenSockGlobals || !Q.gsap && Q || {}),
            eU.forEach(eq)),
            P = "u" > typeof requestAnimationFrame && requestAnimationFrame,
            N && R.sleep(),
            A = P || function(t) {
                return setTimeout(t, X - 1e3 * R.time + 1 | 0)
            }
            ,
            tr = 1,
            U(2))
        },
        sleep: function() {
            (P ? cancelAnimationFrame : clearTimeout)(N),
            tr = 0,
            A = tF
        },
        lagSmoothing: function(t, e) {
            I = Math.min(e || 33, L = t || 1 / 0)
        },
        fps: function(t) {
            H = 1e3 / (t || 240),
            X = 1e3 * R.time + H
        },
        add: function(t, e, r) {
            var i = e ? function(e, r, n, s) {
                t(e, r, n, s),
                R.remove(i)
            }
            : t;
            return R.remove(t),
            W[r ? "unshift" : "push"](i),
            e2(),
            i
        },
        remove: function(t, e) {
            ~(e = W.indexOf(t)) && W.splice(e, 1) && F >= e && F--
        },
        _listeners: W
    }), e2 = function() {
        return !tr && e1.wake()
    }, e5 = {}, e3 = /^[\d.\-M][\d.\-,\s]/, e4 = /["']/g, e8 = function(t) {
        for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, l = s.length; o < l; o++)
            r = s[o],
            e = o !== l - 1 ? r.lastIndexOf(",") : r.length,
            i = r.substr(0, e),
            n[a] = isNaN(i) ? i.replace(e4, "").trim() : +i,
            a = r.substr(e + 1).trim();
        return n
    }, e6 = function(t) {
        var e = t.indexOf("(") + 1
          , r = t.indexOf(")")
          , i = t.indexOf("(", e);
        return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
    }, e9 = function(t) {
        var e = (t + "").split("(")
          , r = e5[e[0]];
        return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [e8(e[1])] : e6(t).split(",").map(t4)) : e5._CE && e3.test(t) ? e5._CE("", t) : r
    }, e7 = function(t) {
        return function(e) {
            return 1 - t(1 - e)
        }
    }, rt = function(t, e) {
        return t && (td(t) ? t : e5[t] || e9(t)) || e
    }, re = function(t, e, r, i) {
        void 0 === r && (r = function(t) {
            return 1 - e(1 - t)
        }
        ),
        void 0 === i && (i = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2
        }
        );
        var n, s = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return tZ(t, function(t) {
            for (var e in e5[t] = tC[t] = s,
            e5[n = t.toLowerCase()] = r,
            s)
                e5[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = e5[t + "." + e] = s[e]
        }),
        s
    }, rr = function(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t((e - .5) * 2) / 2
        }
    }, ri = function t(e, r, i) {
        var n = r >= 1 ? r : 1
          , s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1)
          , a = s / ts * (Math.asin(1 / n) || 0)
          , o = function(t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * tu((t - a) * s) + 1
        }
          , l = "out" === e ? o : "in" === e ? function(t) {
            return 1 - o(1 - t)
        }
        : rr(o);
        return s = ts / s,
        l.config = function(r, i) {
            return t(e, r, i)
        }
        ,
        l
    }, rn = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var i = function(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
          , n = "out" === e ? i : "in" === e ? function(t) {
            return 1 - i(1 - t)
        }
        : rr(i);
        return n.config = function(r) {
            return t(e, r)
        }
        ,
        n
    };
    tZ("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        re(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
        })
    }),
    e5.Linear.easeNone = e5.none = e5.Linear.easeIn,
    re("Elastic", ri("in"), ri("out"), ri()),
    rc = 2 * (rl = 1 / 2.75),
    ru = 2.5 * rl,
    re("Bounce", function(t) {
        return 1 - rh(1 - t)
    }, rh = function(t) {
        return t < rl ? 7.5625 * t * t : t < rc ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < ru ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ),
    re("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }),
    re("Circ", function(t) {
        return -(tl(1 - t * t) - 1)
    }),
    re("Sine", function(t) {
        return 1 === t ? 1 : -tc(t * ta) + 1
    }),
    re("Back", rn("in"), rn("out"), rn()),
    e5.SteppedEase = e5.steps = tC.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t
              , i = t + +!e
              , n = +!!e
              , s = .99999999;
            return function(t) {
                return ((i * eO(0, s, t) | 0) + n) * r
            }
        }
    },
    tn.ease = e5["quad.out"],
    tZ("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return tV += t + "," + t + "Params,"
    });
    var rs = function(t, e) {
        this.id = to++,
        t._gsap = this,
        this.target = t,
        this.harness = e,
        this.get = e ? e.get : tQ,
        this.set = e ? e.getSetter : rC
    }
      , ra = function() {
        function t(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            ew(this, +t.duration, 1, 1),
            this.data = t.data,
            G && (this._ctx = G,
            G.data.push(this)),
            tr || e1.wake()
        }
        var e = t.prototype;
        return e.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            ew(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        e.totalTime = function(t, e) {
            if (e2(),
            !arguments.length)
                return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (ef(this, t),
                !r._dp || r.parent || ep(r, this); r && r.parent; )
                    r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : -((r.totalDuration() - r._tTime) / r._ts)) && r.totalTime(r._tTime, !0),
                    r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && em(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !this._initted && this._dur && t || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            t3(this, t, e)),
            this
        }
        ,
        e.time = function(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ec(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }
        ,
        e.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
        }
        ,
        e.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) + ec(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : +(this.rawTime() > 0)
        }
        ,
        e.iteration = function(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? eu(this._tTime, r) + 1 : 1
        }
        ,
        e.timeScale = function(t, e) {
            if (!arguments.length)
                return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var r = this.parent && this._ts ? eh(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
            this.totalTime(eO(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e),
            ed(this),
            eo(this)
        }
        ,
        e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (e2(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))),
            this) : this._ps
        }
        ,
        e.startTime = function(t) {
            if (arguments.length) {
                this._start = tJ(t);
                var e = this.parent || this._dp;
                return e && (e._sort || !this.parent) && em(e, this, this._start - this._delay),
                this
            }
            return this._start
        }
        ,
        e.endTime = function(t) {
            return this._start + (tg(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }
        ,
        e.rawTime = function(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && 1 > this.totalProgress()) ? this._tTime % (this._dur + this._rDelay) : this._ts ? eh(e.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        e.revert = function(t) {
            void 0 === t && (t = tI);
            var e = V;
            return V = t,
            t5(this) && (this.timeline && this.timeline.revert(t),
            this.totalTime(-.01, t.suppressEvents)),
            "nested" !== this.data && !1 !== t.kill && this.kill(),
            V = e,
            this
        }
        ,
        e.globalTime = function(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                r = e._start + r / (Math.abs(e._ts) || 1),
                e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
        }
        ,
        e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            eT(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        e.repeatDelay = function(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t,
                eT(this),
                e ? this.time(e) : this
            }
            return this._rDelay
        }
        ,
        e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        e.seek = function(t, e) {
            return this.totalTime(eS(this, t), tg(e))
        }
        ,
        e.restart = function(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, tg(e)),
            this._dur || (this._zTime = -1e-8),
            this
        }
        ,
        e.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        e.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        e.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        e.resume = function() {
            return this.paused(!1)
        }
        ,
        e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this) : this._rts < 0
        }
        ,
        e.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -1e-8,
            this
        }
        ,
        e.isActive = function() {
            var t, e = this.parent || this._dp, r = this._start;
            return !!(!e || this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - 1e-8)
        }
        ,
        e.eventCallback = function(t, e, r) {
            var i = this.vars;
            return arguments.length > 1 ? (e ? (i[t] = e,
            r && (i[t + "Params"] = r),
            "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
            this) : i[t]
        }
        ,
        e.then = function(t) {
            var e = this
              , r = e._prom;
            return new Promise(function(i) {
                var n = td(t) ? t : t8
                  , s = function() {
                    var t = e.then;
                    e.then = null,
                    r && r(),
                    td(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    i(n),
                    e.then = t
                };
                e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? s() : e._prom = s
            }
            )
        }
        ,
        e.kill = function() {
            eW(this)
        }
        ,
        t
    }();
    t6(ra.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var ro = function(t) {
        function e(e, r) {
            var i;
            return void 0 === e && (e = {}),
            (i = t.call(this, e) || this).labels = {},
            i.smoothChildTiming = !!e.smoothChildTiming,
            i.autoRemoveChildren = !!e.autoRemoveChildren,
            i._sort = tg(e.sortChildren),
            $ && em(e.parent || $, E(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && eg(E(i), e.scrollTrigger),
            i
        }
        C(e, t);
        var r = e.prototype;
        return r.to = function(t, e, r) {
            return ej(0, arguments, this),
            this
        }
        ,
        r.from = function(t, e, r) {
            return ej(1, arguments, this),
            this
        }
        ,
        r.fromTo = function(t, e, r, i) {
            return ej(2, arguments, this),
            this
        }
        ,
        r.set = function(t, e, r) {
            return e.duration = 0,
            e.parent = this,
            ee(e).repeatDelay || (e.repeat = 0),
            e.immediateRender = !!e.immediateRender,
            new rS(t,e,eS(this, r),1),
            this
        }
        ,
        r.call = function(t, e, r) {
            return em(this, rS.delayedCall(0, t, e), r)
        }
        ,
        r.staggerTo = function(t, e, r, i, n, s, a) {
            return r.duration = e,
            r.stagger = r.stagger || i,
            r.onComplete = s,
            r.onCompleteParams = a,
            r.parent = this,
            new rS(t,r,eS(this, n)),
            this
        }
        ,
        r.staggerFrom = function(t, e, r, i, n, s, a) {
            return r.runBackwards = 1,
            ee(r).immediateRender = tg(r.immediateRender),
            this.staggerTo(t, e, r, i, n, s, a)
        }
        ,
        r.staggerFromTo = function(t, e, r, i, n, s, a, o) {
            return i.startAt = r,
            ee(i).immediateRender = tg(i.immediateRender),
            this.staggerTo(t, e, i, n, s, a, o)
        }
        ,
        r.render = function(t, e, r) {
            var i, n, s, a, o, l, c, u, h, d, f, p, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, _ = t <= 0 ? 0 : tJ(t), x = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (this !== $ && _ > g && t >= 0 && (_ = g),
            _ !== this._tTime || r || x) {
                if (m !== this._time && v && (_ += this._time - m,
                t += this._time - m),
                i = _,
                h = this._start,
                l = !(u = this._ts),
                x && (v || (m = this._zTime),
                (t || !e) && (this._zTime = t)),
                this._repeat) {
                    if (f = this._yoyo,
                    o = v + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, e, r);
                    if (i = tJ(_ % o),
                    _ === g ? (a = this._repeat,
                    i = v) : ((a = ~~(d = tJ(_ / o))) && a === d && (i = v,
                    a--),
                    i > v && (i = v)),
                    d = eu(this._tTime, o),
                    !m && this._tTime && d !== a && this._tTime - d * o - this._dur <= 0 && (d = a),
                    f && 1 & a && (i = v - i,
                    p = 1),
                    a !== d && !this._lock) {
                        var y = f && 1 & d
                          , b = y === (f && 1 & a);
                        if (a < d && (y = !y),
                        m = y ? 0 : _ % v ? v : _,
                        this._lock = 1,
                        this.render(m || (p ? 0 : tJ(a * o)), e, !v)._lock = 0,
                        this._tTime = _,
                        !e && this.parent && eX(this, "onRepeat"),
                        this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1,
                        d = a),
                        m && m !== this._time || !this._ts !== l || this.vars.onRepeat && !this.parent && !this._act || (v = this._dur,
                        g = this._tDur,
                        b && (this._lock = 2,
                        m = y ? v : -1e-4,
                        this.render(m, !0),
                        this.vars.repeatRefresh && !p && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !l))
                            return this
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (c = eb(this, tJ(m), tJ(i))) && (_ -= i - (i = c._start)),
                this._tTime = _,
                this._time = i,
                this._act = !!u,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                m = 0),
                !m && _ && v && !e && !d && (eX(this, "onStart"),
                this._tTime !== _))
                    return this;
                if (i >= m && t >= 0)
                    for (n = this._first; n; ) {
                        if (s = n._next,
                        (n._act || i >= n._start) && n._ts && c !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                            i !== this._time || !this._ts && !l) {
                                c = 0,
                                s && (_ += this._zTime = -1e-8);
                                break
                            }
                        }
                        n = s
                    }
                else {
                    n = this._last;
                    for (var w = t < 0 ? t : i; n; ) {
                        if (s = n._prev,
                        (n._act || w <= n._end) && n._ts && c !== n) {
                            if (n.parent !== this)
                                return this.render(t, e, r);
                            if (n.render(n._ts > 0 ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || V && t5(n)),
                            i !== this._time || !this._ts && !l) {
                                c = 0,
                                s && (_ += this._zTime = w ? -1e-8 : 1e-8);
                                break
                            }
                        }
                        n = s
                    }
                }
                if (c && !e && (this.pause(),
                c.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1,
                this._ts))
                    return this._start = h,
                    ed(this),
                    this.render(t, e, r);
                this._onUpdate && !e && eX(this, "onUpdate", !0),
                (_ === g && this._tTime >= this.totalDuration() || !_ && m) && (h === this._start || Math.abs(u) !== Math.abs(this._ts)) && !this._lock && ((t || !v) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && es(this, 1),
                e || t < 0 && !m || !_ && !m && g || (eX(this, _ === g && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(_ < g && this.timeScale() > 0) && this._prom()))
            }
            return this
        }
        ,
        r.add = function(t, e) {
            var r = this;
            if (tf(e) || (e = eS(this, e, t)),
            !(t instanceof ra)) {
                if (ty(t))
                    return t.forEach(function(t) {
                        return r.add(t, e)
                    }),
                    this;
                if (th(t))
                    return this.addLabel(t, e);
                if (!td(t))
                    return this;
                t = rS.delayedCall(0, t)
            }
            return this !== t ? em(this, t, e) : this
        }
        ,
        r.getChildren = function(t, e, r, i) {
            void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -1e8);
            for (var n = [], s = this._first; s; )
                s._start >= i && (s instanceof rS ? e && n.push(s) : (r && n.push(s),
                t && n.push.apply(n, s.getChildren(!0, e, r)))),
                s = s._next;
            return n
        }
        ,
        r.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t)
                    return e[r]
        }
        ,
        r.remove = function(t) {
            return th(t) ? this.removeLabel(t) : td(t) ? this.killTweensOf(t) : (t.parent === this && en(this, t),
            t === this._recent && (this._recent = this._last),
            ea(this))
        }
        ,
        r.totalTime = function(e, r) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = tJ(e1.time - (this._ts > 0 ? e / this._ts : -((this.totalDuration() - e) / this._ts)))),
            t.prototype.totalTime.call(this, e, r),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        r.addLabel = function(t, e) {
            return this.labels[t] = eS(this, e),
            this
        }
        ,
        r.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        r.addPause = function(t, e, r) {
            var i = rS.delayedCall(0, e || tF, r);
            return i.data = "isPause",
            this._hasPause = 1,
            em(this, i, eS(this, t))
        }
        ,
        r.removePause = function(t) {
            var e = this._first;
            for (t = eS(this, t); e; )
                e._start === t && "isPause" === e.data && es(e),
                e = e._next
        }
        ,
        r.killTweensOf = function(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                rd !== i[n] && i[n].kill(t, e);
            return this
        }
        ,
        r.getTweensOf = function(t, e) {
            for (var r, i = [], n = eA(t), s = this._first, a = tf(e); s; )
                s instanceof rS ? t1(s._targets, n) && (a ? (!rd || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                s = s._next;
            return i
        }
        ,
        r.tweenTo = function(t, e) {
            e = e || {};
            var r, i = this, n = eS(i, t), s = e, a = s.startAt, o = s.onStart, l = s.onStartParams, c = s.immediateRender, u = rS.to(i, t6({
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || 1e-8,
                onStart: function() {
                    if (i.pause(),
                    !r) {
                        var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                        u._dur !== t && ew(u, t, 0, 1).render(u._time, !0, !0),
                        r = 1
                    }
                    o && o.apply(u, l || [])
                }
            }, e));
            return c ? u.render(0) : u
        }
        ,
        r.tweenFromTo = function(t, e, r) {
            return this.tweenTo(e, t6({
                startAt: {
                    time: eS(this, t)
                }
            }, r))
        }
        ,
        r.recent = function() {
            return this._recent
        }
        ,
        r.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            eH(this, eS(this, t))
        }
        ,
        r.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            eH(this, eS(this, t), 1)
        }
        ,
        r.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }
        ,
        r.shiftChildren = function(t, e, r) {
            void 0 === r && (r = 0);
            var i, n = this._first, s = this.labels;
            for (t = tJ(t); n; )
                n._start >= r && (n._start += t,
                n._end += t),
                n = n._next;
            if (e)
                for (i in s)
                    s[i] >= r && (s[i] += t);
            return ea(this)
        }
        ,
        r.invalidate = function(e) {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(e),
                r = r._next;
            return t.prototype.invalidate.call(this, e)
        }
        ,
        r.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
                e = r._next,
                this.remove(r),
                r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            ea(this)
        }
        ,
        r.totalDuration = function(t) {
            var e, r, i, n = 0, s = this._last, a = 1e8;
            if (arguments.length)
                return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for (i = this.parent; s; )
                    e = s._prev,
                    s._dirty && s.totalDuration(),
                    (r = s._start) > a && this._sort && s._ts && !this._lock ? (this._lock = 1,
                    em(this, s, r - s._delay, 1)._lock = 0) : a = r,
                    r < 0 && s._ts && (n -= r,
                    (!i && !this._dp || i && i.smoothChildTiming) && (this._start += tJ(r / this._ts),
                    this._time -= r,
                    this._tTime -= r),
                    this.shiftChildren(-r, !1, -Infinity),
                    a = 0),
                    s._end > n && s._ts && (n = s._end),
                    s = e;
                ew(this, this === $ && this._time > n ? this._time : n, 1, 1),
                this._dirty = 0
            }
            return this._tDur
        }
        ,
        e.updateRoot = function(t) {
            if ($._ts && (t3($, eh(t, $)),
            tt = e1.frame),
            e1.frame >= tU) {
                tU += ti.autoSleep || 120;
                var e = $._first;
                if ((!e || !e._ts) && ti.autoSleep && e1._listeners.length < 2) {
                    for (; e && !e._ts; )
                        e = e._next;
                    e || e1.sleep()
                }
            }
        }
        ,
        e
    }(ra);
    t6(ro.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var rl, rc, ru, rh, rd, rf, rp = function(t, e, r, i, n, s, a) {
        var o, l, c, u, h, d, f, p, m = new rI(this._pt,t,e,0,1,rP,null,n), g = 0, v = 0;
        for (m.b = r,
        m.e = i,
        r += "",
        i += "",
        (f = ~i.indexOf("random(")) && (i = eB(i)),
        s && (s(p = [r, i], t, e),
        r = p[0],
        i = p[1]),
        l = r.match(tj) || []; o = tj.exec(i); )
            u = o[0],
            h = i.substring(g, o.index),
            c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1),
            u !== l[v++] && (d = parseFloat(l[v - 1]) || 0,
            m._pt = {
                _next: m._pt,
                p: h || 1 === v ? h : ",",
                s: d,
                c: "=" === u.charAt(1) ? t0(d, u) - d : parseFloat(u) - d,
                m: c && c < 4 ? Math.round : 0
            },
            g = tj.lastIndex);
        return m.c = g < i.length ? i.substring(g, i.length) : "",
        m.fp = a,
        (tM.test(i) || f) && (m.e = 0),
        this._pt = m,
        m
    }, rm = function(t, e, r, i, n, s, a, o, l, c) {
        td(i) && (i = i(n || 0, t, s));
        var u, h = t[e], d = "get" !== r ? r : td(h) ? l ? t[e.indexOf("set") || !td(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h, f = td(h) ? l ? rO : rM : rj;
        if (th(i) && (~i.indexOf("random(") && (i = eB(i)),
        "=" === i.charAt(1) && ((u = t0(d, i) + (eE(d) || 0)) || 0 === u) && (i = u)),
        !c || d !== i || rf)
            return isNaN(d * i) || "" === i ? (h || e in t || tP(e, i),
            rp.call(this, t, e, d, i, f, o || ti.stringFilter, l)) : (u = new rI(this._pt,t,e,+d || 0,i - (d || 0),"boolean" == typeof h ? rA : rN,0,f),
            l && (u.fp = l),
            a && u.modifier(a, this, t),
            this._pt = u)
    }, rg = function(t, e, r, i, n) {
        if (td(t) && (t = rw(t, n, e, r, i)),
        !tm(t) || t.style && t.nodeType || ty(t) || tx(t))
            return th(t) ? rw(t, n, e, r, i) : t;
        var s, a = {};
        for (s in t)
            a[s] = rw(t[s], n, e, r, i);
        return a
    }, rv = function(t, e, r, i, n, s) {
        var a, o, l, c;
        if (tX[t] && !1 !== (a = new tX[t]).init(n, a.rawVars ? e[t] : rg(e[t], i, n, s, r), r, i, s) && (r._pt = o = new rI(r._pt,n,t,0,1,a.render,a,0,a.priority),
        r !== te))
            for (l = r._ptLookup[r._targets.indexOf(n)],
            c = a._props.length; c--; )
                l[a._props[c]] = o;
        return a
    }, r_ = function t(e, r, i) {
        var n, s, a, o, l, c, u, h, d, f, p, m, g, v = e.vars, _ = v.ease, x = v.startAt, y = v.immediateRender, b = v.lazy, w = v.onUpdate, T = v.runBackwards, k = v.yoyoEase, S = v.keyframes, j = v.autoRevert, M = e._dur, O = e._startAt, E = e._targets, C = e.parent, N = C && "nested" === C.data ? C.vars.targets : E, A = "auto" === e._overwrite && !q, P = e.timeline, R = v.easeReverse || k;
        if (!P || S && _ || (_ = "none"),
        e._ease = rt(_, tn.ease),
        e._rEase = R && (rt(R) || e._ease),
        e._from = !P && !!v.runBackwards,
        e._from && (e.ratio = 1),
        !P || S && !v.stagger) {
            if (m = (h = E[0] ? t$(E[0]).harness : 0) && v[h.prop],
            n = et(v, tB),
            O && (O._zTime < 0 && O.progress(1),
            r < 0 && T && y && !j ? O.render(-1, !0) : O.revert(T && M ? tL : tD),
            O._lazy = 0),
            x) {
                if (es(e._startAt = rS.set(E, t6({
                    data: "isStart",
                    overwrite: !1,
                    parent: C,
                    immediateRender: !0,
                    lazy: !O && tg(b),
                    startAt: null,
                    delay: 0,
                    onUpdate: w && function() {
                        return eX(e, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, x))),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                r < 0 && (V || !y && !j) && e._startAt.revert(tL),
                y && M && r <= 0 && i <= 0) {
                    r && (e._zTime = r);
                    return
                }
            } else if (T && M && !O)
                if (r && (y = !1),
                a = t6({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: y && !O && tg(b),
                    immediateRender: y,
                    stagger: 0,
                    parent: C
                }, n),
                m && (a[h.prop] = m),
                es(e._startAt = rS.set(E, a)),
                e._startAt._dp = 0,
                e._startAt._sat = e,
                r < 0 && (V ? e._startAt.revert(tL) : e._startAt.render(-1, !0)),
                e._zTime = r,
                y) {
                    if (!r)
                        return
                } else
                    t(e._startAt, 1e-8, 1e-8);
            for (s = 0,
            e._pt = e._ptCache = 0,
            b = M && tg(b) || b && !M; s < E.length; s++) {
                if (u = (l = E[s])._gsap || tG(E)[s]._gsap,
                e._ptLookup[s] = f = {},
                tH[u.id] && tY.length && t2(),
                p = N === E ? s : N.indexOf(l),
                h && !1 !== (d = new h).init(l, m || n, e, p, N) && (e._pt = o = new rI(e._pt,l,d.name,0,1,d.render,d,0,d.priority),
                d._props.forEach(function(t) {
                    f[t] = o
                }),
                d.priority && (c = 1)),
                !h || m)
                    for (a in n)
                        tX[a] && (d = rv(a, n, e, p, l, N)) ? d.priority && (c = 1) : f[a] = o = rm.call(e, l, a, "get", n[a], p, N, 0, v.stringFilter);
                e._op && e._op[s] && e.kill(l, e._op[s]),
                A && e._pt && (rd = e,
                $.killTweensOf(l, f, e.globalTime(r)),
                g = !e.parent,
                rd = 0),
                e._pt && b && (tH[u.id] = 1)
            }
            c && rL(e),
            e._onInit && e._onInit(e)
        }
        e._onUpdate = w,
        e._initted = (!e._op || e._pt) && !g,
        S && r <= 0 && P.render(1e8, !0, !0)
    }, rx = function(t, e, r, i, n, s, a, o) {
        var l, c, u, h, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!d)
            for (d = t._ptCache[e] = [],
            u = t._ptLookup,
            h = t._targets.length; h--; ) {
                if ((l = u[h][e]) && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
                        l = l._next;
                if (!l)
                    return rf = 1,
                    t.vars[e] = "+=0",
                    r_(t, a),
                    rf = 0,
                    o ? tR(e + " not eligible for reset. Try splitting into individual properties") : 1;
                d.push(l)
            }
        for (h = d.length; h--; )
            (l = (c = d[h])._pt || c).s = (i || 0 === i) && !n ? i : l.s + (i || 0) + s * l.c,
            l.c = r - l.s,
            c.e && (c.e = tK(r) + eE(c.e)),
            c.b && (c.b = l.s + eE(c.b))
    }, ry = function(t, e) {
        var r, i, n, s, a = t[0] ? t$(t[0]).harness : 0, o = a && a.aliases;
        if (!o)
            return e;
        for (i in r = t9({}, e),
        o)
            if (i in r)
                for (n = (s = o[i].split(",")).length; n--; )
                    r[s[n]] = r[i];
        return r
    }, rb = function(t, e, r, i) {
        var n, s, a = e.ease || i || "power1.inOut";
        if (ty(e))
            s = r[t] || (r[t] = []),
            e.forEach(function(t, r) {
                return s.push({
                    t: r / (e.length - 1) * 100,
                    v: t,
                    e: a
                })
            });
        else
            for (n in e)
                s = r[n] || (r[n] = []),
                "ease" === n || s.push({
                    t: parseFloat(t),
                    v: e[n],
                    e: a
                })
    }, rw = function(t, e, r, i, n) {
        return td(t) ? t.call(e, r, i, n) : th(t) && ~t.indexOf("random(") ? eB(t) : t
    }, rT = tV + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert", rk = {};
    tZ(rT + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return rk[t] = 1
    });
    var rS = function(t) {
        function e(e, r, i, n) {
            "number" == typeof r && (i.duration = r,
            r = i,
            i = null);
            var s, a, o, l, c, u, h, d, f = t.call(this, n ? r : ee(r)) || this, p = f.vars, m = p.duration, g = p.delay, v = p.immediateRender, _ = p.stagger, x = p.overwrite, y = p.keyframes, b = p.defaults, w = p.scrollTrigger, T = r.parent || $, k = (ty(e) || tx(e) ? tf(e[0]) : "length"in r) ? [e] : eA(e);
            if (f._targets = k.length ? tG(k) : tR("GSAP target " + e + " not found. https://gsap.com", !ti.nullTargetWarn) || [],
            f._ptLookup = [],
            f._overwrite = x,
            y || _ || t_(m) || t_(g)) {
                var S = (r = f.vars).easeReverse || r.yoyoEase;
                if ((s = f.timeline = new ro({
                    data: "nested",
                    defaults: b || {},
                    targets: T && "nested" === T.data ? T.vars.targets : k
                })).kill(),
                s.parent = s._dp = E(f),
                s._start = 0,
                _ || t_(m) || t_(g)) {
                    if (l = k.length,
                    h = _ && ez(_),
                    tm(_))
                        for (c in _)
                            ~rT.indexOf(c) && (d || (d = {}),
                            d[c] = _[c]);
                    for (a = 0; a < l; a++)
                        (o = et(r, rk)).stagger = 0,
                        S && (o.easeReverse = S),
                        d && t9(o, d),
                        u = k[a],
                        o.duration = +rw(m, E(f), a, u, k),
                        o.delay = (+rw(g, E(f), a, u, k) || 0) - f._delay,
                        !_ && 1 === l && o.delay && (f._delay = g = o.delay,
                        f._start += g,
                        o.delay = 0),
                        s.to(u, o, h ? h(a, u, k) : 0),
                        s._ease = e5.none;
                    s.duration() ? m = g = 0 : f.timeline = 0
                } else if (y) {
                    ee(t6(s.vars.defaults, {
                        ease: "none"
                    })),
                    s._ease = rt(y.ease || r.ease || "none");
                    var j, M, O, C = 0;
                    if (ty(y))
                        y.forEach(function(t) {
                            return s.to(k, t, ">")
                        }),
                        s.duration();
                    else {
                        for (c in o = {},
                        y)
                            "ease" === c || "easeEach" === c || rb(c, y[c], o, y.easeEach);
                        for (c in o)
                            for (a = 0,
                            j = o[c].sort(function(t, e) {
                                return t.t - e.t
                            }),
                            C = 0; a < j.length; a++)
                                (O = {
                                    ease: (M = j[a]).e,
                                    duration: (M.t - (a ? j[a - 1].t : 0)) / 100 * m
                                })[c] = M.v,
                                s.to(k, O, C),
                                C += O.duration;
                        s.duration() < m && s.to({}, {
                            duration: m - s.duration()
                        })
                    }
                }
                m || f.duration(m = s.duration())
            } else
                f.timeline = 0;
            return !0 !== x || q || (rd = E(f),
            $.killTweensOf(k),
            rd = 0),
            em(T, E(f), i),
            r.reversed && f.reverse(),
            r.paused && f.paused(!0),
            (v || !m && !y && f._start === tJ(T._time) && tg(v) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(E(f)) && "nested" !== T.data) && (f._tTime = -1e-8,
            f.render(Math.max(0, -g) || 0)),
            w && eg(E(f), w),
            f
        }
        C(e, t);
        var r = e.prototype;
        return r.render = function(t, e, r) {
            var i, n, s, a, o, l, c, u, h = this._time, d = this._tDur, f = this._dur, p = t < 0, m = t > d - 1e-8 && !p ? d : t < 1e-8 ? 0 : t;
            if (f) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== p || this._lazy) {
                    if (i = m,
                    u = this.timeline,
                    this._repeat) {
                        if (a = f + this._rDelay,
                        this._repeat < -1 && p)
                            return this.totalTime(100 * a + t, e, r);
                        if (i = tJ(m % a),
                        m === d ? (s = this._repeat,
                        i = f) : (s = ~~(o = tJ(m / a))) && s === o ? (i = f,
                        s--) : i > f && (i = f),
                        (l = this._yoyo && 1 & s) && (i = f - i),
                        o = eu(this._tTime, a),
                        i === h && !r && this._initted && s === o)
                            return this._tTime = m,
                            this;
                        s !== o && this.vars.repeatRefresh && !l && !this._lock && i !== a && this._initted && (this._lock = r = 1,
                        this.render(tJ(a * s), !0).invalidate()._lock = 0)
                    }
                    if (!this._initted) {
                        if (ev(this, p ? t : i, r, e, m))
                            return this._tTime = 0,
                            this;
                        if (h !== this._time && !(r && this.vars.repeatRefresh && s !== o))
                            return this;
                        if (f !== this._dur)
                            return this.render(t, e, r)
                    }
                    if (this._rEase) {
                        var g = i < h;
                        if (g !== this._inv) {
                            var v = g ? h : f - h;
                            this._inv = g,
                            this._from && (this.ratio = 1 - this.ratio),
                            this._invRatio = this.ratio,
                            this._invTime = h,
                            this._invRecip = v ? (g ? -1 : 1) / v : 0,
                            this._invScale = g ? -this.ratio : 1 - this.ratio,
                            this._invEase = g ? this._rEase : this._ease
                        }
                        this.ratio = c = this._invRatio + this._invScale * this._invEase((i - this._invTime) * this._invRecip)
                    } else
                        this.ratio = c = this._ease(i / f);
                    if (this._from && (this.ratio = c = 1 - c),
                    this._tTime = m,
                    this._time = i,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    !h && m && !e && !o && (eX(this, "onStart"),
                    this._tTime !== m))
                        return this;
                    for (n = this._pt; n; )
                        n.r(c, n.d),
                        n = n._next;
                    u && u.render(t < 0 ? t : u._dur * u._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t),
                    this._onUpdate && !e && (p && el(this, t, e, r),
                    eX(this, "onUpdate")),
                    this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && eX(this, "onRepeat"),
                    (m === this._tDur || !m) && this._tTime === m && (p && !this._onUpdate && el(this, t, !0, !0),
                    (t || !f) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && es(this, 1),
                    !e && !(p && !h) && (m || h || l) && (eX(this, m === d ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(m < d && this.timeScale() > 0) && this._prom()))
                }
            } else
                ey(this, t, e, r);
            return this
        }
        ,
        r.targets = function() {
            return this._targets
        }
        ,
        r.invalidate = function(e) {
            return e && this.vars.runBackwards || (this._startAt = 0),
            this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
        }
        ,
        r.resetTo = function(t, e, r, i, n) {
            tr || e1.wake(),
            this._ts || this.play();
            var s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return (this._initted || r_(this, s),
            rx(this, t, e, r, i, this._ease(s / this._dur), s, n)) ? this.resetTo(t, e, r, i, 1) : (ef(this, 0),
            this.parent || ei(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
        }
        ,
        r.kill = function(t, e) {
            if (void 0 === e && (e = "all"),
            !t && (!e || "all" === e))
                return this._lazy = this._pt = 0,
                this.parent ? eW(this) : this.scrollTrigger && this.scrollTrigger.kill(!!V),
                this;
            if (this.timeline) {
                var r = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, rd && !0 !== rd.vars.overwrite)._first || eW(this),
                this.parent && r !== this.timeline.totalDuration() && ew(this, this._dur * this.timeline._tDur / r, 0, 1),
                this
            }
            var i, n, s, a, o, l, c, u = this._targets, h = t ? eA(t) : u, d = this._ptLookup, f = this._pt;
            if ((!e || "all" === e) && er(u, h))
                return "all" === e && (this._pt = 0),
                eW(this);
            for (i = this._op = this._op || [],
            "all" !== e && (th(e) && (o = {},
            tZ(e, function(t) {
                return o[t] = 1
            }),
            e = o),
            e = ry(u, e)),
            c = u.length; c--; )
                if (~h.indexOf(u[c]))
                    for (o in n = d[c],
                    "all" === e ? (i[c] = e,
                    a = n,
                    s = {}) : (s = i[c] = i[c] || {},
                    a = e),
                    a)
                        (l = n && n[o]) && ("kill"in l.d && !0 !== l.d.kill(o) || en(this, l, "_pt"),
                        delete n[o]),
                        "all" !== s && (s[o] = 1);
            return this._initted && !this._pt && f && eW(this),
            this
        }
        ,
        e.to = function(t, r) {
            return new e(t,r,arguments[2])
        }
        ,
        e.from = function(t, e) {
            return ej(1, arguments)
        }
        ,
        e.delayedCall = function(t, r, i, n) {
            return new e(r,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: r,
                onReverseComplete: r,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: n
            })
        }
        ,
        e.fromTo = function(t, e, r) {
            return ej(2, arguments)
        }
        ,
        e.set = function(t, r) {
            return r.duration = 0,
            r.repeatDelay || (r.repeat = 0),
            new e(t,r)
        }
        ,
        e.killTweensOf = function(t, e, r) {
            return $.killTweensOf(t, e, r)
        }
        ,
        e
    }(ra);
    t6(rS.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    tZ("staggerTo,staggerFrom,staggerFromTo", function(t) {
        rS[t] = function() {
            var e = new ro
              , r = eC.call(arguments, 0);
            return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, r)
        }
    });
    var rj = function(t, e, r) {
        return t[e] = r
    }
      , rM = function(t, e, r) {
        return t[e](r)
    }
      , rO = function(t, e, r, i) {
        return t[e](i.fp, r)
    }
      , rE = function(t, e, r) {
        return t.setAttribute(e, r)
    }
      , rC = function(t, e) {
        return td(t[e]) ? rM : tp(t[e]) && t.setAttribute ? rE : rj
    }
      , rN = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
    }
      , rA = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , rP = function(t, e) {
        var r = e._pt
          , i = "";
        if (!t && e.b)
            i = e.b;
        else if (1 === t && e.e)
            i = e.e;
        else {
            for (; r; )
                i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i,
                r = r._next;
            i += e.c
        }
        e.set(e.t, e.p, i, e)
    }
      , rR = function(t, e) {
        for (var r = e._pt; r; )
            r.r(t, r.d),
            r = r._next
    }
      , rz = function(t, e, r, i) {
        for (var n, s = this._pt; s; )
            n = s._next,
            s.p === i && s.modifier(t, e, r),
            s = n
    }
      , rF = function(t) {
        for (var e, r, i = this._pt; i; )
            r = i._next,
            (i.p !== t || i.op) && i.op !== t ? i.dep || (e = 1) : en(this, i, "_pt"),
            i = r;
        return !e
    }
      , rD = function(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
      , rL = function(t) {
        for (var e, r, i, n, s = t._pt; s; ) {
            for (e = s._next,
            r = i; r && r.pr > s.pr; )
                r = r._next;
            (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s,
            (s._next = r) ? r._prev = s : n = s,
            s = e
        }
        t._pt = i
    }
      , rI = function() {
        function t(t, e, r, i, n, s, a, o, l) {
            this.t = e,
            this.s = i,
            this.c = n,
            this.p = r,
            this.r = s || rN,
            this.d = a || this,
            this.set = o || rj,
            this.pr = l || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, e, r) {
            this.mSet = this.mSet || this.set,
            this.set = rD,
            this.m = t,
            this.mt = r,
            this.tween = e
        }
        ,
        t
    }();
    tZ(tV + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse", function(t) {
        return tB[t] = 1
    }),
    tC.TweenMax = tC.TweenLite = rS,
    tC.TimelineLite = tC.TimelineMax = ro,
    $ = new ro({
        sortChildren: !1,
        defaults: tn,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    ti.stringFilter = e0;
    var rB = []
      , rY = {}
      , rH = []
      , rX = 0
      , rW = 0
      , rU = function(t) {
        return (rY[t] || rH).map(function(t) {
            return t()
        })
    }
      , rq = function() {
        var t = Date.now()
          , e = [];
        t - rX > 2 && (rU("matchMediaInit"),
        rB.forEach(function(t) {
            var r, i, n, s, a = t.queries, o = t.conditions;
            for (i in a)
                (r = Q.matchMedia(a[i]).matches) && (n = 1),
                r !== o[i] && (o[i] = r,
                s = 1);
            s && (t.revert(),
            n && e.push(t))
        }),
        rU("matchMediaRevert"),
        e.forEach(function(t) {
            return t.onMatch(t, function(e) {
                return t.add(null, e)
            })
        }),
        rX = t,
        rU("matchMedia"))
    }
      , rV = function() {
        function t(t, e) {
            this.selector = e && eP(e),
            this.data = [],
            this._r = [],
            this.isReverted = !1,
            this.id = rW++,
            t && this.add(t)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            td(t) && (r = e,
            e = t,
            t = td);
            var i = this
              , n = function() {
                var t, n = G, s = i.selector;
                return n && n !== i && n.data.push(i),
                r && (i.selector = eP(r)),
                G = i,
                t = e.apply(i, arguments),
                td(t) && i._r.push(t),
                G = n,
                i.selector = s,
                i.isReverted = !1,
                t
            };
            return i.last = n,
            t === td ? n(i, function(t) {
                return i.add(null, t)
            }) : t ? i[t] = n : n
        }
        ,
        e.ignore = function(t) {
            var e = G;
            G = null,
            t(this),
            G = e
        }
        ,
        e.getTweens = function() {
            var e = [];
            return this.data.forEach(function(r) {
                return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof rS && !(r.parent && "nested" === r.parent.data) && e.push(r)
            }),
            e
        }
        ,
        e.clear = function() {
            this._r.length = this.data.length = 0
        }
        ,
        e.kill = function(t, e) {
            var r = this;
            if (t) {
                for (var i, n = r.getTweens(), s = r.data.length; s--; )
                    "isFlip" === (i = r.data[s]).data && (i.revert(),
                    i.getChildren(!0, !0, !1).forEach(function(t) {
                        return n.splice(n.indexOf(t), 1)
                    }));
                for (n.map(function(t) {
                    return {
                        g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1 / 0
                }).forEach(function(e) {
                    return e.t.revert(t)
                }),
                s = r.data.length; s--; )
                    (i = r.data[s])instanceof ro ? "nested" !== i.data && (i.scrollTrigger && i.scrollTrigger.revert(),
                    i.kill()) : i instanceof rS || !i.revert || i.revert(t);
                r._r.forEach(function(e) {
                    return e(t, r)
                }),
                r.isReverted = !0
            } else
                this.data.forEach(function(t) {
                    return t.kill && t.kill()
                });
            if (this.clear(),
            e)
                for (var a = rB.length; a--; )
                    rB[a].id === this.id && rB.splice(a, 1)
        }
        ,
        e.revert = function(t) {
            this.kill(t || {})
        }
        ,
        t
    }()
      , rG = function() {
        function t(t) {
            this.contexts = [],
            this.scope = t,
            G && G.data.push(this)
        }
        var e = t.prototype;
        return e.add = function(t, e, r) {
            tm(t) || (t = {
                matches: t
            });
            var i, n, s, a = new rV(0,r || this.scope), o = a.conditions = {};
            for (n in G && !a.selector && (a.selector = G.selector),
            this.contexts.push(a),
            e = a.add("onMatch", e),
            a.queries = t,
            t)
                "all" === n ? s = 1 : (i = Q.matchMedia(t[n])) && (0 > rB.indexOf(a) && rB.push(a),
                (o[n] = i.matches) && (s = 1),
                i.addListener ? i.addListener(rq) : i.addEventListener("change", rq));
            return s && e(a, function(t) {
                return a.add(null, t)
            }),
            this
        }
        ,
        e.revert = function(t) {
            this.kill(t || {})
        }
        ,
        e.kill = function(t) {
            this.contexts.forEach(function(e) {
                return e.kill(t, !0)
            })
        }
        ,
        t
    }()
      , r$ = {
        registerPlugin: function() {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                e[r] = arguments[r];
            e.forEach(function(t) {
                return eq(t)
            })
        },
        timeline: function(t) {
            return new ro(t)
        },
        getTweensOf: function(t, e) {
            return $.getTweensOf(t, e)
        },
        getProperty: function(t, e, r, i) {
            th(t) && (t = eA(t)[0]);
            var n = t$(t || {}).get
              , s = r ? t8 : t4;
            return "native" === r && (r = ""),
            t ? e ? s((tX[e] && tX[e].get || n)(t, e, r, i)) : function(e, r, i) {
                return s((tX[e] && tX[e].get || n)(t, e, r, i))
            }
            : t
        },
        quickSetter: function(t, e, r) {
            if ((t = eA(t)).length > 1) {
                var i = t.map(function(t) {
                    return rJ.quickSetter(t, e, r)
                })
                  , n = i.length;
                return function(t) {
                    for (var e = n; e--; )
                        i[e](t)
                }
            }
            t = t[0] || {};
            var s = tX[e]
              , a = t$(t)
              , o = a.harness && (a.harness.aliases || {})[e] || e
              , l = s ? function(e) {
                var i = new s;
                te._pt = 0,
                i.init(t, r ? e + r : e, te, 0, [t]),
                i.render(1, i),
                te._pt && rR(1, te)
            }
            : a.set(t, o);
            return s ? l : function(e) {
                return l(t, o, r ? e + r : e, a, 1)
            }
        },
        quickTo: function(t, e, r) {
            var i, n = rJ.to(t, t6(((i = {})[e] = "+=0.1",
            i.paused = !0,
            i.stagger = 0,
            i), r || {})), s = function(t, r, i) {
                return n.resetTo(e, t, r, i)
            };
            return s.tween = n,
            s
        },
        isTweening: function(t) {
            return $.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = rt(t.ease, tn.ease)),
            t7(tn, t || {})
        },
        config: function(t) {
            return t7(ti, t || {})
        },
        registerEffect: function(t) {
            var e = t.name
              , r = t.effect
              , i = t.plugins
              , n = t.defaults
              , s = t.extendTimeline;
            (i || "").split(",").forEach(function(t) {
                return t && !tX[t] && !tC[t] && tR(e + " effect requires " + t + " plugin.")
            }),
            tW[e] = function(t, e, i) {
                return r(eA(t), t6(e || {}, n), i)
            }
            ,
            s && (ro.prototype[e] = function(t, r, i) {
                return this.add(tW[e](t, tm(r) ? r : (i = r) && {}, this), i)
            }
            )
        },
        registerEase: function(t, e) {
            e5[t] = rt(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? rt(t, e) : e5
        },
        getById: function(t) {
            return $.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new ro(t);
            for (n.smoothChildTiming = tg(t.smoothChildTiming),
            $.remove(n),
            n._dp = 0,
            n._time = n._tTime = $._time,
            r = $._first; r; )
                i = r._next,
                (e || !(!r._dur && r instanceof rS && r.vars.onComplete === r._targets[0])) && em(n, r, r._start - r._delay),
                r = i;
            return em($, n, 0),
            n
        },
        context: function(t, e) {
            return t ? new rV(t,e) : G
        },
        matchMedia: function(t) {
            return new rG(t)
        },
        matchMediaRefresh: function() {
            return rB.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i)
                    i[r] && (i[r] = !1,
                    e = 1);
                e && t.revert()
            }) || rq()
        },
        addEventListener: function(t, e) {
            var r = rY[t] || (rY[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function(t, e) {
            var r = rY[t]
              , i = r && r.indexOf(e);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: function t(e, r, i) {
                var n = r - e;
                return ty(e) ? eI(e, t(0, e.length), r) : eM(i, function(t) {
                    return (n + (t - e) % n) % n + e
                })
            },
            wrapYoyo: function t(e, r, i) {
                var n = r - e
                  , s = 2 * n;
                return ty(e) ? eI(e, t(0, e.length - 1), r) : eM(i, function(t) {
                    return t = (s + (t - e) % s) % s || 0,
                    e + (t > n ? s - t : t)
                })
            },
            distribute: ez,
            random: eL,
            snap: eD,
            normalize: function(t, e, r) {
                return eY(t, e, 0, 1, r)
            },
            getUnit: eE,
            clamp: function(t, e, r) {
                return eM(r, function(r) {
                    return eO(t, e, r)
                })
            },
            splitColor: e$,
            toArray: eA,
            selector: eP,
            mapRange: eY,
            pipe: function() {
                for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(t, e) {
                return function(r) {
                    return t(parseFloat(r)) + (e || eE(r))
                }
            },
            interpolate: function t(e, r, i, n) {
                var s = isNaN(e + r) ? 0 : function(t) {
                    return (1 - t) * e + t * r
                }
                ;
                if (!s) {
                    var a, o, l, c, u, h = th(e), d = {};
                    if (!0 === i && (n = 1) && (i = null),
                    h)
                        e = {
                            p: e
                        },
                        r = {
                            p: r
                        };
                    else if (ty(e) && !ty(r)) {
                        for (o = 1,
                        l = [],
                        u = (c = e.length) - 2; o < c; o++)
                            l.push(t(e[o - 1], e[o]));
                        c--,
                        s = function(t) {
                            var e = Math.min(u, ~~(t *= c));
                            return l[e](t - e)
                        }
                        ,
                        i = r
                    } else
                        n || (e = t9(ty(e) ? [] : {}, e));
                    if (!l) {
                        for (a in r)
                            rm.call(d, e, a, "get", r[a]);
                        s = function(t) {
                            return rR(t, d) || (h ? e.p : e)
                        }
                    }
                }
                return eM(i, s)
            },
            shuffle: eR
        },
        install: tA,
        effects: tW,
        ticker: e1,
        updateRoot: ro.updateRoot,
        plugins: tX,
        globalTimeline: $,
        core: {
            PropTween: rI,
            globals: tz,
            Tween: rS,
            Timeline: ro,
            Animation: ra,
            getCache: t$,
            _removeLinkedListItem: en,
            reverting: function() {
                return V
            },
            context: function(t) {
                return t && G && (G.data.push(t),
                t._ctx = G),
                G
            },
            suppressOverwrites: function(t) {
                return q = t
            }
        }
    };
    tZ("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return r$[t] = rS[t]
    }),
    e1.add(ro.updateRoot),
    te = r$.to({}, {
        duration: 0
    });
    var rQ = function(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next;
        return r
    }
      , rZ = function(t, e) {
        var r, i, n, s = t._targets;
        for (r in e)
            for (i = s.length; i--; )
                (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = rQ(n, r)),
                n && n.modifier && n.modifier(e[r], t, s[i], r))
    }
      , rK = function(t, e) {
        return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function(t, r, i) {
                i._onInit = function(t) {
                    var i, n;
                    if (th(r) && (i = {},
                    tZ(r, function(t) {
                        return i[t] = 1
                    }),
                    r = i),
                    e) {
                        for (n in i = {},
                        r)
                            i[n] = e(r[n]);
                        r = i
                    }
                    rZ(t, r)
                }
            }
        }
    }
      , rJ = r$.registerPlugin({
        name: "attr",
        init: function(t, e, r, i, n) {
            var s, a, o;
            for (s in this.tween = r,
            e)
                o = t.getAttribute(s) || "",
                (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s,
                a.b = o,
                this._props.push(s)
        },
        render: function(t, e) {
            for (var r = e._pt; r; )
                V ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
                r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function(t, e) {
            for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, rK("roundProps", eF), rK("modifiers"), rK("snap", eD)) || r$;
    rS.version = ro.version = rJ.version = "3.15.0",
    J = 1,
    tv() && e2(),
    e5.Power0,
    e5.Power1,
    e5.Power2,
    e5.Power3,
    e5.Power4,
    e5.Linear,
    e5.Quad,
    e5.Cubic,
    e5.Quart,
    e5.Quint,
    e5.Strong,
    e5.Elastic,
    e5.Back,
    e5.SteppedEase,
    e5.Bounce,
    e5.Sine,
    e5.Expo,
    e5.Circ;
    var r0, r1, r2, r5, r3, r4, r8, r6 = {}, r9 = 180 / Math.PI, r7 = Math.PI / 180, it = Math.atan2, ie = /([A-Z])/g, ir = /(left|right|width|margin|padding|x)/i, ii = /[\s,\(]\S/, is = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, ia = function(t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, io = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
    }, il = function(t, e) {
        return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    }, ic = function(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
    }, iu = function(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }, ih = function(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, id = function(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, ip = function(t, e, r) {
        return t.style[e] = r
    }, im = function(t, e, r) {
        return t.style.setProperty(e, r)
    }, ig = function(t, e, r) {
        return t._gsap[e] = r
    }, iv = function(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }, i_ = function(t, e, r, i, n) {
        var s = t._gsap;
        s.scaleX = s.scaleY = r,
        s.renderTransform(n, s)
    }, ix = function(t, e, r, i, n) {
        var s = t._gsap;
        s[e] = r,
        s.renderTransform(n, s)
    }, iy = "transform", ib = iy + "Origin", iw = function t(e, r) {
        var i = this
          , n = this.target
          , s = n.style
          , a = n._gsap;
        if (e in r6 && s) {
            if (this.tfm = this.tfm || {},
            "transform" === e)
                return is.transform.split(",").forEach(function(e) {
                    return t.call(i, e, r)
                });
            if (~(e = is[e] || e).indexOf(",") ? e.split(",").forEach(function(t) {
                return i.tfm[t] = iB(n, t)
            }) : this.tfm[e] = a.x ? a[e] : iB(n, e),
            e === ib && (this.tfm.zOrigin = a.zOrigin),
            this.props.indexOf(iy) >= 0)
                return;
            a.svg && (this.svgo = n.getAttribute("data-svg-origin"),
            this.props.push(ib, r, "")),
            e = iy
        }
        (s || r) && this.props.push(e, r, s[e])
    }, iT = function(t) {
        t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
    }, ik = function() {
        var t, e, r = this.props, i = this.target, n = i.style, s = i._gsap;
        for (t = 0; t < r.length; t += 3)
            r[t + 1] ? 2 === r[t + 1] ? i[r[t]](r[t + 2]) : i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(ie, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm)
                s[e] = this.tfm[e];
            s.svg && (s.renderTransform(),
            i.setAttribute("data-svg-origin", this.svgo || "")),
            (t = r4()) && t.isStart || n[iy] || (iT(n),
            s.zOrigin && n[ib] && (n[ib] += " " + s.zOrigin + "px",
            s.zOrigin = 0,
            s.renderTransform()),
            s.uncache = 1)
        }
    }, iS = function(t, e) {
        var r = {
            target: t,
            props: [],
            revert: ik,
            save: iw
        };
        return t._gsap || rJ.core.getCache(t),
        e && t.style && t.nodeType && e.split(",").forEach(function(t) {
            return r.save(t)
        }),
        r
    }, ij = function(t, e) {
        var r = r0.createElementNS ? r0.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : r0.createElement(t);
        return r && r.style ? r : r0.createElement(t)
    }, iM = function t(e, r, i) {
        var n = getComputedStyle(e);
        return n[r] || n.getPropertyValue(r.replace(ie, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, iE(r) || r, 1) || ""
    }, iO = "O,Moz,ms,Ms,Webkit".split(","), iE = function(t, e, r) {
        var i = (e || r5).style
          , n = 5;
        if (t in i && !r)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(iO[n] + t in i); )
            ;
        return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? iO[n] : "") + t
    }, iC = function() {
        "u" > typeof window && window.document && (r1 = (r0 = window.document).documentElement,
        r5 = ij("div") || {
            style: {}
        },
        ij("div"),
        ib = (iy = iE(iy)) + "Origin",
        r5.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        r8 = !!iE("perspective"),
        r4 = rJ.core.reverting,
        r2 = 1)
    }, iN = function(t) {
        var e, r = t.ownerSVGElement, i = ij("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = t.cloneNode(!0);
        n.style.display = "block",
        i.appendChild(n),
        r1.appendChild(i);
        try {
            e = n.getBBox()
        } catch (t) {}
        return i.removeChild(n),
        r1.removeChild(i),
        e
    }, iA = function(t, e) {
        for (var r = e.length; r--; )
            if (t.hasAttribute(e[r]))
                return t.getAttribute(e[r])
    }, iP = function(t) {
        var e, r;
        try {
            e = t.getBBox()
        } catch (i) {
            e = iN(t),
            r = 1
        }
        return e && (e.width || e.height) || r || (e = iN(t)),
        !e || e.width || e.x || e.y ? e : {
            x: +iA(t, ["x", "cx", "x1"]) || 0,
            y: +iA(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, iR = function(t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && iP(t))
    }, iz = function(t, e) {
        if (e) {
            var r, i = t.style;
            e in r6 && e !== ib && (e = iy),
            i.removeProperty ? (("ms" === (r = e.substr(0, 2)) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            i.removeProperty("--" === r ? e : e.replace(ie, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }, iF = function(t, e, r, i, n, s) {
        var a = new rI(t._pt,e,r,0,1,s ? id : ih);
        return t._pt = a,
        a.b = i,
        a.e = n,
        t._props.push(r),
        a
    }, iD = {
        deg: 1,
        rad: 1,
        turn: 1
    }, iL = {
        grid: 1,
        flex: 1
    }, iI = function t(e, r, i, n) {
        var s, a, o, l, c = parseFloat(i) || 0, u = (i + "").trim().substr((c + "").length) || "px", h = r5.style, d = ir.test(r), f = "svg" === e.tagName.toLowerCase(), p = (f ? "client" : "offset") + (d ? "Width" : "Height"), m = "px" === n, g = "%" === n;
        if (n === u || !c || iD[n] || iD[u])
            return c;
        if ("px" === u || m || (c = t(e, r, i, "px")),
        l = e.getCTM && iR(e),
        (g || "%" === u) && (r6[r] || ~r.indexOf("adius")))
            return s = l ? e.getBBox()[d ? "width" : "height"] : e[p],
            tK(g ? c / s * 100 : c / 100 * s);
        if (h[d ? "width" : "height"] = 100 + (m ? u : n),
        a = "rem" !== n && ~r.indexOf("adius") || "em" === n && e.appendChild && !f ? e : e.parentNode,
        l && (a = (e.ownerSVGElement || {}).parentNode),
        a && a !== r0 && a.appendChild || (a = r0.body),
        (o = a._gsap) && g && o.width && d && o.time === e1.time && !o.uncache)
            return tK(c / o.width * 100);
        if (g && ("height" === r || "width" === r)) {
            var v = e.style[r];
            e.style[r] = 100 + n,
            s = e[p],
            v ? e.style[r] = v : iz(e, r)
        } else
            (g || "%" === u) && !iL[iM(a, "display")] && (h.position = iM(e, "position")),
            a === e && (h.position = "static"),
            a.appendChild(r5),
            s = r5[p],
            a.removeChild(r5),
            h.position = "absolute";
        return d && g && ((o = t$(a)).time = e1.time,
        o.width = a[p]),
        tK(m ? s * c / 100 : s && c ? 100 / s * c : 0)
    }, iB = function(t, e, r, i) {
        var n;
        return r2 || iC(),
        e in is && "transform" !== e && ~(e = is[e]).indexOf(",") && (e = e.split(",")[0]),
        r6[e] && "transform" !== e ? (n = iK(t, i),
        n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : iJ(iM(t, ib)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = iU[e] && iU[e](t, e, r) || iM(t, e) || tQ(t, e) || +("opacity" === e)),
        r && !~(n + "").trim().indexOf(" ") ? iI(t, e, n, r) + r : n
    }, iY = function(t, e, r, i) {
        if (!r || "none" === r) {
            var n = iE(e, t, 1)
              , s = n && iM(t, n, 1);
            s && s !== r ? (e = n,
            r = s) : "borderColor" === e && (r = iM(t, "borderTopColor"))
        }
        var a, o, l, c, u, h, d, f, p, m, g, v = new rI(this._pt,t.style,e,0,1,rP), _ = 0, x = 0;
        if (v.b = r,
        v.e = i,
        r += "",
        "var(--" === (i += "").substring(0, 6) && (i = iM(t, i.substring(4, i.indexOf(")")))),
        "auto" === i && (h = t.style[e],
        t.style[e] = i,
        i = iM(t, e) || i,
        h ? t.style[e] = h : iz(t, e)),
        e0(a = [r, i]),
        r = a[0],
        i = a[1],
        l = r.match(tS) || [],
        (i.match(tS) || []).length) {
            for (; o = tS.exec(i); )
                d = o[0],
                p = i.substring(_, o.index),
                u ? u = (u + 1) % 5 : ("rgba(" === p.substr(-5) || "hsla(" === p.substr(-5)) && (u = 1),
                d !== (h = l[x++] || "") && (c = parseFloat(h) || 0,
                g = h.substr((c + "").length),
                "=" === d.charAt(1) && (d = t0(c, d) + g),
                f = parseFloat(d),
                m = d.substr((f + "").length),
                _ = tS.lastIndex - m.length,
                m || (m = m || ti.units[e] || g,
                _ === i.length && (i += m,
                v.e += m)),
                g !== m && (c = iI(t, e, h, m) || 0),
                v._pt = {
                    _next: v._pt,
                    p: p || 1 === x ? p : ",",
                    s: c,
                    c: f - c,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
            v.c = _ < i.length ? i.substring(_, i.length) : ""
        } else
            v.r = "display" === e && "none" === i ? id : ih;
        return tM.test(i) && (v.e = 0),
        this._pt = v,
        v
    }, iH = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, iX = function(t) {
        var e = t.split(" ")
          , r = e[0]
          , i = e[1] || "50%";
        return ("top" === r || "bottom" === r || "left" === i || "right" === i) && (t = r,
        r = i,
        i = t),
        e[0] = iH[r] || r,
        e[1] = iH[i] || i,
        e.join(" ")
    }, iW = function(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, s = e.t, a = s.style, o = e.u, l = s._gsap;
            if ("all" === o || !0 === o)
                a.cssText = "",
                i = 1;
            else
                for (n = (o = o.split(",")).length; --n > -1; )
                    r6[r = o[n]] && (i = 1,
                    r = "transformOrigin" === r ? ib : iy),
                    iz(s, r);
            i && (iz(s, iy),
            l && (l.svg && s.removeAttribute("transform"),
            a.scale = a.rotate = a.translate = "none",
            iK(s, 1),
            l.uncache = 1,
            iT(a)))
        }
    }, iU = {
        clearProps: function(t, e, r, i, n) {
            if ("isFromStart" !== n.data) {
                var s = t._pt = new rI(t._pt,e,r,0,0,iW);
                return s.u = i,
                s.pr = -10,
                s.tween = n,
                t._props.push(r),
                1
            }
        }
    }, iq = [1, 0, 0, 1, 0, 0], iV = {}, iG = function(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, i$ = function(t) {
        var e = iM(t, iy);
        return iG(e) ? iq : e.substr(7).match(tk).map(tK)
    }, iQ = function(t, e) {
        var r, i, n, s, a = t._gsap || t$(t), o = t.style, l = i$(t);
        return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? iq : l : (l !== iq || t.offsetParent || t === r1 || a.svg || (n = o.display,
        o.display = "block",
        (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (s = 1,
        i = t.nextElementSibling,
        r1.appendChild(t)),
        l = i$(t),
        n ? o.display = n : iz(t, "display"),
        s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : r1.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, iZ = function(t, e, r, i, n, s) {
        var a, o, l, c, u = t._gsap, h = n || iQ(t, !0), d = u.xOrigin || 0, f = u.yOrigin || 0, p = u.xOffset || 0, m = u.yOffset || 0, g = h[0], v = h[1], _ = h[2], x = h[3], y = h[4], b = h[5], w = e.split(" "), T = parseFloat(w[0]) || 0, k = parseFloat(w[1]) || 0;
        r ? h !== iq && (o = g * x - v * _) && (l = x / o * T + -_ / o * k + (_ * b - x * y) / o,
        c = -v / o * T + g / o * k - (g * b - v * y) / o,
        T = l,
        k = c) : (T = (a = iP(t)).x + (~w[0].indexOf("%") ? T / 100 * a.width : T),
        k = a.y + (~(w[1] || w[0]).indexOf("%") ? k / 100 * a.height : k)),
        i || !1 !== i && u.smooth ? (u.xOffset = p + ((y = T - d) * g + (b = k - f) * _) - y,
        u.yOffset = m + (y * v + b * x) - b) : u.xOffset = u.yOffset = 0,
        u.xOrigin = T,
        u.yOrigin = k,
        u.smooth = !!i,
        u.origin = e,
        u.originIsAbsolute = !!r,
        t.style[ib] = "0px 0px",
        s && (iF(s, u, "xOrigin", d, T),
        iF(s, u, "yOrigin", f, k),
        iF(s, u, "xOffset", p, u.xOffset),
        iF(s, u, "yOffset", m, u.yOffset)),
        t.setAttribute("data-svg-origin", T + " " + k)
    }, iK = function(t, e) {
        var r = t._gsap || new rs(t);
        if ("x"in r && !e && !r.uncache)
            return r;
        var i, n, s, a, o, l, c, u, h, d, f, p, m, g, v, _, x, y, b, w, T, k, S, j, M, O, E, C, N, A, P, R, z = t.style, F = r.scaleX < 0, D = getComputedStyle(t), L = iM(t, ib) || "0";
        return i = n = s = l = c = u = h = d = f = 0,
        a = o = 1,
        r.svg = !!(t.getCTM && iR(t)),
        D.translate && (("none" !== D.translate || "none" !== D.scale || "none" !== D.rotate) && (z[iy] = ("none" !== D.translate ? "translate3d(" + (D.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== D.rotate ? "rotate(" + D.rotate + ") " : "") + ("none" !== D.scale ? "scale(" + D.scale.split(" ").join(",") + ") " : "") + ("none" !== D[iy] ? D[iy] : "")),
        z.scale = z.rotate = z.translate = "none"),
        g = iQ(t, r.svg),
        r.svg && (r.uncache ? (M = t.getBBox(),
        L = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px",
        j = "") : j = !e && t.getAttribute("data-svg-origin"),
        iZ(t, j || L, !!j || r.originIsAbsolute, !1 !== r.smooth, g)),
        p = r.xOrigin || 0,
        m = r.yOrigin || 0,
        g !== iq && (y = g[0],
        b = g[1],
        w = g[2],
        T = g[3],
        i = k = g[4],
        n = S = g[5],
        6 === g.length ? (a = Math.sqrt(y * y + b * b),
        o = Math.sqrt(T * T + w * w),
        l = y || b ? it(b, y) * r9 : 0,
        (h = w || T ? it(w, T) * r9 + l : 0) && (o *= Math.abs(Math.cos(h * r7))),
        r.svg && (i -= p - (p * y + m * w),
        n -= m - (p * b + m * T))) : (R = g[6],
        A = g[7],
        E = g[8],
        C = g[9],
        N = g[10],
        P = g[11],
        i = g[12],
        n = g[13],
        s = g[14],
        c = (v = it(R, N)) * r9,
        v && (j = k * (_ = Math.cos(-v)) + E * (x = Math.sin(-v)),
        M = S * _ + C * x,
        O = R * _ + N * x,
        E = -(k * x) + E * _,
        C = -(S * x) + C * _,
        N = -(R * x) + N * _,
        P = -(A * x) + P * _,
        k = j,
        S = M,
        R = O),
        u = (v = it(-w, N)) * r9,
        v && (j = y * (_ = Math.cos(-v)) - E * (x = Math.sin(-v)),
        M = b * _ - C * x,
        O = w * _ - N * x,
        P = T * x + P * _,
        y = j,
        b = M,
        w = O),
        l = (v = it(b, y)) * r9,
        v && (j = y * (_ = Math.cos(v)) + b * (x = Math.sin(v)),
        M = k * _ + S * x,
        b = b * _ - y * x,
        S = S * _ - k * x,
        y = j,
        k = M),
        c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
        u = 180 - u),
        a = tK(Math.sqrt(y * y + b * b + w * w)),
        o = tK(Math.sqrt(S * S + R * R)),
        h = Math.abs(v = it(k, S)) > 2e-4 ? v * r9 : 0,
        f = P ? 1 / (P < 0 ? -P : P) : 0),
        r.svg && (j = t.getAttribute("transform"),
        r.forceCSS = t.setAttribute("transform", "") || !iG(iM(t, iy)),
        j && t.setAttribute("transform", j))),
        Math.abs(h) > 90 && 270 > Math.abs(h) && (F ? (a *= -1,
        h += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (o *= -1,
        h += h <= 0 ? 180 : -180)),
        e = e || r.uncache,
        r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px",
        r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px",
        r.z = s + "px",
        r.scaleX = tK(a),
        r.scaleY = tK(o),
        r.rotation = tK(l) + "deg",
        r.rotationX = tK(c) + "deg",
        r.rotationY = tK(u) + "deg",
        r.skewX = h + "deg",
        r.skewY = d + "deg",
        r.transformPerspective = f + "px",
        (r.zOrigin = parseFloat(L.split(" ")[2]) || !e && r.zOrigin || 0) && (z[ib] = iJ(L)),
        r.xOffset = r.yOffset = 0,
        r.force3D = ti.force3D,
        r.renderTransform = r.svg ? i3 : r8 ? i5 : i1,
        r.uncache = 0,
        r
    }, iJ = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, i0 = function(t, e, r) {
        var i = eE(e);
        return tK(parseFloat(e) + parseFloat(iI(t, "x", r + "px", i))) + i
    }, i1 = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        i5(t, e)
    }, i2 = "0deg", i5 = function(t, e) {
        var r = e || this
          , i = r.xPercent
          , n = r.yPercent
          , s = r.x
          , a = r.y
          , o = r.z
          , l = r.rotation
          , c = r.rotationY
          , u = r.rotationX
          , h = r.skewX
          , d = r.skewY
          , f = r.scaleX
          , p = r.scaleY
          , m = r.transformPerspective
          , g = r.force3D
          , v = r.target
          , _ = r.zOrigin
          , x = ""
          , y = "auto" === g && t && 1 !== t || !0 === g;
        if (_ && (u !== i2 || c !== i2)) {
            var b, w = parseFloat(c) * r7, T = Math.sin(w), k = Math.cos(w);
            s = i0(v, s, -(T * (b = Math.cos(w = parseFloat(u) * r7)) * _)),
            a = i0(v, a, -(-Math.sin(w) * _)),
            o = i0(v, o, -(k * b * _) + _)
        }
        "0px" !== m && (x += "perspective(" + m + ") "),
        (i || n) && (x += "translate(" + i + "%, " + n + "%) "),
        (y || "0px" !== s || "0px" !== a || "0px" !== o) && (x += "0px" !== o || y ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + ") "),
        l !== i2 && (x += "rotate(" + l + ") "),
        c !== i2 && (x += "rotateY(" + c + ") "),
        u !== i2 && (x += "rotateX(" + u + ") "),
        (h !== i2 || d !== i2) && (x += "skew(" + h + ", " + d + ") "),
        (1 !== f || 1 !== p) && (x += "scale(" + f + ", " + p + ") "),
        v.style[iy] = x || "translate(0, 0)"
    }, i3 = function(t, e) {
        var r, i, n, s, a, o = e || this, l = o.xPercent, c = o.yPercent, u = o.x, h = o.y, d = o.rotation, f = o.skewX, p = o.skewY, m = o.scaleX, g = o.scaleY, v = o.target, _ = o.xOrigin, x = o.yOrigin, y = o.xOffset, b = o.yOffset, w = o.forceCSS, T = parseFloat(u), k = parseFloat(h);
        d = parseFloat(d),
        f = parseFloat(f),
        (p = parseFloat(p)) && (f += p = parseFloat(p),
        d += p),
        d || f ? (d *= r7,
        f *= r7,
        r = Math.cos(d) * m,
        i = Math.sin(d) * m,
        n = -(Math.sin(d - f) * g),
        s = Math.cos(d - f) * g,
        f && (p *= r7,
        n *= a = Math.sqrt(1 + (a = Math.tan(f - p)) * a),
        s *= a,
        p && (r *= a = Math.sqrt(1 + (a = Math.tan(p)) * a),
        i *= a)),
        r = tK(r),
        i = tK(i),
        n = tK(n),
        s = tK(s)) : (r = m,
        s = g,
        i = n = 0),
        (T && !~(u + "").indexOf("px") || k && !~(h + "").indexOf("px")) && (T = iI(v, "x", u, "px"),
        k = iI(v, "y", h, "px")),
        (_ || x || y || b) && (T = tK(T + _ - (_ * r + x * n) + y),
        k = tK(k + x - (_ * i + x * s) + b)),
        (l || c) && (T = tK(T + l / 100 * (a = v.getBBox()).width),
        k = tK(k + c / 100 * a.height)),
        a = "matrix(" + r + "," + i + "," + n + "," + s + "," + T + "," + k + ")",
        v.setAttribute("transform", a),
        w && (v.style[iy] = a)
    }, i4 = function(t, e, r, i, n) {
        var s, a, o = th(n), l = parseFloat(n) * (o && ~n.indexOf("rad") ? r9 : 1) - i, c = i + l + "deg";
        return o && ("short" === (s = n.split("_")[1]) && (l %= 360) != l % 180 && (l += l < 0 ? 360 : -360),
        "cw" === s && l < 0 ? l = (l + 36e9) % 360 - 360 * ~~(l / 360) : "ccw" === s && l > 0 && (l = (l - 36e9) % 360 - 360 * ~~(l / 360))),
        t._pt = a = new rI(t._pt,e,r,i,l,io),
        a.e = c,
        a.u = "deg",
        t._props.push(r),
        a
    }, i8 = function(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }, i6 = function(t, e, r) {
        var i, n, s, a, o, l, c, u = i8({}, r._gsap), h = r.style;
        for (n in u.svg ? (s = r.getAttribute("transform"),
        r.setAttribute("transform", ""),
        h[iy] = e,
        i = iK(r, 1),
        iz(r, iy),
        r.setAttribute("transform", s)) : (s = getComputedStyle(r)[iy],
        h[iy] = e,
        i = iK(r, 1),
        h[iy] = s),
        r6)
            (s = u[n]) !== (a = i[n]) && 0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) && (o = eE(s) !== (c = eE(a)) ? iI(r, n, s, c) : parseFloat(s),
            l = parseFloat(a),
            t._pt = new rI(t._pt,i,n,o,l - o,ia),
            t._pt.u = c || 0,
            t._props.push(n));
        i8(i, u)
    };
    tZ("padding,margin,Width,Radius", function(t, e) {
        var r = "Right"
          , i = "Bottom"
          , n = "Left"
          , s = (e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(function(r) {
            return e < 2 ? t + r : "border" + r + t
        });
        iU[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
            var a, o;
            if (arguments.length < 4)
                return 5 === (o = (a = s.map(function(e) {
                    return iB(t, e, r)
                })).join(" ")).split(a[0]).length ? a[0] : o;
            a = (i + "").split(" "),
            o = {},
            s.forEach(function(t, e) {
                return o[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }),
            t.init(e, o, n)
        }
    });
    var i9 = {
        name: "css",
        register: iC,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, r, i, n) {
            var s, a, o, l, c, u, h, d, f, p, m, g, v, _, x, y, b, w = this._props, T = t.style, k = r.vars.startAt;
            for (h in r2 || iC(),
            this.styles = this.styles || iS(t),
            y = this.styles.props,
            this.tween = r,
            e)
                if ("autoRound" !== h && (a = e[h],
                !(tX[h] && rv(h, e, r, i, t, n)))) {
                    if (c = typeof a,
                    u = iU[h],
                    "function" === c && (c = typeof (a = a.call(r, i, t, n))),
                    "string" === c && ~a.indexOf("random(") && (a = eB(a)),
                    u)
                        u(this, t, h, a, r) && (x = 1);
                    else if ("--" === h.substr(0, 2))
                        s = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                        a += "",
                        eK.lastIndex = 0,
                        !eK.test(s) && (d = eE(s),
                        (f = eE(a)) ? d !== f && (s = iI(t, h, s, f) + f) : d && (a += d)),
                        this.add(T, "setProperty", s, a, i, n, 0, 0, h),
                        w.push(h),
                        y.push(h, 0, T[h]);
                    else if ("undefined" !== c) {
                        if (k && h in k ? (th(s = "function" == typeof k[h] ? k[h].call(r, i, t, n) : k[h]) && ~s.indexOf("random(") && (s = eB(s)),
                        eE(s + "") || "auto" === s || (s += ti.units[h] || eE(iB(t, h)) || ""),
                        "=" === (s + "").charAt(1) && (s = iB(t, h))) : s = iB(t, h),
                        l = parseFloat(s),
                        (p = "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                        o = parseFloat(a),
                        h in is && ("autoAlpha" === h && (1 === l && "hidden" === iB(t, "visibility") && o && (l = 0),
                        y.push("visibility", 0, T.visibility),
                        iF(this, T, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                        "scale" !== h && "transform" !== h && ~(h = is[h]).indexOf(",") && (h = h.split(",")[0])),
                        m = h in r6) {
                            if (this.styles.save(h),
                            b = a,
                            "string" === c && "var(--" === a.substring(0, 6)) {
                                if ("calc(" === (a = iM(t, a.substring(4, a.indexOf(")")))).substring(0, 5)) {
                                    var S = t.style.perspective;
                                    t.style.perspective = a,
                                    a = iM(t, "perspective"),
                                    S ? t.style.perspective = S : iz(t, "perspective")
                                }
                                o = parseFloat(a)
                            }
                            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || iK(t, e.parseTransform),
                            _ = !1 !== e.smoothOrigin && v.smooth,
                            (g = this._pt = new rI(this._pt,T,iy,0,1,v.renderTransform,v,0,-1)).dep = 1),
                            "scale" === h)
                                this._pt = new rI(this._pt,v,"scaleY",v.scaleY,(p ? t0(v.scaleY, p + o) : o) - v.scaleY || 0,ia),
                                this._pt.u = 0,
                                w.push("scaleY", h),
                                h += "X";
                            else if ("transformOrigin" === h) {
                                y.push(ib, 0, T[ib]),
                                a = iX(a),
                                v.svg ? iZ(t, a, 0, _, 0, this) : ((f = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && iF(this, v, "zOrigin", v.zOrigin, f),
                                iF(this, T, h, iJ(s), iJ(a)));
                                continue
                            } else if ("svgOrigin" === h) {
                                iZ(t, a, 1, _, 0, this);
                                continue
                            } else if (h in iV) {
                                i4(this, v, h, l, p ? t0(l, p + a) : a);
                                continue
                            } else if ("smoothOrigin" === h) {
                                iF(this, v, "smooth", v.smooth, a);
                                continue
                            } else if ("force3D" === h) {
                                v[h] = a;
                                continue
                            } else if ("transform" === h) {
                                i6(this, a, t);
                                continue
                            }
                        } else
                            h in T || (h = iE(h) || h);
                        if (m || (o || 0 === o) && (l || 0 === l) && !ii.test(a) && h in T)
                            d = (s + "").substr((l + "").length),
                            o || (o = 0),
                            f = eE(a) || (h in ti.units ? ti.units[h] : d),
                            d !== f && (l = iI(t, h, s, f)),
                            this._pt = new rI(this._pt,m ? v : T,h,l,(p ? t0(l, p + o) : o) - l,!m && ("px" === f || "zIndex" === h) && !1 !== e.autoRound ? iu : ia),
                            this._pt.u = f || 0,
                            m && b !== a ? (this._pt.b = s,
                            this._pt.e = b,
                            this._pt.r = ic) : d !== f && "%" !== f && (this._pt.b = s,
                            this._pt.r = il);
                        else if (h in T)
                            iY.call(this, t, h, s, p ? p + a : a);
                        else if (h in t)
                            this.add(t, h, s || t[h], p ? p + a : a, i, n);
                        else if ("parseTransform" !== h) {
                            tP(h, a);
                            continue
                        }
                        m || (h in T ? y.push(h, 0, T[h]) : "function" == typeof t[h] ? y.push(h, 2, t[h]()) : y.push(h, 1, s || t[h])),
                        w.push(h)
                    }
                }
            x && rL(this)
        },
        render: function(t, e) {
            if (e.tween._time || !r4())
                for (var r = e._pt; r; )
                    r.r(t, r.d),
                    r = r._next;
            else
                e.styles.revert()
        },
        get: iB,
        aliases: is,
        getSetter: function(t, e, r) {
            var i = is[e];
            return i && 0 > i.indexOf(",") && (e = i),
            e in r6 && e !== ib && (t._gsap.x || iB(t, "x")) ? r && r3 === r ? "scale" === e ? iv : ig : (r3 = r || {},
            "scale" === e ? i_ : ix) : t.style && !tp(t.style[e]) ? ip : ~e.indexOf("-") ? im : rC(t, e)
        },
        core: {
            _removeProperty: iz,
            _getMatrix: iQ
        }
    };
    rJ.utils.checkPrefix = iE,
    rJ.core.getStyleSaver = iS,
    ne = tZ("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (nt = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        r6[t] = 1
    }),
    tZ(nt, function(t) {
        ti.units[t] = "deg",
        iV[t] = 1
    }),
    is[ne[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + nt,
    tZ("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        is[e[1]] = ne[e[0]]
    }),
    tZ("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        ti.units[t] = "px"
    }),
    rJ.registerPlugin(i9);
    var i7 = rJ.registerPlugin(i9) || rJ;
    i7.core.Tween;
    var nt, ne, nr, ni, nn, ns, na, no, nl, nc, nu, nh, nd, nf, np, nm = function() {
        return nr || "u" > typeof window && (nr = window.gsap) && nr.registerPlugin && nr
    }, ng = 1, nv = [], n_ = [], nx = [], ny = Date.now, nb = function(t, e) {
        return e
    }, nw = function() {
        var t = nu.core
          , e = t.bridge || {}
          , r = t._scrollers
          , i = t._proxies;
        r.push.apply(r, n_),
        i.push.apply(i, nx),
        n_ = r,
        nx = i,
        nb = function(t, r) {
            return e[t](r)
        }
    }, nT = function(t, e) {
        return ~nx.indexOf(t) && nx[nx.indexOf(t) + 1][e]
    }, nk = function(t) {
        return !!~nh.indexOf(t)
    }, nS = function(t, e, r, i, n) {
        return t.addEventListener(e, r, {
            passive: !1 !== i,
            capture: !!n
        })
    }, nj = function(t, e, r, i) {
        return t.removeEventListener(e, r, !!i)
    }, nM = "scrollLeft", nO = "scrollTop", nE = function() {
        return nd && nd.isPressed || n_.cache++
    }, nC = function(t, e) {
        var r = function r(i) {
            if (i || 0 === i) {
                ng && (nn.history.scrollRestoration = "manual");
                var n = nd && nd.isPressed;
                t(i = r.v = Math.round(i) || (nd && nd.iOS ? 1 : 0)),
                r.cacheID = n_.cache,
                n && nb("ss", i)
            } else
                (e || n_.cache !== r.cacheID || nb("ref")) && (r.cacheID = n_.cache,
                r.v = t());
            return r.v + r.offset
        };
        return r.offset = 0,
        t && r
    }, nN = {
        s: nM,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: nC(function(t) {
            return arguments.length ? nn.scrollTo(t, nA.sc()) : nn.pageXOffset || ns[nM] || na[nM] || no[nM] || 0
        })
    }, nA = {
        s: nO,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: nN,
        sc: nC(function(t) {
            return arguments.length ? nn.scrollTo(nN.sc(), t) : nn.pageYOffset || ns[nO] || na[nO] || no[nO] || 0
        })
    }, nP = function(t, e) {
        return (e && e._ctx && e._ctx.selector || nr.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== nr.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }, nR = function(t, e) {
        for (var r = e.length; r--; )
            if (e[r] === t || e[r].contains(t))
                return !0;
        return !1
    }, nz = function(t, e) {
        var r = e.s
          , i = e.sc;
        nk(t) && (t = ns.scrollingElement || na);
        var n = n_.indexOf(t)
          , s = i === nA.sc ? 1 : 2;
        ~n || (n = n_.push(t) - 1),
        n_[n + s] || nS(t, "scroll", nE);
        var a = n_[n + s]
          , o = a || (n_[n + s] = nC(nT(t, r), !0) || (nk(t) ? i : nC(function(e) {
            return arguments.length ? t[r] = e : t[r]
        })));
        return o.target = t,
        a || (o.smooth = "smooth" === nr.getProperty(t, "scrollBehavior")),
        o
    }, nF = function(t, e, r) {
        var i = t
          , n = t
          , s = ny()
          , a = s
          , o = e || 50
          , l = Math.max(500, 3 * o)
          , c = function(t, e) {
            var l = ny();
            e || l - s > o ? (n = i,
            i = t,
            a = s,
            s = l) : r ? i += t : i = n + (t - n) / (l - a) * (s - a)
        };
        return {
            update: c,
            reset: function() {
                n = i = r ? 0 : i,
                a = s = 0
            },
            getVelocity: function(t) {
                var e = a
                  , o = n
                  , u = ny();
                return (t || 0 === t) && t !== i && c(t),
                s === a || u - a > l ? 0 : (i + (r ? o : -o)) / ((r ? u : s) - e) * 1e3
            }
        }
    }, nD = function(t, e) {
        return e && !t._gsapAllow && !1 !== t.cancelable && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
    }, nL = function(t) {
        var e = Math.max.apply(Math, t)
          , r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r
    }, nI = function() {
        (nu = nr.core.globals().ScrollTrigger) && nu.core && nw()
    }, nB = function(t) {
        return nr = t || nm(),
        !ni && nr && "u" > typeof document && document.body && (nn = window,
        na = (ns = document).documentElement,
        no = ns.body,
        nh = [nn, ns, na, no],
        nr.utils.clamp,
        np = nr.core.context || function() {}
        ,
        nc = "onpointerenter"in no ? "pointer" : "mouse",
        nl = nY.isTouch = nn.matchMedia && nn.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : 2 * ("ontouchstart"in nn || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0),
        nf = nY.eventTypes = ("ontouchstart"in na ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown"in na) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","),
        setTimeout(function() {
            return ng = 0
        }, 500),
        ni = 1),
        nu || nI(),
        ni
    };
    nN.op = nA,
    n_.cache = 0;
    var nY = function() {
        var t;
        function e(t) {
            this.init(t)
        }
        return e.prototype.init = function(t) {
            ni || nB(nr) || console.warn("Please gsap.registerPlugin(Observer)"),
            nu || nI();
            var e = t.tolerance
              , r = t.dragMinimum
              , i = t.type
              , n = t.target
              , s = t.lineHeight
              , a = t.debounce
              , o = t.preventDefault
              , l = t.onStop
              , c = t.onStopDelay
              , u = t.ignore
              , h = t.wheelSpeed
              , d = t.event
              , f = t.onDragStart
              , p = t.onDragEnd
              , m = t.onDrag
              , g = t.onPress
              , v = t.onRelease
              , _ = t.onRight
              , x = t.onLeft
              , y = t.onUp
              , b = t.onDown
              , w = t.onChangeX
              , T = t.onChangeY
              , k = t.onChange
              , S = t.onToggleX
              , j = t.onToggleY
              , M = t.onHover
              , O = t.onHoverEnd
              , E = t.onMove
              , C = t.ignoreCheck
              , N = t.isNormalizer
              , A = t.onGestureStart
              , P = t.onGestureEnd
              , R = t.onWheel
              , z = t.onEnable
              , F = t.onDisable
              , D = t.onClick
              , L = t.scrollSpeed
              , I = t.capture
              , B = t.allowClicks
              , Y = t.lockAxis
              , H = t.onLockAxis;
            this.target = n = nP(n) || na,
            this.vars = t,
            u && (u = nr.utils.toArray(u)),
            e = e || 1e-9,
            r = r || 0,
            h = h || 1,
            L = L || 1,
            i = i || "wheel,touch,pointer",
            a = !1 !== a,
            s || (s = parseFloat(nn.getComputedStyle(no).lineHeight) || 22);
            var X, W, U, q, V, G, $, Q = this, Z = 0, K = 0, J = t.passive || !o && !1 !== t.passive, tt = nz(n, nN), te = nz(n, nA), tr = tt(), ti = te(), tn = ~i.indexOf("touch") && !~i.indexOf("pointer") && "pointerdown" === nf[0], ts = nk(n), ta = n.ownerDocument || ns, to = [0, 0, 0], tl = [0, 0, 0], tc = 0, tu = function() {
                return tc = ny()
            }, th = function(t, e) {
                return (Q.event = t) && u && nR(t.target, u) || e && tn && "touch" !== t.pointerType || C && C(t, e)
            }, td = function() {
                var t = Q.deltaX = nL(to)
                  , r = Q.deltaY = nL(tl)
                  , i = Math.abs(t) >= e
                  , n = Math.abs(r) >= e;
                k && (i || n) && k(Q, t, r, to, tl),
                i && (_ && Q.deltaX > 0 && _(Q),
                x && Q.deltaX < 0 && x(Q),
                w && w(Q),
                S && Q.deltaX < 0 != Z < 0 && S(Q),
                Z = Q.deltaX,
                to[0] = to[1] = to[2] = 0),
                n && (b && Q.deltaY > 0 && b(Q),
                y && Q.deltaY < 0 && y(Q),
                T && T(Q),
                j && Q.deltaY < 0 != K < 0 && j(Q),
                K = Q.deltaY,
                tl[0] = tl[1] = tl[2] = 0),
                (q || U) && (E && E(Q),
                U && (f && 1 === U && f(Q),
                m && m(Q),
                U = 0),
                q = !1),
                G && (G = !1,
                1) && H && H(Q),
                V && (R(Q),
                V = !1),
                X = 0
            }, tf = function(t, e, r) {
                to[r] += t,
                tl[r] += e,
                Q._vx.update(t),
                Q._vy.update(e),
                a ? X || (X = requestAnimationFrame(td)) : td()
            }, tp = function(t, e) {
                Y && !$ && (Q.axis = $ = Math.abs(t) > Math.abs(e) ? "x" : "y",
                G = !0),
                "y" !== $ && (to[2] += t,
                Q._vx.update(t, !0)),
                "x" !== $ && (tl[2] += e,
                Q._vy.update(e, !0)),
                a ? X || (X = requestAnimationFrame(td)) : td()
            }, tm = function(t) {
                if (!th(t, 1)) {
                    var e = (t = nD(t, o)).clientX
                      , i = t.clientY
                      , n = e - Q.x
                      , s = i - Q.y
                      , a = Q.isDragging;
                    Q.x = e,
                    Q.y = i,
                    (a || (n || s) && (Math.abs(Q.startX - e) >= r || Math.abs(Q.startY - i) >= r)) && (U || (U = a ? 2 : 1),
                    a || (Q.isDragging = !0),
                    tp(n, s))
                }
            }, tg = Q.onPress = function(t) {
                th(t, 1) || t && t.button || (Q.axis = $ = null,
                W.pause(),
                Q.isPressed = !0,
                t = nD(t),
                Z = K = 0,
                Q.startX = Q.x = t.clientX,
                Q.startY = Q.y = t.clientY,
                Q._vx.reset(),
                Q._vy.reset(),
                nS(N ? n : ta, nf[1], tm, J, !0),
                Q.deltaX = Q.deltaY = 0,
                g && g(Q))
            }
            , tv = Q.onRelease = function(t) {
                if (!th(t, 1)) {
                    nj(N ? n : ta, nf[1], tm, !0);
                    var e = !isNaN(Q.y - Q.startY)
                      , r = Q.isDragging
                      , i = r && (Math.abs(Q.x - Q.startX) > 3 || Math.abs(Q.y - Q.startY) > 3)
                      , s = nD(t);
                    !i && e && (Q._vx.reset(),
                    Q._vy.reset(),
                    o && B && nr.delayedCall(.08, function() {
                        if (ny() - tc > 300 && !t.defaultPrevented) {
                            if (t.target.click)
                                t.target.click();
                            else if (ta.createEvent) {
                                var e = ta.createEvent("MouseEvents");
                                e.initMouseEvent("click", !0, !0, nn, 1, s.screenX, s.screenY, s.clientX, s.clientY, !1, !1, !1, !1, 0, null),
                                t.target.dispatchEvent(e)
                            }
                        }
                    })),
                    Q.isDragging = Q.isGesturing = Q.isPressed = !1,
                    l && r && !N && W.restart(!0),
                    U && td(),
                    p && r && p(Q),
                    v && v(Q, i)
                }
            }
            , t_ = function(t) {
                return t.touches && t.touches.length > 1 && (Q.isGesturing = !0) && A(t, Q.isDragging)
            }, tx = function() {
                return Q.isGesturing = !1,
                P(Q)
            }, ty = function(t) {
                if (!th(t)) {
                    var e = tt()
                      , r = te();
                    tf((e - tr) * L, (r - ti) * L, 1),
                    tr = e,
                    ti = r,
                    l && W.restart(!0)
                }
            }, tb = function(t) {
                if (!th(t)) {
                    t = nD(t, o),
                    R && (V = !0);
                    var e = (1 === t.deltaMode ? s : 2 === t.deltaMode ? nn.innerHeight : 1) * h;
                    tf(t.deltaX * e, t.deltaY * e, 0),
                    l && !N && W.restart(!0)
                }
            }, tw = function(t) {
                if (!th(t)) {
                    var e = t.clientX
                      , r = t.clientY
                      , i = e - Q.x
                      , n = r - Q.y;
                    Q.x = e,
                    Q.y = r,
                    q = !0,
                    l && W.restart(!0),
                    (i || n) && tp(i, n)
                }
            }, tT = function(t) {
                Q.event = t,
                M(Q)
            }, tk = function(t) {
                Q.event = t,
                O(Q)
            }, tS = function(t) {
                return th(t) || nD(t, o) && D(Q)
            };
            W = Q._dc = nr.delayedCall(c || .25, function() {
                Q._vx.reset(),
                Q._vy.reset(),
                W.pause(),
                l && l(Q)
            }).pause(),
            Q.deltaX = Q.deltaY = 0,
            Q._vx = nF(0, 50, !0),
            Q._vy = nF(0, 50, !0),
            Q.scrollX = tt,
            Q.scrollY = te,
            Q.isDragging = Q.isGesturing = Q.isPressed = !1,
            np(this),
            Q.enable = function(t) {
                return !Q.isEnabled && (nS(ts ? ta : n, "scroll", nE),
                i.indexOf("scroll") >= 0 && nS(ts ? ta : n, "scroll", ty, J, I),
                i.indexOf("wheel") >= 0 && nS(n, "wheel", tb, J, I),
                (i.indexOf("touch") >= 0 && nl || i.indexOf("pointer") >= 0) && (nS(n, nf[0], tg, J, I),
                nS(ta, nf[2], tv),
                nS(ta, nf[3], tv),
                B && nS(n, "click", tu, !0, !0),
                D && nS(n, "click", tS),
                A && nS(ta, "gesturestart", t_),
                P && nS(ta, "gestureend", tx),
                M && nS(n, nc + "enter", tT),
                O && nS(n, nc + "leave", tk),
                E && nS(n, nc + "move", tw)),
                Q.isEnabled = !0,
                Q.isDragging = Q.isGesturing = Q.isPressed = q = U = !1,
                Q._vx.reset(),
                Q._vy.reset(),
                tr = tt(),
                ti = te(),
                t && t.type && tg(t),
                z && z(Q)),
                Q
            }
            ,
            Q.disable = function() {
                Q.isEnabled && (nv.filter(function(t) {
                    return t !== Q && nk(t.target)
                }).length || nj(ts ? ta : n, "scroll", nE),
                Q.isPressed && (Q._vx.reset(),
                Q._vy.reset(),
                nj(N ? n : ta, nf[1], tm, !0)),
                nj(ts ? ta : n, "scroll", ty, I),
                nj(n, "wheel", tb, I),
                nj(n, nf[0], tg, I),
                nj(ta, nf[2], tv),
                nj(ta, nf[3], tv),
                nj(n, "click", tu, !0),
                nj(n, "click", tS),
                nj(ta, "gesturestart", t_),
                nj(ta, "gestureend", tx),
                nj(n, nc + "enter", tT),
                nj(n, nc + "leave", tk),
                nj(n, nc + "move", tw),
                Q.isEnabled = Q.isPressed = Q.isDragging = !1,
                F && F(Q))
            }
            ,
            Q.kill = Q.revert = function() {
                Q.disable();
                var t = nv.indexOf(Q);
                t >= 0 && nv.splice(t, 1),
                nd === Q && (nd = 0)
            }
            ,
            nv.push(Q),
            N && nk(n) && (nd = Q),
            Q.enable(d)
        }
        ,
        t = [{
            key: "velocityX",
            get: function() {
                return this._vx.getVelocity()
            }
        }, {
            key: "velocityY",
            get: function() {
                return this._vy.getVelocity()
            }
        }],
        function(t, e) {
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
            }
        }(e.prototype, t),
        e
    }();
    nY.version = "3.15.0",
    nY.create = function(t) {
        return new nY(t)
    }
    ,
    nY.register = nB,
    nY.getAll = function() {
        return nv.slice()
    }
    ,
    nY.getById = function(t) {
        return nv.filter(function(e) {
            return e.vars.id === t
        })[0]
    }
    ,
    nm() && nr.registerPlugin(nY);
    var nH, nX, nW, nU, nq, nV, nG, n$, nQ, nZ, nK, nJ, n0, n1, n2, n5, n3, n4, n8, n6, n9, n7, st, se, sr, si, sn, ss, sa, so, sl, sc, su, sh, sd, sf, sp, sm, sg = 1, sv = Date.now, s_ = sv(), sx = 0, sy = 0, sb = function(t, e, r) {
        var i = sz(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
        return r["_" + e + "Clamp"] = i,
        i ? t.substr(6, t.length - 7) : t
    }, sw = function(t, e) {
        return e && (!sz(t) || "clamp(" !== t.substr(0, 6)) ? "clamp(" + t + ")" : t
    }, sT = function() {
        return n1 = 1
    }, sk = function() {
        return n1 = 0
    }, sS = function(t) {
        return t
    }, sj = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, sM = function() {
        return "u" > typeof window
    }, sO = function() {
        return nH || sM() && (nH = window.gsap) && nH.registerPlugin && nH
    }, sE = function(t) {
        return !!~nG.indexOf(t)
    }, sC = function(t) {
        return ("Height" === t ? sl : nW["inner" + t]) || nq["client" + t] || nV["client" + t]
    }, sN = function(t) {
        return nT(t, "getBoundingClientRect") || (sE(t) ? function() {
            return aL.width = nW.innerWidth,
            aL.height = sl,
            aL
        }
        : function() {
            return s5(t)
        }
        )
    }, sA = function(t, e, r) {
        var i = r.d
          , n = r.d2
          , s = r.a;
        return (s = nT(t, "getBoundingClientRect")) ? function() {
            return s()[i]
        }
        : function() {
            return (e ? sC(n) : t["client" + n]) || 0
        }
    }, sP = function(t, e) {
        var r = e.s
          , i = e.d2
          , n = e.d
          , s = e.a;
        return Math.max(0, (s = nT(t, r = "scroll" + i)) ? s() - sN(t)()[n] : sE(t) ? (nq[r] || nV[r]) - sC(i) : t[r] - t["offset" + i])
    }, sR = function(t, e) {
        for (var r = 0; r < n8.length; r += 3)
            (!e || ~e.indexOf(n8[r + 1])) && t(n8[r], n8[r + 1], n8[r + 2])
    }, sz = function(t) {
        return "string" == typeof t
    }, sF = function(t) {
        return "function" == typeof t
    }, sD = function(t) {
        return "number" == typeof t
    }, sL = function(t) {
        return "object" == typeof t
    }, sI = function(t, e, r) {
        return t && t.progress(+!e) && r && t.pause()
    }, sB = function(t, e, r) {
        if (t.enabled) {
            var i = t._ctx ? t._ctx.add(function() {
                return e(t, r)
            }) : e(t, r);
            i && i.totalTime && (t.callbackAnimation = i)
        }
    }, sY = Math.abs, sH = "left", sX = "right", sW = "bottom", sU = "width", sq = "height", sV = "Right", sG = "Left", s$ = "Bottom", sQ = "padding", sZ = "margin", sK = "Width", sJ = "Height", s0 = function(t) {
        return nW.getComputedStyle(t.nodeType === Node.DOCUMENT_NODE ? t.scrollingElement : t)
    }, s1 = function(t) {
        var e = s0(t).position;
        t.style.position = "absolute" === e || "fixed" === e ? e : "relative"
    }, s2 = function(t, e) {
        for (var r in e)
            r in t || (t[r] = e[r]);
        return t
    }, s5 = function(t, e) {
        var r = e && "matrix(1, 0, 0, 1, 0, 0)" !== s0(t)[n2] && nH.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , i = t.getBoundingClientRect ? t.getBoundingClientRect() : t.scrollingElement.getBoundingClientRect();
        return r && r.progress(0).kill(),
        i
    }, s3 = function(t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0
    }, s4 = function(t) {
        var e, r = [], i = t.labels, n = t.duration();
        for (e in i)
            r.push(i[e] / n);
        return r
    }, s8 = function(t) {
        var e = nH.utils.snap(t)
          , r = Array.isArray(t) && t.slice(0).sort(function(t, e) {
            return t - e
        });
        return r ? function(t, i, n) {
            var s;
            if (void 0 === n && (n = .001),
            !i)
                return e(t);
            if (i > 0) {
                for (t -= n,
                s = 0; s < r.length; s++)
                    if (r[s] >= t)
                        return r[s];
                return r[s - 1]
            }
            for (s = r.length,
            t += n; s--; )
                if (r[s] <= t)
                    return r[s];
            return r[0]
        }
        : function(r, i, n) {
            void 0 === n && (n = .001);
            var s = e(r);
            return !i || Math.abs(s - r) < n || s - r < 0 == i < 0 ? s : e(i < 0 ? r - t : r + t)
        }
    }, s6 = function(t, e, r, i) {
        return r.split(",").forEach(function(r) {
            return t(e, r, i)
        })
    }, s9 = function(t, e, r, i, n) {
        return t.addEventListener(e, r, {
            passive: !i,
            capture: !!n
        })
    }, s7 = function(t, e, r, i) {
        return t.removeEventListener(e, r, !!i)
    }, at = function(t, e, r) {
        (r = r && r.wheelHandler) && (t(e, "wheel", r),
        t(e, "touchmove", r))
    }, ae = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, ar = {
        toggleActions: "play",
        anticipatePin: 0
    }, ai = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, an = function(t, e) {
        if (sz(t)) {
            var r = t.indexOf("=")
              , i = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r && (t.indexOf("%") > r && (i *= e / 100),
            t = t.substr(0, r - 1)),
            t = i + (t in ai ? ai[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
        }
        return t
    }, as = function(t, e, r, i, n, s, a, o) {
        var l = n.startColor
          , c = n.endColor
          , u = n.fontSize
          , h = n.indent
          , d = n.fontWeight
          , f = nU.createElement("div")
          , p = sE(r) || "fixed" === nT(r, "pinType")
          , m = -1 !== t.indexOf("scroller")
          , g = p ? nV : "IFRAME" === r.tagName ? r.contentDocument.body : r
          , v = -1 !== t.indexOf("start")
          , _ = v ? l : c
          , x = "border-color:" + _ + ";font-size:" + u + ";color:" + _ + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((m || o) && p ? "fixed;" : "absolute;"),
        (m || o || !p) && (x += (i === nA ? sX : sW) + ":" + (s + parseFloat(h)) + "px;"),
        a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        f._isStart = v,
        f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        f.style.cssText = x,
        f.innerText = e || 0 === e ? t + "-" + e : t,
        g.children[0] ? g.insertBefore(f, g.children[0]) : g.appendChild(f),
        f._offset = f["offset" + i.op.d2],
        aa(f, 0, i, v),
        f
    }, aa = function(t, e, r, i) {
        var n = {
            display: "block"
        }
          , s = r[i ? "os2" : "p2"]
          , a = r[i ? "p2" : "os2"];
        t._isFlipped = i,
        n[r.a + "Percent"] = i ? -100 : 0,
        n[r.a] = i ? "1px" : 0,
        n["border" + s + sK] = 1,
        n["border" + a + sK] = 0,
        n[r.p] = e + "px",
        nH.set(t, n)
    }, ao = [], al = {}, ac = function() {
        return sv() - sx > 34 && (sd || (sd = requestAnimationFrame(aE)))
    }, au = function() {
        st && st.isPressed && !(st.startX > nV.clientWidth) || (n_.cache++,
        st ? sd || (sd = requestAnimationFrame(aE)) : aE(),
        sx || ag("scrollStart"),
        sx = sv())
    }, ah = function() {
        si = nW.innerWidth,
        sr = nW.innerHeight
    }, ad = function(t) {
        n_.cache++,
        (!0 === t || !n0 && !n7 && !nU.fullscreenElement && !nU.webkitFullscreenElement && (!se || si !== nW.innerWidth || Math.abs(nW.innerHeight - sr) > .25 * nW.innerHeight)) && n$.restart(!0)
    }, af = {}, ap = [], am = function t() {
        return s7(aU, "scrollEnd", t) || aj(!0)
    }, ag = function(t) {
        return af[t] && af[t].map(function(t) {
            return t()
        }) || ap
    }, av = [], a_ = function(t) {
        for (var e = 0; e < av.length; e += 5)
            (!t || av[e + 4] && av[e + 4].query === t) && (av[e].style.cssText = av[e + 1],
            av[e].getBBox && av[e].setAttribute("transform", av[e + 2] || ""),
            av[e + 3].uncache = 1)
    }, ax = function() {
        return n_.forEach(function(t) {
            return sF(t) && ++t.cacheID && (t.rec = t())
        })
    }, ay = function(t, e) {
        var r;
        for (n5 = 0; n5 < ao.length; n5++)
            (r = ao[n5]) && (!e || r._ctx === e) && (t ? r.kill(1) : r.revert(!0, !0));
        sc = !0,
        e && a_(e),
        e || ag("revert")
    }, ab = function(t, e) {
        n_.cache++,
        (e || !sf) && n_.forEach(function(t) {
            return sF(t) && t.cacheID++ && (t.rec = 0)
        }),
        sz(t) && (nW.history.scrollRestoration = sa = t)
    }, aw = 0, aT = function() {
        if (sp !== aw) {
            var t = sp = aw;
            requestAnimationFrame(function() {
                return t === aw && aj(!0)
            })
        }
    }, ak = function() {
        nV.appendChild(so),
        sl = !st && so.offsetHeight || nW.innerHeight,
        nV.removeChild(so)
    }, aS = function(t) {
        return nQ(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
            return e.style.display = t ? "none" : "block"
        })
    }, aj = function(t, e) {
        if (nq = nU.documentElement,
        nV = nU.body,
        nG = [nW, nU, nq, nV],
        sx && !t && !sc)
            return void s9(aU, "scrollEnd", am);
        ak(),
        sf = aU.isRefreshing = !0,
        sc || ax();
        var r = ag("refreshInit");
        n6 && aU.sort(),
        e || ay(),
        n_.forEach(function(t) {
            sF(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
            t(0))
        }),
        ao.slice(0).forEach(function(t) {
            return t.refresh()
        }),
        sc = !1,
        ao.forEach(function(t) {
            if (t._subPinOffset && t.pin) {
                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight"
                  , r = t.pin[e];
                t.revert(!0, 1),
                t.adjustPinSpacing(t.pin[e] - r),
                t.refresh()
            }
        }),
        su = 1,
        aS(!0),
        ao.forEach(function(t) {
            var e = sP(t.scroller, t._dir)
              , r = "max" === t.vars.end || t._endClamp && t.end > e
              , i = t._startClamp && t.start >= e;
            (r || i) && t.setPositions(i ? e - 1 : t.start, r ? Math.max(i ? e : t.start + 1, e) : t.end, !0)
        }),
        aS(!1),
        su = 0,
        r.forEach(function(t) {
            return t && t.render && t.render(-1)
        }),
        n_.forEach(function(t) {
            sF(t) && (t.smooth && requestAnimationFrame(function() {
                return t.target.style.scrollBehavior = "smooth"
            }),
            t.rec && t(t.rec))
        }),
        ab(sa, 1),
        n$.pause(),
        aw++,
        sf = 2,
        aE(2),
        ao.forEach(function(t) {
            return sF(t.vars.onRefresh) && t.vars.onRefresh(t)
        }),
        sf = aU.isRefreshing = !1,
        ag("refresh")
    }, aM = 0, aO = 1, aE = function(t) {
        if (2 === t || !sf && !sc) {
            aU.isUpdating = !0,
            sm && sm.update(0);
            var e = ao.length
              , r = sv()
              , i = r - s_ >= 50
              , n = e && ao[0].scroll();
            if (aO = aM > n ? -1 : 1,
            sf || (aM = n),
            i && (sx && !n1 && r - sx > 200 && (sx = 0,
            ag("scrollEnd")),
            nK = s_,
            s_ = r),
            aO < 0) {
                for (n5 = e; n5-- > 0; )
                    ao[n5] && ao[n5].update(0, i);
                aO = 1
            } else
                for (n5 = 0; n5 < e; n5++)
                    ao[n5] && ao[n5].update(0, i);
            aU.isUpdating = !1
        }
        sd = 0
    }, aC = [sH, "top", sW, sX, sZ + s$, sZ + sV, sZ + "Top", sZ + sG, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], aN = aC.concat([sU, sq, "boxSizing", "max" + sK, "max" + sJ, "position", sZ, sQ, sQ + "Top", sQ + sV, sQ + s$, sQ + sG]), aA = function(t, e, r) {
        az(r);
        var i = t._gsap;
        if (i.spacerIsNative)
            az(i.spacerState);
        else if (t._gsap.swappedIn) {
            var n = e.parentNode;
            n && (n.insertBefore(t, e),
            n.removeChild(e))
        }
        t._gsap.swappedIn = !1
    }, aP = function(t, e, r, i) {
        if (!t._gsap.swappedIn) {
            for (var n, s = aC.length, a = e.style, o = t.style; s--; )
                a[n = aC[s]] = r[n];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            o[sW] = o[sX] = "auto",
            a.flexBasis = r.flexBasis || "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[sU] = s3(t, nN) + "px",
            a[sq] = s3(t, nA) + "px",
            a[sQ] = o[sZ] = o.top = o[sH] = "0",
            az(i),
            o[sU] = o["max" + sK] = r[sU],
            o[sq] = o["max" + sJ] = r[sq],
            o[sQ] = r[sQ],
            t.parentNode !== e && (t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
            t._gsap.swappedIn = !0
        }
    }, aR = /([A-Z])/g, az = function(t) {
        if (t) {
            var e, r, i = t.t.style, n = t.length, s = 0;
            for ((t.t._gsap || nH.core.getCache(t.t)).uncache = 1; s < n; s += 2)
                r = t[s + 1],
                e = t[s],
                r ? i[e] = r : i[e] && i.removeProperty(e.replace(aR, "-$1").toLowerCase())
        }
    }, aF = function(t) {
        for (var e = aN.length, r = t.style, i = [], n = 0; n < e; n++)
            i.push(aN[n], r[aN[n]]);
        return i.t = t,
        i
    }, aD = function(t, e, r) {
        for (var i, n = [], s = t.length, a = 8 * !!r; a < s; a += 2)
            i = t[a],
            n.push(i, i in e ? e[i] : t[a + 1]);
        return n.t = t.t,
        n
    }, aL = {
        left: 0,
        top: 0
    }, aI = function(t, e, r, i, n, s, a, o, l, c, u, h, d, f) {
        sF(t) && (t = t(o)),
        sz(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? an("0" + t.substr(3), r) : 0));
        var p, m, g, v = d ? d.time() : 0;
        if (d && d.seek(0),
        isNaN(t) || (t *= 1),
        sD(t))
            d && (t = nH.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, h, t)),
            a && aa(a, r, i, !0);
        else {
            sF(e) && (e = e(o));
            var _, x, y, b, w = (t || "0").split(" ");
            (_ = s5(g = nP(e, o) || nV) || {}).left || _.top || "none" !== s0(g).display || (b = g.style.display,
            g.style.display = "block",
            _ = s5(g),
            b ? g.style.display = b : g.style.removeProperty("display")),
            x = an(w[0], _[i.d]),
            y = an(w[1] || "0", r),
            t = _[i.p] - l[i.p] - c + x + n - y,
            a && aa(a, y, i, r - y < 20 || a._isStart && y > 20),
            r -= r - y
        }
        if (f && (o[f] = t || -.001,
        t < 0 && (t = 0)),
        s) {
            var T = t + r
              , k = s._isStart;
            p = "scroll" + i.d2,
            aa(s, T, i, k && T > 20 || !k && (u ? Math.max(nV[p], nq[p]) : s.parentNode[p]) <= T + 1),
            u && (l = s5(a),
            u && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + "px"))
        }
        return d && g && (p = s5(g),
        d.seek(h),
        m = s5(g),
        d._caScrollDist = p[i.p] - m[i.p],
        t = t / d._caScrollDist * h),
        d && d.seek(v),
        d ? t : Math.round(t)
    }, aB = /(webkit|moz|length|cssText|inset)/i, aY = function(t, e, r, i) {
        if (t.parentNode !== e) {
            var n, s, a = t.style;
            if (e === nV) {
                for (n in t._stOrig = a.cssText,
                s = s0(t))
                    +n || aB.test(n) || !s[n] || "string" != typeof a[n] || "0" === n || (a[n] = s[n]);
                a.top = r,
                a.left = i
            } else
                a.cssText = t._stOrig;
            nH.core.getCache(t).uncache = 1,
            e.appendChild(t)
        }
    }, aH = function(t, e, r) {
        var i = e
          , n = i;
        return function(e) {
            var s = Math.round(t());
            return s !== i && s !== n && Math.abs(s - i) > 3 && Math.abs(s - n) > 3 && (e = s,
            r && r()),
            n = i,
            i = Math.round(e)
        }
    }, aX = function(t, e, r) {
        var i = {};
        i[e.p] = "+=" + r,
        nH.set(t, i)
    }, aW = function(t, e) {
        var r = nz(t, e)
          , i = "_scroll" + e.p2
          , n = function e(n, s, a, o, l) {
            var c = e.tween
              , u = s.onComplete
              , h = {};
            a = a || r();
            var d = aH(r, a, function() {
                c.kill(),
                e.tween = 0
            });
            return l = o && l || 0,
            o = o || n - a,
            c && c.kill(),
            s[i] = n,
            s.inherit = !1,
            s.modifiers = h,
            h[i] = function() {
                return d(a + o * c.ratio + l * c.ratio * c.ratio)
            }
            ,
            s.onUpdate = function() {
                n_.cache++,
                e.tween && aE()
            }
            ,
            s.onComplete = function() {
                e.tween = 0,
                u && u.call(c)
            }
            ,
            c = e.tween = nH.to(t, s)
        };
        return t[i] = r,
        r.wheelHandler = function() {
            return n.tween && n.tween.kill() && (n.tween = 0)
        }
        ,
        s9(t, "wheel", r.wheelHandler),
        aU.isTouch && s9(t, "touchmove", r.wheelHandler),
        n
    }, aU = function() {
        function t(e, r) {
            nX || t.register(nH) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            ss(this),
            this.init(e, r)
        }
        return t.prototype.init = function(e, r) {
            if (this.progress = this.start = 0,
            this.vars && this.kill(!0, !0),
            !sy) {
                this.update = this.refresh = this.kill = sS;
                return
            }
            var i, n, s, a, o, l, c, u, h, d, f, p, m, g, v, _, x, y, b, w, T, k, S, j, M, O, E, C, N, A, P, R, z, F, D, L, I, B, Y, H, X, W = e = s2(sz(e) || sD(e) || e.nodeType ? {
                trigger: e
            } : e, ar), U = W.onUpdate, q = W.toggleClass, V = W.id, G = W.onToggle, $ = W.onRefresh, Q = W.scrub, Z = W.trigger, K = W.pin, J = W.pinSpacing, tt = W.invalidateOnRefresh, te = W.anticipatePin, tr = W.onScrubComplete, ti = W.onSnapComplete, tn = W.once, ts = W.snap, ta = W.pinReparent, to = W.pinSpacer, tl = W.containerAnimation, tc = W.fastScrollEnd, tu = W.preventOverlaps, th = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? nN : nA, td = !Q && 0 !== Q, tf = nP(e.scroller || nW), tp = nH.core.getCache(tf), tm = sE(tf), tg = ("pinType"in e ? e.pinType : nT(tf, "pinType") || tm && "fixed") === "fixed", tv = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], t_ = td && e.toggleActions.split(" "), tx = "markers"in e ? e.markers : ar.markers, ty = tm ? 0 : parseFloat(s0(tf)["border" + th.p2 + sK]) || 0, tb = this, tw = e.onRefreshInit && function() {
                return e.onRefreshInit(tb)
            }
            , tT = sA(tf, tm, th), tk = !tm || ~nx.indexOf(tf) ? sN(tf) : function() {
                return aL
            }
            , tS = 0, tj = 0, tM = 0, tO = nz(tf, th);
            if (tb._startClamp = tb._endClamp = !1,
            tb._dir = th,
            te *= 45,
            tb.scroller = tf,
            tb.scroll = tl ? tl.time.bind(tl) : tO,
            l = tO(),
            tb.vars = e,
            r = r || e.animation,
            "refreshPriority"in e && (n6 = 1,
            -9999 === e.refreshPriority && (sm = tb)),
            tp.tweenScroll = tp.tweenScroll || {
                top: aW(tf, nA),
                left: aW(tf, nN)
            },
            tb.tweenTo = s = tp.tweenScroll[th.p],
            tb.scrubDuration = function(t) {
                (D = sD(t) && t) ? F ? F.duration(t) : F = nH.to(r, {
                    ease: "expo",
                    totalProgress: "+=0",
                    inherit: !1,
                    duration: D,
                    paused: !0,
                    onComplete: function() {
                        return tr && tr(tb)
                    }
                }) : (F && F.progress(1).kill(),
                F = 0)
            }
            ,
            r && (r.vars.lazy = !1,
            r._initted && !tb.isReverted || !1 !== r.vars.immediateRender && !1 !== e.immediateRender && r.duration() && r.render(0, !0, !0),
            tb.animation = r.pause(),
            r.scrollTrigger = tb,
            tb.scrubDuration(Q),
            R = 0,
            V || (V = r.vars.id)),
            ts && ((!sL(ts) || ts.push) && (ts = {
                snapTo: ts
            }),
            "scrollBehavior"in nV.style && nH.set(tm ? [nV, nq] : tf, {
                scrollBehavior: "auto"
            }),
            n_.forEach(function(t) {
                return sF(t) && t.target === (tm ? nU.scrollingElement || nq : tf) && (t.smooth = !1)
            }),
            o = sF(ts.snapTo) ? ts.snapTo : "labels" === ts.snapTo ? (i = r,
            function(t) {
                return nH.utils.snap(s4(i), t)
            }
            ) : "labelsDirectional" === ts.snapTo ? (n = r,
            function(t, e) {
                return s8(s4(n))(t, e.direction)
            }
            ) : !1 !== ts.directional ? function(t, e) {
                return s8(ts.snapTo)(t, sv() - tj < 500 ? 0 : e.direction)
            }
            : nH.utils.snap(ts.snapTo),
            L = sL(L = ts.duration || {
                min: .1,
                max: 2
            }) ? nZ(L.min, L.max) : nZ(L, L),
            I = nH.delayedCall(ts.delay || D / 2 || .1, function() {
                var t = tO()
                  , e = sv() - tj < 500
                  , i = s.tween;
                if ((e || 10 > Math.abs(tb.getVelocity())) && !i && !n1 && tS !== t) {
                    var n, a, l = (t - u) / _, c = r && !td ? r.totalProgress() : l, d = e ? 0 : (c - z) / (sv() - nK) * 1e3 || 0, f = nH.utils.clamp(-l, 1 - l, sY(d / 2) * d / .185), p = l + (!1 === ts.inertia ? 0 : f), m = ts, g = m.onStart, v = m.onInterrupt, x = m.onComplete;
                    if (sD(n = o(p, tb)) || (n = p),
                    a = Math.max(0, Math.round(u + n * _)),
                    t <= h && t >= u && a !== t) {
                        if (i && !i._initted && i.data <= sY(a - t))
                            return;
                        !1 === ts.inertia && (f = n - l),
                        s(a, {
                            duration: L(sY(.185 * Math.max(sY(p - c), sY(n - c)) / d / .05 || 0)),
                            ease: ts.ease || "power3",
                            data: sY(a - t),
                            onInterrupt: function() {
                                return I.restart(!0) && v && sB(tb, v)
                            },
                            onComplete: function() {
                                tb.update(),
                                tS = tO(),
                                r && !td && (F ? F.resetTo("totalProgress", n, r._tTime / r._tDur) : r.progress(n)),
                                R = z = r && !td ? r.totalProgress() : tb.progress,
                                ti && ti(tb),
                                x && sB(tb, x)
                            }
                        }, t, f * _, a - t - f * _),
                        g && sB(tb, g, s.tween)
                    }
                } else
                    tb.isActive && tS !== t && I.restart(!0)
            }).pause()),
            V && (al[V] = tb),
            (X = (Z = tb.trigger = nP(Z || !0 !== K && K)) && Z._gsap && Z._gsap.stRevert) && (X = X(tb)),
            K = !0 === K ? Z : nP(K),
            sz(q) && (q = {
                targets: Z,
                className: q
            }),
            K && (!1 === J || J === sZ || (J = (!!J || !K.parentNode || !K.parentNode.style || "flex" !== s0(K.parentNode).display) && sQ),
            tb.pin = K,
            (a = nH.core.getCache(K)).spacer ? x = a.pinState : (to && ((to = nP(to)) && !to.nodeType && (to = to.current || to.nativeElement),
            a.spacerIsNative = !!to,
            to && (a.spacerState = aF(to))),
            a.spacer = w = to || nU.createElement("div"),
            w.classList.add("pin-spacer"),
            V && w.classList.add("pin-spacer-" + V),
            a.pinState = x = aF(K)),
            !1 !== e.force3D && nH.set(K, {
                force3D: !0
            }),
            tb.spacer = w = a.spacer,
            O = (P = s0(K))[J + th.os2],
            k = nH.getProperty(K),
            S = nH.quickSetter(K, th.a, "px"),
            aP(K, w, P),
            b = aF(K)),
            tx) {
                g = sL(tx) ? s2(tx, ae) : ae,
                p = as("scroller-start", V, tf, th, g, 0),
                m = as("scroller-end", V, tf, th, g, 0, p),
                T = p["offset" + th.op.d2];
                var tE = nP(nT(tf, "content") || tf);
                d = this.markerStart = as("start", V, tE, th, g, T, 0, tl),
                f = this.markerEnd = as("end", V, tE, th, g, T, 0, tl),
                tl && (H = nH.quickSetter([d, f], th.a, "px")),
                tg || nx.length && !0 === nT(tf, "fixedMarkers") || (s1(tm ? nV : tf),
                nH.set([p, m], {
                    force3D: !0
                }),
                C = nH.quickSetter(p, th.a, "px"),
                A = nH.quickSetter(m, th.a, "px"))
            }
            if (tl) {
                var tC = tl.vars.onUpdate
                  , tN = tl.vars.onUpdateParams;
                tl.eventCallback("onUpdate", function() {
                    tb.update(0, 0, 1),
                    tC && tC.apply(tl, tN || [])
                })
            }
            if (tb.previous = function() {
                return ao[ao.indexOf(tb) - 1]
            }
            ,
            tb.next = function() {
                return ao[ao.indexOf(tb) + 1]
            }
            ,
            tb.revert = function(t, e) {
                if (!e)
                    return tb.kill(!0);
                var i = !1 !== t || !tb.enabled
                  , n = n0;
                i !== tb.isReverted && (i && (B = Math.max(tO(), tb.scroll.rec || 0),
                tM = tb.progress,
                Y = r && r.progress()),
                d && [d, f, p, m].forEach(function(t) {
                    return t.style.display = i ? "none" : "block"
                }),
                i && (n0 = tb,
                tb.update(i)),
                !K || ta && tb.isActive || (i ? aA(K, w, x) : aP(K, w, s0(K), E)),
                i || tb.update(i),
                n0 = n,
                tb.isReverted = i)
            }
            ,
            tb.refresh = function(i, n, a, o) {
                if (!n0 && tb.enabled || n) {
                    if (K && i && sx)
                        return void s9(t, "scrollEnd", am);
                    !sf && tw && tw(tb),
                    n0 = tb,
                    s.tween && !a && (s.tween.kill(),
                    s.tween = 0),
                    F && F.pause(),
                    tt && r && (r.revert({
                        kill: !1
                    }).invalidate(),
                    r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(t) {
                        return t.vars.immediateRender && t.render(0, !0, !0)
                    }) : r.vars.immediateRender && r.render(0, !0, !0)),
                    tb.isReverted || tb.revert(!0, !0),
                    tb._subPinOffset = !1;
                    var g, T, S, O, C, A, P, R, z, D, L, H, X, W = tT(), U = tk(), q = tl ? tl.duration() : sP(tf, th), V = _ <= .01 || !_, G = 0, Q = o || 0, te = sL(a) ? a.end : e.end, tr = e.endTrigger || Z, ti = sL(a) ? a.start : e.start || (0 !== e.start && Z ? K ? "0 0" : "0 100%" : 0), tn = tb.pinnedContainer = e.pinnedContainer && nP(e.pinnedContainer, tb), ts = Z && Math.max(0, ao.indexOf(tb)) || 0, to = ts;
                    for (tx && sL(a) && (H = nH.getProperty(p, th.p),
                    X = nH.getProperty(m, th.p)); to-- > 0; )
                        (A = ao[to]).end || A.refresh(0, 1) || (n0 = tb),
                        (P = A.pin) && (P === Z || P === K || P === tn) && !A.isReverted && (D || (D = []),
                        D.unshift(A),
                        A.revert(!0, !0)),
                        A !== ao[to] && (ts--,
                        to--);
                    for (sF(ti) && (ti = ti(tb)),
                    u = aI(ti = sb(ti, "start", tb), Z, W, th, tO(), d, p, tb, U, ty, tg, q, tl, tb._startClamp && "_startClamp") || (K ? -.001 : 0),
                    sF(te) && (te = te(tb)),
                    sz(te) && !te.indexOf("+=") && (~te.indexOf(" ") ? te = (sz(ti) ? ti.split(" ")[0] : "") + te : (G = an(te.substr(2), W),
                    te = sz(ti) ? ti : (tl ? nH.utils.mapRange(0, tl.duration(), tl.scrollTrigger.start, tl.scrollTrigger.end, u) : u) + G,
                    tr = Z)),
                    te = sb(te, "end", tb),
                    h = Math.max(u, aI(te || (tr ? "100% 0" : q), tr, W, th, tO() + G, f, m, tb, U, ty, tg, q, tl, tb._endClamp && "_endClamp")) || -.001,
                    G = 0,
                    to = ts; to--; )
                        (P = (A = ao[to] || {}).pin) && A.start - A._pinPush <= u && !tl && A.end > 0 && (g = A.end - (tb._startClamp ? Math.max(0, A.start) : A.start),
                        (P === Z && A.start - A._pinPush < u || P === tn) && isNaN(ti) && (G += g * (1 - A.progress)),
                        P === K && (Q += g));
                    if (u += G,
                    h += G,
                    tb._startClamp && (tb._startClamp += G),
                    tb._endClamp && !sf && (tb._endClamp = h || -.001,
                    h = Math.min(h, sP(tf, th))),
                    _ = h - u || (u -= .01) && .001,
                    V && (tM = nH.utils.clamp(0, 1, nH.utils.normalize(u, h, B))),
                    tb._pinPush = Q,
                    d && G && ((g = {})[th.a] = "+=" + G,
                    tn && (g[th.p] = "-=" + tO()),
                    nH.set([d, f], g)),
                    K && !(su && tb.end >= sP(tf, th)))
                        g = s0(K),
                        O = th === nA,
                        S = tO(),
                        j = parseFloat(k(th.a)) + Q,
                        !q && h > 1 && (L = {
                            style: L = (tm ? nU.scrollingElement || nq : tf).style,
                            value: L["overflow" + th.a.toUpperCase()]
                        },
                        tm && "scroll" !== s0(nV)["overflow" + th.a.toUpperCase()] && (L.style["overflow" + th.a.toUpperCase()] = "scroll")),
                        aP(K, w, g),
                        b = aF(K),
                        T = s5(K, !0),
                        R = tg && nz(tf, O ? nN : nA)(),
                        J ? ((E = [J + th.os2, _ + Q + "px"]).t = w,
                        (to = J === sQ ? s3(K, th) + _ + Q : 0) && (E.push(th.d, to + "px"),
                        "auto" !== w.style.flexBasis && (w.style.flexBasis = to + "px")),
                        az(E),
                        tn && ao.forEach(function(t) {
                            t.pin === tn && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                        }),
                        tg && tO(B)) : (to = s3(K, th)) && "auto" !== w.style.flexBasis && (w.style.flexBasis = to + "px"),
                        tg && ((C = {
                            top: T.top + (O ? S - u : R) + "px",
                            left: T.left + (O ? R : S - u) + "px",
                            boxSizing: "border-box",
                            position: "fixed"
                        })[sU] = C["max" + sK] = Math.ceil(T.width) + "px",
                        C[sq] = C["max" + sJ] = Math.ceil(T.height) + "px",
                        C[sZ] = C[sZ + "Top"] = C[sZ + sV] = C[sZ + s$] = C[sZ + sG] = "0",
                        C[sQ] = g[sQ],
                        C[sQ + "Top"] = g[sQ + "Top"],
                        C[sQ + sV] = g[sQ + sV],
                        C[sQ + s$] = g[sQ + s$],
                        C[sQ + sG] = g[sQ + sG],
                        y = aD(x, C, ta),
                        sf && tO(0)),
                        r ? (z = r._initted,
                        n9(1),
                        r.render(r.duration(), !0, !0),
                        M = k(th.a) - j + _ + Q,
                        N = Math.abs(_ - M) > 1,
                        tg && N && y.splice(y.length - 2, 2),
                        r.render(0, !0, !0),
                        z || r.invalidate(!0),
                        r.parent || r.totalTime(r.totalTime()),
                        n9(0)) : M = _,
                        L && (L.value ? L.style["overflow" + th.a.toUpperCase()] = L.value : L.style.removeProperty("overflow-" + th.a));
                    else if (Z && tO() && !tl)
                        for (T = Z.parentNode; T && T !== nV; )
                            T._pinOffset && (u -= T._pinOffset,
                            h -= T._pinOffset),
                            T = T.parentNode;
                    D && D.forEach(function(t) {
                        return t.revert(!1, !0)
                    }),
                    tb.start = u,
                    tb.end = h,
                    l = c = sf ? B : tO(),
                    tl || sf || (l < B && tO(B),
                    tb.scroll.rec = 0),
                    tb.revert(!1, !0),
                    tj = sv(),
                    I && (tS = -1,
                    I.restart(!0)),
                    n0 = 0,
                    r && td && (r._initted || Y) && r.progress() !== Y && r.progress(Y || 0, !0).render(r.time(), !0, !0),
                    (V || tM !== tb.progress || tl || tt || r && !r._initted) && (r && !td && (r._initted || tM || !1 !== r.vars.immediateRender) && r.totalProgress(tl && u < -.001 && !tM ? nH.utils.normalize(u, h, 0) : tM, !0),
                    tb.progress = V || (l - u) / _ === tM ? 0 : tM),
                    K && J && (w._pinOffset = Math.round(tb.progress * M)),
                    F && F.invalidate(),
                    isNaN(H) || (H -= nH.getProperty(p, th.p),
                    X -= nH.getProperty(m, th.p),
                    aX(p, th, H),
                    aX(d, th, H - (o || 0)),
                    aX(m, th, X),
                    aX(f, th, X - (o || 0))),
                    V && !sf && tb.update(),
                    !$ || sf || v || (v = !0,
                    $(tb),
                    v = !1)
                }
            }
            ,
            tb.getVelocity = function() {
                return (tO() - c) / (sv() - nK) * 1e3 || 0
            }
            ,
            tb.endAnimation = function() {
                sI(tb.callbackAnimation),
                r && (F ? F.progress(1) : r.paused() ? td || sI(r, tb.direction < 0, 1) : sI(r, r.reversed()))
            }
            ,
            tb.labelToScroll = function(t) {
                return r && r.labels && (u || tb.refresh() || u) + r.labels[t] / r.duration() * _ || 0
            }
            ,
            tb.getTrailing = function(t) {
                var e = ao.indexOf(tb)
                  , r = tb.direction > 0 ? ao.slice(0, e).reverse() : ao.slice(e + 1);
                return (sz(t) ? r.filter(function(e) {
                    return e.vars.preventOverlaps === t
                }) : r).filter(function(t) {
                    return tb.direction > 0 ? t.end <= u : t.start >= h
                })
            }
            ,
            tb.update = function(t, e, i) {
                if (!tl || i || t) {
                    var n, a, o, d, f, m, g, v = !0 === sf ? B : tb.scroll(), x = t ? 0 : (v - u) / _, T = x < 0 ? 0 : x > 1 ? 1 : x || 0, k = tb.progress;
                    if (e && (c = l,
                    l = tl ? tO() : v,
                    ts && (z = R,
                    R = r && !td ? r.totalProgress() : T)),
                    te && K && !n0 && !sg && sx && (!T && u < v + (v - c) / (sv() - nK) * te ? T = 1e-4 : 1 === T && h > v + (v - c) / (sv() - nK) * te && (T = .9999)),
                    T !== k && tb.enabled) {
                        if (d = (f = (n = tb.isActive = !!T && T < 1) != (!!k && k < 1)) || !!T != !!k,
                        tb.direction = T > k ? 1 : -1,
                        tb.progress = T,
                        d && !n0 && (a = T && !k ? 0 : 1 === T ? 1 : 1 === k ? 2 : 3,
                        td && (o = !f && "none" !== t_[a + 1] && t_[a + 1] || t_[a],
                        g = r && ("complete" === o || "reset" === o || o in r))),
                        tu && (f || g) && (g || Q || !r) && (sF(tu) ? tu(tb) : tb.getTrailing(tu).forEach(function(t) {
                            return t.endAnimation()
                        })),
                        !td && (!F || n0 || sg ? r && r.totalProgress(T, !!(n0 && (tj || t))) : (F._dp._time - F._start !== F._time && F.render(F._dp._time - F._start),
                        F.resetTo ? F.resetTo("totalProgress", T, r._tTime / r._tDur) : (F.vars.totalProgress = T,
                        F.invalidate().restart()))),
                        K)
                            if (t && J && (w.style[J + th.os2] = O),
                            tg) {
                                if (d) {
                                    if (m = !t && T > k && h + 1 > v && v + 1 >= sP(tf, th),
                                    ta)
                                        if (!t && (n || m)) {
                                            var E = s5(K, !0)
                                              , P = v - u;
                                            aY(K, nV, E.top + (th === nA ? P : 0) + "px", E.left + (th === nA ? 0 : P) + "px")
                                        } else
                                            aY(K, w);
                                    az(n || m ? y : b),
                                    N && T < 1 && n || S(j + (1 !== T || m ? 0 : M))
                                }
                            } else
                                S(sj(j + M * T));
                        !ts || s.tween || n0 || sg || I.restart(!0),
                        q && (f || tn && T && (T < 1 || !sh)) && nQ(q.targets).forEach(function(t) {
                            return t.classList[n || tn ? "add" : "remove"](q.className)
                        }),
                        !U || td || t || U(tb),
                        d && !n0 ? (td && (g && ("complete" === o ? r.pause().totalProgress(1) : "reset" === o ? r.restart(!0).pause() : "restart" === o ? r.restart(!0) : r[o]()),
                        U && U(tb)),
                        (f || !sh) && (G && f && sB(tb, G),
                        tv[a] && sB(tb, tv[a]),
                        tn && (1 === T ? tb.kill(!1, 1) : tv[a] = 0),
                        !f && tv[a = 1 === T ? 1 : 3] && sB(tb, tv[a])),
                        tc && !n && Math.abs(tb.getVelocity()) > (sD(tc) ? tc : 2500) && (sI(tb.callbackAnimation),
                        F ? F.progress(1) : sI(r, "reverse" === o ? 1 : !T, 1))) : td && U && !n0 && U(tb)
                    }
                    if (A) {
                        var D = tl ? v / tl.duration() * (tl._caScrollDist || 0) : v;
                        C(D + +!!p._isFlipped),
                        A(D)
                    }
                    H && H(-v / tl.duration() * (tl._caScrollDist || 0))
                }
            }
            ,
            tb.enable = function(e, r) {
                tb.enabled || (tb.enabled = !0,
                s9(tf, "resize", ad),
                tm || s9(tf, "scroll", au),
                tw && s9(t, "refreshInit", tw),
                !1 !== e && (tb.progress = tM = 0,
                l = c = tS = tO()),
                !1 !== r && tb.refresh())
            }
            ,
            tb.getTween = function(t) {
                return t && s ? s.tween : F
            }
            ,
            tb.setPositions = function(t, e, r, i) {
                if (tl) {
                    var n = tl.scrollTrigger
                      , s = tl.duration()
                      , a = n.end - n.start;
                    t = n.start + a * t / s,
                    e = n.start + a * e / s
                }
                tb.refresh(!1, !1, {
                    start: sw(t, r && !!tb._startClamp),
                    end: sw(e, r && !!tb._endClamp)
                }, i),
                tb.update()
            }
            ,
            tb.adjustPinSpacing = function(t) {
                if (E && t) {
                    var e = E.indexOf(th.d) + 1;
                    E[e] = parseFloat(E[e]) + t + "px",
                    E[1] = parseFloat(E[1]) + t + "px",
                    az(E)
                }
            }
            ,
            tb.disable = function(e, r) {
                if (!1 !== e && tb.revert(!0, !0),
                tb.enabled && (tb.enabled = tb.isActive = !1,
                r || F && F.pause(),
                B = 0,
                a && (a.uncache = 1),
                tw && s7(t, "refreshInit", tw),
                I && (I.pause(),
                s.tween && s.tween.kill() && (s.tween = 0)),
                !tm)) {
                    for (var i = ao.length; i--; )
                        if (ao[i].scroller === tf && ao[i] !== tb)
                            return;
                    s7(tf, "resize", ad),
                    tm || s7(tf, "scroll", au)
                }
            }
            ,
            tb.kill = function(t, i) {
                tb.disable(t, i),
                F && !i && F.kill(),
                V && delete al[V];
                var n = ao.indexOf(tb);
                n >= 0 && ao.splice(n, 1),
                n === n5 && aO > 0 && n5--,
                n = 0,
                ao.forEach(function(t) {
                    return t.scroller === tb.scroller && (n = 1)
                }),
                n || sf || (tb.scroll.rec = 0),
                r && (r.scrollTrigger = null,
                t && r.revert({
                    kill: !1
                }),
                i || r.kill()),
                d && [d, f, p, m].forEach(function(t) {
                    return t.parentNode && t.parentNode.removeChild(t)
                }),
                sm === tb && (sm = 0),
                K && (a && (a.uncache = 1),
                n = 0,
                ao.forEach(function(t) {
                    return t.pin === K && n++
                }),
                n || (a.spacer = 0)),
                e.onKill && e.onKill(tb)
            }
            ,
            ao.push(tb),
            tb.enable(!1, !1),
            X && X(tb),
            r && r.add && !_) {
                var tA = tb.update;
                tb.update = function() {
                    tb.update = tA,
                    n_.cache++,
                    u || h || tb.refresh()
                }
                ,
                nH.delayedCall(.01, tb.update),
                _ = .01,
                u = h = 0
            } else
                tb.refresh();
            K && aT()
        }
        ,
        t.register = function(e) {
            return nX || (nH = e || sO(),
            sM() && window.document && t.enable(),
            nX = sy),
            nX
        }
        ,
        t.defaults = function(t) {
            if (t)
                for (var e in t)
                    ar[e] = t[e];
            return ar
        }
        ,
        t.disable = function(t, e) {
            sy = 0,
            ao.forEach(function(r) {
                return r[e ? "kill" : "disable"](t)
            }),
            s7(nW, "wheel", au),
            s7(nU, "scroll", au),
            clearInterval(nJ),
            s7(nU, "touchcancel", sS),
            s7(nV, "touchstart", sS),
            s6(s7, nU, "pointerdown,touchstart,mousedown", sT),
            s6(s7, nU, "pointerup,touchend,mouseup", sk),
            n$.kill(),
            sR(s7);
            for (var r = 0; r < n_.length; r += 3)
                at(s7, n_[r], n_[r + 1]),
                at(s7, n_[r], n_[r + 2])
        }
        ,
        t.enable = function() {
            if (nW = window,
            nq = (nU = document).documentElement,
            nV = nU.body,
            nH)
                if (nQ = nH.utils.toArray,
                nZ = nH.utils.clamp,
                ss = nH.core.context || sS,
                n9 = nH.core.suppressOverwrites || sS,
                sa = nW.history.scrollRestoration || "auto",
                aM = nW.pageYOffset || 0,
                nH.core.globals("ScrollTrigger", t),
                nV) {
                    sy = 1,
                    (so = document.createElement("div")).style.height = "100vh",
                    so.style.position = "absolute",
                    ak(),
                    function t() {
                        return sy && requestAnimationFrame(t)
                    }(),
                    nY.register(nH),
                    t.isTouch = nY.isTouch,
                    sn = nY.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
                    se = 1 === nY.isTouch,
                    s9(nW, "wheel", au),
                    nG = [nW, nU, nq, nV],
                    nH.matchMedia ? (t.matchMedia = function(t) {
                        var e, r = nH.matchMedia();
                        for (e in t)
                            r.add(e, t[e]);
                        return r
                    }
                    ,
                    nH.addEventListener("matchMediaInit", function() {
                        ax(),
                        ay()
                    }),
                    nH.addEventListener("matchMediaRevert", function() {
                        return a_()
                    }),
                    nH.addEventListener("matchMedia", function() {
                        aj(0, 1),
                        ag("matchMedia")
                    }),
                    nH.matchMedia().add("(orientation: portrait)", function() {
                        return ah(),
                        ah
                    })) : console.warn("Requires GSAP 3.11.0 or later"),
                    ah(),
                    s9(nU, "scroll", au);
                    var e, r, i = nV.hasAttribute("style"), n = nV.style, s = n.borderTopStyle, a = nH.core.Animation.prototype;
                    for (a.revert || Object.defineProperty(a, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }),
                    n.borderTopStyle = "solid",
                    nA.m = Math.round((e = s5(nV)).top + nA.sc()) || 0,
                    nN.m = Math.round(e.left + nN.sc()) || 0,
                    s ? n.borderTopStyle = s : n.removeProperty("border-top-style"),
                    i || (nV.setAttribute("style", ""),
                    nV.removeAttribute("style")),
                    nJ = setInterval(ac, 250),
                    nH.delayedCall(.5, function() {
                        return sg = 0
                    }),
                    s9(nU, "touchcancel", sS),
                    s9(nV, "touchstart", sS),
                    s6(s9, nU, "pointerdown,touchstart,mousedown", sT),
                    s6(s9, nU, "pointerup,touchend,mouseup", sk),
                    n2 = nH.utils.checkPrefix("transform"),
                    aN.push(n2),
                    nX = sv(),
                    n$ = nH.delayedCall(.2, aj).pause(),
                    n8 = [nU, "visibilitychange", function() {
                        var t = nW.innerWidth
                          , e = nW.innerHeight;
                        nU.hidden ? (n3 = t,
                        n4 = e) : (n3 !== t || n4 !== e) && ad()
                    }
                    , nU, "DOMContentLoaded", aj, nW, "load", aj, nW, "resize", ad],
                    sR(s9),
                    ao.forEach(function(t) {
                        return t.enable(0, 1)
                    }),
                    r = 0; r < n_.length; r += 3)
                        at(s7, n_[r], n_[r + 1]),
                        at(s7, n_[r], n_[r + 2])
                } else
                    nU && nU.addEventListener("DOMContentLoaded", function e() {
                        t.enable(),
                        nU.removeEventListener("DOMContentLoaded", e)
                    })
        }
        ,
        t.config = function(e) {
            "limitCallbacks"in e && (sh = !!e.limitCallbacks);
            var r = e.syncInterval;
            r && clearInterval(nJ) || (nJ = r) && setInterval(ac, r),
            "ignoreMobileResize"in e && (se = 1 === t.isTouch && e.ignoreMobileResize),
            "autoRefreshEvents"in e && (sR(s7) || sR(s9, e.autoRefreshEvents || "none"),
            n7 = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        ,
        t.scrollerProxy = function(t, e) {
            var r = nP(t)
              , i = n_.indexOf(r)
              , n = sE(r);
            ~i && n_.splice(i, n ? 6 : 2),
            e && (n ? nx.unshift(nW, e, nV, e, nq, e) : nx.unshift(r, e))
        }
        ,
        t.clearMatchMedia = function(t) {
            ao.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }
        ,
        t.isInViewport = function(t, e, r) {
            var i = (sz(t) ? nP(t) : t).getBoundingClientRect()
              , n = i[r ? sU : sq] * e || 0;
            return r ? i.right - n > 0 && i.left + n < nW.innerWidth : i.bottom - n > 0 && i.top + n < nW.innerHeight
        }
        ,
        t.positionInViewport = function(t, e, r) {
            sz(t) && (t = nP(t));
            var i = t.getBoundingClientRect()
              , n = i[r ? sU : sq]
              , s = null == e ? n / 2 : e in ai ? ai[e] * n : ~e.indexOf("%") ? parseFloat(e) * n / 100 : parseFloat(e) || 0;
            return r ? (i.left + s) / nW.innerWidth : (i.top + s) / nW.innerHeight
        }
        ,
        t.killAll = function(t) {
            if (ao.slice(0).forEach(function(t) {
                return "ScrollSmoother" !== t.vars.id && t.kill()
            }),
            !0 !== t) {
                var e = af.killAll || [];
                af = {},
                e.forEach(function(t) {
                    return t()
                })
            }
        }
        ,
        t
    }();
    aU.version = "3.15.0",
    aU.saveStyles = function(t) {
        return t ? nQ(t).forEach(function(t) {
            if (t && t.style) {
                var e = av.indexOf(t);
                e >= 0 && av.splice(e, 5),
                av.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), nH.core.getCache(t), ss())
            }
        }) : av
    }
    ,
    aU.revert = function(t, e) {
        return ay(!t, e)
    }
    ,
    aU.create = function(t, e) {
        return new aU(t,e)
    }
    ,
    aU.refresh = function(t) {
        return t ? ad(!0) : (nX || aU.register()) && aj(!0)
    }
    ,
    aU.update = function(t) {
        return ++n_.cache && aE(2 * (!0 === t))
    }
    ,
    aU.clearScrollMemory = ab,
    aU.maxScroll = function(t, e) {
        return sP(t, e ? nN : nA)
    }
    ,
    aU.getScrollFunc = function(t, e) {
        return nz(nP(t), e ? nN : nA)
    }
    ,
    aU.getById = function(t) {
        return al[t]
    }
    ,
    aU.getAll = function() {
        return ao.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }
    ,
    aU.isScrolling = function() {
        return !!sx
    }
    ,
    aU.snapDirectional = s8,
    aU.addEventListener = function(t, e) {
        var r = af[t] || (af[t] = []);
        ~r.indexOf(e) || r.push(e)
    }
    ,
    aU.removeEventListener = function(t, e) {
        var r = af[t]
          , i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1)
    }
    ,
    aU.batch = function(t, e) {
        var r, i = [], n = {}, s = e.interval || .016, a = e.batchMax || 1e9, o = function(t, e) {
            var r = []
              , i = []
              , n = nH.delayedCall(s, function() {
                e(r, i),
                r = [],
                i = []
            }).pause();
            return function(t) {
                r.length || n.restart(!0),
                r.push(t.trigger),
                i.push(t),
                a <= r.length && n.progress(1)
            }
        };
        for (r in e)
            n[r] = "on" === r.substr(0, 2) && sF(e[r]) && "onRefreshInit" !== r ? o(r, e[r]) : e[r];
        return sF(a) && (a = a(),
        s9(aU, "refresh", function() {
            return a = e.batchMax()
        })),
        nQ(t).forEach(function(t) {
            var e = {};
            for (r in n)
                e[r] = n[r];
            e.trigger = t,
            i.push(aU.create(e))
        }),
        i
    }
    ;
    var aq, aV = function(t, e, r, i) {
        return e > i ? t(i) : e < 0 && t(0),
        r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1
    }, aG = function t(e, r) {
        !0 === r ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === r ? "auto" : r ? "pan-" + r + (nY.isTouch ? " pinch-zoom" : "") : "none",
        e === nq && t(nV, r)
    }, a$ = {
        auto: 1,
        scroll: 1
    }, aQ = function(t) {
        var e, r = t.event, i = t.target, n = t.axis, s = (r.changedTouches ? r.changedTouches[0] : r).target, a = s._gsap || nH.core.getCache(s), o = sv();
        if (!a._isScrollT || o - a._isScrollT > 2e3) {
            for (; s && s !== nV && (s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth || !(a$[(e = s0(s)).overflowY] || a$[e.overflowX])); )
                s = s.parentNode;
            a._isScroll = s && s !== i && !sE(s) && (a$[(e = s0(s)).overflowY] || a$[e.overflowX]),
            a._isScrollT = o
        }
        (a._isScroll || "x" === n) && (r.stopPropagation(),
        r._gsapAllow = !0)
    }, aZ = function(t, e, r, i) {
        return nY.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: i = i && aQ,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return r && s9(nU, nY.eventTypes[0], aJ, !1, !0)
            },
            onDisable: function() {
                return s7(nU, nY.eventTypes[0], aJ, !0)
            }
        })
    }, aK = /(input|label|select|textarea)/i, aJ = function(t) {
        var e = aK.test(t.target.tagName);
        (e || aq) && (t._gsapAllow = !0,
        aq = e)
    }, a0 = function(t) {
        sL(t) || (t = {}),
        t.preventDefault = t.isNormalizer = t.allowClicks = !0,
        t.type || (t.type = "wheel,touch"),
        t.debounce = !!t.debounce,
        t.id = t.id || "normalizer";
        var e, r, i, n, s, a, o, l, c = t, u = c.normalizeScrollX, h = c.momentum, d = c.allowNestedScroll, f = c.onRelease, p = nP(t.target) || nq, m = nH.core.globals().ScrollSmoother, g = m && m.get(), v = sn && (t.content && nP(t.content) || g && !1 !== t.content && !g.smooth() && g.content()), _ = nz(p, nA), x = nz(p, nN), y = 1, b = (nY.isTouch && nW.visualViewport ? nW.visualViewport.scale * nW.visualViewport.width : nW.outerWidth) / nW.innerWidth, w = 0, T = sF(h) ? function() {
            return h(e)
        }
        : function() {
            return h || 2.8
        }
        , k = aZ(p, t.type, !0, d), S = function() {
            return n = !1
        }, j = sS, M = sS, O = function() {
            r = sP(p, nA),
            M = nZ(+!!sn, r),
            u && (j = nZ(0, sP(p, nN))),
            i = aw
        }, E = function() {
            v._gsap.y = sj(parseFloat(v._gsap.y) + _.offset) + "px",
            v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)",
            _.offset = _.cacheID = 0
        }, C = function() {
            if (n) {
                requestAnimationFrame(S);
                var t = sj(e.deltaY / 2)
                  , r = M(_.v - t);
                if (v && r !== _.v + _.offset) {
                    _.offset = r - _.v;
                    var i = sj((parseFloat(v && v._gsap.y) || 0) - _.offset);
                    v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + i + ", 0, 1)",
                    v._gsap.y = i + "px",
                    _.cacheID = n_.cache,
                    aE()
                }
                return !0
            }
            _.offset && E(),
            n = !0
        }, N = function() {
            O(),
            s.isActive() && s.vars.scrollY > r && (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r))
        };
        return v && nH.set(v, {
            y: "+=0"
        }),
        t.ignoreCheck = function(t) {
            return sn && "touchmove" === t.type && C(t) || y > 1.05 && "touchstart" !== t.type || e.isGesturing || t.touches && t.touches.length > 1
        }
        ,
        t.onPress = function() {
            n = !1;
            var t = y;
            y = sj((nW.visualViewport && nW.visualViewport.scale || 1) / b),
            s.pause(),
            t !== y && aG(p, y > 1.01 || !u && "x"),
            a = x(),
            o = _(),
            O(),
            i = aw
        }
        ,
        t.onRelease = t.onGestureStart = function(t, e) {
            if (_.offset && E(),
            e) {
                n_.cache++;
                var i, n, a = T();
                u && (n = (i = x()) + -(.05 * a * t.velocityX) / .227,
                a *= aV(x, i, n, sP(p, nN)),
                s.vars.scrollX = j(n)),
                n = (i = _()) + -(.05 * a * t.velocityY) / .227,
                a *= aV(_, i, n, sP(p, nA)),
                s.vars.scrollY = M(n),
                s.invalidate().duration(a).play(.01),
                (sn && s.vars.scrollY >= r || i >= r - 1) && nH.to({}, {
                    onUpdate: N,
                    duration: a
                })
            } else
                l.restart(!0);
            f && f(t)
        }
        ,
        t.onWheel = function() {
            s._ts && s.pause(),
            sv() - w > 1e3 && (i = 0,
            w = sv())
        }
        ,
        t.onChange = function(t, e, r, n, s) {
            if (aw !== i && O(),
            e && u && x(j(n[2] === e ? a + (t.startX - t.x) : x() + e - n[1])),
            r) {
                _.offset && E();
                var l = s[2] === r
                  , c = l ? o + t.startY - t.y : _() + r - s[1]
                  , h = M(c);
                l && c !== h && (o += h - c),
                _(h)
            }
            (r || e) && aE()
        }
        ,
        t.onEnable = function() {
            aG(p, !u && "x"),
            aU.addEventListener("refresh", N),
            s9(nW, "resize", N),
            _.smooth && (_.target.style.scrollBehavior = "auto",
            _.smooth = x.smooth = !1),
            k.enable()
        }
        ,
        t.onDisable = function() {
            aG(p, !0),
            s7(nW, "resize", N),
            aU.removeEventListener("refresh", N),
            k.kill()
        }
        ,
        t.lockAxis = !1 !== t.lockAxis,
        (e = new nY(t)).iOS = sn,
        sn && !_() && _(1),
        sn && nH.ticker.add(sS),
        l = e._dc,
        s = nH.to(e, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: u ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: aH(_, _(), function() {
                    return s.pause()
                })
            },
            onUpdate: aE,
            onComplete: l.vars.onComplete
        }),
        e
    };
    aU.sort = function(t) {
        if (sF(t))
            return ao.sort(t);
        var e = nW.pageYOffset || 0;
        return aU.getAll().forEach(function(t) {
            return t._sortY = t.trigger ? e + t.trigger.getBoundingClientRect().top : t.start + nW.innerHeight
        }),
        ao.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + (t.vars.containerAnimation ? 1e6 : t._sortY) - ((e.vars.containerAnimation ? 1e6 : e._sortY) + -1e6 * (e.vars.refreshPriority || 0))
        }
        )
    }
    ,
    aU.observe = function(t) {
        return new nY(t)
    }
    ,
    aU.normalizeScroll = function(t) {
        if (void 0 === t)
            return st;
        if (!0 === t && st)
            return st.enable();
        if (!1 === t) {
            st && st.kill(),
            st = t;
            return
        }
        var e = t instanceof nY ? t : a0(t);
        return st && st.target === e.target && st.kill(),
        sE(e.target) && (st = e),
        e
    }
    ,
    aU.core = {
        _getVelocityProp: nF,
        _inputObserver: aZ,
        _scrollers: n_,
        _proxies: nx,
        bridge: {
            ss: function() {
                sx || ag("scrollStart"),
                sx = sv()
            },
            ref: function() {
                return n0
            }
        }
    },
    sO() && nH.registerPlugin(aU);
    var a1 = t.i(98007);
    let a2 = (0,
    c.default)("door-open", [["path", {
        d: "M11 20H2",
        key: "nlcfvz"
    }], ["path", {
        d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
        key: "au4z13"
    }], ["path", {
        d: "M11 4H8a2 2 0 0 0-2 2v14",
        key: "74r1mk"
    }], ["path", {
        d: "M14 12h.01",
        key: "1jfl7z"
    }], ["path", {
        d: "M22 20h-3",
        key: "vhrsz"
    }]])
      , a5 = (0,
    c.default)("maximize", [["path", {
        d: "M8 3H5a2 2 0 0 0-2 2v3",
        key: "1dcmit"
    }], ["path", {
        d: "M21 8V5a2 2 0 0 0-2-2h-3",
        key: "1e4gt3"
    }], ["path", {
        d: "M3 16v3a2 2 0 0 0 2 2h3",
        key: "wsl5sc"
    }], ["path", {
        d: "M16 21h3a2 2 0 0 0 2-2v-3",
        key: "18trek"
    }]]);
    var a3 = t.i(31310);
    let a4 = "(max-width: 767px)"
      , a8 = "(max-width: 1023px)";
    function a6(t, e) {
        let r = window.matchMedia(t);
        return r.addEventListener("change", e),
        () => r.removeEventListener("change", e)
    }
    function a9(t) {
        return window.innerWidth < t
    }
    t.i(5064);
    var a7 = t.i(57688);
    i7.registerPlugin(aU);
    let ot = M.images.home.parallaxForeground.src
      , oe = M.images.home.parallaxBackground.src
      , or = {
        mobile: {
            baseScale: .36,
            introScale: .44,
            exitScale: 2.2,
            lines: [{
                label: "OUR",
                svgFontSize: 168,
                y: -150
            }, {
                label: "INTERIOR",
                svgFontSize: 168,
                y: 0
            }, {
                label: "SOLUTIONS",
                svgFontSize: 168,
                y: 150
            }]
        },
        tablet: {
            baseScale: .54,
            introScale: 1,
            exitScale: 3.8,
            lines: [{
                label: "OUR",
                svgFontSize: 168,
                y: -154
            }, {
                label: "INTERIOR",
                svgFontSize: 168,
                y: 0
            }, {
                label: "SOLUTIONS",
                svgFontSize: 168,
                y: 154
            }]
        },
        desktop: {
            baseScale: .65,
            introScale: 1.2,
            exitScale: 5.2,
            lines: [{
                label: "OUR",
                svgFontSize: 190,
                y: -180
            }, {
                label: "INTERIOR",
                svgFontSize: 190,
                y: 0
            }, {
                label: "SOLUTIONS",
                svgFontSize: 190,
                y: 180
            }]
        }
    }
      , oi = {
        mobile: {
            baseScale: .4,
            introScale: .5,
            exitScale: 2.35,
            lines: [{
                label: "حلولنا",
                svgFontSize: 122,
                y: -150
            }, {
                label: "الداخلية",
                svgFontSize: 142,
                y: 0
            }, {
                label: "المتكاملة",
                svgFontSize: 136,
                y: 162
            }]
        },
        tablet: {
            baseScale: .56,
            introScale: 1.02,
            exitScale: 3.95,
            lines: [{
                label: "حلولنا",
                svgFontSize: 128,
                y: -158
            }, {
                label: "الداخلية",
                svgFontSize: 152,
                y: 0
            }, {
                label: "المتكاملة",
                svgFontSize: 148,
                y: 178
            }]
        },
        desktop: {
            baseScale: .7,
            introScale: 1.24,
            exitScale: 5.35,
            lines: [{
                label: "حلولنا",
                svgFontSize: 146,
                y: -184
            }, {
                label: "الداخلية",
                svgFontSize: 174,
                y: 0
            }, {
                label: "المتكاملة",
                svgFontSize: 168,
                y: 198
            }]
        }
    }
      , on = {
        mobile: {
            gap: "18px",
            iconHeight: "clamp(44px, 6vh, 72px)",
            titleSize: "clamp(1.8rem, 7vw, 2.4rem)",
            subtitleSize: "clamp(0.95rem, 3.8vw, 1.25rem)",
            subtitleMaxWidth: "min(88vw, 480px)"
        },
        tablet: {
            gap: "22px",
            iconHeight: "clamp(52px, 6.5vh, 84px)",
            titleSize: "clamp(2rem, 4.6vw, 3rem)",
            subtitleSize: "clamp(1rem, 2.4vw, 1.6rem)",
            subtitleMaxWidth: "min(78vw, 720px)"
        },
        desktop: {
            gap: "30px",
            iconHeight: "clamp(60px, 8vh, 100px)",
            titleSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
            subtitleSize: "clamp(1rem, 2vw, 2rem)",
            subtitleMaxWidth: "900px"
        }
    };
    function os() {
        let t = (0,
        n.useTranslations)("HomePage.solutions")
          , o = (0,
        i.useLocale)()
          , l = "ar" === o
          , c = "ar" === o ? s.ArrowLeft : a.ArrowRight
          , u = [t("maskLines.lineOne"), t("maskLines.lineTwo"), t("maskLines.lineThree")]
          , h = [{
            id: 1,
            title: t("services.kitchens.title"),
            subtitle: t("services.kitchens.subtitle"),
            image: M.images.home.kitchenProduct.src,
            icon: a1.ChefHat,
            href: "/service/kitchens"
        }, {
            id: 2,
            title: t("services.wardrobes.title"),
            subtitle: t("services.wardrobes.subtitle"),
            image: M.images.home.wardrobeProduct.src,
            icon: a3.Shirt,
            href: "/service/wardrobes"
        }, {
            id: 3,
            title: t("services.doors.title"),
            subtitle: t("services.doors.subtitle"),
            image: M.images.home.doorProduct.src,
            icon: a2,
            href: "/service/interior-doors"
        }, {
            id: 4,
            title: t("services.windows.title"),
            subtitle: t("services.windows.subtitle"),
            image: M.images.home.windowSystems.src,
            icon: a5,
            href: "/service/upvc-window-door-systems"
        }]
          , d = (0,
        r.useRef)(null)
          , f = (0,
        r.useRef)(null)
          , p = (0,
        r.useRef)(null)
          , m = (0,
        r.useRef)(null)
          , g = (0,
        r.useRef)(null)
          , v = (0,
        r.useRef)(null)
          , _ = (0,
        r.useRef)(null)
          , x = (0,
        r.useRef)(null)
          , y = (0,
        r.useRef)(null)
          , b = (0,
        r.useRef)([])
          , w = function() {
            let[t,e] = (0,
            r.useState)( () => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
            return (0,
            r.useEffect)( () => {
                let t = window.matchMedia("(prefers-reduced-motion: reduce)")
                  , r = t => {
                    e(t.matches)
                }
                ;
                return t.addEventListener("change", r),
                () => t.removeEventListener("change", r)
            }
            , []),
            t
        }()
          , T = r.useSyncExternalStore(t => a6(a4, t), () => a9(768), () => !1)
          , k = r.useSyncExternalStore(t => a6(a8, t), () => a9(1024), () => !1)
          , j = T ? "mobile" : k ? "tablet" : "desktop"
          , O = (0,
        r.useId)().replace(/:/g, "")
          , E = l ? oi[j] : or[j]
          , C = E.lines.map( (t, e) => ({
            ...t,
            label: u[e] ?? t.label
        }))
          , N = on[j]
          , A = l || "mobile" === j ? 700 : 400
          , P = l ? "var(--font-arabic-display), Tajawal, 'Noto Sans Arabic', sans-serif" : '"Bebas Neue", Impact, sans-serif'
          , R = l ? "" : "0.02em";
        return ((0,
        r.useEffect)( () => {
            let t = d.current;
            if (w || !t)
                return;
            let e = "720 450"
              , r = e => {
                t.style.overflowX = e ? "hidden" : "clip",
                t.style.overflowY = e ? "hidden" : "visible",
                t.style.height = e ? "100dvh" : "auto",
                t.style.maxHeight = ""
            }
              , i = t => {
                t && r(!Number.isFinite(t.end) || t.scroll() <= t.end)
            }
              , n = i7.context( () => {
                i7.set(f.current, {
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1
                }),
                i7.set(p.current, {
                    opacity: 1
                }),
                i7.set(g.current, {
                    opacity: 1,
                    scale: E.baseScale,
                    svgOrigin: e
                }),
                i7.set(m.current, {
                    opacity: 0,
                    scale: E.baseScale,
                    svgOrigin: e
                }),
                i7.set(v.current, {
                    opacity: 0,
                    y: 28
                }),
                i7.set(_.current, {
                    opacity: 0
                }),
                i7.set(x.current, {
                    opacity: 0,
                    y: -8
                }),
                i7.set(y.current, {
                    opacity: 0,
                    y: 44
                }),
                b.current.forEach(t => {
                    t && i7.set(t, {
                        opacity: 0,
                        y: 80,
                        scale: .93
                    })
                }
                );
                let n = i7.timeline({
                    defaults: {
                        ease: "power2.inOut"
                    },
                    scrollTrigger: {
                        trigger: t,
                        start: "top top",
                        end: "+=360%",
                        pin: !0,
                        scrub: .55,
                        anticipatePin: 1,
                        onRefreshInit: () => {
                            r(!0)
                        }
                        ,
                        onRefresh: t => {
                            i(t)
                        }
                        ,
                        onUpdate: i
                    }
                });
                i(n.scrollTrigger),
                n.to([g.current, m.current], {
                    scale: E.introScale,
                    svgOrigin: e,
                    duration: 2,
                    ease: "power2.out"
                }, 0),
                n.to(m.current, {
                    opacity: 1,
                    duration: .45,
                    ease: "power2.out"
                }, 0),
                n.to([g.current, m.current], {
                    scale: E.exitScale,
                    svgOrigin: e,
                    duration: 2.9,
                    ease: "power2.inOut"
                }, 1.55),
                n.to([g.current, m.current], {
                    opacity: 0,
                    duration: 1.2,
                    ease: "power1.out"
                }, 3.65),
                n.to(p.current, {
                    opacity: 0,
                    duration: 1.2,
                    ease: "power1.out"
                }, 3.85),
                n.to(v.current, {
                    opacity: 1,
                    y: 0,
                    duration: .9,
                    ease: "power2.out"
                }, 4.45),
                n.to(v.current, {
                    opacity: 0,
                    y: -24,
                    duration: .6,
                    ease: "power2.in"
                }, 5.65),
                n.to(_.current, {
                    opacity: 1,
                    duration: .5,
                    ease: "power2.out"
                }, 6.05),
                n.to(f.current, {
                    filter: "blur(8px)",
                    scale: 1.03,
                    duration: .8,
                    ease: "power2.out"
                }, 6.05),
                n.to(x.current, {
                    opacity: 1,
                    y: 0,
                    duration: .35,
                    ease: "power2.out"
                }, 6.15),
                n.to(y.current, {
                    opacity: 1,
                    y: 0,
                    duration: .7,
                    ease: "power2.out"
                }, 6.2),
                n.to(x.current, {
                    opacity: 0,
                    y: -12,
                    duration: .45,
                    ease: "power2.in"
                }, 6.62),
                n.to(b.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: .72,
                    stagger: .11,
                    ease: "power2.out"
                }, 6.72)
            }
            , t);
            return () => {
                n.revert(),
                t.style.overflowX = "",
                t.style.overflowY = "",
                t.style.height = "",
                t.style.maxHeight = ""
            }
        }
        , [w, E]),
        w) ? (0,
        e.jsxs)("section", {
            id: "solutions",
            className: "relative bg-[#231F20] py-20",
            children: [(0,
            e.jsx)("div", {
                className: "absolute inset-0",
                style: {
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${oe})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }
            }), (0,
            e.jsxs)("div", {
                className: "relative z-10 mx-auto max-w-[1440px] px-[clamp(1.25rem,3.2vw,2.875rem)]",
                children: [(0,
                e.jsxs)("div", {
                    className: "mb-12 text-center",
                    children: [(0,
                    e.jsx)("h2", {
                        className: "text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white",
                        style: {
                            fontFamily: '"Lexend", Inter, sans-serif'
                        },
                        children: t("title")
                    }), (0,
                    e.jsxs)("p", {
                        className: "mt-3 text-[clamp(1.1rem,2.3vw,2rem)] font-semibold text-white",
                        style: {
                            fontFamily: '"Lexend", Inter, sans-serif'
                        },
                        children: [t("intro.lead"), (0,
                        e.jsx)("br", {}), (0,
                        e.jsx)("span", {
                            className: "text-primary",
                            children: t("intro.accent")
                        })]
                    })]
                }), (0,
                e.jsx)("div", {
                    className: "grid grid-cols-1 gap-5 lg:grid-cols-2",
                    children: h.map(r => {
                        let i = r.icon;
                        return (0,
                        e.jsxs)("div", {
                            className: "group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.8)] backdrop-blur-[2px]",
                            children: [(0,
                            e.jsxs)("div", {
                                className: "relative overflow-hidden",
                                style: {
                                    height: "clamp(220px,32vh,380px)"
                                },
                                children: [(0,
                                e.jsx)(a7.default, {
                                    src: r.image,
                                    alt: r.title,
                                    fill: !0,
                                    sizes: "(max-width: 1024px) calc(100vw - 2.5rem), 600px",
                                    quality: 62,
                                    className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                }), (0,
                                e.jsx)("div", {
                                    className: "pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent"
                                }), (0,
                                e.jsx)("div", {
                                    className: "absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white",
                                    children: (0,
                                    e.jsx)(i, {
                                        className: "h-[34px] w-[34px] text-primary",
                                        strokeWidth: 1.7
                                    })
                                })]
                            }), (0,
                            e.jsxs)("div", {
                                className: "flex flex-1 w-full flex-row items-center justify-between px-5 py-5",
                                children: [(0,
                                e.jsxs)("div", {
                                    children: [(0,
                                    e.jsx)("h4", {
                                        style: {
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 600,
                                            fontSize: "24px",
                                            lineHeight: 1.3,
                                            color: "#FFFFFF",
                                            margin: 0
                                        },
                                        children: r.title
                                    }), (0,
                                    e.jsx)("p", {
                                        style: {
                                            fontFamily: '"Inter", sans-serif',
                                            fontWeight: 400,
                                            fontSize: "16px",
                                            lineHeight: 1.5,
                                            color: "rgba(255,255,255,0.9)",
                                            margin: 0
                                        },
                                        children: r.subtitle
                                    })]
                                }), (0,
                                e.jsx)("div", {
                                    className: "mt-auto flex justify-end",
                                    children: (0,
                                    e.jsx)(S.AppLink, {
                                        href: r.href,
                                        className: "flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgb(var(--primary)_/_0.4)]",
                                        "aria-label": t("learnMoreAbout", {
                                            title: r.title
                                        }),
                                        children: (0,
                                        e.jsx)(c, {
                                            className: "h-4 w-4 text-white"
                                        })
                                    })
                                })]
                            })]
                        }, r.id)
                    }
                    )
                }), (0,
                e.jsx)("div", {
                    className: "mt-10 text-center",
                    children: (0,
                    e.jsxs)(S.AppLink, {
                        href: "/projects",
                        className: "inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-base font-medium text-white hover:bg-primary-hover",
                        children: [t("cta"), (0,
                        e.jsx)(c, {
                            className: "h-4 w-4"
                        })]
                    })
                })]
            })]
        }) : (0,
        e.jsxs)("section", {
            ref: d,
            id: "solutions",
            className: "relative min-h-screen w-full overflow-x-clip",
            style: {
                backgroundColor: "#0a0a0a"
            },
            children: [(0,
            e.jsxs)("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [(0,
                e.jsx)("div", {
                    ref: f,
                    className: "absolute inset-0 z-0",
                    style: {
                        backgroundImage: `url(${oe})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center"
                    }
                }), (0,
                e.jsxs)("svg", {
                    ref: p,
                    className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-dvh w-full",
                    viewBox: "0 0 1440 900",
                    preserveAspectRatio: "xMidYMid slice",
                    "aria-hidden": "true",
                    children: [(0,
                    e.jsx)("defs", {
                        children: (0,
                        e.jsxs)("mask", {
                            id: O,
                            maskUnits: "userSpaceOnUse",
                            maskContentUnits: "userSpaceOnUse",
                            x: "0",
                            y: "0",
                            width: 1440,
                            height: 900,
                            children: [(0,
                            e.jsx)("rect", {
                                x: "0",
                                y: "0",
                                width: 1440,
                                height: 900,
                                fill: "white"
                            }), (0,
                            e.jsx)("g", {
                                ref: m,
                                children: C.map(t => (0,
                                e.jsx)("text", {
                                    x: 720,
                                    y: 450 + t.y,
                                    fill: "black",
                                    direction: l ? "rtl" : void 0,
                                    unicodeBidi: l ? "plaintext" : void 0,
                                    fontFamily: P,
                                    fontSize: t.svgFontSize,
                                    fontWeight: A,
                                    letterSpacing: R,
                                    textAnchor: "middle",
                                    children: t.label
                                }, `mask-${t.label}`))
                            })]
                        })
                    }), (0,
                    e.jsx)("image", {
                        href: ot,
                        x: "0",
                        y: "0",
                        width: 1440,
                        height: 900,
                        preserveAspectRatio: "xMidYMid slice",
                        mask: `url(#${O})`
                    })]
                }), (0,
                e.jsx)("svg", {
                    className: "pointer-events-none absolute inset-x-0 top-0 z-20 h-dvh w-full",
                    viewBox: "0 0 1440 900",
                    preserveAspectRatio: "xMidYMid slice",
                    "aria-hidden": "true",
                    children: (0,
                    e.jsx)("g", {
                        ref: g,
                        children: C.map(t => (0,
                        e.jsx)("text", {
                            x: 720,
                            y: 450 + t.y,
                            fill: "transparent",
                            stroke: "rgba(255,255,255,0.92)",
                            strokeWidth: 3,
                            paintOrder: "stroke",
                            direction: l ? "rtl" : void 0,
                            unicodeBidi: l ? "plaintext" : void 0,
                            fontFamily: P,
                            fontSize: t.svgFontSize,
                            fontWeight: A,
                            letterSpacing: R,
                            textAnchor: "middle",
                            children: t.label
                        }, `stroke-${t.label}`))
                    })
                }), (0,
                e.jsx)("div", {
                    ref: v,
                    className: "pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 text-center",
                    children: (0,
                    e.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        style: {
                            gap: N.gap
                        },
                        children: [(0,
                        e.jsx)(a7.default, {
                            src: M.images.icon.icon.src,
                            alt: M.images.icon.icon.alt || "",
                            width: 96,
                            height: 108,
                            className: "object-contain",
                            style: {
                                height: N.iconHeight,
                                width: "auto",
                                filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.22))"
                            },
                            onError: t => {
                                t.currentTarget.style.display = "none"
                            }
                        }), (0,
                        e.jsx)("h2", {
                            style: {
                                fontFamily: '"Lexend", Inter, sans-serif',
                                fontWeight: 700,
                                fontSize: N.titleSize,
                                lineHeight: 1.2,
                                color: "#FFFFFF",
                                margin: 0,
                                textShadow: "0 10px 28px rgba(0,0,0,0.3)"
                            },
                            children: t("title")
                        }), (0,
                        e.jsxs)("p", {
                            style: {
                                fontFamily: '"Lexend", Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: N.subtitleSize,
                                lineHeight: 1.3,
                                color: "#FFFFFF",
                                maxWidth: N.subtitleMaxWidth,
                                margin: 0,
                                textShadow: "0 10px 28px rgba(0,0,0,0.3)"
                            },
                            children: [t("intro.lead"), (0,
                            e.jsx)("br", {}), (0,
                            e.jsx)("span", {
                                style: {
                                    color: "var(--primary)"
                                },
                                children: t("intro.accent")
                            })]
                        })]
                    })
                })]
            }), (0,
            e.jsxs)("div", {
                ref: _,
                className: "relative z-40 w-full min-h-screen",
                children: [(0,
                e.jsx)("div", {
                    className: "pointer-events-none absolute inset-0",
                    style: {
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.5) 100%)"
                    }
                }), (0,
                e.jsxs)("div", {
                    className: "relative mx-auto w-full max-w-[1440px] px-[clamp(1.25rem,3.2vw,2.875rem)] pt-14 pb-8",
                    children: [(0,
                    e.jsxs)("div", {
                        className: "mx-auto mb-8 max-w-[1114px] text-center",
                        children: [(0,
                        e.jsx)("div", {
                            ref: x,
                            className: "mb-5 flex justify-center",
                            children: (0,
                            e.jsx)(a7.default, {
                                src: M.images.icon.icon.src,
                                alt: M.images.icon.icon.alt || "",
                                "aria-hidden": "true",
                                width: 96,
                                height: 108,
                                className: "object-contain",
                                style: {
                                    height: "clamp(48px,6vh,72px)",
                                    width: "auto"
                                },
                                onError: t => {
                                    t.currentTarget.style.display = "none"
                                }
                            })
                        }), (0,
                        e.jsxs)("div", {
                            ref: y,
                            children: [(0,
                            e.jsx)("h2", {
                                style: {
                                    fontFamily: '"Lexend", Inter, sans-serif',
                                    fontWeight: 700,
                                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                                    lineHeight: 1.2,
                                    color: "#FFFFFF"
                                },
                                children: t("title")
                            }), (0,
                            e.jsxs)("p", {
                                style: {
                                    fontFamily: '"Lexend", Inter, sans-serif',
                                    fontWeight: 600,
                                    fontSize: "clamp(1.1rem, 2.3vw, 2rem)",
                                    lineHeight: 1.3,
                                    color: "#FFFFFF",
                                    marginTop: "0.75rem"
                                },
                                children: [t("intro.lead"), (0,
                                e.jsx)("br", {}), (0,
                                e.jsx)("span", {
                                    style: {
                                        color: "var(--primary)"
                                    },
                                    children: t("intro.accent")
                                })]
                            })]
                        })]
                    }), (0,
                    e.jsx)("div", {
                        className: "grid grid-cols-1 gap-5 lg:grid-cols-2",
                        children: h.map( (r, i) => {
                            let n = r.icon;
                            return (0,
                            e.jsxs)("div", {
                                ref: t => {
                                    b.current[i] = t
                                }
                                ,
                                className: "group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.8)] backdrop-blur-[2px]",
                                children: [(0,
                                e.jsxs)("div", {
                                    className: "relative overflow-hidden",
                                    style: {
                                        height: "clamp(220px,32vh,380px)"
                                    },
                                    children: [(0,
                                    e.jsx)(a7.default, {
                                        src: r.image,
                                        alt: r.title,
                                        fill: !0,
                                        sizes: "(max-width: 1024px) calc(100vw - 2.5rem), 600px",
                                        quality: 62,
                                        className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                    }), (0,
                                    e.jsx)("div", {
                                        className: "pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent"
                                    }), (0,
                                    e.jsx)("div", {
                                        className: "absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white",
                                        children: (0,
                                        e.jsx)(n, {
                                            className: "h-[34px] w-[34px] text-primary",
                                            strokeWidth: 1.7
                                        })
                                    })]
                                }), (0,
                                e.jsxs)("div", {
                                    className: "flex flex-1 flex-row w-full items-center justify-between px-5 py-5",
                                    children: [(0,
                                    e.jsxs)("div", {
                                        children: [(0,
                                        e.jsx)("h4", {
                                            style: {
                                                fontFamily: '"Inter", sans-serif',
                                                fontWeight: 600,
                                                fontSize: "24px",
                                                lineHeight: 1.3,
                                                color: "#FFFFFF",
                                                margin: 0
                                            },
                                            children: r.title
                                        }), (0,
                                        e.jsx)("p", {
                                            style: {
                                                fontFamily: '"Inter", sans-serif',
                                                fontWeight: 400,
                                                fontSize: "16px",
                                                lineHeight: 1.5,
                                                color: "rgba(255,255,255,0.9)",
                                                margin: 0
                                            },
                                            children: r.subtitle
                                        })]
                                    }), (0,
                                    e.jsx)("div", {
                                        className: "mt-auto flex justify-end",
                                        children: (0,
                                        e.jsx)(S.AppLink, {
                                            href: r.href,
                                            className: "flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgb(var(--primary)_/_0.4)]",
                                            "aria-label": t("learnMoreAbout", {
                                                title: r.title
                                            }),
                                            children: (0,
                                            e.jsx)(c, {
                                                className: "h-4 w-4 text-white"
                                            })
                                        })
                                    })]
                                })]
                            }, r.id)
                        }
                        )
                    }), (0,
                    e.jsx)("div", {
                        className: "mt-8 text-center",
                        children: (0,
                        e.jsxs)(S.AppLink, {
                            href: "/projects",
                            className: "inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_rgb(var(--primary)_/_0.35)]",
                            style: {
                                fontFamily: '"Inter", sans-serif',
                                minWidth: "236px",
                                height: "52px"
                            },
                            children: [t("cta"), (0,
                            e.jsx)(c, {
                                className: "h-[18px] w-[18px]"
                            })]
                        })
                    })]
                })]
            })]
        })
    }
    function oa() {
        let t = (0,
        n.useTranslations)("HomePage.hero")
          , o = (0,
        i.useLocale)()
          , l = "ar" === o ? s.ArrowLeft : a.ArrowRight
          , [c,u] = (0,
        r.useState)(!1);
        return (0,
        r.useEffect)( () => {
            let t = window.matchMedia("(prefers-reduced-motion: reduce)")
              , e = window.matchMedia("(prefers-reduced-data: reduce)")
              , r = () => {
                u(!t.matches && !e.matches)
            }
            ;
            return r(),
            t.addEventListener("change", r),
            e.addEventListener("change", r),
            () => {
                t.removeEventListener("change", r),
                e.removeEventListener("change", r)
            }
        }
        , []),
        (0,
        e.jsxs)("section", {
            className: "relative isolate min-h-svh overflow-hidden",
            children: [(0,
            e.jsx)(a7.default, {
                src: M.images.home.heroLoopPoster.src,
                alt: "",
                fill: !0,
                sizes: "100vw",
                preload: !0,
                quality: 55,
                "aria-hidden": "true",
                className: "absolute inset-0 h-full w-full object-cover"
            }), c && (0,
            e.jsxs)("video", {
                className: "absolute inset-0 h-full w-full object-cover",
                autoPlay: !0,
                muted: !0,
                loop: !0,
                playsInline: !0,
                preload: "none",
                "aria-hidden": "true",
                children: [(0,
                e.jsx)("source", {
                    src: O.videos.heroSectionLoop.src,
                    type: "video/mp4"
                }), t("videoFallback")]
            }), (0,
            e.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-tr from-black/85 via-black/50 to-black/35"
            }), (0,
            e.jsx)("div", {
                className: "absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-transparent"
            }), (0,
            e.jsx)("div", {
                className: "relative mx-auto flex min-h-screen min-w-screen items-center justify-center",
                children: (0,
                e.jsx)(j.Reveal, {
                    className: "max-w-screen",
                    children: (0,
                    e.jsxs)("div", {
                        style: "ar" === o ? void 0 : {
                            fontFamily: "var(--font-lexend), var(--font-geist-sans), sans-serif"
                        },
                        className: "flex flex-col justify-center items-center p-4",
                        children: [(0,
                        e.jsxs)("h1", {
                            className: "text-center text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]",
                            children: [t("title.lineOne"), (0,
                            e.jsx)("br", {}), (0,
                            e.jsx)("span", {
                                className: "text-primary",
                                children: t("title.lineTwo")
                            })]
                        }), (0,
                        e.jsx)("p", {
                            className: "mt-5 text-base leading-relaxed text-white",
                            children: t("description")
                        }), (0,
                        e.jsxs)(S.AppLink, {
                            href: "/contact",
                            className: "mt-7 inline-flex justify-center items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-[#0E0E0E] shadow-2xl transition hover:bg-primary hover:text-white",
                            children: [t("cta"), (0,
                            e.jsx)(l, {
                                className: "h-4 w-4"
                            })]
                        })]
                    })
                })
            })]
        })
    }
    function oo() {
        let t = (0,
        n.useTranslations)("HomePage.problems")
          , i = (0,
        r.useRef)(null)
          , [s,a] = (0,
        r.useState)(!1)
          , o = [{
            label: t("list.quality"),
            icon: v
        }, {
            label: t("list.delays"),
            icon: h
        }, {
            label: t("list.value"),
            icon: _
        }, {
            label: t("list.afterSales"),
            icon: u
        }]
          , l = [{
            title: t("approach.items.multipleSystems.title"),
            body: t("approach.items.multipleSystems.body"),
            icon: f
        }, {
            title: t("approach.items.coordinatedDesign.title"),
            body: t("approach.items.coordinatedDesign.body"),
            icon: m.PencilRuler
        }, {
            title: t("approach.items.afterSales.title"),
            body: t("approach.items.afterSales.body"),
            icon: x.Wrench
        }, {
            title: t("approach.items.precision.title"),
            body: t("approach.items.precision.body"),
            icon: d.Factory
        }]
          , c = async () => {
            a(!0),
            await i.current?.play().catch( () => {}
            )
        }
        ;
        return (0,
        e.jsx)("section", {
            className: "bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28",
            children: (0,
            e.jsxs)("div", {
                className: "mx-auto max-w-6xl rounded-[2rem] bg-[#231f20] px-6 py-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10 lg:px-10 lg:py-12",
                children: [(0,
                e.jsxs)(j.Reveal, {
                    className: "max-w-4xl",
                    children: [(0,
                    e.jsx)("h2", {
                        className: "text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]",
                        children: t("title")
                    }), (0,
                    e.jsx)("p", {
                        className: "mt-4 max-w-4xl text-sm leading-7 text-white/80 sm:text-base",
                        children: t("description")
                    })]
                }), (0,
                e.jsx)("div", {
                    className: "mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2",
                    children: o.map( (t, r) => (0,
                    e.jsx)(j.Reveal, {
                        delay: .06 * r,
                        children: (0,
                        e.jsxs)("div", {
                            className: "flex items-center gap-3 text-lg font-semibold text-white",
                            children: [(0,
                            e.jsx)("span", {
                                className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/45 text-white/80",
                                children: (0,
                                e.jsx)(t.icon, {
                                    className: "h-3.5 w-3.5"
                                })
                            }), (0,
                            e.jsx)("p", {
                                children: t.label
                            })]
                        })
                    }, t.label))
                }), (0,
                e.jsxs)(j.Reveal, {
                    delay: .2,
                    className: "relative mt-8 overflow-hidden rounded-xl border border-white/10",
                    children: [(0,
                    e.jsx)(a7.default, {
                        src: M.images.home.designSectionBackground.src,
                        alt: "",
                        fill: !0,
                        sizes: "(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 4rem), 1070px",
                        quality: 60,
                        "aria-hidden": "true",
                        className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${s ? "opacity-0" : "opacity-100"}`
                    }), (0,
                    e.jsxs)("video", {
                        ref: i,
                        className: `relative z-10 h-[34rem] w-full object-cover transition-opacity duration-300 ${s ? "opacity-100" : "pointer-events-none opacity-0"}`,
                        controls: s,
                        playsInline: !0,
                        preload: "none",
                        onPlay: () => a(!0),
                        children: [(0,
                        e.jsx)("source", {
                            src: O.videos.customerJourney.src,
                            type: "video/mp4"
                        }), t("videoFallback")]
                    }), !s && (0,
                    e.jsxs)(e.Fragment, {
                        children: [(0,
                        e.jsx)("div", {
                            className: "absolute inset-0 bg-black/20"
                        }), (0,
                        e.jsx)("button", {
                            className: "absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-transparent text-white transition hover:scale-105",
                            "aria-label": t("videoPlayLabel"),
                            onClick: () => {
                                c()
                            }
                            ,
                            type: "button",
                            children: (0,
                            e.jsx)(g, {
                                className: "ms-1 h-12 w-12 fill-current"
                            })
                        })]
                    })]
                }), (0,
                e.jsxs)("div", {
                    className: "mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-0",
                    children: [(0,
                    e.jsx)(j.Reveal, {
                        className: "lg:pe-10",
                        children: (0,
                        e.jsxs)("h2", {
                            className: "text-3xl font-bold leading-tight text-white sm:text-4xl",
                            children: [t("approach.title.lineOne"), (0,
                            e.jsx)("br", {}), t("approach.title.lineTwo")]
                        })
                    }), (0,
                    e.jsx)("div", {
                        className: "grid gap-x-8 gap-y-0 sm:grid-cols-2",
                        children: l.map( (t, r) => (0,
                        e.jsx)(j.Reveal, {
                            delay: .06 * r,
                            children: (0,
                            e.jsxs)("article", {
                                className: "h-full border-white/10 py-6 sm:px-6 sm:[&:nth-child(odd)]:border-e sm:[&:nth-child(n+3)]:border-t",
                                children: [(0,
                                e.jsx)("span", {
                                    className: "mb-4 inline-flex h-10 w-10 items-center justify-center text-primary",
                                    children: (0,
                                    e.jsx)(t.icon, {
                                        className: "h-5 w-5"
                                    })
                                }), (0,
                                e.jsx)("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: t.title
                                }), (0,
                                e.jsx)("p", {
                                    className: "mt-3 max-w-xs text-sm leading-6 text-white/72",
                                    children: t.body
                                })]
                            })
                        }, t.title))
                    })]
                })]
            })
        })
    }
    function ol() {
        let t = (0,
        n.useTranslations)("HomePage.design")
          , r = "ar" === (0,
        i.useLocale)() ? s.ArrowLeft : a.ArrowRight
          , c = [{
            title: t("steps.upload"),
            body: t("stepBodies.upload"),
            icon: o.Box
        }, {
            title: t("steps.get3d"),
            body: t("stepBodies.get3d"),
            icon: m.PencilRuler
        }, {
            title: t("steps.liveEdit"),
            body: t("stepBodies.liveEdit"),
            icon: p
        }];
        return (0,
        e.jsx)("section", {
            className: "bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28",
            children: (0,
            e.jsxs)("div", {
                className: "relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] shadow-[0_24px_80px_rgba(0,0,0,0.12)]",
                children: [(0,
                e.jsx)(a7.default, {
                    src: M.images.home.designSectionBackground.src,
                    fill: !0,
                    sizes: "100vw",
                    quality: 62,
                    alt: M.images.home.designSectionBackground.alt || "",
                    "aria-hidden": "true",
                    className: "absolute inset-0 h-full w-full object-cover"
                }), (0,
                e.jsx)("div", {
                    className: "absolute inset-0 bg-[#0e0e0e]/40"
                }), (0,
                e.jsx)("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/50 via-[#0e0e0e]/52 to-[#0e0e0e]/48"
                }), (0,
                e.jsxs)("div", {
                    className: "relative grid gap-12 px-8 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1.05fr_1.35fr] lg:items-center lg:px-14 lg:py-16",
                    children: [(0,
                    e.jsxs)(j.Reveal, {
                        children: [(0,
                        e.jsxs)("h2", {
                            className: "text-4xl font-bold leading-tight text-white",
                            children: [t("title.lineOne"), (0,
                            e.jsx)("br", {}), (0,
                            e.jsx)("span", {
                                className: "text-primary",
                                children: t("title.accent")
                            })]
                        }), (0,
                        e.jsx)("p", {
                            className: "mt-5 max-w-xl text-lg leading-9 text-white/88",
                            children: t("description")
                        }), (0,
                        e.jsx)("ul", {
                            className: "mt-7 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-4 text-lg text-white sm:grid-cols-2",
                            children: [t("benefits.noGuessing"), t("benefits.noRedesigns"), t("benefits.noDelays")].map(t => (0,
                            e.jsxs)("li", {
                                className: "flex items-center gap-3",
                                children: [(0,
                                e.jsx)("span", {
                                    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#0E0E0E]",
                                    children: (0,
                                    e.jsx)(l.Check, {
                                        className: "h-3.5 w-3.5"
                                    })
                                }), t]
                            }, t))
                        }), (0,
                        e.jsx)("div", {
                            className: "mt-8",
                            children: (0,
                            e.jsxs)(S.AppLink, {
                                href: "/contact",
                                className: "inline-flex items-center gap-4 rounded-2xl bg-primary px-6 py-4 text-lg font-medium text-white transition hover:bg-primary-hover",
                                children: [t("cta"), (0,
                                e.jsx)(r, {
                                    className: "h-5 w-5"
                                })]
                            })
                        })]
                    }), (0,
                    e.jsx)("div", {
                        className: "grid gap-5 sm:grid-cols-3",
                        children: c.map( (t, r) => (0,
                        e.jsx)(j.Reveal, {
                            delay: .1 + .08 * r,
                            children: (0,
                            e.jsxs)("div", {
                                className: "flex min-h-65 h-full flex-col items-center justify-center rounded-[1.75rem] border border-primary bg-black/18 px-6 py-8 text-center backdrop-blur-md",
                                children: [(0,
                                e.jsx)("span", {
                                    className: "mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white",
                                    children: (0,
                                    e.jsx)(t.icon, {
                                        className: "h-9 w-9"
                                    })
                                }), (0,
                                e.jsx)("p", {
                                    className: "text-xl font-medium leading-tight text-white",
                                    children: t.title
                                })]
                            })
                        }, t.title))
                    })]
                })]
            })
        })
    }
    function oc() {
        let t = (0,
        n.useTranslations)("HomePage.gallery")
          , r = [{
            src: M.images.home.kitchenProduct.src,
            tag: t("tags.kitchen"),
            span: "row-span-2"
        }, {
            src: M.images.home.windowSystems.src,
            tag: t("tags.upvc"),
            span: ""
        }, {
            src: M.images.gallery.dsc03381EditCopy.src,
            tag: t("tags.kitchen"),
            span: ""
        }, {
            src: M.images.gallery.hf20260327102428.src,
            tag: t("tags.upvc"),
            span: "col-span-2"
        }, {
            src: M.images.home.wardrobeProduct.src,
            tag: t("tags.closet"),
            span: ""
        }, {
            src: M.images.home.doorProduct.src,
            tag: t("tags.door"),
            span: ""
        }, {
            src: M.images.gallery.dsc03469EditCopy.src,
            tag: t("tags.closet"),
            span: ""
        }];
        return (0,
        e.jsxs)("section", {
            className: "relative isolate overflow-hidden bg-[#0E0E0E] px-6 py-24 sm:px-8 lg:px-16",
            children: [(0,
            e.jsx)(y.BlueprintBackground, {
                className: "text-primary"
            }), (0,
            e.jsxs)("div", {
                className: "relative mx-auto max-w-7xl",
                children: [(0,
                e.jsxs)(j.Reveal, {
                    className: "text-center",
                    children: [(0,
                    e.jsx)(w.SectionBadge, {
                        children: t("badge")
                    }), (0,
                    e.jsx)("h2", {
                        className: "mt-4 text-3xl font-bold leading-tight sm:text-5xl",
                        children: t("title")
                    })]
                }), (0,
                e.jsx)("div", {
                    className: "mt-10 grid auto-rows-[14rem] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
                    children: r.map( (t, r) => (0,
                    e.jsx)(j.Reveal, {
                        delay: .05 * r,
                        className: `relative overflow-hidden rounded-2xl ${t.span}`,
                        children: (0,
                        e.jsx)(a7.default, {
                            src: t.src,
                            alt: t.tag,
                            fill: !0,
                            sizes: "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
                            quality: 62,
                            className: "object-cover transition-transform duration-700 hover:scale-105"
                        })
                    }, `${t.src}-${r}`))
                }), (0,
                e.jsx)("div", {
                    className: "mt-12 text-center",
                    children: (0,
                    e.jsx)(b.ArrowButton, {
                        href: "/projects",
                        children: t("cta")
                    })
                })]
            })]
        })
    }
    function ou() {
        let t = (0,
        n.useTranslations)("HomePage.contact");
        return (0,
        e.jsxs)("section", {
            className: "relative isolate overflow-hidden bg-[#0E0E0E] px-6 py-24 sm:px-8 lg:px-16",
            children: [(0,
            e.jsx)(y.BlueprintBackground, {
                className: "text-primary"
            }), (0,
            e.jsxs)("div", {
                className: "relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center",
                children: [(0,
                e.jsxs)(j.Reveal, {
                    children: [(0,
                    e.jsx)(w.SectionBadge, {
                        children: t("badge")
                    }), (0,
                    e.jsx)("h2", {
                        className: "mt-5 text-3xl font-bold leading-tight sm:text-5xl",
                        children: t("title")
                    }), (0,
                    e.jsx)("p", {
                        className: "mt-5 max-w-lg text-base leading-relaxed text-white/70",
                        children: t("description")
                    })]
                }), (0,
                e.jsxs)(j.Reveal, {
                    delay: .1,
                    children: [(0,
                    e.jsx)("h3", {
                        className: "mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl",
                        children: t("panelTitle")
                    }), (0,
                    e.jsx)(T.ContactForm, {
                        dark: !0
                    })]
                })]
            })]
        })
    }
    t.s(["HomePage", 0, function() {
        return (0,
        e.jsxs)("div", {
            className: "bg-[#0E0E0E] text-white",
            children: [(0,
            e.jsx)(oa, {}), (0,
            e.jsx)(os, {}), (0,
            e.jsx)(oo, {}), (0,
            e.jsx)(ol, {}), (0,
            e.jsx)(oc, {}), (0,
            e.jsx)(b.WhyChooseCTA, {}), (0,
            e.jsx)(k.TestimonialsSection, {}), (0,
            e.jsx)(ou, {})]
        })
    }
    ], 33114)
}
]);
