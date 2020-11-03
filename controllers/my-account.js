var express = require('express');
var conn = require('../conn');

exports.index = function(req, res, next) {
  res.render('my-account', { title: 'my-account' });
}

exports.register = function (req, res, next) {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  let sql = `insert into users values('${email}', '${password}')`;
  console.log(sql);
  conn.query(sql, (error, result)=>{
    if (error) {
      console.log(error);
      if (error.code === 'ER_DUP_ENTRY') {
        res.send("email đã tồn tại");
      }
    } else {
      res.send("register successfully");
    }
  });
}