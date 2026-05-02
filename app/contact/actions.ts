"use server";

import { Resend } from "resend";

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

// Vercel env vars (set in Project Settings → Environment Variables):
//   RESEND_API_KEY  — required for live email delivery
//   CONTACT_TO      — destination address (defaults to hello@aloftaerial.com)
//   CONTACT_FROM    — verified-domain From address (defaults to onboarding@resend.dev
//                     until aloftaerial.com is verified in the Resend dashboard)
const TO = process.env.CONTACT_TO ?? "hello@aloftaerial.com";
const FROM = process.env.CONTACT_FROM ?? "Aloft Aerial <onboarding@resend.dev>";

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const brief = String(formData.get("brief") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  // Honeypot — silent success on bot fill.
  if (company) return { status: "ok" };

  if (!name || !email || !brief) {
    return { status: "error", message: "Please fill in name, email, and brief." };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { status: "error", message: "That email address doesn’t look right." };
  }

  const subject = `New brief from ${name}${projectType ? ` — ${projectType}` : ""}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    projectType ? `Project type: ${projectType}` : null,
    "",
    "Brief:",
    brief,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#0A0A0A;line-height:1.5;">
      <p style="margin:0 0 16px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#9CA3AF;">New brief — Aloft Aerial</p>
      <h2 style="margin:0 0 24px;font-size:22px;letter-spacing:-0.01em;">From ${escapeHtml(name)}</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 16px 6px 0;color:#9CA3AF;">Email</td><td style="padding:6px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${projectType ? `<tr><td style="padding:6px 16px 6px 0;color:#9CA3AF;">Project type</td><td style="padding:6px 0;">${escapeHtml(projectType)}</td></tr>` : ""}
      </table>
      <h3 style="margin:28px 0 8px;font-size:14px;text-transform:uppercase;letter-spacing:0.14em;color:#9CA3AF;font-weight:500;">Brief</h3>
      <p style="margin:0;white-space:pre-wrap;font-size:15px;">${escapeHtml(brief)}</p>
    </div>
  `;

  // No API key — fall back to server log (local dev or before env var is set).
  if (!process.env.RESEND_API_KEY) {
    console.log("[contact] (no RESEND_API_KEY — logging instead of sending)\n" + text);
    return { status: "ok" };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject,
      text,
      html,
    });
    if (error) {
      console.error("[contact] resend error", error);
      return {
        status: "error",
        message: "Couldn’t send right now — please email hello@aloftaerial.com.",
      };
    }
    return { status: "ok" };
  } catch (err) {
    console.error("[contact] unexpected error", err);
    return {
      status: "error",
      message: "Something went wrong — please email hello@aloftaerial.com.",
    };
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
