<script>
import ToursList from "@/components/tours/ToursList.vue";
export default {
  name: "Tours",
  data() {
    return {};
  },

  components: {
    ToursList,
  },

  methods: {},
};
</script>

<template>
  <div class="container text-light">
    <!-- Title page -->
    <h1>Tours</h1>

    <ToursList />
  </div>
</template>

<style lang="scss" scoped></style>
