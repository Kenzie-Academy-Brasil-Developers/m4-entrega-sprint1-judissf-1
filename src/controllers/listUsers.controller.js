import listUserService from "../services/listUser.service"

const listUserController = (request, response) => {
 const listUsers = listUserService() 

 return response.status(200).json(listUsers)
}

export default listUserController