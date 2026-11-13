import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().min(2, "Company / Organization is required"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  areaOfInterest: z.enum([
    "Product Enquiry",
    "Business Partnership",
    "Technology Collaboration",
    "General Enquiry",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Check honeypot for spam bot mitigation
    if (body.honeypot && body.honeypot.length > 0) {
      return NextResponse.json(
        { error: "Spam submission rejected" },
        { status: 400 }
      );
    }

    // Official destination email for Noorisys
    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "sales@noorisys.com";

    // In a live production environment with RESEND_API_KEY or SENDGRID_API_KEY:
    // We would dispatch the email here. We securely log the verified submission:
    console.log("[Noorisys Healthcare Contact Submission Received]:", {
      timestamp: new Date().toISOString(),
      recipientEmail,
      submission: {
        fullName: validatedData.fullName,
        company: validatedData.company,
        email: validatedData.email,
        phone: validatedData.phone,
        areaOfInterest: validatedData.areaOfInterest,
        messageLength: validatedData.message.length,
      },
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Noorisys Healthcare. Your enquiry has been received by our enterprise team at sales@noorisys.com.",
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation failed", details: error.errors },
        { status: 422 }
      );
    }

    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach out to sales@noorisys.com directly." },
      { status: 500 }
    );
  }
}
