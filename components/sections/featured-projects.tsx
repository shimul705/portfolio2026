import { ProjectCard } from "../ui/project-card";
import { featuredProjects } from "../../lib/data/projects";

export function FeaturedProjects() {
  return (
    <div className="mt-14 text-left">
      <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
        Featured work
      </p>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}
