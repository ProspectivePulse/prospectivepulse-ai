import Link from "next/link";
import { Shell } from "@/components/shell";

export default function ContactPage() {
  return (
    <Shell>
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Contact
          </h1>
          <p className="mt-3 text-sm text-neutral-600">
            If you’re exploring a role, a project, or just want to talk through an idea in
            ML, RL, or data engineering, feel free to reach out.
          </p>
          <div className="mt-6 space-y-2 text-sm text-neutral-700">
            <p>
              Email:{" "}
              <Link href="mailto:your.email@example.com" className="link">
                your.email@example.com
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                className="link"
              >
                View profile
              </Link>
            </p>
            <p>
              Calendar:{" "}
              <Link
                href="https://calendly.com"
                target="_blank"
                className="link"
              >
                Book a quick call
              </Link>
            </p>
          </div>
        </div>
        <div className="card p-6 text-sm text-neutral-700">
          <h2 className="text-sm font-medium text-neutral-900">Contact form</h2>
          <p className="mt-2 text-xs text-neutral-600">
            This is a static form template. You can wire it to a backend (e.g. Formspree,
            Netlify Forms) later.
          </p>
          <form className="mt-4 space-y-3">
            <div className="space-y-1">
              <label className="text-xs text-neutral-600">Name</label>
              <input
                type="text"
                className="w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800"
                placeholder="Your name"
                disabled
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-neutral-600">Email</label>
              <input
                type="email"
                className="w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800"
                placeholder="you@example.com"
                disabled
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-neutral-600">Message</label>
              <textarea
                className="w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:border-neutral-800"
                rows={4}
                placeholder="How can I help?"
                disabled
              />
            </div>
            <button
              type="button"
              disabled
              className="inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs text-white opacity-60"
            >
              Send (wire up later)
            </button>
          </form>
        </div>
      </section>
    </Shell>
  );
}
