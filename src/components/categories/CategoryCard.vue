<script>
export default {
  name: "CategoryCard",
  data() {
    return {};
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  components: {},

  methods: {},
};
</script>

<template>
  <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
      <img
        src="../../assets/img/category-icon.png"
        class="card-img-top"
        alt="Category Icon"
      />
      <div class="card-body">
        <h5 class="card-title">{{ category.name }}</h5>
      </div>
      <div class="card-footer">
        <a :href="'/categories/' + category.id" class="btn btn-primary">View</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
