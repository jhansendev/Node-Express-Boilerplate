import express from 'express';
// import userRoutes from './userRoutes';

const router = express.Router();

// Index Route
router.get('/', (req, res) => res.send('Hello World'));

// Mount other routes onto router
// router.use('/users', userRoutes);

export default router;
