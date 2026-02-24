import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'PostgreSQL'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'Docker', 'Vite', 'Jest', 'Figma'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-900 to-indigo-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-2">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-slate-100">
            Tecnologías que uso
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
            >
              <h3 className="text-lg font-semibold text-slate-300 mb-4 border-b border-white/10 pb-2">
                {group.category}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: gi * 0.15 + si * 0.07 }}
                    className="flex items-center gap-2 text-slate-500"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
