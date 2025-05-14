<script>
import DestinationCard from "./DestinationCard.vue";
import DestinationCardLoader from "./DestinationCardLoader.vue";
import Paginate from "../utils/Paginate.vue";
import eventBus from "@/js/utils/event-bus";
import { DestinationsStore } from "@/store/destinationsStore";

export default {
  name: "DestinationsList",
  data() {
    return {
      DestinationsStore,
    };
  },

  components: {
    DestinationCard,
    DestinationCardLoader,
    Paginate,
  },

  methods: {
    // Get Destinations page
    getDestinationsPage(page) {
      // Emit an event to fetch the Destinations page
      eventBus.emit("scrollToTop");

      DestinationsStore.page = page;
      DestinationsStore.fetchResources({});
    },
  },

  mounted() {
    DestinationsStore.fetchResources({});
  },

  computed: {
    destinations() {
      return DestinationsStore.list.data;
    },

    links() {
      return DestinationsStore.list.links;
    },

    lastPage() {
      return DestinationsStore.list.last_page;
    },
  },
};
</script>

<template>
  <div
    v-if="DestinationsStore.loading"
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"
  >
    <DestinationCardLoader v-for="n in 8" :key="n" />
  </div>
  <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
    <DestinationCard
      v-for="destination in destinations"
      :key="destination.id"
      :destination="destination"
    />
  </div>
  <Paginate
    v-if="lastPage > 1"
    :links="links"
    @page-changed="getDestinationsPage"
  />
</template>

<style lang="scss" scoped></style>
