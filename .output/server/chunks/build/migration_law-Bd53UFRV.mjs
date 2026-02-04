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
    const heroCards = [
      {
        title: "РВП, ВНЖ, гражданство РФ",
        text: "Проверим основания, подготовим пакет документов, запишем и сопроводим по этапам — чтобы снизить риск отказа."
      },
      {
        title: "Запрет на въезд и отказ",
        text: "Разберём причину, подготовим обращения и жалобы, при необходимости — иск в суд. Поможем восстановить право на въезд."
      },
      {
        title: "Выдворение/депортация",
        text: "Оценим риски, соберём доказательства и защитим в споре с МВД и в суде. Работаем быстро в срочных ситуациях."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-8d99fa78><div class="hero__inner" data-v-8d99fa78><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-8d99fa78><span class="max-lg:hidden" data-v-8d99fa78>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-8d99fa78>Отзывы клиентов</span><span class="hero__badge-btn" data-v-8d99fa78>Читать →</span></a><h1 class="hero__title" data-v-8d99fa78> РВП, ВНЖ, гражданство РФ — юрист по миграционному праву в Челябинске </h1><p class="hero__subtitle" data-v-8d99fa78> Помогаем законно оформить РВП, ВНЖ и гражданство РФ, подготовить документы и пройти процедуры без лишних отказов и затягиваний. Защищаем при выдворении/депортации, запрете на въезд и в спорах с МВД. Работаем по Челябинску и области. </p><div class="hero__actions" data-v-8d99fa78>`);
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
      _push(`</div><div class="hero__cards" data-v-8d99fa78><!--[-->`);
      ssrRenderList(heroCards, (card, idx) => {
        _push(`<div class="hero-card__item" data-v-8d99fa78><div class="hero-card__icon" data-v-8d99fa78>${ssrInterpolate(idx + 1)}</div><div class="hero-card__title" data-v-8d99fa78>${ssrInterpolate(card.title)}</div><div class="hero-card__text" data-v-8d99fa78>${ssrInterpolate(card.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/migration-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8d99fa78"]]);
const photo = "" + __buildAssetsURL("migr_1.vy8KV5qx.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Проверку оснований и рисков до начала",
        description: "Разбираем Вашу ситуацию, проверяем документы и основания под РВП/ВНЖ/гражданство. Объясняем простым языком, где могут «завернуть» и что нужно исправить до подачи — чтобы снизить риск отказа и лишних расходов."
      },
      {
        title: "Готовый пакет документов для подачи",
        description: "Собираем список документов под Ваш кейс, подготавливаем заявления, проверяем формулировки и соответствие требованиям. Перед подачей согласуем всё с вами и выдаём копии — вы понимаете, что именно подано и почему."
      },
      {
        title: "Сопровождение по этапам и контроль сроков",
        description: "Помогаем записаться и подготовиться к приёму, подсказываем по оплатам/квитанциям и требованиям к документам. Держим в курсе статуса, сроков и следующих шагов — без потери времени и «хождения по кругу»."
      },
      {
        title: "Защиту при отказах, запрете на въезд, выдворении",
        description: "Если возникла проблема — готовим обращения и жалобы, при необходимости — иск и представительство в суде. Действуем оперативно в срочных ситуациях и фиксируем позицию документально."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/migration-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-eb98f8b1><div class="cases__inner" data-v-eb98f8b1>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-eb98f8b1${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-eb98f8b1${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-eb98f8b1${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-eb98f8b1>Успешные кейсы</h2><p class="cases__subtitle" data-v-eb98f8b1> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/migration-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-eb98f8b1"]]);
const faqImage = "" + __buildAssetsURL("migr_2.Ce65Wjwc.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "С чего начать оформление РВП/ВНЖ в Челябинске?",
        a: "Сначала определяем основание (семья, работа, учёба и т.д.), затем собираем пакет документов и корректно заполняем заявления. На консультации проверим Ваши документы, оценим риски отказа и составим понятный план действий под Вашу ситуацию."
      },
      {
        q: "Какие самые частые причины отказа в РВП/ВНЖ/гражданстве?",
        a: "Обычно это ошибки/несоответствия в документах, неполные сведения, нарушения миграционного режима или основания, которые не подтверждены. Мы заранее проводим правовую проверку и готовим документы так, чтобы минимизировать риск отказа."
      },
      {
        q: "Что делать, если уже пришёл отказ или уведомление об аннулировании?",
        a: "Важно действовать быстро: собрать материалы, оценить основание решения и выбрать способ защиты (жалоба, заявление, суд — зависит от ситуации). Мы подготовим правовую позицию, документы и представим Ваши интересы в уполномоченных органах и суде."
      },
      {
        q: "Можно ли снять запрет на въезд?",
        a: "Иногда — да, если есть основания и доказательства (ошибка, несоразмерность, семейные обстоятельства и др.). Мы запрашиваем информацию по основаниям ограничения, готовим обращения и при необходимости оспариваем решения в суде."
      },
      {
        q: "Что грозит за нарушение миграционного учёта/регистрации?",
        a: "Возможны штрафы и дополнительные меры, вплоть до выдворения — всё зависит от обстоятельств и состава нарушения. Мы разберём Вашу ситуацию, подготовим объяснения/ходатайства и выстроим стратегию защиты."
      },
      {
        q: "Патент, разрешение на работу, трудовой договор — что подходит именно мне?",
        a: "Выбор зависит от статуса, гражданства, региона и Ваших планов (в том числе РВП/ВНЖ). Подскажем оптимальный вариант, проверим документы и поможем избежать ошибок, из-за которых потом возникают штрафы или отказ в продлении."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/migration-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MigrationLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Юрист по миграционному праву в Челябинске — РВП, ВНЖ, гражданство РФ | Юридическая компания №1",
      ogTitle: "Юрист по миграционному праву в Челябинске — РВП, ВНЖ, гражданство РФ | Юридическая компания №1",
      description: "Юрист по миграционному праву в Челябинске. Помощь в оформлении РВП, ВНЖ и гражданства РФ. Защита при выдворении, депортации и запрете на въезд. Подготовка документов, сопровождение в МВД и суде. Работаем по Челябинску и области. Бесплатная консультация.",
      ogDescription: "Юрист по миграционному праву в Челябинске. Помощь в оформлении РВП, ВНЖ и гражданства РФ. Защита при выдворении, депортации и запрете на въезд. Подготовка документов, сопровождение в МВД и суде. Работаем по Челябинску и области. Бесплатная консультация.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: logoMain,
      ogImageAlt: "Юрист по миграционному праву в Челябинске — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Юрист по миграционному праву в Челябинске — РВП, ВНЖ, гражданство РФ",
      twitterDescription: "Помощь в оформлении РВП, ВНЖ и гражданства РФ. Защита при выдворении, депортации и запрете на въезд. Бесплатная консультация.",
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
          content: "миграционный юрист Челябинск, юрист по миграционному праву, РВП Челябинск, ВНЖ Челябинск, гражданство РФ Челябинск, оформление РВП, оформление ВНЖ, получение гражданства РФ, запрет на въезд, выдворение из России, депортация, миграционный адвокат Челябинск, помощь мигрантам Челябинск, миграционные услуги Челябинская область, разрешение на временное проживание, вид на жительство, получение гражданства России, защита мигрантов, споры с МВД, миграционное право"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/migration-law/ui/MigrationLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "migration_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/migration_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=migration_law-Bd53UFRV.mjs.map
