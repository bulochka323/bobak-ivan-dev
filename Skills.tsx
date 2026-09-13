import { skills } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-8 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Інструменти та експертиза
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 md:p-8 transition-colors hover:border-[var(--color-accent)]/40">
                <h3 className="text-lg font-semibold mb-5 text-[var(--color-text)]">
                  {cat.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
