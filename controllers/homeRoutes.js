const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('otro');
});

module.exports = router;