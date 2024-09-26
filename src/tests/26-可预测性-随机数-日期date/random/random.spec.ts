import { describe, expect, it, vi } from 'vitest'
import { generateRandomString } from './random'

describe('math.random', () => {
  it('should generate random string', () => {
    // vi.spyOn(Math, 'random').mockImplementation(() => {
    //   return 0.1
    // })
    vi.spyOn(Math, 'random').mockImplementationOnce(() => {
      return 0.1
    })
    vi.spyOn(Math, 'random').mockImplementationOnce(() => {
      return 0.2
    })

    const result = generateRandomString(2)

    expect(result).toBe('fc')
  })
})
