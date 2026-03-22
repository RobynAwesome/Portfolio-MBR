import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Zap, Briefcase, Users } from "lucide-react";

const skillCategories = [
  {
    icon: <Code2 size={24} />,
    title: "Web Development",
    description:
      "Designs and deploys sophisticated front and backend solutions. Builds scalable web applications with modern frameworks and clean architecture.",
    badges: [
      "React", "Node.js", "TypeScript", "JavaScript",
      "HTML & CSS", "TailwindCSS", "MongoDB", "Express.js",
      "REST APIs", "Python", "Git",
    ],
    color: "#c9a84c",
  },
  {
    icon: <Zap size={24} />,
    title: "Electrical Engineering",
    description:
      "Bachelor's degree in Electrical & Electronics Engineering from Northlink College. Applies rigorous analytical approach and logical precision to complex challenges.",
    badges: [
      "Circuit Design", "Electronics", "Signal Processing",
      "Problem Solving", "Systems Analysis", "Analytical Thinking",
      "Northlink College",
    ],
    color: "#7c3aed",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Growth & Sales Consulting",
    description:
      "Growth Consultant at Clickteams.io — architecting commission-only remote outbound teams for B2B entrepreneurs. Enhances client sales processes and drives scalable growth.",
    badges: [
      "B2B Sales", "Growth Strategy", "Outbound Teams",
      "Sales Management", "Clickteams.io", "Revenue Growth",
      "Client Relations", "Remote Teams",
    ],
    color: "#3b82f6",
  },
  {
    icon: <Users size={24} />,
    title: "Leadership & Coaching",
    description:
      "Soccer Coach leveraging classroom management and organizational skills to mentor athletes and foster disciplined, high-performing environments. Business Owner with strategic impact.",
    badges: [
      "Soccer Coaching", "Team Management", "Mentoring",
      "Business Ownership", "Strategic Planning",
      "Organizational Skills", "Leadership",
    ],
    color: "#c9a84c",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7c3aed]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a84c]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] font-mono text-sm mb-2 tracking-widest uppercase">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Skills</span>{" "}
            <span className="text-[#e2e8f0]">&amp; Disciplines</span>
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto text-base">
            A unique blend of technical engineering, software development, business growth strategy,
            and people leadership.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-hover group relative bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl p-6 overflow-hidden"
            >
              {/* Top accent border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${cat.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{
                  background: `${cat.color}15`,
                  border: `1px solid ${cat.color}30`,
                  color: cat.color,
                }}
              >
                {cat.icon}
              </div>

              <h3 className="text-lg font-bold text-[#e2e8f0] mb-2">{cat.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed mb-5">{cat.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {cat.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg border transition-colors duration-200"
                    style={{
                      background: `${cat.color}08`,
                      borderColor: `${cat.color}25`,
                      color: `${cat.color}cc`,
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
