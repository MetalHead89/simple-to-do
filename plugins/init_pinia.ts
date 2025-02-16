import type { TTodo } from '@/types'

export default defineNuxtPlugin(async () => {
  const { setTodos } = useTodosStore()
  setTodos((useCookie('todos').value || []) as TTodo[])
})
