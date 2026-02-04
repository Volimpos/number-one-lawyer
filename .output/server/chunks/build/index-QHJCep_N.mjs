import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { ref, defineComponent, useSSRContext, watch, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1, i as useRoute$1 } from './server.mjs';
import { useRoute } from 'vue-router';
import { b as useScroll, L as LeadButton } from './LeadButton-mXT9L9SS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { s as spheres } from './store-Bp-IcVUU.mjs';
import { l as logoMain } from './logo-COy-JwiO.mjs';

const isBurgerMenuOpen = ref(false);
const scrollBlock = useScroll();
const useBurgerMenu = () => {
  const toggleBurgerMenu = () => {
    isBurgerMenuOpen.value = !isBurgerMenuOpen.value;
    isBurgerMenuOpen.value ? scrollBlock.lock() : scrollBlock.unlock();
  };
  const closeBurgerMenu = () => {
    if (!isBurgerMenuOpen.value) return;
    isBurgerMenuOpen.value = false;
  };
  return {
    isBurgerMenuOpen,
    toggleBurgerMenu,
    closeBurgerMenu
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BurgerMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { closeBurgerMenu } = useBurgerMenu();
    watch(
      () => route.fullPath,
      () => {
        closeBurgerMenu();
      }
    );
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
const BurgerMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0a819871"]]);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "menu-container" }, _attrs))} data-v-add3741b><!--[-->`);
      ssrRenderList(unref(spheres), (item) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/menu/Menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-add3741b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const isServicesOpen = ref(false);
    ref(null);
    const route = useRoute$1();
    watch(
      () => route.fullPath,
      () => {
        isServicesOpen.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header-container" }, _attrs))} data-v-18d35ef1><header class="header" data-v-18d35ef1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="logo__image"${ssrRenderAttr("src", unref(logoMain))} alt="Юридическая компания №1 лого" data-v-18d35ef1${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "logo__image",
                src: unref(logoMain),
                alt: "Юридическая компания №1 лого"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="nav" data-v-18d35ef1><div class="${ssrRenderClass([{ "nav-item--open": isServicesOpen.value }, "nav-item nav-item--services"])}" data-v-18d35ef1><a href="#" data-v-18d35ef1> Услуги <i class="${ssrRenderClass([{ "chevron--open": isServicesOpen.value }, "pi pi-chevron-down chevron"])}" data-v-18d35ef1></i></a>`);
      if (isServicesOpen.value) {
        _push(`<div class="dropdown" data-v-18d35ef1>`);
        _push(ssrRenderComponent(unref(Menu), null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><a href="https://go.2gis.com/XAbrT" target="_blank" class="nav-item" active-class="nav-item--active" data-v-18d35ef1> Отзывы </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "nav-item nav-item--cases",
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
      _push(`</nav><div class="lead-btn-container" data-v-18d35ef1>`);
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
const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18d35ef1"]]);

const HeaderBJUqHlYK = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Header
}, Symbol.toStringTag, { value: 'Module' }));

const indexQHJCep_N = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Header: Header
}, Symbol.toStringTag, { value: 'Module' }));

export { Header as H, HeaderBJUqHlYK as a, indexQHJCep_N as i };
//# sourceMappingURL=index-QHJCep_N.mjs.map
