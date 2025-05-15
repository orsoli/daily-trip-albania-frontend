<script>
import Paginate from "../utils/Paginate.vue";
import DestinationCardLoader from "./DestinationCardLoader.vue";
export default {
  name: "DestinationCard",
  data() {
    return {
      imgLoading: true,
    };
  },

  props: {
    destination: {
      type: Object,
      required: true,
    },
  },

  components: {
    DestinationCardLoader,
    Paginate,
  },

  methods: {
    handleImageError(event) {
      event.target.src = "https://placehold.co/300x200?text=No+Image";
    },
  },
};
</script>

<template>
  <a href="#">
    <DestinationCardLoader v-if="imgLoading" />
    <div class="col">
      <div class="card text-bg-dark">
        <img
          :src="destination.thumbnail"
          :alt="destination.slug"
          @error="handleImageError"
          @load="imgLoading = false"
          class="card-img"
        />
        <div class="card-img-overlay">
          <h4 class="card-title">{{ destination.name }}</h4>
          <p class="card-text">{{ destination.description }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
a {
  display: inline-block;

  img {
    filter: brightness(0.5);
    transition: transform 0.3s ease-in-out, filter 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.02);
      filter: brightness(1);
      box-shadow: 0 0 10px 3px rgba(224, 224, 224, 0.764);
    }
    .card-text {
      display: none;
    }
    .card-title {
      text-shadow: 0 0 10px black;
    }
  }
}
</style>
