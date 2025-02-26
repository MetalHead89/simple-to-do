<template>
  <div class="log-in-form">
    <UiTitle>
      Авторизация
    </UiTitle>

    <form
      class="form"
      @submit.prevent="handleSubmit"
    >
      <UiInputText v-model="form.name" placeholder="Логин" />
      <UiInputPassword v-model="form.password" placeholder="Пароль" />

      <UiButtonFilled type="submit">
        Войти
      </UiButtonFilled>
    </form>

    <div class="bottom-section">
      Нет аккаунта?

      <UiButtonOnlyContent @click="$emit('change-auth-screen')">
        Зарегистрироваться
      </UiButtonOnlyContent>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $api } = useNuxtApp()
const { showErrors } = useRequestErrors()

defineEmits(['change-auth-screen'])

const form = reactive({
  name: '',
  password: ''
})

const handleSubmit = () => {
  $api.auth.signIn(form)
    .catch((error: unknown) => {
      showErrors(error)
    })
}
</script>

<style lang="scss" scoped>
.log-in-form {
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
