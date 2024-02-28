import { afterAll, afterEach, beforeAll, expect, test } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { server } from '../mocks/server'
import { mockAddTodo, mockRemoveTodo, mockTodoList } from '../mocks/handlers'
import { useTodoStore } from './todo'

test.todo('sad path')

test('add todo', async () => {
  // koa express
  server.use(mockAddTodo())

  setActivePinia(createPinia())
  const todoStore = useTodoStore()
  const title = '吃饭'

  // 调用
  await todoStore.addTodo(title)

  // 验证
  expect(todoStore.todos[0].title).toBe(title)
})

test('remove todo', async () => {
  server.use(mockAddTodo(), mockRemoveTodo())

  setActivePinia(createPinia())
  const todoStore = useTodoStore()
  const todo = await todoStore.addTodo('吃饭') // round-trip

  // 调用
  await todoStore.removeTodo(todo!.id)

  // 验证
  expect(todoStore.todos.length).toBe(0)
})

test('update todo list', async () => {
  const todoList = [{ id: 1, title: '写代码' }]
  server.use(mockTodoList(todoList))

  setActivePinia(createPinia())
  const todoStore = useTodoStore()
  await todoStore.updateTodoList()

  expect(todoStore.todos[0].title).toBe('写代码')
})
