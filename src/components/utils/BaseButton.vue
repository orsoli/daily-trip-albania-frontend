<script>
export default {
  name: "BaseButton",
  data() {
    return {};
  },
  props: {
    href: {
      type: String,
      default: "#",
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      default: "white",
    },
  },

  components: {},

  methods: {},
};
</script>

<template>
  <a
    :href="href"
    class="btn border rounded-4 bg-dark bg-opacity-50 shadow"
    :style="{ color: color }"
  >
    {{ $t(text) }}
    <i v-if="icon" :class="icon" class="ms-2"></i>
  </a>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
a:hover {
  scale: 1.1;
  transition: scale 0.3s ease-in-out;
}
</style>
