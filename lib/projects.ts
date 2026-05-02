// Single source of truth for portfolio projects.
// Used by both the /portfolio index and individual /portfolio/[slug] case studies.

import { images, type ImageKey } from "./images";

export type Project = {
  slug: string;
  num: string;
  title: string;
  client: string;
  category: string;
  year: string;
  location: string;
  // Cover image used on the index tile.
  image: ImageKey;
  // Short marketing summary shown under the hero on the case study.
  summary: string;
  // 3–6 image keys that make up the case study gallery (cover image included or not — your call).
  gallery: ImageKey[];
  // Three short editorial blocks. Plain prose, brand voice.
  brief: string;
  approach: string;
  outcome: string;
  // Bullet list of what was delivered.
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "outer-banks-residence",
    num: "01",
    title: "Coastal residence",
    client: "Private commission",
    category: "Property · Stills + 4K",
    year: "2026",
    location: "Outer Banks, NC",
    image: "coastal",
    summary:
      "A coastal home on the Outer Banks needed a refreshed visual library — for marketing, for family, and for the architect's portfolio.",
    gallery: ["coastal", "property", "forest", "events"],
    brief:
      "Three uses, one shoot. Refreshed marketing stills for the next listing cycle, a quiet family record of the property at its best, and a clean set of architectural shots for the firm that designed the renovation.",
    approach:
      "We flew across two visits — golden hour the first evening for the warm marketing tones, then a calm overcast morning the next day for the editorial architecture set. Every frame was shot wide for crop flexibility.",
    outcome:
      "Forty colour-graded stills delivered in four formats (RAW, full-size JPEG, web-optimised WebP, and square crops for social), plus a short cinematic 4K cut for the listing video.",
    deliverables: [
      "40 colour-graded stills",
      "RAW + JPEG + WebP + 1:1 social crops",
      "60-second 4K cinematic edit",
      "Licensed for marketing, editorial, and family use",
    ],
  },
  {
    slug: "downtown-raleigh-mid-rise",
    num: "02",
    title: "Mid-rise progress capture",
    client: "Northwood Construction",
    category: "Construction · Monthly ortho",
    year: "Ongoing",
    location: "Downtown Raleigh, NC",
    image: "construction",
    summary:
      "Monthly aerial captures of a mid-rise build downtown — feeding marketing, owner reporting, and the construction PM's progress dashboard.",
    gallery: ["construction", "city", "mapping", "solar"],
    brief:
      "Northwood needed a single capture that served three audiences: investor-facing marketing imagery, monthly progress documentation for the owner, and survey-grade orthomosaics for the project team.",
    approach:
      "We set up a repeatable monthly flight plan — same orbit, same camera angles, same RTK-anchored ortho grid. Consistent inputs make for consistent outputs.",
    outcome:
      "Twelve months in and counting. Owner reports take two days to compile instead of two weeks; marketing has a fresh hero image every month.",
    deliverables: [
      "Monthly orbit + nadir capture",
      "Geo-referenced orthomosaic (GeoTIFF)",
      "Marketing stills + 4K B-roll",
      "Owner report PDF (compiled with the PM team)",
    ],
  },
  {
    slug: "maple-ridge-estate",
    num: "03",
    title: "Estate listing — Maple Ridge",
    client: "Hines & Co. Realty",
    category: "Property · Twilight",
    year: "2026",
    location: "Chapel Hill, NC",
    image: "property",
    summary:
      "A twilight aerial set for a flagship estate listing — a brief that called for restraint, not drama.",
    gallery: ["property", "coastal", "forest", "city"],
    brief:
      "The agent wanted twilight, but not the over-saturated HDR look that's become the genre default. The brief: editorial restraint, magazine cover energy.",
    approach:
      "We arrived ninety minutes before sunset and stayed thirty minutes after. The hero shot was actually captured in the blue-hour window, with house lights at low intensity and a long exposure to settle the sky.",
    outcome:
      "Twelve hero stills. The listing went under contract in eleven days at full ask.",
    deliverables: [
      "12 colour-graded twilight stills",
      "RAW + JPEG + brochure-ready CMYK exports",
      "Two square crops for social",
      "Licensed for MLS + brochure + agent portfolio",
    ],
  },
  {
    slug: "wilson-county-solar",
    num: "04",
    title: "Solar array survey",
    client: "Sunline Energy",
    category: "Inspection · 200MW ortho",
    year: "2026",
    location: "Wilson County, NC",
    image: "solar",
    summary:
      "A 200-megawatt utility-scale solar field, flown end-to-end for asset documentation and a defect-tracking baseline.",
    gallery: ["solar", "mapping", "construction", "forest"],
    brief:
      "Sunline needed a single, clean ortho of every panel block on the site — geo-tagged, high-resolution, suitable for handing to any third-party inspector going forward.",
    approach:
      "RTK-anchored grid flight across two consecutive days. Same altitude, same overlap, same time-of-day window for consistent shadow conditions.",
    outcome:
      "Single seamless orthomosaic at 1.2cm/pixel ground resolution. The first inspection cycle ran on top of it within a week of delivery.",
    deliverables: [
      "Orthomosaic GeoTIFF (1.2cm/px)",
      "Defect-spot grid layout (CSV + KML)",
      "RGB + thermal capture per block",
      "Hand-off in Sunline's inspector format",
    ],
  },
  {
    slug: "yadkin-valley-wedding",
    num: "05",
    title: "Vineyard wedding",
    client: "Family commission",
    category: "Events · Cinematic",
    year: "2025",
    location: "Yadkin Valley, NC",
    image: "events",
    summary:
      "A late-summer wedding at a Yadkin Valley vineyard. Quiet, considered aerial context — never intrusive.",
    gallery: ["events", "forest", "property", "coastal"],
    brief:
      "The family wanted aerial context — the vineyard at dusk, guests gathered, the larger sense of place — without a drone humming over the ceremony.",
    approach:
      "We flew before the ceremony, during cocktails, and after the formal photography wrapped. Never within earshot of the vows.",
    outcome:
      "A short cinematic cut and a quiet set of stills. The family used both for the album and a private memorial reel a year later.",
    deliverables: [
      "90-second cinematic edit (4K + vertical cut)",
      "20 colour-graded stills",
      "RAW originals archived",
      "Family-only delivery — never licensed for commercial use",
    ],
  },
  {
    slug: "blue-ridge-switchback",
    num: "06",
    title: "Switchback — auto commercial",
    client: "Studio Lyric",
    category: "Commercial · 6K RAW",
    year: "2025",
    location: "Blue Ridge Parkway, NC",
    image: "film",
    summary:
      "Aerial second unit for a national auto commercial — three days on the Blue Ridge Parkway, working alongside the principal DP and editor.",
    gallery: ["film", "forest", "coastal", "property"],
    brief:
      "Studio Lyric needed aerial coverage that integrated cleanly with the ground unit's footage — same colour pipeline, same motion grammar, deliverable in a format their colourist could use without re-grading.",
    approach:
      "Three days on the Parkway, one weather hold, no ego. Camera profile pre-matched to the principal unit. Every shot pre-storyboarded with the DP.",
    outcome:
      "All aerial coverage made the final cut. The colourist sent a thank-you email — possibly a first.",
    deliverables: [
      "6K RAW masters",
      "ProRes 4444 working files",
      "DP-approved camera profile",
      "On-set support across three days",
    ],
  },
  {
    slug: "pisgah-old-growth",
    num: "07",
    title: "Old-growth corridor",
    client: "Tar River Land Trust",
    category: "Editorial · Conservation",
    year: "2025",
    location: "Pisgah National Forest, NC",
    image: "forest",
    summary:
      "Editorial aerial documentation of an old-growth corridor under conservation review. Donated flight time.",
    gallery: ["forest", "coastal", "events", "film"],
    brief:
      "The Tar River Land Trust needed visual evidence that a contested parcel met old-growth criteria — for use in a conservation easement application.",
    approach:
      "Two visits, one in late spring leaf-on and one in late autumn leaf-off, to show canopy structure across seasons. Standardised altitudes for comparability.",
    outcome:
      "The application was approved. The corridor is now under permanent protection.",
    deliverables: [
      "30 stills across two seasons",
      "Comparative leaf-on / leaf-off pairs",
      "Geo-tagged for parcel reference",
      "Donated work — no fee",
    ],
  },
  {
    slug: "charlotte-recladding",
    num: "08",
    title: "Downtown re-cladding",
    client: "Vector Façades",
    category: "Inspection · Façade survey",
    year: "2025",
    location: "Charlotte, NC",
    image: "city",
    summary:
      "Pre-construction façade survey for a downtown Charlotte re-cladding programme — every panel documented to the inspectors' format.",
    gallery: ["city", "construction", "mapping", "property"],
    brief:
      "Vector needed a clean baseline of the existing façade — every panel, every joint, every visible defect — before the re-cladding work started, so any later disputes had a documented starting point.",
    approach:
      "Calibrated, geo-tagged stills captured in a methodical grid pattern around all four elevations. Consistent stand-off distance for true comparability across the dataset.",
    outcome:
      "A complete pre-work visual record. Two later defect claims were resolved by reference to our baseline rather than going to dispute.",
    deliverables: [
      "Calibrated, geo-tagged stills (full four-elevation coverage)",
      "Defect-spot grid layout",
      "Hand-off in Vector's inspector format",
      "Dispute-grade documentation",
    ],
  },
];

export const projectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

// Returns the next project in display order — used for "next case study" links.
export const nextProject = (slug: string): Project => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
