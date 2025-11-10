import { useEffect, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/projects`);
        const data = await res.json();
        setProjects(data.projects || []);
      } catch (e) {
        setProjects([]);
      }
    }
    load();
  }, []);

  return (
    <section id="projects" className="bg-[#070B13] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Selected projects</h2>
            <p className="text-white/70 mt-2 max-w-2xl">Production-grade systems and research prototypes.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/15 hover:bg-white/5 text-white px-4 py-2 transition-colors">
            Request full case study
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p._id || p.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="flex items-center gap-1 text-yellow-300">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">{p.impact || 'Impact'}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-white/80">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tags || []).map(t => (
                    <span key={t} className="text-xs rounded-md border border-white/10 bg-white/[0.06] px-2 py-1">{t}</span>
                  ))}
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                    View more <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}

          {projects.length === 0 && (
            <div className="col-span-full text-white/60 text-center py-16">Projects will appear here once added via the backend.</div>
          )}
        </div>
      </div>
    </section>
  );
}
