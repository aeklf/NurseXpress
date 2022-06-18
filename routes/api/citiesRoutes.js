const router = require('express').Router();
const Cities = require('../../models/Cities');

router.get('/', async (req, res)=>{
   
    const findCity = await Cities.findByPk(req.params.id);
})


module.exports = router;
