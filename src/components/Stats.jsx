import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GiMuscleUp, GiRunningShoe, GiTrophy, GiStrong } from 'react-icons/gi'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { icon: GiMuscleUp, value: 500, suffix: '+', label: 'Miembros activos' },
  { icon: GiRunningShoe, value: 20, suffix: '+', label: 'Clases semanales' },
  { icon: GiTrophy, value: 10, suffix: '', label: 'Años de experiencia' },
  { icon: GiStrong, value: 15, suffix: '', label: 'Entrenadores expertos' },
]

const impactVariant = {
  hidden: { scale: 0.3, opacity: 0, y: 80 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      mass: 1,
      delay: i * 0.15,
    },
  }),
}

export default function Stats() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={impactVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="text-center p-6 sm:p-8 rounded-2xl bg-dark-700/50 border border-dark-600 hover:border-accent/30 transition-colors"
            >
              <stat.icon className="text-accent text-3xl sm:text-4xl mx-auto mb-4" />
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 mt-2 text-sm sm:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
