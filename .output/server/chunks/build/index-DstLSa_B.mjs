import { defineComponent, unref, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { L as LeadButton } from './LeadButton-mXT9L9SS.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { C as CasesSection$1 } from './CasesSection-DGfVuPId.mjs';
import { R as ReviewsSection, C as CtaSection } from './cta-section-B3LGuSVo.mjs';
import { s as spheres } from './store-Bp-IcVUU.mjs';
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

const _imports_0 = "" + __buildAssetsURL("3.CSPVUKbh.webp");
const _imports_1 = "" + __buildAssetsURL("lawyer_2.GUXmnPG_.webp");
const _imports_2 = "" + __buildAssetsURL("5.CeILVkFX.webp");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-5ada3fb4><div class="hero__inner" data-v-5ada3fb4><a href="https://go.2gis.com/XAbrT" target="_blank" class="hero__badge" data-v-5ada3fb4><span class="max-lg:hidden" data-v-5ada3fb4>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-5ada3fb4>Отзывы клиентов</span><span class="hero__badge-btn" data-v-5ada3fb4>Читать →</span></a><h1 class="hero__title" data-v-5ada3fb4> Работаем, чтобы сохранить Ваше время, деньги и нервы </h1><p class="hero__subtitle" data-v-5ada3fb4> Доверьте решение своего вопроса профессионалам. Мы гарантируем индивидуальный подход к каждому делу, абсолютную конфиденциальность и прозрачность на всех этапах работы. </p><div class="hero__actions" data-v-5ada3fb4>`);
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
      _push(`</div><div class="hero__cards" data-v-5ada3fb4><img class="hero-card__image max-lg:hidden"${ssrRenderAttr("src", _imports_0)} alt="Юрист консультирует клиента" data-v-5ada3fb4><img class="hero-card__image"${ssrRenderAttr("src", _imports_1)} alt="Юрист за рабочим столом" data-v-5ada3fb4><img class="hero-card__image max-lg:hidden"${ssrRenderAttr("src", _imports_2)} alt="Юрист изучает документы" data-v-5ada3fb4></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5ada3fb4"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-0c4657ea><div class="cases__inner" data-v-0c4657ea>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-0c4657ea${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-0c4657ea${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-0c4657ea${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-0c4657ea>Успешные кейсы</h2><p class="cases__subtitle" data-v-0c4657ea> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p>`);
      _push(ssrRenderComponent(unref(CasesSection$1), { class: "mt-8 max-lg:mt-2" }, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/cases-section.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0c4657ea"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "stats-section",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      {
        title: "20 000 +",
        description: "Консультаций проведено"
      },
      {
        title: "96%",
        description: "Побед в судебных процессах"
      },
      {
        title: "210 млн. ₽",
        description: "Выбили для клиентов"
      },
      {
        title: "4 000 +",
        description: "Дел в работе сейчас"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "stats-section" }, _attrs))} data-v-17556909><div data-v-17556909><h2 class="stats-section__title" data-v-17556909>Наши успехи</h2><p class="stats-section__subtitle" data-v-17556909> Мы очень давно помогаем людям сохранять деньги и другие активы. Если все достижения посчитать математически, то получается следующее. </p></div><div class="stats-section__grid" data-v-17556909><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="stats-section__item" data-v-17556909><h3 class="stats-section__item-title" data-v-17556909>${ssrInterpolate(stat.title)}</h3><p class="stats-section__item-description" data-v-17556909>${ssrInterpolate(stat.description)}</p></div>`);
      });
      _push(`<!--]--></div></article>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/stats-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const StatsSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-17556909"]]);
