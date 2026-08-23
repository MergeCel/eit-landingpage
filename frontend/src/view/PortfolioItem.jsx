import { useReveal } from '../hooks/useReveal'
import { PRODUCTS } from '../data/products'

export default function PortfolioItem({ item, index }) {
  const reveal = useReveal(index * 150, 0.2)
  const side = index % 2 === 0 ? '--left' : '--right'
  const product = PRODUCTS.find((p) => p.slug === item?.slug) ?? PRODUCTS[index]
  const name = product?.title ?? item?.name
  const preview = `/assets/products/product${index + 1}p.svg`

  return (
    <li className="portfolio__item" ref={reveal}>
      <span className="portfolio__name">{name}</span>
      <span className="portfolio__bullet" aria-hidden="true">
        •
      </span>
      <img
        src={preview}
        alt={name}
        className={`portfolio__preview portfolio__preview${side}`}
      />
    </li>
  )
}
