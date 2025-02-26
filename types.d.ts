export type TTodoItem = {
  id: string,
  name: string,
  done: boolean
}

export type TTodo = {
  id: string,
  name: string,
  items: TTodoItem[]
}

export type TResponseError = {
  data?: {
    errors?: Record<string, string[]>
  },
  message: string,
  stack: string,
  statusCode: number,
  statusMessage: string,
  url: string
}
