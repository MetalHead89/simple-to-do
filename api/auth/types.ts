export type TSignInRequestParams = {
    name: string;
    password: string;
}

export type TSignInResponse = {
  accessToken: string;
  refreshToken: string;
}

export type TSignUpRequestParams = {
  name: string;
  password: string;
  retryPassword: string
}

export type TSignUpResponse = {
  accessToken: string;
  refreshToken: string;
}

export type TAuthApi = {
  signIn: (params: TSignInRequestParams) => Promise<TSignInResponse>;
  signUp: (params: TSignUpRequestParams) => Promise<TSignUpResponse>;
}
