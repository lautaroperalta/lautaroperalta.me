import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Rocket, Users } from 'lucide-react'

const highlights = [
  {
    icon: <Code2 size={28} className="text-indigo-400" />,
    title: 'Clean Code',
    desc: 'Escribo código legible, escalable y fácil de mantener.',
  },
  {
    icon: <Rocket size={28} className="text-indigo-400" />,
    title: 'Rendimiento',
    desc: 'Optimizo cada aplicación para que cargue rápido y funcione bien.',
  },
  {
    icon: <Users size={28} className="text-indigo-400" />,
    title: 'Colaboración',
    desc: 'Trabajo bien en equipo, con metodologías ágiles y comunicación clara.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-indigo-950/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-2">
            Sobre mí
          </p>
          <h2 className="text-4xl font-bold text-slate-100 mb-6">
            Un poco de quién soy
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mb-12">
            Soy un desarrollador apasionado por construir productos digitales
            con impacto real. Me especializo en el ecosistema JavaScript/TypeScript,
            tanto en frontend con React como en backend con Node.js. Siempre
            buscando aprender y mejorar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-400/30 rounded-2xl p-6 flex flex-col gap-3 transition-colors"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-slate-200">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
