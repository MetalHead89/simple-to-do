import Joi from 'joi'

export const signUpSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Имя не может быть пустым',
    'any.required': 'Имя не может быть пустым'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Пароль не может быть пустым',
    'any.required': 'Пароль не может быть пустым'
  }),
  retryPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    'string.empty': 'Повторный пароль не может быть пустым',
    'any.required': 'Повторный пароль не может быть пустым',
    'any.only': 'Пароли не совпадают'
  })
})

export const loginSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'Имя не может быть пустым',
    'any.required': 'Имя не может быть пустым'
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Пароль не может быть пустым',
    'any.required': 'Пароль не может быть пустым'
  })
})
