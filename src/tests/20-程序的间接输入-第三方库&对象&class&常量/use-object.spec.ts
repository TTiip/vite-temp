import { describe, expect, it } from 'vitest'
import { tellAge, tellByFunction } from './use-object'
import { config } from './config'

describe('使用对象的形式', () => {
  it('属性', () => {
    // case1
    config.allowTellAge = true
    const age = tellAge()
    expect(age).toBe(18)

    // case2
    // given
    config.allowTellAge = false
    const age1 = tellAge()
    expect(age1).toBe('就不告诉你')
  })

  it('方法', () => {
    // case3
    config.getAge = () => 200
    const flag = tellByFunction()
    expect(flag).toBe('不是165岁')
  })
})
