import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from './src/mocks/server'

// setup msw
beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
