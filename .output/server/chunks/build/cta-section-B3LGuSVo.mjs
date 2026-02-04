import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { L as LeadButton } from './LeadButton-mXT9L9SS.mjs';

const _imports_0$1 = "" + __buildAssetsURL("2_gis.DBZ6iG4H.svg");
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "StarsRating",
  __ssrInlineRender: true,
  props: {
    rating: { default: 5 }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "review-card__rating" }, _attrs))} data-v-1ae1858b><!--[-->`);
      ssrRenderList(5, (star) => {
        _push(`<span class="${ssrRenderClass([{ "review-card__star--filled": star <= props.rating }, "review-card__star"])}" data-v-1ae1858b> ★ </span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/stars-rating/StarsRating.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const StarsRating = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1ae1858b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "review-card" }, _attrs))} data-v-891f4d5a><p class="review-card__text" data-v-891f4d5a>${ssrInterpolate(props.text)}</p><div class="review-card__footer" data-v-891f4d5a><div class="review-card__avatar" style="${ssrRenderStyle(`background-color: ${unref(randomColor)()}`)}" data-v-891f4d5a><span data-v-891f4d5a>${ssrInterpolate(props.initials)}</span></div><div class="review-card__info" data-v-891f4d5a><p class="review-card__name" data-v-891f4d5a>${ssrInterpolate(props.name)}</p>`);
      _push(ssrRenderComponent(unref(StarsRating), {
        rating: props.rating
      }, null, _parent));
      _push(`</div></div></article>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/review-card/ReviewCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ReviewCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-891f4d5a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ReviewsSection",
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
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "reviews-section" }, _attrs))} data-v-ecb230e9><a href="https://go.2gis.com/XAbrT" target="_blank" class="badge" data-v-ecb230e9><span data-v-ecb230e9>Отзывы в 2ГИС.</span><span class="badge-btn" data-v-ecb230e9>Изучить →</span></a><div data-v-ecb230e9><h2 class="reviews-section__title" data-v-ecb230e9>Обратная связь</h2><p class="reviews-section__subtitle" data-v-ecb230e9> Мы можем много рассказывать о себе, но еще лучше это сделают наши любимые клиенты. Показываем без лишней скромности. </p></div><div class="reviews-section__grid" data-v-ecb230e9><a href="https://go.2gis.com/XAbrT" target="_blank" class="double-gis-badge" data-v-ecb230e9><div class="double-gis-badge__top" data-v-ecb230e9>`);
      _push(ssrRenderComponent(unref(StarsRating), { rating: 5 }, null, _parent));
      _push(`<img${ssrRenderAttr("src", _imports_0$1)} alt="2GIS" class="double-gis-badge__logo" data-v-ecb230e9></div><div class="double-gis-badge__bottom" data-v-ecb230e9><div class="double-gis-badge__total-rating" data-v-ecb230e9><span class="double-gis-badge__total-rating-value" data-v-ecb230e9>4.9</span><sup class="double-gis-badge__total-rating-divider" data-v-ecb230e9>/5</sup></div><div class="double-gis-badge__text" data-v-ecb230e9><span class="double-gis-badge__total-reviews-value" data-v-ecb230e9>Очень хорошо</span><span class="double-gis-badge__total-reviews-text" data-v-ecb230e9>На основании 438 отзывов</span></div></div></a><!--[-->`);
      ssrRenderList(reviews, (review, index) => {
        _push(ssrRenderComponent(unref(ReviewCard), {
          key: review.name,
          text: review.text,
          name: review.name,
          initials: review.initials,
          rating: review.rating,
          class: { "review-card--centered": index === reviews.length - 1 }
        }, null, _parent));
      });
      _push(`<!--]--></div></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/widgets/reviews-section/ui/ReviewsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ReviewsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ecb230e9"]]);
const _imports_0 = "" + __buildAssetsURL("cta.h_XmBcMR.webp");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cta-section",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "cta-section" }, _attrs))} data-v-97fa48c4><div class="cta-section__inner" data-v-97fa48c4><div class="text-block" data-v-97fa48c4><h3 class="cta-section__title" data-v-97fa48c4>За советы денег не берем!</h3><p class="cta-section__description" data-v-97fa48c4> Получите бесплатную консультацию по Вашему вопросу прямо сейчас. Ни одна нейросеть не заменит точный, профессиональный совет знающего специалиста. Доверьте решение своего вопроса Юристу №1 в Челябинске и мы Вас не подведем. </p>`);
      _push(ssrRenderComponent(unref(LeadButton), null, null, _parent));
      _push(`</div><div class="image-block" data-v-97fa48c4><img${ssrRenderAttr("src", _imports_0)} alt="Юрист консультирует клиента" data-v-97fa48c4></div></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/widgets/cta-section/ui/cta-section.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CtaSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97fa48c4"]]);

export { CtaSection as C, ReviewsSection as R };
//# sourceMappingURL=cta-section-B3LGuSVo.mjs.map
