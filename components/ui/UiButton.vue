<template>
  <button
    type="button"
    class="regular-button"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.regular-button {
  background-color: transparent;
  border: 2px solid $primary;
  border-radius: 15px;
  color: $primary;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0px;
  outline: none;
  transition: all $default-transition;
  user-select: none;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: $white;
    background-color: $primary;
    box-shadow: $shadow;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}
</style>
