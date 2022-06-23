const router = require('express').Router();
const Appointments = require('../../models/Appointments');


 router.get('/appointments', async (req, res) => {
    try{
        res.render('appointments');
    }catch(err){
        res.status(400).json(err)
    }
 });  


router.post('/appointments', async (req, res) => {
   await Appointments.create({
        package: req.body.service_id,
        nurse: req.body.employee_id,
        date: req.body.date,
        time: req.body.hour,
        first_name: req.body.user_id,
        last_name: req.body.user_id,
    })
   
    .then((appointmentsData) => res.status(200).json(appointmentsData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err)
    })
})
module.exports = router;