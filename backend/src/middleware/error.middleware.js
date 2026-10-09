export function notFound(_req, res) { res.status(404).json({ error: 'Route not found' }); }
export function errorHandler(err, _req, res, _next) {
  const status = err.statusCode || (err.name === 'ZodError' ? 400 : err.code === 'P2002' ? 409 : 500);
  if (status >= 500) console.error(err);
  res.status(status).json({ error: status >= 500 ? 'Internal server error' : err.message, ...(err.name === 'ZodError' ? { details: err.issues } : {}) });
}
