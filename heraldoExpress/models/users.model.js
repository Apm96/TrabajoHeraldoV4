"use strict";
var dbConn = require("../config/db.config");
//User object create
var Users = function (users) {
  this.id = users.id;
  this.nombre = users.nombre;
  this.direccion = users.direccion;
  this.telefono = users.telefono;
  this.user = users.user;
  this.password = users.password;
  this.correo = users.correo;
};
Users.create = function (newUsers, result) {
  dbConn.query("INSERT INTO users set ?", newUsers, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Users.findById = function (id, result) {
  dbConn.query("Select * from users where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Users.findAll = function (result) {
  dbConn.query("Select * from users", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("users : ", res);
      result(null, res);
    }
  });
};
Users.update = function (id, users, result) {
  dbConn.query(
    "UPDATE users SET nombre=?,direccion=?,telefono=?,user=?,password=?,correo=? WHERE id = ?",
    [
      users.nombre,
      users.direccion,
      users.telefono,
      users.password,
      users.correo,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Users.delete = function (id, result) {
  dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Users.login = function (user, password, result) {
  var sql =
    "Select * from users where user = '" +
    user +
    "' and password =  '" +
    password +
    "'  ";
  console.log(sql);
  dbConn.query(sql, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Users;
