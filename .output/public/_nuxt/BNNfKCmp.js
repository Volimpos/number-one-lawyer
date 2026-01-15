import { _ as x } from "./BeBZUAn8.js";
import {
  d as f,
  s as N,
  o as h,
  bE as I,
  l as j,
  E as i,
  bl as A,
  bF as R,
  F as u,
  ao as V,
  ax as H,
  a5 as s,
  a6 as d,
  a7 as w,
  a4 as z,
  a3 as b,
  bG as F,
  r as v,
  L as W,
  M as O,
  br as o,
  G as c,
  ai as y,
  j as S,
  a9 as k,
  aM as D,
} from "./DMGdPXTA.js";
import { L as C } from "./l22QVJS8.js";
import { l as G } from "./CRlh_ylV.js";
const P = Symbol.for("nuxt:client-only"),
  U = f({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(a, { slots: n, attrs: t }) {
      const l = N(!1);
      h(() => {
        l.value = !0;
      });
      const r = A();
      return (
        r && (r._nuxtClientOnly = !0),
        R(P, !0),
        () => {
          if (l.value) {
            const m = n.default?.();
            return m && m.length === 1 ? [I(m[0], t)] : m;
          }
          const e = n.fallback || n.placeholder;
          if (e) return j(e);
          const _ = a.fallback || a.placeholder || "",
            B = a.fallbackTag || a.placeholderTag || "span";
          return i(B, t, _);
        }
      );
    },
  }),
  X = { class: "menu-container" },
  Y = f({
    __name: "Menu",
    setup(a) {
      const n = [
        { label: "Автоюрист", link: "/autolawyer" },
        { label: "Жилищное право", link: "/housing_law" },
        { label: "Защита прав потребителей", link: "/customer_law" },
        { label: "Земельное право", link: "/land_law" },
        { label: "Миграционное право", link: "/migration_law" },
        { label: "Наследственное право", link: "/inheritance_law" },
        { label: "Семейное право", link: "/family_law" },
        { label: "Трудовое право", link: "/labor_law" },
        { label: "Уголовное право", link: "/criminal_law" },
      ];
      return (t, l) => {
        const r = x;
        return (
          u(),
          i("ul", X, [
            (u(),
            i(
              V,
              null,
              H(n, (e) =>
                s(
                  r,
                  { class: "menu-item", to: e.link, key: e.label },
                  { default: d(() => [w(z(e.label), 1)]), _: 2 },
                  1032,
                  ["to"]
                )
              ),
              64
            )),
          ])
        );
      };
    },
  }),
  L = b(Y, [["__scopeId", "data-v-5b4a9b74"]]),
  q = () => {
    let a = !1;
    const n = () => {
        if (
          !(typeof window > "u") &&
          document.body.style.overflow !== "hidden"
        ) {
          a = !0;
          const l = window.innerWidth - document.documentElement.clientWidth;
          ((document.body.style.overflow = "hidden"),
            l > 0 && (document.body.style.paddingRight = `${l}px`));
        }
      },
      t = () => {
        typeof window > "u" ||
          (a &&
            ((document.body.style.overflow = ""),
            (document.body.style.paddingRight = ""),
            (a = !1)));
      };
    return (F(t), { lock: n, unlock: t });
  },
  p = v(!1),
  M = q(),
  $ = () => ({
    isBurgerMenuOpen: p,
    toggleBurgerMenu: () => {
      ((p.value = !p.value), p.value ? M.lock() : M.unlock());
    },
  }),
  J = { key: 0, class: "burger-menu-container" },
  K = { class: "px-4 w-full" },
  Q = f({
    __name: "BurgerMenu",
    setup(a) {
      const { isBurgerMenuOpen: n } = $();
      return (t, l) => {
        const r = U;
        return (
          u(),
          W(r, null, {
            default: d(() => [
              s(
                y,
                { name: "slide-up" },
                {
                  default: d(() => [
                    o(n)
                      ? (u(),
                        i("div", J, [
                          s(o(L), { class: "w-full" }),
                          c("div", K, [s(o(C), { class: "w-full" })]),
                        ]))
                      : O("", !0),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          })
        );
      };
    },
  }),
  Z = b(Q, [["__scopeId", "data-v-fc06c978"]]),
  T = v(!1),
  g = () => {
    typeof window > "u" || (T.value = window.scrollY > 300);
  },
  ee = () => (
    h(() => {
      typeof window > "u" ||
        (g(), window.addEventListener("scroll", g, { passive: !0 }));
    }),
    S(() => {
      typeof window > "u" || window.removeEventListener("scroll", g);
    }),
    { isBurgerButtonAccent: T }
  ),
  ne = { class: "burger-icon-wrapper" },
  te = f({
    __name: "BurgerMenuButton",
    setup(a) {
      const { toggleBurgerMenu: n, isBurgerMenuOpen: t } = $(),
        { isBurgerButtonAccent: l } = ee();
      return (r, e) => (
        u(),
        i(
          "button",
          {
            onClick: e[0] || (e[0] = (..._) => o(n) && o(n)(..._)),
            class: k(["burger-menu-button", { "burger-button-accent": o(l) }]),
          },
          [
            c("span", ne, [
              s(
                y,
                { name: "burger-icon" },
                {
                  default: d(() => [
                    (u(),
                    i(
                      "i",
                      {
                        key: o(t) ? "close" : "open",
                        class: k(["pi", o(t) ? "pi-times" : "pi-bars"]),
                      },
                      null,
                      2
                    )),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ],
          2
        )
      );
    },
  }),
  ae = b(te, [["__scopeId", "data-v-47c9054e"]]),
  oe = { class: "header-container" },
  le = { class: "header" },
  se = ["src"],
  re = { class: "nav" },
  ce = { key: 0, class: "dropdown" },
  ie = { class: "lead-btn-container" },
  ue = f({
    __name: "Header",
    setup(a) {
      const n = v(!1),
        t = v(null),
        l = (r) => {
          if (!t.value) return;
          const e = r.target;
          e && !t.value.contains(e) && (n.value = !1);
        };
      return (
        h(() => {
          document.addEventListener("click", l);
        }),
        S(() => {
          document.removeEventListener("click", l);
        }),
        (r, e) => {
          const _ = x;
          return (
            u(),
            i("div", oe, [
              c("header", le, [
                s(
                  _,
                  { to: "/", class: "logo" },
                  {
                    default: d(() => [
                      c(
                        "img",
                        { src: o(G), alt: "Юридическая компания №1 лого" },
                        null,
                        8,
                        se
                      ),
                    ]),
                    _: 1,
                  }
                ),
                c("nav", re, [
                  c(
                    "div",
                    {
                      class: "nav-item nav-item--services",
                      ref_key: "servicesRef",
                      ref: t,
                    },
                    [
                      c(
                        "a",
                        {
                          href: "#",
                          onClick:
                            e[0] ||
                            (e[0] = D(
                              (B) => (n.value = !n.value),
                              ["prevent"]
                            )),
                        },
                        [
                          e[1] || (e[1] = w(" Услуги ", -1)),
                          c(
                            "i",
                            {
                              class: k([
                                "pi pi-chevron-down chevron",
                                { "chevron--open": n.value },
                              ]),
                            },
                            null,
                            2
                          ),
                        ]
                      ),
                      s(
                        y,
                        { name: "variant-fade" },
                        {
                          default: d(() => [
                            n.value
                              ? (u(), i("div", ce, [s(o(L))]))
                              : O("", !0),
                          ]),
                          _: 1,
                        }
                      ),
                    ],
                    512
                  ),
                  e[3] ||
                    (e[3] = c(
                      "a",
                      {
                        href: "https://go.2gis.com/XAbrT",
                        target: "_blank",
                        class: "nav-item",
                        "active-class": "nav-item--active",
                      },
                      " Отзывы ",
                      -1
                    )),
                  s(
                    _,
                    {
                      to: "/cases",
                      class: "nav-item",
                      "active-class": "nav-item--active",
                    },
                    {
                      default: d(() => [
                        ...(e[2] || (e[2] = [w("Кейсы", -1)])),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                c("div", ie, [s(o(C))]),
                s(o(ae)),
              ]),
              s(o(Z)),
            ])
          );
        }
      );
    },
  }),
  E = b(ue, [["__scopeId", "data-v-446084b1"]]),
  pe = Object.freeze(
    Object.defineProperty({ __proto__: null, default: E }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  ve = Object.freeze(
    Object.defineProperty({ __proto__: null, Header: E }, Symbol.toStringTag, {
      value: "Module",
    })
  );
export { E as H, U as _, pe as a, ve as i, q as u };
