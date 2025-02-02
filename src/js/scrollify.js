!(function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ?
        define(["jquery"], function(o) {
            return t(o, e, e.document);
        }) :
        "object" == typeof module && module.exports ?
        (module.exports = t(require("jquery"), e, e.document)) :
        t(jQuery, e, e.document);
})("undefined" != typeof window ? window : this, function(e, t, o, n) {
    "use strict";

    function r() {
        return b.height() + R.offset;
    }

    function i(o, n, i, s) {
        if ((w === o && (i = !1), !0 === D)) return !0;
        if (m[o]) {
            if (((M = !1), !0 === k && (R.afterRender(), (k = !1)), i && "function" == typeof R.before && !1 === R.before(o, g))) return !0;
            if (((S = 1), (O = p[o]), !1 === k && w > o && !1 === s && v[o] && ((l = r()), (S = parseInt(g[o].outerHeight() / l)), (O = parseInt(p[o]) + (g[o].outerHeight() - l))), R.updateHash && R.sectionName && (!0 !== k || 0 !== o)))
                if (history.pushState)
                    try {
                        history.replaceState(null, null, m[o]);
                    } catch (e) {
                        t.console && console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.");
                    }
                else t.location.hash = m[o];
            if (((w = o), n)) e(R.target).stop().scrollTop(O), i && R.after(o, g);
            else {
                if (
                    ((x = !0),
                        e().velocity ? e(R.target).stop().velocity("scroll", { duration: R.scrollSpeed, easing: R.easing, offset: O, mobileHA: !1 }) : e(R.target).stop().animate({ scrollTop: O }, R.scrollSpeed, R.easing),
                        t.location.hash.length && R.sectionName && t.console)
                )
                    try {
                        e(t.location.hash).length && console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.");
                    } catch (e) {}
                e(R.target)
                    .promise()
                    .done(function() {
                        (x = !1), (k = !1), i && R.after(o, g);
                    });
            }
        }
    }

    function s(e) {
        function t(t) {
            for (var o = 0, n = e.slice(Math.max(e.length - t, 1)), r = 0; r < n.length; r++) o += n[r];
            return Math.ceil(o / t);
        }
        return t(10) >= t(70);
    }

    function a(e, t) {
        for (var o = m.length; o >= 0; o--) "string" == typeof e ? m[o] === e && ((y = o), i(o, t, !0, !0)) : o === e && ((y = o), i(o, t, !0, !0));
    }
    var c,
        u,
        l,
        h,
        f,
        d,
        p = [],
        m = [],
        g = [],
        v = [],
        y = 0,
        w = 0,
        S = 1,
        H = !1,
        b = e(t),
        E = b.scrollTop(),
        M = !1,
        x = !1,
        T = !1,
        D = !1,
        I = [],
        N = new Date().getTime(),
        k = !0,
        L = !1,
        O = 0,
        z = "onwheel" in o ? "wheel" : o.onmousewheel !== n ? "mousewheel" : "DOMMouseScroll",
        R = {
            section: ".section",
            sectionName: "section-name",
            interstitialSection: "",
            easing: "easeOutExpo",
            scrollSpeed: 1100,
            offset: 0,
            scrollbars: !0,
            target: "html,body",
            standardScrollElements: !1,
            setHeights: !0,
            overflowScroll: !0,
            updateHash: !0,
            touchScroll: !0,
            before: function() {},
            after: function() {},
            afterResize: function() {},
            afterRender: function() {},
        },
        j = function(n) {
            function a(t) {
                e().velocity ? e(R.target).stop().velocity("scroll", { duration: R.scrollSpeed, easing: R.easing, offset: t, mobileHA: !1 }) : e(R.target).stop().animate({ scrollTop: t }, R.scrollSpeed, R.easing);
            }

            function w(t) {
                t && (E = b.scrollTop());
                var o = R.section;
                (v = []),
                R.interstitialSection.length && (o += "," + R.interstitialSection), !1 === R.scrollbars && (R.overflowScroll = !1),
                    (l = r()),
                    e(o).each(function(t) {
                        var o = e(this);
                        R.setHeights ?
                            o.is(R.interstitialSection) ?
                            (v[t] = !1) :
                            o.css("height", "auto").outerHeight() < l || "hidden" === o.css("overflow") ?
                            (o.css({ height: l }), (v[t] = !1)) :
                            (o.css({ height: o.height() }), R.overflowScroll ? (v[t] = !0) : (v[t] = !1)) :
                            o.outerHeight() < l || !1 === R.overflowScroll ?
                            (v[t] = !1) :
                            (v[t] = !0);
                    }),
                    t && b.scrollTop(E);
            }

            function k(o, n) {
                var r = R.section;
                R.interstitialSection.length && (r += "," + R.interstitialSection),
                    (p = []),
                    (m = []),
                    (g = []),
                    e(r).each(function(o) {
                        var n = e(this);
                        (p[o] = o > 0 ? parseInt(n.offset().top) + R.offset : parseInt(n.offset().top)),
                        R.sectionName && n.data(R.sectionName) ?
                            (m[o] = "#" + n.data(R.sectionName).toString().replace(/ /g, "-")) :
                            !1 === n.is(R.interstitialSection) ?
                            (m[o] = "#" + (o + 1)) :
                            ((m[o] = "#"), o === e(r).length - 1 && o > 1 && (p[o] = p[o - 1] + (parseInt(e(e(r)[o - 1]).outerHeight()) - parseInt(e(t).height())) + parseInt(n.outerHeight()))),
                            (g[o] = n);
                        try {
                            e(m[o]).length && t.console && console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.");
                        } catch (e) {}
                        t.location.hash === m[o] && ((y = o), (H = !0));
                    }), !0 === o && i(y, !1, !1, !1);
            }

            function O() {
                return !v[y] || !((E = b.scrollTop()) > parseInt(p[y]));
            }

            function j() {
                return !v[y] || ((E = b.scrollTop()), (l = r()), !(E < parseInt(p[y]) + (g[y].outerHeight() - l) - 28));
            }
            (L = !0),
            (e.easing.easeOutExpo = function(e, t, o, n, r) {
                return t == r ? o + n : n * (1 - Math.pow(2, (-10 * t) / r)) + o;
            }),
            (h = {
                handleMousedown: function() {
                    if (!0 === D) return !0;
                    (M = !1), (T = !1);
                },
                handleMouseup: function() {
                    if (!0 === D) return !0;
                    (M = !0), T && h.calculateNearest(!1, !0);
                },
                handleScroll: function() {
                    if (!0 === D) return !0;
                    c && clearTimeout(c),
                        (c = setTimeout(function() {
                            if (((T = !0), !1 === M)) return !1;
                            (M = !1), h.calculateNearest(!1, !0);
                        }, 200));
                },
                calculateNearest: function(e, t) {
                    E = b.scrollTop();
                    for (var o, n = 1, r = p.length, s = 0, a = Math.abs(p[0] - E); n < r; n++)(o = Math.abs(p[n] - E)) < a && ((a = o), (s = n));
                    ((j() && s > y) || O()) && ((y = s), i(s, e, t, !1));
                },
                wheelHandler: function(o) {
                    if (!0 === D) return !0;
                    if (R.standardScrollElements && (e(o.target).is(R.standardScrollElements) || e(o.target).closest(R.standardScrollElements).length)) return !0;
                    v[y] || o.preventDefault();
                    var n = new Date().getTime(),
                        r = (o = o || t.event).originalEvent.wheelDelta || -o.originalEvent.deltaY || -o.originalEvent.detail,
                        a = Math.max(-1, Math.min(1, r));
                    if ((I.length > 149 && I.shift(), I.push(Math.abs(r)), n - N > 200 && (I = []), (N = n), x)) return !1;
                    if (a < 0) {
                        if (y < p.length - 1 && j()) {
                            if (!s(I)) return !1;
                            o.preventDefault(), (x = !0), i(++y, !1, !0, !1);
                        }
                    } else if (a > 0 && y > 0 && O()) {
                        if (!s(I)) return !1;
                        o.preventDefault(), (x = !0), i(--y, !1, !0, !1);
                    }
                },
                keyHandler: function(e) {
                    return (!0 === D ||
                        !1 === o.activeElement.readOnly ||
                        (!0 !== x &&
                            void(38 == e.keyCode || 33 == e.keyCode ?
                                y > 0 && O() && (e.preventDefault(), i(--y, !1, !0, !1)) :
                                (40 != e.keyCode && 34 != e.keyCode) || (y < p.length - 1 && j() && (e.preventDefault(), i(++y, !1, !0, !1)))))
                    );
                },
                init: function() {
                    R.scrollbars ? (b.on("mousedown", h.handleMousedown), b.on("mouseup", h.handleMouseup), b.on("scroll", h.handleScroll)) : e("body").css({ overflow: "hidden" }), b.on(z, h.wheelHandler), b.on("keydown", h.keyHandler);
                },
            }),
            (f = {
                touches: { touchstart: { y: -1, x: -1 }, touchmove: { y: -1, x: -1 }, touchend: !1, direction: "undetermined" },
                options: { distance: 30, timeGap: 800, timeStamp: new Date().getTime() },
                touchHandler: function(t) {
                    if (!0 === D) return !0;
                    if (R.standardScrollElements && (e(t.target).is(R.standardScrollElements) || e(t.target).closest(R.standardScrollElements).length)) return !0;
                    var o;
                    if (void 0 !== t && void 0 !== t.touches)
                        switch (((o = t.touches[0]), t.type)) {
                            case "touchstart":
                                (f.touches.touchstart.y = o.pageY), (f.touches.touchmove.y = -1), (f.touches.touchstart.x = o.pageX), (f.touches.touchmove.x = -1), (f.options.timeStamp = new Date().getTime()), (f.touches.touchend = !1);
                            case "touchmove":
                                (f.touches.touchmove.y = o.pageY),
                                (f.touches.touchmove.x = o.pageX),
                                f.touches.touchstart.y !== f.touches.touchmove.y &&
                                    Math.abs(f.touches.touchstart.y - f.touches.touchmove.y) > Math.abs(f.touches.touchstart.x - f.touches.touchmove.x) &&
                                    (t.preventDefault(),
                                        (f.touches.direction = "y"),
                                        f.options.timeStamp + f.options.timeGap < new Date().getTime() &&
                                        0 == f.touches.touchend &&
                                        ((f.touches.touchend = !0),
                                            f.touches.touchstart.y > -1 && Math.abs(f.touches.touchmove.y - f.touches.touchstart.y) > f.options.distance && (f.touches.touchstart.y < f.touches.touchmove.y ? f.up() : f.down())));
                                break;
                            case "touchend":
                                !1 === f.touches[t.type] &&
                                    ((f.touches[t.type] = !0),
                                        f.touches.touchstart.y > -1 &&
                                        f.touches.touchmove.y > -1 &&
                                        "y" === f.touches.direction &&
                                        (Math.abs(f.touches.touchmove.y - f.touches.touchstart.y) > f.options.distance && (f.touches.touchstart.y < f.touches.touchmove.y ? f.up() : f.down()),
                                            (f.touches.touchstart.y = -1),
                                            (f.touches.touchstart.x = -1),
                                            (f.touches.direction = "undetermined")));
                        }
                },
                down: function() {
                    y < p.length && (j() && y < p.length - 1 ? i(++y, !1, !0, !1) : ((l = r()), Math.floor(g[y].height() / l) > S ? (a(parseInt(p[y]) + l * S), (S += 1)) : a(parseInt(p[y]) + (g[y].outerHeight() - l))));
                },
                up: function() {
                    y >= 0 && (O() && y > 0 ? i(--y, !1, !0, !1) : S > 2 ? ((l = r()), (S -= 1), a(parseInt(p[y]) + l * S)) : ((S = 1), a(parseInt(p[y]))));
                },
                init: function() {
                    if (o.addEventListener && R.touchScroll) {
                        var e = { passive: !1 };
                        o.addEventListener("touchstart", f.touchHandler, e), o.addEventListener("touchmove", f.touchHandler, e), o.addEventListener("touchend", f.touchHandler, e);
                    }
                },
            }),
            (d = {
                refresh: function(e, t) {
                    clearTimeout(u),
                        (u = setTimeout(function() {
                            w(!0), k(t), e && R.afterResize();
                        }, 400));
                },
                handleUpdate: function() {
                    d.refresh(!1, !1);
                },
                handleResize: function() {
                    d.refresh(!0, !1);
                },
                handleOrientation: function() {
                    d.refresh(!0, !0);
                },
            }),
            (R = e.extend(R, n)),
            w(!1),
                k(!1), !0 === H ?
                i(y, !1, !0, !0) :
                setTimeout(function() {
                    h.calculateNearest(!0, !1);
                }, 200),
                p.length && (h.init(), f.init(), b.on("resize", d.handleResize), o.addEventListener && t.addEventListener("orientationchange", d.handleOrientation, !1));
        };
    return (
        (j.move = function(t) {
            if (t === n) return !1;
            t.originalEvent && (t = e(this).attr("href")), a(t, !1);
        }),
        (j.instantMove = function(e) {
            if (e === n) return !1;
            a(e, !0);
        }),
        (j.next = function() {
            y < m.length && i((y += 1), !1, !0, !0);
        }),
        (j.previous = function() {
            y > 0 && i((y -= 1), !1, !0, !0);
        }),
        (j.instantNext = function() {
            y < m.length && i((y += 1), !0, !0, !0);
        }),
        (j.instantPrevious = function() {
            y > 0 && i((y -= 1), !0, !0, !0);
        }),
        (j.destroy = function() {
            if (!L) return !1;
            R.setHeights &&
                e(R.section).each(function() {
                    e(this).css("height", "auto");
                }),
                b.off("resize", d.handleResize),
                R.scrollbars && (b.off("mousedown", h.handleMousedown), b.off("mouseup", h.handleMouseup), b.off("scroll", h.handleScroll)),
                b.off(z, h.wheelHandler),
                b.off("keydown", h.keyHandler),
                o.addEventListener && R.touchScroll && (o.removeEventListener("touchstart", f.touchHandler, !1), o.removeEventListener("touchmove", f.touchHandler, !1), o.removeEventListener("touchend", f.touchHandler, !1)),
                (p = []),
                (m = []),
                (g = []),
                (v = []);
        }),
        (j.update = function() {
            if (!L) return !1;
            d.handleUpdate();
        }),
        (j.current = function() {
            return g[y];
        }),
        (j.currentIndex = function() {
            return y;
        }),
        (j.disable = function() {
            D = !0;
        }),
        (j.enable = function() {
            (D = !1), L && h.calculateNearest(!1, !1);
        }),
        (j.isDisabled = function() {
            return D;
        }),
        (j.setOptions = function(o) {
            if (!L) return !1;
            "object" == typeof o ? ((R = e.extend(R, o)), d.handleUpdate()) : t.console && console.warn("Scrollify warning: setOptions expects an object.");
        }),
        (e.scrollify = j),
        j
    );
});