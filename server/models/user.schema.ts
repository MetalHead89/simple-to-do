import { defineMongooseModel } from '#nuxt/mongoose'

export type TUserModel = {
  name: string;
  password: string;
  id: string;
}

export const UserSchema = defineMongooseModel<TUserModel>(
  'User', {
    name: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true }
  }, {
    toJSON: {
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id.toString()
        delete ret._id
        delete ret.__v
      }
    }
  }
)
