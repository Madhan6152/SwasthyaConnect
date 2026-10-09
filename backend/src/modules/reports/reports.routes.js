import { Router } from 'express';
import { prisma } from '../../config/prisma.js';
import { requireAuth } from '../../middleware/auth.middleware.js';
import { allowRoles } from '../../middleware/role.middleware.js';
import { asyncHandler } from '../../utils/errors.js';
const router=Router();router.use(requireAuth,allowRoles('ADMIN'));
router.get('/dashboard',asyncHandler(async(_req,res)=>{const [users,patients,doctors,healthWorkers,appointments,openRequests,pendingReferrals]=await Promise.all([prisma.user.count(),prisma.patient.count(),prisma.doctor.count(),prisma.healthWorker.count(),prisma.appointment.count(),prisma.helpRequest.count({where:{status:{in:['OPEN','IN_PROGRESS']}}}),prisma.referral.count({where:{status:'PENDING'}})]);res.json({reports:{users,patients,doctors,healthWorkers,appointments,openRequests,pendingReferrals}});}));
export default router;
