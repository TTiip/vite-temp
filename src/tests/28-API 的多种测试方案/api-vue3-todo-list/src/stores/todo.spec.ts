import axios from 'axios'
import { createPinia, setActivePinia } from 'pinia'
import { beforeAll, expect, test, vi } from 'vitest'
import { useTodoStore } from './todo'

beforeAll(() => {
  setActivePinia(createPinia())
})
vi.mock('axios')

test('add todo', async () => {
  // 准备数据
  const title = '吃饭'

  // 写法一
  // vi.mocked(axios.post).mockResolvedValue({
  //   data: {
  //     data: { todo: { id: 1, title } },
  //     state: 1,
  //   },
  // })

  // 写法二 (推荐)
  // 同过获取调用时候的参数 来设置返回值，如果不传 title 则获取为undefined 验证步骤就会不通过
  // 推荐使用这种写法
  vi.mocked(axios.post).mockImplementation((path, { title }: any) => {
    return Promise.resolve({
      data: {
        data: { todo: { id: 1, title } },
        state: 1,
      },
    })
  })

  const todoStore = useTodoStore()
  // 调用
  await todoStore.addTodo(title)
  // 验证
  // 数据的验证
  expect(todoStore.todos[0]?.title).toBe(title)

  // 写法一 才需要的配套验证
  // 因为 mock 了 post 请求还需要特别验证 参数是不是有问题
  // expect(axios.post).toBeCalledWith('/api/addTodo', { title })
})

test('should not add todo when title is empty string', async () => {
  const todoStore = useTodoStore()
  const title = ''

  // 调用
  await todoStore.addTodo(title)

  // 验证
  expect(todoStore.todos.length).toBe(0)
})

test('remove todo', async () => {
  const title = '吃饭'
  // 第一次mock addTodo的数据
  vi.mocked(axios.post).mockImplementationOnce((path: string, { title }: any) => {
    return Promise.resolve({
      data: {
        data: { todo: { id: 1, title } },
        state: 1,
      },
    })
  })
  // 第二次mock removeTodo的数据
  vi.mocked(axios.post).mockImplementationOnce((path: string, { id }: any) => {
    return Promise.resolve({
      data: {
        data: { id },
        state: 1,
      },
    })
  })
  // 准备数据 先添加一条数据
  const todoStore = useTodoStore()
  const todoItem = await todoStore.addTodo(title)
  // 调用
  await todoStore.removeTodo(todoItem!.id)
  // 验证
  expect(todoStore.todos.length).toBe(0)
})

test('should throw error when removed id does not exist ', async () => {
  // 准备数据
  vi.mocked(axios.post).mockImplementationOnce((path, { id }: any) => {
    return Promise.resolve({
      data: { data: null, state: 0 },
    })
  })

  const todoStore = useTodoStore()

  expect(async () => {
    // 调用
    await todoStore.removeTodo(2)
    // 抛出一个错误
  }).rejects.toThrowError('id:2 不存在')
})

test.only('update todo list', async () => {
  const todoList = [
    {
      id: 1,
      title: '打工',
    },
  ]
  vi.mocked(axios.get).mockImplementation(() => {
    return Promise.resolve({
      data: {
        data: { todoList },
      },
    })
  })

  const todoStore = useTodoStore()
  await todoStore.updateTodoList()

  expect(todoStore.todos[0].title).toBe('打工')
})
