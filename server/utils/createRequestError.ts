import type { TResponseError } from '@/types'

export default (error: unknown) => {
  if (!error || (error as TResponseError).statusCode === 500) {
    throw createError({
      ...((error || {}) as TResponseError),
      data: {
        errors: {
          index: ['Неизвестная ошибка, попробуйте позже']
        }
      }
    })
  }

  throw createError(error)
}