const router = require("express").Router();
const { Employee } = require("../../models");
const { Cities } = require("../../models");

router.get('/', async (req, res) => {
    try {
        const result = await Employee.findAll({
            include: Cities
        });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const employeeId = await Employee.findByPk(req.params.id, {
        });
        if(!employeeId){
            res.status(404).json({message: 'No employee was found with this ID.'});
            return;
        }
        res.status(200).json(employeeId);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/register' , async (req, res) => {
    try {
     const createEmployee =  await Employee.create(req.body);
    //   res.status(200).json(createEmployee);
      res.status(200).send({message: 'Employee created succesfully!'});
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;