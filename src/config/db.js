// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('booking_database', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
