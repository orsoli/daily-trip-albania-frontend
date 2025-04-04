<script>
import AppLoader from "@/components/AppLoader.vue";

export default {
  name: "Home",
  data() {
    return {
      title: "Daily Trip Albania",
    };
  },

  components: {
    AppLoader,
  },

  methods: {},
};
</script>

<template>
  <!-- Loader section -->
  <!-- <section>
    <AppLoader />
  </section> -->

  <!-- Main section -->
  <div>
    <h1 class="text-secondary">{{ $t("app_name") }}</h1>
  </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

body {
  flex-grow: 1;
  background-image: $my-bg-img;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: $mobile-bg-img; // mobile image
  }
}
</style>
