import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ArrowLink({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-ink)] ${className}`}
    >
      <span className="link-quiet">{children}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path
          d="M2 7H12M12 7L8 3M12 7L8 11"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  );
}
