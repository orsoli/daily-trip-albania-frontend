<script>
import DestinationsList from "@/components/destinations/DestinationsList.vue";
export default {
  name: "Destinations",
  data() {
    return {};
  },

  components: {
    DestinationsList,
  },

  methods: {},
};
</script>

<template>
  <div class="container text-light">
    <h1>Destination</h1>
    <DestinationsList />
  </div>
</template>

<style lang="scss" scoped></style>
