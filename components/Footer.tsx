import Image from "next/image";
import Link from "next/link";

const cols: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Capabilities",
    links: [
      { href: "/services#photography", label: "Aerial photography" },
      { href: "/services#video", label: "Aerial video" },
      { href: "/services#mapping", label: "Mapping & survey" },
      { href: "/services#inspection", label: "Inspection imagery" },
    ],
  },
  {
    title: "Industries",
    links: [
      { href: "/services#property", label: "Property & real estate" },
      { href: "/services#construction", label: "Construction" },
      { href: "/services#film", label: "Film & commercial" },
      { href: "/services#events", label: "Events & weddings" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="container-page py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Aloft Aerial — home" className="inline-block">
              <Image
                src="/full-logo.svg"
                alt="Aloft Aerial"
                width={3109}
                height={719}
                priority={false}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--color-ink)]/65">
              We capture the visuals and data that power your work.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex h-10 items-center rounded-full bg-[var(--color-ink)] px-5 text-[13px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors"
            >
              Start a project
            </Link>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-[12px] uppercase tracking-[0.14em] text-[var(--color-ink)]/45">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-[var(--color-ink)]/80 hover:text-[var(--color-ink)] transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[12px] text-[var(--color-ink)]/50">
            © {new Date().getFullYear()} Aloft Aerial. All rights reserved.
          </div>
          <div className="text-[12px] text-[var(--color-ink)]/50">
            FAA Part 107 certified · Fully insured
          </div>
        </div>
      </div>
    </footer>
  );
}
