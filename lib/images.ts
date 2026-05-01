// Centralised image set — swap any URL here to update the whole site.
// Currently sourced from Unsplash; replace with your own captures when ready.

const u = (id: string, w = 2000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Hero — calm, expansive aerial landscape
  hero: u("photo-1500382017468-9049fed747ef"),

  // Capability tiles — local Aloft captures live in /public
  photography: "/Aerial_photography.jpg",
  video: u("photo-1473968512647-3e447244af8f", 1400),
  mapping: "/mapping-survey.jpg",
  inspection: "/inspection.jpg",

  // Industry / work tiles
  property: u("photo-1518780664697-55e3ad937233", 1400),
  construction: u("photo-1486325212027-8081e485255e", 1400),
  film: u("photo-1465056836041-7f43ac27dcb5", 1400),
  events: u("photo-1519225421980-715cb0215aed", 1400),
  coastal: u("photo-1505761671935-60b3a7427bad", 1400),
  forest: u("photo-1448375240586-882707db888b", 1400),
  city: u("photo-1485081669829-bacb8c7bb1f3", 1400),
  solar: u("photo-1509391366360-2e959784a276", 1400),
};

export type ImageKey = keyof typeof images;
