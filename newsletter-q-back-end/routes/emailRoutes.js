import express from 'express';
import EmailController from '../controllers/emailController.js';

const router = express.Router();

router.post('/register-email', EmailController.registerEmail)
router.get('/get-emails', EmailController.getEmails)
router.post('/send-email', EmailController.sendEmail)

export default router;