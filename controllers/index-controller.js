var ProductModel = require('../models/ProductModel');

exports.index = async function(req, res, next) {
  var products = await ProductModel.findAll({limit: 20});
  const MAX_LENGTH = 300;
  for (i = 0; i < products.length; i++) { 
    if (products[i].description.length > MAX_LENGTH) {
      products[i].description = products[i].description.slice(0, MAX_LENGTH) + "...";
    }
  }
  res.render('index', { title: 'BookStore - Home Page', products: products});
}