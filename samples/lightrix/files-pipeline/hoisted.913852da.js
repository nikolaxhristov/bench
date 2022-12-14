import "./chunks/Header.astro_astro_type_script_index_0_lang.70851867.js";
const p = document.querySelector("#hyperdrive"),
	d = p.getContext("2d"),
	S = 2e3,
	x = { x: 0, y: 0, warpspeed: !1, paused: !0 };
let w;
const k = ["duration-1000"],
	L = ["opacity-0", "duration-[3s]"],
	C = (u) => {
		(x.warpspeed = u),
			u
				? (p.classList.remove(...L), p.classList.add(...k))
				: (p.classList.add(...L), p.classList.add(...k));
	},
	T = (u) => {
		(x.paused = u), (w = null);
	};
if (
	"matchMedia" in window &&
	"matchMedia" in window &&
	window.matchMedia("(prefers-reduced-motion: no-preference)").matches
) {
	let u = function () {
			w ||
				(T(!1),
				C(!0),
				(w = setTimeout(() => {
					C(!1), (w = setTimeout(() => T(!0), S));
				}, S)),
				W());
		},
		i = function () {
			C(!1), w && (clearTimeout(w), (w = setTimeout(() => T(!0), S)));
		},
		n = 0,
		r = 0;
	new IntersectionObserver(
		([h]) => {
			const o = h.boundingClientRect.y,
				a = h.intersectionRatio,
				f = h.isIntersecting;
			o < n
				? a > r && f
					? u()
					: i()
				: o > n && f && (a < r ? i() : u()),
				(n = o),
				(r = a);
		},
		{ threshold: [0.25, 0.5, 0.75] }
	).observe(p);
}
function W() {
	const u = () => {
			const t = [];
			var s = 0;
			return {
				clear() {
					(this.items.length = 0), (s = 0);
				},
				update() {
					var e, c;
					for (e = c = 0; e < s; )
						if (t[e].update() === !1) e += 1;
						else {
							if (c < e) {
								const y = t[e];
								(t[e] = t[c]), (t[c] = y);
							}
							(e += 1), (c += 1);
						}
					return (s = c);
				},
				createCallFunction(e, c = !1) {
					if (
						((e = e.split(" ")[0]),
						Object.keys(this).indexOf(e) > -1)
					)
						throw new Error(
							`Can not create function name '${e}' as it already exists.`
						);
					if (/\W/g.test(e))
						throw new Error(
							`Function name '${e}' contains illegal characters. Use alpha numeric characters.`
						);
					{
						let y;
						c
							? (y = `var items = this.items; var count = this.getCount(); var i = 0;
while(i < count){ if (items[i++].${e}() === true) { break } }`)
							: (y = `var items = this.items; var count = this.getCount(); var i = 0;
while(i < count){ items[i++].${e}() }`),
							!this.items && (this.items = t),
							(this[e] = new Function(y));
					}
				},
				callEach(e) {
					for (var c = 0; c < s && t[c++][e]() !== !0; );
				},
				each(e) {
					for (var c = 0; c < s && e(t[c], c++) !== !0; );
				},
				next() {
					if (s < t.length) return t[s++];
				},
				add(e) {
					return (
						s === t.length
							? (t.push(e), s++)
							: (t.push(t[s]), (t[s++] = e)),
						e
					);
				},
				getCount() {
					return s;
				},
			};
		},
		i = (t, s = t + (t = 0)) => (Math.random() * (s - t) + t) | 0,
		n = (t = 1, s = t + (t = 0)) => Math.random() * (s - t) + t,
		r = (t, s) => {
			for (var e = 0; e < t && s(e++) !== !0; );
		},
		l = (t, s) => 2 / (1 + Math.pow(s, -t)) - 1,
		h = (t, s, e = 100, c = 100, y = 50, I = 50, O = 1, z = 1) =>
			`hsla(${i(t, s) % 360},${i(e, c)}%,${i(y, I)}%,${n(O, z)})`;
	var o = p.width,
		a = p.height,
		f = o / 2,
		m = a / 2,
		E = Math.sqrt(o * o + a * a);
	function F() {
		b.clear(),
			(p.width = innerWidth),
			(p.height = innerHeight),
			(o = p.width),
			(a = p.height),
			(f = o / 2),
			(m = a / 2),
			(E = Math.sqrt(o * o + a * a));
	}
	const b = u();
	b.createCallFunction("draw", !1);
	function H(t) {
		var s = b.next();
		(s = b.add(new g())), s === void 0 && (s = b.add(new g())), s.reset(t);
	}
	function g(t) {
		t
			? ((this.x = t.x), (this.y = t.y), (this.dead = !1))
			: ((this.x = 0), (this.y = 0), (this.dead = !0)),
			(this.alpha = 0);
		var s = this.x - f,
			e = this.y - m;
		(this.dir = Math.atan2(e, s)),
			(this.distStart = Math.sqrt(s * s + e * e)),
			(this.speed = n(0.01, 1)),
			(this.col = h(220, 280, 100, 100, 50, 100)),
			(this.dx = Math.cos(this.dir) * this.speed),
			(this.dy = Math.sin(this.dir) * this.speed);
	}
	g.prototype = {
		reset: g,
		update() {
			(this.speed *= v),
				(this.x += Math.cos(this.dir) * this.speed),
				(this.y += Math.sin(this.dir) * this.speed);
			var t = this.x - f,
				s = this.y - m;
			return (
				(this.alpha =
					(Math.sqrt(t * t + s * s) - this.distStart) /
					(E * 0.5 - this.distStart)),
				(this.alpha > 1 ||
					this.x < 0 ||
					this.y < 0 ||
					this.x > o ||
					this.h > a) &&
					(this.dead = !0),
				!this.dead
			);
		},
		draw() {
			(d.strokeStyle = this.col),
				(d.globalAlpha = 0.25 + this.alpha * 0.75),
				d.beginPath(),
				d.lineTo(
					this.x - this.dx * this.speed,
					this.y - this.dy * this.speed
				),
				d.lineTo(this.x, this.y),
				d.stroke();
		},
	};
	const R = 256,
		A = { x: 0, y: 0 };
	var v = 1.001;
	const M = l(1, 2);
	function q(t) {
		(o !== innerWidth || a !== innerHeight) && F(),
			x.warpspeed
				? v < 1.25 && (v += 0.01)
				: v > 1.01
				? (v -= 0.01)
				: v > 1.001 && (v -= 0.001);
		var s = l(v, 2.25);
		(d.globalAlpha = 1),
			d.setTransform(1, 0, 0, 1, 0, 0),
			(d.fillStyle = `rgba(0,0,0,${1 - (s - M) * 2})`),
			d.fillRect(0, 0, o, a);
		var e = (v - 1) * f * 0.05,
			c = (v - 1) * m * 0.05;
		if (
			((d.globalAlpha = (s - M) * 2),
			(d.globalCompositeOperation = "lighter"),
			d.drawImage(p, -e, -c, o + e * 2, a + c * 2),
			d.drawImage(p, -e / 2, -c / 2, o + e, a + c),
			(d.globalCompositeOperation = "source-over"),
			b.getCount() < R)
		) {
			var y = (v - 1) * 0.5;
			r(10, () => {
				(A.x = n(f * y, o - f * y)), (A.y = n(m * y, a - m * y)), H(A);
			});
		}
		(d.lineWidth = 2 + s * 2),
			(d.lineCap = "round"),
			b.update(),
			b.draw(),
			(d.globalAlpha = 1),
			!x.paused && requestAnimationFrame(q);
	}
	requestAnimationFrame(q);
}
class D extends HTMLElement {
	count = 0;
	constructor() {
		super(),
			this.querySelector(".inc").addEventListener("click", () =>
				this.setCount(1)
			),
			this.querySelector(".dec").addEventListener("click", () =>
				this.setCount(-1)
			);
	}
	setCount(i) {
		(this.count += i),
			(this.querySelector(".count").textContent = this.count.toString());
	}
}
customElements.define("mini-counter", D);
class N extends HTMLElement {
	count = 0;
	TabStore = [];
	PanelStore = [];
	constructor() {
		super();
		const i = this.querySelectorAll(".content > section"),
			n = this.querySelector("ul"),
			r = n.querySelectorAll("a");
		n.setAttribute("role", "tablist"),
			Array.prototype.forEach.call(r, (h, o) => {
				h.setAttribute("role", "tab"),
					h.setAttribute("id", "tab" + this.count++),
					h.setAttribute("tabindex", "-1"),
					h.parentNode.setAttribute("role", "presentation"),
					this.TabStore[o] || this.TabStore.push(new Set()),
					this.TabStore[o].add(h),
					h.addEventListener("click", (a) => {
						a.preventDefault();
						const f = n.querySelector("[aria-selected]");
						a.currentTarget !== f &&
							this.switchTab(a.currentTarget, o);
					}),
					h.addEventListener("keydown", (a) => {
						const f = Array.prototype.indexOf.call(
								r,
								a.currentTarget
							),
							m =
								a.key === "ArrowLeft"
									? f - 1
									: a.key === "ArrowRight"
									? f + 1
									: a.key === "ArrowDown"
									? "down"
									: null;
						m !== null &&
							(a.preventDefault(),
							m === "down"
								? i[o].focus()
								: r[m] && this.switchTab(r[m], m));
					});
			}),
			Array.prototype.forEach.call(i, (h, o) => {
				h.setAttribute("role", "tabpanel"),
					h.setAttribute("tabindex", "-1"),
					h.setAttribute("aria-labelledby", r[o].id),
					(h.hidden = !0),
					this.PanelStore[o] || this.PanelStore.push(new Set()),
					this.PanelStore[o].add(h);
			});
		const l = 0;
		r[l].removeAttribute("tabindex"),
			r[l].setAttribute("aria-selected", "true"),
			(i[l].hidden = !1);
	}
	switchTab(i, n) {
		this.TabStore.forEach((r) =>
			r.forEach((l) => {
				l.removeAttribute("aria-selected"),
					l.setAttribute("tabindex", "-1");
			})
		),
			this.TabStore[n].forEach((r) => {
				r.removeAttribute("tabindex"),
					r.setAttribute("aria-selected", "true");
			}),
			this.PanelStore.forEach((r) =>
				r.forEach((l) => {
					l.hidden = !0;
				})
			),
			this.PanelStore[n].forEach((r) => {
				r.hidden = !1;
			}),
			i.focus();
	}
}
customElements.define("tabbed-content", N);
class Y extends HTMLElement {
	connectedCallback() {
		this.button.addEventListener("click", this.copy.bind(this), !1);
	}
	async copy() {
		const i = this.target?.innerText;
		i &&
			(await navigator.clipboard.writeText(i),
			this.toast.removeAttribute("aria-hidden"),
			await new Promise((n) => setTimeout(n, 2e3)),
			this.toast.setAttribute("aria-hidden", "true"));
	}
	get toast() {
		return this.querySelector("div");
	}
	get button() {
		return this.querySelector("button");
	}
	get target() {
		return document.querySelector(this.dataset.target);
	}
}
customElements.define("click-to-copy", Y);
function P(u, i, n) {
	return Math.min(Math.max(n, u), i);
}
function $(u, i, n) {
	return u * (1 - n) + i * n;
}
class j extends HTMLElement {
	x = 0;
	y = 0;
	rect;
	interval;
	constructor() {
		if ((super(), !("matchMedia" in window))) return;
		const i = window.matchMedia(
				"(prefers-reduced-motion: no-preference)"
			).matches,
			n = window.matchMedia("(hover: hover)").matches;
		i &&
			n &&
			(window.addEventListener("resize", () => this.resize()),
			this.addEventListener("mousemove", (r) => this.move(r)),
			this.addEventListener("mouseleave", (r) => {
				r.target.isSameNode(this) && this.reset();
			})),
			i && this.shuffle();
	}
	connectedCallback() {
		this.resize();
	}
	resize() {
		(this.rect = this.getBoundingClientRect()), this.reset();
	}
	shuffle() {
		let i = "#@?\xA7%&\u2762\u2605".split("");
		for (const n of this.querySelectorAll(".js-bleep > span")) {
			let r = i[Math.floor(Math.random() * i.length)];
			(i = i.filter((l) => l !== r)), (n.textContent = r);
		}
		setTimeout(() => this.shuffle(), 300);
	}
	move(i) {
		const n = (i.pageX - this.rect.left) / this.rect.width - 0.5,
			r = (i.pageY - this.rect.top) / this.rect.height - 0.5,
			l = 5,
			h = 7.5,
			o = P(l * -1, l, $(l * -1, l, n * 2)),
			a = P(h * -1, h, $(h, h * -1, r * 2));
		requestAnimationFrame(() => {
			this.style.setProperty("--rot-x", `${a}deg`),
				this.style.setProperty("--rot-y", `${o}deg`);
		});
	}
	reset() {
		requestAnimationFrame(() => {
			this.style.setProperty("--rot-x", "0deg"),
				this.style.setProperty("--rot-y", "0deg");
		});
	}
}
customElements.define("hero-card", j);
