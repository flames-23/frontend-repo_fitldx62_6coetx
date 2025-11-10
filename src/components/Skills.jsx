import { Brain, Cpu, Network, Database, Cloud, BarChart3 } from 'lucide-react';
import Tilt3D from './Tilt3D';
import Stars from './Stars';

const skills = [
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['Supervised/Unsupervised', 'XGBoost, LightGBM', 'Feature Engineering']
  },
  {
    icon: Cpu,
    title: 'Deep Learning',
    items: ['PyTorch, TensorFlow', 'Transformers, CNNs', 'Fine-tuning, RAG']
  },
  {
    icon: Network,
    title: 'MLOps',
    items: ['Docker, K8s', 'Weights & Biases', 'CI/CD, Model Registry']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    items: ['Airflow, dbt', 'Spark, Pandas', 'SQL/NoSQL']
  },
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    items: ['AWS, GCP, Azure', 'Serverless', 'Cost Optimization']
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    items: ['Experimentation', 'Causal Inference', 'Dashboards']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0A0F1A] text-white py-20 overflow-hidden">
      <Stars density={0.0012} speed={0.2} className="opacity-30" />
      <div className="absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Core skills</h2>
        <p className="text-white/70 mt-2 max-w-2xl">A blend of research depth and production pragmatism.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <Tilt3D key={s.title} className="rounded-2xl">
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10">
                    <s.icon className="text-cyan-300" size={20} />
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  {s.items.map(i => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
