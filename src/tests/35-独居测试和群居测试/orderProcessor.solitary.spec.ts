import { expect, test, vi } from 'vitest'
import { sendEmail } from './EmailService'
import { OrderProcessor } from './orderProcessor'

vi.mock('./EmailService', () => {
  return {
    sendEmail: vi.fn(),
  }
})

vi.mock('./InventoryService.ts', () => {
  return {
    // stub
    checkStock: () => true,
  }
})

// 独居
test('processOrder should succeed when there is enough stock', () => {
  const orderProcessor = new OrderProcessor()

  orderProcessor.processOrder({ name: 'hei', count: 1 })

  expect(sendEmail).toBeCalledTimes(1)
})
