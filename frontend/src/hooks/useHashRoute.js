import { useEffect, useState } from 'react'

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '')
  const path = raw.split('?')[0] || '/'
  return path
}

export function useHashRoute() {
  const [route, setRoute] = useState(parseHash)

  useEffect(() => {
    const onChange = () => setRoute(parseHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return route
}
