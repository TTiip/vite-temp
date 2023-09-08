import { describe, expect, it, vi } from 'vitest'
import { doubleUserAge, doubleUserAgeByFn } from './use-class'

vi.mock('./user.ts', () => {
  return {
    User: class User {
      age = 2
      getAge () {
        return 12
      }
    },
  }
})
describe('使用class的形式', () => {
  it('属性', () => {
    const r = doubleUserAge()
    expect(r).toBe(4)
  })

  it('方法', () => {
    const r = doubleUserAgeByFn()
    expect(r).toBe(24)
  })
})
