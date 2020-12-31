var CartModel = require('../models/CartModel');
var ProductModel = require('../models/ProductModel');

exports.Cart = async function (req, res, next) {
  var idremove = req.query.id
  var list = await CartModel.getListCart(''); // guest
  if (idremove) {
    CartModel.setListCart(idremove, 0);
  }
  var listProduct = [];
  var product = [];
  for (var key of Object.keys(list)) {
    console.log(key);
    var product = await ProductModel.findOne({ where: { id: key } });
    listProduct.push(product);
  }
  res.render('cart', {
    title: 'cart',
    listProduct: listProduct,
    list: list,
    req
  });
}
