import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    components: {
      header: () => import('@/components/TheHeader.vue'),
      footer: () => import('@/components/TheFooter.vue'),
      content: () => import('@/views/PagePaintings.vue'),
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
