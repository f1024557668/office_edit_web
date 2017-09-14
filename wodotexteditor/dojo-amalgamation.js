//>>built
(function(f, k) {
	var h, j, e = function() {},
		c = function(a) {
			for (var b in a) return 0;
			return 1
		},
		i = {}.toString,
		b = function(a) {
			return "[object Function]" == i.call(a)
		},
		g = function(a) {
			return "[object String]" == i.call(a)
		},
		a = function(a) {
			return "[object Array]" == i.call(a)
		},
		l = function(a, b) {
			if (a)
				for (var d = 0; d < a.length;) b(a[d++])
		},
		d = function(a, b) {
			for (var d in b) a[d] = b[d];
			return a
		},
		p = function(a, b) {
			return d(Error(a), {
				src: "dojoLoader",
				info: b
			})
		},
		m = 1,
		n = function() {
			return "_" + m++
		},
		o = function(a, b, d) {
			return wa(a, b, d, 0, o)
		},
		r = this,
		q =
		r.document,
		v = q && q.createElement("DiV"),
		s = o.has = function(a) {
			return b(t[a]) ? t[a] = t[a](r, q, v) : t[a]
		},
		t = s.cache = k.hasCache;
	s.add = function(a, b, d, l) {
		(void 0 === t[a] || l) && (t[a] = b);
		return d && s(a)
	};
	for (var u in f.has) s.add(u, f.has[u], 0, 1);
	o.async = 1;
	var y = new Function("return eval(arguments[0]);");
	o.eval = function(a, b) {
		return y(a + "\r\n////@ sourceURL=" + b)
	};
	var z = {},
		I = o.signal = function(b, d) {
			var g = z[b];
			l(g && g.slice(0), function(b) {
				b.apply(null, a(d) ? d : [d])
			})
		},
		J = o.on = function(a, b) {
			var d = z[a] || (z[a] = []);
			d.push(b);
			return {
				remove: function() {
					for (var a =
							0; a < d.length; a++)
						if (d[a] === b) {
							d.splice(a, 1);
							break
						}
				}
			}
		},
		N = [],
		E = {},
		S = [],
		Q = {},
		B = o.map = {},
		A = [],
		w = {},
		x = "",
		K = {},
		H = {},
		C = {},
		F = function(a) {
			var b, d, l, g;
			for (b in H) d = H[b], (l = b.match(/^url\:(.+)/)) ? K["url:" + xa(l[1], a)] = d : "*now" == b ? g = d : "*noref" != b && (l = aa(b, a), K[l.mid] = K["url:" + l.url] = d);
			g && g(ja(a));
			H = {}
		},
		O = function(a) {
			return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(a) {
				return "\\" + a
			})
		},
		D = function(a, b) {
			b.splice(0, b.length);
			for (var d in a) b.push([d, a[d], RegExp("^" + O(d) + "(/|$)"), d.length]);
			b.sort(function(a,
				b) {
				return b[3] - a[3]
			});
			return b
		},
		L = function(a) {
			var b = a.name;
			b || (b = a, a = {
				name: b
			});
			a = d({
				main: "main"
			}, a);
			a.location = a.location ? a.location : b;
			if (a.packageMap) B[b] = a.packageMap;
			if (!a.main.indexOf("./")) a.main = a.main.substring(2);
			Q[b] = a
		},
		T = [],
		G = function(a, b, e) {
			for (var c in a) {
				if ("waitSeconds" == c) o.waitms = 1E3 * (a[c] || 0);
				"cacheBust" == c && (x = a[c] ? g(a[c]) ? a[c] : (new Date).getTime() + "" : "");
				if ("baseUrl" == c || "combo" == c) o[c] = a[c];
				a[c] !== t && (o.rawConfig[c] = a[c], "has" != c && s.add("config-" + c, a[c], 0, b))
			}
			if (!o.baseUrl) o.baseUrl =
				"./";
			/\/$/.test(o.baseUrl) || (o.baseUrl += "/");
			for (c in a.has) s.add(c, a.has[c], 0, b);
			l(a.packages, L);
			for (j in a.packagePaths) l(a.packagePaths[j], function(a) {
				var b = j + "/" + a;
				g(a) && (a = {
					name: a
				});
				a.location = b;
				L(a)
			});
			D(d(B, a.map), A);
			l(A, function(a) {
				a[1] = D(a[1], []);
				if ("*" == a[0]) A.star = a[1]
			});
			D(d(E, a.paths), S);
			l(a.aliases, function(a) {
				g(a[0]) && (a[0] = RegExp("^" + O(a[0]) + "$"));
				N.push(a)
			});
			if (b) T.push({
				config: a.config
			});
			else
				for (c in a.config) b = W(c, e), b.config = d(b.config || {}, a.config[c]);
			if (a.cache) F(), H = a.cache,
				a.cache["*noref"] && F();
			I("config", [a, o.rawConfig])
		};
	s("dojo-cdn");
	var M = q.getElementsByTagName("script");
	h = 0;
	for (var X, P, Y, U; h < M.length;)
		if (X = M[h++], (Y = X.getAttribute("src")) && (U = Y.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))) {
			P = U[3] || "";
			k.baseUrl = k.baseUrl || P;
			(Y = X.getAttribute("data-dojo-config") || X.getAttribute("djConfig")) && (C = o.eval("({ " + Y + " })", "data-dojo-config"));
			break
		}
	o.rawConfig = {};
	G(k, 1);
	if (s("dojo-cdn"))(Q.dojo.location = P) && (P += "/"), Q.dijit.location = P + "../dijit/", Q.dojox.location = P + "../dojox/";
	G(f, 1);
	G(C, 1);
	var ba = function(a) {
			ka(function() {
				l(a.deps, ya)
			})
		},
		wa = function(b, l, c, m, i) {
			var f;
			if (g(b)) {
				if ((f = W(b, m, !0)) && f.executed) return f.result;
				throw p("undefinedModule", b);
			}
			a(b) || (G(b, 0, m), b = l, l = c);
			if (a(b))
				if (b.length) {
					for (var c = "require*" + n(), j, h = [], r = 0; r < b.length;) j = b[r++], h.push(W(j, m));
					f = d(ca("", c, 0, ""), {
						injected: 2,
						deps: h,
						def: l || e,
						require: m ? m.require : o,
						gc: 1
					});
					w[f.mid] = f;
					ba(f);
					var t = $ && 0 != "sync";
					ka(function() {
						la(f, t)
					});
					f.executed || V.push(f);
					da()
				} else l && l();
			return i
		},
		ja = function(a) {
			if (!a) return o;
			var b = a.require;
			if (!b) b = function(d, l, g) {
				return wa(d, l, g, a, b)
			}, a.require = d(b, o), b.module = a, b.toUrl = function(b) {
				return xa(b, a)
			}, b.toAbsMid = function(b) {
				return ma(b, a)
			};
			return b
		},
		V = [],
		ea = [],
		R = {},
		La = function(a) {
			a.injected = 1;
			R[a.mid] = 1;
			a.url && (R[a.url] = a.pack || 1);
			za()
		},
		ga = function(a) {
			a.injected = 2;
			delete R[a.mid];
			a.url && delete R[a.url];
			c(R) && fa()
		},
		Ma = o.idle = function() {
			return !ea.length && c(R) && !V.length && !$
		},
		na = function(a, b) {
			if (b)
				for (var d = 0; d < b.length; d++)
					if (b[d][2].test(a)) return b[d];
			return 0
		},
		Aa = function(a) {
			for (var b =
					[], d, l, a = a.replace(/\\/g, "/").split("/"); a.length;) d = a.shift(), ".." == d && b.length && ".." != l ? (b.pop(), l = b[b.length - 1]) : "." != d && b.push(l = d);
			return b.join("/")
		},
		ca = function(a, b, d, l) {
			return {
				pid: a,
				mid: b,
				pack: d,
				url: l,
				executed: 0,
				def: 0
			}
		},
		Ba = function(a, d, g, c, e, m, f, i) {
			var o, n, j, h;
			h = /^\./.test(a);
			if (/(^\/)|(\:)|(\.js$)/.test(a) || h && !d) return ca(0, a, 0, a);
			a = Aa(h ? d.mid + "/../" + a : a);
			if (/^\./.test(a)) throw p("irrationalPath", a);
			d && (j = na(d.mid, m));
			(j = (j = j || m.star) && na(a, j[1])) && (a = j[1] + a.substring(j[3]));
			d = (U = a.match(/^([^\/]+)(\/(.+))?$/)) ?
				U[1] : "";
			(o = g[d]) ? a = d + "/" + (n = U[3] || o.main): d = "";
			var r = 0;
			l(N, function(d) {
				var l = a.match(d[0]);
				l && 0 < l.length && (r = b(d[1]) ? a.replace(d[0], d[1]) : d[1])
			});
			if (r) return Ba(r, 0, g, c, e, m, f, i);
			if (g = c[a]) return i ? ca(g.pid, g.mid, g.pack, g.url) : c[a];
			c = (j = na(a, f)) ? j[1] + a.substring(j[3]) : d ? o.location + "/" + n : s("config-tlmSiblingOfDojo") ? "../" + a : a;
			/(^\/)|(\:)/.test(c) || (c = e + c);
			return ca(d, a, o, Aa(c + ".js"))
		},
		aa = function(a, b) {
			return Ba(a, b, Q, w, o.baseUrl, A, S)
		},
		Ca = function(a, b, d) {
			return a.normalize ? a.normalize(b, function(a) {
				return ma(a,
					d)
			}) : ma(b, d)
		},
		Da = 0,
		W = function(a, b, d) {
			var l, g;
			(l = a.match(/^(.+?)\!(.*)$/)) ? (g = W(l[1], b, d), 5 === g.executed && !g.load && oa(g), g.load ? (l = Ca(g, l[2], b), a = g.mid + "!" + (g.dynamic ? ++Da + "!" : "") + l) : (l = l[2], a = g.mid + "!" + ++Da + "!waitingForPlugin"), a = {
				plugin: g,
				mid: a,
				req: ja(b),
				prid: l
			}) : a = aa(a, b);
			return w[a.mid] || !d && (w[a.mid] = a)
		},
		ma = o.toAbsMid = function(a, b) {
			return aa(a, b).mid
		},
		xa = o.toUrl = function(a, b) {
			var d = aa(a + "/x", b),
				l = d.url;
			return Ea(0 === d.pid ? a : l.substring(0, l.length - 5))
		},
		Fa = {
			injected: 2,
			executed: 5,
			def: 3,
			result: 3
		},
		pa = function(a) {
			return w[a] = d({
				mid: a
			}, Fa)
		},
		Na = pa("require"),
		Oa = pa("exports"),
		Pa = pa("module"),
		ha = {},
		qa = 0,
		oa = function(a) {
			var b = a.result;
			a.dynamic = b.dynamic;
			a.normalize = b.normalize;
			a.load = b.load;
			return a
		},
		Qa = function(a) {
			var b = {};
			l(a.loadQ, function(l) {
				var g = Ca(a, l.prid, l.req.module),
					c = a.dynamic ? l.mid.replace(/waitingForPlugin$/, g) : a.mid + "!" + g,
					g = d(d({}, l), {
						mid: c,
						prid: g,
						injected: 0
					});
				w[c] || Ga(w[c] = g);
				b[l.mid] = w[c];
				ga(l);
				delete w[l.mid]
			});
			a.loadQ = 0;
			var g = function(a) {
					for (var d = a.deps || [], l = 0; l < d.length; l++)(a =
						b[d[l].mid]) && (d[l] = a)
				},
				c;
			for (c in w) g(w[c]);
			l(V, g)
		},
		ra = function(a) {
			o.trace("loader-finish-exec", [a.mid]);
			a.executed = 5;
			a.defOrder = qa++;
			a.loadQ && (oa(a), Qa(a));
			for (h = 0; h < V.length;) V[h] === a ? V.splice(h, 1) : h++;
			/^require\*/.test(a.mid) && delete w[a.mid]
		},
		Ra = [],
		la = function(a, d) {
			if (4 === a.executed) return o.trace("loader-circular-dependency", [Ra.concat(a.mid).join("->")]), !a.def || d ? ha : a.cjs && a.cjs.exports;
			if (!a.executed) {
				if (!a.def) return ha;
				var l = a.mid,
					g = a.deps || [],
					c, e = [],
					m = 0;
				for (a.executed = 4; m < g.length;) {
					c =
						g[m++];
					c = c === Na ? ja(a) : c === Oa ? a.cjs.exports : c === Pa ? a.cjs : la(c, d);
					if (c === ha) return a.executed = 0, o.trace("loader-exec-module", ["abort", l]), ha;
					e.push(c)
				}
				o.trace("loader-run-factory", [a.mid]);
				var l = a.def,
					f;
				if (s("config-dojo-loader-catches")) try {
					f = b(l) ? l.apply(null, e) : l
				} catch (i) {
					I("error", a.result = p("factoryThrew", [a, i]))
				} else f = b(l) ? l.apply(null, e) : l;
				a.result = void 0 === f && a.cjs ? a.cjs.exports : f;
				ra(a)
			}
			return a.result
		},
		$ = 0,
		ka = function(a) {
			try {
				$++, a()
			} finally {
				$--
			}
			Ma() && I("idle", [])
		},
		da = function() {
			$ || ka(function() {
				for (var a,
						b, d = 0; d < V.length;) a = qa, b = V[d], la(b), a != qa ? d = 0 : d++
			})
		};
	void 0 === s("dojo-loader-eval-hint-url") && s.add("dojo-loader-eval-hint-url", 1);
	var Ea = function(a) {
			a += "";
			return a + (x ? (/\?/.test(a) ? "&" : "?") + x : "")
		},
		Ga = function(a) {
			var b = a.plugin;
			5 === b.executed && !b.load && oa(b);
			var d = function(b) {
				a.result = b;
				ga(a);
				ra(a);
				da()
			};
			b.load ? b.load(a.prid, a.req, d) : b.loadQ ? b.loadQ.push(a) : (b.loadQ = [a], V.unshift(b), ya(b))
		},
		Z = 0,
		sa = 0,
		ta = 0,
		Sa = function(a, b) {
			s("config-stripStrict") && (a = a.replace(/"use strict"/g, ""));
			ta = 1;
			if (s("config-dojo-loader-catches")) try {
				a ===
					Z ? Z.call(null) : o.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid)
			} catch (d) {
				I("error", p("evalModuleThrew", b))
			} else a === Z ? Z.call(null) : o.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid);
			ta = 0
		},
		ya = function(a) {
			var b = a.mid,
				l = a.url;
			if (!a.executed && !a.injected && !(R[b] || a.url && (a.pack && R[a.url] === a.pack || 1 == R[a.url])))
				if (La(a), a.plugin) Ga(a);
				else {
					var g = function() {
						Ta(a);
						2 !== a.injected && (ga(a), d(a, Fa), o.trace("loader-define-nonmodule", [a.url]));
						da()
					};
					(Z = K[b] || K["url:" + a.url]) ? (o.trace("loader-inject", ["cache",
						a.mid, l
					]), Sa(Z, a), g()) : (o.trace("loader-inject", ["script", a.mid, l]), sa = a, o.injectUrl(Ea(l), g, a), sa = 0)
				}
		},
		ua = function(a, l, g) {
			o.trace("loader-define-module", [a.mid, l]);
			if (2 === a.injected) return I("error", p("multipleDefine", a)), a;
			d(a, {
				deps: l,
				def: g,
				cjs: {
					id: a.mid,
					uri: a.url,
					exports: a.result = {},
					setExports: function(b) {
						a.cjs.exports = b
					},
					config: function() {
						return a.config
					}
				}
			});
			for (var c = 0; c < l.length; c++) l[c] = W(l[c], a);
			ga(a);
			if (!b(g) && !l.length) a.result = g, ra(a);
			return a
		},
		Ta = function(a, b) {
			for (var d = [], g, c; ea.length;) c =
				ea.shift(), b && (c[0] = b.shift()), g = c[0] && W(c[0]) || a, d.push([g, c[1], c[2]]);
			F(a);
			l(d, function(a) {
				ba(ua.apply(null, a))
			})
		},
		ia = 0,
		fa = e,
		za = e;
	fa = function() {
		ia && clearTimeout(ia);
		ia = 0
	};
	za = function() {
		fa();
		o.waitms && (ia = window.setTimeout(function() {
			fa();
			I("error", p("timeout", R))
		}, o.waitms))
	};
	s.add("ie-event-behavior", !!q.attachEvent && ("undefined" === typeof opera || "[object Opera]" != opera.toString()));
	var va = function(a, b, d, l) {
			if (s("ie-event-behavior")) return a.attachEvent(d, l),
				function() {
					a.detachEvent(d, l)
				};
			a.addEventListener(b,
				l, !1);
			return function() {
				a.removeEventListener(b, l, !1)
			}
		},
		Ua = va(window, "load", "onload", function() {
			o.pageLoaded = 1;
			"complete" != q.readyState && (q.readyState = "complete");
			Ua()
		}),
		Ha = q.getElementsByTagName("script")[0],
		Va = Ha.parentNode;
	o.injectUrl = function(a, b, d) {
		var d = d.node = q.createElement("script"),
			l = va(d, "load", "onreadystatechange", function(a) {
				var a = a || window.event,
					d = a.target || a.srcElement;
				if ("load" === a.type || /complete|loaded/.test(d.readyState)) l(), g(), b && b()
			}),
			g = va(d, "error", "onerror", function(b) {
				l();
				g();
				I("error", p("scriptError", [a, b]))
			});
		d.type = "text/javascript";
		d.charset = "utf-8";
		d.src = a;
		Va.insertBefore(d, Ha);
		return d
	};
	o.log = e;
	o.trace = e;
	var Ia = function(a, d, l) {
		var c = arguments.length,
			e = ["require", "exports", "module"],
			m = [0, a, d];
		1 == c ? m = [0, b(a) ? e : [], a] : 2 == c && g(a) ? m = [a, b(d) ? e : [], d] : 3 == c && (m = [a, d, l]);
		o.trace("loader-define", m.slice(0, 2));
		if ((c = m[0] && W(m[0])) && !R[c.mid]) ba(ua(c, m[1], m[2]));
		else if (!s("ie-event-behavior") || ta) ea.push(m);
		else {
			c = c || sa;
			if (!c)
				for (a in R)
					if ((e = w[a]) && e.node && "interactive" ===
						e.node.readyState) {
						c = e;
						break
					}
			c ? (F(c), ba(ua(c, m[1], m[2]))) : I("error", p("ieDefineFailed", m[0]));
			da()
		}
	};
	Ia.amd = {
		vendor: "dojotoolkit.org"
	};
	d(d(o, k.loaderPatch), f.loaderPatch);
	J("error", function(a) {
		try {
			if (a instanceof Error)
				for (var b in a);
		} catch (d) {}
	});
	d(o, {
		uid: n,
		cache: K,
		packs: Q
	});
	if (!r.define) {
		r.define = Ia;
		r.require = o;
		l(T, function(a) {
			G(a)
		});
		var Ja = C.deps || f.deps || k.deps,
			Ka = C.callback || f.callback || k.callback;
		o.boot = Ja || Ka ? [Ja || [], Ka] : 0
	}
})(this.dojoConfig || this.djConfig || this.require || {}, {
	async: 0,
	hasCache: {
		"config-selectorEngine": "acme",
		"config-tlmSiblingOfDojo": 1,
		"dojo-built": 1,
		"dojo-loader": 1,
		dom: 1,
		"host-browser": 1
	},
	packages: [{
		location: ".",
		name: "dojo"
	}, {
		location: "../dijit",
		name: "dijit"
	}, {
		location: "../dojox",
		name: "dojox"
	}, {
		location: "../app",
		name: "app"
	}]
});
require({
	cache: {
		"dojo/i18n": function() {
			define("./_base/kernel,require,./has,./_base/array,./_base/config,./_base/lang,./_base/xhr,./json,module".split(","), function(f, k, h, j, e, c, i, b, g) {
				h.add("dojo-preload-i18n-Api", 1);
				var i = f.i18n = {},
					a = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,
					l = function(a, b, d, l) {
						for (var g = [d + l], b = b.split("-"), c = "", e = 0; e < b.length; e++) c += (c ? "-" : "") + b[e], (!a || a[c]) && g.push(d + c + "/" + l);
						return g
					},
					d = {},
					p = function(a, b, d) {
						d = d ? d.toLowerCase() : f.locale;
						a = a.replace(/\./g, "/");
						b = b.replace(/\./g,
							"/");
						return /root/i.test(d) ? a + "/nls/" + b : a + "/nls/" + d + "/" + b
					};
				f.getL10nName = function(a, b, d) {
					return g.id + "!" + p(a, b, d)
				};
				var m = function(a, b, g, e, m, p) {
						a([b], function(f) {
							var i = c.clone(f.root),
								o = l(!f._v1x && f, m, g, e);
							a(o, function() {
								for (var a = 1; a < o.length; a++) i = c.mixin(c.clone(i), arguments[a]);
								d[b + "/" + m] = i;
								p()
							})
						})
					},
					n = function(a) {
						var b = e.extraLocale || [],
							b = c.isArray(b) ? b : [b];
						b.push(a);
						return b
					},
					o = function(l, g, e) {
						if (h("dojo-preload-i18n-Api")) {
							var p = l.split("*"),
								i = "preload" == p[1];
							i && (d[l] || (d[l] = 1, t(p[2], b.parse(p[3]),
								1, g)), e(1));
							if (!(p = i)) v && s.push([l, g, e]), p = v;
							if (p) return
						}
						var l = a.exec(l),
							o = l[1] + "/",
							r = l[5] || l[4],
							q = o + r,
							p = (l = l[5] && l[4]) || f.locale,
							k = q + "/" + p,
							l = l ? [p] : n(p),
							z = l.length,
							y = function() {
								--z || e(c.delegate(d[k]))
							};
						j.forEach(l, function(a) {
							var b = q + "/" + a;
							h("dojo-preload-i18n-Api") && u(b);
							d[b] ? y() : m(g, q, o, r, a, y)
						})
					};
				if (h("dojo-unit-tests")) var r = i.unitTests = [];
				h("dojo-preload-i18n-Api");
				var q = i.normalizeLocale = function(a) {
						a = a ? a.toLowerCase() : f.locale;
						return "root" == a ? "ROOT" : a
					},
					v = 0,
					s = [],
					t = i._preloadLocalizations = function(a,
						b, l, g) {
						function c(a, b) {
							g([a], b)
						}

						function e(a, b) {
							for (var d = a.split("-"); d.length;) {
								if (b(d.join("-"))) return;
								d.pop()
							}
							b("ROOT")
						}

						function m(l) {
							l = q(l);
							e(l, function(l) {
								if (0 <= j.indexOf(b, l)) {
									var g = a.replace(/\./g, "/") + "_" + l;
									v++;
									c(g, function(a) {
										for (var b in a) d[k.toAbsMid(b) + "/" + l] = a[b];
										for (--v; !v && s.length;) o.apply(null, s.shift())
									});
									return !0
								}
								return !1
							})
						}
						g = g || k;
						m();
						j.forEach(f.config.extraLocale, m)
					},
					u = function() {},
					y = {},
					z = new Function("__bundle", "__checkForLegacyModules", "__mid", "__amdValue", "var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},\t   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}"),
					u = function(a) {
						for (var b, l = a.split("/"), g = f.global[l[0]], c = 1; g && c < l.length - 1; g = g[l[c++]]);
						g && ((b = g[l[c]]) || (b = g[l[c].replace(/-/g, "_")]), b && (d[a] = b));
						return b
					};
				i.getLocalization = function(a, b, d) {
					var l, a = p(a, b, d);
					o(a, k, function(a) {
						l = a
					});
					return l
				};
				h("dojo-unit-tests") && r.push(function(a) {
					a.register("tests.i18n.unit", function(a) {
						var b;
						b = z("{prop:1}", u, "nonsense", y);
						a.is({
							prop: 1
						}, b);
						a.is(void 0, b[1]);
						b = z("({prop:1})", u, "nonsense", y);
						a.is({
							prop: 1
						}, b);
						a.is(void 0, b[1]);
						b = z("{'prop-x':1}", u, "nonsense", y);
						a.is({
							"prop-x": 1
						}, b);
						a.is(void 0, b[1]);
						b = z("({'prop-x':1})", u, "nonsense", y);
						a.is({
							"prop-x": 1
						}, b);
						a.is(void 0, b[1]);
						b = z("define({'prop-x':1})", u, "nonsense", y);
						a.is(y, b);
						a.is({
							"prop-x": 1
						}, y.result);
						b = z("define('some/module', {'prop-x':1})", u, "nonsense", y);
						a.is(y, b);
						a.is({
							"prop-x": 1
						}, y.result);
						b = z("this is total nonsense and should throw an error", u, "nonsense", y);
						a.is(b instanceof Error, !0)
					})
				});
				return c.mixin(i, {
					dynamic: !0,
					normalize: function(a, b) {
						return /^\./.test(a) ? b(a) : a
					},
					load: o,
					cache: d
				})
			})
		},
		"dojo/_base/kernel": function() {
			define(["../has",
				"./config", "require", "module"
			], function(f, k, h, j) {
				var e, c = {},
					i = {},
					b = {
						config: k,
						global: this,
						dijit: c,
						dojox: i
					},
					c = {
						dojo: ["dojo", b],
						dijit: ["dijit", c],
						dojox: ["dojox", i]
					},
					j = h.map && h.map[j.id.match(/[^\/]+/)[0]];
				for (e in j) c[e] ? c[e][0] = j[e] : c[e] = [j[e], {}];
				for (e in c) j = c[e], j[1]._scopeName = j[0], k.noGlobals || (this[j[0]] = j[1]);
				b.scopeMap = c;
				b.baseUrl = b.config.baseUrl = h.baseUrl;
				b.isAsync = h.async;
				b.locale = k.locale;
				j = "$Rev: 29801 $".match(/\d+/);
				b.version = {
					major: 1,
					minor: 8,
					patch: 1,
					flag: "",
					revision: j ? +j[0] : NaN,
					toString: function() {
						var a =
							b.version;
						return a.major + "." + a.minor + "." + a.patch + a.flag + " (" + a.revision + ")"
					}
				};
				Function("d", "d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}")(b);
				b.exit = function() {};
				"undefined" != typeof console || (console = {});
				for (var c = "assert,count,debug,dir,dirxml,error,group,groupEnd,info,profile,profileEnd,time,timeEnd,trace,warn,log".split(","), g, j = 0; g = c[j++];) console[g] || function() {
					var a = g + "";
					console[a] = "log" in console ? function() {
						var b = Array.apply({}, arguments);
						b.unshift(a +
							":");
						console.log(b.join(" "))
					} : function() {};
					console[a]._fake = !0
				}();
				f.add("dojo-debug-messages", !!k.isDebug);
				b.deprecated = b.experimental = function() {};
				if (f("dojo-debug-messages")) b.deprecated = function() {}, b.experimental = function() {};
				if (k.modulePaths) {
					b.deprecated("dojo.modulePaths", "use paths configuration");
					f = {};
					for (e in k.modulePaths) f[e.replace(/\./g, "/")] = k.modulePaths[e];
					h({
						paths: f
					})
				}
				b.moduleUrl = function(a, l) {
					b.deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
					var d = null;
					a && (d = h.toUrl(a.replace(/\./g,
						"/") + (l ? "/" + l : "") + "/*.*").replace(/\/\*\.\*/, "") + (l ? "" : "/"));
					return d
				};
				b._hasResource = {};
				return b
			})
		},
		"dojo/has": function() {
			define(["require", "module"], function(f) {
				var k = f.has || function() {};
				k.add("dom-addeventlistener", !!document.addEventListener);
				k.add("touch", "ontouchstart" in document);
				k.add("device-width", screen.availWidth || innerWidth);
				f = document.createElement("form");
				k.add("dom-attributes-explicit", 0 == f.attributes.length);
				k.add("dom-attributes-specified-flag", 0 < f.attributes.length && 40 > f.attributes.length);
				k.clearElement = function(f) {
					f.innerHTML = "";
					return f
				};
				k.normalize = function(f, j) {
					var e = f.match(/[\?:]|[^:\?]*/g),
						c = 0,
						i = function(b) {
							var g = e[c++];
							if (":" == g) return 0;
							if ("?" == e[c++]) {
								if (!b && k(g)) return i();
								i(!0);
								return i(b)
							}
							return g || 0
						};
					return (f = i()) && j(f)
				};
				k.load = function(f, j, e) {
					f ? j([f], e) : e()
				};
				return k
			})
		},
		"dojo/_base/config": function() {
			define(["../has", "require"], function(f, k) {
				var h = {},
					j = k.rawConfig,
					e;
				for (e in j) h[e] = j[e];
				return h
			})
		},
		"dojo/_base/array": function() {
			define(["./kernel", "../has", "./lang"],
				function(f, k, h) {
					function j(a) {
						return i[a] = new Function("item", "index", "array", a)
					}

					function e(a) {
						var b = !a;
						return function(d, g, c) {
							var e = 0,
								f = d && d.length || 0,
								h;
							f && "string" == typeof d && (d = d.split(""));
							"string" == typeof g && (g = i[g] || j(g));
							if (c)
								for (; e < f; ++e) {
									if (h = !g.call(c, d[e], e, d), a ^ h) return !h
								} else
									for (; e < f; ++e)
										if (h = !g(d[e], e, d), a ^ h) return !h;
							return b
						}
					}

					function c(a) {
						var l = 1,
							d = 0,
							c = 0;
						a || (l = d = c = -1);
						return function(e, f, i, j) {
							if (j && 0 < l) return g.lastIndexOf(e, f, i);
							var j = e && e.length || 0,
								h = a ? j + c : d;
							i === b ? i = a ? d : j + c : 0 > i ?
								(i = j + i, 0 > i && (i = d)) : i = i >= j ? j + c : i;
							for (j && "string" == typeof e && (e = e.split("")); i != h; i += l)
								if (e[i] == f) return i;
							return -1
						}
					}
					var i = {},
						b, g = {
							every: e(!1),
							some: e(!0),
							indexOf: c(!0),
							lastIndexOf: c(!1),
							forEach: function(a, b, d) {
								var g = 0,
									c = a && a.length || 0;
								c && "string" == typeof a && (a = a.split(""));
								"string" == typeof b && (b = i[b] || j(b));
								if (d)
									for (; g < c; ++g) b.call(d, a[g], g, a);
								else
									for (; g < c; ++g) b(a[g], g, a)
							},
							map: function(a, b, d, g) {
								var c = 0,
									e = a && a.length || 0,
									g = new(g || Array)(e);
								e && "string" == typeof a && (a = a.split(""));
								"string" == typeof b &&
									(b = i[b] || j(b));
								if (d)
									for (; c < e; ++c) g[c] = b.call(d, a[c], c, a);
								else
									for (; c < e; ++c) g[c] = b(a[c], c, a);
								return g
							},
							filter: function(a, b, d) {
								var g = 0,
									c = a && a.length || 0,
									e = [],
									f;
								c && "string" == typeof a && (a = a.split(""));
								"string" == typeof b && (b = i[b] || j(b));
								if (d)
									for (; g < c; ++g) f = a[g], b.call(d, f, g, a) && e.push(f);
								else
									for (; g < c; ++g) f = a[g], b(f, g, a) && e.push(f);
								return e
							},
							clearCache: function() {
								i = {}
							}
						};
					h.mixin(f, g);
					return g
				})
		},
		"dojo/_base/lang": function() {
			define(["./kernel", "../has", "../sniff"], function(f, k) {
				k.add("bug-for-in-skips-shadowed",
					function() {
						for (var a in {
								toString: 1
							}) return 0;
						return 1
					});
				var h = k("bug-for-in-skips-shadowed") ? "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split(".") : [],
					j = h.length,
					e = function(a, b, d) {
						var g, c = 0,
							e = f.global;
						if (!d)
							if (a.length) {
								g = a[c++];
								try {
									d = f.scopeMap[g] && f.scopeMap[g][1]
								} catch (i) {}
								d = d || (g in e ? e[g] : b ? e[g] = {} : void 0)
							} else return e;
						for (; d && (g = a[c++]);) d = g in d ? d[g] : b ? d[g] = {} : void 0;
						return d
					},
					c = Object.prototype.toString,
					i = function(a, b, d) {
						return (d || []).concat(Array.prototype.slice.call(a,
							b || 0))
					},
					b = /\{([^\}]+)\}/g,
					g = {
						_extraNames: h,
						_mixin: function(a, b, d) {
							var g, c, e, f = {};
							for (g in b)
								if (c = b[g], !(g in a) || a[g] !== c && (!(g in f) || f[g] !== c)) a[g] = d ? d(c) : c;
							if (k("bug-for-in-skips-shadowed") && b)
								for (e = 0; e < j; ++e)
									if (g = h[e], c = b[g], !(g in a) || a[g] !== c && (!(g in f) || f[g] !== c)) a[g] = d ? d(c) : c;
							return a
						},
						mixin: function(a, b) {
							a || (a = {});
							for (var d = 1, c = arguments.length; d < c; d++) g._mixin(a, arguments[d]);
							return a
						},
						setObject: function(a, b, d) {
							var g = a.split("."),
								a = g.pop();
							return (d = e(g, !0, d)) && a ? d[a] = b : void 0
						},
						getObject: function(a,
							b, d) {
							return e(a.split("."), b, d)
						},
						exists: function(a, b) {
							return void 0 !== g.getObject(a, !1, b)
						},
						isString: function(a) {
							return "string" == typeof a || a instanceof String
						},
						isArray: function(a) {
							return a && (a instanceof Array || "array" == typeof a)
						},
						isFunction: function(a) {
							return "[object Function]" === c.call(a)
						},
						isObject: function(a) {
							return void 0 !== a && (null === a || "object" == typeof a || g.isArray(a) || g.isFunction(a))
						},
						isArrayLike: function(a) {
							return a && void 0 !== a && !g.isString(a) && !g.isFunction(a) && !(a.tagName && "form" == a.tagName.toLowerCase()) &&
								(g.isArray(a) || isFinite(a.length))
						},
						isAlien: function(a) {
							return a && !g.isFunction(a) && /\{\s*\[native code\]\s*\}/.test("" + a)
						},
						extend: function(a, b) {
							for (var d = 1, c = arguments.length; d < c; d++) g._mixin(a.prototype, arguments[d]);
							return a
						},
						_hitchArgs: function(a, b) {
							var d = g._toArray(arguments, 2),
								c = g.isString(b);
							return function() {
								var e = g._toArray(arguments),
									i = c ? (a || f.global)[b] : b;
								return i && i.apply(a || this, d.concat(e))
							}
						},
						hitch: function(a, b) {
							if (2 < arguments.length) return g._hitchArgs.apply(f, arguments);
							b || (b = a, a =
								null);
							if (g.isString(b)) {
								a = a || f.global;
								if (!a[b]) throw ['lang.hitch: scope["', b, '"] is null (scope="', a, '")'].join("");
								return function() {
									return a[b].apply(a, arguments || [])
								}
							}
							return !a ? b : function() {
								return b.apply(a, arguments || [])
							}
						},
						delegate: function() {
							function a() {}
							return function(b, d) {
								a.prototype = b;
								var c = new a;
								a.prototype = null;
								d && g._mixin(c, d);
								return c
							}
						}(),
						_toArray: k("ie") ? function() {
							function a(a, b, g) {
								g = g || [];
								for (b = b || 0; b < a.length; b++) g.push(a[b]);
								return g
							}
							return function(b) {
								return (b.item ? a : i).apply(this,
									arguments)
							}
						}() : i,
						partial: function(a) {
							return g.hitch.apply(f, [null].concat(g._toArray(arguments)))
						},
						clone: function(a) {
							if (!a || "object" != typeof a || g.isFunction(a)) return a;
							if (a.nodeType && "cloneNode" in a) return a.cloneNode(!0);
							if (a instanceof Date) return new Date(a.getTime());
							if (a instanceof RegExp) return RegExp(a);
							var b, d, c;
							if (g.isArray(a)) {
								b = [];
								for (d = 0, c = a.length; d < c; ++d) d in a && b.push(g.clone(a[d]))
							} else b = a.constructor ? new a.constructor : {};
							return g._mixin(b, a, g.clone)
						},
						trim: String.prototype.trim ?
							function(a) {
								return a.trim()
							} : function(a) {
								return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
							},
						replace: function(a, c, d) {
							return a.replace(d || b, g.isFunction(c) ? c : function(a, b) {
								return g.getObject(b, !1, c)
							})
						}
					};
				g.mixin(f, g);
				return g
			})
		},
		"dojo/sniff": function() {
			define(["./has"], function(f) {
				var k = navigator,
					h = k.userAgent,
					k = k.appVersion,
					j = parseFloat(k);
				f.add("air", 0 <= h.indexOf("AdobeAIR"));
				f.add("khtml", 0 <= k.indexOf("Konqueror") ? j : void 0);
				f.add("webkit", parseFloat(h.split("WebKit/")[1]) || void 0);
				f.add("chrome",
					parseFloat(h.split("Chrome/")[1]) || void 0);
				f.add("safari", 0 <= k.indexOf("Safari") && !f("chrome") ? parseFloat(k.split("Version/")[1]) : void 0);
				f.add("mac", 0 <= k.indexOf("Macintosh"));
				f.add("quirks", "BackCompat" == document.compatMode);
				f.add("ios", /iPhone|iPod|iPad/.test(h));
				f.add("android", parseFloat(h.split("Android ")[1]) || void 0);
				if (!f("webkit")) {
					0 <= h.indexOf("Opera") && f.add("opera", 9.8 <= j ? parseFloat(h.split("Version/")[1]) || j : j);
					0 <= h.indexOf("Gecko") && !f("khtml") && !f("webkit") && f.add("mozilla", j);
					f("mozilla") &&
						f.add("ff", parseFloat(h.split("Firefox/")[1] || h.split("Minefield/")[1]) || void 0);
					if (document.all && !f("opera")) h = parseFloat(k.split("MSIE ")[1]) || void 0, (k = document.documentMode) && 5 != k && Math.floor(h) != k && (h = k), f.add("ie", h);
					f.add("wii", "undefined" != typeof opera && opera.wiiremote)
				}
				return f
			})
		},
		"dojo/_base/xhr": function() {
			define("./kernel,./sniff,require,../io-query,../dom,../dom-form,./Deferred,./config,./json,./lang,./array,../on,../aspect,../request/watch,../request/xhr,../request/util".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o) {
					f._xhrObj = n._create;
					var r = f.config;
					f.objectToQuery = j.objectToQuery;
					f.queryToObject = j.queryToObject;
					f.fieldToObject = c.fieldToObject;
					f.formToObject = c.toObject;
					f.formToQuery = c.toQuery;
					f.formToJson = c.toJson;
					f._blockAsync = !1;
					var q = f._contentHandlers = f.contentHandlers = {
						text: function(a) {
							return a.responseText
						},
						json: function(a) {
							return g.fromJson(a.responseText || null)
						},
						"json-comment-filtered": function(a) {
							var a = a.responseText,
								b = a.indexOf("/*"),
								d = a.lastIndexOf("*/");
							if (-1 == b || -1 == d) throw Error("JSON was not comment filtered");
							return g.fromJson(a.substring(b + 2, d))
						},
						javascript: function(a) {
							return f.eval(a.responseText)
						},
						xml: function(a) {
							var b = a.responseXML;
							if (k("ie") && (!b || !b.documentElement)) {
								var d = function(a) {
										return "MSXML" + a + ".DOMDocument"
									},
									d = ["Microsoft.XMLDOM", d(6), d(4), d(3), d(2)];
								l.some(d, function(d) {
									try {
										var g = new ActiveXObject(d);
										g.async = !1;
										g.loadXML(a.responseText);
										b = g
									} catch (c) {
										return !1
									}
									return !0
								})
							}
							return b
						},
						"json-comment-optional": function(a) {
							return a.responseText &&
								/^[^{\[]*\/\*/.test(a.responseText) ? q["json-comment-filtered"](a) : q.json(a)
						}
					};
					f._ioSetArgs = function(b, d, g, l) {
						var m = {
								args: b,
								url: b.url
							},
							p = null;
						if (b.form) {
							var p = e.byId(b.form),
								o = p.getAttributeNode("action");
							m.url = m.url || (o ? o.value : null);
							p = c.toObject(p)
						}
						o = [{}];
						p && o.push(p);
						b.content && o.push(b.content);
						b.preventCache && o.push({
							"dojo.preventCache": (new Date).valueOf()
						});
						m.query = j.objectToQuery(a.mixin.apply(null, o));
						m.handleAs = b.handleAs || "text";
						var n = new i(function(a) {
							a.canceled = !0;
							d && d(a);
							var b = a.ioArgs.error;
							if (!b) b = Error("request cancelled"), b.dojoType = "cancel", a.ioArgs.error = b;
							return b
						});
						n.addCallback(g);
						var h = b.load;
						h && a.isFunction(h) && n.addCallback(function(a) {
							return h.call(b, a, m)
						});
						var t = b.error;
						t && a.isFunction(t) && n.addErrback(function(a) {
							return t.call(b, a, m)
						});
						var q = b.handle;
						q && a.isFunction(q) && n.addBoth(function(a) {
							return q.call(b, a, m)
						});
						n.addErrback(function(a) {
							return l(a, n)
						});
						r.ioPublish && f.publish && !1 !== m.args.ioPublish && (n.addCallbacks(function(a) {
								f.publish("/dojo/io/load", [n, a]);
								return a
							},
							function(a) {
								f.publish("/dojo/io/error", [n, a]);
								return a
							}), n.addBoth(function(a) {
							f.publish("/dojo/io/done", [n, a]);
							return a
						}));
						n.ioArgs = m;
						return n
					};
					var v = function(a) {
							a = q[a.ioArgs.handleAs](a.ioArgs.xhr);
							return void 0 === a ? null : a
						},
						s = function(a) {
							return a
						},
						t = function(a) {
							0 >= u && (u = 0, r.ioPublish && f.publish && (!a || a && !1 !== a.ioArgs.args.ioPublish) && f.publish("/dojo/io/stop"))
						},
						u = 0;
					p.after(m, "_onAction", function() {
						u -= 1
					});
					p.after(m, "_onInFlight", t);
					f._ioCancelAll = m.cancelAll;
					f._ioNotifyStart = function(a) {
						r.ioPublish &&
							f.publish && !1 !== a.ioArgs.args.ioPublish && (u || f.publish("/dojo/io/start"), u += 1, f.publish("/dojo/io/send", [a]))
					};
					f._ioWatch = function(b, d, g, c) {
						b.ioArgs.options = b.ioArgs.args;
						a.mixin(b, {
							response: b.ioArgs,
							isValid: function() {
								return d(b)
							},
							isReady: function() {
								return g(b)
							},
							handleResponse: function() {
								return c(b)
							}
						});
						m(b);
						t(b)
					};
					f._ioAddQueryToUrl = function(a) {
						if (a.query.length) a.url += (-1 == a.url.indexOf("?") ? "?" : "&") + a.query, a.query = null
					};
					f.xhr = function(a, b, d) {
						var g, c = f._ioSetArgs(b, function() {
								g && g.cancel()
							}, v, s),
							l = c.ioArgs;
						"postData" in b ? l.query = b.postData : "putData" in b ? l.query = b.putData : "rawBody" in b ? l.query = b.rawBody : (2 < arguments.length && !d || -1 === "POST|PUT".indexOf(a.toUpperCase())) && f._ioAddQueryToUrl(l);
						var e = {
							method: a,
							handleAs: "text",
							timeout: b.timeout,
							withCredentials: b.withCredentials,
							ioArgs: l
						};
						if ("undefined" !== typeof b.headers) e.headers = b.headers;
						if ("undefined" !== typeof b.contentType) {
							if (!e.headers) e.headers = {};
							e.headers["Content-Type"] = b.contentType
						}
						if ("undefined" !== typeof l.query) e.data = l.query;
						if ("undefined" !==
							typeof b.sync) e.sync = b.sync;
						f._ioNotifyStart(c);
						try {
							g = n(l.url, e, !0)
						} catch (m) {
							return c.cancel(), c
						}
						c.ioArgs.xhr = g.response.xhr;
						g.then(function() {
							c.resolve(c)
						}).otherwise(function(a) {
							l.error = a;
							if (a.response) a.status = a.response.status, a.responseText = a.response.text, a.xhr = a.response.xhr;
							c.reject(a)
						});
						return c
					};
					f.xhrGet = function(a) {
						return f.xhr("GET", a)
					};
					f.rawXhrPost = f.xhrPost = function(a) {
						return f.xhr("POST", a, !0)
					};
					f.rawXhrPut = f.xhrPut = function(a) {
						return f.xhr("PUT", a, !0)
					};
					f.xhrDelete = function(a) {
						return f.xhr("DELETE",
							a)
					};
					f._isDocumentOk = function(a) {
						return o.checkStatus(a.status)
					};
					f._getText = function(a) {
						var b;
						f.xhrGet({
							url: a,
							sync: !0,
							load: function(a) {
								b = a
							}
						});
						return b
					};
					a.mixin(f.xhr, {
						_xhrObj: f._xhrObj,
						fieldToObject: c.fieldToObject,
						formToObject: c.toObject,
						objectToQuery: j.objectToQuery,
						formToQuery: c.toQuery,
						formToJson: c.toJson,
						queryToObject: j.queryToObject,
						contentHandlers: q,
						_ioSetArgs: f._ioSetArgs,
						_ioCancelAll: f._ioCancelAll,
						_ioNotifyStart: f._ioNotifyStart,
						_ioWatch: f._ioWatch,
						_ioAddQueryToUrl: f._ioAddQueryToUrl,
						_isDocumentOk: f._isDocumentOk,
						_getText: f._getText,
						get: f.xhrGet,
						post: f.xhrPost,
						put: f.xhrPut,
						del: f.xhrDelete
					});
					return f.xhr
				})
		},
		"dojo/_base/sniff": function() {
			define(["./kernel", "./lang", "../sniff"], function(f, k, h) {
				f._name = "browser";
				k.mixin(f, {
					isBrowser: !0,
					isFF: h("ff"),
					isIE: h("ie"),
					isKhtml: h("khtml"),
					isWebKit: h("webkit"),
					isMozilla: h("mozilla"),
					isMoz: h("mozilla"),
					isOpera: h("opera"),
					isSafari: h("safari"),
					isChrome: h("chrome"),
					isMac: h("mac"),
					isIos: h("ios"),
					isAndroid: h("android"),
					isWii: h("wii"),
					isQuirks: h("quirks"),
					isAir: h("air")
				});
				f.locale =
					f.locale || (h("ie") ? navigator.userLanguage : navigator.language).toLowerCase();
				return h
			})
		},
		"dojo/io-query": function() {
			define(["./_base/lang"], function(f) {
				var k = {};
				return {
					objectToQuery: function(h) {
						var j = encodeURIComponent,
							e = [],
							c;
						for (c in h) {
							var i = h[c];
							if (i != k[c]) {
								var b = j(c) + "=";
								if (f.isArray(i))
									for (var g = 0, a = i.length; g < a; ++g) e.push(b + j(i[g]));
								else e.push(b + j(i))
							}
						}
						return e.join("&")
					},
					queryToObject: function(h) {
						for (var j = decodeURIComponent, h = h.split("&"), e = {}, c, i, b = 0, g = h.length; b < g; ++b)
							if (i = h[b], i.length) {
								var a =
									i.indexOf("=");
								0 > a ? (c = j(i), i = "") : (c = j(i.slice(0, a)), i = j(i.slice(a + 1)));
								"string" == typeof e[c] && (e[c] = [e[c]]);
								f.isArray(e[c]) ? e[c].push(i) : e[c] = i
							}
						return e
					}
				}
			})
		},
		"dojo/dom": function() {
			define(["./sniff", "./_base/lang", "./_base/window"], function(f, k, h) {
				if (7 >= f("ie")) try {
					document.execCommand("BackgroundImageCache", !1, !0)
				} catch (j) {}
				var e = {};
				e.byId = f("ie") ? function(c, e) {
					if ("string" != typeof c) return c;
					var b = e || h.doc,
						g = c && b.getElementById(c);
					if (g && (g.attributes.id.value == c || g.id == c)) return g;
					b = b.all[c];
					if (!b ||
						b.nodeName) b = [b];
					for (var a = 0; g = b[a++];)
						if (g.attributes && g.attributes.id && g.attributes.id.value == c || g.id == c) return g
				} : function(c, e) {
					return ("string" == typeof c ? (e || h.doc).getElementById(c) : c) || null
				};
				e.isDescendant = function(c, f) {
					try {
						c = e.byId(c);
						for (f = e.byId(f); c;) {
							if (c == f) return !0;
							c = c.parentNode
						}
					} catch (b) {}
					return !1
				};
				e.setSelectable = function(c, i) {
					c = e.byId(c);
					if (f("mozilla")) c.style.MozUserSelect = i ? "" : "none";
					else if (f("khtml") || f("webkit")) c.style.KhtmlUserSelect = i ? "auto" : "none";
					else if (f("ie"))
						for (var b =
								c.unselectable = i ? "" : "on", g = c.getElementsByTagName("*"), a = 0, l = g.length; a < l; ++a) g.item(a).unselectable = b
				};
				return e
			})
		},
		"dojo/_base/window": function() {
			define(["./kernel", "./lang", "../sniff"], function(f, k, h) {
				var j = {
					global: f.global,
					doc: this.document || null,
					body: function(e) {
						e = e || f.doc;
						return e.body || e.getElementsByTagName("body")[0]
					},
					setContext: function(e, c) {
						f.global = j.global = e;
						f.doc = j.doc = c
					},
					withGlobal: function(e, c, i, b) {
						var g = f.global;
						try {
							return f.global = j.global = e, j.withDoc.call(null, e.document, c, i, b)
						} finally {
							f.global =
								j.global = g
						}
					},
					withDoc: function(e, c, i, b) {
						var g = j.doc,
							a = h("quirks"),
							l = h("ie"),
							d, p, m;
						try {
							f.doc = j.doc = e;
							f.isQuirks = h.add("quirks", "BackCompat" == f.doc.compatMode, !0, !0);
							if (h("ie") && (m = e.parentWindow) && m.navigator) d = parseFloat(m.navigator.appVersion.split("MSIE ")[1]) || void 0, (p = e.documentMode) && 5 != p && Math.floor(d) != p && (d = p), f.isIE = h.add("ie", d, !0, !0);
							i && "string" == typeof c && (c = i[c]);
							return c.apply(i, b || [])
						} finally {
							f.doc = j.doc = g, f.isQuirks = h.add("quirks", a, !0, !0), f.isIE = h.add("ie", l, !0, !0)
						}
					}
				};
				k.mixin(f, j);
				return j
			})
		},
		"dojo/dom-form": function() {
			define(["./_base/lang", "./dom", "./io-query", "./json"], function(f, k, h, j) {
				var e = {
					fieldToObject: function(c) {
						var e = null;
						if (c = k.byId(c)) {
							var b = c.name,
								g = (c.type || "").toLowerCase();
							if (b && g && !c.disabled)
								if ("radio" == g || "checkbox" == g) {
									if (c.checked) e = c.value
								} else if (c.multiple) {
								e = [];
								for (c = [c.firstChild]; c.length;)
									for (b = c.pop(); b; b = b.nextSibling)
										if (1 == b.nodeType && "option" == b.tagName.toLowerCase()) b.selected && e.push(b.value);
										else {
											b.nextSibling && c.push(b.nextSibling);
											b.firstChild &&
												c.push(b.firstChild);
											break
										}
							} else e = c.value
						}
						return e
					},
					toObject: function(c) {
						for (var i = {}, c = k.byId(c).elements, b = 0, g = c.length; b < g; ++b) {
							var a = c[b],
								l = a.name,
								d = (a.type || "").toLowerCase();
							if (l && d && 0 > "file|submit|image|reset|button".indexOf(d) && !a.disabled) {
								var p = i,
									m = l,
									a = e.fieldToObject(a);
								if (null !== a) {
									var n = p[m];
									"string" == typeof n ? p[m] = [n, a] : f.isArray(n) ? n.push(a) : p[m] = a
								}
								if ("image" == d) i[l + ".x"] = i[l + ".y"] = i[l].x = i[l].y = 0
							}
						}
						return i
					},
					toQuery: function(c) {
						return h.objectToQuery(e.toObject(c))
					},
					toJson: function(c,
						f) {
						return j.stringify(e.toObject(c), null, f ? 4 : 0)
					}
				};
				return e
			})
		},
		"dojo/json": function() {
			define(["./has"], function(f) {
				var k = "undefined" != typeof JSON;
				f.add("json-parse", k);
				f.add("json-stringify", k && '{"a":1}' == JSON.stringify({
					a: 0
				}, function(f, e) {
					return e || 1
				}));
				if (f("json-stringify")) return JSON;
				var h = function(f) {
					return ('"' + f.replace(/(["\\])/g, "\\$1") + '"').replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r")
				};
				return {
					parse: f("json-parse") ? JSON.parse : function(f, e) {
						if (e && !/^([\s\[\{]*(?:"(?:\\.|[^"])+"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(f)) throw new SyntaxError("Invalid characters in JSON");
						return eval("(" + f + ")")
					},
					stringify: function(f, e, c) {
						function i(g, a, l) {
							e && (g = e(l, g));
							var d;
							d = typeof g;
							if ("number" == d) return isFinite(g) ? g + "" : "null";
							if ("boolean" == d) return g + "";
							if (null === g) return "null";
							if ("string" == typeof g) return h(g);
							if ("function" == d || "undefined" == d) return b;
							if ("function" == typeof g.toJSON) return i(g.toJSON(l),
								a, l);
							if (g instanceof Date) return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(/\{(\w+)(\+)?\}/g, function(a, b, d) {
								a = g["getUTC" + b]() + (d ? 1 : 0);
								return 10 > a ? "0" + a : a
							});
							if (g.valueOf() !== g) return i(g.valueOf(), a, l);
							var f = c ? a + c : "",
								m = c ? " " : "",
								n = c ? "\n" : "";
							if (g instanceof Array) {
								for (var m = g.length, o = [], l = 0; l < m; l++) d = i(g[l], f, l), "string" != typeof d && (d = "null"), o.push(n + f + d);
								return "[" + o.join(",") + n + a + "]"
							}
							o = [];
							for (l in g) {
								var j;
								if (g.hasOwnProperty(l)) {
									if ("number" == typeof l) j = '"' + l + '"';
									else if ("string" ==
										typeof l) j = h(l);
									else continue;
									d = i(g[l], f, l);
									"string" == typeof d && o.push(n + f + j + ":" + m + d)
								}
							}
							return "{" + o.join(",") + n + a + "}"
						}
						var b;
						"string" == typeof e && (c = e, e = null);
						return i(f, "", "")
					}
				}
			})
		},
		"dojo/_base/Deferred": function() {
			define("./kernel,../Deferred,../promise/Promise,../errors/CancelError,../has,./lang,../when".split(","), function(f, k, h, j, e, c, i) {
				var b = function() {},
					g = Object.freeze || function() {},
					a = f.Deferred = function(l) {
						function d(a) {
							if (i) throw Error("This deferred has already been resolved");
							m = a;
							i = !0;
							f()
						}

						function f() {
							for (var a; !a && q;) {
								var d = q;
								q = q.next;
								if (a = d.progress == b) i = !1;
								var g = o ? d.error : d.resolved;
								e("config-useDeferredInstrumentation") && o && k.instrumentRejected && k.instrumentRejected(m, !!g);
								if (g) try {
									var l = g(m);
									l && "function" === typeof l.then ? l.then(c.hitch(d.deferred, "resolve"), c.hitch(d.deferred, "reject"), c.hitch(d.deferred, "progress")) : (g = a && void 0 === l, a && !g && (o = l instanceof Error), d.deferred[g && o ? "reject" : "resolve"](g ? m : l))
								} catch (p) {
									d.deferred.reject(p)
								} else o ? d.deferred.reject(m) : d.deferred.resolve(m)
							}
						}
						var m, i, o, r, q, v = this.promise = new h;
						this.resolve = this.callback = function(a) {
							this.fired = 0;
							this.results = [a, null];
							d(a)
						};
						this.reject = this.errback = function(a) {
							o = !0;
							this.fired = 1;
							e("config-useDeferredInstrumentation") && k.instrumentRejected && k.instrumentRejected(a, !!q);
							d(a);
							this.results = [null, a]
						};
						this.progress = function(a) {
							for (var b = q; b;) {
								var d = b.progress;
								d && d(a);
								b = b.next
							}
						};
						this.addCallbacks = function(a, d) {
							this.then(a, d, b);
							return this
						};
						v.then = this.then = function(d, g, c) {
							var l = c == b ? this : new a(v.cancel),
								d = {
									resolved: d,
									error: g,
									progress: c,
									deferred: l
								};
							q ? r = r.next = d : q = r = d;
							i && f();
							return l.promise
						};
						var s = this;
						v.cancel = this.cancel = function() {
							if (!i) {
								var a = l && l(s);
								if (!i) a instanceof Error || (a = new j(a)), a.log = !1, s.reject(a)
							}
						};
						g(v)
					};
				c.extend(a, {
					addCallback: function(a) {
						return this.addCallbacks(c.hitch.apply(f, arguments))
					},
					addErrback: function(a) {
						return this.addCallbacks(null, c.hitch.apply(f, arguments))
					},
					addBoth: function(a) {
						var b = c.hitch.apply(f, arguments);
						return this.addCallbacks(b, b)
					},
					fired: -1
				});
				a.when = f.when = i;
				return a
			})
		},
		"dojo/Deferred": function() {
			define("dojo/Deferred", ["./has", "./_base/lang", "./errors/CancelError", "./promise/Promise", "./promise/instrumentation"], function(f, k, h, j, e) {
				var c = Object.freeze || function() {},
					i = function(a, g, c, e, f) {
						2 === g && l.instrumentRejected && 0 === a.length && l.instrumentRejected(c, !1, e, f);
						for (f = 0; f < a.length; f++) b(a[f], g, c, e)
					},
					b = function(b, c, e, f) {
						var i = b[c],
							j = b.deferred;
						if (i) try {
							var h = i(e);
							if (0 === c) "undefined" !== typeof h && a(j, c, h);
							else {
								if (h && "function" === typeof h.then) {
									b.cancel = h.cancel;
									h.then(g(j,
										1), g(j, 2), g(j, 0));
									return
								}
								a(j, 1, h)
							}
						} catch (k) {
							a(j, 2, k)
						} else a(j, c, e);
						2 === c && l.instrumentRejected && l.instrumentRejected(e, !!i, f, j.promise)
					},
					g = function(b, g) {
						return function(c) {
							a(b, g, c)
						}
					},
					a = function(a, b, g) {
						if (!a.isCanceled()) switch (b) {
							case 0:
								a.progress(g);
								break;
							case 1:
								a.resolve(g);
								break;
							case 2:
								a.reject(g)
						}
					},
					l = function(a) {
						var g = this.promise = new j,
							e = this,
							f, o, r, q = !1,
							k = [];
						Error.captureStackTrace && (Error.captureStackTrace(e, l), Error.captureStackTrace(g, l));
						this.isResolved = g.isResolved = function() {
							return 1 ===
								f
						};
						this.isRejected = g.isRejected = function() {
							return 2 === f
						};
						this.isFulfilled = g.isFulfilled = function() {
							return !!f
						};
						this.isCanceled = g.isCanceled = function() {
							return q
						};
						this.progress = function(a, b) {
							if (f) {
								if (!0 === b) throw Error("This deferred has already been fulfilled.");
								return g
							}
							i(k, 0, a, null, e);
							return g
						};
						this.resolve = function(a, b) {
							if (f) {
								if (!0 === b) throw Error("This deferred has already been fulfilled.");
								return g
							}
							i(k, f = 1, o = a, null, e);
							k = null;
							return g
						};
						var s = this.reject = function(a, b) {
							if (f) {
								if (!0 === b) throw Error("This deferred has already been fulfilled.");
								return g
							}
							Error.captureStackTrace && Error.captureStackTrace(r = {}, s);
							i(k, f = 2, o = a, r, e);
							k = null;
							return g
						};
						this.then = g.then = function(a, d, c) {
							var e = [c, a, d];
							e.cancel = g.cancel;
							e.deferred = new l(function(a) {
								return e.cancel && e.cancel(a)
							});
							f && !k ? b(e, f, o, r) : k.push(e);
							return e.deferred.promise
						};
						this.cancel = g.cancel = function(b, g) {
							if (f) {
								if (!0 === g) throw Error("This deferred has already been fulfilled.");
							} else {
								if (a) var c = a(b),
									b = "undefined" === typeof c ? b : c;
								q = !0;
								if (f) {
									if (2 === f && o === b) return b
								} else return "undefined" === typeof b &&
									(b = new h), s(b), b
							}
						};
						c(g)
					};
				l.prototype.toString = function() {
					return "[object Deferred]"
				};
				e && e(l);
				return l
			})
		},
		"dojo/errors/CancelError": function() {
			define(["./create"], function(f) {
				return f("CancelError", null, null, {
					dojoType: "cancel"
				})
			})
		},
		"dojo/errors/create": function() {
			define(["../_base/lang"], function(f) {
				return function(k, h, j, e) {
					var j = j || Error,
						c = function(e) {
							if (j === Error) {
								Error.captureStackTrace && Error.captureStackTrace(this, c);
								var b = Error.call(this, e),
									g;
								for (g in b) b.hasOwnProperty(g) && (this[g] = b[g]);
								this.message =
									e;
								this.stack = b.stack
							} else j.apply(this, arguments);
							h && h.apply(this, arguments)
						};
					c.prototype = f.delegate(j.prototype, e);
					c.prototype.name = k;
					return c.prototype.constructor = c
				}
			})
		},
		"dojo/promise/Promise": function() {
			define(["../_base/lang"], function(f) {
				function k() {
					throw new TypeError("abstract");
				}
				return f.extend(function() {}, {
					then: function() {
						k()
					},
					cancel: function() {
						k()
					},
					isResolved: function() {
						k()
					},
					isRejected: function() {
						k()
					},
					isFulfilled: function() {
						k()
					},
					isCanceled: function() {
						k()
					},
					always: function(f) {
						return this.then(f,
							f)
					},
					otherwise: function(f) {
						return this.then(null, f)
					},
					trace: function() {
						return this
					},
					traceRejected: function() {
						return this
					},
					toString: function() {
						return "[object Promise]"
					}
				})
			})
		},
		"dojo/promise/instrumentation": function() {
			define(["./tracer", "../has", "../_base/lang", "../_base/array"], function(f, k, h, j) {
				function e(a, b) {
					b && b.stack && b.stack.split("\n").slice(1).join("\n").replace(/^\s+/, " ")
				}

				function c(a, b, g, c) {
					b || e(a, g, c)
				}

				function i(d, c, e, f) {
					c ? j.some(g, function(a, b) {
						if (a.error === d) return g.splice(b, 1), !0
					}) : j.some(g,
						function(a) {
							return a.error === d
						}) || g.push({
						error: d,
						rejection: e,
						deferred: f,
						timestamp: (new Date).getTime()
					});
					a || (a = setTimeout(b, l))
				}

				function b() {
					var d = (new Date).getTime(),
						c = d - l;
					g = j.filter(g, function(a) {
						return a.timestamp < c ? (e(a.error, a.rejection, a.deferred), !1) : !0
					});
					g.length && (a = setTimeout(b, g[0].timestamp + l - d))
				}
				var g = [],
					a = !1,
					l = 1E3;
				return function(a) {
					var b = k("config-useDeferredInstrumentation");
					if (b) {
						f.on("resolved", h.hitch(console, "log", "resolved"));
						f.on("rejected", h.hitch(console, "log", "rejected"));
						f.on("progress", h.hitch(console, "log", "progress"));
						var g = [];
						"string" === typeof b && (g = b.split(","), b = g.shift());
						if ("report-rejections" === b) a.instrumentRejected = c;
						else if ("report-unhandled-rejections" === b || !0 === b || 1 === b) a.instrumentRejected = i, l = parseInt(g[0], 10) || l;
						else throw Error("Unsupported instrumentation usage <" + b + ">");
					}
				}
			})
		},
		"dojo/promise/tracer": function() {
			define(["../_base/lang", "./Promise", "../Evented"], function(f, k, h) {
				function j(f) {
					setTimeout(function() {
						c.apply(e, f)
					}, 0)
				}
				var e = new h,
					c = e.emit;
				e.emit = null;
				k.prototype.trace = function() {
					var c = f._toArray(arguments);
					this.then(function(b) {
						j(["resolved", b].concat(c))
					}, function(b) {
						j(["rejected", b].concat(c))
					}, function(b) {
						j(["progress", b].concat(c))
					});
					return this
				};
				k.prototype.traceRejected = function() {
					var c = f._toArray(arguments);
					this.otherwise(function(b) {
						j(["rejected", b].concat(c))
					});
					return this
				};
				return e
			})
		},
		"dojo/Evented": function() {
			define("dojo/Evented", ["./aspect", "./on"], function(f, k) {
				function h() {}
				var j = f.after;
				h.prototype = {
					on: function(e, c) {
						return k.parse(this,
							e, c,
							function(e, b) {
								return j(e, "on" + b, c, !0)
							})
					},
					emit: function(e, c) {
						var f = [this];
						f.push.apply(f, arguments);
						return k.emit.apply(k, f)
					}
				};
				return h
			})
		},
		"dojo/aspect": function() {
			define("dojo/aspect", [], function() {
				function f(b, g, a, c) {
					var d = b[g],
						e = "around" == g,
						f;
					if (e) {
						var i = a(function() {
							return d.advice(this, arguments)
						});
						f = {
							remove: function() {
								f.cancelled = !0
							},
							advice: function(a, b) {
								return f.cancelled ? d.advice(a, b) : i.apply(a, b)
							}
						}
					} else f = {
						remove: function() {
							var a = f.previous,
								d = f.next;
							if (!d && !a) delete b[g];
							else if (a ? a.next =
								d : b[g] = d, d) d.previous = a
						},
						id: j++,
						advice: a,
						receiveArguments: c
					};
					if (d && !e)
						if ("after" == g) {
							for (a = d; a;) d = a, a = a.next;
							d.next = f;
							f.previous = d
						} else {
							if ("before" == g) b[g] = f, f.next = d, d.previous = f
						}
					else b[g] = f;
					return f
				}

				function k(b) {
					return function(g, a, c, d) {
						var e = g[a],
							m;
						if (!e || e.target != g) {
							g[a] = m = function() {
								for (var a = j, b = arguments, d = m.before; d;) b = d.advice.apply(this, b) || b, d = d.next;
								if (m.around) var g = m.around.advice(this, b);
								for (d = m.after; d && d.id < a;) {
									if (d.receiveArguments) var c = d.advice.apply(this, b),
										g = c === h ? g : c;
									else g =
										d.advice.call(this, g, b);
									d = d.next
								}
								return g
							};
							if (e) m.around = {
								advice: function(a, b) {
									return e.apply(a, b)
								}
							};
							m.target = g
						}
						g = f(m || e, b, c, d);
						c = null;
						return g
					}
				}
				var h, j = 0,
					e = k("after"),
					c = k("before"),
					i = k("around");
				return {
					before: c,
					around: i,
					after: e
				}
			})
		},
		"dojo/on": function() {
			define(["./has!dom-addeventlistener?:./aspect", "./_base/kernel", "./has"], function(f, k, h) {
				function j(a, c, e, l, f) {
					if (l = c.match(/(.*):(.*)/)) return c = l[2], l = l[1], b.selector(l, c).call(f, a, e);
					h("touch") && (g.test(c) && (e = y(e)), !h("event-orientationchange") &&
						"orientationchange" == c && (c = "resize", a = window, e = y(e)));
					m && (e = m(e));
					if (a.addEventListener) {
						var i = c in d,
							j = i ? d[c] : c;
						a.addEventListener(j, e, i);
						return {
							remove: function() {
								a.removeEventListener(j, e, i)
							}
						}
					}
					if (q && a.attachEvent) return q(a, "on" + c, e);
					throw Error("Target must be an event emitter");
				}

				function e() {
					this.cancelable = !1
				}

				function c() {
					this.bubbles = !1
				}
				var i = window.ScriptEngineMajorVersion;
				h.add("jscript", i && i() + ScriptEngineMinorVersion() / 10);
				h.add("event-orientationchange", h("touch") && !h("android"));
				h.add("event-stopimmediatepropagation",
					window.Event && !!window.Event.prototype && !!window.Event.prototype.stopImmediatePropagation);
				var b = function(a, d, g, c) {
					return "function" == typeof a.on && "function" != typeof d ? a.on(d, g) : b.parse(a, d, g, j, c, this)
				};
				b.pausable = function(a, d, g, c) {
					var e, a = b(a, d, function() {
						if (!e) return g.apply(this, arguments)
					}, c);
					a.pause = function() {
						e = !0
					};
					a.resume = function() {
						e = !1
					};
					return a
				};
				b.once = function(a, d, g) {
					var c = b(a, d, function() {
						c.remove();
						return g.apply(this, arguments)
					});
					return c
				};
				b.parse = function(a, b, d, g, c, e) {
					if (b.call) return b.call(e,
						a, d);
					if (-1 < b.indexOf(",")) {
						for (var b = b.split(/\s*,\s*/), l = [], f = 0, m; m = b[f++];) l.push(g(a, m, d, c, e));
						l.remove = function() {
							for (var a = 0; a < l.length; a++) l[a].remove()
						};
						return l
					}
					return g(a, b, d, c, e)
				};
				var g = /^touch/;
				b.selector = function(a, d, g) {
					return function(c, e) {
						function l(b) {
							for (f = f && f.matches ? f : k.query; !f.matches(b, a, c);)
								if (b == c || !1 === g || !(b = b.parentNode) || 1 != b.nodeType) return;
							return b
						}
						var f = "function" == typeof a ? {
								matches: a
							} : this,
							m = d.bubble;
						return m ? b(c, m(l), e) : b(c, d, function(a) {
							var b = l(a.target);
							return b &&
								e.call(b, a)
						})
					}
				};
				var a = [].slice,
					l = b.emit = function(b, d, g) {
						var l = a.call(arguments, 2),
							f = "on" + d;
						if ("parentNode" in b) {
							var m = l[0] = {},
								i;
							for (i in g) m[i] = g[i];
							m.preventDefault = e;
							m.stopPropagation = c;
							m.target = b;
							m.type = d;
							g = m
						}
						do b[f] && b[f].apply(b, l); while (g && g.bubbles && (b = b.parentNode));
						return g && g.cancelable && g
					},
					d = {};
				if (!h("event-stopimmediatepropagation")) var p = function() {
						this.modified = this.immediatelyStopped = !0
					},
					m = function(a) {
						return function(b) {
							if (!b.immediatelyStopped) return b.stopImmediatePropagation = p, a.apply(this,
								arguments)
						}
					};
				if (h("dom-addeventlistener")) {
					d = {
						focusin: "focus",
						focusout: "blur"
					};
					if (h("opera")) d.keydown = "keypress";
					b.emit = function(a, d, g) {
						if (a.dispatchEvent && document.createEvent) {
							var c = a.ownerDocument.createEvent("HTMLEvents");
							c.initEvent(d, !!g.bubbles, !!g.cancelable);
							for (var e in g) e in c || (c[e] = g[e]);
							return a.dispatchEvent(c) && c
						}
						return l.apply(b, arguments)
					}
				} else {
					b._fixEvent = function(a, b) {
						if (!a) a = (b && (b.ownerDocument || b.document || b).parentWindow || window).event;
						if (!a) return a;
						n && a.type == n.type && (a =
							n);
						if (!a.target) {
							a.target = a.srcElement;
							a.currentTarget = b || a.srcElement;
							if ("mouseover" == a.type) a.relatedTarget = a.fromElement;
							if ("mouseout" == a.type) a.relatedTarget = a.toElement;
							if (!a.stopPropagation) a.stopPropagation = v, a.preventDefault = s;
							switch (a.type) {
								case "keypress":
									var d = "charCode" in a ? a.charCode : a.keyCode;
									10 == d ? (d = 0, a.keyCode = 13) : 13 == d || 27 == d ? d = 0 : 3 == d && (d = 99);
									a.charCode = d;
									d = a;
									d.keyChar = d.charCode ? String.fromCharCode(d.charCode) : "";
									d.charOrCode = d.keyChar || d.keyCode
							}
						}
						return a
					};
					var n, o = function(a) {
						this.handle =
							a
					};
					o.prototype.remove = function() {
						delete _dojoIEListeners_[this.handle]
					};
					var r = function(a) {
							return function(d) {
								var d = b._fixEvent(d, this),
									g = a.call(this, d);
								d.modified && (n || setTimeout(function() {
									n = null
								}), n = d);
								return g
							}
						},
						q = function(a, b, d) {
							d = r(d);
							if (((a.ownerDocument ? a.ownerDocument.parentWindow : a.parentWindow || a.window || window) != top || 5.8 > h("jscript")) && !h("config-_allow_leaks")) {
								"undefined" == typeof _dojoIEListeners_ && (_dojoIEListeners_ = []);
								var g = a[b];
								if (!g || !g.listeners) {
									var c = g,
										g = Function("event", "var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
									g.listeners = [];
									a[b] = g;
									g.global = this;
									c && g.listeners.push(_dojoIEListeners_.push(c) - 1)
								}
								g.listeners.push(a = g.global._dojoIEListeners_.push(d) - 1);
								return new o(a)
							}
							return f.after(a, b, d, !0)
						},
						v = function() {
							this.cancelBubble = !0
						},
						s = b._preventDefault = function() {
							this.bubbledKeyCode = this.keyCode;
							if (this.ctrlKey) try {
								this.keyCode = 0
							} catch (a) {}
							this.defaultPrevented = !0;
							this.returnValue = !1
						}
				}
				if (h("touch")) var t = function() {},
					u = window.orientation,
					y = function(a) {
						return function(b) {
							var d = b.corrected;
							if (!d) {
								var g = b.type;
								try {
									delete b.type
								} catch (c) {}
								b.type ?
									(t.prototype = b, d = new t, d.preventDefault = function() {
										b.preventDefault()
									}, d.stopPropagation = function() {
										b.stopPropagation()
									}) : (d = b, d.type = g);
								b.corrected = d;
								if ("resize" == g) {
									if (u == window.orientation) return null;
									u = window.orientation;
									d.type = "orientationchange";
									return a.call(this, d)
								}
								if (!("rotation" in d)) d.rotation = 0, d.scale = 1;
								var g = d.changedTouches[0],
									e;
								for (e in g) delete d[e], d[e] = g[e]
							}
							return a.call(this, d)
						}
					};
				return b
			})
		},
		"dojo/when": function() {
			define(["./Deferred", "./promise/Promise"], function(f, k) {
				return function(h,
					j, e, c) {
					var i = h && "function" === typeof h.then,
						b = i && h instanceof k;
					if (i) {
						if (!b) i = new f(h.cancel), h.then(i.resolve, i.reject, i.progress), h = i.promise
					} else return j ? j(h) : (new f).resolve(h);
					return j || e || c ? h.then(j, e, c) : h
				}
			})
		},
		"dojo/_base/json": function() {
			define(["./kernel", "../json"], function(f, k) {
				f.fromJson = function(f) {
					return eval("(" + f + ")")
				};
				f._escapeString = k.stringify;
				f.toJsonIndentStr = "\t";
				f.toJson = function(h, j) {
					return k.stringify(h, function(e, c) {
							if (c) {
								var f = c.__json__ || c.json;
								if ("function" == typeof f) return f.call(c)
							}
							return c
						},
						j && f.toJsonIndentStr)
				};
				return f
			})
		},
		"dojo/request/watch": function() {
			define("./util,../errors/RequestTimeoutError,../errors/CancelError,../_base/array,../_base/window,../has!host-browser?dom-addeventlistener?:../on:".split(","), function(f, k, h, j, e, c) {
				function i() {
					for (var c = +new Date, d = 0, e; d < a.length && (e = a[d]); d++) {
						var f = e.response,
							i = f.options;
						if (e.isCanceled && e.isCanceled() || e.isValid && !e.isValid(f)) a.splice(d--, 1), b._onAction && b._onAction();
						else if (e.isReady && e.isReady(f)) a.splice(d--, 1), e.handleResponse(f),
							b._onAction && b._onAction();
						else if (e.startTime && e.startTime + (i.timeout || 0) < c) a.splice(d--, 1), e.cancel(new k("Timeout exceeded", f)), b._onAction && b._onAction()
					}
					b._onInFlight && b._onInFlight(e);
					a.length || (clearInterval(g), g = null)
				}

				function b(b) {
					if (b.response.options.timeout) b.startTime = +new Date;
					b.isFulfilled() || (a.push(b), g || (g = setInterval(i, 50)), b.response.options.sync && i())
				}
				var g = null,
					a = [];
				b.cancelAll = function() {
					try {
						j.forEach(a, function(a) {
							try {
								a.cancel(new h("All requests canceled."))
							} catch (b) {}
						})
					} catch (b) {}
				};
				e && c && e.doc.attachEvent && c(e.global, "unload", function() {
					b.cancelAll()
				});
				return b
			})
		},
		"dojo/request/util": function() {
			define("exports,../errors/RequestError,../errors/CancelError,../Deferred,../io-query,../_base/array,../_base/lang".split(","), function(f, k, h, j, e, c, i) {
				function b(a) {
					return g(a)
				}
				f.deepCopy = function(a, b) {
					for (var d in b) {
						var g = a[d],
							c = b[d];
						g !== c && (g && "object" === typeof g && c && "object" === typeof c ? f.deepCopy(g, c) : a[d] = c)
					}
					return a
				};
				f.deepCreate = function(a, b) {
					var b = b || {},
						d = i.delegate(a),
						g, c;
					for (g in a)(c =
						a[g]) && "object" === typeof c && (d[g] = f.deepCreate(c, b[g]));
					return f.deepCopy(d, b)
				};
				var g = Object.freeze || function(a) {
					return a
				};
				f.deferred = function(a, c, d, e, m, n) {
					var o = new j(function(b) {
						c && c(o, a);
						return !b || !(b instanceof k) && !(b instanceof h) ? new h("Request canceled", a) : b
					});
					o.response = a;
					o.isValid = d;
					o.isReady = e;
					o.handleResponse = m;
					d = o.then(b).otherwise(function(b) {
						b.response = a;
						throw b;
					});
					f.notify && d.then(i.hitch(f.notify, "emit", "load"), i.hitch(f.notify, "emit", "error"));
					e = d.then(function(a) {
						return a.data ||
							a.text
					});
					d = g(i.delegate(e, {
						response: d
					}));
					n && o.then(function(a) {
						n.call(o, a)
					}, function(b) {
						n.call(o, a, b)
					});
					o.promise = d;
					o.then = d.then;
					return o
				};
				f.addCommonMethods = function(a, b) {
					c.forEach(b || ["GET", "POST", "PUT", "DELETE"], function(b) {
						a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function(g, c) {
							c = i.delegate(c || {});
							c.method = b;
							return a(g, c)
						}
					})
				};
				f.parseArgs = function(a, b, d) {
					var g = b.data,
						c = b.query;
					if (g && !d && "object" === typeof g) b.data = e.objectToQuery(g);
					c ? ("object" === typeof c && (c = e.objectToQuery(c)), b.preventCache &&
						(c += (c ? "&" : "") + "request.preventCache=" + +new Date)) : b.preventCache && (c = "request.preventCache=" + +new Date);
					a && c && (a += (~a.indexOf("?") ? "&" : "?") + c);
					return {
						url: a,
						options: b,
						getHeader: function() {
							return null
						}
					}
				};
				f.checkStatus = function(a) {
					a = a || 0;
					return 200 <= a && 300 > a || 304 === a || 1223 === a || !a
				}
			})
		},
		"dojo/errors/RequestError": function() {
			define(["./create"], function(f) {
				return f("RequestError", function(f, h) {
					this.response = h
				})
			})
		},
		"dojo/errors/RequestTimeoutError": function() {
			define(["./create", "./RequestError"], function(f,
				k) {
				return f("RequestTimeoutError", null, k, {
					dojoType: "timeout"
				})
			})
		},
		"dojo/request/xhr": function() {
			define(["../errors/RequestError", "./watch", "./handlers", "./util", "../has"], function(f, k, h, j, e) {
				function c(a, b) {
					var d = a.xhr;
					a.status = a.xhr.status;
					a.text = d.responseText;
					if ("xml" === a.options.handleAs) a.data = d.responseXML;
					if (!b) try {
						h(a)
					} catch (g) {
						b = g
					}
					b ? this.reject(b) : j.checkStatus(d.status) ? this.resolve(a) : (b = new f("Unable to load " + a.url + " status: " + d.status, a), this.reject(b))
				}

				function i(m, h, n) {
					var v = j.parseArgs(m,
							j.deepCreate(p, h), e("native-formdata") && h && h.data && h.data instanceof FormData),
						m = v.url,
						h = v.options,
						s, t = j.deferred(v, l, b, g, c, function() {
							s && s()
						}),
						u = v.xhr = i._create();
					if (!u) return t.cancel(new f("XHR was not created")), n ? t : t.promise;
					v.getHeader = function(a) {
						return this.xhr.getResponseHeader(a)
					};
					a && (s = a(u, t, v));
					var y = h.data,
						z = !h.sync,
						I = h.method;
					try {
						u.open(I, m, z, h.user || d, h.password || d);
						if (h.withCredentials) u.withCredentials = h.withCredentials;
						var J = h.headers,
							N;
						if (J)
							for (var E in J) "content-type" === E.toLowerCase() ?
								N = J[E] : J[E] && u.setRequestHeader(E, J[E]);
						N && !1 !== N && u.setRequestHeader("Content-Type", N);
						(!J || !("X-Requested-With" in J)) && u.setRequestHeader("X-Requested-With", "XMLHttpRequest");
						j.notify && j.notify.emit("send", v, t.promise.cancel);
						u.send(y)
					} catch (S) {
						t.reject(S)
					}
					k(t);
					u = null;
					return n ? t : t.promise
				}
				e.add("native-xhr", function() {
					return "undefined" !== typeof XMLHttpRequest
				});
				e.add("dojo-force-activex-xhr", function() {
					return e("activex") && !document.addEventListener && "file:" === window.location.protocol
				});
				e.add("native-xhr2",
					function() {
						if (e("native-xhr")) {
							var a = new XMLHttpRequest;
							return "undefined" !== typeof a.addEventListener && ("undefined" === typeof opera || "undefined" !== typeof a.upload)
						}
					});
				e.add("native-formdata", function() {
					return "function" === typeof FormData
				});
				var b, g, a, l;
				e("native-xhr2") ? (b = function() {
					return !this.isFulfilled()
				}, l = function(a, b) {
					b.xhr.abort()
				}, a = function(a, b, d) {
					function g() {
						b.handleResponse(d)
					}

					function c(a) {
						a = new f("Unable to load " + d.url + " status: " + a.target.status, d);
						b.handleResponse(d, a)
					}

					function e(a) {
						if (a.lengthComputable) d.loaded =
							a.loaded, d.total = a.total, b.progress(d)
					}
					a.addEventListener("load", g, !1);
					a.addEventListener("error", c, !1);
					a.addEventListener("progress", e, !1);
					return function() {
						a.removeEventListener("load", g, !1);
						a.removeEventListener("error", c, !1);
						a.removeEventListener("progress", e, !1)
					}
				}) : (b = function(a) {
					return a.xhr.readyState
				}, g = function(a) {
					return 4 === a.xhr.readyState
				}, l = function(a, b) {
					var d = b.xhr,
						g = typeof d.abort;
					("function" === g || "object" === g || "unknown" === g) && d.abort()
				});
				var d, p = {
					data: null,
					query: null,
					sync: !1,
					method: "GET",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					}
				};
				i._create = function() {
					throw Error("XMLHTTP not available");
				};
				if (e("native-xhr") && !e("dojo-force-activex-xhr")) i._create = function() {
					return new XMLHttpRequest
				};
				else if (e("activex")) try {
					new ActiveXObject("Msxml2.XMLHTTP"), i._create = function() {
						return new ActiveXObject("Msxml2.XMLHTTP")
					}
				} catch (m) {
					try {
						new ActiveXObject("Microsoft.XMLHTTP"), i._create = function() {
							return new ActiveXObject("Microsoft.XMLHTTP")
						}
					} catch (n) {}
				}
				j.addCommonMethods(i);
				return i
			})
		},
		"dojo/request/handlers": function() {
			define(["../json", "../_base/kernel", "../_base/array", "../has"], function(f, k, h, j) {
				function e(g) {
					var a = b[g.options.handleAs];
					g.data = a ? a(g) : g.data || g.text;
					return g
				}
				j.add("activex", "undefined" !== typeof ActiveXObject);
				var c;
				if (j("activex")) {
					var i = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "MSXML.DOMDocument"];
					c = function(b) {
						var a = b.data;
						if (!a || !a.documentElement) {
							var c = b.text;
							h.some(i, function(b) {
								try {
									var g = new ActiveXObject(b);
									g.async = !1;
									g.loadXML(c);
									a = g
								} catch (e) {
									return !1
								}
								return !0
							})
						}
						return a
					}
				}
				var b = {
					javascript: function(b) {
						return k.eval(b.text || "")
					},
					json: function(b) {
						return f.parse(b.text || null)
					},
					xml: c
				};
				e.register = function(g, a) {
					b[g] = a
				};
				return e
			})
		},
		"dojo/main": function() {
			define("./_base/kernel,./has,require,./sniff,./_base/lang,./_base/array,./_base/config,./ready,./_base/declare,./_base/connect,./_base/Deferred,./_base/json,./_base/Color,./has!dojo-firebug?./_firebug/firebug,./_base/browser,require".split(","), function(f, k, h, j, e,
				c, i, b) {
				i.isDebug && h(["./_firebug/firebug"]);
				var g = i.require;
				g && (g = c.map(e.isArray(g) ? g : [g], function(a) {
					return a.replace(/\./g, "/")
				}), f.isAsync ? h(g) : b(1, function() {
					h(g)
				}));
				return f
			})
		},
		"dojo/ready": function() {
			define(["./_base/kernel", "./has", "require", "./domReady", "./_base/lang"], function(f, k, h, j, e) {
				var c = 0,
					i, b = [],
					g = 0,
					a = function() {
						if (c && !g && b.length) {
							g = 1;
							var d = b.shift();
							try {
								d()
							} finally {
								g = 0
							}
							g = 0;
							b.length && i(a)
						}
					};
				h.on("idle", a);
				i = function() {
					h.idle() && a()
				};
				var k = f.ready = f.addOnLoad = function(a, g, c) {
						var l =
							e._toArray(arguments);
						"number" != typeof a ? (c = g, g = a, a = 1E3) : l.shift();
						c = c ? e.hitch.apply(f, l) : function() {
							g()
						};
						c.priority = a;
						for (l = 0; l < b.length && a >= b[l].priority; l++);
						b.splice(l, 0, c);
						i()
					},
					l = f.config.addOnLoad;
				if (l) k[e.isArray(l) ? "apply" : "call"](f, l);
				j(function() {
					c = 1;
					f._postLoad = f.config.afterOnLoad = !0;
					b.length && i(a)
				});
				return k
			})
		},
		"dojo/domReady": function() {
			define(["./has"], function(f) {
				function k(a) {
					i ? a(j) : b.push(a)
				}
				var h = this,
					j = document,
					e = {
						loaded: 1,
						complete: 1
					},
					c = "string" != typeof j.readyState,
					i = !!e[j.readyState];
				if (c) j.readyState = "loading";
				if (!i) {
					var b = [],
						g = [],
						a = function(a) {
							a = a || h.event;
							if (!(i || "readystatechange" == a.type && !e[j.readyState])) {
								i = 1;
								if (c) j.readyState = "complete";
								for (; b.length;) b.shift()(j)
							}
						},
						l = function(d, g) {
							d.addEventListener(g, a, !1);
							b.push(function() {
								d.removeEventListener(g, a, !1)
							})
						};
					if (!f("dom-addeventlistener")) {
						var l = function(d, g) {
								g = "on" + g;
								d.attachEvent(g, a);
								b.push(function() {
									d.detachEvent(g, a)
								})
							},
							d = j.createElement("div");
						try {
							d.doScroll && null === h.frameElement && g.push(function() {
								try {
									return d.doScroll("left"),
										1
								} catch (a) {}
							})
						} catch (p) {}
					}
					l(j, "DOMContentLoaded");
					l(h, "load");
					"onreadystatechange" in j ? l(j, "readystatechange") : c || g.push(function() {
						return e[j.readyState]
					});
					if (g.length) {
						var m = function() {
							if (!i) {
								for (var b = g.length; b--;)
									if (g[b]()) {
										a("poller");
										return
									}
								setTimeout(m, 30)
							}
						};
						m()
					}
				}
				k.load = function(a, b, d) {
					k(d)
				};
				return k
			})
		},
		"dojo/_base/declare": function() {
			define(["./kernel", "../has", "./lang"], function(f, k, h) {
				function j(a, b) {
					throw Error("declare" + (b ? " " + b : "") + ": " + a);
				}

				function e(a, b, d) {
					var g, c, e, l, f, m, i, h = this._inherited =
						this._inherited || {};
					"string" == typeof a && (g = a, a = b, b = d);
					d = 0;
					l = a.callee;
					(g = g || l.nom) || j("can't deduce a name to call inherited()", this.declaredClass);
					f = this.constructor._meta;
					e = f.bases;
					i = h.p;
					if (g != z) {
						if (h.c !== l && (i = 0, m = e[0], f = m._meta, f.hidden[g] !== l)) {
							(c = f.chains) && "string" == typeof c[g] && j("calling chained method with inherited: " + g, this.declaredClass);
							do
								if (f = m._meta, c = m.prototype, f && (c[g] === l && c.hasOwnProperty(g) || f.hidden[g] === l)) break;
							while (m = e[++i]);
							i = m ? i : -1
						}
						if (m = e[++i])
							if (c = m.prototype, m._meta &&
								c.hasOwnProperty(g)) d = c[g];
							else {
								l = s[g];
								do
									if (c = m.prototype, (d = c[g]) && (m._meta ? c.hasOwnProperty(g) : d !== l)) break;
								while (m = e[++i])
							}
						d = m && d || s[g]
					} else {
						if (h.c !== l && (i = 0, (f = e[0]._meta) && f.ctor !== l)) {
							c = f.chains;
							for ((!c || "manual" !== c.constructor) && j("calling chained constructor with inherited", this.declaredClass);
								(m = e[++i]) && !((f = m._meta) && f.ctor === l););
							i = m ? i : -1
						}
						for (;
							(m = e[++i]) && !(d = (f = m._meta) ? f.ctor : m););
						d = m && d
					}
					h.c = d;
					h.p = i;
					if (d) return !0 === b ? d : d.apply(this, b || a)
				}

				function c(a, b) {
					return "string" == typeof a ? this.__inherited(a,
						b, !0) : this.__inherited(a, !0)
				}

				function i(a, b, d) {
					var g = this.getInherited(a, b);
					if (g) return g.apply(this, d || b || a)
				}

				function b(a) {
					for (var b = this.constructor._meta.bases, d = 0, g = b.length; d < g; ++d)
						if (b[d] === a) return !0;
					return this instanceof a
				}

				function g(a, b) {
					for (var d in b) d != z && b.hasOwnProperty(d) && (a[d] = b[d]);
					if (k("bug-for-in-skips-shadowed"))
						for (var g = h._extraNames, c = g.length; c;) d = g[--c], d != z && b.hasOwnProperty(d) && (a[d] = b[d])
				}

				function a(a) {
					q.safeMixin(this.prototype, a);
					return this
				}

				function l(a) {
					return q([this].concat(a))
				}

				function d(a, b) {
					return function() {
						var w;
						var d = arguments,
							g = d,
							c = d[0],
							e, l;
						l = a.length;
						var f;
						if (!(this instanceof d.callee)) return r(d);
						if (b && (c && c.preamble || this.preamble)) {
							f = Array(a.length);
							f[0] = d;
							for (e = 0;;) {
								if (c = d[0])(c = c.preamble) && (d = c.apply(this, d) || d);
								c = a[e].prototype;
								(c = c.hasOwnProperty("preamble") && c.preamble) && (d = c.apply(this, d) || d);
								if (++e == l) break;
								f[e] = d
							}
						}
						for (e = l - 1; 0 <= e; --e) c = a[e], (w = (l = c._meta) ? l.ctor : c, c = w) && c.apply(this, f ? f[e] : d);
						(c = this.postscript) && c.apply(this, g)
					}
				}

				function p(a, b) {
					return function() {
						var d =
							arguments,
							g = d,
							c = d[0];
						if (!(this instanceof d.callee)) return r(d);
						if (b) {
							if (c)(c = c.preamble) && (g = c.apply(this, g) || g);
							(c = this.preamble) && c.apply(this, g)
						}
						a && a.apply(this, d);
						(c = this.postscript) && c.apply(this, d)
					}
				}

				function m(a) {
					return function() {
						var w;
						var b = arguments,
							d = 0,
							g, c;
						if (!(this instanceof b.callee)) return r(b);
						for (; g = a[d]; ++d)
							if (w = (c = g._meta) ? c.ctor : g, g = w) {
								g.apply(this, b);
								break
							}(g = this.postscript) && g.apply(this, b)
					}
				}

				function n(a, b, d) {
					return function() {
						var g, c, e = 0,
							l = 1;
						d && (e = b.length - 1, l = -1);
						for (; g = b[e]; e +=
							l) c = g._meta, (g = (c ? c.hidden : g.prototype)[a]) && g.apply(this, arguments)
					}
				}

				function o(a) {
					u.prototype = a.prototype;
					a = new u;
					u.prototype = null;
					return a
				}

				function r(a) {
					var b = a.callee,
						d = o(b);
					b.apply(d, a);
					return d
				}

				function q(f, i, k) {
					"string" != typeof f && (k = i, i = f, f = "");
					var k = k || {},
						r, u, B, A, w, x, K, H = 1,
						C = i;
					if ("[object Array]" == t.call(i)) {
						H = f;
						B = [];
						A = [{
							cls: 0,
							refs: []
						}];
						x = {};
						for (var F = 1, O = i.length, D = 0, L, T, G, M; D < O; ++D) {
							(L = i[D]) ? "[object Function]" != t.call(L) && j("mixin #" + D + " is not a callable constructor.", H): j("mixin #" +
								D + " is unknown. Did you use dojo.require to pull it in?", H);
							T = L._meta ? L._meta.bases : [L];
							G = 0;
							for (L = T.length - 1; 0 <= L; --L) {
								M = T[L].prototype;
								if (!M.hasOwnProperty("declaredClass")) M.declaredClass = "uniqName_" + y++;
								M = M.declaredClass;
								x.hasOwnProperty(M) || (x[M] = {
									count: 0,
									refs: [],
									cls: T[L]
								}, ++F);
								M = x[M];
								G && G !== M && (M.refs.push(G), ++G.count);
								G = M
							}++G.count;
							A[0].refs.push(G)
						}
						for (; A.length;) {
							G = A.pop();
							B.push(G.cls);
							for (--F; u = G.refs, 1 == u.length;) {
								G = u[0];
								if (!G || --G.count) {
									G = 0;
									break
								}
								B.push(G.cls);
								--F
							}
							if (G)
								for (D = 0, O = u.length; D <
									O; ++D) G = u[D], --G.count || A.push(G)
						}
						F && j("can't build consistent linearization", H);
						L = i[0];
						B[0] = L ? L._meta && L === B[B.length - L._meta.bases.length] ? L._meta.bases.length : 1 : 0;
						x = B;
						B = x[0];
						H = x.length - B;
						i = x[H]
					} else x = [0], i ? "[object Function]" == t.call(i) ? (B = i._meta, x = x.concat(B ? B.bases : i)) : j("base class is not a callable constructor.", f) : null !== i && j("unknown base class. Did you use dojo.require to pull it in?", f);
					if (i)
						for (u = H - 1;; --u) {
							r = o(i);
							if (!u) break;
							B = x[u];
							(B._meta ? g : v)(r, B.prototype);
							A = new Function;
							A.superclass =
								i;
							A.prototype = r;
							i = r.constructor = A
						} else r = {};
					q.safeMixin(r, k);
					B = k.constructor;
					if (B !== s.constructor) B.nom = z, r.constructor = B;
					for (u = H - 1; u; --u)(B = x[u]._meta) && B.chains && (K = v(K || {}, B.chains));
					r["-chains-"] && (K = v(K || {}, r["-chains-"]));
					B = !K || !K.hasOwnProperty(z);
					x[0] = A = K && "manual" === K.constructor ? m(x) : 1 == x.length ? p(k.constructor, B) : d(x, B);
					A._meta = {
						bases: x,
						hidden: k,
						chains: K,
						parents: C,
						ctor: k.constructor
					};
					A.superclass = i && i.prototype;
					A.extend = a;
					A.createSubclass = l;
					A.prototype = r;
					r.constructor = A;
					r.getInherited =
						c;
					r.isInstanceOf = b;
					r.inherited = I;
					r.__inherited = e;
					if (f) r.declaredClass = f, h.setObject(f, A);
					if (K)
						for (w in K)
							if (r[w] && "string" == typeof K[w] && w != z) B = r[w] = n(w, x, "after" === K[w]), B.nom = w;
					return A
				}
				var v = h.mixin,
					s = Object.prototype,
					t = s.toString,
					u = new Function,
					y = 0,
					z = "constructor",
					I = f.config.isDebug ? i : e;
				f.safeMixin = q.safeMixin = function(a, b) {
					var d, g;
					for (d in b)
						if (g = b[d], (g !== s[d] || !(d in s)) && d != z) {
							if ("[object Function]" == t.call(g)) g.nom = d;
							a[d] = g
						}
					if (k("bug-for-in-skips-shadowed"))
						for (var c = h._extraNames, e = c.length; e;)
							if (d =
								c[--e], g = b[d], (g !== s[d] || !(d in s)) && d != z) {
								if ("[object Function]" == t.call(g)) g.nom = d;
								a[d] = g
							}
					return a
				};
				return f.declare = q
			})
		},
		"dojo/_base/connect": function() {
			define("./kernel,../on,../topic,../aspect,./event,../mouse,./sniff,./lang,../keys".split(","), function(f, k, h, j, e, c, i, b) {
				function g(a, d, g, e, l) {
					e = b.hitch(g, e);
					if (!a || !a.addEventListener && !a.attachEvent) return j.after(a || f.global, d, e, !0);
					"string" == typeof d && "on" == d.substring(0, 2) && (d = d.substring(2));
					if (!a) a = f.global;
					if (!l) switch (d) {
						case "keypress":
							d =
								m;
							break;
						case "mouseenter":
							d = c.enter;
							break;
						case "mouseleave":
							d = c.leave
					}
					return k(a, d, e, l)
				}

				function a(a) {
					a.keyChar = a.charCode ? String.fromCharCode(a.charCode) : "";
					a.charOrCode = a.keyChar || a.keyCode
				}
				i.add("events-keypress-typed", function() {
					var a = {
						charCode: 0
					};
					try {
						a = document.createEvent("KeyboardEvent"), (a.initKeyboardEvent || a.initKeyEvent).call(a, "keypress", !0, !0, null, !1, !1, !1, !1, 9, 3)
					} catch (b) {}
					return 0 == a.charCode && !i("opera")
				});
				var l = {
						106: 42,
						111: 47,
						186: 59,
						187: 43,
						188: 44,
						189: 45,
						190: 46,
						191: 47,
						192: 96,
						219: 91,
						220: 92,
						221: 93,
						222: 39,
						229: 113
					},
					d = i("mac") ? "metaKey" : "ctrlKey",
					p = function(d, g) {
						var c = b.mixin({}, d, g);
						a(c);
						c.preventDefault = function() {
							d.preventDefault()
						};
						c.stopPropagation = function() {
							d.stopPropagation()
						};
						return c
					},
					m;
				m = i("events-keypress-typed") ? function(a, b) {
					var d = k(a, "keydown", function(a) {
							var d = a.keyCode,
								g = 13 != d && 32 != d && (27 != d || !i("ie")) && (48 > d || 90 < d) && (96 > d || 111 < d) && (186 > d || 192 < d) && (219 > d || 222 < d) && 229 != d;
							if (g || a.ctrlKey) {
								g = g ? 0 : d;
								if (a.ctrlKey) {
									if (3 == d || 13 == d) return b.call(a.currentTarget, a);
									g = 95 < g &&
										106 > g ? g - 48 : !a.shiftKey && 65 <= g && 90 >= g ? g + 32 : l[g] || g
								}
								d = p(a, {
									type: "keypress",
									faux: !0,
									charCode: g
								});
								b.call(a.currentTarget, d);
								if (i("ie")) try {
									a.keyCode = d.keyCode
								} catch (c) {}
							}
						}),
						g = k(a, "keypress", function(a) {
							var d = a.charCode,
								a = p(a, {
									charCode: 32 <= d ? d : 0,
									faux: !0
								});
							return b.call(this, a)
						});
					return {
						remove: function() {
							d.remove();
							g.remove()
						}
					}
				} : i("opera") ? function(a, b) {
					return k(a, "keypress", function(a) {
						var d = a.which;
						3 == d && (d = 99);
						d = 32 > d && !a.shiftKey ? 0 : d;
						a.ctrlKey && !a.shiftKey && 65 <= d && 90 >= d && (d += 32);
						return b.call(this, p(a, {
							charCode: d
						}))
					})
				} : function(b, d) {
					return k(b, "keypress", function(b) {
						a(b);
						return d.call(this, b)
					})
				};
				var n = {
					_keypress: m,
					connect: function(a, b, d, c, e) {
						var l = arguments,
							f = [],
							i = 0;
						f.push("string" == typeof l[0] ? null : l[i++], l[i++]);
						var m = l[i + 1];
						f.push("string" == typeof m || "function" == typeof m ? l[i++] : null, l[i++]);
						for (m = l.length; i < m; i++) f.push(l[i]);
						return g.apply(this, f)
					},
					disconnect: function(a) {
						a && a.remove()
					},
					subscribe: function(a, d, g) {
						return h.subscribe(a, b.hitch(d, g))
					},
					publish: function(a, b) {
						return h.publish.apply(h, [a].concat(b))
					},
					connectPublisher: function(a, b, d) {
						var g = function() {
							n.publish(a, arguments)
						};
						return d ? n.connect(b, d, g) : n.connect(b, g)
					},
					isCopyKey: function(a) {
						return a[d]
					}
				};
				n.unsubscribe = n.disconnect;
				b.mixin(f, n);
				return n
			})
		},
		"dojo/topic": function() {
			define(["./Evented"], function(f) {
				var k = new f;
				return {
					publish: function(f, j) {
						return k.emit.apply(k, arguments)
					},
					subscribe: function(f, j) {
						return k.on.apply(k, arguments)
					}
				}
			})
		},
		"dojo/_base/event": function() {
			define(["./kernel", "../on", "../has", "../dom-geometry"], function(f,
				k, h, j) {
				if (k._fixEvent) {
					var e = k._fixEvent;
					k._fixEvent = function(c, b) {
						(c = e(c, b)) && j.normalizeEvent(c);
						return c
					}
				}
				var c = {
					fix: function(c, b) {
						return k._fixEvent ? k._fixEvent(c, b) : c
					},
					stop: function(c) {
						h("dom-addeventlistener") || c && c.preventDefault ? (c.preventDefault(), c.stopPropagation()) : (c = c || window.event, c.cancelBubble = !0, k._preventDefault.call(c))
					}
				};
				f.fixEvent = c.fix;
				f.stopEvent = c.stop;
				return c
			})
		},
		"dojo/dom-geometry": function() {
			define(["./sniff", "./_base/window", "./dom", "./dom-style"], function(f, k, h, j) {
				function e(a,
					b, d, g, c, e) {
					e = e || "px";
					a = a.style;
					if (!isNaN(b)) a.left = b + e;
					if (!isNaN(d)) a.top = d + e;
					if (0 <= g) a.width = g + e;
					if (0 <= c) a.height = c + e
				}

				function c(a) {
					return "button" == a.tagName.toLowerCase() || "input" == a.tagName.toLowerCase() && "button" == (a.getAttribute("type") || "").toLowerCase()
				}

				function i(a) {
					return "border-box" == b.boxModel || "table" == a.tagName.toLowerCase() || c(a)
				}
				var b = {
					boxModel: "content-box"
				};
				if (f("ie")) b.boxModel = "BackCompat" == document.compatMode ? "border-box" : "content-box";
				b.getPadExtents = function(a, b) {
					var a = h.byId(a),
						d = b || j.getComputedStyle(a),
						g = j.toPixelValue,
						c = g(a, d.paddingLeft),
						e = g(a, d.paddingTop),
						f = g(a, d.paddingRight),
						d = g(a, d.paddingBottom);
					return {
						l: c,
						t: e,
						r: f,
						b: d,
						w: c + f,
						h: e + d
					}
				};
				b.getBorderExtents = function(a, b) {
					var a = h.byId(a),
						d = j.toPixelValue,
						g = b || j.getComputedStyle(a),
						c = "none" != g.borderLeftStyle ? d(a, g.borderLeftWidth) : 0,
						e = "none" != g.borderTopStyle ? d(a, g.borderTopWidth) : 0,
						f = "none" != g.borderRightStyle ? d(a, g.borderRightWidth) : 0,
						d = "none" != g.borderBottomStyle ? d(a, g.borderBottomWidth) : 0;
					return {
						l: c,
						t: e,
						r: f,
						b: d,
						w: c +
							f,
						h: e + d
					}
				};
				b.getPadBorderExtents = function(a, g) {
					var a = h.byId(a),
						d = g || j.getComputedStyle(a),
						c = b.getPadExtents(a, d),
						d = b.getBorderExtents(a, d);
					return {
						l: c.l + d.l,
						t: c.t + d.t,
						r: c.r + d.r,
						b: c.b + d.b,
						w: c.w + d.w,
						h: c.h + d.h
					}
				};
				b.getMarginExtents = function(a, b) {
					var a = h.byId(a),
						d = b || j.getComputedStyle(a),
						g = j.toPixelValue,
						c = g(a, d.marginLeft),
						e = g(a, d.marginTop),
						f = g(a, d.marginRight),
						d = g(a, d.marginBottom);
					return {
						l: c,
						t: e,
						r: f,
						b: d,
						w: c + f,
						h: e + d
					}
				};
				b.getMarginBox = function(a, g) {
					var a = h.byId(a),
						d = g || j.getComputedStyle(a),
						c = b.getMarginExtents(a,
							d),
						e = a.offsetLeft - c.l,
						i = a.offsetTop - c.t,
						o = a.parentNode,
						k = j.toPixelValue;
					if (f("mozilla")) {
						var q = parseFloat(d.left),
							d = parseFloat(d.top);
						!isNaN(q) && !isNaN(d) ? (e = q, i = d) : o && o.style && (o = j.getComputedStyle(o), "visible" != o.overflow && (e += "none" != o.borderLeftStyle ? k(a, o.borderLeftWidth) : 0, i += "none" != o.borderTopStyle ? k(a, o.borderTopWidth) : 0))
					} else if ((f("opera") || 8 == f("ie") && !f("quirks")) && o) o = j.getComputedStyle(o), e -= "none" != o.borderLeftStyle ? k(a, o.borderLeftWidth) : 0, i -= "none" != o.borderTopStyle ? k(a, o.borderTopWidth) :
						0;
					return {
						l: e,
						t: i,
						w: a.offsetWidth + c.w,
						h: a.offsetHeight + c.h
					}
				};
				b.getContentBox = function(a, g) {
					var a = h.byId(a),
						d = g || j.getComputedStyle(a),
						c = a.clientWidth,
						e = b.getPadExtents(a, d),
						i = b.getBorderExtents(a, d);
					c ? (d = a.clientHeight, i.w = i.h = 0) : (c = a.offsetWidth, d = a.offsetHeight);
					f("opera") && (e.l += i.l, e.t += i.t);
					return {
						l: e.l,
						t: e.t,
						w: c - e.w - i.w,
						h: d - e.h - i.h
					}
				};
				b.setContentSize = function(a, g, d) {
					var a = h.byId(a),
						c = g.w,
						g = g.h;
					i(a) && (d = b.getPadBorderExtents(a, d), 0 <= c && (c += d.w), 0 <= g && (g += d.h));
					e(a, NaN, NaN, c, g)
				};
				var g = {
					l: 0,
					t: 0,
					w: 0,
					h: 0
				};
				b.setMarginBox = function(a, l, d) {
					var a = h.byId(a),
						p = d || j.getComputedStyle(a),
						d = l.w,
						m = l.h,
						n = i(a) ? g : b.getPadBorderExtents(a, p),
						p = b.getMarginExtents(a, p);
					if (f("webkit") && c(a)) {
						var k = a.style;
						if (0 <= d && !k.width) k.width = "4px";
						if (0 <= m && !k.height) k.height = "4px"
					}
					0 <= d && (d = Math.max(d - n.w - p.w, 0));
					0 <= m && (m = Math.max(m - n.h - p.h, 0));
					e(a, l.l, l.t, d, m)
				};
				b.isBodyLtr = function(a) {
					a = a || k.doc;
					return "ltr" == (k.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
				};
				b.docScroll = function(a) {
					var a = a || k.doc,
						g = k.doc.parentWindow ||
						k.doc.defaultView;
					return "pageXOffset" in g ? {
						x: g.pageXOffset,
						y: g.pageYOffset
					} : (g = f("quirks") ? k.body(a) : a.documentElement) && {
						x: b.fixIeBiDiScrollLeft(g.scrollLeft || 0, a),
						y: g.scrollTop || 0
					}
				};
				if (f("ie")) b.getIeDocumentElementOffset = function(a) {
					a = a || k.doc;
					a = a.documentElement;
					if (8 > f("ie")) {
						var b = a.getBoundingClientRect(),
							d = b.left,
							b = b.top;
						7 > f("ie") && (d += a.clientLeft, b += a.clientTop);
						return {
							x: 0 > d ? 0 : d,
							y: 0 > b ? 0 : b
						}
					}
					return {
						x: 0,
						y: 0
					}
				};
				b.fixIeBiDiScrollLeft = function(a, g) {
					var g = g || k.doc,
						d = f("ie");
					if (d && !b.isBodyLtr(g)) {
						var c =
							f("quirks"),
							e = c ? k.body(g) : g.documentElement,
							i = k.global;
						6 == d && !c && i.frameElement && e.scrollHeight > e.clientHeight && (a += e.clientLeft);
						return 8 > d || c ? a + e.clientWidth - e.scrollWidth : -a
					}
					return a
				};
				b.position = function(a, g) {
					var a = h.byId(a),
						d = k.body(a.ownerDocument),
						c = a.getBoundingClientRect(),
						c = {
							x: c.left,
							y: c.top,
							w: c.right - c.left,
							h: c.bottom - c.top
						};
					if (f("ie")) {
						var e = b.getIeDocumentElementOffset(a.ownerDocument);
						c.x -= e.x + (f("quirks") ? d.clientLeft + d.offsetLeft : 0);
						c.y -= e.y + (f("quirks") ? d.clientTop + d.offsetTop : 0)
					}
					g &&
						(d = b.docScroll(a.ownerDocument), c.x += d.x, c.y += d.y);
					return c
				};
				b.getMarginSize = function(a, g) {
					var a = h.byId(a),
						d = b.getMarginExtents(a, g || j.getComputedStyle(a)),
						c = a.getBoundingClientRect();
					return {
						w: c.right - c.left + d.w,
						h: c.bottom - c.top + d.h
					}
				};
				b.normalizeEvent = function(a) {
					if (!("layerX" in a)) a.layerX = a.offsetX, a.layerY = a.offsetY;
					if (!f("dom-addeventlistener")) {
						var g = a.target,
							g = g && g.ownerDocument || document,
							d = f("quirks") ? g.body : g.documentElement,
							c = b.getIeDocumentElementOffset(g);
						a.pageX = a.clientX + b.fixIeBiDiScrollLeft(d.scrollLeft ||
							0, g) - c.x;
						a.pageY = a.clientY + (d.scrollTop || 0) - c.y
					}
				};
				return b
			})
		},
		"dojo/dom-style": function() {
			define(["./sniff", "./dom"], function(f, k) {
				function h(b, d, g) {
					d = d.toLowerCase();
					if (f("ie")) {
						if ("auto" == g) {
							if ("height" == d) return b.offsetHeight;
							if ("width" == d) return b.offsetWidth
						}
						if ("fontweight" == d) switch (g) {
							case 700:
								return "bold";
							default:
								return "normal"
						}
					}
					d in a || (a[d] = l.test(d));
					return a[d] ? c(b, g) : g
				}
				var j, e = {};
				j = f("webkit") ? function(a) {
					var b;
					if (1 == a.nodeType) {
						var d = a.ownerDocument.defaultView;
						b = d.getComputedStyle(a,
							null);
						if (!b && a.style) a.style.display = "", b = d.getComputedStyle(a, null)
					}
					return b || {}
				} : f("ie") && (9 > f("ie") || f("quirks")) ? function(a) {
					return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {}
				} : function(a) {
					return 1 == a.nodeType ? a.ownerDocument.defaultView.getComputedStyle(a, null) : {}
				};
				e.getComputedStyle = j;
				var c;
				c = f("ie") ? function(a, b) {
					if (!b) return 0;
					if ("medium" == b) return 4;
					if (b.slice && "px" == b.slice(-2)) return parseFloat(b);
					var d = a.style,
						g = a.runtimeStyle,
						c = d.left,
						e = g.left;
					g.left = a.currentStyle.left;
					try {
						d.left =
							b, b = d.pixelLeft
					} catch (l) {
						b = 0
					}
					d.left = c;
					g.left = e;
					return b
				} : function(a, b) {
					return parseFloat(b) || 0
				};
				e.toPixelValue = c;
				var i = function(a, b) {
						try {
							return a.filters.item("DXImageTransform.Microsoft.Alpha")
						} catch (d) {
							return b ? {} : null
						}
					},
					b = 9 > f("ie") || f("ie") && f("quirks") ? function(a) {
						try {
							return i(a).Opacity / 100
						} catch (b) {
							return 1
						}
					} : function(a) {
						return j(a).opacity
					},
					g = 9 > f("ie") || f("ie") && f("quirks") ? function(a, b) {
						var d = 100 * b,
							c = 1 == b;
						a.style.zoom = c ? "" : 1;
						if (i(a)) i(a, 1).Opacity = d;
						else {
							if (c) return b;
							a.style.filter += " progid:DXImageTransform.Microsoft.Alpha(Opacity=" +
								d + ")"
						}
						i(a, 1).Enabled = !c;
						if ("tr" == a.tagName.toLowerCase())
							for (d = a.firstChild; d; d = d.nextSibling) "td" == d.tagName.toLowerCase() && g(d, b);
						return b
					} : function(a, b) {
						return a.style.opacity = b
					},
					a = {
						left: !0,
						top: !0
					},
					l = /margin|padding|width|height|max|min|offset/,
					d = f("ie") ? "styleFloat" : "cssFloat",
					p = {
						cssFloat: d,
						styleFloat: d,
						"float": d
					};
				e.get = function(a, d) {
					var g = k.byId(a),
						c = arguments.length;
					if (2 == c && "opacity" == d) return b(g);
					var d = p[d] || d,
						l = e.getComputedStyle(g);
					return 1 == c ? l : h(g, d, l[d] || g.style[d])
				};
				e.set = function(a,
					b, d) {
					var c = k.byId(a),
						l = arguments.length,
						f = "opacity" == b,
						b = p[b] || b;
					if (3 == l) return f ? g(c, d) : c.style[b] = d;
					for (var i in b) e.set(a, i, b[i]);
					return e.getComputedStyle(c)
				};
				return e
			})
		},
		"dojo/mouse": function() {
			define(["./_base/kernel", "./on", "./has", "./dom", "./_base/window"], function(f, k, h, j, e) {
				function c(e, b) {
					var g = function(a, g) {
						return k(a, e, function(d) {
							if (b) return b(d, g);
							if (!j.isDescendant(d.relatedTarget, a)) return g.call(this, d)
						})
					};
					g.bubble = function(a) {
						return c(e, function(b, d) {
							var g = a(b.target),
								c = b.relatedTarget;
							if (g && g != (c && 1 == c.nodeType && a(c))) return d.call(g, b)
						})
					};
					return g
				}
				h.add("dom-quirks", e.doc && "BackCompat" == e.doc.compatMode);
				h.add("events-mouseenter", e.doc && "onmouseenter" in e.doc.createElement("div"));
				h.add("events-mousewheel", e.doc && "onmousewheel" in e.doc);
				e = h("dom-quirks") && h("ie") || !h("dom-addeventlistener") ? {
					LEFT: 1,
					MIDDLE: 4,
					RIGHT: 2,
					isButton: function(c, b) {
						return c.button & b
					},
					isLeft: function(c) {
						return c.button & 1
					},
					isMiddle: function(c) {
						return c.button & 4
					},
					isRight: function(c) {
						return c.button & 2
					}
				} : {
					LEFT: 0,
					MIDDLE: 1,
					RIGHT: 2,
					isButton: function(c, b) {
						return c.button == b
					},
					isLeft: function(c) {
						return 0 == c.button
					},
					isMiddle: function(c) {
						return 1 == c.button
					},
					isRight: function(c) {
						return 2 == c.button
					}
				};
				f.mouseButtons = e;
				f = h("events-mousewheel") ? "mousewheel" : function(c, b) {
					return k(c, "DOMMouseScroll", function(g) {
						g.wheelDelta = -g.detail;
						b.call(this, g)
					})
				};
				return {
					_eventHandler: c,
					enter: c("mouseover"),
					leave: c("mouseout"),
					wheel: f,
					isLeft: e.isLeft,
					isMiddle: e.isMiddle,
					isRight: e.isRight
				}
			})
		},
		"dojo/keys": function() {
			define(["./_base/kernel",
				"./sniff"
			], function(f, k) {
				return f.keys = {
					BACKSPACE: 8,
					TAB: 9,
					CLEAR: 12,
					ENTER: 13,
					SHIFT: 16,
					CTRL: 17,
					ALT: 18,
					META: k("webkit") ? 91 : 224,
					PAUSE: 19,
					CAPS_LOCK: 20,
					ESCAPE: 27,
					SPACE: 32,
					PAGE_UP: 33,
					PAGE_DOWN: 34,
					END: 35,
					HOME: 36,
					LEFT_ARROW: 37,
					UP_ARROW: 38,
					RIGHT_ARROW: 39,
					DOWN_ARROW: 40,
					INSERT: 45,
					DELETE: 46,
					HELP: 47,
					LEFT_WINDOW: 91,
					RIGHT_WINDOW: 92,
					SELECT: 93,
					NUMPAD_0: 96,
					NUMPAD_1: 97,
					NUMPAD_2: 98,
					NUMPAD_3: 99,
					NUMPAD_4: 100,
					NUMPAD_5: 101,
					NUMPAD_6: 102,
					NUMPAD_7: 103,
					NUMPAD_8: 104,
					NUMPAD_9: 105,
					NUMPAD_MULTIPLY: 106,
					NUMPAD_PLUS: 107,
					NUMPAD_ENTER: 108,
					NUMPAD_MINUS: 109,
					NUMPAD_PERIOD: 110,
					NUMPAD_DIVIDE: 111,
					F1: 112,
					F2: 113,
					F3: 114,
					F4: 115,
					F5: 116,
					F6: 117,
					F7: 118,
					F8: 119,
					F9: 120,
					F10: 121,
					F11: 122,
					F12: 123,
					F13: 124,
					F14: 125,
					F15: 126,
					NUM_LOCK: 144,
					SCROLL_LOCK: 145,
					UP_DPAD: 175,
					DOWN_DPAD: 176,
					LEFT_DPAD: 177,
					RIGHT_DPAD: 178,
					copyKey: k("mac") && !k("air") ? k("safari") ? 91 : 224 : 17
				}
			})
		},
		"dojo/_base/Color": function() {
			define(["./kernel", "./lang", "./array", "./config"], function(f, k, h, j) {
				var e = f.Color = function(c) {
					c && this.setColor(c)
				};
				e.named = {
					black: [0, 0, 0],
					silver: [192, 192, 192],
					gray: [128,
						128, 128
					],
					white: [255, 255, 255],
					maroon: [128, 0, 0],
					red: [255, 0, 0],
					purple: [128, 0, 128],
					fuchsia: [255, 0, 255],
					green: [0, 128, 0],
					lime: [0, 255, 0],
					olive: [128, 128, 0],
					yellow: [255, 255, 0],
					navy: [0, 0, 128],
					blue: [0, 0, 255],
					teal: [0, 128, 128],
					aqua: [0, 255, 255],
					transparent: j.transparentColor || [0, 0, 0, 0]
				};
				k.extend(e, {
					r: 255,
					g: 255,
					b: 255,
					a: 1,
					_set: function(c, e, b, g) {
						this.r = c;
						this.g = e;
						this.b = b;
						this.a = g
					},
					setColor: function(c) {
						k.isString(c) ? e.fromString(c, this) : k.isArray(c) ? e.fromArray(c, this) : (this._set(c.r, c.g, c.b, c.a), c instanceof e ||
							this.sanitize());
						return this
					},
					sanitize: function() {
						return this
					},
					toRgb: function() {
						return [this.r, this.g, this.b]
					},
					toRgba: function() {
						return [this.r, this.g, this.b, this.a]
					},
					toHex: function() {
						return "#" + h.map(["r", "g", "b"], function(c) {
							c = this[c].toString(16);
							return 2 > c.length ? "0" + c : c
						}, this).join("")
					},
					toCss: function(c) {
						var e = this.r + ", " + this.g + ", " + this.b;
						return (c ? "rgba(" + e + ", " + this.a : "rgb(" + e) + ")"
					},
					toString: function() {
						return this.toCss(!0)
					}
				});
				e.blendColors = f.blendColors = function(c, f, b, g) {
					var a = g || new e;
					h.forEach(["r",
						"g", "b", "a"
					], function(g) {
						a[g] = c[g] + (f[g] - c[g]) * b;
						"a" != g && (a[g] = Math.round(a[g]))
					});
					return a.sanitize()
				};
				e.fromRgb = f.colorFromRgb = function(c, f) {
					var b = c.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
					return b && e.fromArray(b[1].split(/\s*,\s*/), f)
				};
				e.fromHex = f.colorFromHex = function(c, f) {
					var b = f || new e,
						g = 4 == c.length ? 4 : 8,
						a = (1 << g) - 1,
						c = Number("0x" + c.substr(1));
					if (isNaN(c)) return null;
					h.forEach(["b", "g", "r"], function(e) {
						var d = c & a;
						c >>= g;
						b[e] = 4 == g ? 17 * d : d
					});
					b.a = 1;
					return b
				};
				e.fromArray = f.colorFromArray = function(c,
					f) {
					var b = f || new e;
					b._set(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]));
					if (isNaN(b.a)) b.a = 1;
					return b.sanitize()
				};
				e.fromString = f.colorFromString = function(c, f) {
					var b = e.named[c];
					return b && e.fromArray(b, f) || e.fromRgb(c, f) || e.fromHex(c, f)
				};
				return e
			})
		},
		"dojo/_base/browser": function() {
			require.has && require.has.add("config-selectorEngine", "acme");
			define("../ready,./kernel,./connect,./unload,./window,./event,./html,./NodeList,../query,./xhr,./fx".split(","), function(f) {
				return f
			})
		},
		"dojo/_base/unload": function() {
			define(["./kernel",
				"./lang", "../on"
			], function(f, k, h) {
				var j = window,
					e = {
						addOnWindowUnload: function(c, e) {
							if (!f.windowUnloaded) h(j, "unload", f.windowUnloaded = function() {});
							h(j, "unload", k.hitch(c, e))
						},
						addOnUnload: function(c, e) {
							h(j, "beforeunload", k.hitch(c, e))
						}
					};
				f.addOnWindowUnload = e.addOnWindowUnload;
				f.addOnUnload = e.addOnUnload;
				return e
			})
		},
		"dojo/_base/html": function() {
			define("./kernel,../dom,../dom-style,../dom-attr,../dom-prop,../dom-class,../dom-construct,../dom-geometry".split(","), function(f, k, h, j, e, c, i, b) {
				f.byId = k.byId;
				f.isDescendant = k.isDescendant;
				f.setSelectable = k.setSelectable;
				f.getAttr = j.get;
				f.setAttr = j.set;
				f.hasAttr = j.has;
				f.removeAttr = j.remove;
				f.getNodeProp = j.getNodeProp;
				f.attr = function(b, a, c) {
					return 2 == arguments.length ? j["string" == typeof a ? "get" : "set"](b, a) : j.set(b, a, c)
				};
				f.hasClass = c.contains;
				f.addClass = c.add;
				f.removeClass = c.remove;
				f.toggleClass = c.toggle;
				f.replaceClass = c.replace;
				f._toDom = f.toDom = i.toDom;
				f.place = i.place;
				f.create = i.create;
				f.empty = function(b) {
					i.empty(b)
				};
				f._destroyElement = f.destroy = function(b) {
					i.destroy(b)
				};
				f._getPadExtents = f.getPadExtents = b.getPadExtents;
				f._getBorderExtents = f.getBorderExtents = b.getBorderExtents;
				f._getPadBorderExtents = f.getPadBorderExtents = b.getPadBorderExtents;
				f._getMarginExtents = f.getMarginExtents = b.getMarginExtents;
				f._getMarginSize = f.getMarginSize = b.getMarginSize;
				f._getMarginBox = f.getMarginBox = b.getMarginBox;
				f.setMarginBox = b.setMarginBox;
				f._getContentBox = f.getContentBox = b.getContentBox;
				f.setContentSize = b.setContentSize;
				f._isBodyLtr = f.isBodyLtr = b.isBodyLtr;
				f._docScroll = f.docScroll =
					b.docScroll;
				f._getIeDocumentElementOffset = f.getIeDocumentElementOffset = b.getIeDocumentElementOffset;
				f._fixIeBiDiScrollLeft = f.fixIeBiDiScrollLeft = b.fixIeBiDiScrollLeft;
				f.position = b.position;
				f.marginBox = function(g, a) {
					return a ? b.setMarginBox(g, a) : b.getMarginBox(g)
				};
				f.contentBox = function(g, a) {
					return a ? b.setContentSize(g, a) : b.getContentBox(g)
				};
				f.coords = function(g, a) {
					f.deprecated("dojo.coords()", "Use dojo.position() or dojo.marginBox().");
					var g = k.byId(g),
						c = h.getComputedStyle(g),
						c = b.getMarginBox(g, c),
						d =
						b.position(g, a);
					c.x = d.x;
					c.y = d.y;
					return c
				};
				f.getProp = e.get;
				f.setProp = e.set;
				f.prop = function(b, a, c) {
					return 2 == arguments.length ? e["string" == typeof a ? "get" : "set"](b, a) : e.set(b, a, c)
				};
				f.getStyle = h.get;
				f.setStyle = h.set;
				f.getComputedStyle = h.getComputedStyle;
				f.__toPixelValue = f.toPixelValue = h.toPixelValue;
				f.style = function(b, a, c) {
					switch (arguments.length) {
						case 1:
							return h.get(b);
						case 2:
							return h["string" == typeof a ? "get" : "set"](b, a)
					}
					return h.set(b, a, c)
				};
				return f
			})
		},
		"dojo/dom-attr": function() {
			define("exports,./sniff,./_base/lang,./dom,./dom-style,./dom-prop".split(","),
				function(f, k, h, j, e, c) {
					function i(a, b) {
						var d = a.getAttributeNode && a.getAttributeNode(b);
						return d && d.specified
					}
					var b = {
							innerHTML: 1,
							className: 1,
							htmlFor: k("ie"),
							value: 1
						},
						g = {
							classname: "class",
							htmlfor: "for",
							tabindex: "tabIndex",
							readonly: "readOnly"
						};
					f.has = function(a, e) {
						var d = e.toLowerCase();
						return b[c.names[d] || e] || i(j.byId(a), g[d] || e)
					};
					f.get = function(a, e) {
						var a = j.byId(a),
							d = e.toLowerCase(),
							f = c.names[d] || e,
							m = a[f];
						if (b[f] && "undefined" != typeof m || "href" != f && ("boolean" == typeof m || h.isFunction(m))) return m;
						d = g[d] ||
							e;
						return i(a, d) ? a.getAttribute(d) : null
					};
					f.set = function(a, l, d) {
						a = j.byId(a);
						if (2 == arguments.length) {
							for (var i in l) f.set(a, i, l[i]);
							return a
						}
						i = l.toLowerCase();
						var m = c.names[i] || l,
							k = b[m];
						if ("style" == m && "string" != typeof d) return e.set(a, d), a;
						if (k || "boolean" == typeof d || h.isFunction(d)) return c.set(a, l, d);
						a.setAttribute(g[i] || l, d);
						return a
					};
					f.remove = function(a, b) {
						j.byId(a).removeAttribute(g[b.toLowerCase()] || b)
					};
					f.getNodeProp = function(a, b) {
						var a = j.byId(a),
							d = b.toLowerCase(),
							e = c.names[d] || b;
						if (e in a && "href" !=
							e) return a[e];
						d = g[d] || b;
						return i(a, d) ? a.getAttribute(d) : null
					}
				})
		},
		"dojo/dom-prop": function() {
			define("exports,./_base/kernel,./sniff,./_base/lang,./dom,./dom-style,./dom-construct,./_base/connect".split(","), function(f, k, h, j, e, c, i, b) {
				var g = {},
					a = 0,
					l = k._scopeName + "attrid";
				f.names = {
					"class": "className",
					"for": "htmlFor",
					tabindex: "tabIndex",
					readonly: "readOnly",
					colspan: "colSpan",
					frameborder: "frameBorder",
					rowspan: "rowSpan",
					valuetype: "valueType"
				};
				f.get = function(a, b) {
					var a = e.byId(a),
						g = b.toLowerCase();
					return a[f.names[g] ||
						b]
				};
				f.set = function(d, k, m) {
					d = e.byId(d);
					if (2 == arguments.length && "string" != typeof k) {
						for (var n in k) f.set(d, n, k[n]);
						return d
					}
					n = k.toLowerCase();
					n = f.names[n] || k;
					if ("style" == n && "string" != typeof m) return c.set(d, m), d;
					if ("innerHTML" == n) return h("ie") && d.tagName.toLowerCase() in {
						col: 1,
						colgroup: 1,
						table: 1,
						tbody: 1,
						tfoot: 1,
						thead: 1,
						tr: 1,
						title: 1
					} ? (i.empty(d), d.appendChild(i.toDom(m, d.ownerDocument))) : d[n] = m, d;
					if (j.isFunction(m)) {
						var o = d[l];
						o || (o = a++, d[l] = o);
						g[o] || (g[o] = {});
						var r = g[o][n];
						if (r) b.disconnect(r);
						else try {
							delete d[n]
						} catch (q) {}
						m ?
							g[o][n] = b.connect(d, n, m) : d[n] = null;
						return d
					}
					d[n] = m;
					return d
				}
			})
		},
		"dojo/dom-construct": function() {
			define("exports,./_base/kernel,./sniff,./_base/window,./dom,./dom-attr,./on".split(","), function(f, k, h, j, e, c, i) {
				function b(a, b) {
					var d = b.parentNode;
					d && d.insertBefore(a, b)
				}
				var g = {
						option: ["select"],
						tbody: ["table"],
						thead: ["table"],
						tfoot: ["table"],
						tr: ["table", "tbody"],
						td: ["table", "tbody", "tr"],
						th: ["table", "thead", "tr"],
						legend: ["fieldset"],
						caption: ["table"],
						colgroup: ["table"],
						col: ["table", "colgroup"],
						li: ["ul"]
					},
					a = /<\s*([\w\:]+)/,
					l = {},
					d = 0,
					p = "__" + k._scopeName + "ToDomId",
					m;
				for (m in g)
					if (g.hasOwnProperty(m)) k = g[m], k.pre = "option" == m ? '<select multiple="multiple">' : "<" + k.join("><") + ">", k.post = "</" + k.reverse().join("></") + ">";
				var n = null,
					o;
				i(window, "unload", function() {
					n = null
				});
				f.toDom = function(b, c) {
					var c = c || j.doc,
						e = c[p];
					e || (c[p] = e = ++d + "", l[e] = c.createElement("div"));
					var b = b + "",
						f = b.match(a),
						i = f ? f[1].toLowerCase() : "",
						e = l[e];
					if (f && g[i]) {
						f = g[i];
						e.innerHTML = f.pre + b + f.post;
						for (f = f.length; f; --f) e = e.firstChild
					} else e.innerHTML =
						b;
					if (1 == e.childNodes.length) return e.removeChild(e.firstChild);
					for (i = c.createDocumentFragment(); f = e.firstChild;) i.appendChild(f);
					return i
				};
				f.place = function(a, d, c) {
					d = e.byId(d);
					"string" == typeof a && (a = /^\s*</.test(a) ? f.toDom(a, d.ownerDocument) : e.byId(a));
					if ("number" == typeof c) {
						var g = d.childNodes;
						!g.length || g.length <= c ? d.appendChild(a) : b(a, g[0 > c ? 0 : c])
					} else switch (c) {
						case "before":
							b(a, d);
							break;
						case "after":
							c = a;
							(g = d.parentNode) && (g.lastChild == d ? g.appendChild(c) : g.insertBefore(c, d.nextSibling));
							break;
						case "replace":
							d.parentNode.replaceChild(a,
								d);
							break;
						case "only":
							f.empty(d);
							d.appendChild(a);
							break;
						case "first":
							if (d.firstChild) {
								b(a, d.firstChild);
								break
							}
						default:
							d.appendChild(a)
					}
					return a
				};
				f.create = function(a, b, d, g) {
					var l = j.doc;
					if (d) d = e.byId(d), l = d.ownerDocument;
					"string" == typeof a && (a = l.createElement(a));
					b && c.set(a, b);
					d && f.place(a, d, g);
					return a
				};
				f.empty = h("ie") ? function(a) {
					for (var a = e.byId(a), b; b = a.lastChild;) f.destroy(b)
				} : function(a) {
					e.byId(a).innerHTML = ""
				};
				f.destroy = function(a) {
					a = e.byId(a);
					try {
						var b = a.ownerDocument;
						if (!n || o != b) n = b.createElement("div"),
							o = b;
						n.appendChild(a.parentNode ? a.parentNode.removeChild(a) : a);
						n.innerHTML = ""
					} catch (d) {}
				}
			})
		},
		"dojo/dom-class": function() {
			define(["./_base/lang", "./_base/array", "./dom"], function(f, k, h) {
				function j(b) {
					if ("string" == typeof b || b instanceof String) {
						if (b && !c.test(b)) return i[0] = b, i;
						b = b.split(c);
						b.length && !b[0] && b.shift();
						b.length && !b[b.length - 1] && b.pop();
						return b
					}
					return !b ? [] : k.filter(b, function(a) {
						return a
					})
				}
				var e, c = /\s+/,
					i = [""],
					b = {};
				return e = {
					contains: function(b, a) {
						return 0 <= (" " + h.byId(b).className + " ").indexOf(" " +
							a + " ")
					},
					add: function(b, a) {
						var b = h.byId(b),
							a = j(a),
							c = b.className,
							d, c = c ? " " + c + " " : " ";
						d = c.length;
						for (var e = 0, f = a.length, i; e < f; ++e)(i = a[e]) && 0 > c.indexOf(" " + i + " ") && (c += i + " ");
						d < c.length && (b.className = c.substr(1, c.length - 2))
					},
					remove: function(b, a) {
						var b = h.byId(b),
							c;
						if (void 0 !== a) {
							a = j(a);
							c = " " + b.className + " ";
							for (var d = 0, e = a.length; d < e; ++d) c = c.replace(" " + a[d] + " ", " ");
							c = f.trim(c)
						} else c = "";
						b.className != c && (b.className = c)
					},
					replace: function(c, a, f) {
						c = h.byId(c);
						b.className = c.className;
						e.remove(b, f);
						e.add(b,
							a);
						c.className !== b.className && (c.className = b.className)
					},
					toggle: function(b, a, c) {
						b = h.byId(b);
						if (void 0 === c)
							for (var a = j(a), d = 0, f = a.length, i; d < f; ++d) i = a[d], e[e.contains(b, i) ? "remove" : "add"](b, i);
						else e[c ? "add" : "remove"](b, a);
						return c
					}
				}
			})
		},
		"dojo/_base/NodeList": function() {
			define(["./kernel", "../query", "./array", "./html", "../NodeList-dom"], function(f, k, h) {
				var k = k.NodeList,
					j = k.prototype;
				j.connect = k._adaptAsForEach(function() {
					return f.connect.apply(this, arguments)
				});
				j.coords = k._adaptAsMap(f.coords);
				k.events =
					"blur,focus,change,click,error,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,submit".split(",");
				h.forEach(k.events, function(e) {
					var c = "on" + e;
					j[c] = function(e, b) {
						return this.connect(c, e, b)
					}
				});
				return f.NodeList = k
			})
		},
		"dojo/query": function() {
			define("./_base/kernel,./has,./dom,./on,./_base/array,./_base/lang,./selector/_loader,./selector/_loader!default".split(","), function(f, k, h, j, e, c, i, b) {
				function g(a, b) {
					var d = function(d, c) {
						if ("string" == typeof c && (c = h.byId(c), !c)) return new b([]);
						var g = "string" == typeof d ? a(d, c) : d ? d.orphan ? d : [d] : [];
						return g.orphan ? g : new b(g)
					};
					d.matches = a.match || function(a, b, c) {
						return 0 < d.filter([a], b, c).length
					};
					d.filter = a.filter || function(a, b, c) {
						return d(b, c).filter(function(b) {
							return -1 < e.indexOf(a, b)
						})
					};
					if ("function" != typeof a) var c = a.search,
						a = function(a, b) {
							return c(b || document, a)
						};
					return d
				}
				k.add("array-extensible", function() {
					return 1 == c.delegate([], {
						length: 1
					}).length && !k("bug-for-in-skips-shadowed")
				});
				var a = Array.prototype,
					l = a.slice,
					d = a.concat,
					p = e.forEach,
					m = function(a, b, d) {
						b = [0].concat(l.call(b, 0));
						d = d || f.global;
						return function(c) {
							b[0] = c;
							return a.apply(d, b)
						}
					},
					n = function(a) {
						var b = this instanceof o && k("array-extensible");
						"number" == typeof a && (a = Array(a));
						var d = a && "length" in a ? a : arguments;
						if (b || !d.sort) {
							for (var g = b ? this : [], e = g.length = d.length, f = 0; f < e; f++) g[f] = d[f];
							if (b) return g;
							d = g
						}
						c._mixin(d, r);
						d._NodeListCtor = function(a) {
							return o(a)
						};
						return d
					},
					o = n,
					r = o.prototype = k("array-extensible") ? [] : {};
				o._wrap = r._wrap = function(a, b, d) {
					a = new(d ||
						this._NodeListCtor || o)(a);
					return b ? a._stash(b) : a
				};
				o._adaptAsMap = function(a, b) {
					return function() {
						return this.map(m(a, arguments, b))
					}
				};
				o._adaptAsForEach = function(a, b) {
					return function() {
						this.forEach(m(a, arguments, b));
						return this
					}
				};
				o._adaptAsFilter = function(a, b) {
					return function() {
						return this.filter(m(a, arguments, b))
					}
				};
				o._adaptWithCondition = function(a, b, d) {
					return function() {
						var c = arguments,
							g = m(a, c, d);
						if (b.call(d || f.global, c)) return this.map(g);
						this.forEach(g);
						return this
					}
				};
				p(["slice", "splice"], function(b) {
					var d =
						a[b];
					r[b] = function() {
						return this._wrap(d.apply(this, arguments), "slice" == b ? this : null)
					}
				});
				p(["indexOf", "lastIndexOf", "every", "some"], function(a) {
					var b = e[a];
					r[a] = function() {
						return b.apply(f, [this].concat(l.call(arguments, 0)))
					}
				});
				c.extend(n, {
					constructor: o,
					_NodeListCtor: o,
					toString: function() {
						return this.join(",")
					},
					_stash: function(a) {
						this._parent = a;
						return this
					},
					on: function(a, b) {
						var d = this.map(function(d) {
							return j(d, a, b)
						});
						d.remove = function() {
							for (var a = 0; a < d.length; a++) d[a].remove()
						};
						return d
					},
					end: function() {
						return this._parent ?
							this._parent : new this._NodeListCtor(0)
					},
					concat: function(a) {
						var b = l.call(this, 0),
							c = e.map(arguments, function(a) {
								return l.call(a, 0)
							});
						return this._wrap(d.apply(b, c), this)
					},
					map: function(a, b) {
						return this._wrap(e.map(this, a, b), this)
					},
					forEach: function(a, b) {
						p(this, a, b);
						return this
					},
					filter: function(a) {
						var b = arguments,
							d = this,
							c = 0;
						if ("string" == typeof a) {
							d = q._filterResult(this, b[0]);
							if (1 == b.length) return d._stash(this);
							c = 1
						}
						return this._wrap(e.filter(d, b[c], b[c + 1]), this)
					},
					instantiate: function(a, b) {
						var d = c.isFunction(a) ?
							a : c.getObject(a),
							b = b || {};
						return this.forEach(function(a) {
							new d(b, a)
						})
					},
					at: function() {
						var a = new this._NodeListCtor(0);
						p(arguments, function(b) {
							0 > b && (b = this.length + b);
							this[b] && a.push(this[b])
						}, this);
						return a._stash(this)
					}
				});
				var q = g(b, n);
				f.query = g(b, function(a) {
					return n(a)
				});
				q.load = function(a, b, d) {
					i.load(a, b, function(a) {
						d(g(a, n))
					})
				};
				f._filterQueryResult = q._filterResult = function(a, b, d) {
					return new n(q.filter(a, b, d))
				};
				f.NodeList = q.NodeList = n;
				return q
			})
		},
		"dojo/selector/_loader": function() {
			define(["../has",
				"require"
			], function(f, k) {
				var h = document.createElement("div");
				f.add("dom-qsa2.1", !!h.querySelectorAll);
				f.add("dom-qsa3", function() {
					try {
						return h.innerHTML = "<p class='TEST'></p>", 1 == h.querySelectorAll(".TEST:empty").length
					} catch (e) {}
				});
				var j;
				return {
					load: function(e, c, i) {
						var b = k,
							e = "default" == e ? f("config-selectorEngine") || "css3" : e,
							e = "css2" == e || "lite" == e ? "./lite" : "css2.1" == e ? f("dom-qsa2.1") ? "./lite" : "./acme" : "css3" == e ? f("dom-qsa3") ? "./lite" : "./acme" : "acme" == e ? "./acme" : (b = c) && e;
						if ("?" == e.charAt(e.length -
								1)) var e = e.substring(0, e.length - 1),
							g = !0;
						if (g && (f("dom-compliant-qsa") || j)) return i(j);
						b([e], function(a) {
							"./lite" != e && (j = a);
							i(a)
						})
					}
				}
			})
		},
		"dojo/selector/acme": function() {
			define(["../dom", "../sniff", "../_base/array", "../_base/lang", "../_base/window"], function(f, k, h, j, e) {
				var c = j.trim,
					i = h.forEach,
					b = "BackCompat" == e.doc.compatMode,
					g = !1,
					a = function() {
						return !0
					},
					l = function(a) {
						for (var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ", b = function(b, d) {
									return c(a.slice(b, d))
								}, d = [], e = -1, f = -1, l = -1, i = -1, m = -1, j = -1, h = -1,
								k, o = "", n = "", p, q = 0, t = a.length, r = null, u = null, v = function() {
									if (0 <= j) r.id = b(j, q).replace(/\\/g, ""), j = -1;
									if (0 <= h) {
										var a = h == q ? null : b(h, q);
										r[0 > ">~+".indexOf(a) ? "tag" : "oper"] = a;
										h = -1
									}
									0 <= m && (r.classes.push(b(m + 1, q).replace(/\\/g, "")), m = -1)
								}; o = n, n = a.charAt(q), q < t; q++)
							if ("\\" != o)
								if (r || (p = q, r = {
										query: null,
										pseudos: [],
										attrs: [],
										classes: [],
										tag: null,
										oper: null,
										id: null,
										getTag: function() {
											return g ? this.otag : this.tag
										}
									}, h = q), k) n == k && (k = null);
								else if ("'" == n || '"' == n) k = n;
						else if (0 <= e)
							if ("]" == n) {
								u.attr ? u.matchFor = b(l || e + 1, q) :
									u.attr = b(e + 1, q);
								if ((e = u.matchFor) && ('"' == e.charAt(0) || "'" == e.charAt(0))) u.matchFor = e.slice(1, -1);
								if (u.matchFor) u.matchFor = u.matchFor.replace(/\\/g, "");
								r.attrs.push(u);
								u = null;
								e = l = -1
							} else {
								if ("=" == n) l = 0 <= "|~^$*".indexOf(o) ? o : "", u.type = l + n, u.attr = b(e + 1, q - l.length), l = q + 1
							}
						else if (0 <= f) {
							if (")" == n) {
								if (0 <= i) u.value = b(f + 1, q);
								i = f = -1
							}
						} else if ("#" == n) v(), j = q + 1;
						else if ("." == n) v(), m = q;
						else if (":" == n) v(), i = q;
						else if ("[" == n) v(), e = q, u = {};
						else if ("(" == n) 0 <= i && (u = {
							name: b(i + 1, q),
							value: null
						}, r.pseudos.push(u)), f = q;
						else if (" " ==
							n && o != n) {
							v();
							0 <= i && r.pseudos.push({
								name: b(i + 1, q)
							});
							r.loops = r.pseudos.length || r.attrs.length || r.classes.length;
							r.oquery = r.query = b(p, q);
							r.otag = r.tag = r.oper ? null : r.tag || "*";
							if (r.tag) r.tag = r.tag.toUpperCase();
							if (d.length && d[d.length - 1].oper) r.infixOper = d.pop(), r.query = r.infixOper.query + " " + r.query;
							d.push(r);
							r = null
						}
						return d
					},
					d = function(a, b) {
						return !a ? b : !b ? a : function() {
							return a.apply(window, arguments) && b.apply(window, arguments)
						}
					},
					p = function(a, b) {
						var d = b || [];
						a && d.push(a);
						return d
					},
					m = function(a) {
						return 1 ==
							a.nodeType
					},
					n = function(a, b) {
						return !a ? "" : "class" == b ? a.className || "" : "for" == b ? a.htmlFor || "" : "style" == b ? a.style.cssText || "" : (g ? a.getAttribute(b) : a.getAttribute(b, 2)) || ""
					},
					o = {
						"*=": function(a, b) {
							return function(d) {
								return 0 <= n(d, a).indexOf(b)
							}
						},
						"^=": function(a, b) {
							return function(d) {
								return 0 == n(d, a).indexOf(b)
							}
						},
						"$=": function(a, b) {
							return function(d) {
								var d = " " + n(d, a),
									c = d.lastIndexOf(b);
								return -1 < c && c == d.length - b.length
							}
						},
						"~=": function(a, b) {
							var d = " " + b + " ";
							return function(b) {
								return 0 <= (" " + n(b, a) + " ").indexOf(d)
							}
						},
						"|=": function(a, b) {
							var d = b + "-";
							return function(c) {
								c = n(c, a);
								return c == b || 0 == c.indexOf(d)
							}
						},
						"=": function(a, b) {
							return function(d) {
								return n(d, a) == b
							}
						}
					},
					r = "undefined" == typeof e.doc.firstChild.nextElementSibling,
					q = !r ? "nextElementSibling" : "nextSibling",
					v = !r ? "previousElementSibling" : "previousSibling",
					s = r ? m : a,
					t = function(a) {
						for (; a = a[v];)
							if (s(a)) return !1;
						return !0
					},
					u = function(a) {
						for (; a = a[q];)
							if (s(a)) return !1;
						return !0
					},
					y = function(a) {
						var b = a.parentNode,
							b = 7 != b.nodeType ? b : b.nextSibling,
							d = 0,
							c = b.children || b.childNodes,
							g = a._i || a.getAttribute("_i") || -1,
							e = b._l || ("undefined" !== typeof b.getAttribute ? b.getAttribute("_l") : -1);
						if (!c) return -1;
						c = c.length;
						if (e == c && 0 <= g && 0 <= e) return g;
						k("ie") && "undefined" !== typeof b.setAttribute ? b.setAttribute("_l", c) : b._l = c;
						g = -1;
						for (b = b.firstElementChild || b.firstChild; b; b = b[q])
							if (s(b)) k("ie") ? b.setAttribute("_i", ++d) : b._i = ++d, a === b && (g = d);
						return g
					},
					z = function(a) {
						return !(y(a) % 2)
					},
					I = function(a) {
						return y(a) % 2
					},
					J = {
						checked: function() {
							return function(a) {
								return !!("checked" in a ? a.checked : a.selected)
							}
						},
						disabled: function() {
							return function(a) {
								return a.disabled
							}
						},
						enabled: function() {
							return function(a) {
								return !a.disabled
							}
						},
						"first-child": function() {
							return t
						},
						"last-child": function() {
							return u
						},
						"only-child": function() {
							return function(a) {
								return t(a) && u(a)
							}
						},
						empty: function() {
							return function(a) {
								for (var b = a.childNodes, a = a.childNodes.length - 1; 0 <= a; a--) {
									var d = b[a].nodeType;
									if (1 === d || 3 == d) return !1
								}
								return !0
							}
						},
						contains: function(a, b) {
							var d = b.charAt(0);
							if ('"' == d || "'" == d) b = b.slice(1, -1);
							return function(a) {
								return 0 <=
									a.innerHTML.indexOf(b)
							}
						},
						not: function(a, b) {
							var d = l(b)[0],
								c = {
									el: 1
								};
							if ("*" != d.tag) c.tag = 1;
							if (!d.classes.length) c.classes = 1;
							var g = E(d, c);
							return function(a) {
								return !g(a)
							}
						},
						"nth-child": function(a, b) {
							var d = parseInt;
							if ("odd" == b) return I;
							if ("even" == b) return z;
							if (-1 != b.indexOf("n")) {
								var c = b.split("n", 2),
									g = c[0] ? "-" == c[0] ? -1 : d(c[0]) : 1,
									e = c[1] ? d(c[1]) : 0,
									f = 0,
									l = -1;
								0 < g ? 0 > e ? e = e % g && g + e % g : 0 < e && (e >= g && (f = e - e % g), e %= g) : 0 > g && (g *= -1, 0 < e && (l = e, e %= g));
								if (0 < g) return function(a) {
									a = y(a);
									return a >= f && (0 > l || a <= l) && a % g == e
								};
								b = e
							}
							var i =
								d(b);
							return function(a) {
								return y(a) == i
							}
						}
					},
					N = k("ie") && (9 > k("ie") || k("quirks")) ? function(a) {
						var b = a.toLowerCase();
						"class" == b && (a = "className");
						return function(d) {
							return g ? d.getAttribute(a) : d[a] || d[b]
						}
					} : function(a) {
						return function(b) {
							return b && b.getAttribute && b.hasAttribute(a)
						}
					},
					E = function(b, c) {
						if (!b) return a;
						var c = c || {},
							e = null;
						"el" in c || (e = d(e, m));
						"tag" in c || "*" != b.tag && (e = d(e, function(a) {
							return a && (g ? a.tagName : a.tagName.toUpperCase()) == b.getTag()
						}));
						"classes" in c || i(b.classes, function(a, b) {
							var c = RegExp("(?:^|\\s)" +
								a + "(?:\\s|$)");
							e = d(e, function(a) {
								return c.test(a.className)
							});
							e.count = b
						});
						"pseudos" in c || i(b.pseudos, function(a) {
							var b = a.name;
							J[b] && (e = d(e, J[b](b, a.value)))
						});
						"attrs" in c || i(b.attrs, function(a) {
							var b, c = a.attr;
							a.type && o[a.type] ? b = o[a.type](c, a.matchFor) : c.length && (b = N(c));
							b && (e = d(e, b))
						});
						"id" in c || b.id && (e = d(e, function(a) {
							return !!a && a.id == b.id
						}));
						e || "default" in c || (e = a);
						return e
					},
					S = function(a) {
						return function(b, d, c) {
							for (; b = b[q];)
								if (!r || m(b)) {
									(!c || P(b, c)) && a(b) && d.push(b);
									break
								}
							return d
						}
					},
					Q = function(a) {
						return function(b,
							d, c) {
							for (b = b[q]; b;) {
								if (s(b)) {
									if (c && !P(b, c)) break;
									a(b) && d.push(b)
								}
								b = b[q]
							}
							return d
						}
					},
					B = function(b) {
						b = b || a;
						return function(a, d, c) {
							for (var g = 0, e = a.children || a.childNodes; a = e[g++];) s(a) && (!c || P(a, c)) && b(a, g) && d.push(a);
							return d
						}
					},
					A = {},
					w = function(d) {
						var c = A[d.query];
						if (c) return c;
						var g = d.infixOper,
							g = g ? g.oper : "",
							l = E(d, {
								el: 1
							}),
							i = "*" == d.tag,
							m = e.doc.getElementsByClassName;
						if (g) {
							m = {
								el: 1
							};
							if (i) m.tag = 1;
							l = E(d, m);
							"+" == g ? c = S(l) : "~" == g ? c = Q(l) : ">" == g && (c = B(l))
						} else if (d.id) l = !d.loops && i ? a : E(d, {
							el: 1,
							id: 1
						}), c = function(a,
							b) {
							var c = f.byId(d.id, a.ownerDocument || a);
							if (c && l(c)) {
								if (9 == a.nodeType) return p(c, b);
								for (var g = c.parentNode; g && !(g == a);) g = g.parentNode;
								if (g) return p(c, b)
							}
						};
						else if (m && /\{\s*\[native code\]\s*\}/.test("" + m) && d.classes.length && !b) var l = E(d, {
								el: 1,
								classes: 1,
								id: 1
							}),
							j = d.classes.join(" "),
							c = function(a, b, d) {
								for (var b = p(0, b), c, g = 0, e = a.getElementsByClassName(j); c = e[g++];) l(c, a) && P(c, d) && b.push(c);
								return b
							};
						else !i && !d.loops ? c = function(a, b, c) {
							for (var b = p(0, b), g = 0, e = d.getTag(), e = e ? a.getElementsByTagName(e) : []; a =
								e[g++];) P(a, c) && b.push(a);
							return b
						} : (l = E(d, {
							el: 1,
							tag: 1,
							id: 1
						}), c = function(a, b, c) {
							for (var b = p(0, b), g, e = 0, f = (g = d.getTag()) ? a.getElementsByTagName(g) : []; g = f[e++];) l(g, a) && P(g, c) && b.push(g);
							return b
						});
						return A[d.query] = c
					},
					x = {},
					K = {},
					H = function(a) {
						var b = l(c(a));
						if (1 == b.length) {
							var d = w(b[0]);
							return function(a) {
								if (a = d(a, [])) a.nozip = !0;
								return a
							}
						}
						return function(a) {
							for (var a = p(a), d, c, g = b.length, e, f, l = 0; l < g; l++) {
								f = [];
								d = b[l];
								c = a.length - 1;
								if (0 < c) e = {}, f.nozip = !0;
								c = w(d);
								for (var i = 0; d = a[i]; i++) c(d, f, e);
								if (!f.length) break;
								a = f
							}
							return f
						}
					},
					C = k("ie") ? "commentStrip" : "nozip",
					F = !!e.doc.querySelectorAll,
					O = /\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,
					D = function(a, b, d, c) {
						return d ? (b ? b + " " : "") + d + (c ? " " + c : "") : a
					},
					L = /([^[]*)([^\]]*])?/g,
					T = function(a, b, d) {
						return b.replace(O, D) + (d || "")
					},
					G = function(a, d) {
						a = a.replace(L, T);
						if (F) {
							var c = K[a];
							if (c && !d) return c
						}
						if (c = x[a]) return c;
						var c = a.charAt(0),
							g = -1 == a.indexOf(" ");
						0 <= a.indexOf("#") && g && (d = !0);
						if (F && !d && -1 == ">~+".indexOf(c) && (!k("ie") || -1 == a.indexOf(":")) && !(b && 0 <= a.indexOf(".")) && -1 == a.indexOf(":contains") &&
							-1 == a.indexOf(":checked") && -1 == a.indexOf("|=")) {
							var e = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
							return K[a] = function(b) {
								try {
									if (!(9 == b.nodeType || g)) throw "";
									var d = b.querySelectorAll(e);
									d[C] = !0;
									return d
								} catch (c) {
									return G(a, !0)(b)
								}
							}
						}
						var f = a.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);
						return x[a] = 2 > f.length ? H(a) : function(a) {
							for (var b = 0, d = [], c; c = f[b++];) d = d.concat(H(c)(a));
							return d
						}
					},
					M = 0,
					X = k("ie") ? function(a) {
						return g ? a.getAttribute("_uid") || a.setAttribute("_uid", ++M) || M : a.uniqueID
					} :
					function(a) {
						return a._uid || (a._uid = ++M)
					},
					P = function(a, b) {
						if (!b) return 1;
						var d = X(a);
						return !b[d] ? b[d] = 1 : 0
					},
					Y = function(a) {
						if (a && a.nozip) return a;
						var b = [];
						if (!a || !a.length) return b;
						a[0] && b.push(a[0]);
						if (2 > a.length) return b;
						M++;
						var d, c;
						if (k("ie") && g) {
							var e = M + "";
							a[0].setAttribute("_zipIdx", e);
							for (d = 1; c = a[d]; d++) a[d].getAttribute("_zipIdx") != e && b.push(c), c.setAttribute("_zipIdx", e)
						} else if (k("ie") && a.commentStrip) try {
							for (d = 1; c = a[d]; d++) m(c) && b.push(c)
						} catch (f) {} else {
							a[0] && (a[0]._zipIdx = M);
							for (d = 1; c = a[d]; d++) a[d]._zipIdx !=
								M && b.push(c), c._zipIdx = M
						}
						return b
					},
					U = function(a, b) {
						b = b || e.doc;
						g = "div" === (b.ownerDocument || b).createElement("div").tagName;
						var d = G(a)(b);
						return d && d.nozip ? d : Y(d)
					};
				U.filter = function(a, b, d) {
					for (var c = [], g = l(b), g = 1 == g.length && !/[^\w#\.]/.test(b) ? E(g[0]) : function(a) {
							return -1 != h.indexOf(U(b, f.byId(d)), a)
						}, e = 0, i; i = a[e]; e++) g(i) && c.push(i);
					return c
				};
				return U
			})
		},
		"dojo/NodeList-dom": function() {
			define("dojo/NodeList-dom", "./_base/kernel,./query,./_base/array,./_base/lang,./dom-class,./dom-construct,./dom-geometry,./dom-attr,./dom-style".split(","),
				function(f, k, h, j, e, c, i, b, g) {
					function a(a) {
						return function(b, d, c) {
							return 2 == arguments.length ? a["string" == typeof d ? "get" : "set"](b, d) : a.set(b, d, c)
						}
					}
					var l = function(a) {
							return 1 == a.length && "string" == typeof a[0]
						},
						d = function(a) {
							var b = a.parentNode;
							b && b.removeChild(a)
						},
						p = k.NodeList,
						m = p._adaptWithCondition,
						n = p._adaptAsForEach,
						o = p._adaptAsMap;
					j.extend(p, {
						_normalize: function(a, b) {
							var d = !0 === a.parse;
							if ("string" == typeof a.template) var g = a.templateFunc || f.string && f.string.substitute,
								a = g ? g(a.template, a) : a;
							g = typeof a;
							"string" == g || "number" == g ? (a = c.toDom(a, b && b.ownerDocument), a = 11 == a.nodeType ? j._toArray(a.childNodes) : [a]) : j.isArrayLike(a) ? j.isArray(a) || (a = j._toArray(a)) : a = [a];
							if (d) a._runParse = !0;
							return a
						},
						_cloneNode: function(a) {
							return a.cloneNode(!0)
						},
						_place: function(a, b, d, g) {
							if (!(1 != b.nodeType && "only" == d))
								for (var e, l = a.length, i = l - 1; 0 <= i; i--) {
									var m = g ? this._cloneNode(a[i]) : a[i];
									if (a._runParse && f.parser && f.parser.parse) {
										e || (e = b.ownerDocument.createElement("div"));
										e.appendChild(m);
										f.parser.parse(e);
										for (m = e.firstChild; e.firstChild;) e.removeChild(e.firstChild)
									}
									i ==
										l - 1 ? c.place(m, b, d) : b.parentNode.insertBefore(m, b);
									b = m
								}
						},
						position: o(i.position),
						attr: m(a(b), l),
						style: m(a(g), l),
						addClass: n(e.add),
						removeClass: n(e.remove),
						toggleClass: n(e.toggle),
						replaceClass: n(e.replace),
						empty: n(c.empty),
						removeAttr: n(b.remove),
						marginBox: o(i.getMarginBox),
						place: function(a, b) {
							var d = k(a)[0];
							return this.forEach(function(a) {
								c.place(a, d, b)
							})
						},
						orphan: function(a) {
							return (a ? k._filterResult(this, a) : this).forEach(d)
						},
						adopt: function(a, b) {
							return k(a).place(this[0], b)._stash(this)
						},
						query: function(a) {
							if (!a) return this;
							var b = new p;
							this.map(function(d) {
								k(a, d).forEach(function(a) {
									void 0 !== a && b.push(a)
								})
							});
							return b._stash(this)
						},
						filter: function(a) {
							var b = arguments,
								d = this,
								c = 0;
							if ("string" == typeof a) {
								d = k._filterResult(this, b[0]);
								if (1 == b.length) return d._stash(this);
								c = 1
							}
							return this._wrap(h.filter(d, b[c], b[c + 1]), this)
						},
						addContent: function(a, b) {
							for (var a = this._normalize(a, this[0]), d = 0, c; c = this[d]; d++) this._place(a, c, b, 0 < d);
							return this
						}
					});
					return p
				})
		},
		"dojo/_base/fx": function() {
			define("./kernel,./config,./lang,../Evented,./Color,./connect,./sniff,../dom,../dom-style".split(","),
				function(f, k, h, j, e, c, i, b, g) {
					var a = h.mixin,
						l = {},
						d = l._Line = function(a, b) {
							this.start = a;
							this.end = b
						};
					d.prototype.getValue = function(a) {
						return (this.end - this.start) * a + this.start
					};
					var p = l.Animation = function(b) {
						a(this, b);
						if (h.isArray(this.curve)) this.curve = new d(this.curve[0], this.curve[1])
					};
					p.prototype = new j;
					h.extend(p, {
						duration: 350,
						repeat: 0,
						rate: 20,
						_percent: 0,
						_startRepeatCount: 0,
						_getStep: function() {
							var a = this._percent,
								b = this.easing;
							return b ? b(a) : a
						},
						_fire: function(a, b) {
							var d = b || [];
							if (this[a])
								if (k.debugAtAllCosts) this[a].apply(this,
									d);
								else try {
									this[a].apply(this, d)
								} catch (c) {}
								return this
						},
						play: function(a, b) {
							this._delayTimer && this._clearTimer();
							if (b) this._stopTimer(), this._active = this._paused = !1, this._percent = 0;
							else if (this._active && !this._paused) return this;
							this._fire("beforeBegin", [this.node]);
							var d = a || this.delay,
								c = h.hitch(this, "_play", b);
							if (0 < d) return this._delayTimer = setTimeout(c, d), this;
							c();
							return this
						},
						_play: function() {
							this._delayTimer && this._clearTimer();
							this._startTime = (new Date).valueOf();
							this._paused && (this._startTime -=
								this.duration * this._percent);
							this._active = !0;
							this._paused = !1;
							var a = this.curve.getValue(this._getStep());
							if (!this._percent) {
								if (!this._startRepeatCount) this._startRepeatCount = this.repeat;
								this._fire("onBegin", [a])
							}
							this._fire("onPlay", [a]);
							this._cycle();
							return this
						},
						pause: function() {
							this._delayTimer && this._clearTimer();
							this._stopTimer();
							if (!this._active) return this;
							this._paused = !0;
							this._fire("onPause", [this.curve.getValue(this._getStep())]);
							return this
						},
						gotoPercent: function(a, b) {
							this._stopTimer();
							this._active =
								this._paused = !0;
							this._percent = a;
							b && this.play();
							return this
						},
						stop: function(a) {
							this._delayTimer && this._clearTimer();
							if (!this._timer) return this;
							this._stopTimer();
							if (a) this._percent = 1;
							this._fire("onStop", [this.curve.getValue(this._getStep())]);
							this._active = this._paused = !1;
							return this
						},
						status: function() {
							return this._active ? this._paused ? "paused" : "playing" : "stopped"
						},
						_cycle: function() {
							if (this._active) {
								var a = (new Date).valueOf(),
									a = 0 === this.duration ? 1 : (a - this._startTime) / this.duration;
								1 <= a && (a = 1);
								this._percent =
									a;
								this.easing && (a = this.easing(a));
								this._fire("onAnimate", [this.curve.getValue(a)]);
								if (1 > this._percent) this._startTimer();
								else {
									this._active = !1;
									if (0 < this.repeat) this.repeat--, this.play(null, !0);
									else if (-1 == this.repeat) this.play(null, !0);
									else if (this._startRepeatCount) this.repeat = this._startRepeatCount, this._startRepeatCount = 0;
									this._percent = 0;
									this._fire("onEnd", [this.node]);
									!this.repeat && this._stopTimer()
								}
							}
							return this
						},
						_clearTimer: function() {
							clearTimeout(this._delayTimer);
							delete this._delayTimer
						}
					});
					var m = 0,
						n = null,
						o = {
							run: function() {}
						};
					h.extend(p, {
						_startTimer: function() {
							if (!this._timer) this._timer = c.connect(o, "run", this, "_cycle"), m++;
							n || (n = setInterval(h.hitch(o, "run"), this.rate))
						},
						_stopTimer: function() {
							if (this._timer) c.disconnect(this._timer), this._timer = null, m--;
							0 >= m && (clearInterval(n), n = null, m = 0)
						}
					});
					var r = i("ie") ? function(a) {
						var b = a.style;
						if (!b.width.length && "auto" == g.get(a, "width")) b.width = "auto"
					} : function() {};
					l._fade = function(d) {
						d.node = b.byId(d.node);
						var e = a({
								properties: {}
							}, d),
							d = e.properties.opacity = {};
						d.start = !("start" in e) ? function() {
							return +g.get(e.node, "opacity") || 0
						} : e.start;
						d.end = e.end;
						d = l.animateProperty(e);
						c.connect(d, "beforeBegin", h.partial(r, e.node));
						return d
					};
					l.fadeIn = function(b) {
						return l._fade(a({
							end: 1
						}, b))
					};
					l.fadeOut = function(b) {
						return l._fade(a({
							end: 0
						}, b))
					};
					l._defaultEasing = function(a) {
						return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2
					};
					var q = function(a) {
						this._properties = a;
						for (var b in a) {
							var d = a[b];
							if (d.start instanceof e) d.tempColor = new e
						}
					};
					q.prototype.getValue = function(a) {
						var b = {},
							d;
						for (d in this._properties) {
							var c =
								this._properties[d],
								g = c.start;
							g instanceof e ? b[d] = e.blendColors(g, c.end, a, c.tempColor).toCss() : h.isArray(g) || (b[d] = (c.end - g) * a + g + ("opacity" != d ? c.units || "px" : 0))
						}
						return b
					};
					l.animateProperty = function(d) {
						var l = d.node = b.byId(d.node);
						if (!d.easing) d.easing = f._defaultEasing;
						d = new p(d);
						c.connect(d, "beforeBegin", d, function() {
							var b = {},
								d;
							for (d in this.properties) {
								if ("width" == d || "height" == d) this.node.display = "block";
								var c = this.properties[d];
								h.isFunction(c) && (c = c(l));
								c = b[d] = a({}, h.isObject(c) ? c : {
									end: c
								});
								if (h.isFunction(c.start)) c.start =
									c.start(l);
								if (h.isFunction(c.end)) c.end = c.end(l);
								var f = 0 <= d.toLowerCase().indexOf("color"),
									i = function(a, b) {
										var d = {
											height: a.offsetHeight,
											width: a.offsetWidth
										}[b];
										if (void 0 !== d) return d;
										d = g.get(a, b);
										return "opacity" == b ? +d : f ? d : parseFloat(d)
									};
								if ("end" in c) {
									if (!("start" in c)) c.start = i(l, d)
								} else c.end = i(l, d);
								f ? (c.start = new e(c.start), c.end = new e(c.end)) : c.start = "opacity" == d ? +c.start : parseFloat(c.start)
							}
							this.curve = new q(b)
						});
						c.connect(d, "onAnimate", h.hitch(g, "set", d.node));
						return d
					};
					l.anim = function(a, b, d,
						c, g, e) {
						return l.animateProperty({
							node: a,
							duration: d || p.prototype.duration,
							properties: b,
							easing: c,
							onEnd: g
						}).play(e || 0)
					};
					a(f, l);
					f._Animation = p;
					return l
				})
		},
		"dojox/html/entities": function() {
			define(["dojo/_base/lang"], function(f) {
				var k = f.getObject("dojox.html.entities", !0),
					h = function(e, c) {
						var f, b;
						if (c._encCache && c._encCache.regexp && c._encCache.mapper && c.length == c._encCache.length) f = c._encCache.mapper, b = c._encCache.regexp;
						else {
							f = {};
							b = ["["];
							var g;
							for (g = 0; g < c.length; g++) f[c[g][0]] = "&" + c[g][1] + ";", b.push(c[g][0]);
							b.push("]");
							b = RegExp(b.join(""), "g");
							c._encCache = {
								mapper: f,
								regexp: b,
								length: c.length
							}
						}
						return e = e.replace(b, function(a) {
							return f[a]
						})
					},
					j = function(e, c) {
						var f, b;
						if (c._decCache && c._decCache.regexp && c._decCache.mapper && c.length == c._decCache.length) f = c._decCache.mapper, b = c._decCache.regexp;
						else {
							f = {};
							b = ["("];
							var g;
							for (g = 0; g < c.length; g++) {
								var a = "&" + c[g][1] + ";";
								g && b.push("|");
								f[a] = c[g][0];
								b.push(a)
							}
							b.push(")");
							b = RegExp(b.join(""), "g");
							c._decCache = {
								mapper: f,
								regexp: b,
								length: c.length
							}
						}
						return e = e.replace(b, function(a) {
							return f[a]
						})
					};
				k.html = [
					["&", "amp"],
					['"', "quot"],
					["<", "lt"],
					[">", "gt"],
					["\u00a0", "nbsp"]
				];
				k.latin = [
					["\u00a1", "iexcl"],
					["\u00a2", "cent"],
					["\u00a3", "pound"],
					["\u20ac", "euro"],
					["\u00a4", "curren"],
					["\u00a5", "yen"],
					["\u00a6", "brvbar"],
					["\u00a7", "sect"],
					["\u00a8", "uml"],
					["\u00a9", "copy"],
					["\u00aa", "ordf"],
					["\u00ab", "laquo"],
					["\u00ac", "not"],
					["\u00ad", "shy"],
					["\u00ae", "reg"],
					["\u00af", "macr"],
					["\u00b0", "deg"],
					["\u00b1", "plusmn"],
					["\u00b2", "sup2"],
					["\u00b3", "sup3"],
					["\u00b4", "acute"],
					["\u00b5", "micro"],
					["\u00b6", "para"],
					["\u00b7", "middot"],
					["\u00b8", "cedil"],
					["\u00b9", "sup1"],
					["\u00ba", "ordm"],
					["\u00bb", "raquo"],
					["\u00bc", "frac14"],
					["\u00bd", "frac12"],
					["\u00be", "frac34"],
					["\u00bf", "iquest"],
					["\u00c0", "Agrave"],
					["\u00c1", "Aacute"],
					["\u00c2", "Acirc"],
					["\u00c3", "Atilde"],
					["\u00c4", "Auml"],
					["\u00c5", "Aring"],
					["\u00c6", "AElig"],
					["\u00c7", "Ccedil"],
					["\u00c8", "Egrave"],
					["\u00c9", "Eacute"],
					["\u00ca", "Ecirc"],
					["\u00cb", "Euml"],
					["\u00cc", "Igrave"],
					["\u00cd", "Iacute"],
					["\u00ce", "Icirc"],
					["\u00cf", "Iuml"],
					["\u00d0", "ETH"],
					["\u00d1",
						"Ntilde"
					],
					["\u00d2", "Ograve"],
					["\u00d3", "Oacute"],
					["\u00d4", "Ocirc"],
					["\u00d5", "Otilde"],
					["\u00d6", "Ouml"],
					["\u00d7", "times"],
					["\u00d8", "Oslash"],
					["\u00d9", "Ugrave"],
					["\u00da", "Uacute"],
					["\u00db", "Ucirc"],
					["\u00dc", "Uuml"],
					["\u00dd", "Yacute"],
					["\u00de", "THORN"],
					["\u00df", "szlig"],
					["\u00e0", "agrave"],
					["\u00e1", "aacute"],
					["\u00e2", "acirc"],
					["\u00e3", "atilde"],
					["\u00e4", "auml"],
					["\u00e5", "aring"],
					["\u00e6", "aelig"],
					["\u00e7", "ccedil"],
					["\u00e8", "egrave"],
					["\u00e9", "eacute"],
					["\u00ea", "ecirc"],
					["\u00eb",
						"euml"
					],
					["\u00ec", "igrave"],
					["\u00ed", "iacute"],
					["\u00ee", "icirc"],
					["\u00ef", "iuml"],
					["\u00f0", "eth"],
					["\u00f1", "ntilde"],
					["\u00f2", "ograve"],
					["\u00f3", "oacute"],
					["\u00f4", "ocirc"],
					["\u00f5", "otilde"],
					["\u00f6", "ouml"],
					["\u00f7", "divide"],
					["\u00f8", "oslash"],
					["\u00f9", "ugrave"],
					["\u00fa", "uacute"],
					["\u00fb", "ucirc"],
					["\u00fc", "uuml"],
					["\u00fd", "yacute"],
					["\u00fe", "thorn"],
					["\u00ff", "yuml"],
					["\u0192", "fnof"],
					["\u0391", "Alpha"],
					["\u0392", "Beta"],
					["\u0393", "Gamma"],
					["\u0394", "Delta"],
					["\u0395", "Epsilon"],
					["\u0396", "Zeta"],
					["\u0397", "Eta"],
					["\u0398", "Theta"],
					["\u0399", "Iota"],
					["\u039a", "Kappa"],
					["\u039b", "Lambda"],
					["\u039c", "Mu"],
					["\u039d", "Nu"],
					["\u039e", "Xi"],
					["\u039f", "Omicron"],
					["\u03a0", "Pi"],
					["\u03a1", "Rho"],
					["\u03a3", "Sigma"],
					["\u03a4", "Tau"],
					["\u03a5", "Upsilon"],
					["\u03a6", "Phi"],
					["\u03a7", "Chi"],
					["\u03a8", "Psi"],
					["\u03a9", "Omega"],
					["\u03b1", "alpha"],
					["\u03b2", "beta"],
					["\u03b3", "gamma"],
					["\u03b4", "delta"],
					["\u03b5", "epsilon"],
					["\u03b6", "zeta"],
					["\u03b7", "eta"],
					["\u03b8", "theta"],
					["\u03b9", "iota"],
					["\u03ba", "kappa"],
					["\u03bb", "lambda"],
					["\u03bc", "mu"],
					["\u03bd", "nu"],
					["\u03be", "xi"],
					["\u03bf", "omicron"],
					["\u03c0", "pi"],
					["\u03c1", "rho"],
					["\u03c2", "sigmaf"],
					["\u03c3", "sigma"],
					["\u03c4", "tau"],
					["\u03c5", "upsilon"],
					["\u03c6", "phi"],
					["\u03c7", "chi"],
					["\u03c8", "psi"],
					["\u03c9", "omega"],
					["\u03d1", "thetasym"],
					["\u03d2", "upsih"],
					["\u03d6", "piv"],
					["\u2022", "bull"],
					["\u2026", "hellip"],
					["\u2032", "prime"],
					["\u2033", "Prime"],
					["\u203e", "oline"],
					["\u2044", "frasl"],
					["\u2118", "weierp"],
					["\u2111", "image"],
					["\u211c",
						"real"
					],
					["\u2122", "trade"],
					["\u2135", "alefsym"],
					["\u2190", "larr"],
					["\u2191", "uarr"],
					["\u2192", "rarr"],
					["\u2193", "darr"],
					["\u2194", "harr"],
					["\u21b5", "crarr"],
					["\u21d0", "lArr"],
					["\u21d1", "uArr"],
					["\u21d2", "rArr"],
					["\u21d3", "dArr"],
					["\u21d4", "hArr"],
					["\u2200", "forall"],
					["\u2202", "part"],
					["\u2203", "exist"],
					["\u2205", "empty"],
					["\u2207", "nabla"],
					["\u2208", "isin"],
					["\u2209", "notin"],
					["\u220b", "ni"],
					["\u220f", "prod"],
					["\u2211", "sum"],
					["\u2212", "minus"],
					["\u2217", "lowast"],
					["\u221a", "radic"],
					["\u221d", "prop"],
					["\u221e", "infin"],
					["\u2220", "ang"],
					["\u2227", "and"],
					["\u2228", "or"],
					["\u2229", "cap"],
					["\u222a", "cup"],
					["\u222b", "int"],
					["\u2234", "there4"],
					["\u223c", "sim"],
					["\u2245", "cong"],
					["\u2248", "asymp"],
					["\u2260", "ne"],
					["\u2261", "equiv"],
					["\u2264", "le"],
					["\u2265", "ge"],
					["\u2282", "sub"],
					["\u2283", "sup"],
					["\u2284", "nsub"],
					["\u2286", "sube"],
					["\u2287", "supe"],
					["\u2295", "oplus"],
					["\u2297", "otimes"],
					["\u22a5", "perp"],
					["\u22c5", "sdot"],
					["\u2308", "lceil"],
					["\u2309", "rceil"],
					["\u230a", "lfloor"],
					["\u230b", "rfloor"],
					["\u2329", "lang"],
					["\u232a", "rang"],
					["\u25ca", "loz"],
					["\u2660", "spades"],
					["\u2663", "clubs"],
					["\u2665", "hearts"],
					["\u2666", "diams"],
					["\u0152", "Elig"],
					["\u0153", "oelig"],
					["\u0160", "Scaron"],
					["\u0161", "scaron"],
					["\u0178", "Yuml"],
					["\u02c6", "circ"],
					["\u02dc", "tilde"],
					["\u2002", "ensp"],
					["\u2003", "emsp"],
					["\u2009", "thinsp"],
					["\u200c", "zwnj"],
					["\u200d", "zwj"],
					["\u200e", "lrm"],
					["\u200f", "rlm"],
					["\u2013", "ndash"],
					["\u2014", "mdash"],
					["\u2018", "lsquo"],
					["\u2019", "rsquo"],
					["\u201a", "sbquo"],
					["\u201c", "ldquo"],
					["\u201d", "rdquo"],
					["\u201e", "bdquo"],
					["\u2020", "dagger"],
					["\u2021", "Dagger"],
					["\u2030", "permil"],
					["\u2039", "lsaquo"],
					["\u203a", "rsaquo"]
				];
				k.encode = function(e, c) {
					e && (c ? e = h(e, c) : (e = h(e, k.html), e = h(e, k.latin)));
					return e
				};
				k.decode = function(e, c) {
					e && (c ? e = j(e, c) : (e = j(e, k.html), e = j(e, k.latin)));
					return e
				};
				return k
			})
		},
		"dijit/layout/BorderContainer": function() {
			define("dojo/_base/array,dojo/cookie,dojo/_base/declare,dojo/dom-class,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,dojo/touch,../_WidgetBase,../_Widget,../_TemplatedMixin,./_LayoutWidget,./utils".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r) {
					var q = h("dijit.layout._Splitter", [m, n], {
							live: !0,
							templateString: '<div class="dijitSplitter" data-dojo-attach-event="onkeypress:_onKeyPress,press:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse" tabIndex="0" role="separator"><div class="dijitSplitterThumb"></div></div>',
							constructor: function() {
								this._handlers = []
							},
							postMixInProperties: function() {
								this.inherited(arguments);
								this.horizontal = /top|bottom/.test(this.region);
								this._factor = /top|left/.test(this.region) ?
									1 : -1;
								this._cookieName = this.container.id + "_" + this.region
							},
							buildRendering: function() {
								this.inherited(arguments);
								j.add(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V"));
								if (this.container.persist) {
									var a = k(this._cookieName);
									a && (this.child.domNode.style[this.horizontal ? "height" : "width"] = a)
								}
							},
							_computeMaxSize: function() {
								var a = this.horizontal ? "h" : "w",
									b = c.getMarginBox(this.child.domNode)[a],
									d = f.filter(this.container.getChildren(), function(a) {
										return "center" == a.region
									})[0],
									a = c.getMarginBox(d.domNode)[a];
								return Math.min(this.child.maxSize, b + a)
							},
							_startDrag: function(g) {
								if (!this.cover) this.cover = e.place("<div class=dijitSplitterCover></div>", this.child.domNode, "after");
								j.add(this.cover, "dijitSplitterCoverActive");
								this.fake && e.destroy(this.fake);
								if (!(this._resize = this.live))(this.fake = this.domNode.cloneNode(!0)).removeAttribute("id"), j.add(this.domNode, "dijitSplitterShadow"), e.place(this.fake, this.domNode, "after");
								j.add(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active");
								this.fake && j.remove(this.fake, "dijitSplitterHover dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover");
								var f = this._factor,
									i = this.horizontal,
									m = i ? "pageY" : "pageX",
									h = g[m],
									k = this.domNode.style,
									o = c.getMarginBox(this.child.domNode)[i ? "h" : "w"],
									n = this._computeMaxSize(),
									p = this.child.minSize || 20,
									i = this.region,
									q = "top" == i || "bottom" == i ? "top" : "left",
									r = parseInt(k[q], 10),
									v = this._resize,
									A = a.hitch(this.container, "_layoutChildren", this.child.id),
									i = this.ownerDocument;
								this._handlers = this._handlers.concat([l(i, d.move, this._drag =
									function(a, b) {
										var d = a[m] - h,
											c = f * d + o,
											g = Math.max(Math.min(c, n), p);
										(v || b) && A(g);
										k[q] = d + r + f * (g - c) + "px"
									}), l(i, "dragstart", b.stop), l(this.ownerDocumentBody, "selectstart", b.stop), l(i, d.release, a.hitch(this, "_stopDrag"))]);
								b.stop(g)
							},
							_onMouse: function(a) {
								a = "mouseover" == a.type || "mouseenter" == a.type;
								j.toggle(this.domNode, "dijitSplitterHover", a);
								j.toggle(this.domNode, "dijitSplitter" + (this.horizontal ? "H" : "V") + "Hover", a)
							},
							_stopDrag: function(a) {
								try {
									this.cover && j.remove(this.cover, "dijitSplitterCoverActive"), this.fake &&
										e.destroy(this.fake), j.remove(this.domNode, "dijitSplitterActive dijitSplitter" + (this.horizontal ? "H" : "V") + "Active dijitSplitterShadow"), this._drag(a), this._drag(a, !0)
								} finally {
									this._cleanupHandlers(), delete this._drag
								}
								this.container.persist && k(this._cookieName, this.child.domNode.style[this.horizontal ? "height" : "width"], {
									expires: 365
								})
							},
							_cleanupHandlers: function() {
								for (var a; a = this._handlers.pop();) a.remove()
							},
							_onKeyPress: function(a) {
								this._resize = !0;
								var d = this.horizontal,
									e = 1;
								switch (a.charOrCode) {
									case d ?
									g.UP_ARROW:
										g.LEFT_ARROW: e *= -1;
									case d ? g.DOWN_ARROW:
										g.RIGHT_ARROW: break;
									default:
										return
								}
								d = c.getMarginSize(this.child.domNode)[d ? "h" : "w"] + this._factor * e;
								this.container._layoutChildren(this.child.id, Math.max(Math.min(d, this._computeMaxSize()), this.child.minSize));
								b.stop(a)
							},
							destroy: function() {
								this._cleanupHandlers();
								delete this.child;
								delete this.container;
								delete this.cover;
								delete this.fake;
								this.inherited(arguments)
							}
						}),
						v = h("dijit.layout._Gutter", [m, n], {
							templateString: '<div class="dijitGutter" role="presentation"></div>',
							postMixInProperties: function() {
								this.inherited(arguments);
								this.horizontal = /top|bottom/.test(this.region)
							},
							buildRendering: function() {
								this.inherited(arguments);
								j.add(this.domNode, "dijitGutter" + (this.horizontal ? "H" : "V"))
							}
						}),
						h = h("dijit.layout.BorderContainer", o, {
							design: "headline",
							gutters: !0,
							liveSplitters: !0,
							persist: !1,
							baseClass: "dijitBorderContainer",
							_splitterClass: q,
							postMixInProperties: function() {
								this.gutters || (this.baseClass += "NoGutter");
								this.inherited(arguments)
							},
							startup: function() {
								this._started || (f.forEach(this.getChildren(),
									this._setupChild, this), this.inherited(arguments))
							},
							_setupChild: function(b) {
								var d = b.region;
								if (d) {
									this.inherited(arguments);
									j.add(b.domNode, this.baseClass + "Pane");
									var c = this.isLeftToRight();
									"leading" == d && (d = c ? "left" : "right");
									"trailing" == d && (d = c ? "right" : "left");
									if ("center" != d && (b.splitter || this.gutters) && !b._splitterWidget) c = b.splitter ? this._splitterClass : v, a.isString(c) && (c = a.getObject(c)), c = new c({
											id: b.id + "_splitter",
											container: this,
											child: b,
											region: d,
											live: this.liveSplitters
										}), c.isSplitter = !0, b._splitterWidget =
										c, e.place(c.domNode, b.domNode, "after"), c.startup();
									b.region = d
								}
							},
							layout: function() {
								this._layoutChildren()
							},
							addChild: function(a, b) {
								this.inherited(arguments);
								this._started && this.layout()
							},
							removeChild: function(a) {
								var b = a.region,
									d = a._splitterWidget;
								d && (d.destroy(), delete a._splitterWidget);
								this.inherited(arguments);
								this._started && this._layoutChildren();
								j.remove(a.domNode, this.baseClass + "Pane");
								i.set(a.domNode, {
									top: "auto",
									bottom: "auto",
									left: "auto",
									right: "auto",
									position: "static"
								});
								i.set(a.domNode, "top" ==
									b || "bottom" == b ? "width" : "height", "auto")
							},
							getChildren: function() {
								return f.filter(this.inherited(arguments), function(a) {
									return !a.isSplitter
								})
							},
							getSplitter: function(a) {
								return f.filter(this.getChildren(), function(b) {
									return b.region == a
								})[0]._splitterWidget
							},
							resize: function(a, b) {
								if (!this.cs || !this.pe) {
									var d = this.domNode;
									this.cs = i.getComputedStyle(d);
									this.pe = c.getPadExtents(d, this.cs);
									this.pe.r = i.toPixelValue(d, this.cs.paddingRight);
									this.pe.b = i.toPixelValue(d, this.cs.paddingBottom);
									i.set(d, "padding", "0px")
								}
								this.inherited(arguments)
							},
							_layoutChildren: function(a, b) {
								if (this._borderBox && this._borderBox.h) {
									var d = f.map(this.getChildren(), function(a, b) {
										return {
											pane: a,
											weight: ["center" == a.region ? Infinity : 0, a.layoutPriority, ("sidebar" == this.design ? 1 : -1) * (/top|bottom/.test(a.region) ? 1 : -1), b]
										}
									}, this);
									d.sort(function(a, b) {
										for (var d = a.weight, c = b.weight, g = 0; g < d.length; g++)
											if (d[g] != c[g]) return d[g] - c[g];
										return 0
									});
									var c = [];
									f.forEach(d, function(a) {
										a = a.pane;
										c.push(a);
										a._splitterWidget && c.push(a._splitterWidget)
									});
									r.layoutChildren(this.domNode, {
										l: this.pe.l,
										t: this.pe.t,
										w: this._borderBox.w - this.pe.w,
										h: this._borderBox.h - this.pe.h
									}, c, a, b)
								}
							},
							destroyRecursive: function() {
								f.forEach(this.getChildren(), function(a) {
									var b = a._splitterWidget;
									b && b.destroy();
									delete a._splitterWidget
								});
								this.inherited(arguments)
							}
						});
					h.ChildWidgetProperties = {
						region: "",
						layoutPriority: 0,
						splitter: !1,
						minSize: 0,
						maxSize: Infinity
					};
					a.extend(p, h.ChildWidgetProperties);
					h._Splitter = q;
					h._Gutter = v;
					return h
				})
		},
		"dojo/cookie": function() {
			define("dojo/cookie", ["./_base/kernel", "./regexp"], function(f, k) {
				f.cookie =
					function(f, j, e) {
						var c = document.cookie,
							i;
						if (1 == arguments.length) i = (i = c.match(RegExp("(?:^|; )" + k.escapeString(f) + "=([^;]*)"))) ? decodeURIComponent(i[1]) : void 0;
						else {
							e = e || {};
							c = e.expires;
							if ("number" == typeof c) {
								var b = new Date;
								b.setTime(b.getTime() + 864E5 * c);
								c = e.expires = b
							}
							if (c && c.toUTCString) e.expires = c.toUTCString();
							var j = encodeURIComponent(j),
								c = f + "=" + j,
								g;
							for (g in e) c += "; " + g, b = e[g], !0 !== b && (c += "=" + b);
							document.cookie = c
						}
						return i
					};
				f.cookie.isSupported = function() {
					if (!("cookieEnabled" in navigator)) this("__djCookieTest__",
						"CookiesAllowed"), navigator.cookieEnabled = "CookiesAllowed" == this("__djCookieTest__"), navigator.cookieEnabled && this("__djCookieTest__", "", {
						expires: -1
					});
					return navigator.cookieEnabled
				};
				return f.cookie
			})
		},
		"dojo/regexp": function() {
			define(["./_base/kernel", "./_base/lang"], function(f, k) {
				var h = {};
				k.setObject("dojo.regexp", h);
				h.escapeString = function(f, e) {
					return f.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(c) {
						return e && -1 != e.indexOf(c) ? c : "\\" + c
					})
				};
				h.buildGroupRE = function(f, e, c) {
					if (!(f instanceof Array)) return e(f);
					for (var i = [], b = 0; b < f.length; b++) i.push(e(f[b]));
					return h.group(i.join("|"), c)
				};
				h.group = function(f, e) {
					return "(" + (e ? "?:" : "") + f + ")"
				};
				return h
			})
		},
		"dojo/touch": function() {
			define("./_base/kernel,./_base/lang,./aspect,./dom,./on,./has,./mouse,./ready,./_base/window".split(","), function(f, k, h, j, e, c, i, b, g) {
				function a(a) {
					return function(b, d) {
						return e(b, a, d)
					}
				}
				var h = c("touch"),
					l = !1;
				c("ios") && (c = navigator.userAgent.match(/OS ([\d_]+)/) ? RegExp.$1 : "1", l = 5 > parseFloat(c.replace(/_/, ".").replace(/_/g, "")));
				var d, p;
				h && (b(function() {
						p = g.body();
						g.doc.addEventListener("touchstart", function(a) {
							var b = p;
							p = a.target;
							e.emit(b, "dojotouchout", {
								target: b,
								relatedTarget: p,
								bubbles: !0
							});
							e.emit(p, "dojotouchover", {
								target: p,
								relatedTarget: b,
								bubbles: !0
							})
						}, !0);
						e(g.doc, "touchmove", function(a) {
							if ((a = g.doc.elementFromPoint(a.pageX - (l ? 0 : g.global.pageXOffset), a.pageY - (l ? 0 : g.global.pageYOffset))) && p !== a) e.emit(p, "dojotouchout", {
								target: p,
								relatedTarget: a,
								bubbles: !0
							}), e.emit(a, "dojotouchover", {
								target: a,
								relatedTarget: p,
								bubbles: !0
							}), p = a
						})
					}),
					d = function(a, b) {
						return e(g.doc, "touchmove", function(d) {
							(a === g.doc || j.isDescendant(p, a)) && b.call(this, k.mixin({}, d, {
								target: p,
								touches: d.touches,
								preventDefault: function() {
									d.preventDefault()
								},
								stopPropagation: function() {
									d.stopPropagation()
								}
							}))
						})
					});
				i = {
					press: a(h ? "touchstart" : "mousedown"),
					move: h ? d : a("mousemove"),
					release: a(h ? "touchend" : "mouseup"),
					cancel: h ? a("touchcancel") : i.leave,
					over: a(h ? "dojotouchover" : "mouseover"),
					out: a(h ? "dojotouchout" : "mouseout"),
					enter: i._eventHandler(h ? "dojotouchover" : "mouseover"),
					leave: i._eventHandler(h ?
						"dojotouchout" : "mouseout")
				};
				return f.touch = i
			})
		},
		"dijit/_WidgetBase": function() {
			define("require,dojo/_base/array,dojo/aspect,dojo/_base/config,dojo/_base/connect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/ready,dojo/Stateful,dojo/topic,dojo/_base/window,./Destroyable,./registry".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r, q, v, s, t, u) {
				function y(a) {
					return function(d) {
						b[d ?
							"set" : "remove"](this.domNode, a, d);
						this._set(a, d)
					}
				}
				p.add("dijit-legacy-requires", !m.isAsync);
				p("dijit-legacy-requires") && r(0, function() {
					f(["dijit/_base/manager"])
				});
				var z = {};
				return c("dijit._WidgetBase", [q, t], {
					id: "",
					_setIdAttr: "domNode",
					lang: "",
					_setLangAttr: y("lang"),
					dir: "",
					_setDirAttr: y("dir"),
					textDir: "",
					"class": "",
					_setClassAttr: {
						node: "domNode",
						type: "class"
					},
					style: "",
					title: "",
					tooltip: "",
					baseClass: "",
					srcNodeRef: null,
					domNode: null,
					containerNode: null,
					ownerDocument: null,
					_setOwnerDocumentAttr: function(a) {
						this._set("ownerDocument",
							a)
					},
					attributeMap: {},
					_blankGif: j.blankGif || f.toUrl("dojo/resources/blank.gif"),
					postscript: function(a, b) {
						this.create(a, b)
					},
					create: function(a, b) {
						this.srcNodeRef = i.byId(b);
						this._connects = [];
						this._supportingWidgets = [];
						if (this.srcNodeRef && "string" == typeof this.srcNodeRef.id) this.id = this.srcNodeRef.id;
						if (a) this.params = a, n.mixin(this, a);
						this.postMixInProperties();
						if (!this.id) this.id = u.getUniqueId(this.declaredClass.replace(/\./g, "_")), this.params && delete this.params.id;
						this.ownerDocument = this.ownerDocument ||
							(this.srcNodeRef ? this.srcNodeRef.ownerDocument : s.doc);
						this.ownerDocumentBody = s.body(this.ownerDocument);
						u.add(this);
						this.buildRendering();
						var d;
						if (this.domNode) {
							this._applyAttributes();
							var c = this.srcNodeRef;
							c && c.parentNode && this.domNode !== c && (c.parentNode.replaceChild(this.domNode, c), d = !0);
							this.domNode.setAttribute("widgetId", this.id)
						}
						this.postCreate();
						d && delete this.srcNodeRef;
						this._created = !0
					},
					_applyAttributes: function() {
						var a = this.constructor,
							b = a._setterAttrs;
						if (!b) {
							var b = a._setterAttrs = [],
								d;
							for (d in this.attributeMap) b.push(d);
							var a = a.prototype,
								c;
							for (c in a) c in this.attributeMap || "_set" + c.replace(/^[a-z]|-[a-zA-Z]/g, function(a) {
								return a.charAt(a.length - 1).toUpperCase()
							}) + "Attr" in a && b.push(c)
						}
						var g = {},
							e;
						for (e in this.params || {}) g[e] = this[e];
						k.forEach(b, function(a) {
							a in g || this[a] && this.set(a, this[a])
						}, this);
						for (e in g) this.set(e, g[e])
					},
					postMixInProperties: function() {},
					buildRendering: function() {
						if (!this.domNode) this.domNode = this.srcNodeRef || this.ownerDocument.createElement("div");
						if (this.baseClass) {
							var a = this.baseClass.split(" ");
							this.isLeftToRight() || (a = a.concat(k.map(a, function(a) {
								return a + "Rtl"
							})));
							g.add(this.domNode, a)
						}
					},
					postCreate: function() {},
					startup: function() {
						if (!this._started) this._started = !0, k.forEach(this.getChildren(), function(a) {
							if (!a._started && !a._destroyed && n.isFunction(a.startup)) a.startup(), a._started = !0
						})
					},
					destroyRecursive: function(a) {
						this._beingDestroyed = !0;
						this.destroyDescendants(a);
						this.destroy(a)
					},
					destroy: function(a) {
						function b(d) {
							d.destroyRecursive ? d.destroyRecursive(a) : d.destroy && d.destroy(a)
						}
						this._beingDestroyed = !0;
						this.uninitialize();
						k.forEach(this._connects, n.hitch(this, "disconnect"));
						k.forEach(this._supportingWidgets, b);
						this.domNode && k.forEach(u.findWidgets(this.domNode, this.containerNode), b);
						this.destroyRendering(a);
						u.remove(this.id);
						this._destroyed = !0
					},
					destroyRendering: function(d) {
						this.bgIframe && (this.bgIframe.destroy(d), delete this.bgIframe);
						this.domNode && (d ? b.remove(this.domNode, "widgetId") : a.destroy(this.domNode), delete this.domNode);
						this.srcNodeRef && (d || a.destroy(this.srcNodeRef), delete this.srcNodeRef)
					},
					destroyDescendants: function(a) {
						k.forEach(this.getChildren(), function(b) {
							b.destroyRecursive && b.destroyRecursive(a)
						})
					},
					uninitialize: function() {
						return !1
					},
					_setStyleAttr: function(a) {
						var b = this.domNode;
						n.isObject(a) ? d.set(b, a) : b.style.cssText = b.style.cssText ? b.style.cssText + ("; " + a) : a;
						this._set("style", a)
					},
					_attrToDom: function(a, d, c) {
						c = 3 <= arguments.length ? c : this.attributeMap[a];
						k.forEach(n.isArray(c) ? c : [c], function(c) {
							var e = this[c.node || c || "domNode"];
							switch (c.type || "attribute") {
								case "attribute":
									n.isFunction(d) &&
										(d = n.hitch(this, d));
									c = c.attribute ? c.attribute : /^on[A-Z][a-zA-Z]*$/.test(a) ? a.toLowerCase() : a;
									e.tagName ? b.set(e, c, d) : e.set(c, d);
									break;
								case "innerText":
									e.innerHTML = "";
									e.appendChild(this.ownerDocument.createTextNode(d));
									break;
								case "innerHTML":
									e.innerHTML = d;
									break;
								case "class":
									g.replace(e, d, this[a])
							}
						}, this)
					},
					get: function(a) {
						var b = this._getAttrNames(a);
						return this[b.g] ? this[b.g]() : this[a]
					},
					set: function(a, b) {
						if ("object" === typeof a) {
							for (var d in a) this.set(d, a[d]);
							return this
						}
						d = this._getAttrNames(a);
						var c =
							this[d.s];
						if (n.isFunction(c)) var g = c.apply(this, Array.prototype.slice.call(arguments, 1));
						else {
							var c = this.focusNode && !n.isFunction(this.focusNode) ? "focusNode" : "domNode",
								e = this[c].tagName,
								f;
							if (!(f = z[e])) {
								f = this[c];
								var l = {},
									i;
								for (i in f) l[i.toLowerCase()] = !0;
								f = z[e] = l
							}
							i = a in this.attributeMap ? this.attributeMap[a] : d.s in this ? this[d.s] : d.l in f && "function" != typeof b || /^aria-|^data-|^role$/.test(a) ? c : null;
							null != i && this._attrToDom(a, b, i);
							this._set(a, b)
						}
						return g || this
					},
					_attrPairNames: {},
					_getAttrNames: function(a) {
						var b =
							this._attrPairNames;
						if (b[a]) return b[a];
						var d = a.replace(/^[a-z]|-[a-zA-Z]/g, function(a) {
							return a.charAt(a.length - 1).toUpperCase()
						});
						return b[a] = {
							n: a + "Node",
							s: "_set" + d + "Attr",
							g: "_get" + d + "Attr",
							l: d.toLowerCase()
						}
					},
					_set: function(a, b) {
						var d = this[a];
						this[a] = b;
						this._created && b !== d && (this._watchCallbacks && this._watchCallbacks(a, d, b), this.emit("attrmodified-" + a, {
							detail: {
								prevValue: d,
								newValue: b
							}
						}))
					},
					emit: function(a, b, d) {
						b = b || {};
						if (void 0 === b.bubbles) b.bubbles = !0;
						if (void 0 === b.cancelable) b.cancelable = !0;
						if (!b.detail) b.detail = {};
						b.detail.widget = this;
						var c, g = this["on" + a];
						g && (c = g.apply(this, d ? d : [b]));
						this._started && !this._beingDestroyed && o.emit(this.domNode, a.toLowerCase(), b);
						return c
					},
					on: function(a, b) {
						var d = this._onMap(a);
						return d ? h.after(this, d, b, !0) : this.own(o(this.domNode, a, b))[0]
					},
					_onMap: function(a) {
						var b = this.constructor,
							d = b._onMap;
						if (!d) {
							var d = b._onMap = {},
								c;
							for (c in b.prototype) /^on/.test(c) && (d[c.replace(/^on/, "").toLowerCase()] = c)
						}
						return d["string" == typeof a && a.toLowerCase()]
					},
					toString: function() {
						return "[Widget " +
							this.declaredClass + ", " + (this.id || "NO ID") + "]"
					},
					getChildren: function() {
						return this.containerNode ? u.findWidgets(this.containerNode) : []
					},
					getParent: function() {
						return u.getEnclosingWidget(this.domNode.parentNode)
					},
					connect: function(a, b, d) {
						return this.own(e.connect(a, b, this, d))[0]
					},
					disconnect: function(a) {
						a.remove()
					},
					subscribe: function(a, b) {
						return this.own(v.subscribe(a, n.hitch(this, b)))[0]
					},
					unsubscribe: function(a) {
						a.remove()
					},
					isLeftToRight: function() {
						return this.dir ? "ltr" == this.dir : l.isBodyLtr(this.ownerDocument)
					},
					isFocusable: function() {
						return this.focus && "none" != d.get(this.domNode, "display")
					},
					placeAt: function(b, d) {
						var c = !b.tagName && u.byId(b);
						c && c.addChild && (!d || "number" === typeof d) ? c.addChild(this, d) : (c = c ? c.containerNode && !/after|before|replace/.test(d || "") ? c.containerNode : c.domNode : i.byId(b, this.ownerDocument), a.place(this.domNode, c, d), !this._started && (this.getParent() || {})._started && this.startup());
						return this
					},
					getTextDir: function(a, b) {
						return b
					},
					applyTextDir: function() {},
					defer: function(a, b) {
						var d = setTimeout(n.hitch(this,
							function() {
								d = null;
								this._destroyed || n.hitch(this, a)()
							}), b || 0);
						return {
							remove: function() {
								d && (clearTimeout(d), d = null);
								return null
							}
						}
					}
				})
			})
		},
		"dojo/Stateful": function() {
			define("dojo/Stateful", ["./_base/declare", "./_base/lang", "./_base/array", "dojo/when"], function(f, k, h, j) {
				return f("dojo.Stateful", null, {
					_attrPairNames: {},
					_getAttrNames: function(e) {
						var c = this._attrPairNames;
						return c[e] ? c[e] : c[e] = {
							s: "_" + e + "Setter",
							g: "_" + e + "Getter"
						}
					},
					postscript: function(e) {
						e && this.set(e)
					},
					_get: function(e, c) {
						return "function" ===
							typeof this[c.g] ? this[c.g]() : this[e]
					},
					get: function(e) {
						return this._get(e, this._getAttrNames(e))
					},
					set: function(e, c) {
						if ("object" === typeof e) {
							for (var f in e) e.hasOwnProperty(f) && "_watchCallbacks" != f && this.set(f, e[f]);
							return this
						}
						f = this._getAttrNames(e);
						var b = this._get(e, f);
						f = this[f.s];
						var g;
						"function" === typeof f ? g = f.apply(this, Array.prototype.slice.call(arguments, 1)) : this[e] = c;
						if (this._watchCallbacks) {
							var a = this;
							j(g, function() {
								a._watchCallbacks(e, b, c)
							})
						}
						return this
					},
					_changeAttrValue: function(e, c) {
						var f =
							this.get(e);
						this[e] = c;
						this._watchCallbacks && this._watchCallbacks(e, f, c);
						return this
					},
					watch: function(e, c) {
						var f = this._watchCallbacks;
						if (!f) var b = this,
							f = this._watchCallbacks = function(a, d, c, g) {
								var e = function(g) {
									if (g)
										for (var g = g.slice(), e = 0, f = g.length; e < f; e++) g[e].call(b, a, d, c)
								};
								e(f["_" + a]);
								g || e(f["*"])
							};
						!c && "function" === typeof e ? (c = e, e = "*") : e = "_" + e;
						var g = f[e];
						"object" !== typeof g && (g = f[e] = []);
						g.push(c);
						var a = {};
						a.unwatch = a.remove = function() {
							var a = h.indexOf(g, c); - 1 < a && g.splice(a, 1)
						};
						return a
					}
				})
			})
		},
		"dijit/Destroyable": function() {
			define(["dojo/_base/array",
				"dojo/aspect", "dojo/_base/declare"
			], function(f, k, h) {
				return h("dijit.Destroyable", null, {
					destroy: function() {
						this._destroyed = !0
					},
					own: function() {
						f.forEach(arguments, function(f) {
							var e = "destroyRecursive" in f ? "destroyRecursive" : "destroy" in f ? "destroy" : "remove",
								c = k.before(this, "destroy", function(c) {
									f[e](c)
								});
							k.after(f, e, function() {
								c.remove()
							}, !0)
						}, this);
						return arguments
					}
				})
			})
		},
		"dijit/registry": function() {
			define(["dojo/_base/array", "dojo/sniff", "dojo/_base/unload", "dojo/_base/window", "./main"], function(f, k,
				h, j, e) {
				var c = {},
					i = {},
					b = {
						length: 0,
						add: function(b) {
							if (i[b.id]) throw Error("Tried to register widget with id==" + b.id + " but that id is already registered");
							i[b.id] = b;
							this.length++
						},
						remove: function(b) {
							i[b] && (delete i[b], this.length--)
						},
						byId: function(b) {
							return "string" == typeof b ? i[b] : b
						},
						byNode: function(b) {
							return i[b.getAttribute("widgetId")]
						},
						toArray: function() {
							var b = [],
								a;
							for (a in i) b.push(i[a]);
							return b
						},
						getUniqueId: function(b) {
							var a;
							do a = b + "_" + (b in c ? ++c[b] : c[b] = 0); while (i[a]);
							return "dijit" == e._scopeName ?
								a : e._scopeName + "_" + a
						},
						findWidgets: function(b, a) {
							function c(b) {
								for (b = b.firstChild; b; b = b.nextSibling)
									if (1 == b.nodeType) {
										var g = b.getAttribute("widgetId");
										g ? (g = i[g]) && d.push(g) : b !== a && c(b)
									}
							}
							var d = [];
							c(b);
							return d
						},
						_destroyAll: function() {
							e._curFocus = null;
							e._prevFocus = null;
							e._activeStack = [];
							f.forEach(b.findWidgets(j.body()), function(b) {
								b._destroyed || (b.destroyRecursive ? b.destroyRecursive() : b.destroy && b.destroy())
							})
						},
						getEnclosingWidget: function(b) {
							for (; b;) {
								var a = b.getAttribute && b.getAttribute("widgetId");
								if (a) return i[a];
								b = b.parentNode
							}
							return null
						},
						_hash: i
					};
				return e.registry = b
			})
		},
		"dijit/main": function() {
			define(["dojo/_base/kernel"], function(f) {
				return f.dijit
			})
		},
		"dijit/_Widget": function() {
			define("dojo/aspect,dojo/_base/config,dojo/_base/connect,dojo/_base/declare,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/query,dojo/ready,./registry,./_WidgetBase,./_OnDijitClickMixin,./_FocusMixin,dojo/uacss,./hccss".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p) {
				function m() {}

				function n(a) {
					return function(b,
						d, c, g) {
						return b && "string" == typeof d && b[d] == m ? b.on(d.substring(2).toLowerCase(), i.hitch(c, g)) : a.apply(h, arguments)
					}
				}
				f.around(h, "connect", n);
				c.connect && f.around(c, "connect", n);
				f = j("dijit._Widget", [l, d, p], {
					onClick: m,
					onDblClick: m,
					onKeyDown: m,
					onKeyPress: m,
					onKeyUp: m,
					onMouseDown: m,
					onMouseMove: m,
					onMouseOut: m,
					onMouseOver: m,
					onMouseLeave: m,
					onMouseEnter: m,
					onMouseUp: m,
					constructor: function(a) {
						this._toConnect = {};
						for (var b in a) this[b] === m && (this._toConnect[b.replace(/^on/, "").toLowerCase()] = a[b], delete a[b])
					},
					postCreate: function() {
						this.inherited(arguments);
						for (var a in this._toConnect) this.on(a, this._toConnect[a]);
						delete this._toConnect
					},
					on: function(a, b) {
						return this[this._onMap(a)] === m ? h.connect(this.domNode, a.toLowerCase(), this, b) : this.inherited(arguments)
					},
					_setFocusedAttr: function(a) {
						this._focused = a;
						this._set("focused", a)
					},
					setAttribute: function(a, b) {
						c.deprecated(this.declaredClass + "::setAttribute(attr, value) is deprecated. Use set() instead.", "", "2.0");
						this.set(a, b)
					},
					attr: function(a, b) {
						if (k.isDebug) {
							var d = arguments.callee._ach || (arguments.callee._ach = {}),
								g = (arguments.callee.caller || "unknown caller").toString();
							d[g] || (c.deprecated(this.declaredClass + "::attr() is deprecated. Use get() or set() instead, called from " + g, "", "2.0"), d[g] = !0)
						}
						return 2 <= arguments.length || "object" === typeof a ? this.set.apply(this, arguments) : this.get(a)
					},
					getDescendants: function() {
						c.deprecated(this.declaredClass + "::getDescendants() is deprecated. Use getChildren() instead.", "", "2.0");
						return this.containerNode ? b("[widgetId]", this.containerNode).map(a.byNode) : []
					},
					_onShow: function() {
						this.onShow()
					},
					onShow: function() {},
					onHide: function() {},
					onClose: function() {
						return !0
					}
				});
				e("dijit-legacy-requires") && g(0, function() {
					require(["dijit/_base"])
				});
				return f
			})
		},
		"dijit/_OnDijitClickMixin": function() {
			define("dojo/on,dojo/_base/array,dojo/keys,dojo/_base/declare,dojo/has,dojo/_base/unload,dojo/_base/window,./a11yclick".split(","), function(f, k, h, j, e, c, i, b) {
				f = j("dijit._OnDijitClickMixin", null, {
					connect: function(c, a, e) {
						return this.inherited(arguments, [c, "ondijitclick" == a ? b : a, e])
					}
				});
				f.a11yclick = b;
				return f
			})
		},
		"dijit/a11yclick": function() {
			define("dojo/on,dojo/_base/array,dojo/keys,dojo/_base/declare,dojo/has,dojo/_base/unload,dojo/_base/window".split(","),
				function(f, k, h, j, e, c, i) {
					function b(a) {
						return (a.keyCode === h.ENTER || a.keyCode === h.SPACE) && !a.ctrlKey && !a.shiftKey && !a.altKey && !a.metaKey
					}
					var g = null;
					e("dom-addeventlistener") ? i.doc.addEventListener("keydown", function(a) {
						g = a.target
					}, !0) : function() {
						var a = function(a) {
							g = a.srcElement
						};
						i.doc.attachEvent("onkeydown", a);
						c.addOnWindowUnload(function() {
							i.doc.detachEvent("onkeydown", a)
						})
					}();
					return function(a, c) {
						if (/input|button/i.test(a.nodeName)) return f(a, "click", c);
						var d = [f(a, "keydown", function(a) {
							if (b(a)) g =
								a.target, a.preventDefault()
						}), f(a, "keyup", function(a) {
							b(a) && a.target == g && (g = null, f.emit(a.target, "click", {
								cancelable: !0,
								bubbles: !0
							}))
						}), f(a, "click", function(a) {
							c.call(this, a)
						})];
						if (e("touch")) {
							var i;
							d.push(f(a, "touchend", function(a) {
								var b = a.target;
								i = setTimeout(function() {
									i = null;
									f.emit(b, "click", {
										cancelable: !0,
										bubbles: !0
									})
								}, 600)
							}), f(a, "click", function() {
								i && clearTimeout(i)
							}))
						}
						return {
							remove: function() {
								k.forEach(d, function(a) {
									a.remove()
								});
								i && (clearTimeout(i), i = null)
							}
						}
					}
				})
		},
		"dijit/_FocusMixin": function() {
			define(["./focus",
				"./_WidgetBase", "dojo/_base/declare", "dojo/_base/lang"
			], function(f, k, h, j) {
				j.extend(k, {
					focused: !1,
					onFocus: function() {},
					onBlur: function() {},
					_onFocus: function() {
						this.onFocus()
					},
					_onBlur: function() {
						this.onBlur()
					}
				});
				return h("dijit._FocusMixin", null, {
					_focusManager: f
				})
			})
		},
		"dijit/focus": function() {
			define("dojo/aspect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-construct,dojo/Evented,dojo/_base/lang,dojo/on,dojo/ready,dojo/sniff,dojo/Stateful,dojo/_base/unload,dojo/_base/window,dojo/window,./a11y,./registry,./main".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r) {
					var q = new(k([l, c], {
						curNode: null,
						activeStack: [],
						constructor: function() {
							var a = i.hitch(this, function(a) {
								h.isDescendant(this.curNode, a) && this.set("curNode", null);
								h.isDescendant(this.prevNode, a) && this.set("prevNode", null)
							});
							f.before(e, "empty", a);
							f.before(e, "destroy", a)
						},
						registerIframe: function(a) {
							return this.registerWin(a.contentWindow, a)
						},
						registerWin: function(b, d) {
							var c = this,
								g = function(b) {
									c._justMouseDowned = !0;
									setTimeout(function() {
										c._justMouseDowned = !1
									}, 0);
									if (!a("ie") || !b || !(b.srcElement && null == b.srcElement.parentNode)) c._onTouchNode(d || b.target || b.srcElement, "mouse")
								},
								e = a("ie") ? b.document.documentElement : b.document;
							if (e) {
								if (a("ie")) {
									b.document.body.attachEvent("onmousedown", g);
									var f = function(a) {
										var b = a.srcElement.tagName.toLowerCase();
										"#document" == b || "body" == b || (n.isTabNavigable(a.srcElement) ? c._onFocusNode(d || a.srcElement) : c._onTouchNode(d || a.srcElement))
									};
									e.attachEvent("onfocusin", f);
									var l = function(a) {
										c._onBlurNode(d || a.srcElement)
									};
									e.attachEvent("onfocusout",
										l);
									return {
										remove: function() {
											b.document.detachEvent("onmousedown", g);
											e.detachEvent("onfocusin", f);
											e.detachEvent("onfocusout", l);
											e = null
										}
									}
								}
								e.body.addEventListener("mousedown", g, !0);
								e.body.addEventListener("touchstart", g, !0);
								var i = function(a) {
									c._onFocusNode(d || a.target)
								};
								e.addEventListener("focus", i, !0);
								var m = function(a) {
									c._onBlurNode(d || a.target)
								};
								e.addEventListener("blur", m, !0);
								return {
									remove: function() {
										e.body.removeEventListener("mousedown", g, !0);
										e.body.removeEventListener("touchstart", g, !0);
										e.removeEventListener("focus",
											i, !0);
										e.removeEventListener("blur", m, !0);
										e = null
									}
								}
							}
						},
						_onBlurNode: function() {
							this._clearFocusTimer && clearTimeout(this._clearFocusTimer);
							this._clearFocusTimer = setTimeout(i.hitch(this, function() {
								this.set("prevNode", this.curNode);
								this.set("curNode", null)
							}), 0);
							if (!this._justMouseDowned) this._clearActiveWidgetsTimer && clearTimeout(this._clearActiveWidgetsTimer), this._clearActiveWidgetsTimer = setTimeout(i.hitch(this, function() {
								delete this._clearActiveWidgetsTimer;
								this._setStack([])
							}), 0)
						},
						_onTouchNode: function(a,
							b) {
							this._clearActiveWidgetsTimer && (clearTimeout(this._clearActiveWidgetsTimer), delete this._clearActiveWidgetsTimer);
							var d = [];
							try {
								for (; a;) {
									var c = j.get(a, "dijitPopupParent");
									if (c) a = o.byId(c).domNode;
									else if (a.tagName && "body" == a.tagName.toLowerCase()) {
										if (a === p.body()) break;
										a = m.get(a.ownerDocument).frameElement
									} else {
										var g = a.getAttribute && a.getAttribute("widgetId"),
											e = g && o.byId(g);
										e && !("mouse" == b && e.get("disabled")) && d.unshift(g);
										a = a.parentNode
									}
								}
							} catch (f) {}
							this._setStack(d, b)
						},
						_onFocusNode: function(a) {
							a &&
								9 != a.nodeType && (this._clearFocusTimer && (clearTimeout(this._clearFocusTimer), delete this._clearFocusTimer), this._onTouchNode(a), a != this.curNode && (this.set("prevNode", this.curNode), this.set("curNode", a)))
						},
						_setStack: function(a, b) {
							var d = this.activeStack;
							this.set("activeStack", a);
							for (var c = 0; c < Math.min(d.length, a.length) && !(d[c] != a[c]); c++);
							for (var g, e = d.length - 1; e >= c; e--)
								if (g = o.byId(d[e])) g._hasBeenBlurred = !0, g.set("focused", !1), g._focusManager == this && g._onBlur(b), this.emit("widget-blur", g, b);
							for (e =
								c; e < a.length; e++)
								if (g = o.byId(a[e])) g.set("focused", !0), g._focusManager == this && g._onFocus(b), this.emit("widget-focus", g, b)
						},
						focus: function(a) {
							if (a) try {
								a.focus()
							} catch (b) {}
						}
					}));
					g(function() {
						var b = q.registerWin(m.get(p.doc));
						a("ie") && d.addOnWindowUnload(function() {
							b && (b.remove(), b = null)
						})
					});
					r.focus = function(a) {
						q.focus(a)
					};
					for (var v in q) /^_/.test(v) || (r.focus[v] = "function" == typeof q[v] ? i.hitch(q, v) : q[v]);
					q.watch(function(a, b, d) {
						r.focus[a] = d
					});
					return q
				})
		},
		"dojo/window": function() {
			define("./_base/lang,./sniff,./_base/window,./dom,./dom-geometry,./dom-style".split(","),
				function(f, k, h, j, e, c) {
					var i = {
						getBox: function(b) {
							var b = b || h.doc,
								c = "BackCompat" == b.compatMode ? h.body(b) : b.documentElement,
								a = e.docScroll(b);
							if (k("touch")) var f = i.get(b),
								b = f.innerWidth || c.clientWidth,
								c = f.innerHeight || c.clientHeight;
							else b = c.clientWidth, c = c.clientHeight;
							return {
								l: a.x,
								t: a.y,
								w: b,
								h: c
							}
						},
						get: function(b) {
							if (k("ie") && i !== document.parentWindow) {
								b.parentWindow.execScript("document._parentWindow = window;", "Javascript");
								var c = b._parentWindow;
								b._parentWindow = null;
								return c
							}
							return b.parentWindow || b.defaultView
						},
						scrollIntoView: function(b, g) {
							try {
								var b = j.byId(b),
									a = b.ownerDocument || h.doc,
									f = h.body(a),
									d = a.documentElement || f.parentNode,
									i = k("ie"),
									m = k("webkit");
								if ((!k("mozilla") && !i && !m && !k("opera") || b == f || b == d) && "undefined" != typeof b.scrollIntoView) b.scrollIntoView(!1);
								else {
									var n = "BackCompat" == a.compatMode,
										o = 9 <= i && "frameElement" in b.ownerDocument.parentWindow ? 0 < d.clientHeight && 0 < d.clientWidth && (0 == f.clientHeight || 0 == f.clientWidth || f.clientHeight > d.clientHeight || f.clientWidth > d.clientWidth) ? d : f : n ? f : d,
										m = m ? f : o,
										r = o.clientWidth,
										q = o.clientHeight,
										v = !e.isBodyLtr(a),
										s = g || e.position(b),
										t = b.parentNode,
										a = function(a) {
											return 6 >= i || i && n ? !1 : "fixed" == c.get(a, "position").toLowerCase()
										};
									if (!a(b))
										for (; t;) {
											t == f && (t = m);
											var u = e.position(t),
												y = a(t);
											if (t == m) {
												u.w = r;
												u.h = q;
												m == d && i && v && (u.x += m.offsetWidth - u.w);
												if (0 > u.x || !i) u.x = 0;
												if (0 > u.y || !i) u.y = 0
											} else {
												var z = e.getPadBorderExtents(t);
												u.w -= z.w;
												u.h -= z.h;
												u.x += z.l;
												u.y += z.t;
												var I = t.clientWidth,
													J = u.w - I;
												if (0 < I && 0 < J) u.w = I, u.x += v && (i || t.clientLeft > z.l) ? J : 0;
												I = t.clientHeight;
												J = u.h - I;
												if (0 < I && 0 < J) u.h = I
											}
											if (y) {
												if (0 >
													u.y) u.h += u.y, u.y = 0;
												if (0 > u.x) u.w += u.x, u.x = 0;
												if (u.y + u.h > q) u.h = q - u.y;
												if (u.x + u.w > r) u.w = r - u.x
											}
											var N = s.x - u.x,
												E = s.y - Math.max(u.y, 0),
												S = N + s.w - u.w,
												Q = E + s.h - u.h;
											if (0 < S * N) {
												var B = Math[0 > N ? "max" : "min"](N, S);
												if (v && (8 == i && !n || 9 <= i)) B = -B;
												s.x += t.scrollLeft;
												t.scrollLeft += B;
												s.x -= t.scrollLeft
											}
											0 < Q * E && (s.y += t.scrollTop, t.scrollTop += Math[0 > E ? "max" : "min"](E, Q), s.y -= t.scrollTop);
											t = t != m && !y && t.parentNode
										}
								}
							} catch (A) {
								b.scrollIntoView(!1)
							}
						}
					};
					f.setObject("dojo.window", i);
					return i
				})
		},
		"dijit/a11y": function() {
			define("dojo/_base/array,dojo/_base/config,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-style,dojo/sniff,./main".split(","),
				function(f, k, h, j, e, c, i, b) {
					var g = b._isElementShown = function(a) {
						var b = c.get(a);
						return "hidden" != b.visibility && "collapsed" != b.visibility && "none" != b.display && "hidden" != e.get(a, "type")
					};
					b.hasDefaultTabStop = function(a) {
						switch (a.nodeName.toLowerCase()) {
							case "a":
								return e.has(a, "href");
							case "area":
							case "button":
							case "input":
							case "object":
							case "select":
							case "textarea":
								return !0;
							case "iframe":
								var b;
								try {
									var c = a.contentDocument;
									if ("designMode" in c && "on" == c.designMode) return !0;
									b = c.body
								} catch (g) {
									try {
										b = a.contentWindow.document.body
									} catch (f) {
										return !1
									}
								}
								return b &&
									("true" == b.contentEditable || b.firstChild && "true" == b.firstChild.contentEditable);
							default:
								return "true" == a.contentEditable
						}
					};
					var a = b.isTabNavigable = function(a) {
						return e.get(a, "disabled") ? !1 : e.has(a, "tabIndex") ? 0 <= e.get(a, "tabIndex") : b.hasDefaultTabStop(a)
					};
					b._getTabNavigable = function(b) {
						function d(a) {
							return a && "input" == a.tagName.toLowerCase() && a.type && "radio" == a.type.toLowerCase() && a.name && a.name.toLowerCase()
						}
						var c, f, h, j, k, q, v = {},
							s = function(b) {
								for (b = b.firstChild; b; b = b.nextSibling)
									if (!(1 != b.nodeType ||
											i("ie") && "HTML" !== b.scopeName || !g(b))) {
										if (a(b)) {
											var l = +e.get(b, "tabIndex");
											if (!e.has(b, "tabIndex") || 0 == l) c || (c = b), f = b;
											else if (0 < l) {
												if (!h || l < j) j = l, h = b;
												if (!k || l >= q) q = l, k = b
											}
											l = d(b);
											e.get(b, "checked") && l && (v[l] = b)
										}
										"SELECT" != b.nodeName.toUpperCase() && s(b)
									}
							};
						g(b) && s(b);
						return {
							first: v[d(c)] || c,
							last: v[d(f)] || f,
							lowest: v[d(h)] || h,
							highest: v[d(k)] || k
						}
					};
					b.getFirstInTabbingOrder = function(a, d) {
						var c = b._getTabNavigable(j.byId(a, d));
						return c.lowest ? c.lowest : c.first
					};
					b.getLastInTabbingOrder = function(a, d) {
						var c = b._getTabNavigable(j.byId(a,
							d));
						return c.last ? c.last : c.highest
					};
					return {
						hasDefaultTabStop: b.hasDefaultTabStop,
						isTabNavigable: b.isTabNavigable,
						_getTabNavigable: b._getTabNavigable,
						getFirstInTabbingOrder: b.getFirstInTabbingOrder,
						getLastInTabbingOrder: b.getLastInTabbingOrder
					}
				})
		},
		"dojo/uacss": function() {
			define(["./dom-geometry", "./_base/lang", "./ready", "./sniff", "./_base/window"], function(f, k, h, j, e) {
				var c = e.doc.documentElement,
					i = j("ie"),
					b = j("opera"),
					g = Math.floor,
					a = j("ff"),
					e = f.boxModel.replace(/-/, ""),
					i = {
						dj_ie: i,
						dj_ie6: 6 == g(i),
						dj_ie7: 7 ==
							g(i),
						dj_ie8: 8 == g(i),
						dj_ie9: 9 == g(i),
						dj_quirks: j("quirks"),
						dj_iequirks: i && j("quirks"),
						dj_opera: b,
						dj_khtml: j("khtml"),
						dj_webkit: j("webkit"),
						dj_safari: j("safari"),
						dj_chrome: j("chrome"),
						dj_gecko: j("mozilla"),
						dj_ff3: 3 == g(a)
					};
				i["dj_" + e] = !0;
				var l = "",
					d;
				for (d in i) i[d] && (l += d + " ");
				c.className = k.trim(c.className + " " + l);
				h(90, function() {
					if (!f.isBodyLtr()) {
						var a = "dj_rtl dijitRtl " + l.replace(/ /g, "-rtl ");
						c.className = k.trim(c.className + " " + a + "dj_rtl dijitRtl " + l.replace(/ /g, "-rtl "))
					}
				});
				return j
			})
		},
		"dijit/hccss": function() {
			define(["dojo/dom-class",
				"dojo/hccss", "dojo/ready", "dojo/_base/window"
			], function(f, k, h, j) {
				h(90, function() {
					k("highcontrast") && f.add(j.body(), "dijit_a11y")
				});
				return k
			})
		},
		"dojo/hccss": function() {
			define("require,./_base/config,./dom-class,./dom-construct,./dom-style,./has,./ready,./_base/window".split(","), function(f, k, h, j, e, c, i, b) {
				c.add("highcontrast", function() {
					var c = b.doc.createElement("div");
					c.style.cssText = "border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;background-image: url(" + (k.blankGif ||
						f.toUrl("./resources/blank.gif")) + ");";
					b.body().appendChild(c);
					var a = e.getComputedStyle(c),
						l = a.backgroundImage,
						a = a.borderTopColor == a.borderRightColor || l && ("none" == l || "url(invalid-url:)" == l);
					j.destroy(c);
					return a
				});
				i(90, function() {
					c("highcontrast") && h.add(b.body(), "dj_a11y")
				});
				return c
			})
		},
		"dijit/_TemplatedMixin": function() {
			define("dojo/_base/lang,dojo/touch,./_WidgetBase,dojo/string,dojo/cache,dojo/_base/array,dojo/_base/declare,dojo/dom-construct,dojo/sniff,dojo/_base/unload".split(","), function(f,
				k, h, j, e, c, i, b, g, a) {
				var l = i("dijit._TemplatedMixin", null, {
					templateString: null,
					templatePath: null,
					_skipNodeCache: !1,
					_earlyTemplatedStartup: !1,
					constructor: function() {
						this._attachPoints = [];
						this._attachEvents = []
					},
					_stringRepl: function(a) {
						var b = this.declaredClass,
							c = this;
						return j.substitute(a, this, function(a, d) {
							"!" == d.charAt(0) && (a = f.getObject(d.substr(1), !1, c));
							if ("undefined" == typeof a) throw Error(b + " template:" + d);
							return null == a ? "" : "!" == d.charAt(0) ? a : a.toString().replace(/"/g, "&quot;")
						}, this)
					},
					buildRendering: function() {
						if (!this.templateString) this.templateString =
							e(this.templatePath, {
								sanitize: !0
							});
						var a = l.getCachedTemplate(this.templateString, this._skipNodeCache, this.ownerDocument),
							c;
						if (f.isString(a)) {
							if (c = b.toDom(this._stringRepl(a), this.ownerDocument), 1 != c.nodeType) throw Error("Invalid template: " + a);
						} else c = a.cloneNode(!0);
						this.domNode = c;
						this.inherited(arguments);
						this._attachTemplateNodes(c, function(a, b) {
							return a.getAttribute(b)
						});
						this._beforeFillContent();
						this._fillContent(this.srcNodeRef)
					},
					_beforeFillContent: function() {},
					_fillContent: function(a) {
						var b =
							this.containerNode;
						if (a && b)
							for (; a.hasChildNodes();) b.appendChild(a.firstChild)
					},
					_attachTemplateNodes: function(a, b) {
						for (var c = f.isArray(a) ? a : a.all || a.getElementsByTagName("*"), g = f.isArray(a) ? 0 : -1; 0 > g || c[g]; g++) {
							var e = -1 == g ? a : c[g];
							if (!this.widgetsInTemplate || !b(e, "dojoType") && !b(e, "data-dojo-type")) {
								var l = b(e, "dojoAttachPoint") || b(e, "data-dojo-attach-point");
								if (l)
									for (var i = l.split(/\s*,\s*/); l = i.shift();) f.isArray(this[l]) ? this[l].push(e) : this[l] = e, this._attachPoints.push(l);
								if (l = b(e, "dojoAttachEvent") ||
									b(e, "data-dojo-attach-event"))
									for (var i = l.split(/\s*,\s*/), h = f.trim; l = i.shift();)
										if (l) {
											var j = null; - 1 != l.indexOf(":") ? (j = l.split(":"), l = h(j[0]), j = h(j[1])) : l = h(l);
											j || (j = l);
											this._attachEvents.push(this.connect(e, k[l] || l, j))
										}
							}
						}
					},
					destroyRendering: function() {
						c.forEach(this._attachPoints, function(a) {
							delete this[a]
						}, this);
						this._attachPoints = [];
						c.forEach(this._attachEvents, this.disconnect, this);
						this._attachEvents = [];
						this.inherited(arguments)
					}
				});
				l._templateCache = {};
				l.getCachedTemplate = function(a, c, g) {
					var e =
						l._templateCache,
						f = a,
						i = e[f];
					if (i) {
						try {
							if (!i.ownerDocument || i.ownerDocument == (g || document)) return i
						} catch (h) {}
						b.destroy(i)
					}
					a = j.trim(a);
					if (c || a.match(/\$\{([^\}]+)\}/g)) return e[f] = a;
					c = b.toDom(a, g);
					if (1 != c.nodeType) throw Error("Invalid template: " + a);
					return e[f] = c
				};
				g("ie") && a.addOnWindowUnload(function() {
					var a = l._templateCache,
						c;
					for (c in a) {
						var g = a[c];
						"object" == typeof g && b.destroy(g);
						delete a[c]
					}
				});
				f.extend(h, {
					dojoAttachEvent: "",
					dojoAttachPoint: ""
				});
				return l
			})
		},
		"dojo/string": function() {
			define(["./_base/kernel",
				"./_base/lang"
			], function(f, k) {
				var h = {};
				k.setObject("dojo.string", h);
				h.rep = function(f, e) {
					if (0 >= e || !f) return "";
					for (var c = [];;) {
						e & 1 && c.push(f);
						if (!(e >>= 1)) break;
						f += f
					}
					return c.join("")
				};
				h.pad = function(f, e, c, i) {
					c || (c = "0");
					f = "" + f;
					e = h.rep(c, Math.ceil((e - f.length) / c.length));
					return i ? f + e : e + f
				};
				h.substitute = function(h, e, c, i) {
					i = i || f.global;
					c = c ? k.hitch(i, c) : function(b) {
						return b
					};
					return h.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function(b, g, a) {
						b = k.getObject(g, !1, e);
						a && (b = k.getObject(a, !1, i).call(i, b,
							g));
						return c(b, g).toString()
					})
				};
				h.trim = String.prototype.trim ? k.trim : function(f) {
					for (var f = f.replace(/^\s+/, ""), e = f.length - 1; 0 <= e; e--)
						if (/\S/.test(f.charAt(e))) {
							f = f.substring(0, e + 1);
							break
						}
					return f
				};
				return h
			})
		},
		"dojo/cache": function() {
			define("dojo/cache", ["./_base/kernel", "./text"], function(f) {
				return f.cache
			})
		},
		"dojo/text": function() {
			define(["./_base/kernel", "require", "./has", "./_base/xhr"], function(f, k, h, j) {
				var e;
				e = function(a, b, d) {
					j("GET", {
						url: a,
						sync: !!b,
						load: d,
						headers: f.config.textPluginHeaders || {}
					})
				};
				var c = {},
					i = function(a) {
						if (a) {
							var a = a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, ""),
								b = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
							b && (a = b[1])
						} else a = "";
						return a
					},
					b = {},
					g = {};
				f.cache = function(a, b, d) {
					var g;
					"string" == typeof a ? /\//.test(a) ? (g = a, d = b) : g = k.toUrl(a.replace(/\./g, "/") + (b ? "/" + b : "")) : (g = a + "", d = b);
					a = void 0 != d && "string" != typeof d ? d.value : d;
					d = d && d.sanitize;
					if ("string" == typeof a) return c[g] = a, d ? i(a) : a;
					if (null === a) return delete c[g], null;
					g in c || e(g, !0, function(a) {
						c[g] =
							a
					});
					return d ? i(c[g]) : c[g]
				};
				return {
					dynamic: !0,
					normalize: function(a, b) {
						var d = a.split("!"),
							c = d[0];
						return (/^\./.test(c) ? b(c) : c) + (d[1] ? "!" + d[1] : "")
					},
					load: function(a, f, d) {
						var a = a.split("!"),
							h = 1 < a.length,
							m = a[0],
							j = f.toUrl(a[0]),
							a = "url:" + j,
							k = b,
							r = function(a) {
								d(h ? i(a) : a)
							};
						m in c ? k = c[m] : a in f.cache ? k = f.cache[a] : j in c && (k = c[j]);
						if (k === b)
							if (g[j]) g[j].push(r);
							else {
								var q = g[j] = [r];
								e(j, !f.async, function(a) {
									c[m] = c[j] = a;
									for (var b = 0; b < q.length;) q[b++](a);
									delete g[j]
								})
							}
						else r(k)
					}
				}
			})
		},
		"dijit/layout/_LayoutWidget": function() {
			define("dojo/_base/lang,../_Widget,../_Container,../_Contained,../Viewport,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style".split(","),
				function(f, k, h, j, e, c, i, b, g) {
					return c("dijit.layout._LayoutWidget", [k, h, j], {
						baseClass: "dijitLayoutContainer",
						isLayoutContainer: !0,
						buildRendering: function() {
							this.inherited(arguments);
							i.add(this.domNode, "dijitContainer")
						},
						startup: function() {
							if (!this._started) {
								this.inherited(arguments);
								var a = this.getParent && this.getParent();
								if (!a || !a.isLayoutContainer) this.resize(), this.own(e.on("resize", f.hitch(this, "resize")))
							}
						},
						resize: function(a, c) {
							var d = this.domNode;
							a && b.setMarginBox(d, a);
							var e = c || {};
							f.mixin(e, a || {});
							if (!("h" in e) || !("w" in e)) e = f.mixin(b.getMarginBox(d), e);
							var i = g.getComputedStyle(d),
								h = b.getMarginExtents(d, i),
								j = b.getBorderExtents(d, i),
								e = this._borderBox = {
									w: e.w - (h.w + j.w),
									h: e.h - (h.h + j.h)
								},
								h = b.getPadExtents(d, i);
							this._contentBox = {
								l: g.toPixelValue(d, i.paddingLeft),
								t: g.toPixelValue(d, i.paddingTop),
								w: e.w - h.w,
								h: e.h - h.h
							};
							this.layout()
						},
						layout: function() {},
						_setupChild: function(a) {
							i.add(a.domNode, this.baseClass + "-child " + (a.baseClass ? this.baseClass + "-" + a.baseClass : ""))
						},
						addChild: function(a, b) {
							this.inherited(arguments);
							this._started && this._setupChild(a)
						},
						removeChild: function(a) {
							i.remove(a.domNode, this.baseClass + "-child" + (a.baseClass ? " " + this.baseClass + "-" + a.baseClass : ""));
							this.inherited(arguments)
						}
					})
				})
		},
		"dijit/_Container": function() {
			define(["dojo/_base/array", "dojo/_base/declare", "dojo/dom-construct"], function(f, k, h) {
				return k("dijit._Container", null, {
					buildRendering: function() {
						this.inherited(arguments);
						if (!this.containerNode) this.containerNode = this.domNode
					},
					addChild: function(f, e) {
						var c = this.containerNode;
						if (e && "number" ==
							typeof e) {
							var i = this.getChildren();
							if (i && i.length >= e) c = i[e - 1].domNode, e = "after"
						}
						h.place(f.domNode, c, e);
						this._started && !f._started && f.startup()
					},
					removeChild: function(f) {
						"number" == typeof f && (f = this.getChildren()[f]);
						if (f)(f = f.domNode) && f.parentNode && f.parentNode.removeChild(f)
					},
					hasChildren: function() {
						return 0 < this.getChildren().length
					},
					_getSiblingOfChild: function(h, e) {
						var c = this.getChildren(),
							i = f.indexOf(this.getChildren(), h);
						return c[i + e]
					},
					getIndexOfChild: function(h) {
						return f.indexOf(this.getChildren(),
							h)
					}
				})
			})
		},
		"dijit/_Contained": function() {
			define(["dojo/_base/declare", "./registry"], function(f, k) {
				return f("dijit._Contained", null, {
					_getSibling: function(f) {
						var j = this.domNode;
						do j = j[f + "Sibling"]; while (j && 1 != j.nodeType);
						return j && k.byNode(j)
					},
					getPreviousSibling: function() {
						return this._getSibling("previous")
					},
					getNextSibling: function() {
						return this._getSibling("next")
					},
					getIndexInParent: function() {
						var f = this.getParent();
						return !f || !f.getIndexOfChild ? -1 : f.getIndexOfChild(this)
					}
				})
			})
		},
		"dijit/Viewport": function() {
			define("dojo/Evented,dojo/on,dojo/ready,dojo/sniff,dojo/_base/window,dojo/window".split(","),
				function(f, k, h, j, e, c) {
					var i = new f;
					h(200, function() {
						var b = c.getBox();
						i._rlh = k(e.global, "resize", function() {
							var a = c.getBox();
							b.h == a.h && b.w == a.w || (b = a, i.emit("resize"))
						});
						if (8 == j("ie")) {
							var g = screen.deviceXDPI;
							setInterval(function() {
								if (screen.deviceXDPI != g) g = screen.deviceXDPI, i.emit("resize")
							}, 500)
						}
					});
					return i
				})
		},
		"dijit/layout/utils": function() {
			define("dojo/_base/array,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/lang,../main".split(","), function(f, k, h, j, e, c) {
				function i(b, c) {
					var a = b.resize ?
						b.resize(c) : h.setMarginBox(b.domNode, c);
					a ? e.mixin(b, a) : (e.mixin(b, h.getMarginBox(b.domNode)), e.mixin(b, c))
				}
				c = e.getObject("layout", !0, c);
				c.marginBox2contentBox = function(b, c) {
					var a = j.getComputedStyle(b),
						e = h.getMarginExtents(b, a),
						d = h.getPadBorderExtents(b, a);
					return {
						l: j.toPixelValue(b, a.paddingLeft),
						t: j.toPixelValue(b, a.paddingTop),
						w: c.w - (e.w + d.w),
						h: c.h - (e.h + d.h)
					}
				};
				c.layoutChildren = function(b, c, a, l, d) {
					c = e.mixin({}, c);
					k.add(b, "dijitLayoutContainer");
					a = f.filter(a, function(a) {
						return "center" != a.region && "client" !=
							a.layoutAlign
					}).concat(f.filter(a, function(a) {
						return "center" == a.region || "client" == a.layoutAlign
					}));
					f.forEach(a, function(a) {
						var b = a.domNode,
							e = a.region || a.layoutAlign;
						if (!e) throw Error("No region setting for " + a.id);
						var f = b.style;
						f.left = c.l + "px";
						f.top = c.t + "px";
						f.position = "absolute";
						k.add(b, "dijitAlign" + (e.substring(0, 1).toUpperCase() + e.substring(1)));
						b = {};
						l && l == a.id && (b["top" == a.region || "bottom" == a.region ? "h" : "w"] = d);
						"top" == e || "bottom" == e ? (b.w = c.w, i(a, b), c.h -= a.h, "top" == e ? c.t += a.h : f.top = c.t + c.h + "px") :
							"left" == e || "right" == e ? (b.h = c.h, i(a, b), c.w -= a.w, "left" == e ? c.l += a.w : f.left = c.l + c.w + "px") : ("client" == e || "center" == e) && i(a, c)
					})
				};
				return {
					marginBox2contentBox: c.marginBox2contentBox,
					layoutChildren: c.layoutChildren
				}
			})
		},
		"dijit/layout/ContentPane": function() {
			define("dojo/_base/kernel,dojo/_base/lang,../_Widget,../_Container,./_ContentPaneResizeMixin,dojo/string,dojo/html,dojo/i18n!../nls/loading,dojo/_base/array,dojo/_base/declare,dojo/_base/Deferred,dojo/dom,dojo/dom-attr,dojo/_base/xhr,dojo/i18n,dojo/when".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o) {
					return a("dijit.layout.ContentPane", [h, j, e], {
						href: "",
						content: "",
						extractContent: !1,
						parseOnLoad: !0,
						parserScope: f._scopeName,
						preventCache: !1,
						preload: !1,
						refreshOnShow: !1,
						loadingMessage: "<span class='dijitContentPaneLoading'><span class='dijitInline dijitIconLoading'></span>${loadingState}</span>",
						errorMessage: "<span class='dijitContentPaneError'><span class='dijitInline dijitIconError'></span>${errorState}</span>",
						isLoaded: !1,
						baseClass: "dijitContentPane",
						ioArgs: {},
						onLoadDeferred: null,
						_setTitleAttr: null,
						stopParser: !0,
						template: !1,
						create: function(a, b) {
							if ((!a || !a.template) && b && !("href" in a) && !("content" in a)) {
								for (var b = d.byId(b), c = b.ownerDocument.createDocumentFragment(); b.firstChild;) c.appendChild(b.firstChild);
								a = k.delegate(a, {
									content: c
								})
							}
							this.inherited(arguments, [a, b])
						},
						postMixInProperties: function() {
							this.inherited(arguments);
							var a = n.getLocalization("dijit", "loading", this.lang);
							this.loadingMessage = c.substitute(this.loadingMessage, a);
							this.errorMessage = c.substitute(this.errorMessage,
								a)
						},
						buildRendering: function() {
							this.inherited(arguments);
							if (!this.containerNode) this.containerNode = this.domNode;
							this.domNode.title = "";
							p.get(this.domNode, "role") || this.domNode.setAttribute("role", "group")
						},
						startup: function() {
							this.inherited(arguments);
							this._contentSetter && g.forEach(this._contentSetter.parseResults, function(a) {
								if (!a._started && !a._destroyed && k.isFunction(a.startup)) a.startup(), a._started = !0
							}, this)
						},
						_startChildren: function() {
							g.forEach(this.getChildren(), function(a) {
								if (!a._started && !a._destroyed &&
									k.isFunction(a.startup)) a.startup(), a._started = !0
							});
							this._contentSetter && g.forEach(this._contentSetter.parseResults, function(a) {
								if (!a._started && !a._destroyed && k.isFunction(a.startup)) a.startup(), a._started = !0
							}, this)
						},
						setHref: function(a) {
							f.deprecated("dijit.layout.ContentPane.setHref() is deprecated. Use set('href', ...) instead.", "", "2.0");
							return this.set("href", a)
						},
						_setHrefAttr: function(a) {
							this.cancel();
							this.onLoadDeferred = new l(k.hitch(this, "cancel"));
							this.onLoadDeferred.then(k.hitch(this, "onLoad"));
							this._set("href", a);
							this.preload || this._created && this._isShown() ? this._load() : this._hrefChanged = !0;
							return this.onLoadDeferred
						},
						setContent: function(a) {
							f.deprecated("dijit.layout.ContentPane.setContent() is deprecated.  Use set('content', ...) instead.", "", "2.0");
							this.set("content", a)
						},
						_setContentAttr: function(a) {
							this._set("href", "");
							this.cancel();
							this.onLoadDeferred = new l(k.hitch(this, "cancel"));
							this._created && this.onLoadDeferred.then(k.hitch(this, "onLoad"));
							this._setContent(a || "");
							this._isDownloaded = !1;
							return this.onLoadDeferred
						},
						_getContentAttr: function() {
							return this.containerNode.innerHTML
						},
						cancel: function() {
							this._xhrDfd && -1 == this._xhrDfd.fired && this._xhrDfd.cancel();
							delete this._xhrDfd;
							this.onLoadDeferred = null
						},
						destroy: function() {
							this.cancel();
							this.inherited(arguments)
						},
						destroyRecursive: function(a) {
							this._beingDestroyed || this.inherited(arguments)
						},
						_onShow: function() {
							this.inherited(arguments);
							if (this.href && !this._xhrDfd && (!this.isLoaded || this._hrefChanged || this.refreshOnShow)) return this.refresh()
						},
						refresh: function() {
							this.cancel();
							this.onLoadDeferred = new l(k.hitch(this, "cancel"));
							this.onLoadDeferred.then(k.hitch(this, "onLoad"));
							this._load();
							return this.onLoadDeferred
						},
						_load: function() {
							this._setContent(this.onDownloadStart(), !0);
							var a = this,
								b = {
									preventCache: this.preventCache || this.refreshOnShow,
									url: this.href,
									handleAs: "text"
								};
							k.isObject(this.ioArgs) && k.mixin(b, this.ioArgs);
							var d = this._xhrDfd = (this.ioMethod || m.get)(b),
								c;
							d.then(function(b) {
								c = b;
								try {
									return a._isDownloaded = !0, a._setContent(b, !1)
								} catch (d) {
									a._onError("Content",
										d)
								}
							}, function(b) {
								d.canceled || a._onError("Download", b);
								delete a._xhrDfd;
								return b
							}).then(function() {
								a.onDownloadEnd();
								delete a._xhrDfd;
								return c
							});
							delete this._hrefChanged
						},
						_onLoadHandler: function(a) {
							this._set("isLoaded", !0);
							try {
								this.onLoadDeferred.resolve(a)
							} catch (b) {}
						},
						_onUnloadHandler: function() {
							this._set("isLoaded", !1);
							try {
								this.onUnload()
							} catch (a) {}
						},
						destroyDescendants: function(a) {
							this.isLoaded && this._onUnloadHandler();
							var b = this._contentSetter;
							g.forEach(this.getChildren(), function(b) {
								b.destroyRecursive ?
									b.destroyRecursive(a) : b.destroy && b.destroy(a);
								b._destroyed = !0
							});
							b && (g.forEach(b.parseResults, function(b) {
								if (!b._destroyed) b.destroyRecursive ? b.destroyRecursive(a) : b.destroy && b.destroy(a), b._destroyed = !0
							}), delete b.parseResults);
							a || i._emptyNode(this.containerNode);
							delete this._singleChild
						},
						_setContent: function(a, b) {
							this.destroyDescendants();
							var d = this._contentSetter;
							if (!(d && d instanceof i._ContentSetter)) d = this._contentSetter = new i._ContentSetter({
								node: this.containerNode,
								_onError: k.hitch(this, this._onError),
								onContentError: k.hitch(this, function(a) {
									a = this.onContentError(a);
									try {
										this.containerNode.innerHTML = a
									} catch (b) {}
								})
							});
							var c = k.mixin({
									cleanContent: this.cleanContent,
									extractContent: this.extractContent,
									parseContent: !a.domNode && this.parseOnLoad,
									parserScope: this.parserScope,
									startup: !1,
									dir: this.dir,
									lang: this.lang,
									textDir: this.textDir
								}, this._contentSetterParams || {}),
								c = d.set(k.isObject(a) && a.domNode ? a.domNode : a, c),
								g = this;
							return o(c && c.then ? c : d.parseDeferred, function() {
								delete g._contentSetterParams;
								b || (g._started &&
									(g._startChildren(), g._scheduleLayout()), g._onLoadHandler(a))
							})
						},
						_onError: function(a, b, d) {
							this.onLoadDeferred.reject(b);
							a = this["on" + a + "Error"].call(this, b);
							d || a && this._setContent(a, !0)
						},
						onLoad: function() {},
						onUnload: function() {},
						onDownloadStart: function() {
							return this.loadingMessage
						},
						onContentError: function() {},
						onDownloadError: function() {
							return this.errorMessage
						},
						onDownloadEnd: function() {}
					})
				})
		},
		"dijit/layout/_ContentPaneResizeMixin": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/lang,dojo/query,dojo/sniff,../registry,../Viewport,./utils".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l) {
					return k("dijit.layout._ContentPaneResizeMixin", null, {
						doLayout: !0,
						isLayoutContainer: !0,
						startup: function() {
							if (!this._started) {
								var b = this.getParent();
								this._childOfLayoutWidget = b && b.isLayoutContainer;
								this._needLayout = !this._childOfLayoutWidget;
								this.inherited(arguments);
								this._isShown() && this._onShow();
								this._childOfLayoutWidget || this.own(a.on("resize", c.hitch(this, "resize")))
							}
						},
						_checkIfSingleChild: function() {
							var a = [],
								b = !1;
							i("> *", this.containerNode).some(function(c) {
								var e =
									g.byNode(c);
								e && e.resize ? a.push(e) : c.offsetHeight && (b = !0)
							});
							this._singleChild = 1 == a.length && !b ? a[0] : null;
							h.toggle(this.containerNode, this.baseClass + "SingleChild", !!this._singleChild)
						},
						resize: function(a, b) {
							this._resizeCalled = !0;
							this._scheduleLayout(a, b)
						},
						_scheduleLayout: function(a, b) {
							this._isShown() ? this._layout(a, b) : (this._needLayout = !0, this._changeSize = a, this._resultSize = b)
						},
						_layout: function(a, b) {
							delete this._needLayout;
							!this._wasShown && !1 !== this.open && this._onShow();
							a && j.setMarginBox(this.domNode,
								a);
							var g = this.containerNode;
							if (g === this.domNode) {
								var e = b || {};
								c.mixin(e, a || {});
								if (!("h" in e) || !("w" in e)) e = c.mixin(j.getMarginBox(g), e);
								this._contentBox = l.marginBox2contentBox(g, e)
							} else this._contentBox = j.getContentBox(g);
							this._layoutChildren()
						},
						_layoutChildren: function() {
							this.doLayout && this._checkIfSingleChild();
							if (this._singleChild && this._singleChild.resize) {
								var a = this._contentBox || j.getContentBox(this.containerNode);
								this._singleChild.resize({
									w: a.w,
									h: a.h
								})
							} else f.forEach(this.getChildren(), function(a) {
								a.resize &&
									a.resize()
							})
						},
						_isShown: function() {
							if (this._childOfLayoutWidget) return this._resizeCalled && "open" in this ? this.open : this._resizeCalled;
							if ("open" in this) return this.open;
							var a = this.domNode,
								b = this.domNode.parentNode;
							return "none" != a.style.display && "hidden" != a.style.visibility && !h.contains(a, "dijitHidden") && b && b.style && "none" != b.style.display
						},
						_onShow: function() {
							this._wasShown = !0;
							this._needLayout && this._layout(this._changeSize, this._resultSize);
							this.inherited(arguments)
						}
					})
				})
		},
		"dojo/html": function() {
			define("./_base/kernel,./_base/lang,./_base/array,./_base/declare,./dom,./dom-construct,./parser".split(","),
				function(f, k, h, j, e, c, i) {
					var b = {};
					k.setObject("dojo.html", b);
					var g = 0;
					b._secureForInnerHtml = function(a) {
						return a.replace(/(?:\s*<!DOCTYPE\s[^>]+>|<title[^>]*>[\s\S]*?<\/title>)/ig, "")
					};
					b._emptyNode = c.empty;
					b._setNodeContent = function(a, b) {
						c.empty(a);
						if (b)
							if ("string" == typeof b && (b = c.toDom(b, a.ownerDocument)), !b.nodeType && k.isArrayLike(b))
								for (var d = b.length, g = 0; g < b.length; g = d == b.length ? g + 1 : 0) c.place(b[g], a, "last");
							else c.place(b, a, "last");
						return a
					};
					b._ContentSetter = j("dojo.html._ContentSetter", null, {
						node: "",
						content: "",
						id: "",
						cleanContent: !1,
						extractContent: !1,
						parseContent: !1,
						parserScope: f._scopeName,
						startup: !0,
						constructor: function(a, b) {
							k.mixin(this, a || {});
							b = this.node = e.byId(this.node || b);
							if (!this.id) this.id = ["Setter", b ? b.id || b.tagName : "", g++].join("_")
						},
						set: function(a, b) {
							if (void 0 !== a) this.content = a;
							b && this._mixin(b);
							this.onBegin();
							this.setContent();
							var c = this.onEnd();
							return c && c.then ? c : this.node
						},
						setContent: function() {
							var a = this.node;
							if (!a) throw Error(this.declaredClass + ": setContent given no node");
							try {
								a = b._setNodeContent(a, this.content)
							} catch (c) {
								var d = this.onContentError(c);
								try {
									a.innerHTML = d
								} catch (g) {}
							}
							this.node = a
						},
						empty: function() {
							this.parseDeferred && (this.parseDeferred.isResolved() || this.parseDeferred.cancel(), delete this.parseDeferred);
							this.parseResults && this.parseResults.length && (h.forEach(this.parseResults, function(a) {
								a.destroy && a.destroy()
							}), delete this.parseResults);
							b._emptyNode(this.node)
						},
						onBegin: function() {
							var a = this.content;
							if (k.isString(a) && (this.cleanContent && (a = b._secureForInnerHtml(a)),
									this.extractContent)) {
								var c = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
								c && (a = c[1])
							}
							this.empty();
							this.content = a;
							return this.node
						},
						onEnd: function() {
							this.parseContent && this._parse();
							return this.node
						},
						tearDown: function() {
							delete this.parseResults;
							delete this.parseDeferred;
							delete this.node;
							delete this.content
						},
						onContentError: function(a) {
							return "Error occurred setting content: " + a
						},
						onExecError: function(a) {
							return "Error occurred executing scripts: " + a
						},
						_mixin: function(a) {
							var b = {},
								c;
							for (c in a) c in b ||
								(this[c] = a[c])
						},
						_parse: function() {
							var a = this.node;
							try {
								var b = {};
								h.forEach(["dir", "lang", "textDir"], function(a) {
									this[a] && (b[a] = this[a])
								}, this);
								var c = this;
								this.parseDeferred = i.parse({
									rootNode: a,
									noStart: !this.startup,
									inherited: b,
									scope: this.parserScope
								}).then(function(a) {
									return c.parseResults = a
								})
							} catch (g) {
								this._onError("Content", g, "Error parsing in _ContentSetter#" + this.id)
							}
						},
						_onError: function(a, c, d) {
							a = this["on" + a + "Error"].call(this, c);
							d || a && b._setNodeContent(this.node, a, !0)
						}
					});
					b.set = function(a, c, d) {
						void 0 ==
							c && (c = "");
						return d ? (new b._ContentSetter(k.mixin(d, {
							content: c,
							node: a
						}))).set() : b._setNodeContent(a, c, !0)
					};
					return b
				})
		},
		"dojo/parser": function() {
			define("require,./_base/kernel,./_base/lang,./_base/array,./_base/config,./_base/html,./_base/window,./_base/url,./_base/json,./aspect,./date/stamp,./Deferred,./has,./query,./on,./ready".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o) {
				function r(a) {
					var b = a._nameCaseMap,
						c = a.prototype;
					if (!b || b._extendCnt < v) {
						var b = a._nameCaseMap = {},
							d;
						for (d in c) "_" !== d.charAt(0) &&
							(b[d.toLowerCase()] = d);
						b._extendCnt = v
					}
					return b
				}

				function q(a) {
					var b = a.join();
					if (!s[b]) {
						for (var c = [], d = 0, g = a.length; d < g; d++) {
							var e = a[d];
							c[c.length] = s[e] = s[e] || h.getObject(e) || ~e.indexOf("/") && f(e)
						}
						a = c.shift();
						s[b] = c.length ? a.createSubclass ? a.createSubclass(c) : a.extend.apply(a, c) : a
					}
					return s[b]
				}
				var v = 0;
				a.after(h, "extend", function() {
					v++
				}, !0);
				var s = {},
					t = {
						_clearCache: function() {
							v++;
							s = {}
						},
						_functionFromScript: function(a, b) {
							var c = "",
								d = "",
								g = a.getAttribute(b + "args") || a.getAttribute("args"),
								e = a.getAttribute("with"),
								g = (g || "").split(/\s*,\s*/);
							e && e.length && j.forEach(e.split(/\s*,\s*/), function(a) {
								c += "with(" + a + "){";
								d += "}"
							});
							return new Function(g, c + a.innerHTML + d)
						},
						instantiate: function(a, b, c) {
							var b = b || {},
								c = c || {},
								d = (c.scope || k._scopeName) + "Type",
								g = "data-" + (c.scope || k._scopeName) + "-",
								e = g + "type",
								f = g + "mixins",
								l = [];
							j.forEach(a, function(a) {
								var c = d in b ? b[d] : a.getAttribute(e) || a.getAttribute(d);
								if (c) {
									var g = a.getAttribute(f),
										c = g ? [c].concat(g.split(/\s*,\s*/)) : [c];
									l.push({
										node: a,
										types: c
									})
								}
							});
							return this._instantiate(l, b,
								c)
						},
						_instantiate: function(a, b, c) {
							a = j.map(a, function(a) {
								var d = a.ctor || q(a.types);
								if (!d) throw Error("Unable to resolve constructor for: '" + a.types.join() + "'");
								return this.construct(d, a.node, b, c, a.scripts, a.inherited)
							}, this);
							!b._started && !c.noStart && j.forEach(a, function(a) {
								"function" === typeof a.startup && !a._started && a.startup()
							});
							return a
						},
						construct: function(c, d, e, f, i, o) {
							var u;
							var q = c && c.prototype,
								f = f || {},
								t = {};
							f.defaults && h.mixin(t, f.defaults);
							o && h.mixin(t, o);
							var v;
							p("dom-attributes-explicit") ? v = d.attributes :
								p("dom-attributes-specified-flag") ? v = j.filter(d.attributes, function(a) {
									return a.specified
								}) : (o = (/^input$|^img$/i.test(d.nodeName) ? d : d.cloneNode(!1)).outerHTML.replace(/=[^\s"']+|="[^"]*"|='[^']*'/g, "").replace(/^\s*<[a-zA-Z0-9]*\s*/, "").replace(/\s*>.*$/, ""), v = j.map(o.split(/\s+/), function(a) {
									var b = a.toLowerCase();
									return {
										name: a,
										value: "LI" == d.nodeName && "value" == a || "enctype" == b ? d.getAttribute(b) : d.getAttributeNode(b).value
									}
								}));
							var s = f.scope || k._scopeName,
								o = "data-" + s + "-",
								A = {};
							"dojo" !== s && (A[o + "props"] =
								"data-dojo-props", A[o + "type"] = "data-dojo-type", A[o + "mixins"] = "data-dojo-mixins", A[s + "type"] = "dojoType", A[o + "id"] = "data-dojo-id");
							for (var s = 0, w, x = [], K, H; w = v[s++];) {
								var C = w.name,
									F = C.toLowerCase();
								w = w.value;
								switch (A[F] || F) {
									case "data-dojo-type":
									case "dojotype":
									case "data-dojo-mixins":
										break;
									case "data-dojo-props":
										H = w;
										break;
									case "data-dojo-id":
									case "jsid":
										K = w;
										break;
									case "data-dojo-attach-point":
									case "dojoattachpoint":
										t.dojoAttachPoint = w;
										break;
									case "data-dojo-attach-event":
									case "dojoattachevent":
										t.dojoAttachEvent =
											w;
										break;
									case "class":
										t["class"] = d.className;
										break;
									case "style":
										t.style = d.style && d.style.cssText;
										break;
									default:
										if (C in q || (C = r(c)[F] || C), C in q) switch (typeof q[C]) {
											case "string":
												t[C] = w;
												break;
											case "number":
												t[C] = w.length ? Number(w) : NaN;
												break;
											case "boolean":
												t[C] = "false" != w.toLowerCase();
												break;
											case "function":
												t[C] = "" === w || -1 != w.search(/[^\w\.]+/i) ? new Function(w) : h.getObject(w, !1) || new Function(w);
												x.push(C);
												break;
											default:
												F = q[C], t[C] = F && "length" in F ? w ? w.split(/\s*,\s*/) : [] : F instanceof Date ? "" == w ? new Date("") :
													"now" == w ? new Date : l.fromISOString(w) : F instanceof b ? k.baseUrl + w : g.fromJson(w)
										} else t[C] = w
								}
							}
							for (s = 0; s < x.length; s++) v = x[s].toLowerCase(), d.removeAttribute(v), d[v] = null;
							if (H) try {
								H = g.fromJson.call(f.propsThis, "{" + H + "}"), h.mixin(t, H)
							} catch (O) {
								throw Error(O.toString() + " in data-dojo-props='" + H + "'");
							}
							h.mixin(t, e);
							i || (i = c && (c._noScript || q._noScript) ? [] : m("> script[type^='dojo/']", d));
							e = [];
							f = [];
							H = [];
							x = [];
							if (i)
								for (s = 0; s < i.length; s++) {
									var D = i[s];
									d.removeChild(D);
									v = D.getAttribute(o + "event") || D.getAttribute("event");
									A = D.getAttribute(o + "prop");
									C = D.getAttribute(o + "method");
									F = D.getAttribute(o + "advice");
									w = D.getAttribute("type");
									D = this._functionFromScript(D, o);
									v ? "dojo/connect" == w ? e.push({
										method: v,
										func: D
									}) : "dojo/on" == w ? x.push({
										event: v,
										func: D
									}) : t[v] = D : "dojo/aspect" == w ? e.push({
										method: C,
										advice: F,
										func: D
									}) : "dojo/watch" == w ? H.push({
										prop: A,
										func: D
									}) : f.push(D)
								}
							u = (i = c.markupFactory || q.markupFactory) ? i(t, d, c) : new c(t, d), c = u;
							K && h.setObject(K, c);
							for (s = 0; s < e.length; s++) a[e[s].advice || "after"](c, e[s].method, h.hitch(c, e[s].func), !0);
							for (s = 0; s < f.length; s++) f[s].call(c);
							for (s = 0; s < H.length; s++) c.watch(H[s].prop, H[s].func);
							for (s = 0; s < x.length; s++) n(c, x[s].event, x[s].func);
							return c
						},
						scan: function(a, b) {
							function c(a) {
								if (!a.inherited) {
									a.inherited = {};
									var b = a.node,
										d = c(a.parent),
										b = {
											dir: b.getAttribute("dir") || d.dir,
											lang: b.getAttribute("lang") || d.lang,
											textDir: b.getAttribute(o) || d.textDir
										},
										g;
									for (g in b) b[g] && (a.inherited[g] = b[g])
								}
								return a.inherited
							}
							var g = [],
								e = [],
								l = {},
								i = (b.scope || k._scopeName) + "Type",
								h = "data-" + (b.scope || k._scopeName) + "-",
								m =
								h + "type",
								o = h + "textdir",
								h = h + "mixins",
								n = a.firstChild,
								t = b.inherited;
							if (!t) {
								var r = function(a, b) {
										return a.getAttribute && a.getAttribute(b) || a.parentNode && r(a.parentNode, b)
									},
									t = {
										dir: r(a, "dir"),
										lang: r(a, "lang"),
										textDir: r(a, o)
									},
									v;
								for (v in t) t[v] || delete t[v]
							}
							for (var t = {
									inherited: t
								}, s, C;;)
								if (n)
									if (1 != n.nodeType) n = n.nextSibling;
									else if (s && "script" == n.nodeName.toLowerCase())(F = n.getAttribute("type")) && /^dojo\/\w/i.test(F) && s.push(n), n = n.nextSibling;
							else if (C) n = n.nextSibling;
							else {
								var F = n.getAttribute(m) || n.getAttribute(i);
								v = n.firstChild;
								if (!F && (!v || 3 == v.nodeType && !v.nextSibling)) n = n.nextSibling;
								else {
									C = null;
									if (F) {
										var O = n.getAttribute(h);
										s = O ? [F].concat(O.split(/\s*,\s*/)) : [F];
										try {
											C = q(s)
										} catch (D) {}
										C || j.forEach(s, function(a) {
											~a.indexOf("/") && !l[a] && (l[a] = !0, e[e.length] = a)
										});
										O = C && !C.prototype._noScript ? [] : null;
										t = {
											types: s,
											ctor: C,
											parent: t,
											node: n,
											scripts: O
										};
										t.inherited = c(t);
										g.push(t)
									} else t = {
										node: n,
										scripts: s,
										parent: t
									};
									n = v;
									s = O;
									C = C && C.prototype.stopParser && !b.template
								}
							} else {
								if (!t || !t.node) break;
								n = t.node.nextSibling;
								C = !1;
								t = t.parent;
								s = t.scripts
							}
							var L = new d;
							e.length ? (p("dojo-debug-messages"), f(e, function() {
								L.resolve(j.filter(g, function(a) {
									if (!a.ctor) try {
										a.ctor = q(a.types)
									} catch (c) {}
									for (var d = a.parent; d && !d.types;) d = d.parent;
									var g = a.ctor && a.ctor.prototype;
									a.instantiateChildren = !(g && g.stopParser && !b.template);
									a.instantiate = !d || d.instantiate && d.instantiateChildren;
									return a.instantiate
								}))
							})) : L.resolve(g);
							return L.promise
						},
						_require: function(a) {
							var a = g.fromJson("{" + a.innerHTML + "}"),
								b = [],
								c = [],
								e = new d,
								l;
							for (l in a) b.push(l), c.push(a[l]);
							f(c, function() {
								for (var a = 0; a < b.length; a++) h.setObject(b[a], arguments[a]);
								e.resolve(arguments)
							});
							return e.promise
						},
						_scanAmd: function(a) {
							var b = new d,
								c = b.promise;
							b.resolve(!0);
							var g = this;
							m("script[type='dojo/require']", a).forEach(function(a) {
								c = c.then(function() {
									return g._require(a)
								});
								a.parentNode.removeChild(a)
							});
							return c
						},
						parse: function(a, b) {
							var d;
							!b && a && a.rootNode ? (b = a, d = b.rootNode) : a && h.isObject(a) && !("nodeType" in a) ? b = a : d = a;
							d = d ? c.byId(d) : i.body();
							var b = b || {},
								g = b.template ? {
									template: !0
								} : {},
								e = [],
								f =
								this,
								l = this._scanAmd(d, b).then(function() {
									return f.scan(d, b)
								}).then(function(a) {
									return e = e.concat(f._instantiate(a, g, b))
								}).otherwise(function(a) {
									throw a;
								});
							h.mixin(e, l);
							return e
						}
					};
				k.parser = t;
				e.parseOnLoad && o(100, t, "parse");
				return t
			})
		},
		"dojo/_base/url": function() {
			define(["./kernel"], function(f) {
				var k = /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,
					h = /^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,
					j = function() {
						for (var e = arguments, c = [e[0]], f = 1; f < e.length; f++)
							if (e[f]) {
								var b =
									new j(e[f] + ""),
									c = new j(c[0] + "");
								if ("" == b.path && !b.scheme && !b.authority && !b.query) {
									if (null != b.fragment) c.fragment = b.fragment;
									b = c
								} else if (!b.scheme && (b.scheme = c.scheme, !b.authority && (b.authority = c.authority, "/" != b.path.charAt(0)))) {
									for (var c = (c.path.substring(0, c.path.lastIndexOf("/") + 1) + b.path).split("/"), g = 0; g < c.length; g++) "." == c[g] ? g == c.length - 1 ? c[g] = "" : (c.splice(g, 1), g--) : 0 < g && !(1 == g && "" == c[0]) && ".." == c[g] && ".." != c[g - 1] && (g == c.length - 1 ? (c.splice(g, 1), c[g - 1] = "") : (c.splice(g - 1, 2), g -= 2));
									b.path = c.join("/")
								}
								c =
									[];
								b.scheme && c.push(b.scheme, ":");
								b.authority && c.push("//", b.authority);
								c.push(b.path);
								b.query && c.push("?", b.query);
								b.fragment && c.push("#", b.fragment)
							}
						this.uri = c.join("");
						e = this.uri.match(k);
						this.scheme = e[2] || (e[1] ? "" : null);
						this.authority = e[4] || (e[3] ? "" : null);
						this.path = e[5];
						this.query = e[7] || (e[6] ? "" : null);
						this.fragment = e[9] || (e[8] ? "" : null);
						if (null != this.authority) e = this.authority.match(h), this.user = e[3] || null, this.password = e[4] || null, this.host = e[6] || e[7], this.port = e[9] || null
					};
				j.prototype.toString =
					function() {
						return this.uri
					};
				return f._Url = j
			})
		},
		"dojo/date/stamp": function() {
			define(["../_base/lang", "../_base/array"], function(f, k) {
				var h = {};
				f.setObject("dojo.date.stamp", h);
				h.fromISOString = function(f, e) {
					if (!h._isoRegExp) h._isoRegExp = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
					var c = h._isoRegExp.exec(f),
						i = null;
					if (c) {
						c.shift();
						c[1] && c[1]--;
						c[6] && (c[6] *= 1E3);
						e && (e = new Date(e), k.forEach(k.map("FullYear,Month,Date,Hours,Minutes,Seconds,Milliseconds".split(","),
							function(a) {
								return e["get" + a]()
							}), function(a, b) {
							c[b] = c[b] || a
						}));
						i = new Date(c[0] || 1970, c[1] || 0, c[2] || 1, c[3] || 0, c[4] || 0, c[5] || 0, c[6] || 0);
						100 > c[0] && i.setFullYear(c[0] || 1970);
						var b = 0,
							g = c[7] && c[7].charAt(0);
						"Z" != g && (b = 60 * (c[8] || 0) + (Number(c[9]) || 0), "-" != g && (b *= -1));
						g && (b -= i.getTimezoneOffset());
						b && i.setTime(i.getTime() + 6E4 * b)
					}
					return i
				};
				h.toISOString = function(f, e) {
					var c = function(a) {
							return 10 > a ? "0" + a : a
						},
						e = e || {},
						i = [],
						b = e.zulu ? "getUTC" : "get",
						g = "";
					"time" != e.selector && (g = f[b + "FullYear"](), g = ["0000".substr((g +
						"").length) + g, c(f[b + "Month"]() + 1), c(f[b + "Date"]())].join("-"));
					i.push(g);
					if ("date" != e.selector) {
						g = [c(f[b + "Hours"]()), c(f[b + "Minutes"]()), c(f[b + "Seconds"]())].join(":");
						b = f[b + "Milliseconds"]();
						e.milliseconds && (g += "." + (100 > b ? "0" : "") + c(b));
						if (e.zulu) g += "Z";
						else if ("time" != e.selector) var b = f.getTimezoneOffset(),
							a = Math.abs(b),
							g = g + ((0 < b ? "-" : "+") + c(Math.floor(a / 60)) + ":" + c(a % 60));
						i.push(g)
					}
					return i.join("T")
				};
				return h
			})
		},
		"dojox/layout/ExpandoPane": function() {
			define("dojo/_base/kernel,dojo/_base/lang,dojo/_base/declare,dojo/_base/array,dojo/_base/connect,dojo/_base/event,dojo/_base/fx,dojo/dom-style,dojo/dom-class,dojo/dom-geometry,dojo/text!./resources/ExpandoPane.html,dijit/layout/ContentPane,dijit/_TemplatedMixin,dijit/_Contained,dijit/_Container".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n) {
					f.experimental("dojox.layout.ExpandoPane");
					return h("dojox.layout.ExpandoPane", [d, p, m, n], {
						attributeMap: k.delegate(d.prototype.attributeMap, {
							title: {
								node: "titleNode",
								type: "innerHTML"
							}
						}),
						templateString: l,
						easeOut: "dojo._DefaultEasing",
						easeIn: "dojo._DefaultEasing",
						duration: 420,
						startExpanded: !0,
						previewOpacity: 0.75,
						previewOnDblClick: !1,
						tabIndex: "0",
						_setTabIndexAttr: "iconNode",
						baseClass: "dijitExpandoPane",
						postCreate: function() {
							this.inherited(arguments);
							this._animConnects =
								[];
							this._isHorizontal = !0;
							if (k.isString(this.easeOut)) this.easeOut = k.getObject(this.easeOut);
							if (k.isString(this.easeIn)) this.easeIn = k.getObject(this.easeIn);
							var a = "",
								c = !this.isLeftToRight();
							if (this.region) {
								switch (this.region) {
									case "trailing":
									case "right":
										a = c ? "Left" : "Right";
										this._needsPosition = "left";
										break;
									case "leading":
									case "left":
										a = c ? "Right" : "Left";
										break;
									case "top":
										a = "Top";
										break;
									case "bottom":
										this._needsPosition = "top", a = "Bottom"
								}
								g.add(this.domNode, "dojoxExpando" + a);
								g.add(this.iconNode, "dojoxExpandoIcon" +
									a);
								this._isHorizontal = /top|bottom/.test(this.region)
							}
							b.set(this.domNode, {
								overflow: "hidden",
								padding: 0
							});
							this.connect(this.domNode, "ondblclick", this.previewOnDblClick ? "preview" : "toggle");
							this.iconNode.setAttribute("aria-controls", this.id);
							this.previewOnDblClick && this.connect(this.getParent(), "_layoutChildren", k.hitch(this, function() {
								this._isonlypreview = !1
							}))
						},
						_startupSizes: function() {
							this._container = this.getParent();
							this._closedSize = this._titleHeight = a.getMarginBox(this.titleWrapper).h;
							if (this.splitter) {
								var b =
									this.id;
								j.forEach(dijit.registry.toArray(), function(a) {
									a && a.child && a.child.id == b && this.connect(a, "_stopDrag", "_afterResize")
								}, this)
							}
							this._currentSize = a.getContentBox(this.domNode);
							this._showSize = this._currentSize[this._isHorizontal ? "h" : "w"];
							this._setupAnims();
							this.startExpanded ? this._showing = !0 : (this._showing = !1, this._hideWrapper(), this._hideAnim.gotoPercent(99, !0));
							this.domNode.setAttribute("aria-expanded", this._showing);
							this._hasSizes = !0
						},
						_afterResize: function() {
							var b = this._currentSize;
							this._currentSize =
								a.getMarginBox(this.domNode);
							var c = this._currentSize[this._isHorizontal ? "h" : "w"];
							if (c > this._titleHeight) {
								if (!this._showing) this._showing = !this._showing, this._showEnd();
								this._showSize = c;
								this._setupAnims()
							} else this._showSize = b[this._isHorizontal ? "h" : "w"], this._showing = !1, this._hideWrapper(), this._hideAnim.gotoPercent(89, !0)
						},
						_setupAnims: function() {
							j.forEach(this._animConnects, e.disconnect);
							var a = {
									node: this.domNode,
									duration: this.duration
								},
								b = {},
								c = this._showSize,
								d = this._closedSize,
								g = {},
								f = this._isHorizontal ?
								"height" : "width",
								l = this._needsPosition;
							b[f] = {
								end: c
							};
							g[f] = {
								end: d
							};
							l && (b[l] = {
								end: function(a) {
									return parseInt(a.style[l], 10) - c + d
								}
							}, g[l] = {
								end: function(a) {
									return parseInt(a.style[l], 10) + c - d
								}
							});
							this._showAnim = i.animateProperty(k.mixin(a, {
								easing: this.easeIn,
								properties: b
							}));
							this._hideAnim = i.animateProperty(k.mixin(a, {
								easing: this.easeOut,
								properties: g
							}));
							this._animConnects = [e.connect(this._showAnim, "onEnd", this, "_showEnd"), e.connect(this._hideAnim, "onEnd", this, "_hideEnd")]
						},
						preview: function() {
							if (!this._showing) this._isonlypreview = !this._isonlypreview;
							this.toggle()
						},
						toggle: function() {
							this._showing ? (this._hideWrapper(), this._showAnim && this._showAnim.stop(), this._hideAnim.play()) : (this._hideAnim && this._hideAnim.stop(), this._showAnim.play());
							this._showing = !this._showing;
							this.domNode.setAttribute("aria-expanded", this._showing)
						},
						_hideWrapper: function() {
							g.add(this.domNode, "dojoxExpandoClosed");
							b.set(this.cwrapper, {
								visibility: "hidden",
								opacity: "0",
								overflow: "hidden"
							})
						},
						_showEnd: function() {
							b.set(this.cwrapper, {
								opacity: 0,
								visibility: "visible"
							});
							i.anim(this.cwrapper, {
								opacity: this._isonlypreview ? this.previewOpacity : 1
							}, 227);
							g.remove(this.domNode, "dojoxExpandoClosed");
							this._isonlypreview ? (this._previewShowing = !0, this.resize()) : setTimeout(k.hitch(this._container, "layout"), 15)
						},
						_hideEnd: function() {
							this._isonlypreview ? this._previewShowing = !1 : setTimeout(k.hitch(this._container, "layout"), 25);
							this._isonlypreview = !1
						},
						resize: function(c) {
							this._hasSizes || this._startupSizes(c);
							var d = a.getMarginBox(this.domNode);
							this._contentBox = {
								w: c && "w" in c ? c.w : d.w,
								h: (c &&
									"h" in c ? c.h : d.h) - this._titleHeight
							};
							b.set(this.containerNode, "height", this._contentBox.h + "px");
							c && a.setMarginBox(this.domNode, c);
							this._layoutChildren();
							this._setupAnims()
						},
						_trap: function(a) {
							c.stop(a)
						}
					})
				})
		},
		"url:dojox/layout/resources/ExpandoPane.html": '<div class="dojoxExpandoPane">\n\t<div dojoAttachPoint="titleWrapper" class="dojoxExpandoTitle">\n\t\t<div class="dojoxExpandoIcon" dojoAttachPoint="iconNode" dojoAttachEvent="ondijitclick:toggle"><span class="a11yNode">X</span></div>\n\t\t<span class="dojoxExpandoTitleNode" dojoAttachPoint="titleNode">${title}</span>\n\t</div>\n\t<div class="dojoxExpandoWrapper" dojoAttachPoint="cwrapper" dojoAttachEvent="ondblclick:_trap">\n\t\t<div class="dojoxExpandoContent" dojoAttachPoint="containerNode"></div>\n\t</div>\n</div>\n',
		"dijit/layout/LayoutContainer": function() {
			define("dojo/_base/kernel,dojo/_base/lang,dojo/_base/declare,../_WidgetBase,./_LayoutWidget,./utils".split(","), function(f, k, h, j, e, c) {
				h = h("dijit.layout.LayoutContainer", e, {
					baseClass: "dijitLayoutContainer",
					constructor: function() {
						f.deprecated("dijit.layout.LayoutContainer is deprecated", "use BorderContainer instead", 2)
					},
					layout: function() {
						c.layoutChildren(this.domNode, this._contentBox, this.getChildren())
					},
					addChild: function(e, b) {
						this.inherited(arguments);
						this._started &&
							c.layoutChildren(this.domNode, this._contentBox, this.getChildren())
					},
					removeChild: function(e) {
						this.inherited(arguments);
						this._started && c.layoutChildren(this.domNode, this._contentBox, this.getChildren())
					}
				});
				h.ChildWidgetProperties = {
					layoutAlign: "none"
				};
				k.extend(j, h.ChildWidgetProperties);
				return h
			})
		},
		"dijit/form/Form": function() {
			define("dojo/_base/declare,dojo/dom-attr,dojo/_base/event,dojo/_base/kernel,dojo/sniff,../_Widget,../_TemplatedMixin,./_FormMixin,../layout/_ContentPaneResizeMixin".split(","),
				function(f, k, h, j, e, c, i, b, g) {
					return f("dijit.form.Form", [c, i, b, g], {
						name: "",
						action: "",
						method: "",
						encType: "",
						"accept-charset": "",
						accept: "",
						target: "",
						templateString: "<form data-dojo-attach-point='containerNode' data-dojo-attach-event='onreset:_onReset,onsubmit:_onSubmit' ${!nameAttrSetting}></form>",
						postMixInProperties: function() {
							this.nameAttrSetting = this.name ? "name='" + this.name + "'" : "";
							this.inherited(arguments)
						},
						execute: function() {},
						onExecute: function() {},
						_setEncTypeAttr: function(a) {
							this.encType = a;
							k.set(this.domNode,
								"encType", a);
							if (e("ie")) this.domNode.encoding = a
						},
						reset: function(a) {
							var b = {
								returnValue: !0,
								preventDefault: function() {
									this.returnValue = !1
								},
								stopPropagation: function() {},
								currentTarget: a ? a.target : this.domNode,
								target: a ? a.target : this.domNode
							};
							!1 !== this.onReset(b) && b.returnValue && this.inherited(arguments, [])
						},
						onReset: function() {
							return !0
						},
						_onReset: function(a) {
							this.reset(a);
							h.stop(a);
							return !1
						},
						_onSubmit: function(a) {
							var b = this.constructor.prototype;
							if (this.execute != b.execute || this.onExecute != b.onExecute) j.deprecated("dijit.form.Form:execute()/onExecute() are deprecated. Use onSubmit() instead.",
								"", "2.0"), this.onExecute(), this.execute(this.getValues());
							!1 === this.onSubmit(a) && h.stop(a)
						},
						onSubmit: function() {
							return this.isValid()
						},
						submit: function() {
							!1 !== this.onSubmit() && this.containerNode.submit()
						}
					})
				})
		},
		"dijit/form/_FormMixin": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/window".split(","), function(f, k, h, j, e, c) {
				return k("dijit.form._FormMixin", null, {
					state: "",
					_getDescendantFormWidgets: function(c) {
						var b = [];
						f.forEach(c || this.getChildren(),
							function(c) {
								"value" in c ? b.push(c) : b = b.concat(this._getDescendantFormWidgets(c.getChildren()))
							}, this);
						return b
					},
					reset: function() {
						f.forEach(this._getDescendantFormWidgets(), function(c) {
							c.reset && c.reset()
						})
					},
					validate: function() {
						var e = !1;
						return f.every(f.map(this._getDescendantFormWidgets(), function(b) {
							b._hasBeenBlurred = !0;
							var g = b.disabled || !b.validate || b.validate();
							!g && !e && (c.scrollIntoView(b.containerNode || b.domNode), b.focus(), e = !0);
							return g
						}), function(b) {
							return b
						})
					},
					setValues: function(c) {
						h.deprecated(this.declaredClass +
							"::setValues() is deprecated. Use set('value', val) instead.", "", "2.0");
						return this.set("value", c)
					},
					_setValueAttr: function(c) {
						var b = {};
						f.forEach(this._getDescendantFormWidgets(), function(a) {
							a.name && (b[a.name] || (b[a.name] = [])).push(a)
						});
						for (var g in b)
							if (b.hasOwnProperty(g)) {
								var a = b[g],
									e = j.getObject(g, !1, c);
								void 0 !== e && (j.isArray(e) || (e = [e]), "boolean" == typeof a[0].checked ? f.forEach(a, function(a) {
									a.set("value", -1 != f.indexOf(e, a.value))
								}) : a[0].multiple ? a[0].set("value", e) : f.forEach(a, function(a, b) {
									a.set("value",
										e[b])
								}))
							}
					},
					getValues: function() {
						h.deprecated(this.declaredClass + "::getValues() is deprecated. Use get('value') instead.", "", "2.0");
						return this.get("value")
					},
					_getValueAttr: function() {
						var c = {};
						f.forEach(this._getDescendantFormWidgets(), function(b) {
							var g = b.name;
							if (g && !b.disabled) {
								var a = b.get("value");
								"boolean" == typeof b.checked ? /Radio/.test(b.declaredClass) ? !1 !== a ? j.setObject(g, a, c) : (a = j.getObject(g, !1, c), void 0 === a && j.setObject(g, null, c)) : (b = j.getObject(g, !1, c), b || (b = [], j.setObject(g, b, c)), !1 !== a &&
									b.push(a)) : (b = j.getObject(g, !1, c), "undefined" != typeof b ? j.isArray(b) ? b.push(a) : j.setObject(g, [b, a], c) : j.setObject(g, a, c))
							}
						});
						return c
					},
					isValid: function() {
						return "" == this.state
					},
					onValidStateChange: function() {},
					_getState: function() {
						var c = f.map(this._descendants, function(b) {
							return b.get("state") || ""
						});
						return 0 <= f.indexOf(c, "Error") ? "Error" : 0 <= f.indexOf(c, "Incomplete") ? "Incomplete" : ""
					},
					disconnectChildren: function() {},
					connectChildren: function(c) {
						this._descendants = this._getDescendantFormWidgets();
						f.forEach(this._descendants,
							function(b) {
								b._started || b.startup()
							});
						c || this._onChildChange()
					},
					_onChildChange: function(c) {
						(!c || "state" == c || "disabled" == c) && this._set("state", this._getState());
						if (!c || "value" == c || "disabled" == c || "checked" == c) this._onChangeDelayTimer && this._onChangeDelayTimer.remove(), this._onChangeDelayTimer = this.defer(function() {
							delete this._onChangeDelayTimer;
							this._set("value", this.get("value"))
						}, 10)
					},
					startup: function() {
						this.inherited(arguments);
						this._descendants = this._getDescendantFormWidgets();
						this.value = this.get("value");
						this.state = this._getState();
						var c = this;
						this.own(e(this.containerNode, "attrmodified-state, attrmodified-disabled, attrmodified-value, attrmodified-checked", function(b) {
							b.target != c.domNode && c._onChildChange(b.type.replace("attrmodified-", ""))
						}));
						this.watch("state", function(b, c, a) {
							this.onValidStateChange("" == a)
						})
					},
					destroy: function() {
						this.inherited(arguments)
					}
				})
			})
		},
		"dijit/form/TextBox": function() {
			define("dojo/_base/declare,dojo/dom-construct,dojo/dom-style,dojo/_base/kernel,dojo/_base/lang,dojo/sniff,./_FormValueWidget,./_TextBoxMixin,dojo/text!./templates/TextBox.html,../main".split(","),
				function(f, k, h, j, e, c, i, b, g, a) {
					f = f("dijit.form.TextBox", [i, b], {
						templateString: g,
						_singleNodeTemplate: '<input class="dijit dijitReset dijitLeft dijitInputField" data-dojo-attach-point="textbox,focusNode" autocomplete="off" type="${type}" ${!nameAttrSetting} />',
						_buttonInputDisabled: c("ie") ? "disabled" : "",
						baseClass: "dijitTextBox",
						postMixInProperties: function() {
							var a = this.type.toLowerCase();
							if (this.templateString && "input" == this.templateString.toLowerCase() || ("hidden" == a || "file" == a) && this.templateString ==
								this.constructor.prototype.templateString) this.templateString = this._singleNodeTemplate;
							this.inherited(arguments)
						},
						postCreate: function() {
							this.inherited(arguments);
							9 > c("ie") && this.defer(function() {
								try {
									var a = h.getComputedStyle(this.domNode);
									if (a) {
										var b = a.fontFamily;
										if (b) {
											var c = this.domNode.getElementsByTagName("INPUT");
											if (c)
												for (a = 0; a < c.length; a++) c[a].style.fontFamily = b
										}
									}
								} catch (g) {}
							})
						},
						_onInput: function(a) {
							this.inherited(arguments);
							this.intermediateChanges && this.defer(function() {
								this._handleOnChange(this.get("value"), !1)
							})
						},
						_setPlaceHolderAttr: function(a) {
							this._set("placeHolder", a);
							if (!this._phspan) this._attachPoints.push("_phspan"), this._phspan = k.create("span", {
								onmousedown: function(a) {
									a.preventDefault()
								},
								className: "dijitPlaceHolder dijitInputField"
							}, this.textbox, "after");
							this._phspan.innerHTML = "";
							this._phspan.appendChild(this._phspan.ownerDocument.createTextNode(a));
							this._updatePlaceHolder()
						},
						_updatePlaceHolder: function() {
							if (this._phspan) this._phspan.style.display = this.placeHolder && !this.focused && !this.textbox.value ?
								"" : "none"
						},
						_setValueAttr: function(a, b, c) {
							this.inherited(arguments);
							this._updatePlaceHolder()
						},
						getDisplayedValue: function() {
							j.deprecated(this.declaredClass + "::getDisplayedValue() is deprecated. Use get('displayedValue') instead.", "", "2.0");
							return this.get("displayedValue")
						},
						setDisplayedValue: function(a) {
							j.deprecated(this.declaredClass + "::setDisplayedValue() is deprecated. Use set('displayedValue', ...) instead.", "", "2.0");
							this.set("displayedValue", a)
						},
						_onBlur: function(a) {
							if (!this.disabled && (this.inherited(arguments),
									this._updatePlaceHolder(), c("mozilla") && this.selectOnClick)) this.textbox.selectionStart = this.textbox.selectionEnd = void 0
						},
						_onFocus: function(a) {
							!this.disabled && !this.readOnly && (this.inherited(arguments), this._updatePlaceHolder())
						}
					});
					if (c("ie")) f.prototype._isTextSelected = function() {
						var a = this.ownerDocument.selection.createRange();
						return a.parentElement() == this.textbox && 0 < a.text.length
					}, a._setSelectionRange = b._setSelectionRange = function(a, b, c) {
						a.createTextRange && (a = a.createTextRange(), a.collapse(!0),
							a.moveStart("character", -99999), a.moveStart("character", b), a.moveEnd("character", c - b), a.select())
					};
					return f
				})
		},
		"dijit/form/_FormValueWidget": function() {
			define(["dojo/_base/declare", "dojo/sniff", "./_FormWidget", "./_FormValueMixin"], function(f, k, h, j) {
				return f("dijit.form._FormValueWidget", [h, j], {
					_layoutHackIE7: function() {
						if (7 == k("ie"))
							for (var e = this.domNode, c = e.parentNode, f = e.firstChild || e, b = f.style.filter, g = this; c && 0 == c.clientHeight;)(function() {
								var a = g.connect(c, "onscroll", function() {
									g.disconnect(a);
									f.style.filter = (new Date).getMilliseconds();
									g.defer(function() {
										f.style.filter = b
									})
								})
							})(), c = c.parentNode
					}
				})
			})
		},
		"dijit/form/_FormWidget": function() {
			define("dojo/_base/declare,dojo/has,dojo/_base/kernel,dojo/ready,../_Widget,../_CssStateMixin,../_TemplatedMixin,./_FormWidgetMixin".split(","), function(f, k, h, j, e, c, i, b) {
				k("dijit-legacy-requires") && j(0, function() {
					require(["dijit/form/_FormValueWidget"])
				});
				return f("dijit.form._FormWidget", [e, i, c, b], {
					setDisabled: function(b) {
						h.deprecated("setDisabled(" + b + ") is deprecated. Use set('disabled'," +
							b + ") instead.", "", "2.0");
						this.set("disabled", b)
					},
					setValue: function(b) {
						h.deprecated("dijit.form._FormWidget:setValue(" + b + ") is deprecated.  Use set('value'," + b + ") instead.", "", "2.0");
						this.set("value", b)
					},
					getValue: function() {
						h.deprecated(this.declaredClass + "::getValue() is deprecated. Use get('value') instead.", "", "2.0");
						return this.get("value")
					},
					postMixInProperties: function() {
						this.nameAttrSetting = this.name ? 'name="' + this.name.replace(/"/g, "&quot;") + '"' : "";
						this.inherited(arguments)
					},
					_setTypeAttr: null
				})
			})
		},
		"dijit/_CssStateMixin": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom,dojo/dom-class,dojo/has,dojo/_base/lang,dojo/on,dojo/ready,dojo/_base/window,./registry".split(","), function(f, k, h, j, e, c, i, b, g, a) {
				k = k("dijit._CssStateMixin", [], {
					cssStateNodes: {},
					hovering: !1,
					active: !1,
					_applyAttributes: function() {
						this.inherited(arguments);
						f.forEach("disabled,readOnly,checked,selected,focused,state,hovering,active,_opened".split(","), function(a) {
							this.watch(a, c.hitch(this, "_setStateClass"))
						}, this);
						for (var a in this.cssStateNodes) this._trackMouseState(this[a], this.cssStateNodes[a]);
						this._trackMouseState(this.domNode, this.baseClass);
						this._setStateClass()
					},
					_cssMouseEvent: function(a) {
						if (!this.disabled) switch (a.type) {
							case "mouseover":
								this._set("hovering", !0);
								this._set("active", this._mouseDown);
								break;
							case "mouseout":
								this._set("hovering", !1);
								this._set("active", !1);
								break;
							case "mousedown":
							case "touchstart":
								this._set("active", !0);
								break;
							case "mouseup":
							case "touchend":
								this._set("active", !1)
						}
					},
					_setStateClass: function() {
						function a(c) {
							b =
								b.concat(f.map(b, function(a) {
									return a + c
								}), "dijit" + c)
						}
						var b = this.baseClass.split(" ");
						this.isLeftToRight() || a("Rtl");
						var c = "mixed" == this.checked ? "Mixed" : this.checked ? "Checked" : "";
						this.checked && a(c);
						this.state && a(this.state);
						this.selected && a("Selected");
						this._opened && a("Opened");
						this.disabled ? a("Disabled") : this.readOnly ? a("ReadOnly") : this.active ? a("Active") : this.hovering && a("Hover");
						this.focused && a("Focused");
						var c = this.stateNode || this.domNode,
							g = {};
						f.forEach(c.className.split(" "), function(a) {
							g[a] = !0
						});
						"_stateClasses" in this && f.forEach(this._stateClasses, function(a) {
							delete g[a]
						});
						f.forEach(b, function(a) {
							g[a] = !0
						});
						var e = [],
							i;
						for (i in g) e.push(i);
						c.className = e.join(" ");
						this._stateClasses = b
					},
					_subnodeCssMouseEvent: function(a, b, c) {
						function g(c) {
							j.toggle(a, b + "Active", c)
						}
						if (!this.disabled && !this.readOnly) switch (c.type) {
							case "mouseover":
								j.toggle(a, b + "Hover", !0);
								break;
							case "mouseout":
								j.toggle(a, b + "Hover", !1);
								g(!1);
								break;
							case "mousedown":
							case "touchstart":
								g(!0);
								break;
							case "mouseup":
							case "touchend":
								g(!1);
								break;
							case "focus":
							case "focusin":
								j.toggle(a, b + "Focused", !0);
								break;
							case "blur":
							case "focusout":
								j.toggle(a, b + "Focused", !1)
						}
					},
					_trackMouseState: function(a, b) {
						a._cssState = b
					}
				});
				b(function() {
					function b(c) {
						if (!h.isDescendant(c.relatedTarget, c.target))
							for (var d = c.target; d && d != c.relatedTarget; d = d.parentNode)
								if (d._cssState) {
									var g = a.getEnclosingWidget(d);
									g && (d == g.domNode ? g._cssMouseEvent(c) : g._subnodeCssMouseEvent(d, d._cssState, c))
								}
					}

					function c(a) {
						a.target = a.srcElement;
						b(a)
					}
					var j = g.body(),
						m = (e("touch") ? [] : ["mouseover",
							"mouseout"
						]).concat(["mousedown", "touchstart", "mouseup", "touchend"]);
					f.forEach(m, function(a) {
						j.addEventListener ? j.addEventListener(a, b, !0) : j.attachEvent("on" + a, c)
					});
					i(j, "focusin, focusout", function(b) {
						var c = b.target;
						c._cssState && !c.getAttribute("widgetId") && a.getEnclosingWidget(c)._subnodeCssMouseEvent(c, c._cssState, b)
					})
				});
				return k
			})
		},
		"dijit/form/_FormWidgetMixin": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/dom-style,dojo/_base/lang,dojo/mouse,dojo/sniff,dojo/window,../a11y".split(","),
				function(f, k, h, j, e, c, i, b, g) {
					return k("dijit.form._FormWidgetMixin", null, {
						name: "",
						alt: "",
						value: "",
						type: "text",
						tabIndex: "0",
						_setTabIndexAttr: "focusNode",
						disabled: !1,
						intermediateChanges: !1,
						scrollOnFocus: !0,
						_setIdAttr: "focusNode",
						_setDisabledAttr: function(a) {
							this._set("disabled", a);
							h.set(this.focusNode, "disabled", a);
							this.valueNode && h.set(this.valueNode, "disabled", a);
							this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
							a ? (this._set("hovering", !1), this._set("active", !1), a = "tabIndex" in this.attributeMap ?
								this.attributeMap.tabIndex : "_setTabIndexAttr" in this ? this._setTabIndexAttr : "focusNode", f.forEach(e.isArray(a) ? a : [a], function(a) {
									a = this[a];
									i("webkit") || g.hasDefaultTabStop(a) ? a.setAttribute("tabIndex", "-1") : a.removeAttribute("tabIndex")
								}, this)) : "" != this.tabIndex && this.set("tabIndex", this.tabIndex)
						},
						_onFocus: function(a) {
							if ("mouse" == a && this.isFocusable()) var c = this.connect(this.focusNode, "onfocus", function() {
									this.disconnect(d);
									this.disconnect(c)
								}),
								d = this.connect(this.ownerDocumentBody, "onmouseup", function() {
									this.disconnect(d);
									this.disconnect(c);
									this.focused && this.focus()
								});
							this.scrollOnFocus && this.defer(function() {
								b.scrollIntoView(this.domNode)
							});
							this.inherited(arguments)
						},
						isFocusable: function() {
							return !this.disabled && this.focusNode && "none" != j.get(this.domNode, "display")
						},
						focus: function() {
							if (!this.disabled && this.focusNode.focus) try {
								this.focusNode.focus()
							} catch (a) {}
						},
						compare: function(a, b) {
							return "number" == typeof a && "number" == typeof b ? isNaN(a) && isNaN(b) ? 0 : a - b : a > b ? 1 : a < b ? -1 : 0
						},
						onChange: function() {},
						_onChangeActive: !1,
						_handleOnChange: function(a,
							b) {
							if (void 0 == this._lastValueReported && (null === b || !this._onChangeActive)) this._resetValue = this._lastValueReported = a;
							this._pendingOnChange = this._pendingOnChange || typeof a != typeof this._lastValueReported || 0 != this.compare(a, this._lastValueReported);
							if ((this.intermediateChanges || b || void 0 === b) && this._pendingOnChange)
								if (this._lastValueReported = a, this._pendingOnChange = !1, this._onChangeActive) this._onChangeHandle && this._onChangeHandle.remove(), this._onChangeHandle = this.defer(function() {
									this._onChangeHandle =
										null;
									this.onChange(a)
								})
						},
						create: function() {
							this.inherited(arguments);
							this._onChangeActive = !0
						},
						destroy: function() {
							this._onChangeHandle && (this._onChangeHandle.remove(), this.onChange(this._lastValueReported));
							this.inherited(arguments)
						}
					})
				})
		},
		"dijit/form/_FormValueMixin": function() {
			define(["dojo/_base/declare", "dojo/dom-attr", "dojo/keys", "dojo/sniff", "./_FormWidgetMixin"], function(f, k, h, j, e) {
				return f("dijit.form._FormValueMixin", e, {
					readOnly: !1,
					_setReadOnlyAttr: function(c) {
						k.set(this.focusNode, "readOnly",
							c);
						this.focusNode.setAttribute("aria-readonly", c);
						this._set("readOnly", c)
					},
					postCreate: function() {
						this.inherited(arguments);
						j("ie") && this.connect(this.focusNode || this.domNode, "onkeydown", this._onKeyDown);
						if (void 0 === this._resetValue) this._lastValueReported = this._resetValue = this.value
					},
					_setValueAttr: function(c, e) {
						this._handleOnChange(c, e)
					},
					_handleOnChange: function(c, e) {
						this._set("value", c);
						this.inherited(arguments)
					},
					undo: function() {
						this._setValueAttr(this._lastValueReported, !1)
					},
					reset: function() {
						this._hasBeenBlurred = !1;
						this._setValueAttr(this._resetValue, !0)
					},
					_onKeyDown: function(c) {
						if (c.keyCode == h.ESCAPE && !c.ctrlKey && !c.altKey && !c.metaKey && (9 > j("ie") || j("ie") && j("quirks"))) {
							c.preventDefault();
							var e = c.srcElement,
								b = e.ownerDocument.createEventObject();
							b.keyCode = h.ESCAPE;
							b.shiftKey = c.shiftKey;
							e.fireEvent("onkeypress", b)
						}
					}
				})
			})
		},
		"dijit/form/_TextBoxMixin": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,../main".split(","), function(f, k, h, j, e, c, i, b) {
				var g =
					k("dijit.form._TextBoxMixin", null, {
						trim: !1,
						uppercase: !1,
						lowercase: !1,
						propercase: !1,
						maxLength: "",
						selectOnClick: !1,
						placeHolder: "",
						_getValueAttr: function() {
							return this.parse(this.get("displayedValue"), this.constraints)
						},
						_setValueAttr: function(a, b, c) {
							var g;
							void 0 !== a && (g = this.filter(a), "string" != typeof c && (c = null !== g && ("number" != typeof g || !isNaN(g)) ? this.filter(this.format(g, this.constraints)) : ""));
							if (null != c && ("number" != typeof c || !isNaN(c)) && this.textbox.value != c) this.textbox.value = c, this._set("displayedValue",
								this.get("displayedValue"));
							"auto" == this.textDir && this.applyTextDir(this.focusNode, c);
							this.inherited(arguments, [g, b])
						},
						displayedValue: "",
						_getDisplayedValueAttr: function() {
							return this.filter(this.textbox.value)
						},
						_setDisplayedValueAttr: function(a) {
							null == a ? a = "" : "string" != typeof a && (a = "" + a);
							this.textbox.value = a;
							this._setValueAttr(this.get("value"), void 0);
							this._set("displayedValue", this.get("displayedValue"));
							"auto" == this.textDir && this.applyTextDir(this.focusNode, a)
						},
						format: function(a) {
							return null == a ?
								"" : a.toString ? a.toString() : a
						},
						parse: function(a) {
							return a
						},
						_refreshState: function() {},
						onInput: function() {},
						__skipInputEvent: !1,
						_onInput: function(a) {
							"auto" == this.textDir && this.applyTextDir(this.focusNode, this.focusNode.value);
							this._processInput(a)
						},
						_processInput: function() {
							this._refreshState();
							this._set("displayedValue", this.get("displayedValue"))
						},
						postCreate: function() {
							this.textbox.setAttribute("value", this.textbox.value);
							this.inherited(arguments);
							this.own(i(this.textbox, "keydown, keypress, paste, cut, input, compositionend",
								c.hitch(this, function(a) {
									var b;
									if ("keydown" == a.type) {
										b = a.keyCode;
										switch (b) {
											case e.SHIFT:
											case e.ALT:
											case e.CTRL:
											case e.META:
											case e.CAPS_LOCK:
											case e.NUM_LOCK:
											case e.SCROLL_LOCK:
												return
										}
										if (!a.ctrlKey && !a.metaKey && !a.altKey) {
											switch (b) {
												case e.NUMPAD_0:
												case e.NUMPAD_1:
												case e.NUMPAD_2:
												case e.NUMPAD_3:
												case e.NUMPAD_4:
												case e.NUMPAD_5:
												case e.NUMPAD_6:
												case e.NUMPAD_7:
												case e.NUMPAD_8:
												case e.NUMPAD_9:
												case e.NUMPAD_MULTIPLY:
												case e.NUMPAD_PLUS:
												case e.NUMPAD_ENTER:
												case e.NUMPAD_MINUS:
												case e.NUMPAD_PERIOD:
												case e.NUMPAD_DIVIDE:
													return
											}
											if (65 <=
												b && 90 >= b || 48 <= b && 57 >= b || b == e.SPACE) return;
											b = !1;
											for (var d in e)
												if (e[d] === a.keyCode) {
													b = !0;
													break
												}
											if (!b) return
										}
									}(b = 32 <= a.charCode ? String.fromCharCode(a.charCode) : a.charCode) || (b = 65 <= a.keyCode && 90 >= a.keyCode || 48 <= a.keyCode && 57 >= a.keyCode || a.keyCode == e.SPACE ? String.fromCharCode(a.keyCode) : a.keyCode);
									b || (b = 229);
									if ("keypress" == a.type) {
										if ("string" != typeof b) return;
										if ("a" <= b && "z" >= b || "A" <= b && "Z" >= b || "0" <= b && "9" >= b || " " === b)
											if (a.ctrlKey || a.metaKey || a.altKey) return
									}
									if ("input" == a.type) {
										if (this.__skipInputEvent) {
											this.__skipInputEvent = !1;
											return
										}
									} else this.__skipInputEvent = !0;
									var g = {
											faux: !0
										},
										f;
									for (f in a) "layerX" != f && "layerY" != f && (d = a[f], "function" != typeof d && "undefined" != typeof d && (g[f] = d));
									c.mixin(g, {
										charOrCode: b,
										_wasConsumed: !1,
										preventDefault: function() {
											g._wasConsumed = !0;
											a.preventDefault()
										},
										stopPropagation: function() {
											a.stopPropagation()
										}
									});
									!1 === this.onInput(g) && (g.preventDefault(), g.stopPropagation());
									g._wasConsumed || this.defer(function() {
										this._onInput(g)
									})
								})))
						},
						_blankValue: "",
						filter: function(a) {
							if (null === a) return this._blankValue;
							if ("string" != typeof a) return a;
							this.trim && (a = c.trim(a));
							this.uppercase && (a = a.toUpperCase());
							this.lowercase && (a = a.toLowerCase());
							this.propercase && (a = a.replace(/[^\s]+/g, function(a) {
								return a.substring(0, 1).toUpperCase() + a.substring(1)
							}));
							return a
						},
						_setBlurValue: function() {
							this._setValueAttr(this.get("value"), !0)
						},
						_onBlur: function(a) {
							this.disabled || (this._setBlurValue(), this.inherited(arguments))
						},
						_isTextSelected: function() {
							return this.textbox.selectionStart != this.textbox.selectionEnd
						},
						_onFocus: function(a) {
							if (!this.disabled &&
								!this.readOnly) {
								if (this.selectOnClick && "mouse" == a) this._selectOnClickHandle = this.connect(this.domNode, "onmouseup", function() {
									this.disconnect(this._selectOnClickHandle);
									this._selectOnClickHandle = null;
									this._isTextSelected() || g.selectInputText(this.textbox)
								}), this.defer(function() {
									if (this._selectOnClickHandle) this.disconnect(this._selectOnClickHandle), this._selectOnClickHandle = null
								}, 500);
								this.inherited(arguments);
								this._refreshState()
							}
						},
						reset: function() {
							this.textbox.value = "";
							this.inherited(arguments)
						},
						_setTextDirAttr: function(a) {
							if (!this._created || this.textDir != a) this._set("textDir", a), this.applyTextDir(this.focusNode, this.focusNode.value)
						}
					});
				g._setSelectionRange = b._setSelectionRange = function(a, b, c) {
					a.setSelectionRange && a.setSelectionRange(b, c)
				};
				g.selectInputText = b.selectInputText = function(a, b, c) {
					a = h.byId(a);
					isNaN(b) && (b = 0);
					isNaN(c) && (c = a.value ? a.value.length : 0);
					try {
						a.focus(), g._setSelectionRange(a, b, c)
					} catch (e) {}
				};
				return g
			})
		},
		"url:dijit/form/templates/TextBox.html": '<div class="dijit dijitReset dijitInline dijitLeft" id="widget_${id}" role="presentation"\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class="dijitReset dijitInputInner" data-dojo-attach-point=\'textbox,focusNode\' autocomplete="off"\n\t\t\t${!nameAttrSetting} type=\'${type}\'\n\t/></div\n></div>\n',
		"dijit/form/Button": function() {
			define("require,dojo/_base/declare,dojo/dom-class,dojo/has,dojo/_base/kernel,dojo/_base/lang,dojo/ready,./_FormWidget,./_ButtonMixin,dojo/text!./templates/Button.html".split(","), function(f, k, h, j, e, c, i, b, g, a) {
				j("dijit-legacy-requires") && i(0, function() {
					f(["dijit/form/DropDownButton", "dijit/form/ComboButton", "dijit/form/ToggleButton"])
				});
				return k("dijit.form.Button", [b, g], {
					showLabel: !0,
					iconClass: "dijitNoIcon",
					_setIconClassAttr: {
						node: "iconNode",
						type: "class"
					},
					baseClass: "dijitButton",
					templateString: a,
					_setValueAttr: "valueNode",
					_onClick: function(a) {
						var b = this.inherited(arguments);
						b && this.valueNode && (this.valueNode.click(), a.preventDefault(), a.stopPropagation());
						return b
					},
					_fillContent: function(a) {
						if (a && (!this.params || !("label" in this.params)))
							if (a = c.trim(a.innerHTML)) this.label = a
					},
					_setShowLabelAttr: function(a) {
						this.containerNode && h.toggle(this.containerNode, "dijitDisplayNone", !a);
						this._set("showLabel", a)
					},
					setLabel: function(a) {
						e.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.",
							"", "2.0");
						this.set("label", a)
					},
					_setLabelAttr: function(a) {
						this.inherited(arguments);
						if (!this.showLabel && !("title" in this.params)) this.titleNode.title = c.trim(this.containerNode.innerText || this.containerNode.textContent || "")
					}
				})
			})
		},
		"dijit/form/_ButtonMixin": function() {
			define(["dojo/_base/declare", "dojo/dom", "dojo/_base/event", "../registry"], function(f, k, h, j) {
				return f("dijit.form._ButtonMixin", null, {
					label: "",
					type: "button",
					_onClick: function(e) {
						if (this.disabled) return h.stop(e), !1;
						var c = !1 === this.onClick(e);
						if (!c && "submit" == this.type && !(this.valueNode || this.focusNode).form)
							for (var f = this.domNode; f.parentNode; f = f.parentNode) {
								var b = j.byNode(f);
								if (b && "function" == typeof b._onSubmit) {
									b._onSubmit(e);
									c = !0;
									break
								}
							}
						c && e.preventDefault();
						return !c
					},
					postCreate: function() {
						this.inherited(arguments);
						k.setSelectable(this.focusNode, !1)
					},
					onClick: function() {
						return !0
					},
					_setLabelAttr: function(e) {
						this._set("label", e);
						(this.containerNode || this.focusNode).innerHTML = e
					}
				})
			})
		},
		"url:dijit/form/templates/Button.html": '<span class="dijit dijitReset dijitInline" role="presentation"\n\t><span class="dijitReset dijitInline dijitButtonNode"\n\t\tdata-dojo-attach-event="ondijitclick:_onClick" role="presentation"\n\t\t><span class="dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point="titleNode,focusNode"\n\t\t\trole="button" aria-labelledby="${id}_label"\n\t\t\t><span class="dijitReset dijitInline dijitIcon" data-dojo-attach-point="iconNode"></span\n\t\t\t><span class="dijitReset dijitToggleButtonIconChar">&#x25CF;</span\n\t\t\t><span class="dijitReset dijitInline dijitButtonText"\n\t\t\t\tid="${id}_label"\n\t\t\t\tdata-dojo-attach-point="containerNode"\n\t\t\t></span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type="${type}" value="${value}" class="dijitOffScreen"\n\t\ttabIndex="-1" role="presentation" data-dojo-attach-point="valueNode"\n/></span>\n',
		"dijit/MenuBar": function() {
			define(["dojo/_base/declare", "dojo/_base/event", "dojo/keys", "./_MenuBase", "dojo/text!./templates/MenuBar.html"], function(f, k, h, j, e) {
				return f("dijit.MenuBar", j, {
					templateString: e,
					baseClass: "dijitMenuBar",
					_isMenuBar: !0,
					postCreate: function() {
						this.inherited(arguments);
						var c = this.isLeftToRight();
						this.connectKeyNavHandlers(c ? [h.LEFT_ARROW] : [h.RIGHT_ARROW], c ? [h.RIGHT_ARROW] : [h.LEFT_ARROW]);
						this._orient = ["below"]
					},
					_moveToPopup: function(c) {
						if (this.focusedChild && this.focusedChild.popup &&
							!this.focusedChild.disabled) this.onItemClick(this.focusedChild, c)
					},
					focusChild: function(c) {
						var e = this.focusedChild,
							e = e && e.popup && e.popup.isShowingNow;
						this.inherited(arguments);
						e && c.popup && !c.disabled && this._openPopup(!0)
					},
					_onKeyPress: function(c) {
						if (!c.ctrlKey && !c.altKey) switch (c.charOrCode) {
							case h.DOWN_ARROW:
								this._moveToPopup(c), k.stop(c)
						}
					},
					onItemClick: function(c, e) {
						if (c.popup && c.popup.isShowingNow && ("keypress" !== e.type || e.keyCode !== h.DOWN_ARROW)) c.popup.onCancel();
						else this.inherited(arguments)
					}
				})
			})
		},
		"dijit/_MenuBase": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/_base/lang,dojo/mouse,dojo/on,dojo/window,./a11yclick,./popup,./registry,./_Widget,./_KeyNavContainer,./_TemplatedMixin".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n) {
				return k("dijit._MenuBase", [p, n, m], {
					parentMenu: null,
					popupDelay: 500,
					autoFocus: !1,
					postCreate: function() {
						var c = this,
							g = function(a) {
								return e.contains(a, "dijitMenuItem")
							};
						this.own(b(this.containerNode, b.selector(g, i.enter),
							function() {
								c.onItemHover(d.byNode(this))
							}), b(this.containerNode, b.selector(g, i.leave), function() {
							c.onItemUnhover(d.byNode(this))
						}), b(this.containerNode, b.selector(g, a), function(a) {
							c.onItemClick(d.byNode(this), a);
							a.stopPropagation();
							a.preventDefault()
						}));
						this.inherited(arguments)
					},
					onExecute: function() {},
					onCancel: function() {},
					_moveToPopup: function(a) {
						if (this.focusedChild && this.focusedChild.popup && !this.focusedChild.disabled) this.onItemClick(this.focusedChild, a);
						else(a = this._getTopMenu()) && a._isMenuBar &&
							a.focusNext()
					},
					_onPopupHover: function() {
						if (this.currentPopup && this.currentPopup._pendingClose_timer) {
							var a = this.currentPopup.parentMenu;
							a.focusedChild && a.focusedChild._setSelected(!1);
							a.focusedChild = this.currentPopup.from_item;
							a.focusedChild._setSelected(!0);
							this._stopPendingCloseTimer(this.currentPopup)
						}
					},
					onItemHover: function(a) {
						if (this.isActive && (this.focusChild(a), this.focusedChild.popup && !this.focusedChild.disabled && !this.hover_timer)) this.hover_timer = this.defer("_openPopup", this.popupDelay);
						this.focusedChild && this.focusChild(a);
						this._hoveredChild = a;
						a._set("hovering", !0)
					},
					_onChildBlur: function(a) {
						this._stopPopupTimer();
						a._setSelected(!1);
						var b = a.popup;
						if (b) this._stopPendingCloseTimer(b), b._pendingClose_timer = this.defer(function() {
							b._pendingClose_timer = null;
							if (b.parentMenu) b.parentMenu.currentPopup = null;
							l.close(b)
						}, this.popupDelay)
					},
					onItemUnhover: function(a) {
						this.isActive && this._stopPopupTimer();
						if (this._hoveredChild == a) this._hoveredChild = null;
						a._set("hovering", !1)
					},
					_stopPopupTimer: function() {
						if (this.hover_timer) this.hover_timer =
							this.hover_timer.remove()
					},
					_stopPendingCloseTimer: function(a) {
						if (a._pendingClose_timer) a._pendingClose_timer = a._pendingClose_timer.remove()
					},
					_stopFocusTimer: function() {
						if (this._focus_timer) this._focus_timer = this._focus_timer.remove()
					},
					_getTopMenu: function() {
						for (var a = this; a.parentMenu; a = a.parentMenu);
						return a
					},
					onItemClick: function(a, b) {
						"undefined" == typeof this.isShowingNow && this._markActive();
						this.focusChild(a);
						if (a.disabled) return !1;
						a.popup ? this._openPopup("keypress" == b.type) : (this.onExecute(), a._onClick ?
							a._onClick(b) : a.onClick(b))
					},
					_openPopup: function(a) {
						this._stopPopupTimer();
						var b = this.focusedChild;
						if (b) {
							var d = b.popup;
							if (!d.isShowingNow) {
								this.currentPopup && (this._stopPendingCloseTimer(this.currentPopup), l.close(this.currentPopup));
								d.parentMenu = this;
								d.from_item = b;
								var g = this;
								l.open({
									parent: this,
									popup: d,
									around: b.domNode,
									orient: this._orient || ["after", "before"],
									onCancel: function() {
										g.focusChild(b);
										g._cleanUp();
										b._setSelected(!0);
										g.focusedChild = b
									},
									onExecute: c.hitch(this, "_cleanUp")
								});
								this.currentPopup =
									d;
								d.connect(d.domNode, "onmouseenter", c.hitch(g, "_onPopupHover"))
							}
							if (a && d.focus) d._focus_timer = this.defer(c.hitch(d, function() {
								this._focus_timer = null;
								this.focus()
							}))
						}
					},
					_markActive: function() {
						this.isActive = !0;
						e.replace(this.domNode, "dijitMenuActive", "dijitMenuPassive")
					},
					onOpen: function() {
						this.isShowingNow = !0;
						this._markActive()
					},
					_markInactive: function() {
						this.isActive = !1;
						e.replace(this.domNode, "dijitMenuPassive", "dijitMenuActive")
					},
					onClose: function() {
						this._stopFocusTimer();
						this._markInactive();
						this.isShowingNow = !1;
						this.parentMenu = null
					},
					_closeChild: function() {
						this._stopPopupTimer();
						if (this.currentPopup) 0 <= f.indexOf(this._focusManager.activeStack, this.id) && (j.set(this.focusedChild.focusNode, "tabIndex", this.tabIndex), this.focusedChild.focusNode.focus()), l.close(this.currentPopup), this.currentPopup = null;
						if (this.focusedChild) this.focusedChild._setSelected(!1), this.onItemUnhover(this.focusedChild), this.focusedChild = null
					},
					_onItemFocus: function(a) {
						if (this._hoveredChild && this._hoveredChild != a) this.onItemUnhover(this._hoveredChild)
					},
					_onBlur: function() {
						this._cleanUp();
						this.inherited(arguments)
					},
					_cleanUp: function() {
						this._closeChild();
						"undefined" == typeof this.isShowingNow && this._markInactive()
					}
				})
			})
		},
		"dijit/popup": function() {
			define("dojo/_base/array,dojo/aspect,dojo/_base/connect,dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-construct,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,dojo/sniff,./place,./BackgroundIframe,./main".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r) {
				function q() {
					this._popupWrapper &&
						(i.destroy(this._popupWrapper), delete this._popupWrapper)
				}
				j = j(null, {
					_stack: [],
					_beginZIndex: 1E3,
					_idGen: 1,
					_createWrapper: function(a) {
						var b = a._popupWrapper,
							c = a.domNode;
						if (!b) b = i.create("div", {
							"class": "dijitPopup",
							style: {
								display: "none"
							},
							role: "presentation"
						}, a.ownerDocumentBody), b.appendChild(c), c = c.style, c.display = "", c.visibility = "", c.position = "", c.top = "0px", a._popupWrapper = b, k.after(a, "destroy", q, !0);
						return b
					},
					moveOffScreen: function(a) {
						a = this._createWrapper(a);
						g.set(a, {
							visibility: "hidden",
							top: "-9999px",
							display: ""
						})
					},
					hide: function(a) {
						a = this._createWrapper(a);
						g.set(a, "display", "none")
					},
					getTopPopup: function() {
						for (var a = this._stack, b = a.length - 1; 0 < b && a[b].parent === a[b - 1].widget; b--);
						return a[b]
					},
					open: function(g) {
						for (var f = this._stack, i = g.popup, j = g.orient || ["below", "below-alt", "above", "above-alt"], k = g.parent ? g.parent.isLeftToRight() : b.isBodyLtr(i.ownerDocument), q = g.around, r = g.around && g.around.id ? g.around.id + "_dropdown" : "popup_" + this._idGen++; f.length && (!g.parent || !e.isDescendant(g.parent.domNode, f[f.length -
								1].widget.domNode));) this.close(f[f.length - 1].widget);
						var J = this._createWrapper(i);
						c.set(J, {
							id: r,
							style: {
								zIndex: this._beginZIndex + f.length
							},
							"class": "dijitPopup " + (i.baseClass || i["class"] || "").split(" ")[0] + "Popup",
							dijitPopupParent: g.parent ? g.parent.id : ""
						});
						if ((m("ie") || m("mozilla")) && !i.bgIframe) i.bgIframe = new o(J);
						j = q ? n.around(J, q, j, k, i.orient ? d.hitch(i, "orient") : null) : n.at(J, g, "R" == j ? ["TR", "BR", "TL", "BL"] : ["TL", "BL", "TR", "BR"], g.padding);
						J.style.display = "";
						J.style.visibility = "visible";
						i.domNode.style.visibility =
							"visible";
						k = [];
						k.push(p(J, h._keypress, d.hitch(this, function(b) {
							if (b.charOrCode == l.ESCAPE && g.onCancel) a.stop(b), g.onCancel();
							else if (b.charOrCode === l.TAB && (a.stop(b), (b = this.getTopPopup()) && b.onCancel)) b.onCancel()
						})));
						i.onCancel && g.onCancel && k.push(i.on("cancel", g.onCancel));
						k.push(i.on(i.onExecute ? "execute" : "change", d.hitch(this, function() {
							var a = this.getTopPopup();
							if (a && a.onExecute) a.onExecute()
						})));
						f.push({
							widget: i,
							parent: g.parent,
							onExecute: g.onExecute,
							onCancel: g.onCancel,
							onClose: g.onClose,
							handlers: k
						});
						if (i.onOpen) i.onOpen(j);
						return j
					},
					close: function(a) {
						for (var b = this._stack; a && f.some(b, function(b) {
								return b.widget == a
							}) || !a && b.length;) {
							var c = b.pop(),
								d = c.widget,
								g = c.onClose;
							if (d.onClose) d.onClose();
							for (var e; e = c.handlers.pop();) e.remove();
							d && d.domNode && this.hide(d);
							g && g()
						}
					}
				});
				return r.popup = new j
			})
		},
		"dijit/place": function() {
			define("dojo/_base/array,dojo/dom-geometry,dojo/dom-style,dojo/_base/kernel,dojo/_base/window,dojo/window,./main".split(","), function(f, k, h, j, e, c, i) {
				function b(b, a, i, d) {
					var h = c.getBox(b.ownerDocument);
					(!b.parentNode || "body" != ("" + b.parentNode.tagName).toLowerCase()) && e.body(b.ownerDocument).appendChild(b);
					var j = null;
					f.some(a, function(a) {
						var c = a.corner,
							e = a.pos,
							f = 0,
							n = {
								w: {
									L: h.l + h.w - e.x,
									R: e.x - h.l,
									M: h.w
								}[c.charAt(1)],
								h: {
									T: h.t + h.h - e.y,
									B: e.y - h.t,
									M: h.h
								}[c.charAt(0)]
							},
							t = b.style;
						t.left = t.right = "auto";
						i && (f = i(b, a.aroundCorner, c, n, d), f = "undefined" == typeof f ? 0 : f);
						var u = b.style,
							y = u.display,
							z = u.visibility;
						if ("none" == u.display) u.visibility = "hidden", u.display = "";
						t = k.position(b);
						u.display = y;
						u.visibility = z;
						y = {
							L: e.x,
							R: e.x - t.w,
							M: Math.max(h.l, Math.min(h.l + h.w, e.x + (t.w >> 1)) - t.w)
						}[c.charAt(1)];
						z = {
							T: e.y,
							B: e.y - t.h,
							M: Math.max(h.t, Math.min(h.t + h.h, e.y + (t.h >> 1)) - t.h)
						}[c.charAt(0)];
						e = Math.max(h.l, y);
						u = Math.max(h.t, z);
						y = Math.min(h.l + h.w, y + t.w);
						z = Math.min(h.t + h.h, z + t.h);
						y -= e;
						z -= u;
						f += t.w - y + (t.h - z);
						if (null == j || f < j.overflow) j = {
							corner: c,
							aroundCorner: a.aroundCorner,
							x: e,
							y: u,
							w: y,
							h: z,
							overflow: f,
							spaceAvailable: n
						};
						return !f
					});
					j.overflow && i && i(b, j.aroundCorner, j.corner, j.spaceAvailable, d);
					var a = k.isBodyLtr(b.ownerDocument),
						n = b.style;
					n.top = j.y + "px";
					n[a ? "left" : "right"] = (a ? j.x : h.w - j.x - j.w) + "px";
					n[a ? "right" : "left"] = "auto";
					return j
				}
				return i.place = {
					at: function(c, a, e, d) {
						e = f.map(e, function(b) {
							var c = {
								corner: b,
								pos: {
									x: a.x,
									y: a.y
								}
							};
							d && (c.pos.x += "L" == b.charAt(1) ? d.x : -d.x, c.pos.y += "T" == b.charAt(0) ? d.y : -d.y);
							return c
						});
						return b(c, e)
					},
					around: function(c, a, e, d, i) {
						function m(a, b) {
							I.push({
								aroundCorner: a,
								corner: b,
								pos: {
									x: {
										L: t,
										R: t + y,
										M: t + (y >> 1)
									}[a.charAt(1)],
									y: {
										T: u,
										B: u + z,
										M: u + (z >> 1)
									}[a.charAt(0)]
								}
							})
						}
						var n = "string" == typeof a || "offsetWidth" in a ? k.position(a, !0) : a;
						if (a.parentNode)
							for (var o = "absolute" == h.getComputedStyle(a).position, a = a.parentNode; a && 1 == a.nodeType && "BODY" != a.nodeName;) {
								var r = k.position(a, !0),
									q = h.getComputedStyle(a);
								/relative|absolute/.test(q.position) && (o = !1);
								if (!o && /hidden|auto|scroll/.test(q.overflow)) {
									var v = Math.min(n.y + n.h, r.y + r.h),
										s = Math.min(n.x + n.w, r.x + r.w);
									n.x = Math.max(n.x, r.x);
									n.y = Math.max(n.y, r.y);
									n.h = v - n.y;
									n.w = s - n.x
								}
								"absolute" == q.position && (o = !0);
								a = a.parentNode
							}
						var t = n.x,
							u = n.y,
							y = "w" in n ? n.w : n.w = n.width,
							z = "h" in n ? n.h : (j.deprecated("place.around: dijit/place.__Rectangle: { x:" +
								t + ", y:" + u + ", height:" + n.height + ", width:" + y + " } has been deprecated.  Please use { x:" + t + ", y:" + u + ", h:" + n.height + ", w:" + y + " }", "", "2.0"), n.h = n.height),
							I = [];
						f.forEach(e, function(a) {
							var b = d;
							switch (a) {
								case "above-centered":
									m("TM", "BM");
									break;
								case "below-centered":
									m("BM", "TM");
									break;
								case "after-centered":
									b = !b;
								case "before-centered":
									m(b ? "ML" : "MR", b ? "MR" : "ML");
									break;
								case "after":
									b = !b;
								case "before":
									m(b ? "TL" : "TR", b ? "TR" : "TL");
									m(b ? "BL" : "BR", b ? "BR" : "BL");
									break;
								case "below-alt":
									b = !b;
								case "below":
									m(b ? "BL" :
										"BR", b ? "TL" : "TR");
									m(b ? "BR" : "BL", b ? "TR" : "TL");
									break;
								case "above-alt":
									b = !b;
								case "above":
									m(b ? "TL" : "TR", b ? "BL" : "BR");
									m(b ? "TR" : "TL", b ? "BR" : "BL");
									break;
								default:
									m(a.aroundCorner, a.corner)
							}
						});
						c = b(c, I, i, {
							w: y,
							h: z
						});
						c.aroundNodePos = n;
						return c
					}
				}
			})
		},
		"dijit/BackgroundIframe": function() {
			define("require,./main,dojo/_base/config,dojo/dom-construct,dojo/dom-style,dojo/_base/lang,dojo/on,dojo/sniff,dojo/_base/window".split(","), function(f, k, h, j, e, c, i, b, g) {
				var a = new function() {
					var a = [];
					this.pop = function() {
						var c;
						a.length ?
							(c = a.pop(), c.style.display = "") : (9 > b("ie") ? (c = "<iframe src='" + (h.dojoBlankHtmlUrl || f.toUrl("dojo/resources/blank.html") || 'javascript:""') + "' role='presentation' style='position: absolute; left: 0px; top: 0px;z-index: -1; filter:Alpha(Opacity=\"0\");'>", c = g.doc.createElement(c)) : (c = j.create("iframe"), c.src = 'javascript:""', c.className = "dijitBackgroundIframe", c.setAttribute("role", "presentation"), e.set(c, "opacity", 0.1)), c.tabIndex = -1);
						return c
					};
					this.push = function(b) {
						b.style.display = "none";
						a.push(b)
					}
				};
				k.BackgroundIframe = function(g) {
					if (!g.id) throw Error("no id");
					if (b("ie") || b("mozilla")) {
						var d = this.iframe = a.pop();
						g.appendChild(d);
						7 > b("ie") || b("quirks") ? (this.resize(g), this._conn = i(g, "resize", c.hitch(this, function() {
							this.resize(g)
						}))) : e.set(d, {
							width: "100%",
							height: "100%"
						})
					}
				};
				c.extend(k.BackgroundIframe, {
					resize: function(a) {
						this.iframe && e.set(this.iframe, {
							width: a.offsetWidth + "px",
							height: a.offsetHeight + "px"
						})
					},
					destroy: function() {
						if (this._conn) this._conn.remove(), this._conn = null;
						this.iframe && (a.push(this.iframe),
							delete this.iframe)
					}
				});
				return k.BackgroundIframe
			})
		},
		"dijit/_KeyNavContainer": function() {
			define("dojo/_base/kernel,./_Container,./_FocusMixin,dojo/_base/array,dojo/keys,dojo/_base/declare,dojo/_base/event,dojo/dom-attr,dojo/_base/lang".split(","), function(f, k, h, j, e, c, i, b, g) {
				return c("dijit._KeyNavContainer", [h, k], {
					tabIndex: "0",
					connectKeyNavHandlers: function(a, b) {
						var c = this._keyNavCodes = {},
							f = g.hitch(this, "focusPrev"),
							i = g.hitch(this, "focusNext");
						j.forEach(a, function(a) {
							c[a] = f
						});
						j.forEach(b, function(a) {
							c[a] =
								i
						});
						c[e.HOME] = g.hitch(this, "focusFirstChild");
						c[e.END] = g.hitch(this, "focusLastChild");
						this.connect(this.domNode, "onkeypress", "_onContainerKeypress");
						this.connect(this.domNode, "onfocus", "_onContainerFocus")
					},
					startupKeyNavChildren: function() {
						f.deprecated("startupKeyNavChildren() call no longer needed", "", "2.0")
					},
					startup: function() {
						this.inherited(arguments);
						j.forEach(this.getChildren(), g.hitch(this, "_startupChild"))
					},
					addChild: function(a, b) {
						this.inherited(arguments);
						this._startupChild(a)
					},
					focus: function() {
						this.focusFirstChild()
					},
					focusFirstChild: function() {
						this.focusChild(this._getFirstFocusableChild())
					},
					focusLastChild: function() {
						this.focusChild(this._getLastFocusableChild())
					},
					focusNext: function() {
						this.focusChild(this._getNextFocusableChild(this.focusedChild, 1))
					},
					focusPrev: function() {
						this.focusChild(this._getNextFocusableChild(this.focusedChild, -1), !0)
					},
					focusChild: function(a, b) {
						a && (this.focusedChild && a !== this.focusedChild && this._onChildBlur(this.focusedChild), a.set("tabIndex", this.tabIndex), a.focus(b ? "end" : "start"), this._set("focusedChild",
							a))
					},
					_startupChild: function(a) {
						a.set("tabIndex", "-1");
						this.connect(a, "_onFocus", function() {
							a.set("tabIndex", this.tabIndex)
						});
						this.connect(a, "_onBlur", function() {
							a.set("tabIndex", "-1")
						})
					},
					_onContainerFocus: function(a) {
						a.target !== this.domNode || this.focusedChild || (this.focusFirstChild(), b.set(this.domNode, "tabIndex", "-1"))
					},
					_onBlur: function(a) {
						this.tabIndex && b.set(this.domNode, "tabIndex", this.tabIndex);
						this.focusedChild = null;
						this.inherited(arguments)
					},
					_onContainerKeypress: function(a) {
						if (!a.ctrlKey &&
							!a.altKey) {
							var b = this._keyNavCodes[a.charOrCode];
							b && (b(), i.stop(a))
						}
					},
					_onChildBlur: function() {},
					_getFirstFocusableChild: function() {
						return this._getNextFocusableChild(null, 1)
					},
					_getLastFocusableChild: function() {
						return this._getNextFocusableChild(null, -1)
					},
					_getNextFocusableChild: function(a, b) {
						a && (a = this._getSiblingOfChild(a, b));
						for (var c = this.getChildren(), g = 0; g < c.length; g++) {
							a || (a = c[0 < b ? 0 : c.length - 1]);
							if (a.isFocusable()) return a;
							a = this._getSiblingOfChild(a, b)
						}
						return null
					}
				})
			})
		},
		"url:dijit/templates/MenuBar.html": '<div class="dijitMenuBar dijitMenuPassive" data-dojo-attach-point="containerNode"  role="menubar" tabIndex="${tabIndex}" data-dojo-attach-event="onkeypress: _onKeyPress"></div>\n',
		"dijit/PopupMenuBarItem": function() {
			define(["dojo/_base/declare", "./PopupMenuItem", "./MenuBarItem"], function(f, k, h) {
				return f("dijit.PopupMenuBarItem", [k, h._MenuBarItemMixin], {})
			})
		},
		"dijit/PopupMenuItem": function() {
			define("dojo/_base/declare,dojo/dom-style,dojo/query,./registry,./MenuItem,./hccss".split(","), function(f, k, h, j, e) {
				return f("dijit.PopupMenuItem", e, {
					_fillContent: function() {
						if (this.srcNodeRef) {
							var c = h("*", this.srcNodeRef);
							this.inherited(arguments, [c[0]]);
							this.dropDownContainer = this.srcNodeRef
						}
					},
					startup: function() {
						if (!this._started) {
							this.inherited(arguments);
							if (!this.popup) {
								var c = h("[widgetId]", this.dropDownContainer)[0];
								this.popup = j.byNode(c)
							}
							this.ownerDocumentBody.appendChild(this.popup.domNode);
							this.popup.startup();
							this.popup.domNode.style.display = "none";
							this.arrowWrapper && k.set(this.arrowWrapper, "visibility", "");
							this.focusNode.setAttribute("aria-haspopup", "true")
						}
					},
					destroyDescendants: function(c) {
						this.popup && (this.popup._destroyed || this.popup.destroyRecursive(c), delete this.popup);
						this.inherited(arguments)
					}
				})
			})
		},
		"dijit/MenuItem": function() {
			define("dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/_base/kernel,dojo/sniff,./_Widget,./_TemplatedMixin,./_Contained,./_CssStateMixin,dojo/text!./templates/MenuItem.html".split(","), function(f, k, h, j, e, c, i, b, g, a, l) {
				return f("dijit.MenuItem", [i, b, g, a], {
					templateString: l,
					baseClass: "dijitMenuItem",
					label: "",
					_setLabelAttr: function(a) {
						this.containerNode.innerHTML = a;
						this._set("label", a);
						"auto" === this.textDir && this.applyTextDir(this.focusNode, this.label)
					},
					iconClass: "dijitNoIcon",
					_setIconClassAttr: {
						node: "iconNode",
						type: "class"
					},
					accelKey: "",
					disabled: !1,
					_fillContent: function(a) {
						a && !("label" in this.params) && this.set("label", a.innerHTML)
					},
					buildRendering: function() {
						this.inherited(arguments);
						var a = this.id + "_text";
						h.set(this.containerNode, "id", a);
						this.accelKeyNode && (h.set(this.accelKeyNode, "id", this.id + "_accel"), a += " " + this.id + "_accel");
						this.domNode.setAttribute("aria-labelledby", a);
						k.setSelectable(this.domNode, !1)
					},
					onClick: function() {},
					focus: function() {
						try {
							8 == c("ie") && this.containerNode.focus(),
								this.focusNode.focus()
						} catch (a) {}
					},
					_onFocus: function() {
						this._setSelected(!0);
						this.getParent()._onItemFocus(this);
						this.inherited(arguments)
					},
					_setSelected: function(a) {
						j.toggle(this.domNode, "dijitMenuItemSelected", a)
					},
					setLabel: function(a) {
						e.deprecated("dijit.MenuItem.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
						this.set("label", a)
					},
					setDisabled: function(a) {
						e.deprecated("dijit.Menu.setDisabled() is deprecated.  Use set('disabled', bool) instead.", "", "2.0");
						this.set("disabled", a)
					},
					_setDisabledAttr: function(a) {
						this.focusNode.setAttribute("aria-disabled", a ? "true" : "false");
						this._set("disabled", a)
					},
					_setAccelKeyAttr: function(a) {
						this.accelKeyNode.style.display = a ? "" : "none";
						this.accelKeyNode.innerHTML = a;
						h.set(this.containerNode, "colSpan", a ? "1" : "2");
						this._set("accelKey", a)
					},
					_setTextDirAttr: function(a) {
						if (!this._created || this.textDir != a) this._set("textDir", a), this.applyTextDir(this.focusNode, this.label)
					}
				})
			})
		},
		"url:dijit/templates/MenuItem.html": '<tr class="dijitReset dijitMenuItem" data-dojo-attach-point="focusNode" role="menuitem" tabIndex="-1">\n\t<td class="dijitReset dijitMenuItemIconCell" role="presentation">\n\t\t<img src="${_blankGif}" alt="" class="dijitIcon dijitMenuItemIcon" data-dojo-attach-point="iconNode"/>\n\t</td>\n\t<td class="dijitReset dijitMenuItemLabel" colspan="2" data-dojo-attach-point="containerNode"></td>\n\t<td class="dijitReset dijitMenuItemAccelKey" style="display: none" data-dojo-attach-point="accelKeyNode"></td>\n\t<td class="dijitReset dijitMenuArrowCell" role="presentation">\n\t\t<div data-dojo-attach-point="arrowWrapper" style="visibility: hidden">\n\t\t\t<img src="${_blankGif}" alt="" class="dijitMenuExpand"/>\n\t\t\t<span class="dijitMenuExpandA11y">+</span>\n\t\t</div>\n\t</td>\n</tr>\n',
		"dijit/MenuBarItem": function() {
			define(["dojo/_base/declare", "./MenuItem", "dojo/text!./templates/MenuBarItem.html"], function(f, k, h) {
				h = f("dijit._MenuBarItemMixin", null, {
					templateString: h,
					_setIconClassAttr: null
				});
				f = f("dijit.MenuBarItem", [k, h], {});
				f._MenuBarItemMixin = h;
				return f
			})
		},
		"url:dijit/templates/MenuBarItem.html": '<div class="dijitReset dijitInline dijitMenuItem dijitMenuItemLabel" data-dojo-attach-point="focusNode"\n\t \trole="menuitem" tabIndex="-1">\n\t<span data-dojo-attach-point="containerNode"></span>\n</div>\n',
		"dijit/Menu": function() {
			define("require,dojo/_base/array,dojo/_base/declare,dojo/_base/event,dojo/dom,dojo/dom-attr,dojo/dom-geometry,dojo/dom-style,dojo/keys,dojo/_base/lang,dojo/on,dojo/sniff,dojo/_base/window,dojo/window,./popup,./DropDownMenu,dojo/ready".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r) {
				d("dijit-legacy-requires") && r(0, function() {
					f(["dijit/MenuItem", "dijit/PopupMenuItem", "dijit/CheckedMenuItem", "dijit/MenuSeparator"])
				});
				return h("dijit.Menu", o, {
					constructor: function() {
						this._bindings =
							[]
					},
					targetNodeIds: [],
					selector: "",
					contextMenuForWindow: !1,
					leftClickToOpen: !1,
					refocus: !0,
					postCreate: function() {
						this.contextMenuForWindow ? this.bindDomNode(this.ownerDocumentBody) : k.forEach(this.targetNodeIds, this.bindDomNode, this);
						this.inherited(arguments)
					},
					_iframeContentWindow: function(a) {
						return m.get(this._iframeContentDocument(a)) || this._iframeContentDocument(a).__parent__ || a.name && p.doc.frames[a.name] || null
					},
					_iframeContentDocument: function(a) {
						return a.contentDocument || a.contentWindow && a.contentWindow.document ||
							a.name && p.doc.frames[a.name] && p.doc.frames[a.name].document || null
					},
					bindDomNode: function(b) {
						var b = e.byId(b, this.ownerDocument),
							d;
						if ("iframe" == b.tagName.toLowerCase()) {
							var f = b,
								i = this._iframeContentWindow(f);
							d = p.body(i.document)
						} else d = b == p.body(this.ownerDocument) ? this.ownerDocument.documentElement : b;
						var h = {
							node: b,
							iframe: f
						};
						c.set(b, "_dijitMenu" + this.id, this._bindings.push(h));
						var m = a.hitch(this, function(a) {
							var b = this.selector,
								c = b ? function(a) {
									return l.selector(b, a)
								} : function(a) {
									return a
								},
								d = this;
							return [l(a,
								c(this.leftClickToOpen ? "click" : "contextmenu"),
								function(a) {
									j.stop(a);
									d._scheduleOpen(this, f, {
										x: a.pageX,
										y: a.pageY
									})
								}), l(a, c("keydown"), function(a) {
								a.shiftKey && a.keyCode == g.F10 && (j.stop(a), d._scheduleOpen(this, f))
							})]
						});
						h.connects = d ? m(d) : [];
						if (f) h.onloadHandler = a.hitch(this, function() {
							var a = this._iframeContentWindow(f);
							d = p.body(a.document);
							h.connects = m(d)
						}), f.addEventListener ? f.addEventListener("load", h.onloadHandler, !1) : f.attachEvent("onload", h.onloadHandler)
					},
					unBindDomNode: function(a) {
						var b;
						try {
							b = e.byId(a,
								this.ownerDocument)
						} catch (d) {
							return
						}
						a = "_dijitMenu" + this.id;
						if (b && c.has(b, a)) {
							for (var g = c.get(b, a) - 1, f = this._bindings[g], i; i = f.connects.pop();) i.remove();
							(i = f.iframe) && (i.removeEventListener ? i.removeEventListener("load", f.onloadHandler, !1) : i.detachEvent("onload", f.onloadHandler));
							c.remove(b, a);
							delete this._bindings[g]
						}
					},
					_scheduleOpen: function(a, b, c) {
						if (!this._openTimer) this._openTimer = this.defer(function() {
							delete this._openTimer;
							this._openMyself({
								target: a,
								iframe: b,
								coords: c
							})
						}, 1)
					},
					_openMyself: function(a) {
						function c() {
							k.refocus &&
								o && o.focus();
							n.close(k)
						}
						var g = a.target,
							f = a.iframe,
							a = a.coords;
						this.currentTarget = g;
						if (a) {
							if (f) {
								var g = i.position(f, !0),
									h = this._iframeContentWindow(f),
									h = i.docScroll(h.document),
									l = b.getComputedStyle(f),
									j = b.toPixelValue,
									m = (d("ie") && d("quirks") ? 0 : j(f, l.paddingLeft)) + (d("ie") && d("quirks") ? j(f, l.borderLeftWidth) : 0),
									f = (d("ie") && d("quirks") ? 0 : j(f, l.paddingTop)) + (d("ie") && d("quirks") ? j(f, l.borderTopWidth) : 0);
								a.x += g.x + m - h.x;
								a.y += g.y + f - h.y
							}
						} else a = i.position(g, !0), a.x += 10, a.y += 10;
						var k = this,
							f = this._focusManager.get("prevNode"),
							g = this._focusManager.get("curNode"),
							o = !g || e.isDescendant(g, this.domNode) ? f : g;
						n.open({
							popup: this,
							x: a.x,
							y: a.y,
							onExecute: c,
							onCancel: c,
							orient: this.isLeftToRight() ? "L" : "R"
						});
						this.focus();
						this._onBlur = function() {
							this.inherited("_onBlur", arguments);
							n.close(this)
						}
					},
					destroy: function() {
						k.forEach(this._bindings, function(a) {
							a && this.unBindDomNode(a.node)
						}, this);
						this.inherited(arguments)
					}
				})
			})
		},
		"dijit/DropDownMenu": function() {
			define("dojo/_base/declare,dojo/_base/event,dojo/keys,dojo/text!./templates/Menu.html,./_OnDijitClickMixin,./_MenuBase".split(","),
				function(f, k, h, j, e, c) {
					return f("dijit.DropDownMenu", [c, e], {
						templateString: j,
						baseClass: "dijitMenu",
						postCreate: function() {
							this.inherited(arguments);
							var c = this.isLeftToRight();
							this._openSubMenuKey = c ? h.RIGHT_ARROW : h.LEFT_ARROW;
							this._closeSubMenuKey = c ? h.LEFT_ARROW : h.RIGHT_ARROW;
							this.connectKeyNavHandlers([h.UP_ARROW], [h.DOWN_ARROW])
						},
						_onKeyPress: function(c) {
							if (!c.ctrlKey && !c.altKey) switch (c.charOrCode) {
								case this._openSubMenuKey:
									this._moveToPopup(c);
									k.stop(c);
									break;
								case this._closeSubMenuKey:
									if (this.parentMenu)
										if (this.parentMenu._isMenuBar) this.parentMenu.focusPrev();
										else this.onCancel(!1);
									else k.stop(c)
							}
						}
					})
				})
		},
		"url:dijit/templates/Menu.html": '<table class="dijit dijitMenu dijitMenuPassive dijitReset dijitMenuTable" role="menu" tabIndex="${tabIndex}"\n\t   data-dojo-attach-event="onkeypress:_onKeyPress" cellspacing="0">\n\t<tbody class="dijitReset" data-dojo-attach-point="containerNode"></tbody>\n</table>\n',
		"dijit/Toolbar": function() {
			define("require,dojo/_base/declare,dojo/has,dojo/keys,dojo/ready,./_Widget,./_KeyNavContainer,./_TemplatedMixin".split(","), function(f,
				k, h, j, e, c, i, b) {
				h("dijit-legacy-requires") && e(0, function() {
					f(["dijit/ToolbarSeparator"])
				});
				return k("dijit.Toolbar", [c, b, i], {
					templateString: '<div class="dijit" role="toolbar" tabIndex="${tabIndex}" data-dojo-attach-point="containerNode"></div>',
					baseClass: "dijitToolbar",
					postCreate: function() {
						this.inherited(arguments);
						this.connectKeyNavHandlers(this.isLeftToRight() ? [j.LEFT_ARROW] : [j.RIGHT_ARROW], this.isLeftToRight() ? [j.RIGHT_ARROW] : [j.LEFT_ARROW])
					}
				})
			})
		},
		"dijit/Dialog": function() {
			define("require,dojo/_base/array,dojo/_base/connect,dojo/_base/declare,dojo/_base/Deferred,dojo/dom,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/event,dojo/_base/fx,dojo/i18n,dojo/keys,dojo/_base/lang,dojo/on,dojo/ready,dojo/sniff,dojo/window,dojo/dnd/Moveable,dojo/dnd/TimedMoveable,./focus,./_base/manager,./_Widget,./_TemplatedMixin,./_CssStateMixin,./form/_FormMixin,./_DialogMixin,./DialogUnderlay,./layout/ContentPane,dojo/text!./templates/Dialog.html,./main,dojo/i18n!./nls/common".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r, q, v, s, t, u, y, z, I, J, N, E, S, Q, B) {
					var u = j("dijit._DialogBase", [z, J, N, I], {
							templateString: Q,
							baseClass: "dijitDialog",
							cssStateNodes: {
								closeButtonNode: "dijitDialogCloseIcon"
							},
							_setTitleAttr: [{
								node: "titleNode",
								type: "innerHTML"
							}, {
								node: "titleBar",
								type: "attribute"
							}],
							open: !1,
							duration: u.defaultDuration,
							refocus: !0,
							autofocus: !0,
							_firstFocusItem: null,
							_lastFocusItem: null,
							doLayout: !1,
							draggable: !0,
							_setDraggableAttr: function(a) {
								this._set("draggable", a)
							},
							"aria-describedby": "",
							maxRatio: 0.9,
							postMixInProperties: function() {
								var a = d.getLocalization("dijit", "common");
								m.mixin(this, a);
								this.inherited(arguments)
							},
							postCreate: function() {
								g.set(this.domNode, {
									display: "none",
									position: "absolute"
								});
								this.ownerDocumentBody.appendChild(this.domNode);
								this.inherited(arguments);
								this.connect(this, "onExecute", "hide");
								this.connect(this, "onCancel", "hide");
								this._modalconnects = []
							},
							onLoad: function() {
								this._position();
								this.autofocus && w.isTop(this) && (this._getFocusItems(this.domNode), t.focus(this._firstFocusItem));
								this.inherited(arguments)
							},
							_endDrag: function() {
								var a = b.position(this.domNode),
									c = q.getBox(this.ownerDocument);
								a.y = Math.min(Math.max(a.y, 0), c.h - a.h);
								a.x = Math.min(Math.max(a.x, 0), c.w - a.w);
								this._relativePosition = a;
								this._position()
							},
							_setup: function() {
								var a = this.domNode;
								this.titleBar && this.draggable ? (this._moveable = new(6 == r("ie") ? s : v)(a, {
									handle: this.titleBar
								}), this.connect(this._moveable, "onMoveStop", "_endDrag")) : i.add(a, "dijitDialogFixed");
								this.underlayAttrs = {
									dialogId: this.id,
									"class": k.map(this["class"].split(/\s/),
										function(a) {
											return a + "_underlay"
										}).join(" "),
									ownerDocument: this.ownerDocument
								}
							},
							_size: function() {
								this._checkIfSingleChild();
								if (this._singleChild) {
									if ("undefined" != typeof this._singleChildOriginalStyle) this._singleChild.domNode.style.cssText = this._singleChildOriginalStyle, delete this._singleChildOriginalStyle
								} else g.set(this.containerNode, {
									width: "auto",
									height: "auto"
								});
								var a = b.position(this.domNode),
									c = q.getBox(this.ownerDocument);
								c.w *= this.maxRatio;
								c.h *= this.maxRatio;
								if (a.w >= c.w || a.h >= c.h) {
									var d = b.position(this.containerNode),
										e = Math.min(a.w, c.w) - (a.w - d.w),
										a = Math.min(a.h, c.h) - (a.h - d.h);
									if (this._singleChild && this._singleChild.resize) {
										if ("undefined" == typeof this._singleChildOriginalStyle) this._singleChildOriginalStyle = this._singleChild.domNode.style.cssText;
										this._singleChild.resize({
											w: e,
											h: a
										})
									} else g.set(this.containerNode, {
										width: e + "px",
										height: a + "px",
										overflow: "auto",
										position: "relative"
									})
								} else this._singleChild && this._singleChild.resize && this._singleChild.resize()
							},
							_position: function() {
								if (!i.contains(this.ownerDocumentBody,
										"dojoMove")) {
									var a = this.domNode,
										c = q.getBox(this.ownerDocument),
										d = this._relativePosition,
										e = d ? null : b.position(a);
									g.set(a, {
										left: Math.floor(c.l + (d ? d.x : (c.w - e.w) / 2)) + "px",
										top: Math.floor(c.t + (d ? d.y : (c.h - e.h) / 2)) + "px"
									})
								}
							},
							_onKey: function(b) {
								if (b.charOrCode) {
									var c = b.target;
									b.charOrCode === p.TAB && this._getFocusItems(this.domNode);
									var d = this._firstFocusItem == this._lastFocusItem;
									if (c == this._firstFocusItem && b.shiftKey && b.charOrCode === p.TAB) d || t.focus(this._lastFocusItem), a.stop(b);
									else if (c == this._lastFocusItem &&
										b.charOrCode === p.TAB && !b.shiftKey) d || t.focus(this._firstFocusItem), a.stop(b);
									else {
										for (; c;) {
											if (c == this.domNode || i.contains(c, "dijitPopup"))
												if (b.charOrCode == p.ESCAPE) this.onCancel();
												else return;
											c = c.parentNode
										}
										if (b.charOrCode !== p.TAB) a.stop(b);
										else if (!r("opera")) try {
											this._firstFocusItem.focus()
										} catch (g) {}
									}
								}
							},
							show: function() {
								if (!this.open) {
									this._started || this.startup();
									if (!this._alreadyInitialized) this._setup(), this._alreadyInitialized = !0;
									this._fadeOutDeferred && this._fadeOutDeferred.cancel();
									var a = q.get(this.ownerDocument);
									this._modalconnects.push(n(a, "scroll", m.hitch(this, "resize")));
									this._modalconnects.push(n(this.domNode, h._keypress, m.hitch(this, "_onKey")));
									g.set(this.domNode, {
										opacity: 0,
										display: ""
									});
									this._set("open", !0);
									this._onShow();
									this._size();
									this._position();
									var b;
									this._fadeInDeferred = new e(m.hitch(this, function() {
										b.stop();
										delete this._fadeInDeferred
									}));
									b = l.fadeIn({
										node: this.domNode,
										duration: this.duration,
										beforeBegin: m.hitch(this, function() {
											w.show(this, this.underlayAttrs)
										}),
										onEnd: m.hitch(this, function() {
											this.autofocus &&
												w.isTop(this) && (this._getFocusItems(this.domNode), t.focus(this._firstFocusItem));
											this._fadeInDeferred.resolve(!0);
											delete this._fadeInDeferred
										})
									}).play();
									return this._fadeInDeferred
								}
							},
							hide: function() {
								if (this._alreadyInitialized && this.open) {
									this._fadeInDeferred && this._fadeInDeferred.cancel();
									var a;
									this._fadeOutDeferred = new e(m.hitch(this, function() {
										a.stop();
										delete this._fadeOutDeferred
									}));
									this._fadeOutDeferred.then(m.hitch(this, "onHide"));
									a = l.fadeOut({
										node: this.domNode,
										duration: this.duration,
										onEnd: m.hitch(this,
											function() {
												this.domNode.style.display = "none";
												w.hide(this);
												this._fadeOutDeferred.resolve(!0);
												delete this._fadeOutDeferred
											})
									}).play();
									if (this._scrollConnected) this._scrollConnected = !1;
									for (var b; b = this._modalconnects.pop();) b.remove();
									this._relativePosition && delete this._relativePosition;
									this._set("open", !1);
									return this._fadeOutDeferred
								}
							},
							resize: function() {
								"none" != this.domNode.style.display && (E._singleton && E._singleton.layout(), this._position(), this._size())
							},
							destroy: function() {
								this._fadeInDeferred &&
									this._fadeInDeferred.cancel();
								this._fadeOutDeferred && this._fadeOutDeferred.cancel();
								this._moveable && this._moveable.destroy();
								for (var a; a = this._modalconnects.pop();) a.remove();
								w.hide(this);
								this.inherited(arguments)
							}
						}),
						A = j("dijit.Dialog", [S, u], {});
					A._DialogBase = u;
					var w = A._DialogLevelManager = {
							_beginZIndex: 950,
							show: function(a, b) {
								x[x.length - 1].focus = t.curNode;
								var c = E._singleton;
								!c || c._destroyed ? c = B._underlay = E._singleton = new E(b) : c.set(a.underlayAttrs);
								var d = x[x.length - 1].dialog ? x[x.length - 1].zIndex + 2 :
									A._DialogLevelManager._beginZIndex;
								1 == x.length && c.show();
								g.set(E._singleton.domNode, "zIndex", d - 1);
								g.set(a.domNode, "zIndex", d);
								x.push({
									dialog: a,
									underlayAttrs: b,
									zIndex: d
								})
							},
							hide: function(a) {
								if (x[x.length - 1].dialog == a) {
									x.pop();
									var b = x[x.length - 1];
									E._singleton._destroyed || (1 == x.length ? E._singleton.hide() : (g.set(E._singleton.domNode, "zIndex", b.zIndex - 1), E._singleton.set(b.underlayAttrs)));
									if (a.refocus) {
										a = b.focus;
										if (b.dialog && (!a || !c.isDescendant(a, b.dialog.domNode))) b.dialog._getFocusItems(b.dialog.domNode),
											a = b.dialog._firstFocusItem;
										if (a) try {
											a.focus()
										} catch (d) {}
									}
								} else b = k.indexOf(k.map(x, function(a) {
									return a.dialog
								}), a), -1 != b && x.splice(b, 1)
							},
							isTop: function(a) {
								return x[x.length - 1].dialog == a
							}
						},
						x = A._dialogStack = [{
							dialog: null,
							focus: null,
							underlayAttrs: null
						}];
					r("dijit-legacy-requires") && o(0, function() {
						f(["dijit/TooltipDialog"])
					});
					return A
				})
		},
		"dojo/dnd/Moveable": function() {
			define("../_base/array,../_base/declare,../_base/event,../_base/lang,../dom,../dom-class,../Evented,../on,../topic,../touch,./common,./Mover,../_base/window".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p) {
					return k("dojo.dnd.Moveable", [i], {
						handle: "",
						delay: 0,
						skip: !1,
						constructor: function(c, g) {
							this.node = e.byId(c);
							g || (g = {});
							this.handle = g.handle ? e.byId(g.handle) : null;
							if (!this.handle) this.handle = this.node;
							this.delay = 0 < g.delay ? g.delay : 0;
							this.skip = g.skip;
							this.mover = g.mover ? g.mover : d;
							this.events = [b(this.handle, a.press, j.hitch(this, "onMouseDown")), b(this.handle, "dragstart", j.hitch(this, "onSelectStart")), b(this.handle, "selectstart", j.hitch(this, "onSelectStart"))]
						},
						markupFactory: function(a,
							b, c) {
							return new c(b, a)
						},
						destroy: function() {
							f.forEach(this.events, function(a) {
								a.remove()
							});
							this.events = this.node = this.handle = null
						},
						onMouseDown: function(c) {
							if (!this.skip || !l.isFormElement(c)) {
								if (this.delay) this.events.push(b(this.handle, a.move, j.hitch(this, "onMouseMove")), b(this.handle, a.release, j.hitch(this, "onMouseUp"))), this._lastX = c.pageX, this._lastY = c.pageY;
								else this.onDragDetected(c);
								h.stop(c)
							}
						},
						onMouseMove: function(a) {
							if (Math.abs(a.pageX - this._lastX) > this.delay || Math.abs(a.pageY - this._lastY) >
								this.delay) this.onMouseUp(a), this.onDragDetected(a);
							h.stop(a)
						},
						onMouseUp: function(a) {
							for (var b = 0; 2 > b; ++b) this.events.pop().remove();
							h.stop(a)
						},
						onSelectStart: function(a) {
							(!this.skip || !l.isFormElement(a)) && h.stop(a)
						},
						onDragDetected: function(a) {
							new this.mover(this.node, a, this)
						},
						onMoveStart: function(a) {
							g.publish("/dnd/move/start", a);
							c.add(p.body(), "dojoMove");
							c.add(this.node, "dojoMoveItem")
						},
						onMoveStop: function(a) {
							g.publish("/dnd/move/stop", a);
							c.remove(p.body(), "dojoMove");
							c.remove(this.node, "dojoMoveItem")
						},
						onFirstMove: function() {},
						onMove: function(a, b) {
							this.onMoving(a, b);
							var c = a.node.style;
							c.left = b.l + "px";
							c.top = b.t + "px";
							this.onMoved(a, b)
						},
						onMoving: function() {},
						onMoved: function() {}
					})
				})
		},
		"dojo/dnd/common": function() {
			define(["../_base/connect", "../_base/kernel", "../_base/lang", "../dom"], function(f, k, h, j) {
				var e = {};
				e.getCopyKeyState = f.isCopyKey;
				e._uniqueId = 0;
				e.getUniqueId = function() {
					var c;
					do c = k._scopeName + "Unique" + ++e._uniqueId; while (j.byId(c));
					return c
				};
				e._empty = {};
				e.isFormElement = function(c) {
					c = c.target;
					if (3 == c.nodeType) c = c.parentNode;
					return 0 <= " button textarea input select option ".indexOf(" " + c.tagName.toLowerCase() + " ")
				};
				h.mixin(h.getObject("dojo.dnd", !0), e);
				return e
			})
		},
		"dojo/dnd/Mover": function() {
			define("../_base/array,../_base/declare,../_base/event,../_base/lang,../sniff,../_base/window,../dom,../dom-geometry,../dom-style,../Evented,../on,../touch,./common,./autoscroll".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m) {
				return k("dojo.dnd.Mover", [a], {
					constructor: function(a, b, c) {
						this.node = i.byId(a);
						this.marginBox = {
							l: b.pageX,
							t: b.pageY
						};
						this.mouseButton = b.button;
						b = this.host = c;
						a = a.ownerDocument;
						this.events = [l(a, d.move, j.hitch(this, "onFirstMove")), l(a, d.move, j.hitch(this, "onMouseMove")), l(a, d.release, j.hitch(this, "onMouseUp")), l(a, "dragstart", h.stop), l(a.body, "selectstart", h.stop)];
						m.autoScrollStart(a);
						if (b && b.onMoveStart) b.onMoveStart(this)
					},
					onMouseMove: function(a) {
						m.autoScroll(a);
						var b = this.marginBox;
						this.host.onMove(this, {
							l: b.l + a.pageX,
							t: b.t + a.pageY
						}, a);
						h.stop(a)
					},
					onMouseUp: function(a) {
						(e("webkit") &&
							e("mac") && 2 == this.mouseButton ? 0 == a.button : this.mouseButton == a.button) && this.destroy();
						h.stop(a)
					},
					onFirstMove: function(a) {
						var d = this.node.style,
							e, f = this.host;
						switch (d.position) {
							case "relative":
							case "absolute":
								e = Math.round(parseFloat(d.left)) || 0;
								d = Math.round(parseFloat(d.top)) || 0;
								break;
							default:
								d.position = "absolute";
								d = b.getMarginBox(this.node);
								e = c.doc.body;
								var i = g.getComputedStyle(e),
									h = b.getMarginBox(e, i),
									i = b.getContentBox(e, i);
								e = d.l - (i.l - h.l);
								d = d.t - (i.t - h.t)
						}
						this.marginBox.l = e - this.marginBox.l;
						this.marginBox.t =
							d - this.marginBox.t;
						if (f && f.onFirstMove) f.onFirstMove(this, a);
						this.events.shift().remove()
					},
					destroy: function() {
						f.forEach(this.events, function(a) {
							a.remove()
						});
						var a = this.host;
						if (a && a.onMoveStop) a.onMoveStop(this);
						this.events = this.node = this.host = null
					}
				})
			})
		},
		"dojo/dnd/autoscroll": function() {
			define("../_base/lang,../sniff,../_base/window,../dom-geometry,../dom-style,../window".split(","), function(f, k, h, j, e, c) {
				var i = {};
				f.setObject("dojo.dnd.autoscroll", i);
				i.getViewport = c.getBox;
				i.V_TRIGGER_AUTOSCROLL = 32;
				i.H_TRIGGER_AUTOSCROLL = 32;
				i.V_AUTOSCROLL_VALUE = 16;
				i.H_AUTOSCROLL_VALUE = 16;
				var b, g = h.doc,
					a = Infinity,
					l = Infinity;
				i.autoScrollStart = function(d) {
					g = d;
					b = c.getBox(g);
					d = h.body(g).parentNode;
					a = Math.max(d.scrollHeight - b.h, 0);
					l = Math.max(d.scrollWidth - b.w, 0)
				};
				i.autoScroll = function(d) {
					var e = b || c.getBox(g),
						f = h.body(g).parentNode,
						j = 0,
						k = 0;
					d.clientX < i.H_TRIGGER_AUTOSCROLL ? j = -i.H_AUTOSCROLL_VALUE : d.clientX > e.w - i.H_TRIGGER_AUTOSCROLL && (j = Math.min(i.H_AUTOSCROLL_VALUE, l - f.scrollLeft));
					d.clientY < i.V_TRIGGER_AUTOSCROLL ?
						k = -i.V_AUTOSCROLL_VALUE : d.clientY > e.h - i.V_TRIGGER_AUTOSCROLL && (k = Math.min(i.V_AUTOSCROLL_VALUE, a - f.scrollTop));
					window.scrollBy(j, k)
				};
				i._validNodes = {
					div: 1,
					p: 1,
					td: 1
				};
				i._validOverflow = {
					auto: 1,
					scroll: 1
				};
				i.autoScrollNodes = function(a) {
					for (var b, c, g, f, l, q, v = 0, s = 0, t = a.target; t;) {
						if (1 == t.nodeType && t.tagName.toLowerCase() in i._validNodes) {
							g = e.getComputedStyle(t);
							f = g.overflow.toLowerCase() in i._validOverflow;
							l = g.overflowX.toLowerCase() in i._validOverflow;
							q = g.overflowY.toLowerCase() in i._validOverflow;
							if (f ||
								l || q) b = j.getContentBox(t, g), c = j.position(t, !0);
							if (f || l) {
								g = Math.min(i.H_TRIGGER_AUTOSCROLL, b.w / 2);
								l = a.pageX - c.x;
								if (k("webkit") || k("opera")) l += h.body().scrollLeft;
								v = 0;
								0 < l && l < b.w && (l < g ? v = -g : l > b.w - g && (v = g), t.scrollLeft += v)
							}
							if (f || q) {
								f = Math.min(i.V_TRIGGER_AUTOSCROLL, b.h / 2);
								q = a.pageY - c.y;
								if (k("webkit") || k("opera")) q += h.body().scrollTop;
								s = 0;
								0 < q && q < b.h && (q < f ? s = -f : q > b.h - f && (s = f), t.scrollTop += s)
							}
							if (v || s) return
						}
						try {
							t = t.parentNode
						} catch (u) {
							t = null
						}
					}
					i.autoScroll(a)
				};
				return i
			})
		},
		"dojo/dnd/TimedMoveable": function() {
			define(["../_base/declare",
				"./Moveable"
			], function(f, k) {
				var h = k.prototype.onMove;
				return f("dojo.dnd.TimedMoveable", k, {
					timeout: 40,
					constructor: function(f, e) {
						e || (e = {});
						if (e.timeout && "number" == typeof e.timeout && 0 <= e.timeout) this.timeout = e.timeout
					},
					onMoveStop: function(f) {
						f._timer && (clearTimeout(f._timer), h.call(this, f, f._leftTop));
						k.prototype.onMoveStop.apply(this, arguments)
					},
					onMove: function(f, e) {
						f._leftTop = e;
						if (!f._timer) {
							var c = this;
							f._timer = setTimeout(function() {
								f._timer = null;
								h.call(c, f, f._leftTop)
							}, this.timeout)
						}
					}
				})
			})
		},
		"dijit/_base/manager": function() {
			define(["dojo/_base/array",
				"dojo/_base/config", "dojo/_base/lang", "../registry", "../main"
			], function(f, k, h, j, e) {
				var c = {};
				f.forEach("byId,getUniqueId,findWidgets,_destroyAll,byNode,getEnclosingWidget".split(","), function(e) {
					c[e] = j[e]
				});
				h.mixin(c, {
					defaultDuration: k.defaultDuration || 200
				});
				h.mixin(e, c);
				return e
			})
		},
		"dijit/_DialogMixin": function() {
			define(["dojo/_base/declare", "./a11y"], function(f, k) {
				return f("dijit._DialogMixin", null, {
					execute: function() {},
					onCancel: function() {},
					onExecute: function() {},
					_onSubmit: function() {
						this.onExecute();
						this.execute(this.get("value"))
					},
					_getFocusItems: function() {
						var f = k._getTabNavigable(this.containerNode);
						this._firstFocusItem = f.lowest || f.first || this.closeButtonNode || this.domNode;
						this._lastFocusItem = f.last || f.highest || this._firstFocusItem
					}
				})
			})
		},
		"dijit/DialogUnderlay": function() {
			define("dojo/_base/declare,dojo/dom-attr,dojo/window,./_Widget,./_TemplatedMixin,./BackgroundIframe".split(","), function(f, k, h, j, e, c) {
				return f("dijit.DialogUnderlay", [j, e], {
					templateString: "<div class='dijitDialogUnderlayWrapper'><div class='dijitDialogUnderlay' data-dojo-attach-point='node'></div></div>",
					dialogId: "",
					"class": "",
					_setDialogIdAttr: function(c) {
						k.set(this.node, "id", c + "_underlay");
						this._set("dialogId", c)
					},
					_setClassAttr: function(c) {
						this.node.className = "dijitDialogUnderlay " + c;
						this._set("class", c)
					},
					postCreate: function() {
						this.ownerDocumentBody.appendChild(this.domNode)
					},
					layout: function() {
						var c = this.node.style,
							b = this.domNode.style;
						b.display = "none";
						var g = h.getBox(this.ownerDocument);
						b.top = g.t + "px";
						b.left = g.l + "px";
						c.width = g.w + "px";
						c.height = g.h + "px";
						b.display = "block"
					},
					show: function() {
						this.domNode.style.display =
							"block";
						this.layout();
						this.bgIframe = new c(this.domNode)
					},
					hide: function() {
						this.bgIframe.destroy();
						delete this.bgIframe;
						this.domNode.style.display = "none"
					}
				})
			})
		},
		"url:dijit/templates/Dialog.html": '<div class="dijitDialog" role="dialog" aria-labelledby="${id}_title">\n\t<div data-dojo-attach-point="titleBar" class="dijitDialogTitleBar">\n\t\t<span data-dojo-attach-point="titleNode" class="dijitDialogTitle" id="${id}_title"\n\t\t\t\trole="header" level="1"></span>\n\t\t<span data-dojo-attach-point="closeButtonNode" class="dijitDialogCloseIcon" data-dojo-attach-event="ondijitclick: onCancel" title="${buttonCancel}" role="button" tabIndex="-1">\n\t\t\t<span data-dojo-attach-point="closeText" class="closeText" title="${buttonCancel}">x</span>\n\t\t</span>\n\t</div>\n\t<div data-dojo-attach-point="containerNode" class="dijitDialogPaneContent"></div>\n</div>\n',
		"dijit/layout/TabContainer": function() {
			define(["dojo/_base/lang", "dojo/_base/declare", "./_TabContainerBase", "./TabController", "./ScrollingTabController"], function(f, k, h, j, e) {
				return k("dijit.layout.TabContainer", h, {
					useMenu: !0,
					useSlider: !0,
					controllerWidget: "",
					_makeController: function(c) {
						var e = this.baseClass + "-tabs" + (this.doLayout ? "" : " dijitTabNoLayout");
						return new("string" == typeof this.controllerWidget ? f.getObject(this.controllerWidget) : this.controllerWidget)({
							id: this.id + "_tablist",
							ownerDocument: this.ownerDocument,
							dir: this.dir,
							lang: this.lang,
							textDir: this.textDir,
							tabPosition: this.tabPosition,
							doLayout: this.doLayout,
							containerId: this.id,
							"class": e,
							nested: this.nested,
							useMenu: this.useMenu,
							useSlider: this.useSlider,
							tabStripClass: this.tabStrip ? this.baseClass + (this.tabStrip ? "" : "No") + "Strip" : null
						}, c)
					},
					postMixInProperties: function() {
						this.inherited(arguments);
						if (!this.controllerWidget) this.controllerWidget = ("top" == this.tabPosition || "bottom" == this.tabPosition) && !this.nested ? e : j
					}
				})
			})
		},
		"dijit/layout/_TabContainerBase": function() {
			define("dojo/text!./templates/TabContainer.html,./StackContainer,./utils,../_TemplatedMixin,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style".split(","),
				function(f, k, h, j, e, c, i, b) {
					return e("dijit.layout._TabContainerBase", [k, j], {
						tabPosition: "top",
						baseClass: "dijitTabContainer",
						tabStrip: !1,
						nested: !1,
						templateString: f,
						postMixInProperties: function() {
							this.baseClass += this.tabPosition.charAt(0).toUpperCase() + this.tabPosition.substr(1).replace(/-.*/, "");
							this.srcNodeRef && b.set(this.srcNodeRef, "visibility", "hidden");
							this.inherited(arguments)
						},
						buildRendering: function() {
							this.inherited(arguments);
							this.tablist = this._makeController(this.tablistNode);
							this.doLayout ||
								c.add(this.domNode, "dijitTabContainerNoLayout");
							this.nested ? (c.add(this.domNode, "dijitTabContainerNested"), c.add(this.tablist.containerNode, "dijitTabContainerTabListNested"), c.add(this.tablistSpacer, "dijitTabContainerSpacerNested"), c.add(this.containerNode, "dijitTabPaneWrapperNested")) : c.add(this.domNode, "tabStrip-" + (this.tabStrip ? "enabled" : "disabled"))
						},
						_setupChild: function(b) {
							c.add(b.domNode, "dijitTabPane");
							this.inherited(arguments)
						},
						startup: function() {
							this._started || (this.tablist.startup(), this.inherited(arguments))
						},
						layout: function() {
							if (this._contentBox && "undefined" != typeof this._contentBox.l) {
								var b = this.selectedChildWidget;
								if (this.doLayout) {
									var a = this.tabPosition.replace(/-h/, "");
									this.tablist.layoutAlign = a;
									a = [this.tablist, {
										domNode: this.tablistSpacer,
										layoutAlign: a
									}, {
										domNode: this.containerNode,
										layoutAlign: "client"
									}];
									h.layoutChildren(this.domNode, this._contentBox, a);
									this._containerContentBox = h.marginBox2contentBox(this.containerNode, a[2]);
									b && b.resize && b.resize(this._containerContentBox)
								} else {
									if (this.tablist.resize) {
										a =
											this.tablist.domNode.style;
										a.width = "0";
										var c = i.getContentBox(this.domNode).w;
										a.width = "";
										this.tablist.resize({
											w: c
										})
									}
									b && b.resize && b.resize()
								}
							}
						},
						destroy: function() {
							this.tablist && this.tablist.destroy();
							this.inherited(arguments)
						}
					})
				})
		},
		"url:dijit/layout/templates/TabContainer.html": '<div class="dijitTabContainer">\n\t<div class="dijitTabListWrapper" data-dojo-attach-point="tablistNode"></div>\n\t<div data-dojo-attach-point="tablistSpacer" class="dijitTabSpacer ${baseClass}-spacer"></div>\n\t<div class="dijitTabPaneWrapper ${baseClass}-container" data-dojo-attach-point="containerNode"></div>\n</div>\n',
		"dijit/layout/StackContainer": function() {
			define("dojo/_base/array,dojo/cookie,dojo/_base/declare,dojo/dom-class,dojo/has,dojo/_base/lang,dojo/ready,dojo/topic,../registry,../_WidgetBase,./_LayoutWidget,dojo/i18n!../nls/common".split(","), function(f, k, h, j, e, c, i, b, g, a, l) {
				e("dijit-legacy-requires") && i(0, function() {
					require(["dijit/layout/StackController"])
				});
				h = h("dijit.layout.StackContainer", l, {
					doLayout: !0,
					persist: !1,
					baseClass: "dijitStackContainer",
					buildRendering: function() {
						this.inherited(arguments);
						j.add(this.domNode, "dijitLayoutContainer");
						this.containerNode.setAttribute("role", "tabpanel")
					},
					postCreate: function() {
						this.inherited(arguments);
						this.connect(this.domNode, "onkeypress", this._onKeyPress)
					},
					startup: function() {
						if (!this._started) {
							var a = this.getChildren();
							f.forEach(a, this._setupChild, this);
							this.persist ? this.selectedChildWidget = g.byId(k(this.id + "_selectedChild")) : f.some(a, function(a) {
								if (a.selected) this.selectedChildWidget = a;
								return a.selected
							}, this);
							var c = this.selectedChildWidget;
							if (!c && a[0]) c =
								this.selectedChildWidget = a[0], c.selected = !0;
							b.publish(this.id + "-startup", {
								children: a,
								selected: c
							});
							this.inherited(arguments)
						}
					},
					resize: function() {
						if (!this._hasBeenShown) {
							this._hasBeenShown = !0;
							var a = this.selectedChildWidget;
							a && this._showChild(a)
						}
						this.inherited(arguments)
					},
					_setupChild: function(a) {
						this.inherited(arguments);
						j.replace(a.domNode, "dijitHidden", "dijitVisible");
						a.domNode.title = ""
					},
					addChild: function(a, c) {
						this.inherited(arguments);
						this._started && (b.publish(this.id + "-addChild", a, c), this.layout(),
							this.selectedChildWidget || this.selectChild(a))
					},
					removeChild: function(a) {
						this.inherited(arguments);
						this._started && b.publish(this.id + "-removeChild", a);
						if (!this._descendantsBeingDestroyed) {
							if (this.selectedChildWidget === a && (this.selectedChildWidget = void 0, this._started)) {
								var c = this.getChildren();
								c.length && this.selectChild(c[0])
							}
							this._started && this.layout()
						}
					},
					selectChild: function(a, c) {
						a = g.byId(a);
						if (this.selectedChildWidget != a) {
							var e = this._transition(a, this.selectedChildWidget, c);
							this._set("selectedChildWidget",
								a);
							b.publish(this.id + "-selectChild", a);
							this.persist && k(this.id + "_selectedChild", this.selectedChildWidget.id)
						}
						return e
					},
					_transition: function(a, b) {
						b && this._hideChild(b);
						var c = this._showChild(a);
						a.resize && (this.doLayout ? a.resize(this._containerContentBox || this._contentBox) : a.resize());
						return c
					},
					_adjacent: function(a) {
						var b = this.getChildren(),
							c = f.indexOf(b, this.selectedChildWidget),
							c = c + (a ? 1 : b.length - 1);
						return b[c % b.length]
					},
					forward: function() {
						return this.selectChild(this._adjacent(!0), !0)
					},
					back: function() {
						return this.selectChild(this._adjacent(!1), !0)
					},
					_onKeyPress: function(a) {
						b.publish(this.id + "-containerKeyPress", {
							e: a,
							page: this
						})
					},
					layout: function() {
						var a = this.selectedChildWidget;
						a && a.resize && (this.doLayout ? a.resize(this._containerContentBox || this._contentBox) : a.resize())
					},
					_showChild: function(a) {
						var b = this.getChildren();
						a.isFirstChild = a == b[0];
						a.isLastChild = a == b[b.length - 1];
						a._set("selected", !0);
						j.replace(a.domNode, "dijitVisible", "dijitHidden");
						return a._onShow && a._onShow() || !0
					},
					_hideChild: function(a) {
						a._set("selected", !1);
						j.replace(a.domNode,
							"dijitHidden", "dijitVisible");
						a.onHide && a.onHide()
					},
					closeChild: function(a) {
						a.onClose(this, a) && (this.removeChild(a), a.destroyRecursive())
					},
					destroyDescendants: function(a) {
						this._descendantsBeingDestroyed = !0;
						this.selectedChildWidget = void 0;
						f.forEach(this.getChildren(), function(b) {
							a || this.removeChild(b);
							b.destroyRecursive(a)
						}, this);
						this._descendantsBeingDestroyed = !1
					}
				});
				h.ChildWidgetProperties = {
					selected: !1,
					disabled: !1,
					closable: !1,
					iconClass: "dijitNoIcon",
					showTitle: !0
				};
				c.extend(a, h.ChildWidgetProperties);
				return h
			})
		},
		"dijit/layout/TabController": function() {
			define("dojo/_base/declare,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/i18n,dojo/_base/lang,./StackController,../registry,../Menu,../MenuItem,dojo/text!./templates/_TabButton.html,dojo/i18n!../nls/common".split(","), function(f, k, h, j, e, c, i, b, g, a, l) {
				l = f("dijit.layout._TabButton", i.StackButton, {
					baseClass: "dijitTab",
					cssStateNodes: {
						closeNode: "dijitTabCloseButton"
					},
					templateString: l,
					scrollOnFocus: !1,
					buildRendering: function() {
						this.inherited(arguments);
						k.setSelectable(this.containerNode, !1)
					},
					startup: function() {
						this.inherited(arguments);
						var a = this.domNode;
						this.defer(function() {
							a.className = a.className
						}, 1)
					},
					_setCloseButtonAttr: function(a) {
						this._set("closeButton", a);
						j.toggle(this.domNode, "dijitClosable", a);
						this.closeNode.style.display = a ? "" : "none";
						a && (a = e.getLocalization("dijit", "common"), this.closeNode && h.set(this.closeNode, "title", a.itemClose))
					},
					_setDisabledAttr: function(a) {
						this.inherited(arguments);
						if (this.closeNode)
							if (a) h.remove(this.closeNode, "title");
							else {
								var b = e.getLocalization("dijit",
									"common");
								h.set(this.closeNode, "title", b.itemClose)
							}
					},
					_setLabelAttr: function(a) {
						this.inherited(arguments);
						if (!this.showLabel && !this.params.title) this.iconNode.alt = c.trim(this.containerNode.innerText || this.containerNode.textContent || "")
					}
				});
				f = f("dijit.layout.TabController", i, {
					baseClass: "dijitTabController",
					templateString: "<div role='tablist' data-dojo-attach-event='onkeypress:onkeypress'></div>",
					tabPosition: "top",
					buttonWidget: l,
					buttonWidgetCloseClass: "dijitTabCloseButton",
					postCreate: function() {
						this.inherited(arguments);
						var c = new g({
							id: this.id + "_Menu",
							ownerDocument: this.ownerDocument,
							dir: this.dir,
							lang: this.lang,
							textDir: this.textDir,
							targetNodeIds: [this.domNode],
							selector: function(a) {
								return j.contains(a, "dijitClosable") && !j.contains(a, "dijitTabDisabled")
							}
						});
						this.own(c);
						var f = e.getLocalization("dijit", "common"),
							i = this;
						c.addChild(new a({
							label: f.itemClose,
							ownerDocument: this.ownerDocument,
							dir: this.dir,
							lang: this.lang,
							textDir: this.textDir,
							onClick: function() {
								var a = b.byNode(this.getParent().currentTarget);
								i.onCloseButtonClick(a.page)
							}
						}))
					}
				});
				f.TabButton = l;
				return f
			})
		},
		"dijit/layout/StackController": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/on,../focus,../registry,../_Widget,../_TemplatedMixin,../_Container,../form/ToggleButton,dojo/i18n!../nls/common".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p) {
				p = k("dijit.layout._StackButton", p, {
					tabIndex: "-1",
					closeButton: !1,
					_aria_attr: "aria-selected",
					buildRendering: function(a) {
						this.inherited(arguments);
						(this.focusNode || this.domNode).setAttribute("role",
							"tab")
					}
				});
				k = k("dijit.layout.StackController", [a, l, d], {
					baseClass: "dijitStackController",
					templateString: "<span role='tablist' data-dojo-attach-event='onkeypress'></span>",
					containerId: "",
					buttonWidget: p,
					buttonWidgetCloseClass: "dijitStackCloseButton",
					constructor: function() {
						this.pane2button = {}
					},
					postCreate: function() {
						this.inherited(arguments);
						this.subscribe(this.containerId + "-startup", "onStartup");
						this.subscribe(this.containerId + "-addChild", "onAddChild");
						this.subscribe(this.containerId + "-removeChild", "onRemoveChild");
						this.subscribe(this.containerId + "-selectChild", "onSelectChild");
						this.subscribe(this.containerId + "-containerKeyPress", "onContainerKeyPress");
						this.connect(this.containerNode, "click", function(a) {
							var b = g.getEnclosingWidget(a.target);
							if (b != this.containerNode && !b.disabled && b.page)
								for (a = a.target; a !== this.containerNode; a = a.parentNode)
									if (h.contains(a, this.buttonWidgetCloseClass)) {
										this.onCloseButtonClick(b.page);
										break
									} else if (a == b.domNode) {
								this.onButtonClick(b.page);
								break
							}
						})
					},
					onStartup: function(a) {
						f.forEach(a.children,
							this.onAddChild, this);
						if (a.selected) this.onSelectChild(a.selected);
						var b = g.byId(this.containerId).containerNode,
							c = this.pane2button,
							a = {
								title: "label",
								showtitle: "showLabel",
								iconclass: "iconClass",
								closable: "closeButton",
								tooltip: "title",
								disabled: "disabled"
							},
							d = function(a, d) {
								return i(b, "attrmodified-" + a, function(a) {
									var b = c[a.detail && a.detail.widget && a.detail.widget.id];
									b && b.set(d, a.detail.newValue)
								})
							},
							e;
						for (e in a) this.own(d(e, a[e]))
					},
					destroy: function() {
						for (var a in this.pane2button) this.onRemoveChild(g.byId(a));
						this.inherited(arguments)
					},
					onAddChild: function(a, b) {
						var d = new(c.isString(this.buttonWidget) ? c.getObject(this.buttonWidget) : this.buttonWidget)({
							id: this.id + "_" + a.id,
							name: this.id + "_" + a.id,
							label: a.title,
							disabled: a.disabled,
							ownerDocument: this.ownerDocument,
							dir: a.dir,
							lang: a.lang,
							textDir: a.textDir,
							showLabel: a.showTitle,
							iconClass: a.iconClass,
							closeButton: a.closable,
							title: a.tooltip,
							page: a
						});
						this.addChild(d, b);
						this.pane2button[a.id] = d;
						a.controlButton = d;
						if (!this._currentChild) this.onSelectChild(a)
					},
					onRemoveChild: function(a) {
						if (this._currentChild ===
							a) this._currentChild = null;
						var b = this.pane2button[a.id];
						b && (this.removeChild(b), delete this.pane2button[a.id], b.destroy());
						delete a.controlButton
					},
					onSelectChild: function(a) {
						if (a) {
							if (this._currentChild) {
								var b = this.pane2button[this._currentChild.id];
								b.set("checked", !1);
								b.focusNode.setAttribute("tabIndex", "-1")
							}
							b = this.pane2button[a.id];
							b.set("checked", !0);
							this._currentChild = a;
							b.focusNode.setAttribute("tabIndex", "0");
							g.byId(this.containerId).containerNode.setAttribute("aria-labelledby", b.id)
						}
					},
					onButtonClick: function(a) {
						var c =
							this.pane2button[a.id];
						b.focus(c.focusNode);
						this._currentChild && this._currentChild.id === a.id && c.set("checked", !0);
						g.byId(this.containerId).selectChild(a)
					},
					onCloseButtonClick: function(a) {
						g.byId(this.containerId).closeChild(a);
						this._currentChild && (a = this.pane2button[this._currentChild.id]) && b.focus(a.focusNode || a.domNode)
					},
					adjacent: function(a) {
						if (!this.isLeftToRight() && (!this.tabPosition || /top|bottom/.test(this.tabPosition))) a = !a;
						var b = this.getChildren(),
							c = f.indexOf(b, this.pane2button[this._currentChild.id]),
							d = b[c],
							g;
						do c = (c + (a ? 1 : b.length - 1)) % b.length, g = b[c]; while (g.disabled && g != d);
						return g
					},
					onkeypress: function(a) {
						if (!this.disabled && !a.altKey) {
							var b = null;
							if (a.ctrlKey || !a._djpage) {
								switch (a.charOrCode) {
									case e.LEFT_ARROW:
									case e.UP_ARROW:
										a._djpage || (b = !1);
										break;
									case e.PAGE_UP:
										a.ctrlKey && (b = !1);
										break;
									case e.RIGHT_ARROW:
									case e.DOWN_ARROW:
										a._djpage || (b = !0);
										break;
									case e.PAGE_DOWN:
										a.ctrlKey && (b = !0);
										break;
									case e.HOME:
										for (var c = this.getChildren(), d = 0; d < c.length; d++) {
											var g = c[d];
											if (!g.disabled) {
												this.onButtonClick(g.page);
												break
											}
										}
										j.stop(a);
										break;
									case e.END:
										c = this.getChildren();
										for (d = c.length - 1; 0 <= d; d--)
											if (g = c[d], !g.disabled) {
												this.onButtonClick(g.page);
												break
											}
										j.stop(a);
										break;
									case e.DELETE:
										if (this._currentChild.closable) this.onCloseButtonClick(this._currentChild);
										j.stop(a);
										break;
									default:
										if (a.ctrlKey)
											if (a.charOrCode === e.TAB) this.onButtonClick(this.adjacent(!a.shiftKey).page), j.stop(a);
											else if ("w" == a.charOrCode) {
											if (this._currentChild.closable) this.onCloseButtonClick(this._currentChild);
											j.stop(a)
										}
								}
								null !== b && (this.onButtonClick(this.adjacent(b).page),
									j.stop(a))
							}
						}
					},
					onContainerKeyPress: function(a) {
						a.e._djpage = a.page;
						this.onkeypress(a.e)
					}
				});
				k.StackButton = p;
				return k
			})
		},
		"dijit/form/ToggleButton": function() {
			define(["dojo/_base/declare", "dojo/_base/kernel", "./Button", "./_ToggleButtonMixin"], function(f, k, h, j) {
				return f("dijit.form.ToggleButton", [h, j], {
					baseClass: "dijitToggleButton",
					setChecked: function(e) {
						k.deprecated("setChecked(" + e + ") is deprecated. Use set('checked'," + e + ") instead.", "", "2.0");
						this.set("checked", e)
					}
				})
			})
		},
		"dijit/form/_ToggleButtonMixin": function() {
			define(["dojo/_base/declare",
				"dojo/dom-attr"
			], function(f, k) {
				return f("dijit.form._ToggleButtonMixin", null, {
					checked: !1,
					_aria_attr: "aria-pressed",
					_onClick: function(f) {
						var j = this.checked;
						this._set("checked", !j);
						var e = this.inherited(arguments);
						this.set("checked", e ? this.checked : j);
						return e
					},
					_setCheckedAttr: function(f, j) {
						this._set("checked", f);
						k.set(this.focusNode || this.domNode, "checked", f);
						(this.focusNode || this.domNode).setAttribute(this._aria_attr, f ? "true" : "false");
						this._handleOnChange(f, j)
					},
					reset: function() {
						this._hasBeenBlurred = !1;
						this.set("checked", this.params.checked || !1)
					}
				})
			})
		},
		"url:dijit/layout/templates/_TabButton.html": '<div role="presentation" data-dojo-attach-point="titleNode,innerDiv,tabContent" class="dijitTabInner dijitTabContent">\n\t<img src="${_blankGif}" alt="" class="dijitIcon dijitTabButtonIcon" data-dojo-attach-point=\'iconNode\'/>\n\t<span data-dojo-attach-point=\'containerNode,focusNode\' class=\'tabLabel\'></span>\n\t<span class="dijitInline dijitTabCloseButton dijitTabCloseIcon" data-dojo-attach-point=\'closeNode\'\n\t\t  role="presentation">\n\t\t<span data-dojo-attach-point=\'closeText\' class=\'dijitTabCloseText\'>[x]</span\n\t\t\t\t></span>\n</div>\n',
		"dijit/layout/ScrollingTabController": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/fx,dojo/_base/lang,dojo/on,dojo/query,dojo/sniff,../registry,dojo/text!./templates/ScrollingTabController.html,dojo/text!./templates/_ScrollingTabControllerButton.html,./TabController,./utils,../_WidgetsInTemplateMixin,../Menu,../MenuItem,../form/Button,../_HasDropDown,dojo/NodeList-dom".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r, q, v, s) {
				d =
					k("dijit.layout.ScrollingTabController", [m, o], {
						baseClass: "dijitTabController dijitScrollingTabController",
						templateString: d,
						useMenu: !0,
						useSlider: !0,
						tabStripClass: "",
						widgetsInTemplate: !0,
						_minScroll: 5,
						_setClassAttr: {
							node: "containerNode",
							type: "class"
						},
						buildRendering: function() {
							this.inherited(arguments);
							var a = this.domNode;
							this.scrollNode = this.tablistWrapper;
							this._initButtons();
							if (!this.tabStripClass) this.tabStripClass = "dijitTabContainer" + this.tabPosition.charAt(0).toUpperCase() + this.tabPosition.substr(1).replace(/-.*/,
								"") + "None", h.add(a, "tabStrip-disabled");
							h.add(this.tablistWrapper, this.tabStripClass)
						},
						onStartup: function() {
							this.inherited(arguments);
							e.set(this.domNode, "visibility", "");
							this._postStartup = !0;
							this.own(b(this.containerNode, "attrmodified-label, attrmodified-iconclass", i.hitch(this, function() {
								this._dim && this.resize(this._dim)
							})))
						},
						onAddChild: function(a, b) {
							this.inherited(arguments);
							e.set(this.containerNode, "width", e.get(this.containerNode, "width") + 200 + "px")
						},
						onRemoveChild: function(a, b) {
							if (this._selectedTab ===
								this.pane2button[a.id].domNode) this._selectedTab = null;
							this.inherited(arguments)
						},
						_initButtons: function() {
							this._btnWidth = 0;
							this._buttons = g("> .tabStripButton", this.domNode).filter(function(a) {
								if (this.useMenu && a == this._menuBtn.domNode || this.useSlider && (a == this._rightBtn.domNode || a == this._leftBtn.domNode)) return this._btnWidth += j.getMarginSize(a).w, !0;
								e.set(a, "display", "none");
								return !1
							}, this)
						},
						_getTabsWidth: function() {
							var a = this.getChildren();
							if (a.length) {
								var b = a[this.isLeftToRight() ? 0 : a.length - 1].domNode,
									a = a[this.isLeftToRight() ? a.length - 1 : 0].domNode;
								return a.offsetLeft + a.offsetWidth - b.offsetLeft
							}
							return 0
						},
						_enableBtn: function(a) {
							var b = this._getTabsWidth(),
								a = a || e.get(this.scrollNode, "width");
							return 0 < b && a < b
						},
						resize: function(a) {
							this._dim = a;
							this.scrollNode.style.height = "auto";
							var b = this._contentBox = n.marginBox2contentBox(this.domNode, {
								h: 0,
								w: a.w
							});
							b.h = this.scrollNode.offsetHeight;
							j.setContentSize(this.domNode, b);
							this._buttons.style("display", this._enableBtn(this._contentBox.w) ? "" : "none");
							this._leftBtn.layoutAlign =
								"left";
							this._rightBtn.layoutAlign = "right";
							this._menuBtn.layoutAlign = this.isLeftToRight() ? "right" : "left";
							n.layoutChildren(this.domNode, this._contentBox, [this._menuBtn, this._leftBtn, this._rightBtn, {
								domNode: this.scrollNode,
								layoutAlign: "client"
							}]);
							if (this._selectedTab) this._anim && "playing" == this._anim.status() && this._anim.stop(), this.scrollNode.scrollLeft = this._convertToScrollLeft(this._getScrollForSelectedTab());
							this._setButtonClass(this._getScroll());
							this._postResize = !0;
							return {
								h: this._contentBox.h,
								w: a.w
							}
						},
						_getScroll: function() {
							return this.isLeftToRight() || 8 > a("ie") || a("ie") && a("quirks") || a("webkit") ? this.scrollNode.scrollLeft : e.get(this.containerNode, "width") - e.get(this.scrollNode, "width") + (8 <= a("ie") ? -1 : 1) * this.scrollNode.scrollLeft
						},
						_convertToScrollLeft: function(b) {
							if (this.isLeftToRight() || 8 > a("ie") || a("ie") && a("quirks") || a("webkit")) return b;
							var c = e.get(this.containerNode, "width") - e.get(this.scrollNode, "width");
							return (8 <= a("ie") ? -1 : 1) * (b - c)
						},
						onSelectChild: function(a) {
							var b = this.pane2button[a.id];
							if (b && a) {
								b = b.domNode;
								if (b != this._selectedTab && (this._selectedTab = b, this._postResize)) {
									var c = this._getScroll();
									(c > b.offsetLeft || c + e.get(this.scrollNode, "width") < b.offsetLeft + e.get(b, "width")) && this.createSmoothScroll().play()
								}
								this.inherited(arguments)
							}
						},
						_getScrollBounds: function() {
							var a = this.getChildren(),
								b = e.get(this.scrollNode, "width"),
								c = e.get(this.containerNode, "width") - b,
								d = this._getTabsWidth();
							if (a.length && d > b) return {
								min: this.isLeftToRight() ? 0 : a[a.length - 1].domNode.offsetLeft,
								max: this.isLeftToRight() ?
									a[a.length - 1].domNode.offsetLeft + a[a.length - 1].domNode.offsetWidth - b : c
							};
							a = this.isLeftToRight() ? 0 : c;
							return {
								min: a,
								max: a
							}
						},
						_getScrollForSelectedTab: function() {
							var a = this._selectedTab,
								b = e.get(this.scrollNode, "width"),
								c = this._getScrollBounds(),
								a = a.offsetLeft + e.get(a, "width") / 2 - b / 2;
							return a = Math.min(Math.max(a, c.min), c.max)
						},
						createSmoothScroll: function(a) {
							if (0 < arguments.length) var b = this._getScrollBounds(),
								a = Math.min(Math.max(a, b.min), b.max);
							else a = this._getScrollForSelectedTab();
							this._anim && "playing" ==
								this._anim.status() && this._anim.stop();
							var d = this,
								g = this.scrollNode,
								e = new c.Animation({
									beforeBegin: function() {
										this.curve && delete this.curve;
										var b = g.scrollLeft,
											f = d._convertToScrollLeft(a);
										e.curve = new c._Line(b, f)
									},
									onAnimate: function(a) {
										g.scrollLeft = a
									}
								});
							this._anim = e;
							this._setButtonClass(a);
							return e
						},
						_getBtnNode: function(a) {
							for (a = a.target; a && !h.contains(a, "tabStripButton");) a = a.parentNode;
							return a
						},
						doSlideRight: function(a) {
							this.doSlide(1, this._getBtnNode(a))
						},
						doSlideLeft: function(a) {
							this.doSlide(-1,
								this._getBtnNode(a))
						},
						doSlide: function(a, b) {
							if (!b || !h.contains(b, "dijitTabDisabled")) {
								var c = 0.75 * e.get(this.scrollNode, "width") * a,
									c = this._getScroll() + c;
								this._setButtonClass(c);
								this.createSmoothScroll(c).play()
							}
						},
						_setButtonClass: function(a) {
							var b = this._getScrollBounds();
							this._leftBtn.set("disabled", a <= b.min);
							this._rightBtn.set("disabled", a >= b.max)
						}
					});
				p = k("dijit.layout._ScrollingTabControllerButtonMixin", null, {
					baseClass: "dijitTab tabStripButton",
					templateString: p,
					tabIndex: "",
					isFocusable: function() {
						return !1
					}
				});
				k("dijit.layout._ScrollingTabControllerButton", [v, p]);
				k("dijit.layout._ScrollingTabControllerMenuButton", [v, s, p], {
					containerId: "",
					tabIndex: "-1",
					isLoaded: function() {
						return !1
					},
					loadDropDown: function(a) {
						this.dropDown = new r({
							id: this.containerId + "_menu",
							ownerDocument: this.ownerDocument,
							dir: this.dir,
							lang: this.lang,
							textDir: this.textDir
						});
						var b = l.byId(this.containerId);
						f.forEach(b.getChildren(), function(a) {
							this.dropDown.addChild(new q({
								id: a.id + "_stcMi",
								label: a.title,
								iconClass: a.iconClass,
								disabled: a.disabled,
								ownerDocument: this.ownerDocument,
								dir: a.dir,
								lang: a.lang,
								textDir: a.textDir,
								onClick: function() {
									b.selectChild(a)
								}
							}))
						}, this);
						a()
					},
					closeDropDown: function(a) {
						this.inherited(arguments);
						this.dropDown && (this.dropDown.destroyRecursive(), delete this.dropDown)
					}
				});
				return d
			})
		},
		"url:dijit/layout/templates/ScrollingTabController.html": '<div class="dijitTabListContainer-${tabPosition}" style="visibility:hidden">\n\t<div data-dojo-type="dijit.layout._ScrollingTabControllerMenuButton"\n\t\t\tclass="tabStripButton-${tabPosition}"\n\t\t\tid="${id}_menuBtn"\n\t\t\tdata-dojo-props="containerId: \'${containerId}\', iconClass: \'dijitTabStripMenuIcon\',\n\t\t\t\t\tdropDownPosition: [\'below-alt\', \'above-alt\']"\n\t\t\tdata-dojo-attach-point="_menuBtn" showLabel="false" title="">&#9660;</div>\n\t<div data-dojo-type="dijit.layout._ScrollingTabControllerButton"\n\t\t\tclass="tabStripButton-${tabPosition}"\n\t\t\tid="${id}_leftBtn"\n\t\t\tdata-dojo-props="iconClass:\'dijitTabStripSlideLeftIcon\', showLabel:false, title:\'\'"\n\t\t\tdata-dojo-attach-point="_leftBtn" data-dojo-attach-event="onClick: doSlideLeft">&#9664;</div>\n\t<div data-dojo-type="dijit.layout._ScrollingTabControllerButton"\n\t\t\tclass="tabStripButton-${tabPosition}"\n\t\t\tid="${id}_rightBtn"\n\t\t\tdata-dojo-props="iconClass:\'dijitTabStripSlideRightIcon\', showLabel:false, title:\'\'"\n\t\t\tdata-dojo-attach-point="_rightBtn" data-dojo-attach-event="onClick: doSlideRight">&#9654;</div>\n\t<div class=\'dijitTabListWrapper\' data-dojo-attach-point=\'tablistWrapper\'>\n\t\t<div role=\'tablist\' data-dojo-attach-event=\'onkeypress:onkeypress\'\n\t\t\t\tdata-dojo-attach-point=\'containerNode\' class=\'nowrapTabStrip\'></div>\n\t</div>\n</div>',
		"url:dijit/layout/templates/_ScrollingTabControllerButton.html": '<div data-dojo-attach-event="onclick:_onClick" class="dijitTabInnerDiv dijitTabContent dijitButtonContents"  data-dojo-attach-point="focusNode">\n\t<img role="presentation" alt="" src="${_blankGif}" class="dijitTabStripIcon" data-dojo-attach-point="iconNode"/>\n\t<span data-dojo-attach-point="containerNode,titleNode" class="dijitButtonText"></span>\n</div>',
		"dijit/_WidgetsInTemplateMixin": function() {
			define(["dojo/_base/array", "dojo/_base/declare",
				"dojo/parser"
			], function(f, k, h) {
				return k("dijit._WidgetsInTemplateMixin", null, {
					_earlyTemplatedStartup: !1,
					widgetsInTemplate: !0,
					_beforeFillContent: function() {
						if (this.widgetsInTemplate) {
							var f = this._startupWidgets = h.parse(this.domNode, {
								noStart: !this._earlyTemplatedStartup,
								template: !0,
								inherited: {
									dir: this.dir,
									lang: this.lang,
									textDir: this.textDir
								},
								propsThis: this,
								scope: "dojo"
							});
							if (!f.isFulfilled()) throw Error(this.declaredClass + ": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
							this._attachTemplateNodes(f, function(e, c) {
								return e[c]
							})
						}
					},
					startup: function() {
						f.forEach(this._startupWidgets, function(f) {
							f && !f._started && f.startup && f.startup()
						});
						this.inherited(arguments)
					}
				})
			})
		},
		"dijit/_HasDropDown": function() {
			define("dojo/_base/declare,dojo/_base/Deferred,dojo/_base/event,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/has,dojo/keys,dojo/_base/lang,dojo/on,dojo/window,./registry,./focus,./popup,./_FocusMixin".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d,
				p, m, n, o, r) {
				return f("dijit._HasDropDown", r, {
					_buttonNode: null,
					_arrowWrapperNode: null,
					_popupStateNode: null,
					_aroundNode: null,
					dropDown: null,
					autoWidth: !0,
					forceWidth: !1,
					maxHeight: 0,
					dropDownPosition: ["below", "above"],
					_stopClickEvents: !0,
					_onDropDownMouseDown: function(a) {
						if (!this.disabled && !this.readOnly) a.preventDefault(), this._docHandler = this.connect(this.ownerDocument, "mouseup", "_onDropDownMouseUp"), this.toggleDropDown()
					},
					_onDropDownMouseUp: function(a) {
						a && this._docHandler && this.disconnect(this._docHandler);
						var b = this.dropDown,
							d = !1;
						if (a && this._opened) {
							var e = i.position(this._buttonNode, !0);
							if (!(a.pageX >= e.x && a.pageX <= e.x + e.w) || !(a.pageY >= e.y && a.pageY <= e.y + e.h)) {
								for (e = a.target; e && !d;) c.contains(e, "dijitPopup") ? d = !0 : e = e.parentNode;
								if (d) {
									e = a.target;
									if (b.onItemClick) {
										for (var f; e && !(f = m.byNode(e));) e = e.parentNode;
										if (f && f.onClick && f.getParent) f.getParent().onItemClick(f, a)
									}
									return
								}
							}
						}
						if (this._opened) {
							if (b.focus && !1 !== b.autoFocus) this._focusDropDownTimer = this.defer(function() {
								b.focus();
								delete this._focusDropDownTimer
							})
						} else this.defer("focus");
						if (g("ios")) this._justGotMouseUp = !0, this.defer(function() {
							this._justGotMouseUp = !1
						})
					},
					_onDropDownClick: function(a) {
						g("touch") && !this._justGotMouseUp && (this._onDropDownMouseDown(a), this._onDropDownMouseUp(a));
						this._stopClickEvents && h.stop(a)
					},
					buildRendering: function() {
						this.inherited(arguments);
						this._buttonNode = this._buttonNode || this.focusNode || this.domNode;
						this._popupStateNode = this._popupStateNode || this.focusNode || this._buttonNode;
						var a = {
							after: this.isLeftToRight() ? "Right" : "Left",
							before: this.isLeftToRight() ?
								"Left" : "Right",
							above: "Up",
							below: "Down",
							left: "Left",
							right: "Right"
						}[this.dropDownPosition[0]] || this.dropDownPosition[0] || "Down";
						c.add(this._arrowWrapperNode || this._buttonNode, "dijit" + a + "ArrowButton")
					},
					postCreate: function() {
						this.inherited(arguments);
						this.own(d(this._buttonNode, "mousedown", l.hitch(this, "_onDropDownMouseDown")), d(this._buttonNode, "click", l.hitch(this, "_onDropDownClick")), d(this.focusNode, "keydown", l.hitch(this, "_onKey")), d(this.focusNode, "keyup", l.hitch(this, "_onKeyUp")))
					},
					destroy: function() {
						this.dropDown &&
							(this.dropDown._destroyed || this.dropDown.destroyRecursive(), delete this.dropDown);
						this.inherited(arguments)
					},
					_onKey: function(b) {
						if (!this.disabled && !this.readOnly) {
							var c = this.dropDown,
								d = b.target;
							if (c && this._opened && c.handleKey && !1 === c.handleKey(b)) h.stop(b);
							else if (c && this._opened && b.keyCode == a.ESCAPE) this.closeDropDown(), h.stop(b);
							else if (!this._opened && (b.keyCode == a.DOWN_ARROW || (b.keyCode == a.ENTER || b.keyCode == a.SPACE) && ("input" !== (d.tagName || "").toLowerCase() || d.type && "text" !== d.type.toLowerCase()))) this._toggleOnKeyUp = !0, h.stop(b)
						}
					},
					_onKeyUp: function() {
						if (this._toggleOnKeyUp) {
							delete this._toggleOnKeyUp;
							this.toggleDropDown();
							var a = this.dropDown;
							a && a.focus && this.defer(l.hitch(a, "focus"), 1)
						}
					},
					_onBlur: function() {
						this.closeDropDown(n.curNode && this.dropDown && j.isDescendant(n.curNode, this.dropDown.domNode));
						this.inherited(arguments)
					},
					isLoaded: function() {
						return !0
					},
					loadDropDown: function(a) {
						a()
					},
					loadAndOpenDropDown: function() {
						var a = new k,
							b = l.hitch(this, function() {
								this.openDropDown();
								a.resolve(this.dropDown)
							});
						this.isLoaded() ?
							b() : this.loadDropDown(b);
						return a
					},
					toggleDropDown: function() {
						!this.disabled && !this.readOnly && (this._opened ? this.closeDropDown() : this.loadAndOpenDropDown())
					},
					openDropDown: function() {
						var a = this.dropDown,
							d = a.domNode,
							g = this._aroundNode || this.domNode,
							f = this;
						if (!this._preparedNode) {
							this._preparedNode = !0;
							if (d.style.width) this._explicitDDWidth = !0;
							if (d.style.height) this._explicitDDHeight = !0
						}
						if (this.maxHeight || this.forceWidth || this.autoWidth) {
							var h = {
								display: "",
								visibility: "hidden"
							};
							if (!this._explicitDDWidth) h.width =
								"";
							if (!this._explicitDDHeight) h.height = "";
							b.set(d, h);
							h = this.maxHeight;
							if (-1 == h) var h = p.getBox(this.ownerDocument),
								j = i.position(g, !1),
								h = Math.floor(Math.max(j.y, h.h - (j.y + j.h)));
							o.moveOffScreen(a);
							a.startup && !a._started && a.startup();
							var j = i.getMarginSize(d),
								k = h && j.h > h;
							b.set(d, {
								overflowX: "visible",
								overflowY: k ? "auto" : "visible"
							});
							k ? (j.h = h, "w" in j && (j.w += 16)) : delete j.h;
							this.forceWidth ? j.w = g.offsetWidth : this.autoWidth ? j.w = Math.max(j.w, g.offsetWidth) : delete j.w;
							l.isFunction(a.resize) ? a.resize(j) : i.setMarginBox(d,
								j)
						}
						a = o.open({
							parent: this,
							popup: a,
							around: g,
							orient: this.dropDownPosition,
							onExecute: function() {
								f.closeDropDown(!0)
							},
							onCancel: function() {
								f.closeDropDown(!0)
							},
							onClose: function() {
								e.set(f._popupStateNode, "popupActive", !1);
								c.remove(f._popupStateNode, "dijitHasDropDownOpen");
								f._set("_opened", !1)
							}
						});
						e.set(this._popupStateNode, "popupActive", "true");
						c.add(this._popupStateNode, "dijitHasDropDownOpen");
						this._set("_opened", !0);
						this.domNode.setAttribute("aria-expanded", "true");
						return a
					},
					closeDropDown: function(a) {
						this._focusDropDownTimer &&
							(this._focusDropDownTimer.remove(), delete this._focusDropDownTimer);
						if (this._opened) this.domNode.setAttribute("aria-expanded", "false"), a && this.focus(), o.close(this.dropDown), this._opened = !1
					}
				})
			})
		},
		"dijit/form/RadioButton": function() {
			define(["dojo/_base/declare", "./CheckBox", "./_RadioButtonMixin"], function(f, k, h) {
				return f("dijit.form.RadioButton", [k, h], {
					baseClass: "dijitRadio"
				})
			})
		},
		"dijit/form/CheckBox": function() {
			define("require,dojo/_base/declare,dojo/dom-attr,dojo/has,dojo/query,dojo/ready,./ToggleButton,./_CheckBoxMixin,dojo/text!./templates/CheckBox.html,dojo/NodeList-dom".split(","),
				function(f, k, h, j, e, c, i, b, g) {
					j("dijit-legacy-requires") && c(0, function() {
						f(["dijit/form/RadioButton"])
					});
					return k("dijit.form.CheckBox", [i, b], {
						templateString: g,
						baseClass: "dijitCheckBox",
						_setValueAttr: function(a, b) {
							"string" == typeof a && (this.inherited(arguments), a = !0);
							this._created && this.set("checked", a, b)
						},
						_getValueAttr: function() {
							return this.checked ? this.value : !1
						},
						_setIconClassAttr: null,
						postMixInProperties: function() {
							this.inherited(arguments);
							this.checkedAttrSetting = this.checked ? "checked" : ""
						},
						_fillContent: function() {},
						_onFocus: function() {
							this.id && e("label[for='" + this.id + "']").addClass("dijitFocusedLabel");
							this.inherited(arguments)
						},
						_onBlur: function() {
							this.id && e("label[for='" + this.id + "']").removeClass("dijitFocusedLabel");
							this.inherited(arguments)
						}
					})
				})
		},
		"dijit/form/_CheckBoxMixin": function() {
			define(["dojo/_base/declare", "dojo/dom-attr", "dojo/_base/event"], function(f, k, h) {
				return f("dijit.form._CheckBoxMixin", null, {
					type: "checkbox",
					value: "on",
					readOnly: !1,
					_aria_attr: "aria-checked",
					_setReadOnlyAttr: function(f) {
						this._set("readOnly",
							f);
						k.set(this.focusNode, "readOnly", f);
						this.focusNode.setAttribute("aria-readonly", f)
					},
					_setLabelAttr: void 0,
					_getSubmitValue: function(f) {
						return !f && 0 !== f ? "on" : f
					},
					_setValueAttr: function(f) {
						f = this._getSubmitValue(f);
						this._set("value", f);
						k.set(this.focusNode, "value", f)
					},
					reset: function() {
						this.inherited(arguments);
						this._set("value", this.params.value || "on");
						k.set(this.focusNode, "value", this.value)
					},
					_onClick: function(f) {
						return this.readOnly ? (h.stop(f), !1) : this.inherited(arguments)
					}
				})
			})
		},
		"url:dijit/form/templates/CheckBox.html": '<div class="dijit dijitReset dijitInline" role="presentation"\n\t><input\n\t \t${!nameAttrSetting} type="${type}" ${checkedAttrSetting}\n\t\tclass="dijitReset dijitCheckBoxInput"\n\t\tdata-dojo-attach-point="focusNode"\n\t \tdata-dojo-attach-event="onclick:_onClick"\n/></div>\n',
		"dijit/form/_RadioButtonMixin": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/_base/event,dojo/_base/lang,dojo/query,../registry".split(","), function(f, k, h, j, e, c, i) {
				return k("dijit.form._RadioButtonMixin", null, {
					type: "radio",
					_getRelatedWidgets: function() {
						var b = [];
						c("input[type=radio]", this.focusNode.form || this.ownerDocument).forEach(e.hitch(this, function(c) {
							c.name == this.name && c.form == this.focusNode.form && (c = i.getEnclosingWidget(c)) && b.push(c)
						}));
						return b
					},
					_setCheckedAttr: function(b) {
						this.inherited(arguments);
						this._created && b && f.forEach(this._getRelatedWidgets(), e.hitch(this, function(b) {
							b != this && b.checked && b.set("checked", !1)
						}))
					},
					_getSubmitValue: function(b) {
						return null === b ? "on" : b
					},
					_onClick: function(b) {
						if (this.checked || this.disabled) return j.stop(b), !1;
						return this.readOnly ? (j.stop(b), f.forEach(this._getRelatedWidgets(), e.hitch(this, function(b) {
							h.set(this.focusNode || this.domNode, "checked", b.checked)
						})), !1) : this.inherited(arguments)
					}
				})
			})
		},
		"dijit/form/Select": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/dom-class,dojo/dom-geometry,dojo/_base/event,dojo/i18n,dojo/_base/lang,dojo/sniff,./_FormSelectWidget,../_HasDropDown,../Menu,../MenuItem,../MenuSeparator,../Tooltip,dojo/text!./templates/Select.html,dojo/i18n!./nls/validate".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o) {
					var r = k("dijit.form._SelectMenu", d, {
							autoFocus: !0,
							buildRendering: function() {
								this.inherited(arguments);
								var a = this.menuTableNode = this.domNode,
									b = this.domNode = this.ownerDocument.createElement("div");
								b.style.cssText = "overflow-x: hidden; overflow-y: scroll";
								a.parentNode && a.parentNode.replaceChild(b, a);
								j.remove(a, "dijitMenuTable");
								b.className = a.className + " dijitSelectMenu";
								a.className = "dijitReset dijitMenuTable";
								a.setAttribute("role", "listbox");
								b.setAttribute("role",
									"presentation");
								b.appendChild(a)
							},
							postCreate: function() {
								this.inherited(arguments);
								this.connect(this.domNode, "onselectstart", c.stop)
							},
							focus: function() {
								var a = !1,
									c = this.parentWidget.value;
								b.isArray(c) && (c = c[c.length - 1]);
								c && f.forEach(this.parentWidget._getChildren(), function(b) {
									b.option && c === b.option.value && (a = !0, this.focusChild(b, !1))
								}, this);
								a || this.inherited(arguments)
							},
							resize: function(a) {
								if (a && (e.setMarginBox(this.domNode, a), "w" in a)) this.menuTableNode.style.width = "100%"
							}
						}),
						k = k("dijit.form.Select", [a, l], {
							baseClass: "dijitSelect dijitValidationTextBox",
							templateString: o,
							_buttonInputDisabled: g("ie") ? "disabled" : "",
							required: !1,
							state: "",
							message: "",
							tooltipPosition: [],
							emptyLabel: "&#160;",
							_isLoaded: !1,
							_childrenLoaded: !1,
							_fillContent: function() {
								this.inherited(arguments);
								if (this.options.length && !this.value && this.srcNodeRef) {
									var a = this.srcNodeRef.selectedIndex || 0;
									this.value = this.options[0 <= a ? a : 0].value
								}
								this.dropDown = new r({
									id: this.id + "_menu",
									parentWidget: this
								});
								j.add(this.dropDown.domNode, this.baseClass.replace(/\s+|$/g,
									"Menu "))
							},
							_getMenuItemForOption: function(a) {
								if (!a.value && !a.label) return new m({
									ownerDocument: this.ownerDocument
								});
								var c = b.hitch(this, "_setValueAttr", a),
									a = new p({
										option: a,
										label: a.label || this.emptyLabel,
										onClick: c,
										ownerDocument: this.ownerDocument,
										dir: this.dir,
										disabled: a.disabled || !1
									});
								a.focusNode.setAttribute("role", "option");
								return a
							},
							_addOptionItem: function(a) {
								this.dropDown && this.dropDown.addChild(this._getMenuItemForOption(a))
							},
							_getChildren: function() {
								return !this.dropDown ? [] : this.dropDown.getChildren()
							},
							_loadChildren: function(a) {
								!0 === a ? (this.dropDown && delete this.dropDown.focusedChild, this.options.length ? this.inherited(arguments) : (f.forEach(this._getChildren(), function(a) {
									a.destroyRecursive()
								}), this.dropDown.addChild(new p({
									ownerDocument: this.ownerDocument,
									label: this.emptyLabel
								})))) : this._updateSelection();
								this._isLoaded = !1;
								this._childrenLoaded = !0;
								this._loadingStore || this._setValueAttr(this.value, !1)
							},
							_refreshState: function() {
								this._started && this.validate(this.focused)
							},
							startup: function() {
								this.inherited(arguments);
								this._refreshState()
							},
							_setValueAttr: function(a) {
								this.inherited(arguments);
								h.set(this.valueNode, "value", this.get("value"));
								this._refreshState()
							},
							_setDisabledAttr: function(a) {
								this.inherited(arguments);
								this._refreshState()
							},
							_setRequiredAttr: function(a) {
								this._set("required", a);
								this.focusNode.setAttribute("aria-required", a);
								this._refreshState()
							},
							_setOptionsAttr: function(a) {
								this._isLoaded = !1;
								this._set("options", a)
							},
							_setDisplay: function(a) {
								a = a || this.emptyLabel;
								this.containerNode.innerHTML = '<span role="option" class="dijitReset dijitInline ' +
									this.baseClass.replace(/\s+|$/g, "Label ") + '">' + a + "</span>"
							},
							validate: function(a) {
								a = this.disabled || this.isValid(a);
								this._set("state", a ? "" : this._hasBeenBlurred ? "Error" : "Incomplete");
								this.focusNode.setAttribute("aria-invalid", a ? "false" : "true");
								var b = a ? "" : this._missingMsg;
								b && this.focused && this._hasBeenBlurred ? n.show(b, this.domNode, this.tooltipPosition, !this.isLeftToRight()) : n.hide(this.domNode);
								this._set("message", b);
								return a
							},
							isValid: function() {
								return !this.required || 0 === this.value || !/^\s*$/.test(this.value ||
									"")
							},
							reset: function() {
								this.inherited(arguments);
								n.hide(this.domNode);
								this._refreshState()
							},
							postMixInProperties: function() {
								this.inherited(arguments);
								this._missingMsg = i.getLocalization("dijit.form", "validate", this.lang).missingMessage
							},
							postCreate: function() {
								this.inherited(arguments);
								this.connect(this.domNode, "onselectstart", c.stop);
								this.domNode.setAttribute("aria-expanded", "false");
								9 > g("ie") && this.defer(function() {
									try {
										var a = domStyle.getComputedStyle(this.domNode);
										if (a) {
											var b = a.fontFamily;
											if (b) {
												var c =
													this.domNode.getElementsByTagName("INPUT");
												if (c)
													for (a = 0; a < c.length; a++) c[a].style.fontFamily = b
											}
										}
									} catch (d) {}
								})
							},
							_setStyleAttr: function(a) {
								this.inherited(arguments);
								j.toggle(this.domNode, this.baseClass.replace(/\s+|$/g, "FixedWidth "), !!this.domNode.style.width)
							},
							isLoaded: function() {
								return this._isLoaded
							},
							loadDropDown: function(a) {
								this._loadChildren(!0);
								this._isLoaded = !0;
								a()
							},
							closeDropDown: function() {
								this.inherited(arguments);
								if (this.dropDown && this.dropDown.menuTableNode) this.dropDown.menuTableNode.style.width =
									""
							},
							destroy: function(a) {
								this.dropDown && !this.dropDown._destroyed && (this.dropDown.destroyRecursive(a), delete this.dropDown);
								this.inherited(arguments)
							},
							_onFocus: function() {
								this.validate(!0);
								this.inherited(arguments)
							},
							_onBlur: function() {
								n.hide(this.domNode);
								this.inherited(arguments);
								this.validate(!1)
							}
						});
					k._Menu = r;
					return k
				})
		},
		"dijit/form/_FormSelectWidget": function() {
			define("dojo/_base/array,dojo/_base/Deferred,dojo/aspect,dojo/data/util/sorter,dojo/_base/declare,dojo/dom,dojo/dom-class,dojo/_base/kernel,dojo/_base/lang,dojo/query,dojo/when,dojo/store/util/QueryResults,./_FormValueWidget".split(","),
				function(f, k, h, j, e, c, i, b, g, a, l, d, p) {
					return e("dijit.form._FormSelectWidget", p, {
						multiple: !1,
						options: null,
						store: null,
						query: null,
						queryOptions: null,
						labelAttr: "",
						onFetch: null,
						sortByLabel: !0,
						loadChildrenOnOpen: !1,
						onLoadDeferred: null,
						getOptions: function(a) {
							var b = a,
								c = this.options || [],
								d = c.length;
							if (void 0 === b) return c;
							if (g.isArray(b)) return f.map(b, "return this.getOptions(item);", this);
							g.isObject(a) && (f.some(this.options, function(a, c) {
								return a === b || a.value && a.value === b.value ? (b = c, !0) : !1
							}) || (b = -1));
							if ("string" ==
								typeof b)
								for (a = 0; a < d; a++)
									if (c[a].value === b) {
										b = a;
										break
									}
							return "number" == typeof b && 0 <= b && b < d ? this.options[b] : null
						},
						addOption: function(a) {
							g.isArray(a) || (a = [a]);
							f.forEach(a, function(a) {
								a && g.isObject(a) && this.options.push(a)
							}, this);
							this._loadChildren()
						},
						removeOption: function(a) {
							g.isArray(a) || (a = [a]);
							a = this.getOptions(a);
							f.forEach(a, function(a) {
								if (a) this.options = f.filter(this.options, function(b) {
									return b.value !== a.value || b.label !== a.label
								}), this._removeOptionItem(a)
							}, this);
							this._loadChildren()
						},
						updateOption: function(a) {
							g.isArray(a) ||
								(a = [a]);
							f.forEach(a, function(a) {
								var b = this.getOptions(a),
									c;
								if (b)
									for (c in a) b[c] = a[c]
							}, this);
							this._loadChildren()
						},
						setStore: function(a, b, c) {
							var e = this.store,
								c = c || {};
							if (e !== a) {
								for (var i; i = this._notifyConnections.pop();) i.remove();
								if (!a.get && (g.mixin(a, {
										_oldAPI: !0,
										get: function(a) {
											var b = new k;
											this.fetchItemByIdentity({
												identity: a,
												onItem: function(a) {
													b.resolve(a)
												},
												onError: function(a) {
													b.reject(a)
												}
											});
											return b.promise
										},
										query: function(a, b) {
											var c = new k(function() {
												e.abort && e.abort()
											});
											c.total = new k;
											var e = this.fetch(g.mixin({
												query: a,
												onBegin: function(a) {
													c.total.resolve(a)
												},
												onComplete: function(a) {
													c.resolve(a)
												},
												onError: function(a) {
													c.reject(a)
												}
											}, b));
											return new d(c)
										}
									}), a.getFeatures()["dojo.data.api.Notification"])) this._notifyConnections = [h.after(a, "onNew", g.hitch(this, "_onNewItem"), !0), h.after(a, "onDelete", g.hitch(this, "_onDeleteItem"), !0), h.after(a, "onSet", g.hitch(this, "_onSetItem"), !0)];
								this._set("store", a)
							}
							this.options && this.options.length && this.removeOption(this.options);
							this._queryRes && this._queryRes.close && this._queryRes.close();
							c.query && (this._set("query", c.query), this._set("queryOptions", c.queryOptions));
							if (a) this._loadingStore = !0, this.onLoadDeferred = new k, this._queryRes = a.query(this.query, this.queryOptions), l(this._queryRes, g.hitch(this, function(d) {
								if (this.sortByLabel && !c.sort && d.length)
									if (d[0].getValue) d.sort(j.createSortFunction([{
										attribute: a.getLabelAttributes(d[0])[0]
									}], a));
									else {
										var e = this.labelAttr;
										d.sort(function(a, b) {
											return a[e] > b[e] ? 1 : b[e] > a[e] ? -1 : 0
										})
									}
								c.onFetch && (d = c.onFetch.call(this, d, c));
								f.forEach(d, function(a) {
										this._addOptionForItem(a)
									},
									this);
								this._queryRes.observe && this._queryRes.observe(g.hitch(this, function(a, b, c) {
									b == c ? this._onSetItem(a) : (-1 != b && this._onDeleteItem(a), -1 != c && this._onNewItem(a))
								}), !0);
								this._loadingStore = !1;
								this.set("value", "_pendingValue" in this ? this._pendingValue : b);
								delete this._pendingValue;
								this.loadChildrenOnOpen ? this._pseudoLoadChildren(d) : this._loadChildren();
								this.onLoadDeferred.resolve(!0);
								this.onSetStore()
							}), function(a) {
								this.onLoadDeferred.reject(a)
							});
							return e
						},
						_setValueAttr: function(a, b) {
							this._onChangeActive ||
								(b = null);
							if (this._loadingStore) this._pendingValue = a;
							else {
								var c = this.getOptions() || [];
								g.isArray(a) || (a = [a]);
								f.forEach(a, function(b, d) {
									g.isObject(b) || (b += "");
									"string" === typeof b && (a[d] = f.filter(c, function(a) {
										return a.value === b
									})[0] || {
										value: "",
										label: ""
									})
								}, this);
								a = f.filter(a, function(a) {
									return a && a.value
								});
								if (!this.multiple && (!a[0] || !a[0].value) && c.length) a[0] = c[0];
								f.forEach(c, function(b) {
									b.selected = f.some(a, function(a) {
										return a.value === b.value
									})
								});
								var d = f.map(a, function(a) {
										return a.value
									}),
									e = f.map(a,
										function(a) {
											return a.label
										});
								"undefined" == typeof d || "undefined" == typeof d[0] || (this._setDisplay(this.multiple ? e : e[0]), this.inherited(arguments, [this.multiple ? d : d[0], b]), this._updateSelection())
							}
						},
						_getDisplayedValueAttr: function() {
							var a = this.get("value");
							g.isArray(a) || (a = [a]);
							a = f.map(this.getOptions(a), function(a) {
								return a && "label" in a ? a.label : a ? a.value : null
							}, this);
							return this.multiple ? a : a[0]
						},
						_loadChildren: function() {
							this._loadingStore || (f.forEach(this._getChildren(), function(a) {
									a.destroyRecursive()
								}),
								f.forEach(this.options, this._addOptionItem, this), this._updateSelection())
						},
						_updateSelection: function() {
							this._set("value", this._getValueFromOpts());
							var a = this.value;
							g.isArray(a) || (a = [a]);
							a && a[0] && f.forEach(this._getChildren(), function(b) {
								var c = f.some(a, function(a) {
									return b.option && a === b.option.value
								});
								i.toggle(b.domNode, this.baseClass.replace(/\s+|$/g, "SelectedOption "), c);
								b.domNode.setAttribute("aria-selected", c ? "true" : "false")
							}, this)
						},
						_getValueFromOpts: function() {
							var a = this.getOptions() || [];
							if (!this.multiple &&
								a.length) {
								var b = f.filter(a, function(a) {
									return a.selected
								})[0];
								if (b && b.value) return b.value;
								a[0].selected = !0;
								return a[0].value
							}
							return this.multiple ? f.map(f.filter(a, function(a) {
								return a.selected
							}), function(a) {
								return a.value
							}) || [] : ""
						},
						_onNewItem: function(a, b) {
							(!b || !b.parent) && this._addOptionForItem(a)
						},
						_onDeleteItem: function(a) {
							this.removeOption(this.store.getIdentity(a))
						},
						_onSetItem: function(a) {
							this.updateOption(this._getOptionObjForItem(a))
						},
						_getOptionObjForItem: function(a) {
							var b = this.store,
								c = this.labelAttr &&
								this.labelAttr in a ? a[this.labelAttr] : b.getLabel(a);
							return {
								value: c ? b.getIdentity(a) : null,
								label: c,
								item: a
							}
						},
						_addOptionForItem: function(a) {
							var b = this.store;
							b.isItemLoaded && !b.isItemLoaded(a) ? b.loadItem({
								item: a,
								onItem: function(a) {
									this._addOptionForItem(a)
								},
								scope: this
							}) : this.addOption(this._getOptionObjForItem(a))
						},
						constructor: function(a) {
							this._oValue = (a || {}).value || null;
							this._notifyConnections = []
						},
						buildRendering: function() {
							this.inherited(arguments);
							c.setSelectable(this.focusNode, !1)
						},
						_fillContent: function() {
							if (!this.options) this.options =
								this.srcNodeRef ? a("> *", this.srcNodeRef).map(function(a) {
									return "separator" === a.getAttribute("type") ? {
										value: "",
										label: "",
										selected: !1,
										disabled: !1
									} : {
										value: a.getAttribute("data-" + b._scopeName + "-value") || a.getAttribute("value"),
										label: "" + a.innerHTML,
										selected: a.getAttribute("selected") || !1,
										disabled: a.getAttribute("disabled") || !1
									}
								}, this) : [];
							this.value ? this.multiple && "string" == typeof this.value && this._set("value", this.value.split(",")) : this._set("value", this._getValueFromOpts())
						},
						postCreate: function() {
							this.inherited(arguments);
							this.connect(this, "onChange", "_updateSelection");
							var a = this.store;
							if (a && (a.getIdentity || a.getFeatures()["dojo.data.api.Identity"])) this.store = null, this.setStore(a, this._oValue)
						},
						startup: function() {
							this._loadChildren();
							this.inherited(arguments)
						},
						destroy: function() {
							for (var a; a = this._notifyConnections.pop();) a.remove();
							this._queryRes && this._queryRes.close && this._queryRes.close();
							this.inherited(arguments)
						},
						_addOptionItem: function() {},
						_removeOptionItem: function() {},
						_setDisplay: function() {},
						_getChildren: function() {
							return []
						},
						_getSelectedOptionsAttr: function() {
							return this.getOptions(this.get("value"))
						},
						_pseudoLoadChildren: function() {},
						onSetStore: function() {}
					})
				})
		},
		"dojo/data/util/sorter": function() {
			define(["../../_base/lang"], function(f) {
				var k = {};
				f.setObject("dojo.data.util.sorter", k);
				k.basicComparator = function(f, j) {
					var e = -1;
					null === f && (f = void 0);
					null === j && (j = void 0);
					if (f == j) e = 0;
					else if (f > j || null == f) e = 1;
					return e
				};
				k.createSortFunction = function(f, j) {
					function e(a, b, c, d) {
						return function(g, e) {
							var f = d.getValue(g, a),
								i = d.getValue(e,
									a);
							return b * c(f, i)
						}
					}
					for (var c = [], i, b = j.comparatorMap, g = k.basicComparator, a = 0; a < f.length; a++) {
						i = f[a];
						var l = i.attribute;
						if (l) {
							i = i.descending ? -1 : 1;
							var d = g;
							b && ("string" !== typeof l && "toString" in l && (l = l.toString()), d = b[l] || g);
							c.push(e(l, i, d, j))
						}
					}
					return function(a, b) {
						for (var d = 0; d < c.length;) {
							var g = c[d++](a, b);
							if (0 !== g) return g
						}
						return 0
					}
				};
				return k
			})
		},
		"dojo/store/util/QueryResults": function() {
			define(["../../_base/array", "../../_base/lang", "../../_base/Deferred"], function(f, k, h) {
				var j = function(e) {
					function c(c) {
						e[c] ||
							(e[c] = function() {
								var b = arguments;
								return h.when(e, function(g) {
									Array.prototype.unshift.call(b, g);
									return j(f[c].apply(f, b))
								})
							})
					}
					if (!e) return e;
					e.then && (e = k.delegate(e));
					c("forEach");
					c("filter");
					c("map");
					if (!e.total) e.total = h.when(e, function(c) {
						return c.length
					});
					return e
				};
				k.setObject("dojo.store.util.QueryResults", j);
				return j
			})
		},
		"dijit/MenuSeparator": function() {
			define("dojo/_base/declare,dojo/dom,./_WidgetBase,./_TemplatedMixin,./_Contained,dojo/text!./templates/MenuSeparator.html".split(","), function(f,
				k, h, j, e, c) {
				return f("dijit.MenuSeparator", [h, j, e], {
					templateString: c,
					buildRendering: function() {
						this.inherited(arguments);
						k.setSelectable(this.domNode, !1)
					},
					isFocusable: function() {
						return !1
					}
				})
			})
		},
		"url:dijit/templates/MenuSeparator.html": '<tr class="dijitMenuSeparator">\n\t<td class="dijitMenuSeparatorIconCell">\n\t\t<div class="dijitMenuSeparatorTop"></div>\n\t\t<div class="dijitMenuSeparatorBottom"></div>\n\t</td>\n\t<td colspan="3" class="dijitMenuSeparatorLabelCell">\n\t\t<div class="dijitMenuSeparatorTop dijitMenuSeparatorLabel"></div>\n\t\t<div class="dijitMenuSeparatorBottom"></div>\n\t</td>\n</tr>',
		"dijit/Tooltip": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/_base/fx,dojo/dom,dojo/dom-class,dojo/dom-geometry,dojo/dom-style,dojo/_base/lang,dojo/mouse,dojo/on,dojo/sniff,./_base/manager,./place,./_Widget,./_TemplatedMixin,./BackgroundIframe,dojo/text!./templates/Tooltip.html,./main".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r, q) {
				var v = k("dijit._MasterTooltip", [m, n], {
					duration: d.defaultDuration,
					templateString: r,
					postCreate: function() {
						this.ownerDocumentBody.appendChild(this.domNode);
						this.bgIframe = new o(this.domNode);
						this.fadeIn = h.fadeIn({
							node: this.domNode,
							duration: this.duration,
							onEnd: b.hitch(this, "_onShow")
						});
						this.fadeOut = h.fadeOut({
							node: this.domNode,
							duration: this.duration,
							onEnd: b.hitch(this, "_onHide")
						})
					},
					show: function(a, c, d, g, e) {
						if (!this.aroundNode || !(this.aroundNode === c && this.containerNode.innerHTML == a))
							if ("playing" == this.fadeOut.status()) this._onDeck = arguments;
							else {
								this.containerNode.innerHTML = a;
								e && this.set("textDir", e);
								this.containerNode.align = g ? "right" : "left";
								var f = p.around(this.domNode,
										c, d && d.length ? d : s.defaultPosition, !g, b.hitch(this, "orient")),
									h = f.aroundNodePos;
								"M" == f.corner.charAt(0) && "M" == f.aroundCorner.charAt(0) ? (this.connectorNode.style.top = h.y + (h.h - this.connectorNode.offsetHeight >> 1) - f.y + "px", this.connectorNode.style.left = "") : "M" == f.corner.charAt(1) && "M" == f.aroundCorner.charAt(1) ? this.connectorNode.style.left = h.x + (h.w - this.connectorNode.offsetWidth >> 1) - f.x + "px" : (this.connectorNode.style.left = "", this.connectorNode.style.top = "");
								i.set(this.domNode, "opacity", 0);
								this.fadeIn.play();
								this.isShowingNow = !0;
								this.aroundNode = c
							}
					},
					orient: function(a, b, d, g, e) {
						this.connectorNode.style.top = "";
						var f = g.h,
							g = g.w;
						a.className = "dijitTooltip " + {
							"MR-ML": "dijitTooltipRight",
							"ML-MR": "dijitTooltipLeft",
							"TM-BM": "dijitTooltipAbove",
							"BM-TM": "dijitTooltipBelow",
							"BL-TL": "dijitTooltipBelow dijitTooltipABLeft",
							"TL-BL": "dijitTooltipAbove dijitTooltipABLeft",
							"BR-TR": "dijitTooltipBelow dijitTooltipABRight",
							"TR-BR": "dijitTooltipAbove dijitTooltipABRight",
							"BR-BL": "dijitTooltipRight",
							"BL-BR": "dijitTooltipLeft"
						}[b +
							"-" + d
						];
						this.domNode.style.width = "auto";
						var i = c.position(this.domNode);
						9 == l("ie") && (i.w += 2);
						var h = Math.min(Math.max(g, 1), i.w);
						c.setMarginBox(this.domNode, {
							w: h
						});
						"B" == d.charAt(0) && "B" == b.charAt(0) ? (a = c.position(a), b = this.connectorNode.offsetHeight, a.h > f ? (this.connectorNode.style.top = f - (e.h + b >> 1) + "px", this.connectorNode.style.bottom = "") : (this.connectorNode.style.bottom = Math.min(Math.max(e.h / 2 - b / 2, 0), a.h - b) + "px", this.connectorNode.style.top = "")) : (this.connectorNode.style.top = "", this.connectorNode.style.bottom =
							"");
						return Math.max(0, i.w - g)
					},
					_onShow: function() {
						if (l("ie")) this.domNode.style.filter = ""
					},
					hide: function(a) {
						if (this._onDeck && this._onDeck[1] == a) this._onDeck = null;
						else if (this.aroundNode === a) this.fadeIn.stop(), this.isShowingNow = !1, this.aroundNode = null, this.fadeOut.play()
					},
					_onHide: function() {
						this.domNode.style.cssText = "";
						this.containerNode.innerHTML = "";
						if (this._onDeck) this.show.apply(this, this._onDeck), this._onDeck = null
					},
					_setAutoTextDir: function(a) {
						this.applyTextDir(a, l("ie") ? a.outerText : a.textContent);
						f.forEach(a.children, function(a) {
							this._setAutoTextDir(a)
						}, this)
					},
					_setTextDirAttr: function(a) {
						this._set("textDir", a);
						"auto" == a ? this._setAutoTextDir(this.containerNode) : this.containerNode.dir = this.textDir
					}
				});
				q.showTooltip = function(a, b, c, d, g) {
					c && (c = f.map(c, function(a) {
						return {
							after: "after-centered",
							before: "before-centered"
						}[a] || a
					}));
					if (!s._masterTT) q._masterTT = s._masterTT = new v;
					return s._masterTT.show(a, b, c, d, g)
				};
				q.hideTooltip = function(a) {
					return s._masterTT && s._masterTT.hide(a)
				};
				var s = k("dijit.Tooltip",
					m, {
						label: "",
						showDelay: 400,
						connectId: [],
						position: [],
						selector: "",
						_setConnectIdAttr: function(c) {
							f.forEach(this._connections || [], function(a) {
								f.forEach(a, function(a) {
									a.remove()
								})
							}, this);
							this._connectIds = f.filter(b.isArrayLike(c) ? c : c ? [c] : [], function(a) {
								return j.byId(a, this.ownerDocument)
							}, this);
							this._connections = f.map(this._connectIds, function(c) {
								var c = j.byId(c, this.ownerDocument),
									d = this.selector,
									e = d ? function(b) {
										return a.selector(d, b)
									} : function(a) {
										return a
									},
									f = this;
								return [a(c, e(g.enter), function() {
										f._onHover(this)
									}),
									a(c, e("focusin"), function() {
										f._onHover(this)
									}), a(c, e(g.leave), b.hitch(f, "_onUnHover")), a(c, e("focusout"), b.hitch(f, "_onUnHover"))
								]
							}, this);
							this._set("connectId", c)
						},
						addTarget: function(a) {
							a = a.id || a; - 1 == f.indexOf(this._connectIds, a) && this.set("connectId", this._connectIds.concat(a))
						},
						removeTarget: function(a) {
							a = f.indexOf(this._connectIds, a.id || a);
							0 <= a && (this._connectIds.splice(a, 1), this.set("connectId", this._connectIds))
						},
						buildRendering: function() {
							this.inherited(arguments);
							e.add(this.domNode, "dijitTooltipData")
						},
						startup: function() {
							this.inherited(arguments);
							var a = this.connectId;
							f.forEach(b.isArrayLike(a) ? a : [a], this.addTarget, this)
						},
						getContent: function() {
							return this.label || this.domNode.innerHTML
						},
						_onHover: function(a) {
							if (!this._showTimer) this._showTimer = this.defer(function() {
								this.open(a)
							}, this.showDelay)
						},
						_onUnHover: function() {
							this._showTimer && (this._showTimer.remove(), delete this._showTimer);
							this.close()
						},
						open: function(a) {
							this._showTimer && (this._showTimer.remove(), delete this._showTimer);
							var b = this.getContent(a);
							if (b) s.show(b, a, this.position, !this.isLeftToRight(), this.textDir), this._connectNode = a, this.onShow(a, this.position)
						},
						close: function() {
							this._connectNode && (s.hide(this._connectNode), delete this._connectNode, this.onHide());
							this._showTimer && (this._showTimer.remove(), delete this._showTimer)
						},
						onShow: function() {},
						onHide: function() {},
						destroy: function() {
							this.close();
							f.forEach(this._connections || [], function(a) {
								f.forEach(a, function(a) {
									a.remove()
								})
							}, this);
							this.inherited(arguments)
						}
					});
				s._MasterTooltip = v;
				s.show =
					q.showTooltip;
				s.hide = q.hideTooltip;
				s.defaultPosition = ["after-centered", "before-centered"];
				return s
			})
		},
		"url:dijit/templates/Tooltip.html": '<div class="dijitTooltip dijitTooltipLeft" id="dojoTooltip"\n\t><div class="dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point="containerNode" role=\'alert\'></div\n\t><div class="dijitTooltipConnector" data-dojo-attach-point="connectorNode"></div\n></div>\n',
		"url:dijit/form/templates/Select.html": '<table class="dijit dijitReset dijitInline dijitLeft"\n\tdata-dojo-attach-point="_buttonNode,tableNode,focusNode" cellspacing=\'0\' cellpadding=\'0\'\n\trole="listbox" aria-haspopup="true"\n\t><tbody role="presentation"><tr role="presentation"\n\t\t><td class="dijitReset dijitStretch dijitButtonContents" role="presentation"\n\t\t\t><div class="dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point="containerNode,_popupStateNode" role="presentation"></div\n\t\t\t><div class="dijitReset dijitValidationContainer"\n\t\t\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t/></div\n\t\t\t><input type="hidden" ${!nameAttrSetting} data-dojo-attach-point="valueNode" value="${value}" aria-hidden="true"\n\t\t/></td\n\t\t><td class="dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\n\t\t\tdata-dojo-attach-point="titleNode" role="presentation"\n\t\t\t><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t${_buttonInputDisabled}\n\t\t/></td\n\t></tr></tbody\n></table>\n',
		"dijit/form/HorizontalSlider": function() {
			define("dojo/_base/array,dojo/_base/declare,dojo/dnd/move,dojo/_base/event,dojo/_base/fx,dojo/dom-geometry,dojo/dom-style,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/dnd/Moveable,dojo/dnd/Mover,dojo/query,dojo/mouse,../registry,../focus,../typematic,./Button,./_FormValueWidget,../_Container,dojo/text!./templates/HorizontalSlider.html".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m, n, o, r, q, v, s, t) {
				var u = k("dijit.form._SliderMover", d, {
						onMouseMove: function(a) {
							var b =
								this.widget,
								d = b._abspos;
							if (!d) d = b._abspos = c.position(b.sliderBarContainer, !0), b._setPixelValue_ = g.hitch(b, "_setPixelValue"), b._isReversed_ = b._isReversed();
							a = a[b._mousePixelCoord] - d[b._startingPixelCoord];
							b._setPixelValue_(b._isReversed_ ? d[b._pixelCount] - a : a, d[b._pixelCount], !1)
						},
						destroy: function(a) {
							d.prototype.destroy.apply(this, arguments);
							var b = this.widget;
							b._abspos = null;
							b._setValueAttr(b.value, !0)
						}
					}),
					h = k("dijit.form.HorizontalSlider", [v, s], {
						templateString: t,
						value: 0,
						showButtons: !0,
						minimum: 0,
						maximum: 100,
						discreteValues: Infinity,
						pageIncrement: 2,
						clickSelect: !0,
						slideDuration: n.defaultDuration,
						_setIdAttr: "",
						baseClass: "dijitSlider",
						cssStateNodes: {
							incrementButton: "dijitSliderIncrementButton",
							decrementButton: "dijitSliderDecrementButton",
							focusNode: "dijitSliderThumb"
						},
						_mousePixelCoord: "pageX",
						_pixelCount: "w",
						_startingPixelCoord: "x",
						_handleOffsetCoord: "left",
						_progressPixelSize: "width",
						_onKeyUp: function(a) {
							!this.disabled && !this.readOnly && !a.altKey && !a.ctrlKey && !a.metaKey && this._setValueAttr(this.value, !0)
						},
						_onKeyPress: function(a) {
							if (!this.disabled && !this.readOnly && !a.altKey && !a.ctrlKey && !a.metaKey) {
								switch (a.charOrCode) {
									case b.HOME:
										this._setValueAttr(this.minimum, !1);
										break;
									case b.END:
										this._setValueAttr(this.maximum, !1);
										break;
									case this._descending || this.isLeftToRight() ? b.RIGHT_ARROW:
										b.LEFT_ARROW:
											case !1 === this._descending ? b.DOWN_ARROW:
										b.UP_ARROW:
											case !1 === this._descending ? b.PAGE_DOWN:
										b.PAGE_UP: this.increment(a);
										break;
									case this._descending || this.isLeftToRight() ? b.LEFT_ARROW:
										b.RIGHT_ARROW:
											case !1 === this._descending ?
											b.UP_ARROW:
										b.DOWN_ARROW:
											case !1 === this._descending ? b.PAGE_UP:
										b.PAGE_DOWN: this.decrement(a);
										break;
									default:
										return
								}
								j.stop(a)
							}
						},
						_onHandleClick: function(b) {
							!this.disabled && !this.readOnly && (a("ie") || o.focus(this.sliderHandle), j.stop(b))
						},
						_isReversed: function() {
							return !this.isLeftToRight()
						},
						_onBarClick: function(a) {
							if (!this.disabled && !this.readOnly && this.clickSelect) {
								o.focus(this.sliderHandle);
								j.stop(a);
								var b = c.position(this.sliderBarContainer, !0),
									d = a[this._mousePixelCoord] - b[this._startingPixelCoord];
								this._setPixelValue(this._isReversed() ?
									b[this._pixelCount] - d : d, b[this._pixelCount], !0);
								this._movable.onMouseDown(a)
							}
						},
						_setPixelValue: function(a, b, c) {
							if (!this.disabled && !this.readOnly) {
								var d = this.discreteValues;
								if (1 >= d || Infinity == d) d = b;
								d--;
								a = Math.round(a / (b / d));
								this._setValueAttr(Math.max(Math.min((this.maximum - this.minimum) * a / d + this.minimum, this.maximum), this.minimum), c)
							}
						},
						_setValueAttr: function(a, b) {
							this._set("value", a);
							this.valueNode.value = a;
							this.focusNode.setAttribute("aria-valuenow", a);
							this.inherited(arguments);
							var c = (a - this.minimum) /
								(this.maximum - this.minimum),
								d = !1 === this._descending ? this.remainingBar : this.progressBar,
								g = !1 === this._descending ? this.progressBar : this.remainingBar;
							this._inProgressAnim && "stopped" != this._inProgressAnim.status && this._inProgressAnim.stop(!0);
							if (b && 0 < this.slideDuration && d.style[this._progressPixelSize]) {
								var f = this,
									i = {},
									h = parseFloat(d.style[this._progressPixelSize]),
									l = this.slideDuration * (c - h / 100);
								if (0 != l) 0 > l && (l = 0 - l), i[this._progressPixelSize] = {
									start: h,
									end: 100 * c,
									units: "%"
								}, this._inProgressAnim = e.animateProperty({
									node: d,
									duration: l,
									onAnimate: function(a) {
										g.style[f._progressPixelSize] = 100 - parseFloat(a[f._progressPixelSize]) + "%"
									},
									onEnd: function() {
										delete f._inProgressAnim
									},
									properties: i
								}), this._inProgressAnim.play()
							} else d.style[this._progressPixelSize] = 100 * c + "%", g.style[this._progressPixelSize] = 100 * (1 - c) + "%"
						},
						_bumpValue: function(a, b) {
							if (!this.disabled && !this.readOnly) {
								var d = i.getComputedStyle(this.sliderBarContainer),
									g = c.getContentBox(this.sliderBarContainer, d),
									d = this.discreteValues;
								if (1 >= d || Infinity == d) d = g[this._pixelCount];
								d--;
								g = (this.value - this.minimum) * d / (this.maximum - this.minimum) + a;
								0 > g && (g = 0);
								g > d && (g = d);
								g = g * (this.maximum - this.minimum) / d + this.minimum;
								this._setValueAttr(g, b)
							}
						},
						_onClkBumper: function(a) {
							!this.disabled && !this.readOnly && this.clickSelect && this._setValueAttr(a, !0)
						},
						_onClkIncBumper: function() {
							this._onClkBumper(!1 === this._descending ? this.minimum : this.maximum)
						},
						_onClkDecBumper: function() {
							this._onClkBumper(!1 === this._descending ? this.maximum : this.minimum)
						},
						decrement: function(a) {
							this._bumpValue(a.charOrCode ==
								b.PAGE_DOWN ? -this.pageIncrement : -1)
						},
						increment: function(a) {
							this._bumpValue(a.charOrCode == b.PAGE_UP ? this.pageIncrement : 1)
						},
						_mouseWheeled: function(a) {
							j.stop(a);
							this._bumpValue(0 > a.wheelDelta ? -1 : 1, !0)
						},
						startup: function() {
							this._started || (f.forEach(this.getChildren(), function(a) {
								this[a.container] != this.containerNode && this[a.container].appendChild(a.domNode)
							}, this), this.inherited(arguments))
						},
						_typematicCallback: function(a, b, c) {
							if (-1 == a) this._setValueAttr(this.value, !0);
							else this[b == (this._descending ? this.incrementButton :
								this.decrementButton) ? "decrement" : "increment"](c)
						},
						buildRendering: function() {
							this.inherited(arguments);
							if (this.showButtons) this.incrementButton.style.display = "", this.decrementButton.style.display = "";
							var a = p('label[for="' + this.id + '"]');
							if (a.length) {
								if (!a[0].id) a[0].id = this.id + "_label";
								this.focusNode.setAttribute("aria-labelledby", a[0].id)
							}
							this.focusNode.setAttribute("aria-valuemin", this.minimum);
							this.focusNode.setAttribute("aria-valuemax", this.maximum)
						},
						postCreate: function() {
							this.inherited(arguments);
							this.showButtons && this.own(r.addMouseListener(this.decrementButton, this, "_typematicCallback", 25, 500), r.addMouseListener(this.incrementButton, this, "_typematicCallback", 25, 500));
							this.connect(this.domNode, m.wheel, "_mouseWheeled");
							var a = k(u, {
								widget: this
							});
							this._movable = new l(this.sliderHandle, {
								mover: a
							});
							this._layoutHackIE7()
						},
						destroy: function() {
							this._movable.destroy();
							this._inProgressAnim && "stopped" != this._inProgressAnim.status && this._inProgressAnim.stop(!0);
							this.inherited(arguments)
						}
					});
				h._Mover = u;
				return h
			})
		},
		"dojo/dnd/move": function() {
			define("../_base/declare,../dom-geometry,../dom-style,./common,./Mover,./Moveable".split(","), function(f, k, h, j, e, c) {
				j = f("dojo.dnd.move.constrainedMoveable", c, {
					constraints: function() {},
					within: !1,
					constructor: function(c, b) {
						b || (b = {});
						this.constraints = b.constraints;
						this.within = b.within
					},
					onFirstMove: function(c) {
						var b = this.constraintBox = this.constraints.call(this, c);
						b.r = b.l + b.w;
						b.b = b.t + b.h;
						this.within && (c = k.getMarginSize(c.node), b.r -= c.w, b.b -= c.h)
					},
					onMove: function(c, b) {
						var g = this.constraintBox,
							a = c.node.style;
						this.onMoving(c, b);
						b.l = b.l < g.l ? g.l : g.r < b.l ? g.r : b.l;
						b.t = b.t < g.t ? g.t : g.b < b.t ? g.b : b.t;
						a.left = b.l + "px";
						a.top = b.t + "px";
						this.onMoved(c, b)
					}
				});
				e = f("dojo.dnd.move.boxConstrainedMoveable", j, {
					box: {},
					constructor: function(c, b) {
						var g = b && b.box;
						this.constraints = function() {
							return g
						}
					}
				});
				f = f("dojo.dnd.move.parentConstrainedMoveable", j, {
					area: "content",
					constructor: function(c, b) {
						var g = b && b.area;
						this.constraints = function() {
							var a = this.node.parentNode,
								b = h.getComputedStyle(a),
								c = k.getMarginBox(a, b);
							if ("margin" ==
								g) return c;
							var e = k.getMarginExtents(a, b);
							c.l += e.l;
							c.t += e.t;
							c.w -= e.w;
							c.h -= e.h;
							if ("border" == g) return c;
							e = k.getBorderExtents(a, b);
							c.l += e.l;
							c.t += e.t;
							c.w -= e.w;
							c.h -= e.h;
							if ("padding" == g) return c;
							e = k.getPadExtents(a, b);
							c.l += e.l;
							c.t += e.t;
							c.w -= e.w;
							c.h -= e.h;
							return c
						}
					}
				});
				return {
					constrainedMoveable: j,
					boxConstrainedMoveable: e,
					parentConstrainedMoveable: f
				}
			})
		},
		"dijit/typematic": function() {
			define("dojo/_base/array,dojo/_base/connect,dojo/_base/event,dojo/_base/kernel,dojo/_base/lang,dojo/on,dojo/sniff,./main".split(","),
				function(f, k, h, j, e, c, i, b) {
					var g = b.typematic = {
						_fireEventAndReload: function() {
							this._timer = null;
							this._callback(++this._count, this._node, this._evt);
							this._currentTimeout = Math.max(0 > this._currentTimeout ? this._initialDelay : 1 < this._subsequentDelay ? this._subsequentDelay : Math.round(this._currentTimeout * this._subsequentDelay), this._minDelay);
							this._timer = setTimeout(e.hitch(this, "_fireEventAndReload"), this._currentTimeout)
						},
						trigger: function(a, b, c, g, f, i, h, j) {
							if (f != this._obj) {
								this.stop();
								this._initialDelay = h || 500;
								this._subsequentDelay = i || 0.9;
								this._minDelay = j || 10;
								this._obj = f;
								this._node = c;
								this._count = this._currentTimeout = -1;
								this._callback = e.hitch(b, g);
								this._evt = {
									faux: !0
								};
								for (var k in a) "layerX" != k && "layerY" != k && (b = a[k], "function" != typeof b && "undefined" != typeof b && (this._evt[k] = b));
								this._fireEventAndReload()
							}
						},
						stop: function() {
							if (this._timer) clearTimeout(this._timer), this._timer = null;
							if (this._obj) this._callback(-1, this._node, this._evt), this._obj = null
						},
						addKeyListener: function(a, b, d, i, m, n, o) {
							if (b.keyCode) b.charOrCode =
								b.keyCode, j.deprecated("keyCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
							else if (b.charCode) b.charOrCode = String.fromCharCode(b.charCode), j.deprecated("charCode attribute parameter for dijit.typematic.addKeyListener is deprecated. Use charOrCode instead.", "", "2.0");
							var r = [c(a, k._keypress, e.hitch(this, function(c) {
								c.charOrCode == b.charOrCode && (void 0 === b.ctrlKey || b.ctrlKey == c.ctrlKey) && (void 0 === b.altKey || b.altKey == c.altKey) && (void 0 === b.metaKey ||
									b.metaKey == (c.metaKey || !1)) && (void 0 === b.shiftKey || b.shiftKey == c.shiftKey) ? (h.stop(c), g.trigger(c, d, a, i, b, m, n, o)) : g._obj == b && g.stop()
							})), c(a, "keyup", e.hitch(this, function() {
								g._obj == b && g.stop()
							}))];
							return {
								remove: function() {
									f.forEach(r, function(a) {
										a.remove()
									})
								}
							}
						},
						addMouseListener: function(a, b, d, h, j, k) {
							var o = [c(a, "mousedown", e.hitch(this, function(c) {
								c.preventDefault();
								g.trigger(c, b, a, d, a, h, j, k)
							})), c(a, "mouseup", e.hitch(this, function(a) {
								this._obj && a.preventDefault();
								g.stop()
							})), c(a, "mouseout", e.hitch(this,
								function(a) {
									this._obj && a.preventDefault();
									g.stop()
								})), c(a, "dblclick", e.hitch(this, function(c) {
								c.preventDefault();
								9 > i("ie") && (g.trigger(c, b, a, d, a, h, j, k), setTimeout(e.hitch(this, g.stop), 50))
							}))];
							return {
								remove: function() {
									f.forEach(o, function(a) {
										a.remove()
									})
								}
							}
						},
						addListener: function(a, b, c, g, e, i, h, j) {
							var k = [this.addKeyListener(b, c, g, e, i, h, j), this.addMouseListener(a, g, e, i, h, j)];
							return {
								remove: function() {
									f.forEach(k, function(a) {
										a.remove()
									})
								}
							}
						}
					};
					return g
				})
		},
		"url:dijit/form/templates/HorizontalSlider.html": '<table class="dijit dijitReset dijitSlider dijitSliderH" cellspacing="0" cellpadding="0" border="0" rules="none" data-dojo-attach-event="onkeypress:_onKeyPress,onkeyup:_onKeyUp"\n\trole="presentation"\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset" colspan="2"></td\n\t\t><td data-dojo-attach-point="topDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"></td\n\t\t><td class="dijitReset" colspan="2"></td\n\t></tr\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t><div class="dijitSliderDecrementIconH" style="display:none" data-dojo-attach-point="decrementButton"><span class="dijitSliderButtonInner">-</span></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" data-dojo-attach-event="press:_onClkDecBumper"></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><input data-dojo-attach-point="valueNode" type="hidden" ${!nameAttrSetting}\n\t\t\t/><div class="dijitReset dijitSliderBarContainerH" role="presentation" data-dojo-attach-point="sliderBarContainer"\n\t\t\t\t><div role="presentation" data-dojo-attach-point="progressBar" class="dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" data-dojo-attach-event="press:_onBarClick"\n\t\t\t\t\t><div class="dijitSliderMoveable dijitSliderMoveableH"\n\t\t\t\t\t\t><div data-dojo-attach-point="sliderHandle,focusNode" class="dijitSliderImageHandle dijitSliderImageHandleH" data-dojo-attach-event="press:_onHandleClick" role="slider"></div\n\t\t\t\t\t></div\n\t\t\t\t></div\n\t\t\t\t><div role="presentation" data-dojo-attach-point="remainingBar" class="dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" data-dojo-attach-event="press:_onBarClick"></div\n\t\t\t></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" data-dojo-attach-event="press:_onClkIncBumper"></div\n\t\t></td\n\t\t><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t><div class="dijitSliderIncrementIconH" style="display:none" data-dojo-attach-point="incrementButton"><span class="dijitSliderButtonInner">+</span></div\n\t\t></td\n\t></tr\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset" colspan="2"></td\n\t\t><td data-dojo-attach-point="containerNode,bottomDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"></td\n\t\t><td class="dijitReset" colspan="2"></td\n\t></tr\n></table>\n',
		"dijit/form/NumberTextBox": function() {
			define(["dojo/_base/declare", "dojo/_base/lang", "dojo/number", "./RangeBoundTextBox"], function(f, k, h, j) {
				var e = f("dijit.form.NumberTextBoxMixin", null, {
						pattern: h.regexp,
						value: NaN,
						editOptions: {
							pattern: "#.######"
						},
						_formatter: h.format,
						postMixInProperties: function() {
							this.inherited(arguments);
							this._set("type", "text")
						},
						_setConstraintsAttr: function(c) {
							var e = "number" == typeof c.places ? c.places : 0;
							e && e++;
							if ("number" != typeof c.max) c.max = 9 * Math.pow(10, 15 - e);
							if ("number" != typeof c.min) c.min = -9 * Math.pow(10, 15 - e);
							this.inherited(arguments, [c]);
							this.focusNode && this.focusNode.value && !isNaN(this.value) && this.set("value", this.value)
						},
						_onFocus: function() {
							if (!this.disabled) {
								var c = this.get("value");
								if ("number" == typeof c && !isNaN(c) && (c = this.format(c, this.constraints), void 0 !== c)) this.textbox.value = c;
								this.inherited(arguments)
							}
						},
						format: function(c, e) {
							var b = "" + c;
							if ("number" != typeof c) return b;
							if (isNaN(c)) return "";
							if (!("rangeCheck" in this && this.rangeCheck(c, e)) && !1 !== e.exponent && /\de[-+]?\d/i.test(b)) return b;
							this.editOptions && this.focused && (e = k.mixin({}, e, this.editOptions));
							return this._formatter(c, e)
						},
						_parser: h.parse,
						parse: function(c, e) {
							var b = this._parser(c, k.mixin({}, e, this.editOptions && this.focused ? this.editOptions : {}));
							this.editOptions && this.focused && isNaN(b) && (b = this._parser(c, e));
							return b
						},
						_getDisplayedValueAttr: function() {
							var c = this.inherited(arguments);
							return isNaN(c) ? this.textbox.value : c
						},
						filter: function(c) {
							return null == c || "" === c ? NaN : this.inherited(arguments)
						},
						serialize: function(c, e) {
							return "number" !=
								typeof c || isNaN(c) ? "" : this.inherited(arguments)
						},
						_setBlurValue: function() {
							this._setValueAttr(k.hitch(k.mixin({}, this, {
								focused: !0
							}), "get")("value"), !0)
						},
						_setValueAttr: function(c, e, b) {
							if (void 0 !== c && void 0 === b)
								if (b = "" + c, "number" == typeof c)
									if (isNaN(c)) b = "";
									else {
										if ("rangeCheck" in this && this.rangeCheck(c, this.constraints) || !1 === this.constraints.exponent || !/\de[-+]?\d/i.test(b)) b = void 0
									}
							else c ? c = void 0 : (b = "", c = NaN);
							this.inherited(arguments, [c, e, b])
						},
						_getValueAttr: function() {
							var c = this.inherited(arguments);
							if (isNaN(c) && "" !== this.textbox.value) {
								if (!1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) && RegExp("^" + h._realNumberRegexp(k.mixin({}, this.constraints)) + "$").test(this.textbox.value)) return c = Number(this.textbox.value), isNaN(c) ? void 0 : c
							} else return c
						},
						isValid: function(c) {
							if (!this.focused || this._isEmpty(this.textbox.value)) return this.inherited(arguments);
							var e = this.get("value");
							return !isNaN(e) && this.rangeCheck(e, this.constraints) ? !1 !== this.constraints.exponent && /\de[-+]?\d/i.test(this.textbox.value) ?
								!0 : this.inherited(arguments) : !1
						}
					}),
					f = f("dijit.form.NumberTextBox", [j, e], {
						baseClass: "dijitTextBox dijitNumberTextBox"
					});
				f.Mixin = e;
				return f
			})
		},
		"dojo/number": function() {
			define(["./_base/lang", "./i18n", "./i18n!./cldr/nls/number", "./string", "./regexp"], function(f, k, h, j, e) {
				var c = {};
				f.setObject("dojo.number", c);
				c.format = function(b, e) {
					var e = f.mixin({}, e || {}),
						a = k.normalizeLocale(e.locale),
						a = k.getLocalization("dojo.cldr", "number", a);
					e.customs = a;
					a = e.pattern || a[(e.type || "decimal") + "Format"];
					return isNaN(b) ||
						Infinity == Math.abs(b) ? null : c._applyPattern(b, a, e)
				};
				c._numberPatternRE = /[#0,]*[#0](?:\.0*#*)?/;
				c._applyPattern = function(b, e, a) {
					var a = a || {},
						f = a.customs.group,
						d = a.customs.decimal,
						e = e.split(";"),
						i = e[0],
						e = e[0 > b ? 1 : 0] || "-" + i;
					if (-1 != e.indexOf("%")) b *= 100;
					else if (-1 != e.indexOf("\u2030")) b *= 1E3;
					else if (-1 != e.indexOf("\u00a4")) f = a.customs.currencyGroup || f, d = a.customs.currencyDecimal || d, e = e.replace(/\u00a4{1,3}/, function(b) {
						return a[["symbol", "currency", "displayName"][b.length - 1]] || a.currency || ""
					});
					else if (-1 !=
						e.indexOf("E")) throw Error("exponential notation not supported");
					var h = c._numberPatternRE,
						i = i.match(h);
					if (!i) throw Error("unable to find a number expression in pattern: " + e);
					if (!1 === a.fractional) a.places = 0;
					return e.replace(h, c._formatAbsolute(b, i[0], {
						decimal: d,
						group: f,
						places: a.places,
						round: a.round
					}))
				};
				c.round = function(b, c, a) {
					a = 10 / (a || 10);
					return (a * +b).toFixed(c) / a
				};
				if (0 == (0.9).toFixed()) {
					var i = c.round;
					c.round = function(b, c, a) {
						var e = Math.pow(10, -c || 0),
							d = Math.abs(b);
						if (!b || d >= e || 5 > d * Math.pow(10, c + 1)) e =
							0;
						return i(b, c, a) + (0 < b ? e : -e)
					}
				}
				c._formatAbsolute = function(b, e, a) {
					a = a || {};
					if (!0 === a.places) a.places = 0;
					if (Infinity === a.places) a.places = 6;
					var e = e.split("."),
						f = "string" == typeof a.places && a.places.indexOf(","),
						d = a.places;
					if (f) d = a.places.substring(f + 1);
					else if (!(0 <= d)) d = (e[1] || []).length;
					0 > a.round || (b = c.round(b, d, a.round));
					var b = ("" + Math.abs(b)).split("."),
						i = b[1] || "";
					if (e[1] || a.places) {
						if (f) a.places = a.places.substring(0, f);
						f = void 0 !== a.places ? a.places : e[1] && e[1].lastIndexOf("0") + 1;
						f > i.length && (b[1] = j.pad(i,
							f, "0", !0));
						d < i.length && (b[1] = i.substr(0, d))
					} else b[1] && b.pop();
					d = e[0].replace(",", "");
					f = d.indexOf("0"); - 1 != f && (f = d.length - f, f > b[0].length && (b[0] = j.pad(b[0], f)), -1 == d.indexOf("#") && (b[0] = b[0].substr(b[0].length - f)));
					var d = e[0].lastIndexOf(","),
						h, k; - 1 != d && (h = e[0].length - d - 1, e = e[0].substr(0, d), d = e.lastIndexOf(","), -1 != d && (k = e.length - d - 1));
					e = [];
					for (d = b[0]; d;) f = d.length - h, e.push(0 < f ? d.substr(f) : d), d = 0 < f ? d.slice(0, f) : "", k && (h = k, delete k);
					b[0] = e.reverse().join(a.group || ",");
					return b.join(a.decimal || ".")
				};
				c.regexp = function(b) {
					return c._parseInfo(b).regexp
				};
				c._parseInfo = function(b) {
					var b = b || {},
						g = k.normalizeLocale(b.locale),
						g = k.getLocalization("dojo.cldr", "number", g),
						a = b.pattern || g[(b.type || "decimal") + "Format"],
						f = g.group,
						d = g.decimal,
						i = 1;
					if (-1 != a.indexOf("%")) i /= 100;
					else if (-1 != a.indexOf("\u2030")) i /= 1E3;
					else {
						var h = -1 != a.indexOf("\u00a4");
						h && (f = g.currencyGroup || f, d = g.currencyDecimal || d)
					}
					g = a.split(";");
					1 == g.length && g.push("-" + g[0]);
					g = e.buildGroupRE(g, function(a) {
						a = "(?:" + e.escapeString(a, ".") + ")";
						return a.replace(c._numberPatternRE,
							function(a) {
								var e = {
										signed: !1,
										separator: b.strict ? f : [f, ""],
										fractional: b.fractional,
										decimal: d,
										exponent: !1
									},
									a = a.split("."),
									g = b.places;
								1 == a.length && 1 != i && (a[1] = "###");
								if (1 == a.length || 0 === g) e.fractional = !1;
								else {
									void 0 === g && (g = b.pattern ? a[1].lastIndexOf("0") + 1 : Infinity);
									if (g && void 0 == b.fractional) e.fractional = !0;
									!b.places && g < a[1].length && (g += "," + a[1].length);
									e.places = g
								}
								a = a[0].split(",");
								if (1 < a.length && (e.groupSize = a.pop().length, 1 < a.length)) e.groupSize2 = a.pop().length;
								return "(" + c._realNumberRegexp(e) + ")"
							})
					}, !0);
					h && (g = g.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g, function(a, c, d, g) {
						a = e.escapeString(b[["symbol", "currency", "displayName"][d.length - 1]] || b.currency || "");
						c = c ? "[\\s\\xa0]" : "";
						g = g ? "[\\s\\xa0]" : "";
						return !b.strict ? (c && (c += "*"), g && (g += "*"), "(?:" + c + a + g + ")?") : c + a + g
					}));
					return {
						regexp: g.replace(/[\xa0 ]/g, "[\\s\\xa0]"),
						group: f,
						decimal: d,
						factor: i
					}
				};
				c.parse = function(b, e) {
					var a = c._parseInfo(e),
						f = RegExp("^" + a.regexp + "$").exec(b);
					if (!f) return NaN;
					var d = f[1];
					if (!f[1]) {
						if (!f[2]) return NaN;
						d = f[2];
						a.factor *=
							-1
					}
					d = d.replace(RegExp("[" + a.group + "\\s\\xa0]", "g"), "").replace(a.decimal, ".");
					return d * a.factor
				};
				c._realNumberRegexp = function(b) {
					b = b || {};
					if (!("places" in b)) b.places = Infinity;
					if ("string" != typeof b.decimal) b.decimal = ".";
					if (!("fractional" in b) || /^0/.test(b.places)) b.fractional = [!0, !1];
					if (!("exponent" in b)) b.exponent = [!0, !1];
					if (!("eSigned" in b)) b.eSigned = [!0, !1];
					var g = c._integerRegexp(b),
						a = e.buildGroupRE(b.fractional, function(a) {
							var c = "";
							a && 0 !== b.places && (c = "\\" + b.decimal, c = Infinity == b.places ? "(?:" + c +
								"\\d+)?" : c + ("\\d{" + b.places + "}"));
							return c
						}, !0),
						f = e.buildGroupRE(b.exponent, function(a) {
							return a ? "([eE]" + c._integerRegexp({
								signed: b.eSigned
							}) + ")" : ""
						}),
						g = g + a;
					a && (g = "(?:(?:" + g + ")|(?:" + a + "))");
					return g + f
				};
				c._integerRegexp = function(b) {
					b = b || {};
					if (!("signed" in b)) b.signed = [!0, !1];
					if ("separator" in b) {
						if (!("groupSize" in b)) b.groupSize = 3
					} else b.separator = "";
					var c = e.buildGroupRE(b.signed, function(a) {
							return a ? "[-+]" : ""
						}, !0),
						a = e.buildGroupRE(b.separator, function(a) {
							if (!a) return "(?:\\d+)";
							a = e.escapeString(a);
							" " == a ? a = "\\s" : "\u00a0" == a && (a = "\\s\\xa0");
							var c = b.groupSize,
								g = b.groupSize2;
							return g ? (a = "(?:0|[1-9]\\d{0," + (g - 1) + "}(?:[" + a + "]\\d{" + g + "})*[" + a + "]\\d{" + c + "})", 0 < c - g ? "(?:" + a + "|(?:0|[1-9]\\d{0," + (c - 1) + "}))" : a) : "(?:0|[1-9]\\d{0," + (c - 1) + "}(?:[" + a + "]\\d{" + c + "})*)"
						}, !0);
					return c + a
				};
				return c
			})
		},
		"dijit/form/RangeBoundTextBox": function() {
			define(["dojo/_base/declare", "dojo/i18n", "./MappedTextBox"], function(f, k, h) {
				return f("dijit.form.RangeBoundTextBox", h, {
					rangeMessage: "",
					rangeCheck: function(f, e) {
						return ("min" in
							e ? 0 <= this.compare(f, e.min) : !0) && ("max" in e ? 0 >= this.compare(f, e.max) : !0)
					},
					isInRange: function() {
						return this.rangeCheck(this.get("value"), this.constraints)
					},
					_isDefinitelyOutOfRange: function() {
						var f = this.get("value");
						if (null == f) return !1;
						var e = !1;
						if ("min" in this.constraints) e = this.constraints.min, e = 0 > this.compare(f, "number" == typeof e && 0 <= e && 0 != f ? 0 : e);
						if (!e && "max" in this.constraints) e = this.constraints.max, e = 0 < this.compare(f, "number" != typeof e || 0 < e ? e : 0);
						return e
					},
					_isValidSubset: function() {
						return this.inherited(arguments) &&
							!this._isDefinitelyOutOfRange()
					},
					isValid: function(f) {
						return this.inherited(arguments) && (this._isEmpty(this.textbox.value) && !this.required || this.isInRange(f))
					},
					getErrorMessage: function(f) {
						var e = this.get("value");
						return null != e && "" !== e && ("number" != typeof e || !isNaN(e)) && !this.isInRange(f) ? this.rangeMessage : this.inherited(arguments)
					},
					postMixInProperties: function() {
						this.inherited(arguments);
						if (!this.rangeMessage) this.messages = k.getLocalization("dijit.form", "validate", this.lang), this.rangeMessage = this.messages.rangeMessage
					},
					_setConstraintsAttr: function(f) {
						this.inherited(arguments);
						this.focusNode && (void 0 !== this.constraints.min ? this.focusNode.setAttribute("aria-valuemin", this.constraints.min) : this.focusNode.removeAttribute("aria-valuemin"), void 0 !== this.constraints.max ? this.focusNode.setAttribute("aria-valuemax", this.constraints.max) : this.focusNode.removeAttribute("aria-valuemax"))
					},
					_setValueAttr: function(f, e) {
						this.focusNode.setAttribute("aria-valuenow", f);
						this.inherited(arguments)
					},
					applyTextDir: function() {}
				})
			})
		},
		"dijit/form/MappedTextBox": function() {
			define(["dojo/_base/declare",
				"dojo/dom-construct", "./ValidationTextBox"
			], function(f, k, h) {
				return f("dijit.form.MappedTextBox", h, {
					postMixInProperties: function() {
						this.inherited(arguments);
						this.nameAttrSetting = ""
					},
					_setNameAttr: null,
					serialize: function(f) {
						return f.toString ? f.toString() : ""
					},
					toString: function() {
						var f = this.filter(this.get("value"));
						return null != f ? "string" == typeof f ? f : this.serialize(f, this.constraints) : ""
					},
					validate: function() {
						this.valueNode.value = this.toString();
						return this.inherited(arguments)
					},
					buildRendering: function() {
						this.inherited(arguments);
						this.valueNode = k.place("<input type='hidden'" + (this.name ? ' name="' + this.name.replace(/"/g, "&quot;") + '"' : "") + "/>", this.textbox, "after")
					},
					reset: function() {
						this.valueNode.value = "";
						this.inherited(arguments)
					}
				})
			})
		},
		"dijit/form/ValidationTextBox": function() {
			define("dojo/_base/declare,dojo/_base/kernel,dojo/i18n,./TextBox,../Tooltip,dojo/text!./templates/ValidationTextBox.html,dojo/i18n!./nls/validate".split(","), function(f, k, h, j, e, c) {
				var i;
				return i = f("dijit.form.ValidationTextBox", j, {
					templateString: c,
					required: !1,
					promptMessage: "",
					invalidMessage: "$_unset_$",
					missingMessage: "$_unset_$",
					message: "",
					constraints: {},
					pattern: ".*",
					regExp: "",
					regExpGen: function() {},
					state: "",
					tooltipPosition: [],
					_deprecateRegExp: function(b, c) {
						c != i.prototype[b] && (k.deprecated("ValidationTextBox id=" + this.id + ", set('" + b + "', ...) is deprecated.  Use set('pattern', ...) instead.", "", "2.0"), this.set("pattern", c))
					},
					_setRegExpGenAttr: function(b) {
						this._deprecateRegExp("regExpGen", b);
						this.regExpGen = this._getPatternAttr
					},
					_setRegExpAttr: function(b) {
						this._deprecateRegExp("regExp",
							b)
					},
					_setValueAttr: function() {
						this.inherited(arguments);
						this.validate(this.focused)
					},
					validator: function(b, c) {
						return RegExp("^(?:" + this._getPatternAttr(c) + ")" + (this.required ? "" : "?") + "$").test(b) && (!this.required || !this._isEmpty(b)) && (this._isEmpty(b) || void 0 !== this.parse(b, c))
					},
					_isValidSubset: function() {
						return 0 == this.textbox.value.search(this._partialre)
					},
					isValid: function() {
						return this.validator(this.textbox.value, this.constraints)
					},
					_isEmpty: function(b) {
						return (this.trim ? /^\s*$/ : /^$/).test(b)
					},
					getErrorMessage: function() {
						var b =
							"$_unset_$" == this.invalidMessage ? this.messages.invalidMessage : !this.invalidMessage ? this.promptMessage : this.invalidMessage,
							c = "$_unset_$" == this.missingMessage ? this.messages.missingMessage : !this.missingMessage ? b : this.missingMessage;
						return this.required && this._isEmpty(this.textbox.value) ? c : b
					},
					getPromptMessage: function() {
						return this.promptMessage
					},
					_maskValidSubsetError: !0,
					validate: function(b) {
						var c = "",
							a = this.disabled || this.isValid(b);
						if (a) this._maskValidSubsetError = !0;
						var e = this._isEmpty(this.textbox.value),
							d = !a && b && this._isValidSubset();
						this._set("state", a ? "" : ((!this._hasBeenBlurred || b) && e || d) && this._maskValidSubsetError ? "Incomplete" : "Error");
						this.focusNode.setAttribute("aria-invalid", a ? "false" : "true");
						"Error" == this.state ? (this._maskValidSubsetError = b && d, c = this.getErrorMessage(b)) : "Incomplete" == this.state ? (c = this.getPromptMessage(b), this._maskValidSubsetError = !this._hasBeenBlurred || b) : e && (c = this.getPromptMessage(b));
						this.set("message", c);
						return a
					},
					displayMessage: function(b) {
						b && this.focused ? e.show(b,
							this.domNode, this.tooltipPosition, !this.isLeftToRight()) : e.hide(this.domNode)
					},
					_refreshState: function() {
						this._created && this.validate(this.focused);
						this.inherited(arguments)
					},
					constructor: function() {
						this.constraints = {};
						this.baseClass += " dijitValidationTextBox"
					},
					startup: function() {
						this.inherited(arguments);
						this._refreshState()
					},
					_setConstraintsAttr: function(b) {
						if (!b.locale && this.lang) b.locale = this.lang;
						this._set("constraints", b);
						this._refreshState()
					},
					_setPatternAttr: function(b) {
						this._set("pattern", b)
					},
					_getPatternAttr: function(b) {
						var c = this.pattern;
						"function" == (typeof c).toLowerCase() && (c = this.pattern(b || this.constraints));
						if (c != this._lastRegExp) {
							var a = "";
							this._lastRegExp = c;
							".*" != c && c.replace(/\\.|\[\]|\[.*?[^\\]{1}\]|\{.*?\}|\(\?[=:!]|./g, function(b) {
								switch (b.charAt(0)) {
									case "{":
									case "+":
									case "?":
									case "*":
									case "^":
									case "$":
									case "|":
									case "(":
										a += b;
										break;
									case ")":
										a += "|$)";
										break;
									default:
										a += "(?:" + b + "|$)"
								}
							});
							try {
								"".search(a)
							} catch (e) {
								a = this.pattern
							}
							this._partialre = "^(?:" + a + ")$"
						}
						return c
					},
					postMixInProperties: function() {
						this.inherited(arguments);
						this.messages = h.getLocalization("dijit.form", "validate", this.lang);
						this._setConstraintsAttr(this.constraints)
					},
					_setDisabledAttr: function(b) {
						this.inherited(arguments);
						this._refreshState()
					},
					_setRequiredAttr: function(b) {
						this._set("required", b);
						this.focusNode.setAttribute("aria-required", b);
						this._refreshState()
					},
					_setMessageAttr: function(b) {
						this._set("message", b);
						this.displayMessage(b)
					},
					reset: function() {
						this._maskValidSubsetError = !0;
						this.inherited(arguments)
					},
					_onBlur: function() {
						this.displayMessage("");
						this.inherited(arguments)
					}
				})
			})
		},
		"url:dijit/form/templates/ValidationTextBox.html": '<div class="dijit dijitReset dijitInline dijitLeft"\n\tid="widget_${id}" role="presentation"\n\t><div class=\'dijitReset dijitValidationContainer\'\n\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t/></div\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class="dijitReset dijitInputInner" data-dojo-attach-point=\'textbox,focusNode\' autocomplete="off"\n\t\t\t${!nameAttrSetting} type=\'${type}\'\n\t/></div\n></div>\n',
		"dijit/form/NumberSpinner": function() {
			define(["dojo/_base/declare", "dojo/_base/event", "dojo/keys", "./_Spinner", "./NumberTextBox"], function(f, k, h, j, e) {
				return f("dijit.form.NumberSpinner", [j, e.Mixin], {
					adjust: function(c, e) {
						var b = this.constraints,
							g = isNaN(c),
							a = !isNaN(b.max),
							f = !isNaN(b.min);
						g && 0 != e && (c = 0 < e ? f ? b.min : a ? b.max : 0 : a ? this.constraints.max : f ? b.min : 0);
						var d = c + e;
						if (g || isNaN(d)) return c;
						if (a && d > b.max) d = b.max;
						if (f && d < b.min) d = b.min;
						return d
					},
					_onKeyPress: function(c) {
						if ((c.charOrCode == h.HOME || c.charOrCode ==
								h.END) && !c.ctrlKey && !c.altKey && !c.metaKey && "undefined" != typeof this.get("value")) {
							var e = this.constraints[c.charOrCode == h.HOME ? "min" : "max"];
							"number" == typeof e && this._setValueAttr(e, !1);
							k.stop(c)
						}
					}
				})
			})
		},
		"dijit/form/_Spinner": function() {
			define("dojo/_base/declare,dojo/_base/event,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/mouse,../typematic,./RangeBoundTextBox,dojo/text!./templates/Spinner.html,./_TextBoxMixin".split(","), function(f, k, h, j, e, c, i, b, g, a) {
				return f("dijit.form._Spinner", b, {
					defaultTimeout: 500,
					minimumTimeout: 10,
					timeoutChangeRate: 0.9,
					smallDelta: 1,
					largeDelta: 10,
					templateString: g,
					baseClass: "dijitTextBox dijitSpinner",
					cssStateNodes: {
						upArrowNode: "dijitUpArrowButton",
						downArrowNode: "dijitDownArrowButton"
					},
					adjust: function(a) {
						return a
					},
					_arrowPressed: function(b, c, e) {
						!this.disabled && !this.readOnly && (this._setValueAttr(this.adjust(this.get("value"), c * e), !1), a.selectInputText(this.textbox, this.textbox.value.length))
					},
					_arrowReleased: function() {
						this._wheelTimer = null
					},
					_typematicCallback: function(a, b, c) {
						var e =
							this.smallDelta;
						if (b == this.textbox) b = c.charOrCode, e = b == h.PAGE_UP || b == h.PAGE_DOWN ? this.largeDelta : this.smallDelta, b = b == h.UP_ARROW || b == h.PAGE_UP ? this.upArrowNode : this.downArrowNode; - 1 == a ? this._arrowReleased(b) : this._arrowPressed(b, b == this.upArrowNode ? 1 : -1, e)
					},
					_wheelTimer: null,
					_mouseWheeled: function(a) {
						k.stop(a);
						var b = a.wheelDelta / 120;
						Math.floor(b) != b && (b = 0 < a.wheelDelta ? 1 : -1);
						a = a.detail ? -1 * a.detail : b;
						if (0 !== a) {
							var c = this[0 < a ? "upArrowNode" : "downArrowNode"];
							this._arrowPressed(c, a, this.smallDelta);
							this._wheelTimer &&
								this._wheelTimer.remove();
							this._wheelTimer = this.defer(function() {
								this._arrowReleased(c)
							}, 50)
						}
					},
					postCreate: function() {
						this.inherited(arguments);
						this.connect(this.domNode, c.wheel, "_mouseWheeled");
						this.own(i.addListener(this.upArrowNode, this.textbox, {
							charOrCode: h.UP_ARROW,
							ctrlKey: !1,
							altKey: !1,
							shiftKey: !1,
							metaKey: !1
						}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), i.addListener(this.downArrowNode, this.textbox, {
							charOrCode: h.DOWN_ARROW,
							ctrlKey: !1,
							altKey: !1,
							shiftKey: !1,
							metaKey: !1
						}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), i.addListener(this.upArrowNode, this.textbox, {
							charOrCode: h.PAGE_UP,
							ctrlKey: !1,
							altKey: !1,
							shiftKey: !1,
							metaKey: !1
						}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout), i.addListener(this.downArrowNode, this.textbox, {
							charOrCode: h.PAGE_DOWN,
							ctrlKey: !1,
							altKey: !1,
							shiftKey: !1,
							metaKey: !1
						}, this, "_typematicCallback", this.timeoutChangeRate, this.defaultTimeout, this.minimumTimeout))
					}
				})
			})
		},
		"url:dijit/form/templates/Spinner.html": '<div class="dijit dijitReset dijitInline dijitLeft"\n\tid="widget_${id}" role="presentation"\n\t><div class="dijitReset dijitButtonNode dijitSpinnerButtonContainer"\n\t\t><input class="dijitReset dijitInputField dijitSpinnerButtonInner" type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t/><div class="dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitUpArrowButton"\n\t\t\tdata-dojo-attach-point="upArrowNode"\n\t\t\t><div class="dijitArrowButtonInner"\n\t\t\t\t><input class="dijitReset dijitInputField" value="&#9650; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/></div\n\t\t></div\n\t\t><div class="dijitReset dijitLeft dijitButtonNode dijitArrowButton dijitDownArrowButton"\n\t\t\tdata-dojo-attach-point="downArrowNode"\n\t\t\t><div class="dijitArrowButtonInner"\n\t\t\t\t><input class="dijitReset dijitInputField" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t\t${_buttonInputDisabled}\n\t\t\t/></div\n\t\t></div\n\t></div\n\t><div class=\'dijitReset dijitValidationContainer\'\n\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t/></div\n\t><div class="dijitReset dijitInputField dijitInputContainer"\n\t\t><input class=\'dijitReset dijitInputInner\' data-dojo-attach-point="textbox,focusNode" type="${type}" data-dojo-attach-event="onkeypress:_onKeyPress"\n\t\t\trole="spinbutton" autocomplete="off" ${!nameAttrSetting}\n\t/></div\n></div>\n',
		"dojox/widget/ColorPicker": function() {
			define("dojo/_base/kernel,dojo/_base/declare,dojo/_base/lang,dojo/_base/array,dojo/_base/html,dojo/_base/connect,dojo/_base/sniff,dojo/_base/window,dojo/_base/event,dojo/dom,dojo/dom-class,dojo/keys,dojo/fx,dojo/dnd/move,dijit/registry,dijit/_base/focus,dijit/form/_FormWidget,dijit/typematic,dojox/color,dojo/i18n,dojo/i18n!./nls/ColorPicker,dojo/i18n!dojo/cldr/nls/number,dojo/text!./ColorPicker/ColorPicker.html".split(","), function(f, k, h, j, e, c, i, b, g, a, l, d, p, m,
				n, o, r, q, v, s, t, u, y) {
				f.experimental("dojox.widget.ColorPicker");
				return k("dojox.widget.ColorPicker", r, {
					showRgb: !0,
					showHsv: !0,
					showHex: !0,
					webSafe: !0,
					animatePoint: !0,
					slideDuration: 250,
					liveUpdate: !1,
					PICKER_HUE_H: 150,
					PICKER_SAT_VAL_H: 150,
					PICKER_SAT_VAL_W: 150,
					PICKER_HUE_SELECTOR_H: 8,
					PICKER_SAT_SELECTOR_H: 10,
					PICKER_SAT_SELECTOR_W: 10,
					value: "#ffffff",
					_underlay: f.moduleUrl("dojox.widget", "ColorPicker/images/underlay.png"),
					_hueUnderlay: f.moduleUrl("dojox.widget", "ColorPicker/images/hue.png"),
					_pickerPointer: f.moduleUrl("dojox.widget",
						"ColorPicker/images/pickerPointer.png"),
					_huePickerPointer: f.moduleUrl("dojox.widget", "ColorPicker/images/hueHandle.png"),
					_huePickerPointerAlly: f.moduleUrl("dojox.widget", "ColorPicker/images/hueHandleA11y.png"),
					templateString: y,
					postMixInProperties: function() {
						if (l.contains(b.body(), "dijit_a11y")) this._huePickerPointer = this._huePickerPointerAlly;
						this._uId = n.getUniqueId(this.id);
						h.mixin(this, s.getLocalization("dojox.widget", "ColorPicker"));
						h.mixin(this, s.getLocalization("dojo.cldr", "number"));
						this.inherited(arguments)
					},
					postCreate: function() {
						this.inherited(arguments);
						if (7 > i("ie")) this.colorUnderlay.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this._underlay + "', sizingMethod='scale')", this.colorUnderlay.src = this._blankGif.toString();
						if (!this.showRgb) this.rgbNode.style.visibility = "hidden";
						if (!this.showHsv) this.hsvNode.style.visibility = "hidden";
						if (!this.showHex) this.hexNode.style.visibility = "hidden";
						if (!this.webSafe) this.safePreviewNode.style.visibility = "hidden"
					},
					startup: function() {
						if (!this._started) this._started = !0, this.set("value", this.value), this._mover = new m.boxConstrainedMoveable(this.cursorNode, {
								box: {
									t: -(this.PICKER_SAT_SELECTOR_H / 2),
									l: -(this.PICKER_SAT_SELECTOR_W / 2),
									w: this.PICKER_SAT_VAL_W,
									h: this.PICKER_SAT_VAL_H
								}
							}), this._hueMover = new m.boxConstrainedMoveable(this.hueCursorNode, {
								box: {
									t: -(this.PICKER_HUE_SELECTOR_H / 2),
									l: 0,
									w: 0,
									h: this.PICKER_HUE_H
								}
							}), this._subs = [], this._subs.push(c.subscribe("/dnd/move/stop", h.hitch(this, "_clearTimer"))), this._subs.push(c.subscribe("/dnd/move/start", h.hitch(this, "_setTimer"))),
							this._keyListeners = [], this._connects.push(q.addKeyListener(this.hueCursorNode, {
								charOrCode: d.UP_ARROW,
								shiftKey: !1,
								metaKey: !1,
								ctrlKey: !1,
								altKey: !1
							}, this, h.hitch(this, this._updateHueCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.hueCursorNode, {
								charOrCode: d.DOWN_ARROW,
								shiftKey: !1,
								metaKey: !1,
								ctrlKey: !1,
								altKey: !1
							}, this, h.hitch(this, this._updateHueCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {
									charOrCode: d.UP_ARROW,
									shiftKey: !1,
									metaKey: !1,
									ctrlKey: !1,
									altKey: !1
								}, this,
								h.hitch(this, this._updateCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {
								charOrCode: d.DOWN_ARROW,
								shiftKey: !1,
								metaKey: !1,
								ctrlKey: !1,
								altKey: !1
							}, this, h.hitch(this, this._updateCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {
								charOrCode: d.LEFT_ARROW,
								shiftKey: !1,
								metaKey: !1,
								ctrlKey: !1,
								altKey: !1
							}, this, h.hitch(this, this._updateCursorNode), 25, 25)), this._connects.push(q.addKeyListener(this.cursorNode, {
								charOrCode: d.RIGHT_ARROW,
								shiftKey: !1,
								metaKey: !1,
								ctrlKey: !1,
								altKey: !1
							}, this, h.hitch(this, this._updateCursorNode), 25, 25))
					},
					_setValueAttr: function(a) {
						this._started && this.setColor(a, !0)
					},
					setColor: function(a, b) {
						a = v.fromString(a);
						this._updatePickerLocations(a);
						this._updateColorInputs(a);
						this._updateValue(a, b)
					},
					_setTimer: function(b) {
						if (b.node == this.cursorNode) o.focus(b.node), a.setSelectable(this.domNode, !1), this._timer = setInterval(h.hitch(this, "_updateColor"), 45)
					},
					_clearTimer: function() {
						if (this._timer) clearInterval(this._timer), this._timer = null, this.onChange(this.value),
							a.setSelectable(this.domNode, !0)
					},
					_setHue: function(a) {
						e.style(this.colorUnderlay, "backgroundColor", v.fromHsv(a, 100, 100).toHex())
					},
					_updateHueCursorNode: function(a, b, c) {
						if (-1 !== a) {
							var a = e.style(this.hueCursorNode, "top"),
								b = this.PICKER_HUE_SELECTOR_H / 2,
								a = a + b,
								g = !1;
							c.charOrCode == d.UP_ARROW ? 0 < a && (a -= 1, g = !0) : c.charOrCode == d.DOWN_ARROW && a < this.PICKER_HUE_H && (a += 1, g = !0);
							g && e.style(this.hueCursorNode, "top", a - b + "px")
						} else this._updateColor(!0)
					},
					_updateCursorNode: function(a, b, c) {
						var b = this.PICKER_SAT_SELECTOR_H /
							2,
							g = this.PICKER_SAT_SELECTOR_W / 2;
						if (-1 !== a) {
							var a = e.style(this.cursorNode, "top"),
								f = e.style(this.cursorNode, "left"),
								a = a + b,
								f = f + g,
								i = !1;
							c.charOrCode == d.UP_ARROW ? 0 < a && (a -= 1, i = !0) : c.charOrCode == d.DOWN_ARROW ? a < this.PICKER_SAT_VAL_H && (a += 1, i = !0) : c.charOrCode == d.LEFT_ARROW ? 0 < f && (f -= 1, i = !0) : c.charOrCode == d.RIGHT_ARROW && f < this.PICKER_SAT_VAL_W && (f += 1, i = !0);
							i && (f -= g, e.style(this.cursorNode, "top", a - b + "px"), e.style(this.cursorNode, "left", f + "px"))
						} else this._updateColor(!0)
					},
					_updateColor: function() {
						var a = this.PICKER_HUE_SELECTOR_H /
							2,
							b = this.PICKER_SAT_SELECTOR_H / 2,
							c = this.PICKER_SAT_SELECTOR_W / 2,
							a = e.style(this.hueCursorNode, "top") + a,
							b = e.style(this.cursorNode, "top") + b,
							c = e.style(this.cursorNode, "left") + c,
							a = Math.round(360 - 360 * (a / this.PICKER_HUE_H)),
							c = v.fromHsv(a, 100 * (c / this.PICKER_SAT_VAL_W), 100 - 100 * (b / this.PICKER_SAT_VAL_H));
						this._updateColorInputs(c);
						this._updateValue(c, !0);
						a != this._hue && this._setHue(a)
					},
					_colorInputChange: function(a) {
						var b, c = !1;
						switch (a.target) {
							case this.hexCode:
								b = v.fromString(a.target.value);
								c = !0;
								break;
							case this.Rval:
							case this.Gval:
							case this.Bval:
								b =
									v.fromArray([this.Rval.value, this.Gval.value, this.Bval.value]);
								c = !0;
								break;
							case this.Hval:
							case this.Sval:
							case this.Vval:
								b = v.fromHsv(this.Hval.value, this.Sval.value, this.Vval.value), c = !0
						}
						c && (this._updatePickerLocations(b), this._updateColorInputs(b), this._updateValue(b, !0))
					},
					_updateValue: function(a, b) {
						var c = a.toHex();
						this.value = this.valueNode.value = c;
						if (b && (!this._timer || this.liveUpdate)) this.onChange(c)
					},
					_updatePickerLocations: function(a) {
						var b = this.PICKER_HUE_SELECTOR_H / 2,
							c = this.PICKER_SAT_SELECTOR_H /
							2,
							d = this.PICKER_SAT_SELECTOR_W / 2,
							a = a.toHsv(),
							b = Math.round(this.PICKER_HUE_H - a.h / 360 * this.PICKER_HUE_H) - b,
							d = Math.round(a.s / 100 * this.PICKER_SAT_VAL_W) - d,
							c = Math.round(this.PICKER_SAT_VAL_H - a.v / 100 * this.PICKER_SAT_VAL_H) - c;
						this.animatePoint ? (p.slideTo({
							node: this.hueCursorNode,
							duration: this.slideDuration,
							top: b,
							left: 0
						}).play(), p.slideTo({
							node: this.cursorNode,
							duration: this.slideDuration,
							top: c,
							left: d
						}).play()) : (e.style(this.hueCursorNode, "top", b + "px"), e.style(this.cursorNode, {
							left: d + "px",
							top: c + "px"
						}));
						a.h !=
							this._hue && this._setHue(a.h)
					},
					_updateColorInputs: function(a) {
						var b = a.toHex();
						if (this.showRgb) this.Rval.value = a.r, this.Gval.value = a.g, this.Bval.value = a.b;
						if (this.showHsv) a = a.toHsv(), this.Hval.value = Math.round(a.h), this.Sval.value = Math.round(a.s), this.Vval.value = Math.round(a.v);
						if (this.showHex) this.hexCode.value = b;
						this.previewNode.style.backgroundColor = b;
						if (this.webSafe) this.safePreviewNode.style.backgroundColor = b
					},
					_setHuePoint: function(a) {
						a = a.layerY - this.PICKER_HUE_SELECTOR_H / 2;
						this.animatePoint ? p.slideTo({
							node: this.hueCursorNode,
							duration: this.slideDuration,
							top: a,
							left: 0,
							onEnd: h.hitch(this, function() {
								this._updateColor(!0);
								o.focus(this.hueCursorNode)
							})
						}).play() : (e.style(this.hueCursorNode, "top", a + "px"), this._updateColor(!1))
					},
					_setPoint: function(a) {
						var b = a.layerY - this.PICKER_SAT_SELECTOR_H / 2,
							c = a.layerX - this.PICKER_SAT_SELECTOR_W / 2;
						a && o.focus(a.target);
						this.animatePoint ? p.slideTo({
								node: this.cursorNode,
								duration: this.slideDuration,
								top: b,
								left: c,
								onEnd: h.hitch(this, function() {
									this._updateColor(!0);
									o.focus(this.cursorNode)
								})
							}).play() :
							(e.style(this.cursorNode, {
								left: c + "px",
								top: b + "px"
							}), this._updateColor(!1))
					},
					_handleKey: function() {},
					focus: function() {
						this.focused || o.focus(this.focusNode)
					},
					_stopDrag: function(a) {
						g.stop(a)
					},
					destroy: function() {
						this.inherited(arguments);
						j.forEach(this._subs, function(a) {
							c.unsubscribe(a)
						});
						delete this._subs
					}
				})
			})
		},
		"dojo/fx": function() {
			define("./_base/lang,./Evented,./_base/kernel,./_base/array,./_base/connect,./_base/fx,./dom,./dom-style,./dom-geometry,./ready,require".split(","), function(f, k, h, j, e, c, i,
				b, g, a, l) {
				h.isAsync || a(0, function() {
					l(["./fx/Toggler"])
				});
				var h = h.fx = {},
					a = {
						_fire: function(a, b) {
							this[a] && this[a].apply(this, b || []);
							return this
						}
					},
					d = function(a) {
						this._index = -1;
						this._animations = a || [];
						this._current = this._onAnimateCtx = this._onEndCtx = null;
						this.duration = 0;
						j.forEach(this._animations, function(a) {
							this.duration += a.duration;
							a.delay && (this.duration += a.delay)
						}, this)
					};
				d.prototype = new k;
				f.extend(d, {
					_onAnimate: function() {
						this._fire("onAnimate", arguments)
					},
					_onEnd: function() {
						e.disconnect(this._onAnimateCtx);
						e.disconnect(this._onEndCtx);
						this._onAnimateCtx = this._onEndCtx = null;
						this._index + 1 == this._animations.length ? this._fire("onEnd") : (this._current = this._animations[++this._index], this._onAnimateCtx = e.connect(this._current, "onAnimate", this, "_onAnimate"), this._onEndCtx = e.connect(this._current, "onEnd", this, "_onEnd"), this._current.play(0, !0))
					},
					play: function(a, b) {
						if (!this._current) this._current = this._animations[this._index = 0];
						if (!b && "playing" == this._current.status()) return this;
						var c = e.connect(this._current,
								"beforeBegin", this,
								function() {
									this._fire("beforeBegin")
								}),
							d = e.connect(this._current, "onBegin", this, function(a) {
								this._fire("onBegin", arguments)
							}),
							g = e.connect(this._current, "onPlay", this, function(a) {
								this._fire("onPlay", arguments);
								e.disconnect(c);
								e.disconnect(d);
								e.disconnect(g)
							});
						this._onAnimateCtx && e.disconnect(this._onAnimateCtx);
						this._onAnimateCtx = e.connect(this._current, "onAnimate", this, "_onAnimate");
						this._onEndCtx && e.disconnect(this._onEndCtx);
						this._onEndCtx = e.connect(this._current, "onEnd", this,
							"_onEnd");
						this._current.play.apply(this._current, arguments);
						return this
					},
					pause: function() {
						if (this._current) {
							var a = e.connect(this._current, "onPause", this, function(b) {
								this._fire("onPause", arguments);
								e.disconnect(a)
							});
							this._current.pause()
						}
						return this
					},
					gotoPercent: function(a, b) {
						this.pause();
						var c = this.duration * a;
						this._current = null;
						j.some(this._animations, function(a) {
							if (a.duration <= c) return this._current = a, !0;
							c -= a.duration;
							return !1
						});
						this._current && this._current.gotoPercent(c / this._current.duration, b);
						return this
					},
					stop: function(a) {
						if (this._current) {
							if (a) {
								for (; this._index + 1 < this._animations.length; ++this._index) this._animations[this._index].stop(!0);
								this._current = this._animations[this._index]
							}
							var b = e.connect(this._current, "onStop", this, function(a) {
								this._fire("onStop", arguments);
								e.disconnect(b)
							});
							this._current.stop()
						}
						return this
					},
					status: function() {
						return this._current ? this._current.status() : "stopped"
					},
					destroy: function() {
						this._onAnimateCtx && e.disconnect(this._onAnimateCtx);
						this._onEndCtx && e.disconnect(this._onEndCtx)
					}
				});
				f.extend(d, a);
				h.chain = function(a) {
					return new d(a)
				};
				var p = function(a) {
					this._animations = a || [];
					this._connects = [];
					this.duration = this._finished = 0;
					j.forEach(a, function(a) {
						var b = a.duration;
						a.delay && (b += a.delay);
						if (this.duration < b) this.duration = b;
						this._connects.push(e.connect(a, "onEnd", this, "_onEnd"))
					}, this);
					this._pseudoAnimation = new c.Animation({
						curve: [0, 1],
						duration: this.duration
					});
					var b = this;
					j.forEach("beforeBegin,onBegin,onPlay,onAnimate,onPause,onStop,onEnd".split(","), function(a) {
						b._connects.push(e.connect(b._pseudoAnimation,
							a,
							function() {
								b._fire(a, arguments)
							}))
					})
				};
				f.extend(p, {
					_doAction: function(a, b) {
						j.forEach(this._animations, function(c) {
							c[a].apply(c, b)
						});
						return this
					},
					_onEnd: function() {
						++this._finished > this._animations.length && this._fire("onEnd")
					},
					_call: function(a, b) {
						var c = this._pseudoAnimation;
						c[a].apply(c, b)
					},
					play: function(a, b) {
						this._finished = 0;
						this._doAction("play", arguments);
						this._call("play", arguments);
						return this
					},
					pause: function() {
						this._doAction("pause", arguments);
						this._call("pause", arguments);
						return this
					},
					gotoPercent: function(a,
						b) {
						var c = this.duration * a;
						j.forEach(this._animations, function(a) {
							a.gotoPercent(a.duration < c ? 1 : c / a.duration, b)
						});
						this._call("gotoPercent", arguments);
						return this
					},
					stop: function(a) {
						this._doAction("stop", arguments);
						this._call("stop", arguments);
						return this
					},
					status: function() {
						return this._pseudoAnimation.status()
					},
					destroy: function() {
						j.forEach(this._connects, e.disconnect)
					}
				});
				f.extend(p, a);
				h.combine = function(a) {
					return new p(a)
				};
				h.wipeIn = function(a) {
					var d = a.node = i.byId(a.node),
						g = d.style,
						h, a = c.animateProperty(f.mixin({
							properties: {
								height: {
									start: function() {
										h =
											g.overflow;
										g.overflow = "hidden";
										if ("hidden" == g.visibility || "none" == g.display) return g.height = "1px", g.display = "", g.visibility = "", 1;
										var a = b.get(d, "height");
										return Math.max(a, 1)
									},
									end: function() {
										return d.scrollHeight
									}
								}
							}
						}, a)),
						j = function() {
							g.height = "auto";
							g.overflow = h
						};
					e.connect(a, "onStop", j);
					e.connect(a, "onEnd", j);
					return a
				};
				h.wipeOut = function(a) {
					var b = (a.node = i.byId(a.node)).style,
						d, a = c.animateProperty(f.mixin({
							properties: {
								height: {
									end: 1
								}
							}
						}, a));
					e.connect(a, "beforeBegin", function() {
						d = b.overflow;
						b.overflow =
							"hidden";
						b.display = ""
					});
					var g = function() {
						b.overflow = d;
						b.height = "auto";
						b.display = "none"
					};
					e.connect(a, "onStop", g);
					e.connect(a, "onEnd", g);
					return a
				};
				h.slideTo = function(a) {
					var d = null,
						h = null,
						j = function(a) {
							return function() {
								var c = b.getComputedStyle(a),
									e = c.position;
								d = "absolute" == e ? a.offsetTop : parseInt(c.top) || 0;
								h = "absolute" == e ? a.offsetLeft : parseInt(c.left) || 0;
								if ("absolute" != e && "relative" != e) c = g.position(a, !0), d = c.y, h = c.x, a.style.position = "absolute", a.style.top = d + "px", a.style.left = h + "px"
							}
						}(a.node = i.byId(a.node));
					j();
					a = c.animateProperty(f.mixin({
						properties: {
							top: a.top || 0,
							left: a.left || 0
						}
					}, a));
					e.connect(a, "beforeBegin", a, j);
					return a
				};
				return h
			})
		},
		"dijit/_base/focus": function() {
			define("dojo/_base/array,dojo/dom,dojo/_base/lang,dojo/topic,dojo/_base/window,../focus,../main".split(","), function(f, k, h, j, e, c, i) {
				c.focus = function(b) {
					if (b) {
						var g = "node" in b ? b.node : b,
							a = b.bookmark,
							b = b.openedForWindow,
							f = a ? a.isCollapsed : !1;
						if (g) {
							var d = "iframe" == g.tagName.toLowerCase() ? g.contentWindow : g;
							if (d && d.focus) try {
								d.focus()
							} catch (h) {}
							c._onFocusNode(g)
						}
						if (a &&
							e.withGlobal(b || e.global, i.isCollapsed) && !f) {
							b && b.focus();
							try {
								e.withGlobal(b || e.global, i.moveToBookmark, null, [a])
							} catch (j) {}
						}
					}
				};
				c.watch("curNode", function(b, c, a) {
					i._curFocus = a;
					i._prevFocus = c;
					a && j.publish("focusNode", a)
				});
				c.watch("activeStack", function(b, c, a) {
					i._activeStack = a
				});
				c.on("widget-blur", function(b, c) {
					j.publish("widgetBlur", b, c)
				});
				c.on("widget-focus", function(b, c) {
					j.publish("widgetFocus", b, c)
				});
				h.mixin(i, {
					_curFocus: null,
					_prevFocus: null,
					isCollapsed: function() {
						return i.getBookmark().isCollapsed
					},
					getBookmark: function() {
						var b, g, a = e.doc.selection,
							f = c.curNode;
						if (e.global.getSelection) {
							if (a = e.global.getSelection())
								if (a.isCollapsed) {
									if (b = f ? f.tagName : "")
										if (b = b.toLowerCase(), "textarea" == b || "input" == b && (!f.type || "text" == f.type.toLowerCase())) return a = {
											start: f.selectionStart,
											end: f.selectionEnd,
											node: f,
											pRange: !0
										}, {
											isCollapsed: a.end <= a.start,
											mark: a
										};
									b = {
										isCollapsed: !0
									};
									if (a.rangeCount) b.mark = a.getRangeAt(0).cloneRange()
								} else g = a.getRangeAt(0), b = {
									isCollapsed: !1,
									mark: g.cloneRange()
								}
						} else if (a) {
							b = f ? f.tagName :
								"";
							b = b.toLowerCase();
							if (f && b && ("button" == b || "textarea" == b || "input" == b)) {
								if (a.type && "none" == a.type.toLowerCase()) return {
									isCollapsed: !0,
									mark: null
								};
								g = a.createRange();
								return {
									isCollapsed: g.text && g.text.length ? !1 : !0,
									mark: {
										range: g,
										pRange: !0
									}
								}
							}
							b = {};
							try {
								g = a.createRange(), b.isCollapsed = !("Text" == a.type ? g.htmlText.length : g.length)
							} catch (d) {
								return b.isCollapsed = !0, b
							}
							if ("CONTROL" == a.type.toUpperCase())
								if (g.length) {
									b.mark = [];
									a = 0;
									for (f = g.length; a < f;) b.mark.push(g.item(a++))
								} else b.isCollapsed = !0, b.mark = null;
							else b.mark =
								g.getBookmark()
						}
						return b
					},
					moveToBookmark: function(b) {
						var c = e.doc;
						if (b = b.mark)
							if (e.global.getSelection) {
								if ((c = e.global.getSelection()) && c.removeAllRanges) b.pRange ? (c = b.node, c.selectionStart = b.start, c.selectionEnd = b.end) : (c.removeAllRanges(), c.addRange(b))
							} else if (c.selection && b) {
							var a;
							b.pRange ? a = b.range : h.isArray(b) ? (a = c.body.createControlRange(), f.forEach(b, function(b) {
								a.addElement(b)
							})) : (a = c.body.createTextRange(), a.moveToBookmark(b));
							a.select()
						}
					},
					getFocus: function(b, g) {
						var a = !c.curNode || b && k.isDescendant(c.curNode,
							b.domNode) ? i._prevFocus : c.curNode;
						return {
							node: a,
							bookmark: a && a == c.curNode && e.withGlobal(g || e.global, i.getBookmark),
							openedForWindow: g
						}
					},
					_activeStack: [],
					registerIframe: function(b) {
						return c.registerIframe(b)
					},
					unregisterIframe: function(b) {
						b && b.remove()
					},
					registerWin: function(b, e) {
						return c.registerWin(b, e)
					},
					unregisterWin: function(b) {
						b && b.remove()
					}
				});
				return i
			})
		},
		"dojox/color": function() {
			define(["./color/_base"], function(f) {
				return f
			})
		},
		"dojox/color/_base": function() {
			define(["../main", "dojo/_base/lang", "dojo/_base/Color",
				"dojo/colors"
			], function(f, k, h, j) {
				f = k.getObject("color", !0, f);
				f.Color = h;
				f.blend = h.blendColors;
				f.fromRgb = h.fromRgb;
				f.fromHex = h.fromHex;
				f.fromArray = h.fromArray;
				f.fromString = h.fromString;
				f.greyscale = j.makeGrey;
				k.mixin(f, {
					fromCmy: function(e, c, f) {
						if (k.isArray(e)) c = e[1], f = e[2], e = e[0];
						else if (k.isObject(e)) c = e.m, f = e.y, e = e.c;
						e /= 100;
						c /= 100;
						f /= 100;
						c = 1 - c;
						f = 1 - f;
						return new h({
							r: Math.round(255 * (1 - e)),
							g: Math.round(255 * c),
							b: Math.round(255 * f)
						})
					},
					fromCmyk: function(e, c, f, b) {
						if (k.isArray(e)) c = e[1], f = e[2], b = e[3], e = e[0];
						else if (k.isObject(e)) c = e.m, f = e.y, b = e.b, e = e.c;
						e /= 100;
						c /= 100;
						f /= 100;
						b /= 100;
						e = 1 - Math.min(1, e * (1 - b) + b);
						c = 1 - Math.min(1, c * (1 - b) + b);
						f = 1 - Math.min(1, f * (1 - b) + b);
						return new h({
							r: Math.round(255 * e),
							g: Math.round(255 * c),
							b: Math.round(255 * f)
						})
					},
					fromHsl: function(e, c, f) {
						if (k.isArray(e)) c = e[1], f = e[2], e = e[0];
						else if (k.isObject(e)) c = e.s, f = e.l, e = e.h;
						c /= 100;
						for (f /= 100; 0 > e;) e += 360;
						for (; 360 <= e;) e -= 360;
						var b, g, a;
						120 > e ? (b = (120 - e) / 60, g = e / 60, a = 0) : 240 > e ? (b = 0, g = (240 - e) / 60, a = (e - 120) / 60) : (b = (e - 240) / 60, g = 0, a = (360 - e) / 60);
						b = 2 * c * Math.min(b,
							1) + (1 - c);
						g = 2 * c * Math.min(g, 1) + (1 - c);
						a = 2 * c * Math.min(a, 1) + (1 - c);
						0.5 > f ? (b *= f, g *= f, a *= f) : (b = (1 - f) * b + 2 * f - 1, g = (1 - f) * g + 2 * f - 1, a = (1 - f) * a + 2 * f - 1);
						return new h({
							r: Math.round(255 * b),
							g: Math.round(255 * g),
							b: Math.round(255 * a)
						})
					}
				});
				f.fromHsv = function(e, c, f) {
					if (k.isArray(e)) c = e[1], f = e[2], e = e[0];
					else if (k.isObject(e)) c = e.s, f = e.v, e = e.h;
					360 == e && (e = 0);
					var c = c / 100,
						f = f / 100,
						b, g, a;
					if (0 == c) b = f, a = f, g = f;
					else {
						var j = e / 60,
							e = Math.floor(j),
							d = j - e,
							j = f * (1 - c),
							p = f * (1 - c * d),
							c = f * (1 - c * (1 - d));
						switch (e) {
							case 0:
								b = f;
								g = c;
								a = j;
								break;
							case 1:
								b = p;
								g = f;
								a = j;
								break;
							case 2:
								b = j;
								g = f;
								a = c;
								break;
							case 3:
								b = j;
								g = p;
								a = f;
								break;
							case 4:
								b = c;
								g = j;
								a = f;
								break;
							case 5:
								b = f, g = j, a = p
						}
					}
					return new h({
						r: Math.round(255 * b),
						g: Math.round(255 * g),
						b: Math.round(255 * a)
					})
				};
				k.extend(h, {
					toCmy: function() {
						var e = 1 - this.g / 255,
							c = 1 - this.b / 255;
						return {
							c: Math.round(100 * (1 - this.r / 255)),
							m: Math.round(100 * e),
							y: Math.round(100 * c)
						}
					},
					toCmyk: function() {
						var e, c, f, b = this.r / 255;
						c = this.g / 255;
						f = this.b / 255;
						e = Math.min(1 - b, 1 - c, 1 - f);
						c = (1 - c - e) / (1 - e);
						f = (1 - f - e) / (1 - e);
						return {
							c: Math.round(100 * ((1 - b - e) / (1 - e))),
							m: Math.round(100 *
								c),
							y: Math.round(100 * f),
							b: Math.round(100 * e)
						}
					},
					toHsl: function() {
						var e = this.r / 255,
							c = this.g / 255,
							f = this.b / 255,
							b = Math.min(e, f, c),
							g = Math.max(e, c, f),
							a = g - b,
							h = 0,
							d = 0,
							b = (b + g) / 2;
						0 < b && 1 > b && (d = a / (0.5 > b ? 2 * b : 2 - 2 * b));
						0 < a && (g == e && g != c && (h += (c - f) / a), g == c && g != f && (h += 2 + (f - e) / a), g == f && g != e && (h += 4 + (e - c) / a), h *= 60);
						return {
							h: h,
							s: Math.round(100 * d),
							l: Math.round(100 * b)
						}
					},
					toHsv: function() {
						var e = this.r / 255,
							c = this.g / 255,
							f = this.b / 255,
							b = Math.min(e, f, c),
							g = Math.max(e, c, f),
							b = g - b,
							a = null,
							h = 0 == g ? 0 : b / g;
						0 == h ? a = 0 : (a = e == g ? 60 * (c - f) / b : c == g ? 120 +
							60 * (f - e) / b : 240 + 60 * (e - c) / b, 0 > a && (a += 360));
						return {
							h: a,
							s: Math.round(100 * h),
							v: Math.round(100 * g)
						}
					}
				});
				return f
			})
		},
		"dojox/main": function() {
			define(["dojo/_base/kernel"], function(f) {
				return f.dojox
			})
		},
		"dojo/colors": function() {
			define("dojo/colors", ["./_base/kernel", "./_base/lang", "./_base/Color", "./_base/array"], function(f, k, h, j) {
				var e = {};
				k.setObject("dojo.colors", e);
				var c = function(b, c, a) {
					0 > a && ++a;
					1 < a && --a;
					var e = 6 * a;
					return 1 > e ? b + (c - b) * e : 1 > 2 * a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b
				};
				f.colorFromRgb = h.fromRgb = function(b,
					e) {
					var a = b.toLowerCase().match(/^(rgba?|hsla?)\(([\s\.\-,%0-9]+)\)/);
					if (a) {
						var f = a[2].split(/\s*,\s*/),
							d = f.length,
							a = a[1];
						if ("rgb" == a && 3 == d || "rgba" == a && 4 == d) {
							a = f[0];
							return "%" == a.charAt(a.length - 1) ? (a = j.map(f, function(a) {
								return 2.56 * parseFloat(a)
							}), 4 == d && (a[3] = f[3]), h.fromArray(a, e)) : h.fromArray(f, e)
						}
						if ("hsl" == a && 3 == d || "hsla" == a && 4 == d) {
							var a = (parseFloat(f[0]) % 360 + 360) % 360 / 360,
								i = parseFloat(f[1]) / 100,
								k = parseFloat(f[2]) / 100,
								i = 0.5 >= k ? k * (i + 1) : k + i - k * i,
								k = 2 * k - i,
								a = [256 * c(k, i, a + 1 / 3), 256 * c(k, i, a), 256 * c(k, i, a -
									1 / 3), 1];
							4 == d && (a[3] = f[3]);
							return h.fromArray(a, e)
						}
					}
					return null
				};
				var i = function(b, c, a) {
					b = Number(b);
					return isNaN(b) ? a : b < c ? c : b > a ? a : b
				};
				h.prototype.sanitize = function() {
					this.r = Math.round(i(this.r, 0, 255));
					this.g = Math.round(i(this.g, 0, 255));
					this.b = Math.round(i(this.b, 0, 255));
					this.a = i(this.a, 0, 1);
					return this
				};
				e.makeGrey = h.makeGrey = function(b, c) {
					return h.fromArray([b, b, b, c])
				};
				k.mixin(h.named, {
					aliceblue: [240, 248, 255],
					antiquewhite: [250, 235, 215],
					aquamarine: [127, 255, 212],
					azure: [240, 255, 255],
					beige: [245, 245, 220],
					bisque: [255, 228, 196],
					blanchedalmond: [255, 235, 205],
					blueviolet: [138, 43, 226],
					brown: [165, 42, 42],
					burlywood: [222, 184, 135],
					cadetblue: [95, 158, 160],
					chartreuse: [127, 255, 0],
					chocolate: [210, 105, 30],
					coral: [255, 127, 80],
					cornflowerblue: [100, 149, 237],
					cornsilk: [255, 248, 220],
					crimson: [220, 20, 60],
					cyan: [0, 255, 255],
					darkblue: [0, 0, 139],
					darkcyan: [0, 139, 139],
					darkgoldenrod: [184, 134, 11],
					darkgray: [169, 169, 169],
					darkgreen: [0, 100, 0],
					darkgrey: [169, 169, 169],
					darkkhaki: [189, 183, 107],
					darkmagenta: [139, 0, 139],
					darkolivegreen: [85, 107, 47],
					darkorange: [255, 140, 0],
					darkorchid: [153, 50, 204],
					darkred: [139, 0, 0],
					darksalmon: [233, 150, 122],
					darkseagreen: [143, 188, 143],
					darkslateblue: [72, 61, 139],
					darkslategray: [47, 79, 79],
					darkslategrey: [47, 79, 79],
					darkturquoise: [0, 206, 209],
					darkviolet: [148, 0, 211],
					deeppink: [255, 20, 147],
					deepskyblue: [0, 191, 255],
					dimgray: [105, 105, 105],
					dimgrey: [105, 105, 105],
					dodgerblue: [30, 144, 255],
					firebrick: [178, 34, 34],
					floralwhite: [255, 250, 240],
					forestgreen: [34, 139, 34],
					gainsboro: [220, 220, 220],
					ghostwhite: [248, 248, 255],
					gold: [255, 215, 0],
					goldenrod: [218,
						165, 32
					],
					greenyellow: [173, 255, 47],
					grey: [128, 128, 128],
					honeydew: [240, 255, 240],
					hotpink: [255, 105, 180],
					indianred: [205, 92, 92],
					indigo: [75, 0, 130],
					ivory: [255, 255, 240],
					khaki: [240, 230, 140],
					lavender: [230, 230, 250],
					lavenderblush: [255, 240, 245],
					lawngreen: [124, 252, 0],
					lemonchiffon: [255, 250, 205],
					lightblue: [173, 216, 230],
					lightcoral: [240, 128, 128],
					lightcyan: [224, 255, 255],
					lightgoldenrodyellow: [250, 250, 210],
					lightgray: [211, 211, 211],
					lightgreen: [144, 238, 144],
					lightgrey: [211, 211, 211],
					lightpink: [255, 182, 193],
					lightsalmon: [255, 160,
						122
					],
					lightseagreen: [32, 178, 170],
					lightskyblue: [135, 206, 250],
					lightslategray: [119, 136, 153],
					lightslategrey: [119, 136, 153],
					lightsteelblue: [176, 196, 222],
					lightyellow: [255, 255, 224],
					limegreen: [50, 205, 50],
					linen: [250, 240, 230],
					magenta: [255, 0, 255],
					mediumaquamarine: [102, 205, 170],
					mediumblue: [0, 0, 205],
					mediumorchid: [186, 85, 211],
					mediumpurple: [147, 112, 219],
					mediumseagreen: [60, 179, 113],
					mediumslateblue: [123, 104, 238],
					mediumspringgreen: [0, 250, 154],
					mediumturquoise: [72, 209, 204],
					mediumvioletred: [199, 21, 133],
					midnightblue: [25,
						25, 112
					],
					mintcream: [245, 255, 250],
					mistyrose: [255, 228, 225],
					moccasin: [255, 228, 181],
					navajowhite: [255, 222, 173],
					oldlace: [253, 245, 230],
					olivedrab: [107, 142, 35],
					orange: [255, 165, 0],
					orangered: [255, 69, 0],
					orchid: [218, 112, 214],
					palegoldenrod: [238, 232, 170],
					palegreen: [152, 251, 152],
					paleturquoise: [175, 238, 238],
					palevioletred: [219, 112, 147],
					papayawhip: [255, 239, 213],
					peachpuff: [255, 218, 185],
					peru: [205, 133, 63],
					pink: [255, 192, 203],
					plum: [221, 160, 221],
					powderblue: [176, 224, 230],
					rosybrown: [188, 143, 143],
					royalblue: [65, 105, 225],
					saddlebrown: [139,
						69, 19
					],
					salmon: [250, 128, 114],
					sandybrown: [244, 164, 96],
					seagreen: [46, 139, 87],
					seashell: [255, 245, 238],
					sienna: [160, 82, 45],
					skyblue: [135, 206, 235],
					slateblue: [106, 90, 205],
					slategray: [112, 128, 144],
					slategrey: [112, 128, 144],
					snow: [255, 250, 250],
					springgreen: [0, 255, 127],
					steelblue: [70, 130, 180],
					tan: [210, 180, 140],
					thistle: [216, 191, 216],
					tomato: [255, 99, 71],
					turquoise: [64, 224, 208],
					violet: [238, 130, 238],
					wheat: [245, 222, 179],
					whitesmoke: [245, 245, 245],
					yellowgreen: [154, 205, 50]
				});
				return h
			})
		},
		"url:dojox/widget/ColorPicker/ColorPicker.html": '<table class="dojoxColorPicker" dojoAttachEvent="onkeypress: _handleKey" cellpadding="0" cellspacing="0" role="presentation">\n\t<tr>\n\t\t<td valign="top" class="dojoxColorPickerRightPad">\n\t\t\t<div class="dojoxColorPickerBox">\n\t\t\t\t<\!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. --\>\n\t\t\t\t<img title="${saturationPickerTitle}" alt="${saturationPickerTitle}" class="dojoxColorPickerPoint" src="${_pickerPointer}" tabIndex="0" dojoAttachPoint="cursorNode" style="position: absolute; top: 0px; left: 0px;">\n\t\t\t\t<img role="presentation" alt="" dojoAttachPoint="colorUnderlay" dojoAttachEvent="onclick: _setPoint, onmousedown: _stopDrag" class="dojoxColorPickerUnderlay" src="${_underlay}" ondragstart="return false">\n\t\t\t</div>\n\t\t</td>\n\t\t<td valign="top" class="dojoxColorPickerRightPad">\n\t\t\t<div class="dojoxHuePicker">\n\t\t\t\t<\!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. --\>\n\t\t\t\t<img dojoAttachPoint="hueCursorNode" tabIndex="0" class="dojoxHuePickerPoint" title="${huePickerTitle}" alt="${huePickerTitle}" src="${_huePickerPointer}" style="position: absolute; top: 0px; left: 0px;">\n\t\t\t\t<div class="dojoxHuePickerUnderlay" dojoAttachPoint="hueNode">\n\t\t\t\t    <img role="presentation" alt="" dojoAttachEvent="onclick: _setHuePoint, onmousedown: _stopDrag" src="${_hueUnderlay}">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</td>\n\t\t<td valign="top">\n\t\t\t<table cellpadding="0" cellspacing="0" role="presentation">\n\t\t\t\t<tr>\n\t\t\t\t\t<td valign="top" class="dojoxColorPickerPreviewContainer">\n\t\t\t\t\t\t<table cellpadding="0" cellspacing="0" role="presentation">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td valign="top" class="dojoxColorPickerRightPad">\n\t\t\t\t\t\t\t\t\t<div dojoAttachPoint="previewNode" class="dojoxColorPickerPreview"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td valign="top">\n\t\t\t\t\t\t\t\t\t<div dojoAttachPoint="safePreviewNode" class="dojoxColorPickerWebSafePreview"></div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td valign="bottom">\n\t\t\t\t\t\t<table class="dojoxColorPickerOptional" cellpadding="0" cellspacing="0" role="presentation">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="dijitInline dojoxColorPickerRgb" dojoAttachPoint="rgbNode">\n\t\t\t\t\t\t\t\t\t\t<table cellpadding="1" cellspacing="1" role="presentation">\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_r">${redLabel}</label></td><td><input id="${_uId}_r" dojoAttachPoint="Rval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_g">${greenLabel}</label></td><td><input id="${_uId}_g" dojoAttachPoint="Gval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_b">${blueLabel}</label></td><td><input id="${_uId}_b" dojoAttachPoint="Bval" size="1" dojoAttachEvent="onchange: _colorInputChange"></td></tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="dijitInline dojoxColorPickerHsv" dojoAttachPoint="hsvNode">\n\t\t\t\t\t\t\t\t\t\t<table cellpadding="1" cellspacing="1" role="presentation">\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_h">${hueLabel}</label></td><td><input id="${_uId}_h" dojoAttachPoint="Hval"size="1" dojoAttachEvent="onchange: _colorInputChange"> ${degLabel}</td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_s">${saturationLabel}</label></td><td><input id="${_uId}_s" dojoAttachPoint="Sval" size="1" dojoAttachEvent="onchange: _colorInputChange"> ${percentSign}</td></tr>\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for="${_uId}_v">${valueLabel}</label></td><td><input id="${_uId}_v" dojoAttachPoint="Vval" size="1" dojoAttachEvent="onchange: _colorInputChange"> ${percentSign}</td></tr>\n\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan="2">\n\t\t\t\t\t\t\t\t\t<div class="dojoxColorPickerHex" dojoAttachPoint="hexNode" aria-live="polite">\t\n\t\t\t\t\t\t\t\t\t\t<label for="${_uId}_hex">&nbsp;${hexLabel}&nbsp;</label><input id="${_uId}_hex" dojoAttachPoint="hexCode, focusNode, valueNode" size="6" class="dojoxColorPickerHexCode" dojoAttachEvent="onchange: _colorInputChange">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</td>\n\t</tr>\n</table>\n\n',
		"dijit/form/DropDownButton": function() {
			define("dojo/_base/declare,dojo/_base/lang,dojo/query,../registry,../popup,./Button,../_Container,../_HasDropDown,dojo/text!./templates/DropDownButton.html".split(","), function(f, k, h, j, e, c, i, b, g) {
				return f("dijit.form.DropDownButton", [c, i, b], {
					baseClass: "dijitDropDownButton",
					templateString: g,
					_fillContent: function() {
						if (this.srcNodeRef) {
							var a = h("*", this.srcNodeRef);
							this.inherited(arguments, [a[0]]);
							this.dropDownContainer = this.srcNodeRef
						}
					},
					startup: function() {
						if (!this._started) {
							if (!this.dropDown &&
								this.dropDownContainer) {
								var a = h("[widgetId]", this.dropDownContainer)[0];
								this.dropDown = j.byNode(a);
								delete this.dropDownContainer
							}
							this.dropDown && e.hide(this.dropDown);
							this.inherited(arguments)
						}
					},
					isLoaded: function() {
						var a = this.dropDown;
						return !!a && (!a.href || a.isLoaded)
					},
					loadDropDown: function(a) {
						var b = this.dropDown,
							c = b.on("load", k.hitch(this, function() {
								c.remove();
								a()
							}));
						b.refresh()
					},
					isFocusable: function() {
						return this.inherited(arguments) && !this._mouseDown
					}
				})
			})
		},
		"url:dijit/form/templates/DropDownButton.html": '<span class="dijit dijitReset dijitInline"\n\t><span class=\'dijitReset dijitInline dijitButtonNode\'\n\t\tdata-dojo-attach-event="ondijitclick:_onClick" data-dojo-attach-point="_buttonNode"\n\t\t><span class="dijitReset dijitStretch dijitButtonContents"\n\t\t\tdata-dojo-attach-point="focusNode,titleNode,_arrowWrapperNode"\n\t\t\trole="button" aria-haspopup="true" aria-labelledby="${id}_label"\n\t\t\t><span class="dijitReset dijitInline dijitIcon"\n\t\t\t\tdata-dojo-attach-point="iconNode"\n\t\t\t></span\n\t\t\t><span class="dijitReset dijitInline dijitButtonText"\n\t\t\t\tdata-dojo-attach-point="containerNode,_popupStateNode"\n\t\t\t\tid="${id}_label"\n\t\t\t></span\n\t\t\t><span class="dijitReset dijitInline dijitArrowButtonInner"></span\n\t\t\t><span class="dijitReset dijitInline dijitArrowButtonChar">&#9660;</span\n\t\t></span\n\t></span\n\t><input ${!nameAttrSetting} type="${type}" value="${value}" class="dijitOffScreen" tabIndex="-1"\n\t\tdata-dojo-attach-point="valueNode"\n/></span>\n',
		"dijit/TooltipDialog": function() {
			define("dojo/_base/declare,dojo/dom-class,dojo/_base/event,dojo/keys,dojo/_base/lang,./focus,./layout/ContentPane,./_DialogMixin,./form/_FormMixin,./_TemplatedMixin,dojo/text!./templates/TooltipDialog.html,./main".split(","), function(f, k, h, j, e, c, i, b, g, a, l) {
				return f("dijit.TooltipDialog", [i, a, g, b], {
					title: "",
					doLayout: !1,
					autofocus: !0,
					baseClass: "dijitTooltipDialog",
					_firstFocusItem: null,
					_lastFocusItem: null,
					templateString: l,
					_setTitleAttr: function(a) {
						this.containerNode.title =
							a;
						this._set("title", a)
					},
					postCreate: function() {
						this.inherited(arguments);
						this.connect(this.containerNode, "onkeypress", "_onKey")
					},
					orient: function(a, b, c) {
						a = {
							"MR-ML": "dijitTooltipRight",
							"ML-MR": "dijitTooltipLeft",
							"TM-BM": "dijitTooltipAbove",
							"BM-TM": "dijitTooltipBelow",
							"BL-TL": "dijitTooltipBelow dijitTooltipABLeft",
							"TL-BL": "dijitTooltipAbove dijitTooltipABLeft",
							"BR-TR": "dijitTooltipBelow dijitTooltipABRight",
							"TR-BR": "dijitTooltipAbove dijitTooltipABRight",
							"BR-BL": "dijitTooltipRight",
							"BL-BR": "dijitTooltipLeft"
						}[b +
							"-" + c
						];
						k.replace(this.domNode, a, this._currentOrientClass || "");
						this._currentOrientClass = a
					},
					focus: function() {
						this._getFocusItems(this.containerNode);
						c.focus(this._firstFocusItem)
					},
					onOpen: function(a) {
						this.orient(this.domNode, a.aroundCorner, a.corner);
						var b = a.aroundNodePos;
						if ("M" == a.corner.charAt(0) && "M" == a.aroundCorner.charAt(0)) this.connectorNode.style.top = b.y + (b.h - this.connectorNode.offsetHeight >> 1) - a.y + "px", this.connectorNode.style.left = "";
						else if ("M" == a.corner.charAt(1) && "M" == a.aroundCorner.charAt(1)) this.connectorNode.style.left =
							b.x + (b.w - this.connectorNode.offsetWidth >> 1) - a.x + "px";
						this._onShow()
					},
					onClose: function() {
						this.onHide()
					},
					_onKey: function(a) {
						var b = a.target;
						a.charOrCode === j.TAB && this._getFocusItems(this.containerNode);
						var e = this._firstFocusItem == this._lastFocusItem;
						a.charOrCode == j.ESCAPE ? (this.defer("onCancel"), h.stop(a)) : b == this._firstFocusItem && a.shiftKey && a.charOrCode === j.TAB ? (e || c.focus(this._lastFocusItem), h.stop(a)) : b == this._lastFocusItem && a.charOrCode === j.TAB && !a.shiftKey ? (e || c.focus(this._firstFocusItem), h.stop(a)) :
							a.charOrCode === j.TAB && a.stopPropagation()
					}
				})
			})
		},
		"url:dijit/templates/TooltipDialog.html": '<div role="presentation" tabIndex="-1">\n\t<div class="dijitTooltipContainer" role="presentation">\n\t\t<div class ="dijitTooltipContents dijitTooltipFocusNode" data-dojo-attach-point="containerNode" role="dialog"></div>\n\t</div>\n\t<div class="dijitTooltipConnector" role="presentation" data-dojo-attach-point="connectorNode"></div>\n</div>\n',
		"*now": function(f) {
			f(['dojo/i18n!*preload*dojo/nls/dojo*["ar","ca","cs","da","de","el","en-gb","en-us","es-es","fi-fi","fr-fr","he-il","hu","it-it","ja-jp","ko-kr","nl-nl","nb","pl","pt-br","pt-pt","ru","sk","sl","sv","th","tr","zh-tw","zh-cn","ROOT"]'])
		}
	}
}); //>>built
define("dijit/_editor/nls/FontChoice", {
	root: {
		fontSize: "Size",
		fontName: "Font",
		formatBlock: "Format",
		serif: "serif",
		"sans-serif": "sans-serif",
		monospace: "monospace",
		cursive: "cursive",
		fantasy: "fantasy",
		noFormat: "None",
		p: "Paragraph",
		h1: "Heading",
		h2: "Subheading",
		h3: "Sub-subheading",
		pre: "Pre-formatted",
		1: "xx-small",
		2: "x-small",
		3: "small",
		4: "medium",
		5: "large",
		6: "x-large",
		7: "xx-large"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/_editor/nls/LinkDialog", {
	root: {
		createLinkTitle: "Link Properties",
		insertImageTitle: "Image Properties",
		url: "URL:",
		text: "Description:",
		target: "Target:",
		set: "Set",
		currentWindow: "Current Window",
		parentWindow: "Parent Window",
		topWindow: "Topmost Window",
		newWindow: "New Window"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/_editor/nls/commands", {
	root: {
		bold: "Bold",
		copy: "Copy",
		cut: "Cut",
		"delete": "Delete",
		indent: "Indent",
		insertHorizontalRule: "Horizontal Rule",
		insertOrderedList: "Numbered List",
		insertUnorderedList: "Bullet List",
		italic: "Italic",
		justifyCenter: "Align Center",
		justifyFull: "Justify",
		justifyLeft: "Align Left",
		justifyRight: "Align Right",
		outdent: "Outdent",
		paste: "Paste",
		redo: "Redo",
		removeFormat: "Remove Format",
		selectAll: "Select All",
		strikethrough: "Strikethrough",
		subscript: "Subscript",
		superscript: "Superscript",
		underline: "Underline",
		undo: "Undo",
		unlink: "Remove Link",
		createLink: "Create Link",
		toggleDir: "Toggle Direction",
		insertImage: "Insert Image",
		insertTable: "Insert/Edit Table",
		toggleTableBorder: "Toggle Table Border",
		deleteTable: "Delete Table",
		tableProp: "Table Property",
		htmlToggle: "HTML Source",
		foreColor: "Foreground Color",
		hiliteColor: "Background Color",
		plainFormatBlock: "Paragraph Style",
		formatBlock: "Paragraph Style",
		fontSize: "Font Size",
		fontName: "Font Name",
		tabIndent: "Tab Indent",
		fullScreen: "Toggle Full Screen",
		viewSource: "View HTML Source",
		print: "Print",
		newPage: "New Page",
		systemShortcut: 'The "${0}" action is only available in your browser using a keyboard shortcut. Use ${1}.',
		ctrlKey: "ctrl+${0}",
		appleKey: "\u2318${0}"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/_editor/nls/de/FontChoice", {
	fontSize: "Gr\u00f6\u00dfe",
	fontName: "Schriftart",
	formatBlock: "Format",
	serif: "Serife",
	"sans-serif": "Serifenlos",
	monospace: "Monospaceschrift",
	cursive: "Kursiv",
	fantasy: "Fantasie",
	noFormat: "Keine Angabe",
	p: "Absatz",
	h1: "\u00dcberschrift",
	h2: "Unter\u00fcberschrift",
	h3: "Unterunter\u00fcberschrift",
	pre: "Vorformatiert",
	1: "XXS",
	2: "XS",
	3: "S",
	4: "M",
	5: "L",
	6: "XL",
	7: "XXL"
}); //>>built
define("dijit/_editor/nls/de/LinkDialog", {
	createLinkTitle: "Linkeigenschaften",
	insertImageTitle: "Grafikeigenschaften",
	url: "URL:",
	text: "Beschreibung:",
	target: "Ziel:",
	set: "Festlegen",
	currentWindow: "Aktuelles Fenster",
	parentWindow: "\u00dcbergeordnetes Fenster",
	topWindow: "Aktives Fenster",
	newWindow: "Neues Fenster"
}); //>>built
define("dijit/_editor/nls/de/commands", {
	bold: "Fett",
	copy: "Kopieren",
	cut: "Ausschneiden",
	"delete": "L\u00f6schen",
	indent: "Einr\u00fccken",
	insertHorizontalRule: "Horizontaler Strich",
	insertOrderedList: "Nummerierung",
	insertUnorderedList: "Aufz\u00e4hlungszeichen",
	italic: "Kursiv",
	justifyCenter: "Zentriert",
	justifyFull: "Blocksatz",
	justifyLeft: "Linksb\u00fcndig",
	justifyRight: "Rechtsb\u00fcndig",
	outdent: "Ausr\u00fccken",
	paste: "Einf\u00fcgen",
	redo: "Wiederholen",
	removeFormat: "Formatierung entfernen",
	selectAll: "Alles ausw\u00e4hlen",
	strikethrough: "Durchgestrichen",
	subscript: "Tiefgestellt",
	superscript: "Hochgestellt",
	underline: "Unterstrichen",
	undo: "R\u00fcckg\u00e4ngig",
	unlink: "Link entfernen",
	createLink: "Link erstellen",
	toggleDir: "Richtung wechseln",
	insertImage: "Grafik einf\u00fcgen",
	insertTable: "Tabelle einf\u00fcgen/bearbeiten",
	toggleTableBorder: "Tabellenumrandung ein-/ausschalten",
	deleteTable: "Tabelle l\u00f6schen",
	tableProp: "Tabelleneigenschaft",
	htmlToggle: "HTML-Quelltext",
	foreColor: "Vordergrundfarbe",
	hiliteColor: "Hintergrundfarbe",
	plainFormatBlock: "Absatzstil",
	formatBlock: "Absatzstil",
	fontSize: "Schriftgr\u00f6\u00dfe",
	fontName: "Schriftartname",
	tabIndent: "Registerkarteneinr\u00fcckung",
	fullScreen: "Gesamtanzeige",
	viewSource: "HTML-Quelle",
	print: "Drucken",
	newPage: "Neue Seite",
	systemShortcut: 'Die Aktion "${0}" ist im Browser nur \u00fcber einen Tastaturkurzbefehl verf\u00fcgbar. Verwenden Sie ${1}.',
	ctrlKey: "Strg+${0}",
	appleKey: "\u2318${0}"
}); //>>built
define("dijit/_editor/nls/fr/FontChoice", {
	fontSize: "Taille",
	fontName: "Police",
	formatBlock: "Mise en forme",
	serif: "serif",
	"sans-serif": "sans serif",
	monospace: "espacement fixe",
	cursive: "cursive",
	fantasy: "fantaisie",
	noFormat: "N\u00e9ant",
	p: "Paragraphe",
	h1: "En-t\u00eate",
	h2: "Sous-en-t\u00eate",
	h3: "Sous-sous-en-t\u00eate",
	pre: "Pr\u00e9-mise en forme",
	1: "tr\u00e8s tr\u00e8s petite",
	2: "tr\u00e8s petite",
	3: "petite",
	4: "moyenne",
	5: "grande",
	6: "tr\u00e8s grande",
	7: "tr\u00e8s tr\u00e8s grande"
}); //>>built
define("dijit/_editor/nls/fr/LinkDialog", {
	createLinkTitle: "Propri\u00e9t\u00e9s du lien",
	insertImageTitle: "Propri\u00e9t\u00e9s de l'image",
	url: "URL :",
	text: "Description :",
	target: "Cible :",
	set: "D\u00e9finir",
	currentWindow: "Fen\u00eatre actuelle",
	parentWindow: "Fen\u00eatre parent",
	topWindow: "Fen\u00eatre sup\u00e9rieure",
	newWindow: "Nouvelle fen\u00eatre"
}); //>>built
define("dijit/_editor/nls/fr/commands", {
	bold: "Gras",
	copy: "Copier",
	cut: "Couper",
	"delete": "Supprimer",
	indent: "Retrait",
	insertHorizontalRule: "R\u00e8gle horizontale",
	insertOrderedList: "Liste num\u00e9rot\u00e9e",
	insertUnorderedList: "Liste \u00e0 puces",
	italic: "Italique",
	justifyCenter: "Aligner au centre",
	justifyFull: "Justifier",
	justifyLeft: "Aligner \u00e0 gauche",
	justifyRight: "Aligner \u00e0 droite",
	outdent: "Retrait n\u00e9gatif",
	paste: "Coller",
	redo: "R\u00e9tablir",
	removeFormat: "Supprimer la mise en forme",
	selectAll: "S\u00e9lectionner tout",
	strikethrough: "Barrer",
	subscript: "Indice",
	superscript: "Exposant",
	underline: "Souligner",
	undo: "Annuler",
	unlink: "Supprimer le lien",
	createLink: "Cr\u00e9er un lien",
	toggleDir: "Changer de sens",
	insertImage: "Ins\u00e9rer une image",
	insertTable: "Ins\u00e9rer/Modifier un tableau",
	toggleTableBorder: "Afficher/Masquer la bordure du tableau",
	deleteTable: "Supprimer le tableau",
	tableProp: "Propri\u00e9t\u00e9 du tableau",
	htmlToggle: "Source HTML",
	foreColor: "Couleur d'avant-plan",
	hiliteColor: "Couleur d'arri\u00e8re-plan",
	plainFormatBlock: "Style de paragraphe",
	formatBlock: "Style de paragraphe",
	fontSize: "Taille de police",
	fontName: "Nom de police",
	tabIndent: "Retrait de tabulation",
	fullScreen: "Basculer en plein \u00e9cran",
	viewSource: "Afficher la source HTML",
	print: "Imprimer",
	newPage: "Nouvelle page",
	systemShortcut: "L'action \"${0}\" est disponible dans votre navigateur uniquement, par le biais d'un raccourci-clavier. Utilisez ${1}.",
	ctrlKey: "ctrl+${0}",
	appleKey: "\u2318${0}"
}); //>>built
define("dijit/_editor/nls/it/FontChoice", {
	fontSize: "Dimensione",
	fontName: "Carattere",
	formatBlock: "Formato",
	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "spaziatura fissa",
	cursive: "corsivo",
	fantasy: "fantasy",
	noFormat: "Nessuna",
	p: "Paragrafo",
	h1: "Intestazione",
	h2: "Sottointestazione",
	h3: "Sottointestazione secondaria",
	pre: "Preformattato",
	1: "piccolissimo",
	2: "molto piccolo",
	3: "piccolo",
	4: "medio",
	5: "grande",
	6: "molto grande",
	7: "grandissimo"
}); //>>built
define("dijit/_editor/nls/it/LinkDialog", {
	createLinkTitle: "Propriet\u00e0 collegamento",
	insertImageTitle: "Propriet\u00e0 immagine",
	url: "URL:",
	text: "Descrizione:",
	target: "Destinazione:",
	set: "Imposta",
	currentWindow: "Finestra corrente",
	parentWindow: "Finestra padre",
	topWindow: "Finestra superiore",
	newWindow: "Nuova finestra"
}); //>>built
define("dijit/_editor/nls/it/commands", {
	bold: "Grassetto",
	copy: "Copia",
	cut: "Taglia",
	"delete": "Annulla",
	indent: "Rientra",
	insertHorizontalRule: "Righello orizzontale",
	insertOrderedList: "Elenco numerato",
	insertUnorderedList: "Elenco a punti",
	italic: "Corsivo",
	justifyCenter: "Allinea al centro",
	justifyFull: "Giustifica",
	justifyLeft: "Allinea a sinistra",
	justifyRight: "Allinea a destra",
	outdent: "Annulla rientro",
	paste: "Incolla",
	redo: "Ripeti",
	removeFormat: "Rimuovi formato",
	selectAll: "Seleziona tutto",
	strikethrough: "Barrato",
	subscript: "Pedice",
	superscript: "Apice",
	underline: "Sottolinea",
	undo: "Annulla",
	unlink: "Rimuovi collegamento",
	createLink: "Crea collegamento",
	toggleDir: "Attiva/Disattiva direzione",
	insertImage: "Inserisci immagine",
	insertTable: "Inserisci/Modifica tabella",
	toggleTableBorder: "Attiva/Disattiva bordo tabella",
	deleteTable: "Elimina tabella",
	tableProp: "Propriet\u00e0 tabella",
	htmlToggle: "Origine HTML",
	foreColor: "Colore in primo piano",
	hiliteColor: "Colore di sfondo",
	plainFormatBlock: "Stile paragrafo",
	formatBlock: "Stile paragrafo",
	fontSize: "Dimensione tipo di carattere",
	fontName: "Nome tipo di carattere",
	tabIndent: "Rientro tabulazione",
	fullScreen: "Attiva/Disattiva schermo intero",
	viewSource: "Visualizza origine HTML",
	print: "Stampa",
	newPage: "Nuova pagina",
	systemShortcut: 'Azione "${0}" disponibile nel browser solo utilizzando una scelta rapida da tastiera. Utilizzare ${1}.',
	ctrlKey: "ctrl+${0}",
	appleKey: "\u2318${0}"
}); //>>built
define("dijit/_editor/nls/nl/FontChoice", {
	fontSize: "Grootte",
	fontName: "Lettertype",
	formatBlock: "Opmaak",
	serif: "serif",
	"sans-serif": "sans-serif",
	monospace: "monospace",
	cursive: "cursief",
	fantasy: "fantasy",
	noFormat: "Geen",
	p: "Alinea",
	h1: "Kop",
	h2: "Subkop",
	h3: "Sub-subkop",
	pre: "Vooraf opgemaakt",
	1: "xx-klein",
	2: "x-klein",
	3: "klein",
	4: "gemiddeld",
	5: "groot",
	6: "x-groot",
	7: "xx-groot"
}); //>>built
define("dijit/_editor/nls/nl/LinkDialog", {
	createLinkTitle: "Linkeigenschappen",
	insertImageTitle: "Afbeeldingseigenschappen",
	url: "URL:",
	text: "Beschrijving:",
	target: "Doel:",
	set: "Instellen",
	currentWindow: "Huidig venster",
	parentWindow: "Hoofdvenster",
	topWindow: "Bovenste venster",
	newWindow: "Nieuw venster"
}); //>>built
define("dijit/_editor/nls/nl/commands", {
	bold: "Vet",
	copy: "Kopi\u00ebren",
	cut: "Knippen",
	"delete": "Wissen",
	indent: "Inspringen",
	insertHorizontalRule: "Horizontale liniaal",
	insertOrderedList: "Genummerde lijst",
	insertUnorderedList: "Lijst met opsommingstekens",
	italic: "Cursief",
	justifyCenter: "Centreren",
	justifyFull: "Uitvullen",
	justifyLeft: "Links uitlijnen",
	justifyRight: "Rechts uitlijnen",
	outdent: "Uitspringen",
	paste: "Plakken",
	redo: "Opnieuw",
	removeFormat: "Opmaak verwijderen",
	selectAll: "Alles selecteren",
	strikethrough: "Doorhalen",
	subscript: "Subscript",
	superscript: "Superscript",
	underline: "Onderstrepen",
	undo: "Ongedaan maken",
	unlink: "Link verwijderen",
	createLink: "Link maken",
	toggleDir: "Schrijfrichting wijzigen",
	insertImage: "Afbeelding invoegen",
	insertTable: "Tabel invoegen/bewerken",
	toggleTableBorder: "Tabelkader wijzigen",
	deleteTable: "Tabel wissen",
	tableProp: "Tabeleigenschap",
	htmlToggle: "HTML-bron",
	foreColor: "Voorgrondkleur",
	hiliteColor: "Achtergrondkleur",
	plainFormatBlock: "Alineastijl",
	formatBlock: "Alineastijl",
	fontSize: "Lettergrootte",
	fontName: "Lettertype",
	tabIndent: "Inspringen",
	fullScreen: "Volledig scherm in-/uitschakelen",
	viewSource: "HTML-bron bekijken",
	print: "Afdrukken",
	newPage: "Nieuwe pagina",
	systemShortcut: 'De actie "${0}" is alleen beschikbaar in uw browser via een sneltoetscombinatie. Gebruik ${1}.',
	ctrlKey: "ctrl+${0}",
	appleKey: "\u2318${0}"
}); //>>built
define("dijit/form/nls/ComboBox", {
	root: {
		previousMessage: "Previous choices",
		nextMessage: "More choices"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/form/nls/Textarea", {
	root: {
		iframeEditTitle: "edit area",
		iframeFocusTitle: "edit area frame"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/form/nls/de/ComboBox", {
	previousMessage: "Vorherige Auswahl",
	nextMessage: "Weitere Auswahlm\u00f6glichkeiten"
}); //>>built
define("dijit/form/nls/de/Textarea", {
	iframeEditTitle: "Editierbereich",
	iframeFocusTitle: "Rahmen f\u00fcr Editierbereich"
}); //>>built
define("dijit/form/nls/de/validate", {
	invalidMessage: "Der eingegebene Wert ist ung\u00fcltig. ",
	missingMessage: "Dieser Wert ist erforderlich.",
	rangeMessage: "Dieser Wert liegt au\u00dferhalb des g\u00fcltigen Bereichs. "
}); //>>built
define("dijit/form/nls/fr/ComboBox", {
	previousMessage: "Choix pr\u00e9c\u00e9dents",
	nextMessage: "Plus de choix"
}); //>>built
define("dijit/form/nls/fr/Textarea", {
	iframeEditTitle: "zone d'\u00e9dition",
	iframeFocusTitle: "cadre de la zone d'\u00e9dition"
}); //>>built
define("dijit/form/nls/fr/validate", {
	invalidMessage: "La valeur indiqu\u00e9e n'est pas correcte.",
	missingMessage: "Cette valeur est requise.",
	rangeMessage: "Cette valeur n'est pas comprise dans la plage autoris\u00e9e."
}); //>>built
define("dijit/form/nls/it/ComboBox", {
	previousMessage: "Scelte precedenti",
	nextMessage: "Scelte successive"
}); //>>built
define("dijit/form/nls/it/Textarea", {
	iframeEditTitle: "modifica area",
	iframeFocusTitle: "modifica frame area"
}); //>>built
define("dijit/form/nls/it/validate", {
	invalidMessage: "Il valore immesso non \u00e8 valido.",
	missingMessage: "Questo valore \u00e8 obbligatorio.",
	rangeMessage: "Questo valore \u00e8 fuori dall'intervallo consentito."
}); //>>built
define("dijit/form/nls/nl/ComboBox", {
	previousMessage: "Eerdere opties",
	nextMessage: "Meer opties"
}); //>>built
define("dijit/form/nls/nl/Textarea", {
	iframeEditTitle: "veld bewerken",
	iframeFocusTitle: "veldkader bewerken"
}); //>>built
define("dijit/form/nls/nl/validate", {
	invalidMessage: "De opgegeven waarde is ongeldig.",
	missingMessage: "Deze waarde is verplicht.",
	rangeMessage: "Deze waarde is niet toegestaan."
}); //>>built
define("dijit/form/nls/validate", {
	root: {
		invalidMessage: "The value entered is not valid.",
		missingMessage: "This value is required.",
		rangeMessage: "This value is out of range."
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/nls/common", {
	root: {
		buttonOk: "OK",
		buttonCancel: "Cancel",
		buttonSave: "Save",
		itemClose: "Close"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/nls/de/common", {
	buttonOk: "OK",
	buttonCancel: "Abbrechen",
	buttonSave: "Speichern",
	itemClose: "Schlie\u00dfen"
}); //>>built
define("dijit/nls/de/loading", {
	loadingState: "Wird geladen...",
	errorState: "Es ist ein Fehler aufgetreten."
}); //>>built
define("dijit/nls/fr/common", {
	buttonOk: "OK",
	buttonCancel: "Annuler",
	buttonSave: "Enregistrer",
	itemClose: "Fermer"
}); //>>built
define("dijit/nls/fr/loading", {
	loadingState: "Chargement...",
	errorState: "Une erreur est survenue"
}); //>>built
define("dijit/nls/it/common", {
	buttonOk: "Ok",
	buttonCancel: "Annulla",
	buttonSave: "Salva",
	itemClose: "Chiudi"
}); //>>built
define("dijit/nls/it/loading", {
	loadingState: "Caricamento in corso...",
	errorState: "Si \u00e8 verificato un errore"
}); //>>built
define("dijit/nls/loading", {
	root: {
		loadingState: "Loading...",
		errorState: "Sorry, an error occurred"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dijit/nls/nl/common", {
	buttonOk: "OK",
	buttonCancel: "Annuleren",
	buttonSave: "Opslaan",
	itemClose: "Sluiten"
}); //>>built
define("dijit/nls/nl/loading", {
	loadingState: "Bezig met laden...",
	errorState: "Er is een fout opgetreden"
}); //>>built
define("dojo/cldr/nls/buddhist", {
	root: {
		"months-format-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-format-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"days-format-abbr": "1,2,3,4,5,6,7".split(","),
		"days-format-narrow": "1,2,3,4,5,6,7".split(","),
		"days-format-wide": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-abbr": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-narrow": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-wide": "1,2,3,4,5,6,7".split(","),
		"quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-format-narrow": ["1", "2", "3", "4"],
		"quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-narrow": ["1", "2", "3", "4"],
		"quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"],
		"dayPeriods-format-abbr-am": "AM",
		"dayPeriods-format-abbr-pm": "PM",
		"dayPeriods-format-narrow-am": "AM",
		"dayPeriods-format-narrow-pm": "PM",
		"dayPeriods-format-wide-am": "AM",
		"dayPeriods-format-wide-pm": "PM",
		eraNames: ["BE"],
		eraAbbr: ["BE"],
		eraNarrow: ["BE"],
		"dateFormat-full": "EEEE, G y MMMM dd",
		"dateFormat-long": "G y MMMM d",
		"dateFormat-medium": "G y MMM d",
		"dateFormat-short": "GGGGG yyyy-MM-dd",
		"timeFormat-full": "HH:mm:ss zzzz",
		"timeFormat-long": "HH:mm:ss z",
		"timeFormat-medium": "HH:mm:ss",
		"timeFormat-short": "HH:mm",
		dateTimeFormat: "{1} {0}",
		"dateFormatItem-d": "d",
		"dateFormatItem-Ed": "d E",
		"dateFormatItem-Gy": "G y",
		"dateFormatItem-h": "h a",
		"dateFormatItem-H": "HH",
		"dateFormatItem-hm": "h:mm a",
		"dateFormatItem-Hm": "HH:mm",
		"dateFormatItem-hms": "h:mm:ss a",
		"dateFormatItem-Hms": "HH:mm:ss",
		"dateFormatItem-M": "L",
		"dateFormatItem-Md": "M-d",
		"dateFormatItem-MEd": "E, M-d",
		"dateFormatItem-MMM": "LLL",
		"dateFormatItem-MMMd": "MMM d",
		"dateFormatItem-MMMEd": "E MMM d",
		"dateFormatItem-ms": "mm:ss",
		"dateFormatItem-y": "G y",
		"dateFormatItem-yM": "GGGGG yyyy-MM",
		"dateFormatItem-yMd": "GGGGG yyyy-MM-dd",
		"dateFormatItem-yMEd": "E, GGGGG yyyy-MM-dd",
		"dateFormatItem-yMMM": "G y MMM",
		"dateFormatItem-yMMMd": "G y MMM d",
		"dateFormatItem-yMMMEd": "E, G y MMM d",
		"dateFormatItem-yQ": "GGGGG yyyy Q",
		"dateFormatItem-yQQQ": "G y QQQ",
		"dateTimeFormats-appendItem-Day": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}",
		"dateTimeFormats-appendItem-Era": "{0} {1}",
		"dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Month": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Second": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Timezone": "{0} {1}",
		"dateTimeFormats-appendItem-Week": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Year": "{0} {1}"
	},
	ar: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	en: !0,
	"en-gb": !0,
	es: !0,
	fi: !0,
	fr: !0,
	hu: !0,
	it: !0,
	ja: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-hant": !0
}); //>>built
define("dojo/cldr/nls/currency", {
	root: {
		AUD_symbol: "AU$",
		CAD_symbol: "CA$",
		CNY_symbol: "CN\u00a5",
		EUR_symbol: "\u20ac",
		GBP_symbol: "\u00a3",
		HKD_symbol: "HK$",
		JPY_symbol: "JP\u00a5",
		USD_symbol: "US$"
	},
	ar: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	en: !0,
	"en-au": !0,
	"en-ca": !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	it: !0,
	ja: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-hant": !0,
	"zh-hk": !0,
	"zh-tw": !0
}); //>>built
define("dojo/cldr/nls/de/buddhist", {
	"dateFormat-full": "EEEE d. MMMM y G",
	"dateFormat-long": "d. MMMM y G",
	"dateFormat-medium": "d. MMM y G",
	"dateFormat-short": "d.M.yyyy",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d.",
	"dateFormatItem-Gy": "y G",
	"dateFormatItem-H": "HH 'Uhr'",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d.M.",
	"dateFormatItem-MEd": "E, d.M.",
	"dateFormatItem-MMd": "d.MM.",
	"dateFormatItem-MMdd": "dd.MM.",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d. MMM",
	"dateFormatItem-MMMEd": "E, d. MMM",
	"dateFormatItem-MMMMdd": "dd. MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y G",
	"dateFormatItem-yM": "M.y G",
	"dateFormatItem-yMd": "d.M.y G",
	"dateFormatItem-yMEd": "E, d.M.y G",
	"dateFormatItem-yMMM": "MMM y G",
	"dateFormatItem-yMMMd": "d. MMM y G",
	"dateFormatItem-yMMMEd": "E, d. MMM y G",
	"dateFormatItem-yQ": "Q y G",
	"dateFormatItem-yQQQ": "QQQ y G",
	"dateFormatItem-yyMM": "MM.y G",
	"dateFormatItem-yyMMdd": "dd.MM.y G",
	"dateFormatItem-yyMMM": "MMM y G",
	"dateFormatItem-yyQ": "Q y G",
	"dateFormatItem-yyQQQQ": "QQQQ y G",
	"dateFormatItem-yyyy": "y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"days-format-abbr": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","),
	"days-format-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
	"days-standAlone-abbr": "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
	"days-standAlone-narrow": "S,M,D,M,D,F,S".split(","),
	"quarters-format-wide": ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
	"dayPeriods-format-wide-am": "vorm.",
	"dayPeriods-format-wide-pm": "nachm.",
	"months-format-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
	"months-format-wide": "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
	"months-standAlone-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
	"months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(",")
}); //>>built
define("dojo/cldr/nls/de/currency", {
	AUD_displayName: "Australischer Dollar",
	CAD_displayName: "Kanadischer Dollar",
	CHF_displayName: "Schweizer Franken",
	CNY_displayName: "Renminbi Yuan",
	EUR_displayName: "Euro",
	GBP_displayName: "Pfund Sterling",
	HKD_displayName: "Hongkong-Dollar",
	JPY_displayName: "Japanische Yen",
	JPY_symbol: "\u00a5",
	USD_displayName: "US-Dollar",
	USD_symbol: "$"
}); //>>built
define("dojo/cldr/nls/de/gregorian", {
	"months-format-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
	"months-format-wide": "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
	"months-standAlone-abbr": "Jan,Feb,M\u00e4r,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez".split(","),
	"months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","),
	"days-format-abbr": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","),
	"days-format-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
	"days-standAlone-abbr": "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
	"days-standAlone-narrow": "S,M,D,M,D,F,S".split(","),
	"quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"],
	"quarters-format-narrow": ["1", "2", "3", "4"],
	"quarters-format-wide": ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
	"dayPeriods-format-wide-afternoon": "nachmittags",
	"dayPeriods-format-wide-am": "vorm.",
	"dayPeriods-format-wide-earlyMorning": "morgens",
	"dayPeriods-format-wide-evening": "abends",
	"dayPeriods-format-wide-morning": "vormittags",
	"dayPeriods-format-wide-night": "nachts",
	"dayPeriods-format-wide-noon": "Mittag",
	"dayPeriods-format-wide-pm": "nachm.",
	eraNames: ["v. Chr.", "n. Chr."],
	eraAbbr: ["v. Chr.", "n. Chr."],
	"dateFormat-full": "EEEE, d. MMMM y",
	"dateFormat-long": "d. MMMM y",
	"dateFormat-medium": "dd.MM.yyyy",
	"dateFormat-short": "dd.MM.yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"timeFormat-long": "HH:mm:ss z",
	"timeFormat-medium": "HH:mm:ss",
	"timeFormat-short": "HH:mm",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E, d.",
	"dateFormatItem-H": "HH 'Uhr'",
	"dateFormatItem-hm": "h:mm a",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-hms": "h:mm:ss a",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d.M.",
	"dateFormatItem-MEd": "E, d.M.",
	"dateFormatItem-MMd": "d.MM.",
	"dateFormatItem-MMdd": "dd.MM.",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d. MMM",
	"dateFormatItem-MMMEd": "E, d. MMM",
	"dateFormatItem-MMMMdd": "dd. MMMM",
	"dateFormatItem-MMMMEd": "E, d. MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y",
	"dateFormatItem-yM": "M.y",
	"dateFormatItem-yMd": "d.M.y",
	"dateFormatItem-yMEd": "E, d.M.y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d. MMM y",
	"dateFormatItem-yMMMEd": "E, d. MMM y",
	"dateFormatItem-yQ": "Q y",
	"dateFormatItem-yQQQ": "QQQ y",
	"dateFormatItem-yyMM": "MM.yy",
	"dateFormatItem-yyMMdd": "dd.MM.yy",
	"dateFormatItem-yyMMM": "MMM yy",
	"dateFormatItem-yyQ": "Q yy",
	"dateFormatItem-yyQQQQ": "QQQQ yy",
	"dateFormatItem-yyyy": "y",
	"dateFormatItem-yyyyMMMM": "MMMM y",
	"field-era": "Epoche",
	"field-year": "Jahr",
	"field-year-relative+-1": "Letztes Jahr",
	"field-year-relative+0": "Dieses Jahr",
	"field-year-relative+1": "N\u00e4chstes Jahr",
	"field-month": "Monat",
	"field-month-relative+-1": "Letzter Monat",
	"field-month-relative+0": "Dieser Monat",
	"field-month-relative+1": "N\u00e4chster Monat",
	"field-week": "Woche",
	"field-week-relative+-1": "Letzte Woche",
	"field-week-relative+0": "Diese Woche",
	"field-week-relative+1": "N\u00e4chste Woche",
	"field-day": "Tag",
	"field-day-relative+-2": "Vorgestern",
	"field-day-relative+-1": "Gestern",
	"field-day-relative+0": "Heute",
	"field-day-relative+1": "Morgen",
	"field-day-relative+2": "\u00dcbermorgen",
	"field-weekday": "Wochentag",
	"field-dayperiod": "Tagesh\u00e4lfte",
	"field-hour": "Stunde",
	"field-minute": "Minute",
	"field-second": "Sekunde",
	"field-zone": "Zone",
	"months-format-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","),
	"months-standAlone-wide": "Januar,Februar,M\u00e4rz,April,Mai,Juni,Juli,August,September,Oktober,November,Dezember".split(","),
	"days-format-narrow": "S,M,D,M,D,F,S".split(","),
	"days-standAlone-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
	"quarters-standAlone-wide": ["1. Quartal", "2. Quartal",
		"3. Quartal", "4. Quartal"
	],
	eraNarrow: ["v. Chr.", "n. Chr."]
}); //>>built
define("dojo/cldr/nls/de/islamic", {
	"dateFormat-full": "EEEE d. MMMM y G",
	"dateFormat-long": "d. MMMM y G",
	"dateFormat-medium": "d. MMM y G",
	"dateFormat-short": "d.M.y G",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d.",
	"dateFormatItem-H": "HH 'Uhr'",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d.M.",
	"dateFormatItem-MEd": "E, d.M.",
	"dateFormatItem-MMd": "d.MM.",
	"dateFormatItem-MMdd": "dd.MM.",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d. MMM",
	"dateFormatItem-MMMEd": "E, d. MMM",
	"dateFormatItem-MMMMdd": "dd. MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-yyMM": "MM.y G",
	"dateFormatItem-yyMMdd": "dd.MM.y G",
	"dateFormatItem-yyMMM": "MMM y G",
	"dateFormatItem-yyQ": "Q y G",
	"dateFormatItem-yyQQQQ": "QQQQ y G",
	"dateFormatItem-yyyy": "y G",
	"dateFormatItem-yyyyM": "M.y G",
	"dateFormatItem-yyyyMd": "d.M.y G",
	"dateFormatItem-yyyyMEd": "E, d.M.y G",
	"dateFormatItem-yyyyMMM": "MMM y G",
	"dateFormatItem-yyyyMMMd": "d. MMM y G",
	"dateFormatItem-yyyyMMMEd": "E, d. MMM y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"dateFormatItem-yyyyQ": "Q y G",
	"dateFormatItem-yyyyQQQ": "QQQ y G",
	"days-format-abbr": "So.,Mo.,Di.,Mi.,Do.,Fr.,Sa.".split(","),
	"days-format-wide": "Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag".split(","),
	"days-standAlone-abbr": "So,Mo,Di,Mi,Do,Fr,Sa".split(","),
	"days-standAlone-narrow": "S,M,D,M,D,F,S".split(","),
	"quarters-format-wide": ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
	"dayPeriods-format-wide-am": "vorm.",
	"dayPeriods-format-wide-pm": "nachm.",
	"dateFormatItem-yM": "M.y",
	"dateFormatItem-yMd": "d.M.y",
	"dateFormatItem-yMEd": "E, d.M.y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d. MMM y",
	"dateFormatItem-yMMMEd": "E, d. MMM y",
	"dateFormatItem-yQ": "Q y",
	"dateFormatItem-yQQQ": "QQQ y"
}); //>>built
define("dojo/cldr/nls/de/number", {
	decimal: ",",
	group: ".",
	list: ";",
	percentSign: "%",
	plusSign: "+",
	minusSign: "-",
	exponential: "E",
	perMille: "\u2030",
	infinity: "\u221e",
	nan: "NaN",
	decimalFormat: "#,##0.###",
	"decimalFormat-short": "000\u00a0B",
	scientificFormat: "#E0",
	percentFormat: "#,##0\u00a0%",
	currencyFormat: "#,##0.00\u00a0\u00a4"
}); //>>built
define("dojo/cldr/nls/fr/buddhist", {
	eraNames: ["\u00e8re bouddhiste"],
	eraAbbr: ["\u00e8re b."],
	eraNarrow: "E.B.",
	"dateFormat-full": "EEEE d MMMM y G",
	"dateFormat-long": "d MMMM y G",
	"dateFormat-medium": "d MMM, y G",
	"dateFormat-short": "d/M/yyyy",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Gy": "y G",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMd": "d/MM",
	"dateFormatItem-MMdd": "dd/MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMdd": "dd MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMEd": "E d MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y G",
	"dateFormatItem-yM": "M/y G",
	"dateFormatItem-yMd": "d/M/y G",
	"dateFormatItem-yMEd": "E d/M/y G",
	"dateFormatItem-yMMM": "MMM y G",
	"dateFormatItem-yMMMEd": "E d MMM y G",
	"dateFormatItem-yQ": "'T'Q y G",
	"dateFormatItem-yQQQ": "QQQ y G",
	"dateFormatItem-yyMM": "MM/y G",
	"dateFormatItem-yyMMM": "MMM y G",
	"dateFormatItem-yyMMMd": "d MMM y G",
	"dateFormatItem-yyMMMEd": "E d MMM y G",
	"dateFormatItem-yyQ": "'T'Q y G",
	"dateFormatItem-yyQQQQ": "QQQQ y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"days-format-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-format-wide": "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","),
	"days-standAlone-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-standAlone-narrow": "D,L,M,M,J,V,S".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-narrow": ["T1", "T2", "T3",
		"T4"
	],
	"quarters-format-wide": ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
	"dayPeriods-format-narrow-pm": "p",
	"dateFormatItem-yMMMd": "d MMM y",
	"months-format-abbr": "janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","),
	"months-format-wide": "janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","),
	"months-standAlone-abbr": "janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","),
	"months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(",")
}); //>>built
define("dojo/cldr/nls/fr/currency", {
	AUD_displayName: "dollar australien",
	AUD_symbol: "$AU",
	CAD_displayName: "dollar canadien",
	CAD_symbol: "$CA",
	CHF_displayName: "franc suisse",
	CNY_displayName: "yuan renminbi chinois",
	CNY_symbol: "\u04b0",
	EUR_displayName: "euro",
	GBP_displayName: "livre sterling",
	GBP_symbol: "\u00a3UK",
	HKD_displayName: "dollar de Hong Kong",
	HKD_symbol: "$HK",
	JPY_displayName: "yen japonais",
	JPY_symbol: "\u00a5JP",
	USD_displayName: "dollar des \u00c9tats-Unis",
	USD_symbol: "$US"
}); //>>built
define("dojo/cldr/nls/fr/gregorian", {
	"months-format-abbr": "janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","),
	"months-format-wide": "janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","),
	"months-standAlone-abbr": "janv.,f\u00e9vr.,mars,avr.,mai,juin,juil.,ao\u00fbt,sept.,oct.,nov.,d\u00e9c.".split(","),
	"months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","),
	"days-format-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-format-wide": "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","),
	"days-standAlone-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-standAlone-narrow": "D,L,M,M,J,V,S".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-narrow": ["T1", "T2", "T3", "T4"],
	"quarters-format-wide": ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
	"dayPeriods-format-abbr-am": "AM",
	"dayPeriods-format-abbr-pm": "PM",
	"dayPeriods-format-narrow-pm": "p",
	"dayPeriods-format-wide-afternoon": "apr\u00e8s-midi",
	"dayPeriods-format-wide-am": "AM",
	"dayPeriods-format-wide-morning": "matin",
	"dayPeriods-format-wide-night": "soir",
	"dayPeriods-format-wide-noon": "midi",
	"dayPeriods-format-wide-pm": "PM",
	eraNames: ["avant J\u00e9sus-Christ", "apr\u00e8s J\u00e9sus-Christ"],
	eraAbbr: ["av. J.-C.", "ap. J.-C."],
	"dateFormat-full": "EEEE d MMMM y",
	"dateFormat-long": "d MMMM y",
	"dateFormat-medium": "d MMM y",
	"dateFormat-short": "dd/MM/yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"timeFormat-long": "HH:mm:ss z",
	"timeFormat-medium": "HH:mm:ss",
	"timeFormat-short": "HH:mm",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-hm": "h:mm a",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-hms": "h:mm:ss a",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMd": "d/MM",
	"dateFormatItem-MMdd": "dd/MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMdd": "dd MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMEd": "E d MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y",
	"dateFormatItem-yM": "M/yyyy",
	"dateFormatItem-yMd": "d/M/yyyy",
	"dateFormatItem-yMEd": "E d/M/yyyy",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "'T'Q y",
	"dateFormatItem-yQQQ": "QQQ y",
	"dateFormatItem-yyMM": "MM/yy",
	"dateFormatItem-yyMMM": "MMM yy",
	"dateFormatItem-yyMMMd": "d MMM yy",
	"dateFormatItem-yyMMMEd": "E d MMM yy",
	"dateFormatItem-yyQ": "'T'Q yy",
	"dateFormatItem-yyQQQQ": "QQQQ yy",
	"dateFormatItem-yyyyMMMM": "MMMM y",
	"field-era": "\u00e8re",
	"field-year": "ann\u00e9e",
	"field-year-relative+-1": "l\u2019ann\u00e9e derni\u00e8re",
	"field-year-relative+0": "cette ann\u00e9e",
	"field-year-relative+1": "l\u2019ann\u00e9e prochaine",
	"field-month": "mois",
	"field-month-relative+-1": "le mois dernier",
	"field-month-relative+0": "ce mois-ci",
	"field-month-relative+1": "le mois prochain",
	"field-week": "semaine",
	"field-week-relative+-1": "la semaine derni\u00e8re",
	"field-week-relative+0": "cette semaine",
	"field-week-relative+1": "la semaine prochaine",
	"field-day": "jour",
	"field-day-relative+-2": "avant-hier",
	"field-day-relative+-1": "hier",
	"field-day-relative+0": "aujourd\u2019hui",
	"field-day-relative+1": "demain",
	"field-day-relative+2": "apr\u00e8s-demain",
	"field-weekday": "jour de la semaine",
	"field-dayperiod": "cadran",
	"field-hour": "heure",
	"field-minute": "minute",
	"field-second": "seconde",
	"field-zone": "fuseau horaire",
	"months-format-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","),
	"months-standAlone-wide": "janvier,f\u00e9vrier,mars,avril,mai,juin,juillet,ao\u00fbt,septembre,octobre,novembre,d\u00e9cembre".split(","),
	"days-format-narrow": "D,L,M,M,J,V,S".split(","),
	"days-standAlone-wide": "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","),
	"quarters-standAlone-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-standAlone-wide": ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
	eraNarrow: ["av. J.-C.", "ap. J.-C."]
}); //>>built
define("dojo/cldr/nls/fr/hebrew", {
	"months-format-wide": "Tisseri,Hesvan,Kislev,T\u00e9beth,Sch\u00e9bat,Adar I,Adar,Nissan,Iyar,Sivan,Tamouz,Ab,Elloul".split(","),
	"months-format-wide-leap": "Adar II",
	"months-format-abbr": "Tisseri,Hesvan,Kislev,T\u00e9beth,Sch\u00e9bat,Adar I,Adar,Nissan,Iyar,Sivan,Tamouz,Ab,Elloul".split(","),
	"months-standAlone-abbr": "Tisseri,Hesvan,Kislev,T\u00e9beth,Sch\u00e9bat,Adar I,Adar,Nissan,Iyar,Sivan,Tamouz,Ab,Elloul".split(","),
	"months-standAlone-wide": "Tisseri,Hesvan,Kislev,T\u00e9beth,Sch\u00e9bat,Adar I,Adar,Nissan,Iyar,Sivan,Tamouz,Ab,Elloul".split(","),
	"days-format-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-format-wide": "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","),
	"days-standAlone-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-standAlone-narrow": "D,L,M,M,J,V,S".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-narrow": ["T1", "T2", "T3", "T4"],
	"quarters-format-wide": ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
	"dayPeriods-format-narrow-pm": "p",
	"dateFormat-full": "EEEE d MMMM y",
	"dateFormat-long": "d MMMM y",
	"dateFormat-medium": "d MMM y",
	"dateFormat-short": "dd/MM/yy",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-yM": "M/yyyy",
	"dateFormatItem-yMd": "d/M/yyyy",
	"dateFormatItem-yMEd": "E d/M/yyyy",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "'T'Q y",
	"dateFormatItem-yQQQ": "QQQ y"
}); //>>built
define("dojo/cldr/nls/fr/islamic", {
	"months-format-abbr": "Mouh.,Saf.,Rabi\u02bb-oul-A.,Rabi\u02bb-out-T.,Djoum.-l-O.,Djoum.-t-T.,Radj.,Cha.,Ram.,Chaou.,Dou-l-Q.,Dou-l-H.".split(","),
	"months-format-wide": ["Mouharram", null, "Rabi\u02bb-oul-Aououal", "Rabi\u02bb-out-Tani", "Djoumada-l-Oula", "Djoumada-t-Tania", "Radjab", "Cha\u02bbban", null, "Chaououal", "Dou-l-Qa\u02bbda", "Dou-l-Hidjja"],
	"months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
	eraAbbr: ["AH"],
	"dateFormat-full": "EEEE d MMMM y G",
	"dateFormat-long": "d MMMM y G",
	"dateFormat-medium": "d MMM, y G",
	"dateFormat-short": "d/M/y G",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMd": "d/MM",
	"dateFormatItem-MMdd": "dd/MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMdd": "dd MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMEd": "E d MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-yyMM": "MM/y G",
	"dateFormatItem-yyMMM": "MMM y G",
	"dateFormatItem-yyMMMd": "d MMM y G",
	"dateFormatItem-yyMMMEd": "E d MMM y G",
	"dateFormatItem-yyQ": "'T'Q y G",
	"dateFormatItem-yyQQQQ": "QQQQ y G",
	"dateFormatItem-yyyy": "y G",
	"dateFormatItem-yyyyM": "M/y G",
	"dateFormatItem-yyyyMd": "d/M/y G",
	"dateFormatItem-yyyyMEd": "E d/M/y G",
	"dateFormatItem-yyyyMMM": "MMM y G",
	"dateFormatItem-yyyyMMMd": "d MMM y G",
	"dateFormatItem-yyyyMMMEd": "E d MMM y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"dateFormatItem-yyyyQ": "'T'Q y G",
	"dateFormatItem-yyyyQQQ": "QQQ y G",
	"months-standAlone-abbr": "Mouh.,Saf.,Rabi\u02bb-oul-A.,Rabi\u02bb-out-T.,Djoum.-l-O.,Djoum.-t-T.,Radj.,Cha.,Ram.,Chaou.,Dou-l-Q.,Dou-l-H.".split(","),
	"months-standAlone-wide": ["Mouharram", null, "Rabi\u02bb-oul-Aououal", "Rabi\u02bb-out-Tani", "Djoumada-l-Oula", "Djoumada-t-Tania", "Radjab", "Cha\u02bbban", null, "Chaououal", "Dou-l-Qa\u02bbda", "Dou-l-Hidjja"],
	"days-format-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-format-wide": "dimanche,lundi,mardi,mercredi,jeudi,vendredi,samedi".split(","),
	"days-standAlone-abbr": "dim.,lun.,mar.,mer.,jeu.,ven.,sam.".split(","),
	"days-standAlone-narrow": "D,L,M,M,J,V,S".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-narrow": ["T1", "T2", "T3", "T4"],
	"quarters-format-wide": ["1er trimestre", "2e trimestre", "3e trimestre", "4e trimestre"],
	"dayPeriods-format-narrow-pm": "p",
	"dateFormatItem-yM": "M/yyyy",
	"dateFormatItem-yMd": "d/M/yyyy",
	"dateFormatItem-yMEd": "E d/M/yyyy",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "'T'Q y",
	"dateFormatItem-yQQQ": "QQQ y"
}); //>>built
define("dojo/cldr/nls/fr/number", {
	decimal: ",",
	group: "\u00a0",
	list: ";",
	percentSign: "%",
	plusSign: "+",
	minusSign: "-",
	exponential: "E",
	perMille: "\u2030",
	infinity: "\u221e",
	nan: "NaN",
	decimalFormat: "#,##0.###",
	"decimalFormat-short": "000\u00a0Bn",
	scientificFormat: "#E0",
	percentFormat: "#,##0\u00a0%",
	currencyFormat: "#,##0.00\u00a0\u00a4"
}); //>>built
define("dojo/cldr/nls/gregorian", {
	root: {
		"months-format-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-format-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-abbr": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-wide": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"days-format-abbr": "1,2,3,4,5,6,7".split(","),
		"days-format-narrow": "1,2,3,4,5,6,7".split(","),
		"days-format-wide": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-abbr": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-narrow": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-wide": "1,2,3,4,5,6,7".split(","),
		"quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-format-narrow": ["1", "2", "3", "4"],
		"quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-narrow": ["1", "2", "3", "4"],
		"quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"],
		"dayPeriods-format-abbr-am": "AM",
		"dayPeriods-format-abbr-pm": "PM",
		"dayPeriods-format-narrow-am": "AM",
		"dayPeriods-format-narrow-pm": "PM",
		"dayPeriods-format-wide-am": "AM",
		"dayPeriods-format-wide-pm": "PM",
		eraNames: ["BCE", "CE"],
		eraAbbr: ["BCE", "CE"],
		eraNarrow: ["BCE", "CE"],
		"dateFormat-full": "EEEE, y MMMM dd",
		"dateFormat-long": "y MMMM d",
		"dateFormat-medium": "y MMM d",
		"dateFormat-short": "yyyy-MM-dd",
		"timeFormat-full": "HH:mm:ss zzzz",
		"timeFormat-long": "HH:mm:ss z",
		"timeFormat-medium": "HH:mm:ss",
		"timeFormat-short": "HH:mm",
		"dateTimeFormat-full": "{1} {0}",
		"dateTimeFormat-long": "{1} {0}",
		"dateTimeFormat-medium": "{1} {0}",
		"dateTimeFormat-short": "{1} {0}",
		"dateFormatItem-d": "d",
		"dateFormatItem-Ed": "d E",
		"dateFormatItem-h": "h a",
		"dateFormatItem-H": "HH",
		"dateFormatItem-hm": "h:mm a",
		"dateFormatItem-Hm": "HH:mm",
		"dateFormatItem-hms": "h:mm:ss a",
		"dateFormatItem-Hms": "HH:mm:ss",
		"dateFormatItem-M": "L",
		"dateFormatItem-Md": "M-d",
		"dateFormatItem-MEd": "E, M-d",
		"dateFormatItem-MMM": "LLL",
		"dateFormatItem-MMMd": "MMM d",
		"dateFormatItem-MMMEd": "E MMM d",
		"dateFormatItem-ms": "mm:ss",
		"dateFormatItem-y": "y",
		"dateFormatItem-yM": "y-M",
		"dateFormatItem-yMd": "y-M-d",
		"dateFormatItem-yMEd": "E, y-M-d",
		"dateFormatItem-yMMM": "y MMM",
		"dateFormatItem-yMMMd": "y MMM d",
		"dateFormatItem-yMMMEd": "E, y MMM d",
		"dateFormatItem-yQ": "y Q",
		"dateFormatItem-yQQQ": "y QQQ",
		"dateTimeFormats-appendItem-Day": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}",
		"dateTimeFormats-appendItem-Era": "{0} {1}",
		"dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Month": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Second": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Timezone": "{0} {1}",
		"dateTimeFormats-appendItem-Week": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Year": "{0} {1}",
		"field-era": "Era",
		"field-year": "Year",
		"field-month": "Month",
		"field-week": "Week",
		"field-day": "Day",
		"field-day-relative+-1": "Yesterday",
		"field-day-relative+0": "Today",
		"field-day-relative+1": "Tomorrow",
		"field-weekday": "Day of the Week",
		"field-dayperiod": "Dayperiod",
		"field-hour": "Hour",
		"field-minute": "Minute",
		"field-second": "Second",
		"field-zone": "Zone"
	},
	ar: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	en: !0,
	"en-au": !0,
	"en-ca": !0,
	"en-gb": !0,
	es: !0,
	fi: !0,
	fr: !0,
	"fr-ch": !0,
	he: !0,
	hu: !0,
	it: !0,
	ja: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-hant": !0,
	"zh-hk": !0,
	"zh-tw": !0
}); //>>built
define("dojo/cldr/nls/hebrew", {
	root: {
		"months-format-abbr": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","),
		"months-format-abbr-leap": "Adar II",
		"months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12,13".split(","),
		"months-format-wide": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","),
		"months-format-wide-leap": "Adar II",
		"months-standAlone-abbr": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","),
		"months-standAlone-abbr-leap": "Adar II",
		"months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12,13".split(","),
		"months-standAlone-wide": "Tishri,Heshvan,Kislev,Tevet,Shevat,Adar I,Adar,Nisan,Iyar,Sivan,Tamuz,Av,Elul".split(","),
		"months-standAlone-wide-leap": "Adar II",
		"days-format-abbr": "1,2,3,4,5,6,7".split(","),
		"days-format-narrow": "1,2,3,4,5,6,7".split(","),
		"days-format-wide": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-abbr": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-narrow": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-wide": "1,2,3,4,5,6,7".split(","),
		"quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-format-narrow": ["1", "2", "3", "4"],
		"quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-narrow": ["1", "2", "3", "4"],
		"quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"],
		"dayPeriods-format-abbr-am": "AM",
		"dayPeriods-format-abbr-pm": "PM",
		"dayPeriods-format-narrow-am": "AM",
		"dayPeriods-format-narrow-pm": "PM",
		"dayPeriods-format-wide-am": "AM",
		"dayPeriods-format-wide-pm": "PM",
		eraNames: ["AM"],
		eraAbbr: ["AM"],
		eraNarrow: ["AM"],
		"dateFormat-full": "EEEE, y MMMM dd",
		"dateFormat-long": "y MMMM d",
		"dateFormat-medium": "y MMM d",
		"dateFormat-short": "yyyy-MM-dd",
		"timeFormat-full": "HH:mm:ss zzzz",
		"timeFormat-long": "HH:mm:ss z",
		"timeFormat-medium": "HH:mm:ss",
		"timeFormat-short": "HH:mm",
		"dateTimeFormat-full": "{1} {0}",
		"dateTimeFormat-long": "{1} {0}",
		"dateTimeFormat-medium": "{1} {0}",
		"dateTimeFormat-short": "{1} {0}",
		"dateFormatItem-d": "d",
		"dateFormatItem-Ed": "d E",
		"dateFormatItem-h": "h a",
		"dateFormatItem-H": "HH",
		"dateFormatItem-hm": "h:mm a",
		"dateFormatItem-Hm": "HH:mm",
		"dateFormatItem-hms": "h:mm:ss a",
		"dateFormatItem-Hms": "HH:mm:ss",
		"dateFormatItem-M": "L",
		"dateFormatItem-Md": "M-d",
		"dateFormatItem-MEd": "E, M-d",
		"dateFormatItem-MMM": "LLL",
		"dateFormatItem-MMMd": "MMM d",
		"dateFormatItem-MMMEd": "E MMM d",
		"dateFormatItem-ms": "mm:ss",
		"dateFormatItem-y": "y",
		"dateFormatItem-yM": "y-M",
		"dateFormatItem-yMd": "y-M-d",
		"dateFormatItem-yMEd": "E, y-M-d",
		"dateFormatItem-yMMM": "y MMM",
		"dateFormatItem-yMMMd": "y MMM d",
		"dateFormatItem-yMMMEd": "E, y MMM d",
		"dateFormatItem-yQ": "y Q",
		"dateFormatItem-yQQQ": "y QQQ",
		"dateTimeFormats-appendItem-Day": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}",
		"dateTimeFormats-appendItem-Era": "{0} {1}",
		"dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Month": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Second": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Timezone": "{0} {1}",
		"dateTimeFormats-appendItem-Week": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Year": "{0} {1}"
	},
	ar: !0,
	el: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	ja: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	ro: !0,
	ru: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-hant": !0
}); //>>built
define("dojo/cldr/nls/islamic", {
	root: {
		"months-format-abbr": "Muh.,Saf.,Rab. I,Rab. II,Jum. I,Jum. II,Raj.,Sha.,Ram.,Shaw.,Dhu\u02bbl-Q.,Dhu\u02bbl-H.".split(","),
		"months-format-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-format-wide": "Muharram,Safar,Rabi\u02bb I,Rabi\u02bb II,Jumada I,Jumada II,Rajab,Sha\u02bbban,Ramadan,Shawwal,Dhu\u02bbl-Qi\u02bbdah,Dhu\u02bbl-Hijjah".split(","),
		"months-standAlone-abbr": "Muh.,Saf.,Rab. I,Rab. II,Jum. I,Jum. II,Raj.,Sha.,Ram.,Shaw.,Dhu\u02bbl-Q.,Dhu\u02bbl-H.".split(","),
		"months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
		"months-standAlone-wide": "Muharram,Safar,Rabi\u02bb I,Rabi\u02bb II,Jumada I,Jumada II,Rajab,Sha\u02bbban,Ramadan,Shawwal,Dhu\u02bbl-Qi\u02bbdah,Dhu\u02bbl-Hijjah".split(","),
		"days-format-abbr": "1,2,3,4,5,6,7".split(","),
		"days-format-narrow": "1,2,3,4,5,6,7".split(","),
		"days-format-wide": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-abbr": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-narrow": "1,2,3,4,5,6,7".split(","),
		"days-standAlone-wide": "1,2,3,4,5,6,7".split(","),
		"quarters-format-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-format-narrow": ["1", "2", "3", "4"],
		"quarters-format-wide": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-abbr": ["Q1", "Q2", "Q3", "Q4"],
		"quarters-standAlone-narrow": ["1", "2", "3", "4"],
		"quarters-standAlone-wide": ["Q1", "Q2", "Q3", "Q4"],
		"dayPeriods-format-abbr-am": "AM",
		"dayPeriods-format-abbr-pm": "PM",
		"dayPeriods-format-narrow-am": "AM",
		"dayPeriods-format-narrow-pm": "PM",
		"dayPeriods-format-wide-am": "AM",
		"dayPeriods-format-wide-pm": "PM",
		eraNames: ["AH"],
		eraAbbr: ["AH"],
		eraNarrow: ["AH"],
		"dateFormat-full": "EEEE, y MMMM dd",
		"dateFormat-long": "y MMMM d",
		"dateFormat-medium": "y MMM d",
		"dateFormat-short": "yyyy-MM-dd",
		"timeFormat-full": "HH:mm:ss zzzz",
		"timeFormat-long": "HH:mm:ss z",
		"timeFormat-medium": "HH:mm:ss",
		"timeFormat-short": "HH:mm",
		"dateTimeFormat-full": "{1} {0}",
		"dateTimeFormat-long": "{1} {0}",
		"dateTimeFormat-medium": "{1} {0}",
		"dateTimeFormat-short": "{1} {0}",
		"dateFormatItem-d": "d",
		"dateFormatItem-Ed": "d E",
		"dateFormatItem-h": "h a",
		"dateFormatItem-H": "HH",
		"dateFormatItem-hm": "h:mm a",
		"dateFormatItem-Hm": "HH:mm",
		"dateFormatItem-hms": "h:mm:ss a",
		"dateFormatItem-Hms": "HH:mm:ss",
		"dateFormatItem-M": "L",
		"dateFormatItem-Md": "M-d",
		"dateFormatItem-MEd": "E, M-d",
		"dateFormatItem-MMM": "LLL",
		"dateFormatItem-MMMd": "MMM d",
		"dateFormatItem-MMMEd": "E MMM d",
		"dateFormatItem-ms": "mm:ss",
		"dateFormatItem-y": "y",
		"dateFormatItem-yM": "y-M",
		"dateFormatItem-yMd": "y-M-d",
		"dateFormatItem-yMEd": "E, y-M-d",
		"dateFormatItem-yMMM": "y MMM",
		"dateFormatItem-yMMMd": "y MMM d",
		"dateFormatItem-yMMMEd": "E, y MMM d",
		"dateFormatItem-yQ": "y Q",
		"dateFormatItem-yQQQ": "y QQQ",
		"dateTimeFormats-appendItem-Day": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Day-Of-Week": "{0} {1}",
		"dateTimeFormats-appendItem-Era": "{0} {1}",
		"dateTimeFormats-appendItem-Hour": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Minute": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Month": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Quarter": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Second": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Timezone": "{0} {1}",
		"dateTimeFormats-appendItem-Week": "{0} ({2}: {1})",
		"dateTimeFormats-appendItem-Year": "{0} {1}"
	},
	ar: !0,
	cs: !0,
	da: !0,
	de: !0,
	en: !0,
	"en-gb": !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	it: !0,
	ja: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-hant": !0
}); //>>built
define("dojo/cldr/nls/it/buddhist", {
	eraAbbr: ["EB"],
	"dateFormat-full": "EEEE d MMMM y G",
	"dateFormat-long": "dd MMMM y G",
	"dateFormat-medium": "dd/MMM/y G",
	"dateFormat-short": "dd/MM/y G",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Gy": "y G",
	"dateFormatItem-h": "hh a",
	"dateFormatItem-hm": "hh:mm a",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-hms": "hh:mm:ss a",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMdd": "dd/MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMdd": "dd MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y G",
	"dateFormatItem-yM": "M/y G",
	"dateFormatItem-yMd": "d/M/y G",
	"dateFormatItem-yMEd": "E, d/M/y G",
	"dateFormatItem-yMMM": "MMM y G",
	"dateFormatItem-yMMMd": "d MMM y G",
	"dateFormatItem-yMMMEd": "E d MMM y G",
	"dateFormatItem-yQ": "Q-y G",
	"dateFormatItem-yQQQ": "QQQ y G",
	"dateFormatItem-yyMM": "MM/y G",
	"dateFormatItem-yyQ": "Q y G",
	"dateFormatItem-yyQQQQ": "QQQQ y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	eraNames: ["EB"],
	eraNarrow: ["EB"],
	"days-format-abbr": "dom,lun,mar,mer,gio,ven,sab".split(","),
	"days-format-wide": "domenica,luned\u00ec,marted\u00ec,mercoled\u00ec,gioved\u00ec,venerd\u00ec,sabato".split(","),
	"days-standAlone-narrow": "D,L,M,M,G,V,S".split(","),
	"days-standAlone-wide": "Domenica,Luned\u00ec,Marted\u00ec,Mercoled\u00ec,Gioved\u00ec,Venerd\u00ec,Sabato".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-wide": ["1o trimestre", "2o trimestre",
		"3o trimestre", "4o trimestre"
	],
	"quarters-standAlone-abbr": ["T1"],
	"quarters-standAlone-wide": ["1\u00ba trimestre", "2\u00ba trimestre", "3\u00ba trimestre", "4\u00ba trimestre"],
	"dayPeriods-format-wide-am": "m.",
	"dayPeriods-format-wide-pm": "p.",
	"months-format-abbr": "gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","),
	"months-format-narrow": "G,F,M,A,M,G,L,A,S,O,N,D".split(","),
	"months-format-wide": "gennaio,febbraio,marzo,aprile,maggio,giugno,luglio,agosto,settembre,ottobre,novembre,dicembre".split(","),
	"months-standAlone-abbr": "gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","),
	"months-standAlone-narrow": "G,F,M,A,M,G,L,A,S,O,N,D".split(","),
	"months-standAlone-wide": "Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(",")
}); //>>built
define("dojo/cldr/nls/it/currency", {
	AUD_displayName: "Dollaro Australiano",
	CAD_displayName: "Dollaro Canadese",
	CHF_displayName: "Franco Svizzero",
	CNY_displayName: "Renmimbi Cinese",
	EUR_displayName: "Euro",
	GBP_displayName: "Sterlina Inglese",
	HKD_displayName: "Dollaro di Hong Kong",
	JPY_displayName: "Yen Giapponese",
	USD_displayName: "Dollaro Statunitense"
}); //>>built
define("dojo/cldr/nls/it/gregorian", {
	"months-format-abbr": "gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","),
	"months-format-narrow": "G,F,M,A,M,G,L,A,S,O,N,D".split(","),
	"months-format-wide": "gennaio,febbraio,marzo,aprile,maggio,giugno,luglio,agosto,settembre,ottobre,novembre,dicembre".split(","),
	"months-standAlone-abbr": "gen,feb,mar,apr,mag,giu,lug,ago,set,ott,nov,dic".split(","),
	"months-standAlone-narrow": "G,F,M,A,M,G,L,A,S,O,N,D".split(","),
	"months-standAlone-wide": "Gennaio,Febbraio,Marzo,Aprile,Maggio,Giugno,Luglio,Agosto,Settembre,Ottobre,Novembre,Dicembre".split(","),
	"days-format-abbr": "dom,lun,mar,mer,gio,ven,sab".split(","),
	"days-format-wide": "domenica,luned\u00ec,marted\u00ec,mercoled\u00ec,gioved\u00ec,venerd\u00ec,sabato".split(","),
	"days-standAlone-narrow": "D,L,M,M,G,V,S".split(","),
	"days-standAlone-wide": "Domenica,Luned\u00ec,Marted\u00ec,Mercoled\u00ec,Gioved\u00ec,Venerd\u00ec,Sabato".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-narrow": ["1", "2", "3", "4"],
	"quarters-format-wide": ["1o trimestre", "2o trimestre", "3o trimestre",
		"4o trimestre"
	],
	"quarters-standAlone-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-standAlone-wide": ["1\u00ba trimestre", "2\u00ba trimestre", "3\u00ba trimestre", "4\u00ba trimestre"],
	"dayPeriods-format-wide-am": "m.",
	"dayPeriods-format-wide-pm": "p.",
	eraNames: ["a.C.", "d.C"],
	eraAbbr: ["aC", "dC"],
	"dateFormat-full": "EEEE d MMMM y",
	"dateFormat-long": "dd MMMM y",
	"dateFormat-medium": "dd/MMM/y",
	"dateFormat-short": "dd/MM/yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"timeFormat-long": "HH:mm:ss z",
	"timeFormat-medium": "HH:mm:ss",
	"timeFormat-short": "HH:mm",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-h": "hh a",
	"dateFormatItem-hm": "hh:mm a",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-hms": "hh:mm:ss a",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMdd": "dd/MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMdd": "dd MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y",
	"dateFormatItem-yM": "M/y",
	"dateFormatItem-yMd": "d/M/y",
	"dateFormatItem-yMEd": "E, d/M/y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "Q-yyyy",
	"dateFormatItem-yQQQ": "QQQ y",
	"dateFormatItem-yyMM": "MM/yy",
	"dateFormatItem-yyQ": "Q yy",
	"dateFormatItem-yyQQQQ": "QQQQ yy",
	"dateFormatItem-yyyyMMMM": "MMMM y",
	"field-era": "era",
	"field-year": "anno",
	"field-year-relative+-1": "Anno scorso",
	"field-year-relative+0": "Questo anno",
	"field-year-relative+1": "Anno prossimo",
	"field-month": "mese",
	"field-month-relative+-1": "Mese scorso",
	"field-month-relative+0": "Questo mese",
	"field-month-relative+1": "Mese prossimo",
	"field-week": "settimana",
	"field-week-relative+-1": "Settimana scorsa",
	"field-week-relative+0": "Questa settimana",
	"field-week-relative+1": "Settimana prossima",
	"field-day": "giorno",
	"field-day-relative+-2": "l'altro ieri",
	"field-day-relative+-1": "ieri",
	"field-day-relative+0": "oggi",
	"field-day-relative+1": "domani",
	"field-day-relative+2": "dopodomani",
	"field-weekday": "giorno della settimana",
	"field-dayperiod": "periodo del giorno",
	"field-hour": "ora",
	"field-minute": "minuto",
	"field-second": "secondo",
	"field-zone": "zona",
	"days-format-narrow": "D,L,M,M,G,V,S".split(","),
	"days-standAlone-abbr": "dom,lun,mar,mer,gio,ven,sab".split(","),
	eraNarrow: ["aC", "dC"]
}); //>>built
define("dojo/cldr/nls/it/islamic", {
	"dateFormat-full": "EEEE d MMMM y G",
	"dateFormat-long": "dd MMMM y G",
	"dateFormat-medium": "dd/MMM/y G",
	"dateFormat-short": "dd/MM/y G",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-h": "hh a",
	"dateFormatItem-hm": "hh:mm a",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-hms": "hh:mm:ss a",
	"dateFormatItem-Hms": "HH:mm:ss",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d/M",
	"dateFormatItem-MEd": "E d/M",
	"dateFormatItem-MMdd": "dd/MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMdd": "dd MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-yQ": "Q-y G",
	"dateFormatItem-yQQQ": "QQQ y G",
	"dateFormatItem-yyMM": "MM/y G",
	"dateFormatItem-yyQ": "Q y G",
	"dateFormatItem-yyQQQQ": "QQQQ y G",
	"dateFormatItem-yyyy": "y G",
	"dateFormatItem-yyyyM": "M/y G",
	"dateFormatItem-yyyyMd": "d/M/y G",
	"dateFormatItem-yyyyMEd": "E, d/M/y G",
	"dateFormatItem-yyyyMMM": "MMM y G",
	"dateFormatItem-yyyyMMMd": "d MMM y G",
	"dateFormatItem-yyyyMMMEd": "E d MMM y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"days-format-abbr": "dom,lun,mar,mer,gio,ven,sab".split(","),
	"days-format-wide": "domenica,luned\u00ec,marted\u00ec,mercoled\u00ec,gioved\u00ec,venerd\u00ec,sabato".split(","),
	"days-standAlone-narrow": "D,L,M,M,G,V,S".split(","),
	"days-standAlone-wide": "Domenica,Luned\u00ec,Marted\u00ec,Mercoled\u00ec,Gioved\u00ec,Venerd\u00ec,Sabato".split(","),
	"quarters-format-abbr": ["T1", "T2", "T3", "T4"],
	"quarters-format-wide": ["1o trimestre", "2o trimestre", "3o trimestre", "4o trimestre"],
	"quarters-standAlone-abbr": ["T1"],
	"quarters-standAlone-wide": ["1\u00ba trimestre", "2\u00ba trimestre", "3\u00ba trimestre", "4\u00ba trimestre"],
	"dayPeriods-format-wide-am": "m.",
	"dayPeriods-format-wide-pm": "p.",
	"dateFormatItem-yM": "M/y",
	"dateFormatItem-yMd": "d/M/y",
	"dateFormatItem-yMEd": "E, d/M/y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y"
}); //>>built
define("dojo/cldr/nls/it/number", {
	decimal: ",",
	group: ".",
	percentSign: "%",
	plusSign: "+",
	minusSign: "-",
	perMille: "\u2030",
	infinity: "\u221e",
	decimalFormat: "#,##0.###",
	"decimalFormat-short": "000\u00a0B",
	scientificFormat: "#E0",
	percentFormat: "#,##0%",
	currencyFormat: "\u00a4\u00a0#,##0.00"
}); //>>built
define("dojo/cldr/nls/nl/buddhist", {
	"dateFormat-full": "EEEE d MMMM y G",
	"dateFormat-long": "d MMMM y G",
	"dateFormat-medium": "d MMM y G",
	"dateFormat-short": "dd-MM-yy G",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Gy": "y G",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d-M",
	"dateFormatItem-MEd": "E d-M",
	"dateFormatItem-MMd": "d-MM",
	"dateFormatItem-MMdd": "dd-MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMd": "d MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y G",
	"dateFormatItem-yM": "M-y G",
	"dateFormatItem-yMd": "d-M-y G",
	"dateFormatItem-yMEd": "E d-M-y G",
	"dateFormatItem-yMMM": "MMM y G",
	"dateFormatItem-yMMMd": "d MMM y G",
	"dateFormatItem-yMMMEd": "E d MMM y G",
	"dateFormatItem-yQ": "Q y G",
	"dateFormatItem-yQQQ": "QQQ y G",
	"dateFormatItem-yyMM": "MM-yy G",
	"dateFormatItem-yyMMM": "MMM yy G",
	"dateFormatItem-yyQ": "Q yy G",
	"dateFormatItem-yyQQQQ": "QQQQ yy G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"days-format-abbr": "zo,ma,di,wo,do,vr,za".split(","),
	"days-format-wide": "zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","),
	"days-standAlone-narrow": "Z,M,D,W,D,V,Z".split(","),
	"quarters-format-abbr": ["K1", "K2", "K3", "K4"],
	"quarters-format-wide": ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
	"months-format-abbr": "jan.,feb.,mrt.,apr.,mei,jun.,jul.,aug.,sep.,okt.,nov.,dec.".split(","),
	"months-format-wide": "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
	"months-standAlone-abbr": "jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","),
	"months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(",")
}); //>>built
define("dojo/cldr/nls/nl/currency", {
	AUD_displayName: "Australische dollar",
	CAD_displayName: "Canadese dollar",
	CHF_displayName: "Zwitserse franc",
	CNY_displayName: "Chinese yuan renminbi",
	EUR_displayName: "Euro",
	GBP_displayName: "Brits pond sterling",
	HKD_displayName: "Hongkongse dollar",
	JPY_displayName: "Japanse yen",
	USD_displayName: "Amerikaanse dollar"
}); //>>built
define("dojo/cldr/nls/nl/gregorian", {
	"months-format-abbr": "jan.,feb.,mrt.,apr.,mei,jun.,jul.,aug.,sep.,okt.,nov.,dec.".split(","),
	"months-format-wide": "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
	"months-standAlone-abbr": "jan,feb,mrt,apr,mei,jun,jul,aug,sep,okt,nov,dec".split(","),
	"months-standAlone-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","),
	"days-format-abbr": "zo,ma,di,wo,do,vr,za".split(","),
	"days-format-wide": "zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","),
	"days-standAlone-narrow": "Z,M,D,W,D,V,Z".split(","),
	"quarters-format-abbr": ["K1", "K2", "K3", "K4"],
	"quarters-format-narrow": ["1", "2", "3", "4"],
	"quarters-format-wide": ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
	"dayPeriods-format-abbr-noon": "12 uur 's middags",
	"dayPeriods-format-narrow-noon": "n",
	"dayPeriods-format-wide-am": "AM",
	"dayPeriods-format-wide-noon": "12 uur 's middags",
	"dayPeriods-format-wide-pm": "PM",
	eraNames: ["Voor Christus", "na Christus"],
	eraAbbr: ["v. Chr.", "n. Chr."],
	"dateFormat-full": "EEEE d MMMM y",
	"dateFormat-long": "d MMMM y",
	"dateFormat-medium": "d MMM y",
	"dateFormat-short": "dd-MM-yy",
	"timeFormat-full": "HH:mm:ss zzzz",
	"timeFormat-long": "HH:mm:ss z",
	"timeFormat-medium": "HH:mm:ss",
	"timeFormat-short": "HH:mm",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d-M",
	"dateFormatItem-MEd": "E d-M",
	"dateFormatItem-MMd": "d-MM",
	"dateFormatItem-MMdd": "dd-MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d-MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMd": "d MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-y": "y",
	"dateFormatItem-yM": "M-y",
	"dateFormatItem-yMd": "d-M-y",
	"dateFormatItem-yMEd": "E d-M-y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "Q yyyy",
	"dateFormatItem-yQQQ": "QQQ y",
	"dateFormatItem-yyMM": "MM-yy",
	"dateFormatItem-yyMMM": "MMM yy",
	"dateFormatItem-yyQ": "Q yy",
	"dateFormatItem-yyQQQQ": "QQQQ yy",
	"dateFormatItem-yyyyMMMM": "MMMM y",
	"field-era": "Tijdperk",
	"field-year": "Jaar",
	"field-year-relative+-1": "Vorig jaar",
	"field-year-relative+0": "Dit jaar",
	"field-year-relative+1": "Volgend jaar",
	"field-month": "Maand",
	"field-month-relative+-1": "Vorige maand",
	"field-month-relative+0": "Deze maand",
	"field-month-relative+1": "Volgende maand",
	"field-week": "week",
	"field-week-relative+-1": "Vorige week",
	"field-week-relative+0": "Deze week",
	"field-week-relative+1": "Volgende week",
	"field-day": "Dag",
	"field-day-relative+-2": "Eergisteren",
	"field-day-relative+-1": "Gisteren",
	"field-day-relative+0": "Vandaag",
	"field-day-relative+1": "Morgen",
	"field-day-relative+2": "Overmorgen",
	"field-weekday": "Dag van de week",
	"field-dayperiod": "AM/PM",
	"field-hour": "Uur",
	"field-minute": "Minuut",
	"field-second": "Seconde",
	"field-zone": "Zone",
	"months-format-narrow": "J,F,M,A,M,J,J,A,S,O,N,D".split(","),
	"months-standAlone-wide": "januari,februari,maart,april,mei,juni,juli,augustus,september,oktober,november,december".split(","),
	"days-format-narrow": "Z,M,D,W,D,V,Z".split(","),
	"days-standAlone-abbr": "zo,ma,di,wo,do,vr,za".split(","),
	"days-standAlone-wide": "zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","),
	"quarters-standAlone-abbr": ["K1", "K2", "K3", "K4"],
	"quarters-standAlone-wide": ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
	eraNarrow: ["v. Chr.", "n. Chr."]
}); //>>built
define("dojo/cldr/nls/nl/hebrew", {
	"months-format-wide": "Tisjrie,Chesjwan,Kislev,Tevet,Sjevat,Adar A,Adar,Nisan,Ijar,Sivan,Tammoez,Av,Elloel".split(","),
	"months-format-wide-leap": "Adar B",
	"months-format-abbr": "Tisjrie,Chesjwan,Kislev,Tevet,Sjevat,Adar A,Adar,Nisan,Ijar,Sivan,Tammoez,Av,Elloel".split(","),
	"months-standAlone-abbr": "Tisjrie,Chesjwan,Kislev,Tevet,Sjevat,Adar A,Adar,Nisan,Ijar,Sivan,Tammoez,Av,Elloel".split(","),
	"months-standAlone-wide": "Tisjrie,Chesjwan,Kislev,Tevet,Sjevat,Adar A,Adar,Nisan,Ijar,Sivan,Tammoez,Av,Elloel".split(","),
	"days-format-abbr": "zo,ma,di,wo,do,vr,za".split(","),
	"days-format-wide": "zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","),
	"days-standAlone-narrow": "Z,M,D,W,D,V,Z".split(","),
	"quarters-format-abbr": ["K1", "K2", "K3", "K4"],
	"quarters-format-wide": ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
	"dateFormat-full": "EEEE d MMMM y",
	"dateFormat-long": "d MMMM y",
	"dateFormat-medium": "d MMM y",
	"dateFormat-short": "dd-MM-yy",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Md": "d-M",
	"dateFormatItem-MEd": "E d-M",
	"dateFormatItem-MMMd": "d-MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-yM": "M-y",
	"dateFormatItem-yMd": "d-M-y",
	"dateFormatItem-yMEd": "E d-M-y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "Q yyyy",
	"dateFormatItem-yQQQ": "QQQ y"
}); //>>built
define("dojo/cldr/nls/nl/islamic", {
	"months-format-abbr": "Moeh.,Saf.,Rab. I,Rab. II,Joem. I,Joem. II,Raj.,Sja.,Ram.,Sjaw.,Doe al k.,Doe al h.".split(","),
	"months-format-wide": "Moeharram,Safar,Rabi\u02bba al awal,Rabi\u02bba al thani,Joemad\u02bbal awal,Joemad\u02bbal thani,Rajab,Sja\u02bbaban,Ramadan,Sjawal,Doe al ka\u02bbaba,Doe al hizja".split(","),
	"months-standAlone-narrow": "1,2,3,4,5,6,7,8,9,10,11,12".split(","),
	eraAbbr: ["Sa\u02bbna Hizjria"],
	"dateFormat-full": "EEEE d MMMM y G",
	"dateFormat-long": "d MMMM y G",
	"dateFormat-medium": "d MMM y G",
	"dateFormat-short": "dd-MM-yy G",
	"dateFormatItem-d": "d",
	"dateFormatItem-Ed": "E d",
	"dateFormatItem-Hm": "HH:mm",
	"dateFormatItem-M": "L",
	"dateFormatItem-Md": "d-M",
	"dateFormatItem-MEd": "E d-M",
	"dateFormatItem-MMd": "d-MM",
	"dateFormatItem-MMdd": "dd-MM",
	"dateFormatItem-MMM": "LLL",
	"dateFormatItem-MMMd": "d MMM",
	"dateFormatItem-MMMEd": "E d MMM",
	"dateFormatItem-MMMMd": "d MMMM",
	"dateFormatItem-ms": "mm:ss",
	"dateFormatItem-yyMM": "MM-yy G",
	"dateFormatItem-yyMMM": "MMM yy G",
	"dateFormatItem-yyQ": "Q yy G",
	"dateFormatItem-yyQQQQ": "QQQQ yy G",
	"dateFormatItem-yyyy": "y G",
	"dateFormatItem-yyyyM": "M-y G",
	"dateFormatItem-yyyyMd": "d-M-y G",
	"dateFormatItem-yyyyMEd": "E d-M-y G",
	"dateFormatItem-yyyyMMM": "MMM y G",
	"dateFormatItem-yyyyMMMd": "d MMM y G",
	"dateFormatItem-yyyyMMMEd": "E d MMM y G",
	"dateFormatItem-yyyyMMMM": "MMMM y G",
	"dateFormatItem-yyyyQ": "Q y G",
	"dateFormatItem-yyyyQQQ": "QQQ y G",
	"months-standAlone-abbr": "Moeh.,Saf.,Rab. I,Rab. II,Joem. I,Joem. II,Raj.,Sja.,Ram.,Sjaw.,Doe al k.,Doe al h.".split(","),
	"months-standAlone-wide": "Moeharram,Safar,Rabi\u02bba al awal,Rabi\u02bba al thani,Joemad\u02bbal awal,Joemad\u02bbal thani,Rajab,Sja\u02bbaban,Ramadan,Sjawal,Doe al ka\u02bbaba,Doe al hizja".split(","),
	eraNames: ["Sa\u02bbna Hizjria"],
	eraNarrow: ["Sa\u02bbna Hizjria"],
	"days-format-abbr": "zo,ma,di,wo,do,vr,za".split(","),
	"days-format-wide": "zondag,maandag,dinsdag,woensdag,donderdag,vrijdag,zaterdag".split(","),
	"days-standAlone-narrow": "Z,M,D,W,D,V,Z".split(","),
	"quarters-format-abbr": ["K1", "K2", "K3",
		"K4"
	],
	"quarters-format-wide": ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
	"dateFormatItem-yM": "M-y",
	"dateFormatItem-yMd": "d-M-y",
	"dateFormatItem-yMEd": "E d-M-y",
	"dateFormatItem-yMMM": "MMM y",
	"dateFormatItem-yMMMd": "d MMM y",
	"dateFormatItem-yMMMEd": "E d MMM y",
	"dateFormatItem-yQ": "Q yyyy",
	"dateFormatItem-yQQQ": "QQQ y"
}); //>>built
define("dojo/cldr/nls/nl/number", {
	decimal: ",",
	group: ".",
	list: ";",
	percentSign: "%",
	plusSign: "+",
	minusSign: "-",
	exponential: "E",
	perMille: "\u2030",
	infinity: "\u221e",
	nan: "NaN",
	decimalFormat: "#,##0.###",
	"decimalFormat-short": "000\u00a0bilj",
	scientificFormat: "#E0",
	percentFormat: "#,##0%",
	currencyFormat: "\u00a4\u00a0#,##0.00;\u00a4\u00a0#,##0.00-"
}); //>>built
define("dojo/cldr/nls/number", {
	root: {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000T",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4\u00a0#,##0.00"
	},
	ar: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	en: !0,
	"en-gb": !0,
	es: !0,
	fi: !0,
	fr: !0,
	"fr-ch": !0,
	he: !0,
	hu: !0,
	it: !0,
	ja: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-hant": !0,
	"zh-hk": !0,
	"zh-tw": !0
}); //>>built
define("dojo/nls/colors", {
	root: {
		aliceblue: "alice blue",
		antiquewhite: "antique white",
		aqua: "aqua",
		aquamarine: "aquamarine",
		azure: "azure",
		beige: "beige",
		bisque: "bisque",
		black: "black",
		blanchedalmond: "blanched almond",
		blue: "blue",
		blueviolet: "blue-violet",
		brown: "brown",
		burlywood: "burlywood",
		cadetblue: "cadet blue",
		chartreuse: "chartreuse",
		chocolate: "chocolate",
		coral: "coral",
		cornflowerblue: "cornflower blue",
		cornsilk: "cornsilk",
		crimson: "crimson",
		cyan: "cyan",
		darkblue: "dark blue",
		darkcyan: "dark cyan",
		darkgoldenrod: "dark goldenrod",
		darkgray: "dark gray",
		darkgreen: "dark green",
		darkgrey: "dark gray",
		darkkhaki: "dark khaki",
		darkmagenta: "dark magenta",
		darkolivegreen: "dark olive green",
		darkorange: "dark orange",
		darkorchid: "dark orchid",
		darkred: "dark red",
		darksalmon: "dark salmon",
		darkseagreen: "dark sea green",
		darkslateblue: "dark slate blue",
		darkslategray: "dark slate gray",
		darkslategrey: "dark slate gray",
		darkturquoise: "dark turquoise",
		darkviolet: "dark violet",
		deeppink: "deep pink",
		deepskyblue: "deep sky blue",
		dimgray: "dim gray",
		dimgrey: "dim gray",
		dodgerblue: "dodger blue",
		firebrick: "fire brick",
		floralwhite: "floral white",
		forestgreen: "forest green",
		fuchsia: "fuchsia",
		gainsboro: "gainsboro",
		ghostwhite: "ghost white",
		gold: "gold",
		goldenrod: "goldenrod",
		gray: "gray",
		green: "green",
		greenyellow: "green-yellow",
		grey: "gray",
		honeydew: "honeydew",
		hotpink: "hot pink",
		indianred: "indian red",
		indigo: "indigo",
		ivory: "ivory",
		khaki: "khaki",
		lavender: "lavender",
		lavenderblush: "lavender blush",
		lawngreen: "lawn green",
		lemonchiffon: "lemon chiffon",
		lightblue: "light blue",
		lightcoral: "light coral",
		lightcyan: "light cyan",
		lightgoldenrodyellow: "light goldenrod yellow",
		lightgray: "light gray",
		lightgreen: "light green",
		lightgrey: "light gray",
		lightpink: "light pink",
		lightsalmon: "light salmon",
		lightseagreen: "light sea green",
		lightskyblue: "light sky blue",
		lightslategray: "light slate gray",
		lightslategrey: "light slate gray",
		lightsteelblue: "light steel blue",
		lightyellow: "light yellow",
		lime: "lime",
		limegreen: "lime green",
		linen: "linen",
		magenta: "magenta",
		maroon: "maroon",
		mediumaquamarine: "medium aquamarine",
		mediumblue: "medium blue",
		mediumorchid: "medium orchid",
		mediumpurple: "medium purple",
		mediumseagreen: "medium sea green",
		mediumslateblue: "medium slate blue",
		mediumspringgreen: "medium spring green",
		mediumturquoise: "medium turquoise",
		mediumvioletred: "medium violet-red",
		midnightblue: "midnight blue",
		mintcream: "mint cream",
		mistyrose: "misty rose",
		moccasin: "moccasin",
		navajowhite: "navajo white",
		navy: "navy",
		oldlace: "old lace",
		olive: "olive",
		olivedrab: "olive drab",
		orange: "orange",
		orangered: "orange red",
		orchid: "orchid",
		palegoldenrod: "pale goldenrod",
		palegreen: "pale green",
		paleturquoise: "pale turquoise",
		palevioletred: "pale violet-red",
		papayawhip: "papaya whip",
		peachpuff: "peach puff",
		peru: "peru",
		pink: "pink",
		plum: "plum",
		powderblue: "powder blue",
		purple: "purple",
		red: "red",
		rosybrown: "rosy brown",
		royalblue: "royal blue",
		saddlebrown: "saddle brown",
		salmon: "salmon",
		sandybrown: "sandy brown",
		seagreen: "sea green",
		seashell: "seashell",
		sienna: "sienna",
		silver: "silver",
		skyblue: "sky blue",
		slateblue: "slate blue",
		slategray: "slate gray",
		slategrey: "slate gray",
		snow: "snow",
		springgreen: "spring green",
		steelblue: "steel blue",
		tan: "tan",
		teal: "teal",
		thistle: "thistle",
		tomato: "tomato",
		transparent: "transparent",
		turquoise: "turquoise",
		violet: "violet",
		wheat: "wheat",
		white: "white",
		whitesmoke: "white smoke",
		yellow: "yellow",
		yellowgreen: "yellow green"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dojo/nls/de/colors", {
	aliceblue: "Alice-blau",
	antiquewhite: "Antikwei\u00df",
	aqua: "Wasserblau",
	aquamarine: "Aquamarin",
	azure: "Azur",
	beige: "Beige",
	bisque: "Bisquit",
	black: "Schwarz",
	blanchedalmond: "Mandelwei\u00df",
	blue: "Blau",
	blueviolet: "Blauviolett",
	brown: "Braun",
	burlywood: "Burlywood",
	cadetblue: "Kadettenblau",
	chartreuse: "Helles Gelbgr\u00fcn",
	chocolate: "Schokoladenbraun",
	coral: "Koralle",
	cornflowerblue: "Kornblumenblau",
	cornsilk: "Kornseide",
	crimson: "Karmesinrot",
	cyan: "Zyan",
	darkblue: "Dunkelblau",
	darkcyan: "Dunkelzyan",
	darkgoldenrod: "Dunkelgoldgelb",
	darkgray: "Dunkelgrau",
	darkgreen: "Dunkelgr\u00fcn",
	darkgrey: "Dunkelgrau",
	darkkhaki: "Dunkelkhaki",
	darkmagenta: "Dunkelmagenta",
	darkolivegreen: "Dunkelolivgr\u00fcn",
	darkorange: "Dunkelorange",
	darkorchid: "Dunkelorchidee",
	darkred: "Dunkelrot",
	darksalmon: "Dunkellachs",
	darkseagreen: "Dunkles Meergr\u00fcn",
	darkslateblue: "Dunkelschieferblau",
	darkslategray: "Dunkelschiefergrau",
	darkslategrey: "Dunkelschiefergrau",
	darkturquoise: "Dunkelt\u00fcrkis",
	darkviolet: "Dunkelviolett",
	deeppink: "Tiefrosa",
	deepskyblue: "Dunkles Himmelblau",
	dimgray: "Blassgrau",
	dimgrey: "Blassgrau",
	dodgerblue: "Dodger-blau",
	firebrick: "Schamottestein",
	floralwhite: "Bl\u00fctenwei\u00df",
	forestgreen: "Forstgr\u00fcn",
	fuchsia: "Fuchsia",
	gainsboro: "Gainsboro",
	ghostwhite: "Geisterwei\u00df",
	gold: "Gold",
	goldenrod: "Goldgelb",
	gray: "Grau",
	green: "Gr\u00fcn",
	greenyellow: "Gr\u00fcngelb",
	grey: "Grau",
	honeydew: "Honigtau",
	hotpink: "Knallrosa",
	indianred: "Indischrot",
	indigo: "Indigoblau",
	ivory: "Elfenbein",
	khaki: "Khaki",
	lavender: "Lavendelblau",
	lavenderblush: "Lavendelhauch",
	lawngreen: "Grasgr\u00fcn",
	lemonchiffon: "Zitronenchiffon",
	lightblue: "Hellblau",
	lightcoral: "Hellkoralle",
	lightcyan: "Hellzyan",
	lightgoldenrodyellow: "Hellgoldgelb",
	lightgray: "Hellgrau",
	lightgreen: "Hellgr\u00fcn",
	lightgrey: "Hellgrau",
	lightpink: "Hellrosa",
	lightsalmon: "Helllachs",
	lightseagreen: "Helles Meergr\u00fcn",
	lightskyblue: "Helles Himmelblau",
	lightslategray: "Helles Schiefergrau",
	lightslategrey: "Helles Schiefergrau",
	lightsteelblue: "Helles Stahlblau",
	lightyellow: "Hellgelb",
	lime: "Limone",
	limegreen: "Limonengr\u00fcn",
	linen: "Leinen",
	magenta: "Magenta",
	maroon: "Kastanienbraun",
	mediumaquamarine: "Mittelaquamarin",
	mediumblue: "Mittelblau",
	mediumorchid: "Mittelorchidee",
	mediumpurple: "Mittelpurpur",
	mediumseagreen: "Mittelmeeresgr\u00fcn",
	mediumslateblue: "Mittelschieferblau ",
	mediumspringgreen: "Mittelfr\u00fchlingsgr\u00fcn",
	mediumturquoise: "Mittelt\u00fcrkis ",
	mediumvioletred: "Mittelviolettrot ",
	midnightblue: "Mitternachtblau",
	mintcream: "Mintcreme",
	mistyrose: "Blassrose",
	moccasin: "Mokassin",
	navajowhite: "Navajo-wei\u00df",
	navy: "Marineblau",
	oldlace: "Alte Spitze",
	olive: "Oliv",
	olivedrab: "Olivgrau",
	orange: "Orange",
	orangered: "Orangerot",
	orchid: "Orchidee",
	palegoldenrod: "Blassgoldgelb",
	palegreen: "Blassgr\u00fcn",
	paleturquoise: "Blasst\u00fcrkis",
	palevioletred: "Blassviolettrot ",
	papayawhip: "Papayacreme",
	peachpuff: "Pfirsich",
	peru: "Peru",
	pink: "Rosa",
	plum: "Pflaume",
	powderblue: "Pulverblau",
	purple: "Purpurrot",
	red: "Rot",
	rosybrown: "Rosigbraun",
	royalblue: "K\u00f6nigsblau",
	saddlebrown: "Sattelbraun",
	salmon: "Lachs",
	sandybrown: "Sandbraun",
	seagreen: "Meeresgr\u00fcn",
	seashell: "Muschelwei\u00df",
	sienna: "Sienna",
	silver: "Silbergrau",
	skyblue: "Himmelblau",
	slateblue: "Schieferblau",
	slategray: "Schiefergrau",
	slategrey: "Schiefergrau",
	snow: "Schneewei\u00df",
	springgreen: "Fr\u00fchlingsgr\u00fcn",
	steelblue: "Stahlblau",
	tan: "Hautfarben",
	teal: "Smaragdgr\u00fcn",
	thistle: "Distel",
	tomato: "Tomatenrot",
	transparent: "Transparent",
	turquoise: "T\u00fcrkis",
	violet: "Violett",
	wheat: "Weizen",
	white: "Wei\u00df",
	whitesmoke: "Rauchwei\u00df",
	yellow: "Gelb",
	yellowgreen: "Gelbgr\u00fcn"
}); //>>built
define("dojo/nls/dojo_ROOT", {
	"dijit/nls/loading": {
		loadingState: "Loading...",
		errorState: "Sorry, an error occurred"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Cancel",
		buttonSave: "Save",
		itemClose: "Close"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "The value entered is not valid.",
		missingMessage: "This value is required.",
		rangeMessage: "This value is out of range."
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000T",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4\u00a0#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Hue Selector",
		saturationPickerTitle: "Saturation Selector"
	}
}); //>>built
define("dojo/nls/dojo_ar", {
	"dijit/nls/loading": {
		loadingState: "\u062c\u0627\u0631\u064a \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",
		errorState: "\u0639\u0641\u0648\u0627\u060c \u062d\u062f\u062b \u062e\u0637\u0623"
	},
	"dijit/nls/common": {
		buttonOk: "\u062d\u0633\u0646\u0627",
		buttonCancel: "\u0627\u0644\u063a\u0627\u0621",
		buttonSave: "\u062d\u0641\u0638",
		itemClose: "\u0627\u063a\u0644\u0627\u0642"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062a\u064a \u062a\u0645 \u0627\u062f\u062e\u0627\u0644\u0647\u0627 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629.",
		missingMessage: "\u064a\u062c\u0628 \u0627\u062f\u062e\u0627\u0644 \u0647\u0630\u0647 \u0627\u0644\u0642\u064a\u0645\u0629.",
		rangeMessage: "\u0647\u0630\u0647 \u0627\u0644\u0642\u064a\u0645\u0629 \u0644\u064a\u0633 \u0628\u0627\u0644\u0645\u062f\u0649 \u0627\u0644\u0635\u062d\u064a\u062d."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###;#,##0.###-",
		"decimalFormat-short": "000T",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4\u00a0#,##0.00;\u00a4\u00a0#,##0.00-"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "\u0645\u062d\u062f\u062f \u062a\u062f\u0631\u062c \u0627\u0644\u0644\u0648\u0646",
		saturationPickerTitle: "\u0645\u062d\u062f\u062f \u062f\u0631\u062c\u0629 \u0627\u0644\u062a\u0634\u0628\u0639"
	}
}); //>>built
define("dojo/nls/dojo_ca", {
	"dijit/nls/loading": {
		loadingState: "S'est\u00e0 carregant...",
		errorState: "Ens sap greu. S'ha produ\u00eft un error."
	},
	"dijit/nls/common": {
		buttonOk: "D'acord",
		buttonCancel: "Cancel\u00b7la",
		buttonSave: "Desa",
		itemClose: "Tanca"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "El valor introdu\u00eft no \u00e9s v\u00e0lid",
		missingMessage: "Aquest valor \u00e9s necessari",
		rangeMessage: "Aquest valor \u00e9s fora de l'interval"
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0B",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "v",
		greenLabel: "e",
		blueLabel: "b",
		hueLabel: "m",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Selector de mat\u00eds",
		saturationPickerTitle: "Selector de saturaci\u00f3"
	}
}); //>>built
define("dojo/nls/dojo_cs", {
	"dijit/nls/loading": {
		loadingState: "Prob\u00edh\u00e1 na\u010d\u00edt\u00e1n\u00ed...",
		errorState: "Omlouv\u00e1me se, do\u0161lo k chyb\u011b"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Storno",
		buttonSave: "Ulo\u017eit",
		itemClose: "Zav\u0159\u00edt"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Zadan\u00e1 hodnota nen\u00ed platn\u00e1.",
		missingMessage: "Tato hodnota je vy\u017eadov\u00e1na.",
		rangeMessage: "Tato hodnota je mimo rozsah."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bil'.'",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "\u010d",
		greenLabel: "z",
		blueLabel: "m",
		hueLabel: "o",
		saturationLabel: "n",
		valueLabel: "j",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Selektor odst\u00ednu",
		saturationPickerTitle: "Selektor sytosti"
	}
}); //>>built
define("dojo/nls/dojo_da", {
	"dijit/nls/loading": {
		loadingState: "Indl\u00e6ser...",
		errorState: "Der er opst\u00e5et en fejl"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Annull\u00e9r",
		buttonSave: "Gem",
		itemClose: "Luk"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Den angivne v\u00e6rdi er ugyldig.",
		missingMessage: "V\u00e6rdien er p\u00e5kr\u00e6vet.",
		rangeMessage: "V\u00e6rdien er uden for intervallet."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ",",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bill",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "n",
		saturationLabel: "m",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "V\u00e6lg nuance",
		saturationPickerTitle: "V\u00e6lg m\u00e6tning"
	}
}); //>>built
define("dojo/nls/dojo_de", {
	"dijit/nls/loading": {
		loadingState: "Wird geladen...",
		errorState: "Es ist ein Fehler aufgetreten."
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Abbrechen",
		buttonSave: "Speichern",
		itemClose: "Schlie\u00dfen"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Der eingegebene Wert ist ung\u00fcltig. ",
		missingMessage: "Dieser Wert ist erforderlich.",
		rangeMessage: "Dieser Wert liegt au\u00dferhalb des g\u00fcltigen Bereichs. "
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0B",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Farbtonauswahl",
		saturationPickerTitle: "S\u00e4ttigungsauswahl"
	}
}); //>>built
define("dojo/nls/dojo_el", {
	"dijit/nls/loading": {
		loadingState: "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7...",
		errorState: "\u03a3\u03b1\u03c2 \u03b6\u03b7\u03c4\u03bf\u03cd\u03bc\u03b5 \u03c3\u03c5\u03b3\u03bd\u03ce\u03bc\u03b7, \u03c0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1"
	},
	"dijit/nls/common": {
		buttonOk: "\u039f\u039a",
		buttonCancel: "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
		buttonSave: "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",
		itemClose: "\u039a\u03bb\u03b5\u03af\u03c3\u03b9\u03bc\u03bf"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03bf\u03c5 \u03ba\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03ae\u03c3\u03b1\u03c4\u03b5 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ad\u03b3\u03ba\u03c5\u03c1\u03b7.",
		missingMessage: "\u0397 \u03c4\u03b9\u03bc\u03ae \u03b1\u03c5\u03c4\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03b1\u03c0\u03b1\u03c1\u03b1\u03af\u03c4\u03b7\u03c4\u03b1 \u03bd\u03b1 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af.",
		rangeMessage: "\u0397 \u03c4\u03b9\u03bc\u03ae \u03b1\u03c5\u03c4\u03ae \u03b4\u03b5\u03bd \u03b1\u03bd\u03ae\u03ba\u03b5\u03b9 \u03c3\u03c4\u03bf \u03b5\u03cd\u03c1\u03bf\u03c2 \u03ad\u03b3\u03ba\u03c5\u03c1\u03c9\u03bd \u03c4\u03b9\u03bc\u03ce\u03bd."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ",",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "e",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0\u03c4\u03c1\u03b9\u03c2",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "\u03ba",
		greenLabel: "\u03c0",
		blueLabel: "\u03bc",
		hueLabel: "\u03b1",
		saturationLabel: "\u03ba",
		valueLabel: "\u03c4",
		degLabel: "\u00b0",
		hexLabel: "16-\u03b1\u03b4\u03b9\u03ba\u03cc",
		huePickerTitle: "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03b1\u03c0\u03cc\u03c7\u03c1\u03c9\u03c3\u03b7\u03c2",
		saturationPickerTitle: "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ba\u03bf\u03c1\u03b5\u03c3\u03bc\u03bf\u03cd"
	}
}); //>>built
define("dojo/nls/dojo_en-gb", {
	"dijit/nls/loading": {
		loadingState: "Loading...",
		errorState: "Sorry, an error occurred"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Cancel",
		buttonSave: "Save",
		itemClose: "Close"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "The value entered is not valid.",
		missingMessage: "This value is required.",
		rangeMessage: "This value is out of range."
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000T",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Hue Selector",
		saturationPickerTitle: "Saturation Selector"
	}
}); //>>built
define("dojo/nls/dojo_en-us", {
	"dijit/nls/loading": {
		loadingState: "Loading...",
		errorState: "Sorry, an error occurred"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Cancel",
		buttonSave: "Save",
		itemClose: "Close"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "The value entered is not valid.",
		missingMessage: "This value is required.",
		rangeMessage: "This value is out of range."
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000T",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00;(\u00a4#,##0.00)"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Hue Selector",
		saturationPickerTitle: "Saturation Selector"
	}
}); //>>built
define("dojo/nls/dojo_es-es", {
	"dijit/nls/loading": {
		loadingState: "Cargando...",
		errorState: "Lo siento, se ha producido un error"
	},
	"dijit/nls/common": {
		buttonOk: "Aceptar",
		buttonCancel: "Cancelar",
		buttonSave: "Guardar",
		itemClose: "Cerrar"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "El valor especificado no es v\u00e1lido.",
		missingMessage: "Este valor es necesario.",
		rangeMessage: "Este valor est\u00e1 fuera del intervalo."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0B",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "v",
		blueLabel: "a",
		hueLabel: "m",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Selector de tono",
		saturationPickerTitle: "Selector de saturaci\u00f3n"
	}
}); //>>built
define("dojo/nls/dojo_fi-fi", {
	"dijit/nls/loading": {
		loadingState: "Lataus on meneill\u00e4\u00e4n...",
		errorState: "On ilmennyt virhe."
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Peruuta",
		buttonSave: "Tallenna",
		itemClose: "Sulje"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Annettu arvo ei kelpaa.",
		missingMessage: "T\u00e4m\u00e4 arvo on pakollinen.",
		rangeMessage: "T\u00e4m\u00e4 arvo on sallitun alueen ulkopuolella."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "ep\u00e4luku",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0b",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "S\u00e4vyn valitsin",
		saturationPickerTitle: "Kyll\u00e4isyyden valitsin"
	}
}); //>>built
define("dojo/nls/dojo_fr-fr", {
	"dijit/nls/loading": {
		loadingState: "Chargement...",
		errorState: "Une erreur est survenue"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Annuler",
		buttonSave: "Enregistrer",
		itemClose: "Fermer"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "La valeur indiqu\u00e9e n'est pas correcte.",
		missingMessage: "Cette valeur est requise.",
		rangeMessage: "Cette valeur n'est pas comprise dans la plage autoris\u00e9e."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0Bn",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "v",
		blueLabel: "b",
		hueLabel: "t",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "S\u00e9lecteur de teinte",
		saturationPickerTitle: "S\u00e9lecteur de saturation"
	}
}); //>>built
define("dojo/nls/dojo_he-il", {
	"dijit/nls/loading": {
		loadingState: "\u05d8\u05e2\u05d9\u05e0\u05d4...\u200f",
		errorState: "\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4"
	},
	"dijit/nls/common": {
		buttonOk: "\u05d0\u05d9\u05e9\u05d5\u05e8",
		buttonCancel: "\u05d1\u05d9\u05d8\u05d5\u05dc",
		buttonSave: "\u05e9\u05de\u05d9\u05e8\u05d4",
		itemClose: "\u05e1\u05d2\u05d9\u05e8\u05d4"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u05d4\u05e2\u05e8\u05da \u05e9\u05e6\u05d5\u05d9\u05df \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9.",
		missingMessage: "\u05d6\u05d4\u05d5 \u05e2\u05e8\u05da \u05d3\u05e8\u05d5\u05e9.",
		rangeMessage: "\u05d4\u05e2\u05e8\u05da \u05de\u05d7\u05d5\u05e5 \u05dc\u05d8\u05d5\u05d5\u05d7."
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000T",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "\u05d0",
		greenLabel: "\u05d9",
		blueLabel: "\u05db",
		hueLabel: "\u05d2",
		saturationLabel: "\u05e8",
		valueLabel: "\u05e2",
		degLabel: "\u00b0",
		hexLabel: "\u05d4\u05e7\u05e1",
		huePickerTitle: "\u05d1\u05d5\u05e8\u05e8 \u05d2\u05d5\u05d5\u05df",
		saturationPickerTitle: "\u05d1\u05d5\u05e8\u05e8 \u05e8\u05d5\u05d5\u05d9\u05d4"
	}
}); //>>built
define("dojo/nls/dojo_hu", {
	"dijit/nls/loading": {
		loadingState: "Bet\u00f6lt\u00e9s...",
		errorState: "Sajn\u00e1lom, hiba t\u00f6rt\u00e9nt"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "M\u00e9gse",
		buttonSave: "Ment\u00e9s",
		itemClose: "Bez\u00e1r\u00e1s"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "A megadott \u00e9rt\u00e9k \u00e9rv\u00e9nytelen.",
		missingMessage: "Meg kell adni egy \u00e9rt\u00e9ket.",
		rangeMessage: "Az \u00e9rt\u00e9k k\u00edv\u00fcl van a megengedett tartom\u00e1nyon."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0b",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "\u00c1rnyalat kiv\u00e1laszt\u00f3",
		saturationPickerTitle: "Tel\u00edtetts\u00e9g kiv\u00e1laszt\u00f3"
	}
}); //>>built
define("dojo/nls/dojo_it-it", {
	"dijit/nls/loading": {
		loadingState: "Caricamento in corso...",
		errorState: "Si \u00e8 verificato un errore"
	},
	"dijit/nls/common": {
		buttonOk: "Ok",
		buttonCancel: "Annulla",
		buttonSave: "Salva",
		itemClose: "Chiudi"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Il valore immesso non \u00e8 valido.",
		missingMessage: "Questo valore \u00e8 obbligatorio.",
		rangeMessage: "Questo valore \u00e8 fuori dall'intervallo consentito."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0B",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4\u00a0#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "v",
		blueLabel: "b",
		hueLabel: "t",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Selettore tonalit\u00e0",
		saturationPickerTitle: "Selettore saturazione"
	}
}); //>>built
define("dojo/nls/dojo_ja-jp", {
	"dijit/nls/loading": {
		loadingState: "\u30ed\u30fc\u30c9\u4e2d...",
		errorState: "\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u3002"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "\u30ad\u30e3\u30f3\u30bb\u30eb",
		buttonSave: "\u4fdd\u5b58",
		itemClose: "\u9589\u3058\u308b"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u5165\u529b\u3057\u305f\u5024\u306f\u7121\u52b9\u3067\u3059\u3002",
		missingMessage: "\u3053\u306e\u5024\u306f\u5fc5\u9808\u3067\u3059\u3002",
		rangeMessage: "\u3053\u306e\u5024\u306f\u7bc4\u56f2\u5916\u3067\u3059\u3002"
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN\uff08\u975e\u6570\uff09",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u5146",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "R",
		greenLabel: "G",
		blueLabel: "B",
		hueLabel: "H",
		saturationLabel: "S",
		valueLabel: "V",
		degLabel: "\u00b0",
		hexLabel: "Hex",
		huePickerTitle: "\u8272\u8abf\u30bb\u30ec\u30af\u30bf\u30fc",
		saturationPickerTitle: "\u5f69\u5ea6\u30bb\u30ec\u30af\u30bf\u30fc"
	}
}); //>>built
define("dojo/nls/dojo_ko-kr", {
	"dijit/nls/loading": {
		loadingState: "\ub85c\ub4dc \uc911...",
		errorState: "\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."
	},
	"dijit/nls/common": {
		buttonOk: "\ud655\uc778",
		buttonCancel: "\ucde8\uc18c",
		buttonSave: "\uc800\uc7a5",
		itemClose: "\ub2eb\uae30"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\uc785\ub825\ub41c \uac12\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
		missingMessage: "\uc774 \uac12\uc740 \ud544\uc218\uc785\ub2c8\ub2e4.",
		rangeMessage: "\uc774 \uac12\uc740 \ubc94\uc704\ub97c \ubc97\uc5b4\ub0a9\ub2c8\ub2e4."
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\uc870",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "R",
		greenLabel: "G",
		blueLabel: "B",
		hueLabel: "H",
		saturationLabel: "S",
		valueLabel: "V",
		degLabel: "\u00b0",
		hexLabel: "16\uc9c4",
		huePickerTitle: "\uc0c9\uc0c1 \uc120\ud0dd\uc790",
		saturationPickerTitle: "\ucc44\ub3c4 \uc120\ud0dd\uc790"
	}
}); //>>built
define("dojo/nls/dojo_nb", {
	"dijit/nls/loading": {
		loadingState: "Laster inn...",
		errorState: "Det oppsto en feil"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Avbryt",
		buttonSave: "Lagre",
		itemClose: "Lukk"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Den angitte verdien er ikke gyldig.",
		missingMessage: "Denne verdien er obligatorisk.",
		rangeMessage: "Denne verdien er utenfor gyldig omr\u00e5de."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bill",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4\u00a0#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Nyansevelger",
		saturationPickerTitle: "Metningsvelger"
	}
}); //>>built
define("dojo/nls/dojo_nl-nl", {
	"dijit/nls/loading": {
		loadingState: "Bezig met laden...",
		errorState: "Er is een fout opgetreden"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Annuleren",
		buttonSave: "Opslaan",
		itemClose: "Sluiten"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "De opgegeven waarde is ongeldig.",
		missingMessage: "Deze waarde is verplicht.",
		rangeMessage: "Deze waarde is niet toegestaan."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bilj",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4\u00a0#,##0.00;\u00a4\u00a0#,##0.00-"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "t",
		saturationLabel: "i",
		valueLabel: "h",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Tint selecteren",
		saturationPickerTitle: "Intensiteit selecteren"
	}
}); //>>built
define("dojo/nls/dojo_pl", {
	"dijit/nls/loading": {
		loadingState: "\u0141adowanie...",
		errorState: "Niestety, wyst\u0105pi\u0142 b\u0142\u0105d"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Anuluj",
		buttonSave: "Zapisz",
		itemClose: "Zamknij"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Wprowadzona warto\u015b\u0107 jest nieprawid\u0142owa.",
		missingMessage: "Ta warto\u015b\u0107 jest wymagana.",
		rangeMessage: "Ta warto\u015b\u0107 jest spoza zakresu."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bln",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "g.",
		saturationLabel: "s",
		valueLabel: "jas.",
		degLabel: "\u00b0",
		hexLabel: "szesnastkowe",
		huePickerTitle: "Selektor barwy",
		saturationPickerTitle: "Selektor nasycenia"
	}
}); //>>built
define("dojo/nls/dojo_pt-br", {
	"dijit/nls/loading": {
		loadingState: "Carregando...",
		errorState: "Desculpe, ocorreu um erro"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Cancelar",
		buttonSave: "Salvar",
		itemClose: "Fechar"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "O valor inserido n\u00e3o \u00e9 v\u00e1lido.",
		missingMessage: "Este valor \u00e9 necess\u00e1rio.",
		rangeMessage: "Este valor est\u00e1 fora do intervalo. "
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0tri",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00;(\u00a4#,##0.00)"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Seletor de Matiz",
		saturationPickerTitle: "Seletor de Satura\u00e7\u00e3o"
	}
}); //>>built
define("dojo/nls/dojo_pt-pt", {
	"dijit/nls/loading": {
		loadingState: "A carregar...",
		errorState: "Lamentamos, mas ocorreu um erro"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Cancelar",
		buttonSave: "Guardar",
		itemClose: "Fechar"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "O valor introduzido n\u00e3o \u00e9 v\u00e1lido.",
		missingMessage: "Este valor \u00e9 requerido.",
		rangeMessage: "Este valor encontra-se fora do intervalo."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0Bi",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "e",
		greenLabel: "v",
		blueLabel: "a",
		hueLabel: "t",
		saturationLabel: "s",
		valueLabel: "val",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Selector de tonalidade",
		saturationPickerTitle: "Selector de satura\u00e7\u00e3o"
	}
}); //>>built
define("dojo/nls/dojo_ru", {
	"dijit/nls/loading": {
		loadingState: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",
		errorState: "\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "\u041e\u0442\u043c\u0435\u043d\u0430",
		buttonSave: "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
		itemClose: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u0423\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",
		missingMessage: "\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.",
		rangeMessage: "\u042d\u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u043d\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "\u043d\u0435 \u0447\u0438\u0441\u043b\u043e",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0\u0442\u0440\u043b\u043d",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "\u043a",
		greenLabel: "\u0437",
		blueLabel: "\u0441",
		hueLabel: "\u043e",
		saturationLabel: "\u043d",
		valueLabel: "\u0437",
		degLabel: "\u00b0",
		hexLabel: "\u0448\u0435\u0441\u0442",
		huePickerTitle: "\u0412\u044b\u0431\u043e\u0440 \u043e\u0442\u0442\u0435\u043d\u043a\u0430",
		saturationPickerTitle: "\u0412\u044b\u0431\u043e\u0440 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438"
	}
}); //>>built
define("dojo/nls/dojo_sk", {
	"dijit/nls/loading": {
		loadingState: "Zav\u00e1dza sa...",
		errorState: "\u013dutujeme, ale vyskytla sa chyba"
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Zru\u0161i\u0165",
		buttonSave: "Ulo\u017ei\u0165",
		itemClose: "Zatvori\u0165"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Zadan\u00e1 hodnota nie je platn\u00e1.",
		missingMessage: "T\u00e1to hodnota je povinn\u00e1.",
		rangeMessage: "T\u00e1to hodnota je mimo rozsah."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ",",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bil'.'",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "V\u00fdber odtie\u0148a",
		saturationPickerTitle: "V\u00fdber s\u00fdtosti"
	}
}); //>>built
define("dojo/nls/dojo_sl", {
	"dijit/nls/loading": {
		loadingState: "Nalaganje ...",
		errorState: "Oprostite, pri\u0161lo je do napake."
	},
	"dijit/nls/common": {
		buttonOk: "V redu",
		buttonCancel: "Prekli\u010di",
		buttonSave: "Shrani",
		itemClose: "Zapri"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Vnesena vrednost ni veljavna.",
		missingMessage: "Ta vrednost je zahtevana.",
		rangeMessage: "Ta vrednost je izven obmo\u010dja."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "e",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0bil'.'",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Izbirnik odtenka",
		saturationPickerTitle: "Izbirnik nasi\u010denosti"
	}
}); //>>built
define("dojo/nls/dojo_sv", {
	"dijit/nls/loading": {
		loadingState: "L\u00e4ser in...",
		errorState: "Det har intr\u00e4ffat ett fel."
	},
	"dijit/nls/common": {
		buttonOk: "OK",
		buttonCancel: "Avbryt",
		buttonSave: "Spara",
		itemClose: "St\u00e4ng"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Angivet v\u00e4rde \u00e4r inte giltigt.",
		missingMessage: "V\u00e4rdet kr\u00e4vs.",
		rangeMessage: "V\u00e4rdet ligger utanf\u00f6r intervallet."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: "\u00a0",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "\u2212",
		exponential: "\u00d710^",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "\u00a4\u00a4\u00a4",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0trl",
		scientificFormat: "#E0",
		percentFormat: "#,##0\u00a0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "n",
		saturationLabel: "m",
		valueLabel: "k",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Nyans",
		saturationPickerTitle: "M\u00e4ttnad"
	}
}); //>>built
define("dojo/nls/dojo_th", {
	"dijit/nls/loading": {
		loadingState: "\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",
		errorState: "\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14"
	},
	"dijit/nls/common": {
		buttonOk: "\u0e15\u0e01\u0e25\u0e07",
		buttonCancel: "\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01",
		buttonSave: "\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01",
		itemClose: "\u0e1b\u0e34\u0e14"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u0e04\u0e48\u0e32\u0e17\u0e35\u0e48\u0e1b\u0e49\u0e2d\u0e19\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
		missingMessage: "\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e04\u0e48\u0e32\u0e19\u0e35\u0e49",
		rangeMessage: "\u0e04\u0e48\u0e32\u0e19\u0e35\u0e49\u0e40\u0e01\u0e34\u0e19\u0e0a\u0e48\u0e27\u0e07"
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0\u0e25'.'\u0e25'.'",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00;\u00a4-#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "\u0e01.",
		blueLabel: "b",
		hueLabel: "\u0e0a\u0e21.",
		saturationLabel: "\u0e27\u0e34.",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e2a\u0e35",
		saturationPickerTitle: "\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e04\u0e27\u0e32\u0e21\u0e2d\u0e34\u0e48\u0e21\u0e02\u0e2d\u0e07\u0e2a\u0e35"
	}
}); //>>built
define("dojo/nls/dojo_tr", {
	"dijit/nls/loading": {
		loadingState: "Y\u00fckleniyor...",
		errorState: "\u00dczg\u00fcn\u00fcz, bir hata olu\u015ftu"
	},
	"dijit/nls/common": {
		buttonOk: "Tamam",
		buttonCancel: "\u0130ptal",
		buttonSave: "Kaydet",
		itemClose: "Kapat"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "Girilen de\u011fer ge\u00e7ersiz.",
		missingMessage: "Bu de\u011fer gerekli.",
		rangeMessage: "Bu de\u011fer aral\u0131k d\u0131\u015f\u0131nda."
	},
	"dojo/cldr/nls/number": {
		decimal: ",",
		group: ".",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u00a0T",
		scientificFormat: "#E0",
		percentFormat: "%#,##0",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "#,##0.00\u00a0\u00a4"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "k",
		greenLabel: "y",
		blueLabel: "m",
		hueLabel: "t",
		saturationLabel: "d",
		valueLabel: "d",
		degLabel: "\u00b0",
		hexLabel: "onalt\u0131l\u0131",
		huePickerTitle: "Ton Se\u00e7ici",
		saturationPickerTitle: "Doygunluk Se\u00e7ici"
	}
}); //>>built
define("dojo/nls/dojo_zh-cn", {
	"dijit/nls/loading": {
		loadingState: "\u6b63\u5728\u52a0\u8f7d...",
		errorState: "\u5bf9\u4e0d\u8d77\uff0c\u53d1\u751f\u4e86\u9519\u8bef"
	},
	"dijit/nls/common": {
		buttonOk: "\u786e\u5b9a",
		buttonCancel: "\u53d6\u6d88",
		buttonSave: "\u4fdd\u5b58",
		itemClose: "\u5173\u95ed"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u8f93\u5165\u7684\u503c\u65e0\u6548\u3002",
		missingMessage: "\u8be5\u503c\u662f\u5fc5\u9700\u7684\u3002",
		rangeMessage: "\u6b64\u503c\u8d85\u51fa\u8303\u56f4\u3002"
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "NaN",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u5146",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "\u5341\u516d\u8fdb\u5236",
		huePickerTitle: "\u8272\u5f69\u9009\u62e9\u5668",
		saturationPickerTitle: "\u9971\u548c\u5ea6\u9009\u62e9\u5668"
	}
}); //>>built
define("dojo/nls/dojo_zh-tw", {
	"dijit/nls/loading": {
		loadingState: "\u8f09\u5165\u4e2d...",
		errorState: "\u62b1\u6b49\uff0c\u767c\u751f\u932f\u8aa4"
	},
	"dijit/nls/common": {
		buttonOk: "\u78ba\u5b9a",
		buttonCancel: "\u53d6\u6d88",
		buttonSave: "\u5132\u5b58",
		itemClose: "\u95dc\u9589"
	},
	"dijit/form/nls/validate": {
		invalidMessage: "\u8f38\u5165\u7684\u503c\u7121\u6548\u3002",
		missingMessage: "\u5fc5\u9808\u63d0\u4f9b\u6b64\u503c\u3002",
		rangeMessage: "\u6b64\u503c\u8d85\u51fa\u7bc4\u570d\u3002"
	},
	"dojo/cldr/nls/number": {
		decimal: ".",
		group: ",",
		list: ";",
		percentSign: "%",
		plusSign: "+",
		minusSign: "-",
		exponential: "E",
		perMille: "\u2030",
		infinity: "\u221e",
		nan: "\u975e\u6578\u503c",
		decimalFormat: "#,##0.###",
		"decimalFormat-short": "000\u5146",
		scientificFormat: "#E0",
		percentFormat: "#,##0%",
		"currencySpacing-beforeCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-beforeCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-beforeCurrency-insertBetween": "\u00a0",
		"currencySpacing-afterCurrency-currencyMatch": "[:letter:]",
		"currencySpacing-afterCurrency-surroundingMatch": "[:digit:]",
		"currencySpacing-afterCurrency-insertBetween": "\u00a0",
		currencyFormat: "\u00a4#,##0.00"
	},
	"dojox/widget/nls/ColorPicker": {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "\u5341\u516d\u9032\u4f4d",
		huePickerTitle: "\u8272\u8abf\u9078\u53d6\u5143",
		saturationPickerTitle: "\u98fd\u548c\u5ea6\u9078\u53d6\u5143"
	}
}); //>>built
define("dojo/nls/fr/colors", {
	aliceblue: "bleu gris",
	antiquewhite: "blanc antique",
	aqua: "bleu-vert",
	aquamarine: "aigue-marine",
	azure: "bleu azur",
	beige: "beige",
	bisque: "beige ros\u00e9",
	black: "noir",
	blanchedalmond: "coquille d'\u0153uf",
	blue: "bleu",
	blueviolet: "bleu-violet",
	brown: "brun",
	burlywood: "bois pr\u00e9cieux",
	cadetblue: "bleu p\u00e9trole",
	chartreuse: "vert vif",
	chocolate: "chocolat",
	coral: "corail",
	cornflowerblue: "bleuet",
	cornsilk: "vanille",
	crimson: "cramoisi",
	cyan: "cyan",
	darkblue: "bleu fonc\u00e9",
	darkcyan: "cyan fonc\u00e9",
	darkgoldenrod: "jaune paille fonc\u00e9",
	darkgray: "gris fonc\u00e9",
	darkgreen: "vert fonc\u00e9",
	darkgrey: "gris fonc\u00e9",
	darkkhaki: "kaki fonc\u00e9",
	darkmagenta: "magenta fonc\u00e9",
	darkolivegreen: "olive fonc\u00e9",
	darkorange: "orange fonc\u00e9",
	darkorchid: "lilas fonc\u00e9",
	darkred: "rouge fonc\u00e9",
	darksalmon: "saumon fonc\u00e9",
	darkseagreen: "vert d'eau fonc\u00e9",
	darkslateblue: "bleu ardoise fonc\u00e9",
	darkslategray: "gris ardoise fonc\u00e9",
	darkslategrey: "gris ardoise fonc\u00e9",
	darkturquoise: "turquoise fonc\u00e9",
	darkviolet: "violet fonc\u00e9",
	deeppink: "rose soutenu",
	deepskyblue: "bleu ciel soutenu",
	dimgray: "gris soutenu",
	dimgrey: "gris soutenu",
	dodgerblue: "bleu France",
	firebrick: "rouge brique",
	floralwhite: "lys",
	forestgreen: "vert sapin",
	fuchsia: "fuchsia",
	gainsboro: "gris souris",
	ghostwhite: "blanc laiteux",
	gold: "or",
	goldenrod: "jaune paille",
	gray: "gris",
	green: "vert",
	greenyellow: "vert-jaune",
	grey: "gris",
	honeydew: "opalin",
	hotpink: "rose intense",
	indianred: "rose indien",
	indigo: "indigo",
	ivory: "ivoire",
	khaki: "kaki",
	lavender: "lavande",
	lavenderblush: "lavandin",
	lawngreen: "vert prairie",
	lemonchiffon: "mousse de citron",
	lightblue: "bleu clair",
	lightcoral: "corail clair",
	lightcyan: "cyan clair",
	lightgoldenrodyellow: "jaune paille clair",
	lightgray: "gris clair",
	lightgreen: "vert clair",
	lightgrey: "gris clair",
	lightpink: "rose clair",
	lightsalmon: "saumon clair",
	lightseagreen: "vert d'eau clair",
	lightskyblue: "bleu ciel clair",
	lightslategray: "gris ardoise clair",
	lightslategrey: "gris ardoise clair",
	lightsteelblue: "bleu acier clair",
	lightyellow: "jaune clair",
	lime: "vert citron",
	limegreen: "citron vert",
	linen: "\u00e9cru",
	magenta: "magenta",
	maroon: "marron",
	mediumaquamarine: "aigue-marine moyen",
	mediumblue: "bleu moyen",
	mediumorchid: "lilas moyen",
	mediumpurple: "pourpre moyen",
	mediumseagreen: "vert d'eau moyen",
	mediumslateblue: "bleu ardoise moyen",
	mediumspringgreen: "vert printemps moyen",
	mediumturquoise: "turquoise moyen",
	mediumvioletred: "rouge violac\u00e9 moyen",
	midnightblue: "bleu nuit",
	mintcream: "cr\u00e8me de menthe",
	mistyrose: "rose p\u00e2le",
	moccasin: "chamois",
	navajowhite: "chair",
	navy: "bleu marine",
	oldlace: "blanc cass\u00e9",
	olive: "olive",
	olivedrab: "brun verd\u00e2tre",
	orange: "orange",
	orangered: "rouge orang\u00e9",
	orchid: "lilas",
	palegoldenrod: "jaune paille p\u00e2le",
	palegreen: "vert p\u00e2le",
	paleturquoise: "turquoise p\u00e2le",
	palevioletred: "rouge violac\u00e9 p\u00e2le",
	papayawhip: "cr\u00e8me de papaye",
	peachpuff: "p\u00eache",
	peru: "caramel",
	pink: "rose",
	plum: "prune",
	powderblue: "bleu de smalt",
	purple: "pourpre",
	red: "rouge",
	rosybrown: "vieux rose",
	royalblue: "bleu roi",
	saddlebrown: "brun cuir",
	salmon: "saumon",
	sandybrown: "sable",
	seagreen: "vert d'eau",
	seashell: "coquillage",
	sienna: "terre de sienne",
	silver: "argent",
	skyblue: "bleu ciel",
	slateblue: "bleu ardoise",
	slategray: "gris ardoise",
	slategrey: "gris ardoise",
	snow: "neige",
	springgreen: "vert printemps",
	steelblue: "bleu acier",
	tan: "gr\u00e8ge",
	teal: "sarcelle",
	thistle: "chardon",
	tomato: "tomate",
	transparent: "transparent",
	turquoise: "turquoise",
	violet: "violet",
	wheat: "bl\u00e9",
	white: "blanc",
	whitesmoke: "blanc cendr\u00e9",
	yellow: "jaune",
	yellowgreen: "vert jaun\u00e2tre"
}); //>>built
define("dojo/nls/it/colors", {
	aliceblue: "bianco ghiaccio",
	antiquewhite: "rosa antico",
	aqua: "verde acqua",
	aquamarine: "acquamarina",
	azure: "azure",
	beige: "beige",
	bisque: "terracotta",
	black: "nero",
	blanchedalmond: "beige 2",
	blue: "blu",
	blueviolet: "violetto bluastro",
	brown: "marrone",
	burlywood: "legno massiccio",
	cadetblue: "verde petrolio",
	chartreuse: "verde brillante",
	chocolate: "cioccolato",
	coral: "corallo",
	cornflowerblue: "blu fiordaliso",
	cornsilk: "crema",
	crimson: "rosso scarlatto",
	cyan: "ciano",
	darkblue: "blu scuro",
	darkcyan: "celeste scuro",
	darkgoldenrod: "ocra scuro",
	darkgray: "grigio scuro",
	darkgreen: "verde scuro",
	darkgrey: "grigio scuro",
	darkkhaki: "cachi scuro",
	darkmagenta: "magenta scuro",
	darkolivegreen: "verde oliva scuro",
	darkorange: "arancione scuro",
	darkorchid: "orchidea scuro",
	darkred: "rosso scuro",
	darksalmon: "salmone scuro",
	darkseagreen: "verde acqua scuro",
	darkslateblue: "blu ardesia scuro",
	darkslategray: "grigio ardesia scuro",
	darkslategrey: "grigio ardesia scuro",
	darkturquoise: "turchese scuro",
	darkviolet: "viola scuro",
	deeppink: "ciclamino",
	deepskyblue: "azzurro intenso",
	dimgray: "grigio tenue",
	dimgrey: "grigio tenue",
	dodgerblue: "dodger blue",
	firebrick: "mattone",
	floralwhite: "bianco grigio",
	forestgreen: "verde pino scuro",
	fuchsia: "fucsia",
	gainsboro: "gainsboro",
	ghostwhite: "bianco gesso",
	gold: "oro",
	goldenrod: "dorato",
	gray: "grigio",
	green: "verde",
	greenyellow: "verde-giallo",
	grey: "grigio",
	honeydew: "miele",
	hotpink: "rosa acceso",
	indianred: "terra indiana",
	indigo: "indaco",
	ivory: "avorio",
	khaki: "cachi",
	lavender: "lavanda",
	lavenderblush: "lavanda rosa",
	lawngreen: "verde brillante chiaro",
	lemonchiffon: "lemon chiffon",
	lightblue: "blu chiaro",
	lightcoral: "corallo chiaro",
	lightcyan: "ciano chiaro",
	lightgoldenrodyellow: "giallo dorato chiaro",
	lightgray: "grigio chiaro",
	lightgreen: "verde chiaro",
	lightgrey: "grigio chiaro",
	lightpink: "rosa chiaro",
	lightsalmon: "salmone chiaro",
	lightseagreen: "verde acqua chiaro",
	lightskyblue: "azzurro chiaro",
	lightslategray: "grigio ardesia chiaro",
	lightslategrey: "grigio ardesia chiaro",
	lightsteelblue: "blu acciaio chiaro",
	lightyellow: "giallo chiaro",
	lime: "lime",
	limegreen: "verde lime",
	linen: "lino",
	magenta: "magenta",
	maroon: "Bordeaux",
	mediumaquamarine: "acquamarina medio",
	mediumblue: "blu medio",
	mediumorchid: "orchidea medio",
	mediumpurple: "viola medio",
	mediumseagreen: "verde acqua medio",
	mediumslateblue: "blu ardesia medio",
	mediumspringgreen: "verde brillante medio",
	mediumturquoise: "turchese medio",
	mediumvioletred: "violetto rosso medio",
	midnightblue: "blu notte",
	mintcream: "bianco nuvola",
	mistyrose: "rosa pallido",
	moccasin: "mocassino",
	navajowhite: "sabbia",
	navy: "blu scuro",
	oldlace: "mandorla",
	olive: "verde oliva",
	olivedrab: "verde bottiglia",
	orange: "arancione",
	orangered: "vermiglio",
	orchid: "orchidea",
	palegoldenrod: "dorato pallido",
	palegreen: "verde pallido",
	paleturquoise: "turchese pallido",
	palevioletred: "violetto rosso pallido",
	papayawhip: "papaya",
	peachpuff: "pesche",
	peru: "per\u00f9",
	pink: "rosa",
	plum: "prugna",
	powderblue: "azzurro polvere",
	purple: "viola",
	red: "rosso",
	rosybrown: "caff\u00e8 latte",
	royalblue: "royal blue",
	saddlebrown: "cacao",
	salmon: "salmone",
	sandybrown: "argilla",
	seagreen: "verde acqua",
	seashell: "sabbia rosa",
	sienna: "terra di siena",
	silver: "argento",
	skyblue: "azzurro",
	slateblue: "blu ardesia",
	slategray: "grigio ardesia",
	slategrey: "grigio ardesia",
	snow: "neve",
	springgreen: "verde brillante",
	steelblue: "blu brillante",
	tan: "tan",
	teal: "verde acqua",
	thistle: "rosa cenere",
	tomato: "pomodoro",
	transparent: "trasparente",
	turquoise: "turchese",
	violet: "violetto",
	wheat: "tabacco",
	white: "bianco",
	whitesmoke: "bianco fumo",
	yellow: "giallo",
	yellowgreen: "giallo verde"
}); //>>built
define("dojo/nls/nl/colors", {
	aliceblue: "lichtblauw",
	antiquewhite: "antiekwit",
	aqua: "aqua",
	aquamarine: "aquamarijn",
	azure: "azuur",
	beige: "beige",
	bisque: "oranjegeel",
	black: "zwart",
	blanchedalmond: "amandel",
	blue: "blauw",
	blueviolet: "violet",
	brown: "bruin",
	burlywood: "lichtbruin",
	cadetblue: "donkerstaalblauw",
	chartreuse: "groengeel",
	chocolate: "chocoladebruin",
	coral: "koraalrood",
	cornflowerblue: "korenbloemblauw",
	cornsilk: "ma\u00efsgeel",
	crimson: "karmozijnrood",
	cyan: "cyaan",
	darkblue: "donkerblauw",
	darkcyan: "donkercyaan",
	darkgoldenrod: "donkergoud",
	darkgray: "donkergrijs",
	darkgreen: "donkergroen",
	darkgrey: "donkergrijs",
	darkkhaki: "donkerkaki",
	darkmagenta: "donkermagenta",
	darkolivegreen: "donkerolijfgroen",
	darkorange: "donkeroranje",
	darkorchid: "donkerorchidee",
	darkred: "donkerrood",
	darksalmon: "donkerzalm",
	darkseagreen: "donkerzeegroen",
	darkslateblue: "donkergrijsblauw",
	darkslategray: "donkerblauwgrijs",
	darkslategrey: "donkerblauwgrijs",
	darkturquoise: "donkerturquoise",
	darkviolet: "donkerviolet",
	deeppink: "donkerroze",
	deepskyblue: "diephemelblauw",
	dimgray: "dofgrijs",
	dimgrey: "dofgrijs",
	dodgerblue: "helderblauw",
	firebrick: "vuursteenrood",
	floralwhite: "rozewit",
	forestgreen: "bosgroen",
	fuchsia: "fuchsia",
	gainsboro: "lichtblauwgrijs",
	ghostwhite: "spierwit",
	gold: "goud",
	goldenrod: "goudbruin",
	gray: "grijs",
	green: "groen",
	greenyellow: "groengeel",
	grey: "grijs",
	honeydew: "meloen",
	hotpink: "acaciaroze",
	indianred: "indisch rood",
	indigo: "indigo",
	ivory: "ivoorwit",
	khaki: "kaki",
	lavender: "lavendelblauw",
	lavenderblush: "lavendelblos",
	lawngreen: "grasgroen",
	lemonchiffon: "citroengeel",
	lightblue: "lichtblauw",
	lightcoral: "lichtkoraal",
	lightcyan: "lichtcyaan",
	lightgoldenrodyellow: "lichtgoudgeel",
	lightgray: "lichtgrijs",
	lightgreen: "lichtgroen",
	lightgrey: "lichtgrijs",
	lightpink: "lichtroze",
	lightsalmon: "lichtzalm",
	lightseagreen: "lichtzeegroen",
	lightskyblue: "lichthemelsblauw",
	lightslategray: "lichtblauwgrijs",
	lightslategrey: "lichtblauwgrijs",
	lightsteelblue: "lichtstaalblauw",
	lightyellow: "lichtgeel",
	lime: "limoen",
	limegreen: "limoengroen",
	linen: "linnen",
	magenta: "magenta",
	maroon: "kastanjebruin",
	mediumaquamarine: "midaquamarijn",
	mediumblue: "midblauw",
	mediumorchid: "midorchidee",
	mediumpurple: "midpurper",
	mediumseagreen: "midzeegroen",
	mediumslateblue: "midgrijsblauw",
	mediumspringgreen: "midlentegroen",
	mediumturquoise: "midturquoise",
	mediumvioletred: "midvioletrood",
	midnightblue: "nachtblauw",
	mintcream: "mintroomgeel",
	mistyrose: "matroze",
	moccasin: "moccasin",
	navajowhite: "navajowit",
	navy: "marineblauw",
	oldlace: "kant",
	olive: "olijfgroen",
	olivedrab: "grijsbruin",
	orange: "oranje",
	orangered: "oranjerood",
	orchid: "orchidee",
	palegoldenrod: "bleekgeel",
	palegreen: "bleekgroen",
	paleturquoise: "bleekturquoise",
	palevioletred: "bleekvioletrood",
	papayawhip: "papajaroze",
	peachpuff: "perzikroze",
	peru: "bruin",
	pink: "roze",
	plum: "pruim",
	powderblue: "lichtblauw-wit",
	purple: "purper",
	red: "rood",
	rosybrown: "roodbruin",
	royalblue: "koningsblauw",
	saddlebrown: "leerbruin",
	salmon: "zalm",
	sandybrown: "zandbruin",
	seagreen: "zeegroen",
	seashell: "schelp",
	sienna: "sienna",
	silver: "zilvergrijs",
	skyblue: "hemelsblauw",
	slateblue: "leiblauw",
	slategray: "leigrijs",
	slategrey: "leigrijs",
	snow: "sneeuwwit",
	springgreen: "lentegroen",
	steelblue: "staalblauw",
	tan: "geelbruin",
	teal: "grijsblauw",
	thistle: "distel",
	tomato: "tomaat",
	transparent: "transparant",
	turquoise: "turquoise",
	violet: "violet",
	wheat: "tarwebruin",
	white: "wit",
	whitesmoke: "rookwit",
	yellow: "geel",
	yellowgreen: "geelgroen"
}); //>>built
define("dojox/atom/widget/nls/FeedEntryEditor", {
	root: {
		doNew: "[new]",
		edit: "[edit]",
		save: "[save]",
		cancel: "[cancel]"
	},
	ar: !0,
	az: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	"pt-pt": !0,
	pt: !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/atom/widget/nls/FeedEntryViewer", {
	root: {
		displayOptions: "[display options]",
		title: "Title",
		authors: "Authors",
		contributors: "Contributors",
		id: "ID",
		close: "[close]",
		updated: "Updated",
		summary: "Summary",
		content: "Content"
	},
	ar: !0,
	az: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	"pt-pt": !0,
	pt: !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/atom/widget/nls/FeedViewerEntry", {
	root: {
		deleteButton: "[Delete]"
	},
	ar: !0,
	az: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	"pt-pt": !0,
	pt: !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/atom/widget/nls/PeopleEditor", {
	root: {
		add: "Add",
		addAuthor: "Add Author",
		addContributor: "Add Contributor"
	},
	ar: !0,
	az: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	"pt-pt": !0,
	pt: !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/atom/widget/nls/de/FeedEntryEditor", {
	doNew: "[Neu]",
	edit: "[Bearbeiten]",
	save: "[Speichern]",
	cancel: "[Abbrechen]"
}); //>>built
define("dojox/atom/widget/nls/de/FeedEntryViewer", {
	displayOptions: "[Anzeigeoptionen]",
	title: "Titel",
	authors: "Autoren",
	contributors: "Mitwirkende",
	id: "ID",
	close: "[Schlie\u00dfen]",
	updated: "Aktualisiert",
	summary: "Zusammenfassung",
	content: "Inhalt"
}); //>>built
define("dojox/atom/widget/nls/de/FeedViewerEntry", {
	deleteButton: "[L\u00f6schen]"
}); //>>built
define("dojox/atom/widget/nls/de/PeopleEditor", {
	add: "Hinzuf\u00fcgen",
	addAuthor: "Autor hinzuf\u00fcgen",
	addContributor: "Mitwirkenden hinzuf\u00fcgen"
}); //>>built
define("dojox/atom/widget/nls/fr/FeedEntryEditor", {
	doNew: "[nouveau]",
	edit: "[\u00e9diter]",
	save: "[sauvegarder]",
	cancel: "[annuler]"
}); //>>built
define("dojox/atom/widget/nls/fr/FeedEntryViewer", {
	displayOptions: "[options d'affichage]",
	title: "Titre",
	authors: "Auteurs",
	contributors: "Collaborateurs",
	id: "ID",
	close: "[fermer]",
	updated: "Mis \u00e0 jour",
	summary: "R\u00e9capitulatif",
	content: "Contenu"
}); //>>built
define("dojox/atom/widget/nls/fr/FeedViewerEntry", {
	deleteButton: "[Supprimer]"
}); //>>built
define("dojox/atom/widget/nls/fr/PeopleEditor", {
	add: "Ajouter",
	addAuthor: "Ajouter un auteur",
	addContributor: "Ajouter un collaborateur"
}); //>>built
define("dojox/atom/widget/nls/it/FeedEntryEditor", {
	doNew: "[nuovo]",
	edit: "[modifica]",
	save: "[salva]",
	cancel: "[annulla]"
}); //>>built
define("dojox/atom/widget/nls/it/FeedEntryViewer", {
	displayOptions: "[visualizza opzioni]",
	title: "Titolo",
	authors: "Autori",
	contributors: "Contributor",
	id: "ID",
	close: "[chiudi]",
	updated: "Aggiornato",
	summary: "Riepilogo",
	content: "Contenuto"
}); //>>built
define("dojox/atom/widget/nls/it/FeedViewerEntry", {
	deleteButton: "[Elimina]"
}); //>>built
define("dojox/atom/widget/nls/it/PeopleEditor", {
	add: "Aggiungi",
	addAuthor: "Aggiungi autore",
	addContributor: "Aggiungi contributor"
}); //>>built
define("dojox/atom/widget/nls/nl/FeedEntryEditor", {
	doNew: "[nieuw]",
	edit: "[bewerken]",
	save: "[opslaan]",
	cancel: "[annuleren]"
}); //>>built
define("dojox/atom/widget/nls/nl/FeedEntryViewer", {
	displayOptions: "[weergaveopties]",
	title: "Titel",
	authors: "Auteurs",
	contributors: "Deelnemers",
	id: "ID",
	close: "[sluiten]",
	updated: "Bijgewerkt",
	summary: "Overzicht",
	content: "Content"
}); //>>built
define("dojox/atom/widget/nls/nl/FeedViewerEntry", {
	deleteButton: "[Wissen]"
}); //>>built
define("dojox/atom/widget/nls/nl/PeopleEditor", {
	add: "Toevoegen",
	addAuthor: "Auteur toevoegen",
	addContributor: "Deelnemer toevoegen"
}); //>>built
define("dojox/calendar/nls/buttons", {
	root: {
		previousButton: "\u25c4",
		nextButton: "\u25ba",
		todayButton: "Today",
		dayButton: "Day",
		weekButton: "Week",
		fourDaysButton: "4 Days",
		monthButton: "Month"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/calendar/nls/de/buttons", {
	previousButton: "\u25c4",
	nextButton: "\u25ba",
	todayButton: "Heute",
	dayButton: "Tag",
	weekButton: "Woche",
	fourDaysButton: "4 Tage",
	monthButton: "Monat"
}); //>>built
define("dojox/calendar/nls/fr/buttons", {
	previousButton: "\u25c4",
	nextButton: "\u25ba",
	todayButton: "Aujourd'hui",
	dayButton: "Jour",
	weekButton: "Semaine",
	fourDaysButton: "4 jours",
	monthButton: "Mois"
}); //>>built
define("dojox/calendar/nls/it/buttons", {
	previousButton: "\u25c4",
	nextButton: "\u25ba",
	todayButton: "Oggi",
	dayButton: "Giorno",
	weekButton: "Settimana",
	fourDaysButton: "4 Giorni",
	monthButton: "Mese"
}); //>>built
define("dojox/calendar/nls/nl/buttons", {
	previousButton: "\u25c4",
	nextButton: "\u25ba",
	todayButton: "Vandaag",
	dayButton: "Dag",
	weekButton: "Week",
	fourDaysButton: "4 dagen",
	monthButton: "Maand"
}); //>>built
define("dojox/editor/plugins/nls/AutoSave", {
	root: {
		saveLabel: "Save",
		saveSettingLabelOn: "Set Auto-Save Interval...",
		saveSettingLabelOff: "Turn off Auto-Save",
		saveSettingdialogTitle: "Auto-Save",
		saveSettingdialogDescription: "Specify Auto-Save interval",
		saveSettingdialogParamName: "Auto-Save Interval",
		saveSettingdialogParamLabel: "min",
		saveSettingdialogButtonOk: "Set Interval",
		saveSettingdialogButtonCancel: "Cancel",
		saveMessageSuccess: "Saved at ${0}",
		saveMessageFail: "Failed to save at ${0}"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/Blockquote", {
	root: {
		blockquote: "Blockquote"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/Breadcrumb", {
	root: {
		nodeActions: "${nodeName} Actions",
		selectContents: "Select contents",
		selectElement: "Select element",
		deleteElement: "Delete element",
		deleteContents: "Delete contents",
		moveStart: "Move cursor to start",
		moveEnd: "Move cursor to end"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/CollapsibleToolbar", {
	root: {
		collapse: "Collapse Editor Toolbar",
		expand: "Expand Editor Toolbar"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/FindReplace", {
	root: {
		findLabel: "Find:",
		findTooltip: "Enter text to find",
		replaceLabel: "Replace with:",
		replaceTooltip: "Enter text to replace with",
		findReplace: "Find and Replace",
		matchCase: "Match case",
		matchCaseTooltip: "Match case",
		backwards: "Backwards",
		backwardsTooltip: "Search backwards for text",
		replaceAllButton: "Replace All",
		replaceAllButtonTooltip: "Replace all the text",
		findButton: "Find",
		findButtonTooltip: "Find the text",
		replaceButton: "Replace",
		replaceButtonTooltip: "Replace the text",
		replaceDialogText: "Replaced ${0} occurrences.",
		eofDialogText: "Last occurrence ${0}",
		eofDialogTextFind: "found",
		eofDialogTextReplace: "replaced"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/InsertAnchor", {
	root: {
		insertAnchor: "Insert Anchor",
		title: "Anchor Properties",
		anchor: "Name:",
		text: "Description:",
		set: "Set",
		cancel: "Cancel"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/InsertEntity", {
	root: {
		insertEntity: "Insert Symbol"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/LocalImage", {
	root: {
		insertImageTitle: "Insert Image",
		url: "Image",
		browse: "Browse...",
		text: "Description",
		set: "Insert",
		invalidMessage: "Invalid image file type",
		prePopuTextUrl: "Enter an image URL",
		prePopuTextBrowse: " or browse to a local file."
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/PageBreak", {
	root: {
		pageBreak: "Page Break"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/PasteFromWord", {
	root: {
		pasteFromWord: "Paste From Word",
		instructions: "Paste the content from Word into the text box below.  Once you are satisfied with the content to insert, press the paste button.  To abort inserting text, press the cancel button."
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/Preview", {
	root: {
		preview: "Preview"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/SafePaste", {
	root: {
		instructions: "Direct paste is disabled.  Please paste content in this dialog using the standard browser keyboard or menu paste controls.  Once you are satisfied with the content to insert, press the paste button.  To abort inserting content, press the cancel button."
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0
}); //>>built
define("dojox/editor/plugins/nls/Save", {
	root: {
		save: "Save"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/ShowBlockNodes", {
	root: {
		showBlockNodes: "Show HTML Block Elements"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/Smiley", {
	root: {
		smiley: "Insert Emoticon",
		emoticonSmile: "smile",
		emoticonLaughing: "laughing",
		emoticonWink: "wink",
		emoticonGrin: "grin",
		emoticonCool: "cool",
		emoticonAngry: "angry",
		emoticonHalf: "half",
		emoticonEyebrow: "eyebrow",
		emoticonFrown: "frown",
		emoticonShy: "shy",
		emoticonGoofy: "goofy",
		emoticonOops: "oops",
		emoticonTongue: "tongue",
		emoticonIdea: "idea",
		emoticonYes: "yes",
		emoticonNo: "no",
		emoticonAngel: "angel",
		emoticonCrying: "crying",
		emoticonHappy: "happy"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/SpellCheck", {
	root: {
		widgetLabel: "Batch Spell Check",
		unfound: "Not found",
		skip: "Skip",
		skipAll: "Skip All",
		toDic: "Add to dictionary",
		suggestions: "Suggestions",
		replace: "Replace",
		replaceWith: "Replace with",
		replaceAll: "Replace All",
		cancel: "Cancel",
		msg: "No misspellings found",
		iSkip: "Skip this",
		iSkipAll: "Skip all like this",
		iMsg: "No spelling suggestions"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/TableDialog", {
	root: {
		insertTableTitle: "Insert Table",
		modifyTableTitle: "Modify Table",
		rows: "Rows:",
		columns: "Columns:",
		align: "Align:",
		cellPadding: "Cell Padding:",
		cellSpacing: "Cell Spacing:",
		tableWidth: "Table Width:",
		backgroundColor: "Background Color:",
		borderColor: "Border Color:",
		borderThickness: "Border Thickness:",
		percent: "percent",
		pixels: "pixels",
		"default": "default",
		left: "left",
		center: "center",
		right: "right",
		buttonSet: "Set",
		buttonInsert: "Insert",
		buttonCancel: "Cancel",
		selectTableLabel: "Select Table",
		insertTableRowBeforeLabel: "Add Row Before",
		insertTableRowAfterLabel: "Add Row After",
		insertTableColumnBeforeLabel: "Add Column Before",
		insertTableColumnAfterLabel: "Add Column After",
		deleteTableRowLabel: "Delete Row",
		deleteTableColumnLabel: "Delete Column"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/TextColor", {
	root: {
		setButtonText: "Set",
		cancelButtonText: "Cancel"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/de/AutoSave", {
	saveLabel: "Speichern",
	saveSettingLabelOn: "Intervall f\u00fcr automatisches Speichern festlegen",
	saveSettingLabelOff: "Automatisches Speichern inaktivieren",
	saveSettingdialogTitle: "Automatisch speichern",
	saveSettingdialogDescription: "Intervall f\u00fcr automatisches Speichern angeben",
	saveSettingdialogParamName: "Intervall f\u00fcr automatisches Speichern",
	saveSettingdialogParamLabel: "Min.",
	saveSettingdialogButtonOk: "Intervall festlegen",
	saveSettingdialogButtonCancel: "Abbrechen",
	saveMessageSuccess: "Gespeichert um ${0}",
	saveMessageFail: "Konnte nicht um ${0} gespeichert werden"
}); //>>built
define("dojox/editor/plugins/nls/de/Blockquote", {
	blockquote: "Blockzitat"
}); //>>built
define("dojox/editor/plugins/nls/de/Breadcrumb", {
	nodeActions: "Aktionen f\u00fcr ${nodeName}",
	selectContents: "Inhalt ausw\u00e4hlen",
	selectElement: "Element ausw\u00e4hlen",
	deleteElement: "Element l\u00f6schen",
	deleteContents: "Inhalt l\u00f6schen",
	moveStart: "Cursor an Anfang verschieben",
	moveEnd: "Cursor an Ende verschieben"
}); //>>built
define("dojox/editor/plugins/nls/de/CollapsibleToolbar", {
	collapse: "Editor-Symbolleiste ausblenden",
	expand: "Editor-Symbolleiste einblenden"
}); //>>built
define("dojox/editor/plugins/nls/de/FindReplace", {
	findLabel: "Suchen:",
	findTooltip: "Text zum Suchen eingeben",
	replaceLabel: "Ersetzen durch:",
	replaceTooltip: "Text zum Ersetzen eingeben",
	findReplace: "Suchen und ersetzen",
	matchCase: "Gro\u00df- und Kleinschreibung abgleichen",
	matchCaseTooltip: "Gro\u00df- und Kleinschreibung abgleichen",
	backwards: "Zur\u00fcck",
	backwardsTooltip: "R\u00fcckw\u00e4rts nach Text suchen",
	replaceAllButton: "Global ersetzen",
	replaceAllButtonTooltip: "Gesamten Text ersetzen",
	findButton: "Suchen",
	findButtonTooltip: "Text suchen",
	replaceButton: "Ersetzen",
	replaceButtonTooltip: "Text ersetzen",
	replaceDialogText: "${0} Vorkommen ersetzt.",
	eofDialogText: "Letztes Vorkommen ${0}",
	eofDialogTextFind: "gefunden",
	eofDialogTextReplace: "ersetzt"
}); //>>built
define("dojox/editor/plugins/nls/de/InsertAnchor", {
	insertAnchor: "Anker einf\u00fcgen",
	title: "Eigenschaften des Ankers",
	anchor: "Name:",
	text: "Beschreibung:",
	set: "Festlegen",
	cancel: "Abbrechen"
}); //>>built
define("dojox/editor/plugins/nls/de/InsertEntity", {
	insertEntity: "Symbol einf\u00fcgen"
}); //>>built
define("dojox/editor/plugins/nls/de/LocalImage", {
	insertImageTitle: "Grafik einf\u00fcgen",
	url: "Grafik",
	browse: "Durchsuchen...",
	text: "Beschreibung",
	set: "Einf\u00fcgen",
	invalidMessage: "Ung\u00fcltiger Grafikdateityp",
	prePopuTextUrl: "Geben Sie eine g\u00fcltige Grafik-URL ein",
	prePopuTextBrowse: "oder bl\u00e4ttern Sie zu einer lokalen Datei."
}); //>>built
define("dojox/editor/plugins/nls/de/PageBreak", {
	pageBreak: "Seitenumbruch"
}); //>>built
define("dojox/editor/plugins/nls/de/PasteFromWord", {
	pasteFromWord: "Aus Word einf\u00fcgen",
	instructions: "F\u00fcgt den Inhalt aus Word in das Textfeld unten ein. Wenn Sie mit dem einzuf\u00fcgenden Inhalt zufrieden sind, klicken Sie auf die Schaltfl\u00e4che zum Einf\u00fcgen. Um das Einf\u00fcgen von Text abzubrechen, klicken Sie auf die Schaltfl\u00e4che zum Abbrechen. "
}); //>>built
define("dojox/editor/plugins/nls/de/Preview", {
	preview: "Vorschau"
}); //>>built
define("dojox/editor/plugins/nls/de/SafePaste", {
	instructions: "Direktes Einf\u00fcgen ist inaktiviert. F\u00fcgen Sie Inhalt in diesem Dialog \u00fcber Tastaturbefehle oder Men\u00fceintr\u00e4ge f\u00fcr Einf\u00fcgeoperationen Ihres Standardbrowsers ein. Wenn Sie mit dem einzuf\u00fcgenden Inhalt zufrieden sind, klicken Sie auf die Schaltfl\u00e4che Einf\u00fcgen. Wenn Sie das Einf\u00fcgen des Inhalts abbrechen m\u00f6chten, klicken Sie auf die Schaltfl\u00e4che Abbrechen."
}); //>>built
define("dojox/editor/plugins/nls/de/Save", {
	save: "Speichern"
}); //>>built
define("dojox/editor/plugins/nls/de/ShowBlockNodes", {
	showBlockNodes: "HTML-Blockelemente anzeigen"
}); //>>built
define("dojox/editor/plugins/nls/de/Smiley", {
	smiley: "Emoticon einf\u00fcgen",
	emoticonSmile: "L\u00e4cheln",
	emoticonLaughing: "Lachen",
	emoticonWink: "Zwinkern",
	emoticonGrin: "Grinsen",
	emoticonCool: "Cool",
	emoticonAngry: "W\u00fctend",
	emoticonHalf: "Halbes L\u00e4cheln",
	emoticonEyebrow: "Augenbraue",
	emoticonFrown: "Stirnrunzeln",
	emoticonShy: "Sch\u00fcchtern",
	emoticonGoofy: "Albern",
	emoticonOops: "Hoppla",
	emoticonTongue: "Zunge",
	emoticonIdea: "Idee",
	emoticonYes: "Ja",
	emoticonNo: "Nein",
	emoticonAngel: "Engel",
	emoticonCrying: "Weinen",
	emoticonHappy: "Gl\u00fccklich"
}); //>>built
define("dojox/editor/plugins/nls/de/SpellCheck", {
	widgetLabel: "Batchrechtschreibpr\u00fcfung",
	unfound: "Nicht gefunden",
	skip: "\u00dcberspringen",
	skipAll: "Alle \u00fcberspringen",
	toDic: "Zum W\u00f6rterbuch hinzuf\u00fcgen",
	suggestions: "Vorschl\u00e4ge",
	replace: "Ersetzen",
	replaceWith: "Ersetzen durch",
	replaceAll: "Global ersetzen",
	cancel: "Abbrechen",
	msg: "Keine Rechtschreibfehler gefunden",
	iSkip: "Diesen Fund \u00fcberspringen",
	iSkipAll: "Alle entsprechenden Funde \u00fcberspringen",
	iMsg: "Keine Rechtschreibvorschl\u00e4ge"
}); //>>built
define("dojox/editor/plugins/nls/de/TableDialog", {
	insertTableTitle: "Tabelle einf\u00fcgen",
	modifyTableTitle: "Tabelle \u00e4ndern",
	rows: "Zeilen:",
	columns: "Spalten:",
	align: "Ausrichten:",
	cellPadding: "Zellenrandbreite:",
	cellSpacing: "Zellenabstand:",
	tableWidth: "Tabellenbreite:",
	backgroundColor: "Hintergrundfarbe:",
	borderColor: "Umrandungsfarbe:",
	borderThickness: "Umrandungsst\u00e4rke:",
	percent: "Prozent",
	pixels: "Pixel",
	"default": "Standard",
	left: "Links",
	center: "Mitte",
	right: "Rechts",
	buttonSet: "Festlegen",
	buttonInsert: "Einf\u00fcgen",
	buttonCancel: "Abbrechen",
	selectTableLabel: "Tabelle ausw\u00e4hlen",
	insertTableRowBeforeLabel: "Zeile davor einf\u00fcgen",
	insertTableRowAfterLabel: "Zeile danach einf\u00fcgen",
	insertTableColumnBeforeLabel: "Spalte davor einf\u00fcgen",
	insertTableColumnAfterLabel: "Spalte danach einf\u00fcgen",
	deleteTableRowLabel: "Zeile l\u00f6schen",
	deleteTableColumnLabel: "Spalte l\u00f6schen"
}); //>>built
define("dojox/editor/plugins/nls/de/TextColor", {
	setButtonText: "Festlegen",
	cancelButtonText: "Abbrechen"
}); //>>built
define("dojox/editor/plugins/nls/de/latinEntities", {
	iexcl: "Umgekehrtes Ausrufezeichen",
	cent: "Cent-Zeichen",
	pound: "Nummernzeichen",
	curren: "W\u00e4hrungssymbol",
	yen: "Yen-ZeichenNyuan-Zeichen",
	brvbar: "Unterbrochener Balken\nUnterbrochener vertikaler Balken",
	sect: "Abschnittszeichen",
	uml: "Trema\nLeerzeichen mit Trema",
	copy: "Copyrightzeichen",
	ordf: "Weibliches Ordinalzeichen",
	laquo: "Doppelte, winklige Anf\u00fchrungszeichen, die nach links weisenlinke franz\u00f6sische Anf\u00fchrungszeichen",
	not: "Nicht-Zeichen",
	shy: "Ver\u00e4nderlicher Silbentrennstrich\nbedingter Trennstrich",
	reg: "Registrierte Handelsmarke\nregistriertes Markenzeichen",
	macr: "Makron\nLeerzeichen mit Makron\n\u00dcberstrich\nQuerstrich \u00fcber dem Buchstaben",
	deg: "Gradzeichen",
	plusmn: "Plus-Minus-Zeichen\nPlus-oder-Minus-Zeichen",
	sup2: "Hochgestellte Zwei\nHoch 2\nzum Quadrat",
	sup3: "Hochgestellte Drei\nHoch 3\nKubik",
	acute: "Akut\nsLeerzeichen mit Akut",
	micro: "Micro-Zeichen",
	para: "Pilcrow-Zeichen (engl.)\nAbsatzzeichen",
	middot: "Multiplikationszeichen\nGeorgisches Komma\nGriechisches Multiplikationszeichen",
	cedil: "Cedilla\nLeerzeichen mit Cedilla",
	sup1: "Hochgestellte Eins\nHoch 1",
	ordm: "M\u00e4nnliches Ordinalzeichen",
	raquo: "Doppelte, winklige Anf\u00fchrungszeichen, die nach rechts weisen\nRechtes franz\u00f6sisches Anf\u00fchrungszeichen",
	frac14: "Bruch 1 durch 4\nEin Viertel",
	frac12: "Bruch 1 durch 2\nEinhalb",
	frac34: "Bruch 3 durch 4\nDreiviertel",
	iquest: "Umgekehrtes Fragezeichen\nFragezeichen auf dem Kopf",
	Agrave: "Gro\u00dfes A mit Gravis\nGro\u00dfbuchstabe A mit Gravis",
	Aacute: "Gro\u00dfbuchstabe A mit Akut",
	Acirc: "Gro\u00dfbuchstabe A mit Zirkumflex",
	Atilde: "Gro\u00dfbuchstabe A mit Tilde",
	Auml: "Gro\u00dfbuchstabe A mit Trema",
	Aring: "Gro\u00dfes A mit Ring dar\u00fcber\nLateinischer Gro\u00dfbuchstabe A mit Ring dar\u00fcber",
	AElig: "Gro\u00dfes AE\nLigatur aus Gro\u00dfbuchstaben A und E",
	Ccedil: "Gro\u00dfbuchstabe C mit Cedilla",
	Egrave: "Gro\u00dfbuchstabe E mit Gravis",
	Eacute: "Gro\u00dfbuchstabe E mit Akut",
	Ecirc: "Gro\u00dfbuchstabe E mit Zirkumflex",
	Euml: "Gro\u00dfbuchstabe E mit Trema",
	Igrave: "Gro\u00dfbuchstabe I mit Gravis",
	Iacute: "Gro\u00dfbuchstabe I mit Akut",
	Icirc: "Gro\u00dfbuchstabe I mit Zirkumflex",
	Iuml: "Gro\u00dfbuchstabe I mit Trema",
	ETH: "Gro\u00dfes ETH",
	Ntilde: "Gro\u00dfbuchstabe N mit Tilde",
	Ograve: "Gro\u00dfbuchstabe O mit Gravis",
	Oacute: "Gro\u00dfbuchstabe O mit Akut",
	Ocirc: "Gro\u00dfbuchstabe O mit Zirkumflex",
	Otilde: "Lateinischer Gro\u00dfbuchstabe O mit Tilde",
	Ouml: "Lateinischer Gro\u00dfbuchstabe O mit Trema",
	times: "Multiplikationszeichen",
	Oslash: "Gro\u00dfes O mit Schr\u00e4gstrich\nGro\u00dfer d\u00e4nisch-norwegischer Umlaut \u00f6",
	Ugrave: "Gro\u00dfbuchstabe U mit Gravis",
	Uacute: "Gro\u00dfbuchstabe U mit Akut",
	Ucirc: "Gro\u00dfbuchstabe U mit Zirkumflex",
	Uuml: "Gro\u00dfbuchstabe U mit Trema",
	Yacute: "Gro\u00dfbuchstabe Y mit Akut",
	THORN: "Gro\u00dfes THORN",
	szlig: "Scharfes s\nEsszett",
	agrave: "Kleines a mit Gravis\nKleinbuchstabe a mit Gravis",
	aacute: "Kleinbuchstabe a mit Aktut",
	acirc: "Kleinbuchstabe a mit Zirkumflex",
	atilde: "Kleinbuchstabe a mit Tilde",
	auml: "Kleinbuchstabe a mit Trema",
	aring: "Kleines a mit Ring dar\u00fcber\nKleinbuchstabe a mit Ring",
	aelig: "Kleines ae\nLigatur aus Kleinbuchstaben a und e",
	ccedil: "Kleinbuchstabe c mit Cedilla",
	egrave: "Kleinbuchstabe e mit Gravis",
	eacute: "Kleinbuchstabe e mit Aktut",
	ecirc: "Kleinbuchstabe e mit Zirkumflex",
	euml: "Kleinbuchstabe e mit Trema",
	igrave: "Kleinbuchstabe i mit Gravis",
	iacute: "Kleinbuchstabe i mit Aktut",
	icirc: "Kleinbuchstabe i mit Zirkumflex",
	iuml: "Kleinbuchstabe i mit Trema",
	eth: "Kleines eth",
	ntilde: "Kleinbuchstabe n mit Tilde",
	ograve: "Kleinbuchstabe o mit Gravis",
	oacute: "Kleinbuchstabe o mit Aktut",
	ocirc: "Kleinbuchstabe o mit Zirkumflex",
	otilde: "Kleinbuchstabe o mit Tilde",
	ouml: "Kleinbuchstabe o mit Gravis",
	divide: "Divisionszeichen",
	oslash: "Kleines o mit Schr\u00e4gstrich\nKleiner d\u00e4nisch-norwegischer Umlaut \u00f6",
	ugrave: "Kleinbuchstabe u mit Gravis",
	uacute: "Kleinbuchstabe u mit Aktut",
	ucirc: "Kleinbuchstabe u mit Zirkumflex",
	uuml: "Kleinbuchstabe u mit Trema",
	yacute: "Kleinbuchstabe y mit Aktut",
	thorn: "Kleines thorn",
	yuml: "Kleinbuchstabe y mit Trema",
	fnof: "Kleines mit Haken\nFunction\nFlorin",
	Alpha: "Griechischer Gro\u00dfbuchstabe Alpha",
	Beta: "Griechischer Gro\u00dfbuchstabe Beta",
	Gamma: "Griechischer Gro\u00dfbuchstabe Gamma",
	Delta: "Griechischer Gro\u00dfbuchstabe Delta",
	Epsilon: "Griechischer Gro\u00dfbuchstabe Epsilon",
	Zeta: "Griechischer Gro\u00dfbuchstabe Zeta",
	Eta: "Griechischer Gro\u00dfbuchstabe Eta",
	Theta: "Griechischer Gro\u00dfbuchstabe Theta",
	Iota: "Griechischer Gro\u00dfbuchstabe Iota",
	Kappa: "Griechischer Gro\u00dfbuchstabe Kappa",
	Lambda: "Griechischer Gro\u00dfbuchstabe Lambda",
	Mu: "Griechischer Gro\u00dfbuchstabe My",
	Nu: "Griechischer Gro\u00dfbuchstabe Ny",
	Xi: "Griechischer Gro\u00dfbuchstabe Xi",
	Omicron: "Griechischer Gro\u00dfbuchstabe Omicron",
	Pi: "Griechischer Gro\u00dfbuchstabe Pi",
	Rho: "Griechischer Gro\u00dfbuchstabe Rho",
	Sigma: "Griechischer Gro\u00dfbuchstabe Sigma",
	Tau: "Griechischer Gro\u00dfbuchstabe Tau",
	Upsilon: "Griechischer Gro\u00dfbuchstabe Upsilon",
	Phi: "Griechischer Gro\u00dfbuchstabe Phi",
	Chi: "Griechischer Gro\u00dfbuchstabe Chi",
	Psi: "Griechischer Gro\u00dfbuchstabe Psi",
	Omega: "Griechischer Gro\u00dfbuchstabe Omega",
	alpha: "Griechischer Kleinbuchstabe Alpha",
	beta: "Griechischer Kleinbuchstabe Beta",
	gamma: "Griechischer Kleinbuchstabe Gamma",
	delta: "Griechischer Kleinbuchstabe Delta",
	epsilon: "Griechischer Kleinbuchstabe Epsilon",
	zeta: "Griechischer Kleinbuchstabe Zeta",
	eta: "Griechischer Kleinbuchstabe Eta",
	theta: "Griechischer Kleinbuchstabe Theta",
	iota: "Griechischer Kleinbuchstabe Iota",
	kappa: "Griechischer Kleinbuchstabe Kappa",
	lambda: "Griechischer Kleinbuchstabe Lambda",
	mu: "Griechischer Kleinbuchstabe My",
	nu: "Griechischer Kleinbuchstabe Ny",
	xi: "Griechischer Kleinbuchstabe Xi",
	omicron: "Griechischer Kleinbuchstabe Omicron",
	pi: "Griechischer Kleinbuchstabe Pi",
	rho: "Griechischer Kleinbuchstabe Rho",
	sigmaf: "Griechischer Kleinbuchstabe Sigma am Wortende",
	sigma: "Griechischer Kleinbuchstabe Sigma",
	tau: "Griechischer Kleinbuchstabe Tau",
	upsilon: "Griechischer Kleinbuchstabe Upsilon",
	phi: "Griechischer Kleinbuchstabe Phi",
	chi: "Griechischer Kleinbuchstabe Chi",
	psi: "Griechischer Kleinbuchstabe Psi",
	omega: "Griechischer Kleinbuchstabe Omega",
	thetasym: "Griechischer Kleinbuchstabe Theta (Symbol)",
	upsih: "Griechisches Upsilon mit Haken",
	piv: "Griechisches Pi-Symbol",
	bull: "Rundes Aufz\u00e4hlungszeichen\nSchwarzer kleiner Kreis",
	hellip: "Auslassung\nDrei kleine Punkte",
	prime: "Prime\nMinuten\nFu\u00df",
	Prime: "Doppelter Prime\nSekunden\nZoll",
	oline: "Hochgestellter Querstrich\nLeerzeichen mit Oberstrich",
	frasl: "Schr\u00e4gstrich f\u00fcr Bruch",
	weierp: "Kleines p in Schreibschrift\nPotenz\nWeierstrass'sche Ellipsen-Funktion",
	image: "Gro\u00dfes I in Frakturschrift\nImagin\u00e4rteil",
	real: "Gro\u00dfes R in Frakturschrift\nRealteilsymbol",
	trade: "Markenzeichen",
	alefsym: "Alef-Symbol\nerste Transfinite Kardinalzahl",
	larr: "Linkspfeil",
	uarr: "Aufw\u00e4rtspfeil",
	rarr: "Rechtspfeil",
	darr: "Abw\u00e4rtspfeil",
	harr: "Links-Rechts-Pfeil",
	crarr: "Abw\u00e4rtspfeil, der nach links abknickt\nZeilenumbruch",
	lArr: "Doppelter Linkspfeil",
	uArr: "Doppelter Aufw\u00e4rtspfeil",
	rArr: "Doppelter Rechtspfeil",
	dArr: "Doppelter Abw\u00e4rtspfeil",
	hArr: "Doppelter Rechts-Links-Pfeil",
	forall: "F\u00fcr alle",
	part: "Partielle Differenzialgleichung",
	exist: "Es existiert",
	empty: "Leermenge\nNullmenge\nDurchmesser",
	nabla: "Nabla\nAbsteigende Differenz",
	isin: "Element von",
	notin: "Kein Element von",
	ni: "Enth\u00e4lt als Member",
	prod: "un\u00e4res Produkt\nProduktzeichen",
	sum: "un\u00e4re Summation",
	minus: "Minuszeichen",
	lowast: "Sternoperator",
	radic: "Quadratwurzel\nWurzelzeichen",
	prop: "proportional zu",
	infin: "Unendlich",
	ang: "Winkel",
	and: "Logisches Und\nKeil",
	or: "Logisches Oder\nv-f\u00f6rmig",
	cap: "Schnittpunkt\nH\u00fctchen",
	cup: "Vereinigungsmenge\nCup",
	"int": "Integral",
	there4: "Deshalb",
	sim: "Tilde (Operator)\nvariiert mit\n\u00e4hnlich wie",
	cong: "Etwa gleich mit",
	asymp: "Ungef\u00e4hr gleich mit\nasymptotisch",
	ne: "Nicht gleich mit",
	equiv: "Identisch mit",
	le: "Kleiner-gleich",
	ge: "Gr\u00f6\u00dfer-gleich",
	sub: "Teil von",
	sup: "Obermenge von",
	nsub: "Kein Teil von",
	sube: "Teilmenge oder gleich mit",
	supe: "Obermenge oder gleich mit",
	oplus: "Pluszeichen mit Kreis\ndirekte Summe",
	otimes: "Multiplikationszeichen mit Kreis\nVektorprodukt",
	perp: "Senkrecht\nSenkrecht zu\nLotrecht",
	sdot: "Punktoperator",
	lceil: "Linke Ecke oben\nAPL upstile",
	rceil: "Rechte Ecke oben",
	lfloor: "Linke Ecke unten\nAPL downstile",
	rfloor: "Rechte Ecke unten",
	lang: "Linke spitze Klammer",
	rang: "Rechte spitze Klammer",
	loz: "Raute",
	spades: "Schwarzes Pik (Kartenspiel)",
	clubs: "Schwarzes Kreuz (Kartenspiel)\nKleeblatt",
	hearts: "Schwarzes Herz (Kartenspiel)\nValentine",
	diams: "Schwarzes Karo (Kartenspiel)",
	OElig: "Ligatur aus Gro\u00dfbuchstaben O und E",
	oelig: "Ligatur aus Kleinbuchstaben o und e",
	Scaron: "Gro\u00dfbuchstabe S mit Caron",
	scaron: "Kleinbuchstabe s mit Caron",
	Yuml: "Gro\u00dfbuchstabe Y mit Trema",
	circ: "Zirkumflex, Akzent",
	tilde: "kleine Tilde",
	ensp: "Leerschritt von der Breite des Buchstaben n",
	emsp: "Leerschritt von der Breite des Buchstaben m",
	thinsp: "Schmaler Leerschritt",
	zwnj: "Nichtverbinder mit Nullbreite",
	zwj: "Verbinder mit Nullbreite",
	lrm: "Links-Rechts-Markierung",
	rlm: "Rechts-Links-Markierung",
	ndash: "Gedankenstrich von der L\u00e4nge des Buchstabens n",
	mdash: "Gedankenstrich von der L\u00e4nge des Buchstabens m",
	lsquo: "Linkes einfaches Anf\u00fchrungszeichen",
	rsquo: "Rechtes einfaches Anf\u00fchrungszeichen",
	sbquo: "Einfaches, gekr\u00fcmmtes Anf\u00fchrungszeichen unten",
	ldquo: "Linkes doppeltes Anf\u00fchrungszeichen",
	rdquo: "Rechtes doppeltes Anf\u00fchrungszeichen",
	bdquo: "Doppeltes, gekr\u00fcmmtes Anf\u00fchrungszeichen unten",
	dagger: "Kreuzzeichen",
	Dagger: "Doppelkreuzzeichen",
	permil: "Promillezeichen",
	lsaquo: "Einfaches linkes Anf\u00fchrungszeichen",
	rsaquo: "Einfaches rechtes Anf\u00fchrungszeichen",
	euro: "Euro-Zeichen"
}); //>>built
define("dojox/editor/plugins/nls/fr/AutoSave", {
	saveLabel: "Enregistrer",
	saveSettingLabelOn: "D\u00e9finir l'intervalle d'enregistrement automatique...",
	saveSettingLabelOff: "D\u00e9sactiver l'enregistrement automatique",
	saveSettingdialogTitle: "Enregistrement automatique",
	saveSettingdialogDescription: "Sp\u00e9cifiez l'intervalle d'enregistrement automatique",
	saveSettingdialogParamName: "Intervalle d'enregistrement automatique",
	saveSettingdialogParamLabel: "min",
	saveSettingdialogButtonOk: "D\u00e9finir l'intervalle",
	saveSettingdialogButtonCancel: "Annuler",
	saveMessageSuccess: "Enregistr\u00e9 \u00e0 ${0}",
	saveMessageFail: "Echec de l'enregistrement \u00e0 ${0}"
}); //>>built
define("dojox/editor/plugins/nls/fr/Blockquote", {
	blockquote: "Bloc de citation"
}); //>>built
define("dojox/editor/plugins/nls/fr/Breadcrumb", {
	nodeActions: "Actions ${nodeName}",
	selectContents: "S\u00e9lection de contenus",
	selectElement: "S\u00e9lection d'un \u00e9l\u00e9ment",
	deleteElement: "Suppression d'un \u00e9l\u00e9ment",
	deleteContents: "Suppression de contenus",
	moveStart: "D\u00e9placer le curseur vers le d\u00e9but",
	moveEnd: "D\u00e9placer le curseur vers la fin"
}); //>>built
define("dojox/editor/plugins/nls/fr/CollapsibleToolbar", {
	collapse: "R\u00e9duire la barre d'outils de l'\u00e9diteur",
	expand: "D\u00e9velopper la barre d'outils de l'\u00e9diteur"
}); //>>built
define("dojox/editor/plugins/nls/fr/FindReplace", {
	findLabel: "Rechercher :",
	findTooltip: "Entrez le texte \u00e0 rechercher",
	replaceLabel: "Remplacer par :",
	replaceTooltip: "Entrez le texte de remplacement",
	findReplace: "Rechercher et remplacer",
	matchCase: "Respecter la casse",
	matchCaseTooltip: "Respecter la casse",
	backwards: "Vers l'arri\u00e8re",
	backwardsTooltip: "Recherchez le texte vers l'arri\u00e8re",
	replaceAllButton: "Remplacer tout",
	replaceAllButtonTooltip: "Remplacez tout le texte",
	findButton: "Rechercher",
	findButtonTooltip: "Recherchez le texte",
	replaceButton: "Remplacer",
	replaceButtonTooltip: "Remplacez le texte",
	replaceDialogText: "${0} occurrence(s) remplac\u00e9e(s)",
	eofDialogText: "Derni\u00e8re occurrence ${0}",
	eofDialogTextFind: "trouv\u00e9",
	eofDialogTextReplace: "remplac\u00e9"
}); //>>built
define("dojox/editor/plugins/nls/fr/InsertAnchor", {
	insertAnchor: "Ins\u00e9rer un point d'ancrage",
	title: "Propri\u00e9t\u00e9s du point d'ancrage",
	anchor: "Nom :",
	text: "Description :",
	set: "D\u00e9finir",
	cancel: "Annuler"
}); //>>built
define("dojox/editor/plugins/nls/fr/InsertEntity", {
	insertEntity: "Insertion d'un symbole"
}); //>>built
define("dojox/editor/plugins/nls/fr/LocalImage", {
	insertImageTitle: "Ins\u00e9rer une image",
	url: "Image",
	browse: "Parcourir...",
	text: "Description",
	set: "Ins\u00e9rer",
	invalidMessage: "Type de fichier image non valide",
	prePopuTextUrl: "Entrez une URL d'image",
	prePopuTextBrowse: " ou s\u00e9lectionnez un fichier local."
}); //>>built
define("dojox/editor/plugins/nls/fr/PageBreak", {
	pageBreak: "Saut de page"
}); //>>built
define("dojox/editor/plugins/nls/fr/PasteFromWord", {
	pasteFromWord: "Coller depuis Word",
	instructions: "Collez le contenu Word dans la zone de texte ci-dessous. Quand le contenu \u00e0 ins\u00e9rer vous convient, appuyez sur le bouton Coller. Pour annuler l'insertion du texte, utilisez le bouton Annuler."
}); //>>built
define("dojox/editor/plugins/nls/fr/Preview", {
	preview: "Aper\u00e7u"
}); //>>built
define("dojox/editor/plugins/nls/fr/SafePaste", {
	instructions: "La fonction directe Coller est d\u00e9sactiv\u00e9e. Collez le contenu dans la bo\u00eete de dialogue \u00e0 l'aide des commandes du clavier de navigateur standard ou de l'option coller dans le menu.  Quand le contenu \u00e0 ins\u00e9rer vous convient, appuyez sur le bouton Coller.  Pour annuler l'insertion du contenu, utilisez le bouton Annuler."
}); //>>built
define("dojox/editor/plugins/nls/fr/Save", {
	save: "Enregistrer"
}); //>>built
define("dojox/editor/plugins/nls/fr/ShowBlockNodes", {
	showBlockNodes: "Affichage des \u00e9l\u00e9ments de bloc HTML"
}); //>>built
define("dojox/editor/plugins/nls/fr/Smiley", {
	smiley: "Ins\u00e9rer une \u00e9motic\u00f4ne",
	emoticonSmile: "sourire",
	emoticonLaughing: "rire",
	emoticonWink: "clin d'oeil",
	emoticonGrin: "sourire large",
	emoticonCool: "calme",
	emoticonAngry: "col\u00e8re",
	emoticonHalf: "demi",
	emoticonEyebrow: "sourcils",
	emoticonFrown: "froncement de sourcils",
	emoticonShy: "timide",
	emoticonGoofy: "dingo",
	emoticonOops: "oops",
	emoticonTongue: "langue",
	emoticonIdea: "id\u00e9e",
	emoticonYes: "oui",
	emoticonNo: "non",
	emoticonAngel: "ange",
	emoticonCrying: "pleurs",
	emoticonHappy: "sourire"
}); //>>built
define("dojox/editor/plugins/nls/fr/SpellCheck", {
	widgetLabel: "V\u00e9rification orthographique par lots",
	unfound: "Introuvable",
	skip: "Ignorer",
	skipAll: "Ignorer tout",
	toDic: "Ajouter au dictionnaire",
	suggestions: "Suggestions",
	replace: "Remplacer",
	replaceWith: "Remplacer par",
	replaceAll: "Remplacer tout",
	cancel: "Annuler",
	msg: "Aucune faute d'orthographe trouv\u00e9e",
	iSkip: "Ignorer une fois",
	iSkipAll: "Ignorer chaque fois",
	iMsg: "Aucune suggestion orthographique"
}); //>>built
define("dojox/editor/plugins/nls/fr/TableDialog", {
	insertTableTitle: "Ins\u00e9rer une table",
	modifyTableTitle: "Modifier une table",
	rows: "Lignes :",
	columns: "Colonnes :",
	align: "Aligner :",
	cellPadding: "Remplissage des cellules :",
	cellSpacing: "Espacement des cellules :",
	tableWidth: "Largeur de table :",
	backgroundColor: "Couleur d'arri\u00e8re-plan :",
	borderColor: "Couleur des bordures :",
	borderThickness: "Epaisseur des bordures :",
	percent: "pourcentage",
	pixels: "pixels",
	"default": "par d\u00e9faut",
	left: "align\u00e9 \u00e0 gauche",
	center: "centr\u00e9",
	right: "align\u00e9 \u00e0 droite",
	buttonSet: "D\u00e9finir",
	buttonInsert: "Ins\u00e9rer",
	buttonCancel: "Annuler",
	selectTableLabel: "S\u00e9lectionner une table",
	insertTableRowBeforeLabel: "Ajouter une ligne avant",
	insertTableRowAfterLabel: "Ajouter une ligne apr\u00e8s",
	insertTableColumnBeforeLabel: "Ajouter une colonne avant",
	insertTableColumnAfterLabel: "Ajouter une colonne apr\u00e8s",
	deleteTableRowLabel: "Supprimer la ligne",
	deleteTableColumnLabel: "Supprimer la colonne"
}); //>>built
define("dojox/editor/plugins/nls/fr/TextColor", {
	setButtonText: "D\u00e9finir",
	cancelButtonText: "Annuler"
}); //>>built
define("dojox/editor/plugins/nls/fr/latinEntities", {
	iexcl: "point d'exclamation invers\u00e9",
	cent: "signe cent",
	pound: "signe livre sterling",
	curren: "signe devise",
	yen: "signe yen\nsigne yuan",
	brvbar: "barre interrompue\nbarre verticale interrompue",
	sect: "signe section",
	uml: "tr\u00e9ma\ntr\u00e9ma d'espacement",
	copy: "signe de droit d'auteur",
	ordf: "indicateur ordinal f\u00e9minin",
	laquo: "guillemets fermants",
	not: "signe non",
	shy: "trait d'union conditionnel\ntiret conditionnel",
	reg: "signe enregistr\u00e9\nmarque commerciale enregistr\u00e9e",
	macr: "macron\nmacron d'espacement\nligne sup\u00e9rieure\nbarre sup\u00e9rieure APL",
	deg: "signe degr\u00e9",
	plusmn: "signe plus-moins\nsigne plus-ou-moins",
	sup2: "exposant deux\npuissance deux\ncarr\u00e9",
	sup3: "exposant trois\npuissance trois\ncube",
	acute: "accent aigu\naccent aigu d'espacement",
	micro: "signe micro",
	para: "symbole de paragraphe",
	middot: "point m\u00e9dian\nvirgule g\u00e9orgiennea\npoint m\u00e9dian grec",
	cedil: "c\u00e9dille\nc\u00e9dille d'espacement",
	sup1: "exposant un\npuissance un",
	ordm: "indicateur ordinal masculin",
	raquo: "guillemets ouvrants",
	frac14: "fraction commune un quart\nfraction un quart",
	frac12: "fraction commune un demi\nfraction un demi",
	frac34: "fraction commune trois quarts\nfraction trois quarts",
	iquest: "point d'interrogation invers\u00e9\npoint d'interrogation retourn\u00e9",
	Agrave: "Latin - A majuscule avec accent grave\nLatin - A majuscule accent grave",
	Aacute: "Latin - A majuscule avec accent aigu",
	Acirc: "Latin - A majuscule avec accent circonflexe",
	Atilde: "Latin - A majuscule avec tilde",
	Auml: "Latin - A majuscule avec tr\u00e9ma",
	Aring: "Latin - A majuscule rond en chef\nLatin - A majuscule rond",
	AElig: "Latin - AE majuscule\nLatin - AE majuscule (ligature)",
	Ccedil: "Latin - C majuscule avec c\u00e9dille",
	Egrave: "Latin - E majuscule avec accent grave",
	Eacute: "Latin - E majuscule avec accent aigu",
	Ecirc: "Latin - E majuscule avec accent circonflexe",
	Euml: "Latin - E majuscule avec tr\u00e9ma",
	Igrave: "Latin - I majuscule avec accent grave",
	Iacute: "Latin - I majuscule avec accent aigu",
	Icirc: "Latin - I majuscule avec accent circonflexe",
	Iuml: "Latin - I majuscule avec tr\u00e9ma",
	ETH: "Latin - ETH majuscule",
	Ntilde: "Latin - N majuscule avec tilde",
	Ograve: "Latin - O majuscule avec accent grave",
	Oacute: "Latin - O majuscule avec accent aigu",
	Ocirc: "Latin - O majuscule avec accent circonflexe",
	Otilde: "Latin - O majuscule avec tilde",
	Ouml: "Latin - O majuscule avec tr\u00e9ma",
	times: "signe multiplication",
	Oslash: "Latin - O majuscule barr\u00e9\nLatin - Ensemble vide",
	Ugrave: "Latin - U majuscule avec accent grave",
	Uacute: "Latin - U majuscule avec accent aigu",
	Ucirc: "Latin - U majuscule avec accent circonflexe",
	Uuml: "Latin - U majuscule avec tr\u00e9ma",
	Yacute: "Latin - Y majuscule avec accent aigu",
	THORN: "Latin THORN majuscule",
	szlig: "Latin - s dur minuscule\nss",
	agrave: "Latin - a minuscule avec accent grave\nLatin - a minuscule accent grave",
	aacute: "Latin - a minuscule avec accent aigu",
	acirc: "Latin - a minuscule avec accent circonflexe",
	atilde: "Latin - a minuscule avec tilde",
	auml: "Latin - a minuscule avec tr\u00e9ma",
	aring: "Latin - a minuscule rond en chef\nLatin - a minuscule rond",
	aelig: "Latin - AE minuscule\nLatin - AE minuscule (ligature)",
	ccedil: "Latin - c minuscule avec c\u00e9dille",
	egrave: "Latin - e minuscule avec accent grave",
	eacute: "Latin - e minuscule avec accent aigu",
	ecirc: "Latin - e minuscule avec accent circonflexe",
	euml: "Latin - e minuscule avec tr\u00e9ma",
	igrave: "Latin - i minuscule avec accent grave",
	iacute: "Latin - i minuscule avec accent aigu",
	icirc: "Latin - i minuscule avec accent circonflexe",
	iuml: "Latin - i minuscule avec tr\u00e9ma",
	eth: "Latin - eth minuscule",
	ntilde: "Latin - n minuscule avec tilde",
	ograve: "Latin - o minuscule avec accent grave",
	oacute: "Latin - o minuscule avec accent aigu",
	ocirc: "Latin - o minuscule avec accent circonflexe",
	otilde: "Latin - o minuscule avec tilde",
	ouml: "Latin - o minuscule avec tr\u00e9ma",
	divide: "signe division",
	oslash: "Latin - o minuscule barr\u00e9\nLatin - Ensemble vide minuscule",
	ugrave: "Latin - u minuscule avec accent grave",
	uacute: "Latin - u minuscule avec accent aigu",
	ucirc: "Latin - u minuscule avec accent circonflexe",
	uuml: "Latin - u minuscule avec tr\u00e9ma",
	yacute: "Latin - y minuscule avec accent aigu",
	thorn: "Latin - thorn minuscule",
	yuml: "Latin - y minuscule avec tr\u00e9ma",
	fnof: "Latin - f minuscule avec crochet\nfonction\nflorin",
	Alpha: "Grec - alpha majuscule",
	Beta: "Grec - beta majuscule",
	Gamma: "Grec - gamma majuscule",
	Delta: "Grec - delta majuscule",
	Epsilon: "Grec - epsilon majuscule",
	Zeta: "Grec - zeta majuscule",
	Eta: "Grec - eta majuscule",
	Theta: "Grec - theta majuscule",
	Iota: "Grec - iota majuscule",
	Kappa: "Grec - kappa majuscule",
	Lambda: "Grec - lambda majuscule",
	Mu: "Grec - mu majuscule",
	Nu: "Grec - nu majuscule",
	Xi: "Grec - xi majuscule",
	Omicron: "Grec - omicron majuscule",
	Pi: "Grec - pi majuscule",
	Rho: "Grec - rho majuscule",
	Sigma: "Grec - sigma majuscule",
	Tau: "Grec - tau majuscule",
	Upsilon: "Grec - upsilon majuscule",
	Phi: "Grec - phi majuscule",
	Chi: "Grec - chi majuscule",
	Psi: "Grec - psi majuscule",
	Omega: "Grec - omega majuscule",
	alpha: "Grec - alpha minuscule",
	beta: "Grec - beta minuscule",
	gamma: "Grec - gamma minuscule",
	delta: "Grec - delta minuscule",
	epsilon: "Grec - epsilon minuscule",
	zeta: "Grec - zeta minuscule",
	eta: "Grec - eta minuscule",
	theta: "Grec - theta minuscule",
	iota: "Grec - iota minuscule",
	kappa: "Grec - kappa minuscule",
	lambda: "Grec - lambda minuscule",
	mu: "Grec - mu minuscule",
	nu: "Grec - nu minuscule",
	xi: "Grec - xi minuscule",
	omicron: "Grec - omicron minuscule",
	pi: "Grec - pi minuscule",
	rho: "Grec - rho minuscule",
	sigmaf: "Grec - sigma final minuscule",
	sigma: "Grec - sigma minuscule",
	tau: "Grec - tau minuscule",
	upsilon: "Grec - upsilon minuscule",
	phi: "Grec - phi minuscule",
	chi: "Grec - chi minuscule",
	psi: "Grec - psi minuscule",
	omega: "Grec - omega minuscule",
	thetasym: "Grec - theta minuscule",
	upsih: "Greek - upsilon avec symbole de crochet",
	piv: "Greek - symbole pi",
	bull: "puce\npetit cercle noir",
	hellip: "points de suspension\ntrois points de conduite",
	prime: "apostrophe\nminutes\npieds",
	Prime: "double apostrophe\nsecondes\npouces",
	oline: "surlign\u00e9\nbarre sup\u00e9rieure d'espacement",
	frasl: "barre de fraction",
	weierp: "P majuscule scripte\nensemble de puissances\nfonction elliptique de Weierstrass",
	image: "I majuscule noir\npartie imaginaire",
	real: "R majuscule noir\npartie r\u00e9elle",
	trade: "signe de marque commerciale",
	alefsym: "symbole alef\npremier cardinal transfini",
	larr: "fl\u00e8che vers la gauche",
	uarr: "fl\u00e8che vers le haut",
	rarr: "fl\u00e8che vers la droite",
	darr: "fl\u00e8che vers le bas",
	harr: "fl\u00e8che vers la gauche et la droite",
	crarr: "fl\u00e8che vers le bas avec coin vers la gauche\nretour chariot",
	lArr: "fl\u00e8che double vers la gauche",
	uArr: "fl\u00e8che double vers le haut",
	rArr: "fl\u00e8che double vers la droite",
	dArr: "fl\u00e8che double vers le bas",
	hArr: "fl\u00e8che double vers la gauche",
	forall: "pour tous",
	part: "diff\u00e9rentiel partiel",
	exist: "il existe",
	empty: "ensemble vide\nensemble null\ndiam\u00e8tre",
	nabla: "nabla\ndiff\u00e9rence arri\u00e8re",
	isin: "\u00e9l\u00e9ment de",
	notin: "non \u00e9l\u00e9ment de",
	ni: "contient comme membre",
	prod: "produit n-aire\nsigne produit",
	sum: "somme n-aire",
	minus: "signe moins",
	lowast: "ast\u00e9risque",
	radic: "racine carr\u00e9e\nsigne radical",
	prop: "proportionnel \u00e0",
	infin: "infinit\u00e9",
	ang: "angle",
	and: "et logique\nwedge",
	or: "ou logique\nvee",
	cap: "intersection\ncap",
	cup: "union\ncup",
	"int": "int\u00e9grale",
	there4: "donc",
	sim: "tilde\nvarie en fonction de\nsimilaire \u00e0",
	cong: "approximativement \u00e9gal \u00e0",
	asymp: "presque \u00e9gal \u00e0\nasymptotique \u00e0",
	ne: "diff\u00e9rente de",
	equiv: "identique \u00e0",
	le: "inf\u00e9rieur ou \u00e9gal \u00e0",
	ge: "sup\u00e9rieur ou \u00e9gal \u00e0",
	sub: "sous-ensemble de",
	sup: "sur-ensemble de",
	nsub: "non sous-ensemble de",
	sube: "sous-ensemble de ou \u00e9gal \u00e0",
	supe: "sur-ensemble de ou \u00e9gal \u00e0",
	oplus: "plus entour\u00e9\nsomme directe",
	otimes: "signe multipli\u00e9 entour\u00e9\nproduit vectoriel",
	perp: "orthogonal \u00e0\nperpendiculaire",
	sdot: "point",
	lceil: "plafond \u00e0 gauche\nmontant APL",
	rceil: "plafond \u00e0 droite",
	lfloor: "plancher \u00e0 gauche\ndescendant APL",
	rfloor: "plancher \u00e0 droite",
	lang: "chevron vers la gauche",
	rang: "chevron vers la droite",
	loz: "losange",
	spades: "pic noir",
	clubs: "tr\u00e8fle noir",
	hearts: "coeur noir\nvalentine",
	diams: "carreau noir",
	OElig: "Latin - Ligature OE majuscule",
	oelig: "Latin - Ligature oe minuscule",
	Scaron: "Latin - S majuscule avec caron",
	scaron: "Latin - s minuscule avec caron",
	Yuml: "Latin - Y majuscule avec tr\u00e9ma",
	circ: "accent circonflexe de lettre modificateur",
	tilde: "petit tilde",
	ensp: "espace demi-cadratin",
	emsp: "espace cadratin",
	thinsp: "espace fin",
	zwnj: "antiliant sans chasse",
	zwj: "liant sans chasse",
	lrm: "marque de gauche \u00e0 droite",
	rlm: "marque de droite \u00e0 gauche",
	ndash: "tiret demi-cadratin",
	mdash: "tiret cadratin",
	lsquo: "guillemet simple ouvrant",
	rsquo: "guillemet simple fermant",
	sbquo: "guillemet simple fermant bas",
	ldquo: "guillemet double gauche",
	rdquo: "guillemet double droit",
	bdquo: "guillemet double fermant bas",
	dagger: "ob\u00e8le",
	Dagger: "double ob\u00e8le",
	permil: "signe pour-mille",
	lsaquo: "guillemet simple orient\u00e9 vers la gauche",
	rsaquo: "guillemet simple orient\u00e9 vers la droite",
	euro: "signe euro"
}); //>>built
define("dojox/editor/plugins/nls/it/AutoSave", {
	saveLabel: "Salva",
	saveSettingLabelOn: "Imposta intervallo di salvataggio automatico...",
	saveSettingLabelOff: "Disattiva salvataggio automatico",
	saveSettingdialogTitle: "Salvataggio automatico",
	saveSettingdialogDescription: "Specifica intervallo di salvataggio automatico",
	saveSettingdialogParamName: "Intervallo di salvataggio automatico",
	saveSettingdialogParamLabel: "min",
	saveSettingdialogButtonOk: "Imposta intervallo",
	saveSettingdialogButtonCancel: "Annulla",
	saveMessageSuccess: "Salvato alle ${0}",
	saveMessageFail: "Salvataggio alle ${0} non riuscito"
}); //>>built
define("dojox/editor/plugins/nls/it/Blockquote", {
	blockquote: "Blockquote"
}); //>>built
define("dojox/editor/plugins/nls/it/Breadcrumb", {
	nodeActions: "Azioni ${nodeName}",
	selectContents: "Seleziona contenuti",
	selectElement: "Seleziona elemento",
	deleteElement: "Elimina elemento",
	deleteContents: "Elimina contenuti",
	moveStart: "Sposta cursore all'inizio",
	moveEnd: "Sposta cursore alla fine"
}); //>>built
define("dojox/editor/plugins/nls/it/CollapsibleToolbar", {
	collapse: "Comprimi barra degli strumenti dell'editor",
	expand: "Espandi barra degli strumenti dell'editor"
}); //>>built
define("dojox/editor/plugins/nls/it/FindReplace", {
	findLabel: "Trova:",
	findTooltip: "Immettere il testo da ricercare",
	replaceLabel: "Sostituisci con:",
	replaceTooltip: "Immettere il testo con cui sostituire",
	findReplace: "Trova e sostituisci",
	matchCase: "Corrispondenza maiuscolo/minuscolo",
	matchCaseTooltip: "Corrispondenza maiuscolo/minuscolo",
	backwards: "Indietro",
	backwardsTooltip: "Ricercare il testo all'indietro",
	replaceAllButton: "Sostituisci tutti",
	replaceAllButtonTooltip: "Sostituisci tutto il testo",
	findButton: "Trova",
	findButtonTooltip: "Trova il testo",
	replaceButton: "Sostituisci",
	replaceButtonTooltip: "Sostituisci il testo",
	replaceDialogText: "Sostituite ${0} ricorrenze.",
	eofDialogText: "Ultime ${0} ricorrenze",
	eofDialogTextFind: "trovato",
	eofDialogTextReplace: "sostituito"
}); //>>built
define("dojox/editor/plugins/nls/it/InsertAnchor", {
	insertAnchor: "Inserisci ancoraggio",
	title: "Propriet\u00e0 ancoraggio",
	anchor: "Nome:",
	text: "Descrizione:",
	set: "Imposta",
	cancel: "Annulla"
}); //>>built
define("dojox/editor/plugins/nls/it/InsertEntity", {
	insertEntity: "Inserisci simbolo"
}); //>>built
define("dojox/editor/plugins/nls/it/LocalImage", {
	insertImageTitle: "Inserisci immagine",
	url: "Immagine",
	browse: "Sfoglia...",
	text: "Descrizione",
	set: "Inserisci",
	invalidMessage: "Tipo file immagine non valido",
	prePopuTextUrl: "Immettere un URL immagine",
	prePopuTextBrowse: " o selezionare un file locale."
}); //>>built
define("dojox/editor/plugins/nls/it/PageBreak", {
	pageBreak: "Interruzione pagina"
}); //>>built
define("dojox/editor/plugins/nls/it/PasteFromWord", {
	pasteFromWord: "Incolla da Word",
	instructions: "Incollare i contenuti da Word nella seguente casella di testo. Quando si \u00e8 deciso quali contenuti inserire, fare clic sul pulsante incolla. Per interrompere l'inserimento del testo premere il pulsante annulla."
}); //>>built
define("dojox/editor/plugins/nls/it/Preview", {
	preview: "Anteprima"
}); //>>built
define("dojox/editor/plugins/nls/it/SafePaste", {
	instructions: "Non \u00e8 possibile incollare direttamente. Incollare i contenuti in questa finestra di dialogo utilizzando i controlli standard da menu o da tastiera del browser. Quando si \u00e8 deciso quali contenuti inserire, fare clic sul pulsante incolla. Per interrompere l'inserimento dei contenuti premere il pulsante annulla."
}); //>>built
define("dojox/editor/plugins/nls/it/Save", {
	save: "Salva"
}); //>>built
define("dojox/editor/plugins/nls/it/ShowBlockNodes", {
	showBlockNodes: "Mostra elementi blocco HTML"
}); //>>built
define("dojox/editor/plugins/nls/it/Smiley", {
	smiley: "Inserisci emoticon",
	emoticonSmile: "sorriso",
	emoticonLaughing: "risata",
	emoticonWink: "occhiolino",
	emoticonGrin: "ghigno",
	emoticonCool: "figo",
	emoticonAngry: "arrabbiato",
	emoticonHalf: "met\u00e0",
	emoticonEyebrow: "sopracciglia",
	emoticonFrown: "triste",
	emoticonShy: "timido",
	emoticonGoofy: "sciocco",
	emoticonOops: "ops",
	emoticonTongue: "linguaccia",
	emoticonIdea: "idea",
	emoticonYes: "s\u00ec",
	emoticonNo: "no",
	emoticonAngel: "angelo",
	emoticonCrying: "in lacrime",
	emoticonHappy: "felice"
}); //>>built
define("dojox/editor/plugins/nls/it/SpellCheck", {
	widgetLabel: "Controllo ortografico batch",
	unfound: "Non trovato",
	skip: "Ignora",
	skipAll: "Ignora tutto",
	toDic: "Aggiungi a dizionario",
	suggestions: "Suggerimenti",
	replace: "Sostituisci",
	replaceWith: "Sostituisci con",
	replaceAll: "Sostituisci tutti",
	cancel: "Annulla",
	msg: "Nessun errore ortografico",
	iSkip: "Ignora questo",
	iSkipAll: "Ignora tutti quelli uguali a questo",
	iMsg: "Nessun suggerimento ortografico"
}); //>>built
define("dojox/editor/plugins/nls/it/TableDialog", {
	insertTableTitle: "Inserisci tabella",
	modifyTableTitle: "Modifica tabella",
	rows: "Righe",
	columns: "Colonne",
	align: "Allinea",
	cellPadding: "Riempimento cella",
	cellSpacing: "Spazio cella",
	tableWidth: "Larghezza tabella",
	backgroundColor: "Colore di sfondo:",
	borderColor: "Colore bordo:",
	borderThickness: "Spessore bordo:",
	percent: "percentuale",
	pixels: "pixel",
	"default": "impostazione predefinita",
	left: "sinistra",
	center: "centro",
	right: "destra",
	buttonSet: "Imposta",
	buttonInsert: "Inserisci",
	buttonCancel: "Annulla",
	selectTableLabel: "Seleziona tabella",
	insertTableRowBeforeLabel: "Aggiungi riga prima",
	insertTableRowAfterLabel: "Aggiungi riga dopo",
	insertTableColumnBeforeLabel: "Aggiungi colonna prima",
	insertTableColumnAfterLabel: "Aggiungi colonna dopo",
	deleteTableRowLabel: "Elimina riga",
	deleteTableColumnLabel: "Elimina colonna"
}); //>>built
define("dojox/editor/plugins/nls/it/TextColor", {
	setButtonText: "Imposta",
	cancelButtonText: "Annulla"
}); //>>built
define("dojox/editor/plugins/nls/it/latinEntities", {
	iexcl: "punto esclamativo invertito",
	cent: "simbolo di centesimo",
	pound: "simbolo di sterlina",
	curren: "simbolo di valuta",
	yen: "simbolo di yen\nsimbolo di yuan",
	brvbar: "barra interrotta\nbarra verticale interrotta",
	sect: "simbolo di sezione",
	uml: "dieresi\ndieresi con spaziatura",
	copy: "simbolo di copyright",
	ordf: "indicatore ordinale femminile",
	laquo: "virgolette doppie angolari indicanti a sinistra\nguillemet indicante a sinistra",
	not: "simbolo di not",
	shy: "trattino nascosto\ntrattino discrezionale",
	reg: "simbolo registrato\nsimbolo di marchio commerciale registrato",
	macr: "macron\nmacron con spaziatura\nlinea sopra\nbarra sovrapposta APL",
	deg: "simbolo dei gradi",
	plusmn: "segno pi\u00f9-meno\nsegno pi\u00f9 o meno",
	sup2: "esponente due\nnumero due in esponente\nal quadrato",
	sup3: "esponente tre\nnumero tre in esponente\nal cubo",
	acute: "accento acuto\nacuto con spaziatura",
	micro: "simbolo di micro",
	para: "segno pilcrow\nsimbolo paragrafo",
	middot: "punto centrale\nvirgola georgiana\npunto centrale greco",
	cedil: "cediglia\ncediglia con spaziatura",
	sup1: "esponente uno\nnumero uno con esponente",
	ordm: "indicatore ordinale maschile",
	raquo: "virgolette doppie angolari indicanti a destra\nguillemet indicante a destra",
	frac14: "frazione un quarto\nfrazione un quarto",
	frac12: "frazione un mezzo\nfrazione un mezzo",
	frac34: "frazione tre quarti\nfrazione tre quarti",
	iquest: "punto interrogativo invertito\npunto interrogativo capovolto",
	Agrave: "Lettera A maiuscola con accento grave\nLettera A maiuscola grave",
	Aacute: "Lettera A maiuscola con accento acuto",
	Acirc: "Lettera A maiuscola con accento circonflesso",
	Atilde: "Lettera A maiuscola con tilde",
	Auml: "Lettera A maiuscola con dieresi",
	Aring: "Lettera A maiuscola con cerchio in alto\nLettera A maiuscola con cerchio",
	AElig: "Lettera AE maiuscola\nLegatura AE maiuscola",
	Ccedil: "Lettera C maiuscola con cediglia",
	Egrave: "Lettera E maiuscola con accento grave",
	Eacute: "Lettera E maiuscola con accento acuto",
	Ecirc: "Lettera E maiuscola con accento circonflesso",
	Euml: "Lettera E maiuscola con dieresi",
	Igrave: "Lettera I maiuscola con accento grave",
	Iacute: "Lettera I maiuscola con accento acuto",
	Icirc: "Lettera I maiuscola con accento circonflesso",
	Iuml: "Lettera I maiuscola con dieresi",
	ETH: "Lettera ETH maiuscola",
	Ntilde: "Lettera N maiuscola con tilde",
	Ograve: "Lettera O maiuscola con accento grave",
	Oacute: "Lettera O maiuscola con accento acuto",
	Ocirc: "Lettera O maiuscola con accento circonflesso",
	Otilde: "Lettera O maiuscola con tilde",
	Ouml: "Lettera O maiuscola con dieresi",
	times: "segno di moltiplicazione",
	Oslash: "Lettera O maiuscola con tratto\nLettera O maiuscola barra",
	Ugrave: "Lettera U maiuscola con accento grave",
	Uacute: "Lettera U maiuscola con accento acuto",
	Ucirc: "Lettera U maiuscola con accento circonflesso",
	Uuml: "Lettera U maiuscola con dieresi",
	Yacute: "Lettera Y maiuscola con accento acuto",
	THORN: "Lettera THORN maiuscola",
	szlig: "Lettera s minuscola sonora\nesse-zeta",
	agrave: "Lettera a minuscola con accento grave\nLettera a minuscola grave",
	aacute: "Lettera a minuscola con accento acuto",
	acirc: "Lettera a minuscola con accento circonflesso",
	atilde: "Lettera a minuscola con tilde",
	auml: "Lettera a minuscola con dieresi",
	aring: "Lettera a minuscola con cerchio in alto\nLettera a minuscola con cerchio",
	aelig: "Lettera ae minuscola\nLegatura ae minuscola",
	ccedil: "Lettera c minuscola con cediglia",
	egrave: "Lettera e minuscola con accento grave",
	eacute: "Lettera e minuscola con accento acuto",
	ecirc: "Lettera e minuscola con accento circonflesso",
	euml: "Lettera e minuscola con dieresi",
	igrave: "Lettera i minuscola con accento grave",
	iacute: "Lettera i minuscola con accento acuto",
	icirc: "Lettera i minuscola con accento circonflesso",
	iuml: "Lettera i minuscola con dieresi",
	eth: "Lettera eth minuscola",
	ntilde: "Lettera n minuscola con tilde",
	ograve: "Lettera o minuscola con accento grave",
	oacute: "Lettera o minuscola con accento acuto",
	ocirc: "Lettera o minuscola con accento circonflesso",
	otilde: "Lettera o minuscola con tilde",
	ouml: "Lettera o minuscola con dieresi",
	divide: "segno di divisione",
	oslash: "Lettera o minuscola con tratto\nLettera o minuscola barra",
	ugrave: "Lettera u minuscola con accento grave",
	uacute: "Lettera u minuscola con accento acuto",
	ucirc: "Lettera u minuscola con accento circonflesso",
	uuml: "Lettera u minuscola con dieresi",
	yacute: "Lettera y minuscola con accento acuto",
	thorn: "Lettera thorn minuscola",
	yuml: "Lettera y minuscola con dieresi",
	fnof: "Lettera f minuscola con uncino\nfunzione\nfiorino",
	Alpha: "Lettera alfa maiuscola greca",
	Beta: "Lettera beta maiuscola greca",
	Gamma: "Lettera gamma maiuscola greca",
	Delta: "Lettera delta maiuscola greca",
	Epsilon: "Lettera epsilon maiuscola greca",
	Zeta: "Lettera zeta maiuscola greca",
	Eta: "Lettera eta maiuscola greca",
	Theta: "Lettera theta maiuscola greca",
	Iota: "Lettera iota maiuscola greca",
	Kappa: "Lettera kappa maiuscola greca",
	Lambda: "Lettera lambda maiuscola greca",
	Mu: "Lettera mu maiuscola greca",
	Nu: "Lettera nu maiuscola greca",
	Xi: "Lettera xi maiuscola greca",
	Omicron: "Lettera omicron maiuscola greca",
	Pi: "Lettera pi maiuscola greca",
	Rho: "Lettera rho maiuscola greca",
	Sigma: "Lettera sigma maiuscola greca",
	Tau: "Lettera tau maiuscola greca",
	Upsilon: "Lettera upsilon maiuscola greca",
	Phi: "Lettera phi maiuscola greca",
	Chi: "Lettera chi maiuscola greca",
	Psi: "Lettera psi maiuscola greca",
	Omega: "Lettera omega maiuscola greca",
	alpha: "Lettera alfa minuscola greca",
	beta: "Lettera beta minuscola greca",
	gamma: "Lettera gamma minuscola greca",
	delta: "Lettera delta minuscola greca",
	epsilon: "Lettera epsilon minuscola greca",
	zeta: "Lettera zeta minuscola greca",
	eta: "Lettera eta minuscola greca",
	theta: "Lettera theta minuscola greca",
	iota: "Lettera iota minuscola greca",
	kappa: "Lettera kappa minuscola greca",
	lambda: "Lettera lambda minuscola greca",
	mu: "Lettera mu minuscola greca",
	nu: "Lettera nu minuscola greca",
	xi: "Lettera xi minuscola greca",
	omicron: "Lettera omicron minuscola greca",
	pi: "Lettera pi minuscola greca",
	rho: "Lettera rho minuscola greca",
	sigmaf: "Lettera sigma minuscola greca",
	sigma: "Lettera sigma minuscola greca",
	tau: "Lettera tau minuscola greca",
	upsilon: "Lettera upsilon minuscola greca",
	phi: "Lettera phi minuscola greca",
	chi: "Lettera chi minuscola greca",
	psi: "Lettera psi minuscola greca",
	omega: "Lettera omega minuscola greca",
	thetasym: "Simbolo theta minuscolo greca",
	upsih: "Simbolo upsilon con uncino greco",
	piv: "Simbolo pi greco",
	bull: "pallino\npiccolo cerchio nero",
	hellip: "puntini di sospensione\ntre puntini",
	prime: "apice\nminuti\npiedi",
	Prime: "doppio apice\nsecondi\npollici",
	oline: "linea sopra\noverscore con spaziatura",
	frasl: "barra frazione",
	weierp: "P maiuscola in corsivo\ninsieme potenza\nWeierstrass p",
	image: "I maiuscola gotica\nelemento immaginario",
	real: "R maiuscola gotica\nsimbolo di elemento reale",
	trade: "simbolo di marchio commerciale",
	alefsym: "simbolo alef\nprimo cardinale transfinito",
	larr: "freccia verso sinistra",
	uarr: "freccia verso l'alto",
	rarr: "freccia verso destra",
	darr: "freccia verso il basso",
	harr: "freccia sinistra destra",
	crarr: "freccia verso il basso con angolo verso sinistra\nritorno a capo",
	lArr: "freccia doppia verso sinistra",
	uArr: "freccia doppia verso l'alto",
	rArr: "freccia doppia verso destra",
	dArr: "freccia doppia verso il basso",
	hArr: "freccia doppia sinistra destra",
	forall: "per tutti",
	part: "differenziale parziale",
	exist: "esiste",
	empty: "insieme vuoto\ninsieme nullo\ndiametro",
	nabla: "nabla\ndifferenza all'indietro",
	isin: "elemento di",
	notin: "non un elemento di",
	ni: "contiene come membro",
	prod: "prodotto di grado n\nsegno di prodotto",
	sum: "sommatoria di grado n",
	minus: "segno meno",
	lowast: "operatore asterisco",
	radic: "radice quadrata\nsegno radice",
	prop: "proporzionale a",
	infin: "infinito",
	ang: "angolo",
	and: "and logico\nwedge",
	or: "or logico\nvee",
	cap: "intersezione\ncap",
	cup: "unione\ncoppa",
	"int": "integrale",
	there4: "quindi",
	sim: "operatore tilde\nvaria con\nsimile a",
	cong: "approssimativamente uguale a",
	asymp: "quasi uguale a\nasintodico di",
	ne: "non uguale a",
	equiv: "identico a",
	le: "minore o eguale a",
	ge: "maggiore o eguale a",
	sub: "sottoinsieme di",
	sup: "sovrainsieme di",
	nsub: "non un sottoinsieme di",
	sube: "sottoinsieme o uguale a",
	supe: "sovrainsieme o uguale a",
	oplus: "circled plus\nsomma diretta",
	otimes: "circled times\nprodotto vettoriale",
	perp: "up tack\nperpendicolare a\nperpendicolare",
	sdot: "operatore punto",
	lceil: "left ceiling\nAPL upstile",
	rceil: "right ceiling",
	lfloor: "left floor\nAPL downstile",
	rfloor: "right floor",
	lang: "parentesi angolare a sinistra",
	rang: "parentesi angolare a destra",
	loz: "losanga",
	spades: "seme di picche nero",
	clubs: "seme di fiori nero\nshamrock",
	hearts: "seme di cuori nero\nvalentine",
	diams: "seme di quadri nero",
	OElig: "Legatura OE maiuscola",
	oelig: "Legatura oe minuscola",
	Scaron: "Lettera S maiuscola con caron",
	scaron: "Lettera s minuscola con caron",
	Yuml: "Lettera Y maiuscola con dieresi",
	circ: "carattere di modifica accento circonflesso",
	tilde: "piccola tilde",
	ensp: "spazio en",
	emsp: "spazio em",
	thinsp: "spazio sottile",
	zwnj: "non congiuntore di larghezza zero",
	zwj: "congiuntore di larghezza zero",
	lrm: "contrassegno da sinistra a destra",
	rlm: "contrassegno da destra a sinistra",
	ndash: "trattino en",
	mdash: "trattino em",
	lsquo: "virgoletta singola sinistra",
	rsquo: "virgoletta singola destra",
	sbquo: "virgoletta singola bassa",
	ldquo: "virgolette doppie sinistre",
	rdquo: "virgolette doppie destre",
	bdquo: "virgolette doppie basse",
	dagger: "spada",
	Dagger: "doppia spada",
	permil: "simbolo per mille",
	lsaquo: "virgoletta angolare sinistra",
	rsaquo: "virgoletta angolare destra",
	euro: "simbolo di euro"
}); //>>built
define("dojox/editor/plugins/nls/latinEntities", {
	root: {
		iexcl: "inverted exclamation mark",
		cent: "cent sign",
		pound: "pound sign",
		curren: "currency sign",
		yen: "yen sign\nyuan sign",
		brvbar: "broken bar\nbroken vertical bar",
		sect: "section sign",
		uml: "diaeresis\nspacing diaeresis",
		copy: "copyright sign",
		ordf: "feminine ordinal indicator",
		laquo: "left-pointing double angle quotation mark\nleft pointing guillemet",
		not: "not sign",
		shy: "soft hyphen\ndiscretionary hyphen",
		reg: "registered sign\nregistered trade mark sign",
		macr: "macron\nspacing macron\noverline\nAPL overbar",
		deg: "degree sign",
		plusmn: "plus-minus sign\nplus-or-minus sign",
		sup2: "superscript two\nsuperscript digit two\nsquared",
		sup3: "superscript three\nsuperscript digit three\ncubed",
		acute: "acute accent\nspacing acute",
		micro: "micro sign",
		para: "pilcrow sign\nparagraph sign",
		middot: "middle dot\nGeorgian comma\nGreek middle dot",
		cedil: "cedilla\nspacing cedilla",
		sup1: "superscript one\nsuperscript digit one",
		ordm: "masculine ordinal indicator",
		raquo: "right-pointing double angle quotation mark\nright pointing guillemet",
		frac14: "vulgar fraction one quarter\nfraction one quarter",
		frac12: "vulgar fraction one half\nfraction one half",
		frac34: "vulgar fraction three quarters\nfraction three quarters",
		iquest: "inverted question mark\nturned question mark",
		Agrave: "Latin capital letter A with grave\nLatin capital letter A grave",
		Aacute: "Latin capital letter A with acute",
		Acirc: "Latin capital letter A with circumflex",
		Atilde: "Latin capital letter A with tilde",
		Auml: "Latin capital letter A with diaeresis",
		Aring: "Latin capital letter A with ring above\nLatin capital letter A ring",
		AElig: "Latin capital letter AE\nLatin capital ligature AE",
		Ccedil: "Latin capital letter C with cedilla",
		Egrave: "Latin capital letter E with grave",
		Eacute: "Latin capital letter E with acute",
		Ecirc: "Latin capital letter E with circumflex",
		Euml: "Latin capital letter E with diaeresis",
		Igrave: "Latin capital letter I with grave",
		Iacute: "Latin capital letter I with acute",
		Icirc: "Latin capital letter I with circumflex",
		Iuml: "Latin capital letter I with diaeresis",
		ETH: "Latin capital letter ETH",
		Ntilde: "Latin capital letter N with tilde",
		Ograve: "Latin capital letter O with grave",
		Oacute: "Latin capital letter O with acute",
		Ocirc: "Latin capital letter O with circumflex",
		Otilde: "Latin capital letter O with tilde",
		Ouml: "Latin capital letter O with diaeresis",
		times: "multiplication sign",
		Oslash: "Latin capital letter O with stroke\nLatin capital letter O slash",
		Ugrave: "Latin capital letter U with grave",
		Uacute: "Latin capital letter U with acute",
		Ucirc: "Latin capital letter U with circumflex",
		Uuml: "Latin capital letter U with diaeresis",
		Yacute: "Latin capital letter Y with acute",
		THORN: "Latin capital letter THORN",
		szlig: "Latin small letter sharp s\ness-zed",
		agrave: "Latin small letter a with grave\nLatin small letter a grave",
		aacute: "Latin small letter a with acute",
		acirc: "Latin small letter a with circumflex",
		atilde: "Latin small letter a with tilde",
		auml: "Latin small letter a with diaeresis",
		aring: "Latin small letter a with ring above\nLatin small letter a ring",
		aelig: "Latin small letter ae\nLatin small ligature ae",
		ccedil: "Latin small letter c with cedilla",
		egrave: "Latin small letter e with grave",
		eacute: "Latin small letter e with acute",
		ecirc: "Latin small letter e with circumflex",
		euml: "Latin small letter e with diaeresis",
		igrave: "Latin small letter i with grave",
		iacute: "Latin small letter i with acute",
		icirc: "Latin small letter i with circumflex",
		iuml: "Latin small letter i with diaeresis",
		eth: "Latin small letter eth",
		ntilde: "Latin small letter n with tilde",
		ograve: "Latin small letter o with grave",
		oacute: "Latin small letter o with acute",
		ocirc: "Latin small letter o with circumflex",
		otilde: "Latin small letter o with tilde",
		ouml: "Latin small letter o with diaeresis",
		divide: "division sign",
		oslash: "Latin small letter o with stroke\nLatin small letter o slash",
		ugrave: "Latin small letter u with grave",
		uacute: "Latin small letter u with acute",
		ucirc: "Latin small letter u with circumflex",
		uuml: "Latin small letter u with diaeresis",
		yacute: "Latin small letter y with acute",
		thorn: "Latin small letter thorn",
		yuml: "Latin small letter y with diaeresis",
		fnof: "Latin small f with hook\nfunction\nflorin",
		Alpha: "Greek capital letter alpha",
		Beta: "Greek capital letter beta",
		Gamma: "Greek capital letter gamma",
		Delta: "Greek capital letter delta",
		Epsilon: "Greek capital letter epsilon",
		Zeta: "Greek capital letter zeta",
		Eta: "Greek capital letter eta",
		Theta: "Greek capital letter theta",
		Iota: "Greek capital letter iota",
		Kappa: "Greek capital letter kappa",
		Lambda: "Greek capital letter lambda",
		Mu: "Greek capital letter mu",
		Nu: "Greek capital letter nu",
		Xi: "Greek capital letter xi",
		Omicron: "Greek capital letter omicron",
		Pi: "Greek capital letter pi",
		Rho: "Greek capital letter rho",
		Sigma: "Greek capital letter sigma",
		Tau: "Greek capital letter tau",
		Upsilon: "Greek capital letter upsilon",
		Phi: "Greek capital letter phi",
		Chi: "Greek capital letter chi",
		Psi: "Greek capital letter psi",
		Omega: "Greek capital letter omega",
		alpha: "Greek small letter alpha",
		beta: "Greek small letter beta",
		gamma: "Greek small letter gamma",
		delta: "Greek small letter delta",
		epsilon: "Greek small letter epsilon",
		zeta: "Greek small letter zeta",
		eta: "Greek small letter eta",
		theta: "Greek small letter theta",
		iota: "Greek small letter iota",
		kappa: "Greek small letter kappa",
		lambda: "Greek small letter lambda",
		mu: "Greek small letter mu",
		nu: "Greek small letter nu",
		xi: "Greek small letter xi",
		omicron: "Greek small letter omicron",
		pi: "Greek small letter pi",
		rho: "Greek small letter rho",
		sigmaf: "Greek small letter final sigma",
		sigma: "Greek small letter sigma",
		tau: "Greek small letter tau",
		upsilon: "Greek small letter upsilon",
		phi: "Greek small letter phi",
		chi: "Greek small letter chi",
		psi: "Greek small letter psi",
		omega: "Greek small letter omega",
		thetasym: "Greek small letter theta symbol",
		upsih: "Greek upsilon with hook symbol",
		piv: "Greek pi symbol",
		bull: "bullet\nblack small circle",
		hellip: "horizontal ellipsis\nthree dot leader",
		prime: "prime\nminutes\nfeet",
		Prime: "double prime\nseconds\ninches",
		oline: "overline\nspacing overscore",
		frasl: "fraction slash",
		weierp: "script capital P\npower set\nWeierstrass p",
		image: "blackletter capital I\nimaginary part",
		real: "blackletter capital R\nreal part symbol",
		trade: "trade mark sign",
		alefsym: "alef symbol\nfirst transfinite cardinal",
		larr: "leftwards arrow",
		uarr: "upwards arrow",
		rarr: "rightwards arrow",
		darr: "downwards arrow",
		harr: "left right arrow",
		crarr: "downwards arrow with corner leftwards\ncarriage return",
		lArr: "leftwards double arrow",
		uArr: "upwards double arrow",
		rArr: "rightwards double arrow",
		dArr: "downwards double arrow",
		hArr: "left right double arrow",
		forall: "for all",
		part: "partial differential",
		exist: "there exists",
		empty: "empty set\nnull set\ndiameter",
		nabla: "nabla\nbackward difference",
		isin: "element of",
		notin: "not an element of",
		ni: "contains as member",
		prod: "n-ary product\nproduct sign",
		sum: "n-ary sumation",
		minus: "minus sign",
		lowast: "asterisk operator",
		radic: "square root\nradical sign",
		prop: "proportional to",
		infin: "infinity",
		ang: "angle",
		and: "logical and\nwedge",
		or: "logical or\nvee",
		cap: "intersection\ncap",
		cup: "union\ncup",
		"int": "integral",
		there4: "therefore",
		sim: "tilde operator\nvaries with\nsimilar to",
		cong: "approximately equal to",
		asymp: "almost equal to\nasymptotic to",
		ne: "not equal to",
		equiv: "identical to",
		le: "less-than or equal to",
		ge: "greater-than or equal to",
		sub: "subset of",
		sup: "superset of",
		nsub: "not a subset of",
		sube: "subset of or equal to",
		supe: "superset of or equal to",
		oplus: "circled plus\ndirect sum",
		otimes: "circled times\nvector product",
		perp: "up tack\northogonal to\nperpendicular",
		sdot: "dot operator",
		lceil: "left ceiling\nAPL upstile",
		rceil: "right ceiling",
		lfloor: "left floor\nAPL downstile",
		rfloor: "right floor",
		lang: "left-pointing angle bracket",
		rang: "right-pointing angle bracket",
		loz: "lozenge",
		spades: "black spade suit",
		clubs: "black club suit\nshamrock",
		hearts: "black heart suit\nvalentine",
		diams: "black diamond suit",
		OElig: "Latin capital ligature OE",
		oelig: "Latin small ligature oe",
		Scaron: "Latin capital letter S with caron",
		scaron: "Latin small letter s with caron",
		Yuml: "Latin capital letter Y with diaeresis",
		circ: "modifier letter circumflex accent",
		tilde: "small tilde",
		ensp: "en space",
		emsp: "em space",
		thinsp: "thin space",
		zwnj: "zero width non-joiner",
		zwj: "zero width joiner",
		lrm: "left-to-right mark",
		rlm: "right-to-left mark",
		ndash: "en dash",
		mdash: "em dash",
		lsquo: "left single quotation mark",
		rsquo: "right single quotation mark",
		sbquo: "single low-9 quotation mark",
		ldquo: "left double quotation mark",
		rdquo: "right double quotation mark",
		bdquo: "double low-9 quotation mark",
		dagger: "dagger",
		Dagger: "double dagger",
		permil: "per mille sign",
		lsaquo: "single left-pointing angle quotation mark",
		rsaquo: "single right-pointing angle quotation mark",
		euro: "euro sign"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	ar: !0
}); //>>built
define("dojox/editor/plugins/nls/nl/AutoSave", {
	saveLabel: "Opslaan",
	saveSettingLabelOn: "Interval voor automatisch opslaan instellen...",
	saveSettingLabelOff: "Automatisch opslaan uitschakelen",
	saveSettingdialogTitle: "Automatisch opslaan",
	saveSettingdialogDescription: "Geef het interval voor Automatisch opslaan op.",
	saveSettingdialogParamName: "Interval voor Automatisch opslaan",
	saveSettingdialogParamLabel: "min",
	saveSettingdialogButtonOk: "Interval instellen",
	saveSettingdialogButtonCancel: "Annuleren",
	saveMessageSuccess: "Opgeslagen om ${0}",
	saveMessageFail: "Opslaan mislukt om ${0}"
}); //>>built
define("dojox/editor/plugins/nls/nl/Blockquote", {
	blockquote: "Blockquote"
}); //>>built
define("dojox/editor/plugins/nls/nl/Breadcrumb", {
	nodeActions: "${nodeName} Acties",
	selectContents: "Inhoud selecteren",
	selectElement: "Element selecteren",
	deleteElement: "Element wissen",
	deleteContents: "Inhoud wissen",
	moveStart: "Cursor verplaatsen naar start",
	moveEnd: "Cursor verplaatsen naar eind"
}); //>>built
define("dojox/editor/plugins/nls/nl/CollapsibleToolbar", {
	collapse: "Editor-werkbalk samenvouwen",
	expand: "Editor-werkbalk uitvouwen"
}); //>>built
define("dojox/editor/plugins/nls/nl/FindReplace", {
	findLabel: "Zoeken:",
	findTooltip: "Geef de zoektekst op",
	replaceLabel: "Vervangen door:",
	replaceTooltip: "Geef de vervangende tekst op",
	findReplace: "Zoeken en vervangen",
	matchCase: "Hoofdlettergevoelig",
	matchCaseTooltip: "Hoofdlettergevoelig",
	backwards: "Terug",
	backwardsTooltip: "Terugwaarts naar tekst zoeken",
	replaceAllButton: "Alle vervangen",
	replaceAllButtonTooltip: "Gehele tekst vervangen",
	findButton: "Zoeken:",
	findButtonTooltip: "Tekst zoeken",
	replaceButton: "Vervangen",
	replaceButtonTooltip: "Tekst vervangen",
	replaceDialogText: "${0} vervangingen.",
	eofDialogText: "Laatste positie ${0}",
	eofDialogTextFind: "gevonden",
	eofDialogTextReplace: "vervangen"
}); //>>built
define("dojox/editor/plugins/nls/nl/InsertAnchor", {
	insertAnchor: "Anker invoegen",
	title: "Ankereigenschappen",
	anchor: "Naam:",
	text: "Beschrijving:",
	set: "Instellen",
	cancel: "Annuleren"
}); //>>built
define("dojox/editor/plugins/nls/nl/InsertEntity", {
	insertEntity: "Symbool invoegen"
}); //>>built
define("dojox/editor/plugins/nls/nl/LocalImage", {
	insertImageTitle: "Afbeelding invoegen",
	url: "Afbeelding",
	browse: "Bladeren...",
	text: "Beschrijving",
	set: "Invoegen",
	invalidMessage: "Ongeldig bestandstype voor afbeelding",
	prePopuTextUrl: "Geef een afbeeldings-URL op",
	prePopuTextBrowse: " of navigeer naar een lokaal bestand."
}); //>>built
define("dojox/editor/plugins/nls/nl/PageBreak", {
	pageBreak: "Paginaeinde"
}); //>>built
define("dojox/editor/plugins/nls/nl/PasteFromWord", {
	pasteFromWord: "Plakken vanuit Word",
	instructions: "Plak de content vanuit Word in het tekstvak hieronder. Klik als u klaar bent op de knop Plakken. Kies Annuleren als u de invoeging van tekst wilt afbreken."
}); //>>built
define("dojox/editor/plugins/nls/nl/Preview", {
	preview: "Preview"
}); //>>built
define("dojox/editor/plugins/nls/nl/SafePaste", {
	instructions: "Rechtstreeks plakken is niet mogelijk. U kunt in dit dialoogvenster content met de standaardknoppen of -toetsen van de browser plakken. Als u tevreden bent met de content die u wilt plakken, klikt u op de knop Plakken. Kies Annuleren als u de invoeging van content wilt afbreken."
}); //>>built
define("dojox/editor/plugins/nls/nl/Save", {
	save: "Opslaan"
}); //>>built
define("dojox/editor/plugins/nls/nl/ShowBlockNodes", {
	showBlockNodes: "HTML-blokelementen afbeelden"
}); //>>built
define("dojox/editor/plugins/nls/nl/Smiley", {
	smiley: "Emoticon invoegen",
	emoticonSmile: "glimlach",
	emoticonLaughing: "lach",
	emoticonWink: "knipoog",
	emoticonGrin: "grijns",
	emoticonCool: "cool",
	emoticonAngry: "kwaad",
	emoticonHalf: "half",
	emoticonEyebrow: "verbaasd",
	emoticonFrown: "frons",
	emoticonShy: "verlegen",
	emoticonGoofy: "goofy",
	emoticonOops: "oeps",
	emoticonTongue: "tong",
	emoticonIdea: "idee",
	emoticonYes: "ja",
	emoticonNo: "nee",
	emoticonAngel: "engel",
	emoticonCrying: "bedroefd",
	emoticonHappy: "blij"
}); //>>built
define("dojox/editor/plugins/nls/nl/SpellCheck", {
	widgetLabel: "Groepsgewijze spellingcontrole",
	unfound: "Niet gevonden",
	skip: "Overslaan",
	skipAll: "Alle overslaan",
	toDic: "Toevoegen aan woordenboek",
	suggestions: "Suggesties",
	replace: "Vervangen",
	replaceWith: "Vervangen door",
	replaceAll: "Alle vervangen",
	cancel: "Annuleren",
	msg: "Geen spelfouten gevonden",
	iSkip: "Deze overslaan",
	iSkipAll: "Al deze overslaan",
	iMsg: "Geen spellingsuggesties"
}); //>>built
define("dojox/editor/plugins/nls/nl/TableDialog", {
	insertTableTitle: "Tabel invoegen",
	modifyTableTitle: "Tabel wijzigen",
	rows: "Rijen",
	columns: "Kolommen",
	align: "Uitlijnen",
	cellPadding: "Celopvulling:",
	cellSpacing: "Celspati\u00ebring:",
	tableWidth: "Tabelbreedte:",
	backgroundColor: "Achtergrondkleur:",
	borderColor: "Randkleur",
	borderThickness: "Randdikte:",
	percent: "procent",
	pixels: "pixels",
	"default": "standaard",
	left: "links",
	center: "gecentreerd",
	right: "rechts",
	buttonSet: "Instellen",
	buttonInsert: "Invoegen",
	buttonCancel: "Annuleren",
	selectTableLabel: "Tabel selecteren",
	insertTableRowBeforeLabel: "Rij boven toevoegen",
	insertTableRowAfterLabel: "Rij onder toevoegen",
	insertTableColumnBeforeLabel: "Kolom voor toevoegen",
	insertTableColumnAfterLabel: "Kolom achter toevoegen",
	deleteTableRowLabel: "Rij wissen",
	deleteTableColumnLabel: "Kolom wissen"
}); //>>built
define("dojox/editor/plugins/nls/nl/TextColor", {
	setButtonText: "Instellen",
	cancelButtonText: "Annuleren"
}); //>>built
define("dojox/editor/plugins/nls/nl/latinEntities", {
	iexcl: "omgekeerd uitroepteken",
	cent: "dollarcent",
	pound: "pond",
	curren: "algemeen muntsymbool",
	yen: "yen\nyuan",
	brvbar: "sluisteken\ngebroken streepje",
	sect: "paragraaf",
	uml: "umlaut/trema",
	copy: "copyright (auteursrecht)",
	ordf: "aanduiding vrouwelijk rangtelwoord (Spaans)",
	laquo: "linker guillemet\ndubbele punthaak openen",
	not: "niet-teken",
	shy: "zacht afbreekstreepje",
	reg: "gedeponeerd handelsmerk",
	macr: "macron\nbovenlijn",
	deg: "graad",
	plusmn: "plusminus\nplus-of-min",
	sup2: "superscript 2\nkwadraat",
	sup3: "superscript 3\ntot de derde",
	acute: "accent aigu",
	micro: "micro (mu)",
	para: "paragraaf (pilcrow)",
	middot: "vermenigvuldigingspunt\nmiddle dot",
	cedil: "cedille",
	sup1: "superscript 1",
	ordm: "aanduiding mannelijk rangtelwoord (Spaans)",
	raquo: "rechter guillemet\ndubbele punthaak sluiten",
	frac14: "1/4 (kwart)",
	frac12: "1/2 (half)",
	frac34: "3/4 (driekwart)",
	iquest: "omgekeerd vraagteken",
	Agrave: "hoofdletter A met accent grave",
	Aacute: "hoofdletter A met accent aigu",
	Acirc: "hoofdletter A met accent circonflexe",
	Atilde: "hoofdletter A met tilde",
	Auml: "hoofdletter A met trema",
	Aring: "hoofdletter A met corona",
	AElig: "hoofletter AE-ligatuur",
	Ccedil: "hoofdletter C met cedille",
	Egrave: "hoofdletter E met accent grave",
	Eacute: "hoofdletter E met accent aigu",
	Ecirc: "hoofdletter E met accent circonflexe",
	Euml: "hoofdletter E met trema",
	Igrave: "hoofdletter I met accent grave",
	Iacute: "hoofdletter I met accent aigu",
	Icirc: "hoofdletter I met accent circonflexe",
	Iuml: "hoofdletter I met trema",
	ETH: "hoofdletter ETH-ligatuur",
	Ntilde: "hoofdletter N met tilde",
	Ograve: "hoofdletter O met accent grave",
	Oacute: "hoofdletter O met accent aigu",
	Ocirc: "hoofdletter O met accent circonflexe",
	Otilde: "hoofdletter O met tilde",
	Ouml: "hoofdletter O met trema",
	times: "maal",
	Oslash: "hoofdletter O doorgestreept",
	Ugrave: "hoofdletter U met accent grave",
	Uacute: "hoofdletter U met accent aigu",
	Ucirc: "hoofdletter U met accent circonflexe",
	Uuml: "hoofdletter U met trema",
	Yacute: "hoofdletter Y met accent aigu",
	THORN: "hoofdletter THORN",
	szlig: "sz-ligatuur\nringel S",
	agrave: "kleine letter a met accent grave",
	aacute: "kleine letter a met accent aigu",
	acirc: "kleine letter a met accent circonflexe",
	atilde: "kleine letter a met tilde",
	auml: "kleine letter a met trema",
	aring: "kleine letter a met corona",
	aelig: "kleine letter ae-ligatuur",
	ccedil: "kleine letter c met cedille",
	egrave: "kleine letter e met accent grave",
	eacute: "kleine letter e met accent aigu",
	ecirc: "kleine letter e met accent circonflexe",
	euml: "kleine letter e met trema",
	igrave: "kleine letter i met accent grave",
	iacute: "kleine letter i met accent aigu",
	icirc: "kleine letter i met accent circonflexe",
	iuml: "kleine letter i met trema",
	eth: "kleine letter eth",
	ntilde: "kleine letter n met tilde",
	ograve: "kleine letter o met accent grave",
	oacute: "kleine letter o met accent aigu",
	ocirc: "kleine letter o met accent circonflexe",
	otilde: "kleine letter o met tilde",
	ouml: "kleine letter o met trema",
	divide: "deelteken",
	oslash: "kleine letter o doorgestreept",
	ugrave: "kleine letter u met accent grave",
	uacute: "kleine letter u met accent aigu",
	ucirc: "kleine letter u met accent circonflexe",
	uuml: "kleine letter u met trema",
	yacute: "kleine letter y met accent aigu",
	thorn: "kleine letter thorn",
	yuml: "kleine letter y met trema",
	fnof: "cursieve f\nfunctie\ngulden",
	Alpha: "Griekse hoofdletter alpha",
	Beta: "Griekse hoofdletter b\u00e8ta",
	Gamma: "Griekse hoofdletter gamma",
	Delta: "Griekse hoofdletter delta",
	Epsilon: "Griekse hoofdletter epsilon",
	Zeta: "Griekse hoofdletter z\u00e8ta",
	Eta: "Griekse hoofdletter \u00e8ta",
	Theta: "Griekse hoofdletter th\u00e8ta",
	Iota: "Griekse hoofdletter iota",
	Kappa: "Griekse hoofdletter kappa",
	Lambda: "Griekse hoofdletter lambda",
	Mu: "Griekse hoofdletter mu",
	Nu: "Griekse hoofdletter nu",
	Xi: "Griekse hoofdletter xi",
	Omicron: "Griekse hoofdletter omicron",
	Pi: "Griekse hoofdletter pi",
	Rho: "Griekse hoofdletter rho",
	Sigma: "Griekse hoofdletter sigma",
	Tau: "Griekse hoofdletter tau",
	Upsilon: "Griekse hoofdletter ypsilon",
	Phi: "Griekse hoofdletter phi",
	Chi: "Griekse hoofdletter chi",
	Psi: "Griekse hoofdletter psi",
	Omega: "Griekse hoofdletter omega",
	alpha: "Griekse kleine letter alpha",
	beta: "Griekse kleine letter b\u00e8ta",
	gamma: "Griekse kleine letter gamma",
	delta: "Griekse kleine letter delta",
	epsilon: "Griekse kleine letter epsilon",
	zeta: "Griekse kleine letter z\u00e8ta",
	eta: "Griekse kleine letter \u00e8ta",
	theta: "Griekse kleine letter th\u00e8ta",
	iota: "Griekse kleine letter iota",
	kappa: "Griekse kleine letter kappa",
	lambda: "Griekse kleine letter lambda",
	mu: "Griekse kleine letter mu",
	nu: "Griekse kleine letter nu",
	xi: "Griekse kleine letter xi",
	omicron: "Griekse kleine letter omicron",
	pi: "Griekse kleine letter pi",
	rho: "Griekse kleine letter rho",
	sigmaf: "Griekse kleine letter sigma (einde woord)",
	sigma: "Griekse kleine letter sigma",
	tau: "Griekse kleine letter tau",
	upsilon: "Griekse kleine letter ypsilon",
	phi: "Griekse kleine letter phi",
	chi: "Griekse kleine letter chi",
	psi: "Griekse kleine letter psi",
	omega: "Griekse kleine letter omega",
	thetasym: "Griekse kleine letter th\u00e8ta (2e vorm)",
	upsih: "Griekse letter ypsilon met haakje",
	piv: "Griekse letter pi (2e vorm)",
	bull: "opsommingsteken\naandachtspunt",
	hellip: "beletseltekenweglatingsteken",
	prime: "accent\nminuut\nvoet",
	Prime: "dubbel accent\nseconde\ninch",
	oline: "hoge lijn\nbovenstreepje",
	frasl: "deelteken/schuine streep",
	weierp: "Gotische P",
	image: "Gotische I\nimaginair deel",
	real: "Gotische R\nre\u00ebel deel",
	trade: "handelsmerk",
	alefsym: "alef",
	larr: "pijl naar links",
	uarr: "pijl omhoog",
	rarr: "pijl naar rechts",
	darr: "pijl omlaag",
	harr: "pijl links/rechts",
	crarr: "pijl omlaag en naar links\nterugloopteken",
	lArr: "dubbele pijl naar links",
	uArr: "dubbele pijl omhoog",
	rArr: "dubbele pijl naar rechts",
	dArr: "dubbele pijl omlaag",
	hArr: "dubbele pijl links/rechts",
	forall: "voor alle geldt",
	part: "parti\u00eble differentiaal",
	exist: "er bestaat",
	empty: "lege verzameling\nnulverzameling\ndiameter",
	nabla: "nabla\ngradi\u00ebnt",
	isin: "is element van",
	notin: "is geen element van",
	ni: "heeft als element",
	prod: "product\nherhaald vermenigvuldigen",
	sum: "som\nherhaald optellen",
	minus: "min",
	lowast: "asterisk operator",
	radic: "wortel\nvierkantswortel",
	prop: "evenredig met",
	infin: "oneindig",
	ang: "hoek",
	and: "logische en",
	or: "logische of",
	cap: "snijpunt",
	cup: "vereniging",
	"int": "integraal",
	there4: "hieruit volgt",
	sim: "tilde operator\nvarieert met\nvergelijkbaar met",
	cong: "congruent aan",
	asymp: "ongeveer gelijk aan",
	ne: "niet gelijk aan",
	equiv: "identiek met",
	le: "kleiner dan of gelijk aan",
	ge: "groter dan of gelijk aan",
	sub: "is deelverzameling van",
	sup: "bevat deelverzameling",
	nsub: "is geen deelverzameling van",
	sube: "is deelverzameling van of is gelijk aan",
	supe: "bevat deelverzameling of is gelijk aan",
	oplus: "plus in cirkel\ndirecte som",
	otimes: "maal in cirkel\nvectorproduct",
	perp: "loodrecht\northogonaal met",
	sdot: "punt operator",
	lceil: "linker afrondingshaakje (naar boven)",
	rceil: "rechter afrondingshaakje (naar boven)",
	lfloor: "linker afrondingshaakje (naar beneden)",
	rfloor: "linker afrondingshaakje (naar beneden)",
	lang: "punthaak openen",
	rang: "punthaak sluiten",
	loz: "ruit",
	spades: "schoppen",
	clubs: "klaveren",
	hearts: "harten",
	diams: "ruiten",
	OElig: "hoofdletter OE-ligatuur",
	oelig: "kleine letter oe-ligatuur",
	Scaron: "hoofdletter S met caron",
	scaron: "kleine letter s met caron",
	Yuml: "hoofdletter Y met trema",
	circ: "accent circonflexe",
	tilde: "kleine tilde",
	ensp: "smalle spatie",
	emsp: "brede spatie",
	thinsp: "extra smalle spatie",
	zwnj: "verdelingsteken met breedte nul",
	zwj: "verbindingsteken met breedte nul",
	lrm: "van links naar rechts-markering",
	rlm: "van rechts naar links-markering",
	ndash: "divisie (kort steepje)",
	mdash: "divisie (lang steepje)",
	lsquo: "linker enkel aanhalingsteken",
	rsquo: "rechter enkel aanhalingsteken",
	sbquo: "apostrof (vorm = 9)",
	ldquo: "linker dubbele aanhalingsteken",
	rdquo: "rechter dubbele aanhalingsteken",
	bdquo: "dubbele apostrof (vorm = 9)",
	dagger: "obelisk",
	Dagger: "dubbele obelisk",
	permil: "promille",
	lsaquo: "enkele linkswijzend aanhalingsteken",
	rsaquo: "enkele rechtswijzend aanhalingsteken",
	euro: "euro"
}); //>>built
define("dojox/form/nls/CheckedMultiSelect", {
	root: {
		invalidMessage: "At least one item must be selected.",
		multiSelectLabelText: "{num} item(s) selected"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0
}); //>>built
define("dojox/form/nls/PasswordValidator", {
	root: {
		nomatchMessage: "Passwords do not match.",
		badPasswordMessage: "Invalid Password."
	},
	ar: !0,
	az: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	"pt-pt": !0,
	pt: !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/form/nls/Uploader", {
	root: {
		label: "Select Files..."
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0
}); //>>built
define("dojox/form/nls/de/CheckedMultiSelect", {
	invalidMessage: "Es muss mindestens ein Eintrag ausgew\u00e4hlt werden.",
	multiSelectLabelText: "{num} Eintrag/Eintr\u00e4ge ausgew\u00e4hlt"
}); //>>built
define("dojox/form/nls/de/PasswordValidator", {
	nomatchMessage: "Die Kennw\u00f6rter stimmen nicht \u00fcberein.",
	badPasswordMessage: "Ung\u00fcltiges Kennwort."
}); //>>built
define("dojox/form/nls/de/Uploader", {
	label: "Dateien ausw\u00e4hlen..."
}); //>>built
define("dojox/form/nls/fr/CheckedMultiSelect", {
	invalidMessage: "Au moins un des \u00e9l\u00e9ments doit \u00eatre s\u00e9lectionn\u00e9.",
	multiSelectLabelText: "{num} \u00e9l\u00e9ment(s) s\u00e9lectionn\u00e9(s)"
}); //>>built
define("dojox/form/nls/fr/PasswordValidator", {
	nomatchMessage: "Les mots de passe ne correspondent pas.",
	badPasswordMessage: "Mot de passe incorrect."
}); //>>built
define("dojox/form/nls/fr/Uploader", {
	label: "S\u00e9lectionner les fichiers..."
}); //>>built
define("dojox/form/nls/it/CheckedMultiSelect", {
	invalidMessage: "\u00c8 necessario selezionare almeno un elemento.",
	multiSelectLabelText: "{num} elementi selezionati"
}); //>>built
define("dojox/form/nls/it/PasswordValidator", {
	nomatchMessage: "Le password non corrispondono.",
	badPasswordMessage: "Password non valida."
}); //>>built
define("dojox/form/nls/it/Uploader", {
	label: "Seleziona file..."
}); //>>built
define("dojox/form/nls/nl/CheckedMultiSelect", {
	invalidMessage: "Er moet ten minste \u00e9\u00e9n item geselecteerd worden.",
	multiSelectLabelText: "{num} item(s) geselecteerd"
}); //>>built
define("dojox/form/nls/nl/PasswordValidator", {
	nomatchMessage: "Wachtwoorden komen niet overeen.",
	badPasswordMessage: "Ongeldig wachtwoord."
}); //>>built
define("dojox/form/nls/nl/Uploader", {
	label: "Bestanden selecteren..."
}); //>>built
define("dojox/grid/enhanced/nls/EnhancedGrid", {
	root: {
		singleSort: "Single Sort",
		nestedSort: "Nested Sort",
		ascending: "Click to sort Ascending",
		descending: "Click to sort Descending",
		sortingState: "${0} - ${1}",
		unsorted: "Do not sort this column",
		indirectSelectionRadio: "Row ${0}, single selection, radio box",
		indirectSelectionCheckBox: "Row ${0}, multiple selection, check box",
		selectAll: "Select all"
	},
	ar: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hr: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/grid/enhanced/nls/Filter", {
	root: {
		clearFilterDialogTitle: "Clear Filter",
		filterDefDialogTitle: "Filter",
		ruleTitleTemplate: "Rule ${0}",
		conditionEqual: "equal",
		conditionNotEqual: "does not equal",
		conditionLess: "is less than",
		conditionLessEqual: "less than or equal",
		conditionLarger: "is greater than",
		conditionLargerEqual: "greater than or equal",
		conditionContains: "contains",
		conditionIs: "is",
		conditionStartsWith: "starts with",
		conditionEndWith: "ends with",
		conditionNotContain: "does not contain",
		conditionIsNot: "is not",
		conditionNotStartWith: "does not start with",
		conditionNotEndWith: "does not end with",
		conditionBefore: "before",
		conditionAfter: "after",
		conditionRange: "range",
		conditionIsEmpty: "is empty",
		all: "all",
		any: "any",
		relationAll: "all rules",
		waiRelAll: "Match all of the following rules:",
		relationAny: "any rules",
		waiRelAny: "Match any of the following rules:",
		relationMsgFront: "Match:",
		relationMsgTail: "",
		and: "and",
		or: "or",
		addRuleButton: "Add Rule",
		waiAddRuleButton: "Add a new rule",
		removeRuleButton: "Remove Rule",
		waiRemoveRuleButtonTemplate: "Remove rule ${0}",
		cancelButton: "Cancel",
		waiCancelButton: "Cancel this dialog",
		clearButton: "Clear",
		waiClearButton: "Clear the filter",
		filterButton: "Filter",
		waiFilterButton: "Submit the filter",
		columnSelectLabel: "Column",
		waiColumnSelectTemplate: "Column for rule ${0}",
		conditionSelectLabel: "Condition",
		waiConditionSelectTemplate: "Condition for rule ${0}",
		valueBoxLabel: "Value",
		waiValueBoxTemplate: "Enter value to filter for rule ${0}",
		rangeTo: "to",
		rangeTemplate: "from ${0} to ${1}",
		statusTipHeaderColumn: "Column",
		statusTipHeaderCondition: "Rules",
		statusTipTitle: "Filter Bar",
		statusTipMsg: "Click the filter bar here to filter on values in ${0}.",
		anycolumn: "any column",
		statusTipTitleNoFilter: "Filter Bar",
		statusTipTitleHasFilter: "Filter",
		statusTipRelAny: "Match any rules.",
		statusTipRelAll: "Match all rules.",
		defaultItemsName: "items",
		filterBarMsgHasFilterTemplate: "${0} of ${1} ${2} shown.",
		filterBarMsgNoFilterTemplate: "No filter applied",
		filterBarDefButton: "Define filter",
		waiFilterBarDefButton: "Filter the table",
		a11yFilterBarDefButton: "Filter...",
		filterBarClearButton: "Clear filter",
		waiFilterBarClearButton: "Clear the filter",
		closeFilterBarBtn: "Close filter bar",
		clearFilterMsg: "This will remove the filter and show all available records.",
		anyColumnOption: "Any Column",
		trueLabel: "True",
		falseLabel: "False"
	},
	ar: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hr: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/grid/enhanced/nls/Pagination", {
	root: {
		descTemplate: "${2} - ${3} of ${1} ${0}",
		firstTip: "First Page",
		lastTip: "Last Page",
		nextTip: "Next Page",
		prevTip: "Previous Page",
		itemTitle: "items",
		singularItemTitle: "item",
		pageStepLabelTemplate: "Page ${0}",
		pageSizeLabelTemplate: "${0} items per page",
		allItemsLabelTemplate: "All items",
		gotoButtonTitle: "Go to a specific page",
		dialogTitle: "Go to Page",
		dialogIndication: "Specify the page number",
		pageCountIndication: " (${0} pages)",
		dialogConfirm: "Go",
		dialogCancel: "Cancel",
		all: "All"
	},
	ar: !0,
	ca: !0,
	cs: !0,
	da: !0,
	de: !0,
	el: !0,
	es: !0,
	fi: !0,
	fr: !0,
	he: !0,
	hr: !0,
	hu: !0,
	hr: !0,
	it: !0,
	ja: !0,
	kk: !0,
	ko: !0,
	nb: !0,
	nl: !0,
	pl: !0,
	pt: !0,
	"pt-pt": !0,
	ro: !0,
	ru: !0,
	sk: !0,
	sl: !0,
	sv: !0,
	th: !0,
	tr: !0,
	zh: !0,
	"zh-tw": !0
}); //>>built
define("dojox/grid/enhanced/nls/de/EnhancedGrid", {
	singleSort: "Einfache Sortierung",
	nestedSort: "Verschachtelte Sortierung",
	ascending: "F\u00fcr aufsteigende Sortierung hier klicken",
	descending: "F\u00fcr absteigende Sortierung hier klicken",
	sortingState: "${0} - ${1}",
	unsorted: "Diese Spalte nicht sortieren",
	indirectSelectionRadio: "Zeile ${0}, Einzelauswahl, Optionsfeld",
	indirectSelectionCheckBox: "Zeile ${0}, Mehrfachauswahl, Kontrollk\u00e4stchen",
	selectAll: "Alles ausw\u00e4hlen"
}); //>>built
define("dojox/grid/enhanced/nls/de/Filter", {
	clearFilterDialogTitle: "Filter l\u00f6schen",
	filterDefDialogTitle: "Filter",
	ruleTitleTemplate: "Regel ${0}",
	conditionEqual: "gleich",
	conditionNotEqual: "ist nicht gleich",
	conditionLess: "ist kleiner als",
	conditionLessEqual: "kleiner-gleich",
	conditionLarger: "ist gr\u00f6\u00dfer als",
	conditionLargerEqual: "gr\u00f6\u00dfer-gleich",
	conditionContains: "enth\u00e4lt",
	conditionIs: "ist",
	conditionStartsWith: "beginnt mit",
	conditionEndWith: "endet mit",
	conditionNotContain: "enth\u00e4lt nicht",
	conditionIsNot: "ist nicht",
	conditionNotStartWith: "beginnt nicht mit",
	conditionNotEndWith: "endet nicht mit",
	conditionBefore: "vor",
	conditionAfter: "nach",
	conditionRange: "Bereich",
	conditionIsEmpty: "ist leer",
	all: "alle",
	any: "beliebig",
	relationAll: "Alle Regeln",
	waiRelAll: "\u00dcbereinstimmung mit allen folgenden Regeln:",
	relationAny: "Beliebige Regeln",
	waiRelAny: "\u00dcbereinstimmung mit einer beliebigen der folgenden Regeln:",
	relationMsgFront: "\u00dcbereinstimmung:",
	relationMsgTail: "",
	and: "und",
	or: "oder",
	addRuleButton: "Regel hinzuf\u00fcgen",
	waiAddRuleButton: "Neue Regel hinzuf\u00fcgen",
	removeRuleButton: "Regel entfernen",
	waiRemoveRuleButtonTemplate: "Regel ${0} entfernen",
	cancelButton: "Abbrechen",
	waiCancelButton: "Dialog abbrechen",
	clearButton: "Abw\u00e4hlen",
	waiClearButton: "Filter abw\u00e4hlen",
	filterButton: "Filter",
	waiFilterButton: "Filter \u00fcbergeben",
	columnSelectLabel: "Spalte",
	waiColumnSelectTemplate: "Spalte f\u00fcr Regel ${0}",
	conditionSelectLabel: "Bedingung",
	waiConditionSelectTemplate: "Bedingung f\u00fcr Regel ${0}",
	valueBoxLabel: "Wert",
	waiValueBoxTemplate: "Filterwert f\u00fcr Regel ${0} eingeben",
	rangeTo: "bis",
	rangeTemplate: "von ${0} bis ${1}",
	statusTipHeaderColumn: "Spalte",
	statusTipHeaderCondition: "Regeln",
	statusTipTitle: "Filterleiste",
	statusTipMsg: "Kicken Sie auf die Filterleiste, um nach Werten in ${0} zu filtern.",
	anycolumn: "Beliebige Spalte",
	statusTipTitleNoFilter: "Filterleiste",
	statusTipTitleHasFilter: "Filter",
	statusTipRelAny: "Beliebige Regeln abgleichen.",
	statusTipRelAll: "Alle Regel abgleichen.",
	defaultItemsName: "Eintr\u00e4ge",
	filterBarMsgHasFilterTemplate: "${0} von ${1} ${2} angezeigt.",
	filterBarMsgNoFilterTemplate: "Kein Filter angewendet",
	filterBarDefButton: "Filter definieren",
	waiFilterBarDefButton: "Tabelle filtern",
	a11yFilterBarDefButton: "Filter...",
	filterBarClearButton: "Filter l\u00f6schen",
	waiFilterBarClearButton: "Filter abw\u00e4hlen",
	closeFilterBarBtn: "Filterleiste schlie\u00dfen",
	clearFilterMsg: "Diese Aktion entfernt den Filter und zeigt alle verf\u00fcgbaren Datens\u00e4tze an.",
	anyColumnOption: "Beliebige Spalte",
	trueLabel: "Wahr",
	falseLabel: "Falsch"
}); //>>built
define("dojox/grid/enhanced/nls/de/Pagination", {
	descTemplate: "${2} - ${3} von ${1} ${0}",
	firstTip: "Erste Seite",
	lastTip: "Letzte Seite",
	nextTip: "N\u00e4chste Seite",
	prevTip: "Vorherige Seite",
	itemTitle: "Eintr\u00e4ge",
	singularItemTitle: "Eintrag",
	pageStepLabelTemplate: "Seite ${0}",
	pageSizeLabelTemplate: "${0} Eintr\u00e4ge pro Seite",
	allItemsLabelTemplate: "Alle Eintr\u00e4ge",
	gotoButtonTitle: "Wechsel zu einer bestimmten Seite",
	dialogTitle: "Wechseln zur Seite",
	dialogIndication: "Seitennummer angeben",
	pageCountIndication: " (${0} Seiten)",
	dialogConfirm: "Start",
	dialogCancel: "Abbrechen",
	all: "Alle"
}); //>>built
define("dojox/grid/enhanced/nls/fr/EnhancedGrid", {
	singleSort: "Tri simple",
	nestedSort: "Tri imbriqu\u00e9",
	ascending: "Cliquer pour trier par ordre croissant",
	descending: "Cliquer pour trier par ordre d\u00e9croissant",
	sortingState: "${0} - ${1}",
	unsorted: "Ne pas trier cette colonne",
	indirectSelectionRadio: "Ligne ${0}, s\u00e9lection unique, bouton radio",
	indirectSelectionCheckBox: "Ligne ${0}, s\u00e9lection multiple, case \u00e0 cocher",
	selectAll: "S\u00e9lectionner tout"
}); //>>built
define("dojox/grid/enhanced/nls/fr/Filter", {
	clearFilterDialogTitle: "Effacer le filtre",
	filterDefDialogTitle: "Filtrer",
	ruleTitleTemplate: "R\u00e8gle ${0}",
	conditionEqual: "\u00e9gal",
	conditionNotEqual: "est diff\u00e9rent de",
	conditionLess: "est inf\u00e9rieur \u00e0",
	conditionLessEqual: "inf\u00e9rieur ou \u00e9gal",
	conditionLarger: "est sup\u00e9rieur \u00e0",
	conditionLargerEqual: "sup\u00e9rieur ou \u00e9gal",
	conditionContains: "contient",
	conditionIs: "est",
	conditionStartsWith: "commence par",
	conditionEndWith: "se termine par",
	conditionNotContain: "ne contient pas",
	conditionIsNot: "n'est pas",
	conditionNotStartWith: "ne commence pas par",
	conditionNotEndWith: "ne se termine pas par",
	conditionBefore: "avant",
	conditionAfter: "apr\u00e8s",
	conditionRange: "plage",
	conditionIsEmpty: "est vide",
	all: "toutes",
	any: "n'importe quelles",
	relationAll: "toutes les r\u00e8gles",
	waiRelAll: "Satisfaire \u00e0 toutes les r\u00e8gles suivantes :",
	relationAny: "n'importe quelles r\u00e8gles",
	waiRelAny: "Satisfaire \u00e0 l'une quelconque des r\u00e8gles suivantes :",
	relationMsgFront: "Satisfaire \u00e0 :",
	relationMsgTail: "",
	and: "et",
	or: "ou",
	addRuleButton: "Ajouter une r\u00e8gle",
	waiAddRuleButton: "Ajouter une nouvelle r\u00e8gle",
	removeRuleButton: "Supprimer la r\u00e8gle",
	waiRemoveRuleButtonTemplate: "Supprimer la r\u00e8gle ${0}",
	cancelButton: "Annuler",
	waiCancelButton: "Annuler cette bo\u00eete de dialogue",
	clearButton: "Effacer",
	waiClearButton: "Effacer le filtre",
	filterButton: "Filtrer",
	waiFilterButton: "Soumettre le filtre",
	columnSelectLabel: "Colonne",
	waiColumnSelectTemplate: "Colonne pour la r\u00e8gle ${0}",
	conditionSelectLabel: "Condition",
	waiConditionSelectTemplate: "Condition pour la r\u00e8gle ${0}",
	valueBoxLabel: "Valeur",
	waiValueBoxTemplate: "Saisir la valeur \u00e0 filtrer pour la r\u00e8gle ${0}",
	rangeTo: "\u00e0",
	rangeTemplate: "de ${0} \u00e0 ${1}",
	statusTipHeaderColumn: "Colonne",
	statusTipHeaderCondition: "R\u00e8gles",
	statusTipTitle: "Barre de filtre",
	statusTipMsg: "Cliquer sur la barre de filtre ici pour filtrer sur les valeurs de ${0}.",
	anycolumn: "n'importe quelle colonne",
	statusTipTitleNoFilter: "Barre de filtre",
	statusTipTitleHasFilter: "Filtrer",
	statusTipRelAny: "Satisfaire \u00e0 l'une quelconque des r\u00e8gles. ",
	statusTipRelAll: "Satisfaire \u00e0 toutes les r\u00e8gles. ",
	defaultItemsName: "\u00e9l\u00e9ments",
	filterBarMsgHasFilterTemplate: "${0} sur ${1} ${2} affich\u00e9s.",
	filterBarMsgNoFilterTemplate: "Aucun filtre appliqu\u00e9",
	filterBarDefButton: "D\u00e9finir le filtre",
	waiFilterBarDefButton: "Filtrer le tableau",
	a11yFilterBarDefButton: "Filtrer...",
	filterBarClearButton: "Effacer le filtre",
	waiFilterBarClearButton: "Effacer le filtre",
	closeFilterBarBtn: "Fermer la barre de filtre",
	clearFilterMsg: "Cela supprimera le filtre et affichera tous les enregistrements disponibles.",
	anyColumnOption: "N'importe quelle colonne",
	trueLabel: "Vrai",
	falseLabel: "Faux"
}); //>>built
define("dojox/grid/enhanced/nls/fr/Pagination", {
	descTemplate: "${2} \u00e0 ${3} sur ${1} ${0}",
	firstTip: "Premi\u00e8re page",
	lastTip: "Derni\u00e8re page",
	nextTip: "Page suivante",
	prevTip: "Page pr\u00e9c\u00e9dente",
	itemTitle: "\u00e9l\u00e9ments",
	singularItemTitle: "\u00e9l\u00e9ment",
	pageStepLabelTemplate: "Page ${0}",
	pageSizeLabelTemplate: "${0} \u00e9l\u00e9ments par page",
	allItemsLabelTemplate: "Tous les \u00e9l\u00e9ments",
	gotoButtonTitle: "Aller \u00e0 une page donn\u00e9e",
	dialogTitle: "Aller \u00e0 la page",
	dialogIndication: "Indiquer le num\u00e9ro de page",
	pageCountIndication: " (${0} pages)",
	dialogConfirm: "Aller",
	dialogCancel: "Annuler",
	all: "Tout"
}); //>>built
define("dojox/grid/enhanced/nls/it/EnhancedGrid", {
	singleSort: "Ordinamento singolo",
	nestedSort: "Ordinamento nidificato",
	ascending: "Fare clic per ordinare in modo crescente",
	descending: "Fare clic per ordinare in modo decrescente",
	sortingState: "${0} - ${1}",
	unsorted: "Non ordinare questa colonna",
	indirectSelectionRadio: "Riga ${0}, selezione singola, casella ad opzione",
	indirectSelectionCheckBox: "Riga ${0}, selezione multipla, check box",
	selectAll: "Seleziona tutto"
}); //>>built
define("dojox/grid/enhanced/nls/it/Filter", {
	clearFilterDialogTitle: "Cancella filtro",
	filterDefDialogTitle: "Filtro",
	ruleTitleTemplate: "Regola ${0}",
	conditionEqual: "uguale a",
	conditionNotEqual: "diverso da",
	conditionLess: "minore di",
	conditionLessEqual: "minore o uguale",
	conditionLarger: "maggiore di",
	conditionLargerEqual: "maggiore o uguale",
	conditionContains: "contiene",
	conditionIs: "\u00e8",
	conditionStartsWith: "inizia con",
	conditionEndWith: "termina con",
	conditionNotContain: "non contiene",
	conditionIsNot: "non \u00e8",
	conditionNotStartWith: "non inizia con",
	conditionNotEndWith: "non termina con",
	conditionBefore: "prima",
	conditionAfter: "dopo",
	conditionRange: "intervallo",
	conditionIsEmpty: "\u00e8 vuoto",
	all: "tutto",
	any: "qualsiasi",
	relationAll: "tutte le regole",
	waiRelAll: "Corrispondenza con tutte le regole seguenti:",
	relationAny: "qualsiasi regola",
	waiRelAny: "Corrispondenza una qualsiasi delle regole seguenti:",
	relationMsgFront: "Corrispondenza:",
	relationMsgTail: "",
	and: "e",
	or: "o",
	addRuleButton: "Aggiungi regola",
	waiAddRuleButton: "Aggiungi una nuova regola",
	removeRuleButton: "Rimuovi regola",
	waiRemoveRuleButtonTemplate: "Rimuovi regola ${0}",
	cancelButton: "Annulla",
	waiCancelButton: "Annulla questa finestra di dialogo",
	clearButton: "Elimina",
	waiClearButton: "Cancella il filtro",
	filterButton: "Filtro",
	waiFilterButton: "Inoltra il filtro",
	columnSelectLabel: "Colonna",
	waiColumnSelectTemplate: "Colonna per la regola ${0}",
	conditionSelectLabel: "Condizione",
	waiConditionSelectTemplate: "Condizione per la regola ${0}",
	valueBoxLabel: "Valore",
	waiValueBoxTemplate: "Immettere il valore da filtrare per la regola ${0}",
	rangeTo: "a",
	rangeTemplate: "da ${0} a ${1}",
	statusTipHeaderColumn: "Colonna",
	statusTipHeaderCondition: "Regole",
	statusTipTitle: "Barra filtro",
	statusTipMsg: "Fare clic sulla barra filtro per filtrare in base ai valori in ${0}.",
	anycolumn: "qualsiasi colonna",
	statusTipTitleNoFilter: "Barra filtro",
	statusTipTitleHasFilter: "Filtro",
	statusTipRelAny: "Corrispondenza con qualsiasi regola.",
	statusTipRelAll: "Corrispondenza con tutte le regole.",
	defaultItemsName: "elementi",
	filterBarMsgHasFilterTemplate: "${0} di ${1} ${2} mostrate.",
	filterBarMsgNoFilterTemplate: "Nessun filtro applicato",
	filterBarDefButton: "Definisci filtro",
	waiFilterBarDefButton: "Filtra la tabella",
	a11yFilterBarDefButton: "Filtro...",
	filterBarClearButton: "Cancella filtro",
	waiFilterBarClearButton: "Cancella il filtro",
	closeFilterBarBtn: "Chiudi barra filtro",
	clearFilterMsg: "Questa operazione rimuover\u00e0 il filtro e visualizzer\u00e0 tutti i record disponibili.",
	anyColumnOption: "Qualsiasi colonna",
	trueLabel: "Vero",
	falseLabel: "Falso"
}); //>>built
define("dojox/grid/enhanced/nls/it/Pagination", {
	descTemplate: "${2} - ${3} di ${1} ${0}",
	firstTip: "Prima pagina",
	lastTip: "Ultima pagina",
	nextTip: "Pagina successiva",
	prevTip: "Pagina precedente",
	itemTitle: "elementi",
	singularItemTitle: "elemento",
	pageStepLabelTemplate: "Pagina ${0}",
	pageSizeLabelTemplate: "${0} elementi per pagina",
	allItemsLabelTemplate: "Tutti gli elementi",
	gotoButtonTitle: "Vai a pagina specifica",
	dialogTitle: "Vai a pagina",
	dialogIndication: "Specifica numero pagina",
	pageCountIndication: " (${0} pagine)",
	dialogConfirm: "Vai",
	dialogCancel: "Annulla",
	all: "Tutto"
}); //>>built
define("dojox/grid/enhanced/nls/nl/EnhancedGrid", {
	singleSort: "Enkelvoudig sorteren",
	nestedSort: "Genest sorteren",
	ascending: "Klik hier voor oplopend sorteren",
	descending: "Klik hier voor aflopend sorteren",
	sortingState: "${0} - ${1}",
	unsorted: "Deze kolom niet sorteren",
	indirectSelectionRadio: "Rij ${0}, enkele selectie, keuzerondje",
	indirectSelectionCheckBox: "Rij ${0}, meerdere selecties, selectievakje",
	selectAll: "Alles selecteren"
}); //>>built
define("dojox/grid/enhanced/nls/nl/Filter", {
	clearFilterDialogTitle: "Filter wissen",
	filterDefDialogTitle: "Filter",
	ruleTitleTemplate: "Regel ${0}",
	conditionEqual: "gelijk aan",
	conditionNotEqual: "niet gelijk aan",
	conditionLess: "is kleiner dan",
	conditionLessEqual: "kleiner dan of gelijk aan",
	conditionLarger: "is groter dan",
	conditionLargerEqual: "groter dan of gelijk aan",
	conditionContains: "bevat",
	conditionIs: "is",
	conditionStartsWith: "begint met",
	conditionEndWith: "eindigt met",
	conditionNotContain: "bevat niet",
	conditionIsNot: "is niet",
	conditionNotStartWith: "begint niet met",
	conditionNotEndWith: "eindigt niet op",
	conditionBefore: "voor",
	conditionAfter: "na",
	conditionRange: "bereik",
	conditionIsEmpty: "is leeg",
	all: "alle",
	any: "een of meer",
	relationAll: "alle regels",
	waiRelAll: "Voldoen aan al deze regels:",
	relationAny: "een of meer regels",
	waiRelAny: "Voldoen aan een van deze regels:",
	relationMsgFront: "Voldoen aan:",
	relationMsgTail: "",
	and: "en",
	or: "of",
	addRuleButton: "Regel toevoegen",
	waiAddRuleButton: "Een nieuwe regel toevoegen",
	removeRuleButton: "Regel verwijderen",
	waiRemoveRuleButtonTemplate: "Regel ${0} verwijderen",
	cancelButton: "Annuleren",
	waiCancelButton: "Dit dialoogvenster annuleren",
	clearButton: "Leegmaken",
	waiClearButton: "Het filter wissen",
	filterButton: "Filter",
	waiFilterButton: "Het filter verzenden",
	columnSelectLabel: "Kolom",
	waiColumnSelectTemplate: "Kolom voor regel ${0}",
	conditionSelectLabel: "Voorwaarde",
	waiConditionSelectTemplate: "Voorwaarde voor regel ${0}",
	valueBoxLabel: "Waarde",
	waiValueBoxTemplate: "Geef een filterwaarde op voor regel ${0}",
	rangeTo: "tot",
	rangeTemplate: "van ${0} tot ${1}",
	statusTipHeaderColumn: "Kolom",
	statusTipHeaderCondition: "Regels",
	statusTipTitle: "Filterbalk",
	statusTipMsg: "Klik hier op de filterbalk om te filteren op waarden in ${0}.",
	anycolumn: "een kolom",
	statusTipTitleNoFilter: "Filterbalk",
	statusTipTitleHasFilter: "Filter",
	statusTipRelAny: "Voldoen aan een regel.",
	statusTipRelAll: "Voldoen aan alle regels.",
	defaultItemsName: "items",
	filterBarMsgHasFilterTemplate: "${0} van ${1} ${2} afgebeeld.",
	filterBarMsgNoFilterTemplate: "Geen filter toegepast",
	filterBarDefButton: "Filter defini\u00ebren",
	waiFilterBarDefButton: "De tabel filteren",
	a11yFilterBarDefButton: "Filteren...",
	filterBarClearButton: "Filter wissen",
	waiFilterBarClearButton: "Het filter wissen",
	closeFilterBarBtn: "Filterbalk sluiten",
	clearFilterMsg: "Hiermee verwijdert u het filter en worden alle beschikbare records afgebeeld.",
	anyColumnOption: "Een kolom",
	trueLabel: "Waar",
	falseLabel: "Onwaar"
}); //>>built
define("dojox/grid/enhanced/nls/nl/Pagination", {
	descTemplate: "${2} - ${3} van ${1} ${0}",
	firstTip: "Eerste pagina",
	lastTip: "Laatste pagina",
	nextTip: "Volgende pagina",
	prevTip: "Vorige pagina",
	itemTitle: "items",
	singularItemTitle: "item",
	pageStepLabelTemplate: "Pagina ${0}",
	pageSizeLabelTemplate: "${0} items per pagina",
	allItemsLabelTemplate: "Alle items",
	gotoButtonTitle: "Naar een specifieke pagina gaan",
	dialogTitle: "Naar pagina gaan",
	dialogIndication: "Geef het paginanummer op:",
	pageCountIndication: " (${0} pagina's)",
	dialogConfirm: "Go",
	dialogCancel: "Annuleren",
	all: "Alles"
}); //>>built
define("dojox/widget/nls/ColorPicker", {
	root: {
		redLabel: "r",
		greenLabel: "g",
		blueLabel: "b",
		hueLabel: "h",
		saturationLabel: "s",
		valueLabel: "v",
		degLabel: "\u00b0",
		hexLabel: "hex",
		huePickerTitle: "Hue Selector",
		saturationPickerTitle: "Saturation Selector"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dojox/widget/nls/FilePicker", {
	root: {
		name: "Name",
		path: "Path",
		size: "Size (in bytes)"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dojox/widget/nls/Wizard", {
	root: {
		next: "Next",
		previous: "Previous",
		done: "Done"
	},
	zh: !0,
	"zh-tw": !0,
	tr: !0,
	th: !0,
	sv: !0,
	sl: !0,
	sk: !0,
	ru: !0,
	ro: !0,
	pt: !0,
	"pt-pt": !0,
	pl: !0,
	nl: !0,
	nb: !0,
	ko: !0,
	kk: !0,
	ja: !0,
	it: !0,
	hu: !0,
	hr: !0,
	he: !0,
	fr: !0,
	fi: !0,
	es: !0,
	el: !0,
	de: !0,
	da: !0,
	cs: !0,
	ca: !0,
	az: !0,
	ar: !0
}); //>>built
define("dojox/widget/nls/de/ColorPicker", {
	redLabel: "r",
	greenLabel: "g",
	blueLabel: "b",
	hueLabel: "h",
	saturationLabel: "s",
	valueLabel: "v",
	degLabel: "\u00b0",
	hexLabel: "hex",
	huePickerTitle: "Farbtonauswahl",
	saturationPickerTitle: "S\u00e4ttigungsauswahl"
}); //>>built
define("dojox/widget/nls/de/FilePicker", {
	name: "Name",
	path: "Pfad",
	size: "Gr\u00f6\u00dfe (in Byte)"
}); //>>built
define("dojox/widget/nls/de/Wizard", {
	next: "Weiter",
	previous: "Zur\u00fcck",
	done: "Fertig"
}); //>>built
define("dojox/widget/nls/fr/ColorPicker", {
	redLabel: "r",
	greenLabel: "v",
	blueLabel: "b",
	hueLabel: "t",
	saturationLabel: "s",
	valueLabel: "v",
	degLabel: "\u00b0",
	hexLabel: "hex",
	huePickerTitle: "S\u00e9lecteur de teinte",
	saturationPickerTitle: "S\u00e9lecteur de saturation"
}); //>>built
define("dojox/widget/nls/fr/FilePicker", {
	name: "Nom",
	path: "Chemin",
	size: "Taille (en octets)"
}); //>>built
define("dojox/widget/nls/fr/Wizard", {
	next: "Suivant",
	previous: "Pr\u00e9c\u00e9dent",
	done: "Termin\u00e9"
}); //>>built
define("dojox/widget/nls/it/ColorPicker", {
	redLabel: "r",
	greenLabel: "v",
	blueLabel: "b",
	hueLabel: "t",
	saturationLabel: "s",
	valueLabel: "v",
	degLabel: "\u00b0",
	hexLabel: "hex",
	huePickerTitle: "Selettore tonalit\u00e0",
	saturationPickerTitle: "Selettore saturazione"
}); //>>built
define("dojox/widget/nls/it/FilePicker", {
	name: "Nome",
	path: "Percorso",
	size: "Dimensione (in byte)"
}); //>>built
define("dojox/widget/nls/it/Wizard", {
	next: "Successivo",
	previous: "Indietro",
	done: "Fine"
}); //>>built
define("dojox/widget/nls/nl/ColorPicker", {
	redLabel: "r",
	greenLabel: "g",
	blueLabel: "b",
	hueLabel: "t",
	saturationLabel: "i",
	valueLabel: "h",
	degLabel: "\u00b0",
	hexLabel: "hex",
	huePickerTitle: "Tint selecteren",
	saturationPickerTitle: "Intensiteit selecteren"
}); //>>built
define("dojox/widget/nls/nl/FilePicker", {
	name: "Naam",
	path: "Pad",
	size: "Grootte (in bytes)"
}); //>>built
define("dojox/widget/nls/nl/Wizard", {
	next: "Volgende",
	previous: "Vorige",
	done: "Klaar"
});
(function() {
	var f = this.require;
	f({
		cache: {}
	});
	!f.async && f(["dojo"]);
	f.boot && f.apply(null, f.boot)
})();