var express = require('express');
var UserModel = require('../models/UserModel');

exports.index = function(req, res, next) {
  res.render('my-account', { title: 'my-account' });
}

exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  if (await UserModel.checkPassword(email, password)) {
    res.send('login successfully');
  } else {
    res.render('my-account', { title: 'my-account', loginError: 'Sai tài khoản hoặc mật khẩu' });
  }
}

exports.register = async function (req, res, next) {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  let isOK = true;
  await UserModel.create({email, password}).catch(error=>{
    console.log(error);
    res.render('my-account', { title: 'my-account' , error: 'Email đã được đăng ký'});
    isOK = false;
  });
  if (isOK) {
    res.send("Đăng ký thành công");
  }
}