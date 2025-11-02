import { motion } from 'framer-motion';
import content from '../../content.json';

export default function Portfolio() {
  const projects = content.projects || [];
  return (
    <section id="portfolio" className="relative bg-[#0b0b0b]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-white"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid grid-cols-12 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title + idx}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group col-span-12 sm:col-span-6 lg:col-span-4 rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md hover:-translate-y-1 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C94F17] focus:ring-offset-[#0b0b0b]"
              aria-label={`Open ${p.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <div className="text-sm tracking-widest uppercase text-[#C94F17] font-semibold">{p.tag}</div>
                <h3 className="mt-1 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
