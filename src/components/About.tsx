import { about, personalInfo } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Про мене
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 max-w-2xl">
            Motion з характером
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Photo */}
          <ScrollReveal className="md:col-span-4" direction="right">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
              <img
                src="/photo.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  // fallback якщо фото ще немає
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-lg font-semibold">{personalInfo.name}</p>
                <p className="text-sm text-[var(--color-accent)]">{personalInfo.role}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="md:col-span-8 space-y-6">
            {about.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                  {p}
                </p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.2}>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {about.specialties.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                  >
                    <h3 className="text-sm font-semibold text-[var(--color-accent)] mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-2 pt-2">
                {about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {about.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
