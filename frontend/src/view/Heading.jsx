import { useReveal } from '../hooks/useReveal'

export default function Heading() {
  const reveal = useReveal()
  let i = 0

  const words = (text, className) => (
    <span className={className}>
      {text.split(' ').map((word) => (
        <span key={`${word}-${i}`} className="heading__word" style={{ ['--i']: i++ }}>
          {word}
        </span>
      ))}
    </span>
  )

  return (
    <section className="heading" ref={reveal}>
      <h1 className="heading__text">
        <span className="heading__row">
          {words('MISSION', 'heading__mission')}
          {words('WE BUILD DIGITAL', 'heading__inline')}
        </span>
        {words('STUFF THAT', 'heading__line')}
        {words('ACTUALLY HITS', 'heading__line')}
      </h1>
    </section>
  )
}
