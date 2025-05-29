<template>
  <!-- <HeaderBlog /> -->
  <main>
    <RouterView />
  </main>
  <!-- <FooterBlog /> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
// import FooterBlog from './FooterBlog.vue';
// import HeaderBlog from './HeaderBlog.vue';
</script>

<style scoped>
main {
  width: 100%;
  margin: 0px auto;
  max-width: 1280px;
}
</style>
