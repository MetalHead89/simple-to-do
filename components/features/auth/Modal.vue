<template>
  <UiModalBase>
    <div class="auth-modal">
      <Transition name="slide-left" mode="out-in">
        <FeaturesAuthSignInForm v-if="authScreen === 'logIn'" @change-auth-screen="authScreen = 'signUp'" />
        <FeaturesAuthSignUpForm v-else @change-auth-screen="authScreen = 'logIn'" />
      </Transition>
    </div>
  </UiModalBase>
</template>

<script setup lang="ts">
type TAuthScreen = 'logIn' | 'signUp'

const authScreen = ref<TAuthScreen>('logIn')
</script>

<style lang="scss" scoped>
.auth-modal {
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all 0.25s ease-out;
  }

  .slide-left-enter-from {
    opacity: 0;
    transform: translateX(50px);
  }

  .slide-left-leave-to {
    opacity: 0;
    transform: translateX(-50px);
  }
}
</style>
