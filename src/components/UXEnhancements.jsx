import { useEffect, useState } from 'react';

// Scroll progress bar + theme toggle + magnetic cursor
export default function UXEnhancements() {
  // progress
  const [progress, setProgress] = useState(0);
  // theme
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(p);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  // magnetic cursor
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.setAttribute('aria-hidden', 'true');
    cursor.className = 'fixed top-0 left-0 z-[1000] pointer-events-none w-6 h-6 rounded-full bg-[#C94F17]/70 mix-blend-screen shadow-[0_0_30px_rgba(201,79,23,0.6)] transition-transform duration-150 ease-out';
    document.body.appendChild(cursor);

    let x = 0, y = 0;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      cursor.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
    };
    window.addEventListener('pointermove', move, { passive: true });

    const enter = (e) => {
      if (!(e.target instanceof HTMLElement)) return;
      const t = e.target.closest('[data-magnetic]');
      if (!t) return;
      cursor.style.transform += ' scale(1.6)';
      t.animate(
        [{ transform: 'translate(0,0)' }, { transform: 'translate(2px,2px)' }],
        { duration: 120, fill: 'forwards', easing: 'ease-out' }
      );
    };
    const leave = (e) => {
      if (!(e.target instanceof HTMLElement)) return;
      const t = e.target.closest('[data-magnetic]');
      if (!t) return;
      cursor.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
      t.animate(
        [{ transform: 'translate(2px,2px)' }, { transform: 'translate(0,0)' }],
        { duration: 120, fill: 'forwards', easing: 'ease-out' }
      );
    };

    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);

    return () => {
      document.removeEventListener('mouseover', enter);
      document.removeEventListener('mouseout', leave);
      window.removeEventListener('pointermove', move);
      cursor.remove();
    };
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-1 bg-white/10 backdrop-blur-sm z-[999]"
      >
        <div
          className="h-full bg-[#C94F17] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Theme Toggle */}
      <button
        type="button"
        aria-label="Toggle dark mode"
        onClick={() => setDark((d) => !d)}
        className="fixed bottom-6 right-6 z-[999] rounded-full border border-white/20 bg-white/10 dark:bg-white/[0.06] text-white px-4 py-2 backdrop-blur-md hover:bg-white/20 transition-colors"
        data-magnetic
      >
        {dark ? 'Light' : 'Dark'} mode
      </button>
    </>
  );
}
