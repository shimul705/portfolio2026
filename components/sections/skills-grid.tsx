import { SkillCard } from "../ui/skill-card";
import { skillCategories } from "../../lib/data/skills";

export function SkillsGrid() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {skillCategories.map((skill) => (
        <SkillCard key={skill.title} {...skill} />
      ))}
    </div>
  );
}
