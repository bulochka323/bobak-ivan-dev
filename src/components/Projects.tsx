import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

type Project = (typeof projects)[number];

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function isVimeo(url: string) {
  return url.includes("vimeo.com");
}

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|v=|\/embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function getVimeoId(url: string) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : null;
}

function VideoModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVertical = project.orientation === "vertical";

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const renderPlayer = () => {
    if (isYouTube(project.video)) {
      const id = getYouTubeId(project.video);
      if (!id) return null;

      return (
        <iframe
          key={project.id}
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={project.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      );
    }

    if (isVimeo(project.video)) {
      const id = getVimeoId(project.video);
      if (!id) return null;

      return (
        <iframe
          key={project.id}
          src={`https://player.vimeo.com/video/${id}?autoplay=1`}
          title={project.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      );
    }

    return (
      <video
        key={project.id}
        ref={videoRef}
        src={project.video}
        poster={project.poster}
        controls
        autoPlay
        playsInline
        className="w-full h-full object-contain bg-black"
      />
    );
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className={`relative w-full rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xl ${
          isVertical ? "max-w-[400px]" : "max-w-5xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Закрити */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
          aria-label="Закрити"
        >
          <X size={20} />
        </button>

        {/* Відео */}
        <div
          className={`w-full bg-black ${
            isVertical ? "aspect-[9/16] max-h-[75vh]" : "aspect-video"
          }`}
        >
          {renderPlayer()}
        </div>

        {/* Інфо + навігація */}
        <div className="p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {project.description}
              </p>
            </div>
            <span className="text-xs text-[var(--color-muted)] shrink-0">
              {project.year}
            </span>
          </div>

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

          {/* Кнопки Попереднє / Наступне */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onPrev}
              disabled={!hasPrev}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                hasPrev
                  ? "border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  : "border-[var(--color-border)] opacity-40 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={16} />
              Попереднє
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={!hasNext}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
                hasNext
                  ? "border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  : "border-[var(--color-border)] opacity-40 cursor-not-allowed"
              }`}
            >
              Наступне
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeProject = activeIndex !== null ? projects[activeIndex] : null;

  const openProject = (index: number) => setActiveIndex(index);
  const closeProject = () => setActiveIndex(null);

  const goPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex(Math.max(0, activeIndex - 1));
  };

  const goNext = () => {
    if (activeIndex === null) return;
    setActiveIndex(Math.min(projects.length - 1, activeIndex + 1));
  };

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
            Натисни на проєкт, щоб подивитися повне відео
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => openProject(i)}
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
                      <Play
                        size={22}
                        className="text-[var(--color-bg)] ml-0.5"
                        fill="currentColor"
                      />
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

      {activeProject && activeIndex !== null && (
        <VideoModal
          project={activeProject}
          onClose={closeProject}
          onPrev={goPrev}
          onNext={goNext}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < projects.length - 1}
        />
      )}
    </section>
  );
}
