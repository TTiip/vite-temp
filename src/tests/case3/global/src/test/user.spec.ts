import { afterEach, expect, it, vi } from 'vitest'
import { doubleCustomer, doubleHeight, doubleUserAge } from './user'

// 全局mock 写在 测试case中的 beforeEach 中意义不大，所以直接写到最外面顶层
vi.mock('./window.ts', () => ({
  customerFn: () => {
    return 10000
  },
}))

afterEach(() => {
  vi.unstubAllGlobals()
})

it('global first', () => {
  vi.stubGlobal('cxr', { age: 18 })
  const r = doubleUserAge()
  expect(r).toBe(36)
})

it('global second', () => {
  vi.stubGlobal('innerHeight', 120)
  const r = doubleHeight()
  expect(r).toBe(240)
})

it('global second', () => {
  vi.stubGlobal('innerHeight', 120)
  const r = doubleHeight()
  expect(r).toBe(240)
})

it('global third', () => {
  const r = doubleCustomer()
  expect(r).toBe(20000)
})
