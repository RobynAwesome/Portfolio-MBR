import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Monitor, Linkedin } from "lucide-react";

type Theme = "dark" | "light" | "system";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function applyTheme(t: Theme) {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    if (t === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(t);
    }
  }

  function cycleTheme() {
    const order: Theme[] = ["dark", "light", "system"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  const themeIcon = theme === "dark" ? <Moon size={16} /> : theme === "light" ? <Sun size={16} /> : <Monitor size={16} />;

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certs", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`navbar-pill led-border-outer rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "shadow-2xl shadow-black/40" : ""
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-black text-xl tracking-tight gradient-text-gold"
          >
            MB<span className="text-[#7c3aed]">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#94a3b8] hover:text-[#c9a84c] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* LinkedIn — always visible */}
            <a
              href="https://www.linkedin.com/in/mashoto-rababalela"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#c9a84c] border border-[#c9a84c]/30 hover:border-[#c9a84c]/80 hover:bg-[#c9a84c]/10 transition-all duration-200 text-xs font-semibold"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            {/* Theme toggle */}
            <button
              onClick={cycleTheme}
              aria-label={`Switch theme (current: ${theme})`}
              className="p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all duration-200"
            >
              {themeIcon}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-[#64748b] hover:text-[#c9a84c] transition-colors duration-200"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 navbar-pill rounded-2xl p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-[#94a3b8] hover:text-[#c9a84c] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/mashoto-rababalela"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#c9a84c] hover:text-[#d4b96a] transition-colors py-1"
            >
              <Linkedin size={14} />
              Connect on LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
