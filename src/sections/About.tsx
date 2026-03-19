import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/35 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-12">
            <div className="max-w-2xl">
              <p className="text-indigo-300 font-semibold uppercase tracking-widest text-sm mb-2">
                Sobre mí
              </p>
              <h2 className="text-4xl font-bold text-slate-100 mb-6">
                Un poco de quién soy
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Soy Lautaro Peralta Aguilera, de Rosario, Argentina. Full-Stack Developer y estudiante avanzado de
                Licenciatura en Ciencias de la Computación (UNR, previsto Sep 2026).
                Me enfoco en construir productos web escalables con impacto real,
                combinando experiencia en frontend, backend, bases de datos y cloud.
                Disfruto trabajar en equipos colaborativos, validar ideas con usuarios
                y llevar proyectos desde MVP hasta producción.
              </p>
            </div>

            <div className="mb-6 flex justify-center md:justify-end md:pt-1 shrink-0">
              <img
                src="/foto2-circular.png"
                alt="Foto de Lautaro Peralta"
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-indigo-300/50 shadow-[0_0_35px_rgba(99,102,241,0.35)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
