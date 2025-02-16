<template>
  <UiInputText
    v-model="todoName"
    class="add-item-field"
    @keyup.enter="handleAddTodoItem"
  >
    <template #end>
      <button
        type="button"
        class="add-button"
        :disabled="!todoName.trim()"
        @click="handleAddTodoItem"
      >
        <i class="ic-plus"></i>
      </button>
    </template>
  </UiInputText>
</template>

<script setup lang="ts">
const route = useRoute()
const todoId = route.params.id as string
const todosStore = useTodosStore()
const { addTodoItem } = todosStore
const todoName = ref('')

const handleAddTodoItem = () => {
  if (!todoName.value.trim()) {
    return
  }

  addTodoItem(todoId, todoName.value.trim())
  todoName.value = ''
}
</script>

<style lang="scss" scoped>
.add-item-field {
  padding-right: 3px;

  .add-button {
    background: $main-bg;
    color: $font-color;
    border-radius: $base-border-radius;
    height: 42px;
    width: 42px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
