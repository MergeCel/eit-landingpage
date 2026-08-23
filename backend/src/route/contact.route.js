import { Router } from 'express'
import * as ContactController from '../controller/contact.controller.js'

const router = Router()

router.get('/', ContactController.get)

export default router
