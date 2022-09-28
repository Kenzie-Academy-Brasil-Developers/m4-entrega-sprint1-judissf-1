import { Router } from 'express'
import createUserController from '../controllers/createUser.controller'
import deleteUserController from '../controllers/deleteUser.controller'
import listUserController from '../controllers/listUsers.controller'
import updateUserController from '../controllers/updateUser.controller'
import userLoginController from '../controllers/userLogin.controller'
import userProfileController from '../controllers/userProfile.controller'

import verifyIsAdmMiddleware from '../middlewares/verifyIsAdm.middleware'
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware'
import verifyUpdateOrDeletePermissionMiddleware from '../middlewares/verifyUpdateOrDeletePermission.middleware'

const routes = Router()

routes.post('/users', createUserController)
routes.post('/login',  userLoginController)
routes.get('/users', verifyTokenMiddleware, verifyIsAdmMiddleware, listUserController)
routes.get('/users/profile', verifyTokenMiddleware, userProfileController)
routes.patch('/users/:uuid', verifyTokenMiddleware, verifyUpdateOrDeletePermissionMiddleware, updateUserController)
routes.delete('/users/:uuid', verifyTokenMiddleware, verifyUpdateOrDeletePermissionMiddleware, deleteUserController)

export default routes