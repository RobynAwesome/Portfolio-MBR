import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xpwzrdqv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        // Fallback to mailto
        window.location.href = `mailto:mashrababalela@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
      }
    } catch {
      window.location.href = `mailto:mashrababalela@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    }
    setLoading(false);
  }

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#7c3aed]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl mb-14 p-8 sm:p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(124,58,237,0.2) 50%, rgba(59,130,246,0.1) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <div className="absolute inset-0 animate-shimmer" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 relative z-10">
            <span className="gradient-text">Let's Work</span>{" "}
            <span className="text-[#e2e8f0]">Together</span>
          </h2>
          <p className="text-[#94a3b8] text-base sm:text-lg max-w-xl mx-auto mb-8 relative z-10">
            Whether you need a web application, growth strategy, or technical consulting —
            Mashoto is ready to make it happen.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a
              href="https://www.linkedin.com/in/mashoto-rababalela"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-[#c9a84c] text-[#080b1a] hover:bg-[#d4b96a] transition-all duration-200 hover:scale-105 shadow-lg shadow-[#c9a84c]/20"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="mailto:mashrababalela@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border border-[#7c3aed]/50 text-[#8b5cf6] hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-200 hover:scale-105"
            >
              <Mail size={16} />
              Send an Email
            </a>
          </div>
        </motion.div>

        {/* Contact info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold text-[#e2e8f0] mb-1">Get in touch</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">
                Open to freelance projects, consulting engagements, and collaboration opportunities.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">Email</p>
                  <a
                    href="mailto:mashrababalela@gmail.com"
                    className="text-sm font-medium text-[#e2e8f0] hover:text-[#c9a84c] transition-colors"
                  >
                    mashrababalela@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7c3aed]/10 border border-[#7c3aed]/20 flex items-center justify-center text-[#8b5cf6]">
                  <Linkedin size={16} />
                </div>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/mashoto-rababalela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#e2e8f0] hover:text-[#8b5cf6] transition-colors"
                  >
                    Mashoto Bayne Rababalela
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center text-[#3b82f6]">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs text-[#64748b] mb-0.5">Location</p>
                  <p className="text-sm font-medium text-[#e2e8f0]">
                    City of Cape Town, Western Cape, South Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter capture */}
            <div className="mt-2 p-4 rounded-2xl border border-[#1e2a4a] bg-[#0d1228]/60">
              <p className="text-xs font-semibold text-[#c9a84c] mb-1 uppercase tracking-wide">
                Stay in the loop
              </p>
              <p className="text-xs text-[#64748b] mb-3">
                Subscribe for updates on new projects and insights.
              </p>
              <form
                action="https://formspree.io/f/xpwzrdqv"
                method="POST"
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="newsletter_email"
                  placeholder="your@email.com"
                  className="flex-1 text-xs px-3 py-2 rounded-lg bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/50"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-semibold hover:bg-[#c9a84c]/30 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#0d1228]/80 border border-[#1e2a4a] rounded-3xl p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 flex items-center justify-center mb-4">
                    <Send size={24} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#e2e8f0] mb-2">Message sent!</h3>
                  <p className="text-[#64748b] text-sm">
                    Mashoto will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-xs text-[#c9a84c] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-1.5 uppercase tracking-wide">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#64748b] mb-1.5 uppercase tracking-wide">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#64748b] mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080b1a] border border-[#1e2a4a] text-[#e2e8f0] placeholder-[#475569] focus:outline-none focus:border-[#c9a84c]/60 transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm bg-[#c9a84c] text-[#080b1a] hover:bg-[#d4b96a] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#c9a84c]/20"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
