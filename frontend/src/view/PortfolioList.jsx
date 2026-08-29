import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { PRODUCTS } from '../data/products'

export default function PortfolioList() {
  const spark = useReveal(0, 0.3)
  const head = useReveal(0, 0.3)
  const grid = useReveal(0, 0.3)

  return (
    <section className="portfolio" id="work">
      <div className="selected-projects reveal" ref={head}>
        <h2 className="selected-projects__heading">Selected Projects</h2>
        <p className="selected-projects__desc">
          Perfection is our minimum standard. We work fast, think strategically,
          and refine every single detail so your brand can flex hard in the
          digital world. Simple ideas, massive results.
        </p>
        <style>{`
          .selected-projects {
            width: 100%;
            margin: 0;
            padding: 1vh 4px 10vh;
            background-color: var(--color-cream);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: 24px;
          }
          .selected-projects__heading {
            font-family: var(--font-display);
            color: var(--color-black);
            font-size: clamp(1.2rem, 2.4vw, 2rem);
            line-height: 1;
            margin: 0;
            padding-left: 0;
            text-align: left;
            white-space: nowrap;
            text-transform: none;
          }
          .selected-projects__desc {
            font-family: var(--font-body);
            color: var(--color-black);
            font-size: 0.75rem;
            line-height: 1.5;
            max-width: 45%;
            margin: 0 0 0 20px;
            padding-right: 0px;
            text-align: left;
            text-transform: none;
          }
          @media (max-width: 720px) {
            .selected-projects {
              flex-direction: column;
              align-items: flex-start;
              gap: 16px;
              padding: 6vh 6px 8vh;
            }
            .selected-projects__heading {
              white-space: normal;
            }
            .selected-projects__desc {
              max-width: 100%;
            }
          }
        `}</style>
      </div>

      <div className="portfolio__grid reveal" ref={grid}>
        {PRODUCTS.map((product, i) => (
          <article
            key={product.slug}
            className={i === 0 ? 'project-card project-card--featured' : 'project-card'}
          >
            <Link to={`/work/${product.slug}`} className="project-card__link">
              <div className="project-card__media">
                {product.link ? (
                  <a href={product.link} target="_blank" rel="noreferrer">
                    <img src={product.src} alt={product.title} loading="lazy" />
                  </a>
                ) : (
                  <img src={product.src} alt={product.title} loading="lazy" />
                )}
              </div>
              <h3 className="project-card__title">{product.title}</h3>
              <span className="project-card__tag">{product.tag}</span>
            </Link>
          </article>
        ))}
      </div>
            {/* Sub-section 3 : Lets Build */}
      <div className="home-energy" ref={spark}>
        <svg
          className="home-energy__spark"
          viewBox="0 0 40 40"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M20 0
              C20 18.5 21.5 20 40 20
              C21.5 20 20 21.5 20 40
              C20 21.5 18.5 20 0 20
              C18.5 20 20 18.5 20 0
              Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="home-energy__title">Let's build something big together.</h2>
        <p className="home-energy__desc">
          Turn your bold vision into a high-performing digital system.
        </p>
      </div>
    </section>
  )
}
