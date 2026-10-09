import 'dotenv/config';
import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();
try {
  const email = process.env.SEED_ADMIN_EMAIL;
  const password = process.env.SEED_ADMIN_PASSWORD;
  if (!email || !password) {
    console.log('Skipping admin seed. Set SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD in .env to create an admin.');
  } else {
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.upsert({ where: { email }, update: {}, create: { name: 'System Admin', email, passwordHash, role: Role.ADMIN } });
    console.log('Admin account ensured.');
  }
} finally { await prisma.$disconnect(); }
