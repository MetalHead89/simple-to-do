import type Joi from 'joi'

export default <T>(schema: Joi.ObjectSchema<T>, body: unknown) => {
  const { error: errors } = schema.validate(body, { abortEarly: false })

  if (!errors) {
    return null
  }

  const formattedErrors: Record<string, string[]> = {}

  errors.details.forEach(error => {
    const field = error.path[0] as string

    if (!formattedErrors[field]) {
      formattedErrors[field] = []
    }

    formattedErrors[field].push(error.message)
  })

  return formattedErrors
}
