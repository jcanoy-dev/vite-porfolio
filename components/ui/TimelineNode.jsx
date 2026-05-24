export const TimelineNode = ({ title, date, subtitle, status = "historical", children }) => {
  const isCurrent = status === "current";
  
  return (
    <div className={`relative pl-6 border-l-2 border-teal-100 
      before:content-[''] before:absolute before:-left-[9px] before:top-0 before:w-4 before:h-4 before:rounded-full before:border-4 before:border-white
      ${isCurrent ? 'before:bg-teal-500' : 'before:bg-slate-300'}`}
    >
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="font-bold text-slate-900">{title}</h3>
        <span className={`text-xs font-bold px-2 py-1 rounded h-fit ${
          isCurrent ? 'text-teal-600 bg-teal-50' : 'text-slate-500 bg-slate-100'
        }`}>
          {date}
        </span>
      </div>
      <p className="text-slate-500 text-sm italic mb-3">{subtitle}</p>
      {children}
    </div>
  );
};
