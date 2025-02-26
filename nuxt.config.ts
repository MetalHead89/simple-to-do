// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    'nuxt-snackbar',
    'nuxt-mongoose'
  ],

  mongoose: {
    uri: process.env.MONGODB_URI,
    options: { dbName: process.env.MONGODB_DB_NAME },
    modelsDir: 'models',
    devtools: true
  },

  snackbar: {
    bottom: true,
    duration: 5000
  },

  css: [
    '@/assets/styles/global.scss',
    'vue-final-modal/style.css'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/styles/variables.scss" as *;'
        }
      }
    }
  },

  runtimeConfig: {
    accessTokenSalt: process.env.ACCESS_TOKEN_SALT,
    refreshTokenSalt: process.env.REFRESH_TOKEN_SALT
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})