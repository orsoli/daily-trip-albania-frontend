<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import { watch } from "vue";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const { t } = useI18n();
    const router = useRouter();

    const head = useHead({
      title: t("app_title"),
    });

    watch(
      () => router.currentRoute.value.meta.titleKey,
      (titleKey) => {
        head.title = t(titleKey || "app_title");
      },
      { immediate: true }
    );
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
