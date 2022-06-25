const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./servicesRoutes');
const employeeRoutes = require('./employeesRoutes');
const citiesRoutes = require('./citiesRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');

router.use('/users', userRoutes);
router.use('/services', serviceRoutes);
router.use('/employees', employeeRoutes);
router.use('/cities', citiesRoutes);
router.use('/appointments', appointmentsRoutes);

module.exports = router;