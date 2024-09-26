import type { Recipient } from './dummy'
import { describe, it, test } from 'vitest'
import { sendEmail } from './dummy'

describe('emailService', () => {
  it('should send email', () => {
    const message = {
      subject: 'Test Subject',
      body: 'Test Body',
    }

    const dummyRecipient: Recipient = {
      email: '',
      name: '',
    }

    sendEmail(message, dummyRecipient)
  })

  test('dummy', () => {
    const message = {
      subject: 'subject',
      body: 'body',
    }

    // const dummyRecipient: Recipient = {
    //   email: '',
    //   name: '',
    // }
    // 核心 就是和当前要测试的功能无关的代码不要写
    const dummyRecipient = {} as Recipient

    sendEmail(message, dummyRecipient)
  })
})
