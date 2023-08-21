import { defineStore } from 'pinia'

export const useListsStore = defineStore('lists', () => {
  const lists: Ref<Object[]> = ref([])
  const isShowListPage = ref(false)

  const addNewList = () => {
    lists.value.push({})
    showListPage()
  }

  const hideListPage = () => {
    isShowListPage.value = false
  }

  const showListPage = () => {
    isShowListPage.value = true
  }

  return {
    lists,
    isShowListPage,
    addNewList,
    hideListPage,
    showListPage
  }
})
