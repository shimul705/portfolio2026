import { Navbar } from "../../components/layout/navbar";

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-medium">Resume</h1>
          <a
            href="/portfolio.pdf"
            download
            className="rounded-md px-4 py-2 text-sm font-medium"
            style={{ background: "var(--button-bg)", color: "var(--button-fg)" }}
          >
            Download PDF
          </a>
        </div>
        <div
          className="overflow-hidden rounded-lg border"
          style={{ borderColor: "var(--card-border)" }}
        >
          <iframe
            src="/portfolio.pdf"
            className="h-[80vh] w-full"
            title="Resume preview"
          />
        </div>
      </main>
    </div>
  );
}
