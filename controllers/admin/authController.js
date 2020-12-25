const conn = require('../../conn');

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

  const sql = `select * from admin_users where email='${email}' and password='${password}'`
  console.log(sql);
  let result = await conn.query(sql).catch(
    err => {
      res.send(err);
    }
  );
  result = result[0];
  if (result.length > 0) {
    res.cookie('adminUser', {email, password, remember});
    res.redirect('index');
  } else {
    res.render('admin/login', {error: 'Wrong password or account'});
  }
}

exports.logout = function (req, res) {
  res.clearCookie("adminUser");
  res.render('admin/login');
}