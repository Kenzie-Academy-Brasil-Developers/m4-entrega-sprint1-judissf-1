import users from '../database'
import jwt from 'jsonwebtoken'

const verifyIsAdmMiddleware = (request, response, next) => {
 let token = request.headers.authorization

 token = token.split(' ')[1]

 const user = jwt.decode(token)

 const findUser = users.find((dataUser) => dataUser.uuid === user.uuid)

 if (findUser.isAdm === false) {
  return response.status(401).json({ message: "Unauthorized" })
 }

 next()
 
}

export default verifyIsAdmMiddleware