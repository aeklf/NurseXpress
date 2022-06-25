const router = require('express').Router();
const Cities = require('../../models/Cities');

router.get('/', async (req, res)=>{
   try{
    const findCity = await Cities.findAll();
    res.status(200).json(findCity);
   } catch(error) {
    res.status(500).json({
        success: false,
        message: error
    });
   }
})


module.exports = router;
