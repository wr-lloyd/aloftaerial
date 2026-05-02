"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/locations/raleigh-durham", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-line)]">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Aloft Aerial home"
          className="inline-flex items-center"
        >
          <Image
            src="/full-logo.svg"
            alt="Aloft Aerial"
            width={3109}
            height={719}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[14px] text-[var(--color-ink)]/70 hover:text-[var(--color-ink)] transition-colors link-quiet"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex h-9 items-center rounded-full bg-[var(--color-ink)] px-5 text-[13px] font-medium text-[var(--color-paper)] hover:bg-[var(--color-ink)]/85 transition-colors"
        >
          Start a project
        </Link>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center"
        >
          <span className="sr-only">Menu</span>
          <div className="relative h-3 w-5">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-[var(--color-ink)] transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-[var(--color-ink)] transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-[var(--color-line)] bg-white transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0 border-transparent"
        }`}
      >
        <ul className="container-page py-6 space-y-5">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[18px] tracking-tight text-[var(--color-ink)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center rounded-full bg-[var(--color-ink)] px-5 text-[14px] font-medium text-[var(--color-paper)]"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
