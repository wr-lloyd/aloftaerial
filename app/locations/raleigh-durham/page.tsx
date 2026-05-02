import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Eyebrow from "@/components/Eyebrow";
import ArrowLink from "@/components/ArrowLink";

export const metadata: Metadata = {
  title:
    "Drone Photography & Aerial Video — Raleigh, Durham & the Triangle | Aloft Aerial",
  description:
    "FAA Part 107 certified aerial imaging studio serving Raleigh, Durham, Chapel Hill, Cary, Apex, Morrisville, Wake Forest, Holly Springs, Fuquay-Varina, Garner, Clayton, Hillsborough, Pittsboro and the wider Greater RDU area. Aerial photography, cinematic 4K/6K video, mapping, survey-grade orthomosaics, and inspection imagery for property, construction, film, events, and brand work.",
  alternates: { canonical: "/locations/raleigh-durham" },
  openGraph: {
    title: "Aerial Imaging across Raleigh-Durham — Aloft Aerial",
    description:
      "Aerial photography, video, mapping and inspection imagery for the Greater RDU area — Raleigh, Durham, Chapel Hill, Cary and surrounding municipalities.",
    type: "website",
  },
};

// Cities we actively cover, grouped by county for SEO-friendly structure.
const coverage: { county: string; cities: string[] }[] = [
  {
    county: "Wake County",
    cities: [
      "Raleigh",
      "Cary",
      "Apex",
      "Morrisville",
      "Wake Forest",
      "Garner",
      "Holly Springs",
      "Fuquay-Varina",
      "Knightdale",
      "Wendell",
      "Zebulon",
      "Rolesville",
    ],
  },
  {
    county: "Durham County",
    cities: ["Durham", "Research Triangle Park (RTP)", "Bahama"],
  },
  {
    county: "Orange County",
    cities: ["Chapel Hill", "Carrboro", "Hillsborough"],
  },
  {
    county: "Chatham County",
    cities: ["Pittsboro", "Siler City", "Chatham Park"],
  },
  {
    county: "Johnston County",
    cities: ["Clayton", "Smithfield", "Selma"],
  },
  {
    county: "Franklin & Granville",
    cities: ["Louisburg", "Youngsville", "Oxford", "Creedmoor"],
  },
];

const useCases: { title: string; body: string; href: string }[] = [
  {
    title: "Property & real estate",
    body: "Listing photography, twilight stills and lifestyle aerial video across Raleigh, Cary, Chapel Hill, Apex, Wake Forest and Holly Springs — calibrated for MLS, brochure and social.",
    href: "/services#photography",
  },
  {
    title: "Construction & survey",
    body: "Monthly progress capture, geo-referenced orthomosaics, 3D models and volumetric reports for projects across the Triangle, RTP, and surrounding counties.",
    href: "/services#mapping",
  },
  {
    title: "Film & commercial",
    body: "Cinematic 4K and 6K aerial work for ad agencies, production companies and brands shooting in Raleigh, Durham, Chapel Hill and beyond.",
    href: "/services#video",
  },
  {
    title: "Inspection imagery",
    body: "High-resolution roof, façade, solar and infrastructure imagery captured to your inspector's specification — across residential, commercial and utility-scale assets in the Carolinas.",
    href: "/services#inspection",
  },
  {
    title: "Events & weddings",
    body: "Quiet, considered aerial context for weddings, corporate events and private gatherings at venues throughout the Greater RDU area.",
    href: "/industries/events-weddings",
  },
  {
    title: "Brand & creator content",
    body: "Scroll-ready stills and short-form aerial video for brands, agencies and creators across North Carolina.",
    href: "/industries/brand-creator",
  },
];

const landmarks = [
  "Downtown Raleigh skyline",
  "North Carolina State Capitol",
  "Duke University & Duke Chapel",
  "UNC-Chapel Hill campus",
  "Research Triangle Park",
  "PNC Arena",
  "Lenovo Center",
  "Carter-Finley Stadium",
  "American Tobacco Campus",
  "Dorothea Dix Park",
  "Umstead State Park",
  "Falls Lake & Jordan Lake",
];

// JSON-LD LocalBusiness schema — feeds Google's local pack and rich results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aloft Aerial — Raleigh-Durham",
  description:
    "FAA Part 107 certified drone photography, aerial video, mapping, and inspection imagery for the Greater Raleigh-Durham area.",
  url: "https://aloftaerial.com/locations/raleigh-durham",
  telephone: "+1-209-641-1840",
  email: "hello@aloftaerial.com",
  areaServed: [
    { "@type": "City", name: "Raleigh", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Durham", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Chapel Hill", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Cary", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Apex", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Morrisville", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Wake Forest", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Holly Springs", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Garner", containedInPlace: "North Carolina" },
    { "@type": "City", name: "Hillsborough", containedInPlace: "North Carolina" },
  ],
  serviceType: [
    "Aerial photography",
    "Aerial videography",
    "Drone mapping",
    "Orthomosaic survey",
    "Drone inspection",
  ],
};

