import { useReveal } from '../hooks/useReveal'

const IG_URL = 'https://www.instagram.com/eit.works?igsi=MTZzMWQwNnAyMHhqbw=='

export default function Footer() {
  const reveal = useReveal(0, 0.4)

  return (
    <footer className="footer" ref={reveal} id="contact">
      <img
        src="/assets/footer.png"
        alt=""
        className="footer__bg"
        aria-hidden="true"
      />
      <div className="footer__bar">
        <a
          className="footer__link"
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
          <svg
            className="footer__star"
            viewBox="0 0 380 260"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              points="190,20 211.02,79.39 267.78,52.22 240.61,109.39 300,130 240.61,150.61 267.78,207.78 211.02,180.61 190,240 168.98,180.61 112.22,207.78 139.39,150.61 80,130 139.39,109.39 112.22,52.22 168.98,79.39"
              fill="#F3F0E9"
            />
          </svg>
        </a>
        <span className="footer__line" aria-hidden="true" />
        <span className="footer__mail">eitworksofc@gmail.com</span>
      </div>
    </footer>
  )
}
