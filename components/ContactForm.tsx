"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SITE } from "@/lib/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

async function handleSubmit(data: FormState) {
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : "",
    "",
    data.message,
  ]
    .filter((line) => line !== undefined)
    .join("\n");

  const url =
    `mailto:${SITE.email}` +
    `?subject=${encodeURIComponent(data.subject || "Inquiry")}` +
    `&body=${encodeURIComponent(body)}`;

  window.location.href = url;
}

function ContactFormBody() {
  const params = useSearchParams();
  const [state, setState] = useState<FormState>(empty);

  useEffect(() => {
    const s = params?.get("subject");
    if (s) setState((prev) => ({ ...prev, subject: s }));
  }, [params]);

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setState({ ...state, [k]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    void handleSubmit(state);
  };

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="field-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={state.name}
          onChange={update("name")}
          className="field-input"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={state.email}
            onChange={update("email")}
            className="field-input"
          />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone <span className="normal-case tracking-normal text-[color:var(--color-text-secondary)]">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={state.phone}
            onChange={update("phone")}
            className="field-input"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="field-label">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={state.subject}
          onChange={update("subject")}
          className="field-input"
          placeholder="e.g. Kitten inquiry, Waitlist, General question"
        />
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={state.message}
          onChange={update("message")}
          className="field-input resize-y"
        />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-solid">
          Send Message
        </button>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div aria-hidden className="h-[480px]" />}>
      <ContactFormBody />
    </Suspense>
  );
}
