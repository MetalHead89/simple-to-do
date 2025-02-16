import { defineStore } from 'pinia'
import type { TTodo } from '@/types'
const DEFAULT_NAME = 'Новый список'

export const useTodosStore = defineStore('todos', () => {
  const todosCookie = useCookie('todos', { maxAge: 60 * 60 * 24 * 256 })
  const todos = ref<TTodo[]>([])

  const setTodos = (newTodos: TTodo[]) => {
    todos.value = newTodos
  }

  const todoById = computed(() => (id: string) => {
    return todos.value.find(todo => todo.id === id)
  })

  const saveTodosToCookies = () => {
    todosCookie.value = JSON.stringify(todos.value)
  }

  const addTodoItem = (todoId: string, name: string) => {
    todos.value = todos.value.map(todo => {
      return todo.id === todoId ?
        { ...todo, items: [...todo.items, { id: new Date().getTime().toString(), name, done: false }] } :
        todo
    })

    saveTodosToCookies()
  }

  const addEmptyTodo = () => {
    let name: string | null = null
    let nameCounter = 1

    do {
      const tempName = DEFAULT_NAME + (nameCounter > 1 ? ` ${nameCounter}` : '')

      if (todos.value.find(({ name }) => name === tempName)) {
        nameCounter++
      } else {
        name = tempName
      }
    } while (!name)

    todos.value.push({ id: (todos.value.length + 1).toString(), name, items: [] })
    saveTodosToCookies()
  }

  const removeTodoById = (todoId: string) => {
    todos.value = todos.value.filter(({ id }) => id !== todoId)
    saveTodosToCookies()
  }

  const changeCompleteStatus = (todoId: string, itemId: string) => {
    todos.value = todos.value.map(todo => {
      if (todo.id !== todoId) {
        return todo
      }

      return {
        ...todo,
        items: todo.items.map(item => {
          return item.id === itemId ?
            { ...item, done: !item.done } :
            item
        })
      }
    })
  }

  const removeTodoItem = (todoId: string, itemId: string) => {
    todos.value = todos.value.map(todo => {
      if (todo.id !== todoId) {
        return todo
      }

      return {
        ...todo,
        items: todo.items.filter(item => item.id !== itemId)
      }
    })
  }

  return {
    setTodos,
    todos,
    addEmptyTodo,
    todoById,
    addTodoItem,
    removeTodoById,
    changeCompleteStatus,
    removeTodoItem
  }
})
