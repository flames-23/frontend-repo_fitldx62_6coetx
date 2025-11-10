import { useRef } from 'react';

// A lightweight 3D tilt wrapper using pointer position
export default function Tilt3D({ children, maxTilt = 12, shine = true, className = '' }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const tiltX = (py - 0.5) * -2 * maxTilt;
    const tiltY = (px - 0.5) * 2 * maxTilt;
    el.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    if (shine) {
      const shineEl = el.querySelector('[data-shine]');
      if (shineEl) {
        const dx = px * 100;
        const dy = py * 100;
        shineEl.style.background = `radial-gradient(600px circle at ${dx}% ${dy}%, rgba(255,255,255,0.12), transparent 40%)`;
      }
    }
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    const shineEl = el.querySelector('[data-shine]');
    if (shineEl) shineEl.style.background = 'radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.08), transparent 40%)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative will-change-transform transition-transform duration-200 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {shine && (
        <div
          data-shine
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{ background: 'radial-gradient(600px circle at 50% 50%, rgba(255,255,255,0.08), transparent 40%)', transform: 'translateZ(1px)' }}
        />
      )}
      <div style={{ transform: 'translateZ(30px)' }}>
        {children}
      </div>
    </div>
  );
}
