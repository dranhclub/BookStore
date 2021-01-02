var CartModel = require('../models/CartModel');
var ProductModel = require('../models/ProductModel');

exports.getCart = async function (req, res, next) {
  let items = req.cookies['cart'];
  if (!items) items = [];

  res.render('cart', {
    title: 'cart',
    items,
    req
  });
}

exports.getAddToCart = async (req, res) => {
  const id = req.query.id;
  const product = await ProductModel.findOne({where: {id: id}});

  let item = {
    product: {
      id: product.id,
      title: product.title,
      price: product.price,
      coverImageURL: product.coverImageURL
    },
    quantity: 1
  };

  let items = req.cookies['cart'];
  if (!items) items = [];

  items.push(item);
  res.cookie('cart', items);

  res.redirect('/cart');
}

exports.getRemoveFromCart = async (req, res) => {
  const id = req.query.id;
  let items = req.cookies['cart'];
  if (!items) items = [];
  items.splice(items.findIndex(item => item.product.id == id), 1);
  res.cookie('cart', items);
  res.redirect('/cart');
}