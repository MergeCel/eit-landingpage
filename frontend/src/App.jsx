import { useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProductDetail from './pages/ProductDetail'
import { useSlowScroll, scrollTopImmediate } from './hooks/useSlowScroll'

export default function App() {
  useSlowScroll()
  const location = useLocation()
  const [displayed, setDisplayed] = useState(location)
  const [visible, setVisible] = useState(false)
  const firstRender = useRef(true)

  useEffect(() => {
    const preventImageDrag = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault()
    }
    document.addEventListener('dragstart', preventImageDrag)
    return () => document.removeEventListener('dragstart', preventImageDrag)
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    if (location.pathname === displayed.pathname) return

    setVisible(true)
    const t = setTimeout(() => {
      setDisplayed(location)
      scrollTopImmediate()
      setVisible(false)
    }, 1050)
    return () => clearTimeout(t)
  }, [location, displayed])

  return (
    <>
      <Routes location={displayed}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/:slug" element={<ProductDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <div className={`page-transition${visible ? ' page-transition--active' : ''}`} />
    </>
  )
}
