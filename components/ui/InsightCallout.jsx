export const InsightCallout = ({ title, children }) => {
  return (
    <section className="bg-teal-50/50 border-l-4 border-teal-200 p-6 my-10 flex flex-col gap-10">
      {title && (
        <h2 className="text-sm font-bold uppercase tracking-widest text-teal-900 mb-2">
          {title}
        </h2>
      )}
      <div className="text-base italic flex flex-col gap-10 text-slate-700">
        {children}
      </div>
    </section>
  );
};
