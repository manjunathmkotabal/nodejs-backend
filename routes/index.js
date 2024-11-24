import express from 'express';
import contactRoutes from './contactRoutes.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

// Register all routes under their respective base paths
router.use('/contacts', contactRoutes);
router.use('/users', userRoutes);
// Add more routes if needed in the future
// router.use('/users', userRoutes);
// router.use('/products', productRoutes);

export default router;
