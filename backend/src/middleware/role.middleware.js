import { AppError } from '../utils/errors.js';
export const allowRoles = (...roles) => (req, _res, next) => {
  if (!req.user || !roles.includes(req.user.role)) return next(new AppError('Forbidden: insufficient permissions', 403));
  next();
};
