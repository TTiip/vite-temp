import { describe, expect, it } from 'vitest'
import { tellAge, tellByFunciotn } from './use-object'
import { config } from './config'

describe('使用对象的形式', () => {
  it('属性', () => {
    config.allowTellAge = false
    expect(tellAge()).toBe('就不告诉你')
  })

  it('方法', () => {
    config.getAge = () => {
      return 2
    }
    const r = tellByFunciotn()
    expect(r).toBe('no')
  })
})
