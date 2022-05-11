const express = require('express');
// import validate from 'express-validation';

const healthCheckController = require('../../controller/health/health.controller');
// import * as healthCheckValidator from '../controllers/user/healthCheck.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/health', healthCheckController.healthCheck);

// Sample post and joi validation example
// router.post(
//     '/health',
//     validate(healthCheckValidator.sample),
//     healthCheckController.sample,
// );

module.exports = router;