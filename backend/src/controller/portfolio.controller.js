import * as PortfolioModel from '../model/portfolio.model.js'

export const list = (_req, res) => {
  res.json(PortfolioModel.findAll())
}

export const getBySlug = (req, res) => {
  const item = PortfolioModel.findBySlug(req.params.slug)
  if (!item) return res.status(404).json({ message: 'Portfolio not found' })
  res.json(item)
}
