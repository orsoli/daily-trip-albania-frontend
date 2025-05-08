<script>
import AppLoader from "@/components/AppLoader.vue";
import TourCard from "@/components/tours/TourCard.vue";
import TourCardLoader from "./TourCardLoader.vue";
import Paginte from "@/components/utils/Paginate.vue";
import { store } from "@/store/store";

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
    Paginte,
  },

  methods: {
    // Get tours page
    getToursPage(page) {
      store.fetchResources(store.tours.apiUrl, page, {}, "allTours");
    },
  },

  mounted() {
    store.fetchResources(store.tours.apiUrl, store.tours.page, {}, "allTours");
    console.log("All Tours", store.allTours);
  },

  computed: {
    allTours() {
      return store.allTours.data;
    },

    links() {
      return store.allTours.links;
    },

    lastPage() {
      return store.allTours.last_page;
    },
  },
};
</script>

<template>
  <!-- Tours Loader -->
  <div
    v-if="store.loading"
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"
  >
    <div v-for="n in 8" :key="n" class="col">
      <TourCardLoader />
    </div>
  </div>
  <!-- Tours -->
  <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
    <TourCard v-for="tour in allTours" :key="tour.id" :tour="tour" />

    <!-- Pagination -->
    <Paginte v-if="lastPage > 1" :links="links" @pageNrSent="getToursPage" />
  </div>
</template>

<style lang="scss" scoped></style>
