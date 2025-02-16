<template>
  <header class="header">
    <div class="fixed-header">
      <UiContentWrapper>
        <slot></slot>
      </UiContentWrapper>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 80px;

  .fixed-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 60px;
    display: flex;
    align-items: center;
    background: $main-bg;
    z-index: 100;
  }
}
</style>
