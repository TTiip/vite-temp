import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Hello from './hello'

describe('测试快照', () => {
  test('snapshot', () => {
    const wrapper = mount(Hello)
    const wrapperStr = wrapper.html()
    const obj = {
      name: 'xxx',
      age: 1,
    }
    expect(obj).toMatchSnapshot()
    expect(wrapperStr).toMatchSnapshot()
  })

  test('inline snapshot', () => {
    const obj = {
      name: 'xxx',
      age: 1,
    }
    expect(obj).toMatchInlineSnapshot(`
      {
        "age": 1,
        "name": "xxx",
      }
    `)
  })

  test('file snapshot', () => {
    const wrapper = mount(Hello)
    const wrapperStr = wrapper.html()
    expect(wrapperStr).toMatchFileSnapshot('./hello.html')
  })
})
