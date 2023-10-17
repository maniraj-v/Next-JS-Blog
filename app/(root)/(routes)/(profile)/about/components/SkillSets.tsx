import { skillSets } from "@/constants/skillsets";

function SkillSets() {
  return (
    <article className="p-12 pb-16 mb-8 border-b-2">
      <p className="text-accent text-4xl font-medium mb-8">{`I'm comfortable in...`}</p>
      <ul className="flex flex-wrap gap-6">
        {skillSets.map((skillSet) => {
          return (
            <li
              key={skillSet}
              className="py-4 px-12 border-2 text-xl font-medium rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            >
              {skillSet}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
export default SkillSets;
