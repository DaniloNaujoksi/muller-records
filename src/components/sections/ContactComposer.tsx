"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";

const CHANNELS = ["demos", "bookings", "press"] as const;
type Channel = (typeof CHANNELS)[number];

/**
 * Which structured fields each lane asks for, besides the message itself.
 * The keys double as translation keys under `contact.composer.fields`.
 */
const FIELDS: Record<Channel, string[]> = {
  demos: ["name", "link"],
  bookings: ["date", "city", "venue"],
  press: ["subject"],
};

/**
 * A mail composer instead of a bare address list, but still no backend: the
 * send button assembles a `mailto:` with the subject and body prefilled from
 * the fields, and the visitor's own mail app takes it from there. Nothing is
 * posted or stored on this side, which is the same no-spam-endpoint,
 * no-consent-copy argument the plain links were built on — just with the
 * sorting work (which lane, which facts Frank needs first) moved into the
 * page where it is interactive.
 */
export function ContactComposer({ email }: { email: string }) {
  const t = useTranslations("contact");
  const [channel, setChannel] = useState<Channel>("demos");
  const [values, setValues] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const fields = FIELDS[channel];
  const part = (key: string) => (values[`${channel}.${key}`] ?? "").trim();

  const subjectDetail =
    channel === "demos"
      ? part("name")
      : channel === "bookings"
        ? [part("city"), part("date")].filter(Boolean).join(", ")
        : part("subject");
  const subject = `${t(`channels.${channel}.title`)}${subjectDetail ? ` — ${subjectDetail}` : ""}`;

  const body = [
    ...fields
      .filter((key) => part(key))
      .map((key) => `${t(`composer.fields.${key}`)}: ${part(key)}`),
    "",
    message,
  ]
    .join("\n")
    .trim();

  const href = `mailto:${email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (permissions, http) — the address is
      // printed right next to the button, so failing silently costs nothing.
    }
  };

  const inputClass =
    "w-full border-b border-rule bg-transparent py-3 text-base text-paper placeholder:text-mute transition-colors focus:border-blood focus:outline-none";

  return (
    <div>
      {/* Lane picker: the old three channel cards, now selectable. */}
      <div role="radiogroup" aria-label={t("title")} className="grid gap-px border-t border-rule md:grid-cols-3">
        {CHANNELS.map((key) => {
          const active = key === channel;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setChannel(key)}
              className={clsx(
                "border-b py-10 text-left transition-colors md:border-r md:pr-8 md:last:border-r-0",
                active ? "border-b-blood md:border-r-rule" : "border-rule",
              )}
            >
              <span className={clsx("type-heading block text-2xl", active ? "text-blood" : "text-paper")}>
                {t(`channels.${key}.title`)}
              </span>
              <span className="mt-4 block max-w-sm text-sm leading-relaxed text-dim">
                {t(`channels.${key}.body`)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 max-w-2xl">
        <div className="grid gap-8 sm:grid-cols-2">
          {fields.map((key) => (
            <label key={`${channel}.${key}`} className="block">
              <span className="type-label text-mute">{t(`composer.fields.${key}`)}</span>
              <input
                type="text"
                value={values[`${channel}.${key}`] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [`${channel}.${key}`]: e.target.value }))}
                className={inputClass}
              />
            </label>
          ))}
        </div>

        <label className="mt-8 block">
          <span className="type-label text-mute">{t("composer.fields.message")}</span>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={clsx(inputClass, "resize-y")}
          />
        </label>

        <p className="mt-6 text-sm leading-relaxed text-mute">{t("composer.hint")}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={href}
            className="type-label flex items-center gap-2 border border-paper px-6 py-4 transition-colors hover:bg-paper hover:text-ink"
          >
            {t("composer.send")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={copy}
            className="type-label flex items-center gap-2 border border-rule px-6 py-4 text-dim transition-colors hover:border-blood hover:text-blood"
          >
            {copied ? <Check className="h-4 w-4 text-blood" /> : <Copy className="h-4 w-4" />}
            {copied ? t("composer.copied") : t("composer.copy")}
          </button>
          <span className="type-label text-blood">{email}</span>
        </div>
      </div>
    </div>
  );
}
