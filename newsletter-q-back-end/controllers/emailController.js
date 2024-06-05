import {db} from '../config/firebase.js';

const EmailController = {
    getEmails: async (req, res) => {
        const documentsSnap = db.collection('emails').get()

        const emails = []

        await documentsSnap.then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                emails.push(doc.data())
            })

            res.json(emails)
            return
        })
    },
    registerEmail: async (req, res) => {
        const { email, name } = req.body;

        if (!email || !name) {
            return res.status(400).json({ message: 'Email and name are required' });
        }

        await db.collection('emails').add({
            email,
            name
        }).then(() => {
            res.json({ message: 'Email e nome cadastrado com sucesso!' })
            return
        })
    }
}

export default EmailController;