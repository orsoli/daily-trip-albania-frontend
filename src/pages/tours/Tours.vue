<script>
import ToursList from "@/components/tours/ToursList.vue";
import GoBackButton from "@/components/utils/GoBackButton.vue";
export default {
  name: "Tours",
  data() {
    return {};
  },

  components: {
    ToursList,
    GoBackButton,
  },

  methods: {},
};
</script>

<template>
  <div class="container text-light">
    <!-- Back btn -->
    <GoBackButton />

    <!-- Title page -->
    <h1>Tours</h1>

    <ToursList />
  </div>
</template>

<style lang="scss" scoped></style>
