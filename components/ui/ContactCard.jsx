import { ExternalLink } from "lucide-react";

export const ContactCard = ({ href, icon: Icon, label, value, isExternal = false }) => {
  const content = (
    <>
      <div className="flex items-center gap-4">
        <div className="text-teal-600 flex-shrink-0">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</p>
          <p className="text-lg font-medium text-slate-700 break-all">{value}</p>
        </div>
      </div>
      <ExternalLink size={16} className="text-slate-300 group-hover:text-teal-500 transition-colors flex-shrink-0" />
    </>
  );

  const baseClasses = "group flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-150 text-left";

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={baseClasses}>
      {content}
    </a>
  );
};
