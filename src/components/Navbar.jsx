import { useEffect, useState } from 'react';
import { Menu, X, Brain, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Contact' },
  ];

  const socials = [
    { href: 'https://github.com/', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:you@example.com', icon: Mail, label: 'Email' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-500/30 border border-white/10">
              <Brain size={18} />
            </div>
            <span className="font-semibold tracking-wide">AI/ML Engineer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/90 py-2">
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
