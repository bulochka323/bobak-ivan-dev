import { useEffect, useRef, useState } from "react";
import { projects as fallbackProjects } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

type Project = (typeof fallbackProjects)[number];

export function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);

  useEffect(() => {
    fetch("/api/projects", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => Array.isArray(data) && setProjects(data))
      .catch(() => {});
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({
      left: dir === "left" ? -scrollerRef.current.clientWidth * 0.75 : scrollerRef.current.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="px-5 md:px-8 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Вибрані проєкти</h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl">Свайпай або скроль — усі роботи прямо тут</p>
            </div>
            <div className="hidden sm:flex gap-2 shrink-0">
              <button type="button" onClick={() => scrollBy("left")} className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">←</button>
              <button type="button" onClick={() => scrollBy("right")} className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors">→</button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div ref={scrollerRef} className="flex gap-5 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: "thin", scrollbarColor: "var(--color-border) transparent" }}>
        {projects.map((project) => (
          <article key={project.id} className="snap-start shrink-0 w-[85vw] sm:w-[400px] md:w-[460px] rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="aspect-video relative bg-black">
              <video
                src={project.video}
                poster={project.poster || undefined}
                muted loop playsInline controls preload="metadata"
                className="w-full h-full object-cover"
                onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
                <span className="text-xs text-[var(--color-muted)] shrink-0 mt-1">{project.year}</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 mb-3">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => <li key={tag} className="text-xs rounded-full border border-[var(--color-border)] px-2.5 py-1 text-[var(--color-muted)]">{tag}</li>)}
              </ul>
            </div>
          </article>
        ))}
        <div className="shrink-0 w-2" />
      </div>
    </section>
  );
}
