import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ITEMS = ['HOME', 'ABOUT US', 'WORK']

export default function Navbar() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(0)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)
  const [inWork, setInWork] = useState(false)

  const currentIndex = pathname === '/about'
    ? 1
    : pathname.startsWith('/work') || (pathname === '/' && inWork)
      ? 2
      : 0

  useEffect(() => {
    setHovered(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    let heroHeight = window.innerHeight
    let ticking = false

    const measure = () => {
      const hero = document.querySelector('.hero')
      heroHeight = hero ? hero.offsetHeight : 0
    }
    measure()

    const update = () => {
      const y = window.scrollY
      const start = heroHeight - 120
      const p = Math.max(0, Math.min(1, (y - start) / 120))
      setProgress((prev) => (Math.abs(prev - p) < 0.001 ? prev : p))
      const workEl = document.getElementById('work')
      if (workEl) {
        const r = workEl.getBoundingClientRect()
        setInWork(
          r.top <= window.innerHeight * 0.4 &&
            r.bottom >= window.innerHeight * 0.6
        )
      } else {
        setInWork(false)
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
    }
  }, [])

  const scrolled = progress >= 0.5

  const goHome = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setOpen(false)
  }

  const goWork = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      document
        .getElementById('work')
        ?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: 'work' } })
    }
    setOpen(false)
  }

  const className = [
    'navbar',
    scrolled ? 'navbar--scrolled' : 'navbar--hero',
    open ? 'navbar--open' : ''
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={className}>
      <Link to="/" className="navbar__logo" onClick={goHome}>
        <img
          src={scrolled ? '/assets/logo2.svg' : '/assets/logo.svg'}
          alt="eit"
        />
      </Link>
      <button
        type="button"
        className="navbar__toggle"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className="navbar__menu">
        <Link
          to="/"
          className={`navbar__link${hovered === 0 ? ' is-active' : ''}`}
          onClick={goHome}
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(currentIndex)}
        >
          HOME
        </Link>
        <Link
          to="/about"
          className={`navbar__link${hovered === 1 ? ' is-active' : ''}`}
          onClick={() => setOpen(false)}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(currentIndex)}
        >
          ABOUT US
        </Link>
        <Link
          to="/"
          className={`navbar__link${hovered === 2 ? ' is-active' : ''}`}
          onClick={goWork}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(currentIndex)}
        >
          WORK
        </Link>
      </nav>
    </header>
  )
}
