import { defineComponent, unref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
        title: "Возврат товара",
        text: "Возврат некачественного товара, обмен товара ненадлежащего качества, взыскание уплаченной суммы и компенсации"
      },
      {
        title: "Расторжение договора",
        text: "Расторжение договора купли-продажи или оказания услуг, возврат денежных средств, защита прав при нарушении условий договора"
      },
      {
        title: "Взыскание ущерба",
        text: "Взыскание материального и морального вреда, компенсация убытков, защита прав потребителей в суде"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-384a68e0><div class="hero__inner" data-v-384a68e0><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-384a68e0><span class="max-lg:hidden" data-v-384a68e0>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-384a68e0>Отзывы клиентов</span><span class="hero__badge-btn" data-v-384a68e0>Читать →</span></a><h1 class="hero__title" data-v-384a68e0> Юрист по защите прав потребителей в Челябинске </h1><p class="hero__subtitle" data-v-384a68e0> Возврат некачественного товара, расторжение договора, взыскание ущерба, компенсация морального вреда и споры с продавцами. Более 10 лет успешной практики. </p><div class="hero__actions" data-v-384a68e0>`);
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
      _push(`</div><div class="hero__cards" data-v-384a68e0><!--[-->`);
      ssrRenderList(heroCards, (card, index) => {
        _push(`<div class="hero-card__item" data-v-384a68e0><div class="hero-card__icon" data-v-384a68e0>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-384a68e0>${ssrInterpolate(card.title)}</div><div class="hero-card__text" data-v-384a68e0>${ssrInterpolate(card.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/customer-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-384a68e0"]]);
const photo = "" + __buildAssetsURL("lawyer_2.GUXmnPG_.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Представителя на переговорах",
        description: "Представляем Ваши интересы в спорах с продавцами, производителями и сервисными центрами. Ведём переговоры, готовим претензии и добиваемся возврата денег, обмена товара или устранения недостатков. Во многих случаях удаётся решить вопрос без суда, экономя Ваше время и нервы."
      },
      {
        title: "Профессиональное сопровождение в суде",
        description: "Выходим в суд за вас, чтобы защитить Ваши права как потребителя и взыскать компенсацию. Вы можете быть уверены, что в суде работают опытные специалисты, которые знают все нюансы законодательства о защите прав потребителей и добиваются максимально выгодного результата, включая взыскание неустойки и морального вреда."
      },
      {
        title: "Заботу и правовую поддержку",
        description: "Консультируем неограниченно, объясняем суть действий и всегда держим в курсе дел. Понимаем, что некачественный товар или услуга могут доставить много хлопот, поэтому всегда относимся с пониманием к Вашим вопросам и переживаниям. Помогаем вернуть потраченные деньги и восстановить справедливость."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/customer-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-447d742c><div class="cases__inner" data-v-447d742c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-447d742c${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-447d742c${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-447d742c${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-447d742c>Успешные кейсы</h2><p class="cases__subtitle" data-v-447d742c> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/customer-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-447d742c"]]);
const faqImage = "" + __buildAssetsURL("customer_2.1MLdUVVE.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Купленный товар оказался бракованным. Могу ли я вернуть деньги?",
        a: "Да, по закону о защите прав потребителей вы имеете право на возврат денег за товар ненадлежащего качества. Срок для предъявления требований — в течение гарантийного срока или срока годности, а если они не установлены — в течение 2 лет. Продавец обязан вернуть деньги в течение 10 дней с момента предъявления требования."
      },
      {
        q: "Можно ли вернуть товар надлежащего качества, если он просто не подошёл?",
        a: "Да, если товар не был в употреблении, сохранены его товарный вид и потребительские свойства, пломбы и фабричные ярлыки. Срок возврата — 14 дней (не считая дня покупки). Исключение: товары, не подлежащие обмену (лекарства, нижнее бельё, парфюмерия и др.)."
      },
      {
        q: "Магазин отказывается принимать претензию. Что делать?",
        a: "Претензию можно направить заказным письмом с уведомлением — это будет доказательством обращения. Если продавец игнорирует претензию или отказывается удовлетворить требования, можно обратиться в Роспотребнадзор или сразу в суд. По закону потребитель освобождается от уплаты госпошлины."
      },
      {
        q: "Услуга оказана некачественно. Могу ли я требовать компенсацию?",
        a: "Да. Вы вправе потребовать безвозмездного устранения недостатков, уменьшения цены, возмещения расходов на исправление недостатков или полного возмещения убытков. Также можно требовать компенсацию морального вреда и неустойку за просрочку выполнения требований (0,5% от цены услуги за каждый день просрочки)."
      },
      {
        q: "Интернет-магазин не возвращает деньги за неполученный товар. Как быть?",
        a: "При дистанционной продаже у вас есть право отказаться от товара в любое время до его передачи и в течение 7 дней после. Деньги должны вернуть в течение 10 дней. Если магазин затягивает, направьте претензию, при необходимости — жалобу в Роспотребнадзор и иск в суд. Можно также обратиться в банк для отмены операции."
      },
      {
        q: "Навязали дополнительную услугу при покупке. Законно ли это?",
        a: "Нет, навязывание дополнительных услуг запрещено законом. Вы вправе отказаться от них и требовать возврата уплаченной суммы. Если продавец отказывает, это нарушение ваших прав — можно требовать компенсацию и обращаться в контролирующие органы."
      },
      {
        q: "Сколько времени занимает решение спора и сколько это стоит?",
        a: "Сроки зависят от сложности дела и стадии подключения. Претензионный порядок — до 10 дней на ответ. Судебное разбирательство — обычно 2–3 месяца. Первая консультация поможет оценить перспективы, риски и стоимость. По делам о защите прав потребителей госпошлина не взимается, а расходы на юриста можно взыскать с продавца."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/customer-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomerLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Юрист по защите прав потребителей в Челябинске — возврат денег за некачественный товар или услугу | Юридическая компания №1",
      ogTitle: "Юрист по защите прав потребителей в Челябинске — возврат денег за некачественный товар или услугу | Юридическая компания №1",
      description: "Профессиональная помощь юриста по защите прав потребителей в Челябинске. Возврат товара, защита при некачественных услугах, взыскание компенсации, споры с продавцами и исполнителями услуг. Более 10 лет опыта. Бесплатная консультация.",
      ogDescription: "Профессиональная помощь юриста по защите прав потребителей в Челябинске. Возврат товара, защита при некачественных услугах, взыскание компенсации, споры с продавцами и исполнителями услуг. Более 10 лет опыта. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: "~/src/shared/assets/logo.png",
      ogImageAlt: "Юрист по защите прав потребителей в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Юрист по защите прав потребителей в Челябинске — возврат денег за некачественный товар или услугу",
      twitterDescription: "Профессиональная помощь юриста по защите прав потребителей в Челябинске. Возврат товара, защита при некачественных услугах, взыскание компенсации, споры с продавцами и исполнителями услуг.",
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
          content: "юрист по защите прав потребителей, защита прав потребителей Челябинск, возврат товара, некачественный товар, защита прав потребителя, взыскание компенсации, споры с продавцами, защита при некачественных услугах, обмен товара, гарантийный ремонт, юрист по правам потребителей, консультация по защите прав потребителей, возмещение ущерба потребителю, претензия продавцу"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/customer-law/ui/CustomerLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "customer_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/customer_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=customer_law-CqmuTbAX.mjs.map
