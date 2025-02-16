<template>
  <ul v-if="items" class="todo-list">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="todo-item"
    >
      <FeaturesTodoItem :todo-id="todoId" :item="item" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const route = useRoute()
const todosStore = useTodosStore()
const todoId = route.params.id as string
const items = computed(() => (todosStore.todoById(todoId) || {}).items)
</script>

<style lang="scss" scoped>
.todo-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
