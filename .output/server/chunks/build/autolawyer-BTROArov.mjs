import { defineComponent, unref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { L as LeadButton } from './LeadButton-mXT9L9SS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Y as YouGetSection, F as FaqSection } from './FaqSection-Dwgkjc4Q.mjs';
import { C as CasesSection$1 } from './CasesSection-DGfVuPId.mjs';
import { R as ReviewsSection, C as CtaSection } from './cta-section-B3LGuSVo.mjs';
import { l as logoMain } from './logo-COy-JwiO.mjs';
import { u as useRequestURL } from './url-Dhw-ogpB.mjs';
import { f as useSeoMeta, e as useHead } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'node:crypto';
import 'pinia';
import './index-SJUTe_C9.mjs';
import '@primeuix/utils';
import './index-f6-L4oOs.mjs';
import '@primeuix/styled';
import '@primeuix/utils/dom';
import 'nanoid';
import './useApi-DuJXikC3.mjs';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-632d931a><div class="hero__inner" data-v-632d931a><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-632d931a><span class="max-lg:hidden" data-v-632d931a>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-632d931a>Отзывы клиентов</span><span class="hero__badge-btn" data-v-632d931a>Читать →</span></a><h1 class="hero__title" data-v-632d931a>Помощь опытных автоюристов в Челябинске</h1><p class="hero__subtitle" data-v-632d931a> Восстанавливаем справедливость на дорогах. Взыскание ущерба при ДТП, оспаривание вины, помощь при лишении прав и споры со страховыми компаниями. Более 10 лет успешной практики. </p><div class="hero__actions" data-v-632d931a>`);
      _push(ssrRenderComponent(unref(LeadButton), null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "hero__secondary-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Наши кейсы →`);
          } else {
            return [
              createTextVNode("Наши кейсы →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hero__cards" data-v-632d931a><div class="hero-card__item" data-v-632d931a><div class="hero-card__icon" data-v-632d931a>1</div><div class="hero-card__title" data-v-632d931a>Помощь при ДТП</div><div class="hero-card__text" data-v-632d931a> Оспаривание вины, взыскание стоимости ремонта, установление виновника и привлечение к ответственности </div></div><div class="hero-card__item" data-v-632d931a><div class="hero-card__icon" data-v-632d931a>2</div><div class="hero-card__title" data-v-632d931a>Лишение прав</div><div class="hero-card__text" data-v-632d931a> Находим нарушения, обжалуем постановление, возвращаем права </div></div><div class="hero-card__item" data-v-632d931a><div class="hero-card__icon" data-v-632d931a>3</div><div class="hero-card__title" data-v-632d931a>Споры со страховой</div><div class="hero-card__text" data-v-632d931a> Добиваемся выплат в судебном и досудебном порядке. Оспорим незаконный отказ. </div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/autolawyer/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-632d931a"]]);
const photo = "" + __buildAssetsURL("auto_1.CdF-wZcZ.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Ассистента на переговорах",
        description: "Выезжаем в ГАИ и страховую компанию, ведём переговоры и добиваемся максимальной выплаты. При правильном подходе часто можно избежать суда."
      },
      {
        title: "Уверенность в судебном процессе",
        description: "Выходим в суд за Вас чтобы завершить процесс с максимальной выгодой. Вы можете спать спокойно, зная, что в суде работают профессионалы."
      },
      {
        title: "Заботу и правововую поддержку",
        description: "Консультируем неограниченно, объясняем суть действий и всегда держим в курсе дел. Понимаем, что разбитый автомобиль и проблемы с документами могут выбить из колеи, поэтому всегда относимся с пониманием в Вашим вопросам."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(YouGetSection), mergeProps({
        photo: unref(photo),
        content
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/autolawyer/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-46c7507a><div class="cases__inner" data-v-46c7507a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-46c7507a${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-46c7507a${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-46c7507a${_scopeId}>Смотреть →</span>`);
          } else {
            return [
              createVNode("span", null, [
                createTextVNode("Больше кейсов "),
                createVNode("span", { class: "max-lg:hidden" }, "в нашем блоге.")
              ]),
              createVNode("span", { class: "cases__badge-btn" }, "Смотреть →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h2 class="cases__title" data-v-46c7507a>Успешные кейсы</h2><p class="cases__subtitle" data-v-46c7507a> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/autolawyer/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-46c7507a"]]);
const faqImage = "" + __buildAssetsURL("faq_img.DeojskMN.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Страховая занизила выплату — есть смысл спорить?",
        a: "Да. Занижение часто связано с «внутренними расчётами» и спорными коэффициентами. Мы делаем независимую оценку/экспертизу, готовим претензию и, если нужно, идём в суд: доплата + штраф + неустойка."
      },
      {
        q: "Можно ли обжаловать постановление ГИБДД, если уже подписал протокол?",
        a: "Можно. Подпись — не признание вины. Важно уложиться в сроки и правильно сформулировать доводы: процессуальные нарушения, отсутствие события/состава, ошибки в схеме, видеозаписи и т.д."
      },
      {
        q: "Меня вызывают в суд по лишению прав. Что делать прямо сейчас?",
        a: "Не тянуть. Нужна позиция до заседания: анализ материалов, ходатайства, доказательства, работа со сроками и процедурой. Чем раньше подключимся — тем больше инструментов защиты."
      },
      {
        q: "Сколько времени занимает дело и сколько это стоит?",
        a: "Сроки зависят от вида спора (страховая/ГАИ/взыскание с виновника) и стадии, на которой подключаемся. На консультации честно оценим перспективу, риски и бюджет."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(FaqSection), mergeProps({
        faqImage: unref(faqImage),
        items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/autolawyer/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AutolawyerPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав | Юридическая компания №1",
      ogTitle: "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав | Юридическая компания №1",
      description: "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба. Бесплатная консультация.",
      ogDescription: "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: logoMain,
      ogImageAlt: "Автоюрист в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Автоюрист в Челябинске — ДТП, ОСАГО, ГИБДД, лишение прав",
      twitterDescription: "Нужен автоюрист в Челябинске? Поможем после ДТП: споры со страховой (ОСАГО/КАСКО), оспаривание постановлений ГИБДД, защита при лишении прав, возмещение ущерба.",
      twitterImage: logoMain,
      ogSiteName: "Юридическая компания №1",
      ogLocale: "ru_RU",
      articleAuthor: "Юридическая компания №1"
    });
    useHead({
      link: [
        {
          rel: "canonical",
          href: canonicalUrl
        }
      ],
      meta: [
        {
          name: "keywords",
          content: "автоюрист, автоюрист Челябинск, юрист по ДТП, юрист по ОСАГО, юрист по КАСКО, оспаривание постановлений ГИБДД, лишение водительских прав, возмещение ущерба после ДТП, споры со страховой, автоюрист консультация, защита при ДТП, юрист по автомобильным делам, восстановление прав, обжалование штрафов ГИБДД"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServicesSection = resolveComponent("ServicesSection");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(CasesSection, null, null, _parent));
      _push(ssrRenderComponent(unref(ReviewsSection), null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(unref(CtaSection), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/autolawyer/ui/AutolawyerPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "autolawyer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$1), _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/autolawyer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=autolawyer-BTROArov.mjs.map
