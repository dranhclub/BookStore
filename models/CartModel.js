const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../database/sequelize');

class Cart extends Model { }

Cart.init({
  productId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
}, {
  sequelize
});