export default function RaleighDurhamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        eyebrow="Locations · Raleigh-Durham"
        title={
          <>
            Aerial imaging across the
            <br className="hidden md:block" /> Greater Raleigh-Durham area.
          </>
        }
        intro="Aloft Aerial is a North Carolina based drone imaging studio serving Raleigh, Durham, Chapel Hill, Cary, Apex, Morrisville, Wake Forest, Holly Springs and the wider Triangle. FAA Part 107 certified, fully insured, and ready to fly across Wake, Durham, Orange, Chatham, Johnston, Franklin and Granville counties — and nationwide for film, commercial and large-scale survey work."
      />

      {/* COVERAGE — county and city listing for SEO + local clarity */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Coverage</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                Cities we serve.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Same-week scheduling across the Triangle. Travel rates apply
                outside this footprint — happy to fly statewide and beyond.
              </p>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-[var(--color-line)] sm:grid-cols-2">
              {coverage.map((c) => (
                <div key={c.county} className="bg-white p-8">
                  <div className="text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)]/45">
                    {c.county}
                  </div>
                  <ul className="mt-4 space-y-1.5 text-[15px] text-[var(--color-ink)]/80">
                    {c.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES — services framed locally */}
      <section className="bg-[var(--color-fog)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>What we capture in the Triangle</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[52px]">
                Built for how RDU works.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Real estate, construction, film, inspection, events, and brand
                work — calibrated for the Triangle&rsquo;s mix of dense
                downtown, rapid suburban growth, and the RTP corridor.
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[2px] bg-[var(--color-line)] sm:grid-cols-2">
                {useCases.map((u) => (
                  <li key={u.title} className="bg-white p-8">
                    <div className="text-[18px] tracking-tight md:text-[20px]">
                      {u.title}
                    </div>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink)]/65">
                      {u.body}
                    </p>
                    <Link
                      href={u.href}
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

      {/* LOCAL CONTEXT — landmarks and what makes the Triangle distinctive */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Local context</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[44px]">
                The Triangle, from above.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/70">
                The Greater Raleigh-Durham metro is one of the fastest-growing
                regions in the country — anchored by Research Triangle Park,
                three world-class universities, and a steady pipeline of new
                construction across Wake, Durham and Orange counties. We know
                the airspace, the venues and the FAA controlled zones around
                RDU and ISO airports, and we plan flights accordingly.
              </p>
              <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/70">
                Recurring shoots in Downtown Raleigh, Brier Creek, North Hills,
                downtown Durham, the American Tobacco Campus, RTP, and across
                Cary, Apex and Holly Springs.
              </p>
            </div>
            <div className="md:col-span-7">
              <Eyebrow>Recently captured near</Eyebrow>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {landmarks.map((l) => (
                  <li
                    key={l}
                    className="flex items-baseline gap-3 text-[15px] text-[var(--color-ink)]/80"
                  >
                    <span className="mt-2 inline-block h-px w-3 shrink-0 bg-[var(--color-ink)]/40" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE — short FAA / airspace credibility section */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-20 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Credentials</Eyebrow>
              <h2 className="mt-6 text-[28px] leading-[1.1] tracking-tight md:text-[40px]">
                Flown by the book.
              </h2>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <div className="text-[16px] tracking-tight">FAA Part 107 certified</div>
                <p className="mt-2 text-[14px] text-[var(--color-ink)]/60">
                  Current remote pilot certificate. LAANC authorisations
                  filed for controlled airspace around RDU (KRDU) and other
                  local fields when required.
                </p>
              </div>
              <div>
                <div className="text-[16px] tracking-tight">Fully insured</div>
                <p className="mt-2 text-[14px] text-[var(--color-ink)]/60">
                  $5M public liability cover and $1M aircraft hull cover —
                  certificates of insurance available for venues and clients
                  on request.
                </p>
              </div>
              <div>
                <div className="text-[16px] tracking-tight">Local response</div>
                <p className="mt-2 text-[14px] text-[var(--color-ink)]/60">
                  Same-week scheduling across the Triangle. Most briefs
                  delivered within five working days.
                </p>
              </div>
              <div>
                <div className="text-[16px] tracking-tight">Statewide & beyond</div>
                <p className="mt-2 text-[14px] text-[var(--color-ink)]/60">
                  Travel rates apply outside Greater RDU. We regularly fly
                  statewide and nationally for film, commercial and
                  large-scale survey work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <Eyebrow>Brief us</Eyebrow>
              <h2 className="mt-6 text-[34px] leading-[1.05] tracking-tight md:text-[64px]">
                A clearer view of the Triangle.
              </h2>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/65">
                Tell us where you&rsquo;re shooting, what you need delivered,
                and roughly when. We&rsquo;ll come back with a flight plan,
                price and turnaround inside one working day.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center self-start rounded-full bg-[var(--color-ink)] px-7 text-[14px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors md:self-end"
                >
                  Start a project
                </Link>
                <a
                  href="tel:+12096411840"
                  className="text-[14px] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)] transition-colors link-quiet self-start md:self-end"
                >
                  209.641.1840
                </a>
                <a
                  href="mailto:hello@aloftaerial.com"
                  className="text-[14px] text-[var(--color-ink)]/65 hover:text-[var(--color-ink)] transition-colors link-quiet self-start md:self-end"
                >
                  hello@aloftaerial.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-[var(--color-line)] pt-8 text-[13px] text-[var(--color-ink)]/55">
            <ArrowLink href="/services">All services</ArrowLink>
            <span className="ml-6 inline-flex">
              <ArrowLink href="/portfolio">Selected work</ArrowLink>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
