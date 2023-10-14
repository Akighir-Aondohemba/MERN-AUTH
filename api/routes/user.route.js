import express from 'express';
import { test } from '../routes/controllers/user.controllers.js';

const router = express.Router();

router.get('/', test);


export default router;