import { Phone, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-10">
            Контакт
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <a
              href={`tel:${personalInfo.phone}`}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/50 transition-colors group"
            >
              <Phone size={20} className="text-[var(--color-accent)] mb-4" />
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">
                Телефон / WhatsApp
              </p>
              <p className="text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors">
                {personalInfo.phone}
              </p>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-accent)]/50 transition-colors group"
            >
              <Mail size={20} className="text-[var(--color-accent)] mb-4" />
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">
                Email
              </p>
              <p className="text-lg font-medium group-hover:text-[var(--color-accent)] transition-colors break-all">
                {personalInfo.email}
              </p>
            </a>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:col-span-2 lg:col-span-1">
              <MessageCircle size={20} className="text-[var(--color-accent)] mb-4" />
              <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-3">
                Месенджери
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Telegram
                </a>
                <a
                  href={personalInfo.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[var(--color-border)] px-4 py-2 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
