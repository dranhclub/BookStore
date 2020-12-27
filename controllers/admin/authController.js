const AdminUserModel = require('../../models/AdminUserModel');

exports.requireAuth = (req, res, next) => {
  if (req.adminUser) {
      next();
  } else {
      res.redirect("/admin/login");
  }
};

exports.loginGetRequest = (req, res) => {
  res.render('admin/login');
}

exports.loginPostRequest = async function(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const remember = req.body.remember; // TODO

  if (await AdminUserModel.checkPassword(email, password)) {
    res.cookie('adminUser', { email, password, remember });
    res.redirect('index');
  } else {
    res.render('admin/login', {error: 'Wrong password or account'});
  }
}

exports.logout = function (req, res) {
  res.clearCookie("adminUser");
  res.render('admin/login');
}