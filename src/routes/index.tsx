import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
  Youtube,
  Check,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
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
  { label: "Booking Amount", value: "XX%", note: "At the time of booking" },
  { label: "Confirmation", value: "XX%", note: "Within 30 days" },
  { label: "Quarterly Installments", value: "XX x PKR XXX,XXX", note: "Spread over XX quarters" },
  { label: "On Possession", value: "XX%", note: "At handover" },
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
      <p className="text-xs tracking-[0.35em] uppercase text-gold">{eyebrow}</p>
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
        <div className="absolute inset-0" style={{ background: "var(--gradient-veil)" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold sm:text-sm">Where Luxury Meets Opportunity</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
            GC Royal <span className="gold-text">Emporium</span>
          </h1>
          <span className="rule-gold mx-auto mt-7" />
          <p className="mx-auto mt-6 max-w-2xl font-display text-lg italic text-gold-soft sm:text-2xl">
            Where Retail Royalty Meets Modern Living
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Flagship shops, leading fashion brands, a supervised indoor kids play area and modern
            1 &amp; 2 bed apartments — all in one prime-location high-rise address.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border bg-navy-deep">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4 px-2 py-8">
              <s.icon className="h-7 w-7 shrink-0 text-gold" />
              <div>
                <p className="font-display text-xl sm:text-2xl">{s.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
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

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {shopPics.map((p, i) => (
            <Reveal key={p.caption} delay={i * 90}>
              <figure className="lux-card group overflow-hidden rounded-sm">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="px-5 py-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                  {p.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { t: "Flagship Frontages", d: "Wide, double-height storefronts facing the main road — built for anchor fashion and lifestyle brands." },
            { t: "Guaranteed Footfall", d: "Hundreds of resident families above the arcade, plus city-wide shoppers drawn to the brand mix." },
            { t: "Investor Returns", d: "High-demand retail units with strong rental yield potential and long-term capital appreciation." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 80}>
              <div className="lux-card h-full rounded-sm p-7">
                <h3 className="font-display text-xl">{c.t}</h3>
                <span className="rule-gold mt-4" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <p className="text-sm text-muted-foreground">Interested in leasing a shop?</p>
            <a
              href="#enquire"
              className="rounded-sm bg-gold px-7 py-3 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-transform hover:scale-105"
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

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {[
              { src: apt1, alt: "1 bed apartment living area interior", cap: "1 Bed Apartment" },
              { src: apt2, alt: "2 bed apartment living and dining area interior", cap: "2 Bed Apartment" },
            ].map((p, i) => (
              <Reveal key={p.cap} delay={i * 90}>
                <figure className="lux-card group overflow-hidden rounded-sm">
                  <img
                    src={p.src}
                    alt={p.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="px-5 py-4 text-xs tracking-[0.25em] uppercase text-muted-foreground">
                    {p.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mx-auto mt-14 flex w-full max-w-md rounded-sm border border-border p-1">
              {(["1bed", "2bed"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setUnit(k)}
                  className={`flex-1 rounded-sm px-4 py-3 text-sm tracking-widest uppercase transition-colors ${
                    unit === k ? "bg-gold text-primary-foreground" : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {k === "1bed" ? "1 Bed" : "2 Bed"}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="lux-card mt-10 grid overflow-hidden rounded-sm lg:grid-cols-2">
              <img
                src={unitData.img}
                alt={`${unitData.title} interior`}
                width={1280}
                height={960}
                loading="lazy"
                className="h-72 w-full object-cover lg:h-full"
              />
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
                  className="mt-8 inline-block rounded-sm bg-gold px-6 py-3 text-sm tracking-widest uppercase text-primary-foreground transition-transform hover:scale-105"
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
            <Reveal key={p.alt} delay={i * 90}>
              <img
                src={p.src}
                alt={p.alt}
                width={1280}
                height={960}
                loading="lazy"
                className="h-72 w-full rounded-sm object-cover"
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Soft Play & Ball Pit", d: "Cushioned flooring, slides and a ball pit designed for toddlers and young children." },
            { t: "Trained Supervision", d: "On-site staff and secured single-point entry so parents always know where their children are." },
            { t: "Family Seating", d: "Comfortable parent seating around the zone with clear sightlines across the play area." },
            { t: "Right Above the Shops", d: "Located on the first floor beside the fashion wing — shop, eat and play in one visit." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 70}>
              <div className="lux-card h-full rounded-sm p-6">
                <Baby className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-display text-lg">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="border-y border-border bg-navy-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Amenities"
              title="Built for Comfort, Safety & Convenience"
              subtitle="Every detail specified to modern standards — for residents, retailers and their customers alike."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {amenities.map((a, i) => (
              <Reveal key={a.label} delay={i * 60}>
                <div className="lux-card flex h-full flex-col items-center justify-center gap-3 rounded-sm p-6 text-center">
                  <a.icon className="h-7 w-7 text-gold" />
                  <p className="text-sm text-muted-foreground">{a.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
              subtitle="Positioned where retail footfall and residential demand meet — easy to reach, easy to return to."
            />
            <ul className="mt-8 space-y-4">
              {[
                "5 mins from [Main Road]",
                "10 mins from [City Landmark]",
                "Walking distance to [School / College]",
                "Close to [Hospital]",
                "Direct access to [Public Transport Route]",
                "Surrounded by established residential neighbourhoods",
              ].map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {l}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              Landmarks shown as editable placeholders — final distances to be confirmed.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="lux-card overflow-hidden rounded-sm">
              <iframe
                title="GC Royal Emporium location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.2%2C31.4%2C74.45%2C31.6&layer=mapnik"
                className="h-96 w-full border-0 grayscale"
                loading="lazy"
              />
              <p className="border-t border-border px-5 py-3 text-xs tracking-widest uppercase text-muted-foreground">
                Map placeholder — exact site pin to be added
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Payment plan */}
      <section id="payment-plan" className="border-y border-border bg-navy-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Investment"
              title="Easy Installment Plan"
              subtitle="Own a shop or an apartment on a comfortable, transparent schedule — built for salaried families and investors alike."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {plan.map((p, i) => (
              <Reveal key={p.label} delay={i * 80}>
                <div className="lux-card h-full rounded-sm p-7 text-center">
                  <p className="text-xs tracking-widest uppercase text-gold">{p.label}</p>
                  <p className="mt-4 font-display text-2xl">{p.value}</p>
                  <span className="rule-gold mx-auto mt-4" />
                  <p className="mt-4 text-sm text-muted-foreground">{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-xs text-muted-foreground">
              Figures shown as editable placeholders. Request the official payment plan from our sales team.
            </p>
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
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold" /> [Site Address], [City], Pakistan
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
                <li>[Site Address], [City], Pakistan</li>
              </ul>
              <div className="mt-5 flex gap-3">
                {[Facebook, Instagram, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social media"
                    className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} GC Royal Emporium. All rights reserved. Renders and figures
            are indicative and subject to change.
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
