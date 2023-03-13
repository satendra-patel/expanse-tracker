const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expanse = sequelize.define('expanse', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  expanse_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  expanse_category: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  }
});

module.exports = Expanse;