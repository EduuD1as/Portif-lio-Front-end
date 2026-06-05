import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Process from './Process'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function PortfolioHome() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
