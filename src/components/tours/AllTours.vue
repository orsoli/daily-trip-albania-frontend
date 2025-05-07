<script>
import AppLoader from "@/components/AppLoader.vue";
import TourCard from "@/components/tours/TourCard.vue";
import { store } from "@/store/store";
import TourCardLoader from "./TourCardLoader.vue";

export default {
  name: "AllTours",
  data() {
    return {
      // Variables
      store,
    };
  },

  components: {
    AppLoader,
    TourCard,
    TourCardLoader,
  },

  methods: {},

  mounted() {
    store.fetchResources(store.tours.apiUrl, store.tours.page, {}, "allTours");
  },

  computed: {
    allTours() {
      return store.allTours.data;
    },
  },
};
</script>

<template>
  <!-- Tours Loader -->
  <div
    v-if="store.loading"
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center"
  >
    <div v-for="n in 10" :key="n" class="col">
      <TourCardLoader />
    </div>
  </div>
  <!-- Tours -->
  <div
    v-else
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center"
  >
    <!-- tours -->
    <TourCard v-for="tour in allTours" :key="tour.id" :tour="tour" />
  </div>
</template>

<style lang="scss" scoped></style>
