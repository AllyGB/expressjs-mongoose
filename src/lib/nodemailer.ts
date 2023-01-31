import {createTransport} from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import Mail from "nodemailer/lib/mailer";

function BuildTransport(user: string, pass: string): Mail<SMTPTransport.SentMessageInfo> {
    const transporter = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        auth: { user, pass },
        tls: {
            rejectUnauthorized: false
        },
    })
    return transporter;
}

export async function SendMail(message:string, subject: string){
    const transporter = BuildTransport(process.env.CORREO || "", process.env.KEY || "");
    const sentMail = await transporter.sendMail({
        from: "Alex González",
        to: process.env.REMITENTE || "",
        subject: subject,
        html: message,
    })
}
