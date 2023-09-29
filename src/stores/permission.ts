import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', () => {
  const isAdmin = ref(false)
  const setAdmin = () => { isAdmin.value = true }

  return { isAdmin, setAdmin }
})
