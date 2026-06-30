import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as ContactPayload;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.CONTACT_TO_EMAIL) {
      return Response.json({ error: "Missing recipient" }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: email.trim(),
      subject: `Message portfolio - ${name.trim()}`,
      text: `
Nom: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
