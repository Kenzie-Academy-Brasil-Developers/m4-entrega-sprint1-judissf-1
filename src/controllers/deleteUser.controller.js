import jwt from 'jsonwebtoken'
import deleteUserService from '../services/deleteUser.service'

const deleteUserController = (request, response) => {
 const { uuid } = request.params

 let token = request.headers.authorization

 token = token.split(' ')[1]

 const user = jwt.decode(token)

 if (user.uuid != uuid && user.sub === 'false') {
  return response.status(401).json({ message: 'Missing admin permissions' })
 }

 if (user.uuid == uuid && user.sub === 'true') {
  deleteUserService(uuid)
  return response.status(200).json({ message: 'User deleted with success' })
 }
 
 return response.status(200).json({ message: 'User deleted with success' })
}

export default deleteUserController
