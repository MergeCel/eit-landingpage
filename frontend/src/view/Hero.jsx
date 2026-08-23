import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const reveal = useReveal()

  return (
    <section className="hero" id="home" ref={reveal}>
      <img src="/assets/hero.svg" alt="eit" className="hero__title" />
      <img
        src="/assets/heroflower.svg"
        alt=""
        className="hero__flower"
        aria-hidden="true"
      />
    </section>
  )
}
