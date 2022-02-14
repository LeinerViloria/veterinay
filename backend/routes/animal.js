import express from 'express';
import animalController from '../controllers/animal.js';

const router = express.Router();

router.post("/register", animalController.registerAnimal);

export default router;