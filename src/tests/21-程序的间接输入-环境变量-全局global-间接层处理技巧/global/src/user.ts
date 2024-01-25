import { innerHeightFn } from './window'

export function doubleUserAge () {
  // const userAge = localStorage.getItem('userAge')
  // return Number(userAge) * 2
  return cxr.age * 2
}

export function doubleInnerWidth () {
  return window.innerHeight * 2
}

export function doubleInnerWidthByFn () {
  return innerHeightFn() * 2
}
