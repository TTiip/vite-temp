import { afterEach, describe, expect, it } from 'vitest'
import { getCount, increment, reset } from './counterFunction'

describe('counter function', () => {
  afterEach(() => {
    reset()
  })
  it('increment', () => {
    increment()

    expect(getCount()).toBe(1)
  })
  it('second', () => {
    increment()

    expect(getCount()).toBe(1)
  })
})
