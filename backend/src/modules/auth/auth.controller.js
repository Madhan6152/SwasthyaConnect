import { signupSchema, loginSchema } from './auth.validation.js';
import * as service from './auth.service.js';
import { asyncHandler } from '../../utils/errors.js';
export const signup = asyncHandler(async (req, res) => res.status(201).json(await service.signup(signupSchema.parse(req.body))));
export const login = asyncHandler(async (req, res) => res.json(await service.login(loginSchema.parse(req.body))));
export const me = asyncHandler(async (req, res) => res.json({ user: req.user }));
export const logout = asyncHandler(async (_req, res) => res.json({ message: 'Logout on the client by discarding the bearer token.' }));
