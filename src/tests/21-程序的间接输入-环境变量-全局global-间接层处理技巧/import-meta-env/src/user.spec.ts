import { expect, it, vi } from 'vitest'
import { userAge } from './env'
import { doubleUserAge, doubleUserAgeNew } from './user'

vi.mock('./env')

it('doubleUserAge', () => {
  vi.stubEnv('VITE_USER_AGE', '99')

  const r = doubleUserAge()

  expect(r).toBe(198)

  vi.unstubAllEnvs()
})

it('doubleUserAgeNew', () => {
  vi.mocked(userAge).mockReturnValue(2)

  const r = doubleUserAgeNew()

  expect(r).toBe(4)
})
