import { expect, test } from 'vitest'
// import { Window } from 'happy-dom'
import { getName } from './browser-env'

test('browser-env', () => {
  // const window = new Window()
  // console.log(window)
  // globalThis.localStorage = window.localStorage

  // globalThis.localStorage = {
  //   getItem () {
  //     return 'cxr'
  //   },
  //   setItem (key, value) {
  //     return value
  //   },
  // }
  localStorage.setItem('name', 'cxr')
  expect(getName()).toBe('cxr')
})
