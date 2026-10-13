import type { Metadata } from "next";
import { Download } from "../../components/ui/icons";
import { ButtonLink, Container, PageHeader } from "../../components/ui/primitives";
import { profile } from "../../lib/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Shimul Mahmud — full-stack developer.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader eyebrow="Resume" title="Resume" description="Preview below, or download the PDF.">
        <ButtonLink href={profile.resumeUrl} download>
          <Download size={16} /> Download PDF
        </ButtonLink>
      </PageHeader>
      <Container className="py-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <iframe src={profile.resumeUrl} className="h-[85vh] w-full" title={`${profile.name} resume`} />
        </div>
      </Container>
    </>
  );
}
