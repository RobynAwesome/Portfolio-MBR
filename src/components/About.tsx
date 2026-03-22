import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { MapPin, Layers, Handshake } from "lucide-react";

const stats = [
  {
    icon: <Layers size={22} />,
    label: "Multiple Disciplines",
    sub: "Engineering · Dev · Business · Coaching",
  },
  {
    icon: <MapPin size={22} />,
    label: "Cape Town, SA",
    sub: "City of Cape Town, Western Cape",
  },
  {
    icon: <Handshake size={22} />,
    label: "Open to Collaborate",
    sub: "Freelance · Consulting · Partnerships",
  },
];

const titleWords = ["You", "dream", "it.", "I", "build", "it."];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/banner-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#080b1a]/75 backdrop-blur-[2px]" />

      {/* Gold/purple vignette edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 50%, transparent 40%, rgba(8,11,26,0.8) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">

        {/* Animated word-by-word title — 2x bigger */}
        <div className="mb-8 flex flex-wrap justify-center gap-x-4 gap-y-1">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className={`text-5xl sm:text-7xl md:text-8xl font-black leading-none ${
                i >= 3
                  ? "gradient-text-gold"
                  : "text-white"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Summary text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed max-w-2xl mb-12"
        >
          Multifaceted professional bridging technical engineering and strategic business growth.
          Growth Consultant at{" "}
          <span className="text-[#c9a84c] font-semibold">Clickteams.io</span> — architecting
          commission-only remote outbound teams. Web &amp; Software Developer deploying sophisticated
          front and backend solutions. Bachelor's in{" "}
          <span className="text-[#c9a84c] font-semibold">Electrical &amp; Electronics Engineering</span>{" "}
          from Northlink College.
        </motion.p>

        {/* Animated stat tabs — brighten on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(201,168,76,0.25), 0 0 64px rgba(124,58,237,0.15)",
                borderColor: "rgba(201,168,76,0.6)",
              }}
              className="group relative overflow-hidden rounded-3xl border border-[#1e2a4a] cursor-default"
              style={{
                background: "rgba(13,18,40,0.7)",
                backdropFilter: "blur(16px)",
              }}
            >
              {/* Hover shimmer */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(124,58,237,0.08) 100%)",
                }}
              />
              <div className="relative z-10 p-6 flex flex-col items-center gap-3">
                <motion.div
                  className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {stat.icon}
                </motion.div>
                <p className="font-black text-base text-white group-hover:text-[#c9a84c] transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-xs text-[#64748b] group-hover:text-[#94a3b8] transition-colors duration-300 leading-relaxed">
                  {stat.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
