import users from '../database'
import * as bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

const createUserService = async (user) => {
 const { name, email, password, isAdm } = user
 
 const hashedPassword = await bcrypt.hash(password, 10)

 const newUser = { 
  name, 
  email, 
  password: hashedPassword, 
  isAdm, 
  createdOn: Date(), 
  updatedOn: Date(), 
  uuid: uuidv4() 
 }

 users.push(newUser)

 const showUser = { 
  uuid: newUser.uuid, 
  createdOn: newUser.createdOn, 
  updatedOn: newUser.updatedOn, 
  name: newUser.name, 
  email: newUser.email, 
  isAdm: newUser.isAdm 
 }

 return showUser
}

export default createUserService