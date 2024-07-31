import { expect, test } from 'vitest'
import { Dog } from './gc'

test('gc', () => {
  // 临时的数据
  // 新鲜的夹具
  const dog = new Dog('heihei')

  expect(dog.sayHi()).toBe('hi, my name is heihei. How are you')

  // 垃圾回收机制 会自动回收 (当前作用域内才会生效)
  // dog.clear()
  // dog = null
})
