const express = require('express')
const router = express.Router()
const usersController =   require('../controllers/users.controller');
// Retrieve all Users
router.get('/', usersController.findAll);
// Create a new Users
router.post('/', usersController.create);
// Retrieve a single Users with id
router.get('/:id', usersController.findById);
// Retrieve a single Users with id
router.post('/login', usersController.login);
// Update a Users with id
router.put('/:id', usersController.update);
// Delete a Users with id
router.delete('/:id', usersController.delete);
module.exports = router