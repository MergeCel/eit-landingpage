import express from 'express'
import cors from 'cors'
import portfolioRoutes from '../route/portfolio.route.js'
import contactRoutes from '../route/contact.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/portfolio', portfolioRoutes)
app.use('/api/contact', contactRoutes)

export default app
