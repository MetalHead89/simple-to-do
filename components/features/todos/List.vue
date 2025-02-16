<template>
  <ul class="todos-list">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="item"
    >
      <FeaturesTodosCard :todo="todo" />
    </li>
  </ul>
</template>

<script setup lang="ts">
const todosStore = useTodosStore()
const { todos } = storeToRefs(todosStore)
</script>

<style lang="scss" scoped>
.todos-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  align-items: center;

  .item {
    width: 100%;
    max-width: 200px;
  }
}
</style>
