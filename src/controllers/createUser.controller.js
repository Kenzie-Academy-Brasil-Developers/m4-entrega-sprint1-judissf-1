import users from '../database'
import createUserService from '../services/createUser.service'

const createUserController = async (request, response) => {
 const user = request.body
 const findUser = users.find((dataUser) => dataUser.email === user.email)
 
 if (!findUser) {
  const userCreated = await createUserService(user)
  return response.status(201).json(userCreated)
 }
 if (findUser) {
  return response.status(400).json({
   message: 'E-mail already registered',
  })
 }
}

export default createUserController
