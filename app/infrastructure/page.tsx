import type { Metadata } from "next";
import { ContactCta } from "../../components/sections/contact-cta";
import { Badge, Card, Container, PageHeader, SectionHeading } from "../../components/ui/primitives";
import {
  infrastructureIntro,
  infrastructureStack,
  infrastructureSummary,
  shippingSteps,
} from "../../lib/data/infrastructure";
import type { InfrastructureComponent } from "../../types";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "The self-hosted development platform Shimul Mahmud built and runs: GitLab CI/CD, Docker, Nginx, MikroTik, Tailscale and Cloudflare Tunnel.",
};

const layers: InfrastructureComponent["layer"][] = ["Source & CI/CD", "Runtime", "Networking & access", "Planning"];

export default function InfrastructurePage() {
  return (
    <>
      <PageHeader
        eyebrow="Infrastructure"
        title="A self-hosted dev platform, built from scratch"
        description={`${infrastructureIntro} Most frontend-focused candidates haven't done this end to end. I have.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Pipeline" title="How a project ships" description={infrastructureSummary} />
          <ol className="grid gap-4 md:grid-cols-4">
            {shippingSteps.map((step, i) => (
              <li key={step.title}>
                <Card className="relative h-full p-5">
                  <span className="font-mono text-xs text-accent">STEP {String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                </Card>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Stack" title="What runs on the server" />
          <div className="grid gap-5 md:grid-cols-2">
            {layers.map((layer) => (
              <Card key={layer} className="bg-background p-6">
                <Badge tone="accent">{layer}</Badge>
                <ul className="mt-5 divide-y divide-border">
                  {infrastructureStack
                    .filter((c) => c.layer === layer)
                    .map((c) => (
                      <li key={c.name} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        <span className="font-medium">{c.name}</span>
                        <span className="text-sm text-muted sm:max-w-[60%] sm:text-right">{c.role}</span>
                      </li>
                    ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <div className="mt-24">
        <ContactCta />
      </div>
    </>
  );
}
