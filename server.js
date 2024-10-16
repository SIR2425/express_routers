const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data in request bodies
app.use(express.json());

// Import the routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Use the routes with their respective paths
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
