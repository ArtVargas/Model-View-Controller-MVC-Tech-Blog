const Sequelize = require('sequelize');
require('dotenv').config(); // Import sensitive data from .env

const sequelize= process.env.JAWSDB_URL
? new Sequelize(process.env.JAWSDB_URL)
: new Sequelize(process.env.DB_NAME, process.env.Db_USER, process.env.DB_PASSWORD, { // This will be for local

host: 'localhost',
dialect: 'mysql',
dialectOptions: {
decimalNumbers: true,
},
});

module.exports = sequelize;