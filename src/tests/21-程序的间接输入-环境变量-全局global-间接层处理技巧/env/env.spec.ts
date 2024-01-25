import { beforeEach, describe, expect, it, vi } from 'vitest'
import { doubleUserAge } from './env'

describe('process', () => {
  beforeEach(() => {
    // 重置所有设置的 环境变量
    vi.unstubAllEnvs()
  })

  it('first', () => {
    // 修改全局的 USER_AGE (一般配合 beforEach 一起使用)
    // case1
    // process.env.USER_AGE = '10'

    // case2
    vi.stubEnv('USER_AGE', '10')

    const r = doubleUserAge()
    expect(r).toBe(20)

    // 重置所有设置的 环境变量
    // vi.unstubAllEnvs()
  })

  it('second', () => {
    console.log(process.env.USER_AGE, 'process.env.USER_AGE111')
  })
})
