import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import Tilt3D from './Tilt3D';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function submit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      });
      const data = await res.json();
      if (res.ok) setStatus('Thanks! I will get back to you.');
      else setStatus(data.detail || 'Something went wrong.');
      e.target.reset();
    } catch (err) {
      setStatus('Network error.');
    }
  }

  return (
    <section id="contact" className="bg-[#0A0F1A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Let’s collaborate</h2>
          <p className="mt-4 text-white/80">Have a problem that needs an intelligent solution? I’d love to hear about it.</p>
          <div className="mt-6 flex items-center gap-3 text-white/80">
            <Mail size={18} /> <span>you@example.com</span>
          </div>
        </div>

        <Tilt3D className="rounded-2xl">
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-4">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-cyan-400/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-cyan-400/50 text-white" />
            </div>
            <div>
              <label className="block text-sm text-white/70">Message</label>
              <textarea name="message" required rows="4" className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 ring-cyan-400/50 text-white" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-4 py-2 transition-colors">
              Send <Send size={16} />
            </button>
            <p className="text-sm text-white/70">{status}</p>
          </form>
        </Tilt3D>
      </div>
    </section>
  );
}
