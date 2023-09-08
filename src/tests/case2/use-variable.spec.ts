import { describe, expect, it, vi } from 'vitest'
import { tellName } from './use-variable'

vi.mock('./config.ts', async importOriginal => {
  // 方法一 (推荐)
  // importOriginal方法 获取原来的配置参数
  // 通过 Object.assign 做属性合并
  // 避免修改了之前的配置项
  const config = await importOriginal()

  // // 方法二
  // const config = await vi.importActual('./config.ts')

  console.log(config, 'config')
  return Object.assign({}, config, {
    name: 'c',
  })
})

describe('使用变量的形式', () => {
  it('tellName', () => {
    const r = tellName()
    expect(r).toBe('c-heiheihei')
  })
})
