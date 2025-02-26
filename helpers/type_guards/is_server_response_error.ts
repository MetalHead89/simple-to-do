import type { TResponseError } from '@/types'

export default (error: unknown): error is TResponseError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string' &&
    'stack' in error &&
    typeof error.stack === 'string' &&
    'statusCode' in error &&
    typeof error.statusCode === 'number' &&
    'statusMessage' in error &&
    typeof error.statusMessage === 'string' &&
    'url' in error &&
    typeof error.url === 'string'
  )
}
