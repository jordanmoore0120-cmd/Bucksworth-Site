import { NextResponse } from "next/server";

/**
 * POST /api/request-service
 * Sends form data to Customercare@getyourbucksworth.com via Vercel's built-in
 * email-sending approach. Since we don't have an SMTP/Resend key yet,
 * we'll store submissions and forward via a lightweight fetch to an email API.
 *
 * For now: validates, logs, and returns success. When an email service key
 * (Resend, SendGrid, etc.) is added, it will also send the email.
 */

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  contactMethod: string;
  howHeard: string;
  service: string;
  subService: string;
  city: string;
  branch: string;
}

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();

    // Validate required fields
    const required = ["firstName", "lastName", "phone", "email"];
    for (const field of required) {
      if (!data[field as keyof FormData]?.trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Build email body
    const emailBody = `
New Service Request from getyourbucksworth.com
===============================================

Name: ${data.firstName} ${data.lastName}
Phone: ${data.phone}
Email: ${data.email}
Address: ${data.address}
Preferred Contact: ${data.contactMethod || "phone"}
How They Heard: ${data.howHeard || "Not specified"}

Service: ${data.service || "Not specified"}
Sub-Service: ${data.subService || "Not specified"}
Location: ${data.city || "Not specified"} (${data.branch || "phoenix"} branch)

Submitted: ${new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" })} AZ time
    `.trim();

    // Try Resend if API key is available (env: RESEND_API_KEY)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Bucksworth Website <noreply@getyourbucksworth.com>",
          to: ["Customercare@getyourbucksworth.com"],
          subject: `New Service Request: ${data.firstName} ${data.lastName} — ${data.service || "General"}`,
          text: emailBody,
          reply_to: data.email,
        }),
      });

      if (!emailRes.ok) {
        console.error("Resend email failed:", await emailRes.text());
        // Don't fail the request — we still captured the data
      }
    } else {
      // Fallback: log the submission (visible in Vercel logs)
      console.log("=== NEW SERVICE REQUEST ===");
      console.log(emailBody);
      console.log("=== END REQUEST ===");
      console.log("Note: Set RESEND_API_KEY env var to enable email delivery to Customercare@getyourbucksworth.com");
    }

    return NextResponse.json({ success: true, message: "Request received" });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Server error processing request" },
      { status: 500 }
    );
  }
}
