import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const testimonios = [
  {
    name: 'Anna Soler',
    text: 'FitZone ha cambiado mi vida. En 6 meses he conseguido resultados que nunca imaginé. Los entrenadores son increíbles y el ambiente es muy motivador.',
    stars: 5,
    initials: 'AS',
    role: 'Miembro desde 2022',
  },
  {
    name: 'Pau Ferrer',
    text: 'Las clases de CrossFit son brutales en el buen sentido. Marc es un crack como entrenador y siempre te exige lo justo para progresar sin lesionarte.',
    stars: 5,
    initials: 'PF',
    role: 'Miembro desde 2021',
  },
  {
    name: 'Marta Roca',
    text: 'Probé muchos gimnasios en Barcelona y ninguno se acerca a FitZone. La relación calidad-precio del plan Pro es imbatible. 100% recomendado.',
    stars: 5,
    initials: 'MR',
    role: 'Miembro desde 2023',
  },
  {
    name: 'Oriol Camps',
    text: 'El plan Elite vale cada céntimo. El acceso 24/7 me permite entrenar a las 6 de la mañana antes del trabajo. La sauna después es un lujo.',
    stars: 4,
    initials: 'OC',
    role: 'Miembro desde 2020',
  },
  {
    name: 'Núria Blanc',
    text: 'Las clases de Yoga con Laia son una experiencia transformadora. He mejorado mi flexibilidad y mi salud mental de forma increíble.',
    stars: 5,
    initials: 'NB',
    role: 'Miembro desde 2023',
  },
  {
    name: 'Gerard Mas',
    text: 'Empecé sin saber nada de boxeo y ahora es mi pasión. Jordi es un entrenador excepcional que sabe sacar lo mejor de cada persona.',
    stars: 5,
    initials: 'GM',
    role: 'Miembro desde 2022',
  },
]

const cardVariant = {
  hidden: { x: -60, opacity: 0, rotate: -3 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 18,
      delay: i * 0.1,
    },
  }),
}

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-16 sm:py-20 lg:py-24 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            LO QUE DICEN NUESTROS <span className="text-accent">MIEMBROS</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Más de 500 personas ya confían en FitZone BCN para alcanzar sus metas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="rounded-2xl bg-dark-700 border border-dark-600 p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <FaStar
                    key={si}
                    className={si < t.stars ? 'text-accent' : 'text-dark-600'}
                    size={14}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
