import { defineComponent, unref, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { L as LeadButton } from './LeadButton-mXT9L9SS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { Y as YouGetSection, F as FaqSection } from './FaqSection-Dwgkjc4Q.mjs';
import { C as CasesSection$1 } from './CasesSection-DGfVuPId.mjs';
import { R as ReviewsSection, C as CtaSection } from './cta-section-B3LGuSVo.mjs';
import { l as logoMain } from './logo-COy-JwiO.mjs';
import { f as useSeoMeta } from './server.mjs';
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
        title: "Консультации",
        text: "Бесплатные первичные консультации по уголовным делам. Анализ ситуации, оценка перспектив дела, разработка стратегии защиты или защиты прав потерпевшего."
      },
      {
        title: "Сопровождение на допросах",
        text: "Присутствие адвоката на допросах в следственных органах. Защита от незаконных методов ведения допроса, контроль соблюдения прав, помощь в формулировке показаний."
      },
      {
        title: "Выезд в СИЗО",
        text: "Срочные и плановые встречи с подзащитными в следственных изоляторах. Консультации, подготовка к следственным действиям, обжалование меры пресечения."
      },
      {
        title: "Досудебное сопровождение",
        text: "Защита на стадии дознания и предварительного следствия. Участие в следственных действиях, обжалование незаконных решений следователя, сбор доказательств, ходатайства о прекращении дела или изменении меры пресечения."
      },
      {
        title: "Судебное сопровождение",
        text: "Полное ведение дела в суде: подготовка процессуальных документов, участие в заседаниях, защита интересов на всех стадиях уголовного процесса, обжалование приговоров."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-35a1e5ac><div class="hero__inner" data-v-35a1e5ac><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-35a1e5ac><span class="max-lg:hidden" data-v-35a1e5ac>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-35a1e5ac>Отзывы клиентов</span><span class="hero__badge-btn" data-v-35a1e5ac>Читать →</span></a><h1 class="hero__title" data-v-35a1e5ac> Команда адвокатов Челябинска по уголовным делам </h1><p class="hero__subtitle" data-v-35a1e5ac> Профессиональная защита обвиняемых и восстановление прав потерпевших. Специализация: дела по наркотикам, финансовым преступлениям, хищению. Опыт ведения сложных дел, судебное и досудебное сопровождение. </p><div class="hero__actions" data-v-35a1e5ac>`);
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
      _push(`</div><div class="hero__cards" data-v-35a1e5ac><!--[-->`);
      ssrRenderList(heroCards, (card, index) => {
        _push(`<div class="${ssrRenderClass([{
          "hero-card__item--right-aligned": index === heroCards.length - 1 && heroCards.length % 3 !== 0
        }, "hero-card__item"])}" data-v-35a1e5ac><div class="hero-card__icon" data-v-35a1e5ac>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-35a1e5ac>${ssrInterpolate(card.title)}</div><div class="hero-card__text" data-v-35a1e5ac>${ssrInterpolate(card.text)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/criminal-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-35a1e5ac"]]);
