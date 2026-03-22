import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

const trainers = [
  {
    name: 'Marc Puig',
    specialty: 'CrossFit & Fuerza',
    bio: 'Ex-atleta olímpico con 12 años de experiencia en entrenamiento de alto rendimiento.',
    gradient: 'from-accent/30 via-dark-700 to-dark-800',
    initials: 'MP',
  },
  {
    name: 'Laia Martínez',
    specialty: 'Yoga & Pilates',
    bio: 'Certificada internacionalmente, especialista en rehabilitación y bienestar integral.',
    gradient: 'from-dark-700 via-accent/20 to-dark-800',
    initials: 'LM',
  },
  {
    name: 'Jordi Valls',
    specialty: 'Boxeo & HIIT',
    bio: 'Campeón regional de boxeo, apasionado por motivar y transformar vidas.',
    gradient: 'from-dark-800 via-dark-700 to-accent/30',
    initials: 'JV',
  },
]

const impactVariant = {
  hidden: { scale: 0.3, opacity: 0, rotate: -5 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 16,
      delay: i * 0.2,
    },
  }),
}

export default function Entrenadores() {
  return (
    <section id="entrenadores" className="py-16 sm:py-20 lg:py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            NUESTROS <span className="text-accent">ENTRENADORES</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Profesionales certificados dedicados a ayudarte a alcanzar tus objetivos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              custom={i}
              variants={impactVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group rounded-2xl bg-dark-700 border border-dark-600 overflow-hidden hover:border-accent/40 transition-all duration-300"
            >
              <div className={`h-56 sm:h-64 bg-gradient-to-br ${trainer.gradient} flex items-center justify-center relative`}>
                <div className="w-24 h-24 rounded-full bg-dark-900/60 border-2 border-accent/40 flex items-center justify-center text-3xl font-black text-accent group-hover:scale-110 transition-transform duration-300">
                  {trainer.initials}
                </div>
              </div>
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                <p className="text-accent font-semibold text-sm mt-1 uppercase tracking-wider">{trainer.specialty}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{trainer.bio}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <span className="text-gray-500 hover:text-accent transition-colors cursor-pointer text-lg">
                    <FaInstagram />
                  </span>
                  <span className="text-gray-500 hover:text-accent transition-colors cursor-pointer text-lg">
                    <FaLinkedin />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
