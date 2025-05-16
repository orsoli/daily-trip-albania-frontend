<script>
export default {
  name: "BaseButton",
  data() {
    return {};
  },
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
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
  <component
    :is="to ? 'router-link' : 'a'"
    :to="to"
    :href="to ? null : href"
    class="btn border rounded-4 bg-dark bg-opacity-50 shadow"
    :style="{ color: color }"
  >
    {{ $t(text) }}
    <i v-if="icon" :class="icon" class="ms-2"></i>
  </component>
</template>

<style lang="scss" scoped>
@use "../../style/variables" as *;
a:hover {
  scale: 1.1;
  transition: scale 0.3s ease-in-out;
}
</style>
