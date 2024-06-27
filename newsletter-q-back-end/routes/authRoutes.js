import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();

router.get('/create-token', AuthController.createToken)

export default router;