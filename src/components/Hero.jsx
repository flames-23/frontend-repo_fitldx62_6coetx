import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#070B13]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#070B13] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Open to opportunities in AI/ML • Research & Engineering
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Building intelligent systems at the intersection of research and production
          </h1>
          <p className="mt-4 text-lg text-white/80">
            I design, train, and deploy machine learning models—LLMs, vision, and multimodal—
            with a focus on reliability, MLOps, and measurable impact.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors">
              View projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 hover:bg-white/5 text-white px-4 py-2 transition-colors">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
