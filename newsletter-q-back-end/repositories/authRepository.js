import { LATER24HOURS } from '../utils/constants.js';

const AuthRepository = {
    createToken: async (db, hash) => {
      try {
        await db.collection('tokens').add({
            hash,
            expirationDate: new Date(Date.now() + LATER24HOURS)
        });
      } catch (error) {
        console.error(error);
      }
    },
    validateToken: async (db, hash) => {
        const result = await db.collection('tokens').where('hash', '==', hash).get();
    
        if (result.empty) {
            return false;
        }
    
        const token = result.docs[0].data();
    
        if (token.expirationDate.toDate() < new Date()) {
            return false;
        }
    
        return true;
    }
}

export default AuthRepository;