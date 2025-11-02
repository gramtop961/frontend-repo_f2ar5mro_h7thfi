import { motion } from 'framer-motion';

const items = [
  {
    year: '2025',
    title: 'Lead Product Designer, Nova Fintech',
    desc: 'Shipped a high-contrast design system with motion patterns that lifted activation by 18%.',
  },
  {
    year: '2023',
    title: 'Senior UX Engineer, Atlas Health',
    desc: 'Built a performance-first component library and prototyped care pathways in code.',
  },
  {
    year: '2021',
    title: 'Design Engineer, Flow AI',
    desc: 'Scaled a conversational UI platform with accessible voice interactions.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-white dark:bg-[#0b0b0b]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-[#0b0b0b] dark:text-white"
        >
          Timeline
        </motion.h2>

        <div className="mt-10 grid grid-cols-12 gap-8">
          {items.map((item, idx) => (
            <motion.article
              key={item.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="col-span-12 md:col-span-6 lg:col-span-4 p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="text-sm tracking-widest uppercase text-[#C94F17] font-semibold">{item.year}</div>
              <h3 className="mt-2 text-xl font-bold text-[#0b0b0b] dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
