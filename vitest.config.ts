import { defineVitestConfig } from 'nuxt-vitest/config'
import path from 'path'

export default defineVitestConfig({
  test: {
    setupFiles: ['tests/unit.setup.ts'],
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        domEnvironment: 'jsdom'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
