import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma.js';
import { AppError } from '../utils/errors.js';
export async function requireAuth(req, _res, next) {
  try {
    const token = req.headers.authorization?.startsWith('Bearer ') ? req.headers.authorization.slice(7) : null;
    if (!token) throw new AppError('Authentication required', 401);
    if (!process.env.JWT_SECRET) throw new AppError('Server authentication is not configured', 500);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: payload.sub }, select: { id: true, name: true, email: true, role: true, isActive: true } });
    if (!user || !user.isActive) throw new AppError('Invalid or inactive account', 401);
    req.user = user; next();
  } catch (err) { next(err instanceof AppError ? err : new AppError('Invalid or expired token', 401)); }
}
