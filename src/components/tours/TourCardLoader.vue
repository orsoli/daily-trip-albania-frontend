<script>
export default {
  name: "TourCardLoader",
  data() {
    return {};
  },

  components: {},

  methods: {},
};
</script>

<template>
  <div
    class="card bg-dark bg-opacity-75 border-0 shadow-none"
    aria-hidden="true"
  >
    <div class="img-top"></div>
    <div class="card-body">
      <h5 class="card-title text-info placeholder-glow">
        <span class="placeholder col-6"></span>
      </h5>
      <p class="card-text text-light placeholder-glow">
        <span class="placeholder col-7 text-warning me-1"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-4"></span>
        <span class="placeholder col-6"></span>
        <span class="placeholder col-8"></span>
      </p>
      <a
        class="btn btn-transparent border rounded-4 disabled placeholder-glow col-6"
        aria-disabled="true"
      >
        <span class="placeholder col-9 text-info"></span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-top {
  width: 100%;
  height: 200px;
  background-color: #9f9f9fce;
  border-radius: 0.5rem 0.5rem 0 0;
  opacity: 0.7;
}
</style>
