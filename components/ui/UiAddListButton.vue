<template>
  <UiButton
    class="add-list"
    @click="handleAddListClick"
  >
    <i class="ic-add-list" />
  </UiButton>
</template>

<script setup lang="ts">
  import { useListsStore } from '@/stores/lists'

  const listsStore = useListsStore()

  const handleAddListClick = () => {
    listsStore.addNewList()
  }
</script>

<style lang="scss" scoped>
.add-list {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 25px;
  line-height: 0;
}
</style>
