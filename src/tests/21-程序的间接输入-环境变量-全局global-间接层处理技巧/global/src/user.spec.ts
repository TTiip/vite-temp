import { beforeEach, describe, expect, it, vi } from 'vitest'
import { doubleInnerWidth, doubleInnerWidthByFn, doubleUserAge } from './user'

// 间接层 处理需要获取的数据 使用 mock 统一模拟
vi.mock('./window.ts', async importOrigin => {
  const config = await importOrigin()
  return Object.assign({}, config, {
    innerHeightFn: () => 200,
  })
})

beforeEach(() => {
  vi.unstubAllGlobals()
})
describe('doubleUserAge', () => {
  it('doubleUserAge', () => {
    vi.stubGlobal('cxr', { age: 16 })
    const r = doubleUserAge()

    expect(r).toBe(32)
  })

  it('double innerWidth', () => {
    // window
    vi.stubGlobal('window', { innerHeight: 200 })

    const r = doubleInnerWidth()

    expect(r).toBe(400)
  })

  // 间接层 处理方式
  it('double innerWidthByFn', () => {
    const r = doubleInnerWidthByFn()

    expect(r).toBe(400)
  })
})

