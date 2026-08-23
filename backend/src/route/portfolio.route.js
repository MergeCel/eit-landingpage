import { Router } from 'express'
import * as PortfolioController from '../controller/portfolio.controller.js'

const router = Router()

router.get('/', PortfolioController.list)
router.get('/:slug', PortfolioController.getBySlug)

export default router
