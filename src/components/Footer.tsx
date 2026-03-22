import { Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-10 border-t border-[#1e2a4a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-black text-xl gradient-text-gold">
              MB<span className="text-[#7c3aed]">.</span>
            </span>
            <p className="text-xs text-[#64748b]">
              Mashoto Bayne Rababalela — Cape Town, SA
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#64748b] hover:text-[#c9a84c] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mashoto-rababalela"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mashrababalela@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#1e2a4a]/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#475569]">
            &copy; {year} Mashoto Bayne Rababalela. All rights reserved.
          </p>
          <p className="text-xs text-[#475569] flex items-center gap-1">
            Built with <Heart size={11} className="text-[#c9a84c]" /> by{" "}
            <a
              href="https://github.com/RobynAwesome"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a84c] hover:underline"
            >
              RobynAwesome
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
