import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, Briefcase, Code2, Zap, Users } from "lucide-react";
import TransparentImage from "./TransparentImage";

const badges = [
  { label: "Growth Consultant", icon: <Briefcase size={11} />, x: "-left-4 top-1/4", delay: 0.2 },
  { label: "Full-Stack Dev", icon: <Code2 size={11} />, x: "-right-4 top-1/4", delay: 0.4 },
  { label: "Electrical Eng.", icon: <Zap size={11} />, x: "-left-4 bottom-1/4", delay: 0.6 },
  { label: "Soccer Coach", icon: <Users size={11} />, x: "-right-4 bottom-1/4", delay: 0.8 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* Radial gradient bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(201,168,76,0.12) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#c9a84c]/25 bg-[#c9a84c]/5 text-xs font-semibold text-[#c9a84c] tracking-wide"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] blink-gold-dot" />
        Available for projects · Cape Town, SA
      </motion.div>

      {/* Central layout — profile image centre-stage */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4">

        {/* Profile image — transparent bg, hero-sized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative mb-6"
        >
          {/* Glow ring behind image */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-float"
            style={{ background: "radial-gradient(circle, #c9a84c 0%, #7c3aed 60%, transparent 80%)" }}
          />

          {/* Floating skill badges */}
          {badges.map((b) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: b.delay + 0.6 }}
              style={{ animation: `float ${5 + badges.indexOf(b)}s ease-in-out infinite ${b.delay}s` }}
              className={`absolute ${b.x} z-20 glossy-badge border border-[#c9a84c]/25 rounded-full px-3 py-1.5 text-[10px] font-bold text-[#c9a84c] flex items-center gap-1.5 shadow-xl backdrop-blur-sm whitespace-nowrap`}
            >
              {b.icon}
              {b.label}
            </motion.div>
          ))}

          {/* Transparent profile image */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <TransparentImage
              src="/profile.png"
              alt="Mashoto Bayne Rababalela"
              threshold={45}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[#94a3b8] text-base font-mono mb-1 tracking-widest"
        >
          wussp,
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-3"
        >
          I'm <span className="gradient-text-gold">Mashoto.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#cbd5e1]"
        >
          A Web &amp; Mobile{" "}
          <span className="gradient-text font-black">Full-Stack Developer.</span>
        </motion.h2>

        {/* Short tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[#64748b] text-sm sm:text-base max-w-lg mb-8 leading-relaxed"
        >
          Growth Consultant · Web Developer · Electrical Engineer · Business Owner · Soccer Coach
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] text-[#080b1a] hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg shadow-[#c9a84c]/25"
          >
            <Mail size={15} />
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/mashoto-rababalela"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-2xl font-bold text-sm border border-[#7c3aed]/50 text-[#a78bfa] hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-200 hover:scale-105"
          >
            <Linkedin size={15} />
            Connect on LinkedIn
          </a>
        </motion.div>

        {/* Email line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="text-xs text-[#475569] font-mono"
        >
          mashrababalela@gmail.com
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#475569] hover:text-[#c9a84c] transition-colors group"
      >
        <a href="#about" className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" style={{ animation: "float 2s ease-in-out infinite" }} />
        </a>
      </motion.div>
    </section>
  );
}
