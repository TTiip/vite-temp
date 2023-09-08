import { expect, test, vi } from 'vitest'
import axios from 'axios'
import { doubleUserAge } from './third-party-modules'

vi.mock('axios')

test('第三方模块的处理 axios', async () => {
  // vi.mocked(axios).mockResolvedValue({
  //   name: 'cxr',
  //   age: 2,
  // })
  vi.mocked(axios.get).mockResolvedValue({
    name: 'cxr',
    age: 2,
  })

  const r = await doubleUserAge()
  expect(r).toBe(4)
})
