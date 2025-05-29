<template>
  <article class="post__card">
    <img class="card__img" :src="post.image" />
    <div class="card__body">
      <h3 class="card__title">{{ post.translations.find((t) => t.locale === locale)?.title }}</h3>
      <p class="card__text">{{ post.translations.find((t) => t.locale === locale)?.excerpt }}</p>
      <RouterLink class="button" :to="`post/${post.slug}`" :slug="post.slug"
        >{{ t('button.text') }}
      </RouterLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Post } from '@/interfaces/Post';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

defineProps<{ post: Post }>();

const { t, locale } = useI18n();
</script>

<style scoped>
.post__card {
  display: flex;
  flex-direction: column;
  flex-basis: 20rem;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 4px;
  box-shadow: 0px 0px 16px var(--color-box-shadow);
}

.card__img {
  width: 100%;
  height: 10rem;
  object-fit: cover;
  object-position: center;
  border-radius: 4px 4px 0px 0px;
  background-color: lightgray;
}

.card__body {
  height: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border-radius: 4px;
  padding: 1.5rem;
}

.card__title {
  display: flex;
  flex-grow: 1;
  font-size: 1.5rem;
  text-align: center;
}

.card__text {
  display: flex;
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-text-card-body);
  line-height: 1.125rem;
}

.button {
  width: max-content;
  display: flex;
  background-color: var(--color-principal);
  border: none;
  border-radius: 3px;
  color: var(--color-text-button);
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
}
</style>
