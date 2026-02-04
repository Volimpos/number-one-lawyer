import { defineComponent, computed, ref, watch, mergeProps, unref, withAsyncContext, toValue, getCurrentInstance, onServerPrefetch, shallowRef, toRef, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { i as useRoute, f as useSeoMeta, e as useHead, a as useNuxtApp, g as asyncDataDefaults, h as createError } from './server.mjs';
import { u as useRequestURL } from './url-Dhw-ogpB.mjs';
import { C as CasesSection, u as useCases, a as CaseCardSkeleton, b as CaseCard, f as formatDate } from './CasesSection-DGfVuPId.mjs';
import { l as logoMain } from './logo-COy-JwiO.mjs';
import { storeToRefs } from 'pinia';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { a as api } from './useApi-DuJXikC3.mjs';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        if (asyncData._abortController?.signal.aborted) {
          return;
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return;
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true });
  }
  return controller.signal;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "cases",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const requestURL = useRequestURL();
    const canonicalUrl = requestURL.href;
    useSeoMeta({
      title: "Наши кейсы — Реальные дела и практика юристов в Челябинске | Юридическая компания №1",
      ogTitle: "Наши кейсы — Реальные дела и практика юристов в Челябинске | Юридическая компания №1",
      description: "Изучите наши кейсы: реальные дела по различным отраслям права в Челябинске. Успешные решения по ДТП, семейным спорам, трудовым вопросам, недвижимости и другим юридическим вопросам. Показываем свою работу и делимся полезной практикой.",
      ogDescription: "Изучите наши кейсы: реальные дела по различным отраслям права в Челябинске. Успешные решения по ДТП, семейным спорам, трудовым вопросам, недвижимости и другим юридическим вопросам. Показываем свою работу и делимся полезной практикой.",
      robots: "index, follow",
      ogType: "website",
      ogUrl: canonicalUrl,
      ogImage: logoMain,
      ogImageAlt: "Наши кейсы — Юридическая компания №1",
      twitterCard: "summary_large_image",
      twitterTitle: "Наши кейсы — Реальные дела и практика юристов в Челябинске",
      twitterDescription: "Изучите наши кейсы: реальные дела по различным отраслям права в Челябинске. Успешные решения по ДТП, семейным спорам, трудовым вопросам, недвижимости и другим юридическим вопросам.",
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
          content: "кейсы юристов, юридические кейсы, судебная практика, примеры дел, успешные дела юристов, кейсы по праву, юридическая практика Челябинск, реальные дела юристов, кейсы по семейному праву, кейсы по ДТП, кейсы по трудовому праву, кейсы по недвижимости, судебные решения, практика юристов, примеры судебных дел"
        }
      ]
    });
    const casesStore = useCases();
    const { cases } = storeToRefs(casesStore);
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("cases", async () => {
      await casesStore.loadAllCases();
    }, { server: false })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-0902d803><div class="title-container" data-v-0902d803><h1 class="title" data-v-0902d803>Наши кейсы</h1><p class="description" data-v-0902d803>Показываем свою работу и делимся полезной практикой</p></div><div class="cases-grid" data-v-0902d803>`);
      if (!unref(cases) || unref(cases).length === 0) {
        _push(`<!--[-->`);
        ssrRenderList(20, (i) => {
          _push(ssrRenderComponent(unref(CaseCardSkeleton), { key: i }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(cases), (caseItem, index) => {
          _push(ssrRenderComponent(unref(CaseCard), {
            key: index,
            image: caseItem.image,
            date: unref(formatDate)(caseItem.created_at),
            sphere: caseItem.sphere,
            title: caseItem.title,
            description: caseItem.description,
            link: `/cases/${caseItem.id}`
          }, null, _parent));
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/cases/ui/cases.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CasesPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0902d803"]]);
const getCaseFromStore = (id) => {
  const casesStore = useCases();
  const { cases } = storeToRefs(casesStore);
  if (!cases.value) return null;
  const caseItem = cases.value.find((cs) => Number(cs.id) === Number(id));
  return caseItem ?? null;
};
const fetchCaseById = async (id) => {
  const url = `case/${id}`;
  try {
    const response = await api.get(url);
    return {
      result: true,
      error: null,
      data: response
    };
  } catch (error) {
    return {
      result: false,
      error: error.message ?? "Ошибка загрузки",
      data: null
    };
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CasePage",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const caseId = computed(() => String(route.params.id ?? ""));
    const caseItem = ref(null);
    const loadCase = async () => {
      const id = caseId.value;
      if (!id || id === "undefined") return;
      const fromStore = getCaseFromStore(id);
      if (fromStore) {
        caseItem.value = fromStore;
        return;
      }
      caseItem.value = null;
      const result = await fetchCaseById(id);
      if (result?.data) {
        caseItem.value = result.data;
      }
    };
    watch(caseId, loadCase);
    const seoTitle = computed(() => {
      if (!caseItem.value) {
        return "Кейс | Юридическая компания №1 в Челябинске";
      }
      return `${caseItem.value.title} | ${caseItem.value.sphere} в Челябинске | Юридическая компания №1`;
    });
    const seoDescription = computed(() => {
      if (!caseItem.value) {
        return "Успешные кейсы юридической компании №1 в Челябинске. Профессиональная помощь юристов и адвокатов по различным правовым вопросам.";
      }
      const geoKeywords = "в Челябинске, Челябинская область";
      const shortDescription = caseItem.value.description.length > 120 ? caseItem.value.description.substring(0, 120) + "..." : caseItem.value.description;
      return `${shortDescription} ${geoKeywords}. ${caseItem.value.sphere} - профессиональная юридическая помощь от компании №1 в Челябинске.`;
    });
    const seoKeywords = computed(() => {
      if (!caseItem.value) {
        return "юрист Челябинск, адвокат Челябинск, юридическая помощь Челябинск, юридические услуги Челябинск";
      }
      const sphere = caseItem.value.sphere.toLowerCase();
      return `${sphere} Челябинск, ${sphere} Челябинская область, юрист по ${sphere} Челябинск, адвокат ${sphere} Челябинск, юридическая помощь ${sphere} Челябинск, кейс ${sphere}, успешное дело ${sphere}, юридическая компания №1 Челябинск`;
    });
    const seoImage = computed(
      () => caseItem.value?.image || logoMain
    );
    const twitterTitle = computed(() => {
      if (!caseItem.value) {
        return "Кейс | Юридическая компания №1 в Челябинске";
      }
      return `${caseItem.value.title} | ${caseItem.value.sphere} в Челябинске`;
    });
    const twitterDescription = computed(() => {
      if (!caseItem.value) {
        return "Успешные кейсы юридической компании №1 в Челябинске.";
      }
      const shortDescription = caseItem.value.description.length > 100 ? caseItem.value.description.substring(0, 100) + "..." : caseItem.value.description;
      return `${shortDescription} в Челябинске. ${caseItem.value.sphere}.`;
    });
    useSeoMeta({
      title: seoTitle,
      ogTitle: seoTitle,
      description: seoDescription,
      ogDescription: seoDescription,
      ogImage: seoImage,
      ogType: "article",
      ogSiteName: "Юридическая компания №1",
      ogLocale: "ru_RU",
      twitterCard: "summary_large_image",
      twitterTitle,
      twitterDescription,
      twitterImage: seoImage,
      keywords: seoKeywords,
      author: "Юридическая компания №1"
    });
    useHead({
      meta: [
        { name: "geo.region", content: "RU-CHE" },
        { name: "geo.placename", content: "Челябинск" },
        { name: "geo.position", content: "55.1644;61.4368" },
        { name: "ICBM", content: "55.1644, 61.4368" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-3297de58>`);
      if (!caseItem.value) {
        _push(`<div class="loader" data-v-3297de58><i class="pi pi-spinner pi-spin text-2xl" data-v-3297de58></i></div>`);
      } else {
        _push(`<div class="case-info" data-v-3297de58><div class="case-text" data-v-3297de58><p class="sphere" data-v-3297de58>${ssrInterpolate(caseItem.value.sphere)}</p><p class="case-title" data-v-3297de58>${ssrInterpolate(caseItem.value.title)}</p><p class="case-description" data-v-3297de58>${ssrInterpolate(caseItem.value.description)}</p><a${ssrRenderAttr("href", caseItem.value.document)} target="_blank" class="show-documents-btn" data-v-3297de58> Документы по делу </a></div><img${ssrRenderAttr("src", caseItem.value.image)} alt="Кейс" class="case-image" data-v-3297de58></div>`);
      }
      _push(`<div class="more-cases" data-v-3297de58><p class="more-cases__subtitle" data-v-3297de58>Другие кейсы</p>`);
      _push(ssrRenderComponent(unref(CasesSection), null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/cases/ui/CasePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CasePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3297de58"]]);

export { CasePage as C, CasesPage as a };
//# sourceMappingURL=CasePage-fbPCGHMz.mjs.map
