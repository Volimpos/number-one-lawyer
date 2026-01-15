import { _ as __nuxt_component_0 } from "./nuxt-link-BbuLapqa.mjs";
import {
  defineComponent,
  mergeProps,
  withCtx,
  unref,
  createVNode,
  createTextVNode,
  toDisplayString,
  useSSRContext,
} from "vue";
import {
  ssrRenderAttrs,
  ssrRenderComponent,
  ssrRenderAttr,
  ssrRenderList,
  ssrInterpolate,
} from "vue/server-renderer";
import { l as logoMain } from "./logo-YP0PYDTj.mjs";
import { _ as _export_sfc } from "./server.mjs";

const vkLogo =
  "data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_57_142)'%3e%3cpath%20d='M22%2044C34.1503%2044%2044%2034.1503%2044%2022C44%209.84974%2034.1503%200%2022%200C9.84974%200%200%209.84974%200%2022C0%2034.1503%209.84974%2044%2022%2044Z'%20fill='%23FFB33F'/%3e%3cpath%20d='M22%200C9.84958%200%200%209.84958%200%2022C0%2034.1504%209.84958%2044%2022%2044C34.1504%2044%2044%2034.1504%2044%2022C44%209.84958%2034.1504%200%2022%200ZM30.4608%2024.8211C30.4608%2024.8211%2032.4064%2026.7414%2032.8854%2027.6329C32.8992%2027.6511%2032.9061%2027.6696%2032.9107%2027.6786C33.1054%2028.0064%2033.1511%2028.2608%2033.055%2028.4511C32.8946%2028.7672%2032.3446%2028.9232%2032.1567%2028.9368H28.7192C28.4808%2028.9368%2027.9811%2028.875%2027.3761%2028.4579C26.9111%2028.1325%2026.4528%2027.5986%2026.0058%2027.0783C25.3389%2026.3036%2024.7614%2025.6346%2024.1793%2025.6346C24.1054%2025.6344%2024.0319%2025.6461%2023.9617%2025.6689C23.5217%2025.8111%2022.9579%2026.4389%2022.9579%2028.1118C22.9579%2028.6343%2022.5454%2028.9346%2022.2543%2028.9346H20.68C20.1437%2028.9346%2017.3502%2028.7467%2014.8752%2026.1364C11.8456%2022.9396%209.11854%2016.5275%209.09561%2016.4679C8.92375%2016.0531%209.27896%2015.8308%209.66625%2015.8308H13.1381C13.601%2015.8308%2013.7523%2016.1127%2013.8577%2016.3625C13.9815%2016.6535%2014.4352%2017.8108%2015.18%2019.1125C16.3877%2021.2346%2017.1279%2022.0961%2017.7215%2022.0961C17.8328%2022.095%2017.9421%2022.0667%2018.04%2022.0136C18.8146%2021.5829%2018.6702%2018.8215%2018.6358%2018.2485C18.6358%2018.1408%2018.6335%2017.0133%2018.2371%2016.4725C17.9529%2016.0806%2017.4694%2015.9317%2017.176%2015.8767C17.2948%2015.7128%2017.4512%2015.58%2017.6321%2015.4894C18.1637%2015.2235%2019.1217%2015.1846%2020.0727%2015.1846H20.6021C21.6333%2015.1983%2021.8992%2015.2648%2022.2728%2015.3588C23.0289%2015.5398%2023.045%2016.0279%2022.9786%2017.6985C22.9579%2018.1729%2022.9372%2018.7092%2022.9372%2019.3417C22.9372%2019.4792%2022.9304%2019.6258%2022.9304%2019.7817C22.9075%2020.6319%2022.88%2021.5967%2023.4804%2021.9931C23.5587%2022.0422%2023.6493%2022.0684%2023.7417%2022.0686C23.9503%2022.0686%2024.5782%2022.0686%2026.2786%2019.1515C26.803%2018.2125%2027.2587%2017.2367%2027.6421%2016.2319C27.6764%2016.1723%2027.7772%2015.989%2027.8964%2015.9179C27.9844%2015.8731%2028.0819%2015.8503%2028.1807%2015.8515H32.2621C32.7067%2015.8515%2033.0114%2015.9179%2033.0686%2016.0898C33.1696%2016.3625%2033.0504%2017.1944%2031.1872%2019.7175L30.3554%2020.8152C28.6664%2023.0289%2028.6664%2023.1411%2030.4608%2024.8211Z'%20fill='%23282828'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_57_142'%3e%3crect%20width='44'%20height='44'%20rx='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const tgLogo =
  "data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_57_145)'%3e%3cpath%20d='M22%2044C34.1503%2044%2044%2034.1503%2044%2022C44%209.84974%2034.1503%200%2022%200C9.84974%200%200%209.84974%200%2022C0%2034.1503%209.84974%2044%2022%2044Z'%20fill='%23FFB33F'/%3e%3cpath%20d='M22%200C9.9%200%200%209.9%200%2022C0%2034.1%209.9%2044%2022%2044C34.1%2044%2044%2034.1%2044%2022C44%209.9%2034.1%200%2022%200ZM32.78%2013.42L29.04%2031.46C28.82%2032.78%2027.94%2033%2027.06%2032.34L21.34%2027.94C20.02%2029.26%2018.7%2030.36%2018.48%2030.8C18.04%2031.02%2017.82%2031.46%2017.38%2031.46C16.72%2031.46%2016.72%2031.02%2016.5%2030.58L14.52%2023.98L8.58%2022C7.26%2021.56%207.26%2020.68%208.8%2020.02L31.24%2011.44C32.12%2011.22%2033.22%2011.66%2032.78%2013.42ZM27.5%2015.4L14.96%2023.32L16.94%2029.92L17.38%2025.52L28.16%2015.84C28.82%2015.18%2028.38%2015.18%2027.5%2015.4Z'%20fill='%23282828'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_57_145'%3e%3crect%20width='44'%20height='44'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const services = [
      {
        title: "Защита прав потребителей",
        link: "/consumer-protection",
      },
      {
        title: "Автоюрист",
        link: "/autolawyer",
      },
      {
        title: "Семейное право",
        link: "/family-law",
      },
      {
        title: "Уголовное право",
        link: "/criminal-law",
      },
      {
        title: "Миграционное право",
        link: "/migration-law",
      },
      {
        title: "Трудовое право",
        link: "/labor-law",
      },
      {
        title: "Жилищное право",
        link: "/housing-law",
      },
      {
        title: "Наследство",
        link: "/inheritance-law",
      },
      {
        title: "Земельное право",
        link: "/land-law",
      },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(
        `<div${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-5bb4fd42><footer class="footer" data-v-5bb4fd42><div class="logo" data-v-5bb4fd42>`
      );
      _push(
        ssrRenderComponent(
          _component_NuxtLink,
          { to: "/" },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(
                  `<img${ssrRenderAttr("src", unref(logoMain))} alt="Юридическая компания №1 лого" data-v-5bb4fd42${_scopeId}>`
                );
              } else {
                return [
                  createVNode(
                    "img",
                    {
                      src: unref(logoMain),
                      alt: "Юридическая компания №1 лого",
                    },
                    null,
                    8,
                    ["src"]
                  ),
                ];
              }
            }),
            _: 1,
          },
          _parent
        )
      );
      _push(
        `</div><div class="info" data-v-5bb4fd42><div class="tech-info" data-v-5bb4fd42><p data-v-5bb4fd42> Юридическая компания №1. Работаем чтобы сохранять Ваше время, нервы и деньги. </p><div class="mt-6" data-v-5bb4fd42><p data-v-5bb4fd42>ООО “Юридическая компания №1”</p><p data-v-5bb4fd42>ОГРН: 1257400023099</p><p data-v-5bb4fd42>Адрес: г. Челябинск, ул Кирова, д. 7А, помещ. 29</p></div><div class="social" data-v-5bb4fd42><a href="#" data-v-5bb4fd42><img${ssrRenderAttr("src", unref(vkLogo))} alt="VK" data-v-5bb4fd42></a><a href="#" data-v-5bb4fd42><img${ssrRenderAttr("src", unref(tgLogo))} alt="Telegram" data-v-5bb4fd42></a></div></div><div class="links" data-v-5bb4fd42><div class="services" data-v-5bb4fd42><p class="footer-title" data-v-5bb4fd42>Услуги</p><ul class="mt-6 flex flex-col gap-2" data-v-5bb4fd42><!--[-->`
      );
      ssrRenderList(services, (service) => {
        _push(`<li data-v-5bb4fd42>`);
        _push(
          ssrRenderComponent(
            _component_NuxtLink,
            {
              to: service.link,
            },
            {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(service.title)}`);
                } else {
                  return [createTextVNode(toDisplayString(service.title), 1)];
                }
              }),
              _: 2,
            },
            _parent
          )
        );
        _push(`</li>`);
      });
      _push(
        `<!--]--></ul></div><div class="about" data-v-5bb4fd42><p class="footer-title" data-v-5bb4fd42>О нас</p><ul class="mt-6 flex flex-col gap-2" data-v-5bb4fd42>`
      );
      _push(
        ssrRenderComponent(
          _component_NuxtLink,
          { to: "/privacy" },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Политика конфиденциальности`);
              } else {
                return [createTextVNode("Политика конфиденциальности")];
              }
            }),
            _: 1,
          },
          _parent
        )
      );
      _push(
        ssrRenderComponent(
          _component_NuxtLink,
          { to: "/about" },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`О компании`);
              } else {
                return [createTextVNode("О компании")];
              }
            }),
            _: 1,
          },
          _parent
        )
      );
      _push(
        ssrRenderComponent(
          _component_NuxtLink,
          { to: "/contacts" },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Контакты`);
              } else {
                return [createTextVNode("Контакты")];
              }
            }),
            _: 1,
          },
          _parent
        )
      );
      _push(
        ssrRenderComponent(
          _component_NuxtLink,
          { to: "/cases" },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Кейсы`);
              } else {
                return [createTextVNode("Кейсы")];
              }
            }),
            _: 1,
          },
          _parent
        )
      );
      _push(`</ul></div></div></div></footer></div>`);
    };
  },
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    "src/app/layouts/footer/ui/Footer.vue"
  );
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ["__scopeId", "data-v-5bb4fd42"],
]);

const FooterB8OaPWdr = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: Footer,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

const indexKtInHCFJ = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      Footer: Footer,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);

export { Footer as F, FooterB8OaPWdr as a, indexKtInHCFJ as i };
//# sourceMappingURL=index-ktInHCFJ.mjs.map
