<template>
  <UiButtonOnlyContent
    class="profile-button"
    @click="handleAuthClick"
  >
    <i class="ic-user"></i>
  </UiButtonOnlyContent>
</template>

<script setup lang="ts">
import { FeaturesAuthModal } from '#components'
import { useModal } from 'vue-final-modal'

const { open } = useModal({
  component: FeaturesAuthModal
})

const handleAuthClick = () => {
  open()
}
</script>

<style lang="scss" scoped>
.profile-button {
  color: $font-color;
  font-size: 23px;
}
</style>
