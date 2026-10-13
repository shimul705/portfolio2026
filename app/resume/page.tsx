import type { Metadata } from "next";
import { Download } from "../../components/ui/icons";
import { ButtonLink, Container, PageHeader } from "../../components/ui/primitives";
import { profile } from "../../lib/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Shimul Mahmud — Software Engineer. Download as PDF or Word.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader eyebrow="Resume" title="Resume" description="Preview below, or download it as PDF or Word.">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={profile.resumeUrl} download>
            <Download size={16} /> Download PDF
          </ButtonLink>
          <ButtonLink href={profile.resumeDocxUrl} variant="secondary" download>
            <Download size={16} /> Download Word (.docx)
          </ButtonLink>
        </div>
      </PageHeader>
      <Container className="py-12">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
          <iframe src={profile.resumeUrl} className="h-[85vh] w-full" title={`${profile.name} resume`} />
        </div>
      </Container>
    </>
  );
}
