import Image from "next/image";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Eyebrow from "@/components/Eyebrow";
import PageHeader from "@/components/PageHeader";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Aloft Aerial",
  description:
    "Aerial photography, video, mapping, and inspection imagery for property, construction, film, events, and brand work.",
};

const services = [
  {
    id: "photography",
    n: "01",
    title: "Aerial photography",
    summary:
      "Editorial-grade stills for marketing, listings, brand, and editorial use.",
    deliverables: [
      "20–40 colour-graded stills",
      "RAW + JPEG + WebP",
      "Twilight & golden-hour add-on",
      "Licensed for commercial use",
    ],
    image: images.photography,
  },
  {
    id: "video",
    n: "02",
    title: "Aerial video",
    summary:
      "Cinematic 4K and 6K capture, smooth motion, considered framing.",
    deliverables: [
      "4K / 6K RAW + ProRes",
      "Story-led shot list",
      "Optional edit & colour grade",
      "Vertical re-cuts for social",
    ],
    image: images.film,
    video: "/Aerial-video.mp4",
  },
  {
    id: "mapping",
    n: "03",
    title: "Mapping & survey data",
    summary:
      "Orthomosaics, 3D models, elevation maps and volumetrics — geo-referenced.",
    deliverables: [
      "Orthomosaic (GeoTIFF)",
      "3D mesh + point cloud",
      "DSM / DTM elevation",
      "Volumetric measurement reports",
    ],
    image: images.mapping,
  },
  {
    id: "inspection",
    n: "04",
    title: "Inspection imagery",
    summary:
      "High-resolution visual data of roofs, solar arrays, façades and infrastructure.",
    deliverables: [
      "Calibrated, geo-tagged stills",
      "Thermal / RGB capture",
      "Defect-spot grid layout",
      "Hand-off in your inspector’s format",
    ],
    image: images.inspection,
  },
];

const industries = [
  {
    id: "property",
    title: "Property & real estate",
    body:
      "Listings, twilight, lifestyle. Calibrated for MLS, brochure, and social.",
  },
  {
    id: "construction-survey",
    title: "Construction & survey",
    body:
      "Monthly progress capture, ortho, volumetrics, and as-built data.",
  },
  {
    id: "film-commercial",
    title: "Film & commercial",
    body:
      "Cinematic aerial work integrated with your DP, editor, and colourist.",
  },
  {
    id: "events-weddings",
    title: "Events & weddings",
    body:
      "Quiet, considered context — never intrusive. Family-first delivery.",
  },
  {
    id: "inspection",
    title: "Inspection & infrastructure",
    body:
      "Visual data captured to your inspectors’ specification. We capture; you assess.",
  },
  {
    id: "brand-creator",
    title: "Brand & creator content",
    body:
      "Scroll-ready stills and short-form video that earn a second look.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={<>What we capture.</>}
        intro="Four core capabilities. One studio. Pick one or combine — every brief is shaped to the way your team will actually use the deliverables."
      />

      {/* CAPABILITIES — alternating layout */}
      <section>
        {services.map((s, i) => (
          <article
            key={s.id}
            id={s.id}
            className="border-b border-[var(--color-line)]"
          >
            <div className="container-page py-20 md:py-28">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-center">
                <div
                  className={`md:col-span-6 ${i % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="font-mono text-[12px] text-[var(--color-ink)]/45">
                    {s.n}
                  </div>
                  <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                    {s.title}
                  </h2>
                  <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[var(--color-ink)]/70">
                    {s.summary}
                  </p>

                  <div className="mt-10">
                    <div className="text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)]/45">
                      Typical deliverables
                    </div>
                    <ul className="mt-4 space-y-2">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-baseline gap-3 text-[15px] text-[var(--color-ink)]/80"
                        >
                          <span className="mt-2 inline-block h-px w-3 bg-[var(--color-ink)]/40" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ArrowLink href="/contact" className="mt-10">
                    Brief us on a {s.title.toLowerCase()} project
                  </ArrowLink>
                </div>

                <div className={`md:col-span-6 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
                    {"video" in s && s.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={s.image}
                        aria-label={s.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      >
                        <source src={s.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[var(--color-fog)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Industries</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                Who we capture for.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Different teams, different uses for the same well-made image.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-[var(--color-line)] sm:grid-cols-2">
                {industries.map((i) => (
                  <li key={i.id} id={i.id} className="bg-white">
                    <Link
                      href={`/industries/${i.id}`}
                      className="group block p-8 transition-colors"
                    >
                      <div className="text-[18px] tracking-tight md:text-[20px] link-quiet">
                        {i.title}
                      </div>
                      <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
                        {i.body}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-ink)]">
                        Open sector
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="text-[34px] leading-[1.05] tracking-tight md:text-[64px]">
                Have a brief in mind?
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Tell us what you&rsquo;re building or capturing. We&rsquo;ll
                propose the simplest service mix that delivers what you need.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-[var(--color-ink)] px-7 text-[14px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
