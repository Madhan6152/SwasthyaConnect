import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { requireAuth } from '../../middleware/auth.middleware.js';
import { allowRoles } from '../../middleware/role.middleware.js';
import { asyncHandler, AppError } from '../../utils/errors.js';
const router = Router();
router.get('/me', requireAuth, asyncHandler(async (req,res) => res.json({ user: req.user })));
router.get('/', requireAuth, allowRoles('ADMIN'), asyncHandler(async (_req,res) => {
 const users = await prisma.user.findMany({ select:{ id:true,name:true,email:true,role:true,phone:true,isActive:true,createdAt:true }, orderBy:{createdAt:'desc'}, take:200 }); res.json({ users });
}));
router.patch('/:id/active', requireAuth, allowRoles('ADMIN'), asyncHandler(async (req,res) => {
 if (req.params.id === req.user.id) throw new AppError('You cannot deactivate your own account', 400);
 const { isActive } = req.body; if (typeof isActive !== 'boolean') throw new AppError('isActive must be a boolean', 400);
 const user = await prisma.user.update({ where:{id:req.params.id}, data:{isActive}, select:{id:true,name:true,email:true,role:true,isActive:true} }); res.json({user});
}));
export default router;
