import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (user) => {
 const findUser = users.find((dataUser) => dataUser.email === user.email)

 const token = jwt.sign({ uuid: findUser.uuid }, 'SECRET_KEY', {
  expiresIn: '24h',
  subject: `${findUser.isAdm}`
 })

 const passwordMatch = bcrypt.compareSync(user.password, findUser.password)

 if (!passwordMatch) {
  throw new Error("Wrong email/password")
 }

 return token
}

export default userLoginService