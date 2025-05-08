<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import { handleScrollAfterNavigation } from "./utils/handleScrollAfterNavigation";
import { ref, watch, onMounted, onUnmounted } from "vue";
import EventBus from "@/utils/event-bus";

import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const { t, locale } = useI18n();
    const router = useRouter();
    const head = useHead({ titleKey: "" });

    const isScrolled = ref(false);
    const scrollContainer = ref(null);

    const handleScroll = () => {
      if (scrollContainer.value) {
        isScrolled.value = scrollContainer.value.scrollTop > 50;
      }
    };

    onMounted(() => {
      if (scrollContainer.value) {
        scrollContainer.value.addEventListener("scroll", handleScroll);
      }
      router.afterEach(handleScrollAfterNavigation(scrollContainer));
      EventBus.on("scrollToTop", () => {
        if (scrollContainer.value) {
          scrollContainer.value.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    });

    onUnmounted(() => {
      if (scrollContainer.value) {
        scrollContainer.value.removeEventListener("scroll", handleScroll);
      }

      EventBus.off("scrollToTop");
    });

    const updateTitle = () => {
      const titleKey = router.currentRoute.value.meta.titleKey || "app_title";
      head.title = t(titleKey);
    };

    watch(locale, updateTitle);

    return {
      isScrolled,
      scrollContainer,
    };
  },
};
</script>

<template>
  <div ref="scrollContainer" class="main-wrapper">
    <AppHeader :isScrolled="isScrolled" />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss"></style>
