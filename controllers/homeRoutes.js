const router = require('express').Router();

router.get('/', (req, res)=>{
    res.render('home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/user', (req, res) => {
    res.render('user');
});

router.get('/nurse', (req, res) => {
    res.render('nurse');
});

router.get('/agenda', (req, res) => {
    res.render('agenda');
});

module.exports = router;