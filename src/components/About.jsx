import Stars from './Stars';
import Tilt3D from './Tilt3D';

export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0F1A] text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <Stars density={0.001} speed={0.18} className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0F1A]/40 to-[#0A0F1A]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-10 items-start">
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            I am an AI/ML engineer with a passion for building practical, high-impact systems. My work spans
            research, productization, and MLOps. I love taking ideas from paper to production—carefully, measurably,
            and with a focus on user value.
          </p>
          <ul className="mt-6 space-y-3 text-white/80">
            <li>• End-to-end ownership: data, modeling, deployment, monitoring</li>
            <li>• Experience across NLP, CV, and time-series forecasting</li>
            <li>• Pragmatic approach: ship reliable solutions with clear metrics</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <Tilt3D className="rounded-2xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold">Highlights</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• 10+ deployed models serving real users</li>
                <li>• Led MLOps transformation cutting training costs by 40%</li>
                <li>• Built RAG pipeline powering support assistants</li>
              </ul>
            </div>
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}
