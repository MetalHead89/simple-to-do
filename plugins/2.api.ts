import type { NuxtApp } from '#app'
import type { TApi } from '@/api/types'

const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

const lowercaseFirstLetter = (str: string) =>
  str.charAt(0).toLowerCase() + str.slice(1)

const capitalizeArray = (arr: string[]) => arr.map(key => capitalizeFirstLetter(key))

export default defineNuxtPlugin(async nuxtApp => {
  const api: TApi | object = {}
  const files = import.meta.glob('@/api/*/index.ts')

  for (const file in files) {
    if (typeof file !== 'string') {
      return
    }

    const key = lowercaseFirstLetter(
      capitalizeArray(
        file
          .split('/')[2]
          ?.replace('.ts', '')
          .split('_') || []
      ).join('')
    ) as keyof TApi

    const module = await files[file]() as { default: (nuxtApp: NuxtApp) => TApi[typeof key] }

    if (module) {
      (api as TApi)[key] = module.default(nuxtApp as NuxtApp)
    }
  }

  await nuxtApp.provide('api', api)
})
