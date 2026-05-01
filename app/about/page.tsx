import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ArrowLink from "@/components/ArrowLink";
import Eyebrow from "@/components/Eyebrow";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Aloft Aerial",
  description:
    "Aloft Aerial is the visual and data capture layer for property, construction, film, inspection, and events.",
};

const principles = [
  {
    n: "01",
    title: "Capture, not interpret.",
    body:
      "We don’t inspect, we don’t market, and we don’t analyse. We capture clean, calibrated visual data — and hand it to the people who do.",
  },
  {
    n: "02",
    title: "Built around your workflow.",
    body:
      "Files arrive in the format your team already uses. RAW for editors, GeoTIFF for surveyors, JPEG for marketing. No reformatting after the fact.",
  },
  {
    n: "03",
    title: "Boringly reliable.",
    body:
      "Pre-flight checks, redundant storage, weather contingency, and a same-week turnaround on most jobs. The interesting part is the picture, not the process.",
  },
  {
    n: "04",
    title: "Quietly excellent.",
    body:
      "Tight composition. Considered colour. Frame-accurate motion. The kind of work that makes the rest of your deliverable look better.",
  },
];

const stats = [
  { v: "200+", k: "Projects captured" },
  { v: "6", k: "Industries served" },
  { v: "Part 107", k: "FAA certified" },
  { v: "1M / $5M", k: "Liability cover" },
];

const equipment = [
  { name: "DJI Inspire 3", note: "6K full-frame cinema" },
  { name: "DJI Mavic 3 Pro", note: "Hasselblad triple-camera" },
  { name: "DJI Matrice 350 RTK", note: "Survey-grade mapping" },
  { name: "Zenmuse H20T", note: "Thermal + RGB inspection" },
  { name: "Pix4D / DroneDeploy", note: "Photogrammetry pipeline" },
  { name: "DaVinci Resolve Studio", note: "Colour & finishing" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>The capture layer.</>}
        intro="Aloft is a small studio focused on a single craft: capturing visuals and data from above, well. Everything else is built around that."
      />

      {/* MANIFESTO IMAGE */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-24">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
            <Image
              src={images.forest}
              alt="Aerial perspective"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-[24px] leading-[1.3] tracking-tight text-[var(--color-ink)] md:text-[36px] md:leading-[1.2]">
            We&rsquo;re not your inspectors, your marketers, or your analysts.
            We capture the imagery and data that power their work.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Principles</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                How we work.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-[var(--color-line)] sm:grid-cols-2">
                {principles.map((p) => (
                  <li key={p.n} className="bg-white p-8 md:p-10">
                    <div className="font-mono text-[12px] text-[var(--color-ink)]/45">
                      {p.n}
                    </div>
                    <div className="mt-8 text-[20px] tracking-tight md:text-[22px]">
                      {p.title}
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-page py-20 md:py-28">
          <ul className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <li key={s.k}>
                <div className="text-[42px] tracking-tight md:text-[64px]">
                  {s.v}
                </div>
                <div className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/55">
                  {s.k}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Kit</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                The gear, briefly.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Equipment is a means, not the message. We pick the right
                airframe and sensor for the job — and don&rsquo;t bring it up
                again.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {equipment.map((e) => (
                  <li
                    key={e.name}
                    className="flex items-baseline justify-between gap-6 py-5"
                  >
                    <span className="text-[16px] tracking-tight md:text-[18px]">
                      {e.name}
                    </span>
                    <span className="text-right text-[13px] text-[var(--color-ink)]/55 md:text-[14px]">
                      {e.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="text-[34px] leading-[1.05] tracking-tight md:text-[64px]">
                Want to see what we&rsquo;d capture for you?
              </h2>
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
