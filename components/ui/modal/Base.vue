<template>
  <VueFinalModal
    class="base-modal-window"
    content-class="base-modal-window__content"
    overlay-transition="vfm-fade"
    content-transition="vfm-slide-down"
  >
    <slot></slot>
  </VueFinalModal>
</template>

<script lang="ts" setup>
import { VueFinalModal } from 'vue-final-modal'

// const emit = defineEmits(['close'])

// const handleOkClick = () => {
//   emit('close')
// }

// const handleModalBeforeClose = () => {
//   emit('close')
// }
</script>

<style lang="scss">
.base-modal-window {
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 8px 8px 0px #0000001F;
    padding: 40px;
    width: 100%;
    max-width: 483px;
    box-sizing: border-box;
  }
}
</style>
