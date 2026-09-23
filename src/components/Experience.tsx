import { experience, education } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-5 md:px-8 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl">
        {/* ===== ДОСВІД ===== */}
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
            Де я працював
          </h2>
        </ScrollReveal>

        <div className="relative mb-24">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)] md:-translate-x-px" />

          <ul className="space-y-12 md:space-y-16">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={job.company + job.period} className="relative">
                  <ScrollReveal delay={i * 0.08} direction={isLeft ? "right" : "left"}>
                    <div
                      className={`md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                      }`}
                    >
                      <div className="absolute left-0 md:left-1/2 top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)] -translate-x-1.5 md:-translate-x-1.5" />

                      <div className="ml-6 md:ml-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 md:p-6">
                        <p className="text-xs font-medium tracking-wider uppercase text-[var(--color-accent)]">
                          {job.period}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold">{job.role}</h3>
                        <p className="text-sm text-[var(--color-muted)] mt-0.5">
                          {job.company}
                        </p>
                        <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ===== ОСВІТА ===== */}
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Де я навчався
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {education.map((item, i) => (
            <ScrollReveal key={item.place + item.period} delay={i * 0.06}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 md:p-6 h-full">
                <p className="text-xs font-medium tracking-wider uppercase text-[var(--color-accent)]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.place}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
