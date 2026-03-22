import { motion } from 'framer-motion'
import { HiCheck, HiX } from 'react-icons/hi'
import { GiLightningArc } from 'react-icons/gi'

const planes = [
  {
    name: 'Básico',
    price: '29',
    period: '/mes',
    description: 'Perfecto para empezar tu camino fitness',
    features: [
      { text: 'Acceso a sala de musculación', included: true },
      { text: 'Horario: 8:00 - 22:00', included: true },
      { text: 'Ducha y vestuario', included: true },
      { text: 'App de seguimiento', included: true },
      { text: 'Clases grupales', included: false },
      { text: 'Entrenador personal', included: false },
      { text: 'Nutricionista', included: false },
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '49',
    period: '/mes',
    description: 'El más popular entre nuestros miembros',
    features: [
      { text: 'Acceso a sala de musculación', included: true },
      { text: 'Horario: 6:00 - 23:00', included: true },
      { text: 'Ducha y vestuario', included: true },
      { text: 'App de seguimiento', included: true },
      { text: 'Todas las clases grupales', included: true },
      { text: '2 sesiones PT / mes', included: true },
      { text: 'Nutricionista', included: false },
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '79',
    period: '/mes',
    description: 'La experiencia fitness definitiva',
    features: [
      { text: 'Acceso 24/7 ilimitado', included: true },
      { text: 'Todas las clases grupales', included: true },
      { text: 'Ducha premium + sauna', included: true },
      { text: 'App de seguimiento PRO', included: true },
      { text: '8 sesiones PT / mes', included: true },
      { text: 'Plan nutricional mensual', included: true },
      { text: 'Parking gratuito', included: true },
    ],
    popular: false,
  },
]

const cardVariant = {
  hidden: { y: 100, opacity: 0, scale: 0.8 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 160,
      damping: 16,
      delay: i * 0.15,
    },
  }),
}

export default function Precios() {
  return (
    <section id="precios" className="py-16 sm:py-20 lg:py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            ELIGE TU <span className="text-accent">PLAN</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Planes flexibles adaptados a tus necesidades. Sin permanencia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {planes.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className={`relative rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-accent/10 to-dark-800 border-accent shadow-[0_0_40px_rgba(249,115,22,0.15)] scale-[1.02]'
                  : 'bg-dark-800 border-dark-600 hover:border-dark-500'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <GiLightningArc /> Más popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{plan.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-black text-white">{plan.price}€</span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-sm">
                    {feature.included ? (
                      <HiCheck className="text-accent text-lg shrink-0" />
                    ) : (
                      <HiX className="text-gray-600 text-lg shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent-hover text-white hover:shadow-[0_0_25px_rgba(249,115,22,0.5)]'
                    : 'bg-dark-600 hover:bg-dark-500 text-white border border-dark-500 hover:border-accent/40'
                }`}
                style={{ animation: 'none' }}
                onMouseEnter={(e) => {
                  if (plan.popular) e.currentTarget.style.animation = 'energy-ring 1s ease-out'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animation = 'none'
                }}
              >
                Empezar ahora
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
