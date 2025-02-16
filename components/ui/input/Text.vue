<template>
  <div :class="wrapperClasses">
    <input
      v-bind="$attrs"
      :value="model"
      type="text"
      class="input"
      @input="handleTextInput"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <slot name="end"></slot>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()
const isFocused = ref(false)

const handleTextInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  model.value = target.value
}

const wrapperClasses = computed(() => {
  return [
    'text-input',
    isFocused.value && 'text-input_is-focused'
  ]
})
</script>

<style lang="scss">
.text-input {
  width: 100%;
  background: $font-color;
  padding: 0 15px;
  border: none;
  box-sizing: border-box;
  border-radius: $base-border-radius;
  display: flex;
  gap: 10px;
  height: 46px;
  display: flex;
  align-items: center;

  .input {
    width: 100%;
    padding: 5px 0;
    background: initial;
    border: none;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  &_is-focused {
    outline: 2px solid #e0a34e;
  }
}
</style>
