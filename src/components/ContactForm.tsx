"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const intents = [
  { id: "acquisition", label: "Acquire a painting" },
  { id: "commission", label: "Commission a portrait" },
  { id: "press", label: "Press / curatorial" },
  { id: "private", label: "Private enquiry" },
];

export function ContactForm() {
  const params = useSearchParams();
  const initial = params?.get("regarding") ?? "acquisition";
  const [intent, setIntent] = useState(initial);
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    await new Promise((r) => setTimeout(r, 900));
    setPending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="border-t border-ink/20 pt-10"
      >
        <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
          Received
        </p>
        <p className="mt-4 font-display italic text-4xl md:text-5xl text-ink leading-tight">
          Thank you. The studio will write back to you, by hand, within five
          working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-10">
      <div>
        <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
          I am writing about
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {intents.map((i) => (
            <button
              type="button"
              key={i.id}
              onClick={() => setIntent(i.id)}
              data-cursor
              className={`rounded-full border px-5 py-2.5 font-sans text-[11px] uppercase tracking-widest transition-all duration-500 ${
                intent === i.id
                  ? "border-ink bg-ink text-canvas"
                  : "border-ink/30 text-ink-muted hover:text-ink hover:border-ink/60"
              }`}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>

      <Field name="name" label="Your name" autoComplete="name" required />
      <Field name="email" type="email" label="Email" autoComplete="email" required />
      <Field name="affiliation" label="Affiliation (optional)" />

      <div>
        <label className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
          Message
        </label>
        <textarea
          name="message"
          rows={6}
          required
          placeholder={
            intent === "commission"
              ? "Tell the studio about the sitter, the room, or the painting you have in mind."
              : intent === "acquisition"
              ? "Which painting do you have in mind, and where will it live?"
              : "A few words about what you are working on."
          }
          className="mt-3 w-full resize-none border-b border-ink/30 bg-transparent py-3 font-serif text-lg text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-500"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        data-cursor-label="Send"
        className="group inline-flex items-center gap-4 font-sans text-[12px] uppercase tracking-widest text-ink disabled:opacity-50"
      >
        <span className="block h-px w-12 bg-ink transition-all duration-700 group-hover:w-20" />
        {pending ? "Sending …" : "Send privately"}
      </button>

      <p className="font-serif text-sm text-ink-faint italic">
        — Your message is sent only to the studio. Discretion is assumed.
      </p>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="mt-3 w-full border-b border-ink/30 bg-transparent py-3 font-serif text-lg text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors duration-500"
      />
    </div>
  );
}
