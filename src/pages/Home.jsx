import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Globe } from "lucide-react";
import { SkillsCard } from "../components/ui/SkillsCard";
import { TimelineNode } from "../components/ui/TimelineNode";

// Safe, clean imports matching your technical stack
import { 
  SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiTypescript, SiRedux, SiNestjs, SiGraphql, SiShopify, SiGithubactions
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { HiCpuChip } from "react-icons/hi2";

// Pack logos into a global structure to distribute randomly in the body background margins
const AMBIENT_ICONS = [
  { icon: SiReact, color: "text-teal-400/20" },
  { icon: SiNextdotjs, color: "text-slate-400/15" },
  { icon: SiJavascript, color: "text-amber-400/20" },
  { icon: SiHtml5, color: "text-orange-400/20" },
  { icon: FaCss3Alt, color: "text-blue-400/20" },
  { icon: SiTailwindcss, color: "text-cyan-400/20" },
  { icon: SiNodedotjs, color: "text-green-400/20" },
  { icon: SiTypescript, color: "text-blue-500/20" },
  { icon: SiRedux, color: "text-purple-400/20" },
  { icon: SiNestjs, color: "text-rose-400/20" },
  { icon: SiGraphql, color: "text-pink-400/20" },
  { icon: SiShopify, color: "text-lime-500/20" },
  { icon: SiGithubactions, color: "text-indigo-400/20" },
  { icon: HiCpuChip, color: "text-emerald-400/20" }
];

const SKILLS_DATA = [
  { title: "Frontend", skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind"] },
  { title: "Backend", skills: ["Node.js", "TypeScript", "Redux", "NestJS", "API Integration", "MSSQL", "GraphQL"] },
  { title: "E-commerce Platform", skills: ["Shopify Development"] },
  { title: "Tools", skills: ["Agile", "Software Architecture", "Full Stack Dev", "CI/CD", "TDD"] }
];

const Home = () => {
  // Compute static positions to place floating icons away from the main white block card area
  const randomizedFloatingParticles = useMemo(() => {
    return AMBIENT_ICONS.map((brand, i) => {
      // Alternate placing icons on the left half (0-40%) or right half (60-100%) of the viewport
      const isLeft = i % 2 === 0;
      const leftPosition = isLeft 
        ? Math.floor(Math.random() * 15) + 2     // Left side margin buffer (2% to 17%)
        : Math.floor(Math.random() * 15) + 83;   // Right side margin buffer (83% to 98%)

      return {
        ...brand,
        left: `${leftPosition}%`,
        top: `${Math.floor(Math.random() * 85) + 5}%`, // Scatter vertically down the viewport layout
        size: Math.floor(Math.random() * 24) + 32,    // Random organic sizes (32px to 56px)
        // Independent float loop timers to make transitions look completely organic
        durationY: Math.floor(Math.random() * 4) + 5,  
        durationX: Math.floor(Math.random() * 5) + 6,
        rangeY: Math.floor(Math.random() * 20) + 15    // Bobbing height
      };
    });
  }, []);

  return (
    // relative & overflow-hidden protects screen limits from infinite drift horizontal scrollbars
    <div className="relative bg-teal-50/30 p-6 md:p-12 text-slate-800 font-sans min-h-screen overflow-hidden">
      
      {/* BACKGROUND FLOATING CANVAS LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block select-none">
        {randomizedFloatingParticles.map((particle, idx) => {
          const IconComponent = particle.icon;
          return (
            <motion.div
              key={idx}
              style={{
                position: "absolute",
                left: particle.left,
                top: particle.top,
                fontSize: particle.size,
              }}
              animate={{
                // Continuous drifting paths that run completely on their own forever
                y: [0, -particle.rangeY, particle.rangeY / 2, 0],
                x: [0, Math.random() * 15 - 7, Math.random() * 15 - 7, 0],
                rotate: [0, Math.random() * 20 - 10, Math.random() * -20 + 10, 0]
              }}
              transition={{
                duration: particle.durationY,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className={`${particle.color}`}
            >
              <IconComponent />
            </motion.div>
          );
        })}
      </div>

      {/* FOREGROUND MAIN INTERFACE CARD */}
      <div className="relative max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-teal-100 z-10">
        {/* Header Section */}
        <header className="bg-slate-900 p-8 text-white">
          <h1 className="text-4xl font-bold tracking-tight uppercase">Jeffrey Canoy</h1>
          <p className="text-teal-400 font-medium text-lg mt-1 tracking-wide">Full Stack Software Engineer</p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-slate-300">
            <a href="mailto:jeffrey.canoy92@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Mail size={16} /> jeffrey.canoy92@gmail.com
            </a> | 
            <a href="https://www.linkedin.com/in/jeffrey-canoy-641987208" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Globe size={16} /> LinkedIn Profile
            </a>
          </div>
        </header>

        <div className="p-8 space-y-10">
          {/* Summary Section */}
          <section>
            <h2 className="mb-3">Professional Summary</h2>
            <p className="text-slate-600 leading-relaxed">
              Accomplished Full Stack Software Engineer with over 12 years of experience in building scalable web applications. Proven track record in the end-to-end development lifecycle, from internal HR tools to large-scale fashion e-commerce platforms.
            </p>
          </section>

          {/* Core Skills Grid Module */}
          <section>
            <h2 className="mb-4">Core Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SKILLS_DATA.map((item) => (
                <SkillsCard key={item.title} title={item.title} skills={item.skills} />
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="mb-6">Experience</h2>
            <div className="space-y-8">
              <TimelineNode title="Gray Lemon Technologies, Inc. | (JustFab)" subtitle="Full Stack Software Engineer" date="2022 – 2026" status="current">
                <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-2">
                  <li>Developed and optimized high-performance web applications using React.js, Next.js, GraphQL and Shopify.</li>
                  <li>Collaborated with cross-functional teams to design scalable features for business expansion.</li>
                </ul>
              </TimelineNode>

              <TimelineNode title="Awesome OS" subtitle="Full Stack Software Engineer" date="2014 – 2022" status="historical">
                <div className="mb-6">
                  <p className="text-teal-700 text-sm font-semibold">Techstyle Fashion Group (Feb 2018 – Oct 2022)</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-600 mt-2 space-y-1">
                    <li>Developed sophisticated software solutions for global fashion retail group.</li>
                    <li>Contributed to the JustFab Foundation Team, ensuring core system stability and performance.</li>
                    <li>Implemented caching strategies and code optimizations for JustFab Foundation Team.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-teal-700 text-sm font-semibold">OSnet (May 2014 – Feb 2018)</p>
                  <p className="text-slate-500 text-sm italic mb-1">Full Stack Developer</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-600 mt-2 space-y-1">
                    <li>Engineered a comprehensive internal web application for the HR department, streamlining administrative workflows and data management.</li>
                  </ul>
                </div>
              </TimelineNode>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="mb-3">Education</h2>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">University of Southeastern Philippines</h3>
                <p className="text-slate-600 text-sm">Bachelor of Science in Computer Science</p>
              </div>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded h-fit">2010 – 2014</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
