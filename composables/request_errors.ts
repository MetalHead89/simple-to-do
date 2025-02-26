import isServerResponseError from '@/helpers/type_guards/is_server_response_error'

export function useRequestErrors() {
  const snackbar = useSnackbar()

  const showErrors = (error: unknown) => {
    if (!isServerResponseError(error)) {
      snackbar.add({
        type: 'error',
        text: 'Произошла непредвиденная ошибка. Попробуйте позже'
      })
      return
    }

    Object.entries(error.data?.errors || {}).forEach(([_, value]) => {
      value.forEach(text => {
        snackbar.add({
          type: 'error',
          text
        })
      })
    })
  }

  return { showErrors }
}
