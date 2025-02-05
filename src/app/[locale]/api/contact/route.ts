import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request, { params }: { params: { locale: string } }) {
  try {
    const { name, email, message } = await req.json();
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use your SMTP provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-receiving-email@example.com",
      subject: `New Contact Form Submission (${params.locale}) from ${name}`,
      text: `Locale: ${params.locale}\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
