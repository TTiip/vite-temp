import { User } from './User'

export function doubleUserAge (): number {
  const user = new User()
  console.log(user)

  return user.age * 2
}

export function doubleUserAgeByFunction (): number {
  const user = new User()
  console.log(user)

  return user.getAge() * 2
}
