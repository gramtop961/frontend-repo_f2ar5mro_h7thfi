import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import UXEnhancements from './components/UXEnhancements';

export default function App() {
  useEffect(() => {
    document.title = 'Chukwuma Ezeh — Premium Personal Brand';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', 'Portfolio and personal brand of Chukwuma Ezeh — crafting premium digital experiences with bold aesthetics, motion, and engineering.');

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Chukwuma Ezeh',
      jobTitle: 'Product Designer & Engineer',
      url: window.location.origin,
      sameAs: [
        'mailto:hello@chukwumaezeh.com',
        'https://linkedin.com',
        'https://twitter.com',
        'https://github.com',
      ],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
      alumniOf: '—',
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <UXEnhancements />
      <AnimatePresence mode="wait">
        <motion.main
          key="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="bg-white dark:bg-[#0b0b0b] text-[#0b0b0b] dark:text-white"
        >
          <Hero />
          <Timeline />
          <Portfolio />

          {/* Contact */}
          <section id="contact" className="relative">
            <div className="mx-auto max-w-[1200px] px-6 py-16 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-8">
                <h2 className="text-2xl md:text-3xl font-extrabold">Let’s build something exceptional</h2>
                <p className="mt-2 text-black/70 dark:text-white/70 max-w-prose">
                  I partner with ambitious teams to design and ship premium products. For inquiries, collaborations, or speaking, reach out.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex md:justify-end items-start">
                <a
                  href="mailto:hello@chukwumaezeh.com"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C94F17] text-white font-semibold shadow-[0_10px_30px_rgba(201,79,23,0.45)] hover:shadow-[0_14px_40px_rgba(201,79,23,0.6)] transition-all duration-200"
                  data-magnetic
                >
                  <span className="relative z-10">Email Chukwuma</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-10 text-center text-sm text-black/60 dark:text-white/60">
            <div className="mx-auto max-w-[1200px] px-6">
              © {new Date().getFullYear()} Chukwuma Ezeh — All rights reserved.
            </div>
          </footer>
        </motion.main>
      </AnimatePresence>
    </>
  );
}
