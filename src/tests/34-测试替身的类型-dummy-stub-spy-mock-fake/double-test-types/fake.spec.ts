import { expect, test, vi } from 'vitest'
// 现在，你的代码将使用我们的 Fake `socket.io` 而不是真实的 `socket.io`
import { addListener, initSocket } from './fake.socket'

class FakeSocket {
  private listeners: { [key: string]: ((...args: any[]) => void)[] } = {}

  // 模拟 `on` 方法，用于监听事件
  on (event: string, listener: (...args: any[]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(listener)
  }

  // 用于在测试中手动触发事件，模拟从服务器接收到消息
  trigger (event: string, ...args: any[]) {
    const eventListeners = this.listeners[event]
    if (eventListeners) {
      eventListeners.forEach(listener => listener(...args))
    }
  }
}

function io () {
  return new FakeSocket()
}

vi.mock('socket.io-client', () => {
  return {
    default: io,
  }
})

test('should handle messages from the server', () => {
  const mockListener = vi.fn()
  addListener(mockListener)

  const socket = initSocket()

  // 手动触发 "message" 事件，模拟从服务器接收到消息
  socket.trigger('message', 'Hello, world!')

  expect(mockListener).toHaveBeenCalledWith('Hello, world!')
})
