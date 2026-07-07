import { Navbar } from "../../components/layout/navbar";
import { ProjectCard } from "../../components/ui/project-card";
import { featuredProjects } from "../../lib/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-2 text-2xl font-medium">Projects</h1>
        <p className="mb-10 text-neutral-600 dark:text-neutral-400">
          A mix of client work, learning projects, and the infrastructure I
          built to run all of it.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
}
