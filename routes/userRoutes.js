import express from 'express';
import { currentUser, loginUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/current',currentUser);

export default router;