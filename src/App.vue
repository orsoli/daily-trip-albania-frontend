<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import { watch, onMounted } from "vue";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    // Initialize i18n and router
    const { t, locale } = useI18n();
    const router = useRouter();

    // Initialize head title
    const head = useHead({ titleKey: "" });

    onMounted(() => {
      const lang = localStorage.getItem("lang") || "en";
      locale.value = lang;
    });

    // Update Title based on route and locale function
    const updateTitle = () => {
      const titleKey = router.currentRoute.value.meta.titleKey || "app_title";
      head.title = t(titleKey);
    };

    watch(locale, updateTitle);
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <h5>{{ $d(new Date(), "short") }}</h5>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
