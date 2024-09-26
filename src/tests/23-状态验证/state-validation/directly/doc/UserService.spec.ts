import { describe, expect, it } from 'vitest'
import { Database } from './database'
import { UserService } from './UserService'

describe('userService', () => {
  it('should create user ', () => {
    const database = new Database()
    const userService = new UserService(database)

    const user = userService.createUser('cxr')

    expect(database.getUser(user.id)?.name).toBe('cxr')
    expect(userService.findUser(user.id)?.name).toBe('cxr')
  })
})
