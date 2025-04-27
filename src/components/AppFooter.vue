<script>
export default {
  data() {
    return {
      // Variables
      currentYear: new Date().getFullYear(),
    };
  },

  components: {},

  methods: {},
};
</script>

<template>
  <div class="footer p-2 text-light">
    <h5 class="text-center">
      {{ $t("footer", { year: currentYear }) }}
    </h5>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
}
</style>
