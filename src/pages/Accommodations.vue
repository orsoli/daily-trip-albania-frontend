<script>
import GoBackButton from "@/components/utils/GoBackButton.vue";
export default {
  name: "Accommodations",
  data() {
    return {};
  },

  components: {
    GoBackButton,
  },

  methods: {},
};
</script>

<template>
  <div class="container text-light">
    <GoBackButton />
    <h1>Launching soon — get ready to explore!</h1>
    <div class="text-center">
      <img
        src="../assets/img/DailyTrip-logo.png"
        alt="Daily Trip Logo"
        id="logo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#logo {
  width: 400px;
}
</style>
