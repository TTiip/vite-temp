import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { sayHi } from './setInterval'

describe('setInterval', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should call one', () => {
    vi.spyOn(console, 'log')
    sayHi()
    // 对于嵌套情况

    // 写法一
    // 第一个 advanceTimersToNextTimer 是处理外部的 setTimeout
    // 第二个 advanceTimersToNextTimer 是处理内部的 setInterval
    vi.advanceTimersToNextTimer()
    vi.advanceTimersToNextTimer()

    // 写法二
    // 直接将时间快进时间之和
    // vi.advanceTimersByTime(1100)

    expect(console.log).toBeCalledWith('hi')
  })
})
