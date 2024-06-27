const EmailRepository = {
    getEmails: async (db) => {
        const result = await db.collection('emails').get();

        return result.docs.map(doc => doc.data());
    },
    registerEmail: async (db, email, name) => {
        const result = await db.collection('emails').add({
            email,
            name
        });

        const resultDocument = await result.get();

        return resultDocument.data();
    }
}

export default EmailRepository;