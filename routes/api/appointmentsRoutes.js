const router = require('express').Router();
const {Appointments, Employee, User, Cities} = require('../../models/Appointments');

router.get('/appointments' , async (req, res) => {
    
    Appointments.findAll({
        attributes: ['id', 'date', 'hour',],
        include: [
            {
            model: Employee,
            attributes: ['first_name', 'last_name']
            },

            {
            model: User,
            attributes: ['first_name', 'last_name']
            },
            {
            model: Cities,
            attributes: ['']// needs location? not lat long
            }
    ]
})
.then(appointmentsData => res.json(appointmentsData))
.catch(err => {
    console.log(err);
    res.status(500).json(err);
})
})

router.post('/appointments', async (req, res) => {
    const { employee_id, user_id, date, hour, location} = req.body;
    
})
module.exports = router;