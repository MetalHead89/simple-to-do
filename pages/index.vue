<template>
  <div class="todos">
    <UiHeader>
      <div class="header-content">
        <UiButtonOnlyContent @click="handleNewTodoButtonClick">
          <i class="header-action-icon ic-plus"></i>
        </UiButtonOnlyContent>
      </div>
    </UiHeader>

    <div class="todos-content">
      <UiContentWrapper>
        <FeaturesTodosList />
      </UiContentWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
const todosStore = useTodosStore()

const handleNewTodoButtonClick = () => {
  todosStore.addEmptyTodo()
  navigateTo(`/todo_list/${todosStore.todos.length}`)
}
</script>

<style lang="scss" scoped>
.todos {
  .header-content {
    display: flex;
    justify-content: flex-end;

    .header-action-icon {
      color: $font-color;
      font-size: 25px;
    }
  }
}
</style>
