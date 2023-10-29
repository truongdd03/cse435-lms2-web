import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { getRemote, type Note } from '@/utils/firebase';

export const useNotesStore = defineStore('notes', () => {
  const notes: Ref<Note[]> = ref([]);
  const isFetched: Ref<boolean> = ref(false);

  const fetchNotes = async () => {
    if (!isFetched.value) {
        isFetched.value = true;
        notes.value = await getRemote();
    }
    return notes.value;
  }

  return { notes, isFetched, fetchNotes }
})
