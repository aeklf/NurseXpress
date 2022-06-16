const router = require('express').Router();

const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);

module.exports = router;