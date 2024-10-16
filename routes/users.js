const express = require('express');
const router = express.Router();
const userDb = require('../database/usersDatabase');

// Get all users
router.get('/', (req, res) => {
  const users = userDb.getAllUsers();
  res.json(users);
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userDb.getUserById(userId);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Create a new user with JSON data
router.post('/', (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    const newUser = userDb.addUser(name, email);
    res.status(201).json(newUser);
  } else {
    res.status(400).send('Name and email are required');
  }
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const deletedUser = userDb.deleteUserById(userId);

  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
