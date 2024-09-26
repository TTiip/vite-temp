import { describe, test } from 'vitest'

// test suit
// describe 创建一个测试套件 可以理解为将很多 test 的例子打包起来（一般是把相同行为的例子放一起方便维护）
describe('测试套件的名称', () => {
  test('should add a item', () => {})
})

// 跳过这个测试集
describe.skip('skip', () => {})

// 仅这个测试集
describe.only('only', () => {
  test('only - test', () => {})
})
