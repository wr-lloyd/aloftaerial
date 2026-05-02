import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import ArrowLink from "@/components/ArrowLink";
import { images } from "@/lib/images";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries — Aloft Aerial",
  description:
    "Aerial imaging tailored to property, construction, film, events, inspection, and brand & creator work. Pick your sector to see typical deliverables, audiences, and example briefs.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={<>Pick your sector.</>}
        intro="Same studio, six different uses. Open any sector to see the typical deliverables, who in your team uses each output, and example briefs we&rsquo;d expect."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-24">
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i, idx) => (
              <li key={i.slug}>
                <Link
                  href={`/industries/${i.slug}`}
                  className="group block"
                  aria-label={`Open ${i.name} industry page`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
                    <Image
                      src={images[i.image]}
                      alt={i.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[22px] tracking-tight md:text-[24px]">
                        {i.name}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
                    {i.short}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-ink)] link-quiet">
                    Open sector
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Eyebrow>Not sure which fits?</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[56px]">
                Tell us the brief — we&rsquo;ll find the fit.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Plenty of projects span sectors. A short note about what
                you&rsquo;re building or capturing is plenty to start.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <ArrowLink href="/contact">Start a project</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
