import { Mail, Globe } from "lucide-react";

const Home = () => {
  return (
    <div className=" bg-teal-50/30 p-6 md:p-12 text-slate-800 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-teal-100">
        
        {/* Header Section */}
        <header className="bg-slate-900 p-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight uppercase">Jeffrey Canoy</h1>
          <p className="text-teal-400 font-medium text-lg mt-1 tracking-wide">Full Stack Software Engineer</p>
          
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-300">
            <a href="mailto:jeffrey.canoy92@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Mail size={16} /> jeffrey.canoy92@gmail.com
            </a> |
            <a href="https://www.linkedin.com/in/jeffrey-canoy-641987208" target="_blank" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Globe size={16} /> LinkedIn Profile
            </a>
          </div>
        </header>

        <div className="p-8 space-y-10">
          
          {/* Summary */}
          <section>
            <h2 className="flex items-center gap-2 text-teal-800 font-bold uppercase tracking-widest text-sm mb-3">
              <span className="w-8 h-px bg-teal-200"></span> Professional Summary
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Accomplished Full Stack Software Engineer with over 12 years of experience in building scalable web applications. 
              Proven track record in the end-to-end development lifecycle, from internal HR tools to large-scale fashion e-commerce platforms.
            </p>
          </section>

          {/* Skills Grid */}
          <section>
            <h2 className="flex items-center gap-2 text-teal-800 font-bold uppercase tracking-widest text-sm mb-4">
              <span className="w-8 h-px bg-teal-200"></span> Core Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Frontend", skills: "React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind" },
                { title: "Backend", skills: "Node.js, TypeScript, Redux, NestJS, API Integration, MSSQL, GraphQL" },
                { title: "E-commerce Platform", skills: "Shopify Development" },
                { title: "Tools", skills: "Agile, Software Architecture, Full Stack Dev, CI/CD, TDD" }
              ].map((item) => (
                <div key={item.title} className="p-3 rounded-lg bg-teal-50 border border-teal-100">
                  <span className="block font-bold text-teal-900 text-xs uppercase mb-1">{item.title}</span>
                  <span className="text-sm text-slate-600">{item.skills}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="flex items-center gap-2 text-teal-800 font-bold uppercase tracking-widest text-sm mb-6">
              <span className="w-8 h-px bg-teal-200"></span> Experience
            </h2>
            
            <div className="space-y-8">
              {/* Job 1 */}
              <div className="relative pl-6 border-l-2 border-teal-100">
                <div className="absolute -left-2.25 top-0 w-4 h-4 bg-teal-500 rounded-full border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-bold text-slate-900">Gray Lemon Technologies, Inc. | (JustFab)</h3>
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded h-fit">2022 – 2026</span>
                </div>
                <p className="text-slate-500 text-sm italic mb-3">Full Stack Software Engineer</p>
                <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-2">
                  <li>Developed and optimized high-performance web applications using React.js, Next.js, GraphQL and Shopify.</li>
                  <li>Collaborated with cross-functional teams to design scalable features for business expansion.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="relative pl-6 border-l-2 border-teal-100">
                <div className="absolute -left-2.25 top-0 w-4 h-4 bg-slate-300 rounded-full border-4 border-white"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="font-bold text-slate-900">Awesome OS</h3>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded h-fit">2014 – 2022</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-teal-700 text-sm font-semibold">Techstyle Fashion Group (Feb 2018 – Oct 2022)</p>
                  <p className="text-slate-500 text-sm italic mb-3">Full Stack Software Engineer</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-600 mt-2 space-y-1">
                    <li>Developed sophisticated software solutions for global fashion retail group.</li>
                    <li>Contributed to the JustFab Foundation Team, ensuring core system stability and performance. Implementing caching strategies and code optimizations that enhance overall system stability.</li>
                    <li>Implemented caching strategies and code optimizations for JustFab Foundation Team.</li>
                  </ul>
                </div>
                
                <div>
                  <p className="text-teal-700 text-sm font-semibold">OSnet (May 2014 – Feb 2018)</p>
                  <p className="text-slate-500 text-sm italic mb-3">Full Stack Developer</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-600 mt-2 space-y-1">
                    <li>Engineered a comprehensive internal web application for the HR department, streamlining administrative workflows and data management.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="flex items-center gap-2 text-teal-800 font-bold uppercase tracking-widest text-sm mb-3">
              <span className="w-8 h-px bg-teal-200"></span> Education
            </h2>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">University of Southeastern Philippines</h3>
                <p className="text-slate-600 text-sm">Bachelor of Science in Computer Science</p>
              </div>
              <span className="text-xs font-medium text-slate-500">2010 – 2014</span>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;