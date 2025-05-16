<script>
import DestinationsList from "@/components/destinations/DestinationsList.vue";
import GoBackButton from "@/components/utils/GoBackButton.vue";
export default {
  name: "Destinations",
  data() {
    return {};
  },

  components: {
    DestinationsList,
    GoBackButton,
  },

  methods: {},
};
</script>

<template>
  <div class="container text-light">
    <GoBackButton />
    <h1>Destination</h1>
    <DestinationsList />
  </div>
</template>

<style lang="scss" scoped></style>
