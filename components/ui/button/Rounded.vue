<template>
  <UiButtonBase class="button-rounded">
    <slot></slot>
  </UiButtonBase>
</template>

<style lang="scss" scoped>
.button-rounded {
  padding: 0;
  font-weight: 500;
  border-radius: 50%;
  width: 50px;
  aspect-ratio: 1 / 1;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
