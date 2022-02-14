import express from 'express';
import roleController from '../controllers/role.js';

const router = express.Router();

router.post("/register", roleController.roleRegister);

export default router;