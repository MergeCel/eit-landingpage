import { useReveal } from '../hooks/useReveal'

export default function Divider() {
  const reveal = useReveal()

  return <div className="divider" ref={reveal} aria-hidden="true" />
}
