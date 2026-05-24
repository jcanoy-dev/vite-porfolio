export const SkillsCard = ({ title, skills }) => {
  const skillsArray = typeof skills === "string" ? skills.split(", ") : skills;

  return (
    <div className="p-4 rounded-lg bg-teal-50/50 border border-teal-100">
      <span className="block font-bold text-teal-900 text-xs uppercase mb-2 tracking-wider">
        {title}
      </span>
      <div className="flex flex-wrap gap-2 text-sm text-slate-600">
        {skillsArray?.map((skill, index) => (
          <span key={index} className="after:content-[',_'] last:after:content-none font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
