import bcrypt from 'bcryptjs'
import { generateTokens } from '@/server/helpers/jwt'

import type { TUserModel } from '@/server/models/user.schema'

export const createUser = async (name: string, password: string) => {
  const existingUser = await findUser(name)

  if (existingUser) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Пользователь уже существует',
      data: {
        errors: {
          index: ['Пользователь уже существует']
        }
      }
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  return UserSchema.create({ name, password: hashedPassword })
}

export const findUser = (name: string) => {
  return UserSchema.findOne({ name })
}

export const  validatePassword = (inputPassword: string, userPassword: string) => {
  return bcrypt.compare(inputPassword, userPassword)
}

export const  getAuthData = (user: TUserModel) => {
  return {
    ...generateTokens(user.name),
    user: {
      name: user.name,
      id: user.id
    }
  }
}
