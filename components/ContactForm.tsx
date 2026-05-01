"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactState } from "@/app/contact/actions";

const projectTypes = [
  "Property & real estate",
  "Construction & survey",
  "Inspection imagery",
  "Film & commercial",
  "Events & weddings",
  "Brand / creator content",
  "Something else",
];

const initial: ContactState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-ink)] px-7 text-[14px] font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-ink)]/85 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send brief"}
    </button>
  );
}

const fieldClass =
  "w-full border-0 border-b border-[var(--color-line)] bg-transparent py-3 text-[16px] tracking-tight text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/35 focus:border-[var(--color-ink)] focus:outline-none";

const labelClass =
  "text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)]/55";

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, initial);

  if (state.status === "ok") {
    return (
      <div className="rounded-[2px] border border-[var(--color-line)] bg-[var(--color-fog)] p-10">
        <div className="text-[12px] uppercase tracking-[0.16em] text-[var(--color-ink)]/55">
          Brief received
        </div>
        <h3 className="mt-4 text-[28px] tracking-tight md:text-[36px]">
          Thanks — we’ll be in touch.
        </h3>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[var(--color-ink)]/65">
          We normally reply within a working day. If it’s urgent, drop a note to{" "}
          <a className="underline" href="mailto:hello@aloftaerial.com">
            hello@aloftaerial.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-10">
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[10000px] h-0 w-0 opacity-0"
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <label className="block">
          <div className={labelClass}>Name</div>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <div className={labelClass}>Email</div>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>
      </div>

      <fieldset>
        <legend className={labelClass}>Project type</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {projectTypes.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value={t}
                defaultChecked={i === 0}
                className="peer sr-only"
              />
              <span className="inline-flex h-9 items-center rounded-full border border-[var(--color-line)] px-4 text-[13px] text-[var(--color-ink)]/70 transition-colors hover:border-[var(--color-ink)]/40 peer-checked:border-[var(--color-ink)] peer-checked:bg-[var(--color-ink)] peer-checked:text-[var(--color-paper)]">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <div className={labelClass}>Brief</div>
        <textarea
          name="brief"
          required
          rows={5}
          placeholder="What are you building, capturing, or selling? Where, and roughly when?"
          className={`${fieldClass} resize-none py-4`}
        />
      </label>

      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <SubmitButton />
        {state.status === "error" ? (
          <div className="text-[13px] text-red-700">{state.message}</div>
        ) : (
          <div className="text-[12px] text-[var(--color-ink)]/45">
            We reply within one working day.
          </div>
        )}
      </div>
    </form>
  );
}
