import Image from "next/image";
import Link from "next/link";
import ArrowLink from "@/components/ArrowLink";
import Eyebrow from "@/components/Eyebrow";
import { images } from "@/lib/images";

const capabilities = [
  {
    n: "01",
    title: "Aerial photography",
    body: "Editorial-grade stills for marketing, listings, brand, and editorial use. Delivered colour-graded in the formats you actually need.",
  },
  {
    n: "02",
    title: "Aerial video",
    body: "Cinematic 4K and 6K capture, smooth motion, considered framing. Story-led footage that respects your edit.",
  },
  {
    n: "03",
    title: "Mapping & survey data",
    body: "Orthomosaics, 3D models, elevation maps and volumetrics. Accurate, geo-referenced data your team can actually build with.",
  },
  {
    n: "04",
    title: "Inspection-grade imagery",
    body: "High-resolution visual data of roofs, solar arrays, façades, and infrastructure — captured to the spec your inspectors require.",
  },
];

const industries = [
  { name: "Property & real estate", note: "Listings, twilight, lifestyle." },
  { name: "Construction & survey", note: "Progress capture, ortho, volumetrics." },
  { name: "Film & commercial", note: "Story-led aerial cinematography." },
  { name: "Events & weddings", note: "Timeless context, never intrusive." },
  { name: "Inspection imagery", note: "Roofs, solar, façades, infrastructure." },
  { name: "Brand & creator content", note: "Scroll-ready stills and short-form video." },
];

const work = [
  { title: "Coastal residence", meta: "Property · Stills + 4K", img: images.coastal, ratio: "aspect-[4/5]" },
  { title: "Mid-rise progress capture", meta: "Construction · Monthly", img: images.construction, ratio: "aspect-[4/3]" },
  { title: "Estate listing", meta: "Property · Twilight", img: images.property, ratio: "aspect-[4/3]" },
  { title: "Solar array survey", meta: "Inspection · Ortho", img: images.solar, ratio: "aspect-[4/5]" },
  { title: "Vineyard wedding", meta: "Events · Cinematic", img: images.events, ratio: "aspect-[4/5]" },
  { title: "Switchback drive", meta: "Commercial · 6K", img: images.film, ratio: "aspect-[4/3]" },
];

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed video, cinematic 21:9 with sensible bounds */}
      <section className="relative h-[64vh] min-h-[420px] max-h-[640px] overflow-hidden bg-[var(--color-ink)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={images.hero}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Darken overlay — gradient stronger at bottom for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/30"
        />

        {/* Content — bottom anchored */}
        <div className="relative z-10 flex h-full items-end pb-12 md:pb-16">
          <div className="container-page w-full">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-2">
                <div className="text-[12px] uppercase tracking-[0.18em] text-white/60">
                  Aerial imaging studio
                </div>
              </div>
              <div className="md:col-span-10">
                <h1 className="text-[44px] leading-[1.02] tracking-tight text-white md:text-[88px] md:leading-[0.98]">
                  We capture the visuals
                  <br className="hidden md:block" /> and data that power your work.
                </h1>
                <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
                  <p className="md:col-span-7 max-w-xl text-[18px] leading-relaxed text-white/75 md:text-[20px]">
                    Aloft is the capture layer. Stills, video, and survey-grade
                    imagery — calibrated for property, construction, film,
                    inspection, and events.
                  </p>
                  <div className="md:col-span-5 md:flex md:items-end md:justify-end">
                    <div className="flex items-center gap-8">
                      <ArrowLink href="/work" className="!text-white">See our work</ArrowLink>
                      <Link
                        href="/contact"
                        className="text-[14px] font-medium text-white/65 hover:text-white transition-colors link-quiet"
                      >
                        Start a project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-[var(--color-line)]" style={{ marginTop: "var(--spacing-section)" }}>
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>01 — Capture</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                Four ways we work.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Most projects use one. Some use all four. We&rsquo;ll help you
                pick what fits.
              </p>
              <ArrowLink href="/services" className="mt-8">All services</ArrowLink>
            </div>

            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-[var(--color-line)] sm:grid-cols-2">
                {capabilities.map((c) => (
                  <li key={c.n} className="bg-white p-8 md:p-10">
                    <div className="font-mono text-[12px] text-[var(--color-ink)]/45">{c.n}</div>
                    <div className="mt-8 text-[20px] tracking-tight md:text-[22px]">{c.title}</div>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-ink)]/65">
                      {c.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-fog)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>02 — Where we work</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                Built for serious work — and the work you love.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {industries.map((i) => (
                  <li
                    key={i.name}
                    className="flex items-baseline justify-between gap-6 py-6"
                  >
                    <span className="text-[20px] tracking-tight md:text-[24px]">
                      {i.name}
                    </span>
                    <span className="text-right text-[14px] text-[var(--color-ink)]/55 md:text-[15px]">
                      {i.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="flex items-end justify-between gap-8">
            <div>
              <Eyebrow>03 — Recent work</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                Selected projects.
              </h2>
            </div>
            <ArrowLink href="/work" className="hidden md:inline-flex">
              View all
            </ArrowLink>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-12">
            {work.map((w, idx) => (
              <figure
                key={w.title}
                className={`md:col-span-6 ${idx % 3 === 0 ? "md:col-span-7" : idx % 3 === 1 ? "md:col-span-5" : "md:col-span-12"}`}
              >
                <div className={`relative ${w.ratio} overflow-hidden rounded-[2px] bg-[var(--color-fog)]`}>
                  <Image
                    src={w.img}
                    alt={w.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-between text-[14px]">
                  <span className="text-[var(--color-ink)] tracking-tight">{w.title}</span>
                  <span className="text-[var(--color-ink)]/55">{w.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <ArrowLink href="/work">View all work</ArrowLink>
          </div>
        </div>
      </section>

      {/* POSITIONING / QUOTE */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-paper)]">
        <div className="container-page py-32 md:py-44">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <div className="text-[12px] uppercase tracking-[0.18em] text-white/55">
                Position
              </div>
            </div>
            <div className="md:col-span-10">
              <p className="text-[28px] leading-[1.18] tracking-tight md:text-[44px] md:leading-[1.12]">
                Aloft is the visual and data capture layer.
                We&rsquo;re not your inspectors, your marketers, or your
                analysts. We capture the imagery and data that power their
                work — clean, calibrated, and on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>04 — Get in touch</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[64px]">
                A clearer view starts with a brief.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Tell us what you&rsquo;re building, capturing, or selling. We
                normally reply within a working day.
              </p>
            </div>
            <div className="md:col-span-5 md:flex md:items-end md:justify-end">
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-ink)] px-7 text-[14px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors"
                >
                  Start a project
                </Link>
                <a
                  href="mailto:hello@aloftaerial.com"
                  className="text-[14px] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)] transition-colors link-quiet self-start md:self-end"
                >
                  hello@aloftaerial.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
