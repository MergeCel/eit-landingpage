import { useReveal } from '../hooks/useReveal'

export default function Footer() {
  const reveal = useReveal()

  return (
    <footer className="footer" ref={reveal} id="contact">
      <img
        src="/assets/footer.svg"
        alt=""
        className="footer__bg"
        aria-hidden="true"
      />
    </footer>
  )
}
