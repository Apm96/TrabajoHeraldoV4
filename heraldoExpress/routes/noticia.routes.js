const express = require('express')
const router = express.Router()
const noticiaController =   require('../controllers/noticia.controller');
// Retrieve all Noticia
router.get('/', noticiaController.findAll);
// Create a new Noticia
router.post('/', noticiaController.create);
// Retrieve a single Noticia with id
router.get('/:id', noticiaController.findById);
// Update a Noticia with id
router.put('/:id', noticiaController.update);
// Delete a Noticia with id
router.delete('/:id', noticiaController.delete);
module.exports = router