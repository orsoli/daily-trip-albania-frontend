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
    pageName: {
      type: String,
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
      this.$emit("pageChanged", pageNr);
    },
  },
};
</script>

<template>
  <nav>
    <ul class="pagination gap-1 my-3">
      <li v-for="link in linksLabelNr" :key="link.label" class="page-item">
        <router-link
          :to="{ name: pageName, query: { page: parseInt(link.label) } }"
          class="page-link fw-bolder border-0 text-light"
          :class="link.active ? 'bg-light text-dark disabled' : 'bg-dark'"
          @click="sendPageNr(parseInt(link.label))"
        >
          {{ link.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav ul li :hover {
  scale: 1.05;
}
</style>
