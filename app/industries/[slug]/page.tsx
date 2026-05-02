import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import ArrowLink from "@/components/ArrowLink";
import { images } from "@/lib/images";
import { industries, industryBySlug } from "@/lib/industries";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const ind = industryBySlug(slug);
  if (!ind) return { title: "Industry — Aloft Aerial" };
  return {
    title: `${ind.name} — Aerial Imaging | Aloft Aerial`,
    description: ind.intro,
    openGraph: {
      title: `${ind.name} — Aloft Aerial`,
      description: ind.intro,
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const ind = industryBySlug(slug);
  if (!ind) notFound();

  const others = industries.filter((i) => i.slug !== slug);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <Eyebrow>Industry</Eyebrow>
            </div>
            <div className="md:col-span-10">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink)]/55">
                {ind.name}
              </div>
              <h1 className="mt-6 text-[42px] leading-[1.02] tracking-tight md:text-[80px]">
                {ind.headline}
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-[var(--color-ink)]/70 md:text-[20px]">
                {ind.intro}
              </p>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className="container-page pb-12 md:pb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-[var(--color-fog)] md:aspect-[21/9]">
            <Image
              src={images[ind.image]}
              alt={ind.name}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES TYPICALLY USED */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Services we run</Eyebrow>
              <h2 className="mt-6 text-[28px] leading-[1.1] tracking-tight md:text-[40px]">
                The capability mix.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink)]/65">
                Most {ind.name.toLowerCase()} briefs use one or two of these
                — sometimes all of them. Open the service for the long-form.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-[var(--color-line)] sm:grid-cols-2">
                {ind.services.map((s) => (
                  <li key={s.id} className="bg-white p-8">
                    <div className="text-[18px] tracking-tight md:text-[20px]">
                      {s.title}
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
                      {s.note}
                    </p>
                    <Link
                      href={`/services#${s.id}`}
                      className="mt-4 inline-block text-[13px] font-medium text-[var(--color-ink)] link-quiet"
                    >
                      Service detail →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES + AUDIENCES */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-fog)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow>Typical deliverables</Eyebrow>
              <h2 className="mt-6 text-[28px] leading-[1.1] tracking-tight md:text-[40px]">
                What lands in your inbox.
              </h2>
              <ul className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {ind.deliverables.map((d) => (
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
            <div className="md:col-span-4 md:col-start-9">
              <Eyebrow>Who uses it</Eyebrow>
              <ul className="mt-8 space-y-3 text-[15px] text-[var(--color-ink)]/75">
                {ind.audiences.map((a) => (
                  <li key={a} className="border-b border-[var(--color-line)] pb-3">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE BRIEFS */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Example briefs</Eyebrow>
              <h2 className="mt-6 text-[28px] leading-[1.1] tracking-tight md:text-[40px]">
                The kind of project we&rsquo;d expect.
              </h2>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-4">
                {ind.examples.map((e, idx) => (
                  <li
                    key={e}
                    className="flex items-baseline gap-6 border-b border-[var(--color-line)] pb-4"
                  >
                    <span className="font-mono text-[12px] text-[var(--color-ink)]/40">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] text-[var(--color-ink)]/85 md:text-[17px]">
                      {e}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + OTHER SECTORS */}
      <section>
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Eyebrow>Brief us</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[56px]">
                A clearer view for {ind.name.toLowerCase()}.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Same-week scheduling across the Triangle. Statewide and
                nationwide for film, commercial, and large-scale survey
                work.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right">
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center self-start rounded-full bg-[var(--color-ink)] px-7 text-[14px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors md:self-end"
                >
                  Start a project
                </Link>
                <a
                  href="tel:+12096411840"
                  className="text-[14px] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)] transition-colors link-quiet self-start md:self-end"
                >
                  209.641.1840
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[var(--color-line)] pt-10">
            <Eyebrow>Other sectors</Eyebrow>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/industries/${o.slug}`}
                    className="group inline-flex items-baseline gap-2 py-2 text-[15px] text-[var(--color-ink)]/75 hover:text-[var(--color-ink)] transition-colors"
                  >
                    <span className="link-quiet">{o.name}</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
