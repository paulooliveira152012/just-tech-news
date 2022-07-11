// import the Sequelize constructor from the library so we can create a new connection to the database
const Sequelize = require ('sequelize');

//import configurations from .env file
require('dotenv').config();

//create connection to our database, pass in your MYSQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;