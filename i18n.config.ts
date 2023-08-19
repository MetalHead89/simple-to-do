import ru from '@/locales/ru'
import en from '@/locales/en'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru,
    en
  }
}))
