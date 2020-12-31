const Category = require('../models/CategoryModel');
var ProductModel = require('../models/ProductModel');

const PER_PAGE = 12;

function compact(text, maxLength) {
  if (text.length > maxLength) {
    text = text.slice(0, maxLength) + "...";
  }
  return text;
}

exports.index = async function (req, res, next) {
  const page = req.query.page ? req.query.page : 1;
  const categoryId = req.query.category;
  var products = [];
  var count = 0;

  // Filter by category
  if (categoryId) {
    const category = await Category.findOne({ where: { id: categoryId } });
    products = await category.getProducts();
    count = products.length;
    products = products.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  } else {
    products = await ProductModel.findAll({ offset: page * PER_PAGE, limit: PER_PAGE });
    count =  await ProductModel.count();
  }

  // Compact product's description
  for (let product of products) {
    product.description = compact(product.description, 300);
  }

  // List category
  const categories = await Category.findAll();
  for (cat of categories) {
    cat.count = await cat.countAmount();
  }

  res.render('shop-grid', { 
    title: 'Shop Grid', 
    count,
    page, 
    perPage: PER_PAGE, 
    products: products, 
    categories,
    req
  });
}
