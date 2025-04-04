<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>

<template>
  <div class="container my-2">
    <AppHeader class="position-sticky top-0" />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;

.container {
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;
  background-color: rgba($primary, 0.6);
  border: 2px solid $secondary;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba($secondary, 0.5);
}
</style>
