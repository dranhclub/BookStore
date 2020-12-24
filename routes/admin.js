var express = require('express');
var router = express.Router();
var productsController = require('../controllers/admin/productsController');
var authController = require('../controllers/admin/authController');

/* CHECK LOGIN */
router.use((req, res, next) => {
  const adminUser = req.cookies['adminUser'];
  console.log("req.cookies: ", req.cookies)
  console.log("check login, admin user = ", adminUser);
  
  req.adminUser = adminUser
  next();
  
});



/* HOME PAGE */
router.get('/', function (req, res, next) {
  res.redirect('admin/index')
});

router.get('/index', authController.requireAuth , function (req, res, next) {
  res.render('admin/index', { title: 'Admin dashboard', user: req.adminUser });
});

/* PRODUCTS */
router.get('/products', authController.requireAuth ,productsController.getProductsRequest);
router.get('/products/add-product', authController.requireAuth , productsController.getAddProductRequest);

/* AUTH */
router.get('/login', authController.loginGetRequest);
router.post('/login', authController.loginPostRequest);
router.get('/logout', authController.logout);

/* OTHERS */
router.get('/register', (req, res) => {
  res.render('admin/register');
});

router.get('/layout-static', (req, res) => {
  res.render('admin/layout-static', { user: req.adminUser });
});

router.get('/layout-sidenav-light', (req, res) => {
  res.render('admin/layout-sidenav-light', { user: req.adminUser });
});

router.get('/charts', (req, res) => {
  res.render('admin/charts', { user: req.adminUser });
});

router.get('/tables', (req, res) => {
  res.render('admin/tables', { user: req.adminUser });
});

router.get('/password', (req, res) => {
  res.render('admin/password');
});

router.get('/401', (req, res) => {
  res.render('admin/401');
});

router.get('/404', (req, res) => {
  res.render('admin/404');
});

router.get('/500', (req, res) => {
  res.render('admin/500');
});

module.exports = router;