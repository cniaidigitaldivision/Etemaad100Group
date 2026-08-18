import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlideUp, staggerContainer, staggerChild, viewportOnce } from "@/lib/motion";
import {
  Building2,
  Store,
  BedDouble,
  MapPin,
  ShieldCheck,
  ArrowUpDown,
  Zap,
  Car,
  Cctv,
  Flame,
  ShoppingBag,
  Baby,
  Moon,
  Sun,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Check,
  Percent,
  CalendarDays,
  Calculator,
  KeyRound,
} from "lucide-react";

import { Reveal, RevealChild } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { EnquiryForm } from "@/components/EnquiryForm";
import logo from "@/assets/logo-transparent.png";
import heroVideo from "@/assets/hero.mp4.asset.json";
import towerImg from "@/assets/tower.jpg";
import shop1 from "@/assets/shop-1.jpg";
import shop2 from "@/assets/shop-2.jpg";
import shop3 from "@/assets/shop-3.jpg";
import apt1 from "@/assets/apt-1bed.jpg";
import apt2 from "@/assets/apt-2bed.jpg";
import kids1 from "@/assets/kids-1.jpg";
import kids2 from "@/assets/kids-2.jpg";
import bg1 from "@/assets/bg1.jpeg";

const WHATSAPP = "https://wa.me/920000000000";
const PHONE = "tel:+920000000000";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GC Royal Emporium | Shops & 1–2 Bed Apartments" },
      {
        name: "description",
        content:
          "GC Royal Emporium — a landmark mixed-use high-rise with a premium retail arcade, kids play area and modern 1 & 2 bed apartments. Reserve your unit today.",
      },
      { property: "og:title", content: "GC Royal Emporium | Where Retail Royalty Meets Modern Living" },
      {
        property: "og:description",
        content:
          "Premium retail on the ground and first floors, modern 1 & 2 bed residences above. Easy installment plans for buyers and investors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Building2, value: "XX", label: "Total Floors" },
  { icon: Store, value: "XXX+", label: "Shops Available" },
  { icon: BedDouble, value: "1 & 2 Bed", label: "Apartments" },
  { icon: MapPin, value: "Prime", label: "City Location" },
];

const shopPics = [
  { src: shop1, alt: "Luxury retail arcade with illuminated flagship storefronts", caption: "Ground Floor Arcade" },
  { src: shop2, alt: "Premium fashion boutique interior with gold detailing", caption: "Fashion Boutiques" },
  { src: shop3, alt: "Grand mall atrium with escalators and flagship stores", caption: "Double-Height Atrium" },
];

const amenities = [
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: ArrowUpDown, label: "High-Speed Elevators" },
  { icon: Zap, label: "Backup Power / Generator" },
  { icon: Car, label: "Dedicated Parking" },
  { icon: Cctv, label: "CCTV Surveillance" },
  { icon: Flame, label: "Fire Safety Systems" },
  { icon: ShoppingBag, label: "Retail Arcade" },
  { icon: Baby, label: "Kids Play Area" },
  { icon: Moon, label: "Prayer Area" },
  { icon: Sun, label: "Rooftop Community Space" },
];

const plan = [
  { icon: Percent, label: "Booking Amount", value: "XX%", note: "At the time of booking" },
  { icon: CalendarDays, label: "Confirmation", value: "XX%", note: "Within 30 days" },
  { icon: Calculator, label: "Quarterly Installments", value: "XX x PKR XXX,XXX", note: "Spread over XX quarters" },
  { icon: KeyRound, label: "On Possession", value: "XX%", note: "At handover" },
];

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="font-display text-lg font-medium tracking-wider capitalize text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">{title}</h2>
      <span className={`rule-gold mt-6 ${center ? "mx-auto" : ""}`} />
      {subtitle && <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  );
}

