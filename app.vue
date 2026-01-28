<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { public: publicConfig } = useRuntimeConfig();
const metrikaId = publicConfig.yandexMetrikaId;

if (metrikaId) {
  useHead({
    script: [
      {
        id: "yandex-metrika",
        type: "text/javascript",
        innerHTML: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(${metrikaId}, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true });`,
      },
    ],
    noscript: [
      {
        id: "yandex-metrika-noscript",
        children: `<div><img src="https://mc.yandex.ru/watch/${metrikaId}" style="position:absolute; left:-9999px;" alt="" /></div>`,
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      "yandex-metrika": ["innerHTML"],
      "yandex-metrika-noscript": ["children"],
    },
  });
}
</script>
