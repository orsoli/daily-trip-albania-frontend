<script>
import TourCard from "@/components/tours/TourCard.vue";
import TourCardLoader from "./TourCardLoader.vue";
import Paginate from "@/components/utils/Paginate.vue";
import eventBus from "@/js/utils/event-bus";
import { ToursStore } from "@/store/toursStore";

export default {
  name: "ToursList",
  data() {
    return {
      // Variables
      ToursStore,
    };
  },

  components: {
    TourCard,
    TourCardLoader,
    Paginate,
  },

  methods: {
    // Get tours page
    getToursPage(page) {
      // Emit an event to fetch the tours page
      eventBus.emit("scrollToTop");

      ToursStore.page = page;
      ToursStore.fetchResources({});
    },
  },

  mounted() {
    ToursStore.fetchResources(ToursStore.apiUrl, ToursStore.page, {});
  },

  computed: {
    tours() {
      return ToursStore.list.data;
    },

    links() {
      return ToursStore.list.links;
    },

    lastPage() {
      return ToursStore.list.last_page;
    },
  },
};
</script>

<template>
  <div
    v-if="ToursStore.loading"
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"
  >
    <!-- Tour Loader -->
    <div v-for="n in 8" :key="n" class="col">
      <TourCardLoader />
    </div>
  </div>
  <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
    <!-- Tours -->
    <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />

    <!-- Pagination -->
    <Paginate v-if="lastPage > 1" :links="links" @page-changed="getToursPage" />
  </div>
</template>

<style lang="scss" scoped></style>
