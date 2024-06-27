import { db } from '../config/firebase.js';
import stringToHash from '../utils/hash.js';
import generateUUID from '../utils/uuid.js';
import AuthRepository from '../repositories/authRepository.js';

const AuthController = {
    createToken: async (req, res) => {
        const uuid = generateUUID();

        const hashedUUID = await stringToHash(uuid);

        try {
            await AuthRepository.createToken(db, hashedUUID);

            res.status(201).send({ token: uuid });
            return;
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Internal server error' });
            return;
        }
    }
}

export default AuthController;