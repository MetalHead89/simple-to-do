<template>
  <div class="to-do-lists">
    <div
      v-if="lists.length > 0"
      class="lists"
    >
      Список
    </div>

    <div
      v-else
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
