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
    <h1 class="text-primary">{{ $t("app_name") }}</h1>
  </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
@use "bootstrap/scss/bootstrap.scss" as *;

// body {
//   background-image: $my-bg-img;
// }
</style>
