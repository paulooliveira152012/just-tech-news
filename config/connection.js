// import the Sequelize constructor from the library so we can create a new connection to the database
const Sequelize = require ('sequelize');

//import configurations from .env file
require('dotenv').config();

//create connection to our database, pass in your MYSQL information for username and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

//export model
module.exports = sequelize;