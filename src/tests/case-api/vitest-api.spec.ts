import { describe, expect, test } from 'vitest'

describe('测试常用的的api', () => {
  test('toBe', () => {
    expect(1).toBe(1)
  })

  test('toEqual', () => {
    const obj = {
      test: 'test1',
    }
    expect(obj).toEqual({
      test: 'test1',
    })
    expect(obj).toEqual(obj)
  })

  test('toBeTruthy', () => {
    expect(true).toBeTruthy()
    expect(1).toBeTruthy()
    expect('1').toBeTruthy()
  })

  test('toBeFalsy', () => {
    expect(false).toBeFalsy()
    expect(0).toBeFalsy()
    expect('').toBeFalsy()
  })

  test('toContain', () => {
    const item = {
      name: 'name',
    }

    const item1 = {
      name: 'name1',
    }

    const item2 = {
      name: 'name2',
    }

    const list = [item, item1]
    expect(list).toContain(item)
    expect(list).toContain(item1)
    // expect(list).toContain(item2) // false
  })

  test('toThrow', () => {
    const getName = (name: any) => {
      if (Object.prototype.toString.call(name).slice(8, -1) !== 'string') {
        throw new Error('传入的参数不对')
      }
      return name
    }
    // 传入一个函数调用 函数
    // toThrow 中还可以穿入参数去检测抛出错误的 massage 是否一致
    expect(() => {
      getName([])
    }).toThrow('传入的参数不对')
  })
})
