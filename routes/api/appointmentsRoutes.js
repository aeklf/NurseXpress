const router = require('express').Router();
const Appointments = require('../../models/Appointments');


    
router.post('/', async (req, res) => {
    Appointments.findByPk(req.params.id)
})
module.exports = router;