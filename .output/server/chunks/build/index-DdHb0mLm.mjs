import { _ as __nuxt_component_0 } from './nuxt-link-BbuLapqa.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as __nuxt_component_0$1 } from './server.mjs';
import { L as LeadButton } from './LeadButton-RYE7CunC.mjs';
import { l as logoMain } from './logo-YP0PYDTj.mjs';

const useScroll = () => {
  const lock = () => {
    return;
  };
  const unlock = () => {
    return;
  };
  onScopeDispose(unlock);
  return { lock, unlock };
};
const isBurgerMenuOpen = ref(false);
const scrollBlock = useScroll();
const useBurgerMenu = () => {
  const toggleBurgerMenu = () => {
    isBurgerMenuOpen.value = !isBurgerMenuOpen.value;
    isBurgerMenuOpen.value ? scrollBlock.lock() : scrollBlock.unlock();
  };
  return {
    isBurgerMenuOpen,
    toggleBurgerMenu
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BurgerMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/features/burger-menu/ui/BurgerMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BurgerMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-fc06c978"]]);
const isBurgerButtonAccent = ref(false);
const useBurgerButtonAccent = () => {
  return {
    isBurgerButtonAccent
  };
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BurgerMenuButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { isBurgerMenuOpen: isBurgerMenuOpen2 } = useBurgerMenu();
    const { isBurgerButtonAccent: isBurgerButtonAccent2 } = useBurgerButtonAccent();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: ["burger-menu-button", { "burger-button-accent": unref(isBurgerButtonAccent2) }]
      }, _attrs))} data-v-47c9054e><span class="burger-icon-wrapper" data-v-47c9054e><i class="${ssrRenderClass(["pi", unref(isBurgerMenuOpen2) ? "pi-times" : "pi-bars"])}" data-v-47c9054e></i></span></button>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/features/burger-menu/ui/BurgerMenuButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BurgerMenuButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-47c9054e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Menu",
  __ssrInlineRender: true,
  setup(__props) {
    const menuItems = [
      {
        label: "Автоюрист",
        link: "/autolawyer"
      },
      {
        label: "Жилищное право",
        link: "/housing_law"
      },
      {
        label: "Защита прав потребителей",
        link: "/customer_law"
      },
      {
        label: "Земельное право",
        link: "/land_law"
      },
      {
        label: "Миграционное право",
        link: "/migration_law"
      },
      {
        label: "Наследственное право",
        link: "/inheritance_law"
      },
      {
        label: "Семейное право",
        link: "/family_law"
      },
      {
        label: "Трудовое право",
        link: "/labor_law"
      },
      {
        label: "Уголовное право",
        link: "/criminal_law"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "menu-container" }, _attrs))} data-v-5b4a9b74><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "menu-item",
          to: item.link,
          key: item.label
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/features/menu/ui/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5b4a9b74"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isServicesOpen = ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-container" }, _attrs))} data-v-446084b1><header class="header" data-v-446084b1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoMain))} alt="Юрист №1 лого" data-v-446084b1${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoMain),
                alt: "Юрист №1 лого"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav" data-v-446084b1><div class="nav-item nav-item--services" data-v-446084b1><a href="#" data-v-446084b1> Услуги <i class="${ssrRenderClass([{ "chevron--open": isServicesOpen.value }, "pi pi-chevron-down chevron"])}" data-v-446084b1></i></a>`);
      if (isServicesOpen.value) {
        _push(`<div class="dropdown" data-v-446084b1>`);
        _push(ssrRenderComponent(unref(Menu), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><a href="https://go.2gis.com/XAbrT" target="_blank" class="nav-item" active-class="nav-item--active" data-v-446084b1> Отзывы </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "nav-item",
        "active-class": "nav-item--active"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Кейсы`);
          } else {
            return [
              createTextVNode("Кейсы")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="lead-btn-container" data-v-446084b1>`);
      _push(ssrRenderComponent(unref(LeadButton), null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(BurgerMenuButton), null, null, _parent));
      _push(`</header>`);
      _push(ssrRenderComponent(unref(BurgerMenu), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/layouts/header/ui/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-446084b1"]]);
const Header$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Header
}, Symbol.toStringTag, { value: "Module" }));

const HeaderYNTbCunJ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  H: Header,
  a: Header$1,
  u: useScroll
}, Symbol.toStringTag, { value: 'Module' }));

const indexDdHb0mLm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Header: Header
}, Symbol.toStringTag, { value: 'Module' }));

export { Header as H, HeaderYNTbCunJ as a, indexDdHb0mLm as i, useScroll as u };
//# sourceMappingURL=index-DdHb0mLm.mjs.map
