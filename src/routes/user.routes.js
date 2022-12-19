import { Router } from 'express'
const router = Router()

import * as UserCtl from '../controllers/user.controller'
import {authJwt, verifySignup} from '../middlewares'

//solo los admin pueden crear nuevos usarios 
router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkRolesExisted

],UserCtl.createUser);

export default router; 