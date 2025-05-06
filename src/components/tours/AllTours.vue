<script>
import AppLoader from "@/components/AppLoader.vue";
import TourCard from "@/components/tours/TourCard.vue";
import { store } from "@/store/store";

export default {
  name: "AllTours",
  data() {
    return {};
  },

  components: {
    AppLoader,
    TourCard,
  },

  methods: {},

  mounted() {
    store.fetchResources(store.tours.apiUrl, 1, {}, "allTours");
  },

  computed: {
    allTours() {
      return store.allTours;
    },
  },
};
</script>

<template>
  <div
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center"
  >
    <TourCard v-for="tour in allTours" :key="tour.id" :tour="tour" />
  </div>
</template>

<style lang="scss" scoped></style>
