import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-transparent.png";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Shops", href: "/#shops" },
  { label: "Apartments", href: "/#residences" },
  { label: "Kids Zone", href: "/#kids" },
  { label: "Payment Plan", href: "/#payment-plan" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "border-b border-white/10 py-2 shadow-lg"
          : "border-b border-transparent py-4"
      }`}
      style={{
        background: scrolled ? "rgba(30, 58, 95, 0.75)" : "rgba(0, 0, 0, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease, -webkit-backdrop-filter 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="/#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="GC Royal Emporium logo"
            width={80}
            height={80}
            className={`object-contain transition-all ${scrolled ? "h-16 w-16" : "h-20 w-20"}`}
          />
          <span className="font-display text-lg tracking-wide text-foreground sm:text-xl">
            GC Royal <span className="gold-text">Emporium</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) =>
            l.label === "Payment Plan" ? (
              <div key={l.label} className="group relative">
                <button className="flex items-center gap-1 text-base font-semibold tracking-wide text-white transition-colors hover:text-gold cursor-pointer">
                  {l.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full hidden pt-4 group-hover:block">
                  <div className="flex flex-col gap-3 rounded-md border border-white/10 bg-[#1e3a5f]/95 p-4 backdrop-blur-md shadow-xl min-w-[200px]">
                    <Link to="/payment-plan/lower-ground" className="text-sm font-medium text-white transition-colors hover:text-gold">Lower Ground Floor</Link>
                    <Link to="/payment-plan/ground-floor" className="text-sm font-medium text-white transition-colors hover:text-gold">Ground Floor</Link>
                    <Link to="/payment-plan/first-floor" className="text-sm font-medium text-white transition-colors hover:text-gold">1st Floor</Link>
                    <Link to="/payment-plan/residential" className="text-sm font-medium text-white transition-colors hover:text-gold">Residential Apartments</Link>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-semibold tracking-wide text-white transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#enquire"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground transition-transform hover:scale-105 sm:inline-block"
          >
            Enquire Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-sm border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 px-6 py-4 lg:hidden"
          style={{
            background: "rgba(30, 58, 95, 0.96)",
            backdropFilter: "blur(12px) saturate(1.4)",
            WebkitBackdropFilter: "blur(12px) saturate(1.4)",
          }}
        >
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.label}>
                {l.label === "Payment Plan" ? (
                  <div>
                    <div className="block py-1 text-sm font-semibold tracking-wide text-white">
                      {l.label}
                    </div>
                    <div className="ml-4 mt-2 flex flex-col gap-3 border-l border-white/20 pl-4 mb-2">
                      <Link to="/payment-plan/lower-ground" onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 transition-colors hover:text-gold">Lower Ground Floor</Link>
                      <Link to="/payment-plan/ground-floor" onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 transition-colors hover:text-gold">Ground Floor</Link>
                      <Link to="/payment-plan/first-floor" onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 transition-colors hover:text-gold">1st Floor</Link>
                      <Link to="/payment-plan/residential" onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 transition-colors hover:text-gold">Residential Apartments</Link>
                    </div>
                  </div>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-sm font-semibold tracking-wide text-white hover:text-gold"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="/#enquire"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-sm bg-gold px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
