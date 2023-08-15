<template>
  <button
    type="button"
    class="add-list"
    @click="handleAddListClick"
  >
    +
  </button>
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
  background-color: transparent;
  border: 2px solid $primary;
  border-radius: 15px;
  color: $primary;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0px;
  outline: none;
  transition: all $default-transition;
  user-select: none;
}

.add-list:disabled {
  pointer-events: none;
}

.add-list:hover {
  color: $white;
  background-color: $primary;
  box-shadow: $shadow;
  transform: translateY(-2px);
}

.add-list:active {
  box-shadow: none;
  transform: translateY(0);
}
</style>
