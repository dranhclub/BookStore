var ProductModel = require('../models/ProductModel');
var Category = require('../models/CategoryModel');

exports.index = async function(req, res, next) {
  var products = await ProductModel.findAll({limit: 20});
  var products_1 = await (await Category.findOne({where: {name: 'Biography'}})).getProducts();
  var products_2 = await (await Category.findOne({where: {name: 'History'}})).getProducts();
  var products_3 = await (await Category.findOne({where: {name: "Children'"}})).getProducts();
  var products_4 = await (await Category.findOne({where: {name: 'Art & Design'}})).getProducts();

  res.render('index', { 
    title: 'BookStore - Home Page', 
    products: products,
    products_1,
    products_2,
    products_3,
    products_4,
    bestSeller: products,
    req
  });
}