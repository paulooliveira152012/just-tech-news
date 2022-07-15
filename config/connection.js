// import the Sequelize constructor from the library so we can create a new connection to the database
const Sequelize = require ('sequelize');

//import configurations from .env file
require('dotenv').config();

//create connection to our database, pass in your MYSQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

//export model
module.exports = sequelize;