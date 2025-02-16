<template>
  <button class="button" v-bind="$attrs" :type="type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type TProps = {
  type?: 'button' | 'submit';
}

withDefaults(defineProps<TProps>(), {
  type: 'button'
})
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
}
</style>
