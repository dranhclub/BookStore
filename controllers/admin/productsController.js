const conn = require('../../conn');

exports.getProductsRequest = async function (req, res) {

  var result = await conn.query(`select products.*, images.is_cover_img, images.url from products, images where id = product_id and is_cover_img = 1`);
  var products = []
  for (row of result[0]) {
    products.push({
      id: row.id,
      title: row.title,
      price: row.price,
      description: row.description,
      coverImage: row.url,
      otherImages: 'bbbb'
    });
  }

  res.render('admin/products/products-table', { title: 'Products', user: req.adminUser, products: products });
}

exports.getAddProductRequest = function (req, res) {
  res.render('admin/products/add-product', {title: 'Add Product', user: req.adminUser});
}