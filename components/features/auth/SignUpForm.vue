<template>
  <div class="sign-up-form">
    <UiTitle>
      Регистрация
    </UiTitle>

    <form
      class="form"
      @submit.prevent="handleSubmit"
    >
      <UiInputText
        v-model.trim="form.name"
        placeholder="Логин"
      />

      <UiInputPassword
        v-model.trim="form.password"
        type="password"
        placeholder="Пароль"
      />

      <UiInputPassword
        v-model.trim="form.retryPassword"
        type="password"
        placeholder="Повтор пароля"
      />

      <UiButtonFilled type="submit">
        Зарегистрироваться
      </UiButtonFilled>
    </form>

    <div class="bottom-section">
      Уже зарегистрированы?

      <UiButtonOnlyContent
        type="submit"
        @click="$emit('change-auth-screen')"
      >
        Войти
      </UiButtonOnlyContent>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const { showErrors } = useRequestErrors()

const form = reactive({
  name: '',
  password: '',
  retryPassword: ''
})

defineEmits(['change-auth-screen'])
const handleSubmit = () => {
  $api.auth.signUp(form)
    .catch((error: unknown) => {
      showErrors(error)
    })
}
</script>

<style lang="scss" scoped>
.sign-up-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-height: 370px;

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .bottom-section {
    margin-top: auto;
    color: $main-bg;
    display: flex;
    gap: 5px;

    .button-only-content {
      color: $primary-color;
    }
  }
}
</style>
