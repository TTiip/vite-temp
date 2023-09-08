import { User } from './user'

function doubleUserAgeByFn (): number {
  const user = new User()
  console.log(user)

  return user.getAge() * 2
}

function doubleUserAge (): number {
  const user = new User()
  console.log(user)

  return user.age * 2
}

export {
  doubleUserAgeByFn,
  doubleUserAge,
}
