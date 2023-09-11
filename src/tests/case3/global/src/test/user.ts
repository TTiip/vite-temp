import { customerFn } from './window'

function doubleUserAge () {
  return cxr.age * 2
}

function doubleHeight () {
  return innerHeight * 2
}

function doubleCustomer () {
  return customerFn() * 2
}

export {
  doubleUserAge,
  doubleHeight,
  doubleCustomer,
}