const mayTrust1 = "" + __buildAssetsURL("may-trust_1.B4p6QR3H.webp");
const mayTrust2 = "" + __buildAssetsURL("may-trust_2.C23kzX7u.webp");
const mayTrust3 = "" + __buildAssetsURL("may-trust_3.CEYuiSbi.webp");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "may-trust-section",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Умеем хранить секреты",
        description: "Ваши персональные данные и подробности дела не доступны никому кроме того юриста, с которым Вы сотрудничаете. Ваша конфиденциальная информация будет использована только на благо дела и только в необходимом объеме.",
        image: mayTrust1
      },
      {
        title: "Надежны как швейцарские часы",
        description: "Придерживаемся намеченных договоренностей. Идем до конца и прикладываем все возможные усилия чтобы решить Вашу проблему. Поможем Вам выйти из любой ситуации с победой, либо минимальными потерями. Если не уверены, то откажем в сопровождении.",
        image: mayTrust2
      },
      {
        title: "Забота и человечный подход",
        description: "Умеем объяснять сложные правовые категории простым языком, без лишних терминов. Если у Вас возникают вопросы относительно того, что делает юрист или на какой стадии дело, Вы всегда можете связаться, уточнить и мы с удовольствием ответим на все вопросы.",
        image: mayTrust3
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "may-trust-section" }, _attrs))} data-v-bd15a40b><div data-v-bd15a40b><h2 class="may-trust-section__title" data-v-bd15a40b>Почему нам стоит доверять</h2><p class="may-trust-section__subtitle" data-v-bd15a40b> Наша юридическая деятельность основана на опыте, ответственности и внимании к деталям, которые напрямую влияют на результат для клиента. </p></div><div class="may-trust-section__grid" data-v-bd15a40b><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(`<div class="may-trust-section__item" data-v-bd15a40b><div class="may-trust-section__item-image-container" data-v-bd15a40b><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.title)} class="may-trust-section__item-image" data-v-bd15a40b></div><div class="may-trust-section__item-text" data-v-bd15a40b><h3 class="may-trust-section__item-title" data-v-bd15a40b>${ssrInterpolate(item.title)}</h3><p class="may-trust-section__item-description" data-v-bd15a40b>${ssrInterpolate(item.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></article>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/may-trust-section.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MayTrustSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bd15a40b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "law-spheres",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "law-sphere-section" }, _attrs))} data-v-bb890119><div data-v-bb890119><h2 class="law-sphere-section__title" data-v-bb890119> Сферы права, с которыми мы работаем </h2></div><div class="law-sphere-section__grid" data-v-bb890119><!--[-->`);
      ssrRenderList(unref(spheres), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          key: item.label,
          class: "law-sphere-section__item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="law-sphere-section__item-title" data-v-bb890119${_scopeId}>${ssrInterpolate(item.label)}</p><div class="arrow-icon" data-v-bb890119${_scopeId}><svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bb890119${_scopeId}><line x1="138.496" y1="101" x2="138.496" y2="1" stroke="inherit" data-v-bb890119${_scopeId}></line><line x1="38.9961" y1="0.5" x2="138.996" y2="0.5" stroke="inherit" data-v-bb890119${_scopeId}></line><line x1="0.353478" y1="138.646" x2="138.353" y2="0.646451" stroke="inherit" data-v-bb890119${_scopeId}></line></svg></div>`);
            } else {
              return [
                createVNode("p", { class: "law-sphere-section__item-title" }, toDisplayString(item.label), 1),
                createVNode("div", { class: "arrow-icon" }, [
                  (openBlock(), createBlock("svg", {
                    width: "139",
                    height: "139",
                    viewBox: "0 0 139 139",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("line", {
                      x1: "138.496",
                      y1: "101",
                      x2: "138.496",
                      y2: "1",
                      stroke: "inherit"
                    }),
                    createVNode("line", {
                      x1: "38.9961",
                      y1: "0.5",
                      x2: "138.996",
                      y2: "0.5",
                      stroke: "inherit"
                    }),
                    createVNode("line", {
                      x1: "0.353478",
                      y1: "138.646",
                      x2: "138.353",
                      y2: "0.646451",
                      stroke: "inherit"
                    })
                  ]))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/law-spheres.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LawSpheres = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bb890119"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Бесплатная консультация юриста в Челябинске | Юридическая компания №1",
      ogTitle: "Бесплатная консультация юриста в Челябинске | Юридическая компания №1",
      description: "Юридическая компания №1 в Челябинске — профессиональная помощь юристов и адвокатов. Консультации, защита в суде, сопровождение бизнеса, гражданские и арбитражные споры. Работаем по Челябинску и области.",
      ogDescription: "Юридическая компания №1 в Челябинске — профессиональная помощь юристов и адвокатов. Консультации, защита в суде, сопровождение бизнеса, гражданские и арбитражные споры. Работаем по Челябинску и области.",
      ogImage: logoMain,
      twitterCard: "summary_large_image",
      ogSiteName: "Юридическая компания №1"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(CasesSection, null, null, _parent));
      _push(ssrRenderComponent(unref(ReviewsSection), null, null, _parent));
      _push(ssrRenderComponent(StatsSection, null, null, _parent));
      _push(ssrRenderComponent(MayTrustSection, null, null, _parent));
      _push(ssrRenderComponent(LawSpheres, null, null, _parent));
      _push(ssrRenderComponent(unref(CtaSection), null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app/routes/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DstLSa_B.mjs.map
