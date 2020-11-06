var conn = require('../conn');
var ProductModel = require('../models/ProductModel');

exports.singleProduct = async function(req, res, next) {
  var productId = req.params.id;
  var product = await ProductModel.getProductById(productId);
  console.log(product);
  res.render('single-product', { title: `Product title`, product: product});
}