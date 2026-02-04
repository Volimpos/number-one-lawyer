import { defineComponent, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const photo1 = "" + __buildAssetsURL("1.PFJKzU1E.webp");
const photo2 = "" + __buildAssetsURL("2.BxClVgkm.webp");
const photo3 = "" + __buildAssetsURL("3.CSPVUKbh.webp");
const photo4 = "" + __buildAssetsURL("4.B-2Y_Isd.webp");
const photo5 = "" + __buildAssetsURL("5.CeILVkFX.webp");
const photo6 = "" + __buildAssetsURL("6.CvQ1m6Z9.webp");
const photo7 = "" + __buildAssetsURL("7.D9LZks04.webp");
const photo8 = "" + __buildAssetsURL("8.CCQfJW8Q.webp");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const lawyerPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-c27bcf21><h1 class="title" data-v-c27bcf21>О компании</h1><div class="about-grid" data-v-c27bcf21><div class="contacts" data-v-c27bcf21><div class="content" data-v-c27bcf21><p class="subtitle" data-v-c27bcf21>Реквизиты</p><p data-v-c27bcf21>ООО «Юридическая Компания 1»</p><p data-v-c27bcf21>ОГРН: 1257400023099</p><p data-v-c27bcf21>ИНН: 7447323283</p><p data-v-c27bcf21>Адрес: 454084, г. Челябинск, ул Кирова, д. 7а, помещ. 29 </p></div><div class="content" data-v-c27bcf21><p class="subtitle" data-v-c27bcf21>История</p><p data-v-c27bcf21>Наша юридическая компания была основана чтобы повышать уровень правовой грамотности населения и делать юриспруденцию доступной и распространенной. Ведь справедливость и баланс прав просто необходимы для комфортной жизни. С самого начала мы ставили перед собой задачу обеспечить высокий уровень профессионализма и индивидуальный подход к каждому делу.</p><p data-v-c27bcf21>За годы работы компания зарекомендовала себя как надежный партнер, способный решать самые сложные юридические вопросы. Мы постоянно развиваемся, расширяем спектр услуг и повышаем квалификацию наших специалистов.</p><p data-v-c27bcf21>Сегодня мы гордимся накопленным опытом и успешно реализованными проектами. Наша команда состоит из высококвалифицированных юристов, которые готовы прийти на помощь в любой правовой ситуации.</p></div></div><div class="photos" data-v-c27bcf21><!--[-->`);
      ssrRenderList(lawyerPhotos, (photo) => {
        _push(`<img${ssrRenderAttr("src", photo)} alt="Юрист компании" class="photo" data-v-c27bcf21>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about/ui/About.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c27bcf21"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AboutPage), _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-DvkyAYNm.mjs.map
