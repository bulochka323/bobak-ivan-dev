import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

type Project = (typeof projects)[number];

function FeedModal({
  startIndex,
  onClose,
}: {
  startIndex: number;
  onClose: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowDown" || e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const slide = el.children[startIndex] as HTMLElement;
    if (slide) {
      slide.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    }
  }, [startIndex]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(index)) setCurrent(index);
          }
        });
      },
      { root: el, threshold: 0.6 }
    );

    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const goPrev = () => {
    const el = containerRef.current;
    if (!el) return;
    const prev = Math.max(0, current - 1);
    const slide = el.children[prev] as HTMLElement;
    slide?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goNext = () => {
    const el = containerRef.current;
    if (!el) return;
    const next = Math.min(projects.length - 1, current + 1);
    const slide = el.children[next] as HTMLElement;
    slide?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openVideo = (project: Project) => {
    window.open(project.video, "_blank");
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black">
      {/* Закрити */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white"
        aria-label="Закрити"
      >
        <X size={22} />
      </button>

      {/* Кнопки по боках */}
      <button
        onClick={goPrev}
        disabled={current === 0}
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white ${
          current === 0 ? "opacity-30" : "opacity-90"
        }`}
        aria-label="Попереднє"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goNext}
        disabled={current === projects.length - 1}
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white ${
          current === projects.length - 1 ? "opacity-30" : "opacity-90"
        }`}
        aria-label="Наступне"
      >
        <ChevronRight size={24} />
      </button>

      {/* Вертикальна стрічка */}
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            data-index={index}
            className="h-[100dvh] w-full snap-start snap-always relative"
          >
            <img
              src={project.poster}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Play */}
            <button
              onClick={() => openVideo(project)}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-xl">
                <Play size={28} className="text-black ml-1" fill="currentColor" />
              </div>
            </button>

            {/* Текст внизу */}
            <div className="absolute bottom-0 left-0 right-0 p-5 pb-10 text-white z-10">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/70 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs rounded-full border border-white/30 px-2.5 py-1 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-white/50 shrink-0">{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>,
    document.body
  );
}

export function Projects() {
  const [feedIndex, setFeedIndex] = useState<number | null>(null);

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
            Натисни на проєкт — відкриється стрічка як у TikTok
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setFeedIndex(i)}
                className="group w-full text-left block relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]/50"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.poster}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={22} className="text-[var(--color-bg)] ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  {project.duration && (
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/70 backdrop-blur px-2 py-0.5 text-xs text-white">
                      {project.duration}
                    </div>
                  )}
                  <div className="absolute top-4 right-4 rounded-full bg-[var(--color-bg)]/70 backdrop-blur px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                    {project.year}
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
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
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {feedIndex !== null && (
        <FeedModal startIndex={feedIndex} onClose={() => setFeedIndex(null)} />
      )}
    </section>
  );
}
