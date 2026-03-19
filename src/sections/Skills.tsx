import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Lenguajes',
    skills: ['Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'Haskell'],
  },
  {
    category: 'Frameworks',
    skills: ['ASP.NET', 'Blazor', 'Django', 'React', 'Next.js', 'Express'],
  },
  {
    category: 'Bases de datos',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS Lambda', 'S3', 'API Gateway', 'DynamoDB', 'EC2', 'Docker'],
  },
  {
    category: 'Herramientas',
    skills: ['Git', 'SVN', 'Slack'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/35 to-transparent" />
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-indigo-300 font-semibold uppercase tracking-widest text-sm mb-2">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-slate-100">
            Tecnologías que uso
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    className="flex items-center gap-2 text-slate-400"
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
