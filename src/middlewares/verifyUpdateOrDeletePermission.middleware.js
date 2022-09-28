import jwt from 'jsonwebtoken'

const verifyUpdateOrDeletePermissionMiddleware = (request, response, next) => {
 const { uuid } = request.params
 
 let token = request.headers.authorization

 token = token.split(' ')[1]

 const user = jwt.decode(token)

 if ((user.uuid != uuid) && (user.sub === 'false')) {
  return response.status(401).json({ message: "Missing admin permissions" })
 }

 next()
}

export default verifyUpdateOrDeletePermissionMiddleware