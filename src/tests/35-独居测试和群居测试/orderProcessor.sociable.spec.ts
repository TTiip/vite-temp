import { expect, test, vi } from 'vitest'
import { sendEmail } from './EmailService'
import { updateStock } from './InventoryService'
import { OrderProcessor } from './orderProcessor'

vi.mock('./EmailService.ts', () => {
  return {
    sendEmail: vi.fn(),
  }
})

// 群居
test('processOrder should succeed when there is enough stock', () => {
  // setup
  updateStock({ name: 'hei', count: 1 })

  const orderProcessor = new OrderProcessor()

  orderProcessor.processOrder({ name: 'hei', count: 1 })

  expect(sendEmail).toBeCalled()
})
