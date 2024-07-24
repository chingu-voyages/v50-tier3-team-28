const express = require('express');
const { jwtCheck } = require('../middleware/jwtMiddleware');
const { getUserDashboardInfo } = require('../controllers/dashboardController');
const router = express.Router();

router.get('/', jwtCheck, getUserDashboardInfo);

module.exports = router;
