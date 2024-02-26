import { describe, expect, it } from 'vitest'
import { Counter } from './counter'

describe('Counter', () => {
  it('increment', () => {
    // 0 -> 1
    const counter = new Counter()

    counter.increment()

    expect(counter.getCount()).toBe(1)
  })
})
