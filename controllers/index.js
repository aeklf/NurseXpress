const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use('*', async (req, res) => {
    res.status(500).json({
        success: false,
        message: 'endpoint does not exist!'
    })
})

module.exports = router;