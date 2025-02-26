import { defineEventHandler, readBody } from 'h3'
import { findUser, validatePassword, getAuthData } from '@/server/services/user.service'
import { loginSchema } from '@/server/validators/auth'

const INCORRECT_CREDENTIALS_ERROR = {
  statusCode: 400,
  statusMessage: 'Incorrect username or password',
  data: {
    errors: {
      index: ['Неверное имя пользователя или пароль']
    }
  }
}

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event)
    const errors = validator(loginSchema, body)

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
    const user = await findUser(name)

    if (!user) {
      throw createError(INCORRECT_CREDENTIALS_ERROR)
    }

    const isValid = await validatePassword(password, user.password)

    if (!isValid) {
      throw createError(INCORRECT_CREDENTIALS_ERROR)
    }

    return getAuthData(user)
  } catch (error) {
    createRequestError(error)
  }
})
