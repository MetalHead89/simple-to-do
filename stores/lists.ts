import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', () => {
  const lists: Ref<Object[]> = ref([])

  const addNewList = () => {
    lists.value.push({})
  }

  return { lists, addNewList }
})
