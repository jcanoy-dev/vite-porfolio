import { Mail, Globe, Phone, MapPin } from "lucide-react";
import { ContactCard } from "../components/ui/ContactCard";

// Clean static dataset decoupled from presentation markup
const CONTACT_METHODS = [
  {
    id: "phone",
    href: "tel:+639184365242",
    icon: Phone,
    label: "Phone",
    value: "+63 918 436 5242",
    isExternal: false
  },
  {
    id: "email",
    href: "mailto:jeffrey.canoy92@gmail.com",
    icon: Mail,
    label: "Email",
    value: "jeffrey.canoy92@gmail.com",
    isExternal: false
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/jeffrey-canoy-641987208",
    icon: Globe,
    label: "LinkedIn",
    value: "jeffrey-canoy",
    isExternal: true
  }
];

const ContactPage = () => {
  return (
    <div className="bg-white text-slate-800 font-sans">
      <main className="max-w-2xl mx-auto px-6 py-20 md:py-32">
        
        {/* Simple Header */}
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
            Get in Touch
          </h1>
          <div className="h-1 w-12 bg-teal-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 leading-relaxed">
            I'm currently open to new opportunities, technical consultations, or just connecting with fellow engineers.
          </p>
        </header>

        {/* Contact List */}
        <div className="space-y-4">
          
          {/* Dynamic Link Elements */}
          {CONTACT_METHODS.map((method) => (
            <ContactCard
              key={method.id}
              href={method.href}
              icon={method.icon}
              label={method.label}
              value={method.value}
              isExternal={method.isExternal}
            />
          ))}

          {/* Location (Non-clickable fallback layout component) */}
          <div className="flex items-center gap-4 p-5 rounded-2xl border border-transparent">
            <div className="text-slate-400 shrink-0">
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
