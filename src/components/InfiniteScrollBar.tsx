import { motion } from "framer-motion";

const row1 = [
  "React", "Node.js", "TypeScript", "JavaScript", "Python",
  "HTML & CSS", "TailwindCSS", "MongoDB", "Express.js", "REST APIs",
];

const row2 = [
  "Electrical Engineering", "Growth Consulting", "B2B Sales", "Team Leadership",
  "Soccer Coaching", "Business Strategy", "Problem Solving", "Frontend Dev",
  "Backend Dev", "Digital Marketing",
];

function ScrollRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const doubled = [...items, ...items];
  const xFrom = direction === "left" ? 0 : "-50%";
  const xTo = direction === "left" ? "-50%" : 0;

  return (
    <div className="overflow-hidden py-2 relative">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#080b1a] to-transparent pointer-events-none html.light:from-[#faf8f2]" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#080b1a] to-transparent pointer-events-none html.light:from-[#faf8f2]" />

      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: [xFrom, xTo] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="glossy-badge border border-[#c9a84c]/20 rounded-full px-4 py-1.5 text-xs font-semibold text-[#c9a84c]/80 whitespace-nowrap hover:border-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors duration-200 cursor-default"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function InfiniteScrollBar() {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="flex flex-col gap-3">
        <ScrollRow items={row1} direction="left" />
        <ScrollRow items={row2} direction="right" />
      </div>
    </section>
  );
}
