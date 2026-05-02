import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aloft Aerial",
  description:
    "Tell us what you’re building, capturing, or selling. We normally reply within a working day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Tell us what you need.</>}
        intro="The more specific the brief, the sharper the proposal. A few sentences is plenty to start."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            <aside className="md:col-span-4 md:col-start-9 space-y-12">
              <div>
                <Eyebrow>Direct</Eyebrow>
                <a
                  href="mailto:hello@aloftaerial.com"
                  className="mt-4 block text-[20px] tracking-tight text-[var(--color-ink)] link-quiet"
                >
                  hello@aloftaerial.com
                </a>
                <a
                  href="tel:+12096411840"
                  className="mt-2 block text-[16px] text-[var(--color-ink)]/65 link-quiet"
                >
                  209.641.1840
                </a>
              </div>

              <div>
                <Eyebrow>Coverage</Eyebrow>
                <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink)]/70">
                  Greater RDU Area, North Carolina — flying nationwide for
                  film, commercial, and large-scale survey work.
                </p>
              </div>

              <div>
                <Eyebrow>Credentials</Eyebrow>
                <ul className="mt-4 space-y-2 text-[15px] text-[var(--color-ink)]/70">
                  <li>FAA Part 107 certified</li>
                  <li>$5M public liability cover</li>
                  <li>$1M aircraft hull cover</li>
                </ul>
              </div>

              <div>
                <Eyebrow>Hours</Eyebrow>
                <p className="mt-4 text-[15px] text-[var(--color-ink)]/70">
                  Mon–Fri, 8am–6pm PT.
                  <br />
                  Weekends by arrangement for events and weather windows.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
