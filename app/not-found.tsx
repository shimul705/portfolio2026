import { ArrowLeft } from "../components/ui/icons";
import { ButtonLink, Container } from "../components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="mt-3 max-w-md text-muted">The link may be broken, or the page may have moved.</p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">
          <ArrowLeft size={16} /> Back home
        </ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          See projects
        </ButtonLink>
      </div>
    </Container>
  );
}
