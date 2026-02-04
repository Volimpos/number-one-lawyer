import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, computed, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderVNode } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as api } from './useApi-DuJXikC3.mjs';
import { defineStore, storeToRefs } from 'pinia';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CaseCard",
  __ssrInlineRender: true,
  props: {
    image: {},
    date: {},
    sphere: {},
    title: {},
    description: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "case-card" }, _attrs))} data-v-e1985ee3><img${ssrRenderAttr("src", props.image)}${ssrRenderAttr("alt", props.title)} class="case-image" data-v-e1985ee3><div class="service-info" data-v-e1985ee3><p class="date" data-v-e1985ee3>${ssrInterpolate(props.date)}</p><p class="sphere" data-v-e1985ee3>${ssrInterpolate(props.sphere)}</p></div><div class="case-content" data-v-e1985ee3><p class="case-title" data-v-e1985ee3>${ssrInterpolate(props.title)}</p><p class="case-description" data-v-e1985ee3>${ssrInterpolate(props.description)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.link,
        class: "case-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Смотреть <i class="pi pi-arrow-right" data-v-e1985ee3${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" Смотреть "),
              createVNode("i", { class: "pi pi-arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/entities/case/ui/CaseCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CaseCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e1985ee3"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    as: { default: "div" },
    width: {},
    height: {},
    size: {},
    radius: {},
    circle: { type: Boolean },
    clipPath: {},
    shimmer: { type: Boolean, default: true },
    duration: { default: "1.35s" },
    baseColor: { default: "var(--gray100)" },
    highlightColor: { default: "rgba(255, 255, 255, 0.65)" }
  },
  setup(__props) {
    const props = __props;
    const styleObject = computed(() => {
      const w = props.size ?? props.width;
      const h = props.size ?? props.height;
      return {
        ...w ? { width: w } : null,
        ...h ? { height: h } : null,
        ...props.clipPath ? { clipPath: props.clipPath } : null,
        borderRadius: props.circle ? "9999px" : props.radius,
        backgroundColor: props.baseColor,
        "--skeleton-highlight": props.highlightColor,
        "--skeleton-duration": props.duration
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.as), mergeProps({
        class: ["skeleton", { "skeleton--shimmer": __props.shimmer }],
        style: styleObject.value,
        "aria-hidden": "true"
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/skeleton/Skeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-525bf765"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CaseCardSkeleton",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "case-card",
        "aria-busy": "true",
        "aria-live": "polite"
      }, _attrs))} data-v-c62a2823>`);
      _push(ssrRenderComponent(unref(Skeleton), { class: "case-image" }, null, _parent));
      _push(`<div class="service-info" data-v-c62a2823>`);
      _push(ssrRenderComponent(unref(Skeleton), { class: "date" }, null, _parent));
      _push(ssrRenderComponent(unref(Skeleton), { class: "sphere" }, null, _parent));
      _push(`</div><div class="case-content" data-v-c62a2823>`);
      _push(ssrRenderComponent(unref(Skeleton), { class: "case-title-line case-title-line--1" }, null, _parent));
      _push(ssrRenderComponent(unref(Skeleton), { class: "case-title-line case-title-line--2" }, null, _parent));
      _push(`<div class="case-description" data-v-c62a2823>`);
      _push(ssrRenderComponent(unref(Skeleton), { class: "desc-line desc-line--1" }, null, _parent));
      _push(ssrRenderComponent(unref(Skeleton), { class: "desc-line desc-line--2" }, null, _parent));
      _push(ssrRenderComponent(unref(Skeleton), { class: "desc-line desc-line--3" }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Skeleton), { class: "case-link-skeleton" }, null, _parent));
      _push(`</article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/entities/case/ui/CaseCardSkeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CaseCardSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c62a2823"]]);
const fetchCases = async () => {
  try {
    const response = await api.get("cases");
    console.log("загрузка кейсов: ", response);
    return {
      result: true,
      error: null,
      data: response
    };
  } catch (error) {
    return {
      result: false,
      error: error.message ?? "Ошибка загрузки",
      data: null
    };
  }
};
const useCases = defineStore("casesStore", () => {
  const cases = ref();
  const loadAllCases = async () => {
    const response = await fetchCases();
    if (response && response.result) {
      cases.value = response.data;
    }
  };
  return {
    cases,
    loadAllCases
  };
});
const formatDate = (input, options) => {
  if (!input) return "";
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) return "";
  const parts = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: options?.timeZone ?? "UTC"
  }).formatToParts(date);
  const day = parts.find((p) => p.type === "day")?.value;
  const month = parts.find((p) => p.type === "month")?.value;
  const year = parts.find((p) => p.type === "year")?.value;
  if (!day || !month || !year) return "";
  return `${day} ${month} ${year} г.`;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CasesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const casesStore = useCases();
    const { loadAllCases } = casesStore;
    const { cases } = storeToRefs(casesStore);
    const casesToDisplay = ref(null);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cases__grid" }, _attrs))} data-v-8586c7ae>`);
      if (!unref(casesToDisplay) || unref(isLoading)) {
        _push(`<!--[-->`);
        ssrRenderList(4, (item) => {
          _push(ssrRenderComponent(CaseCardSkeleton, { key: item }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(casesToDisplay), (caseItem) => {
          _push(ssrRenderComponent(unref(CaseCard), {
            key: caseItem.id,
            image: caseItem.image,
            date: unref(formatDate)(caseItem.created_at),
            sphere: caseItem.sphere,
            title: caseItem.title,
            description: caseItem.description,
            link: `/cases/${caseItem.id}`
          }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/widgets/cases-section/ui/CasesSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8586c7ae"]]);

export { CasesSection as C, CaseCardSkeleton as a, CaseCard as b, formatDate as f, useCases as u };
//# sourceMappingURL=CasesSection-DGfVuPId.mjs.map
