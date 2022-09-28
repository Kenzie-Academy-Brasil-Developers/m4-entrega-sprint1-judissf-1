import users from "../database"

const deleteUserService = (uuid) => {
 const userIndex = users.find(user => user.uuid === uuid)
 
 users.splice(userIndex, 1)
}

export default deleteUserService