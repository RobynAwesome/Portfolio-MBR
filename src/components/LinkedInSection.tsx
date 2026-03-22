import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Lock, ExternalLink, Image, Play, ThumbsUp, MessageCircle, Share2 } from "lucide-react";

const previewPosts = [
  {
    type: "text",
    preview:
      "Building scalable B2B outbound teams that generate real revenue — here's what I've learned at Clickteams.io after helping dozens of entrepreneurs...",
    likes: "84",
    comments: "12",
  },
  {
    type: "image",
    preview:
      "Proud to share another milestone in our Growth Consulting journey. The results speak for themselves 🚀",
    likes: "147",
    comments: "23",
  },
  {
    type: "video",
    preview:
      "How I went from Electrical Engineering to Full-Stack Development to Growth Consulting — the full story.",
    likes: "203",
    comments: "41",
  },
];

export default function LinkedInSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="linkedin" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#7c3aed]/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/5 text-xs font-bold text-[#a78bfa] tracking-widest uppercase">
            <Linkedin size={12} />
            LinkedIn
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#e2e8f0]">Stay Connected</span>{" "}
            <span className="gradient-text">on LinkedIn</span>
          </h2>
          <p className="text-[#64748b] max-w-xl mx-auto text-base">
            Follow Mashoto's professional journey — insights on growth consulting, web development,
            and business strategy.
          </p>
        </motion.div>

        {/* Profile card + posts grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Profile card — col 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-hover bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl overflow-hidden"
          >
            {/* Banner */}
            <div
              className="h-24 w-full"
              style={{
                backgroundImage: "url('/banner.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Avatar */}
            <div className="px-6 pb-6">
              <div className="-mt-10 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#0d1228] ring-2 ring-[#c9a84c]/40">
                  <img
                    src="/profile.png"
                    alt="Mashoto Bayne Rababalela"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <h3 className="font-black text-white text-lg leading-tight mb-0.5">
                Mashoto Bayne Rababalela
              </h3>
              <p className="text-[#c9a84c] text-xs font-semibold mb-1">
                Growth Consultant @ Clickteams.io
              </p>
              <p className="text-[#64748b] text-xs mb-4">
                Full-Stack Dev · Electrical Eng. · Soccer Coach · Cape Town, SA
              </p>

              <div className="border-t border-[#1e2a4a] pt-4 mb-4">
                <p className="text-xs text-[#475569] mb-3 font-mono">Connect to see:</p>
                <ul className="text-xs text-[#64748b] space-y-1.5">
                  {["Posts & articles", "Professional updates", "Photos & videos", "Network activity"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#c9a84c]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://www.linkedin.com/in/mashoto-rababalela"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-sm bg-[#0a66c2] text-white hover:bg-[#0a56a8] transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#0a66c2]/20"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Posts preview — col 2-3 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {previewPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="card-hover bg-[#0d1228]/80 border border-[#1e2a4a] rounded-2xl p-5 relative overflow-hidden"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c9a84c]/20 shrink-0">
                    <img src="/profile.png" alt="Mashoto" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Mashoto Bayne Rababalela</p>
                    <p className="text-xs text-[#64748b]">Growth Consultant · Clickteams.io</p>
                  </div>
                  {post.type === "image" && (
                    <div className="ml-auto p-1.5 rounded-lg bg-[#c9a84c]/10 text-[#c9a84c]">
                      <Image size={14} />
                    </div>
                  )}
                  {post.type === "video" && (
                    <div className="ml-auto p-1.5 rounded-lg bg-[#7c3aed]/10 text-[#a78bfa]">
                      <Play size={14} />
                    </div>
                  )}
                </div>

                {/* Post preview text — blurred after first line */}
                <div className="relative mb-4">
                  <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-2">{post.preview}</p>
                  {/* Blur overlay to tease content */}
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-[#0d1228] to-transparent" />
                </div>

                {/* Lock overlay */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[#475569] text-xs">
                    <span className="flex items-center gap-1"><ThumbsUp size={12} /> {post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle size={12} /> {post.comments}</span>
                    <Share2 size={12} />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mashoto-rababalela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-[#a78bfa] hover:text-white transition-colors"
                  >
                    <Lock size={11} />
                    Login to view full post
                    <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* View all CTA */}
            <motion.a
              href="https://www.linkedin.com/in/mashoto-rababalela"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-[#7c3aed]/30 text-[#a78bfa] hover:border-[#7c3aed] hover:bg-[#7c3aed]/5 transition-all duration-300 text-sm font-bold hover:scale-[1.01]"
            >
              <Linkedin size={16} />
              View Full Profile &amp; All Posts on LinkedIn
              <ExternalLink size={13} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
