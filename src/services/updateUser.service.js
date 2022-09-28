import users from "../database"

const updateUserService = (id, dataUser) => {
 const userIndex = users.findIndex(user => user.uuid === id)

 users[userIndex] = {...users[userIndex], ...dataUser}

 const { uuid, createdOn, updatedOn, name, email, isAdm } = users[userIndex]

 return { uuid, createdOn, updatedOn, name, email, isAdm }
}

export default updateUserService