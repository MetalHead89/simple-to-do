<template>
  <div class="todo-card">
    <div class="top-section">
      <UiButtonOnlyContent @click="handleEditTodoClick">
        <i class="ic-dots-horizontal"></i>
      </UiButtonOnlyContent>
    </div>

    <div class="name">
      {{ todo.name }}
    </div>

    <div class="progress-wrapper">
      <UiTodoProgress
        :total="todo.items.length"
        :done="todo.items.filter(item => item.done).length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TTodo } from '@/types'

type TProps = {
  todo: TTodo
}

const props = defineProps<TProps>()

const handleEditTodoClick = () => {
  navigateTo(`/todo_list/${props.todo.id}`)
}
</script>

<style lang="scss" scoped>
.todo-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: $font-color;
  border-radius: $base-border-radius;
  color: $main-bg;
  padding: 10px;
  box-sizing: border-box;

  .top-section {
    display: flex;
    justify-content: flex-end;

    .ic-dots-horizontal {
      font-size: 20px;
    }
  }

  .name {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 500;
    font-size: 16px;
  }

  .progress-wrapper {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
