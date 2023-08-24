<template>
  <Transition>
    <div
      v-if="listsStore.isShowListPage"
      class="list-page"
    >
      <UiCloseListButton />
    </div>
</Transition>
</template>

<script setup lang="ts">
  import { useListsStore } from '@/stores/lists'

  const listsStore = useListsStore()
</script>

<style lang="scss" scoped>
  .list-page {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: $white;
    box-shadow: 0 8px 32px 0 $shadow-color;

    &.v-enter-from,
    &.v-leave-to {
      left: -100%;
    }

    &.v-enter-active,
    &.v-leave-active {
      transition: left .4s ease-in;
    }

    &.v-enter-to,
    &.v-leave-from {
      left: 0;
    }
  }
</style>
