import { motion, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useReducedMotion } from "../hooks/useReducedMotion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center px-5 md:px-8 overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={reduced ? undefined : container}
        initial={reduced ? false : "hidden"}
        animate="show"
        className="relative mx-auto max-w-6xl w-full pt-24 pb-16"
      >
        <motion.p
          variants={reduced ? undefined : item}
          className="mb-4 text-sm font-medium tracking-widest uppercase text-[var(--color-accent)]"
        >
          {personalInfo.availability}
        </motion.p>

        <motion.h1
          variants={reduced ? undefined : item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl"
        >
          {personalInfo.name}
          <br />
          <span className="text-[var(--color-text-secondary)] font-semibold">
            {personalInfo.role}
          </span>
        </motion.h1>

        <motion.p
          variants={reduced ? undefined : item}
          className="mt-6 max-w-xl text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={reduced ? undefined : item}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-accent-2)] transition-colors"
          >
            Мої роботи
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
          >
            Зв'язатися
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
          aria-label="Scroll to about"
        >
          <span className="text-xs tracking-widest uppercase">Скрол</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
