<template>
  <ClientOnly>
    <div v-if="!props.total">
      Список пуст
    </div>

    <div v-else-if="props.done === props.total">
      Все задачи выполнены
    </div>

    <ve-progress
      v-else
      :progress="progress"
      color="#4bb543"
      :size="100"
      :legend="props.done"
    >
      <template #legend>
        / {{ props.total }}
      </template>

      <template #legend-caption>
        <span>
          выполнено
        </span>
      </template>
    </ve-progress>
  </ClientOnly>
</template>

<script setup lang="ts">
type TProps = {
  total: number
  done: number
}

const props = defineProps<TProps>()

const progress = computed(() => Math.round((props.done / props.total) * 100))
</script>
