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
        title: "Оформление участков",
        text: "Оформление права собственности на землю, постановка на кадастровый учет, межевание участков и получение необходимых документов."
      },
      {
        title: "Споры о границах",
        text: "Установление границ земельных участков, разрешение споров с соседями, восстановление границ и защита прав собственности."
      },
      {
        title: "Приватизация",
        text: "Приватизация земельных участков, защита от незаконного изъятия, компенсация при изъятии и оспаривание решений органов власти."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-ade0128a><div class="hero__inner" data-v-ade0128a><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-ade0128a><span class="max-lg:hidden" data-v-ade0128a>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-ade0128a>Отзывы клиентов</span><span class="hero__badge-btn" data-v-ade0128a>Читать →</span></a><h1 class="hero__title" data-v-ade0128a>Юрист по земельному праву в Челябинске</h1><p class="hero__subtitle" data-v-ade0128a> Оформление участков, споры о границах, приватизация, изъятие земельных участков и сопровождение сделок с недвижимостью. Более 10 лет успешной практики. </p><div class="hero__actions" data-v-ade0128a>`);
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
      _push(`</div><div class="hero__cards" data-v-ade0128a><!--[-->`);
      ssrRenderList(heroCards, (card, index) => {
        _push(`<div class="hero-card__item" data-v-ade0128a><div class="hero-card__icon" data-v-ade0128a>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-ade0128a>${ssrInterpolate(card.title)}</div><div class="hero-card__text" data-v-ade0128a>${ssrInterpolate(card.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/land-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ade0128a"]]);
const photo = "" + __buildAssetsURL("land_law_1.ClCrcJgB.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Эксперта по земельным спорам",
        description: "Представляем Ваши интересы в спорах с соседями, администрацией, застройщиками и другими участниками земельных отношений. Ведём переговоры, готовим документы для регистрации прав, решаем вопросы с границами участков и добиваемся признания Ваших прав на землю. Во многих случаях удаётся урегулировать конфликт досудебно, сэкономив Ваше время и средства."
      },
      {
        title: "Профессиональную защиту в суде",
        description: "Выходим в суд за Вас, чтобы защитить Ваши права на земельный участок и взыскать компенсацию. Вы можете быть уверены, что в суде работают опытные специалисты, которые знают все нюансы земельного законодательства, кадастрового учёта и градостроительного права. Добиваемся максимально выгодного результата, включая признание права собственности, устранение нарушений границ и возмещение ущерба."
      },
      {
        title: "Заботу и правовую поддержку",
        description: "Консультируем неограниченно, объясняем суть действий и всегда держим в курсе дел. Понимаем, что земельные споры могут длиться годами и доставить много хлопот, поэтому всегда относимся с пониманием к Вашим вопросам и переживаниям. Помогаем оформить документы, зарегистрировать права, решить вопросы с кадастром и восстановить справедливость в земельных отношениях."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/land-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-cd26188b><div class="cases__inner" data-v-cd26188b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-cd26188b${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-cd26188b${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-cd26188b${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-cd26188b>Успешные кейсы</h2><p class="cases__subtitle" data-v-cd26188b> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/land-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cd26188b"]]);
const faqImage = "" + __buildAssetsURL("criminal_1.lkOo-ty7.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Как оформить право собственности на земельный участок?",
        a: "Оформление зависит от основания: приватизация, покупка, наследование, дарение. Нужно собрать документы (кадастровый паспорт, межевой план, документы-основания), провести кадастровые работы при необходимости, зарегистрировать право в Росреестре. Сроки — от 1 до 6 месяцев в зависимости от сложности. Мы поможем на всех этапах: от подготовки документов до регистрации."
      },
      {
        q: "Сосед захватил часть моего земельного участка. Что делать?",
        a: "Сначала нужно провести межевание и установить точные границы участка. Затем направить соседу претензию с требованием освободить захваченную территорию. Если не помогает — обращаться в суд с иском о восстановлении границ и взыскании ущерба. Может потребоваться судебная землеустроительная экспертиза. Важно действовать оперативно, так как самовольное занятие может привести к утрате прав на часть участка."
      },
      {
        q: "Могут ли изъять мой земельный участок для государственных нужд?",
        a: "Да, но только при соблюдении строгих условий: решение органа власти, публикация в СМИ, предварительное согласование, выкуп участка по рыночной стоимости или предоставление равноценного участка. Вы вправе оспорить решение об изъятии, требовать справедливую компенсацию, включая убытки и упущенную выгоду. Мы поможем защитить Ваши права и добиться максимальной компенсации."
      },
      {
        q: "Можно ли изменить категорию земельного участка?",
        a: "Да, но это сложная процедура, требующая обоснования и согласований. Нужно подать ходатайство в уполномоченный орган, провести экологическую экспертизу, получить согласования различных ведомств. Срок рассмотрения — до 2 месяцев. Отказ можно обжаловать в суде. Мы поможем подготовить документы, обосновать необходимость изменения категории и пройти все согласования."
      },
      {
        q: "Как расторгнуть договор аренды земельного участка досрочно?",
        a: "Расторжение возможно по соглашению сторон, по решению суда при нарушении условий договора арендатором или арендодателем, а также в одностороннем порядке при наличии оснований, предусмотренных законом или договором. Нужно направить уведомление, при необходимости — претензию, собрать доказательства нарушений. Если вторая сторона не согласна — обращаться в суд. Мы поможем правильно оформить расторжение и защитить Ваши интересы."
      },
      {
        q: "Могу ли я приватизировать земельный участок под домом?",
        a: "Да, если вы являетесь собственником расположенного на участке жилого дома или иного объекта недвижимости. Приватизация возможна бесплатно один раз. Нужно подать заявление в уполномоченный орган, приложить документы на дом и участок. Срок рассмотрения — до 30 дней. Отказ можно обжаловать. Мы поможем собрать документы, правильно оформить заявление и пройти процедуру приватизации."
      },
      {
        q: "Сколько времени занимает решение земельного спора и сколько это стоит?",
        a: "Сроки зависят от сложности дела: досудебное урегулирование — 1–2 месяца, судебное разбирательство — от 3 до 12 месяцев (иногда дольше при необходимости экспертиз). Стоимость зависит от объема работы: консультация, подготовка документов, представительство в суде. На первой консультации мы честно оценим перспективы, риски и бюджет. Расходы на юриста можно взыскать с проигравшей стороны."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/land-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LandLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Юрист по земельному праву в Челябинске — оформление участков, споры о границах, приватизация | Юридическая компания №1",
      ogTitle: "Юрист по земельному праву в Челябинске — оформление участков, споры о границах, приватизация | Юридическая компания №1",
      description: "Профессиональная помощь юриста по земельному праву в Челябинске. Оформление участков, споры о границах, приватизация, изъятие земельных участков, сопровождение сделок с недвижимостью, кадастровый учет, межевание. Более 10 лет опыта. Бесплатная консультация.",
      ogDescription: "Профессиональная помощь юриста по земельному праву в Челябинске. Оформление участков, споры о границах, приватизация, изъятие земельных участков, сопровождение сделок с недвижимостью, кадастровый учет, межевание. Более 10 лет опыта. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: "~/src/shared/assets/logo.png",
      ogImageAlt: "Юрист по земельному праву в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Юрист по земельному праву в Челябинске — оформление участков, споры о границах, приватизация",
      twitterDescription: "Профессиональная помощь юриста по земельному праву в Челябинске. Оформление участков, споры о границах, приватизация, изъятие земельных участков, сопровождение сделок с недвижимостью.",
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
          content: "юрист по земельному праву, земельный юрист Челябинск, оформление земельных участков, споры о границах участков, приватизация земельного участка, изъятие земельных участков, кадастровый учет, межевание участков, земельные споры, юрист по земельным вопросам, защита прав на землю, регистрация права собственности на землю, споры с соседями о границах, восстановление границ участка, сделки с земельными участками, земельное законодательство, кадастровый инженер, градостроительное право, компенсация при изъятии земли, оспаривание решений по земле, земельный адвокат Челябинск"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/land-law/ui/LandLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "land_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/land_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=land_law-DA5hRIge.mjs.map
