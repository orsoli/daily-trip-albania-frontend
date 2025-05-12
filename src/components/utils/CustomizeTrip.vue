<script>
import BaseButton from "./BaseButton.vue";
export default {
  name: "CustomizeTrip",
  data() {
    return {
      // Variables
      imgLoading: true,
    };
  },

  components: {
    BaseButton,
  },

  methods: {},
};
</script>

<template>
  <div class="row row-cols-1 row-cols-md-2 align-items-center">
    <div class="col">
      <!-- Image -->
      <figure>
        <div
          v-if="imgLoading"
          id="custom-trip"
          class="placeholder-glow align-content-center"
        >
          <!-- Logo Loader -->
          <div class="placeholder col-10"></div>
        </div>
        <img
          src="../../assets/img/custom-trip.png"
          alt="3-islands-ksamil-Albania"
          @load="imgLoading = false"
          id="custom-trip"
        />
      </figure>
    </div>

    <!-- Text -->
    <div class="col">
      <h1 class="fw-bold">{{ $t("customize_trip.title") }}</h1>
      <p class="fw-bold">
        {{ $t("customize_trip.description") }}
      </p>
      <!-- Button -->
      <BaseButton href="#" text="customize_trip.create_your_trip" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
#custom-trip {
  height: 400px;
  filter: drop-shadow(0 0 30px $secondary);

  .placeholder {
    width: 70%;
    height: 70%;
    background-color: $secondary;
    border-radius: 10px;
  }
}
</style>
