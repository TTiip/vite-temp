import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from 'vitest'

// 1.执行顺序
// beforeAll(仅会执行一次) --> beforeEach(每个case执行前都会调用) --> test测试case --> afterEach(每个case执行后都会调用) --> afterAll(仅会执行一次)

// 只执行一次 最开始的时候
// 数据库的连接
// 创建临时文件
beforeAll(() => {
  console.log('beforeAll')
  return () => {
    // return 的函数代表 afterAll
    console.log('afterAll in beforeAll')
  }
})

// pinia 创建store
beforeEach(() => {
  console.log('beforeEach')
  return () => {
    // return 的函数代表 afterEach
    console.log('afterEach in beforeEach')
  }
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
// 2.什么时候调用
