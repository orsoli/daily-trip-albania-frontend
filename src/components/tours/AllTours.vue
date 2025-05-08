<script>
import AppLoader from "@/components/AppLoader.vue";
import TourCard from "@/components/tours/TourCard.vue";
import TourCardLoader from "./TourCardLoader.vue";
import Paginate from "@/components/utils/Paginate.vue";
import { store } from "@/store/store";
import EventBus from "@/utils/event-bus";

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
    Paginate,
  },

  methods: {
    // Get tours page
    getToursPage(page) {
      // Emit an event to fetch the tours page
      EventBus.emit("scrollToTop");

      store.fetchResources(store.tours.apiUrl, page, {}, "allTours");
    },
  },

  mounted() {
    store.fetchResources(store.tours.apiUrl, store.tours.page, {}, "allTours");
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
  <div
    v-if="store.loading"
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"
  >
    <!-- Tour Loader -->
    <div v-for="n in 8" :key="n" class="col">
      <TourCardLoader />
    </div>
  </div>
  <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
    <!-- Tours -->
    <TourCard v-for="tour in allTours" :key="tour.id" :tour="tour" />

    <!-- Pagination -->
    <Paginate v-if="lastPage > 1" :links="links" @page-changed="getToursPage" />
  </div>
</template>

<style lang="scss" scoped></style>
