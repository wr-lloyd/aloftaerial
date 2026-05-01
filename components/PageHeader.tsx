import Eyebrow from "./Eyebrow";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="border-b border-[var(--color-line)]">
      <div className="container-page pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-2">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <div className="md:col-span-10">
            <h1 className="text-[42px] leading-[1.02] tracking-tight md:text-[80px]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-10 max-w-2xl text-[18px] leading-relaxed text-[var(--color-ink)]/65 md:text-[20px]">
                {intro}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
