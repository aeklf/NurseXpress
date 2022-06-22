const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});


//Import sequalize conecction
const sequelize = require('./config/connection');

//Import all routes
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;


app.engine('handlebars',hbs);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
const init = async () => {
  try {
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
    // await sequelize.sync({force:true});
    await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
    console.log('Successful connection to the database');
    app.listen(PORT, () => console.log('Express web server now listening'));
  } catch (err) {
    console.log(err);
  }
}

init();
