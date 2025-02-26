import jwt from 'jsonwebtoken'

export const generateTokens = (userName: string) => {
  const { accessTokenSalt, refreshTokenSalt } = useRuntimeConfig()

  const accessToken = jwt.sign({ name: userName }, accessTokenSalt, { expiresIn: '15m' })
  const refreshToken = jwt.sign({ name: userName }, refreshTokenSalt, { expiresIn: '365' })

  return { accessToken, refreshToken }
}