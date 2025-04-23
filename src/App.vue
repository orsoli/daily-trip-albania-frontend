<script>
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { useHead } from "@vueuse/head";
import { ref, watch, onMounted, onUnmounted } from "vue";

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

    const scrollContainer = ref(null);
    const isScrolled = ref(false);

    const handleScroll = () => {
      if (scrollContainer.value) {
        isScrolled.value = scrollContainer.value.scrollTop > 50;
      }
    };

    onMounted(() => {
      const lang = localStorage.getItem("lang") || "en";
      locale.value = lang;

      if (scrollContainer.value) {
        scrollContainer.value.addEventListener("scroll", handleScroll);
      }
    });

    onUnmounted(() => {
      if (scrollContainer.value) {
        scrollContainer.value.removeEventListener("scroll", handleScroll);
      }
    });

    const updateTitle = () => {
      const titleKey = router.currentRoute.value.meta.titleKey || "app_title";
      head.title = t(titleKey);
    };

    watch(locale, updateTitle);

    return {
      scrollContainer,
      isScrolled,
    };
  },
};
</script>

<template>
  <div class="p-3">
    <div ref="scrollContainer" class="home-wraper">
      <AppHeader :isScrolled="isScrolled" />
      <main>
        <RouterView />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss">
.home-wraper {
  height: calc(100vh - 30px);
  overflow-y: scroll;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url("./assets/img/boat-trip-background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  box-shadow: 0 0 10px 5px rgb(84, 84, 84);

  @media (max-width: 768px) {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
      url("./assets/img/mobile-bg.png");
  }
}
</style>
