import { Link, useParams } from 'react-router-dom'
import { PRODUCTS } from '../data/products'
import { useReveal } from '../hooks/useReveal'
import Navbar from '../view/Navbar'
import Footer from '../view/Footer'
import './product.css'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = PRODUCTS.find((p) => p.slug === slug)
  const reveal = useReveal(100)

  if (!product) {
    return (
      <>
        <Navbar />
        <section className="product-detail product-detail--missing">
          <p className="product-detail__notfound">
            Sorry, we couldn&apos;t find that project.
          </p>
          <Link className="product-detail__back" to="/">
            Back to work
          </Link>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="product-detail reveal" ref={reveal}>
        <h1 className="product-detail__title">{product.title}</h1>

        <img
          className="product-detail__hero"
          src={product.heroImage}
          alt={`${product.title} hero`}
          loading="lazy"
        />

        <div className="product-detail__meta">
          <span className="product-detail__num">[01]</span>
          <span className="product-detail__tag">{product.tag}</span>
        </div>

        <div className="product-detail__body">
          {product.description
            .flatMap((block) => block.split('\n'))
            .filter((paragraph) => paragraph.trim().length > 0)
            .map((paragraph, i) => (
              <p className="product-detail__text" key={i}>
                {paragraph.trim()}
              </p>
            ))}
        </div>

        <img
          className="product-detail__gallery"
          src={product.galleryImage}
          alt={`${product.title} gallery`}
          loading="lazy"
        />

        <span className="product-detail__num product-detail__num--second">[02]</span>
      </main>
      <Footer />
    </>
  )
}
