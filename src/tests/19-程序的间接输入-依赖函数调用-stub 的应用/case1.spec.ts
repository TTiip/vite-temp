import { beforeEach, describe, expect, it, vi } from 'vitest'
import { fetchUserAge, userAge } from './user'
import { doubleUserAge, fetchDoubleUserAge } from './index'

// stub 存根 即替换掉真实的逻辑实现
// mock 传入的值 实现测试逻辑的完整
// 例1: 相当于全局mock
// vi.mock('./user.ts', () => {
//   return {
//     userAge: () => 2,
//   }
// })

// 是否可以控制简介输入的值呢？(user userAge)
// describe('间接input1', () => {
//   it('first1', () => {
//     const r = doubleUserAge()
//     expect(r).toBe(4)
//   })

//   it('second1', () => {
//     // 全局状态 下修改可通过
//     expect(userAge()).toBe(2)
//   })
// })

// 例2: 各各测试直接不影响
// vi.mock('./user.ts')

// describe('间接input2', () => {
//   it('first2', () => {
//     // 每个测试单独设置
//     vi.mocked(userAge).mockReturnValue(2)
//     const r = doubleUserAge()
//     expect(r).toBe(4)
//   })

//   it('second2', () => {
//     vi.mocked(userAge).mockReturnValue(1999)
//     // 全局状态 下修改可通过
//     expect(userAge()).toBe(1999)
//   })
// })

// 例3: doMock
// describe('间接inpu4', () => {
//   it('firs4', async () => {
//     // 在下次调用的导入的时候生效
//     vi.doMock('./user.ts', () => {
//       return {
//         userAge: () => 1222,
//       }
//     })
//     const { doubleUserAge } = await import('./index')
//     const r = doubleUserAge()
//     expect(r).toBe(2444)
//   })

//   it('second4', () => {
//     // 原本的值不会被修改
//     expect(userAge()).toBe(4)
//   })
// })

// 例4: 例3一般结合 beforeEach 一起使用
// describe('间接inpu4', () => {
//   beforeEach(() => {
//     // 在下次调用的导入的时候生效
//     vi.doMock('./user.ts', () => {
//       return {
//         userAge: () => 1222,
//       }
//     })
//   })
//   it('firs4', async () => {
//     const { doubleUserAge } = await import('./index')
//     const r = doubleUserAge()
//     expect(r).toBe(2444)
//   })

//   it('second4', () => {
//     // 原本的值不会被修改
//     expect(userAge()).toBe(4)
//   })
// })

// 例5: 异步的情况
describe('间接inpu5', () => {
  beforeEach(() => {
    // 在下次调用的导入的时候生效
    vi.mock('./user.ts', () => {
      return {
        fetchUserAge: () => Promise.resolve(35),
      }
    })
  })
  it('firs5', async () => {
    const r1 = await fetchUserAge()
    const r2 = await fetchDoubleUserAge()
    expect(r2).toBe(r1 * 2)
  })
})
