var conn = require('../conn');
var ProductModel = require('../models/ProductModel');
var CartModel = require('../models/CartModel');
exports.singleProduct = async function(req, res, next) {
  var productId = req.params.id;
  console.log(req.query);
  var addID = req.query.id_add;
  if(addID){
    CartModel.Addtocart(addID,'');
  } 
  console.log(CartModel.getListCart(''));
  var product = await ProductModel.getProductById(productId);
  console.log("hello " + product);
  res.render('single-product', { title: `Product title`, product: product});
}