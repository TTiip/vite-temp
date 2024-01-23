import { expect, test, vi } from 'vitest'
import axios from 'axios'
import { doubleUserAge } from './third-party-modules'

vi.mock('axios')

test('第三方模式的处理 axios', async () => {
  // vi.mocked(axios).mockResolvedValue({ name: 'cxr', age: 18 })
  vi.mocked(axios.get).mockResolvedValue({ name: 'cxr', age: 18 })

  const r = await doubleUserAge()

  expect(r).toBe(36)
})
