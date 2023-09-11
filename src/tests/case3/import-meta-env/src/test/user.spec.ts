import { afterEach, expect, it, vi } from 'vitest'
import { doubleUserAge } from './user'

afterEach(() => {
  // 重置环境变量
  vi.unstubAllEnvs()
})

it('import-meta-env first', () => {
  vi.stubEnv('USER_AGE', '5')
  const r = doubleUserAge()
  expect(r).toBe(10)
})
