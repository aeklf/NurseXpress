const router = require('express').Router();
const driverRoutes = require('./driverRoutes');

router.use('/home', driverRoutes);

module.exports = router;