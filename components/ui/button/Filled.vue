<template>
  <UiButtonBase class="button-filled">
    <slot></slot>
  </UiButtonBase>
</template>

<style lang="scss" scoped>
.button-filled {
  background: $main-bg;
  border: 1px solid $main-bg;
  color: $font-color;
}
</style>