const { sequelize } = require('./sequelize');
const ProductModel = require('../models/ProductModel');
const AdminUserModel = require('../models/AdminUserModel');
const CategoryModel = require('../models/CategoryModel');
const fs = require('fs');
const path = require('path');

const productExamples = JSON.parse(fs.readFileSync(path.join(__dirname, './example/books.json')))
const categoryExamples = JSON.parse(fs.readFileSync(path.join(__dirname, './example/categories.json')))
const adminUserExamples = require('./example/admin-users');


async function sync () {
  await sequelize.sync({ force: true });
  for (product of productExamples) {
    ProductModel.create({
      title: product.title,
      description: product.description,
      price: Number(product.price / 23).toFixed(2),
      coverImageURL: product.coverImage,
      imageURLs: product.otherImages,
      categories: product.categories
    });
  }
  for (user of adminUserExamples) {
    AdminUserModel.create(user);
  }
  for (category of categoryExamples) {
    CategoryModel.create({name: category});
  }
}

module.exports = sync;

