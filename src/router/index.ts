import { createRouter, createWebHistory } from 'vue-router';
import LocaleLayout from '@/views/layout/LocaleLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:locale',
      component: LocaleLayout, // layout que detecta y aplica el idioma
      children: [
        {
          path: `/:locale/posts`, // por ejemplo /es
          name: 'home',
          component: () => import('@/views/PostsView.vue'),
        },
        {
          path: '/:locale/about', // /es/about
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: 'post/:slug', // /es/blog/vue-3-intro
          name: 'post',
          component: () => import('@/views/PostView.vue'),
        },
      ],
    },
  ],
});

export default router;
