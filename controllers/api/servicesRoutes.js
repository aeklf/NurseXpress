const router = require('express').Router();
const Service = require('../../models/Services');
const Employee = require('../../models/Employee');

//Get all Services
router.get('/', async (req, res) => {
    try {
        const allServices = await Service.findAll({
            include: [{model: Employee}],
        });
        res.status(200).json(allServices);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Get service by ID
router.get('/:id', async (req, res) => {
    try {
        const serviceById = await Service.findByPk(req.params.id, {
            include: [{model: Employee}],
        });
        if(!serviceById){
            res.status(404).json({message: 'No service found with this ID!'});
            return;
        }
        res.status(200).json(serviceById);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;