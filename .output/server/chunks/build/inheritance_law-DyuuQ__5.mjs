import { defineComponent, unref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    const inheritanceServices = [
      {
        title: "Оформление наследства",
        text: "Помогаем собрать документы, оформить право на наследство у нотариуса и получить свидетельство о праве на наследство."
      },
      {
        title: "Споры между наследниками",
        text: "Решаем конфликты при разделе имущества, защищаем ваши интересы в суде, помогаем достичь справедливого раздела."
      },
      {
        title: "Восстановление сроков",
        text: "Восстанавливаем пропущенный срок принятия наследства через суд, защищаем ваши права даже при существенных задержках."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-df503f86><div class="hero__inner" data-v-df503f86><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-df503f86><span class="max-lg:hidden" data-v-df503f86>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-df503f86>Отзывы клиентов</span><span class="hero__badge-btn" data-v-df503f86>Читать →</span></a><h1 class="hero__title" data-v-df503f86>Услуги юриста по наследственным спорам</h1><p class="hero__subtitle" data-v-df503f86> Решаем споры между наследниками, восстанавливаем пропущенные сроки, защищаем ваши интересы в суде. Более 10 лет успешной практики в наследственном праве. </p><div class="hero__actions" data-v-df503f86>`);
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
      _push(`</div><div class="hero__cards" data-v-df503f86><!--[-->`);
      ssrRenderList(inheritanceServices, (card, index) => {
        _push(`<div class="hero-card__item" data-v-df503f86><div class="hero-card__icon" data-v-df503f86>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-df503f86>${ssrInterpolate(card.title)}</div><div class="hero-card__text" data-v-df503f86>${ssrInterpolate(card.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/inheritance-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-df503f86"]]);
const photo = "" + __buildAssetsURL("5.CeILVkFX.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Ассистента на любых переговорах",
        description: "Представляем Ваши интересы в спорах с другими наследниками, нотариусами и третьими лицами. Ведём переговоры, готовим необходимые документы и добиваемся справедливого раздела имущества. Во многих случаях удаётся решить вопрос без суда."
      },
      {
        title: "Представителя в госорганах и суде",
        description: "Помогаем восстановить право на наследство даже если срок принятия был пропущен — знаем все законные способы защиты Ваших прав. Собираем все необходимые документы, правильно оформляем заявления и представляем Ваши интересы у нотариуса. Избавляем Вас от бюрократической волокиты и ошибок, которые могут стоить наследства. Вы получаете готовое свидетельство о праве на наследство, даже если думали, что уже поздно."
      },
      {
        title: "Заботу и правовую поддержку",
        description: "Консультируем неограниченно, объясняем каждый шаг простым языком и всегда держим в курсе дел. Понимаем, что наследственные вопросы часто связаны с эмоциональным стрессом и семейными конфликтами, поэтому относимся с пониманием и тактом к Вашей ситуации."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/inheritance-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-9122c231><div class="cases__inner" data-v-9122c231>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-9122c231${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-9122c231${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-9122c231${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-9122c231>Успешные кейсы</h2><p class="cases__subtitle" data-v-9122c231> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/inheritance-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-9122c231"]]);
const faqImage = "" + __buildAssetsURL("4.B-2Y_Isd.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Как вступить в наследство и какие документы нужны?",
        a: "В течение 6 месяцев со дня смерти наследодателя нужно подать заявление нотариусу по месту открытия наследства. Понадобятся: свидетельство о смерти, документы, подтверждающие родство (или завещание), документы на имущество, справка с места жительства умершего. Мы поможем собрать полный пакет документов, правильно оформить заявление и пройти процедуру вступления в наследство."
      },
      {
        q: "Что делать, если пропущен срок вступления в наследство?",
        a: "Есть два пути: договориться с другими наследниками о включении Вас в наследство (согласительный порядок) или восстановить срок через суд. Для суда нужны уважительные причины (болезнь, незнание о смерти, командировка и т.д.) и доказательства. Важно действовать быстро — чем больше времени прошло, тем сложнее восстановить права. Мы поможем оценить перспективы и выбрать оптимальный способ."
      },
      {
        q: "Можно ли оспорить завещание?",
        a: "Да, если есть основания: недееспособность наследодателя на момент составления, давление/угрозы, подделка, нарушение формы завещания, отсутствие свидетелей (когда требуются). Нужны доказательства: медицинские документы, свидетельские показания, экспертизы. Срок для оспаривания — 1 год с момента, когда узнали о нарушении. Мы поможем собрать доказательства и подготовить иск."
      },
      {
        q: "Кто имеет право на обязательную долю в наследстве?",
        a: "Несовершеннолетние или нетрудоспособные дети, нетрудоспособные супруг и родители наследодателя, а также нетрудоспособные иждивенцы. Они получают не менее половины доли, которая причиталась бы им по закону, даже если завещание их не упоминает. Размер обязательной доли рассчитывается с учётом всего наследственного имущества. Мы поможем определить право на обязательную долю и защитить интересы."
      },
      {
        q: "Как делится наследство между наследниками?",
        a: "Если есть завещание — по завещанию (с учётом обязательных долей). Если завещания нет — по закону в порядке очереди: первая очередь (дети, супруг, родители), вторая (братья/сёстры, дедушки/бабушки), третья (дяди/тёти) и т.д. Наследники одной очереди делят поровну. Споры о разделе имущества решаются через соглашение или суд. Мы поможем определить доли, составить соглашение или защитить Ваши права в суде."
      },
      {
        q: "Что делать, если наследодатель оставил долги?",
        a: "Наследники отвечают по долгам наследодателя в пределах стоимости полученного наследства. Можно принять наследство (и долги) или отказаться от него полностью (нельзя отказаться частично). Если долги превышают стоимость имущества, имеет смысл отказаться. Если приняли наследство — нужно разобраться с кредиторами, возможно, договориться о реструктуризации. Мы поможем оценить ситуацию и выбрать оптимальную стратегию."
      },
      {
        q: "Нужно ли платить налог с наследства?",
        a: "В большинстве случаев — нет. Налог на наследство отменён с 2006 года. Но есть исключение: доходы от авторских прав и патентов облагаются НДФЛ. Также нужно оплатить госпошлину за выдачу свидетельства о праве на наследство (0,3% для близких родственников, 0,6% для остальных, с льготами). Мы поможем рассчитать размер пошлины и правильно оформить документы."
      },
      {
        q: "Сколько времени занимает оформление наследства и сколько это стоит?",
        a: "Стандартный срок — 6 месяцев для принятия наследства, затем ещё 1–2 месяца на получение свидетельства. При спорах или восстановлении срока — от 3 до 12 месяцев в суде. Стоимость зависит от объёма работы: консультация, сбор документов, представительство у нотариуса, судебные споры. На первой консультации мы честно оценим перспективы, риски и бюджет. Расходы на юриста можно взыскать с проигравшей стороны в споре."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/inheritance-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InheritanceLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Юрист по наследству в Челябинске — оформление наследства, споры наследников | Юридическая компания №1",
      ogTitle: "Юрист по наследству в Челябинске — оформление наследства, споры наследников | Юридическая компания №1",
      description: "Юрист по наследству в Челябинске. Помощь в оформлении наследства, решении споров между наследниками, восстановлении пропущенных сроков. Защита интересов в суде, сопровождение у нотариуса. Более 10 лет практики в наследственном праве. Работаем по Челябинску и области. Бесплатная консультация.",
      ogDescription: "Юрист по наследству в Челябинске. Помощь в оформлении наследства, решении споров между наследниками, восстановлении пропущенных сроков. Защита интересов в суде, сопровождение у нотариуса. Более 10 лет практики в наследственном праве. Работаем по Челябинску и области. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: logoMain,
      ogImageAlt: "Юрист по наследству в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Юрист по наследству в Челябинске — оформление наследства, споры наследников",
      twitterDescription: "Помощь в оформлении наследства, решении споров между наследниками, восстановлении пропущенных сроков. Защита интересов в суде. Бесплатная консультация.",
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
          content: "юрист по наследству Челябинск, наследственный юрист, оформление наследства Челябинск, юрист по наследственным делам, споры между наследниками, восстановление срока принятия наследства, раздел наследства, наследственное право Челябинск, юрист по наследственным спорам, помощь в оформлении наследства, нотариус наследство, вступление в наследство, принятие наследства, отказ от наследства, обязательная доля в наследстве, недостойные наследники, оспаривание завещания, признание наследника недостойным, наследственный адвокат Челябинск, наследственные услуги Челябинская область, защита прав наследников, судебные споры по наследству, наследственное имущество, наследование по закону, наследование по завещанию"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/inheritance-law/ui/InheritanceLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "inheritance_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/inheritance_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=inheritance_law-DyuuQ__5.mjs.map
