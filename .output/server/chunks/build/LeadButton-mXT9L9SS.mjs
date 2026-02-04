import { ref, getCurrentScope, onScopeDispose, markRaw, defineComponent, mergeProps, useSSRContext, computed, unref, useModel, mergeModels, withCtx, createTextVNode, createVNode, createBlock, createCommentVNode, openBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrGetDynamicModelProps, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderComponent } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import script from './index-SJUTe_C9.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-pv3-9mKH.mjs';
import { nanoid } from 'nanoid';
import { a as api } from './useApi-DuJXikC3.mjs';

const useScroll = () => {
  const lock = () => {
    return;
  };
  const unlock = () => {
    return;
  };
  if (getCurrentScope()) {
    onScopeDispose(unlock);
  }
  return { lock, unlock };
};
const useModal$1 = defineStore("modalStore", () => {
  const isModalOpen = ref(true);
  const isMaskOpen = ref(true);
  useScroll();
  const openModal = async () => {
    isMaskOpen.value = true;
    setTimeout(() => {
      isModalOpen.value = true;
    }, 10);
  };
  const closeModal = async () => {
    isModalOpen.value = false;
    setTimeout(() => {
      isMaskOpen.value = false;
    }, 200);
  };
  const toggleModal = () => {
    isMaskOpen.value ? closeModal() : openModal();
  };
  return {
    isModalOpen,
    isMaskOpen,
    openModal,
    closeModal,
    toggleModal
  };
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "InputPhone",
  __ssrInlineRender: true,
  props: {
    error: {
      type: String,
      default: ""
    }
  },
  emits: ["input"],
  setup(__props, { emit: __emit }) {
    const phone = ref("");
    const props = __props;
    const maskedPhone = computed(() => formatPhone(phone.value));
    const formatPhone = (value) => {
      if (!value) return "";
      if (!value.startsWith("7")) {
        value = "7" + value;
      }
      const match = value.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
      if (!match) return "";
      const [, part1, part2, part3, part4] = match;
      let formatted = "+7";
      if (part1) formatted += ` (${part1}`;
      if (part2) formatted += `) ${part2}`;
      if (part3) formatted += `-${part3}`;
      if (part4) formatted += `-${part4}`;
      return formatted;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))} data-v-34305bc8><input type="tel" placeholder="+7 (000) 000-00-00" class="input-phone"${ssrRenderAttr("value", unref(maskedPhone))} data-v-34305bc8><p class="error" data-v-34305bc8>${ssrInterpolate(props.error)}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/input-phone/InputPhone.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const InputPhone = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-34305bc8"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InputText",
  __ssrInlineRender: true,
  props: {
    "text": { default: "" },
    "textModifiers": {}
  },
  emits: ["update:text"],
  setup(__props) {
    const text = useModel(__props, "text");
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "text",
        class: "input-text",
        value: text.value
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, text.value))))} data-v-b3c288d1>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/input-text/InputText.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const InputText = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b3c288d1"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    "checked": { default: true },
    "checkedModifiers": {}
  },
  emits: ["update:checked"],
  setup(__props) {
    const checked = useModel(__props, "checked");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "checkbox" }, _attrs))} data-v-78a90a71><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(checked.value) ? ssrLooseContain(checked.value, null) : checked.value) ? " checked" : ""} data-v-78a90a71><span class="checkmark" data-v-78a90a71></span></label>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/checkbox/Checkbox.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-78a90a71"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AcceptPrivacy",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    error: {
      type: String,
      default: ""
    }
  }, {
    "isAgree": { default: false },
    "isAgreeModifiers": {}
  }),
  emits: ["update:isAgree"],
  setup(__props) {
    const isAgree = useModel(__props, "isAgree");
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6029dfae><label class="flex flex-row items-center justify-start gap-3 w-full" data-v-6029dfae>`);
      _push(ssrRenderComponent(unref(Checkbox), {
        checked: isAgree.value,
        "onUpdate:checked": ($event) => isAgree.value = $event
      }, null, _parent));
      _push(`<p class="policy-text" data-v-6029dfae> Согласна(-ен) с `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link",
        to: "/privacy"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`политикой конфиденциальности сайта`);
          } else {
            return [
              createTextVNode("политикой конфиденциальности сайта")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></label><p class="error" data-v-6029dfae>${ssrInterpolate(props.error)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/shared/ui/accept-privacy/AcceptPrivacy.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AcceptPrivacy = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6029dfae"]]);
const validateForm = (formValues) => {
  const errors = {};
  if (!formValues.phone) {
    errors.phone = {
      error: true,
      errorText: "Телефон не указан"
    };
  }
  if (formValues.phone && formValues.phone.length < 11) {
    errors.phone = {
      error: true,
      errorText: "Неверный формат телефона"
    };
  }
  if (!formValues.acceptPrivacy) {
    errors.acceptPrivacy = {
      error: true,
      errorText: "Необходимо согласие"
    };
  }
  const hasErrors = Object.keys(errors).length > 0;
  return hasErrors ? { result: false, errors } : { result: true, errors: null };
};
const useToast = defineStore("toastStore", () => {
  const toastList = ref([]);
  const addToast = (inputToast) => {
    const toast = {
      id: nanoid(),
      severity: inputToast.severity ?? "info",
      summary: inputToast.summary,
      details: inputToast.details,
      life: inputToast.life ?? 4e3
    };
    toastList.value.push(toast);
    if (typeof toast.life === "number" && toast.life > 0) {
      setTimeout(() => {
        removeToast(toast);
      }, toast.life);
    }
  };
  const removeToast = (toast) => {
    const index = toastList.value.findIndex((item) => item.id === toast.id);
    if (index > -1) {
      toastList.value.splice(index, 1);
    }
  };
  return {
    toastList,
    addToast,
    removeToast
  };
});
const sendContacts = async (contacts) => {
  try {
    const url = "lead/store";
    const response = await api.post(url, contacts);
    if (response && !response.error) {
      return {
        result: true,
        error: null
      };
    }
  } catch (error) {
    return {
      result: false,
      error: error.message ?? "Возникла ошибка, попробуйте еще раз"
    };
  }
};
const useModal = defineStore("modalStore", () => {
  const isModalOpen = ref(false);
  const isMaskOpen = ref(false);
  useScroll();
  const component = ref(null);
  const props = ref(null);
  const title = ref("");
  const openModal = async (childComponent = null, modalTitle = "Диалог", modalProps = {}) => {
    title.value = modalTitle;
    isMaskOpen.value = true;
    setTimeout(() => {
      isModalOpen.value = true;
    }, 10);
    component.value = childComponent ? markRaw(childComponent) : null;
    props.value = modalProps;
  };
  const closeModal = async () => {
    isModalOpen.value = false;
    setTimeout(() => {
      isMaskOpen.value = false;
    }, 200);
    component.value = null;
    props.value = null;
  };
  const toggleModal = () => {
    isMaskOpen.value ? closeModal() : openModal();
  };
  return {
    isModalOpen,
    isMaskOpen,
    component,
    props,
    title,
    openModal,
    closeModal,
    toggleModal
  };
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  emits: ["submit-form"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const { addToast } = toast;
    const modalStore = useModal();
    const { closeModal } = modalStore;
    const formValues = ref({
      name: "",
      phone: "",
      acceptPrivacy: false
    });
    const formErrors = ref({});
    const loading = ref(false);
    const onSubmit = () => {
      formErrors.value = {};
      const validate = validateForm(formValues.value);
      if (!validate.result) {
        return formErrors.value = { ...formErrors.value, ...validate.errors };
      }
      sendContactsToServer();
    };
    const sendContactsToServer = async () => {
      loading.value = true;
      const response = await sendContacts(formValues.value);
      if (response && response.result) {
        closeModal();
        addToast({
          summary: "Спасибо за доверие",
          details: "Мы перезвоним в течение 15 минут",
          severity: "success",
          life: 4e3
        });
        (void 0).location.assign("/thank_you");
      } else {
        addToast({
          severity: "error",
          summary: "Возникла ошибка",
          details: response?.error,
          life: 4e3
        });
      }
      loading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Form = script;
      _push(ssrRenderComponent(_component_Form, mergeProps({
        onSubmit,
        class: "contact-form"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="subtitle" data-v-056b9017${_scopeId}>Оставьте Ваш номер телефона и мы свяжемся с Вами в течение 15 минут</p><div class="w-full" data-v-056b9017${_scopeId}><label class="form-label" data-v-056b9017${_scopeId}>Ваше имя</label>`);
            _push2(ssrRenderComponent(unref(InputText), {
              placeholder: "Ваше имя",
              text: formValues.value.name,
              "onUpdate:text": ($event) => formValues.value.name = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full" data-v-056b9017${_scopeId}><label class="form-label" data-v-056b9017${_scopeId}>Контактный телефон</label>`);
            _push2(ssrRenderComponent(unref(InputPhone), {
              onInput: (phoneNum) => formValues.value.phone = phoneNum,
              error: formErrors.value?.phone?.errorText
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(unref(AcceptPrivacy), {
              isAgree: formValues.value.acceptPrivacy,
              "onUpdate:isAgree": ($event) => formValues.value.acceptPrivacy = $event,
              error: formErrors.value?.acceptPrivacy?.errorText
            }, null, _parent2, _scopeId));
            _push2(`<button class="submit-btn"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-056b9017${_scopeId}>`);
            if (loading.value) {
              _push2(`<i class="pi pi-spinner pi-spin mr-2" data-v-056b9017${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` Заказать звонок </button>`);
          } else {
            return [
              createVNode("p", { class: "subtitle" }, "Оставьте Ваш номер телефона и мы свяжемся с Вами в течение 15 минут"),
              createVNode("div", { class: "w-full" }, [
                createVNode("label", { class: "form-label" }, "Ваше имя"),
                createVNode(unref(InputText), {
                  placeholder: "Ваше имя",
                  text: formValues.value.name,
                  "onUpdate:text": ($event) => formValues.value.name = $event
                }, null, 8, ["text", "onUpdate:text"])
              ]),
              createVNode("div", { class: "w-full" }, [
                createVNode("label", { class: "form-label" }, "Контактный телефон"),
                createVNode(unref(InputPhone), {
                  onInput: (phoneNum) => formValues.value.phone = phoneNum,
                  error: formErrors.value?.phone?.errorText
                }, null, 8, ["onInput", "error"])
              ]),
              createVNode(unref(AcceptPrivacy), {
                isAgree: formValues.value.acceptPrivacy,
                "onUpdate:isAgree": ($event) => formValues.value.acceptPrivacy = $event,
                error: formErrors.value?.acceptPrivacy?.errorText
              }, null, 8, ["isAgree", "onUpdate:isAgree", "error"]),
              createVNode("button", {
                class: "submit-btn",
                disabled: loading.value
              }, [
                loading.value ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "pi pi-spinner pi-spin mr-2"
                })) : createCommentVNode("", true),
                createTextVNode(" Заказать звонок ")
              ], 8, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/features/contact-form/ui/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LeadButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { openModal } = useModal$1();
    const optionsOpen = ref(false);
    const root = ref(null);
    ref(null);
    const direction = ref("down");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "lead-button",
        ref_key: "root",
        ref: root
      }, _attrs))} data-v-1cdb075b><button class="btn-primary" data-v-1cdb075b> Бесплатная консультация </button>`);
      if (optionsOpen.value) {
        _push(`<ul class="${ssrRenderClass([
          "variant-list",
          direction.value === "up" ? "variant-list--up" : "variant-list--down"
        ])}" data-v-1cdb075b><li data-v-1cdb075b><a href="https://wa.me/79227441323" target="_blank" data-v-1cdb075b>Написать в WhatsApp</a></li><li data-v-1cdb075b><a href="https://t.me/urist_law1" target="_blank" data-v-1cdb075b>Написать в Telegram</a></li><li data-v-1cdb075b>Заказать звонок</li><li data-v-1cdb075b><a href="tel:+7 (905) 830-30-62" data-v-1cdb075b>+7 (905) 830-30-62</a></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/features/lead-button/ui/LeadButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LeadButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1cdb075b"]]);

export { LeadButton as L, useToast as a, useScroll as b, useModal as u };
//# sourceMappingURL=LeadButton-mXT9L9SS.mjs.map
