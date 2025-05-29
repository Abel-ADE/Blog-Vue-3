<template>
  <article class="post">
    <RouterLink class="post__back" :to="`/${locale}/posts`">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-arrow-left-short"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
        />
      </svg>
      {{ t('post.text') }}
    </RouterLink>
    <img class="post__img" :src="post?.image" :alt="post?.slug" />
    <h1 class="post__title">{{ post?.translations.find((t) => t.locale === locale)?.title }}</h1>
    <div
      class="post__text"
      v-html="post?.translations.find((t) => t.locale === locale)?.excerpt"
    ></div>
  </article>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/stores/usePostsStore';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const { getPostbySlug } = usePostsStore();

const route = useRoute();
const slug = route.params.slug.toString();

const post = getPostbySlug(slug);
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
}

.post__back {
  display: flex;
  cursor: pointer;
  text-decoration: none;
}

.post__title {
  text-align: center;
  font-size: 2rem;
  padding-top: 0.5rem;
}

.post__text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  text-align: justify;
}

.post__img {
  height: 20rem;
  object-fit: cover;
  border-radius: 4px;
  background-color: lightgray;
}
</style>
