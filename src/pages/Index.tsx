import { Phone, Mail, MapPin, Download, MessageCircle } from "lucide-react";
import djProfile from "@/assets/dj-profile.jpeg";
import ffcLogo from "@/assets/ffc-logo.png";
import focusEnggLogo from "@/assets/focus-engg-logo.jpg";
import focusOnSkillLogo from "@/assets/focus-on-skill-logo.png";
import focusTechLogo from "@/assets/focus-technologies-logo.png";

const companies = [
  { logo: ffcLogo, url: "https://focusfc.com.au/", name: "Focus FC" },
  { logo: focusEnggLogo, url: "https://focusengineering.in/", name: "Focus Engineering" },
  { logo: focusOnSkillLogo, url: "https://focusonskill.com/", name: "Focus on Skill" },
  { logo: focusTechLogo, url: "https://focustechnologies.ae/", name: "Focus Technologies" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-5 py-10 md:py-20 max-w-xl mx-auto w-full">
        {/* Profile Section */}
        <div className="animate-fade-up flex flex-col items-center text-center">
          <div className="relative mb-5">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow animate-pulse-ring">
              <img src={djProfile} alt="M.Dhananjayan" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
            M.Dhananjayan <span className="text-primary">(DJ)</span>
          </h1>
          <p className="text-primary font-semibold text-base md:text-lg mt-1 animate-fade-up-delay-1">Founder & CEO</p>
        </div>

        {/* Services Tagline */}
        <div className="animate-fade-up-delay-2 mt-5 flex flex-wrap justify-center gap-1.5">
          {["Consulting", "Training", "Strategy", "Technologies", "App Developing"].map((s) => (
            <span key={s} className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border">
              {s}
            </span>
          ))}
        </div>

        {/* Company Logos */}
        <div className="animate-fade-up-delay-3 mt-8 w-full">
          <h2 className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Our Companies</h2>
          <div className="grid grid-cols-2 gap-3">
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-card rounded-xl p-3 md:p-4 flex items-center justify-center border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                <img src={c.logo} alt={c.name} className="h-12 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="animate-fade-up-delay-4 mt-8 w-full space-y-2.5">
          <a href="tel:+971505286755" className="flex items-center gap-3 gradient-card rounded-xl px-4 py-3 border border-border hover:border-primary/50 transition-all duration-300 group">
            <Phone className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-foreground text-sm">+971 505286755</span>
          </a>
          <a href="tel:+919686679955" className="flex items-center gap-3 gradient-card rounded-xl px-4 py-3 border border-border hover:border-primary/50 transition-all duration-300 group">
            <Phone className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-foreground text-sm">+91 9686679955</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="mailto:dj@focusengineering.in" className="flex-1 flex items-center gap-3 gradient-card rounded-xl px-4 py-3 border border-border hover:border-primary/50 transition-all duration-300 group min-w-0">
              <Mail className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-foreground text-sm truncate">dj@focusengineering.in</span>
            </a>
            <a
              href="/Focus-Engineering-Profile.pdf"
              download
              className="gradient-blue rounded-xl px-3.5 py-3 flex items-center gap-1.5 text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-glow shrink-0"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </a>
          </div>
        </div>

        {/* Addresses */}
        <div className="animate-fade-up-delay-5 mt-5 w-full space-y-2.5">
          <div className="flex items-start gap-3 gradient-card rounded-xl px-4 py-3 border border-border">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">1601-3, 48 Burj Gate, Dubai, United Arab Emirates</span>
          </div>
          <div className="flex items-start gap-3 gradient-card rounded-xl px-4 py-3 border border-border">
            <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">149, Gandhiji Street, Thangam Nagar, Gudiyattam-632 602, Tamilnadu, India</span>
          </div>
        </div>

        {/* Contact Me WhatsApp Button */}
        <div className="animate-fade-up-delay-5 mt-8 w-full">
          <a
            href="https://wa.me/919686679955?text=Hi%20DJ%2C%20I%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full gradient-blue rounded-xl py-3.5 flex items-center justify-center gap-2 text-primary-foreground font-semibold text-base hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-[1.02] animate-shimmer"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Me
          </a>
        </div>

        <p className="mt-6 text-muted-foreground/40 text-xs">© {new Date().getFullYear()} M.Dhananjayan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
