// Single source of truth for industry verticals.
// Used by both the /industries index and per-industry /industries/[slug] pages.

import { images, type ImageKey } from "./images";

export type Industry = {
  slug: string;
  name: string;
  // One-line summary — used on the index card.
  short: string;
  // Headline used at the top of the detail page.
  headline: string;
  // 2–3 sentence positioning paragraph for the detail page hero.
  intro: string;
  // Cover image for the detail hero + index card.
  image: ImageKey;
  // Service slugs we typically run for this industry. Used to render link-out tiles.
  services: { id: string; title: string; note: string }[];
  // Sample deliverables for this vertical.
  deliverables: string[];
  // Plain-language list of who in the org typically uses each output. Builds confidence.
  audiences: string[];
  // Sample brief framings — the kinds of project we'd expect.
  examples: string[];
};

export const industries: Industry[] = [
  {
    slug: "property",
    name: "Property & real estate",
    short: "Listings, twilight, lifestyle. Calibrated for MLS, brochure, and social.",
    headline: "Aerial imaging for property and real estate.",
    intro:
      "Listing photography that earns the second click. Aerial stills, twilight sets, and short-form video for residential, multifamily, and commercial property — calibrated for MLS, brochure, agent portfolio, and social. Same-week scheduling across the Triangle.",
    image: "property",
    services: [
      { id: "photography", title: "Aerial photography", note: "Editorial-grade listing stills." },
      { id: "video", title: "Aerial video", note: "Cinematic 4K listing reels and lifestyle cuts." },
    ],
    deliverables: [
      "20–40 colour-graded stills (RAW + JPEG + WebP)",
      "Twilight & golden-hour add-on",
      "Square crops + vertical cuts for social",
      "Licensed for MLS, brochure, and agent portfolio use",
    ],
    audiences: [
      "Listing agents",
      "Brokerages and marketing teams",
      "Architects and design firms",
      "Property owners and developers",
    ],
    examples: [
      "Single-family flagship listing with twilight set",
      "Multifamily lease-up campaign",
      "Pre-construction commercial site capture",
      "Architect portfolio set for a recent renovation",
    ],
  },
  {
    slug: "construction-survey",
    name: "Construction & survey",
    short: "Progress capture, orthomosaic, volumetrics, and as-built data.",
    headline: "Construction progress and survey-grade aerial data.",
    intro:
      "Monthly progress capture, geo-referenced orthomosaics, 3D models, and volumetric reports. Built for owner reporting, marketing, and the project manager's dashboard — same capture, multiple deliverables, no double-handling.",
    image: "construction",
    services: [
      { id: "mapping", title: "Mapping & survey data", note: "RTK-anchored orthos, 3D mesh, DSM/DTM." },
      { id: "photography", title: "Aerial photography", note: "Marketing stills from the same flight." },
      { id: "video", title: "Aerial video", note: "Monthly cinematic B-roll for owner updates." },
    ],
    deliverables: [
      "Orthomosaic (GeoTIFF, sub-2cm/pixel)",
      "3D mesh + point cloud (LAS/LAZ)",
      "DSM / DTM elevation models",
      "Volumetric stockpile reports (CSV + PDF)",
      "Marketing stills + 4K B-roll from the same flight",
    ],
    audiences: [
      "General contractors and project managers",
      "Surveyors and civil engineers",
      "Owners and developers",
      "Marketing teams and investor relations",
    ],
    examples: [
      "Monthly mid-rise progress capture for owner reporting",
      "Pre-construction site survey + volumetric baseline",
      "As-built ortho for handover documentation",
      "Stockpile measurement for monthly inventory reconciliation",
    ],
  },
  {
    slug: "film-commercial",
    name: "Film & commercial",
    short: "Story-led aerial cinematography integrated with your DP and editor.",
    headline: "Aerial second unit for film and commercial production.",
    intro:
      "Cinematic 4K and 6K aerial work for ad agencies, production companies, and brands. We integrate with your principal unit — same colour pipeline, pre-matched camera profile, deliverables in a format your colourist can use without re-grading.",
    image: "film",
    services: [
      { id: "video", title: "Aerial video", note: "6K RAW masters, ProRes 4444 working files." },
    ],
    deliverables: [
      "6K RAW masters",
      "ProRes 4444 working files",
      "Story-led shot list pre-approved with the DP",
      "On-set support across full production days",
      "Optional edit & colour grade",
    ],
    audiences: [
      "Production companies",
      "Ad agencies",
      "Directors of photography",
      "In-house brand video teams",
    ],
    examples: [
      "National auto commercial — aerial second unit",
      "Brand film for a hospitality property",
      "Music video aerial sequences",
      "Documentary establishing shots",
    ],
  },
  {
    slug: "events-weddings",
    name: "Events & weddings",
    short: "Quiet, considered context — never intrusive. Family-first delivery.",
    headline: "Aerial context for events and weddings.",
    intro:
      "A short cinematic cut and a quiet set of stills. Captured before the ceremony, during cocktails, and after the formal photography wraps — never within earshot of the vows. Family-first delivery, never licensed for commercial use without permission.",
    image: "events",
    services: [
      { id: "video", title: "Aerial video", note: "Cinematic cut + vertical re-cut." },
      { id: "photography", title: "Aerial photography", note: "Editorial stills for the album." },
    ],
    deliverables: [
      "60–90 second cinematic edit (4K + vertical)",
      "20 colour-graded stills",
      "RAW originals archived",
      "Family-only delivery",
    ],
    audiences: [
      "Couples and families",
      "Wedding planners",
      "Venues and estates",
      "Corporate event organisers",
    ],
    examples: [
      "Vineyard wedding aerial set",
      "Outdoor estate ceremony with sunset coverage",
      "Corporate retreat or product launch",
      "Milestone family gathering",
    ],
  },
  {
    slug: "inspection",
    name: "Inspection imagery",
    short: "Roofs, solar, façades, and infrastructure — captured to spec.",
    headline: "Inspection-grade aerial imagery.",
    intro:
      "High-resolution visual data for roofs, solar arrays, façades, and infrastructure — calibrated, geo-tagged, and handed off in your inspectors' format. We capture; you assess.",
    image: "inspection",
    services: [
      { id: "inspection", title: "Inspection imagery", note: "Calibrated stills, defect-spot grid, RGB + thermal." },
      { id: "mapping", title: "Mapping & survey data", note: "Geo-referenced ortho when scale demands it." },
    ],
    deliverables: [
      "Calibrated, geo-tagged stills",
      "Defect-spot grid layout",
      "Thermal / RGB capture",
      "Hand-off in your inspector's format",
      "Dispute-grade documentation when needed",
    ],
    audiences: [
      "Inspectors and engineering firms",
      "Solar developers and O&M teams",
      "Roofing and façade contractors",
      "Infrastructure asset owners",
    ],
    examples: [
      "Utility-scale solar field baseline survey",
      "Pre-construction façade documentation",
      "Post-storm roof assessment for a managed portfolio",
      "Telecom tower or bridge visual inspection",
    ],
  },
  {
    slug: "brand-creator",
    name: "Brand & creator content",
    short: "Scroll-ready stills and short-form video for brands and creators.",
    headline: "Aerial content for brands and creators.",
    intro:
      "Scroll-ready stills and short-form aerial video that earn a second look. Vertical-first when you need it, story-led when it matters, fast turnaround when the campaign window is tight.",
    image: "city",
    services: [
      { id: "video", title: "Aerial video", note: "Vertical-first short-form, native ratios." },
      { id: "photography", title: "Aerial photography", note: "Editorial stills for campaigns + organic." },
    ],
    deliverables: [
      "Vertical short-form cuts (9:16, 4:5, 1:1)",
      "Editorial stills for paid + organic",
      "RAW + WebP exports",
      "Same-week turnaround on most briefs",
    ],
    audiences: [
      "DTC and lifestyle brands",
      "Agencies running paid social",
      "Independent creators",
      "Hospitality and travel marketing",
    ],
    examples: [
      "Hotel brand campaign — aerial set + short-form video",
      "Local restaurant or retail rooftop reveal",
      "Festival or pop-up event coverage",
      "Creator collaboration content series",
    ],
  },
];

export const industryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
