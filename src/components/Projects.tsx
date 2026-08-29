import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Вибрані проєкти
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mb-14">
            Анімація логотипів, VFX, типографіка та motion graphics.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <a
                href={project.link}
                className="group block relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]/50"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[var(--color-bg)]/70 backdrop-blur px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                    {project.year}
                  </div>
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className={`shrink-0 mt-1 transition-all duration-300 ${
                        hovered === project.id
                          ? "text-[var(--color-accent)] translate-x-0.5 -translate-y-0.5"
                          : "text-[var(--color-muted)]"
                      }`}
                    />
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[var(--color-muted)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
