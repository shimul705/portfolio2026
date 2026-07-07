import { notFound } from "next/navigation";
import { Navbar } from "../../../components/layout/navbar";
import { ProjectGallery } from "../../../components/sections/project-gallery";
import { featuredProjects } from "../../../lib/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProjectGallery
              images={project.images ?? []}
              title={project.title}
            />
          </div>

          <div>
            <h1 className="mb-2 text-2xl font-medium">{project.title}</h1>
            <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>
              {project.longDescription ?? project.description}
            </p>

            {project.techStack && (
              <div className="mb-6">
                <p
                  className="mb-2 text-xs uppercase tracking-wide"
                  style={{ color: "var(--muted)" }}
                >
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md px-2 py-1 text-xs"
                      style={{ background: "var(--card-bg)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="rounded-md px-4 py-2 text-center text-sm font-medium"
                  style={{
                    background: "var(--button-bg)",
                    color: "var(--button-fg)",
                  }}
                >
                  View live site
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  className="rounded-md border px-4 py-2 text-center text-sm font-medium"
                  style={{ borderColor: "var(--card-border)" }}
                >
                  View source
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
