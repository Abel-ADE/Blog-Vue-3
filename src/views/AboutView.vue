<template>
  <section class="post">
    <img class="post__img" src="../assets/vue.png" alt="Logo de vue" />
    <h1 class="post__title">{{ t('about.title') }}</h1>
    <article class="post__text">
      <p>{{ t('about.text') }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.post {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
}

.post__title {
  text-align: center;
  font-size: 2rem;
  padding-top: 1rem;
}

.post__text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.2rem;
  text-align: justify;
}

.post__img {
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 4px;
  background-color: lightgray;
}
</style>
