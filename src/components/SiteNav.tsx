import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shops", href: "#shops" },
  { label: "Apartments", href: "#residences" },
  { label: "Kids Zone", href: "#kids" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Payment Plan", href: "#payment-plan" },
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
        <a href="#home" className="flex items-center gap-3">
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-semibold tracking-wide text-white transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#enquire"
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
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-semibold tracking-wide text-white hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#enquire"
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
