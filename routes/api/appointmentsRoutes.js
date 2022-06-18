const router = require('express').Router();
const {Appointments, Employee, User, Cities} = require('../../models/Appointments');


    
router.post('/appointments', async (req, res) => {
    Appointments.create()
})
module.exports = router;