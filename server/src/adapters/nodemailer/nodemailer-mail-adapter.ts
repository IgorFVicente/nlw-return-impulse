import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "5ce8ec078cad17",
        pass: "3116d64fae5da4"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: sendMailData) {

        await transport.sendMail({
            from: 'Equipe FEedget <oi@feedget.com>',
            to: 'Igor Fernandes Vicente <igorfvicente@gmail.com>',
            subject,
            html: body,
        });
    };
}