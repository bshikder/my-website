import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const skills = [
  'Data Science',
  'Python',
  'Java',
  'Tableau',
  'SQL',
  'Artificial Intelligence',
  'Analytics',
  'Machine Learning',
]

const projects = [
  {
    title: 'InsightFlow Analytics',
    category: 'Data Visualization Platform',
    description:
      'An executive dashboard experience that transforms raw business data into visual narratives, anomaly detection, and decision-ready reporting.',
    tech: ['Python', 'SQL', 'Tableau', 'Forecasting'],
  },
  {
    title: 'Bengal to Bay Career Map',
    category: 'Interactive Storytelling',
    description:
      'A portfolio concept that blends migration, growth, and ambition into an immersive timeline connecting Bangladesh roots with a future in Florida.',
    tech: ['React', 'Storytelling', 'UI Design'],
  },
  {
    title: 'AI Research Assistant',
    category: 'AI Productivity Tool',
    description:
      'A streamlined assistant that summarizes research, extracts patterns, and organizes knowledge into a faster workflow for insight generation.',
    tech: ['AI', 'Python', 'NLP', 'Automation'],
  },
]

const stats = [
  { label: 'Focus Areas', value: 'Data + AI' },
  { label: 'Based In', value: 'Florida, USA' },
  { label: 'Roots', value: 'Bangladesh' },
]

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const heroHeading = {
  hidden: { opacity: 0, x: -200, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const heroSubtitle = {
  hidden: { opacity: 0, x: 200, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
}

const heroButtons = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
}

const sectionReveal = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
}

const sectionContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

const sectionItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function RevealSection({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 lg:px-8 ${className}`}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      <motion.div variants={sectionContainer}>{children}</motion.div>
    </motion.section>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="relative overflow-x-clip bg-slate-950 text-white selection:bg-cyan-300/30 selection:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#061120_35%,_#020617_100%)]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-float absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="hero-float-delayed absolute right-[-8rem] top-[18rem] h-[26rem] w-[26rem] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="hero-float-slow absolute left-[-8rem] top-[42rem] h-[24rem] w-[24rem] rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:110px_110px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#home"
            className="text-sm font-semibold uppercase tracking-[0.3em] text-white/90 transition duration-300 hover:text-cyan-200"
          >
            Bashirul Shikder
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-white/65 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
              whileHover={{ y: -2, scale: 1.015, boxShadow: '0 18px 40px rgba(34,211,238,0.22)' }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              Let&apos;s Connect
            </motion.a>
          </div>

          <button
            type="button"
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 transition duration-300 hover:border-white/20 hover:bg-white/10 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </nav>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 bg-slate-950/90 px-6 backdrop-blur-2xl md:hidden"
            >
              <motion.div
                initial={{ y: -12 }}
                animate={{ y: 0 }}
                exit={{ y: -12 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="flex flex-col gap-3 py-4"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl border border-transparent px-3 py-2 text-sm text-white/75 transition duration-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="home" className="relative z-10">
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <motion.div variants={heroContainer} initial="hidden" animate="visible">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100 shadow-[0_16px_40px_rgba(2,8,23,0.35)] backdrop-blur-xl"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.95)]" />
              Microsoft Certified: Fabric Data Engineer
            </motion.div>

            <motion.p
              variants={heroItem}
              className="mt-8 text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80"
            >
              Personal Portfolio
            </motion.p>

            <motion.h1
              variants={heroHeading}
              className="mt-5 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
            >
              Bashirul Shikder
              <br />
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                Microsoft Fabric Data Engineer (Certified)
              </span>
            </motion.h1>

            <motion.p
              variants={heroSubtitle}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Data &amp; Cloud Engineer building modern analytics platforms,
              AI-driven solutions, and scalable systems from Greater Orlando.
            </motion.p>

            <motion.div variants={heroButtons} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)]"
                whileHover={{ y: -3, scale: 1.015, boxShadow: '0 24px 60px rgba(56,189,248,0.42)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur"
                whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.10)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                My Journey
              </motion.a>
            </motion.div>

            <motion.div variants={heroItem} className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_50px_rgba(2,8,23,0.28)] backdrop-blur-xl"
                  whileHover={{ y: -6, backgroundColor: 'rgba(255,255,255,0.06)' }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{stat.label}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pl-6"
          >
            <motion.div
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] border border-cyan-300/35"
              animate={{
                x: [0, 20, 0, -20, 0],
                y: [0, -10, 0, 10, 0],
                boxShadow: [
                  '0 0 0 rgba(34,211,238,0.00)',
                  '0 0 40px rgba(34,211,238,0.28)',
                  '0 0 70px rgba(59,130,246,0.22)',
                  '0 0 40px rgba(34,211,238,0.28)',
                  '0 0 0 rgba(34,211,238,0.00)',
                ],
              }}
              transition={{
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            <motion.div
              className="pointer-events-none absolute -inset-6 rounded-[2.8rem] bg-gradient-to-r from-cyan-300/0 via-cyan-300/18 to-blue-500/0 blur-xl"
              animate={{
                x: ['-8%', '10%', '-8%'],
                opacity: [0.45, 0.95, 0.45],
              }}
              transition={{
                duration: 4.8,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            />
            <div className="hero-glow absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/18 via-white/5 to-blue-500/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_100px_rgba(2,8,23,0.55)] backdrop-blur-2xl">
              <div className="hero-float absolute right-6 top-6 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
              <div className="grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5"
                  whileHover={{ y: -4, borderColor: 'rgba(103,232,249,0.18)' }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-3 text-2xl font-semibold text-white">AI + Analytics</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Turning complexity into clarity through insight-led products.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/10 p-5"
                  whileHover={{ y: -4, borderColor: 'rgba(165,243,252,0.28)' }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm text-slate-300">Strength</p>
                  <p className="mt-3 text-2xl font-semibold text-white">Storytelling</p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    Blending technical depth with communication that feels refined.
                  </p>
                </motion.div>
              </div>

              <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Current Direction</p>
                    <p className="mt-2 text-3xl font-semibold text-white">Premium portfolio presence</p>
                  </div>
                  <div className="hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-100 sm:block">
                    2026
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    ['Data Science', '92%'],
                    ['Analytics Engineering', '88%'],
                    ['Product Thinking', '84%'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/8">
                        <motion.div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.45)]"
                          initial={{ width: 0 }}
                          animate={{ width: value }}
                          transition={{ duration: 0.9, delay: 0.55, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <RevealSection id="about">
          <motion.div variants={sectionItem} className="mb-8 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
              About Me
            </p>
            <h2 className="text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              A story shaped by ambition, identity, and forward momentum.
            </h2>
          </motion.div>

          <motion.div variants={sectionItem} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="rounded-[2rem] border border-white/8 bg-gradient-to-b from-slate-900/70 to-slate-900/50 p-8 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl sm:p-10"
              whileHover={{ y: -4, borderColor: 'rgba(103,232,249,0.16)' }}
              transition={{ duration: 0.25 }}
            >
              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                I&apos;m Bashirul Shikder, and my journey is rooted in the values,
                resilience, and perspective I carry from Bangladesh while building
                my future in Florida. That combination keeps me grounded while
                pushing me toward work that feels meaningful, modern, and lasting.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                I am also Microsoft Certified: Fabric Data Engineer, with hands-on
                experience designing and supporting modern analytics platforms.
              </p>
              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                My path into data science and analytics grew from a simple idea:
                information becomes powerful when it helps people understand
                something more clearly. I enjoy transforming data into insight,
                and insight into digital experiences that are both useful and
                visually compelling.
              </p>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                className="rounded-[2rem] border border-white/8 bg-gradient-to-b from-slate-900/70 to-slate-900/50 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl"
                whileHover={{ y: -4, borderColor: 'rgba(103,232,249,0.16)' }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Background</p>
                <p className="mt-4 text-xl font-semibold text-white">Bangladesh to Florida</p>
                <p className="mt-3 leading-7 text-slate-300">
                  A global perspective shapes how I learn, communicate, and solve
                  problems with empathy and precision.
                </p>
              </motion.div>
              <motion.div
                className="rounded-[2rem] border border-white/8 bg-gradient-to-b from-slate-900/70 to-slate-900/50 p-6 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl"
                whileHover={{ y: -4, borderColor: 'rgba(103,232,249,0.16)' }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Journey</p>
                <p className="mt-4 text-xl font-semibold text-white">From learning to building</p>
                <p className="mt-3 leading-7 text-slate-300">
                  I&apos;m growing into a creator who can bridge analytical depth,
                  software skill, and real-world value.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </RevealSection>

        <RevealSection id="skills">
          <motion.div variants={sectionItem} className="mb-8 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
              Skills
            </p>
            <h2 className="max-w-4xl text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Tools and disciplines I use to turn ideas into impact.
            </h2>
          </motion.div>

          <motion.div variants={sectionItem} className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="min-h-[20.5rem] rounded-[2rem] border border-white/8 bg-gradient-to-b from-slate-900/70 to-slate-900/50 p-8 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl"
              whileHover={{ y: -4, borderColor: 'rgba(103,232,249,0.16)' }}
              transition={{ duration: 0.25 }}
            >
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                My toolkit is centered on data science, analytics, software, and
                AI-powered problem solving. I enjoy working across both technical
                implementation and strategic storytelling.
              </p>
            </motion.div>

            <motion.div
              variants={sectionContainer}
              className="grid gap-4 sm:grid-cols-2"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={sectionItem}
                  className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/4 px-5 py-6 shadow-[0_18px_40px_rgba(2,8,23,0.35)] backdrop-blur-xl"
                  whileHover={{
                    y: -6,
                    borderColor: 'rgba(103,232,249,0.22)',
                    backgroundImage:
                      'linear-gradient(to bottom right, rgba(103,232,249,0.10), rgba(59,130,246,0.10))',
                  }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 shadow-[0_0_18px_rgba(56,189,248,0.55)]" />
                    <p className="text-[1.1rem] font-semibold text-white">{skill}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </RevealSection>

        <RevealSection id="projects">
          <motion.div variants={sectionItem} className="mb-8 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
              Projects
            </p>
            <h2 className="text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Selected work with a modern product and analytics lens.
            </h2>
          </motion.div>

          <motion.div
            variants={sectionContainer}
            className="grid gap-6 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={sectionItem}
                className="group rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_22px_65px_rgba(2,8,23,0.45)] backdrop-blur-xl"
                whileHover={{
                  y: -8,
                  borderColor: 'rgba(103,232,249,0.30)',
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  boxShadow: '0 30px 80px rgba(2,8,23,0.52)',
                }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <p className="text-sm uppercase tracking-[0.26em] text-cyan-200/80">
                  {project.category}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white transition duration-300 group-hover:text-cyan-100">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium tracking-wide text-slate-200 transition duration-300 group-hover:border-cyan-300/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </RevealSection>

        <RevealSection id="contact" className="pb-28">
          <motion.div
            variants={sectionItem}
            className="overflow-hidden rounded-[2rem] border border-white/8 bg-gradient-to-b from-slate-900/70 to-slate-900/50 p-8 shadow-[0_24px_80px_rgba(2,8,23,0.45)] backdrop-blur-xl sm:p-10"
            whileHover={{ borderColor: 'rgba(103,232,249,0.16)' }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/85">
                  Contact
                </p>
                <h2 className="max-w-2xl text-4xl leading-tight tracking-[-0.04em] sm:text-5xl">
                  Let&apos;s build something thoughtful, modern, and meaningful together.
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  I&apos;m open to opportunities in data science, analytics,
                  software, and AI-driven work. If you want to collaborate or just
                  say hello, I&apos;d love to connect.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
                <div className="space-y-5">
                  {[
                    ['Email', 'bashirul@example.com', 'mailto:bashirul@example.com'],
                    ['LinkedIn', 'linkedin.com/in/bashirulshikder', 'https://www.linkedin.com'],
                    ['GitHub', 'github.com/bashirulshikder', 'https://github.com'],
                  ].map(([label, value, href]) => (
                    <motion.a
                      key={label}
                      href={href}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                      whileHover={{ y: -4, borderColor: 'rgba(103,232,249,0.28)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      <p className="text-sm text-slate-400">{label}</p>
                      <p className="mt-1 text-lg font-medium text-white">{value}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </RevealSection>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Bashirul Shikder. Crafted with React, Tailwind, and Framer Motion.</p>
          <a href="#home" className="transition duration-300 hover:text-white">
            Back to top
          </a>
        </div>
      </footer>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes heroFloat {
          0%, 100% {
            transform: translate3d(-50%, 0, 0);
          }
          50% {
            transform: translate3d(-50%, -35px, 0);
          }
        }

        @keyframes heroFloatSide {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -28px, 0);
          }
        }

        @keyframes heroGlow {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.03);
          }
        }

        .hero-float {
          animation: heroFloat 8s ease-in-out infinite;
        }

        .hero-float-delayed {
          animation: heroFloatSide 10s ease-in-out infinite;
        }

        .hero-float-slow {
          animation: heroFloatSide 12s ease-in-out infinite reverse;
        }

        .hero-glow {
          animation: heroGlow 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .hero-float,
          .hero-float-delayed,
          .hero-float-slow,
          .hero-glow {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default App
