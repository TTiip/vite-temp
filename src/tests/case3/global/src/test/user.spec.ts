import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { doubleCustomer, doubleHeight, doubleUserAge } from './user'

afterEach(() => {
  vi.unstubAllGlobals()
})

it('global first', () => {
  vi.stubGlobal('cxr', { age: 18 })
  const r = doubleUserAge()
  expect(r).toBe(36)
})

it('global second', () => {
  vi.stubGlobal('innerHeight', 120)
  const r = doubleHeight()
  expect(r).toBe(240)
})

it('global second', () => {
  vi.stubGlobal('innerHeight', 120)
  const r = doubleHeight()
  expect(r).toBe(240)
})

it('global third', () => {
  beforeEach(() => {
    vi.mock('./window.ts', () => ({
      customerFn: () => {
        return 10000
      },
    }))
  })
  const r = doubleCustomer()
  expect(r).toBe(20000)
})
