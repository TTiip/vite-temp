// user.test.js
import { describe, expect, it, vi } from 'vitest'
import { sendWelcomeEmail } from './stub'
import { getUserEmail } from './stub.database'

vi.mock('./stub.database', () => {
  return {
    getUserEmail: vi.fn(() => 'test@example.com'),
  }
})

it('sendWelcomeEmail sends email to the correct address', async () => {
  const result = sendWelcomeEmail(123)
  // 调用 getUserEmail 且调用参数为 123
  expect(getUserEmail).toHaveBeenCalledWith(123)

  expect(result).toBe('test@example.com')
})
