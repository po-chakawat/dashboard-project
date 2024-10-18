import { createRouter, createWebHistory } from 'vue-router';
import UserDashboard from '@/views/UserDashboardView.vue';

const routes = [
  {
    path: '/',
    name: 'UserDashboard',
    component: UserDashboard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
