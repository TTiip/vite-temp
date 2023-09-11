import { afterEach, expect, it, vi } from 'vitest'
import { doubleUserAge } from './env'

afterEach(() => {
  // reset 重置环境变量的值为最初的值（一般配合afterEach一起使用）
  vi.unstubAllEnvs()
})
it('process 获取环境变量 first', () => {
  // 后续可以覆盖，但是不能reset重置为初始值
  process.env.USER_AGE = '2'
  const r = doubleUserAge()
  expect(r).toBe(4)
})

it('process 获取环境变量 secoend', () => {
  // 设置 环境变量值
  vi.stubEnv('USER_AGE', '3')
  const r = doubleUserAge()
  expect(r).toBe(6)
  // reset 重置环境变量的值为最初的值（一般配合afterEach一起使用）
  // vi.unstubAllEnvs()
  console.log(process.env.USER_AGE)
})
