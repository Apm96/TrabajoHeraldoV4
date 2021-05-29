'use strict';
const Noticia = require('../models/noticia.model');
exports.findAll = function(req, res) {
    Noticia.findAll(function(err, notica) {
  if (err)
  res.send(err);
  console.log('res', notica);
  res.send(notica);
});
};
exports.create = function(req, res) {
const new_noticia = new Noticia(req.body.noticia);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Noticia.create(new_noticia, function(err, noticia) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Noticia added successfully!",data:noticia});
});
}
};
exports.findById = function(req, res) {
Noticia.findById(req.params.id, function(err, noticia) {
  if (err)
  res.send(err); 
  res.json(noticia);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Noticia.update(req.params.id, new Noticia(req.body), function(err, noticia) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Noticia successfully updated' });
});
}
};
exports.delete = function(req, res) {
Noticia.delete( req.params.id, function(err, noticia) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Noticia successfully deleted' });
});
};