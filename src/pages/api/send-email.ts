import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';
import dotenv from 'dotenv'
dotenv.config()
const env = process.env;

export const prerender = false;
export interface IEmailRequest {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.message) {
        return new Response(
            JSON.stringify({ success: false, message: 'Faltan campos' }),
            { status: 400 }
        );
    }

    const transporter = nodemailer.createTransport({
        host: env.SMTP_HOST,
        port: Number(env.SMTP_PORT),
        auth: {
            user: env.SMTP_USER,
            pass: env.SMTP_PASS
        },
        secure: env.SMTP_SECURE === 'true',
        tls: {
            rejectUnauthorized: false
        } // <-- para evitar error del certificado autofirmado

    });

    const templatePath = path.resolve('src/templates/emails/contact-email.hbs');
    const templateSource = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(templateSource);
    const htmlContent = compiledTemplate({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        message: body.message
    });

    const mailOptions = {
        from: `"${body.firstName} ${body.lastName}" <${body.email}>`,
        to: env.TO_EMAIL,
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${body.firstName} ${body.lastName}\nEmail: ${body.email}\nTeléfono: ${body.phone}\nMensaje: ${body.message}`,
        html: htmlContent
    }

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Vista previa del correo: ${nodemailer.getTestMessageUrl(info)}`);

        return new Response(JSON.stringify({ success: true, message: 'Email enviado correctamente' }), { status: 200 });
    } catch (error) {
        console.error('Error al enviar el email:', error);
        return new Response(JSON.stringify({ success: false, message: 'Error al enviar el email' }), { status: 500 });
    }
}