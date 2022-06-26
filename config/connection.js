const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(
  'mysql://bac205d3a0a037:e1dc3303@us-cdbr-east-05.cleardb.net/heroku_616480eb9e4f468?reconnect=true',
  {
   
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;