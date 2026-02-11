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
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 py-12 md:py-20 max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="animate-fade-up flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-primary/40 shadow-glow animate-pulse-ring">
              <img src={djProfile} alt="M.Dhananjayan" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            M.Dhananjayan <span className="text-primary">(DJ)</span>
          </h1>
          <p className="text-primary font-semibold text-lg mt-1 animate-fade-up-delay-1">Founder & CEO</p>
        </div>

        {/* Services Tagline */}
        <div className="animate-fade-up-delay-2 mt-6 flex flex-wrap justify-center gap-2">
          {["Consulting", "Training", "Strategy", "Technologies", "App Developing"].map((s) => (
            <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border">
              {s}
            </span>
          ))}
        </div>

        {/* Company Logos */}
        <div className="animate-fade-up-delay-3 mt-10 w-full">
          <h2 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-5">Our Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-card rounded-xl p-4 flex items-center justify-center border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                <img src={c.logo} alt={c.name} className="h-14 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="animate-fade-up-delay-4 mt-10 w-full space-y-3">
          <a href="tel:+971505286755" className="flex items-center gap-3 gradient-card rounded-xl px-5 py-3.5 border border-border hover:border-primary/50 transition-all duration-300 group">
            <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-foreground">+971 505286755</span>
          </a>
          <a href="tel:+919686679955" className="flex items-center gap-3 gradient-card rounded-xl px-5 py-3.5 border border-border hover:border-primary/50 transition-all duration-300 group">
            <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-foreground">+91 9686679955</span>
          </a>
          <div className="flex items-center gap-2">
            <a href="mailto:dj@focusengineering.in" className="flex-1 flex items-center gap-3 gradient-card rounded-xl px-5 py-3.5 border border-border hover:border-primary/50 transition-all duration-300 group">
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-foreground">dj@focusengineering.in</span>
            </a>
            <a
              href="/Focus-Engineering-Profile.pdf"
              download
              className="gradient-blue rounded-xl px-4 py-3.5 flex items-center gap-2 text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
            >
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Profile</span>
            </a>
          </div>
        </div>

        {/* Addresses */}
        <div className="animate-fade-up-delay-5 mt-6 w-full space-y-3">
          <div className="flex items-start gap-3 gradient-card rounded-xl px-5 py-3.5 border border-border">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">1601-3, 48 Burj Gate, Dubai, United Arab Emirates</span>
          </div>
          <div className="flex items-start gap-3 gradient-card rounded-xl px-5 py-3.5 border border-border">
            <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground text-sm">149, Gandhiji Street, Thangam Nagar, Gudiyattam-632 602, Tamilnadu, India</span>
          </div>
        </div>

        {/* Contact Me Button */}
        <div className="animate-fade-up-delay-5 mt-10 flex gap-3 w-full">
          <a
            href="https://wa.me/919686679955"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 gradient-blue rounded-xl py-4 flex items-center justify-center gap-2 text-primary-foreground font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-glow hover:scale-[1.02] animate-shimmer"
          >
            <MessageCircle className="w-5 h-5" />
            Contact Me
          </a>
        </div>

        <p className="mt-8 text-muted-foreground/40 text-xs">© {new Date().getFullYear()} M.Dhananjayan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Index;
