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

exports.getProductById = async (id) => {
  const result = await conn.query(`select * from products where id=${id}`);
  var product = JSON.parse(JSON.stringify(result[0]));
  product = product[0];
  const result2 = await conn.query(`select * from images where product_id = ${product.id}`);
  const images = JSON.parse(JSON.stringify(result2[0]));
  product.images = [];
  for (j = 0; j < images.length; j++) {
    if (images[j].is_cover_img) {
      product.coverImage = images[j];
    } else {
      product.images.push(images[j]);
    }
  }
  return product;
}

exports.addProduct = async (book) => {
  console.log(book);
  await conn.query(
    `insert into products(title, price, description) values
      (N'${book.title}', ${book.price},  N'${book.description}');`
  );
  var result = await conn.query(`select id from products order by id desc limit 1`);
  var product_id = JSON.parse(JSON.stringify(result[0]));
  var sql = `
    insert into images(product_id, is_cover_img, url) values
    (${product_id[0].id}, 1, 'images/uploads/${book.coverImage.filename}')
  `;
  console.log(sql);
  await conn.query(sql);
}