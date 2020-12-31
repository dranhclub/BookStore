var UserModel = require('../models/UserModel');

exports.index = function(req, res) {
  res.render('my-account', { 
    title: 'my-account',
    req
  });
}

exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  if (await UserModel.checkPassword(email, password)) {
    res.cookie('user', { email, password });
    res.redirect('/index');
  } else {
    res.render('my-account', { 
      title: 'my-account', 
      loginError: 'Sai tài khoản hoặc mật khẩu',
      req
    });
  }
}

exports.register = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let isOK = true;
  await UserModel.create({email, password}).catch(error=>{
    console.log(error);
    res.render('my-account', { 
      title: 'my-account', 
      error: 'Email đã được đăng ký',
      req
    });      
    isOK = false;
  });
  if (isOK) {
    res.send("Đăng ký thành công");
  }
}

exports.logout = async function (req, res) {
  res.clearCookie("user");
  res.redirect("/index");
}