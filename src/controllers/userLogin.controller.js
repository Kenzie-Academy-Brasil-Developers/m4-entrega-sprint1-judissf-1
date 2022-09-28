import users from '../database'
import userLoginService from '../services/userLogin.service'

const userLoginController = (request, response) => {
 const user = request.body

 const findUser = users.find((dataUser) => dataUser.email === user.email)
 
 if (!findUser) {
  return response.status(401).json({ message: 'Wrong email/password' })
 }

 

 try {
  const token = userLoginService(user)
  return response.status(200).json({'token': token})
 } catch (error) {
  return response.status(401).json({ message: error.message })
 }
}

export default userLoginController
