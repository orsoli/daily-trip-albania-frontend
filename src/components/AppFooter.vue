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
  <div class="footer">
    <h6 class="text-center">
      {{ $t("footer", { year: currentYear }) }}
    </h6>
    <!-- <h3>{{ $i18n.datetimeFormats }}</h3> -->
  </div>
</template>

<style lang="scss" scoped></style>
