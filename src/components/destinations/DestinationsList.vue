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
      return DestinationsStore.list.meta.links;
    },

    lastPage() {
      return DestinationsStore.list.meta.last_page;
    },
  },
};
</script>

<template>
  <div
    v-if="DestinationsStore.loading"
    class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3"
  >
    <destination-card-loader v-for="n in 8" :key="n" />
  </div>
  <div v-else>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      <destination-card
        v-for="destination in destinations"
        :key="destination.id"
        :destination="destination"
      />
    </div>
    <paginate
      v-if="lastPage > 1"
      :links="links"
      page-name="destinations"
      @page-changed="getDestinationsPage"
    />
  </div>
</template>

<style lang="scss" scoped></style>
