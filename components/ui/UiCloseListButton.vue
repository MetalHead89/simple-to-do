<template>
  <UiButton
    class="close-list"
    @click="handleCloseListClick"
  >
    x
  </UiButton>
</template>

<script setup lang="ts">
  import { useListsStore } from '@/stores/lists'

  const listsStore = useListsStore()

  const handleCloseListClick = () => {
    listsStore.hideListPage()
  }
</script>

<style lang="scss" scoped>
.close-list {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
