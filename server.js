const express = require('express');

//Import sequalize conecction
const sequelize = require('./config/connection');

//Import all routes
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);


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
