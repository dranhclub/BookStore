var conn = require('../conn');
exports.getListProducts = async () => {
  const result = await conn.query(`select * from products`);
  var products = JSON.parse(JSON.stringify(result[0]));

  for (i = 0; i < products.length; i++) {
    const result2 = await conn.query(`select * from images where product_id = ${products[i].id}`);
    const images = JSON.parse(JSON.stringify(result2[0]));
    products[i].images = [];
    for (j = 0; j < images.length; j++) {
      if (images[j].is_cover_img) {
        products[i].coverImage = images[j];
      } else {
        products[i].images.push(images[j]);
      }
    }
  }
  return products;
}