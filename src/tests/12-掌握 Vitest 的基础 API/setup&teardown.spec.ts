import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from 'vitest'

// 1.执行顺序
// (1)所有的执行case执行之前执行beforeAll（仅执行一次）！！！
// (2)每一个测试case 执行之前执行每一个 beforeEach
// (3)每一个测试case
// (4)每一个测试case 执行之后执行每一个 afterEach
// (5)所有的执行case执行之后执行afterAll（仅执行一次）！！！

// 数据库的连接
// 创建临时文件
beforeAll(() => {
  console.log('beforeAll')
  // return () => {
  //   // return 的函数代表 afterAll
  //   console.log('afterAll in beforeAll')
  // }
})

// pinia 创建store
beforeEach(() => {
  console.log('beforeEach')
  // return () => {
  //   // return 的函数代表 afterEach
  //   console.log('afterEach in beforeEach')
  // }
})

test('first', () => {
  console.log('first')
})

test('second', () => {
  console.log('second')
})

// 每次执行之后的操作 拆卸数据等
afterEach(() => {
  console.log('afterEach')
})

// 只执行一次 最后的的位置
// 数据库断开链接
// 临时文件的删除
afterAll(() => {
  console.log('afterAll')
})

describe('sub', () => {
  beforeEach(() => {
    console.log('sub: beforeEach')
  })

  test('first', () => {
    console.log('sub: first')
  })

  test('second', () => {
    console.log('sub: second')
  })

  afterEach(() => {
    console.log('sub: afterEach')
  })
})
// 2.什么时候使用
