import { expect, test } from 'vitest'

// 相当于 全等（===）
test('toBe', () => {
  expect(1).toBe(1)
})

// 两个对象之间的相等
test('toEqual', () => {
  const user = {
    name: 'xiaohong',
  }

  expect(user).toEqual({
    name: 'xiaohong',
  })
})

// 希望判断的值为 真
test('toBeTruthy', () => {
  expect(true).toBeTruthy()
  expect(1).toBeTruthy()
  expect('1234').toBeTruthy()
})

// 希望判断的值为 假
test('toBeFalsy', () => {
  expect('').toBeFalsy()
  expect(false).toBeFalsy()
  expect(0).toBeFalsy()
  expect(null).toBeFalsy()
  expect(undefined).toBeFalsy()
})

// 检测数组 字符串中是否包含某个值
test('toContain', () => {
  const item1 = {
    name: 'xiaohong',
  }
  const item2 = {
    name: 'xiaoming',
  }
  const item3 = {
    name: 'xiaohua',
  }
  const arr = [item1, item2]

  expect(arr).toContain(item1)
  // expect(arr).toContain(item3)

  const str = '<div>1234</div>'
  expect(str).toContain('1234')
})

// 检测是否会抛出一个 error
test('toThrow', () => {
  function getName (name: any): string {
    if (typeof name !== 'string') {
      throw new TypeError('传入的参数不是字符串')
    }
    return 'hei~'
  }
  // !!! 注意这里的必须要用一个函数包裹去调用!!!
  // toThrow 中接受一个参数用来检测是否抛出的错误信息一致
  expect(() => {
    getName(1)
  }).toThrow('传入的参数不是字符串')
})
