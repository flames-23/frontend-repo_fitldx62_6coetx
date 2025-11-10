import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#070B13] text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publications />
      <Contact />
      <footer className="bg-[#070B13] border-t border-white/10 text-center text-white/60 py-8">
        © {new Date().getFullYear()} AI/ML Engineer — Built with love for data and models.
      </footer>
    </div>
  );
}

export default App
