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
