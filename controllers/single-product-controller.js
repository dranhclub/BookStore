var ProductModel = require('../models/ProductModel');
var CartModel = require('../models/CartModel');
var Category = require('../models/CategoryModel');
var {Op} = require('sequelize');

exports.singleProduct = async function(req, res, next) {
  var productId = req.params.id;
  var product = await ProductModel.findOne({where: {id: productId}});
  var categories = await Category.findAll({
    where: {
      name: {
        [Op.in]: product.categories
      }
    }
  });

  res.render('single-product', { 
    title: `Product title`, 
    product: product,
    categories: categories,
    req
  });
}