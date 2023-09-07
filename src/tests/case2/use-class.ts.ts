import { User } from './user'

function doubleUserAge (): number {
  const user = new User()
  console.log(user)

  // return user.getAge() * 2;
  return user.age * 2
}

export {
  doubleUserAge,
}
