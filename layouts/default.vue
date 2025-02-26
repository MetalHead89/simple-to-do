<template>
  <div class="main-wrapper">
    <slot></slot>

    <ModalsContainer />
  </div>
</template>

<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>

<style lang="scss" scoped>
.main-wrapper {
  padding-bottom: 20px;
}
</style>
