import { z } from 'zod';
export const signupSchema = z.object({ name: z.string().trim().min(2).max(100), email: z.email().transform(v => v.toLowerCase()), password: z.string().min(10).max(128), phone: z.string().max(30).optional() });
export const loginSchema = z.object({ email: z.email().transform(v => v.toLowerCase()), password: z.string().min(1).max(128) });
