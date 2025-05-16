<script>
import router from "@/router";

export default {
  name: "GoBackButton",
  data() {
    return {};
  },

  components: {},

  methods: {
    goBack() {
      router.back();
    },
  },
};
</script>

<template>
  <button class="btn btn-transparent text-light mb-3" @click="goBack">
    <i class="bi bi-arrow-left me-1"></i>
    <em>back</em>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  &:hover {
    scale: 1.1;
    transition: scale 0.3s ease-in-out;
  }
}
</style>
