// app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ContactFormEmail from "@/email/contact-form-email";

type Body = {
  name?: string;
  email?: string;
  message?: string;
  extra?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();
    const extra = (body.extra || "").trim();

    if (!name) return NextResponse.json({ success: false, message: "Name is required" }, { status: 400 });
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      return NextResponse.json({ success: false, message: "A valid email is required" }, { status: 400 });
    if (!message || message.length < 3) return NextResponse.json({ success: false, message: "Invalid message" }, { status: 400 });

    const ip = req.headers.get("x-forwarded-for") || "unknown";

    const emailHtml = renderToStaticMarkup(
      React.createElement(ContactFormEmail, {
        message,
        senderEmail: email,
        senderName: name,
        ip,
        extra,
      })
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Optional: useful during debugging — uncomment if you need clearer SMTP auth errors
    // await transporter.verify();

    const info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SENDER_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio contact form — message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}\n\nextra: ${extra}\nIP: ${ip}`,
      html: `<!doctype html>${emailHtml}`,
    });

    console.log("Email sent:", info);
    return NextResponse.json({ success: true, message: "Email sent" }, { status: 200 });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
