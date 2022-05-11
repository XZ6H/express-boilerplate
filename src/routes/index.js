const healthCheckRoute = require('./health/health.route');
const apiMiddleware = require('../middleware/apiAuth');

module.exports = (server) => {
  server.use('/api', apiMiddleware, healthCheckRoute);
};