import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

const SocialLink = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    data-magnetic
    className="inline-flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 hover:border-white/40 text-white transition-all duration-200 shadow-[0_0_20px_rgba(201,79,23,0.25)] hover:shadow-[0_0_30px_rgba(201,79,23,0.45)]"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default function Hero() {
  const portraitRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setOffset(y * 0.15);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0b] text-white"
      aria-label="Hero section"
    >
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-28 pb-24 grid grid-cols-12 gap-6">
        {/* Intro Copy */}
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-block text-sm tracking-widest uppercase text-white/80"
          >
            Chukwuma Ezeh — Product Designer & Engineer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="text-4xl md:text-6xl font-extrabold leading-[1.05]"
          >
            Crafting premium digital experiences with
            <span className="relative inline-block ml-3">
              <span className="relative z-10 text-[#C94F17] drop-shadow-[0_0_30px_rgba(201,79,23,0.35)]">impact</span>
              <span className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-[#C94F17]/30 via-transparent to-[#C94F17]/30 blur-2xl rounded" aria-hidden />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="text-lg md:text-xl text-white/80 max-w-xl"
          >
            I blend bold aesthetics, motion, and system thinking to ship delightful, performant products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="flex items-center gap-4"
          >
            <a
              href="#portfolio"
              data-magnetic
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C94F17] text-white font-semibold shadow-[0_10px_30px_rgba(201,79,23,0.45)] hover:shadow-[0_14px_40px_rgba(201,79,23,0.6)] transition-all duration-200"
            >
              <span className="relative z-10">View Work</span>
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
            <a
              href="#contact"
              data-magnetic
              className="inline-flex items-center px-5 py-3 rounded-full border border-white/30 hover:border-white/60 text-white/90 hover:text-white backdrop-blur-md bg-white/10 transition-all duration-200"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Social Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 flex items-center gap-3"
            aria-label="Social links"
          >
            <SocialLink href="mailto:hello@chukwumaezeh.com" label="Email" Icon={Mail} />
            <SocialLink href="https://linkedin.com" label="LinkedIn" Icon={Linkedin} />
            <SocialLink href="https://twitter.com" label="Twitter" Icon={Twitter} />
            <SocialLink href="https://github.com" label="GitHub" Icon={Github} />
          </motion.div>
        </div>

        {/* Portrait with parallax */}
        <div className="col-span-12 lg:col-span-6 relative z-10">
          <div
            ref={portraitRef}
            style={{ transform: `translateY(${offset * 0.5}px)` }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait of Chukwuma Ezeh"
              loading="lazy"
              className="h-full w-full object-cover scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -inset-4 bg-[radial-gradient(circle_at_70%_30%,rgba(201,79,23,0.35),transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
