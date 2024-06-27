import { Resend } from 'resend';
import { db } from '../config/firebase.js';
import EmailRepository from '../repositories/emailRepository.js';

const RESEND_KEY = process.env.RESEND_KEY;

const EmailController = {
    getEmails: async (req, res) => {
        const result = await EmailRepository.getEmails(db);

        res.json(result);
        return
    },
    registerEmail: async (req, res) => {
        const { email, name } = req.body;

        const result = await EmailRepository.registerEmail(db, email, name);

        return res.json(result);
    },
    sendEmail: async (req, res) =>  {
        const {email, subject, message} = req.body;

        const resend = new Resend(RESEND_KEY);

        resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: subject,
            text: message
        }).then(response => {
            res.json(response);
        }).catch(error => {
            res.json(error);
        });
    }
}

export default EmailController;