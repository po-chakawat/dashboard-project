import { createRouter, createWebHashHistory } from 'vue-router';
import UserDashboard from '@/views/UserDashboardView.vue';

const routes = [
  {
    path: '/',
    name: 'UserDashboard',
    component: UserDashboard
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
