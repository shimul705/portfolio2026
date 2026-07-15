import { Navbar } from "../../components/layout/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-md px-6 py-16">
        <h1 className="mb-2 text-2xl font-medium">Contact</h1>
        <p className="mb-8 text-sm" style={{ color: "var(--muted)" }}>
          Feel free to reach out directly.
        </p>
        <div className="space-y-3">
          <a
            href="mailto:your.email@example.com"
            className="block rounded-md border px-4 py-3 text-sm"
            style={{ borderColor: "var(--card-border)" }}
          >
            your.email@example.com
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            className="block rounded-md border px-4 py-3 text-sm"
            style={{ borderColor: "var(--card-border)" }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shimul705"
            className="block rounded-md border px-4 py-3 text-sm"
            style={{ borderColor: "var(--card-border)" }}
          >
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
