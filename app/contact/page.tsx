import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Inquire about a commission, purchase, or other matter — send a private message to Zach Shevlin.",
};

export default function ContactPage() {
  return (
    <div className="pt-10 md:pt-14 pb-20">
      <div className="container-form text-center mb-10 md:mb-14">
        <h1 className="font-display text-4xl md:text-5xl">Contact</h1>
        <p className="mt-4 text-[color:var(--color-text-secondary)]">
          Commission inquiries, purchase requests, and other correspondence are
          all welcome.
        </p>
      </div>

      <div className="container-form">
        <ContactForm />

        <div className="mt-10 text-center text-sm text-[color:var(--color-text-secondary)] space-y-2">
          <p>
            Direct email:{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="text-[color:var(--color-text-primary)] underline underline-offset-4 hover:text-[color:var(--color-accent)] transition-colors"
            >
              {SITE.email}
            </a>
          </p>
          <p>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 hover:text-[color:var(--color-text-primary)] transition-colors"
              aria-label="Zach Shevlin on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
