<template>
  <div class="lang-switcher">
    <label
      v-for="({ key, name }) in LANGUAGES"
      :key="key"
      :class="['lang-item', currentLang === key && 'checked']"
    >
      {{ name }}
      <input
        type="radio"
        name="langSwitcher"
        :value="key"
        :checked="currentLang === key"
        class="radio"
        @input="handleRadioInput"
      >
    </label>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })
const { $constants } = useNuxtApp()

const DEFAULT_LANG = 'ru'
const LANGUAGES = [
  { key: 'ru', name: 'Ru' },
  { key: 'en', name: 'En' }
]

const currentLang = ref(DEFAULT_LANG)

onMounted(() => {
  setLocale(localStorage.getItem($constants.LOCALE_LS_KEY) ||  DEFAULT_LANG)
})

const handleRadioInput = ({ target }: Event) => {
  setLocale((target as HTMLInputElement).value)
}

const setLocale = (lang: string) => {
  currentLang.value = lang
  localStorage.setItem($constants.LOCALE_LS_KEY, lang)
  locale.value = lang
}
</script>

<style lang="scss" scoped>
  .lang-switcher {
    position: absolute;
    display: flex;
    gap: 10px;
    top: 20px;
    right: 20px;
    user-select: none;

    .lang-item {
      cursor: pointer;
      font-size: 13px;
      color: $muted-primary;
      transition: color $default-transition;
      position: relative;

      &.checked {
        color: $primary
      }

      &:hover {
        color: $primary;
      }

      &:not(:last-child)::after {
        content: '|';
        position: absolute;
        right: -6px;
        color: $muted-primary;
        pointer-events: none;
      }
    }

    .radio {
      display: none;
    }
  }
</style>
