<script>
export default {
  data() {
    return {
      title: "Daily Trip Albania",
    };
  },

  components: {},

  methods: {},
};
</script>

<template>
  <div class="img-bg">
    <h1 class="text-light">{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "../style/variables.scss";

.img-bg {
  width: 100vw;
  height: 100vh;
  background-image: url("src/assets/img/3_islands_ksamil_Albania.webp");
  background-size: cover;
  background-position: center;
}
</style>
