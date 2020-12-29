const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../database/sequelize');

class Product extends Model {};

Product.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  coverImageURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageURLs: {
    type: DataTypes.TEXT,
    get() {
      const data = this.getDataValue('imageURLs');
      if (data) {
        return data.split(';');
      }
      return [];
    },
    set(val) {
      this.setDataValue('imageURLs', val.join(';'));
    }
  }
}, {
  sequelize,
  tableName: 'products',
  createdAt: false,
  updatedAt: false
});

module.exports = Product;