<template>
  <div :class="classes">
    <div class="clickable-section" @click="handleItemClick">
      <div class="check-wrapper">
        <i v-if ="item.done" class="ic-check"></i>
      </div>

      <div class="name">
        {{ item.name }}
      </div>
    </div>

    <UiButtonOnlyContent
      class="remove-button"
      @click="handleRemoveClick"
    >
      <i class="ic-close"></i>
    </UiButtonOnlyContent>
  </div>
</template>

<script setup lang="ts">
import type { TTodoItem } from '@/types'

const todosStore = useTodosStore()
const { changeCompleteStatus, removeTodoItem } = todosStore

type TProps = {
  item: TTodoItem;
  todoId: string
}

const props = defineProps<TProps>()

const classes= computed(() => {
  return [
    'todo-item',
    props.item.done && 'todo-item_is-done'
  ]
})

const handleItemClick = () => {
  changeCompleteStatus(props.todoId, props.item.id)
}

const handleRemoveClick = () => {
  removeTodoItem(props.todoId, props.item.id)
}
</script>

<style lang="scss" scoped>
.todo-item {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  .check-wrapper {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid $font-color;
    position: relative;
    flex-shrink: 0;

    .ic-check {
      font-size: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .name {
    flex-grow: 1;
    margin-top: 4px;
  }

  .clickable-section {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    cursor: pointer;
  }

  .remove-button {
    margin-top: 2px;
  }

  .ic-close {
    font-size: 20px;
    color: $font-color;
  }

  &_is-done {
    .check-wrapper {
      background: $success-color;
      border-color: $success-color;
    }

    .name {
      text-decoration: line-through;
      opacity: 0.7;
    }
  }
}
</style>
