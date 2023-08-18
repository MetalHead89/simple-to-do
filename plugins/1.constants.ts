import constants from '@/config/constants'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      constants
    }
  }
})
