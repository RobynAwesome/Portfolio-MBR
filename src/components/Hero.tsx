import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Briefcase, Code2, Zap, Users } from "lucide-react";

const badges = [
  { label: "Growth Consultant", icon: <Briefcase size={12} />, delay: 0 },
  { label: "Full-Stack Dev", icon: <Code2 size={12} />, delay: 0.5 },
  { label: "Electrical Eng.", icon: <Zap size={12} />, delay: 1 },
  { label: "Soccer Coach", icon: <Users size={12} />, delay: 1.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#c9a84c]/15 rounded-full blur-[100px]"
          style={{ animation: "float 8s ease-in-out infinite 2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3b82f6]/5 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text content */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 text-xs font-medium text-[#c9a84c]"
            >
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] blink-gold-dot" />
              Available for projects · Cape Town, SA
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#94a3b8] text-lg mb-2 font-mono"
            >
              wussp,
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-2"
            >
              <span className="html.dark text-white html.light:text-[#0f172a]">I'm </span>
              <span className="gradient-text-gold">Mashoto.</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-[#e2e8f0]"
            >
              A Web &amp; Mobile{" "}
              <span className="gradient-text">Full-Stack Developer.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#64748b] text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Multifaceted professional bridging technical engineering and strategic business growth.
              Growth Consultant · Web Developer · Electrical Engineer · Business Owner · Soccer Coach.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#c9a84c] text-[#080b1a] hover:bg-[#d4b96a] transition-all duration-200 hover:scale-105 shadow-lg shadow-[#c9a84c]/20"
              >
                <Mail size={16} />
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/mashoto-rababalela"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-[#7c3aed]/50 text-[#8b5cf6] hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-200 hover:scale-105"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <a
                href="mailto:mashrababalela@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mashoto-rababalela"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
              <span className="text-[#1e2a4a] text-sm">mashrababalela@gmail.com</span>
            </motion.div>
          </div>

          {/* Right — Profile image + floating badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* Concentric circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full border border-[#c9a84c]/10 led-border-outer" />
              <div className="absolute w-64 h-64 rounded-full border border-[#7c3aed]/10 led-border-inner" />
              <div className="absolute w-48 h-48 rounded-full border border-[#c9a84c]/05" />
            </div>

            {/* Profile image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#c9a84c]/30 glow">
              <img
                src="/profile-bw.jpg"
                alt="Mashoto Bayne Rababalela"
                className="hero-profile-img w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            {/* Floating skill badges */}
            {badges.map((badge, i) => {
              const positions = [
                "top-4 -left-8",
                "top-4 -right-8",
                "bottom-16 -left-12",
                "bottom-16 -right-12",
              ];
              return (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + badge.delay }}
                  style={{ animation: `float ${5 + i}s ease-in-out infinite ${badge.delay}s` }}
                  className={`absolute ${positions[i]} glossy-badge border border-[#c9a84c]/20 rounded-full px-3 py-1.5 text-xs font-semibold text-[#c9a84c] flex items-center gap-1.5 shadow-lg backdrop-blur-sm`}
                >
                  {badge.icon}
                  {badge.label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#64748b] hover:text-[#c9a84c] transition-colors duration-200 group"
          >
            <span className="text-xs font-mono">scroll down</span>
            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform duration-300"
              style={{ animation: "float 2s ease-in-out infinite" }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
