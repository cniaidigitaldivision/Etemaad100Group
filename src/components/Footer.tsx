import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="/#home" className="flex items-center gap-3">
              <img src={logo} alt="GC Royal Emporium logo" width={64} height={64} className="h-16 w-16 object-contain" />
              <span className="font-display text-xl tracking-wide text-foreground">
                GC Royal <span className="gold-text">Emporium</span>
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A landmark mixed-use development redefining retail and residential standards in Chitral.
              Where heritage meets modern luxury.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg text-foreground">Quick Links</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li><a href="/#shops" className="transition-colors hover:text-gold">Commercial Shops</a></li>
              <li><a href="/#residences" className="transition-colors hover:text-gold">Luxury Residences</a></li>
              <li><a href="/#payment-plan" className="transition-colors hover:text-gold">Payment Plans</a></li>
              <li><a href="/#location" className="transition-colors hover:text-gold">Location Map</a></li>
              <li><a href="/#enquire" className="transition-colors hover:text-gold">Book a Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-foreground">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="tel:+923307771591" className="hover:text-gold">+92 330 7771591</a>
              </li>
              <li>
                <a href="mailto:sales@gcroyalemporium.com" className="hover:text-gold">sales@gcroyalemporium.com</a>
              </li>
              <li>GC Royal Emporium Chitral<br />Near Shahi Adda Bus Stand, Krop Risht Bazar Chitral</li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="https://web.facebook.com/profile.php?id=61593589823643" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>
              <a href="https://www.instagram.com/etemaad100groups/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
              <a href="https://www.linkedin.com/company/ehtemaad-100-group/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-sm border border-border p-2 text-muted-foreground transition-colors hover:border-gold hover:text-gold"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} GC Royal Emporium. All rights reserved. Renders and figures are indicative and subject to change.
        </div>
      </div>
    </footer>
  );
}
