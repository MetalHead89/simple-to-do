<template>
  <Component :is="type" class="title">
    <slot></slot>
  </Component>
</template>

<script setup lang="ts">
type THeader = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type TProps = {
  type?: THeader
}

withDefaults(defineProps<TProps>(), {
  type: 'h2'
})
</script>

<style lang="scss" scoped>
.title {
  color: $main-bg;
  font-size: 25px;
}
</style>
