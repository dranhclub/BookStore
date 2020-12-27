const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookstore', 'root', '123456', {
  host: 'localhost',
  dialect:  'mysql'
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);  
  }
}

module.exports = {sequelize, connect};