type Props = { children: React.ReactNode; className?: string };

export default function Eyebrow({ children, className = "" }: Props) {
  return (
    <div
      className={`text-[12px] uppercase tracking-[0.18em] text-[var(--color-ink)]/55 ${className}`}
    >
      {children}
    </div>
  );
}
