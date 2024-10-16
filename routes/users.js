const express = require('express');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
  res.send('List of all users');
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User with ID: ${userId}`);
});

// Create a new user
router.post('/', (req, res) => {
  res.send('Create a new user');
});

module.exports = router;
