import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { ScrollReveal } from "./ScrollReveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Контакт
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Давай зробимо щось круте
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mb-14">
            Є ідея для анімації, intro чи VFX? Напиши — відповім швидко.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-12 gap-12">
          <ScrollReveal className="md:col-span-5" delay={0.05}>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-[var(--color-accent)] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">
                    Телефон / WhatsApp
                  </p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-lg text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-[var(--color-accent)] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">
                    Портфоліо / Email
                  </p>
                  <a
                    href={`https://${personalInfo.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-1 text-[var(--color-accent)] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--color-muted)] mb-1">
                    Месенджери
                  </p>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <a
                      href={personalInfo.socials.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      Telegram
                    </a>
                    <a
                      href={personalInfo.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[var(--color-border)] px-4 py-1.5 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-7" delay={0.12}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-[var(--color-muted)] mb-1.5">
                    Ім’я
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    placeholder="Ваше ім’я"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-[var(--color-muted)] mb-1.5">
                    Email / Telegram
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="text"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                    placeholder="@username або email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[var(--color-muted)] mb-1.5">
                  Повідомлення
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                  placeholder="Опишіть проєкт або ідею..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-accent-2)] disabled:opacity-70 transition-colors"
              >
                {status === "idle" && (
                  <>
                    Надіслати <Send size={16} />
                  </>
                )}
                {status === "sending" && "Надсилаю..."}
                {status === "sent" && "Надіслано ✓"}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
