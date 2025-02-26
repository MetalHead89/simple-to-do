<template>
  <UiInputText :type="type" v-bind="$attrs">
    <template #end>
      <UiButtonOnlyContent @click="handleTypeButtonClick">
        <i :class="iconClasses"></i>
      </UiButtonOnlyContent>
    </template>
  </UiInputText>
</template>

<script setup lang="ts">
const type = ref('password')

const iconClasses = computed(() => {
  return [
    'icon',
    type.value === 'password' ? 'ic-eye-off-outline' : 'ic-eye-outline'
  ]
})

const handleTypeButtonClick = () => {
  type.value = type.value === 'password' ? 'text' : 'password'
}
</script>

<style lang="scss">
.text-input {
  .icon {
    color: $main-bg;
    font-size: 20px;
  }
}
</style>
