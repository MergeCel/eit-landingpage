import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../view/Navbar'
import Hero from '../view/Hero'
import Divider from '../view/Divider'
import Heading from '../view/Heading'
import WorksBanner from '../view/WorksBanner'
import PortfolioList from '../view/PortfolioList'
import Footer from '../view/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo === 'work') {
      requestAnimationFrame(() => {
        const el = document.getElementById('work')
        if (el) el.scrollIntoView({ behavior: 'auto' })
        window.history.replaceState({}, '')
      })
    }
  }, [location.state])

  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Heading />
      <WorksBanner />
      <PortfolioList />
      <Footer />
    </>
  )
}
