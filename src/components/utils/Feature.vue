<script>
export default {
  name: "Feature",
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<template>
  <div class="feature border-top rounded-4 p-4 mb-5">
    <h3 class="fw-bold">{{ $t("dedication_to_safety") }}</h3>
    <div class="row row-cols-1 row-cols-lg-3 g-3">
      <!-- Safety -->
      <div class="col">
        <i class="bi bi-shield-fill-check"></i>
        <h5>{{ $t("safety.title") }}</h5>
        <p>{{ $t("safety.description") }}</p>
      </div>
      <!-- Comfortable cars -->
      <div class="col px-lg-5">
        <i class="bi bi-car-front-fill"></i>
        <h5>{{ $t("comfortable_cars.title") }}</h5>
        <p>{{ $t("comfortable_cars.description") }}</p>
      </div>
      <!-- Local Expertise -->
      <div class="col">
        <i class="bi bi-map-fill"></i>
        <h5>{{ $t("local_guides.title") }}</h5>
        <p>{{ $t("local_guides.description") }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
.feature .col {
  i {
    font-size: 4rem;
    color: $secondary;
    text-shadow: 0 0 5px #0e0e0e;
  }
  h5 {
    font-weight: 600;
    color: $secondary;
    text-shadow: 0 0 15px #000000;
  }
  p {
    text-shadow: 0 1px 15px #000000;
  }
}
</style>
