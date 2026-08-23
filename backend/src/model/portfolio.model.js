import { portfolioSeed } from '../data/seed.js'

const portfolio = [...portfolioSeed]

export const findAll = () => portfolio
export const findBySlug = (slug) => portfolio.find((p) => p.slug === slug)
