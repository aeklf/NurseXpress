const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
// app.use(routes);

const User = require('./models/User')
app.post('/' , async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).send('done')
  } catch (err) {
    res.status(500).send(err);
  }
})


// turn on connection to db and server
const init = async () => {
  try {
    await sequelize.sync({force:true});
    console.log('Sucessful connection to the database');
    app.listen(PORT, () => console.log('Express web server now listening'));
  } catch (err) {
    console.log(err);
  }
}

init();
