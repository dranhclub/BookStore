const { DataTypes, Model, Op } = require('sequelize');
const { sequelize } = require('../database/sequelize');
const Product = require('./ProductModel');

class Category extends Model {
  async countAmount () {
    var count = 0;
    const products = await Product.findAll();
    for (let product of products) {
      for (let category of product.categories) {
        if (this.name == category) {
          count += 1;
        }
      }
    }
    return count;
  }

  async getProducts() {
    return await Product.findAll({
      where: {
        categories: {
          [Op.like]: `%${this.name}%`
        }
      }
    });
  }
}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  createdAt: false,
  updateAt: false,
  tableName: 'categories'
});

module.exports = Category;