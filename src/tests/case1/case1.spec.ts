import { describe, expect, it, vi } from 'vitest'
import { fetchUserAge } from './user'
import { doubleUserAge } from './index'

// 1.（全局修改）
// path  工厂函数
// 修改 path 中到处的函数、变量的值
// 通过 mock 将测试的数据和逻辑分离开来
// 替换掉真实的数据获取
// 编译后会提升到顶部
// vi.mock('./user.ts', () => {
//   return {
//     fetchUserAge: () => Promise.resolve(4),
//   }
// })

// 2.（局部修改）
vi.mock('./user.ts')

describe('间接input', () => {
  it('first', async () => {
    // 因为接收的 fetchUserAge 是一个 Promise 为了类型兼容 写的 Promise.resolve(4)
    vi.mocked(fetchUserAge).mockReturnValue(Promise.resolve(4))
    expect(await fetchUserAge()).toBe(4)
    expect(await doubleUserAge()).toBe(8)
  })

  // mock 以后的值文件导出的值都会修改成对应的修改值
  it('second', async () => {
    expect(await fetchUserAge()).toBe(4)
  })

  it('third', async () => {
    vi.mocked(fetchUserAge).mockReturnValue(Promise.resolve(10))
    expect(await fetchUserAge()).toBe(10)
    expect(await doubleUserAge()).toBe(20)
  })
})
