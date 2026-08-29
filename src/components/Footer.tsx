import { personalInfo } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10 px-5 md:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {personalInfo.name}. Усі права захищені.
        </p>
        <p className="text-sm text-[var(--color-muted)]">
          Зроблено на React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}
