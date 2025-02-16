<template>
  <div class="content-wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;

  .content {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;

    @media screen and (min-width: $sm) {
      padding: 0 40px;
    }

    @media screen and (min-width: $md) {
      padding: 0 80px;
    }
  }
}
</style>
