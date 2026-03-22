import { Linkedin, Mail, MapPin, Briefcase, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8">
      {/* Business card section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0d1228 0%, #111930 50%, #0d1228 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 0 120px rgba(124,58,237,0.06)",
          }}
        >
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#c9a84c]/40 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#c9a84c]/40 rounded-br-3xl" />

          {/* Card circuit background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
            {/* Left — avatar + name */}
            <div className="flex flex-col items-center justify-center gap-4 p-8 sm:w-56 sm:border-r sm:border-[#1e2a4a]">
              {/* Avatar with gold ring */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(#c9a84c, #7c3aed, #3b82f6, #c9a84c)",
                    padding: "2px",
                    borderRadius: "9999px",
                  }}
                />
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0d1228] relative z-10">
                  <img
                    src="/profile.png"
                    alt="Mashoto Bayne Rababalela"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Online dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1228] blink-gold-dot z-20" />
              </div>
              <div className="text-center">
                <p className="font-black text-white text-lg leading-tight">Mashoto Bayne</p>
                <p className="font-black text-white text-lg leading-tight">Rababalela</p>
              </div>
            </div>

            {/* Right — contact details */}
            <div className="flex-1 flex flex-col justify-center gap-4 p-8">
              <p className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1">
                Business Card
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Briefcase size={14} className="text-[#c9a84c] shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">Growth Consultant</p>
                    <p className="text-[#64748b] text-xs">Clickteams.io</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={14} className="text-[#a78bfa] shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/mashoto-rababalela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#a78bfa] hover:text-white transition-colors font-medium"
                  >
                    linkedin.com/in/mashoto-rababalela
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#c9a84c] shrink-0" />
                  <a
                    href="mailto:mashrababalela@gmail.com"
                    className="text-sm text-[#e2e8f0] hover:text-[#c9a84c] transition-colors"
                  >
                    mashrababalela@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#64748b] shrink-0" />
                  <p className="text-sm text-[#94a3b8]">Cape Town, Western Cape, SA</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#64748b] shrink-0" />
                  <p className="text-sm text-[#94a3b8]">Available on LinkedIn</p>
                </div>
              </div>

              {/* LinkedIn CTA */}
              <a
                href="https://www.linkedin.com/in/mashoto-rababalela"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] text-[#080b1a] hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-[#c9a84c]/15"
              >
                <Linkedin size={13} />
                View Full LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1e2a4a]/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#475569]">
          &copy; {year} Mashoto Bayne Rababalela · All rights reserved
        </p>
        <p className="text-xs text-[#475569]">
          Built by{" "}
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
    </footer>
  );
}
