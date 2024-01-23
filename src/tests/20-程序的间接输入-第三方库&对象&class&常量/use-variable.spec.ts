import { describe, expect, it, vi } from 'vitest'
import { tellName } from './use-variable'

vi.mock('./config', async importOriginal => {
  const config = await importOriginal()
  return Object.assign({}, config, { name: 'xiaoxiang' })
})

describe('使用变量的形式', () => {
  it('属性 ', () => {
    // case1
    const name = tellName()
    expect(name).toBe('xiaoxiang-heiheihei')
  })
})
