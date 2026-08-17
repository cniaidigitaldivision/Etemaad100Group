import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

type Errors = { name?: string; phone?: string; email?: string };

export function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone))
      next.phone = "Please enter a valid phone number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSent(true);
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-sm border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none";

  if (sent) {
    return (
      <div className="lux-card flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold" />
        <h3 className="font-display text-2xl">Thank you</h3>
        <p className="max-w-md text-sm text-muted-foreground">
          Your enquiry has been received. Our sales team will get back to you within 24
          hours with availability, pricing and the full payment plan.
        </p>
        <button
          onClick={() => setSent(false)}
          className="text-sm text-gold underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="lux-card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs tracking-widest uppercase text-muted-foreground">
            Full Name *
          </label>
          <input id="name" name="name" className={field} placeholder="e.g. Ahmed Raza" maxLength={100} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs tracking-widest uppercase text-muted-foreground">
            Phone Number *
          </label>
          <input id="phone" name="phone" inputMode="tel" className={field} placeholder="03XX XXXXXXX" maxLength={20} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs tracking-widest uppercase text-muted-foreground">
            Email
          </label>
          <input id="email" name="email" className={field} placeholder="you@email.com" maxLength={255} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="interest" className="mb-1.5 block text-xs tracking-widest uppercase text-muted-foreground">
            Interested In
          </label>
          <select id="interest" name="interest" className={field} defaultValue="Shop">
            <option>Shop</option>
            <option>1 Bed Apartment</option>
            <option>2 Bed Apartment</option>
            <option>Kids Play Area Info</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs tracking-widest uppercase text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={1000}
          className={field}
          placeholder="Tell us what you're looking for — investment, family home, or retail space."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-gold px-6 py-3.5 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-transform hover:scale-[1.02]"
      >
        Submit Enquiry
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Our sales team will get back to you within 24 hours.
      </p>
    </form>
  );
}
