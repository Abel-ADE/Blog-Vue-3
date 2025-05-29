<script setup lang="ts">
import MoonIcon from '@/components/icons/MoonIcon.vue';
import router from '@/router';
import { useDark, useToggle } from '@vueuse/core';
import { watch } from 'vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);

import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

watch(locale, (newLocale, lastLocale) => {
  const { path } = router.currentRoute.value;

  router.push({
    path: path.replace(`/${lastLocale}`, `/${newLocale}`),
  });

  document.querySelector('html')?.setAttribute('lang', newLocale);
});
</script>

<template>
  <header class="header">
    <h1 class="header__title">
      <RouterLink class="navbar__link" :to="`/${locale}/posts`">Mi blog</RouterLink>
    </h1>
    <ul class="header__navbar">
      <li class="navbar__item">
        <RouterLink
          class="navbar__link"
          active-class="active"
          :to="{ name: 'home', params: { locale: locale } }"
          >{{ t('nav.posts') }}</RouterLink
        >
      </li>
      <li class="navbar__item">
        <RouterLink
          class="navbar__link"
          active-class="active"
          :to="{ name: 'about', params: { locale: $i18n.locale } }"
          >{{ t('nav.about') }}</RouterLink
        >
      </li>
      <li class="navbar__item">
        <MoonIcon @click="toggleDark()" />
      </li>
      <li class="navbar__item">
        <select v-model="locale">
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.header,
.header__navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.header {
  width: 100%;
  margin: 0px auto;
  max-width: 1280px;
  padding: 1.5rem;
  justify-content: space-between;
}

.header__title {
  font-size: 2rem;
}

.header__navbar {
  gap: 2rem;
}

.navbar__item {
  list-style-type: none;
  font-size: 1.2rem;
  font-weight: 600;
}

.navbar__link {
  display: inline-block;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2ms;
}

select {
  display: flex;
  border: none;
  outline: none;
  font-size: 0.98rem;
}

.active,
.navbar__item .navbar__link:hover {
  color: var(--color-principal);
  transform: scale(1.1);
}

@media (width <= 650px) {
  .header {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
