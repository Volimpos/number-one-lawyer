import { defineComponent, unref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-BbuLapqa.mjs';
import { L as LeadButton } from './LeadButton-RYE7CunC.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useSeoMeta } from './composables-CsdJQN6W.mjs';
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
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styled';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _imports_0$1 = "" + __buildAssetsURL("lawyer_1.CSPVUKbh.webp");
const _imports_1 = "" + __buildAssetsURL("lawyer_2.B-2Y_Isd.webp");
const _imports_2 = "" + __buildAssetsURL("lawyer_3.CeILVkFX.webp");
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-28566339><div class="hero__inner" data-v-28566339>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/reviews",
        class: "hero__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="max-lg:hidden" data-v-28566339${_scopeId}>Реальные отзывы в независимых источниках.</span><span class="lg:hidden" data-v-28566339${_scopeId}>Больше отзывов</span><span class="hero__badge-btn" data-v-28566339${_scopeId}>Читать →</span>`);
          } else {
            return [
              createVNode("span", { class: "max-lg:hidden" }, "Реальные отзывы в независимых источниках."),
              createVNode("span", { class: "lg:hidden" }, "Больше отзывов"),
              createVNode("span", { class: "hero__badge-btn" }, "Читать →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h1 class="hero__title" data-v-28566339> Работаем, чтобы сохранить Ваше время, деньги и нервы </h1><p class="hero__subtitle" data-v-28566339> Доверьте решение своего вопроса профессионалам. Мы гарантируем индивидуальный подход к каждому делу, абсолютную конфиденциальность и прозрачность на всех этапах работы. </p><div class="hero__actions" data-v-28566339>`);
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
      _push(`</div><div class="hero__cards" data-v-28566339><img class="hero-card__image max-lg:hidden"${ssrRenderAttr("src", _imports_0$1)} alt="Юрист консультирует клиента" data-v-28566339><img class="hero-card__image"${ssrRenderAttr("src", _imports_1)} alt="Юрист за рабочим столом" data-v-28566339><img class="hero-card__image max-lg:hidden"${ssrRenderAttr("src", _imports_2)} alt="Юрист изучает документы" data-v-28566339></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/hero.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-28566339"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CaseCard",
  __ssrInlineRender: true,
  props: {
    image: {},
    date: {},
    sphere: {},
    title: {},
    description: {},
    link: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "case-card" }, _attrs))} data-v-dab6c278><img${ssrRenderAttr("src", props.image)}${ssrRenderAttr("alt", props.title)} class="case-image" data-v-dab6c278><div class="service-info" data-v-dab6c278><p class="date" data-v-dab6c278>${ssrInterpolate(props.date)}</p><p class="sphere" data-v-dab6c278>${ssrInterpolate(props.sphere)}</p></div><div data-v-dab6c278><p class="case-title" data-v-dab6c278>${ssrInterpolate(props.title)}</p><p class="case-description" data-v-dab6c278>${ssrInterpolate(props.description)}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.link,
        class: "case-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Смотреть <i class="pi pi-arrow-right" data-v-dab6c278${_scopeId}></i>`);
          } else {
            return [
              createTextVNode(" Смотреть "),
              createVNode("i", { class: "pi pi-arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/case-card/CaseCard.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const CaseCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-dab6c278"]]);
const case1Image = "" + __buildAssetsURL("case_1.DL0TdxZ-.jpg");
const case2Image = "" + __buildAssetsURL("case_2.ywV9Ij7P.jpg");
const case3Image = "" + __buildAssetsURL("case_3.CKbEuPOh.jpg");
const case4Image = "" + __buildAssetsURL("case_4.BvXofBfs.jpg");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "cases-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "cases" }, _attrs))} data-v-9fe0c2cf><div class="cases__inner" data-v-9fe0c2cf>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog/cases",
        class: "cases__badge"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-9fe0c2cf${_scopeId}>Больше кейсов <span class="max-lg:hidden" data-v-9fe0c2cf${_scopeId}>в нашем блоге.</span></span><span class="cases__badge-btn" data-v-9fe0c2cf${_scopeId}>Смотреть →</span>`);
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
      _push(`<h2 class="cases__title" data-v-9fe0c2cf>Успешные кейсы</h2><p class="cases__subtitle" data-v-9fe0c2cf> За время работы мы сопровождали большое количество дел в разных отраслях права. Делимся интересными примерами. </p><div class="cases__grid" data-v-9fe0c2cf>`);
      _push(ssrRenderComponent(unref(CaseCard), {
        image: unref(case1Image),
        date: "16 марта 2028г.",
        sphere: "Миграционное право",
        title: "Оспорили выдворение иностранного гражданина",
        description: "Гражданин Узбекистана Равшан В. был остановлен сотрудниками полиции для проверки документов. Оказалось, что у него истёк срок предельного пребывания в России. В судебном порядке удалось доказать законность его пребывания.",
        link: "/cases/1"
      }, null, _parent));
      _push(ssrRenderComponent(unref(CaseCard), {
        image: unref(case2Image),
        date: "9 февраля 2025г.",
        sphere: "Права потребителей",
        title: "Вернули деньги за билет в автобусе",
        description: "Пенсионерка Галина К. оплатила проезд в автобусе, однако кондуктор отказался выдать билет. После обращения в суд нам удалось взыскать с перевозчика стоимость билета и компенсацию морального вреда.",
        link: "/cases/2"
      }, null, _parent));
      _push(ssrRenderComponent(unref(CaseCard), {
        image: unref(case3Image),
        date: "21 августа 2024г.",
        sphere: "Трудовое право",
        title: "Взыскали зарплату и неустойку за вынужденный простой",
        description: "Сотрудник был незаконно отстранён от работы и более трёх месяцев не получал заработную плату. В результате судебного разбирательства мы взыскали всю задолженность и неустойку.",
        link: "/cases/3"
      }, null, _parent));
      _push(ssrRenderComponent(unref(CaseCard), {
        image: unref(case4Image),
        date: "22 ноюля 5509г.",
        sphere: "Наследство",
        title: "Взыскали моральный вред с робота",
        description: "Робот был незаконно уничтожен. В результате судебного разбирательства мы взыскали моральный вред и возмещение ущерба. Ему было неприятно видеть, как его друг и создатель уничтожают его.",
        link: "/cases/4"
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/cases-section.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const CasesSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9fe0c2cf"]]);
const hslToHex = (h, s, l) => {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(h / 60 % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  const toHex = (value) => Math.round((value + m) * 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
const randomColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 35 + Math.random() * 25;
  const lightness = 20 + Math.random() * 15;
  return hslToHex(hue, saturation, lightness);
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ReviewCard",
  __ssrInlineRender: true,
  props: {
    text: {},
    name: {},
    initials: {},
    rating: { default: 5 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "review-card" }, _attrs))} data-v-3544a04c><p class="review-card__text" data-v-3544a04c>${ssrInterpolate(props.text)}</p><div class="review-card__footer" data-v-3544a04c><div class="review-card__avatar" style="${ssrRenderStyle(`background-color: ${unref(randomColor)()}`)}" data-v-3544a04c><span data-v-3544a04c>${ssrInterpolate(props.initials)}</span></div><div class="review-card__info" data-v-3544a04c><p class="review-card__name" data-v-3544a04c>${ssrInterpolate(props.name)}</p><div class="review-card__rating" data-v-3544a04c><!--[-->`);
      ssrRenderList(5, (star) => {
        _push(`<span class="${ssrRenderClass([{ "review-card__star--filled": star <= props.rating }, "review-card__star"])}" data-v-3544a04c> ★ </span>`);
      });
      _push(`<!--]--></div></div></div></article>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/review-card/ReviewCard.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ReviewCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-3544a04c"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "reviews-section",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        text: "Отличная работа! Спасибо за подробные консультации, внимательное отношение и реальную помощь в решении моего вопроса от первого обращения и до окончательного результата.",
        name: "Иван Иванов",
        initials: "ИВ",
        rating: 5
      },
      {
        text: "Грамотный и внимательный юрист: подробно разъяснил все нюансы моего дела, предложил несколько вариантов стратегии, подготовил все документы и в итоге помог успешно выиграть дело в суде.",
        name: "Мария Петрова",
        initials: "МП",
        rating: 5
      },
      {
        text: "Очень внимательный и человеческий подход к клиенту: быстро подготовили все необходимые документы, объяснили каждый шаг простым и понятным языком и сопровождали меня до самого завершения дела.",
        name: "Алексей Смирнов",
        initials: "АС",
        rating: 5
      },
      {
        text: "Профессионально, честно и без лишних обещаний: сразу обозначили реальные перспективы, не завышали ожидания и при этом добились результата, который в итоге даже превзошёл мои первоначальные ожидания.",
        name: "Ольга Кузнецова",
        initials: "ОК",
        rating: 5
      },
      {
        text: "Помогли разобраться в сложной ситуации, где другие специалисты только разводили руками: детально изучили документы, нашли важные детали, предложили нестандартное решение и довели дело до положительного исхода. Настоящий профессионал своего дела.",
        name: "Дмитрий Соколов",
        initials: "ДС",
        rating: 5
      },
      {
        text: "Всегда на связи, отвечает на вопросы без задержек, объясняет сложные юридические моменты простым и понятным языком и на практике доказывает, что действительно защищает интересы клиента, а не просто ведёт дело формально.",
        name: "Екатерина Морозова",
        initials: "ЕМ",
        rating: 5
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "reviews-section" }, _attrs))} data-v-f8308891><a href="https://go.2gis.com/XAbrT" target="_blank" class="badge" data-v-f8308891><span data-v-f8308891>Отзывы в 2ГИС.</span><span class="badge-btn" data-v-f8308891>Изучить →</span></a><div data-v-f8308891><h2 class="reviews-section__title" data-v-f8308891>Обратная связь</h2><p class="reviews-section__subtitle" data-v-f8308891> Мы можем много рассказывать о себе, но еще лучше это сделают наши любимые клиенты. Показываем без лишней скромности. </p></div><div class="reviews-section__grid" data-v-f8308891><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(ssrRenderComponent(unref(ReviewCard), {
          key: review.name,
          text: review.text,
          name: review.name,
          initials: review.initials,
          rating: review.rating
        }, null, _parent));
      });
      _push(`<!--]--></div></article>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/reviews-section.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ReviewsSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-f8308891"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/stats-section.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const StatsSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-17556909"]]);
