import { describe, expect, it } from 'vitest'
import flushPromises from 'flush-promises'
import { View } from './view'

describe('View', () => {
  it('should change count', async () => {
    const view = new View()

    view.render()
    await flushPromises()

    expect(view.count).toBe(3)
  })
})
