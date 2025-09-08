import { SkillDataProvider } from "@/providers/skill-data-provider";
import { SkillText } from "@/components/ui/SkillText";

import {
  backend_skills,
  frontend_skills,
  skills,
} from "@/lib/constants";

const skillCategories = [
  { title: "Core Skills", data: skills },
  { title: "Frontend", data: frontend_skills },
  { title: "Backend", data: backend_skills },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-16 py-20 px-4 sm:px-6 lg:px-10"
    >
      {/* Heading */}
      <SkillText />

      {/* Skills Grid by Category */}
      <div className="flex flex-col w-full max-w-6xl gap-12">
        {skillCategories.map(({ title, data }) => (
          <div key={title} className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-center text-white md:text-2xl">
              {title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {data.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={i}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
