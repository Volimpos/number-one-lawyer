import { defineComponent, unref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { L as LeadButton } from './LeadButton-mXT9L9SS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { F as FaqSection, Y as YouGetSection$1 } from './FaqSection-Dwgkjc4Q.mjs';
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
    const services = [
      {
        title: "Раздел имущества",
        description: "Справедливый раздел совместно нажитого имущества при разводе. Оценка активов, защита интересов, достижение соглашения или представление в суде"
      },
      {
        title: "Алименты",
        description: "Взыскание алиментов на детей и супруга. Определение размера выплат, изменение размера алиментов, взыскание задолженности"
      },
      {
        title: "Споры о детях",
        description: "Определение места жительства детей, порядок общения с ребенком, лишение или ограничение родительских прав. Защита интересов детей"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-f4e20370><div class="hero__inner" data-v-f4e20370><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-f4e20370><span class="max-lg:hidden" data-v-f4e20370>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-f4e20370>Отзывы клиентов</span><span class="hero__badge-btn" data-v-f4e20370>Читать →</span></a><h1 class="hero__title" data-v-f4e20370>Услуги семейного юриста в Челябинске</h1><p class="hero__subtitle" data-v-f4e20370> Решаем сложные вопросы деликатно и профессионально. Развод, раздел имущества, алименты, определение места жительства детей — поможем достичь справедливого решения с минимальным стрессом. Более 10 лет успешной практики в семейном праве. </p><div class="hero__actions" data-v-f4e20370>`);
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
      _push(`</div><div class="hero__cards" data-v-f4e20370><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div class="hero-card__item" data-v-f4e20370><div class="hero-card__icon" data-v-f4e20370>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-f4e20370>${ssrInterpolate(service.title)}</div><div class="hero-card__text" data-v-f4e20370>${ssrInterpolate(service.description)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/family-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-f4e20370"]]);
const photo = "" + __buildAssetsURL("lawyer_2.GUXmnPG_.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Тактичного посредника в семейных спорах",
        description: "Помогаем найти компромиссное решение в вопросах раздела имущества, алиментов и определения места жительства детей. Ведём переговоры с бывшим супругом, готовим соглашения и медиативные документы. Во многих случаях удаётся решить вопрос мирно, без судебных разбирательств, что особенно важно когда в семье есть дети."
      },
      {
        title: "Надёжного защитника Ваших прав и интересов детей",
        description: "Представляем Ваши интересы в суде по делам о разводе, разделе имущества, взыскании алиментов и определении порядка общения с детьми. Защищаем права ребёнка, добиваемся справедливого раздела совместно нажитого имущества и алиментных обязательств. Вы можете быть уверены, что в суде работают специалисты, которые понимают все нюансы семейного законодательства и добиваются максимально выгодного результата для Вас и Ваших детей."
      },
      {
        title: "Конфиденциальность, заботу и постоянную поддержку",
        description: "Консультируем неограниченно, объясняем каждый шаг простым языком и всегда держим в курсе дел. Понимаем, что семейные вопросы — это очень личная и эмоционально сложная тема. Гарантируем полную конфиденциальность и тактичное отношение к Вашей ситуации. Мы рядом на всех этапах — от первой консультации до получения решения суда, помогая Вам пройти этот непростой период с минимальным стрессом."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(YouGetSection$1), mergeProps({
        photo: unref(photo),
        content
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/family-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const YouGetSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-3cc69c56"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-e200f31e><div class="cases__inner" data-v-e200f31e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-e200f31e${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-e200f31e${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-e200f31e${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-e200f31e>Успешные кейсы</h2><p class="cases__subtitle" data-v-e200f31e> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/family-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e200f31e"]]);
const faqImage = "" + __buildAssetsURL("family-law_2.iL78pStM.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Как правильно оформить развод и разделить имущество?",
        a: "Развод возможен через ЗАГС (при согласии и отсутствии несовершеннолетних детей) или через суд. Раздел имущества — отдельный процесс: делится только совместно нажитое в браке, личное имущество остаётся у каждого. Можно договориться (соглашение) или делить через суд. Важно правильно оценить имущество, учесть долги и интересы детей. Мы поможем составить соглашение или защитить Ваши права в суде."
      },
      {
        q: "Как взыскать алименты и можно ли увеличить их размер?",
        a: "Алименты взыскиваются через суд или по соглашению. Размер: на одного ребёнка — 1/4 дохода, на двоих — 1/3, на троих и более — 1/2. Можно взыскать в твёрдой сумме, если доход нерегулярный или скрывается. Увеличение возможно при изменении обстоятельств (рост потребностей ребёнка, изменение доходов). Мы поможем правильно рассчитать размер, собрать документы и взыскать алименты, в том числе за прошедший период."
      },
      {
        q: "С кем останутся дети после развода?",
        a: "Место жительства детей определяется соглашением родителей или решением суда с учётом интересов ребёнка: привязанность к каждому родителю, условия проживания, материальное положение, график работы, мнение ребёнка (с 10 лет). Важны не только материальные условия, но и возможность уделять время ребёнку. Мы поможем собрать доказательства, подготовить позицию и защитить Ваши права в суде."
      },
      {
        q: "Можно ли лишить родительских прав и как это сделать?",
        a: "Да, но только в крайних случаях: уклонение от обязанностей, злоупотребление правами, жестокое обращение, алкоголизм/наркомания, совершение преступления против ребёнка или супруга. Нужны серьёзные доказательства: документы, показания свидетелей, заключения органов опеки. Лишение прав не освобождает от алиментов. Мы поможем оценить основания, собрать доказательства и правильно оформить иск."
      },
      {
        q: "Как установить или оспорить отцовство?",
        a: "Установление отцовства: по заявлению обоих родителей в ЗАГСе или через суд (если отец не признаёт или умер). Нужны доказательства: совместное проживание, участие в воспитании, генетическая экспертиза. Оспаривание возможно, если есть сомнения в биологическом отцовстве, также через суд с экспертизой ДНК. Срок для оспаривания — 1 год с момента, когда узнали об обстоятельствах. Мы поможем собрать доказательства и правильно оформить заявление или иск."
      },
      {
        q: "Что делать, если бывший супруг не платит алименты?",
        a: "Есть несколько способов: обращение к судебным приставам для принудительного взыскания (арест счетов, удержание из зарплаты, ограничение выезда), привлечение к административной и уголовной ответственности. Важно действовать системно: регулярно обращаться к приставам, фиксировать задолженность, при необходимости — в суд. Мы поможем организовать процесс взыскания и защитить права ребёнка."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/family-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FamilyLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Семейный юрист в Челябинске — развод, раздел имущества, алименты, споры о детях | Юридическая компания №1",
      ogTitle: "Семейный юрист в Челябинске — развод, раздел имущества, алименты, споры о детях | Юридическая компания №1",
      description: "Профессиональная помощь семейного юриста в Челябинске. Развод, раздел имущества, взыскание алиментов, определение места жительства детей, порядок общения с ребенком. Более 10 лет успешной практики в семейном праве. Работаем по Челябинску и области. Деликатное решение сложных вопросов с минимальным стрессом. Бесплатная консультация.",
      ogDescription: "Профессиональная помощь семейного юриста в Челябинске. Развод, раздел имущества, взыскание алиментов, определение места жительства детей, порядок общения с ребенком. Более 10 лет успешной практики в семейном праве. Работаем по Челябинску и области. Деликатное решение сложных вопросов с минимальным стрессом. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: logoMain,
      ogImageAlt: "Семейный юрист в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Семейный юрист в Челябинске — развод, раздел имущества, алименты, споры о детях",
      twitterDescription: "Профессиональная помощь семейного юриста в Челябинске. Развод, раздел имущества, взыскание алиментов, определение места жительства детей. Более 10 лет практики. Бесплатная консультация.",
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
          content: "семейный юрист Челябинск, юрист по семейным делам, развод Челябинск, раздел имущества при разводе, взыскание алиментов, определение места жительства ребенка, порядок общения с ребенком, лишение родительских прав, ограничение родительских прав, семейный адвокат Челябинск, юрист по разводу, раздел совместно нажитого имущества, алименты на детей, алименты на супруга, изменение размера алиментов, взыскание задолженности по алиментам, споры о детях, определение порядка общения, семейное право Челябинск, бракоразводный процесс, расторжение брака, соглашение о детях, соглашение об алиментах, соглашение о разделе имущества, семейные споры, защита прав детей, семейные услуги Челябинская область, судебные споры по семейным делам, семейный юрист консультация, помощь при разводе, юридическая помощь семье"
        },
        {
          name: "geo.region",
          content: "RU-CHE"
        },
        {
          name: "geo.placename",
          content: "Челябинск"
        },
        {
          name: "author",
          content: "Юридическая компания №1"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServicesSection = resolveComponent("ServicesSection");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
      _push(ssrRenderComponent(YouGetSection, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/family-law/ui/FamilyLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "family_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/family_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=family_law-CNwWyVKW.mjs.map
