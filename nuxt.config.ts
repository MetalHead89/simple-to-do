// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    '~/components',
    '~/components/ui'
  ],

  modules: [
    'nuxt-vitest',
    '@pinia/nuxt'
  ],

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
