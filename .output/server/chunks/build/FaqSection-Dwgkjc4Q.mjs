import { defineComponent, mergeProps, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "YouGetSection",
  __ssrInlineRender: true,
  props: {
    photo: {},
    content: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "you-get" }, _attrs))} data-v-23f85106><div class="you-get__inner" data-v-23f85106><h2 class="you-get__title" data-v-23f85106>Что Вы получаете</h2><div class="you-get__grid" data-v-23f85106><img${ssrRenderAttr("src", __props.photo)} alt="Автоюристы готовятся к судебному процессу" class="you-get__image" data-v-23f85106><div class="you-get__content" data-v-23f85106><!--[-->`);
      ssrRenderList(__props.content, (item) => {
        _push(`<div class="you-get__content-item" data-v-23f85106><p class="you-get__content-item-title" data-v-23f85106>${ssrInterpolate(item.title)}</p><p class="you-get__content-item-text" data-v-23f85106>${ssrInterpolate(item.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/widgets/you-get-section/ui/YouGetSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const YouGetSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-23f85106"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FaqSection",
  __ssrInlineRender: true,
  props: {
    faqImage: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const openItems = ref(new Array(props.items.length).fill(false));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq" }, _attrs))} data-v-b93fb046><div class="faq__inner" data-v-b93fb046><h2 class="faq__title" data-v-b93fb046>Вопросы, которые задают почти всегда</h2><div class="faq__content" data-v-b93fb046><img${ssrRenderAttr("src", __props.faqImage)} alt="FAQ" class="faq__image" data-v-b93fb046><div class="faq__list" data-v-b93fb046><!--[-->`);
      ssrRenderList(props.items, (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "faq-item--open": openItems.value[index] }, "faq-item"])}" data-v-b93fb046><button class="faq-item__q" type="button" data-v-b93fb046>${ssrInterpolate(item.q)} <span class="faq-item__icon" data-v-b93fb046>+</span></button><div class="faq-item__a-wrapper" data-v-b93fb046><div class="faq-item__a" data-v-b93fb046><p data-v-b93fb046>${ssrInterpolate(item.a)}</p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/faq-section/FaqSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b93fb046"]]);

export { FaqSection as F, YouGetSection as Y };
//# sourceMappingURL=FaqSection-Dwgkjc4Q.mjs.map
