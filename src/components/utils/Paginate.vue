<script>
export default {
  name: "Paginate",
  data() {
    return {};
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  computed: {
    linksLabelNr() {
      return this.links.filter((link) => !isNaN(link.label));
    },
  },

  components: {},

  methods: {
    // Emit an event to fetch the tours page
    sendPageNr(pageNr) {
      this.$emit("pageNrSent", pageNr);
    },
  },

  mounted() {
    console.log("linksLabelNr", this.linksLabelNr);
    console.log("linksLabelIcon", this.linksLabelIcon);
  },
};
</script>

<template>
  <nav>
    <ul class="pagination gap-1">
      <li v-for="link in linksLabelNr" :key="link.label" class="page-item">
        <button
          class="page-link fw-bolder border-0 text-light"
          :class="link.active ? 'bg-light text-dark disabled' : 'bg-dark'"
          @click="sendPageNr(parseInt(link.label))"
        >
          {{ link.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav ul li :hover {
  scale: 1.05;
}
</style>
