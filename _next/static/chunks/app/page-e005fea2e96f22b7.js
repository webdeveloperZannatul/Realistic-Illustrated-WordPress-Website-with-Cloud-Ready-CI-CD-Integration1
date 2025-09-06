(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931, 301], {
        6163: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 7805)), Promise.resolve().then(r.t.bind(r, 5878, 23))
        },
        7805: function(e, t, r) {
            "use strict";
            r.d(t, {
                Navigation: function() {
                    return m
                }
            });
            var s = r(7437),
                n = r(7648),
                a = r(2265),
                i = r(5293),
                d = r(535),
                o = r(4508);
            let c = (0, d.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
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

            function l(e) {
                let {
                    className: t,
                    variant: r,
                    size: n,
                    asChild: a = !1,
                    ...d
                } = e, l = a ? i.g7 : "button";
                return (0, s.jsx)(l, {
                    "data-slot": "button",
                    className: (0, o.cn)(c({
                        variant: r,
                        size: n,
                        className: t
                    })),
                    ...d
                })
            }
            var u = r(2489),
                x = r(8293);

            function m() {
                let [e, t] = (0, a.useState)(!1);
                return (0, s.jsx)("nav", {
                    className: "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border",
                    children: (0, s.jsxs)("div", {
                        className: "container mx-auto px-4 sm:px-6 lg:px-8",
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-between items-center h-16",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center",
                                children: (0, s.jsx)(n.default, {
                                    href: "/",
                                    className: "text-xl font-bold text-primary",
                                    children: "IllustratedCo"
                                })
                            }), (0, s.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, s.jsxs)("div", {
                                    className: "ml-10 flex items-baseline space-x-4",
                                    children: [(0, s.jsx)(n.default, {
                                        href: "/",
                                        className: "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        children: "Home"
                                    }), (0, s.jsx)(n.default, {
                                        href: "/about",
                                        className: "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        children: "About Us"
                                    }), (0, s.jsx)(n.default, {
                                        href: "/contact",
                                        className: "text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                        children: "Contact"
                                    })]
                                })
                            }), (0, s.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, s.jsx)(l, {
                                    children: "Get Started"
                                })
                            }), (0, s.jsx)("div", {
                                className: "md:hidden",
                                children: (0, s.jsx)(l, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: () => t(!e),
                                    children: e ? (0, s.jsx)(u.Z, {
                                        className: "h-6 w-6"
                                    }) : (0, s.jsx)(x.Z, {
                                        className: "h-6 w-6"
                                    })
                                })
                            })]
                        }), e && (0, s.jsx)("div", {
                            className: "md:hidden",
                            children: (0, s.jsxs)("div", {
                                className: "px-2 pt-2 pb-3 space-y-1 sm:px-3",
                                children: [(0, s.jsx)(n.default, {
                                    href: "/",
                                    className: "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Home"
                                }), (0, s.jsx)(n.default, {
                                    href: "/about",
                                    className: "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                                    children: "About Us"
                                }), (0, s.jsx)(n.default, {
                                    href: "/contact",
                                    className: "text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium",
                                    children: "Contact"
                                }), (0, s.jsx)("div", {
                                    className: "pt-2",
                                    children: (0, s.jsx)(l, {
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
        4508: function(e, t, r) {
            "use strict";
            r.d(t, {
                cn: function() {
                    return a
                }
            });
            var s = r(1994),
                n = r(3335);

            function a() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, n.m6)((0, s.W)(t))
            }
        }
    },
    function(e) {
        e.O(0, [295, 971, 117, 744], function() {
            return e(e.s = 6163)
        }), _N_E = e.O()
    }
]);