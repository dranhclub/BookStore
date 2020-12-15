var express = require('express');
var router = express.Router();
var myAccountController = require('../controllers/my-account');
var shopGridController = require('../controllers/shop-grid-controller');
var indexController = require('../controllers/index-controller');
var singleProductController = require('../controllers/single-product-controller');

/* GET home page. */
router.get('/', indexController.index);
router.get('/index', indexController.index);

/* Authentication */
router.get('/my-account', myAccountController.index);
router.post('/my-account/login', myAccountController.login);
router.post('/my-account/register', myAccountController.register);

router.get('/shop-grid', shopGridController.index);
router.get('/single-product/:id', singleProductController.singleProduct);

/* Others */ 
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/blog-details', function(req, res, next) {
  res.render('blog-details', { title: 'blog-details' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'blog' });
});

router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'cart' });
});

router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'checkout' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'faq' });
});

router.get('/portfolio-details', function(req, res, next) {
  res.render('portfolio-details', { title: 'portfolio-details' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'portfolio' });
});



router.get('/team', function(req, res, next) {
  res.render('team', { title: 'team' });
});

router.get('/wishlist', function(req, res, next) {
  res.render('wishlist', { title: 'wishlist' });
});

module.exports = router;
