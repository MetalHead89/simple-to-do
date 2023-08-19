// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    '~/components',
    '~/components/ui'
  ],

  modules: [
    '@nuxtjs/i18n',
    'nuxt-vitest',
    '@pinia/nuxt'
  ],

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  css: ['@/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  }
})
