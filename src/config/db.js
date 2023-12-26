// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rewardup_db', 'root', 'EBHC4HBBFBcdc24A53Ge-g5hH4-3BdE5', {
  host: 'roundhouse.proxy.rlwy.net',
  port:'23837',
  dialect: 'mysql',
});


try {
  sequelize.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}
module.exports = sequelize;
