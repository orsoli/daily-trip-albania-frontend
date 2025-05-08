<script>
import AllTours from "@/components/tours/AllTours.vue";
export default {
  name: "Tours",
  data() {
    return {};
  },

  components: {
    AllTours,
  },

  methods: {},
};
</script>

<template>
  <div class="container text-light">
    <!-- Title page -->
    <h1>Tours</h1>
    <!-- All Tours -->
    <AllTours />
  </div>
</template>

<style lang="scss" scoped></style>
