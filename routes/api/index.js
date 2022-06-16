// const router = require('express').Router();
// const driverRoutes = require('./driverRoutes');

// router.use('/home', driverRoutes);

// module.exports = router;


const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;