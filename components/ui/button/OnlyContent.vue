<template>
  <button
    type="button"
    class="button-only-content"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button-only-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background: initial;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