const photo = "" + __buildAssetsURL("criminal_1.lkOo-ty7.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Круглосуточную защиту и оперативную помощь",
        description: "Уголовное дело не ждёт. Мы доступны 24/7 для срочных вызовов в СИЗО, на допросы и следственные действия. Выезжаем в любое время суток, когда Вам нужна защита. Понимаем, что каждая минута может быть решающей."
      },
      {
        title: "Опыт ведения сложных уголовных дел",
        description: "Более 10 лет защищаем по делам о наркотиках, финансовых преступлениях, хищениях и других категориях. Знаем все нюансы уголовного процесса, работаем с лучшими экспертами и используем проверенные стратегии защиты. Наша статистика оправдательных приговоров и прекращённых дел говорит сама за себя."
      },
      {
        title: "Полное сопровождение на всех стадиях",
        description: "От первой консультации до обжалования приговора — мы с Вами на каждом этапе. Участвуем в допросах, следственных действиях, судебных заседаниях. Готовим все процессуальные документы, собираем доказательства, обжалуем незаконные решения. Вы не останетесь один на один с системой."
      },
      {
        title: "Конфиденциальность и понимание",
        description: "Мы понимаем, насколько сложна Ваша ситуация. Гарантируем полную конфиденциальность и тактичное отношение. Объясняем каждый шаг простым языком, держим в курсе всех событий по делу. Вы всегда знаете, что происходит и какие у Вас перспективы."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/criminal-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-683b3a44><div class="cases__inner" data-v-683b3a44>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-683b3a44${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-683b3a44${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-683b3a44${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-683b3a44>Успешные кейсы</h2><p class="cases__subtitle" data-v-683b3a44> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/criminal-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-683b3a44"]]);
const faqImage = "" + __buildAssetsURL("criminal_2.B2-QvILP.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Что делать, если меня задержали полиция?",
        a: "Сохраняйте спокойствие. Вы имеете право на адвоката с момента задержания. Не давайте показания без адвоката, не подписывайте документы без их изучения. Задержание не должно превышать 48 часов. Немедленно звоните нам — мы поможем защитить Ваши права, проверить законность задержания и выбрать правильную стратегию защиты."
      },
      {
        q: "Что делать, если мне предъявили обвинение?",
        a: "Не паникуйте. Обвинение — это не приговор. Звоните. Мы изучим материалы дела, проверим законность предъявления обвинения, соберём доказательства невиновности или смягчающие обстоятельства. Важно правильно действовать на стадии предварительного расследования. Чем раньше подключимся — тем больше возможностей для защиты."
      },
      {
        q: "Как вести себя на допросе?",
        a: "Вы имеете право на адвоката — используйте его. Не давайте показания без адвоката, даже если полностью уверены в своей невиновности. 51 статья Конституции РФ позволяет Вам не давать никаких показаний против себя."
      },
      {
        q: "Можно ли обжаловать приговор и в какие сроки?",
        a: "Да. Обжалование возможно в апелляции (30 дней), кассации (1 год) и надзоре. Важно не пропустить сроки. Основания: нарушения процессуального права, неправильная оценка доказательств, несоответствие приговора обстоятельствам дела, неправильное применение закона. Мы подготовим жалобу, соберём дополнительные доказательства и защитим Ваши права в вышестоящих инстанциях."
      },
      {
        q: "Что делать при обыске в квартире или офисе?",
        a: "Проверьте наличие постановления суда об обыске. Вы вправе присутствовать при обыске, требовать понятых, фиксировать нарушения. Не препятствуйте, но фиксируйте все действия. Немедленно вызовите адвоката — мы поможем защитить права, зафиксировать нарушения и обжаловать незаконные действия. Изъятые предметы должны быть описаны в протоколе."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/criminal-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CriminalLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Адвокат по уголовным делам в Челябинске — Защита в суде, на следствии, обжалование приговора | Юридическая компания №1",
      ogTitle: "Адвокат по уголовным делам в Челябинске — Защита в суде, на следствии, обжалование приговора | Юридическая компания №1",
      description: "Профессиональный адвокат по уголовным делам в Челябинске. Защита на следствии и в суде, обжалование приговоров, консультации по уголовным делам. Опыт более 10 лет, выигранные дела, положительные отзывы. Работаем 24/7. Бесплатная первичная консультация. Защита по ст. 158, 159, 228, 105, 111 УК РФ и другим статьям.",
      ogDescription: "Профессиональный адвокат по уголовным делам в Челябинске. Защита на следствии и в суде, обжалование приговоров, консультации по уголовным делам. Опыт более 10 лет, выигранные дела, положительные отзывы. Работаем 24/7. Бесплатная первичная консультация. Защита по ст. 158, 159, 228, 105, 111 УК РФ и другим статьям.",
      keywords: "адвокат по уголовным делам Челябинск, уголовный адвокат Челябинск, защита по уголовным делам, уголовный юрист Челябинск, адвокат уголовное право, защита в суде Челябинск, защита на следствии, обжалование приговора, адвокат по краже, адвокат по мошенничеству, адвокат по наркотикам, адвокат по убийству, уголовный защитник, консультация адвоката уголовное право, лучший адвокат по уголовным делам Челябинск",
      ogImage: logoMain,
      twitterCard: "summary_large_image",
      ogSiteName: "Юридическая компания №1",
      ogType: "website",
      ogLocale: "ru_RU",
      robots: "index, follow",
      author: "Юридическая компания №1"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/criminal-law/ui/CriminalLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "criminal_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/criminal_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=criminal_law-CYjbt8PT.mjs.map
