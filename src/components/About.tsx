import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Layers, Handshake } from "lucide-react";

const stats = [
  {
    icon: <Layers size={20} />,
    label: "Multiple Disciplines",
    sub: "Engineering · Dev · Business · Coaching",
  },
  {
    icon: <MapPin size={20} />,
    label: "Cape Town, SA",
    sub: "City of Cape Town, Western Cape",
  },
  {
    icon: <Handshake size={20} />,
    label: "Open to Collaborate",
    sub: "Freelance · Consulting · Partnerships",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Skewed background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/25 via-[#c9a84c]/20 to-[#7c3aed]/15"
        style={{
          transform: "skewY(-8deg)",
          transformOrigin: "top left",
          top: "-10%",
          bottom: "-10%",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          transform: "skewY(-8deg)",
          transformOrigin: "top left",
          top: "-10%",
          bottom: "-10%",
          boxShadow:
            "0 100px 300px rgba(124,58,237,0.2), 0 -50px 150px rgba(201,168,76,0.15), 0 50px 150px rgba(0,0,0,0.5)",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#c9a84c]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7c3aed]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div style={{ y: imageY, opacity: imageOpacity }}>
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border border-[#c9a84c]/20 glow">
                <img
                  src="/profile.png"
                  alt="Mashoto Bayne Rababalela — LinkedIn profile"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                  }}
                />
                {/* Gold frame accent */}
                <div className="absolute inset-0 rounded-3xl border border-[#c9a84c]/10" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-2 text-white">
              You dream it.
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight gradient-text mb-6">
              I build it.
            </h2>

            <p className="text-[#cbd5e1] text-base sm:text-lg leading-relaxed mb-8">
              Multifaceted professional who bridges the gap between technical engineering and
              strategic business growth. As a Growth Consultant at{" "}
              <span className="text-[#c9a84c] font-semibold">Clickteams.io</span>, specializing in
              empowering B2B entrepreneurs by architecting commission-only remote outbound teams.
              As a Web and Software Developer, designs and deploys sophisticated front and backend
              solutions. Leverages a Bachelor's in{" "}
              <span className="text-[#c9a84c] font-semibold">
                Electrical &amp; Electronics Engineering
              </span>{" "}
              from Northlink College to tackle complex logical challenges with precision.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="card-hover bg-[#0d1228]/60 border border-[#1e2a4a] rounded-2xl p-4 text-center backdrop-blur-sm"
                >
                  <div className="flex justify-center mb-2 text-[#c9a84c]">{stat.icon}</div>
                  <p className="font-bold text-sm text-[#e2e8f0] mb-1">{stat.label}</p>
                  <p className="text-xs text-[#64748b]">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
