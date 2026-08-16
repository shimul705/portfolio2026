import type { CourseSkillGroup } from "../../types";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

export const skillOrigins: CourseSkillGroup[] = [
  {
    courseName: "Programming Hero",
    groupLabel: "Frontend",
     clipId: "programming-hero-frontend",
    skills: [
      { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
      { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` },
      { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
      { name: "React", icon: `${DEVICON}/react/react-original.svg` },
      { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
    ],
  },
  {
    courseName: "Next Level Web Development",
    groupLabel: "Backend",
    skills: [
      { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${DEVICON}/express/express-original.svg` },
      { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
      { name: "Mongoose" },
      { name: "BetterAuth" },
    ],
  },
];
