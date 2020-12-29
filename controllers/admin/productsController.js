const ProductModel = require('../../models/ProductModel');

exports.getProductsRequest = async (req, res) => {
  const products = await ProductModel.findAll({});
  res.render('admin/products/products-table', { title: 'Products', user: req.adminUser, products: products });
}

exports.getAddProductRequest = (req, res) => {
  res.render('admin/products/add-product', {title: 'Add Product', user: req.adminUser});
}

exports.postAddProductRequest = async (req, res) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const coverImage = req.file;
  
  await ProductModel.create({title, price, description, coverImage});

  res.redirect('/admin/products');
}

exports.removeProduct = async (req, res) => {
  const id = req.params.id;
  
  await ProductModel.destroy({where: {id: id}});
  res.redirect('/admin/products');
}