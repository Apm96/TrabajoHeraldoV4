"use strict";
var dbConn = require("../config/db.config");
//Notias object create
var Noticia = function (noticias) {
  this.titulo = noticias.titulo;
  this.descripcion = noticias.descripcion;
  this.id_user = noticias.idUser;
  this.visible = noticias.visible;
  this.fecha_creacion = noticias.fechaCreacion;
  this.categoria = noticias.categoria;
  this.hora_noticia = noticias.horaNoticia;
  this.imagen =  noticias.imagen;
  this.resumen = noticias.resumen;
};
Noticia.create = function (newNoticia, result) {
  dbConn.query("INSERT INTO noticias set ?", newNoticia, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};
Noticia.findById = function (id, result) {
  dbConn.query("Select * from noticias where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Noticia.findAll = function (result) {
  dbConn.query("Select users.nombre AS usuario, noticias.titulo,noticias.descripcion,noticias.id_user,noticias.visible,noticias.fecha_creacion," +
  " noticias.categoria, 'hola' as imagen,noticias.resumen, noticias.id from noticias " +
  " INNER JOIN users ON users.id = noticias.id_user ", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Noticia.update = function (id, noticia, result) {
  dbConn.query(
    "UPDATE noticias SET titulo=?,descripcion=?,id_user=?,visible=?,fecha_creacion=?,categoria=?,hora_noticia=?,imagen=?,resumen=? WHERE id = ?",
    [
      noticia.titulo,
      noticia.descripcion,
      noticia.id_user,
      noticia.visible,
      noticia.fecha_creacion,
      noticia.categoria,
      noticia.imagen,
      noticia.resumen,
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
Noticia.delete = function (id, result) {
  dbConn.query("DELETE FROM noticias WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Noticia;
