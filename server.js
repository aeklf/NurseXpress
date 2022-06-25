//Import libraries
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');

//Import connection to DataBase
const sequelize = require('./config/connection');

//Import controllers
const routes = require('./controllers/index');

const hbs = exphbs.create({});
const app = express();
const PORT = process.env.PORT || 3001;

//Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUnitialized: false,
};
//Middleware allows us to have access to req.session
app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
const init = async () => {
  try {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    await sequelize.sync({force:false});
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    console.log('Successful connection to the database');
    app.listen(PORT, () => console.log('Express web server now listening'));
  } catch (err) {
    console.log(err);
  }
}

init();
