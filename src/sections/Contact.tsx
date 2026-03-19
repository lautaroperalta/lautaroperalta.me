import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

const inputClass =
  'bg-slate-900/60 border border-white/10 text-slate-200 placeholder-slate-600 rounded-lg px-4 py-3 text-sm outline-none focus:border-indigo-400 transition-colors'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [state, handleSubmit] = useForm('xaqdabaw')

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/35 to-transparent" />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-indigo-300 font-semibold uppercase tracking-widest text-sm mb-2">
            Contacto
          </p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Hablemos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          {state.succeeded ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <p className="text-2xl font-semibold text-emerald-400 mb-2">¡Mensaje enviado!</p>
              <p className="text-slate-400">Te respondo a la brevedad.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className={inputClass}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Contame de tu proyecto..."
                  className={`${inputClass} resize-none`}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors w-full"
              >
                <Send size={16} />
                {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </motion.div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mt-10 text-slate-400">
          <a href="mailto:contact@lautaroperalta.me" className="hover:text-indigo-300 transition-colors flex items-center gap-2 text-sm">
            <Mail size={18} /> contact@lautaroperalta.me
          </a>
          <a href="https://github.com/lautaroperalta" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/lautaroperalta" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
