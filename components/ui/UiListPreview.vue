<template>
  <div class="list">
    {{ props.title }}
  </div>
</template>

<script setup  lang="ts">
  const props = defineProps<{
    title?: string
  }>()
</script>

<style lang="scss" scoped>
.list {
  background-color: transparent;
  border: 2px solid $primary;
  border-radius: 15px;
  color: $primary;
  width: 100px;
  height: 100px;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0px;
  outline: none;
  transition: all $default-transition;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: $white;
    background-color: $primary;
  }
}
</style>
