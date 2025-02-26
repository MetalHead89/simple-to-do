import { createUser, getAuthData } from '@/server/services/user.service'
import { signUpSchema } from '@/server/validators/auth'

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const errors = validator(signUpSchema, body)

    if (errors) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Validation error',
        data: {
          errors
        }
      })
    }

    const { name, password } = body
    const user = await createUser(name, password)

    return getAuthData(user)
  } catch (error) {
    createRequestError(error)
  }
})
