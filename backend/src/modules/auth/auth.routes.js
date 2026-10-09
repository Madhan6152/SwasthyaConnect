import { Router } from 'express';
import * as controller from './auth.controller.js';
import { requireAuth } from '../../middleware/auth.middleware.js';
const router = Router();
router.post('/signup', controller.signup);
router.post('/login', controller.login);
router.post('/logout', requireAuth, controller.logout);
router.get('/me', requireAuth, controller.me);
export default router;
