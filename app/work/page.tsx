import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import ArrowLink from "@/components/ArrowLink";
import { images } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Aloft Aerial",
  description:
    "Selected aerial photography, video, mapping and inspection work by Aloft Aerial.",
};

type Project = {
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  image: keyof typeof images;
  span: "wide" | "tall" | "square";
};

const projects: Project[] = [
  {
    title: "Coastal residence",
    client: "Private commission",
    category: "Property · Stills + 4K",
    year: "2026",
    location: "Big Sur, CA",
    image: "coastal",
    span: "wide",
  },
  {
    title: "Mid-rise progress capture",
    client: "Northwood Construction",
    category: "Construction · Monthly ortho",
    year: "Ongoing",
    location: "Seattle, WA",
    image: "construction",
    span: "tall",
  },
  {
    title: "Estate listing — Maple Ridge",
    client: "Hines & Co. Realty",
    category: "Property · Twilight",
    year: "2026",
    location: "Bellevue, WA",
    image: "property",
    span: "tall",
  },
  {
    title: "Solar array survey",
    client: "Sunline Energy",
    category: "Inspection · 200MW ortho",
    year: "2026",
    location: "Yakima, WA",
    image: "solar",
    span: "wide",
  },
  {
    title: "Vineyard wedding",
    client: "Family commission",
    category: "Events · Cinematic",
    year: "2025",
    location: "Walla Walla, WA",
    image: "events",
    span: "square",
  },
  {
    title: "Switchback — auto commercial",
    client: "Studio Lyric",
    category: "Commercial · 6K RAW",
    year: "2025",
    location: "North Cascades, WA",
    image: "film",
    span: "square",
  },
  {
    title: "Old-growth corridor",
    client: "Cascade Land Trust",
    category: "Editorial · Conservation",
    year: "2025",
    location: "Olympic Peninsula, WA",
    image: "forest",
    span: "wide",
  },
  {
    title: "Downtown re-cladding",
    client: "Vector Façades",
    category: "Inspection · Façade survey",
    year: "2025",
    location: "Portland, OR",
    image: "city",
    span: "tall",
  },
];

const ratioForSpan = (span: Project["span"]) =>
  span === "wide" ? "aspect-[3/2]" : span === "tall" ? "aspect-[4/5]" : "aspect-square";

const colSpanForSpan = (span: Project["span"], idx: number) => {
  if (span === "wide") return "md:col-span-7";
  if (span === "tall") return "md:col-span-5";
  return idx % 2 === 0 ? "md:col-span-6" : "md:col-span-6";
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={<>Selected projects.</>}
        intro="A small slice of recent work across property, construction, inspection, film, and events. Reach out for the rest of the reel."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-28">
          <div className="grid grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-12">
            {projects.map((p, idx) => (
              <figure
                key={p.title}
                className={`${colSpanForSpan(p.span, idx)} group`}
              >
                <div
                  className={`relative ${ratioForSpan(p.span)} overflow-hidden rounded-[2px] bg-[var(--color-fog)]`}
                >
                  <Image
                    src={images[p.image]}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <figcaption className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-12">
                  <div className="md:col-span-6">
                    <div className="text-[18px] tracking-tight md:text-[20px]">
                      {p.title}
                    </div>
                    <div className="mt-1 text-[13px] text-[var(--color-ink)]/55">
                      {p.client}
                    </div>
                  </div>
                  <div className="md:col-span-6 md:text-right">
                    <div className="text-[13px] text-[var(--color-ink)]/70">
                      {p.category}
                    </div>
                    <div className="mt-1 font-mono text-[12px] text-[var(--color-ink)]/45">
                      {p.location} · {p.year}
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h2 className="text-[34px] leading-[1.05] tracking-tight md:text-[56px]">
                There&rsquo;s more — including work under NDA.
              </h2>
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
