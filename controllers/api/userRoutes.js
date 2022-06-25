const router = require('express').Router();
const User = require('../../models/User');



//Get register form
router.get('/register', async (req,res)=>{
  try{
    res.render('register');
  }catch(err){
    res.status(400).json(err)
  }
});

//Get login form
router.get('/login', async ()=>{
  try{
    res.render('login');
  }catch(err){
    res.status(400).json(err)
  }
})


//POST to create a new user
router.post('/register' , async (req, res) => {
  try {

    const newUser = req.body;
    console.log(req.body);
    await User.create(newUser);
    //Redirect user to homepage, then the user will be able to login
    res.redirect('/');
  } catch (err) {
    res.status(500).send({message:'User not created'});
  }
})


// GET to bring one user
// router.get('/:id', async (req, res) => {
//     try {
//       const userData = await User.findByPk(req.params.id);
//       if (!userData) {
//         res.status(404).json({ message: 'No user with this id!' });
//         return;
//       }
//       res.status(200).json(userData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


// POST method for user's login in route /api/users/login
router.post('/login', async (req, res) => {
  try {
    //Validate email in the DataBase
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      
      res.render('home',{error: 'Invalid Email or Password'});
        // .status(400)
      return;
    }                     
    //Validate the user's password
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.render('home',{error: 'Invalid Email or Password'});
      return;
    }
    req.session.save(()=>{
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      res.status(200).render('user');
    });
    
  } catch (err) {
    res.status(400).json(err);
  }
});


// User Logout
router.get('/logout', (req, res) => {
// When the user logs out, the session is destroyed
if (req.session.loggedIn) {
    req.session.destroy(() => {
    res.redirect('/');
  });
} else {
  res.status(404).end();
}
});

module.exports = router;