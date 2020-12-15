var express = require('express');
var conn = require('../conn');

exports.index = function(req, res, next) {
  res.render('my-account', { title: 'my-account' });
}

exports.login = async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;
  let sql = `select * from users where email='${email}' and password='${password}'`
  console.log(sql);
  let result = await conn.query(sql).catch(
    error => {
      res.send(error);
    }
  );
  result = result[0];
  if (result.length > 0) {
    res.send('login successfully');
  } else {
    res.render('my-account', { title: 'my-account', loginError: 'Sai tài khoản hoặc mật khẩu' });
  }
}

exports.register = async function (req, res, next) {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  let sql = `insert into users values('${email}', '${password}')`;
  console.log(sql);
  let result = await conn.query(sql).catch(
    error => {
      console.log(error);
      if (error.code === 'ER_DUP_ENTRY') {
        res.render('my-account', { title: 'my-account' , error: 'Email đã được đăng ký'});
      }
    }
  );
  res.send("Đăng ký thành công");
}