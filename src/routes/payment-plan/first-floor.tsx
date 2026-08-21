import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";
import { Store, BedDouble } from "lucide-react";
import bg1 from "@/assets/bg1.jpeg";
import shop3 from "@/assets/shop-3.jpg";

export const Route = createFileRoute("/payment-plan/first-floor")({
  head: () => ({
    meta: [
      { title: "1st Floor Payment Plan | GC Royal Emporium" },
    ],
  }),
  component: PaymentPlanPage,
});

const otherPlans = [
  { icon: Store, label: "Lower Ground Floor", value: "PKR 25K - 35K / sq.ft", note: "35% Downpayment | 100K Instalment", link: "/payment-plan/lower-ground" },
  { icon: Store, label: "Ground Floor", value: "PKR 40K - 45K / sq.ft", note: "35% Downpayment | 100K Instalment", link: "/payment-plan/ground-floor" },
  { icon: Store, label: "1st Floor", value: "PKR 20K - 25K / sq.ft", note: "35% Downpayment | 100K Instalment", link: "/payment-plan/first-floor" },
  { icon: BedDouble, label: "Residential", value: "PKR 18.5K / sq.ft", note: "35% Downpayment | 60K Instalment", link: "/payment-plan/residential" },
].filter(p => !p.link.includes("first-floor"));

function PaymentPlanPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-navy-deep/40 backdrop-blur-sm" />
          <div className="relative mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <p className="font-display text-lg font-medium tracking-wider uppercase text-gold">
                Commercial Retail
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl text-white">
                1st Floor
              </h1>
              <span className="rule-gold mx-auto mt-6" />
            </Reveal>
          </div>
        </section>

        {/* Details Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <div className="lux-card rounded-xl overflow-hidden shadow-2xl">
                <img src={shop3} alt="1st Floor" className="w-full h-[450px] object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-4 sm:p-8">
                <h2 className="font-display text-3xl text-foreground mb-6">Investment Overview</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Per Sq. Ft. Rate</span>
                    <span className="font-semibold text-lg">PKR 20,000 – 25,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Downpayment</span>
                    <span className="font-semibold text-lg">35%</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Monthly Instalment</span>
                    <span className="font-semibold text-lg text-gold">PKR 100,000</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-muted-foreground">Remaining Amount</span>
                    <span className="font-semibold text-lg">Due on Possession</span>
                  </div>
                </div>
                
                <p className="mt-8 text-muted-foreground leading-relaxed text-[15px]">
                  The First Floor brings together family lifestyle and retail. Situated seamlessly alongside the indoor kids play zone and food concepts, these units benefit from extended dwell times and family-oriented foot traffic.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/923307771591"
                    className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3 text-sm font-bold tracking-widest uppercase text-primary-foreground transition-transform hover:scale-105 btn-shimmer"
                  >
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="/#enquire"
                    className="inline-flex items-center justify-center rounded-sm border border-gold px-8 py-3 text-sm font-bold tracking-widest uppercase text-gold transition-colors hover:bg-gold/10"
                  >
                    Contact Leasing Team
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Other Plans Preview */}
        <section className="border-t border-border bg-navy-deep py-20">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <h3 className="font-display text-2xl text-white mb-10 text-center">Explore Other Options</h3>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-3">
              {otherPlans.map((p) => (
                <Reveal key={p.label}>
                  <Link
                    to={p.link}
                    className="block rounded-xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:bg-white/10 hover:-translate-y-1 hover:border-gold/50 cursor-pointer h-full"
                  >
                    <p.icon className="mx-auto h-8 w-8 text-gold mb-4" />
                    <h4 className="font-display text-xl text-white mb-2">{p.label}</h4>
                    <p className="text-gold font-bold mb-4">{p.value}</p>
                    <div className="h-px w-8 mx-auto bg-gold/50 my-4" />
                    <p className="text-sm text-white/60">{p.note}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
