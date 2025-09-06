(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [327], {
        9272: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 7805)), Promise.resolve().then(r.bind(r, 8850)), Promise.resolve().then(r.t.bind(r, 5878, 23))
        },
        7805: function(e, t, r) {
            "use strict";
            r.d(t, {
                Navigation: function() {
                    return x
                }
            });
            var n = r(7437),
                s = r(7648),
                a = r(2265),
                i = r(5293),
                d = r(535),
                o = r(4508);
            let l = (0, d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
                variants: {
                    variant: {
                        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
                        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                        link: "text-primary underline-offset-4 hover:underline"
                    },
                    size: {
                        default: "h-9 px-4 py-2 has-[>svg]:px-3",
                        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
                        icon: "size-9"
                    }
                },
                defaultVariants: {
                    variant: "default",
                    size: "default"
                }
            });

            function c(e) {
                let {
                    className: t,
                    variant: r,
                    size: s,
                    asChild: a = !1,
                    ...d
                } = e, c = a ? i.g7 : "button";
                return (0, n.jsx)(c, {
                    "data-slot": "button",
                    className: (0, o.cn)(l({
                        variant: r,
                        size: s,
                        className: t
                    })),
                    ...d
                })
            }
            var u = r(2489),
                m = r(8293);

            function x() {
                let [e, t] = (0, a.useState)(!1);
                return (0, n.jsx)("nav", {
                    className: "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border",
                    children: (0, n.jsxs)("div", {
                        className: "container mx-auto px-4 sm:px-6 lg:px-8",
                        children: [(0, n.jsxs)("div", {
                            className: "flex justify-between items-center h-16",
                            children: [(0, n.jsx)("div", {
                                className: "flex items-center",
                                children: (0, n.jsx)(s.default, {
                                    href: "/",
                                    className: "text-xl font-bold text-primary",
                                    children: "IllustratedCo"
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, n.jsxs)("div", {
                                    className: "ml-10 flex items-baseline space-x-4",
                                    children: [(0, n.jsx)(s.default, {
                                        href: "/",
                                        className: "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        children: "Home"
                                    }), (0, n.jsx)(s.default, {
                                        href: "/about",
                                        className: "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        children: "About Us"
                                    }), (0, n.jsx)(s.default, {
                                        href: "/contact",
                                        className: "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        children: "Contact"
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, n.jsx)(c, {
                                    children: "Get Started"
                                })
                            }), (0, n.jsx)("div", {
                                className: "md:hidden",
                                children: (0, n.jsx)(c, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => t(!e),
                                    children: e ? (0, n.jsx)(u.Z, {
                                        className: "h-6 w-6"
                                    }) : (0, n.jsx)(m.Z, {
                                        className: "h-6 w-6"
                                    })
                                })
                            })]
                        }), e && (0, n.jsx)("div", {
                            className: "md:hidden",
                            children: (0, n.jsxs)("div", {
                                className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                                children: [(0, n.jsx)(s.default, {
                                    href: "/",
                                    className: "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Home"
                                }), (0, n.jsx)(s.default, {
                                    href: "/about",
                                    className: "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                                    children: "About Us"
                                }), (0, n.jsx)(s.default, {
                                    href: "/contact",
                                    className: "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Contact"
                                }), (0, n.jsx)("div", {
                                    className: "pt-2",
                                    children: (0, n.jsx)(c, {
                                        className: "w-full",
                                        children: "Get Started"
                                    })
                                })]
                            })
                        })]
                    })
                })
            }
        },
        8850: function(e, t, r) {
            "use strict";
            r.d(t, {
                Label: function() {
                    return l
                }
            });
            var n = r(7437),
                s = r(2265);
            r(4887);
            var a = r(5293),
                i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let r = s.forwardRef((e, r) => {
                        let {
                            asChild: s,
                            ...i
                        } = e, d = s ? a.g7 : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(d, { ...i,
                            ref: r
                        })
                    });
                    return r.displayName = `Primitive.${t}`, { ...e,
                        [t]: r
                    }
                }, {}),
                d = s.forwardRef((e, t) => (0, n.jsx)(i.label, { ...e,
                    ref: t,
                    onMouseDown: t => {
                        var r;
                        t.target.closest("button, input, select, textarea") || (null === (r = e.onMouseDown) || void 0 === r || r.call(e, t), !t.defaultPrevented && t.detail > 1 && t.preventDefault())
                    }
                }));
            d.displayName = "Label";
            var o = r(4508);

            function l(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, n.jsx)(d, {
                    "data-slot": "label",
                    className: (0, o.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", t),
                    ...r
                })
            }
        },
        4508: function(e, t, r) {
            "use strict";
            r.d(t, {
                cn: function() {
                    return a
                }
            });
            var n = r(1994),
                s = r(3335);

            function a() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, s.m6)((0, n.W)(t))
            }
        }
    },
    function(e) {
        e.O(0, [295, 971, 117, 744], function() {
            return e(e.s = 9272)
        }), _N_E = e.O()
    }
]);