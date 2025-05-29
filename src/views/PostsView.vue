<template>
  <h2 class="posts__title">{{ t('nav.posts') }}</h2>
  <section class="container__posts">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<script setup lang="ts">
import PostCard from '@/components/PostCard.vue';
import { usePostsStore } from '@/stores/usePostsStore';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const postsStore = usePostsStore();
const posts = computed(() => postsStore.posts);
</script>

<style scoped>
.posts__title {
  text-align: center;
  font-size: 2rem;
  padding-top: 2rem;
}

.container__posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 2rem;
}
</style>
