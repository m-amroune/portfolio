import { Resend } from "resend";



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

   const apiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;

if (!apiKey || !contactToEmail) {
  return Response.json(
    { error: "Missing email configuration" },
    { status: 500 },
  );
}

const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
     to: [contactToEmail],
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
