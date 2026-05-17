export const SkillsCard = ({ title, skills }) => (
  <div className="p-3 rounded-lg bg-teal-50 border border-teal-100">
    <span className="block font-bold text-teal-900 text-xs uppercase mb-1">{title}</span>
    <span className="text-sm text-slate-600">{skills}</span>
  </div>
);
