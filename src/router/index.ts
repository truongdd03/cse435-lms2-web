import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotesView from '../views/NotesView.vue'
import { usePermissionStore } from '@/stores/permission';
import PrototypeView from '@/views/PrototypeView.vue';

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
    },
    {
      path: '/prototype',
      name: 'prototype',
      component: PrototypeView,
    },
  ]
})

router.beforeEach((to) => {
  console.log(to);
  if (to.path == '/notes') {
    const password = window.prompt("Enter Password");

    if (password == import.meta.env.VITE_NOTE_PASSWORD) {
      return true;
    } else if (password == import.meta.env.VITE_ADMIN_PASSWORD) {
      const permissionStore = usePermissionStore();
      permissionStore.setAdmin();
      return true;
    }

    window.alert("Wrong Password!");
    return {
      name: "home"
    }
  } else {
    return true;
  }
});

export default router
