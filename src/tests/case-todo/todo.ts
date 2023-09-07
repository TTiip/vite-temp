import { defineStore } from 'pinia'
import { ref } from 'vue'

interface TodoType {
	title: string
}

const useTodoStore = defineStore('useTodoStore', () => {
  const todos = ref<TodoType[]>([])

  const addTodo = (title: string) => {
    todos.value?.push({ title })
  }

  return {
    todos,
    addTodo,
  }
})

export {
  useTodoStore,
}
