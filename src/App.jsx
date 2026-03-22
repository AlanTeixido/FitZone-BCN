import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Clases from './components/Clases'
import Entrenadores from './components/Entrenadores'
import Precios from './components/Precios'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Clases />
      <Entrenadores />
      <Precios />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
