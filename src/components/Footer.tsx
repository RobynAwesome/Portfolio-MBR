import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Briefcase, Phone, Globe, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8">
      {/* Business card section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 80px rgba(201,168,76,0.12), 0 0 160px rgba(124,58,237,0.08)",
          }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0d1228 0%, #111930 50%, #0d1228 100%)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 0 60px rgba(201,168,76,0.08), 0 0 120px rgba(124,58,237,0.06)",
          }}
        >
          {/* Gold corner accents */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#c9a84c]/40 rounded-tl-3xl"
          />
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#c9a84c]/40 rounded-br-3xl"
          />

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
              {/* Avatar with animated gold ring */}
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: "conic-gradient(#c9a84c, #7c3aed, #3b82f6, #c9a84c)",
                    padding: "2px",
                    borderRadius: "9999px",
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0d1228] relative z-10"
                >
                  <img
                    src="/profile.png"
                    alt="Mashoto Bayne Rababalela"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                {/* Online dot */}
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#c9a84c] border-2 border-[#0d1228] z-20"
                />
              </div>
              <div className="text-center">
                <motion.p
                  whileHover={{ scale: 1.05, color: "#c9a84c" }}
                  className="font-black text-white text-lg leading-tight cursor-default"
                >
                  Mashoto Bayne
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.05, color: "#c9a84c" }}
                  className="font-black text-white text-lg leading-tight cursor-default"
                >
                  Rababalela
                </motion.p>
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
                  <Code2 size={14} className="text-[#7c3aed] shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold">Full-Stack Developer</p>
                    <p className="text-[#64748b] text-xs">React · Node.js · TypeScript · Python</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={14} className="text-[#a78bfa] shrink-0" />
                  <a
                    href="https://www.linkedin.com/in/mashoto-bayne-rababalela-836a47139/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#a78bfa] hover:text-white transition-colors font-medium"
                  >
                    Mashoto Bayne Rababalela
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
                  <Globe size={14} className="text-[#3b82f6] shrink-0" />
                  <p className="text-sm text-[#94a3b8]">Engineering Services · B2B Sales · Coaching</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#64748b] shrink-0" />
                  <p className="text-sm text-[#94a3b8]">Cape Town, Western Cape, South Africa</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#64748b] shrink-0" />
                  <p className="text-sm text-[#94a3b8]">Available on LinkedIn</p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-2">
                <motion.a
                  href="https://www.linkedin.com/in/mashoto-bayne-rababalela-836a47139/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(201,168,76,0.3)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] text-[#080b1a] transition-all shadow-lg shadow-[#c9a84c]/15"
                >
                  <Linkedin size={13} />
                  View LinkedIn Profile
                </motion.a>
                <motion.a
                  href="mailto:mashrababalela@gmail.com"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(124,58,237,0.2)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs border border-[#7c3aed]/40 text-[#a78bfa] transition-all"
                >
                  <Mail size={13} />
                  Send Email
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-t border-[#1e2a4a]/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#475569]">
          &copy; {year} Mashoto Bayne Rababalela · All rights reserved
        </p>
        <p className="text-xs text-[#475569]">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/kholofelo-robyn-rababalela-7a26273b6"
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
