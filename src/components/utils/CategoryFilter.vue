<script>
import { CategoriesStore } from "@/store/categoriesStore";
export default {
  name: "CategoryFilter",
  data() {
    return {
      CategoriesStore,
    };
  },

  components: {
    CategoriesStore,
  },

  computed: {
    categories() {
      return CategoriesStore.list.data;
    },
  },

  methods: {},
  mounted() {
    CategoriesStore.fetchResources({});
  },
};
</script>

<template>
  <div class="d-flex justify-content-end align-items-center gap-4">
    <div class="w-50 text-end">
      <h3>{{ $t("browse_by_category") }}</h3>
    </div>
    <div class="border border-2 w-25"></div>
  </div>

  <div
    v-if="CategoriesStore.loading"
    class="row flex-nowrap overflow-x-scroll gap-2 py-3 px-1"
  >
    <!-- Categories loader -->
    <div
      v-for="i in 5"
      :key="i"
      class="category-card col bg-dark bg-opacity-75 rounded-4 p-3"
    >
      <h2 class="text-center placeholder-glow">
        <span class="placeholder col-10"></span>
      </h2>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
        <span class="placeholder col-8"></span>
        <span class="placeholder col-10"></span>
      </p>
    </div>
  </div>

  <div v-else class="row flex-nowrap overflow-x-scroll gap-2 py-3 px-1">
    <router-link
      v-for="category in categories"
      :key="category.id"
      :to="{ name: 'tours', query: { category: category.slug } }"
      class="category-card col bg-dark bg-opacity-50 rounded-4 p-3"
    >
      <h2 class="text-center">{{ category.name }}</h2>
      <p class="truncate-multiline">
        {{ category.description }}
      </p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.category-card {
  text-decoration: none;
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)),
    url("../../assets/img/category-img.png");
  background-size: cover;
  background-position: bottom;
  border: 1px solid whitesmoke;
}

.category-card:hover {
  scale: 1.03;
  box-shadow: 0 0 10px 2px rgba(194, 194, 194, 0.825);
  transition: all 0.4s ease-in-out;
}

.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
