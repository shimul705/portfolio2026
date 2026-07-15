import { Navbar } from "../components/layout/navbar";
import { Hero } from "../components/sections/hero";
import { SkillsGrid } from "../components/sections/skills-grid";
import { FeaturedProjects } from "../components/sections/featured-projects";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <Hero />
        <SkillsGrid />
        <FeaturedProjects />
      </main>
    </div>
  );
}
