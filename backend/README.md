# SwasthyaConnect backend starter

Node.js + Express + PostgreSQL + Prisma starter API. This is a backend scaffold, not a production-certified healthcare system. Review all permissions and privacy requirements before using real patient data.

## Setup
1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL` and a random `JWT_SECRET` (32+ characters).
3. Create the PostgreSQL database named `swasthyaconnect` (or change the URL).
4. Run `npm install`.
5. Run `npx prisma generate`.
6. Run `npx prisma migrate dev --name init`.
7. Optionally set `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD` in `.env`, then run `npm run db:seed` to create an initial admin. Remove these seed variables afterward.
8. Run `npm run dev`.

API runs on `http://localhost:5000`; health check: `GET /api/health`.

## Auth
- `POST /api/auth/signup` with `{ "name", "email", "password", "phone"? }` creates a PATIENT account and patient profile.
- `POST /api/auth/login` with `{ "email", "password" }` returns `{ token, user }`.
- For protected endpoints send `Authorization: Bearer <token>`.
- Public signup intentionally cannot create ADMIN, DOCTOR, or HEALTH_WORKER accounts. Admin provisioning should be done through a controlled administrative workflow.

## API routes
- `/api/users`
- `/api/patients`
- `/api/doctors`
- `/api/health-workers`
- `/api/appointments`
- `/api/referrals`
- `/api/requests`
- `/api/reports/dashboard` (ADMIN only)

## Frontend connection
In the React frontend, use `fetch('http://localhost:5000/api/...')` or configure a Vite proxy. Add `Authorization: Bearer <token>` to protected requests. Do not put secrets in Vite environment variables; variables prefixed `VITE_` are public.

## Before production
Add rate limiting, refresh/session strategy, account recovery, audit logging for sensitive reads, stronger resource-level authorization, tests, monitoring, backups, TLS, secret management, and a privacy/security review. The included routes are a starter and need a full authorization review before real patient data is used.
