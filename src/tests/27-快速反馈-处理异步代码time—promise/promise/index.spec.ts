import { describe, expect, it, vi } from 'vitest'
import { delay, fetchUserData } from './index'

describe('promise', () => {
  it('normal', async () => {
    const result = await fetchUserData()

    expect(result).toBe('1')
  })

  it('delay', async () => {
    vi.useFakeTimers()

    // 错误示例！！！
    // vi.advanceTimersToNextTimer()
    // const result = await delay(1000)

    // 正确示例！！！
    const result = delay(100)
    vi.advanceTimersToNextTimer()

    // 拿到 promise 里面 reslove 出来的值
    expect(result).resolves.toBe('ok')
  })
})
