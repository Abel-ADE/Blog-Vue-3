import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import type { Post } from '@/interfaces/Post';

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([
    {
      id: 1,
      slug: 'vue-3-intro',
      author: 'Juan Pérez',
      createdAt: '2025-04-12T10:30:00Z',
      image: 'https://picsum.photos/id/180/900/400',
      tags: ['vue', 'frontend'],
      isPublished: true,
      translations: [
        {
          locale: 'es',
          title: 'Introducción a Vue 3',
          excerpt: 'Una introducción completa a Vue 3 y cómo combinarlo con TypeScript.',
          contentPath: 'articles/vue-3-intro.es.md',
        },
        {
          locale: 'en',
          title: 'Introduction to Vue 3',
          excerpt: 'A complete introduction to Vue 3 and how to combine it with TypeScript.',
          contentPath: 'articles/vue-3-intro.en.md',
        },
      ],
    },
    {
      id: 2,
      slug: 'react-hooks-basics',
      author: 'Ana López',
      createdAt: '2025-04-18T09:00:00Z',
      image: 'https://picsum.photos/id/250/900/400',
      tags: ['react', 'hooks'],
      isPublished: true,
      translations: [
        {
          locale: 'es',
          title: 'Conceptos básicos de React Hooks',
          excerpt: 'Aprende qué son los hooks de React y cómo usarlos en tus componentes.',
          contentPath: 'articles/react-hooks-basics.es.md',
        },
        {
          locale: 'en',
          title: 'React Hooks Basics',
          excerpt: 'Learn what React hooks are and how to use them in your components.',
          contentPath: 'articles/react-hooks-basics.en.md',
        },
      ],
    },
    {
      id: 3,
      slug: 'css-grid-vs-flexbox',
      author: 'Carlos Sánchez',
      createdAt: '2025-04-20T14:45:00Z',
      image: 'https://picsum.photos/id/1024/900/400',
      tags: ['css', 'design'],
      isPublished: true,
      translations: [
        {
          locale: 'es',
          title: 'CSS Grid vs Flexbox: ¿Cuál usar?',
          excerpt: 'Compara CSS Grid y Flexbox para elegir el sistema de diseño adecuado.',
          contentPath: 'articles/css-grid-vs-flexbox.es.md',
        },
        {
          locale: 'en',
          title: 'CSS Grid vs Flexbox: Which One to Use?',
          excerpt: 'Compare CSS Grid and Flexbox to choose the right layout system.',
          contentPath: 'articles/css-grid-vs-flexbox.en.md',
        },
      ],
    },
    {
      id: 4,
      slug: 'typescript-for-beginners',
      author: 'Lucía Torres',
      createdAt: '2025-04-25T08:20:00Z',
      image: 'https://picsum.photos/id/1056/900/400',
      tags: ['typescript', 'javascript'],
      isPublished: true,
      translations: [
        {
          locale: 'es',
          title: 'TypeScript para principiantes',
          excerpt: 'Una guía rápida para comenzar con TypeScript desde cero.',
          contentPath: 'articles/typescript-for-beginners.es.md',
        },
        {
          locale: 'en',
          title: 'TypeScript for Beginners',
          excerpt: 'A quick guide to get started with TypeScript from scratch.',
          contentPath: 'articles/typescript-for-beginners.en.md',
        },
      ],
    },
    {
      id: 5,
      slug: 'node-api-rest',
      author: 'Mario Gómez',
      createdAt: '2025-05-01T16:10:00Z',
      image: 'https://picsum.photos/id/1033/900/400',
      tags: ['node', 'api', 'backend'],
      isPublished: false,
      translations: [
        {
          locale: 'es',
          title: 'Cómo construir una API REST con Node.js',
          excerpt: 'Guía paso a paso para crear una API REST usando Express.',
          contentPath: 'articles/node-api-rest.es.md',
        },
        {
          locale: 'en',
          title: 'How to Build a REST API with Node.js',
          excerpt: 'Step-by-step guide to building a REST API using Express.',
          contentPath: 'articles/node-api-rest.en.md',
        },
      ],
    },
  ]);

  const getPublishedPosts = computed(() => posts.value.filter((post) => post.isPublished));
  const getUnPublishedPosts = computed(() => posts.value.filter((post) => !post.isPublished));

  const getPostbyId = (id: number) => posts.value.find((post) => post.id === id);
  const getPostbySlug = (slug: string) => posts.value.find((post) => post.slug === slug);

  return { posts, getPostbyId, getPostbySlug, getPublishedPosts, getUnPublishedPosts };
});
