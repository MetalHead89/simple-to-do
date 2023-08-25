<template>
  <Transition appear>
    <UiButton
      class="close-list"
      @click="handleCloseListClick"
    >
      x
    </UiButton>
  </Transition>
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

  &.v-enter-from {
    transform: scale(0);
  }

  &.v-enter-active {
    transition: transform .7s cubic-bezier(0.68, -0.6, 0.32, 1.6) 0.5s;
  }

  &.v-enter-to {
    transform: scale(1);
  }
}
</style>