function Index() {
  const [unit, setUnit] = useState<"1bed" | "2bed">("1bed");

  const unitData = {
    "1bed": {
      title: "1 Bed Apartment",
      size: "XXX sq. ft.",
      img: apt1,
      blurb:
        "A smart, efficient home for young families, professionals and investors seeking strong rental demand in a retail-anchored address.",
      features: [
        "Modern fitted kitchen",
        "Private balcony",
        "Ample natural light",
        "Premium fittings & finishes",
        "High-speed elevator access",
        "24/7 security & CCTV",
      ],
    },
    "2bed": {
      title: "2 Bed Apartment",
      size: "XXX sq. ft.",
      img: apt2,
      blurb:
        "A generous family residence with separated living and sleeping zones — everyday shopping, play and school runs made simple.",
      features: [
        "Spacious family living area",
        "Two well-proportioned bedrooms",
        "Modern kitchen with utility space",
        "Balcony with city views",
        "Premium fittings & finishes",
        "Dedicated parking access",
      ],
    },
  }[unit];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          poster={towerImg}
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))" }} />

        <motion.div
          className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.18, 0.25)}
        >
          <motion.p
            className="mx-auto max-w-2xl font-display text-lg italic text-gold-soft sm:text-2xl"
            variants={heroSlideUp(0)}
          >
            Where Luxury Meets Opportunity
          </motion.p>
          <motion.h1
            className="mt-5 font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl"
            variants={heroSlideUp(0)}
          >
            Eteemad 100 <br /><span className="gold-text">Groups</span>
          </motion.h1>
          <motion.span
            className="rule-gold mx-auto mt-7"
            variants={heroSlideUp(0)}
          />
          <motion.p
            className="mx-auto mt-6 max-w-2xl font-display text-lg italic text-gold-soft sm:text-2xl"
            variants={heroSlideUp(0)}
          >
            Where Retail Royalty Meets Modern Living
          </motion.p>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white sm:text-base"
            variants={heroSlideUp(0)}
          >
            Flagship shops, leading fashion brands, a supervised indoor kids play area and modern
            1 &amp; 2 bed apartments — all in one prime-location high-rise address.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-navy-deep">
        <motion.div
          className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ ...viewportOnce, amount: 0.2 }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="flex items-center gap-4 px-2 py-8"
              variants={staggerChild}
            >
              <s.icon className="h-7 w-7 shrink-0 text-gold" />
              <div>
                <p className="font-display text-xl sm:text-2xl">{s.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Shops */}
      <section id="shops" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionTitle
            eyebrow="Retail Arcade"
            title="Luxury Shops on the Ground & First Floors"
            subtitle="Two full floors of retail designed for footfall — double-height flagship frontages below and a curated fashion wing above, home to Pakistan's leading brands."
          />
        </Reveal>

        <Reveal stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {shopPics.map((p) => (
            <RevealChild key={p.caption}>
              <figure className="lux-card group rounded-sm overflow-hidden">
                <div className="img-overlay">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="px-5 py-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </RevealChild>
          ))}
        </Reveal>

        <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { t: "Flagship Frontages", d: "Wide, double-height storefronts facing the main road — built for anchor fashion and lifestyle brands." },
            { t: "Guaranteed Footfall", d: "Hundreds of resident families above the arcade, plus city-wide shoppers drawn to the brand mix." },
            { t: "Investor Returns", d: "High-demand retail units with strong rental yield potential and long-term capital appreciation." },
          ].map((c) => (
            <RevealChild key={c.t}>
              <div className="glass-feature-card h-full rounded-[8px] p-7">
                <h3 className="font-display text-xl text-white drop-shadow-md">{c.t}</h3>
                <span className="rule-gold mt-4" />
                <p className="mt-4 text-sm leading-relaxed text-[#E2E8F0] drop-shadow-sm">{c.d}</p>
              </div>
            </RevealChild>
          ))}
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <p className="text-sm text-muted-foreground">Interested in leasing a shop?</p>
            <a
              href="#enquire"
              className="btn-shimmer rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-transform hover:scale-105"
            >
              Contact Our Leasing Team
            </a>
          </div>
        </Reveal>
      </section>

      {/* Apartments */}
      <section id="residences" className="border-y border-border bg-navy-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle
              eyebrow="The Residences"
              title="Modern 1 & 2 Bed Apartments"
              subtitle="Thoughtfully planned homes on the upper floors — private, secure and lifted above the retail arcade below."
            />
          </Reveal>

          <Reveal stagger className="mt-14 grid gap-5 lg:grid-cols-2">
            {[
              { src: apt1, alt: "1 bed apartment living area interior", cap: "1 Bed Apartment" },
              { src: apt2, alt: "2 bed apartment living and dining area interior", cap: "2 Bed Apartment" },
            ].map((p) => (
              <RevealChild key={p.cap}>
                <figure className="lux-card group rounded-sm overflow-hidden">
                  <div className="img-overlay">
                    <img
                      src={p.src}
                      alt={p.alt}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="px-5 py-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                    {p.cap}
                  </figcaption>
                </figure>
              </RevealChild>
            ))}
          </Reveal>

          <Reveal>
            <div className="mx-auto mt-14 flex w-full max-w-md rounded-sm border border-border p-1">
              {(["1bed", "2bed"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setUnit(k)}
                  className={`flex-1 rounded-sm px-4 py-3 text-sm tracking-widest uppercase transition-colors ${unit === k ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-gold"
                    }`}
                >
                  {k === "1bed" ? "1 Bed" : "2 Bed"}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="lux-card mt-10 grid overflow-hidden rounded-sm lg:grid-cols-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={unit}
                  className="img-overlay"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={unitData.img}
                    alt={`${unitData.title} interior`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-72 w-full object-cover lg:h-full"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="p-8 sm:p-10">
                <h3 className="font-display text-3xl">{unitData.title}</h3>
                <p className="mt-2 text-sm tracking-widest uppercase text-gold">Approx. {unitData.size}</p>
                <span className="rule-gold mt-5" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{unitData.blurb}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {unitData.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#enquire"
                  className="btn-shimmer mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-transform hover:scale-105"
                >
                  Check Availability
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Kids play area */}
      <section id="kids" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionTitle
            eyebrow="Family Lifestyle"
            title="Indoor Kids Play Zone"
            subtitle="A safe, supervised play world on the first floor — children play happily while parents shop in comfort, just an elevator ride from home."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {[
            { src: kids1, alt: "Indoor kids play zone with slides and ball pit inside the mall" },
            { src: kids2, alt: "Children climbing a soft play structure in the family zone" },
          ].map((p, i) => (
            <Reveal key={p.alt} delay={i * 0.15}>
              <div className="img-overlay rounded-sm">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Soft Play & Ball Pit", d: "Cushioned flooring, slides and a ball pit designed for toddlers and young children." },
            { t: "Trained Supervision", d: "On-site staff and secured single-point entry so parents always know where their children are." },
            { t: "Family Seating", d: "Comfortable parent seating around the zone with clear sightlines across the play area." },
            { t: "Right Above the Shops", d: "Located on the first floor beside the fashion wing — shop, eat and play in one visit." },
          ].map((c) => (
            <RevealChild key={c.t}>
              <div className="glass-feature-card h-full rounded-[8px] p-6">
                <Baby className="h-6 w-6 text-gold drop-shadow-md" />
                <h3 className="mt-4 font-display text-lg text-white drop-shadow-md">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#E2E8F0] drop-shadow-sm">{c.d}</p>
              </div>
            </RevealChild>
          ))}
        </Reveal>
      </section>

      {/* Amenities */}
      <section id="amenities" className="relative overflow-hidden border-y border-border bg-navy-deep py-24 sm:py-32">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c1a062' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/svg%3E\")" 
          }} 
        />
        {/* Soft radial ambient glow */}
        <div 
          className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(193,160,98,0.2) 0%, rgba(30,58,95,0.4) 50%, transparent 80%)"
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Amenities"
              title="Built for Comfort, Safety & Convenience"
              subtitle="Every detail specified to modern standards — for residents, retailers and their customers alike."
            />
          </Reveal>
          <Reveal stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {amenities.map((a) => (
              <RevealChild key={a.label}>
                <div className="lux-card flex h-full flex-col items-center justify-center gap-3 rounded-sm p-6 text-center">
                  <a.icon className="h-7 w-7 text-gold" />
                  <p className="text-sm text-muted-foreground">{a.label}</p>
                </div>
              </RevealChild>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              center={false}
              eyebrow="Location"
              title="Prime Connectivity, Everyday Convenience"
              subtitle="Positioned at the heart of Krop Risht Bazar, near Shahi Adda Bus Stand — easy to reach, easy to return to."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Near Shahi Adda Bus Stand, Chitral",
                "Krop Risht Bazar, Chitral City Centre",
                "Walking distance from key transport hubs",
                "Surrounded by established commercial zones",
                "Easy access from all directions within Chitral",
                "Prime retail & residential catchment area",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {l}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            {/* Responsive Google Maps wrapper */}
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 0 0 1px rgba(193,160,98,0.25), 0 8px 32px rgba(0,0,0,0.45)",
              }}
            >
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  title="GC Royal Emporium location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d808.4146323587878!2d71.78692974423029!3d35.857375751424705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db5300121e8919%3A0x14fc45062b66704b!2sGC%20ROYAL%20Emporium!5e0!3m2!1sen!2s!4v1787047022133!5m2!1sen!2s"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              {/* Address + Directions */}
              <div
                style={{
                  background: "rgba(10,15,31,0.95)",
                  borderTop: "1px solid rgba(193,160,98,0.2)",
                  padding: "16px 20px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    GC Royal Emporium Chitral,<br />
                    Near Shahi Adda Bus Stand,<br />
                    Krop Risht Bazar Chitral
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/place/GC+ROYAL+Emporium"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 18px",
                    borderRadius: "6px",
                    background: "linear-gradient(135deg, #c1a062, #e8c97a)",
                    color: "#0a0f1f",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <MapPin className="h-3 w-3" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Payment plan — parallax */}
      <section
        id="payment-plan"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Cool-toned light frosted overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(100,116,139,0.35) 0%, rgba(100,116,139,0.25) 50%, rgba(100,116,139,0.35) 100%)",
            backdropFilter: "blur(2px)",
          }}
        />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 font-display text-lg font-medium tracking-wider capitalize text-gold">
                Investment
              </p>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#f5f0e8",
                  marginBottom: "20px",
                }}
              >
                Easy Installment Plan
              </h2>
              <span className="rule-gold mx-auto" />
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  lineHeight: 1.75,
                  color: "rgba(235, 230, 220, 0.95)",
                }}
              >
                Own a shop or an apartment on a comfortable, transparent schedule —{" "}
                built for salaried families and investors alike.
              </p>
            </div>
          </Reveal>

          {/* Plan cards */}
          <Reveal stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {plan.map((p) => (
              <RevealChild key={p.label}>
                <div
                  style={{
                    background: "rgba(6,11,26,0.72)",
                    border: "1px solid rgba(193,160,98,0.30)",
                    borderRadius: "14px",
                    padding: "32px 24px",
                    textAlign: "center",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(193,160,98,0.12)",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(193,160,98,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(193,160,98,0.12)";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(193,160,98,0.12)",
                      border: "1px solid rgba(193,160,98,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                    }}
                  >
                    <p.icon style={{ width: "20px", height: "20px", color: "#c1a062" }} />
                  </div>

                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      color: "#c1a062",
                      marginBottom: "12px",
                    }}
                  >
                    {p.label}
                  </p>
                  <p
                    className="font-display"
                    style={{ fontSize: "1.6rem", fontWeight: 700, color: "#f5f0e8", lineHeight: 1.2 }}
                  >
                    {p.value}
                  </p>
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "linear-gradient(90deg, transparent, #c1a062, transparent)",
                      margin: "14px auto",
                    }}
                  />
                  <p style={{ fontSize: "0.8rem", color: "rgba(200,190,175,0.75)" }}>{p.note}</p>
                </div>
              </RevealChild>
            ))}
          </Reveal>

          {/* Fine print + CTA */}
          <Reveal>
            <div className="mt-12 text-center">
              <a
                href="#enquire"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 36px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #c1a062 0%, #e8c97a 50%, #c1a062 100%)",
                  backgroundSize: "200% auto",
                  color: "#060b1a",
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 4px 24px rgba(193,160,98,0.35)",
                  transition: "background-position 0.4s ease, box-shadow 0.3s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundPosition = "right center";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 36px rgba(193,160,98,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundPosition = "left center";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(193,160,98,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Request Official Plan
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Book now */}
      <section id="enquire" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              center={false}
              eyebrow="Book Now"
              title="Reserve Your Shop or Apartment"
              subtitle="Tell us what you're looking for and our team will share availability, pricing and the full installment plan."
            />
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <a href={PHONE} className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> +92 000 0000000
              </a>
              <a href="mailto:sales@gcroyalemporium.com" className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> sales@gcroyalemporium.com
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>GC Royal Emporium Chitral<br />Near Shahi Adda Bus Stand, Krop Risht Bazar Chitral</span>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-navy-deep">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="GC Royal Emporium logo"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 object-contain"
                />
                <span className="font-display text-lg">
                  GC Royal <span className="gold-text">Emporium</span>
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Where retail royalty meets modern living — shops, apartments and family lifestyle in
                one address.
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold">Quick Links</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  ["Home", "#home"],
                  ["Shops", "#shops"],
                  ["Apartments", "#residences"],
                  ["Kids Zone", "#kids"],
                  ["Amenities", "#amenities"],
                  ["Location", "#location"],
                  ["Payment Plan", "#payment-plan"],
                  ["Book Now", "#enquire"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-gold">Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href={PHONE} className="hover:text-gold">
                    +92 000 0000000
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@gcroyalemporium.com" className="hover:text-gold">
                    sales@gcroyalemporium.com
                  </a>
                </li>
                <li>GC Royal Emporium Chitral<br />Near Shahi Adda Bus Stand, Krop Risht Bazar Chitral</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://web.facebook.com/profile.php?id=61593589823643"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/etemaad100groups/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@ehtemaad100group"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.78 1.52V6.83a4.85 4.85 0 01-1.01-.14z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/ehtemaad-100-group/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} GC Royal Emporium. All rights reserved. Renders and figures
            are indicative and subject to change.
          </div>
        </div>
      </footer>

    </div>
  );
}
