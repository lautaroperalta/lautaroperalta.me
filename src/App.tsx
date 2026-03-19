import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative bg-[radial-gradient(1200px_600px_at_20%_10%,rgba(99,102,241,0.18),transparent),radial-gradient(900px_500px_at_85%_35%,rgba(168,85,247,0.12),transparent),linear-gradient(to_bottom_right,#0f172a,#1e1b4b_45%,#0f172a)]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
