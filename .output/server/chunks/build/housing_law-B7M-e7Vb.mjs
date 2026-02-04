import { defineComponent, unref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { L as LeadButton } from './LeadButton-mXT9L9SS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Y as YouGetSection, F as FaqSection } from './FaqSection-Dwgkjc4Q.mjs';
import { C as CasesSection$1 } from './CasesSection-DGfVuPId.mjs';
import { R as ReviewsSection, C as CtaSection } from './cta-section-B3LGuSVo.mjs';
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
    const heroCards = [
      {
        title: "Проблемы с ЖКХ",
        text: "Оспаривание завышенных тарифов, взыскание переплат, споры с управляющими компаниями и расчет размера коммунальных платежей"
      },
      {
        title: "Споры с соседями",
        text: "Урегулирование конфликтов, шум, затопление, незаконные перепланировки и нарушение прав собственности"
      },
      {
        title: "Приватизация",
        text: "Оформление права собственности на жилье, помощь в приватизации муниципального жилья и защита прав при приватизации"
      },
      {
        title: "Выселение",
        text: "Защита от незаконного выселения, взыскание задолженности, восстановление права проживания и законное выселение"
      },
      {
        title: "Перепланировка",
        text: "Оформление разрешения на перепланировку, сбор необходимых документов и сопровождение процесса"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-8a287fe6><div class="hero__inner" data-v-8a287fe6><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-8a287fe6><span class="max-lg:hidden" data-v-8a287fe6>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-8a287fe6>Отзывы клиентов</span><span class="hero__badge-btn" data-v-8a287fe6>Читать →</span></a><h1 class="hero__title" data-v-8a287fe6>Юрист по жилищному праву в Челябинске</h1><p class="hero__subtitle" data-v-8a287fe6> Защищаем Ваши жилищные права. Споры с управляющими компаниями, приватизация, признание права собственности, раздел жилья и споры с застройщиками. Более 10 лет успешной практики. </p><div class="hero__actions" data-v-8a287fe6>`);
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
      _push(`</div><div class="hero__cards" data-v-8a287fe6><!--[-->`);
      ssrRenderList(heroCards, (card, index) => {
        _push(`<div class="${ssrRenderClass([{
          "hero-card__item--right-aligned": index === heroCards.length - 1 && heroCards.length % 3 !== 0
        }, "hero-card__item"])}" data-v-8a287fe6><div class="hero-card__icon" data-v-8a287fe6>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-8a287fe6>${ssrInterpolate(card.title)}</div><div class="hero-card__text" data-v-8a287fe6>${ssrInterpolate(card.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/housing-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8a287fe6"]]);
