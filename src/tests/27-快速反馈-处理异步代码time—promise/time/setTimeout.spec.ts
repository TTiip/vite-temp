import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { User } from './setTimeout'

describe('setTimeout', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should fetch User data', () => {
    const user = new User('1')

    const callback = vi.fn()
    user.fetchData(callback, 1000)
    // vi.advanceTimersByTime(1000)
    vi.advanceTimersToNextTimer()

    expect(callback).toBeCalledWith('Data for user with id: 1')
  })

  it('should fetch User data allTime', () => {
    const user = new User('1')
    const userA = new User('1')

    const callback = vi.fn()
    user.fetchDataV2(callback)
    // vi.advanceTimersToNextTimer()

    const callbackA = vi.fn()
    userA.fetchDataV2(callbackA)
    // vi.advanceTimersToNextTimer()

    vi.runAllTimers()
    expect(callback).toBeCalledWith('Data for user with id: 1')
    expect(callbackA).toBeCalledWith('Data for user with id: 1')
  })
})
