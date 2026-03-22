import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'

const contactInfo = [
  { icon: HiLocationMarker, label: 'Dirección', value: 'Carrer de Pau Claris, 156, 08037 Barcelona' },
  { icon: HiPhone, label: 'Teléfono', value: '+34 933 456 789' },
  { icon: HiMail, label: 'Email', value: 'info@fitzonebcn.com' },
  { icon: HiClock, label: 'Horario', value: 'Lun-Vie 6:00-23:00 | Sáb-Dom 8:00-21:00' },
]

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ nombre: '', email: '', mensaje: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            <span className="text-accent">CONTACTA</span> CON NOSOTROS
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            ¿Tienes preguntas? Estamos aquí para ayudarte a empezar tu transformación.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows="4"
                  required
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-white py-3.5 rounded-xl font-bold uppercase tracking-wider transition-all hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]"
              >
                {submitted ? '¡Mensaje enviado!' : 'Enviar mensaje'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl bg-dark-800 border border-dark-600">
                <info.icon className="text-accent text-xl mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">{info.label}</h4>
                  <p className="text-gray-400 text-sm mt-0.5">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="rounded-xl overflow-hidden border border-dark-600 h-48 bg-gradient-to-br from-dark-700 via-dark-800 to-dark-700 flex items-center justify-center">
              <div className="text-center">
                <HiLocationMarker className="text-accent text-3xl mx-auto mb-2" />
                <p className="text-gray-400 text-sm">Eixample, Barcelona</p>
                <p className="text-gray-500 text-xs mt-1">08037</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
