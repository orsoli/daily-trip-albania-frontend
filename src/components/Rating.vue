<script>
export default {
  name: "Rating",
  data() {
    return {};
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },

  components: {},

  methods: {},
};
</script>

<template>
  <div class="rating">
    <!-- <span class="pe-2">{{ rating }}</span> -->
    <span v-for="n in maxStars" :key="n">
      <i v-if="rating >= n" class="bi bi-star-fill full-star text-warning"></i>
      <i
        v-else-if="rating >= n - 0.5"
        class="bi bi-star-half half-star text-warning"
      ></i>
      <i v-else class="bi bi-star empty-star text-light"></i>
    </span>
    <span class="ps-2 text-light">{{ viewCount }} {{ $t("views") }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
