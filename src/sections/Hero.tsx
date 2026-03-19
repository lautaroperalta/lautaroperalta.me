import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-2xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl relative z-10"
      >
        <p className="text-indigo-300 font-semibold mb-3 tracking-widest uppercase text-sm">
          Hola, soy
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-50 mb-4">
          Lautaro
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6">
          .NET, React, Node | Full Stack Developer
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          Construyo aplicaciones web modernas con foco en la experiencia de
          usuario, el rendimiento y el código limpio.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            to="projects"
            smooth
            duration={500}
            offset={-80}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-semibold cursor-pointer transition-colors"
          >
            Ver proyectos
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            offset={-80}
            className="border-2 border-indigo-600 text-indigo-300 hover:bg-indigo-600/10 px-8 py-3 rounded-full font-semibold cursor-pointer transition-colors"
          >
            Contactarme
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10 text-slate-600">
          <a
            href="https://github.com/lautaroperalta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/lautaroperalta"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-300 transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:contact@lautaroperalta.me"
            className="hover:text-indigo-300 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-slate-600"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
