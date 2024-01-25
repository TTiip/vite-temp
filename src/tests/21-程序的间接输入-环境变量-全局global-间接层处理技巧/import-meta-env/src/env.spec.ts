import { beforeEach, describe, expect, it, vi } from 'vitest'
import { doubleUserAge, doubleUserAgeNew } from './user'

beforeEach(() => {
  vi.unstubAllEnvs()
})

describe('import-meta-env', () => {
  it('first', () => {
    vi.stubEnv('VITE_USER_AGE', '2')
    const r = doubleUserAge()
    expect(r).toBe(4)
  })

  it('second', () => {
    vi.stubEnv('VITE_USER_AGE', '2')
    const r = doubleUserAgeNew()
    expect(r).toBe(4)
  })
})
