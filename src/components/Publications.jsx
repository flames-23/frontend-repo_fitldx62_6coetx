import { FileText } from 'lucide-react';
import Stars from './Stars';
import Tilt3D from './Tilt3D';

const pubs = [
  { title: 'Efficient Fine-Tuning for Domain-Specific LLMs', venue: 'ArXiv 2024', link: '#' },
  { title: 'Self-Supervised Pretraining for Medical Imaging', venue: 'MICCAI 2023', link: '#' },
  { title: 'Monitoring and Drift Detection in Production ML', venue: 'Blog/Case Study', link: '#' },
];

export default function Publications() {
  return (
    <section id="publications" className="relative bg-[#070B13] text-white py-20 overflow-hidden">
      <Stars density={0.0009} speed={0.2} className="opacity-25" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Publications & writing</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pubs.map(p => (
            <Tilt3D key={p.title} className="rounded-2xl">
              <a href={p.link} className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
                    <FileText className="text-cyan-300" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-white/70 text-sm">{p.venue}</p>
                  </div>
                </div>
              </a>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
