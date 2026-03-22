import { motion } from 'framer-motion'
import { GiWeightLiftingUp } from 'react-icons/gi'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-[#1a0f00] to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.08),transparent_50%)]" />

      {/* Floating dumbbell decorations */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-32 left-[10%] text-accent/10 text-6xl sm:text-8xl hidden sm:block"
      >
        <GiWeightLiftingUp />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-32 right-[10%] text-accent/10 text-5xl sm:text-7xl hidden sm:block"
      >
        <GiWeightLiftingUp />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Weight-drop animation */}
        <motion.h1
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 12,
            mass: 3,
          }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
        >
          SUPERA TUS
          <br />
          <span className="text-accent">LÍMITES</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 sm:mt-8 text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          El gimnasio más completo de Barcelona. Entrena con los mejores profesionales
          y alcanza la mejor versión de ti mismo.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#precios"
            className="group relative bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all overflow-hidden"
          >
            <span className="relative z-10">Ver planes</span>
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl" />
          </a>
          <a
            href="#clases"
            className="border-2 border-accent/50 hover:border-accent text-white px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all hover:bg-accent/10"
          >
            Explorar clases
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 sm:mt-16 flex justify-center gap-8 sm:gap-12 text-sm text-gray-500 uppercase tracking-widest"
        >
          <div>
            <div className="text-accent text-2xl font-black">500+</div>
            <div>Miembros</div>
          </div>
          <div className="w-px bg-dark-600" />
          <div>
            <div className="text-accent text-2xl font-black">20+</div>
            <div>Clases</div>
          </div>
          <div className="w-px bg-dark-600" />
          <div>
            <div className="text-accent text-2xl font-black">10</div>
            <div>Años</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
