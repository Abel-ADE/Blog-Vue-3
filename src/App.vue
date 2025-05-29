<template>
  <HeaderBlog />
  <div>
    <RouterView />
  </div>
  <FooterBlog />
</template>

<script setup lang="ts">
import FooterBlog from './views/layout/FooterBlog.vue';
import HeaderBlog from './views/layout/HeaderBlog.vue';

// import LocaleLayout from './views/layout/LocaleLayout.vue';
</script>

<style scoped></style>
