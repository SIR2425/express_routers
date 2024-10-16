const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About route
router.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// export the routes as a module
module.exports = router;
