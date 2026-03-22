import { GiWeightLiftingUp } from 'react-icons/gi'
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

const footerLinks = {
  'Gimnasio': ['Sobre nosotros', 'Instalaciones', 'Horarios', 'Blog'],
  'Servicios': ['Clases grupales', 'Entrenamiento personal', 'Nutrición', 'Fisioterapia'],
  'Legal': ['Aviso legal', 'Privacidad', 'Cookies', 'Términos'],
}

const socials = [
  { icon: FaInstagram, label: 'Instagram' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaFacebook, label: 'Facebook' },
  { icon: FaYoutube, label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <GiWeightLiftingUp className="text-accent text-2xl" />
              <span className="text-xl font-black tracking-tight">
                Fit<span className="text-accent">Zone</span> BCN
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              El gimnasio más completo de Barcelona. Desde 2014 ayudamos a miles de personas
              a alcanzar la mejor versión de sí mismas.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <span
                  key={s.label}
                  className="w-10 h-10 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </span>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <span className="text-gray-400 hover:text-accent text-sm transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 FitZone BCN. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Carrer de Pau Claris, 156, 08037 Barcelona
          </p>
        </div>
      </div>
    </footer>
  )
}