const mayTrust1 = "" + __buildAssetsURL("may-trust_1.CvQ1m6Z9.webp");
const mayTrust2 = "" + __buildAssetsURL("may-trust_2.D9LZks04.webp");
const mayTrust3 = "" + __buildAssetsURL("may-trust_3.sUqCyvHz.webp");
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/may-trust-section.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const MayTrustSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-bd15a40b"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "law-spheres",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      {
        title: "Защита прав потребителей",
        link: "/consumer-protection"
      },
      {
        title: "Автоюрист",
        link: "/autolawyer"
      },
      {
        title: "Семейное право",
        link: "/family-law"
      },
      {
        title: "Уголовное право",
        link: "/criminal-law"
      },
      {
        title: "Миграционное право",
        link: "/migration-law"
      },
      {
        title: "Трудовое право",
        link: "/labor-law"
      },
      {
        title: "Жилищное право",
        link: "/housing-law"
      },
      {
        title: "Наследство",
        link: "/inheritance-law"
      },
      {
        title: "Земельное право",
        link: "/land-law"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "law-sphere-section" }, _attrs))} data-v-317a621c><div data-v-317a621c><h2 class="law-sphere-section__title" data-v-317a621c> Сферы права, с которыми мы работаем </h2></div><div class="law-sphere-section__grid" data-v-317a621c><!--[-->`);
      ssrRenderList(items, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: item.link,
          key: item.title,
          class: "law-sphere-section__item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="law-sphere-section__item-title" data-v-317a621c${_scopeId}>${ssrInterpolate(item.title)}</p><div class="arrow-icon" data-v-317a621c${_scopeId}><svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-317a621c${_scopeId}><line x1="138.496" y1="101" x2="138.496" y2="1" stroke="inherit" data-v-317a621c${_scopeId}></line><line x1="38.9961" y1="0.5" x2="138.996" y2="0.5" stroke="inherit" data-v-317a621c${_scopeId}></line><line x1="0.353478" y1="138.646" x2="138.353" y2="0.646451" stroke="inherit" data-v-317a621c${_scopeId}></line></svg></div>`);
            } else {
              return [
                createVNode("p", { class: "law-sphere-section__item-title" }, toDisplayString(item.title), 1),
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/home/ui/sections/law-spheres.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LawSpheres = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-317a621c"]]);
const _imports_0 = "" + __buildAssetsURL("cta.h_XmBcMR.webp");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "cta-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))} data-v-508db5bd><div class="cta-section__inner" data-v-508db5bd><div class="text-block" data-v-508db5bd><h3 class="cta-section__title" data-v-508db5bd>За советы денег не берем!</h3><p class="cta-section__description" data-v-508db5bd> Получите бесплатную консультацию по Вашему вопросу прямо сейчас. Ни одна нейросеть не заменит точный, профессиональный совет знающего специалиста. Доверьте решение своего вопроса Юристу №1 в Челябинске и мы Вас не подведем. </p>`);
      _push(ssrRenderComponent(unref(LeadButton), null, null, _parent));
      _push(`</div><div class="image-block" data-v-508db5bd><img${ssrRenderAttr("src", _imports_0)} alt="Юрист консультирует клиента" data-v-508db5bd></div></div></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/widgets/cta-section/ui/cta-section.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CtaSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-508db5bd"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Бесплатная консультация юриста в Челябинске | Юридическая компания №1",
      ogTitle: "Бесплатная консультация юриста в Челябинске | Юридическая компания №1",
      description: "Юридическая компания №1 в Челябинске — профессиональная помощь юристов и адвокатов. Консультации, защита в суде, сопровождение бизнеса, гражданские и арбитражные споры. Работаем по Челябинску и области.",
      ogDescription: "Юридическая компания №1 в Челябинске — профессиональная помощь юристов и адвокатов. Консультации, защита в суде, сопровождение бизнеса, гражданские и арбитражные споры. Работаем по Челябинску и области.",
      ogImage: "https://s3.ru1.storage.beget.cloud/a9fd9a74202c-volimpos/taole/taole-logo.jpg",
      twitterCard: "summary_large_image",
      ogSiteName: "Юридическая компания №1"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Hero, null, null, _parent));
      _push(ssrRenderComponent(CasesSection, null, null, _parent));
      _push(ssrRenderComponent(ReviewsSection, null, null, _parent));
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
//# sourceMappingURL=index-eRcbyLp6.mjs.map
