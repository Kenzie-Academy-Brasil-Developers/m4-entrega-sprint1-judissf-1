import updateUserService from '../services/updateUser.service'

const updateUserController = (request, response) => {
 const { uuid } = request.params

 const dataUser = request.body

 if (!uuid) {
  return response.status(404).json({ message: 'User not found' })
 }

 const updatedUser = updateUserService(uuid, dataUser)

 return response.status(200).json(updatedUser)
}

export default updateUserController
