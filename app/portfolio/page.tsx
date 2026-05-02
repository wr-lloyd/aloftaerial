import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ArrowLink from "@/components/ArrowLink";
import Eyebrow from "@/components/Eyebrow";
import { images } from "@/lib/images";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Aloft Aerial",
  description:
    "Selected aerial photography, video, mapping and inspection work by Aloft Aerial across the Greater Raleigh-Durham area and the Carolinas. Open any project to read the brief.",
};

const p = (n: number) => projects[n];

function Caption({ project }: { project: (typeof projects)[number] }) {
  return (
    <figcaption className="mt-5 grid grid-cols-12 gap-4">
      <div className="col-span-1 font-mono text-[12px] text-[var(--color-ink)]/40">
        {project.num}
      </div>
      <div className="col-span-7 sm:col-span-6">
        <div className="text-[16px] tracking-tight text-[var(--color-ink)] md:text-[17px]">
          {project.title}
        </div>
        <div className="mt-0.5 text-[13px] text-[var(--color-ink)]/55">
          {project.client}
        </div>
      </div>
      <div className="col-span-4 sm:col-span-5 text-right">
        <div className="text-[13px] text-[var(--color-ink)]/70">
          {project.category}
        </div>
        <div className="mt-0.5 font-mono text-[11px] text-[var(--color-ink)]/45">
          {project.location} · {project.year}
        </div>
      </div>
    </figcaption>
  );
}

function Tile({
  project,
  aspect,
  className = "",
}: {
  project: (typeof projects)[number];
  aspect: string;
  className?: string;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group block ${className}`}
      aria-label={`Open ${project.title} case study`}
    >
      <div
        className={`relative ${aspect} overflow-hidden rounded-[2px] bg-[var(--color-fog)]`}
      >
        <Image
          src={images[project.image]}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <Caption project={project} />
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={<>Open the book.</>}
        intro="A small body of recent work. Some flown at first light, some at altitude, one we donated. Open any tile — the brief, the call we made, and what landed in the inbox."
      />

      {/* SPREAD 01 — feature */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-12 md:py-20">
          <figure>
            <Tile project={p(0)} aspect="aspect-[16/9]" />
          </figure>
        </div>
      </section>

      {/* SPREAD 02 — asymmetric pair */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-7">
              <Tile project={p(1)} aspect="aspect-[3/4]" />
            </div>
            <div className="col-span-12 md:col-span-5 md:mt-32">
              <Tile project={p(2)} aspect="aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* SPREAD 03 — centered cinematic */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-start-2 md:col-span-10">
              <Tile project={p(3)} aspect="aspect-[5/2]" />
            </div>
          </div>
        </div>
      </section>

      {/* SPREAD 04 — asymmetric pair */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-28">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-5 md:mt-40">
              <Tile project={p(4)} aspect="aspect-[4/5]" />
            </div>
            <div className="col-span-12 md:col-span-7">
              <Tile project={p(5)} aspect="aspect-[3/2]" />
            </div>
          </div>
        </div>
      </section>

      {/* SPREAD 05 — full bleed editorial */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-fog)]">
        <div className="container-page py-16 md:py-28">
          <Tile project={p(6)} aspect="aspect-[21/9]" />
          <p className="mx-auto mt-12 max-w-xl text-center text-[16px] leading-relaxed text-[var(--color-ink)]/65 md:text-[17px]">
            Conservation editorial &mdash; the only brief on this page that
            wasn&rsquo;t paid. We donated the flight time.
          </p>
        </div>
      </section>

      {/* SPREAD 06 — centered tall portrait */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-28">
          <div className="grid grid-cols-12 gap-6">
            <div className="hidden md:col-span-3 md:block">
              <Eyebrow>Final spread</Eyebrow>
              <p className="mt-6 text-[14px] leading-relaxed text-[var(--color-ink)]/55">
                Inspection imagery for a downtown façade re-cladding
                programme. Calibrated, geo-tagged stills handed off to the
                inspectors&rsquo; format.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Tile project={p(7)} aspect="aspect-[4/5]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Eyebrow>The reel</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[56px]">
                There&rsquo;s more — including work under NDA.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                The full reel and a longer case-study deck are sent on
                request. A short note about the brief is plenty to start.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <ArrowLink href="/contact">Request the full reel</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
