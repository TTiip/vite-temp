import flushPromises from 'flush-promises'
import { describe, expect, it } from 'vitest'
import { View } from './view'

describe('view', () => {
  it('should change count', async () => {
    const view = new View()

    view.render()
    await flushPromises()

    expect(view.count).toBe(3)
  })
})
