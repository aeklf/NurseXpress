const router = require("express").router();
const Employee = require("../../models/Employee");

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

router.post('/' , async (req, res) => {
    try {
     const createEmployee =  await Employee.create(req.body);
      res.status(200).json(createEmployee);
    } catch (err) {
      res.status(500).json(err);
    }
});


module.exports = router;