const AboutPage = () => {
  return (
    <div className=" bg-white text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        
        {/* Simple Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-2">
            About Jeffrey Canoy
          </h1>
          <div className="h-1 w-12 bg-teal-600 rounded-full"></div>
        </header>

        {/* Text Content Area */}
        <div className="space-y-8 text-lg leading-relaxed text-slate-600">
          
          <section>
            <p>
              I am a <span className="text-teal-800 font-medium">Full Stack Software Engineer</span> with over 
              a decade of experience specializing in the architecture and development of scalable web 
              applications. My career has been defined by a deep curiosity for how technology can 
              bridge the gap between complex business logic and intuitive user experiences.
            </p>
          </section>

          <section className="space-y-4">
            <p>
              Over the last 12 years, I have navigated the end-to-end development lifecycle for a 
              diverse range of projects—from building streamlined internal HR tools that power 
              organizational workflows to engineering high-performance features for 
              <span className="text-slate-900 font-medium"> large-scale global fashion e-commerce 
              platforms</span> like JustFab.
            </p>
            <p>
              My technical philosophy centers on stability and performance. During my tenure at 
              Awesome OS and Gray Lemon Technologies, I focused on implementing robust caching 
              strategies and code optimizations that ensured core system reliability during 
              significant architectural shifts.
            </p>
          </section>

          <section className="bg-teal-50/50 border-l-4 border-teal-200 p-6 my-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-teal-900 mb-2">
              Current Technical Focus
            </h2>
            <p className="text-base italic">
              "I am currently passionate about leveraging the modern JavaScript ecosystem—specifically 
              React.js and Next.js—alongside robust backend architectures like NestJS and GraphQL 
              to drive business growth and digital innovation."
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900">The Journey</h2>
            <p>
              Starting my journey in 2014 at the University of Southeastern Philippines, I began 
              as a Full Stack Developer at OSnet, where I learned the value of "full-stack" 
              ownership—managing both the frontend visual layer and the backend data management 
              to deliver seamless internal experiences.
            </p>
            <p>
              Later, transitioning into the world of fashion retail technology, I spent over four 
              years as a key contributor to the Techstyle Fashion Group foundation team. This role 
              honed my ability to pivot between development stacks and maintain deep technical 
              contributions while supporting global business expansion.
            </p>
          </section>

          {/* Minimal Contact/Call to Action */}
          <footer className="pt-12 border-t border-slate-100 flex flex-col sm:flex-row gap-6 items-center">
            <p className="text-sm font-medium text-slate-500">
                I will code anything for cat food :D
            </p>
            <a 
              href="mailto:jeffrey.canoy92@gmail.com" 
              className="px-6 py-2 bg-teal-800 text-white text-sm font-bold rounded-full hover:bg-teal-700 transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;