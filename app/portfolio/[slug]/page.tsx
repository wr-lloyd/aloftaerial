import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ArrowLink from "@/components/ArrowLink";
import Eyebrow from "@/components/Eyebrow";
import { images } from "@/lib/images";
import { projects, projectBySlug, nextProject } from "@/lib/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project — Aloft Aerial" };
  return {
    title: `${project.title} — ${project.location} | Aloft Aerial`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Aloft Aerial`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();
  const next = nextProject(slug);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <div className="font-mono text-[12px] text-[var(--color-ink)]/55">
                {project.num}
              </div>
            </div>
            <div className="md:col-span-10">
              <Eyebrow>{project.category}</Eyebrow>
              <h1 className="mt-6 text-[42px] leading-[1.02] tracking-tight md:text-[80px]">
                {project.title}
              </h1>
              <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2 text-[14px] text-[var(--color-ink)]/70">
                <span>
                  <span className="text-[var(--color-ink)]/45">Client </span>
                  {project.client}
                </span>
                <span>
                  <span className="text-[var(--color-ink)]/45">Location </span>
                  {project.location}
                </span>
                <span>
                  <span className="text-[var(--color-ink)]/45">Year </span>
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="container-page pb-12 md:pb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
            <Image
              src={images[project.image]}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <Eyebrow>Summary</Eyebrow>
            </div>
            <div className="md:col-span-10">
              <p className="text-[22px] leading-[1.35] tracking-tight text-[var(--color-ink)] md:text-[32px] md:leading-[1.25]">
                {project.summary}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY 1 — first 2 images, side by side, asymmetric */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 md:py-24">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
                <Image
                  src={images[project.gallery[0]]}
                  alt={`${project.title} — gallery 1`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:mt-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
                <Image
                  src={images[project.gallery[1] ?? project.gallery[0]]}
                  alt={`${project.title} — gallery 2`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY — brief / approach / outcome */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Brief</Eyebrow>
              <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink)]/75">
                {project.brief}
              </p>
            </div>
            <div className="md:col-span-4">
              <Eyebrow>Approach</Eyebrow>
              <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink)]/75">
                {project.approach}
              </p>
            </div>
            <div className="md:col-span-4">
              <Eyebrow>Outcome</Eyebrow>
              <p className="mt-4 text-[16px] leading-relaxed text-[var(--color-ink)]/75">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY 2 — full bleed editorial */}
      {project.gallery[2] ? (
        <section className="border-b border-[var(--color-line)] bg-[var(--color-fog)]">
          <div className="container-page py-16 md:py-24">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
              <Image
                src={images[project.gallery[2]]}
                alt={`${project.title} — gallery 3`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      ) : null}

      {/* DELIVERABLES */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Delivered</Eyebrow>
              <h2 className="mt-6 text-[28px] leading-[1.1] tracking-tight md:text-[40px]">
                What landed in the inbox.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-baseline gap-4 py-4 text-[15px] text-[var(--color-ink)]/80 md:text-[16px]"
                  >
                    <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--color-ink)]/40" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY 3 — final image if present */}
      {project.gallery[3] ? (
        <section className="border-b border-[var(--color-line)]">
          <div className="container-page py-16 md:py-24">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-start-3 md:col-span-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
                  <Image
                    src={images[project.gallery[3]]}
                    alt={`${project.title} — gallery 4`}
                    fill
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* NEXT PROJECT + CTA */}
      <section>
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <Eyebrow>Next project</Eyebrow>
              <Link
                href={`/portfolio/${next.slug}`}
                className="group mt-6 block"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-[var(--color-fog)]">
                  <Image
                    src={images[next.image]}
                    alt={next.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <div className="text-[18px] tracking-tight md:text-[20px]">
                      {next.title}
                    </div>
                    <div className="mt-1 text-[13px] text-[var(--color-ink)]/55">
                      {next.location}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-ink)]">
                    <span className="link-quiet">Open</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7H12M12 7L8 3M12 7L8 11"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="md:col-span-5 md:col-start-8 md:flex md:flex-col md:justify-end">
              <Eyebrow>Have a similar brief?</Eyebrow>
              <h2 className="mt-6 text-[28px] leading-[1.1] tracking-tight md:text-[40px]">
                Let&rsquo;s talk.
              </h2>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-fit items-center rounded-full bg-[var(--color-ink)] px-7 text-[14px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors"
                >
                  Start a project
                </Link>
                <a
                  href="tel:+12096411840"
                  className="text-[14px] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)] transition-colors link-quiet w-fit"
                >
                  209.641.1840
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[var(--color-line)] pt-8">
            <ArrowLink href="/portfolio">Back to portfolio</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
