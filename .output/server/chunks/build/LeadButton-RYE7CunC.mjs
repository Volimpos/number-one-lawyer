import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LeadButton",
  __ssrInlineRender: true,
  setup(__props) {
    const optionsOpen = ref(false);
    const root = ref(null);
    ref(null);
    const direction = ref("down");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "lead-button",
        ref_key: "root",
        ref: root
      }, _attrs))} data-v-3ccac49a><button class="btn-primary" data-v-3ccac49a> Бесплатная консультация </button>`);
      if (optionsOpen.value) {
        _push(`<ul class="${ssrRenderClass([
          "variant-list",
          direction.value === "up" ? "variant-list--up" : "variant-list--down"
        ])}" data-v-3ccac49a><li data-v-3ccac49a>Написать в WhatsApp</li><li data-v-3ccac49a>Написать в Telegram</li><li data-v-3ccac49a>Заказать звонок</li><li data-v-3ccac49a>Позвонить</li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/features/lead-button/ui/LeadButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LeadButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ccac49a"]]);

export { LeadButton as L };
//# sourceMappingURL=LeadButton-RYE7CunC.mjs.map
