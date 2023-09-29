import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '../views/NotesView.vue'
import { usePermissionStore } from '@/stores/permission';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/notes',
      name: 'notes',
      component: NotesView,
      beforeEnter(to, from, next) {
        const password = window.prompt("Enter Password (Same as our Zoom lecture)");
        if (password == import.meta.env.VITE_NOTE_PASSWORD) {
          next();
        } else if (password == import.meta.env.VITE_ADMIN_PASSWORD) {
          const permissionStore = usePermissionStore();
          permissionStore.setAdmin();
          next();
        } else {
          next('/home');
          window.alert("Wrong Password!");
        }
      }
    },
  ]
})

export default router
