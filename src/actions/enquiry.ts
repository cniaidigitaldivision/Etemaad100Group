import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { enquirySchema } from "../lib/schemas";

export const sendEnquiryFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    if (data.honeypot) {
      // Spam detected, fail silently
      return { success: true };
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      const emailHtml = `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email || "N/A"}</p>
        <p><strong>Interested In:</strong> ${data.interest}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "N/A"}</p>
      `;

      await resend.emails.send({
        from: "onboarding@resend.dev", 
        to: "laraibrafique090@gmail.com",
        subject: `New Enquiry - ${data.interest} - ${data.name}`,
        html: emailHtml,
      });

      return { success: true };
    } catch (error: any) {
      console.error("Failed to send email", error);
      return { success: false, error: error.message || "Failed to send email" };
    }
  });
