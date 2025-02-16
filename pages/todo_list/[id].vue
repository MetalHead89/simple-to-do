<template>
  <div class="todo">
    <UiHeader>
      <div class="header-content">
        <UiButtonOnlyContent @click="handleBackButtonClick">
          <i class="header-action-icon ic-chevron-left"></i>
        </UiButtonOnlyContent>

        <div class="name">
          {{ todo?.name }}
        </div>

        <UiButtonOnlyContent @click="handleRemoveClick">
          <i class="header-action-icon ic-close"></i>
        </UiButtonOnlyContent>
      </div>
    </UiHeader>

    <UiContentWrapper class="todo-content">
      <FeaturesTodoAddItemField />

      <div class="list-wrapper">
        <FeaturesTodoList/>
      </div>
    </UiContentWrapper>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const todosStore = useTodosStore()

const todoId = route.params.id as string
const todo = computed(() => todosStore.todoById(todoId))

const handleBackButtonClick = () => {
  navigateTo('/')
}

const handleRemoveClick = () => {
  todosStore.removeTodoById(todoId)
  navigateTo('/')
}
</script>

<style lang="scss" scoped>
.todo {
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .header-action-icon {
      color: $font-color;
      font-size: 30px;

      &.ic-close {
        font-size: 25px;
      }
    }
  }

  .todo-content {
    margin-top: 20px;
  }

  .list-wrapper {
    padding-top: 30px;
  }
}
</style>
