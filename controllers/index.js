const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('*', async (req, res) => {
    res.status(500).json({
        success: false,
        message: 'endpoint does not exist!'
    })
})

module.exports = router;