<script>
import RatingStars from "@/components/utils/Rating.vue";
import TourCardLoader from "./TourCardLoader.vue";
import BaseButton from "@/components/utils/BaseButton.vue";

export default {
  name: "TourCard",
  data() {
    return {
      // Variables
      imgLoading: true,
    };
  },

  props: {
    tour: {
      type: Object,
      required: true,
    },
  },

  components: {
    RatingStars,
    TourCardLoader,
    BaseButton,
  },

  methods: {
    handleImageError(event) {
      event.target.src = "https://placehold.co/300x200?text=No+Image";
    },
  },
};
</script>

<template>
  <div class="col">
    <!-- Card Loader -->
    <TourCardLoader v-if="imgLoading" />
    <!-- Card -->
    <div
      href="#"
      class="card bg-dark bg-opacity-75 border-0 rounded-4 text-light overflow-hidden"
    >
      <img
        :src="tour.thumbnail"
        :alt="tour.slug"
        @error="handleImageError"
        @load="imgLoading = false"
        class="card-img-top"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold">{{ tour.title }}</h5>

        <RatingStars
          :rating="parseFloat(tour.rating)"
          :view-count="parseInt(tour.view_count)"
        />
        <p class="card-text truncate-multiline">
          {{ tour.description }}
        </p>
        <div class="d-flex justify-content-between align-items-center mt-auto">
          <!-- Price -->
          <div class="price">
            <span>From</span>
            <h6 class="fw-bold">
              {{ tour.price }}
              {{ tour.currency.code }}
            </h6>
          </div>
          <!-- View tour btn -->
          <BaseButton text="view_tour" color="var(--primary)" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
.card {
  box-shadow: 0 0 10px 5px rgba(whitesmoke, 0.3);
  transition: all 0.3s ease-in-out;

  .card-body {
    .card-title {
      color: $secondary;
    }
  }

  .truncate-multiline {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
.card:hover img {
  scale: 1.1;
  transition: scale 0.3s ease-in-out;
}
</style>
