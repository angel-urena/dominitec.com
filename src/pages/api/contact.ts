import type { APIRoute } from 'astro';
import { Resend } from 'resend';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateFormData(data: unknown): { valid: true; data: ContactFormData } | { valid: false; error: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { name, email, message } = data as Record<string, unknown>;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return { valid: false, error: 'Name is required' };
  }

  if (!email || typeof email !== 'string' || !email.trim()) {
    return { valid: false, error: 'Email is required' };
  }

  if (!validateEmail(email)) {
    return { valid: false, error: 'Invalid email address' };
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return { valid: false, error: 'Message is required' };
  }

  return {
    valid: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    },
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const validation = validateFormData(body);

    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const { name, email, message } = validation.data;

    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const contactEmail = import.meta.env.CONTACT_EMAIL || 'hello@dominitec.com';

    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'Email service is not configured' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: 'Dominitec Contact Form <onboarding@resend.dev>',
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}
