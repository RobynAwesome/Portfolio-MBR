import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, X, ZoomIn } from "lucide-react";

const certs = [
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "January 18, 2022",
    id: "103350618",
    image: "/certificates/1643802425862.jpg",
    description:
      "Mastery of the fundamentals of building and customizing effective Google Search campaigns.",
  },
  {
    title: "Google Analytics Individual Qualification",
    issuer: "Google",
    date: "January 18, 2022",
    id: "103362363",
    image: "/certificates/1643802467192.png",
    description: "Advanced Google Analytics concepts for data-driven decision making.",
  },
  {
    title: "Google Ads Display Certification",
    issuer: "Google",
    date: "January 19, 2022",
    id: "94693972",
    image: "/certificates/1643802492259.png",
    description:
      "Mastery of developing and optimizing effective Google Display campaigns.",
  },
  {
    title: "Google Ads — Measurement Certification",
    issuer: "Google",
    date: "January 19, 2022",
    id: "103462170",
    image: "/certificates/1643802517057.png",
    description:
      "Mastery of measuring and optimizing Google Ads performance.",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modal, setModal] = useState<string | null>(null);

  return (
    <section id="certificates" className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] font-mono text-sm mb-2 tracking-widest uppercase">
            Verified
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#e2e8f0]">Certifications</span>{" "}
            <span className="gradient-text">&amp; Credentials</span>
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-base">
            Google-certified across digital advertising and analytics — verified mastery in
            data-driven growth.
          </p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group cursor-pointer bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl overflow-hidden"
              onClick={() => setModal(cert.image)}
            >
              {/* Certificate preview */}
              <div className="relative h-48 overflow-hidden bg-white/95">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain object-top p-2"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#080b1a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn size={28} className="text-[#c9a84c]" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start gap-2 mb-2">
                  <Award size={16} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-[#e2e8f0] leading-snug">{cert.title}</h3>
                </div>
                <p className="text-xs text-[#64748b] mb-1">{cert.issuer} · {cert.date}</p>
                <p className="text-xs text-[#475569]">ID: {cert.id}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-lg w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
            >
              <X size={16} className="text-gray-700" />
            </button>
            <img src={modal} alt="Certificate" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