const photo = "" + __buildAssetsURL("housing_law_1.Bk0NdpU_.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Защиту Ваших жилищных прав",
        description: "Представляем Ваши интересы в спорах с управляющими компаниями, ЖКХ и застройщиками. Ведём переговоры, готовим претензии и добиваемся справедливого решения. Во многих случаях удаётся решить вопрос без суда."
      },
      {
        title: "Профессиональное сопровождение в суде",
        description: "Выходим в суд за вас, чтобы защитить Ваши права на жильё. Вы можете быть уверены, что в суде работают опытные специалисты, которые знают все нюансы жилищного законодательства и добиваются максимально выгодного результата."
      },
      {
        title: "Заботу и правовую поддержку",
        description: "Консультируем неограниченно, объясняем суть действий и всегда держим в курсе дел. Понимаем, что жилищные споры могут быть очень стрессовыми, поэтому всегда относимся с пониманием к Вашим вопросам и переживаниям."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/housing-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-996320c2><div class="cases__inner" data-v-996320c2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-996320c2${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-996320c2${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-996320c2${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-996320c2>Успешные кейсы</h2><p class="cases__subtitle" data-v-996320c2> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/housing-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-996320c2"]]);
const faqImage = "" + __buildAssetsURL("housing_law_2.DZG0G0ap.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Управляющая компания завышает плату за коммунальные услуги. Что делать?",
        a: "Сначала запросите детализацию платежей и сверьте с тарифами. Если обнаружены нарушения — направьте претензию в УК с требованием перерасчёта. При отказе обращайтесь в ГЖИ и суд. Можем помочь с проверкой начислений, составлением претензий и представлением интересов в суде."
      },
      {
        q: "Можно ли выселить соседа, который нарушает покой и порядок?",
        a: "Да, но процесс сложный. Нужны доказательства систематических нарушений: протоколы участкового, показания свидетелей, видеозаписи, обращения в полицию. Если это наниматель — через суд о расторжении договора соцнайма. Если собственник — только при грубых нарушениях прав соседей. Поможем собрать доказательства и подготовить иск."
      },
      {
        q: "Как приватизировать квартиру, если один из прописанных отказывается?",
        a: "Приватизация возможна только с согласия всех совершеннолетних членов семьи. Если кто-то отказывается — он должен оформить письменный отказ у нотариуса. При спорах между наследниками или при отсутствии согласия — решается через суд. Поможем оформить документы и защитить ваши права."
      },
      {
        q: "УК не делает капитальный ремонт. Можно ли заставить?",
        a: "Да. УК обязана проводить капремонт по плану. Если работы не выполняются — жалоба в ГЖИ, прокуратуру, возможно взыскание ущерба через суд. Если дом в аварийном состоянии — можно требовать переселения. Поможем составить жалобы и иски, проконтролируем выполнение обязательств."
      },
      {
        q: "Как оспорить кадастровую стоимость квартиры для снижения налога?",
        a: "Можно обратиться в комиссию по рассмотрению споров о кадастровой стоимости или в суд. Нужна независимая оценка, которая покажет завышение. Срок — до 31 декабря года, следующего за годом установления стоимости. Поможем собрать документы, заказать оценку и оспорить стоимость."
      },
      {
        q: "Можно ли признать сделку купли-продажи квартиры недействительной?",
        a: "Да, при наличии оснований: обман, принуждение, недееспособность одной из сторон, нарушение прав третьих лиц (например, несовершеннолетних), отсутствие согласия супруга. Срок оспаривания — 1–3 года в зависимости от основания. Поможем оценить перспективы и подготовить иск."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/housing-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HousingLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Юрист по жилищному праву в Челябинске — споры с УК, приватизация, ЖКХ | Юридическая компания №1",
      ogTitle: "Юрист по жилищному праву в Челябинске — споры с УК, приватизация, ЖКХ | Юридическая компания №1",
      description: "Профессиональная помощь юриста по жилищному праву в Челябинске. Споры с управляющими компаниями, приватизация, проблемы с ЖКХ, выселение, перепланировка. Более 10 лет опыта. Бесплатная консультация.",
      ogDescription: "Профессиональная помощь юриста по жилищному праву в Челябинске. Споры с управляющими компаниями, приватизация, проблемы с ЖКХ, выселение, перепланировка. Более 10 лет опыта. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: "~/src/shared/assets/logo.png",
      ogImageAlt: "Юрист по жилищному праву в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Юрист по жилищному праву в Челябинске — споры с УК, приватизация, ЖКХ",
      twitterDescription: "Профессиональная помощь юриста по жилищному праву в Челябинске. Споры с управляющими компаниями, приватизация, проблемы с ЖКХ, выселение, перепланировка.",
      twitterImage: "~/src/shared/assets/logo.png",
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
          content: "юрист по жилищному праву, жилищный юрист Челябинск, споры с управляющей компанией, приватизация квартиры, проблемы с ЖКХ, выселение, перепланировка, признание права собственности, раздел жилья, споры с застройщиками, юрист ЖКХ, защита жилищных прав"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/housing-law/ui/HousingLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "housing_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/housing_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=housing_law-B7M-e7Vb.mjs.map
