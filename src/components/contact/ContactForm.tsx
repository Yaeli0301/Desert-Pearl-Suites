"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { getRooms } from "@/data/rooms";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success";

const fieldClass =
  "w-full rounded-sm border border-cream-dark bg-cream-soft px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

const labelClass = "mb-2 block text-xs uppercase tracking-luxe text-ink-muted";

export function ContactForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const t = dict.contact.form;
  const rooms = getRooms(locale);

  // This is a front-end demo handler. Wire it to an API route, a form service
  // (e.g. Formspree/Resend) or a CRM when moving to production.
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    (event.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-gold/40 bg-cream-soft p-10 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-ink">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-6 font-serif text-2xl text-ink">{t.successTitle}</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          {t.successBody}
        </p>
        <Button
          className="mt-7"
          variant="outline"
          size="sm"
          onClick={() => setStatus("idle")}
        >
          {t.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.name}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={t.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            className={fieldClass}
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dates" className={labelClass}>
            {t.dates}
          </label>
          <input
            id="dates"
            name="dates"
            type="text"
            placeholder={t.datesPlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="suite" className={labelClass}>
            {t.suite}
          </label>
          <select id="suite" name="suite" defaultValue="" className={cn(fieldClass, "appearance-none")}>
            <option value="" disabled>
              {t.suitePlaceholder}
            </option>
            {rooms.map((room) => (
              <option key={room.slug} value={room.name}>
                {room.name}
              </option>
            ))}
            <option value={t.notSure}>{t.notSure}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? t.submitting : t.submit}
      </Button>
    </form>
  );
}
