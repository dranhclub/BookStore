var express = require('express');
var router = express.Router();
var myAccountController = require('../controllers/my-account');
var shopGridController = require('../controllers/shop-grid-controller');
var indexController = require('../controllers/index-controller');
var singleProductController = require('../controllers/single-product-controller');
var cartController = require('../controllers/cart-controller');

/* GET COOKIES */
router.use((req, res, next) => {
  const user = req.cookies['user'];
  req.user = user
  next();
});

/* GET home page. */
router.get('/', indexController.index);
router.get('/index', indexController.index);

/* Authentication */
router.get('/my-account', myAccountController.index);
router.post('/my-account/login', myAccountController.login);
router.post('/my-account/register', myAccountController.register);
router.get('/logout', myAccountController.logout);

router.get('/shop-grid', shopGridController.index);
router.get('/single-product/:id', singleProductController.singleProduct);

/* Cart & checkout */
router.get('/cart', cartController.getCart);
router.get('/cart/add', cartController.getAddToCart);
router.get('/cart/remove', cartController.getRemoveFromCart);
router.get('/checkout', function (req, res, next) {
  res.render('checkout', {
    title: 'checkout',
    req
  });
});

/* Others */
router.get('/about', function (req, res, next) {
  res.render('about', {
    title: 'about',
    req
  });
});

router.get('/blog-details', function (req, res, next) {
  res.render('blog-details', {
    title: 'blog-details',
    req
  });
});

router.get('/blog', function (req, res, next) {
  res.render('blog', {
    title: 'blog',
    req
  });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', {
    title: 'contact',
    req
  });
});

router.get('/faq', function (req, res, next) {
  res.render('faq', {
    title: 'faq',
    req
  });
});

router.get('/portfolio-details', function (req, res, next) {
  res.render('portfolio-details', {
    title: 'portfolio-details',
    req
  });
});

router.get('/portfolio', function (req, res, next) {
  res.render('portfolio', {
    title: 'portfolio',
    req
  });
});

router.get('/team', function (req, res, next) {
  res.render('team', {
    title: 'team', req
  });
});

router.get('/wishlist', function (req, res, next) {
  res.render('wishlist', {
    title: 'wishlist',
    req
  });
});

module.exports = router;
