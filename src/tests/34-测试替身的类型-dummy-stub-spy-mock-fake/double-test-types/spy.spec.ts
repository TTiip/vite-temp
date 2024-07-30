import { describe, expect, test, vi } from 'vitest'
import { user } from './spy'

test('spy', () => {
  vi.spyOn(user, 'getName').mockImplementationOnce(() => 'xxx1')

  const result = user.getName()

  expect(result).toBe('xxx1')
  expect(user.getName).toBeCalledTimes(1)
})
