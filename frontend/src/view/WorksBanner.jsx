import { useReveal } from '../hooks/useReveal'

export default function WorksBanner() {
  const reveal = useReveal()

  return (
    <section className="works-banner" ref={reveal}>
      <div className="itworks">
        <img
          className="itworks__1"
          src="/assets/itworks/itworks1.png"
          alt="IT works"
        />
        <img
          className="itworks__2"
          src="/assets/itworks/itworks2.png"
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
