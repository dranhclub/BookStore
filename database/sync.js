const { sequelize } = require('./sequelize');
const ProductModel = require('../models/ProductModel');
const AdminUserModel = require('../models/AdminUserModel');
const fs = require('fs');
const path = require('path');

const productExamples = JSON.parse(fs.readFileSync(path.join(__dirname, './example/books.json')))
const adminUserExamples = require('./example/admin-users');

async function sync () {
  await sequelize.sync({ force: true });
  for (product of productExamples) {
    ProductModel.create({
      title: product.title,
      description: product.description,
      price: Number(product.price / 23).toFixed(2),
      coverImageURL: product.coverImage,
      imageURLs: product.otherImages
    });
  }
  for (user of adminUserExamples) {
    AdminUserModel.create(user);
  }
}

module.exports = sync;

