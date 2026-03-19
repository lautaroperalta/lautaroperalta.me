import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'Co-Founder & Full-Stack Developer',
    company: 'Coopfast',
    location: 'Rosario, Argentina',
    period: 'Oct 2024 – Nov 2025',
    bullets: [
      'Desarrollé una plataforma SaaS para control de asistencias mediante código QR en coopfast.com.',
      'Validé la idea con un MVP en Bubble y utilicé feedback real de las primeras empresas para iterar producto.',
      'Reconstruí el producto con Next.js en Vercel, mejorando rendimiento y baja latencia para más de 20 empresas.',
      'Estructuré backend con Supabase Edge Functions + PostgreSQL para verificaciones de ingreso en tiempo real.',
    ],
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'Vercel', 'SaaS'],
  },
  {
    role: 'Web Developer & DevOps',
    company: 'Gamer’s Life',
    location: 'Rosario, Argentina',
    period: 'Nov 2021 – Sep 2022',
    bullets: [
      'Diseñé y desarrollé una plataforma e-commerce con React + Django para más de 1000 usuarios mensuales.',
      'Implementé workflows de CI/CD con GitHub Actions, reduciendo deploys de horas a minutos.',
      'Integré AWS RDS (PostgreSQL) para almacenamiento seguro y escalable de usuarios y transacciones.',
      'Mejoré la retención en un 15% apoyándome en decisiones basadas en analítica integrada.',
    ],
    tags: ['React', 'Django', 'GitHub Actions', 'AWS RDS', 'PostgreSQL'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experience"
      className="relative py-24 px-6"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/35 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-indigo-300 font-semibold uppercase tracking-widest text-sm mb-2">
            Experiencia
          </p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Trayectoria profesional
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Experiencia construyendo productos reales, desde validación de MVP hasta arquitectura,
            despliegue y operación en producción.
          </p>
        </motion.div>

        <div className="relative space-y-8">
          <div className="hidden md:block absolute left-5 top-2 bottom-2 w-px bg-indigo-500/30" />

          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.period}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative md:pl-14"
            >
              <div className="hidden md:block absolute left-3 top-6 w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-400/30 rounded-2xl p-6 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {experience.role}
                    </h3>
                    <p className="text-indigo-300 text-sm">
                      {experience.company} · {experience.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-slate-400 border border-white/10 rounded-full px-3 py-1">
                    {experience.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="text-slate-400 text-sm leading-relaxed">
                      • {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-600/10 text-indigo-300 border border-indigo-500/20 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
