import { expect, it, vi } from 'vitest'
import { doubleUserAge } from './user'

it('import-meta-env first', () => {
  vi.stubEnv('USER_AGE', '5')
  const r = doubleUserAge()
  expect(r).toBe(10)
})
