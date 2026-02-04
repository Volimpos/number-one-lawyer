import { defineComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
    const services = [
      {
        title: "Восстановление на работе",
        description: "Оспаривание незаконного увольнения, восстановление в должности с выплатой компенсации за вынужденный прогул и морального вреда."
      },
      {
        title: "Взыскание зарплаты",
        description: "Взыскание невыплаченной заработной платы, премии, компенсаций за задержку выплат, отпускных и других причитающихся выплат."
      },
      {
        title: "Защита при трудовых спорах",
        description: "Представление интересов в суде, переговоры с работодателем, составление претензий и исковых заявлений по трудовым вопросам."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-97396d62><div class="hero__inner" data-v-97396d62><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-97396d62><span class="max-lg:hidden" data-v-97396d62>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-97396d62>Отзывы клиентов</span><span class="hero__badge-btn" data-v-97396d62>Читать →</span></a><h1 class="hero__title" data-v-97396d62>Услуги юриста по трудовому праву в Челябинске</h1><p class="hero__subtitle" data-v-97396d62> Восстановление на работе, взыскание невыплаченной зарплаты, компенсации за незаконное увольнение и защита при спорах с работодателем. Опытные юристы по трудовому праву с успешной практикой более 10 лет. </p><div class="hero__actions" data-v-97396d62>`);
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
      _push(`</div><div class="hero__cards" data-v-97396d62><!--[-->`);
      ssrRenderList(services, (service, index) => {
        _push(`<div class="hero-card__item" data-v-97396d62><div class="hero-card__icon" data-v-97396d62>${ssrInterpolate(index + 1)}</div><div class="hero-card__title" data-v-97396d62>${ssrInterpolate(service.title)}</div><div class="hero-card__text" data-v-97396d62>${ssrInterpolate(service.description)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/labour-law/ui/sections/hero.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-97396d62"]]);
const photo = "" + __buildAssetsURL("auto_1.CdF-wZcZ.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "you-get-section",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Команду сильных юристов",
        description: "Если Вы находитесь под нашей защитой, значит мы бьемся за Вас всеми возможными способами. Вы ставите задачу, мы исполняем. Нас невозможно переманить, напугать или проигнорировать. Используем все средства."
      },
      {
        title: "Опыт более 10 лет в трудовых спорах",
        description: "Наша команда ведёт трудовые дела с 2013 года. Мы знаем, как работают суды по трудовым спорам, какие аргументы убеждают судей и как добиться максимального результата в Вашей ситуации."
      },
      {
        title: "Командный подход к каждому делу",
        description: "Ваше дело ведут несколько юристов: один готовит документы, другой ведёт переговоры, третий представляет в суде. Это позволяет учесть все детали и не упустить важные моменты."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/labour-law/ui/sections/you-get-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-28382ad7><div class="cases__inner" data-v-28382ad7>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-28382ad7${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-28382ad7${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-28382ad7${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-28382ad7>Успешные кейсы</h2><p class="cases__subtitle" data-v-28382ad7> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/labour-law/ui/sections/cases-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-28382ad7"]]);
const faqImage = "" + __buildAssetsURL("3.CSPVUKbh.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "faq-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        q: "Работодатель не выплачивает зарплату. Что делать?",
        a: "При задержке зарплаты более 15 дней Вы вправе приостановить работу (уведомив работодателя). Можно обратиться в трудовую инспекцию, прокуратуру или сразу в суд. Взыскивается не только задолженность, но и компенсация за задержку (не менее 1/150 ключевой ставки ЦБ за каждый день). Мы поможем правильно оформить претензию, собрать документы и взыскать все причитающиеся суммы, включая моральный вред."
      },
      {
        q: "Меня уволили незаконно. Можно ли восстановиться на работе?",
        a: "Да, если увольнение было без оснований или с нарушением процедуры. Нужно обратиться в суд в течение 1 месяца с даты увольнения. Восстановление возможно при нарушении порядка увольнения, отсутствии оснований, дискриминации. Восстанавливаем на работе + взыскиваем средний заработок за время вынужденного прогула + компенсацию морального вреда. Мы поможем оценить законность увольнения, собрать доказательства и защитить Ваши права в суде."
      },
      {
        q: "Работодатель заставляет работать сверхурочно без оплаты. Это законно?",
        a: "Нет. Сверхурочная работа оплачивается: первые 2 часа — не менее чем в полуторном размере, последующие — не менее чем в двойном. Работа в выходные/праздники — в двойном размере или предоставляется отгул. Сверхурочные возможны только с письменного согласия работника (кроме исключительных случаев). Можно отказаться, если это не предусмотрено трудовым договором. Мы поможем взыскать недоплаченные суммы и компенсацию."
      },
      {
        q: "Можно ли оспорить дисциплинарное взыскание или увольнение за прогул?",
        a: "Да. Взыскание можно обжаловать в комиссии по трудовым спорам или суде в течение 3 месяцев, увольнение — в течение 1 месяца. Важно проверить: соблюдена ли процедура (затребование объяснений, учтены ли причины отсутствия), есть ли основания (больничный, командировка, форс-мажор). Прогул — это отсутствие более 4 часов подряд без уважительных причин. Мы поможем оценить законность взыскания, собрать доказательства и отменить незаконное решение."
      },
      {
        q: "Работодатель не предоставляет отпуск или отзывает из отпуска. Что делать?",
        a: "Ежегодный оплачиваемый отпуск — гарантированное право. Отзыв из отпуска возможен только с согласия работника (кроме исключительных случаев). Неиспользованный отпуск компенсируется при увольнении. Если отпуск не предоставляется более 2 лет — это нарушение. Можно обратиться в трудовую инспекцию или суд. Мы поможем взыскать компенсацию за неиспользованный отпуск и моральный вред."
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/labour-law/ui/sections/faq-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LabourLawPage",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Юрист по трудовому праву в Челябинске — Восстановление на работе, взыскание зарплаты | Юридическая компания №1",
      ogTitle: "Юрист по трудовому праву в Челябинске — Восстановление на работе, взыскание зарплаты | Юридическая компания №1",
      description: "Профессиональный юрист по трудовому праву в Челябинске. Восстановление на работе после незаконного увольнения, взыскание невыплаченной зарплаты, компенсации за вынужденный прогул, защита при трудовых спорах. Опыт более 10 лет. Бесплатная консультация. Работаем по Челябинску и области.",
      ogDescription: "Профессиональный юрист по трудовому праву в Челябинске. Восстановление на работе после незаконного увольнения, взыскание невыплаченной зарплаты, компенсации за вынужденный прогул, защита при трудовых спорах. Опыт более 10 лет. Бесплатная консультация. Работаем по Челябинску и области.",
      keywords: "юрист по трудовому праву Челябинск, трудовые споры Челябинск, восстановление на работе, взыскание зарплаты, незаконное увольнение, компенсация за вынужденный прогул, трудовой юрист, защита прав работника, трудовое право Челябинск, юрист по трудовым спорам",
      ogImage: logoMain,
      twitterCard: "summary_large_image",
      ogSiteName: "Юридическая компания №1",
      ogType: "website",
      ogLocale: "ru_RU",
      robots: "index, follow",
      author: "Юридическая компания №1"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/spheres/labour-law/ui/LabourLawPage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labour_law",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/labour_law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=labour_law-C0Q9Jw0I.mjs.map
