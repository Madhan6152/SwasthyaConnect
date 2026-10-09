import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../../config/prisma.js';
import { AppError } from '../../utils/errors.js';
export async function signup(input) {
  const passwordHash = await bcrypt.hash(input.password, 12);
  const user = await prisma.user.create({ data: { name: input.name, email: input.email, passwordHash, phone: input.phone, role: 'PATIENT', patient: { create: {} } }, select: { id: true, name: true, email: true, role: true } });
  return { user };
}
export async function login({ email, password }) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !user.isActive || !(await bcrypt.compare(password, user.passwordHash))) throw new AppError('Invalid email or password', 401);
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) throw new AppError('JWT_SECRET must be set to a random value of at least 32 characters', 500);
  const token = jwt.sign({}, process.env.JWT_SECRET, { subject: user.id, expiresIn: '2h', issuer: 'swasthyaconnect-api' });
  return { token, user: { id: user.id, name: user.name, email: user.email, role: user.role } };
}
