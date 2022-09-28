import users from '../database'
import jwt from 'jsonwebtoken'

const userProfileController = (request, response) => {
 let token = request.headers.authorization

 token = token.split(' ')[1]

 const user = jwt.decode(token)

 const findIndex = users.findIndex((dataUser) => dataUser.uuid === user.uuid)

 const { uuid, createdOn, updatedOn, name, email, isAdm } = users[findIndex]

 return response.status(200).json({ uuid, createdOn, updatedOn, name, email, isAdm })
}

export default userProfileController
