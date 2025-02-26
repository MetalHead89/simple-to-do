import type { NuxtApp } from '#app'
import type { TSignInRequestParams, TSignInResponse, TSignUpRequestParams, TSignUpResponse } from './types'

export default ({ $fetchService }: NuxtApp) => ({
  signIn: (params: TSignInRequestParams) => {
    return $fetchService.post<TSignInResponse>({ realm: 'api', path: '/auth/sign_in' }, params)
      .catch(({ data }) => Promise.reject(data))
  },

  signUp: (params: TSignUpRequestParams) => {
    return $fetchService.post<TSignUpResponse>({ realm: 'api', path: '/auth/sign_up' }, params)
      .catch(({ data }) => Promise.reject(data))
  }
})
