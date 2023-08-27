<template>
  <div class="to-do-lists">
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
