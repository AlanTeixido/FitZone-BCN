import { motion } from 'framer-motion'
import { GiBoxingGlove, GiWeightLiftingUp, GiMeditation, GiCycling, GiRunningShoe, GiJumpingRope } from 'react-icons/gi'

const clases = [
  {
    name: 'CrossFit',
    description: 'Entrenamiento funcional de alta intensidad que combina levantamiento, cardio y gimnasia.',
    horario: 'Lun-Vie 7:00 / 18:00',
    nivel: 'Avanzado',
    icon: GiWeightLiftingUp,
    gradient: 'from-orange-600/20 to-red-900/20',
  },
  {
    name: 'Boxeo',
    description: 'Aprende técnicas de boxeo mientras quemas calorías y mejoras tu coordinación.',
    horario: 'Mar-Jue 10:00 / 19:00',
    nivel: 'Medio',
    icon: GiBoxingGlove,
    gradient: 'from-red-600/20 to-orange-900/20',
  },
  {
    name: 'Yoga Flow',
    description: 'Conecta cuerpo y mente con sesiones de yoga dinámico para mejorar flexibilidad.',
    horario: 'Lun-Mié-Vie 8:00',
    nivel: 'Principiante',
    icon: GiMeditation,
    gradient: 'from-emerald-600/20 to-teal-900/20',
  },
  {
    name: 'Spinning',
    description: 'Sesiones de ciclismo indoor con música motivante y entrenadores energéticos.',
    horario: 'Lun-Sáb 7:30 / 17:30',
    nivel: 'Medio',
    icon: GiCycling,
    gradient: 'from-blue-600/20 to-indigo-900/20',
  },
  {
    name: 'HIIT',
    description: 'Intervalos de alta intensidad para maximizar la quema de grasa en poco tiempo.',
    horario: 'Mar-Jue-Sáb 9:00',
    nivel: 'Avanzado',
    icon: GiRunningShoe,
    gradient: 'from-amber-600/20 to-orange-900/20',
  },
  {
    name: 'Funcional',
    description: 'Ejercicios con peso corporal y accesorios para mejorar tu rendimiento diario.',
    horario: 'Lun-Vie 12:00 / 20:00',
    nivel: 'Principiante',
    icon: GiJumpingRope,
    gradient: 'from-purple-600/20 to-violet-900/20',
  },
]

const nivelColor = {
  Principiante: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Medio: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Avanzado: 'bg-red-500/20 text-red-400 border-red-500/30',
}

const cardVariant = {
  hidden: { scale: 0.5, opacity: 0, y: 60 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 14,
      delay: i * 0.1,
    },
  }),
}

export default function Clases() {
  return (
    <section id="clases" className="py-16 sm:py-20 lg:py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">
            NUESTRAS <span className="text-accent">CLASES</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Descubre la actividad perfecta para ti. Desde principiantes hasta atletas avanzados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clases.map((clase, i) => (
            <motion.div
              key={clase.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="group relative rounded-2xl bg-dark-800 border border-dark-600 overflow-hidden hover:border-accent/40 transition-colors"
              style={{ animation: 'none' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.animation = 'pulse-heartbeat 1.2s ease-in-out infinite'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.animation = 'none'
              }}
            >
              <div className={`h-40 bg-gradient-to-br ${clase.gradient} flex items-center justify-center relative`}>
                <clase.icon className="text-5xl sm:text-6xl text-white/40 group-hover:text-accent/60 transition-colors duration-300" />
                <div className="absolute top-3 right-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${nivelColor[clase.nivel]}`}>
                    {clase.nivel}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-white mb-2">{clase.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{clase.description}</p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {clase.horario}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
