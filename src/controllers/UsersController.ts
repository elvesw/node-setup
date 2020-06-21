import { User } from '@models/User'
import { Request, Response } from 'express'

class UsersController {
  teste (request: Request, response: Response) {
    const user = new User()
    user.name = 'user 01'
    user.email = 'user01@rmail.com'
    return response.json(user)
  }
}

export default UsersController
