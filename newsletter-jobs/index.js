import moment from 'moment-timezone';
import cron from 'node-cron';
import {Resend} from 'resend';

const RESEND_KEY = process.env.RESEND_KEY;

console.info(RESEND_KEY);

cron.schedule('21 19 * * *', () => {
    const saoPauloTime = moment.tz("America/Sao_Paulo").format('YYYY-MM-DD HH:mm:ss');

    console.log(`São Paulo time: ${saoPauloTime}`);

    const resend = new Resend(RESEND_KEY);

    resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: "email",
        subject: "subject",
        text: "message"
    }).then(response => {
        res.json(response);
    }).catch(error => {
        res.json(error);
    });
}, {
    scheduled: true,
    timezone: "America/Sao_Paulo"
})

console.info('Cron job scheduled');
