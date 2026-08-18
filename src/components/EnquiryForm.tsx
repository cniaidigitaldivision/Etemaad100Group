import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { enquirySchema, type EnquirySchema } from "../lib/schemas";
import { sendEnquiryFn } from "../actions/enquiry";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquirySchema>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      interest: "Shop",
      email: "",
      message: "",
      honeypot: "",
    },
  });

  async function onSubmit(data: EnquirySchema) {
    setError(null);
    try {
      const response = await sendEnquiryFn({ data });
      if (response.success) {
        setSent(true);
        reset();
      } else {
        setError(
          response.error ||
            "Failed to send enquiry. Please contact us via phone at +92 000 0000000."
        );
      }
    } catch (err: any) {
      console.error(err);
      setError(
        "An unexpected error occurred. Please contact us via phone at +92 000 0000000."
      );
    }
  }

  const fieldClass =
    "w-full rounded-md border border-border bg-secondary px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-shadow focus:shadow-[0_0_15px_rgba(193,160,98,0.2)] disabled:opacity-50";

  if (sent) {
    return (
      <div
        className="flex flex-col items-center gap-4 p-10 text-center"
        style={{
          background: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(212, 175, 55, 0.2)",
          borderRadius: "12px",
        }}
      >
        <CheckCircle2 className="h-10 w-10 text-gold" />
        <h3 className="font-display text-2xl">Thank you!</h3>
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative space-y-4 p-6 sm:p-8"
      style={{
        background: "rgba(15, 23, 42, 0.6)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(212, 175, 55, 0.2)",
        borderRadius: "12px",
      }}
    >
      {/* Honeypot field - visually hidden */}
      <div
        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
        aria-hidden="true"
      >
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs tracking-widest uppercase text-white/80"
          >
            Full Name *
          </label>
          <input
            id="name"
            className={fieldClass}
            placeholder="e.g. Ahmed Raza"
            maxLength={100}
            {...register("name")}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs tracking-widest uppercase text-white/80"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            inputMode="tel"
            className={fieldClass}
            placeholder="03XX XXXXXXX"
            maxLength={20}
            {...register("phone")}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs tracking-widest uppercase text-white/80"
          >
            Email
          </label>
          <input
            id="email"
            className={fieldClass}
            placeholder="you@email.com"
            maxLength={255}
            {...register("email")}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="interest"
            className="mb-1.5 block text-xs tracking-widest uppercase text-white/80"
          >
            Interested In
          </label>
          <select
            id="interest"
            className={fieldClass}
            {...register("interest")}
            disabled={isSubmitting}
          >
            <option value="Shop">Shop</option>
            <option value="1 Bed Apartment">1 Bed Apartment</option>
            <option value="2 Bed Apartment">2 Bed Apartment</option>
            <option value="Kids Play Area Info">Kids Play Area Info</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs tracking-widest uppercase text-white/80"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={1000}
          className={fieldClass}
          placeholder="Tell us what you're looking for — investment, family home, or retail space."
          {...register("message")}
          disabled={isSubmitting}
        />
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-gradient-to-r from-[#c1a062] to-[#e8c97a] px-6 py-4 text-sm font-bold tracking-widest uppercase text-[#060b1a] transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(193,160,98,0.4)] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none"
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Our sales team will get back to you within 24 hours.
      </p>
    </form>
  );
}
