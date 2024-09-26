import { describe, expect, it, vi } from 'vitest'
import { Database } from './database'
import { UserService } from './UserService'

describe('userService', () => {
  it('should create user ', () => {
    // setup
    // Database.prototype.addUser = vi.fn()
    const database = new Database()

    vi.spyOn(database, 'addUser')
    console.log(database.addUser)

    // addUser.isCalled = false
    // addUser.isCalled = true
    const userService = new UserService(database)

    userService.createUser('cxr')

    expect(database.addUser).toBeCalled()
  })
})
