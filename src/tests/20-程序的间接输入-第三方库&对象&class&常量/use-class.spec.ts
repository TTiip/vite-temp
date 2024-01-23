import { describe, expect, it, vi } from 'vitest'
import { doubleUserAge, doubleUserAgeByFunction } from './use-class'

vi.mock('./User', () => ({
  User: class {
    age = 30
    getAge = () => 36
  },
}))

describe('使用class的形式', () => {
  it('属性', () => {
    const doubleAge = doubleUserAge()
    expect(doubleAge).toBe(60)
  })
  it('方法', () => {
    const doubleAge = doubleUserAgeByFunction()
    expect(doubleAge).toBe(72)
  })
})
