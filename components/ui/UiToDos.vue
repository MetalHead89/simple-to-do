<template>
  <div class="to-dos">
    <div class="lists">
      <UiListPreview
        v-for="(list, index) in lists"
        :key="index"
        v-bind="list"
      />
    </div>

    <div
      v-if="lists.length === 0"
      class="empty"
    >
      {{ $t('components.ui.no_lists') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useListsStore } from '@/stores/lists'

const { lists } = useListsStore()
</script>

<style lang="scss" scoped>
.to-dos {
  .lists{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
}
</style>
