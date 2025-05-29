import { createI18n } from 'vue-i18n';
import en from './en.json';
import es from './es.json';
import { usePreferredLanguages } from '@vueuse/core';

export const i18n = createI18n({
  legacy: false,
  locale: usePreferredLanguages().value[0].slice(0, 2),
  fallbackLocale: 'en',
  messages: {
    en,
    es,
  },
});
