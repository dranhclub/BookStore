var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Book Store' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Book Store' });
});

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

router.get('/my-account', function(req, res, next) {
  res.render('my-account', { title: 'my-account' });
});

router.get('/portfolio-details', function(req, res, next) {
  res.render('portfolio-details', { title: 'portfolio-details' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'portfolio' });
});

router.get('/shop-grid', function(req, res, next) {
  res.render('shop-grid', { title: 'shop-grid' });
});

router.get('/single-product', function(req, res, next) {
  res.render('single-product', { title: 'single-product' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'team' });
});

router.get('/wishlist', function(req, res, next) {
  res.render('wishlist', { title: 'wishlist' });
});

module.exports = router;
