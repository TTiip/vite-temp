import { describe, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTodoStore } from './todo'

describe('验证 useTodoStore 功能', () => {
  test('添加 todo', () => {
    setActivePinia(createPinia())
    const todoStore = useTodoStore()
    const title = '吃饭'

    todoStore.addTodo(title)

    expect(todoStore.todos[0].title).toBe(title)
  })
})
