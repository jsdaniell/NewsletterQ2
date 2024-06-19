import postgres from '../config/postgres.js';
import { Resend } from 'resend';

const RESEND_KEY = "re_3jWVv2TG_2MfB6i7wuSA4XDJCUKyDG2iv"

const EmailController = {
    getEmails: async (req, res) => {
        const result = await postgres.query('SELECT * FROM emails');

        res.json(result.rows);
        return
    },
    registerEmail: async (req, res) => {
        const { email, name } = req.body;

        const result = await postgres.query('INSERT INTO emails (email, name) VALUES ($1, $2) RETURNING *', [email, name]);

        res.json(result.rows[0]);
        return
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