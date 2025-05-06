<script>
import RatingStars from "@/components/utils/Rating.vue";

export default {
  name: "TourCard",
  data() {
    return {};
  },

  props: {
    tour: {
      type: Object,
      required: true,
    },
  },

  components: {
    RatingStars,
  },

  methods: {
    handleImageError(event) {
      // event.target.src = "https://placehold.co/300x200?text=No+Image";
      event.target.src =
        "https://res.cloudinary.com/dmofmp5zg/image/upload/v1740773578/cld-sample-2.jpg";
    },
  },
};
</script>

<template>
  <div class="col">
    <div class="card bg-dark bg-opacity-75 border-0 rounded-4 text-light">
      <img
        src="../assets/img/3_islands_ksamil_Albania.webp"
        @error="handleImageError"
        :alt="tour.slug"
        class="card-img-top"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-info">{{ tour.title }}</h5>
        <h5>
          {{ tour.price }}
          {{ tour.currency.code }}
        </h5>
        <RatingStars
          :rating="parseFloat(tour.rating)"
          :view-count="parseInt(tour.view_count)"
        />
        <p class="card-text truncate-multiline">
          {{ tour.description }}
        </p>
        <a href="#" class="btn btn-transparent text-info border rounded-4 w-50">
          {{ $t("book_now") }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 0 0 10px 5px rgba(whitesmoke, 0.3);
  transition: all 0.3s ease-in-out;
  a:hover {
    scale: 1.1;
    transition: scale 0.3s ease-in-out;
  }

  .truncate-multiline {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
