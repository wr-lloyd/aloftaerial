"use server";

export type ContactState =
  | { status: "idle" }
  | { status: "ok" }
  | { status: "error"; message: string };

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

  // Hand-off point — wire up to email/CRM/webhook here.
  // For now we just log on the server so the deploy works out of the box.
  console.log("[contact]", { name, email, projectType, brief });

  return { status: "ok" };
}
