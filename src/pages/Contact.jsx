import { Mail, Globe, Phone, MapPin, ExternalLink } from "lucide-react";

const ContactPage = () => {
  return (
    <div className=" bg-white text-slate-800 font-sans">
      <main className="max-w-2xl mx-auto px-6 py-20 md:py-32">
        
        {/* Simple Header */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Get in Touch
          </h1>
          <div className="h-1 w-12 bg-teal-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 leading-relaxed">
            I’m currently open to new opportunities, technical consultations, 
            or just connecting with fellow engineers.
          </p>
        </header>

        {/* Contact List */}
        <div className="space-y-4">
          
          {/* Phone */}
          <a 
            href="tel:+639184365242" 
            className="group flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-teal-600">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phone</p>
                <p className="text-lg font-medium text-slate-700">+63 918 436 5242</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-teal-500 transition-colors" />
          </a>

          {/* Email */}
          <a 
            href="mailto:jeffrey.canoy92@gmail.com" 
            className="group flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-teal-600">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</p>
                <p className="text-lg font-medium text-slate-700">jeffrey.canoy92@gmail.com</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-teal-500 transition-colors" />
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/jeffrey-canoy-641987208" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="text-teal-600">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                <p className="text-lg font-medium text-slate-700">jeffrey-canoy</p>
              </div>
            </div>
            <ExternalLink size={16} className="text-slate-300 group-hover:text-teal-500 transition-colors" />
          </a>

          {/* Location (Non-clickable) */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-transparent">
            <div className="text-slate-400">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Based in</p>
              <p className="text-slate-600">Davao City, Philippines</p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default ContactPage;